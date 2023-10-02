<script>
  import IconButton from '../components/IconButton.svelte';
  import OpenFolderIcon from '../components/icons/OpenFolderIcon.svelte';
</script>

<h2 class="text-lg">Settings</h2>
<div class="mt-4 flex flex-col w-full">
  <div class="flex flex-row w-full items-center">
    <label for="gsxPath">GSX Profile Directory: </label>
    <input
      class="w-[40em] text-black ml-4"
      type="text"
      id="gsxPath"
      name="gsxPath"
      placeholder="%APPDATA%/virtuali/GSX/MSFS"
    />
    <IconButton>
      <OpenFolderIcon></OpenFolderIcon>
    </IconButton>
  </div>
</div>
