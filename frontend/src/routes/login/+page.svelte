<script lang="ts">
	import { enhance } from '$app/forms';
	import { flash } from "$lib/flash"
	
	export let schools = ["school"];

	// can either be null, form.invalid = true, form.missing = true & form.(username | password | scope) = null
	export let form: { invalid?: boolean, missing?: boolean, username?: null, password?: null, scope?: null, message?: string } | null = null;
</script>

<div class="d-flex align-items-center justify-content-center vh-100">
	<div class="sliding-background" />
	<div class="card col-9 col-sm-6 col-lg-4 p-3 rounded-4">
		<form method="POST">
			<div class="card-body">
				<h1 class="card-title mb-4">Login</h1>
				{#if form?.invalid}
					{#key form}
						<p use:flash>{form?.message}</p>
					{/key}
				{/if}
				<div class="mb-3">
					<label for="username" class="form-label">Username</label>
					<input
						type="text"
						class="form-control"
						name="username"
						id="username"
						required
						aria-required="true"
						autocomplete="off"
					/>
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input
						type="password"
						class="form-control"
						id="password"
						name="password"
						required
						aria-required="true"
					/>
				</div>
				<div class="mb-3">
					<label for="school" class="form-label">School</label>
					<select
						id="school"
						class="form-select"
						aria-label="Select your school"
						required
						name="school"
						aria-required="true"
					>
						
					<option selected value="none">None Selected</option>
						{#each schools as school}
							<!-- TODO add client-side hint that the school isn't none. If you dont know how to do this leave a noSchool: boolean variable -->
							<option value={school}>{school}</option>
						{/each}
					</select>
				</div>
				<div class="mb-3">
					<label for="type" class="form-label">Role</label>
					<select
						id="type"
						class="form-select"
						aria-label="Select your role"
						required
						name="scope"
						aria-required="true"
					>
						<option selected value="student">Student</option>
						<option value="teacher">Teacher</option>
						<option value="admin">Administrator</option>
					</select>
				</div>
				<button class="btn btn-primary w-100" type="submit">Login</button>
			</div>
		</form>
	</div>
</div>

<style>
	

	.sliding-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1600' height='900' preserveAspectRatio='none' viewBox='0 0 1600 900'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1494%26quot%3b)' fill='none'%3e%3crect width='1600' height='900' x='0' y='0' fill='rgba(47%2c 108%2c 156%2c 1)'%3e%3c/rect%3e%3cuse xlink:href='%23SvgjsSymbol1501' x='0' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1501' x='0' y='720'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1501' x='720' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1501' x='720' y='720'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1501' x='1440' y='0'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsSymbol1501' x='1440' y='720'%3e%3c/use%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1494'%3e%3crect width='1600' height='900' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpath d='M-1 0 a1 1 0 1 0 2 0 a1 1 0 1 0 -2 0z' id='SvgjsPath1498'%3e%3c/path%3e%3cpath d='M-3 0 a3 3 0 1 0 6 0 a3 3 0 1 0 -6 0z' id='SvgjsPath1499'%3e%3c/path%3e%3cpath d='M-5 0 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0z' id='SvgjsPath1495'%3e%3c/path%3e%3cpath d='M2 -2 L-2 2z' id='SvgjsPath1496'%3e%3c/path%3e%3cpath d='M6 -6 L-6 6z' id='SvgjsPath1497'%3e%3c/path%3e%3cpath d='M30 -30 L-30 30z' id='SvgjsPath1500'%3e%3c/path%3e%3c/defs%3e%3csymbol id='SvgjsSymbol1501'%3e%3cuse xlink:href='%23SvgjsPath1495' x='30' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='30' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='30' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='30' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='30' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='30' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='30' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='30' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='30' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='30' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='30' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='30' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='90' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='90' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='90' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='90' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='90' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='90' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='90' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='90' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='90' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='90' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='90' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='90' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='150' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='150' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='150' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1500' x='150' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='150' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='150' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='150' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='150' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='150' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='150' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='150' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='150' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='210' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='210' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='210' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='210' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='210' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='210' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='210' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='210' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='210' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='210' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='210' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='210' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='270' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='270' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='270' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='270' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='270' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='270' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='270' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='270' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='270' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='270' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='270' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='270' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='330' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='330' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='330' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='330' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='330' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='330' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1500' x='330' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='330' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='330' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='330' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='330' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='330' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='390' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='390' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='390' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='390' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='390' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1500' x='390' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='390' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='390' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='390' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='390' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='390' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1500' x='390' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='450' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='450' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='450' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='450' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='450' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='450' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='450' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='450' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='450' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='450' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='450' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='450' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='510' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='510' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='510' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='510' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='510' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='510' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='510' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='510' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='510' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='510' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='510' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='510' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='570' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='570' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='570' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='570' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='570' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='570' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='570' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='570' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='570' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='570' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='570' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1499' x='570' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='630' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='630' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='630' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='630' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='630' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='630' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='630' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1500' x='630' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)' stroke-width='3'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='630' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='630' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='630' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1496' x='630' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='690' y='30' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='690' y='90' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='690' y='150' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1498' x='690' y='210' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='690' y='270' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='690' y='330' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='690' y='390' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1497' x='690' y='450' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='690' y='510' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='690' y='570' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='690' y='630' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3cuse xlink:href='%23SvgjsPath1495' x='690' y='690' stroke='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/use%3e%3c/symbol%3e%3c/svg%3e")
			repeat;
		background-position: 0 0;
		background-size: auto 100%;
		animation: slide 60s linear infinite;
	}

	@keyframes slide {
		0% {
			background-position: 0 0;
		}
		100% {
			background-position: -1600px 1600px;
		}
	}
</style>
