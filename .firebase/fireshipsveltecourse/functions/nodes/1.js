

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1a7be9a0.js","_app/immutable/chunks/scheduler.772752a1.js","_app/immutable/chunks/index.311cb7de.js","_app/immutable/chunks/stores.ca0848af.js","_app/immutable/chunks/singletons.264690ca.js","_app/immutable/chunks/index.92f6cf5e.js"];
export const stylesheets = [];
export const fonts = [];
