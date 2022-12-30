<script>
	import { base } from '$app/paths';

	export let posts;
</script>

<ul>
	{#each posts as { metadata, path }}
		<li><a href="{base}/blog/{path}">{metadata.title}</a></li>
	{/each}
</ul>
