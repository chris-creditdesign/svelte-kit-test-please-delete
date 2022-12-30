<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let { tags } = data;
</script>

<h1>{data.title}</h1>

<svelte:component this={data.content} />

<ul>
	{#each tags as tag}
		<li>
			<a href="/tags/{tag}">{tag}</a>
		</li>
	{/each}
</ul>

<ul>
	{#each data.posts as { metadata, path }}
		<li><a href="/blog/{path}">{metadata.title}</a></li>
	{/each}
</ul>
