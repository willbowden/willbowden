import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const post = await import(`../../../posts/${params.slug}`);

	if (!post || !post.metadata.published) {
		throw error(404); // Couldn't resolve the post
	}

	return {post};
};