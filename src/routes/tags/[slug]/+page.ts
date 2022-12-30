// src/routes/[tags]/+page.ts
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const { slug } = params;
	return {
		slug
	};
}
