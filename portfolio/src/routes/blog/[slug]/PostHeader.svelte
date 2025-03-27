<script lang="ts">
	const { title, subtitle, date, blurb, image } = $props();
</script>

<div 
  class="w-full h-full flex flex-col justify-center justify-items-center items-center bg-cover bg-center bg-no-repeat relative"
  style="background-image: url({image})"
>
  <div class="absolute inset-0 bg-background/70"></div>
  <div class="z-10 flex flex-col items-center">
    <h1 class="text-primary text-8xl font-bold">
      {title}
    </h1>
    <h2 class="text-muted text-4xl font-semibold">
      {subtitle}
    </h2>
    <div class="flex items-center w-[50%] gap-4 my-2">
      <div class="h-[1px] bg-gray-400 flex-grow"></div>
      <h3 class="text-muted text-xl font-medium whitespace-nowrap">
        {date}
      </h3>
      <div class="h-[1px] bg-gray-400 flex-grow"></div>
    </div>
    <p class="text-muted w-[30%] text-xl text-center">
      {blurb}
    </p>
  </div>
</div>
