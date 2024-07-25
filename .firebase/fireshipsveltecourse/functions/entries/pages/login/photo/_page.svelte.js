import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, d as add_attribute } from "../../../../chunks/ssr.js";
import { u as user, a as userData } from "../../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/storage";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $userData, $$unsubscribe_userData;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let uploaded = $user?.photoURL || false;
  $$unsubscribe_user();
  $$unsubscribe_userData();
  return `<h2 data-svelte-h="svelte-omljqb">Upload your nicest smile !</h2> <form class="px-8"><div class="w-3/4 mx-auto"><img${add_attribute("src", $userData?.photoURL, 0)} alt="Profile Picture" width="256" height="256" class="mx-auto"></div> <label class="label" for="photoURL"><span class="label-text" data-svelte-h="svelte-1xba4c3">Pick a file</span></label> <input type="file" id="photoURL" class="file-input w-full max-w-xs" accept="image/png, image/jpeg, image/jpg, image/gif, image/webp"> ${``} ${uploaded ? `<div class="py-8"><button class="btn btn-success w-64" data-svelte-h="svelte-tghp1a">Next !</button></div>` : ``}</form>`;
});
export {
  Page as default
};
