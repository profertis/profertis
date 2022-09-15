import Surreal from "https://deno.land/x/surrealdb@v0.2.0/mod.ts";
import {
  Input,
  Select,
} from "https://deno.land/x/cliffy@v0.25.1/prompt/mod.ts";
import { queries } from "./setup.ts";

const db = new Surreal("http://localhost:8000/rpc", {});

function getRandomString(s: number) {
  if (s % 2 == 1) {
    throw new Deno.errors.InvalidData("Only even sizes are supported");
  }
  const buf = new Uint8Array(s / 2);
  crypto.getRandomValues(buf);
  let ret = "";
  for (let i = 0; i < buf.length; ++i) {
    ret += ("0" + buf[i].toString(16)).slice(-2);
  }
  return ret;
}

async function applyDefaultQueries(database: Surreal) {
  for (const query of queries) {
    await database.query(query.replaceAll("\n", " ").replace("	", " "), {});
  }
}

async function prompt(database: Surreal) {
  const action = await Select.prompt({
    message: "Create, list, or update schema?",
    options: ["create", "list", "schema"],
  });

  if (action == "create") {
    const type = await Select.prompt({
      message: "Create a disctrict a or school?",
      options: ["district", "school"],
    });

    if (type == "school") {
      const districts = await database.select("district");
      if (districts.length === 0) {
        console.log("No districts found. Create one first!");
        prompt(database);
      }

      const district = await Select.prompt({
        message: "District?",
        options: districts.map((district: { id: string }) => district.id).map((
          id: string,
        ) => id.split(":")[1]),
      });

      const school = await Input.prompt("School Name?");

      await database.query(
        "CREATE school SET district = type::thing('district', $district)",
        {
          school,
          district,
        },
      );

      const password = getRandomString(32); // we'll randomly generate a password and allow the admin to change it later on.

      await database.signup({
        NS: "profertis",
        DB: "profertis",
        SC: "admin",
        username: "superadmin",
        pass: password,
      });

      console.log(
        "Generated! Username: `superadmin` Password: " + password +
          " | Send this to the recipient.",
      );
    } else {
      const name = await Input.prompt("District name?");

      await database.create("district:" + name, {});

      console.log("Created district " + name + "!");
    }
  } else if (action == "list") {
    const type = await Select.prompt({
      message: "List disctricts or schools?",
      options: ["district", "school"],
    });

    const records = await database.select(type);

    console.log(records);
  } else if (action == "schema") {
    await applyDefaultQueries(database);
  }

  await prompt(database);
}

Deno.addSignalListener("SIGINT", async () => {
  console.log(
    "Exiting from prompt loop! (If you actually want to exit, do CTRL + D)",
  );
  await prompt(db);
});

async function main() {
  console.debug("Logging in...");
  await db.signin({
    user: "root",
    pass: "root",
  });

  await db.wait();

  console.debug("Logged in to SurrealDB.");

  // Select a specific namespace / database
  await db.use("profertis", "profertis");

  console.debug("Using profertis/profertis");

  await applyDefaultQueries(db);

  await prompt(db);
}

main();
