import { invalid, type Actions } from '@sveltejs/kit';
import Surreal from "surrealdb.js"

const db = new Surreal('http://127.0.0.1:8000/rpc');

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const { username, password, scope } = { username: data.get("username"), password: data.get("password"), scope: data.get("scope") }
    if (!username) throw invalid(400, { username, invalid: true })
    if (!password) throw invalid(400, { password, invalid: true })
    if (!scope) throw invalid(400, { scope, invalid: true })

    // prevent other scopes from being used
    if (scope !== "student" && scope !== "teacher" && scope !== "admin") {
      throw invalid(400, { scope, invalid: true, message: 'a scope must be a student, teacher, or an admin' })
    }
  
    try {
      cookies.set('sessionid', await db.signin({
        NS: "profertis",
        DB: "profertis",
        SC: scope,
        username,
        pass: password,
      }));

      return { success: true }
    } catch {
      return { success: false }
    }
  }
}