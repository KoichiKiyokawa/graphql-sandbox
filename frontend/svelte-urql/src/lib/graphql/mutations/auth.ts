import { gql, operationStore } from '@urql/svelte';
import type {
	GetMeQuery,
	LoginMutation,
	LoginMutationVariables,
	LogoutMutation
} from 'src/generated';

export const loginOperation = operationStore<LoginMutation, LoginMutationVariables>(gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			id
			name
		}
	}
`);

export const logoutOperation = operationStore<LogoutMutation>(gql`
	mutation Logout {
		logout
	}
`);

export const getMeOperation = operationStore<GetMeQuery>(gql`
	query GetMe {
		me {
			id
			name
			email
		}
	}
`);
