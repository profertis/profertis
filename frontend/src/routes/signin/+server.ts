import { error } from '@sveltejs/kit';
import Surreal from "surrealdb.js"

const db = new Surreal('http://127.0.0.1:8000/rpc');

// TODO switch to POST & body
/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
  const username = url.searchParams.get('user');
  if (!username) throw error(400, 'a user must be specified')
  const password = url.searchParams.get('pass');
  if (!password) throw error(400, 'a password must be specified')
  const scope = url.searchParams.get('scope');
  if (!scope) throw error(400, 'a scope must be specified')
 
  try {
    return new Response(await db.signin({
      NS: "profertis",
      DB: "profertis",
      SC: scope,
      username,
      pass: password,
    }))
  } catch {
    throw error("401", "Invalid credentials")
  }
}