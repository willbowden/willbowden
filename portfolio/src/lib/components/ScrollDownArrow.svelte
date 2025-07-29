<script>
	import { scrollDown } from '$lib/ScrollDown';
</script>

<div
	class="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 -translate-y-12 items-center justify-center"
>
	<button
		class="rounded-lg p-2 hover:bg-white/[.4]"
		onclick={scrollDown}
		aria-label="scroll to content"
	>
		<span class="iconify iconoir--arrow-down text-6xl text-white"></span>
	</button>
</div>
