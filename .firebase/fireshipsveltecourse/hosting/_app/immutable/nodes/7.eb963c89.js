import{s as xe,v as ee,r as te,g as b,h as v,i as M,k,w as ne,K as Oe,c as R,e as Ce,z as F,d as A,F as De,l as Ne,m as Ve,y as Ue,A as le,L as we,M as $,E as je,N as Fe}from"../chunks/scheduler.772752a1.js";import{S as Me,i as qe,d as q,v as ze,e as y,g as i,a as x,x as Pe,p as z,n as m,B as Qe}from"../chunks/index.311cb7de.js";import{p as ie}from"../chunks/stores.ca0848af.js";import{f as Ee,u as re,c as ue,Q as Ie,g as Te,h as Le}from"../chunks/firebase.68c14ee1.js";import{w as Be}from"../chunks/index.92f6cf5e.js";const g="src/routes/[username]/edit/+page.svelte";function Se(t,e,l){const a=t.slice();return a[19]=e[l],a}function ce(t){let e,l="Edit your profile",a,s;function o(h,f){return h[3]?Ae:Re}let n=o(t),r=n(t);const _={c:function(){e=b("h1"),e.textContent=l,a=R(),r.c(),s=Ce(),this.h()},l:function(f){e=v(f,"H1",{class:!0,["data-svelte-h"]:!0}),F(e)!=="svelte-ie4hjb"&&(e.textContent=l),a=A(f),r.l(f),s=Ce(),this.h()},h:function(){i(e,"class","mx-2 text-2xl font-bold mt-8 mb-4 text-center"),k(e,g,51,2,1091)},m:function(f,I){x(f,e,I),x(f,a,I),r.m(f,I),x(f,s,I)},p:function(f,I){n===(n=o(f))&&r?r.p(f,I):(r.d(1),r=n(f),r&&(r.c(),r.m(s.parentNode,s)))},d:function(f){f&&(y(e),y(a),y(s)),r.d(f)}};return q("SvelteRegisterBlock",{block:_,id:ce.name,type:"if",source:"(42:1) {#if $userData?.username == $page.params.username}",ctx:t}),_}function Re(t){let e,l="Add a Link",a,s,o="Delete a link",n,r;const _={c:function(){e=b("button"),e.textContent=l,a=R(),s=b("button"),s.textContent=o,this.h()},l:function(f){e=v(f,"BUTTON",{class:!0,["data-svelte-h"]:!0}),F(e)!=="svelte-ddufzj"&&(e.textContent=l),a=A(f),s=v(f,"BUTTON",{class:!0,["data-svelte-h"]:!0}),F(s)!=="svelte-v62hrt"&&(s.textContent=o),this.h()},h:function(){i(e,"class","btn btn-outline btn-info block mx-auto my-4"),k(e,g,115,3,2965),i(s,"class","btn btn-outline btn-error block mx-auto my-4"),k(s,g,121,3,3104)},m:function(f,I){x(f,e,I),x(f,a,I),x(f,s,I),n||(r=[z(e,"click",t[15],!1,!1,!1,!1),z(s,"click",t[16],!1,!1,!1,!1)],n=!0)},p:ne,d:function(f){f&&(y(e),y(a),y(s)),n=!1,De(r)}};return q("SvelteRegisterBlock",{block:_,id:Re.name,type:"else",source:"(106:2) {:else}",ctx:t}),_}function Ae(t){let e,l,a,s="The icon of your link",o,n,r,_,h,f="The title of your link",I,p,O,T,D,N="The URL of your link",Q,w,X,E,H,K,Y,V,u,G,se,U,pe="Cancel",ae,be,J=Pe(t[7]),P=[];for(let j=0;j<J.length;j+=1)P[j]=fe(Se(t,J,j));let L=!t[1]&&t[2].title.length>0&&de(t),B=!t[0]&&t[2].url.length>0&&he(t),S=t[1]&&t[0]&&me(t);const ve={c:function(){e=b("form"),l=b("label"),a=b("span"),a.textContent=s,o=R(),n=b("select");for(let c=0;c<P.length;c+=1)P[c].c();r=R(),_=b("label"),h=b("span"),h.textContent=f,I=R(),p=b("input"),O=R(),T=b("label"),D=b("span"),D.textContent=N,Q=R(),w=b("input"),X=R(),E=b("div"),L&&L.c(),H=R(),B&&B.c(),K=R(),S&&S.c(),Y=R(),V=b("button"),u=Ne("Add Link"),se=R(),U=b("button"),U.textContent=pe,this.h()},l:function(c){e=v(c,"FORM",{class:!0});var d=M(e);l=v(d,"LABEL",{for:!0,class:!0});var C=M(l);a=v(C,"SPAN",{class:!0,["data-svelte-h"]:!0}),F(a)!=="svelte-1q0x6ej"&&(a.textContent=s),C.forEach(y),o=A(d),n=v(d,"SELECT",{name:!0,id:!0,class:!0});var Z=M(n);for(let oe=0;oe<P.length;oe+=1)P[oe].l(Z);Z.forEach(y),r=A(d),_=v(d,"LABEL",{for:!0,class:!0});var ke=M(_);h=v(ke,"SPAN",{class:!0,["data-svelte-h"]:!0}),F(h)!=="svelte-5sr4ye"&&(h.textContent=f),ke.forEach(y),I=A(d),p=v(d,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0,class:!0}),O=A(d),T=v(d,"LABEL",{for:!0,class:!0});var ge=M(T);D=v(ge,"SPAN",{class:!0,["data-svelte-h"]:!0}),F(D)!=="svelte-k9622h"&&(D.textContent=N),ge.forEach(y),Q=A(d),w=v(d,"INPUT",{name:!0,id:!0,placeholder:!0,type:!0,class:!0}),X=A(d),E=v(d,"DIV",{class:!0});var W=M(E);L&&L.l(W),H=A(W),B&&B.l(W),K=A(W),S&&S.l(W),W.forEach(y),Y=A(d),V=v(d,"BUTTON",{type:!0,class:!0});var ye=M(V);u=Ve(ye,"Add Link"),ye.forEach(y),se=A(d),U=v(d,"BUTTON",{type:!0,class:!0,["data-svelte-h"]:!0}),F(U)!=="svelte-svd08a"&&(U.textContent=pe),d.forEach(y),this.h()},h:function(){i(a,"class","label-text"),k(a,g,56,5,1327),i(l,"for","icon"),i(l,"class","label"),k(l,g,55,4,1289),i(n,"name","icon"),i(n,"id","icon"),i(n,"class","select select-bordered w-full max-w-xs"),t[2].icon===void 0&&Ue(()=>t[12].call(n)),k(n,g,58,4,1398),i(h,"class","label-text"),k(h,g,70,5,1690),i(_,"for","title"),i(_,"class","label"),k(_,g,69,4,1651),i(p,"name","title"),i(p,"id","title"),i(p,"placeholder","Title"),i(p,"type","text"),i(p,"class","input input-sm"),le(p,"input-error",!t[1]&&t[2].title.length>0),k(p,g,72,4,1762),i(D,"class","label-text"),k(D,g,83,5,2025),i(T,"for","url"),i(T,"class","label"),k(T,g,82,4,1988),i(w,"name","url"),i(w,"id","url"),i(w,"placeholder","https://"),i(w,"type","text"),i(w,"class","input input-sm"),le(w,"input-error",!t[0]&&t[2].url.length>0),k(w,g,85,4,2095),i(E,"class","my-4"),k(E,g,95,4,2314),V.disabled=G=!t[4],i(V,"type","submit"),i(V,"class","w-full mt-6 btn btn-success block"),k(V,g,107,4,2709),i(U,"type","button"),i(U,"class","w-full mt-6 btn block btn-error"),k(U,g,110,4,2830),i(e,"class","bg-base-200 p-6 w-full mx-auto rounded-xl"),k(e,g,54,3,1193)},m:function(c,d){x(c,e,d),m(e,l),m(l,a),m(e,o),m(e,n);for(let C=0;C<P.length;C+=1)P[C]&&P[C].m(n,null);we(n,t[2].icon,!0),m(e,r),m(e,_),m(_,h),m(e,I),m(e,p),$(p,t[2].title),m(e,O),m(e,T),m(T,D),m(e,Q),m(e,w),$(w,t[2].url),m(e,X),m(e,E),L&&L.m(E,null),m(E,H),B&&B.m(E,null),m(E,K),S&&S.m(E,null),m(e,Y),m(e,V),m(V,u),m(e,se),m(e,U),ae||(be=[z(n,"change",t[12]),z(p,"input",t[13]),z(w,"input",t[14]),z(U,"click",t[10],!1,!1,!1,!1),z(e,"submit",je(t[9]),!1,!0,!1,!1)],ae=!0)},p:function(c,d){if(d&128){J=Pe(c[7]);let C;for(C=0;C<J.length;C+=1){const Z=Se(c,J,C);P[C]?P[C].p(Z,d):(P[C]=fe(Z),P[C].c(),P[C].m(n,null))}for(;C<P.length;C+=1)P[C].d(1);P.length=J.length}d&132&&we(n,c[2].icon),d&132&&p.value!==c[2].title&&$(p,c[2].title),d&6&&le(p,"input-error",!c[1]&&c[2].title.length>0),d&132&&w.value!==c[2].url&&$(w,c[2].url),d&5&&le(w,"input-error",!c[0]&&c[2].url.length>0),!c[1]&&c[2].title.length>0?L||(L=de(c),L.c(),L.m(E,H)):L&&(L.d(1),L=null),!c[0]&&c[2].url.length>0?B||(B=he(c),B.c(),B.m(E,K)):B&&(B.d(1),B=null),c[1]&&c[0]?S||(S=me(c),S.c(),S.m(E,null)):S&&(S.d(1),S=null),d&16&&G!==(G=!c[4])&&Qe(V,"disabled",G)},d:function(c){c&&y(e),Fe(P,c),L&&L.d(),B&&B.d(),S&&S.d(),ae=!1,De(be)}};return q("SvelteRegisterBlock",{block:ve,id:Ae.name,type:"if",source:"(45:2) {#if showForm}",ctx:t}),ve}function fe(t){let e,l=t[19]+"",a;const s={c:function(){e=b("option"),a=Ne(l),this.h()},l:function(n){e=v(n,"OPTION",{});var r=M(e);a=Ve(r,l),r.forEach(y),this.h()},h:function(){e.__value=t[19].toLocaleLowerCase(),$(e,e.__value),k(e,g,65,6,1562)},m:function(n,r){x(n,e,r),m(e,a)},p:ne,d:function(n){n&&y(e)}};return q("SvelteRegisterBlock",{block:s,id:fe.name,type:"each",source:"(56:5) {#each icons as icon}",ctx:t}),s}function de(t){let e,l="Please provide a title";const a={c:function(){e=b("p"),e.textContent=l,this.h()},l:function(o){e=v(o,"P",{class:!0,["data-svelte-h"]:!0}),F(e)!=="svelte-el95dw"&&(e.textContent=l),this.h()},h:function(){i(e,"class","text-error text-xs"),k(e,g,97,6,2394)},m:function(o,n){x(o,e,n)},d:function(o){o&&y(e)}};return q("SvelteRegisterBlock",{block:a,id:de.name,type:"if",source:"(88:5) {#if !titleIsValid && $formData.title.length > 0}",ctx:t}),a}function he(t){let e,l="Please provide a valid URL";const a={c:function(){e=b("p"),e.textContent=l,this.h()},l:function(o){e=v(o,"P",{class:!0,["data-svelte-h"]:!0}),F(e)!=="svelte-yk6txd"&&(e.textContent=l),this.h()},h:function(){i(e,"class","text-error text-xs"),k(e,g,100,6,2519)},m:function(o,n){x(o,e,n)},d:function(o){o&&y(e)}};return q("SvelteRegisterBlock",{block:a,id:he.name,type:"if",source:"(91:5) {#if !urlIsValid && $formData.url.length > 0}",ctx:t}),a}function me(t){let e,l="Allright !";const a={c:function(){e=b("p"),e.textContent=l,this.h()},l:function(o){e=v(o,"P",{class:!0,["data-svelte-h"]:!0}),F(e)!=="svelte-1ys3wpr"&&(e.textContent=l),this.h()},h:function(){i(e,"class","text-success text-xs"),k(e,g,103,6,2635)},m:function(o,n){x(o,e,n)},d:function(o){o&&y(e)}};return q("SvelteRegisterBlock",{block:a,id:me.name,type:"if",source:"(94:5) {#if titleIsValid && urlIsValid}",ctx:t}),a}function _e(t){var s;let e,l=((s=t[5])==null?void 0:s.username)==t[6].params.username&&ce(t);const a={c:function(){e=b("main"),l&&l.c(),this.h()},l:function(n){e=v(n,"MAIN",{class:!0});var r=M(e);l&&l.l(r),r.forEach(y),this.h()},h:function(){i(e,"class","max-w-xl mx-auto"),k(e,g,49,0,1005)},m:function(n,r){x(n,e,r),l&&l.m(e,null)},p:function(n,[r]){var _;((_=n[5])==null?void 0:_.username)==n[6].params.username?l?l.p(n,r):(l=ce(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i:ne,o:ne,d:function(n){n&&y(e),l&&l.d()}};return q("SvelteRegisterBlock",{block:a,id:_e.name,type:"component",source:"",ctx:t}),a}function He(t,e,l){let a,s,o,n,r,_,h;ee(re,"user"),te(t,re,u=>l(17,r=u)),ee(ue,"userData"),te(t,ue,u=>l(5,_=u)),ee(ie,"page"),te(t,ie,u=>l(6,h=u));let{$$slots:f={},$$scope:I}=e;ze("Page",f,[]);let{data:p}=e,O=!1,T=["Twitter","Facebook","Tinder","Copains d'avant","Custom"];const D={icon:"custom",title:"",url:""},N=Be(D);ee(N,"formData"),te(t,N,u=>l(2,n=u));async function Q(u){const G=Te(Ee,"users",r.uid);await Le(G,{links:Ie({...n,id:Date.now().toString()})}),N.set({icon:"custom",title:"",url:""}),l(3,O=!1)}function w(){N.set(D),l(3,O=!1)}t.$$.on_mount.push(function(){p===void 0&&!("data"in e||t.$$.bound[t.$$.props.data])&&console.warn("<Page> was created without expected prop 'data'")});const X=["data"];Object.keys(e).forEach(u=>{!~X.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<Page> was created with unknown prop '${u}'`)});function E(){n.icon=Oe(this),N.set(n),l(7,T)}function H(){n.title=this.value,N.set(n),l(7,T)}function K(){n.url=this.value,N.set(n),l(7,T)}const Y=()=>l(3,O=!0),V=()=>l(3,O=!0);return t.$$set=u=>{"data"in u&&l(11,p=u.data)},t.$capture_state=()=>({page:ie,db:Ee,user:re,userData:ue,writable:Be,arrayUnion:Ie,doc:Te,updateDoc:Le,data:p,showForm:O,icons:T,formDefaults:D,formData:N,addLink:Q,cancelLink:w,urlIsValid:s,titleIsValid:a,formIsValid:o,$formData:n,$user:r,$userData:_,$page:h}),t.$inject_state=u=>{"data"in u&&l(11,p=u.data),"showForm"in u&&l(3,O=u.showForm),"icons"in u&&l(7,T=u.icons),"urlIsValid"in u&&l(0,s=u.urlIsValid),"titleIsValid"in u&&l(1,a=u.titleIsValid),"formIsValid"in u&&l(4,o=u.formIsValid)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&4&&l(1,a=n.title.length<20&&n.title.length>0),t.$$.dirty&4&&l(0,s=n.url.match(/^(ftp|http|https):\/\/[^ "]+$/)),t.$$.dirty&3&&l(4,o=a&&s)},[s,a,n,O,o,_,h,T,N,Q,w,p,E,H,K,Y,V]}class Ye extends Me{constructor(e){super(e),qe(this,e,He,_e,xe,{data:11}),q("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:_e.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Ye as component};
