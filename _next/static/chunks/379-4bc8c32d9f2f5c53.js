(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{4887:(e,t,r)=>{"use strict";r.d(t,{CodePager:()=>p,CodePagerPage:()=>v});var i=r(3365),n=r(1521),a=r(6362),o=r(4329),l=r(1523),s=r(6170),c=r(3406),u=r(6182),d=r(8300);r(1239),o.A.registerLanguage("bash",l.A),o.A.registerLanguage("xml",s.A),o.A.registerLanguage("javascript",c.A),o.A.registerLanguage("typescript",u.A),o.A.registerLanguage("css",d.A);let g=e=>{(0,n.useEffect)(()=>{let t=null==e?void 0:e.current;if(t)for(let e of"code"===t.tagName.toLowerCase()?[t]:t.querySelectorAll("code"))o.A.highlightElement(e);else o.A.highlightAll();return()=>{}},[e])};var f=r(2635),h=r.n(f);let v=e=>{let{children:t,className:r="",...n}=e;return(0,i.jsx)(a.AQ,{className:[r,h().page].join(" "),...n,children:t})},p=e=>{let{children:t,tabNames:r,multiBlocks:o=!1,fixedHeight:l=!1,className:s="",...c}=e,u=(0,n.useRef)(null);g(u);let d=r.map(e=>(0,i.jsx)(a.Vz,{as:"button",className:h().tab,children:e},e));return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(a.Bz,{className:[s,h().pager,o?h().multi:"",l?h().fixedH:""].join(" "),config:{useGestures:!1},...c,children:[(0,i.jsx)("div",{className:h().tabs,children:d}),(0,i.jsx)("div",{ref:u,className:h().pages,children:t})]})})}},7155:()=>{},3330:()=>{},1239:()=>{},2635:e=>{e.exports={pager:"code-pager_pager__1nLr8",tabs:"code-pager_tabs__KwOji",tab:"code-pager_tab__nGkHe",pages:"code-pager_pages__QocH6",page:"code-pager_page__OudcW",multi:"code-pager_multi__OthoI",fixedH:"code-pager_fixedH__TS4fS"}},1991:e=>{e.exports={header:"demo-header_header__XHBl7",popupTrigger:"demo-header_popupTrigger__P7aJa",menu:"demo-header_menu__PDzWc",trigger:"demo-header_trigger__s2VJi",modal:"demo-header_modal__FDCFD",content:"demo-header_content__rLPdu"}},2054:(e,t,r)=>{"use strict";r.d(t,{B:()=>l,O:()=>o});var i=r(4105),n=r(3629),a=r(8594);let o=(e,t,r)=>{if(s.has(e))return;let o=async(e,o)=>{let l=i.Tn(r)?await r(e):r,s=[],c=l?await (0,a.DP)(o,l,","):void 0;for(let e of(0,n.g2)(o,",",!0))e&&!i.mK(e,"=")&&s.push(e);return t(e,s,c)};s.set(e,o)},l=async(e,t,r)=>{let n=s.get(t);if(!n)throw i.Wp("Unknown action '".concat(t,"'"));return await n(e,r||"")},s=i.dg()},4061:(e,t,r)=>{"use strict";r.d(t,{L:()=>s,w:()=>l});var i=r(5237),n=r(3592),a=r(2054);function o(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class l{static register(){(0,a.O)("show",e=>new l(e))}constructor(e){o(this,"do",void 0),o(this,"undo",void 0),o(this,"toggle",void 0),(0,n.yp)(e),(0,n.Bt)(e);let{_show:t,_hide:r,_toggle:a}=c(e);this.do=t,this.undo=r,this[i.Vd]=a}}class s{static register(){(0,a.O)("hide",e=>new s(e))}constructor(e){o(this,"do",void 0),o(this,"undo",void 0),o(this,"toggle",void 0),(0,n.yp)(e),(0,n.kl)(e);let{_show:t,_hide:r,_toggle:a}=c(e);this.do=r,this.undo=t,this[i.Vd]=a}}let c=e=>({_show:async()=>{await (0,n.kl)(e)},_hide:async()=>{await (0,n.Bt)(e)},_toggle:async()=>{await (0,n.Y$)(e)}})},7038:(e,t,r)=>{"use strict";r.d(t,{A:()=>_,l:()=>p});var i=r(5237),n=r(4105),a=r(2178),o=r(5601),l=r(3592),s=r(8825),c=r(5532),u=r(3629),d=r(7345),g=r(2054),f=r(8594),h=r(6021);function v(e,t,r){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class p extends f.x0{static get(e,t){let r=super.get(e,t);return n.tH(r,p)?r:null}static register(){_("run",(e,t,r,i)=>new p(e,r,i),{})}constructor(e,t,r){var a,l,s,d;let g;super(e,r),v(this,"run",void 0),v(this,"reverse",void 0),v(this,"toggle",void 0),v(this,"getActions",void 0),v(this,"getConfig",void 0);let f=h.A?new h.A.Logger({name:"Trigger-".concat((0,u.H6)(e)),logAtCreation:{actions:t,config:r}}):null,p=null!==(a=null==r?void 0:r.once)&&void 0!==a&&a,_=null!==(l=null==r?void 0:r.oneWay)&&void 0!==l&&l,m=(null==r?void 0:r.delay)||0,b=null!==(s=null==r?void 0:r.doDelay)&&void 0!==s?s:m,y=null!==(d=null==r?void 0:r.undoDelay)&&void 0!==d?d:m,w=!1,A=async(e,r,i)=>{if(this.isDisabled())return;let a=(0,u.bq)();if(g=a,null==f||f.debug10("callActions [".concat(a,"] (new toggle state ").concat(i,")"),r),e&&(await (0,c.gE)(e),g!==a)){null==f||f.debug10("callActions [".concat(a,"]: overriden by ").concat(g));return}for(let e of t)null==f||f.debug10("callActions [".concat(a,"]"),e),r(e);(w=i)&&p&&(n.TF(x),n.TF(j),n.TF(k))},x=(0,o.W)(()=>{A(b,e=>{e.do()},!0)}),j=(0,o.W)(()=>{_||A(y,e=>{e.undo()},!1)}),k=(0,o.W)(()=>{A(w?y:b,e=>{e[i.Vd]()},!w)});this.run=x.invoke,this.reverse=j.invoke,this[i.Vd]=_?x.invoke:k.invoke,this.getActions=()=>[...t],this.getConfig=()=>n.JH(r||{})}}let _=(e,t,r)=>{let i=n.s2("on-".concat(e)),o=async o=>{var s,c;let d=[],h=A(o),v=n.Tn(r)?await r(o):r,p=(0,u.g2)(null!==(s=(0,l.bQ)(o,n.s2("on-".concat(e))))&&void 0!==s?s:"",m,!0);for(let e of n.pP(o))e.startsWith("".concat(i,"--"))&&p.push(e.slice(n.Y5(i)+2));for(let e of p){let[r,i]=(0,u.g2)(e,b,!0,1),[l,s]=(0,u.g2)(r,y,!0,1),p=n.NV((0,u.g2)(l,",",!0))||[],_=await (0,f.DP)(i,n.kp(h,v),b),m=null!==(c=_.actOn)&&void 0!==c?c:o,A=[];for(let e of(0,u.g2)(s||"",y,!0)){let[t,r]=(0,u.g2)(e,w,!0,1);try{A.push(await (0,g.B)(m,t,r||""))}catch(e){if(n.tH(e,a.Qt))continue;throw e}}d.push(await t(o,p,A,_))}return d};(0,f.Cu)(e,o,null,{selector:'[class^="'.concat(i,'--"],[class*=" ').concat(i,'--"],[data-').concat(i,"]")})},m=";",b="+",y="@",w=":",A=e=>({id:d.oI,once:d.p6,oneWay:d.p6,delay:d.yb,doDelay:d.yb,undoDelay:d.yb,actOn:(t,r)=>{var i;return null!==(i=n.J6(r)?(0,s.c)(r,e):null)&&void 0!==i?i:void 0}})},8825:(e,t,r)=>{"use strict";r.d(t,{c:()=>s});var i=r(4105),n=r(3592),a=r(4008),o=r(3708);let l=(e,t)=>{let r,a;if(!e)return t;if("#"===e[0])return i.h0(e.slice(1))||null;let l=["next","prev","this","first","last"].find(t=>e.startsWith("".concat(t,"."))||e.startsWith("".concat(t,"-"))||e===t);if(!l)throw i.Wp("Invalid search specification '".concat(e,"'"));let s=e.slice(i.Y5(l)),d=s.slice(0,1),_=s.slice(1);if("."===d)r=d+_;else{if(_||(_=(0,n.bQ)(t,c)||""),!_)throw i.Wp("No reference name in '".concat(e,"'"));r="[".concat(u,'="').concat(_,'"]')}if("first"===l)a=g(r);else if("last"===l)a=f(r);else if("this"===l)a=h(r,t);else if("next"===l)a=v(r,t);else{if("prev"!==l)return(0,o.vV)(i.Re("Unhandled relation case ".concat(l))),null;a=p(r,t)}return a||null},s=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200;return(0,a.xk)(()=>l(e,t),r)},c=i.s2("ref"),u=i.VA(c),d=e=>i.pA(e),g=e=>i.iv(e),f=e=>{let t=d(e);return t&&t[i.Y5(t)-1]||null},h=(e,t)=>t.closest(e),v=(e,t)=>_(e,t,!1),p=(e,t)=>_(e,t,!0),_=(e,t,r)=>{if(t=h(e,t)||t,!i.x7().contains(t))return null;let n=d(e);if(!n)return null;let a=i.Y5(n),o=r?a-1:-1;for(let e=0;e<a;e++){let a=i.sn(t,n[e]);if(n[e]===t||a){o=e+(r?-1:a?0:1);break}}return n[o]||null}}}]);