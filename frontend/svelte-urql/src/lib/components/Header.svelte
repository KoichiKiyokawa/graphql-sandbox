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

<nav>
	<a href="/">svelte-urql</a>
	<ul>
		<li><a href="/login">login</a></li>
		<li><button on:click={handleLogout}>logout</button></li>
	</ul>
</nav>
