"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[400],{1048:function(e,t,n){n.r(t),n.d(t,{default:function(){return ne}});var o=n(4165),a=n(5861),r=n(9439),i=n(2791),s=n(4951),c=n(9389),l=n(7309),u=n(5348),d=n(8721),f=n(4088),m=n(4942),p=n(1413),v=n(4925),g=n(3433);function h(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=h(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}var y=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=h(e))&&(o&&(o+=" "),o+=t);return o},b=["theme","type"],E=["delay","staleId"],C=function(e){return"number"==typeof e&&!isNaN(e)},x=function(e){return"string"==typeof e},T=function(e){return"function"==typeof e},Z=function(e){return x(e)||T(e)?e:null},w=function(e){return(0,i.isValidElement)(e)||x(e)||T(e)||C(e)};function _(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,r=e.collapse,s=void 0===r||r,c=e.collapseDuration,l=void 0===c?300:c;return function(e){var o=e.children,r=e.position,c=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,m=a?"".concat(t,"--").concat(r):t,p=a?"".concat(n,"--").concat(r):n,v=(0,i.useRef)(0);return(0,i.useLayoutEffect)((function(){var e,t=d.current,n=m.split(" "),o=function e(o){var a;o.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===v.current&&"animationcancel"!==o.type&&(a=t.classList).remove.apply(a,(0,g.Z)(n)))};(e=t.classList).add.apply(e,(0,g.Z)(n)),t.addEventListener("animationend",o),t.addEventListener("animationcancel",o)}),[]),(0,i.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,a=e.style;requestAnimationFrame((function(){a.minHeight="initial",a.height=o+"px",a.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){a.height="0",a.padding="0",a.margin="0",setTimeout(t,n)}))}))}(e,u,l):u()};f||(c?t():(v.current=1,e.className+=" ".concat(p),e.addEventListener("animationend",t)))}),[f]),i.createElement(i.Fragment,null,o)}}function P(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var O={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,g.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},k=function(e){var t=e.theme,n=e.type,o=(0,v.Z)(e,b);return i.createElement("svg",(0,p.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},o))},I={info:function(e){return i.createElement(k,(0,p.Z)({},e),i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return i.createElement(k,(0,p.Z)({},e),i.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return i.createElement(k,(0,p.Z)({},e),i.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return i.createElement(k,(0,p.Z)({},e),i.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return i.createElement("div",{className:"Toastify__spinner"})}};function N(e){var t=(0,i.useReducer)((function(e){return e+1}),0),n=(0,r.Z)(t,2)[1],o=(0,i.useState)([]),a=(0,r.Z)(o,2),s=a[0],c=a[1],l=(0,i.useRef)(null),u=(0,i.useRef)(new Map).current,d=function(e){return-1!==s.indexOf(e)},f=(0,i.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return u.get(e)}}).current;function m(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function h(e){c((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function y(){var e=f.queue.shift();_(e.toastContent,e.toastProps,e.staleId)}function b(e,t){var o=t.delay,a=t.staleId,s=(0,v.Z)(t,E);if(w(e)&&!function(e){return!l.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||u.has(e.toastId)&&null==e.updateId}(s)){var c=s.toastId,d=s.updateId,m=s.data,g=f.props,b=function(){return h(c)},k=null==d;k&&f.count++;var N,R,S=(0,p.Z)((0,p.Z)((0,p.Z)({},g),{},{style:g.toastStyle,key:f.toastKey++},Object.fromEntries(Object.entries(s).filter((function(e){var t=(0,r.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:c,updateId:d,data:m,closeToast:b,isIn:!1,className:Z(s.className||g.toastClassName),bodyClassName:Z(s.bodyClassName||g.bodyClassName),progressClassName:Z(s.progressClassName||g.progressClassName),autoClose:!s.isLoading&&(N=s.autoClose,R=g.autoClose,!1===N||C(N)&&N>0?N:R),deleteToast:function(){var e=P(u.get(c),"removed");u.delete(c),O.emit(4,e);var t=f.queue.length;if(f.count=null==c?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),t>0){var o=null==c?f.props.limit:1;if(1===t||1===o)f.displayedToast++,y();else{var a=o>t?t:o;f.displayedToast=a;for(var r=0;r<a;r++)y()}}else n()}});S.iconOut=function(e){var t=e.theme,n=e.type,o=e.isLoading,a=e.icon,r=null,s={theme:t,type:n};return!1===a||(T(a)?r=a(s):(0,i.isValidElement)(a)?r=(0,i.cloneElement)(a,s):x(a)||C(a)?r=a:o?r=I.spinner():function(e){return e in I}(n)&&(r=I[n](s))),r}(S),T(s.onOpen)&&(S.onOpen=s.onOpen),T(s.onClose)&&(S.onClose=s.onClose),S.closeButton=g.closeButton,!1===s.closeButton||w(s.closeButton)?S.closeButton=s.closeButton:!0===s.closeButton&&(S.closeButton=!w(g.closeButton)||g.closeButton);var L=e;(0,i.isValidElement)(e)&&!x(e.type)?L=(0,i.cloneElement)(e,{closeToast:b,toastProps:S,data:m}):T(e)&&(L=e({closeToast:b,toastProps:S,data:m})),g.limit&&g.limit>0&&f.count>g.limit&&k?f.queue.push({toastContent:L,toastProps:S,staleId:a}):C(o)?setTimeout((function(){_(L,S,a)}),o):_(L,S,a)}}function _(e,t,n){var o=t.toastId;n&&u.delete(n);var a={content:e,props:t};u.set(o,a),c((function(e){return[].concat((0,g.Z)(e),[o]).filter((function(e){return e!==n}))})),O.emit(4,P(a,null==a.props.updateId?"added":"updated"))}return(0,i.useEffect)((function(){return f.containerId=e.containerId,O.cancelEmit(3).on(0,b).on(1,(function(e){return l.current&&h(e)})).on(5,m).emit(2,f),function(){u.clear(),O.emit(3,f)}}),[]),(0,i.useEffect)((function(){f.props=e,f.isToastActive=d,f.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(u.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:d}}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function S(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function L(e){var t=(0,i.useState)(!1),n=(0,r.Z)(t,2),o=n[0],a=n[1],s=(0,i.useState)(!1),c=(0,r.Z)(s,2),l=c[0],u=c[1],d=(0,i.useRef)(null),f=(0,i.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,i.useRef)(e),p=e.autoClose,v=e.pauseOnHover,g=e.closeToast,h=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",w),document.addEventListener("touchmove",Z),document.addEventListener("touchend",w);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=R(t.nativeEvent),f.y=S(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(f.boundingRect){var n=f.boundingRect,o=n.top,a=n.bottom,r=n.left,i=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=r&&f.x<=i&&f.y>=o&&f.y<=a?x():C()}}function C(){a(!0)}function x(){a(!1)}function Z(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,o&&x(),f.x=R(t),f.y=S(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function w(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",w),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",w);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,i.useEffect)((function(){m.current=e})),(0,i.useEffect)((function(){return d.current&&d.current.addEventListener("d",C,{once:!0}),T(e.onOpen)&&e.onOpen((0,i.isValidElement)(e.children)&&e.children.props),function(){var e=m.current;T(e.onClose)&&e.onClose((0,i.isValidElement)(e.children)&&e.children.props)}}),[]),(0,i.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||x(),window.addEventListener("focus",C),window.addEventListener("blur",x)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",C),window.removeEventListener("blur",x))}}),[e.pauseOnFocusLoss]);var _={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return p&&v&&(_.onMouseEnter=x,_.onMouseLeave=C),y&&(_.onClick=function(e){h&&h(e),f.canCloseOnClick&&g()}),{playToast:C,pauseToast:x,isRunning:o,preventExitTransition:l,toastRef:d,eventHandlers:_}}function M(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return i.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},i.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},i.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function z(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,r=void 0===a?"default":a,s=e.hide,c=e.className,l=e.style,u=e.controlledProgress,d=e.progress,f=e.rtl,v=e.isIn,g=e.theme,h=s||u&&0===d,b=(0,p.Z)((0,p.Z)({},l),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:h?0:1});u&&(b.transform="scaleX(".concat(d,")"));var E=y("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(g),"Toastify__progress-bar--".concat(r),{"Toastify__progress-bar--rtl":f}),C=T(c)?c({rtl:f,type:r,defaultClassName:E}):y(E,c);return i.createElement("div",(0,m.Z)({role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:C,style:b},u&&d>=1?"onTransitionEnd":"onAnimationEnd",u&&d<1?null:function(){v&&o()}))}var B=function(e){var t=L(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,r=t.eventHandlers,s=e.closeButton,c=e.children,l=e.autoClose,u=e.onClick,d=e.type,f=e.hideProgressBar,m=e.closeToast,v=e.transition,g=e.position,h=e.className,b=e.style,E=e.bodyClassName,C=e.bodyStyle,x=e.progressClassName,Z=e.progressStyle,w=e.updateId,_=e.role,P=e.progress,O=e.rtl,k=e.toastId,I=e.deleteToast,N=e.isIn,R=e.isLoading,S=e.iconOut,B=e.closeOnClick,A=e.theme,D=y("Toastify__toast","Toastify__toast-theme--".concat(A),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":O},{"Toastify__toast--close-on-click":B}),$=T(h)?h({rtl:O,position:g,type:d,defaultClassName:D}):y(D,h),j=!!P||!l,F={closeToast:m,type:d,theme:A},Y=null;return!1===s||(Y=T(s)?s(F):(0,i.isValidElement)(s)?(0,i.cloneElement)(s,F):M(F)),i.createElement(v,{isIn:N,done:I,position:g,preventExitTransition:o,nodeRef:a},i.createElement("div",(0,p.Z)((0,p.Z)({id:k,onClick:u,className:$},r),{},{style:b,ref:a}),i.createElement("div",(0,p.Z)((0,p.Z)({},N&&{role:_}),{},{className:T(E)?E({type:d}):y("Toastify__toast-body",E),style:C}),null!=S&&i.createElement("div",{className:y("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},S),i.createElement("div",null,c)),Y,i.createElement(z,(0,p.Z)((0,p.Z)({},w&&!j?{key:"pb-".concat(w)}:{}),{},{rtl:O,theme:A,delay:l,isRunning:n,isIn:N,closeToast:m,hide:f,type:d,style:Z,className:x,controlledProgress:j,progress:P||0}))))},A=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},D=_(A("bounce",!0)),$=(_(A("slide",!0)),_(A("zoom")),_(A("flip")),(0,i.forwardRef)((function(e,t){var n=N(e),o=n.getToastToRender,a=n.containerRef,r=n.isToastActive,s=e.className,c=e.style,l=e.rtl,u=e.containerId;function d(e){var t=y("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":l});return T(s)?s({position:e,rtl:l,defaultClassName:t}):y(t,Z(s))}return(0,i.useEffect)((function(){t&&(t.current=a.current)}),[]),i.createElement("div",{ref:a,className:"Toastify",id:u},o((function(e,t){var n=t.length?(0,p.Z)({},c):(0,p.Z)((0,p.Z)({},c),{},{pointerEvents:"none"});return i.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var o=e.content,a=e.props;return i.createElement(B,(0,p.Z)((0,p.Z)({},a),{},{isIn:r(a.toastId),style:(0,p.Z)((0,p.Z)({},a.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(a.key)}),o)})))})))})));$.displayName="ToastContainer",$.defaultProps={position:"top-right",transition:D,autoClose:5e3,closeButton:M,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var j,F=new Map,Y=[],q=1;function Q(){return""+q++}function H(e){return e&&(x(e.toastId)||C(e.toastId))?e.toastId:Q()}function U(e,t){return F.size>0?O.emit(0,e,t):Y.push({content:e,options:t}),t.toastId}function V(e,t){return(0,p.Z)((0,p.Z)({},t),{},{type:t&&t.type||e,toastId:H(t)})}function K(e){return function(t,n){return U(t,V(e,n))}}function W(e,t){return U(e,V("default",t))}W.loading=function(e,t){return U(e,V("default",(0,p.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var o,a=t.pending,r=t.error,i=t.success;a&&(o=x(a)?W.loading(a,n):W.loading(a.render,(0,p.Z)((0,p.Z)({},n),a)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,a){if(null!=t){var r=(0,p.Z)((0,p.Z)((0,p.Z)({type:e},s),n),{},{data:a}),i=x(t)?{render:t}:t;return o?W.update(o,(0,p.Z)((0,p.Z)({},r),i)):W(i.render,(0,p.Z)((0,p.Z)({},r),i)),a}W.dismiss(o)},l=T(e)?e():e;return l.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",r,e)})),l},W.success=K("success"),W.info=K("info"),W.error=K("error"),W.warning=K("warning"),W.warn=W.warning,W.dark=function(e,t){return U(e,V("default",(0,p.Z)({theme:"dark"},t)))},W.dismiss=function(e){F.size>0?O.emit(1,e):Y=Y.filter((function(t){return null!=e&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),O.emit(5,e)},W.isActive=function(e){var t=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=F.get(n||j);return o&&o.getToast(e)}(e,t);if(n){var o=n.props,a=n.content,r=(0,p.Z)((0,p.Z)((0,p.Z)({delay:100},o),t),{},{toastId:t.toastId||e,updateId:Q()});r.toastId!==e&&(r.staleId=e);var i=r.render||a;delete r.render,U(i,r)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return O.on(4,e),function(){O.off(4,e)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},O.on(2,(function(e){j=e.containerId||e,F.set(j,e),Y.forEach((function(e){O.emit(0,e.content,e.options)})),Y=[]})).on(3,(function(e){F.delete(e.containerId||e),0===F.size&&O.off(0).off(1).off(5)}));var G=n(7689),X=n(9434),J=n(5785),ee=n(184),te=s.Z.Title,ne=function(){var e=(0,G.s0)(),t=(0,i.useState)(""),n=(0,r.Z)(t,2),s=n[0],m=n[1],p=(0,i.useState)(""),v=(0,r.Z)(p,2),g=v[0],h=v[1];(0,i.useEffect)((function(){m(window.localStorage.getItem("emailForRegistration"))}),[]);var y=(0,X.I0)(),b=function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var n,a,r;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(g.length<6)){t.next=3;break}return W.error("Password must be at least 6 characters long"),t.abrupt("return");case 3:return t.prev=3,t.next=6,(0,d.P6)(u.I,s,window.location.href);case 6:if(!t.sent.user.emailVerified){t.next=18;break}return window.localStorage.removeItem("emailForRegistration"),n=u.I.currentUser,t.next=12,(0,d.gQ)(n,g);case 12:return t.next=14,n.getIdTokenResult();case 14:a=t.sent,r=a.token,(0,J.XB)(r).then((function(e){y((0,f.RZ)({email:e.data.email,idToken:r,name:e.data.name,role:e.data.role,_id:e.data._id}))})).catch((function(e){return console.log(e)})),e("/");case 18:t.next=23;break;case 20:t.prev=20,t.t0=t.catch(3),W.error("Error: ".concat(t.t0.message));case 23:case"end":return t.stop()}}),t,null,[[3,20]])})));return function(){return t.apply(this,arguments)}}();return(0,ee.jsxs)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",backgroundColor:"whitesmoke"},children:[(0,ee.jsx)(te,{level:2,children:"Fetch"}),(0,ee.jsxs)("div",{style:{width:"100%",maxWidth:"600px",padding:"2rem",backgroundColor:"#FAFAD2",borderRadius:"8px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.3)",minHeight:"400px"},children:[(0,ee.jsx)(te,{level:4,style:{marginBottom:"2rem",textAlign:"center"},children:"Register"}),(0,ee.jsx)(c.Z,{type:"email",value:s,style:{marginBottom:"1em"},disabled:!0}),(0,ee.jsx)(c.Z.Password,{value:g,onChange:function(e){return h(e.target.value)},style:{marginBottom:"2rem"}}),(0,ee.jsx)($,{position:"top-right",autoClose:5e3}),(0,ee.jsx)(l.ZP,{type:"primary",onClick:b,block:!0,children:"Submit"})]})]})}},2621:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(7462),a=n(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"},i=n(4291),s=function(e,t){return a.createElement(i.Z,(0,o.Z)({},e,{ref:t,icon:r}))};var c=a.forwardRef(s)},4215:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(7462),a=n(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]},name:"eye",theme:"outlined"},i=n(4291),s=function(e,t){return a.createElement(i.Z,(0,o.Z)({},e,{ref:t,icon:r}))};var c=a.forwardRef(s)},7106:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(7462),a=n(2791),r={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},i=n(4291),s=function(e,t){return a.createElement(i.Z,(0,o.Z)({},e,{ref:t,icon:r}))};var c=a.forwardRef(s)},1730:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(7462),a=n(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"}}]},name:"search",theme:"outlined"},i=n(4291),s=function(e,t){return a.createElement(i.Z,(0,o.Z)({},e,{ref:t,icon:r}))};var c=a.forwardRef(s)},9125:function(e,t,n){n.d(t,{n:function(){return r}});var o=n(2791),a=o.createContext(!1),r=function(e){var t=e.children,n=e.disabled,r=o.useContext(a);return o.createElement(a.Provider,{value:null!==n&&void 0!==n?n:r},t)};t.Z=a},9389:function(e,t,n){n.d(t,{Z:function(){return M}});var o=n(4942),a=n(9439),r=n(1694),i=n.n(r),s=n(2791),c=n(1929),l=n(1641),u=n(6264),d=function(e){var t,n=(0,s.useContext)(c.E_),r=n.getPrefixCls,d=n.direction,f=e.prefixCls,m=e.className,p=void 0===m?"":m,v=r("input-group",f),g=r("input"),h=(0,u.ZP)(g),y=(0,a.Z)(h,2),b=y[0],E=y[1],C=i()(v,(t={},(0,o.Z)(t,"".concat(v,"-lg"),"large"===e.size),(0,o.Z)(t,"".concat(v,"-sm"),"small"===e.size),(0,o.Z)(t,"".concat(v,"-compact"),e.compact),(0,o.Z)(t,"".concat(v,"-rtl"),"rtl"===d),t),E,p),x=(0,s.useContext)(l.aM),T=(0,s.useMemo)((function(){return Object.assign(Object.assign({},x),{isFormItemInput:!1})}),[x]);return b(s.createElement("span",{className:C,style:e.style,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onFocus:e.onFocus,onBlur:e.onBlur},s.createElement(l.aM.Provider,{value:T},e.children)))},f=n(2438),m=n(7462),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"}},{tag:"path",attrs:{d:"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"}}]},name:"eye-invisible",theme:"outlined"},v=n(4291),g=function(e,t){return s.createElement(v.Z,(0,m.Z)({},e,{ref:t,icon:p}))};var h=s.forwardRef(g),y=n(4215),b=n(1818),E=n(8834),C=n(6720),x=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},T=function(e){return e?s.createElement(y.Z,null):s.createElement(h,null)},Z={click:"onClick",hover:"onMouseOver"};var w=s.forwardRef((function(e,t){var n=e.visibilityToggle,r=void 0===n||n,l="object"===typeof r&&void 0!==r.visible,u=(0,s.useState)((function(){return!!l&&r.visible})),d=(0,a.Z)(u,2),m=d[0],p=d[1],v=(0,s.useRef)(null);s.useEffect((function(){l&&p(r.visible)}),[l,r]);var g=(0,C.Z)(v),h=function(){e.disabled||(m&&g(),p((function(e){var t,n=!e;return"object"===typeof r&&(null===(t=r.onVisibleChange)||void 0===t||t.call(r,n)),n})))},y=e.className,w=e.prefixCls,_=e.inputPrefixCls,P=e.size,O=x(e,["className","prefixCls","inputPrefixCls","size"]),k=s.useContext(c.E_).getPrefixCls,I=k("input",_),N=k("input-password",w),R=r&&function(t){var n,a=e.action,r=void 0===a?"click":a,i=e.iconRender,c=Z[r]||"",l=(void 0===i?T:i)(m),u=(n={},(0,o.Z)(n,c,h),(0,o.Z)(n,"className","".concat(t,"-icon")),(0,o.Z)(n,"key","passwordIcon"),(0,o.Z)(n,"onMouseDown",(function(e){e.preventDefault()})),(0,o.Z)(n,"onMouseUp",(function(e){e.preventDefault()})),n);return s.cloneElement(s.isValidElement(l)?l:s.createElement("span",null,l),u)}(N),S=i()(N,y,(0,o.Z)({},"".concat(N,"-").concat(P),!!P)),L=Object.assign(Object.assign({},(0,b.Z)(O,["suffix","iconRender","visibilityToggle"])),{type:m?"text":"password",className:S,prefixCls:I,suffix:R});return P&&(L.size=P),s.createElement(f.Z,Object.assign({ref:(0,E.sQ)(t,v)},L))})),_=n(1730),P=n(1113),O=n(7309),k=n(4107),I=n(11),N=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};var R=s.forwardRef((function(e,t){var n,a,r=e.prefixCls,l=e.inputPrefixCls,u=e.className,d=e.size,m=e.suffix,p=e.enterButton,v=void 0!==p&&p,g=e.addonAfter,h=e.loading,y=e.disabled,b=e.onSearch,C=e.onChange,x=e.onCompositionStart,T=e.onCompositionEnd,Z=N(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange","onCompositionStart","onCompositionEnd"]),w=s.useContext(c.E_),R=w.getPrefixCls,S=w.direction,L=s.useRef(!1),M=R("input-search",r),z=R("input",l),B=(0,I.ri)(M,S).compactSize,A=(0,k.Z)((function(e){var t;return null!==(t=null!==d&&void 0!==d?d:B)&&void 0!==t?t:e})),D=s.useRef(null),$=function(e){var t;document.activeElement===(null===(t=D.current)||void 0===t?void 0:t.input)&&e.preventDefault()},j=function(e){var t,n;b&&b(null===(n=null===(t=D.current)||void 0===t?void 0:t.input)||void 0===n?void 0:n.value,e)},F="boolean"===typeof v?s.createElement(_.Z,null):null,Y="".concat(M,"-button"),q=v||{},Q=q.type&&!0===q.type.__ANT_BUTTON;a=Q||"button"===q.type?(0,P.Tm)(q,Object.assign({onMouseDown:$,onClick:function(e){var t,n;null===(n=null===(t=null===q||void 0===q?void 0:q.props)||void 0===t?void 0:t.onClick)||void 0===n||n.call(t,e),j(e)},key:"enterButton"},Q?{className:Y,size:A}:{})):s.createElement(O.ZP,{className:Y,type:v?"primary":void 0,size:A,disabled:y,key:"enterButton",onMouseDown:$,onClick:j,loading:h,icon:F},v),g&&(a=[a,(0,P.Tm)(g,{key:"addonAfter"})]);var H=i()(M,(n={},(0,o.Z)(n,"".concat(M,"-rtl"),"rtl"===S),(0,o.Z)(n,"".concat(M,"-").concat(A),!!A),(0,o.Z)(n,"".concat(M,"-with-button"),!!v),n),u);return s.createElement(f.Z,Object.assign({ref:(0,E.sQ)(D,t),onPressEnter:function(e){L.current||h||j(e)}},Z,{size:A,onCompositionStart:function(e){L.current=!0,null===x||void 0===x||x(e)},onCompositionEnd:function(e){L.current=!1,null===T||void 0===T||T(e)},prefixCls:z,addonAfter:a,suffix:m,onChange:function(e){e&&e.target&&"click"===e.type&&b&&b(e.target.value,e),C&&C(e)},className:H,disabled:y}))})),S=n(6641),L=f.Z;L.Group=d,L.Search=R,L.TextArea=S.Z,L.Password=w;var M=L},2588:function(e,t,n){var o=(0,n(2791).createContext)(void 0);t.Z=o},6238:function(e,t,n){n.d(t,{Z:function(){return l}});var o=n(1771),a={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},r={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},i={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},a),timePickerLocale:Object.assign({},r)},s=i,c="${label} is not a valid ${type}",l={locale:"en",Pagination:o.Z,DatePicker:i,TimePicker:r,Calendar:s,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:c,method:c,array:c,object:c,number:c,date:c,boolean:c,integer:c,float:c,regexp:c,email:c,url:c,hex:c},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}}},1771:function(e,t){t.Z={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}},4699:function(e,t,n){var o;n.d(t,{s:function(){return g},v:function(){return E}});var a,r=n(4165),i=n(5861),s=n(1002),c=n(1413),l=n(4164),u=(0,c.Z)({},o||(o=n.t(l,2))),d=u.version,f=u.render,m=u.unmountComponentAtNode;try{Number((d||"").split(".")[0])>=18&&(a=u.createRoot)}catch(x){}function p(e){var t=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&"object"===(0,s.Z)(t)&&(t.usingClientEntryPoint=e)}var v="__rc_react_root__";function g(e,t){a?function(e,t){p(!0);var n=t[v]||a(t);p(!1),n.render(e),t[v]=n}(e,t):function(e,t){f(e,t)}(e,t)}function h(e){return y.apply(this,arguments)}function y(){return(y=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve().then((function(){var e;null===(e=t[v])||void 0===e||e.unmount(),delete t[v]})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){m(e)}function E(e){return C.apply(this,arguments)}function C(){return(C=(0,i.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===a){e.next=2;break}return e.abrupt("return",h(t));case 2:b(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=400.aadaa961.chunk.js.map