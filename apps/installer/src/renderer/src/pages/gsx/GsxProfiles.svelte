<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '../../supabase';
  import type { Database } from '../../supabase/types';
  import { navigate } from 'svelte-routing';
  import { capitalizeFirstLetter, prettyAirportName } from '../../lib/string';

  let addons: Database['public']['Views']['distinct_airport_addons']['Row'][] = [];

  onMount(async () => {
    const data = (
      await supabase.from('distinct_airport_addons').select('*').range(0, 20).order('airport')
    ).data;
    addons = data.map((d) => {
      return {
        ...d,
      };
    });
  });
</script>

<h2 class="pt-2 text-xl">GSX Airport Profiles</h2>

<div class="grid grid-cols-4 gap-4 px-2 py-4">
  {#each addons as p}
    <button
      on:click={() => {
        navigate(`/gsx/${p.airport}/${p.airportCreator}`);
      }}
      class="bg-gray-100 bg-opacity-10 rounded-md p-4 flex flex-col items-center justify-center hover:bg-opacity-20 transition-all active:bg-gray-600"
    >
      <p class="text-3xl">{prettyAirportName(p.airport)}</p>
      <p>{capitalizeFirstLetter(p.airportCreator)}</p>
    </button>
  {/each}
</div>
