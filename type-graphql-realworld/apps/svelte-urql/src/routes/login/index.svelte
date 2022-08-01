<script lang="ts">
	import { goto } from '$app/navigation';
	import { client } from '$lib/graphql/client';
	import { currentUser } from '$lib/stores/currentUser';
	import { LoginDocument } from 'src/generated';

	let form = {} as { email: string; password: string };

	async function onSubmit() {
		const { data, error } = await client.mutation(LoginDocument, form).toPromise();
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
