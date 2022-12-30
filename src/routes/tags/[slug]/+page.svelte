<script>
	/** @type {import('./$types').PageData} */
	export let data;

	$: filteredPosts = data.posts.filter((post) => post.metadata.tags.includes(data.slug));
</script>

<h1>{data.slug}</h1>

<ul>
	{#each filteredPosts as { path, metadata }}
		<li><a href="/blog/{path}">{metadata.title}</a></li>
	{/each}
</ul>

<ul>
	{#each data.tags as tag}
		<li>
			<a href="/tags/{tag}">{tag}</a>
		</li>
	{/each}
</ul>
