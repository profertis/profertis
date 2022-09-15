<script lang="ts">
	export let type: 'student' | 'teacher' | 'admin' = 'student';
	export let username = '';
	export let password = '';

	async function signin() {
		try {
			const Surreal = await import("surrealdb.js");
			const db = new new Surreal("http://localhost:8000/rpc")

			await db.signin({
				NS: 'profertis',
				DB: 'profertis',
				SC: type,
				username,
				pass: password
			})

			alert("You're signed in!")
		} catch (e) {
			alert(e + "Failed signin!")
		}
	}
</script>

<div class="text-center d-flex align-items-center pt-5 pb-5 loginContainer">
	<main class="form-signin w-100 m-auto">
		<form>
			<h1 class="h3 mb-3 fw-normal">Please sign in</h1>
			<div class="form-floating my-2">
				<!-- TODO weird spacing above select -->
				<select class="form-select" aria-label="Login Type" bind:value={type}>
					<option selected value="student">Student</option>
					<option value="teacher">Teacher</option>
					<option value="admin">Admin</option>
				</select>
			</div>
			<div class="form-floating">
				<input
					bind:value={username}
					type="email"
					class="form-control"
					id="floatingInput"
					placeholder="User123"
				/>
				<label for="floatingInput">Username</label>
			</div>
			<div class="form-floating mb-5">
				<input
					bind:value={password}
					type="password"
					class="form-control"
					id="floatingPassword"
					placeholder="Password"
				/>
				<label for="floatingPassword">Password</label>
			</div>
			<button class="w-100 btn btn-lg btn-primary" type="submit" on:click={signin}>Sign in</button>
			<p class="mt-5 mb-3 text-muted">Profertis © 2017–2022</p>
		</form>
	</main>
</div>

<style>
	.loginContainer {
		background-color: #f5f5f5;
		height: 100vh;
	}

	.form-signin {
		max-width: 330px;
		padding: 15px;
	}

	/* This prevents the highlight from being under other inputs. */
	.form-floating:focus-within {
		z-index: 2;
	}

	.form-signin input[type='email'] {
		margin-bottom: -1px;
		border-bottom-right-radius: 0;
		border-bottom-left-radius: 0;
	}

	.form-signin input[type='password'] {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
</style>
