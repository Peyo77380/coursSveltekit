import * as universal from '../entries/pages/api/signin/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/api/signin/+layout.ts";
export const imports = ["_app/immutable/nodes/2.bd84dfc4.js","_app/immutable/chunks/scheduler.772752a1.js","_app/immutable/chunks/index.311cb7de.js"];
export const stylesheets = [];
export const fonts = [];
