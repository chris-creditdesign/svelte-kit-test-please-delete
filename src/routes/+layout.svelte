<script>
	import { fade } from 'svelte/transition';
	import Header from '$lib/Header/index.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<Header />

{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
		<slot />
	</main>
{/key}
