import { gql, operationStore } from '@urql/svelte';
import type {
	CreateArticleMutation,
	CreateArticleMutationVariables,
	IncrementLikeMutation,
	IncrementLikeMutationVariables
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

export const createArticleOperation = operationStore<
	CreateArticleMutation,
	CreateArticleMutationVariables
>(CREATE_ARTICLE);

export const incrementLikeOperation = operationStore<
	IncrementLikeMutation,
	IncrementLikeMutationVariables
>(INCREMENT_LIKE);
