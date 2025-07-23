<script lang="ts">
	import { onMount } from 'svelte';
	import { CircuitLine } from '$lib/CircuitLine';

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;

	let width: number;
	let height: number;

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

<div class="flex h-full w-full justify-center">
	<canvas bind:this={canvas} {width} {height} class="fixed left-0 top-0 z-[-1] h-full w-full"
	></canvas>
	<div>
		<h1 class="mt-24 text-9xl font-bold text-white">Hi!</h1>
		<h2 class="text-end text-7xl font-bold italic text-white">I'm Will,</h2>
		<p class="text-2xl font-semibold">
			A Computer Science student and software engineer from the UK.
		</p>
	</div>
</div>
