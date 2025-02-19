<script lang="ts">
	import PostHeader from './PostHeader.svelte';

	export let data;

	const content = data.post.default;
	const metadata = data.post.metadata;
</script>

<PostHeader {...metadata} />

<div class="py-10">
	<article class="prose prose-lg prose-invert prose-pre:bg-gray-900 mx-auto w-full">
		<svelte:component this={content} />
	</article>
</div>
