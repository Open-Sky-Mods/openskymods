<script lang="ts">
  import { Link } from 'svelte-routing';
  import type { Routes } from '../stores/routes';

  export let routeName: Routes;
</script>

<li>
  <Link to={routeName}>
    <slot />
  </Link>
</li>
