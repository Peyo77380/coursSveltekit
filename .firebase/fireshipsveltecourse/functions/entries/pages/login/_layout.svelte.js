import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { u as user, a as userData } from "../../../chunks/firebase.js";
import "firebase/auth";
const AnimatedRoute = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const AuthChecked = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `${$user ? `${slots.default ? slots.default({}) : ``}` : `<button class="btn" data-svelte-h="svelte-kpeahb">Sign in with Google</button>`}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userData;
  let $$unsubscribe_user;
  let $page, $$unsubscribe_page;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_userData();
  $$unsubscribe_user();
  $$unsubscribe_page();
  return `<nav class="mx-auto py-8 steps steps-horizontal"><a href="/login/" class="step step-primary" data-svelte-h="svelte-pkhg43">Sign In</a> <a href="/login/username" class="${[
    "step",
    $page.route.id?.match(/username|photo|done/g) ? "step-primary" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-ir6sh8">Username</a> <a href="/login/photo" class="${[
    "step",
    $page.route.id?.match(/photo|done/g) ? "step-primary" : ""
  ].join(" ").trim()}" data-svelte-h="svelte-10knaiu">Picture</a> <a href="/login/done" class="${["step", $page.route.id?.match(/done/g) ? "step-primary" : ""].join(" ").trim()}" data-svelte-h="svelte-n4bz0x">You&#39;re done</a></nav> ${validate_component(AnimatedRoute, "AnimatedRoute").$$render($$result, {}, {}, {
    default: () => {
      return `<main class="card w-4/6 bg-neutral text-neutral-content mx-auto"><div class="card-body items-center text-center">${validate_component(AuthChecked, "AuthChecked").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}</div></main>`;
    }
  })}`;
});
export {
  Layout as default
};
