<script lang="ts">
  import { onMount } from 'svelte';
  import { capitalizeFirstLetter, prettyAirportName } from '../../../../lib/string';
  import type { Database } from '../../../../supabase/types';
  import { supabase } from '../../../../supabase';
  import { Link } from 'svelte-routing';
  import ArrowLeftIcon from '../../../../components/icons/ArrowLeftIcon.svelte';
  import ArrowDownTray from '../../../../components/icons/ArrowDownTray.svelte';
  import IconButton from '../../../../components/IconButton.svelte';
  import VariantDialog from './VariantDialog.svelte';

  export let airport: string;
  export let creator: string;

  type ProfileFromView = Database['public']['Views']['profiles_by_addon']['Row'];

  let profiles: ProfileFromView[] = [];

  let variantDialog: HTMLDialogElement;
  let possibleVariants: string[] = [];

  onMount(async () => {
    const { data, error } = await supabase
      .from('profiles_by_addon')
      .select('*')
      .eq('airport', airport)
      .eq('airportCreator', creator)
      .order('airport');

    console.log(data, error);

    profiles = data.map((d) => {
      return {
        ...d,
      };
    });
  });

  async function installProfile(p: ProfileFromView): Promise<void> {
    const variant = await selectProfileVariant(p.variants);

    if (!variant) {
      return;
    }

    const profileFiles = await supabase
      .from('files')
      .select('*')
      .eq('profileSlug', p.slug)
      .eq('profileVariant', variant);

    if (profileFiles.error) {
      console.error(profileFiles.error);
      return;
    }

    const ghProfilePath = p.slug.split('-').join('/');
    const ghFiles = profileFiles.data.map((f) => `${ghProfilePath}/${f.name}`);

    await window.api.installGsxProfile(p.slug, variant, ghFiles);
  }

  async function selectProfileVariant(
    variantString: ProfileFromView['variants'],
  ): Promise<string | undefined> {
    const variants = variantString.split(', ').map((s) => s.trim());
    if (variants.length === 1) {
      return variants[0];
    }

    possibleVariants = variants;
    variantDialog.showModal();

    return new Promise<string | undefined>((resolve) => {
      variantDialog.oncancel = () => {
        resolve(undefined);
      };

      variantDialog.onclose = () => {
        resolve(variantDialog.returnValue || undefined);
      };
    });
  }
</script>

<div class="flex flex-row justify-between w-full p-4">
  <Link to="/gsx" class="inline-flex gap-2 no-underline"
    ><ArrowLeftIcon></ArrowLeftIcon> <span>Back</span></Link
  >
  <h2>
    Profiles for <strong>{prettyAirportName(airport)}</strong> by
    <strong>{capitalizeFirstLetter(creator)}</strong>
  </h2>
  <div class="dummy"></div>
</div>

<table class="w-full table-auto mt-4 border border-slate-600">
  <thead class="">
    <tr>
      <th class="pl-2 text-start">Profile</th>
      <th class="text-start">Description</th>
      <th class="text-start">Variants</th>
      <th class="text-start">Author(s)</th>
      <th class="text-start">Downloads</th>
      <th class="text-start"></th>
    </tr>
  </thead>
  <tbody>
    {#each profiles as p, index}
      <tr>
        <td class="py-2 pl-2">{index + 1}</td>
        <td>{p.description}</td>
        <td>{p.variants}</td>
        <td>{p.names}</td>
        <td class="text-gray-500">0 (WIP)</td>
        <td>
          <IconButton on:click={async () => await installProfile(p)}>
            <ArrowDownTray></ArrowDownTray>
          </IconButton>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<VariantDialog bind:dialog={variantDialog} variants={possibleVariants}></VariantDialog>
