import { gql, operationStore } from '@urql/svelte';
import type {
	CreateArticleMutation,
	CreateArticleMutationVariables,
	IncrementLikeMutation,
	IncrementLikeMutationVariables,
	LoginMutation,
	LoginMutationVariables,
	LogoutMutation
} from 'src/generated';

const CREATE_ARTICLE = gql`
	mutation CreateArticle($data: ArticleCreateInput!) {
		createArticle(data: $data) {
			slug
		}
	}
`;

const INCREMENT_LIKE = gql`
	mutation IncrementLike($userId: String!, $articleSlug: String!) {
		updateArticle(
			data: { likes: { create: { user: { connect: { id: $userId } } } } }
			where: { slug: $articleSlug }
		) {
			slug
		}
	}
`;

const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			id
		}
	}
`;

const LOGOUT = gql`
	mutation Logout {
		logout
	}
`;

export const createArticleOperation = operationStore<
	CreateArticleMutation,
	CreateArticleMutationVariables
>(CREATE_ARTICLE);

export const incrementLikeOperation = operationStore<
	IncrementLikeMutation,
	IncrementLikeMutationVariables
>(INCREMENT_LIKE);

export const loginOperation = operationStore<LoginMutation, LoginMutationVariables>(LOGIN);

export const logoutOperation = operationStore<LogoutMutation>(LOGOUT);
