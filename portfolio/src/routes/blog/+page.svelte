<script lang="ts">
  import PostCard from './PostCard.svelte';

  export let data;

  const metadata = data.metadata;
</script>

<div class="blog px-16 py-8">
  <h1 class="text-4xl font-bold text-white mb-8">Will's Blog</h1>
  <h2 class="text-2xl font-bold text-white mb-8 italic">A collection of dev logs, personal rants and other stuff.</h2>

  <div class="grid grid-cols-3 gap-8">
    {#each metadata as post}
      <PostCard {post} />
    {/each}
  </div>
</div>
