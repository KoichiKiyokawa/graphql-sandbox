<script lang="ts">
	import { goto } from '$app/navigation';
	import { logoutOperation } from '$lib/graphql/mutations';
	import { mutation } from '@urql/svelte';

	const logout = mutation(logoutOperation);

	async function handleLogout() {
		const { error } = await logout();
		if (error) return alert(error.message);

		goto('/login');
	}
</script>

<nav class="flex items-center bg-indigo-400 px-4 py-2">
	<a href="/" class="text-2xl text-white">svelte-urql</a>
	<ul class="flex ml-auto space-x-2 text-white">
		<li><a href="/login">login</a></li>
		<li><button on:click={handleLogout}>logout</button></li>
	</ul>
</nav>
