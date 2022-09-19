import { redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async function ({ cookies }) {
    const token = cookies.get("sessionid")
    if (token) {
        return { token }
    }

    throw redirect(307, "/login")
}