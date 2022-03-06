<script lang="ts">
	import { GetArticles } from '../graphql/generated';

	const articles = GetArticles({});
</script>

{#if $articles.loading}
	<span>Loading...</span>
{:else}
	{#each $articles.data.articles as article}
		<h2>{article.title}</h2>
		<p>{article.description}</p>
		<p>{article.body}</p>
	{/each}
{/if}
