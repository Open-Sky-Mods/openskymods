<script lang="ts">
  import Button from '../../../../components/Button.svelte';

  export let dialog;
  export let variants: string[];
</script>

<dialog
  bind:this={dialog}
  on:close
  class="absolute top-1/2 left-1/2 -translate-y-1/2 bg-transparent"
>
  <div class="bg-slate-600 text-white flex flex-col gap-4 py-4 px-8 rounded-md shadow-2xl">
    <h3 class="text-lg">Choose a variant:</h3>
    {#each variants as variant}
      <Button primary on:click={() => dialog.close(variant)}>{variant}</Button>
    {/each}
    <Button on:click={() => dialog.close(null)}>Close</Button>
  </div>
</dialog>
