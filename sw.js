if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>i(e,t),f={module:{uri:t},exports:o,require:l};s[t]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-CTEYL0Wr.css",revision:null},{url:"assets/index-DOwlaaqm.js",revision:null},{url:"index.html",revision:"9611adf434f5d976bd41d7d91975bffb"},{url:"registerSW.js",revision:"ce2a775f5ff2164bd546211f4709364b"},{url:"manifest.webmanifest",revision:"1351d5af805fe4039374403c4adb59bd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
