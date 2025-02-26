<script lang="ts">
	const { post } = $props();

  console.log(post);
</script>

<a href={`/blog/${post.slug}`} class="group block">
	<div class="rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors backdrop-blur-sm">
		<div class="aspect-[1.91/1] bg-gray-900/80 relative">
      <img src={post.image} alt={post.title} class="w-full h-full object-cover" />
			<div class="absolute bottom-4 left-4 flex flex-col gap-1">
				<p class="text-sm text-gray-300">{post.date}</p>
				<h2 class="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{post.title}</h2>
			</div>
		</div>
		<div class="p-4 bg-gray-950/90">
			<p class="text-gray-300">{post.blurb}</p>
		</div>
	</div>
</a>
