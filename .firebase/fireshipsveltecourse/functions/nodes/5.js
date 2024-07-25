import * as universal from '../entries/pages/_username_/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[username]/+page.ts";
export const imports = ["_app/immutable/nodes/5.6730487d.js","_app/immutable/chunks/firebase.68c14ee1.js","_app/immutable/chunks/index.92f6cf5e.js","_app/immutable/chunks/scheduler.772752a1.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/index.311cb7de.js","_app/immutable/chunks/index.40b40403.js"];
export const stylesheets = ["_app/immutable/assets/5.1942ec92.css"];
export const fonts = [];
