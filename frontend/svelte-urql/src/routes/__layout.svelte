<script lang="ts">
	import { createClient, setClient } from '@urql/svelte';

	const client = createClient({
		url: 'http://localhost:8080/graphql'
	});
	setClient(client);
</script>

<slot />
