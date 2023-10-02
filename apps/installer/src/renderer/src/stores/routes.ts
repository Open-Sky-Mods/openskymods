import { writable } from 'svelte/store';

export type Routes = 'home' | 'gsx' | 'creator' | 'settings' | 'about';

export const route = writable<Routes>('gsx');
