<script>
	export let data;

	let { tags } = data;
</script>

<h1>Tags</h1>

<p>Click on a tag to see featured blog posts:</p>

<ul>
	{#each tags as tag}
		<li>
			<a href="/tags/{tag}">{tag}</a>
		</li>
	{/each}
</ul>
