<script lang="ts">
	import { goto } from '$app/navigation';
	import { loginOperation } from '$lib/graphql/mutations/auth';
	import { currentUser } from '$lib/stores/currentUser';
	import { mutation } from '@urql/svelte';

	let form = {} as { email: string; password: string };

	const login = mutation(loginOperation);
	async function onSubmit() {
		const { data, error } = await login(form);
		if (error) return alert(error.message);
		if (!data) return;

		$currentUser = { id: data.login.id, name: data.login.name };
		goto('/');
	}
</script>

<form on:submit|preventDefault={onSubmit}>
	<label>email: <input type="email" name="email" bind:value={form.email} /></label>
	<label>password: <input type="password" name="password" bind:value={form.password} /></label>
	<button>login</button>
</form>
