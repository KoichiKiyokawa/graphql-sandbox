<script lang="ts">
	import { createArticleOperation } from '$lib/graphql/mutations';
	import { getArticleWithAuthorOperation } from '$lib/graphql/queries';
	import { mutation, query } from '@urql/svelte';
	import type { ArticleCreateInput } from 'src/generated';

	query(getArticleWithAuthorOperation);

	let form = {} as ArticleCreateInput;

	const createArticle = mutation(createArticleOperation);

	let submitting = false;
	async function onSubmit() {
		submitting = true;
		const { error } = await createArticle({
			data: {
				...form,
				author: { connect: { id: $getArticleWithAuthorOperation.data?.articles[0].author.id } }
			}
		});
		submitting = false;
		if (error) return alert(error);

		// 明示的に書かなくても，自動でフェッチしてくれる
		form = {} as ArticleCreateInput;
	}
</script>

{#if $getArticleWithAuthorOperation.fetching}
	<p>Loading...</p>
{:else}
	<form on:submit|preventDefault={onSubmit} class="border rounded p-2 mx-4 space-y-2">
		<label class="block">
			<div>title</div>
			<input name="title" bind:value={form.title} class="border" />
		</label>
		<label class="block">
			<div>body</div>
			<textarea name="body" bind:value={form.body} class="border" />
		</label>
		<button disabled={submitting} class="bg-blue-400 p-2 text-white">submit</button>
	</form>

	{#each $getArticleWithAuthorOperation.data?.articles ?? [] as article}
		<ul>
			<li>title: {article.title}</li>
			<li>body: {article.body}</li>
		</ul>
	{/each}
{/if}
