function k(){}const X=t=>t;function T(t,e){for(const n in e)t[n]=e[n];return t}function Y(t,e,n,i,r){t.__svelte_meta={loc:{file:e,line:n,column:i,char:r}}}function q(t){return t()}function Z(){return Object.create(null)}function H(t){t.forEach(q)}function L(t){return typeof t=="function"}function $(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let h;function tt(t,e){return t===e?!0:(h||(h=document.createElement("a")),h.href=e,t===h.href)}function et(t){return Object.keys(t).length===0}function nt(t,e){if(t!=null&&typeof t.subscribe!="function")throw new Error(`'${e}' is not a store with a 'subscribe' method`)}function M(t,...e){if(t==null){for(const i of e)i(void 0);return k}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function it(t,e,n){t.$$.on_destroy.push(M(e,n))}function rt(t,e,n,i){if(t){const r=A(t,e,n,i);return t[0](r)}}function A(t,e,n,i){return t[1]&&i?T(n.ctx.slice(),t[1](i(e))):n.ctx}function ct(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function lt(t,e,n,i,r,o){if(r){const c=A(e,n,i,o);t.p(c,r)}}function st(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function ot(t){return t&&L(t.destroy)?t.destroy:k}function ut(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let m=!1;function at(){m=!0}function ft(){m=!1}function P(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function B(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:P(1,r,j=>e[n[j]].claim_order,u))-1;i[l]=n[a]+1;const E=a+1;n[E]=l,r=Math.max(E,r)}const o=[],c=[];let s=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);s>=l;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);o.reverse(),c.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<c.length;l++){for(;u<o.length&&c[l].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(c[l],a)}}function O(t,e){t.appendChild(e)}function R(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _t(t){const e=C("style");return e.textContent="/* empty */",F(R(t),e),e.sheet}function F(t,e){return O(t.head||t,e),e.sheet}function z(t,e){if(m){for(B(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function dt(t,e,n){m&&!n?z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ht(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function C(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function mt(){return v(" ")}function yt(){return v("")}function bt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function gt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function xt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function vt(t){return t.dataset.svelteH}function Et(t){return Array.from(t.childNodes)}function I(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function D(t,e,n,i,r=!1){I(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const l=n(s);return l===void 0?t.splice(c,1):t[c]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function W(t,e,n,i){return D(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||o.push(s.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function wt(t,e,n){return W(t,e,n,C)}function G(t,e){return D(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function Nt(t){return G(t," ")}function kt(t,e){t.value=e??""}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ct(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Dt(t){const e=t.querySelector(":checked");return e&&e.__value}function St(t,e,n){t.classList.toggle(e,!!n)}function J(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function jt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}let p;function b(t){p=t}function y(){if(!p)throw new Error("Function called outside component initialization");return p}function Tt(t){y().$$.on_mount.push(t)}function qt(t){y().$$.after_update.push(t)}function Ht(){const t=y();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=J(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Lt(t,e){return y().$$.context.set(t,e),e}const d=[],w=[];let _=[];const N=[],S=Promise.resolve();let x=!1;function K(){x||(x=!0,S.then(U))}function Mt(){return K(),S}function Q(t){_.push(t)}const g=new Set;let f=0;function U(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),V(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;w.length;)w.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;N.length;)N.pop()();x=!1,g.clear(),b(t)}function V(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function Pt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{K as $,St as A,X as B,L as C,Ht as D,gt as E,H as F,tt as G,T as H,jt as I,ot as J,Dt as K,Ct as L,kt as M,pt as N,M as O,R as P,ht as Q,_t as R,J as S,Z as T,U,p as V,b as W,et as X,q as Y,Pt as Z,d as _,qt as a,at as a0,ft as a1,z as a2,dt as a3,bt as a4,xt as a5,Lt as b,mt as c,Nt as d,yt as e,w as f,C as g,wt as h,Et as i,At as j,Y as k,v as l,G as m,rt as n,Tt as o,st as p,ct as q,it as r,$ as s,Mt as t,lt as u,nt as v,k as w,ut as x,Q as y,vt as z};
