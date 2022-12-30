<script>
	import { base } from '$app/paths';

	/** @type string[]*/
	export let tags;
</script>

<ul>
	{#each tags as tag}
		<li>
			<a href="{base}/tags/{tag}">{tag}</a>
		</li>
	{/each}
</ul>
