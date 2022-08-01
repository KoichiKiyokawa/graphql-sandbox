<script lang="ts">
	import { goto } from '$app/navigation';
	import { client } from '$lib/graphql/client';
	import { currentUser } from '$lib/stores/currentUser';
	import { LogoutDocument } from 'src/generated';

	async function handleLogout() {
		const { error } = await client.mutation(LogoutDocument).toPromise();
		if (error) return alert(error.message);

		$currentUser = null;

		goto('/login');
	}
</script>

<nav class="flex items-center bg-indigo-400 px-4 py-2">
	<a href="/" class="text-2xl text-white">svelte-urql</a>
	<ul class="flex ml-auto space-x-2 text-white">
		{#if $currentUser === null}
			<li><a href="/login">login</a></li>
		{:else}
			<li><button on:click={handleLogout}>logout</button></li>
		{/if}
	</ul>
</nav>
