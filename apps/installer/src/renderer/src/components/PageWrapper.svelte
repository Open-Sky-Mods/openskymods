<script>
  import { fade } from 'svelte/transition';
</script>

<div
  transition:fade={{ duration: 100 }}
  class="h-screen w-full flex flex-col items-center self-stretch"
>
  <slot />
</div>
