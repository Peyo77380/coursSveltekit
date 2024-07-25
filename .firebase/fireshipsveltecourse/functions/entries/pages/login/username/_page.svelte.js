import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { u as user, a as userData } from "../../../../chunks/firebase.js";
import "firebase/firestore";
const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isValid;
  let isTouched;
  let $$unsubscribe_user;
  let $userData, $$unsubscribe_userData;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let username = "";
  let loading = false;
  let isAvailable = false;
  isValid = username?.length > 2 && username.length < 16 && re.test(username);
  isTouched = username.length > 0;
  $$unsubscribe_user();
  $$unsubscribe_userData();
  return `${$userData?.username ? `<p>Your username is <span class="text-success">@${escape($userData?.username)}</span></p> <button class="btn btn-success" data-svelte-h="svelte-1j30l86">Go to next step</button>` : `<h2 data-svelte-h="svelte-zk4xw4">Choose a username that fits you</h2> <form class="px-8"><label class="label" for="username"><span class="label-text" data-svelte-h="svelte-pozki0">What is your name?</span></label> <input type="text" id="username" name="username" placeholder="Username" class="${[
    "input input-bordered w-full max-w-xs",
    " "
  ].join(" ").trim()}"${add_attribute("value", username, 0)}> ${``} ${isValid && !isAvailable && !loading && isTouched ? `<p class="text-warning text-sm">@${escape(username)} is not available</p>` : ``} <button class="btn btn-success" ${"disabled"}>Confirm username @${escape(username)}</button></form>`}`;
});
export {
  Page as default
};
