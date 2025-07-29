<script lang="ts">
	import ScrollDownArrow from '$lib/components/ScrollDownArrow.svelte';
	import cooklyBannerImg from '$lib/images/Cookly_Banner.png';
	import jcmBannerImg from '$lib/images/JCM_Banner.png';
	import ubucBannerImg from '$lib/images/UBUC_Banner.png';
	import { blur } from 'svelte/transition';
</script>

<div
	class="flex h-full w-full flex-col items-center justify-center justify-items-center"
	transition:blur
>
	<h1 class="text-8xl font-bold text-white">Projects</h1>
	<h2 class="mt-2 text-3xl font-semibold text-gray-200">
		Professional, personal and hobby projects.
	</h2>
	<ScrollDownArrow />
</div>

<div class="flex w-full flex-col">
	<div class="flex w-full">
		<div class="w-full">
			<img class="h-full" src={jcmBannerImg} alt="Cookly App and logo" />
		</div>
		<div class="flex w-full flex-col justify-center">
			<div class="h-full flex-col px-24 py-24">
				<h1 class="text-6xl font-bold text-white">JCM Group</h1>
				<div class="mt-4 flex justify-between">
					<a
						href="https://jcmconsulting.co.uk/"
						target="_blank"
						class="custom-gradient rounded-4xl flex px-4 py-2 font-semibold"
					>
						<div class="mr-2 flex items-center justify-between">
							<span class="iconify iconoir--arrow-up-right-square text-2xl text-white"></span>
						</div>
						<p>Website</p>
					</a>
				</div>
				<p class="mt-4 text-lg text-white">
					Freelance development work for a consulting and project management firm.
				</p>
				<p class="mt-4 text-lg font-semibold text-white">My Contributions:</p>
				<ul class="list-disc pl-6">
					<li class="text-white">Designed the site to my client's specifications.</li>
					<li class="text-white">
						Developed a responsive and clean UI that worked on all screen sizes.
					</li>
					<li class="text-white">Built with SvelteKit</li>
					<li class="text-white">
						Provided technical support during the website deployment process.
					</li>
					<li class="text-white">
						Supported my client in configuring their DNS records and SSL certificates.
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="flex w-full">
		<div class="flex w-full flex-col justify-center">
			<div class="h-full flex-col px-24 py-24">
				<h1 class="text-6xl font-bold text-white">Cookly</h1>
				<div class="mt-4 flex justify-between">
					<a
						href="https://cookly.co.uk/"
						target="_blank"
						class="custom-gradient rounded-4xl flex px-4 py-2 font-semibold"
					>
						<div class="mr-2 flex items-center justify-between">
							<span class="iconify iconoir--arrow-up-right-square text-2xl text-white"></span>
						</div>
						<p>Website</p>
					</a>
				</div>
				<p class="mt-4 text-lg text-white">
					A recipe and nutrition app developed as part of a startup.
				</p>
				<p class="mt-4 text-lg font-semibold text-white">My Contributions:</p>
				<ul class="list-disc pl-6">
					<li class="text-white">Built with React Native and Redux for mobile platforms.</li>
					<li class="text-white">
						Designed and implemented a graph database for efficient recipe storage.
					</li>
					<li class="text-white">Deployed backend infrastructure on AWS.</li>
				</ul>
			</div>
		</div>
		<div class="w-full">
			<img class="h-full" src={cooklyBannerImg} alt="Cookly App and logo" />
		</div>
	</div>
	<div class="flex w-full">
		<div class="w-full">
			<img class="h-full" src={ubucBannerImg} alt="UBUC app images and logo" />
		</div>
		<div class="flex w-full flex-col justify-center">
			<div class="h-full flex-col px-24 py-24">
				<h1 class="text-6xl font-bold text-white">UBUC Inventory System</h1>
				<div class="mt-4 flex">
					<a
						href="https://ubuc-inventory-system.firebaseapp.com/"
						target="_blank"
						class="custom-gradient rounded-4xl flex px-4 py-2 font-semibold"
					>
						<div class="mr-2 flex items-center justify-between">
							<span class="iconify iconoir--arrow-up-right-square text-2xl text-white"></span>
						</div>
						<p>Website</p>
					</a>
					<a
						href="https://ubuc.org/"
						target="_blank"
						class="custom-gradient rounded-4xl ml-2 flex px-4 py-2 font-semibold"
					>
						<div class="mr-2 flex items-center justify-between">
							<span class="iconify iconoir--arrow-up-right-square text-2xl text-white"></span>
						</div>
						<p>Client</p>
					</a>
				</div>
				<p class="mt-4 text-lg text-white">
					A multi-platform inventory management system built for the University of Bristol
					Underwater Club.
				</p>
				<p class="mt-4 text-lg font-semibold text-white">My Contributions:</p>
				<ul class="list-disc pl-6">
					<li class="text-white">Built with ReactJS, TypeScript, and Firebase.</li>
					<li class="text-white">Implemented secure authentication and multi-user access.</li>
					<li class="text-white">
						Architected and implemented a NoSQL document-based database using Firebase.
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div class="flex w-full flex-col items-center justify-center py-8">
	<a href="https://www.vecteezy.com/free-png/horizontal" class="text-xs text-gray-400"
		>Horizontal PNGs by Vecteezy</a
	>
</div>
