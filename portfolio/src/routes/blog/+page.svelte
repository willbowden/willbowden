<script lang="ts">
	import ScrollDownArrow from '$lib/components/ScrollDownArrow.svelte';
	import { blur } from 'svelte/transition';
	import PostCard from './PostCard.svelte';

	export let data;
</script>

<div
	class="relative flex h-full w-full flex-col items-center justify-center justify-items-center"
	transition:blur
>
	<h1 class="text-8xl font-bold text-white">Blog</h1>
	<h2 class="mt-2 text-3xl font-semibold text-gray-200">Posts about anything and everything.</h2>
	<ScrollDownArrow />
</div>

<div class="w-full px-12 py-12">
  {#if data.posts === undefined || data.posts.length == 0}
    <div class="min-h-76">
      <h1 class="text-white text-6xl font-bold">There's nothing here!</h1>
      <h2 class="text-white text-lg flex mt-4">
        Voice your frustration at my lack of blog posts to <p class="italic ml-1 text-teal-300">mail@willbowden.dev</p>
      </h2>
    </div>
  {/if}
	<div class="grid grid-cols-3 gap-4">
		{#each data.posts as post}
			<PostCard {...post.metadata} path={post.path} />
		{/each}
	</div>
</div>
