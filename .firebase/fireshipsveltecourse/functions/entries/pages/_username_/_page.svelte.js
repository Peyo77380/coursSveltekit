import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, a as createEventDispatcher, b as each, d as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "firebase/firestore";
import { u as user } from "../../../chunks/firebase.js";
const SortableList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".over.s-bF1CfGpt5Wxa{@apply border-gray-400 scale-105;}",
  map: null
};
const SortableList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let isOver = false;
  createEventDispatcher();
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  $$result.css.add(css);
  return `${list?.length ? `<ul class="list-none">${each(list, (item, index) => {
    return `<li${add_attribute("data-index", index, 0)}${add_attribute("data-id", item.id, 0)} draggable="true" class="${[
      "stack w-full max-w-md my-4 text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline s-bF1CfGpt5Wxa",
      item.id === isOver ? "over" : ""
    ].join(" ").trim()}">${slots.default ? slots.default({ item, index }) : ``} </li>`;
  })}</ul>` : `<p class="text-info text-sm" data-svelte-h="svelte-ribsoe">Nothing here</p>`}`;
});
const UserLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "default" } = $$props;
  let { url = "foo" } = $$props;
  let { title = "Your title" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<a${add_attribute("href", url, 0)} class="stack w-full max-w-md text-center bg-base-300 flex justify-center items-center p-4 rounded-lg not-prose no-underline"><img${add_attribute("src", `/${icon}.png`, 0)}${add_attribute("alt", icon, 0)} width="32" height="32" class="w-8"> <span class="text-lg text-white font-bold">${escape(title)}</span></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_user();
  return `${$$result.head += `<!-- HEAD_svelte-ia5kau_START -->${$$result.title = `<title>@${escape(data.username)} Links</title>`, ""}<meta name="description"${add_attribute("content", data.bio, 0)}><!-- HEAD_svelte-ia5kau_END -->`, ""} <main class="prose text-center mx-auto mt-8"><h1 class="text-7xl text-purple-500">@${escape(data.username)}</h1> <img${add_attribute("src", data.photoURL ?? "/user.png", 0)} alt="photoURL" width="256" class="mx-auto"> <p class="text-xl my-8">${escape(data.bio ?? "no bio yet...")}</p> ${validate_component(SortableList, "SortableList").$$render($$result, { list: data.links }, {}, {
    default: ({ item, index }) => {
      return `${validate_component(UserLink, "UserLink").$$render($$result, Object.assign({}, item), {}, {})}`;
    }
  })}</main>`;
});
export {
  Page as default
};
