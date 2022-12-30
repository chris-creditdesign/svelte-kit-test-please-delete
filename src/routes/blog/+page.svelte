<script>
	import PostList from '$lib/PostList/index.svelte';

	export let data;

	const { posts } = data;
</script>

<h1>Blog!!!</h1>

<p>This is the start of by blog</p>

<PostList {posts} />
