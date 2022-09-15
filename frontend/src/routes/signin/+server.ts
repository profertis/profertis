import { error, json } from '@sveltejs/kit';
import Surreal from "surrealdb.js"
import type { RequestHandler } from "./$types"

const db = new Surreal('http://127.0.0.1:8000/rpc');

export async function POST({ request }) {
  const { username, password, scope } = await request.json();
  if (!username) throw error(400, 'a user must be specified')
  if (!password) throw error(400, 'a password must be specified')
  if (!scope) throw error(400, 'a scope must be specified')

  // prevent other scopes from being used
  if (scope !== "student" && scope !== "teacher" && scope !== "admin") {
    throw error(400, 'a scope must be a student, teacher, or an admin')
  }
 
  try {
    const token = await db.signin({
      NS: "profertis",
      DB: "profertis",
      SC: scope,
      username,
      pass: password,
    });

    return json({ token })
  } catch {
    throw error(401, "Invalid username, password, or scope")
  }
}