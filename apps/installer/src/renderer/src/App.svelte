<script>
  import NavDrawer from './components/NavDrawer.svelte';
  import { Router, Route } from 'svelte-routing';
  import GsxProfiles from './pages/gsx/GsxProfiles.svelte';
  import ProfilesForAddon from './pages/gsx/airport/creator/ProfilesForAddon.svelte';
  import { navigate } from 'svelte-routing/src/history';
  import PageWrapper from './components/PageWrapper.svelte';
  import Settings from './pages/Settings.svelte';

  navigate('/gsx');
</script>

<Router>
  <div class="flex flex-row h-screen gap-2">
    <NavDrawer></NavDrawer>
    <main class="flex w-full">
      <Route path="/gsx/:airport/:creator" let:params>
        <PageWrapper>
          <ProfilesForAddon airport={params.airport} creator={params.creator}></ProfilesForAddon>
        </PageWrapper>
      </Route>
      <Route path="/gsx">
        <PageWrapper>
          <GsxProfiles></GsxProfiles>
        </PageWrapper>
      </Route>
      <Route path="/settings">
        <PageWrapper>
          <Settings></Settings>
        </PageWrapper>
      </Route>
      <Route path="/"></Route>
    </main>
  </div>
</Router>
