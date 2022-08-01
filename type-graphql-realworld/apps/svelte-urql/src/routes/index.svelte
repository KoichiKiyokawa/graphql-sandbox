<script lang="ts">
	import { client } from '$lib/graphql/client';
	import { queryStore } from '@urql/svelte';
	import {
		ArticleCreateInput,
		CreateArticleDocument,
		GetArticlesDocument,
		IncrementLikeDocument
	} from 'src/generated';

	const getArticleWithAuthorOperation = queryStore({ client, query: GetArticlesDocument });

	let form = {} as ArticleCreateInput;

	$: currentUserId = $getArticleWithAuthorOperation.data?.articles[0].author.id;

	let submitting = false;
	async function onSubmit() {
		submitting = true;
		const { error } = await client
			.mutation(CreateArticleDocument, {
				data: {
					...form,
					author: { connect: { id: currentUserId } }
				}
			})
			.toPromise();
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

	{#each $getArticleWithAuthorOperation.data?.articles ?? [] as article (article.slug)}
		<ul>
			<li>title: {article.title}</li>
			<li>body: {article.body}</li>
			<li>
				<button
					on:click={() => {
						client.mutation(IncrementLikeDocument, {
							articleSlug: article.slug,
							userId: currentUserId ?? ''
						});
					}}>いいね: {article._count?.likes ?? 0}</button
				>
			</li>
		</ul>
	{/each}
{/if}
