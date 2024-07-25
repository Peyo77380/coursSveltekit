import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<h1 data-svelte-h="svelte-3jr3gm">Edit Bio</h1> <p>Current bio : ${escape(data.bio)}</p> <p>Status code : ${escape($page.status)}</p> <p>${escape($page.form?.problem ?? "")}</p> <form method="post"><label for="bio" data-svelte-h="svelte-1urito6">Votre bio</label> <textarea name="bio" id="bio" cols="30" rows="10"></textarea> <button class="btn btn-success" data-svelte-h="svelte-rn2kq4">Update Bio</button></form>`;
});
export {
  Page as default
};
