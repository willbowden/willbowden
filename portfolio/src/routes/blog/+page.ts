import type { PostMetadata } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

interface MarkdownModule {
  metadata: PostMetadata;
  default: SvelteComponent;
}


export const load = async () => {
  const glob = import.meta.glob<MarkdownModule>(`../../posts/*.svx`);

  const imageFiles = import.meta.glob('../../lib/images/*', {
    eager: true,
    import: 'default'
  });
  
  const iterablePostFiles = Object.entries(glob);

  const posts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const post: any = await resolver();

      const imagePath = post.metadata.img
        ? (imageFiles[`../../lib/images/${post.metadata.img}`] as string | undefined)
        : undefined;

      return {
        metadata: {img: imagePath, ...post.metadata},
        path: path
          .replace('../../posts/', '')
          .replace('.md', '')
      };
    })
  );

  const publishedPosts = posts.filter((post) => post.metadata.published !== false);

  return {
    posts: publishedPosts,
  };
};