<script>
	export let data;

	const { posts } = data;
</script>

<h1>Blog!!!</h1>

<p>This is the start of by blog</p>

<ul>
	{#each posts as { metadata, path }}
		<li><a href="/blog/{path}">{metadata.title}</a></li>
	{/each}
</ul>
