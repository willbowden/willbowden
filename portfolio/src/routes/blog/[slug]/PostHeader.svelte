<script lang="ts">
	const { title, date, blurb } = $props();
</script>

<div class="w-full h-full flex flex-col justify-center justify-items-center items-center">
  <h1 class="text-white text-8xl font-bold">
    {title}
  </h1>
  <h3 class="text-gray-400 text-xl font-medium">
    {date}
  </h3>
  <p class="text-cyan-600 w-[30%] text-xl text-center">
    {blurb}
  </p>
</div>
