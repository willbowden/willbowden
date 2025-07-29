<script lang="ts">
	import { blur } from "svelte/transition";
</script>

<div class="flex h-full w-full justify-center items-center" transition:blur>
	<div>
		<h1 class="text-9xl font-bold text-white">Hi!</h1>
		<h2 class="text-end text-7xl font-bold italic text-white">I'm Will,</h2>
		<p class="text-2xl font-semibold mt-2">
			A Computer Science student and software engineer from the UK.
		</p>
		<div class="flex mt-8 justify-evenly">
			<a href="/projects" class="custom-gradient rounded-4xl flex px-6 py-4 font-semibold hover:text-teal-300">View my projects</a>
			<a href="/blog" class="custom-gradient rounded-4xl flex px-6 py-4 font-semibold hover:text-teal-300">Read my blog</a>
		</div>
	</div>
	</div>
