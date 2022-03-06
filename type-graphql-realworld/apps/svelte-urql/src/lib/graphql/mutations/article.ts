import { gql, operationStore } from '@urql/svelte';
import type {
	CreateArticleMutation,
	CreateArticleMutationVariables,
	IncrementLikeMutation,
	IncrementLikeMutationVariables
} from 'src/generated';

export const createArticleOperation = operationStore<
	CreateArticleMutation,
	CreateArticleMutationVariables
>(gql`
	mutation CreateArticle($data: ArticleCreateInput!) {
		createArticle(data: $data) {
			slug
		}
	}
`);

export const incrementLikeOperation = operationStore<
	IncrementLikeMutation,
	IncrementLikeMutationVariables
>(gql`
	mutation IncrementLike($userId: String!, $articleSlug: String!) {
		updateArticle(
			data: { likes: { create: { user: { connect: { id: $userId } } } } }
			where: { slug: $articleSlug }
		) {
			slug
		}
	}
`);
