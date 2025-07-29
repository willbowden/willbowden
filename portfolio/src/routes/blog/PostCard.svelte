<script lang="ts">
	const { title, subtitle, date, blurb, img, path } = $props();
</script>

<a
  href={`/blog/${path}`}
	class="h-100 flex w-full flex-col items-center justify-center justify-items-center rounded-xl bg-gray-900"
>
	<div class="w-full overflow-hidden rounded-t-xl">
		<img src="src/lib/images/test.jpg" class="object-cover" alt={img} />
	</div>
	<div class="flex w-full items-center justify-between px-4 pt-2">
		<h1 class="text-4xl font-bold text-white">
			{title}
		</h1>
		<h3 class="font-medium text-gray-400">
			{date}
		</h3>
	</div>
	<div class="w-full">
		<p class="px-8 pt-2 pb-4 text-sm text-white">
			{blurb}
		</p>
	</div>
</a>
