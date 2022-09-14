import Surreal from "surreal";
import * as log from "log";
import "./router.ts"
import { queries } from "./setup.ts";

const db = new Surreal('http://localhost:8000/rpc', {});

async function main() {
    log.debug("Logging in...")
    await db.signin({
        user: 'root',
        pass: 'root',
    });

    await db.wait();
    
    log.debug("Logged in to SurrealDB.")

    // Select a specific namespace / database
	await db.use('profertis', 'profertis');

    log.debug("Using profertis/profertis");

    for (const query of queries) {
        await db.query(query.replaceAll("\n", " ").replace("	", " "), {})
    }
}

main();