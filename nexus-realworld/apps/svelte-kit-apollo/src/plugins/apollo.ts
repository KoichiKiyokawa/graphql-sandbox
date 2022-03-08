// https://github.com/apollographql/apollo-client/issues/8218#issuecomment-941256676
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	uri: 'http://localhost:4000'
});

export default client;
