export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export async function load({ url }) {
	const posts_glob = import.meta.glob('./blog/posts/*.md');
	const post_entries = Object.entries(posts_glob);

	const posts = await Promise.all(
		post_entries.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(13, -3);

			return {
				metadata,
				path: postPath
			};
		})
	);

	const tags = [...new Set(posts.flatMap((post) => post.metadata.tags))];

	const currentRoute = url.pathname;

	return { currentRoute, posts, tags };
}
