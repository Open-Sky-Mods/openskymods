<script lang="ts">
  import NavItem from './NavItem.svelte';
  import CloudIcon from './icons/CloudIcon.svelte';
  import CogIcon from './icons/CogIcon.svelte';
  import GsxIcon from './icons/GSXIcon.svelte';
</script>

<nav class="border-r-[1px] border-gray-500 px-2 flex flex-col gap-4">
  <h1 class="text-2xl py-2 inline-flex gap-2 items-center"><CloudIcon></CloudIcon>OpenSkyMods</h1>
  <ul class="flex flex-col gap-2 self-stretch h-full">
    <!-- <NavItem routeName='home'>
      <span class="inline-flex gap-2"><HomeIcon></HomeIcon>Home</span>
    </NavItem> -->
    <NavItem routeName="gsx">
      <span class="inline-flex gap-2"><GsxIcon></GsxIcon>GSX Profiles</span>
    </NavItem>
    <!-- <NavItem routeName='creator'>
      <span class="inline-flex gap-2"><PlusCircleIcon></PlusCircleIcon>Creators</span>
    </NavItem> -->
  </ul>
  <ul class="pb-2">
    <NavItem routeName="settings">
      <span class="inline-flex gap-2"><CogIcon></CogIcon>Settings</span>
    </NavItem>
  </ul>
</nav>
