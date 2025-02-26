import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const posts = await import.meta.glob(
		'../../posts/*.svx',
		{ eager: true }
	);

  if (!posts) {
    throw error(404);
  };

  const metadata = Object.entries(posts).map(([path, post]: [string, any]) => {
    const slug = path.split('/').pop()?.replace('.svx', '');
    return { ...post.metadata, slug };
  });

  return { metadata };
};