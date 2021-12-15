import { gql, operationStore } from '@urql/svelte';
import type {
	CreateArticleMutation,
	CreateArticleMutationVariables,
	CreateLikeMutation,
	CreateLikeMutationVariables
} from 'src/generated';

const CREATE_ARTICLE = gql`
	mutation CreateArticle($data: ArticleCreateInput!) {
		createArticle(data: $data) {
			slug
		}
	}
`;

const CREATE_LIKE = gql`
	mutation CreateLike($data: LikeCreateInput!) {
		createLike(data: $data) {
			id
			userId
		}
	}
`;

export const createArticleOperation = operationStore<
	CreateArticleMutation,
	CreateArticleMutationVariables
>(CREATE_ARTICLE);

export const createLikeOperation = operationStore<CreateLikeMutation, CreateLikeMutationVariables>(
	CREATE_LIKE
);
