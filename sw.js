if(!self.define){let e,n={};const r=(r,i)=>(r=new URL(r+".js",i).href,n[r]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=n,document.head.appendChild(e)}else e=r,importScripts(r),n()})).then((()=>{let e=n[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,s)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(n[l])return;let u={};const o=e=>r(e,l),t={module:{uri:l},exports:u,require:o};n[l]=Promise.all(i.map((e=>t[e]||o(e)))).then((e=>(s(...e),u)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/7luSgxaw.js",revision:null},{url:"_nuxt/BtWmaWeg.js",revision:null},{url:"_nuxt/builds/latest.json",revision:"3db804c29d8335d0563a3d26d51ac4d9"},{url:"_nuxt/builds/meta/b4547341-dc08-4521-bee6-3d3fc1255918.json",revision:null},{url:"_nuxt/D5gOYdM7.js",revision:null},{url:"_nuxt/default-cover.oB27RXoN.svg",revision:null},{url:"_nuxt/entry.BjS9aAEC.css",revision:null},{url:"_nuxt/error-404.CJkeVOTF.css",revision:null},{url:"_nuxt/error-500.D9UKVWqT.css",revision:null},{url:"_nuxt/MJdXfRFg.js",revision:null},{url:"_nuxt/profile-photo.CcXd1nkm.svg",revision:null},{url:"_payload.json",revision:"7369c899817f0cb0d6a0b8871b144785"},{url:"200",revision:"866a7c30f6e5c1d33eb7dc9fc5a826b2"},{url:"404",revision:"866a7c30f6e5c1d33eb7dc9fc5a826b2"},{url:"icon.svg",revision:"eabdda0c029b30032f7b8159670c49c6"},{url:"/inter-knot/",revision:"e63985efb712a1134cb37a83de2da3f7"},{url:"pwa-999.png",revision:"307547c347d7a616cb88ce7a79ed965f"},{url:"manifest.webmanifest",revision:"30097da547b9d8b5752fffb752b93111"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/inter-knot/")))}));
