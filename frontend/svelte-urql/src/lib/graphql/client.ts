import { createClient } from '@urql/svelte';

export const client = createClient({
	url: 'http://localhost:4000/graphql',
	fetchOptions: {
		credentials: 'include',
		mode: 'cors',
		// https://github.com/apollographql/apollo-server/issues/5775#issuecomment-936896592
		headers: {
			'x-forwarded-proto': 'https'
		}
	}
});
