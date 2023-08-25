"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3750],{51961:function(e,t,n){n.d(t,{V:function(){return ne}});var r=n(67294),o=n(32984),i=n(12351),l=n(23784),u=n(61363),a=n(64103),c=n(19946),s=n(84575),d=n(3855);function f(e,t,n,o){let i=(0,d.E)(n);(0,r.useEffect)((()=>{function n(e){i.current(e)}return(e=null!=e?e:window).addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}),[e,t,o])}var p=n(14879),v=n(51074),m=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(m||{});var E=n(15466),h=n(16723);let g=new Set,b=new Map;function w(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function y(e){let t=b.get(e);!t||(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function T(e,t=!0){(0,h.e)((()=>{if(!t||!e.current)return;let n=e.current,r=(0,E.r)(n);if(r){g.add(n);for(let e of b.keys())e.contains(n)&&(y(e),b.delete(e));return r.querySelectorAll("body > *").forEach((e=>{if(e instanceof HTMLElement){for(let t of g)if(e.contains(t))return;1===g.size&&(b.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),w(e))}})),()=>{if(g.delete(n),g.size>0)r.querySelectorAll("body > *").forEach((e=>{if(e instanceof HTMLElement&&!b.has(e)){for(let t of g)if(e.contains(t))return;b.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),w(e)}}));else for(let e of b.keys())y(e),b.delete(e)}}}),[t])}var C=n(73935);let P=(0,r.createContext)(!1);function S(){return(0,r.useContext)(P)}function A(e){return r.createElement(P.Provider,{value:e.force},e.children)}var F=n(82180);let O=r.Fragment,R=(0,i.yV)((function(e,t){let n=e,o=(0,r.useRef)(null),u=(0,l.T)((0,l.h)((e=>{o.current=e})),t),a=(0,v.i)(o),c=function(e){let t=S(),n=(0,r.useContext)(D),o=(0,v.i)(e),[i,l]=(0,r.useState)((()=>{if(!t&&null!==n||"undefined"==typeof window)return null;let e=null==o?void 0:o.getElementById("headlessui-portal-root");if(e)return e;if(null===o)return null;let r=o.createElement("div");return r.setAttribute("id","headlessui-portal-root"),o.body.appendChild(r)}));return(0,r.useEffect)((()=>{null!==i&&(null!=o&&o.body.contains(i)||null==o||o.body.appendChild(i))}),[i,o]),(0,r.useEffect)((()=>{t||null!==n&&l(n.current)}),[n,l,t]),i}(o),[s]=(0,r.useState)((()=>{var e;return"undefined"==typeof window?null:null!=(e=null==a?void 0:a.createElement("div"))?e:null})),d=(0,F.H)();return(0,h.e)((()=>{if(c&&s)return c.appendChild(s),()=>{var e;!c||!s||(c.removeChild(s),c.childNodes.length<=0&&(null==(e=c.parentElement)||e.removeChild(c)))}}),[c,s]),d&&c&&s?(0,C.createPortal)((0,i.sY)({ourProps:{ref:u},theirProps:n,defaultTag:O,name:"Portal"}),s):null})),k=r.Fragment,D=(0,r.createContext)(null),x=(0,i.yV)((function(e,t){let{target:n,...o}=e,u={ref:(0,l.T)(t)};return r.createElement(D.Provider,{value:n},(0,i.sY)({ourProps:u,theirProps:o,defaultTag:k,name:"Popover.Group"}))})),L=Object.assign(R,{Group:x}),N=(0,r.createContext)(null);function M(){let e=(0,r.useContext)(N);if(null===e){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,M),e}return e}function H(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)((()=>function(e){let n=(0,r.useCallback)((e=>(t((t=>[...t,e])),()=>t((t=>{let n=t.slice(),r=n.indexOf(e);return-1!==r&&n.splice(r,1),n})))),[]),o=(0,r.useMemo)((()=>({register:n,slot:e.slot,name:e.name,props:e.props})),[n,e.slot,e.name,e.props]);return r.createElement(N.Provider,{value:o},e.children)}),[t])]}let j=(0,i.yV)((function(e,t){let n=M(),r=`headlessui-description-${(0,c.M)()}`,o=(0,l.T)(t);(0,h.e)((()=>n.register(r)),[r,n.register]);let u=e,a={ref:o,...n.props,id:r};return(0,i.sY)({ourProps:a,theirProps:u,slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}));var I=n(16567);let Y=(0,r.createContext)((()=>{}));Y.displayName="StackContext";var V=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(V||{});function $({children:e,onUpdate:t,type:n,element:o}){let i=(0,r.useContext)(Y),l=(0,r.useCallback)(((...e)=>{null==t||t(...e),i(...e)}),[i,t]);return(0,h.e)((()=>(l(0,n,o),()=>l(1,n,o))),[l,n,o]),r.createElement(Y.Provider,{value:l},e)}var U,q=n(4503),B=((U=B||{})[U.Open=0]="Open",U[U.Closed=1]="Closed",U),_=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(_||{});let W={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},G=(0,r.createContext)(null);function Z(e){let t=(0,r.useContext)(G);if(null===t){let t=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Z),t}return t}function J(e,t){return(0,o.E)(t.type,W,e,t)}G.displayName="DialogContext";let z=i.AN.RenderStrategy|i.AN.Static,X=(0,i.yV)((function(e,t){let{open:n,onClose:a,initialFocus:d,__demoMode:h=!1,...g}=e,[b,w]=(0,r.useState)(0),y=(0,I.oJ)();void 0===n&&null!==y&&(n=(0,o.E)(y,{[I.ZM.Open]:!0,[I.ZM.Closed]:!1}));let C=(0,r.useRef)(new Set),P=(0,r.useRef)(null),S=(0,l.T)(P,t),O=(0,v.i)(P),R=e.hasOwnProperty("open")||null!==y,k=e.hasOwnProperty("onClose");if(!R&&!k)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!R)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!k)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof n)throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if("function"!=typeof a)throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let D=n?0:1,[x,N]=(0,r.useReducer)(J,{titleId:null,descriptionId:null,panelRef:(0,r.createRef)()}),M=(0,r.useCallback)((()=>a(!1)),[a]),j=(0,r.useCallback)((e=>N({type:0,id:e})),[N]),Y=!!(0,F.H)()&&(!h&&0===D),U=b>1,B=null!==(0,r.useContext)(G),_=function(e,t=30,{initialFocus:n,containers:o}={}){let i=(0,r.useRef)(null),l=(0,r.useRef)(null),a=(0,p.t)(),c=Boolean(16&t),d=Boolean(2&t),m=(0,v.i)(e);return(0,r.useEffect)((()=>{!c||i.current||(i.current=null==m?void 0:m.activeElement)}),[c,m]),(0,r.useEffect)((()=>{if(c)return()=>{(0,s.C5)(i.current),i.current=null}}),[c]),(0,r.useEffect)((()=>{if(!d)return;let t=e.current;if(!t)return;let r=null==m?void 0:m.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===r)return void(l.current=r)}else if(t.contains(r))return void(l.current=r);null!=n&&n.current?(0,s.C5)(n.current):(0,s.jA)(t,s.TO.First)===s.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=null==m?void 0:m.activeElement}),[e,n,d,m]),f(null==m?void 0:m.defaultView,"keydown",(n=>{!(4&t)||!e.current||n.key===u.R.Tab&&(n.preventDefault(),(0,s.jA)(e.current,(n.shiftKey?s.TO.Previous:s.TO.Next)|s.TO.WrapAround)===s.fE.Success&&(l.current=null==m?void 0:m.activeElement))})),f(null==m?void 0:m.defaultView,"focus",(n=>{if(!(8&t))return;let r=new Set(null==o?void 0:o.current);if(r.add(e),!r.size)return;let i=l.current;if(!i||!a.current)return;let u=n.target;u&&u instanceof HTMLElement?function(e,t){var n;for(let r of e)if(null!=(n=r.current)&&n.contains(t))return!0;return!1}(r,u)?(l.current=u,(0,s.C5)(u)):(n.preventDefault(),n.stopPropagation(),(0,s.C5)(i)):(0,s.C5)(l.current)}),!0),i}(P,Y?(0,o.E)(U?"parent":"leaf",{parent:m.RestoreFocus,leaf:m.All&~m.FocusLock}):m.None,{initialFocus:d,containers:C});T(P,!!U&&Y),(0,q.O)((()=>{var e,t;return[...Array.from(null!=(e=null==O?void 0:O.querySelectorAll("body > *"))?e:[]).filter((e=>!(!(e instanceof HTMLElement)||e.contains(_.current)||x.panelRef.current&&e.contains(x.panelRef.current)))),null!=(t=x.panelRef.current)?t:P.current]}),(()=>{0===D&&(U||M())}),q.A.IgnoreScrollbars),f(null==O?void 0:O.defaultView,"keydown",(e=>{e.key===u.R.Escape&&0===D&&(U||(e.preventDefault(),e.stopPropagation(),M()))})),(0,r.useEffect)((()=>{var e;if(0!==D||B)return;let t=(0,E.r)(P);if(!t)return;let n=t.documentElement,r=null!=(e=t.defaultView)?e:window,o=n.style.overflow,i=n.style.paddingRight,l=r.innerWidth-n.clientWidth;return n.style.overflow="hidden",n.style.paddingRight=`${l}px`,()=>{n.style.overflow=o,n.style.paddingRight=i}}),[D,B]),(0,r.useEffect)((()=>{if(0!==D||!P.current)return;let e=new IntersectionObserver((e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&M()}));return e.observe(P.current),()=>e.disconnect()}),[D,P,M]);let[W,Z]=H(),X=`headlessui-dialog-${(0,c.M)()}`,K=(0,r.useMemo)((()=>[{dialogState:D,close:M,setTitleId:j},x]),[D,x,M,j]),Q=(0,r.useMemo)((()=>({open:0===D})),[D]),ee={ref:S,id:X,role:"dialog","aria-modal":0===D||void 0,"aria-labelledby":x.titleId,"aria-describedby":W,onClick(e){e.stopPropagation()}};return r.createElement($,{type:"Dialog",element:P,onUpdate:(0,r.useCallback)(((e,t,n)=>{"Dialog"===t&&(0,o.E)(e,{[V.Add](){C.current.add(n),w((e=>e+1))},[V.Remove](){C.current.add(n),w((e=>e-1))}})}),[])},r.createElement(A,{force:!0},r.createElement(L,null,r.createElement(G.Provider,{value:K},r.createElement(L.Group,{target:P},r.createElement(A,{force:!1},r.createElement(Z,{slot:Q,name:"Dialog.Description"},(0,i.sY)({ourProps:ee,theirProps:g,slot:Q,defaultTag:"div",features:z,visible:0===D,name:"Dialog"}))))))))})),K=(0,i.yV)((function(e,t){let[{dialogState:n,close:o}]=Z("Dialog.Overlay"),u=(0,l.T)(t),s=`headlessui-dialog-overlay-${(0,c.M)()}`,d=(0,r.useCallback)((e=>{if(e.target===e.currentTarget){if((0,a.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),o()}}),[o]),f=(0,r.useMemo)((()=>({open:0===n})),[n]);return(0,i.sY)({ourProps:{ref:u,id:s,"aria-hidden":!0,onClick:d},theirProps:e,slot:f,defaultTag:"div",name:"Dialog.Overlay"})})),Q=(0,i.yV)((function(e,t){let[{dialogState:n},o]=Z("Dialog.Backdrop"),u=(0,l.T)(t),a=`headlessui-dialog-backdrop-${(0,c.M)()}`;(0,r.useEffect)((()=>{if(null===o.panelRef.current)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")}),[o.panelRef]);let s=(0,r.useMemo)((()=>({open:0===n})),[n]);return r.createElement(A,{force:!0},r.createElement(L,null,(0,i.sY)({ourProps:{ref:u,id:a,"aria-hidden":!0},theirProps:e,slot:s,defaultTag:"div",name:"Dialog.Backdrop"})))})),ee=(0,i.yV)((function(e,t){let[{dialogState:n},o]=Z("Dialog.Panel"),u=(0,l.T)(t,o.panelRef),a=`headlessui-dialog-panel-${(0,c.M)()}`,s=(0,r.useMemo)((()=>({open:0===n})),[n]);return(0,i.sY)({ourProps:{ref:u,id:a},theirProps:e,slot:s,defaultTag:"div",name:"Dialog.Panel"})})),te=(0,i.yV)((function(e,t){let[{dialogState:n,setTitleId:o}]=Z("Dialog.Title"),u=`headlessui-dialog-title-${(0,c.M)()}`,a=(0,l.T)(t);(0,r.useEffect)((()=>(o(u),()=>o(null))),[u,o]);let s=(0,r.useMemo)((()=>({open:0===n})),[n]);return(0,i.sY)({ourProps:{ref:a,id:u},theirProps:e,slot:s,defaultTag:"h2",name:"Dialog.Title"})})),ne=Object.assign(X,{Backdrop:Q,Panel:ee,Overlay:K,Title:te,Description:j})},61363:function(e,t,n){n.d(t,{R:function(){return o}});var r,o=((r=o||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},11355:function(e,t,n){n.d(t,{u:function(){return M}});var r=n(67294),o=n(12351),i=n(16567),l=n(32984),u=n(81021),a=n(19946),c=n(14879),s=n(16723),d=n(3855),f=n(82180),p=n(23784);var v=n(9362);function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function E(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h,g=((h=g||{}).Ended="ended",h.Cancelled="cancelled",h);function b(e,t,n,r){let o=n?"enter":"leave",i=(0,v.k)(),u=void 0!==r?function(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}(r):()=>{},a=(0,l.E)(o,{enter:()=>t.enter,leave:()=>t.leave}),c=(0,l.E)(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),s=(0,l.E)(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return E(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),m(e,...a,...s),i.nextFrame((()=>{E(e,...s),m(e,...c),function(e,t){let n=(0,v.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,l]=[r,o].map((e=>{let[t=0]=e.split(",").filter(Boolean).map((e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e))).sort(((e,t)=>t-e));return t}));if(i+l!==0){let r=[];r.push(n.addEventListener(e,"transitionrun",(()=>{r.splice(0).forEach((e=>e())),r.push(n.addEventListener(e,"transitionend",(()=>{t("ended"),r.splice(0).forEach((e=>e()))}),{once:!0}),n.addEventListener(e,"transitioncancel",(()=>{t("cancelled"),r.splice(0).forEach((e=>e()))}),{once:!0}))}),{once:!0}))}else t("ended");n.add((()=>t("cancelled"))),n.dispose}(e,(n=>("ended"===n&&(E(e,...a),m(e,...t.entered)),u(n))))})),i.dispose}var w=n(94192);function y({container:e,direction:t,classes:n,events:r,onStart:o,onStop:i}){let u=(0,c.t)(),a=(0,w.G)(),f=(0,d.E)(t),p=(0,d.E)((()=>(0,l.E)(f.current,{enter:()=>r.current.beforeEnter(),leave:()=>r.current.beforeLeave(),idle:()=>{}}))),m=(0,d.E)((()=>(0,l.E)(f.current,{enter:()=>r.current.afterEnter(),leave:()=>r.current.afterLeave(),idle:()=>{}})));(0,s.e)((()=>{let t=(0,v.k)();a.add(t.dispose);let r=e.current;if(r&&"idle"!==f.current&&u.current)return t.dispose(),p.current(),o.current(f.current),t.add(b(r,n.current,"enter"===f.current,(e=>{t.dispose(),(0,l.E)(e,{[g.Ended](){m.current(),i.current(f.current)},[g.Cancelled]:()=>{}})}))),t.dispose}),[t])}function T(e=""){return e.split(" ").filter((e=>e.trim().length>1))}let C=(0,r.createContext)(null);C.displayName="TransitionContext";var P,S=((P=S||{}).Visible="visible",P.Hidden="hidden",P);let A=(0,r.createContext)(null);function F(e){return"children"in e?F(e.children):e.current.filter((({state:e})=>"visible"===e)).length>0}function O(e){let t=(0,d.E)(e),n=(0,r.useRef)([]),i=(0,c.t)(),a=(0,d.E)(((e,r=o.l4.Hidden)=>{let a=n.current.findIndex((({id:t})=>t===e));-1!==a&&((0,l.E)(r,{[o.l4.Unmount](){n.current.splice(a,1)},[o.l4.Hidden](){n.current[a].state="hidden"}}),(0,u.Y)((()=>{var e;!F(n)&&i.current&&(null==(e=t.current)||e.call(t))})))})),s=(0,d.E)((e=>{let t=n.current.find((({id:t})=>t===e));return t?"visible"!==t.state&&(t.state="visible"):n.current.push({id:e,state:"visible"}),()=>a.current(e,o.l4.Unmount)}));return(0,r.useMemo)((()=>({children:n,register:s,unregister:a})),[s,a,n])}function R(){}A.displayName="NestingContext";let k=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function D(e){var t;let n={};for(let r of k)n[r]=null!=(t=e[r])?t:R;return n}let x=o.AN.RenderStrategy,L=(0,o.yV)((function(e,t){let{beforeEnter:n,afterEnter:u,beforeLeave:c,afterLeave:s,enter:v,enterFrom:m,enterTo:E,entered:h,leave:g,leaveFrom:b,leaveTo:w,...P}=e,S=(0,r.useRef)(null),R=(0,p.T)(S,t),[k,L]=(0,r.useState)("visible"),N=P.unmount?o.l4.Unmount:o.l4.Hidden,{show:M,appear:H,initial:j}=function(){let e=(0,r.useContext)(C);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:I,unregister:Y}=function(){let e=(0,r.useContext)(A);if(null===e)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),V=(0,r.useRef)(null),$=(0,a.M)(),U=(0,r.useRef)(!1),q=O((()=>{U.current||(L("hidden"),Y.current($))}));(0,r.useEffect)((()=>{if($)return I.current($)}),[I,$]),(0,r.useEffect)((()=>{if(N===o.l4.Hidden&&$){if(M&&"visible"!==k)return void L("visible");(0,l.E)(k,{hidden:()=>Y.current($),visible:()=>I.current($)})}}),[k,$,I,Y,M,N]);let B=(0,d.E)({enter:T(v),enterFrom:T(m),enterTo:T(E),entered:T(h),leave:T(g),leaveFrom:T(b),leaveTo:T(w)}),_=function(e){let t=(0,r.useRef)(D(e));return(0,r.useEffect)((()=>{t.current=D(e)}),[e]),t}({beforeEnter:n,afterEnter:u,beforeLeave:c,afterLeave:s}),W=(0,f.H)();(0,r.useEffect)((()=>{if(W&&"visible"===k&&null===S.current)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}),[S,k,W]);let G=j&&!H,Z=!W||G||V.current===M?"idle":M?"enter":"leave";y({container:S,classes:B,events:_,direction:Z,onStart:(0,d.E)((()=>{})),onStop:(0,d.E)((e=>{"leave"===e&&!F(q)&&(L("hidden"),Y.current($))}))}),(0,r.useEffect)((()=>{!G||(N===o.l4.Hidden?V.current=null:V.current=M)}),[M,G,k]);let J=P,z={ref:R};return r.createElement(A.Provider,{value:q},r.createElement(i.up,{value:(0,l.E)(k,{visible:i.ZM.Open,hidden:i.ZM.Closed})},(0,o.sY)({ourProps:z,theirProps:J,defaultTag:"div",features:x,visible:"visible"===k,name:"Transition.Child"})))})),N=(0,o.yV)((function(e,t){let{show:n,appear:u=!1,unmount:a,...c}=e,d=(0,p.T)(t);(0,f.H)();let v=(0,i.oJ)();if(void 0===n&&null!==v&&(n=(0,l.E)(v,{[i.ZM.Open]:!0,[i.ZM.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,E]=(0,r.useState)(n?"visible":"hidden"),h=O((()=>{E("hidden")})),[g,b]=(0,r.useState)(!0),w=(0,r.useRef)([n]);(0,s.e)((()=>{!1!==g&&w.current[w.current.length-1]!==n&&(w.current.push(n),b(!1))}),[w,n]);let y=(0,r.useMemo)((()=>({show:n,appear:u,initial:g})),[n,u,g]);(0,r.useEffect)((()=>{n?E("visible"):F(h)||E("hidden")}),[n,h]);let T={unmount:a};return r.createElement(A.Provider,{value:h},r.createElement(C.Provider,{value:y},(0,o.sY)({ourProps:{...T,as:r.Fragment,children:r.createElement(L,{ref:d,...T,...c})},theirProps:{},defaultTag:r.Fragment,features:x,visible:"visible"===m,name:"Transition"})))}));let M=Object.assign(N,{Child:function(e){let t=null!==(0,r.useContext)(C),n=null!==(0,i.oJ)();return r.createElement(r.Fragment,null,!t&&n?r.createElement(N,{...e}):r.createElement(L,{...e}))},Root:N})},94192:function(e,t,n){n.d(t,{G:function(){return i}});var r=n(67294),o=n(9362);function i(){let[e]=(0,r.useState)(o.k);return(0,r.useEffect)((()=>()=>e.dispose()),[e]),e}},19946:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(67294),i=n(16723),l=n(82180);let u=0;function a(){return++u}let c=null!=(r=o.useId)?r:function(){let e=(0,l.H)(),[t,n]=o.useState(e?a:null);return(0,i.e)((()=>{null===t&&n(a())}),[t]),null!=t?""+t:void 0}},14879:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(67294),o=n(16723);function i(){let e=(0,r.useRef)(!1);return(0,o.e)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}},16723:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(67294);const o="undefined"!=typeof window?r.useLayoutEffect:r.useEffect},3855:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(67294),o=n(16723);function i(e){let t=(0,r.useRef)(e);return(0,o.e)((()=>{t.current=e}),[e]),t}},4503:function(e,t,n){n.d(t,{A:function(){return a},O:function(){return c}});var r=n(67294),o=n(81021),i=n(3855);function l(e,t,n){let o=(0,i.E)(t);(0,r.useEffect)((()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)}),[e,n])}var u,a=((u=a||{})[u.None=1]="None",u[u.IgnoreScrollbars=2]="IgnoreScrollbars",u);function c(e,t,n=1){let u=(0,r.useRef)(!1),a=(0,i.E)((r=>{if(u.current)return;u.current=!0,(0,o.Y)((()=>{u.current=!1}));let i=function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e),l=r.target;if(l.ownerDocument.documentElement.contains(l)){if(2===(2&n)){let e=20,t=l.ownerDocument.documentElement;if(r.clientX>t.clientWidth-e||r.clientX<e||r.clientY>t.clientHeight-e||r.clientY<e)return}for(let e of i){if(null===e)continue;let t=e instanceof HTMLElement?e:e.current;if(null!=t&&t.contains(l))return}return t(r,l)}}));l("pointerdown",((...e)=>a.current(...e))),l("mousedown",((...e)=>a.current(...e)))}},51074:function(e,t,n){n.d(t,{i:function(){return i}});var r=n(67294),o=n(15466);function i(...e){return(0,r.useMemo)((()=>(0,o.r)(...e)),[...e])}},82180:function(e,t,n){n.d(t,{H:function(){return i}});var r=n(67294);let o={serverHandoffComplete:!1};function i(){let[e,t]=(0,r.useState)(o.serverHandoffComplete);return(0,r.useEffect)((()=>{!0!==e&&t(!0)}),[e]),(0,r.useEffect)((()=>{!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),e}},23784:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return i}});var r=n(67294);let o=Symbol();function i(e,t=!0){return Object.assign(e,{[o]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)((()=>{t.current=e}),[e]);let n=(0,r.useCallback)((e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)}),[t]);return e.every((e=>null==e||(null==e?void 0:e[o])))?void 0:n}},16567:function(e,t,n){n.d(t,{ZM:function(){return l},oJ:function(){return u},up:function(){return a}});var r=n(67294);let o=(0,r.createContext)(null);o.displayName="OpenClosedContext";var i,l=((i=l||{})[i.Open=0]="Open",i[i.Closed=1]="Closed",i);function u(){return(0,r.useContext)(o)}function a({value:e,children:t}){return r.createElement(o.Provider,{value:e},t)}},64103:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=""===(null==t?void 0:t.getAttribute("disabled"));return(!r||!function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},9362:function(e,t,n){function r(){let e=[],t=[],n={enqueue(e){t.push(e)},addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add((()=>e.removeEventListener(t,r,o)))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add((()=>cancelAnimationFrame(t)))},nextFrame:(...e)=>n.requestAnimationFrame((()=>n.requestAnimationFrame(...e))),setTimeout(...e){let t=setTimeout(...e);return n.add((()=>clearTimeout(t)))},add:t=>(e.push(t),()=>{let n=e.indexOf(t);if(n>=0){let[t]=e.splice(n,1);t()}}),dispose(){for(let t of e.splice(0))t()},async workQueue(){for(let e of t.splice(0))await e()}};return n}n.d(t,{k:function(){return r}})},84575:function(e,t,n){n.d(t,{C5:function(){return v},TO:function(){return c},fE:function(){return s},jA:function(){return h},sP:function(){return p},tJ:function(){return f},z2:function(){return E}});var r=n(32984),o=n(15466);let i=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((e=>`${e}:not([tabindex='-1'])`)).join(",");var l,u,a,c=((a=c||{})[a.First=1]="First",a[a.Previous=2]="Previous",a[a.Next=4]="Next",a[a.Last=8]="Last",a[a.WrapAround=16]="WrapAround",a[a.NoScroll=32]="NoScroll",a),s=((u=s||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),d=((l=d||{})[l.Previous=-1]="Previous",l[l.Next=1]="Next",l);var f=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(f||{});function p(e,t=0){var n;return e!==(null==(n=(0,o.r)(e))?void 0:n.body)&&(0,r.E)(t,{0:()=>e.matches(i),1(){let t=e;for(;null!==t;){if(t.matches(i))return!0;t=t.parentElement}return!1}})}function v(e){null==e||e.focus({preventScroll:!0})}let m=["textarea","input"].join(",");function E(e,t=(e=>e)){return e.slice().sort(((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let i=r.compareDocumentPosition(o);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function h(e,t){let n,r=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?E(e):function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(i))}(e),l=r.activeElement,u=(()=>{if(5&t)return 1;if(10&t)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,o.indexOf(l))-1;if(4&t)return Math.max(0,o.indexOf(l))+1;if(8&t)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=32&t?{preventScroll:!0}:{},s=0,d=o.length;do{if(s>=d||s+d<=0)return 0;let e=a+s;if(16&t)e=(e+d)%d;else{if(e<0)return 3;if(e>=d)return 1}n=o[e],null==n||n.focus(c),s+=u}while(n!==r.activeElement);return 6&t&&function(e){var t,n;return null!=(n=null==(t=null==e?void 0:e.matches)?void 0:t.call(e,m))&&n}(n)&&n.select(),n.hasAttribute("tabindex")||n.setAttribute("tabindex","0"),2}},32984:function(e,t,n){function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((e=>`"${e}"`)).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},81021:function(e,t,n){function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((e=>setTimeout((()=>{throw e}))))}n.d(t,{Y:function(){return r}})},15466:function(e,t,n){function r(e){return"undefined"==typeof window?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}n.d(t,{r:function(){return r}})},12351:function(e,t,n){n.d(t,{AN:function(){return u},l4:function(){return a},oA:function(){return p},sY:function(){return c},yV:function(){return f}});var r,o,i=n(67294),l=n(32984),u=((o=u||{})[o.None=0]="None",o[o.RenderStrategy=1]="RenderStrategy",o[o.Static=2]="Static",o),a=((r=a||{})[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:u}){let a=d(t,e);if(i)return s(a,n,r,u);let c=null!=o?o:0;if(2&c){let{static:e=!1,...t}=a;if(e)return s(t,n,r,u)}if(1&c){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>s({...t,hidden:!0,style:{display:"none"}},n,r,u)})}return s(a,n,r,u)}function s(e,t={},n,r){let{as:o=n,children:l,refName:u="ref",...a}=v(e,["unmount","static"]),c=void 0!==e.ref?{[u]:e.ref}:{},s="function"==typeof l?l(t):l;if(a.className&&"function"==typeof a.className&&(a.className=a.className(t)),o===i.Fragment&&Object.keys(p(a)).length>0){if(!(0,i.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map((e=>`  - ${e}`)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((e=>`  - ${e}`)).join("\n")].join("\n"));return(0,i.cloneElement)(s,Object.assign({},d(s.props,p(v(a,["ref"]))),c))}return(0,i.createElement)(o,Object.assign({},v(a,["ref"]),o!==i.Fragment&&c),s)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map((e=>[e,void 0]))));for(let r in n)Object.assign(t,{[r](e){let t=n[r];for(let n of t){if(e.defaultPrevented)return;n(e)}}});return t}function f(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function v(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}}}]);