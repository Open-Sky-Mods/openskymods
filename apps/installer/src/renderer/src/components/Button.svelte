<script lang="ts">
  export let primary = false;
</script>

<button
  on:click
  class=" p-2 {primary
    ? 'bg-cyan-700 hover:bg-cyan-600 active:bg-cyan-500'
    : 'bg-gray-700 hover:bg-gray-800 active:bg-gray-900'} transition rounded-lg"><slot /></button
>
