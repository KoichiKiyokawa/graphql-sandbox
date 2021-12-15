import { gql, operationStore } from '@urql/svelte';
import type { CreateArticleMutation, CreateArticleMutationVariables } from 'src/generated';

const CREATE_ARTICLE = gql`
	mutation CreateArticle($data: ArticleCreateInput!) {
		createArticle(data: $data) {
			slug
		}
	}
`;

export const createArticleOperation = operationStore<
	CreateArticleMutation,
	CreateArticleMutationVariables
>(CREATE_ARTICLE);
