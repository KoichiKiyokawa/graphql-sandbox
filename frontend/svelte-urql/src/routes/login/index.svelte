<script lang="ts">
	import { goto } from '$app/navigation';

	import { loginOperation } from '$lib/graphql/mutations';

	import { mutation } from '@urql/svelte';

	let form = {} as { email: string; password: string };

	const login = mutation(loginOperation);
	async function onSubmit() {
		const { error } = await login(form);
		if (error) return alert(error.message);

		goto('/');
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<label>email: <input type="email" name="email" bind:value={form.email} /></label>
	<label>password: <input type="password" name="password" bind:value={form.password} /></label>
	<button>login</button>
</form>
