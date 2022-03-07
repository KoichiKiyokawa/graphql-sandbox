<script lang="ts">
	import { getNodes } from 'src/utils';
	import { GetArticles } from '../graphql/generated';

	const articlesQuery = GetArticles({});
</script>

{#if $articlesQuery.loading}
	<span>Loading...</span>
{:else}
	{#each getNodes($articlesQuery.data.articles) as article}
		<h2>{article.title}</h2>
		<p>{article.description}</p>
		<p>{article.body}</p>
	{/each}
{/if}
