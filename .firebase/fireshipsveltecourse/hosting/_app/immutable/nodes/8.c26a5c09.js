import{s as Y,v as A,r as F,g as h,c as w,l as R,h as g,z as y,d as P,i as G,m as T,k as x,w as j}from"../chunks/scheduler.772752a1.js";import{S as I,i as J,d as U,v as K,e as c,g as q,a as d,n as z,p as M,s as Q}from"../chunks/index.311cb7de.js";import{a as D,u as S,b as L}from"../chunks/firebase.68c14ee1.js";const b="src/routes/login/+page.svelte";function $(r){var B;let e,_="Login",i,n,m,u=((B=r[0])==null?void 0:B.displayName)+"",p,a,o,k="You are logged in",v,l,H="Sign out",C,N;const O={c:function(){e=h("h2"),e.textContent=_,i=w(),n=h("h2"),m=R("Hello "),p=R(u),a=w(),o=h("p"),o.textContent=k,v=w(),l=h("button"),l.textContent=H,this.h()},l:function(t){e=g(t,"H2",{["data-svelte-h"]:!0}),y(e)!=="svelte-bhb3ah"&&(e.textContent=_),i=P(t),n=g(t,"H2",{});var s=G(n);m=T(s,"Hello "),p=T(s,u),s.forEach(c),a=P(t),o=g(t,"P",{class:!0,["data-svelte-h"]:!0}),y(o)!=="svelte-1ixf45p"&&(o.textContent=k),v=P(t),l=g(t,"BUTTON",{class:!0,["data-svelte-h"]:!0}),y(l)!=="svelte-1057dgy"&&(l.textContent=H),this.h()},h:function(){x(e,b,5,0,114),x(n,b,6,0,129),q(o,"class","text-green-400"),x(o,b,7,0,165),q(l,"class","btn"),x(l,b,8,0,213)},m:function(t,s){d(t,e,s),d(t,i,s),d(t,n,s),z(n,m),z(n,p),d(t,a,s),d(t,o,s),d(t,v,s),d(t,l,s),C||(N=M(l,"click",r[1],!1,!1,!1,!1),C=!0)},p:function(t,[s]){var E;s&1&&u!==(u=((E=t[0])==null?void 0:E.displayName)+"")&&Q(p,u)},i:j,o:j,d:function(t){t&&(c(e),c(i),c(n),c(a),c(o),c(v),c(l)),C=!1,N()}};return U("SvelteRegisterBlock",{block:O,id:$.name,type:"component",source:"",ctx:r}),O}function V(r,e,_){let i;A(S,"user"),F(r,S,a=>_(0,i=a));let{$$slots:n={},$$scope:m}=e;K("Page",n,[]);const u=[];Object.keys(e).forEach(a=>{!~u.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Page> was created with unknown prop '${a}'`)});const p=()=>L(D);return r.$capture_state=()=>({auth:D,user:S,signOut:L,$user:i}),[i,p]}class tt extends I{constructor(e){super(e),J(this,e,V,$,Y,{}),U("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:$.name})}}export{tt as component};