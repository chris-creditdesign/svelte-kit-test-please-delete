/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const post = await import(`../posts/${params.slug}.md`);
	const { title, pubDate } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		pubDate
	};
}
