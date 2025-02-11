<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';

	let { children } = $props();

	let darkMode = $state(true);

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<div class="flex justify-between p-4 text-black dark:text-white">
	<div class="ml-2 flex justify-evenly align-middle text-2xl font-semibold">
		<nav>
			<a href="/" class={page.route.id === '/' ? '' : 'text-gray-400'}>Home</a>
			<a
				href="/projects"
				class={page.route.id === '/projects' ? '' : 'text-gray-400'}>Projects</a
			>
			<a href="/blog" class={page.route.id === '/blog' ? '' : 'text-gray-400'}
				>Blog</a
			>
		</nav>
	</div>

	<div class="flex justify-end align-middle">
		<a
			aria-label="github profile"
			href="https://github.com/willbowden"
			target="_blank"
			class="h-8 rounded-sm p-0.5 hover:bg-gray-200 hover:dark:bg-gray-900"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="-2.75 -2.75 30 30"
				class="fill-black dark:fill-white"
				><path
					d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
				/></svg
			>
		</a>
		<a
			aria-label="LinkedIn profile"
			href="https://www.linkedin.com/in/will-bowden-4b6787223/"
			target="_blank"
			class="h-8 rounded-sm p-0.5 hover:bg-gray-200 hover:dark:bg-gray-900"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				width="100%"
				height="100%"
				viewBox="0 0 30 30"
				class="fill-blue-700 dark:fill-white"
			>
				<path
					d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
				></path>
			</svg>
		</a>

		<button
			aria-label="toggle dark mode"
			class="h-8 rounded-sm p-1 hover:bg-gray-200 hover:dark:bg-gray-900"
			onclick={handleSwitchDarkMode}
		>
			{#if !darkMode}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					viewBox="0 -960 960 960"
					fill="#5f6368"
					><path
						d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"
					/></svg
				>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100%"
					height="100%"
					viewBox="0 -960 960 960"
					fill="#5f6368"
					><path
						d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"
					/></svg
				>
			{/if}
		</button>
	</div>
</div>

{@render children()}
