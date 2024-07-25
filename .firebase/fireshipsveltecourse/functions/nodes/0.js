

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.d790af3d.js","_app/immutable/chunks/scheduler.772752a1.js","_app/immutable/chunks/index.311cb7de.js"];
export const stylesheets = ["_app/immutable/assets/0.9985bdb4.css"];
export const fonts = [];
