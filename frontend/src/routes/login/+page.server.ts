import { invalid, redirect, type Actions } from '@sveltejs/kit';
import Surreal from 'surrealdb.js';

const db = new Surreal('http://127.0.0.1:8000/rpc');

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const scope = data.get('scope');
		if (!username) return invalid(400, { username, missing: true });
		if (!password) return invalid(400, { password, missing: true });
		if (!scope) return invalid(400, { scope, missing: true });

		// prevent other scopes from being used
		if (scope !== 'student' && scope !== 'teacher' && scope !== 'admin') {
			return invalid(400, {
				scope,
				invalid: true,
				message: 'a scope must be a student, teacher, or an admin'
			});
		}

		try {
			cookies.set(
				'sessionid',
				await db.signin({
					NS: 'profertis',
					DB: 'profertis',
					SC: scope,
					username,
					pass: password
				})
			);
		} catch {
			return { invalid: true, username };
		}
		
		throw redirect(303, "/dashboard");
	}
};
