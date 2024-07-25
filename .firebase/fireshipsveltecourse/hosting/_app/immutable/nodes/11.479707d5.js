import{s as ce,v as x,r as $,e as ee,w as te,g as A,c as D,l as N,h as B,z as I,d as L,i as j,m as R,k as E,A as M,M as se,E as fe,F as re}from"../chunks/scheduler.772752a1.js";import{S as de,i as me,d as O,v as he,a as U,e as v,g as k,n as m,p as F,s as Y,B as _e}from"../chunks/index.311cb7de.js";import{g as ne}from"../chunks/navigation.5b99e015.js";import{f as V,c as G,u as H,g as W,n as ae,W as le}from"../chunks/firebase.68c14ee1.js";const pe=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global,{console:be}=pe,S="src/routes/login/username/+page.svelte";function oe(s){let e,c="Choose a username that fits you",o,t,u,l,a="What is your name?",n,i,y,T,w,b,C,h,g,P,f,_=s[1]&&Z(s),p=s[4]&&!s[2]&&!s[1]&&s[3]&&J(s);const Q={c:function(){e=A("h2"),e.textContent=c,o=D(),t=A("form"),u=A("label"),l=A("span"),l.textContent=a,n=D(),i=A("input"),y=D(),_&&_.c(),T=D(),p&&p.c(),w=D(),b=A("button"),C=N("Confirm username @"),h=N(s[0]),this.h()},l:function(r){e=B(r,"H2",{["data-svelte-h"]:!0}),I(e)!=="svelte-zk4xw4"&&(e.textContent=c),o=L(r),t=B(r,"FORM",{class:!0});var d=j(t);u=B(d,"LABEL",{class:!0,for:!0});var X=j(u);l=B(X,"SPAN",{class:!0,["data-svelte-h"]:!0}),I(l)!=="svelte-pozki0"&&(l.textContent=a),X.forEach(v),n=L(d),i=B(d,"INPUT",{type:!0,id:!0,name:!0,placeholder:!0,class:!0}),y=L(d),_&&_.l(d),T=L(d),p&&p.l(d),w=L(d),b=B(d,"BUTTON",{class:!0});var q=j(b);C=R(q,"Confirm username @"),h=R(q,s[0]),q.forEach(v),d.forEach(v),this.h()},h:function(){E(e,S,60,1,1497),k(l,"class","label-text"),E(l,S,64,3,1645),k(u,"class","label"),k(u,"for","username"),E(u,S,63,2,1605),k(i,"type","text"),k(i,"id","username"),k(i,"name","username"),k(i,"placeholder","Username"),k(i,"class","input input-bordered w-full max-w-xs"),M(i,"input-error",!s[2]&&s[0]!==""),M(i,"input-success",s[2]&&s[4]&&!s[1]),E(i,S,66,2,1709),k(b,"class","btn btn-success"),b.disabled=g=!s[2],E(b,S,84,2,2252),k(t,"class","px-8"),E(t,S,62,1,1540)},m:function(r,d){U(r,e,d),U(r,o,d),U(r,t,d),m(t,u),m(u,l),m(t,n),m(t,i),se(i,s[0]),m(t,y),_&&_.m(t,null),m(t,T),p&&p.m(t,null),m(t,w),m(t,b),m(b,C),m(b,h),P||(f=[F(i,"input",s[9]),F(i,"input",s[6],!1,!1,!1,!1),F(t,"submit",fe(s[7]),!1,!0,!1,!1)],P=!0)},p:function(r,d){d&1&&i.value!==r[0]&&se(i,r[0]),d&5&&M(i,"input-error",!r[2]&&r[0]!==""),d&22&&M(i,"input-success",r[2]&&r[4]&&!r[1]),r[1]?_?_.p(r,d):(_=Z(r),_.c(),_.m(t,T)):_&&(_.d(1),_=null),r[4]&&!r[2]&&!r[1]&&r[3]?p?p.p(r,d):(p=J(r),p.c(),p.m(t,w)):p&&(p.d(1),p=null),d&1&&Y(h,r[0]),d&4&&g!==(g=!r[2])&&_e(b,"disabled",g)},d:function(r){r&&(v(e),v(o),v(t)),_&&_.d(),p&&p.d(),P=!1,re(f)}};return O("SvelteRegisterBlock",{block:Q,id:oe.name,type:"else",source:"(51:0) {:else}",ctx:s}),Q}function ue(s){var b;let e,c,o,t,u=((b=s[5])==null?void 0:b.username)+"",l,a,n,i="Go to next step",y,T;const w={c:function(){e=A("p"),c=N("Your username is "),o=A("span"),t=N("@"),l=N(u),a=D(),n=A("button"),n.textContent=i,this.h()},l:function(h){e=B(h,"P",{});var g=j(e);c=R(g,"Your username is "),o=B(g,"SPAN",{class:!0});var P=j(o);t=R(P,"@"),l=R(P,u),P.forEach(v),g.forEach(v),a=L(h),n=B(h,"BUTTON",{class:!0,["data-svelte-h"]:!0}),I(n)!=="svelte-1j30l86"&&(n.textContent=i),this.h()},h:function(){k(o,"class","text-success"),E(o,S,57,21,1345),E(e,S,57,1,1325),k(n,"class","btn btn-success"),E(n,S,58,1,1407)},m:function(h,g){U(h,e,g),m(e,c),m(e,o),m(o,t),m(o,l),U(h,a,g),U(h,n,g),y||(T=F(n,"click",s[8],!1,!1,!1,!1),y=!0)},p:function(h,g){var P;g&32&&u!==(u=((P=h[5])==null?void 0:P.username)+"")&&Y(l,u)},d:function(h){h&&(v(e),v(a),v(n)),y=!1,T()}};return O("SvelteRegisterBlock",{block:w,id:ue.name,type:"if",source:"(48:0) {#if $userData?.username}",ctx:s}),w}function Z(s){let e,c,o,t;const u={c:function(){e=A("p"),c=N("Checking availability of @"),o=N(s[0]),t=N("..."),this.h()},l:function(a){e=B(a,"P",{class:!0});var n=j(e);c=R(n,"Checking availability of @"),o=R(n,s[0]),t=R(n,"..."),n.forEach(v),this.h()},h:function(){k(e,"class","text-secondary"),E(e,S,78,3,2038)},m:function(a,n){U(a,e,n),m(e,c),m(e,o),m(e,t)},p:function(a,n){n&1&&Y(o,a[0])},d:function(a){a&&v(e)}};return O("SvelteRegisterBlock",{block:u,id:Z.name,type:"if",source:"(69:2) {#if loading}",ctx:s}),u}function J(s){let e,c,o,t;const u={c:function(){e=A("p"),c=N("@"),o=N(s[0]),t=N(" is not available"),this.h()},l:function(a){e=B(a,"P",{class:!0});var n=j(e);c=R(n,"@"),o=R(n,s[0]),t=R(n," is not available"),n.forEach(v),this.h()},h:function(){k(e,"class","text-warning text-sm"),E(e,S,81,3,2176)},m:function(a,n){U(a,e,n),m(e,c),m(e,o),m(e,t)},p:function(a,n){n&1&&Y(o,a[0])},d:function(a){a&&v(e)}};return O("SvelteRegisterBlock",{block:u,id:J.name,type:"if",source:"(72:2) {#if isValid && !isAvailable && !loading && isTouched}",ctx:s}),u}function K(s){let e;function c(l,a){var n;return(n=l[5])!=null&&n.username?ue:oe}let o=c(s),t=o(s);const u={c:function(){t.c(),e=ee()},l:function(a){t.l(a),e=ee()},m:function(a,n){t.m(a,n),U(a,e,n)},p:function(a,[n]){o===(o=c(a))&&t?t.p(a,n):(t.d(1),t=o(a),t&&(t.c(),t.m(e.parentNode,e)))},i:te,o:te,d:function(a){a&&v(e),t.d(a)}};return O("SvelteRegisterBlock",{block:u,id:K.name,type:"component",source:"",ctx:s}),u}const ie=/^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;function ge(s,e,c){let o,t,u,l;x(H,"user"),$(s,H,f=>c(11,u=f)),x(G,"userData"),$(s,G,f=>c(5,l=f));let{$$slots:a={},$$scope:n}=e;he("Page",a,[]);let i="",y=!1,T=!1,w;async function b(){c(2,T=!1),console.log(w),clearTimeout(w),c(1,y=!0),w=setTimeout(async()=>{const f=W(V,"usernames",i),_=await ae(f).then(p=>p.exists());c(2,T=!_),c(1,y=!1)},500)}async function C(){const f=le(V);f.set(W(V,"usernames",i),{uid:u==null?void 0:u.uid}),f.set(W(V,"users",u.uid),{username:i,photoUrl:(u==null?void 0:u.photoURL)??null,published:!0,bio:"Look Ma, No hands !",links:[{title:"Test Link",url:"https://kung.foo",icon:"custom"}]}),await f.commit()}function h(){ne("/login/photo")}const g=[];Object.keys(e).forEach(f=>{!~g.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&be.warn(`<Page> was created with unknown prop '${f}'`)});function P(){i=this.value,c(0,i)}return s.$capture_state=()=>({goto:ne,db:V,userData:G,user:H,doc:W,getDoc:ae,writeBatch:le,username:i,loading:y,isAvailable:T,debounceTimer:w,re:ie,checkAvailabilitiy:b,confirmUsername:C,goToNextPage:h,isTouched:t,isValid:o,$user:u,$userData:l}),s.$inject_state=f=>{"username"in f&&c(0,i=f.username),"loading"in f&&c(1,y=f.loading),"isAvailable"in f&&c(2,T=f.isAvailable),"debounceTimer"in f&&(w=f.debounceTimer),"isTouched"in f&&c(3,t=f.isTouched),"isValid"in f&&c(4,o=f.isValid)},e&&"$$inject"in e&&s.$inject_state(e.$$inject),s.$$.update=()=>{s.$$.dirty&1&&c(4,o=(i==null?void 0:i.length)>2&&i.length<16&&ie.test(i)),s.$$.dirty&1&&c(3,t=i.length>0)},[i,y,T,t,o,l,b,C,h,P]}class we extends de{constructor(e){super(e),me(this,e,ge,K,ce,{}),O("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:K.name})}}export{we as component};
