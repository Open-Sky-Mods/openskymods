<script lang="ts">
  import { Link } from 'svelte-routing';
  import { route } from '../stores/routes';
  import type { Routes } from '../stores/routes';

  export let routeName: Routes;

  let active = false;

  $: active = routeName === $route;

  function updateRoute(newRoute: Routes): void {
    route.set(newRoute);
  }
</script>

<li>
  <Link to={routeName}>
    <slot />
  </Link>
</li>
