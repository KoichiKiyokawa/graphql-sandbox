import { gql, operationStore } from '@urql/svelte';
import type { GetArticlesQuery, GetArticlesQueryVariables } from '../../generated';
import { SortOrder } from '../../generated';

const GET_ARTICLES = gql`
	query GetArticles($orderBy: [ArticleOrderByWithRelationInput!]) {
		articles(orderBy: $orderBy) {
			slug
			title
			body
			author {
				id
				name
			}
		}
	}
`;

export const getArticleWithAuthorOperation = operationStore<
	GetArticlesQuery,
	GetArticlesQueryVariables
>(GET_ARTICLES, { orderBy: { createdAt: SortOrder.Desc } });
