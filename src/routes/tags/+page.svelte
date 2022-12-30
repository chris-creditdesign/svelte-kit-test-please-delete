<script>
	import TagList from '$lib/TagList/index.svelte';

	export let data;

	let { tags } = data;
</script>

<h1>Tags</h1>

<p>Click on a tag to see featured blog posts:</p>

<TagList {tags} />
