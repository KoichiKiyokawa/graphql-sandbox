<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import { client } from '$lib/graphql/client';
	import { setClient } from '@urql/svelte';

	setClient(client);
</script>

<Header />
<main>
	<slot />
</main>
