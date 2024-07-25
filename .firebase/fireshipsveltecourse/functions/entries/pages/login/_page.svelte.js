import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { u as user } from "../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<h2 data-svelte-h="svelte-bhb3ah">Login</h2> <h2>Hello ${escape($user?.displayName)}</h2> <p class="text-green-400" data-svelte-h="svelte-1ixf45p">You are logged in</p> <button class="btn" data-svelte-h="svelte-1057dgy">Sign out</button>`;
});
export {
  Page as default
};
