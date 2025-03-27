<script lang="ts">
	const { post } = $props();

  console.log(post);
</script>

<a href={`/blog/${post.slug}`} class="group block">
	<div class="rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors backdrop-blur-sm">
		<div class="aspect-[1.91/1] relative">
			<div class="absolute inset-0 bg-background/50"></div>
      <img src={post.image} alt={post.title} class="w-full h-full object-cover" />
			<div class="absolute bottom-4 left-4 flex flex-col gap-1">
				<p class="text-sm text-muted">{post.date}</p>
				<h2 class="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{post.title}</h2>
			</div>
		</div>
		<div class="p-4 bg-secondary">
			<p class="text-muted">{post.blurb}</p>
		</div>
	</div>
</a>
