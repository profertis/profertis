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
    const queryBits = query.split(";")
      .map((queryBit) => queryBit.trim())
      .filter((queryBit) => queryBit.length !== 0)
      .map((queryBit) => queryBit.replaceAll("\n", " ").replace("	", " "));
    for (const queryBit of queryBits) {
      try {
        await database.query(queryBit, {});
      } catch (e) {
        console.log(queryBit);
        console.error(e);
        Deno.exit();
      }
    }
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
      const districts = (await database.query("SELECT name FROM district", {}))[0].result.map(record => record.name);
      if (districts.length === 0) {
        console.log("No districts found. Create one first!");
        prompt(database);
      }

      const district = await Select.prompt({
        message: "District?",
        options: districts,
      });

      const school = await Input.prompt("School Name?");

      await database.query(
        "CREATE school SET district = type::thing('district', $district)",
        {
          school,
          district,
        },
      );

      const username = "superadmin"
      const password = getRandomString(32); // we'll randomly generate a password and allow the admin to change it later on.

      await database.signup({
        NS: "profertis",
        DB: "profertis",
        SC: "admin",
        username,
        password,
      });

      console.log(
        `Generated! Username:'${username}' Password: ${password} | Send this to the recipient.`,
      );
    } else {
      const name = await Input.prompt("District name?");

      await database.query("CREATE district SET name = <string> $name;", { name });

      console.log("Created district " + name + "!");
    }
  } else if (action == "list") {
    const type = await Select.prompt({
      message: "List disctricts or schools?",
      options: ["district", "school"],
    });

    if (type == "district") {
      console.log((await db.query("SELECT name FROM district", {}))[0].result.map(record => record.name).join(", "))
    } else {
      console.log((await db.query("SELECT name FROM school", {}))[0].result.map(record => record.name).join(", "))
    }
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
