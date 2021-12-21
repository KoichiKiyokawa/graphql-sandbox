<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { client } from '$lib/graphql/client';
	import { getMeOperation } from '$lib/graphql/mutations/auth';
	import { currentUser } from '$lib/stores/currentUser';
	import { query, setClient } from '@urql/svelte';

	setClient(client);
	query(getMeOperation);
	$: $currentUser = $getMeOperation.data?.me ?? null;
</script>

<Header />
<main>
	<slot />
</main>

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
