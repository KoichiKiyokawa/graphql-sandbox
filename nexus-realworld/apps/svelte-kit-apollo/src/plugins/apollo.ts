import * as pkg from '@apollo/client';
const { ApolloClient, InMemoryCache } = pkg;

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'http://localhost:4000'
});

export default client;
