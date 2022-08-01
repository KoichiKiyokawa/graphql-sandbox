<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { client } from '$lib/graphql/client';
	import { currentUser } from '$lib/stores/currentUser';
	import { queryStore } from '@urql/svelte';
	import { GetMeDocument } from 'src/generated';

	const getMeOperation = queryStore({ client, query: GetMeDocument });
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
