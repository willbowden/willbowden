<script lang="ts">
  let { children } = $props();
</script>

<article class="prose prose-neutral prose-pre:bg-gray-900 w-full mx-auto">
  {@render children()}
</article>