(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{1080:function(e,t,n){Promise.resolve().then(n.t.bind(n,5935,23)),Promise.resolve().then(n.t.bind(n,3385,23)),Promise.resolve().then(n.bind(n,1660))},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return l},default:function(){return i}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function a(e){let{type:t,props:n}=e,a=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let l=r[e]||e.toLowerCase();"script"===t&&("async"===l||"defer"===l||"noModule"===l)?a[l]=!!n[e]:a.setAttribute(l,n[e])}let{children:l,dangerouslySetInnerHTML:i}=n;return i?a.innerHTML=i.__html||"":l&&(a.textContent="string"==typeof l?l:Array.isArray(l)?l.join(""):""),a}function l(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function i(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,a="";if(r){let{children:e}=r.props;a="string"==typeof e?e:Array.isArray(e)?e.join(""):""}a!==document.title&&(document.title=a),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),i=Number(r.content),o=[];for(let t=0,n=r.previousElementSibling;t<i;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&o.push(n)}let u=t.map(a).filter(e=>{for(let t=0,n=o.length;t<n;t++)if(l(o[t],e))return o.splice(t,1),!1;return!0});o.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(i-o.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return m},initScriptLoader:function(){return g},default:function(){return v}});let r=n(6921),a=n(1884),l=n(3827),i=r._(n(9542)),o=a._(n(4090)),s=n(7484),u=n(3313),c=n(2185),d=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},y=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:a=null,dangerouslySetInnerHTML:l,children:i="",strategy:o="afterInteractive",onError:s,stylesheets:c}=e,y=n||t;if(y&&f.has(y))return;if(d.has(t)){f.add(y),d.get(t).then(r,s);return}let m=()=>{a&&a(),f.add(y)},g=document.createElement("script"),b=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),m()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});for(let[n,r]of(l?(g.innerHTML=l.__html||"",m()):i?(g.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(g.src=t,d.set(t,b)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=u.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===o&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",o),c&&h(c),document.body.appendChild(g)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>y(e))}):y(e)}function g(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:a=null,strategy:u="afterInteractive",onError:d,stylesheets:p,...h}=e,{updateScripts:m,scripts:g,getIsSsr:b,appDir:v,nonce:_}=(0,o.useContext)(s.HeadManagerContext),x=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||n;x.current||(a&&e&&f.has(e)&&a(),x.current=!0)},[a,t,n]);let E=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!E.current&&("afterInteractive"===u?y(e):"lazyOnload"===u&&("complete"===document.readyState?(0,c.requestIdleCallback)(()=>y(e)):window.addEventListener("load",()=>{(0,c.requestIdleCallback)(()=>y(e))})),E.current=!0)},[e,u]),("beforeInteractive"===u||"worker"===u)&&(m?(g[u]=(g[u]||[]).concat([{id:t,src:n,onLoad:r,onReady:a,onError:d,...h}]),m(g)):b&&b()?f.add(t||n):b&&!b()&&y(e)),v){if(p&&p.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===u)return n?(i.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"}),(0,l.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:_,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===u&&n&&i.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let v=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1660:function(e,t,n){"use strict";n.r(t),n.d(t,{Navigation:function(){return u}});var r=n(3827),a=n(1575),l=n(8792),i=n(5313),o=n(2169);let s=[{href:"/",label:"About"},{href:"/resume/Omercan-Balandi-Resume.pdf",label:"Resume",external:!0}];function u(){let e=(0,i.usePathname)();return(0,r.jsxs)("nav",{className:"flex items-center justify-between gap-2 text-xs",children:[(0,r.jsx)("h1",{className:"font-serif text-sm",children:"\xd6mercan Balandı"}),(0,r.jsx)("div",{className:"flex items-center gap-4 ",children:s.map(t=>{let{href:n,label:i,external:s}=t;return s?(0,r.jsxs)("a",{href:n,className:(0,o.cn)("inline-flex items-baseline rounded-md py-1 text-gray-400 ",{"text-gray-900":e===n,"hover:text-gray-900":e!==n}),target:"_blank",rel:"noopener noreferrer",children:[i,(0,r.jsx)(a.Z,{size:12})]},n):(0,r.jsxs)(l.default,{href:n,className:(0,o.cn)("inline-flex items-baseline rounded-md py-1 text-gray-400 ",{"text-gray-900":e===n,"hover:text-gray-900":e!==n}),children:[i,s&&(0,r.jsx)(a.Z,{size:12})]},n)})})]})}},2169:function(e,t,n){"use strict";n.d(t,{cn:function(){return l}});var r=n(3167),a=n(1367);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}},3385:function(){}},function(e){e.O(0,[250,173,971,69,744],function(){return e(e.s=1080)}),_N_E=e.O()}]);