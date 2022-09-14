import Surreal from "https://deno.land/x/surrealdb@v0.2.0/mod.ts";
import { queries } from "./setup.ts";

const db = new Surreal('http://localhost:8000/rpc', {});

async function main() {
    console.debug("Logging in...")
    await db.signin({
        user: 'root',
        pass: 'root',
    });

    await db.wait();
    
    console.debug("Logged in to SurrealDB.")

    // Select a specific namespace / database
	await db.use('profertis', 'profertis');

    console.debug("Using profertis/profertis");

    for (const query of queries) {
        await db.query(query.replaceAll("\n", " ").replace("	", " "), {})
    }
}

main();