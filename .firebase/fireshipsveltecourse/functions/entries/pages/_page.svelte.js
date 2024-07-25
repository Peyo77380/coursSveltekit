import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="text-green-700" data-svelte-h="svelte-1nvu42q">Welcome to SvelteKit</h1> <p>Visit <a href="https://kit.svelte.dev" data-svelte-h="svelte-r2hwjt">kit.svelte.dev</a> to read the documentation</p> <button class="btn" data-svelte-h="svelte-1z0hrfn">Hey</button>`;
});
export {
  Page as default
};
