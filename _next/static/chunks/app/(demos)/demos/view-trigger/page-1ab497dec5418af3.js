(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9138],{8686:(e,i,r)=>{Promise.resolve().then(r.t.bind(r,4159,23)),Promise.resolve().then(r.bind(r,4028)),Promise.resolve().then(r.bind(r,9323)),Promise.resolve().then(r.bind(r,5616)),Promise.resolve().then(r.bind(r,1222)),Promise.resolve().then(r.bind(r,1628)),Promise.resolve().then(r.bind(r,1580)),Promise.resolve().then(r.bind(r,4426)),Promise.resolve().then(r.bind(r,9308)),Promise.resolve().then(r.bind(r,3761)),Promise.resolve().then(r.t.bind(r,3330,23)),Promise.resolve().then(r.t.bind(r,7155,23)),Promise.resolve().then(r.bind(r,7092)),Promise.resolve().then(r.bind(r,4887)),Promise.resolve().then(r.t.bind(r,5311,23)),Promise.resolve().then(r.bind(r,2837)),Promise.resolve().then(r.t.bind(r,8040,23))},7092:(e,i,r)=>{"use strict";r.d(i,{default:()=>v});var s=r(3365),l=r(1521),n=r(1678),t=r(4126),o=r(9939),d=r(4061),c=r(3896),a=r(6362);r(8914);var h=r(2829),u=r.n(h);function v(){let e=(0,l.useRef)(null),i=(0,l.useRef)(null),r=(0,l.useRef)([]),h=(0,l.useRef)([]),v=e=>{e&&r.current.push(e)},m=e=>{e&&h.current.push(e)},f=e=>h.current[r.current.indexOf(e)],x=e=>r.current[h.current.indexOf(e)],b=e=>{var r,s;let l=e.target,t=null===(s=i.current)||void 0===s?void 0:null===(r=s.getWidget())||void 0===r?void 0:r.getScrollable();if(t&&l instanceof Element){let e=x(l);e&&n.A.reuse().scrollTo(e,{scrollable:t,offset:{top:-5}})}};return(0,l.useEffect)(()=>{var e,s;let l;let n=null===(s=i.current)||void 0===s?void 0:null===(e=s.getWidget())||void 0===e?void 0:e.getScrollable(),o=[...r.current],d=(e,i)=>{let r=f(e);r&&("at"===i.views[0]?r.classList.add(u().inview):r.classList.remove(u().inview))};if(n)for(let e of(l=t.Q.create({root:n,rootMargin:"0px"}),o))l.onView(e,d);return()=>{for(let e of o)null==l||l.offView(e,d)}},[]),(0,l.useEffect)(()=>{let i;let r=e.current;return r&&(new o.l(r,[new d.w(r)],{delay:1e3}),i=new c.Y(r,{delay:2500})),()=>{null==i||i.destroy()}},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:u().wrapper,children:[(0,s.jsx)("p",{ref:e,className:[u().msg,"lisn-hide"].join(" "),children:"Scroll the box"}),(0,s.jsxs)("div",{className:u().demo,children:[(0,s.jsxs)("div",{className:u().tabs,children:[(0,s.jsx)("div",{ref:m,onClick:b,className:u().tab,children:"L"}),(0,s.jsx)("div",{ref:m,onClick:b,className:u().tab,children:"I"}),(0,s.jsx)("div",{ref:m,onClick:b,className:u().tab,children:"S"}),(0,s.jsx)("div",{ref:m,onClick:b,className:u().tab,children:"N"})]}),(0,s.jsxs)(a.GY,{widgetRef:i,className:u().scrollable,children:[(0,s.jsx)("div",{ref:v,className:u().trigger}),(0,s.jsxs)("div",{className:u().section,children:[(0,s.jsx)("h1",{children:"L"}),(0,s.jsx)("h4",{children:"Lightweight."}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Vanilla TypeScript"}),(0,s.jsx)("li",{children:"Highly optimized"}),(0,s.jsx)("li",{children:"No layout thrashing"})]})]}),(0,s.jsx)("div",{ref:v,className:u().trigger}),(0,s.jsxs)("div",{className:u().section,children:[(0,s.jsx)("h1",{children:"I"}),(0,s.jsx)("h4",{children:"Interactive."}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Powerful API"}),(0,s.jsx)("li",{children:"Multi gesture support"}),(0,s.jsx)("li",{children:"Mobile/touch ready"})]})]}),(0,s.jsx)("div",{ref:v,className:u().trigger}),(0,s.jsxs)("div",{className:u().section,children:[(0,s.jsx)("h1",{children:"S"}),(0,s.jsx)("h4",{children:"Simple."}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Intuitive syntax"}),(0,s.jsx)("li",{children:"Consistent API"}),(0,s.jsx)("li",{children:"HTML-only mode"})]})]}),(0,s.jsx)("div",{ref:v,className:u().trigger}),(0,s.jsxs)("div",{className:u().section,children:[(0,s.jsx)("h1",{children:"N"}),(0,s.jsx)("h4",{children:"No-nonsense."}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"What says on the box"}),(0,s.jsx)("li",{children:"Sensible defaults"}),(0,s.jsx)("li",{children:"Highly customizable"})]})]})]})]})]})})}},8914:()=>{},2829:e=>{e.exports={wrapper:"demo_wrapper__ppGrg",demo:"demo_demo__tMzyF",scrollable:"demo_scrollable__QPtel",trigger:"demo_trigger__pol9X",tabs:"demo_tabs__dOmgf",tab:"demo_tab__E2Sc9",inview:"demo_inview__i0JsC",section:"demo_section__p_inC"}},9939:(e,i,r)=>{"use strict";r.d(i,{l:()=>t});var s=r(4105),l=r(4008),n=r(7038);class t extends n.l{static register(){(0,n.A)("load",(e,i,r,s)=>new t(e,r,s))}constructor(e,i,r){if(super(e,i,r),!function(e,i,r){var s;(i="symbol"==typeof(s=function(e,i){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,i||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(e)}(i,"string"))?s:s+"")in e?Object.defineProperty(e,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[i]=r}(this,"getConfig",void 0),this.getConfig=()=>s.JH(r),!s.Y5(i))return;(0,l.z4)().then(this.run)}}}},e=>{var i=i=>e(e.s=i);e.O(0,[4586,8139,1934,8930,789,4159,1756,9689,773,2347,6239,7358],()=>i(8686)),_N_E=e.O()}]);