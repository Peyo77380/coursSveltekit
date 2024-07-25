import * as server from '../entries/pages/_username_/bio/_page.server.ts.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_username_/bio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[username]/bio/+page.server.ts";
export const imports = ["_app/immutable/nodes/6.2689d155.js","_app/immutable/chunks/scheduler.772752a1.js","_app/immutable/chunks/index.311cb7de.js","_app/immutable/chunks/stores.ca0848af.js","_app/immutable/chunks/singletons.264690ca.js","_app/immutable/chunks/index.92f6cf5e.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/navigation.5b99e015.js"];
export const stylesheets = [];
export const fonts = [];
