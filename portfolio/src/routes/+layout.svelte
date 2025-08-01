<script lang="ts">
	import { onMount } from 'svelte';
	import { CircuitLine } from '$lib/CircuitLine';
	import '../app.css';
	import { page } from '$app/state';

	let { children } = $props();

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	let width: number = $state(0);
	let height: number = $state(0);

	let lines: Array<CircuitLine> = [];

	const TARGET_FPS = 30;
	const FRAME_DURATION = 1000 / TARGET_FPS; // ~33.33ms

	let lastTime = performance.now();
	let accumulator = 0;

	onMount(() => {
		width = window.innerWidth;
		height = window.innerHeight;
		ctx = canvas.getContext('2d')!;

		// Create multiple lines
		for (let i = 0; i < 10; i++) {
			lines.push(new CircuitLine(Math.random() * width, height));
		}

		function animate(now: number) {
			const delta = now - lastTime;
			lastTime = now;
			accumulator += delta;

			while (accumulator >= FRAME_DURATION) {
				ctx.clearRect(0, 0, width, height);
				lines.forEach((line, index) => {
					line.update();
					line.testForDying(width, height);
					if (line.dying && line.opacity <= 0) {
						lines[index] = new CircuitLine(Math.random() * width, height);
					}
					line.draw(ctx);
				});
				accumulator -= FRAME_DURATION;
			}

			requestAnimationFrame(animate);
		}

		requestAnimationFrame(animate);
	});
</script>

<div class="flex h-[7%] justify-between p-4 align-baseline text-white">
	<div>
		<nav class="ml-3 flex justify-evenly space-x-5 text-2xl font-semibold">
			<a href="/" class={`hover:text-white ${page.route.id === '/' ? '' : 'text-gray-400'}`}>Home</a
			>
			<a
				href="/projects"
				class={`hover:text-white ${page.route.id === '/projects' ? '' : 'text-gray-400'}`}
				>Projects</a
			>
			<a href="/blog" class={`hover:text-white ${page.route.id === '/blog' ? '' : 'text-gray-400'}`}
				>Blog</a
			>
		</nav>
	</div>

	<div class="flex justify-end">
		<a
			aria-label="github profile"
			href="https://github.com/willbowden"
			target="_blank"
			class="p-0.5hover:bg-gray-900 h-8 rounded-sm"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="-2.75 -2.75 30 30"
				class="fill-white"
				><path
					d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
				/></svg
			>
		</a>
		<a
			aria-label="LinkedIn profile"
			href="https://www.linkedin.com/in/will-bowden-4b6787223/"
			target="_blank"
			class="h-8 rounded-sm p-0.5 hover:bg-gray-900"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="100%"
				height="100%"
				viewBox="0 0 30 30"
				class="fill-white"
			>
				<path
					d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
				></path>
			</svg>
		</a>
	</div>
</div>

<main class="h-[93%] w-full scrollbar-hide">
	<canvas bind:this={canvas} {width} {height} class="absolute left-0 top-0 z-[-1] h-full w-full"
	></canvas>
	{@render children()}
</main>
