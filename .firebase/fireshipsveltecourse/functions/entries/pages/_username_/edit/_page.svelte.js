import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import { u as user, a as userData } from "../../../../chunks/firebase.js";
import { w as writable } from "../../../../chunks/index2.js";
import "firebase/firestore";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $formData, $$unsubscribe_formData;
  let $$unsubscribe_user;
  let $userData, $$unsubscribe_userData;
  let $page, $$unsubscribe_page;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const formDefaults = { icon: "custom", title: "", url: "" };
  const formData = writable(formDefaults);
  validate_store(formData, "formData");
  $$unsubscribe_formData = subscribe(formData, (value) => $formData = value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $formData.title.length < 20 && $formData.title.length > 0;
  $formData.url.match(/^(ftp|http|https):\/\/[^ "]+$/);
  $$unsubscribe_formData();
  $$unsubscribe_user();
  $$unsubscribe_userData();
  $$unsubscribe_page();
  return `<main class="max-w-xl mx-auto">${$userData?.username == $page.params.username ? `<h1 class="mx-2 text-2xl font-bold mt-8 mb-4 text-center" data-svelte-h="svelte-ie4hjb">Edit your profile</h1> ${`<button class="btn btn-outline btn-info block mx-auto my-4" data-svelte-h="svelte-ddufzj">Add a Link</button> <button class="btn btn-outline btn-error block mx-auto my-4" data-svelte-h="svelte-v62hrt">Delete a link</button>`}` : ``}</main>`;
});
export {
  Page as default
};
