import { gql, operationStore } from '@urql/svelte';
import type { GetArticlesQuery } from '../../generated';

const GET_ARTICLES = gql`
	query GetArticles {
		articles(orderBy: { createdAt: desc }) {
			slug
			title
			body
			author {
				id
				name
			}
			_count {
				likes
			}
		}
	}
`;

export const getArticleWithAuthorOperation = operationStore<GetArticlesQuery>(GET_ARTICLES);
