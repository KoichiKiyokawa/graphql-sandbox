import { writable } from 'svelte/store';

export const currentUser = writable<{ id: string; name: string } | null>(null);
