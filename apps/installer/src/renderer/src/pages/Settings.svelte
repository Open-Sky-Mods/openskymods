<script lang="ts">
  import { onMount } from 'svelte';
  import IconButton from '../components/IconButton.svelte';
  import OpenFolderIcon from '../components/icons/OpenFolderIcon.svelte';
  import { appConfig } from '../lib/stores';

  let gsxPath: string | undefined = undefined;

  onMount(async () => {
    gsxPath = await window.api.getSettingsValue<string>('gsx.profilePath');

    appConfig.update((c) => {
      c.gsxProfilePath = gsxPath;
      return c;
    });
  });

  async function openProfilePathDialog() {
    const maybeNewPath = await window.api.getGsxProfileDirectory(gsxPath);
    console.log({ maybeNewPath });
    if (maybeNewPath) {
      appConfig.update((c) => {
        gsxPath = maybeNewPath;
        c.gsxProfilePath = gsxPath;
        return c;
      });
    }
  }
</script>

<h2 class="text-lg">Settings</h2>
<div class="mt-4 flex flex-col w-full">
  <div class="flex flex-row w-full items-center">
    <label for="gsxPath">GSX Profile Directory: </label>
    <input
      bind:value={gsxPath}
      class="w-[40em] text-black ml-4"
      type="text"
      id="gsxPath"
      name="gsxPath"
      placeholder="%APPDATA%/virtuali/GSX/MSFS"
    />
    <IconButton on:click={openProfilePathDialog}>
      <OpenFolderIcon></OpenFolderIcon>
    </IconButton>
  </div>
</div>
