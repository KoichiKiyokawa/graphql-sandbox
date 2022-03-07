import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'http://localhost:4000'
});

export default client;
