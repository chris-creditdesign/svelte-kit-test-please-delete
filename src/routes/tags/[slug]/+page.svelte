<script>
	import PostList from '$lib/PostList/index.svelte';
	import TagList from '$lib/TagList/index.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	let { tags } = data;

	$: filteredPosts = data.posts.filter((post) => post.metadata.tags.includes(data.slug));
</script>

<h1>{data.slug}</h1>

<PostList posts={filteredPosts} />

<TagList {tags} />
