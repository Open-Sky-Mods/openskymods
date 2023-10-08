import { Writable, writable } from 'svelte/store';
import { AppConfig } from './types';

export const appConfig: Writable<AppConfig> = writable({});
