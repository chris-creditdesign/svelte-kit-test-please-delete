<script>
	import PostList from '$lib/PostList/index.svelte';
	import TagList from '$lib/TagList/index.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let { posts, tags } = data;
</script>

<h1>{data.title}</h1>

<svelte:component this={data.content} />

<PostList {posts} />

<TagList {tags} />
