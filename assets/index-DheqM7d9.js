(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function Ux(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Tf={exports:{}},po={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Nx(){if(cg)return po;cg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return po.Fragment=e,po.jsx=i,po.jsxs=i,po}var ug;function Ox(){return ug||(ug=1,Tf.exports=Nx()),Tf.exports}var I=Ox(),bf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function Px(){if(fg)return re;fg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(w){return w===null||typeof w!="object"?null:(w=x&&w[x]||w["@@iterator"],typeof w=="function"?w:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function S(w,X,it){this.props=w,this.context=X,this.refs=b,this.updater=it||y}S.prototype.isReactComponent={},S.prototype.setState=function(w,X){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,X,"setState")},S.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function _(){}_.prototype=S.prototype;function O(w,X,it){this.props=w,this.context=X,this.refs=b,this.updater=it||y}var L=O.prototype=new _;L.constructor=O,T(L,S.prototype),L.isPureReactComponent=!0;var N=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},z=Object.prototype.hasOwnProperty;function G(w,X,it,V,$,vt){return it=vt.ref,{$$typeof:o,type:w,key:X,ref:it!==void 0?it:null,props:vt}}function ct(w,X){return G(w.type,X,void 0,void 0,void 0,w.props)}function R(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function F(w){var X={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(it){return X[it]})}var mt=/\/+/g;function ut(w,X){return typeof w=="object"&&w!==null&&w.key!=null?F(""+w.key):X.toString(36)}function St(){}function Y(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(St,St):(w.status="pending",w.then(function(X){w.status==="pending"&&(w.status="fulfilled",w.value=X)},function(X){w.status==="pending"&&(w.status="rejected",w.reason=X)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function st(w,X,it,V,$){var vt=typeof w;(vt==="undefined"||vt==="boolean")&&(w=null);var xt=!1;if(w===null)xt=!0;else switch(vt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(w.$$typeof){case o:case e:xt=!0;break;case g:return xt=w._init,st(xt(w._payload),X,it,V,$)}}if(xt)return $=$(w),xt=V===""?"."+ut(w,0):V,N($)?(it="",xt!=null&&(it=xt.replace(mt,"$&/")+"/"),st($,X,it,"",function(Ht){return Ht})):$!=null&&(R($)&&($=ct($,it+($.key==null||w&&w.key===$.key?"":(""+$.key).replace(mt,"$&/")+"/")+xt)),X.push($)),1;xt=0;var Ut=V===""?".":V+":";if(N(w))for(var Ot=0;Ot<w.length;Ot++)V=w[Ot],vt=Ut+ut(V,Ot),xt+=st(V,X,it,vt,$);else if(Ot=v(w),typeof Ot=="function")for(w=Ot.call(w),Ot=0;!(V=w.next()).done;)V=V.value,vt=Ut+ut(V,Ot++),xt+=st(V,X,it,vt,$);else if(vt==="object"){if(typeof w.then=="function")return st(Y(w),X,it,V,$);throw X=String(w),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return xt}function B(w,X,it){if(w==null)return w;var V=[],$=0;return st(w,V,"","",function(vt){return X.call(it,vt,$++)}),V}function W(w){if(w._status===-1){var X=w._result;X=X(),X.then(function(it){(w._status===0||w._status===-1)&&(w._status=1,w._result=it)},function(it){(w._status===0||w._status===-1)&&(w._status=2,w._result=it)}),w._status===-1&&(w._status=0,w._result=X)}if(w._status===1)return w._result.default;throw w._result}var lt=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function ft(){}return re.Children={map:B,forEach:function(w,X,it){B(w,function(){X.apply(this,arguments)},it)},count:function(w){var X=0;return B(w,function(){X++}),X},toArray:function(w){return B(w,function(X){return X})||[]},only:function(w){if(!R(w))throw Error("React.Children.only expected to receive a single React element child.");return w}},re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,re.__COMPILER_RUNTIME={__proto__:null,c:function(w){return D.H.useMemoCache(w)}},re.cache=function(w){return function(){return w.apply(null,arguments)}},re.cloneElement=function(w,X,it){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var V=T({},w.props),$=w.key,vt=void 0;if(X!=null)for(xt in X.ref!==void 0&&(vt=void 0),X.key!==void 0&&($=""+X.key),X)!z.call(X,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&X.ref===void 0||(V[xt]=X[xt]);var xt=arguments.length-2;if(xt===1)V.children=it;else if(1<xt){for(var Ut=Array(xt),Ot=0;Ot<xt;Ot++)Ut[Ot]=arguments[Ot+2];V.children=Ut}return G(w.type,$,void 0,void 0,vt,V)},re.createContext=function(w){return w={$$typeof:d,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:u,_context:w},w},re.createElement=function(w,X,it){var V,$={},vt=null;if(X!=null)for(V in X.key!==void 0&&(vt=""+X.key),X)z.call(X,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&($[V]=X[V]);var xt=arguments.length-2;if(xt===1)$.children=it;else if(1<xt){for(var Ut=Array(xt),Ot=0;Ot<xt;Ot++)Ut[Ot]=arguments[Ot+2];$.children=Ut}if(w&&w.defaultProps)for(V in xt=w.defaultProps,xt)$[V]===void 0&&($[V]=xt[V]);return G(w,vt,void 0,void 0,null,$)},re.createRef=function(){return{current:null}},re.forwardRef=function(w){return{$$typeof:h,render:w}},re.isValidElement=R,re.lazy=function(w){return{$$typeof:g,_payload:{_status:-1,_result:w},_init:W}},re.memo=function(w,X){return{$$typeof:p,type:w,compare:X===void 0?null:X}},re.startTransition=function(w){var X=D.T,it={};D.T=it;try{var V=w(),$=D.S;$!==null&&$(it,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ft,lt)}catch(vt){lt(vt)}finally{D.T=X}},re.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},re.use=function(w){return D.H.use(w)},re.useActionState=function(w,X,it){return D.H.useActionState(w,X,it)},re.useCallback=function(w,X){return D.H.useCallback(w,X)},re.useContext=function(w){return D.H.useContext(w)},re.useDebugValue=function(){},re.useDeferredValue=function(w,X){return D.H.useDeferredValue(w,X)},re.useEffect=function(w,X,it){var V=D.H;if(typeof it=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(w,X)},re.useId=function(){return D.H.useId()},re.useImperativeHandle=function(w,X,it){return D.H.useImperativeHandle(w,X,it)},re.useInsertionEffect=function(w,X){return D.H.useInsertionEffect(w,X)},re.useLayoutEffect=function(w,X){return D.H.useLayoutEffect(w,X)},re.useMemo=function(w,X){return D.H.useMemo(w,X)},re.useOptimistic=function(w,X){return D.H.useOptimistic(w,X)},re.useReducer=function(w,X,it){return D.H.useReducer(w,X,it)},re.useRef=function(w){return D.H.useRef(w)},re.useState=function(w){return D.H.useState(w)},re.useSyncExternalStore=function(w,X,it){return D.H.useSyncExternalStore(w,X,it)},re.useTransition=function(){return D.H.useTransition()},re.version="19.1.0",re}var hg;function yh(){return hg||(hg=1,bf.exports=Px()),bf.exports}var $t=yh(),Af={exports:{}},mo={},Rf={exports:{}},wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function zx(){return dg||(dg=1,function(o){function e(B,W){var lt=B.length;B.push(W);t:for(;0<lt;){var ft=lt-1>>>1,w=B[ft];if(0<l(w,W))B[ft]=W,B[lt]=w,lt=ft;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var W=B[0],lt=B.pop();if(lt!==W){B[0]=lt;t:for(var ft=0,w=B.length,X=w>>>1;ft<X;){var it=2*(ft+1)-1,V=B[it],$=it+1,vt=B[$];if(0>l(V,lt))$<w&&0>l(vt,V)?(B[ft]=vt,B[$]=lt,ft=$):(B[ft]=V,B[it]=lt,ft=it);else if($<w&&0>l(vt,lt))B[ft]=vt,B[$]=lt,ft=$;else break t}}return W}function l(B,W){var lt=B.sortIndex-W.sortIndex;return lt!==0?lt:B.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,x=null,v=3,y=!1,T=!1,b=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(B){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=B)r(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=i(p)}}function D(B){if(b=!1,N(B),!T)if(i(m)!==null)T=!0,z||(z=!0,ut());else{var W=i(p);W!==null&&st(D,W.startTime-B)}}var z=!1,G=-1,ct=5,R=-1;function F(){return S?!0:!(o.unstable_now()-R<ct)}function mt(){if(S=!1,z){var B=o.unstable_now();R=B;var W=!0;try{t:{T=!1,b&&(b=!1,O(G),G=-1),y=!0;var lt=v;try{e:{for(N(B),x=i(m);x!==null&&!(x.expirationTime>B&&F());){var ft=x.callback;if(typeof ft=="function"){x.callback=null,v=x.priorityLevel;var w=ft(x.expirationTime<=B);if(B=o.unstable_now(),typeof w=="function"){x.callback=w,N(B),W=!0;break e}x===i(m)&&r(m),N(B)}else r(m);x=i(m)}if(x!==null)W=!0;else{var X=i(p);X!==null&&st(D,X.startTime-B),W=!1}}break t}finally{x=null,v=lt,y=!1}W=void 0}}finally{W?ut():z=!1}}}var ut;if(typeof L=="function")ut=function(){L(mt)};else if(typeof MessageChannel<"u"){var St=new MessageChannel,Y=St.port2;St.port1.onmessage=mt,ut=function(){Y.postMessage(null)}}else ut=function(){_(mt,0)};function st(B,W){G=_(function(){B(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ct=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(B){switch(v){case 1:case 2:case 3:var W=3;break;default:W=v}var lt=v;v=W;try{return B()}finally{v=lt}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var lt=v;v=B;try{return W()}finally{v=lt}},o.unstable_scheduleCallback=function(B,W,lt){var ft=o.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?ft+lt:ft):lt=ft,B){case 1:var w=-1;break;case 2:w=250;break;case 5:w=1073741823;break;case 4:w=1e4;break;default:w=5e3}return w=lt+w,B={id:g++,callback:W,priorityLevel:B,startTime:lt,expirationTime:w,sortIndex:-1},lt>ft?(B.sortIndex=lt,e(p,B),i(m)===null&&B===i(p)&&(b?(O(G),G=-1):b=!0,st(D,lt-ft))):(B.sortIndex=w,e(m,B),T||y||(T=!0,z||(z=!0,ut()))),B},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(B){var W=v;return function(){var lt=v;v=W;try{return B.apply(this,arguments)}finally{v=lt}}}}(wf)),wf}var pg;function Bx(){return pg||(pg=1,Rf.exports=zx()),Rf.exports}var Cf={exports:{}},yn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mg;function Ix(){if(mg)return yn;mg=1;var o=yh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,yn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,g)},yn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},yn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:y}):g==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},yn.requestFormReset=function(m){r.d.r(m)},yn.unstable_batchedUpdates=function(m,p){return m(p)},yn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},yn.version="19.1.0",yn}var gg;function Fx(){if(gg)return Cf.exports;gg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Cf.exports=Ix(),Cf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function Hx(){if(_g)return mo;_g=1;var o=Bx(),e=yh(),i=Fx();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(u(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return h(c),t;if(f===s)return h(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var M=!1,E=c.child;E;){if(E===a){M=!0,a=c,s=f;break}if(E===s){M=!0,s=c,a=f;break}E=E.sibling}if(!M){for(E=f.child;E;){if(E===a){M=!0,a=f,s=c;break}if(E===s){M=!0,s=f,a=c;break}E=E.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function p(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=p(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),F=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=mt&&t[mt]||t["@@iterator"],typeof t=="function"?t:null)}var St=Symbol.for("react.client.reference");function Y(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===St?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case S:return"Profiler";case b:return"StrictMode";case D:return"Suspense";case z:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case y:return"Portal";case L:return(t.displayName||"Context")+".Provider";case O:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return n=t.displayName||null,n!==null?n:Y(t.type)||"Memo";case ct:n=t._payload,t=t._init;try{return Y(t(n))}catch{}}return null}var st=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},ft=[],w=-1;function X(t){return{current:t}}function it(t){0>w||(t.current=ft[w],ft[w]=null,w--)}function V(t,n){w++,ft[w]=t.current,t.current=n}var $=X(null),vt=X(null),xt=X(null),Ut=X(null);function Ot(t,n){switch(V(xt,n),V(vt,t),V($,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Bm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Bm(n),t=Im(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}it($),V($,t)}function Ht(){it($),it(vt),it(xt)}function jt(t){t.memoizedState!==null&&V(Ut,t);var n=$.current,a=Im(n,t.type);n!==a&&(V(vt,t),V($,a))}function ee(t){vt.current===t&&(it($),it(vt)),Ut.current===t&&(it(Ut),lo._currentValue=lt)}var nt=Object.prototype.hasOwnProperty,nn=o.unstable_scheduleCallback,It=o.unstable_cancelCallback,le=o.unstable_shouldYield,Zt=o.unstable_requestPaint,Se=o.unstable_now,se=o.unstable_getCurrentPriorityLevel,ne=o.unstable_ImmediatePriority,be=o.unstable_UserBlockingPriority,We=o.unstable_NormalPriority,an=o.unstable_LowPriority,U=o.unstable_IdlePriority,A=o.log,at=o.unstable_setDisableYieldValue,yt=null,_t=null;function Mt(t){if(typeof A=="function"&&at(t),_t&&typeof _t.setStrictMode=="function")try{_t.setStrictMode(yt,t)}catch{}}var Lt=Math.clz32?Math.clz32:Kt,At=Math.log,Dt=Math.LN2;function Kt(t){return t>>>=0,t===0?32:31-(At(t)/Dt|0)|0}var ge=256,Et=4194304;function _e(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Qt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,M=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=_e(s):(M&=E,M!==0?c=_e(M):a||(a=E&~t,a!==0&&(c=_e(a))))):(E=s&~f,E!==0?c=_e(E):M!==0?c=_e(M):a||(a=s&~t,a!==0&&(c=_e(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Gt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ft(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(){var t=ge;return ge<<=1,(ge&4194048)===0&&(ge=256),t}function ce(){var t=Et;return Et<<=1,(Et&62914560)===0&&(Et=4194304),t}function k(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ct(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Tt(t,n,a,s,c,f){var M=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,P=t.expirationTimes,Q=t.hiddenUpdates;for(a=M&~a;0<a;){var ht=31-Lt(a),gt=1<<ht;E[ht]=0,P[ht]=-1;var J=Q[ht];if(J!==null)for(Q[ht]=null,ht=0;ht<J.length;ht++){var et=J[ht];et!==null&&(et.lane&=-536870913)}a&=~gt}s!==0&&dt(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(M&~n))}function dt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Lt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&4194090}function bt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Lt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Vt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function de(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ye(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:ig(t.type))}function pn(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var ve=Math.random().toString(36).slice(2),ye="__reactFiber$"+ve,Be="__reactProps$"+ve,yi="__reactContainer$"+ve,_s="__reactEvents$"+ve,ur="__reactListeners$"+ve,Do="__reactHandles$"+ve,La="__reactResources$"+ve,qi="__reactMarker$"+ve;function fr(t){delete t[ye],delete t[Be],delete t[_s],delete t[ur],delete t[Do]}function Yi(t){var n=t[ye];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[ye]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Vm(t);t!==null;){if(a=t[ye])return a;t=Vm(t)}return n}t=a,a=t.parentNode}return null}function Zi(t){if(t=t[ye]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function Da(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function C(t){var n=t[La];return n||(n=t[La]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function j(t){t[qi]=!0}var rt=new Set,ot={};function tt(t,n){wt(t,n),wt(t+"Capture",n)}function wt(t,n){for(ot[t]=n,t=0;t<n.length;t++)rt.add(n[t])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kt={},qt={};function ae(t){return nt.call(qt,t)?!0:nt.call(kt,t)?!1:zt.test(t)?qt[t]=!0:(kt[t]=!0,!1)}function Jt(t,n,a){if(ae(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function te(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ae(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}var mn,Ze;function Sn(t){if(mn===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);mn=n&&n[1]||"",Ze=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+mn+t+Ze}var Oe=!1;function ie(t,n){if(!t||Oe)return"";Oe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(et){var J=et}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(et){J=et}t.call(gt.prototype)}}else{try{throw Error()}catch(et){J=et}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(et){if(et&&J&&typeof et.stack=="string")return[et.stack,J.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),M=f[0],E=f[1];if(M&&E){var P=M.split(`
`),Q=E.split(`
`);for(c=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===P.length||c===Q.length)for(s=P.length-1,c=Q.length-1;1<=s&&0<=c&&P[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(P[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||P[s]!==Q[c]){var ht=`
`+P[s].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=s&&0<=c);break}}}finally{Oe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Sn(a):""}function vs(t){switch(t.tag){case 26:case 27:case 5:return Sn(t.type);case 16:return Sn("Lazy");case 13:return Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 15:return ie(t.type,!1);case 11:return ie(t.type.render,!1);case 1:return ie(t.type,!0);case 31:return Sn("Activity");default:return""}}function Ie(t){try{var n="";do n+=vs(t),t=t.return;while(t);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xs(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ua(t){var n=xs(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),s=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){s=""+M,f.call(this,M)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(M){s=""+M},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ki(t){t._valueTracker||(t._valueTracker=Ua(t))}function rn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=xs(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function Zn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ss=/[\n"\\]/g;function Fe(t){return t.replace(Ss,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Na(t,n,a,s,c,f,M,E){t.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?t.type=M:t.removeAttribute("type"),n!=null?M==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):M!=="submit"&&M!=="reset"||t.removeAttribute("value"),n!=null?hr(t,M,Je(n)):a!=null?hr(t,M,Je(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Je(E):t.removeAttribute("name")}function Uo(t,n,a,s,c,f,M,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+Je(a):"",n=n!=null?""+Je(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(t.name=M)}function hr(t,n,a){n==="number"&&Zn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function dr(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Je(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ph(t,n,a){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Je(a):""}function zh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(st(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Je(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s)}function pr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Cv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Bh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Cv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ih(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Bh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Bh(t,f,n[f])}function yc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function No(t){return Dv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Ec=null;function Tc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mr=null,gr=null;function Fh(t){var n=Zi(t);if(n&&(t=n.stateNode)){var a=t[Be]||null;t:switch(t=n.stateNode,n.type){case"input":if(Na(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[Be]||null;if(!c)throw Error(r(90));Na(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&rn(s)}break t;case"textarea":Ph(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&dr(t,!!a.multiple,n,!1)}}}var bc=!1;function Hh(t,n,a){if(bc)return t(n,a);bc=!0;try{var s=t(n);return s}finally{if(bc=!1,(mr!==null||gr!==null)&&(vl(),mr&&(n=mr,t=gr,gr=mr=null,Fh(n),t)))for(n=0;n<t.length;n++)Fh(t[n])}}function Ms(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Be]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ei=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=!1;if(Ei)try{var ys={};Object.defineProperty(ys,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",ys,ys),window.removeEventListener("test",ys,ys)}catch{Ac=!1}var Qi=null,Rc=null,Oo=null;function Gh(){if(Oo)return Oo;var t,n=Rc,a=n.length,s,c="value"in Qi?Qi.value:Qi.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var M=a-t;for(s=1;s<=M&&n[a-s]===c[f-s];s++);return Oo=c.slice(t,1<s?1-s:void 0)}function Po(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function zo(){return!0}function Vh(){return!1}function Cn(t){function n(a,s,c,f,M){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=M,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?zo:Vh,this.isPropagationStopped=Vh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),n}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=Cn(Oa),Es=g({},Oa,{view:0,detail:0}),Uv=Cn(Es),wc,Cc,Ts,Io=g({},Es,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ts&&(Ts&&t.type==="mousemove"?(wc=t.screenX-Ts.screenX,Cc=t.screenY-Ts.screenY):Cc=wc=0,Ts=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),kh=Cn(Io),Nv=g({},Io,{dataTransfer:0}),Ov=Cn(Nv),Pv=g({},Es,{relatedTarget:0}),Lc=Cn(Pv),zv=g({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),Bv=Cn(zv),Iv=g({},Oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fv=Cn(Iv),Hv=g({},Oa,{data:0}),Wh=Cn(Hv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=kv[t])?!!n[t]:!1}function Dc(){return Wv}var Xv=g({},Es,{key:function(t){if(t.key){var n=Gv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Po(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dc,charCode:function(t){return t.type==="keypress"?Po(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Po(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=Cn(Xv),qv=g({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xh=Cn(qv),Yv=g({},Es,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dc}),Zv=Cn(Yv),Kv=g({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=Cn(Kv),Jv=g({},Io,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$v=Cn(Jv),t0=g({},Oa,{newState:0,oldState:0}),e0=Cn(t0),n0=[9,13,27,32],Uc=Ei&&"CompositionEvent"in window,bs=null;Ei&&"documentMode"in document&&(bs=document.documentMode);var i0=Ei&&"TextEvent"in window&&!bs,jh=Ei&&(!Uc||bs&&8<bs&&11>=bs),qh=" ",Yh=!1;function Zh(t,n){switch(t){case"keyup":return n0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function a0(t,n){switch(t){case"compositionend":return Kh(n);case"keypress":return n.which!==32?null:(Yh=!0,qh);case"textInput":return t=n.data,t===qh&&Yh?null:t;default:return null}}function r0(t,n){if(_r)return t==="compositionend"||!Uc&&Zh(t,n)?(t=Gh(),Oo=Rc=Qi=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jh&&n.locale!=="ko"?null:n.data;default:return null}}var s0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!s0[t.type]:n==="textarea"}function Jh(t,n,a,s){mr?gr?gr.push(s):gr=[s]:mr=s,n=Tl(n,"onChange"),0<n.length&&(a=new Bo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var As=null,Rs=null;function o0(t){Um(t,0)}function Fo(t){var n=Da(t);if(rn(n))return t}function $h(t,n){if(t==="change")return n}var td=!1;if(Ei){var Nc;if(Ei){var Oc="oninput"in document;if(!Oc){var ed=document.createElement("div");ed.setAttribute("oninput","return;"),Oc=typeof ed.oninput=="function"}Nc=Oc}else Nc=!1;td=Nc&&(!document.documentMode||9<document.documentMode)}function nd(){As&&(As.detachEvent("onpropertychange",id),Rs=As=null)}function id(t){if(t.propertyName==="value"&&Fo(Rs)){var n=[];Jh(n,Rs,t,Tc(t)),Hh(o0,n)}}function l0(t,n,a){t==="focusin"?(nd(),As=n,Rs=a,As.attachEvent("onpropertychange",id)):t==="focusout"&&nd()}function c0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fo(Rs)}function u0(t,n){if(t==="click")return Fo(n)}function f0(t,n){if(t==="input"||t==="change")return Fo(n)}function h0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var In=typeof Object.is=="function"?Object.is:h0;function ws(t,n){if(In(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!nt.call(n,c)||!In(t[c],n[c]))return!1}return!0}function ad(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rd(t,n){var a=ad(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ad(a)}}function sd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?sd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function od(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Zn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Zn(t.document)}return n}function Pc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var d0=Ei&&"documentMode"in document&&11>=document.documentMode,vr=null,zc=null,Cs=null,Bc=!1;function ld(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bc||vr==null||vr!==Zn(s)||(s=vr,"selectionStart"in s&&Pc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Cs&&ws(Cs,s)||(Cs=s,s=Tl(zc,"onSelect"),0<s.length&&(n=new Bo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=vr)))}function Pa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var xr={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionrun:Pa("Transition","TransitionRun"),transitionstart:Pa("Transition","TransitionStart"),transitioncancel:Pa("Transition","TransitionCancel"),transitionend:Pa("Transition","TransitionEnd")},Ic={},cd={};Ei&&(cd=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function za(t){if(Ic[t])return Ic[t];if(!xr[t])return t;var n=xr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in cd)return Ic[t]=n[a];return t}var ud=za("animationend"),fd=za("animationiteration"),hd=za("animationstart"),p0=za("transitionrun"),m0=za("transitionstart"),g0=za("transitioncancel"),dd=za("transitionend"),pd=new Map,Fc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Fc.push("scrollEnd");function oi(t,n){pd.set(t,n),tt(n,[t])}var md=new WeakMap;function Kn(t,n){if(typeof t=="object"&&t!==null){var a=md.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ie(n)},md.set(t,n),n)}return{value:t,source:n,stack:Ie(n)}}var Qn=[],Sr=0,Hc=0;function Ho(){for(var t=Sr,n=Hc=Sr=0;n<t;){var a=Qn[n];Qn[n++]=null;var s=Qn[n];Qn[n++]=null;var c=Qn[n];Qn[n++]=null;var f=Qn[n];if(Qn[n++]=null,s!==null&&c!==null){var M=s.pending;M===null?c.next=c:(c.next=M.next,M.next=c),s.pending=c}f!==0&&gd(a,c,f)}}function Go(t,n,a,s){Qn[Sr++]=t,Qn[Sr++]=n,Qn[Sr++]=a,Qn[Sr++]=s,Hc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Gc(t,n,a,s){return Go(t,n,a,s),Vo(t)}function Mr(t,n){return Go(t,null,null,n),Vo(t)}function gd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Lt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function Vo(t){if(50<to)throw to=0,qu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var yr={};function _0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,n,a,s){return new _0(t,n,a,s)}function Vc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ti(t,n){var a=t.alternate;return a===null?(a=Fn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function _d(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function ko(t,n,a,s,c,f){var M=0;if(s=t,typeof t=="function")Vc(t)&&(M=1);else if(typeof t=="string")M=xx(t,a,$.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=Fn(31,a,n,c),t.elementType=R,t.lanes=f,t;case T:return Ba(a.children,c,f,n);case b:M=8,c|=24;break;case S:return t=Fn(12,a,n,c|2),t.elementType=S,t.lanes=f,t;case D:return t=Fn(13,a,n,c),t.elementType=D,t.lanes=f,t;case z:return t=Fn(19,a,n,c),t.elementType=z,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _:case L:M=10;break t;case O:M=9;break t;case N:M=11;break t;case G:M=14;break t;case ct:M=16,s=null;break t}M=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Fn(M,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function Ba(t,n,a,s){return t=Fn(7,t,s,n),t.lanes=a,t}function kc(t,n,a){return t=Fn(6,t,null,n),t.lanes=a,t}function Wc(t,n,a){return n=Fn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Er=[],Tr=0,Wo=null,Xo=0,Jn=[],$n=0,Ia=null,bi=1,Ai="";function Fa(t,n){Er[Tr++]=Xo,Er[Tr++]=Wo,Wo=t,Xo=n}function vd(t,n,a){Jn[$n++]=bi,Jn[$n++]=Ai,Jn[$n++]=Ia,Ia=t;var s=bi;t=Ai;var c=32-Lt(s)-1;s&=~(1<<c),a+=1;var f=32-Lt(n)+c;if(30<f){var M=c-c%5;f=(s&(1<<M)-1).toString(32),s>>=M,c-=M,bi=1<<32-Lt(n)+c|a<<c|s,Ai=f+t}else bi=1<<f|a<<c|s,Ai=t}function Xc(t){t.return!==null&&(Fa(t,1),vd(t,1,0))}function jc(t){for(;t===Wo;)Wo=Er[--Tr],Er[Tr]=null,Xo=Er[--Tr],Er[Tr]=null;for(;t===Ia;)Ia=Jn[--$n],Jn[$n]=null,Ai=Jn[--$n],Jn[$n]=null,bi=Jn[--$n],Jn[$n]=null}var An=null,Xe=null,Re=!1,Ha=null,gi=!1,qc=Error(r(519));function Ga(t){var n=Error(r(418,""));throw Us(Kn(n,t)),qc}function xd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[ye]=t,n[Be]=s,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<no.length;a++)me(no[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),Uo(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),Ki(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),zh(n,s.value,s.defaultValue,s.children),Ki(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||zm(n.textContent,a)?(s.popover!=null&&(me("beforetoggle",n),me("toggle",n)),s.onScroll!=null&&me("scroll",n),s.onScrollEnd!=null&&me("scrollend",n),s.onClick!=null&&(n.onclick=bl),n=!0):n=!1,n||Ga(t)}function Sd(t){for(An=t.return;An;)switch(An.tag){case 5:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:An=An.return}}function Ls(t){if(t!==An)return!1;if(!Re)return Sd(t),Re=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||uf(t.type,t.memoizedProps)),a=!a),a&&Xe&&Ga(t),Sd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(n===0){Xe=ci(t.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;t=t.nextSibling}Xe=null}}else n===27?(n=Xe,da(t.type)?(t=pf,pf=null,Xe=t):Xe=n):Xe=An?ci(t.stateNode.nextSibling):null;return!0}function Ds(){Xe=An=null,Re=!1}function Md(){var t=Ha;return t!==null&&(Un===null?Un=t:Un.push.apply(Un,t),Ha=null),t}function Us(t){Ha===null?Ha=[t]:Ha.push(t)}var Yc=X(null),Va=null,Ri=null;function Ji(t,n,a){V(Yc,n._currentValue),n._currentValue=a}function wi(t){t._currentValue=Yc.current,it(Yc)}function Zc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Kc(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var M=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var P=0;P<n.length;P++)if(E.context===n[P]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),Zc(f.return,a,t),s||(M=null);break t}f=E.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=a,f=M.alternate,f!==null&&(f.lanes|=a),Zc(M,a,t),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===t){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function Ns(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var E=c.type;In(c.pendingProps.value,M.value)||(t!==null?t.push(E):t=[E])}}else if(c===Ut.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(lo):t=[lo])}c=c.return}t!==null&&Kc(n,t,a,s),n.flags|=262144}function jo(t){for(t=t.firstContext;t!==null;){if(!In(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ka(t){Va=t,Ri=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Mn(t){return yd(Va,t)}function qo(t,n){return Va===null&&ka(t),yd(t,n)}function yd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ri===null){if(t===null)throw Error(r(308));Ri=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ri=Ri.next=n;return a}var v0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},x0=o.unstable_scheduleCallback,S0=o.unstable_NormalPriority,sn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qc(){return{controller:new v0,data:new Map,refCount:0}}function Os(t){t.refCount--,t.refCount===0&&x0(S0,function(){t.controller.abort()})}var Ps=null,Jc=0,br=0,Ar=null;function M0(t,n){if(Ps===null){var a=Ps=[];Jc=0,br=tf(),Ar={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Jc++,n.then(Ed,Ed),n}function Ed(){if(--Jc===0&&Ps!==null){Ar!==null&&(Ar.status="fulfilled");var t=Ps;Ps=null,br=0,Ar=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function y0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var Td=B.S;B.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&M0(t,n),Td!==null&&Td(t,n)};var Wa=X(null);function $c(){var t=Wa.current;return t!==null?t:ze.pooledCache}function Yo(t,n){n===null?V(Wa,Wa.current):V(Wa,n.pool)}function bd(){var t=$c();return t===null?null:{parent:sn._currentValue,pool:t}}var zs=Error(r(460)),Ad=Error(r(474)),Zo=Error(r(542)),tu={then:function(){}};function Rd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ko(){}function wd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ko,Ko),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ld(t),t;default:if(typeof n.status=="string")n.then(Ko,Ko);else{if(t=ze,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Ld(t),t}throw Bs=n,zs}}var Bs=null;function Cd(){if(Bs===null)throw Error(r(459));var t=Bs;return Bs=null,t}function Ld(t){if(t===zs||t===Zo)throw Error(r(483))}var $i=!1;function eu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function nu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ta(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ea(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(we&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Vo(t),gd(t,null,a),n}return Go(t,s,n,a),Vo(t)}function Is(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,bt(t,a)}}function iu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=M:f=f.next=M,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var au=!1;function Fs(){if(au){var t=Ar;if(t!==null)throw t}}function Hs(t,n,a,s){au=!1;var c=t.updateQueue;$i=!1;var f=c.firstBaseUpdate,M=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var P=E,Q=P.next;P.next=null,M===null?f=Q:M.next=Q,M=P;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,E=ht.lastBaseUpdate,E!==M&&(E===null?ht.firstBaseUpdate=Q:E.next=Q,ht.lastBaseUpdate=P))}if(f!==null){var gt=c.baseState;M=0,ht=Q=P=null,E=f;do{var J=E.lane&-536870913,et=J!==E.lane;if(et?(Me&J)===J:(s&J)===J){J!==0&&J===br&&(au=!0),ht!==null&&(ht=ht.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Yt=t,Wt=E;J=n;var Ue=a;switch(Wt.tag){case 1:if(Yt=Wt.payload,typeof Yt=="function"){gt=Yt.call(Ue,gt,J);break t}gt=Yt;break t;case 3:Yt.flags=Yt.flags&-65537|128;case 0:if(Yt=Wt.payload,J=typeof Yt=="function"?Yt.call(Ue,gt,J):Yt,J==null)break t;gt=g({},gt,J);break t;case 2:$i=!0}}J=E.callback,J!==null&&(t.flags|=64,et&&(t.flags|=8192),et=c.callbacks,et===null?c.callbacks=[J]:et.push(J))}else et={lane:J,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ht===null?(Q=ht=et,P=gt):ht=ht.next=et,M|=J;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;et=E,E=et.next,et.next=null,c.lastBaseUpdate=et,c.shared.pending=null}}while(!0);ht===null&&(P=gt),c.baseState=P,c.firstBaseUpdate=Q,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),ca|=M,t.lanes=M,t.memoizedState=gt}}function Dd(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Ud(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Dd(a[t],n)}var Rr=X(null),Qo=X(0);function Nd(t,n){t=Pi,V(Qo,t),V(Rr,n),Pi=t|n.baseLanes}function ru(){V(Qo,Pi),V(Rr,Rr.current)}function su(){Pi=Qo.current,it(Rr),it(Qo)}var na=0,ue=null,Le=null,$e=null,Jo=!1,wr=!1,Xa=!1,$o=0,Gs=0,Cr=null,E0=0;function Ke(){throw Error(r(321))}function ou(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!In(t[a],n[a]))return!1;return!0}function lu(t,n,a,s,c,f){return na=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?gp:_p,Xa=!1,f=a(s,c),Xa=!1,wr&&(f=Pd(n,a,s,c)),Od(t),f}function Od(t){B.H=rl;var n=Le!==null&&Le.next!==null;if(na=0,$e=Le=ue=null,Jo=!1,Gs=0,Cr=null,n)throw Error(r(300));t===null||un||(t=t.dependencies,t!==null&&jo(t)&&(un=!0))}function Pd(t,n,a,s){ue=t;var c=0;do{if(wr&&(Cr=null),Gs=0,wr=!1,25<=c)throw Error(r(301));if(c+=1,$e=Le=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}B.H=L0,f=n(a,s)}while(wr);return f}function T0(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?Vs(n):n,t=t.useState()[0],(Le!==null?Le.memoizedState:null)!==t&&(ue.flags|=1024),n}function cu(){var t=$o!==0;return $o=0,t}function uu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function fu(t){if(Jo){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Jo=!1}na=0,$e=Le=ue=null,wr=!1,Gs=$o=0,Cr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ue.memoizedState=$e=t:$e=$e.next=t,$e}function tn(){if(Le===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var n=$e===null?ue.memoizedState:$e.next;if(n!==null)$e=n,Le=t;else{if(t===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},$e===null?ue.memoizedState=$e=t:$e=$e.next=t}return $e}function hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vs(t){var n=Gs;return Gs+=1,Cr===null&&(Cr=[]),t=wd(Cr,t,n),n=ue,($e===null?n.memoizedState:$e.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?gp:_p),t}function tl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vs(t);if(t.$$typeof===L)return Mn(t)}throw Error(r(438,String(t)))}function du(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hu(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=F;return n.index++,a}function Ci(t,n){return typeof n=="function"?n(t):n}function el(t){var n=tn();return pu(n,Le,t)}function pu(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var M=c.next;c.next=f.next,f.next=M}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=M=null,P=null,Q=n,ht=!1;do{var gt=Q.lane&-536870913;if(gt!==Q.lane?(Me&gt)===gt:(na&gt)===gt){var J=Q.revertLane;if(J===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),gt===br&&(ht=!0);else if((na&J)===J){Q=Q.next,J===br&&(ht=!0);continue}else gt={lane:0,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(E=P=gt,M=f):P=P.next=gt,ue.lanes|=J,ca|=J;gt=Q.action,Xa&&a(f,gt),f=Q.hasEagerState?Q.eagerState:a(f,gt)}else J={lane:gt,revertLane:Q.revertLane,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(E=P=J,M=f):P=P.next=J,ue.lanes|=gt,ca|=gt;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?M=f:P.next=E,!In(f,t.memoizedState)&&(un=!0,ht&&(a=Ar,a!==null)))throw a;t.memoizedState=f,t.baseState=M,t.baseQueue=P,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function mu(t){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var M=c=c.next;do f=t(f,M.action),M=M.next;while(M!==c);In(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function zd(t,n,a){var s=ue,c=tn(),f=Re;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!In((Le||c).memoizedState,a);M&&(c.memoizedState=a,un=!0),c=c.queue;var E=Fd.bind(null,s,c,t);if(ks(2048,8,E,[t]),c.getSnapshot!==n||M||$e!==null&&$e.memoizedState.tag&1){if(s.flags|=2048,Lr(9,nl(),Id.bind(null,s,c,a,n),null),ze===null)throw Error(r(349));f||(na&124)!==0||Bd(s,n,a)}return a}function Bd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=hu(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Id(t,n,a,s){n.value=a,n.getSnapshot=s,Hd(n)&&Gd(t)}function Fd(t,n,a){return a(function(){Hd(n)&&Gd(t)})}function Hd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!In(t,a)}catch{return!0}}function Gd(t){var n=Mr(t,2);n!==null&&Wn(n,t,2)}function gu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),Xa){Mt(!0);try{a()}finally{Mt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:t},n}function Vd(t,n,a,s){return t.baseState=a,pu(t,Le,typeof s=="function"?s:Ci)}function b0(t,n,a,s,c){if(al(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){f.listeners.push(M)}};B.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,kd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function kd(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=B.T,M={};B.T=M;try{var E=a(c,s),P=B.S;P!==null&&P(M,E),Wd(t,n,E)}catch(Q){_u(t,n,Q)}finally{B.T=f}}else try{f=a(c,s),Wd(t,n,f)}catch(Q){_u(t,n,Q)}}function Wd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Xd(t,n,s)},function(s){return _u(t,n,s)}):Xd(t,n,a)}function Xd(t,n,a){n.status="fulfilled",n.value=a,jd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,kd(t,a)))}function _u(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,jd(n),n=n.next;while(n!==s)}t.action=null}function jd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function qd(t,n){return n}function Yd(t,n){if(Re){var a=ze.formState;if(a!==null){t:{var s=ue;if(Re){if(Xe){e:{for(var c=Xe,f=gi;c.nodeType!==8;){if(!f){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Xe=ci(c.nextSibling),s=c.data==="F!";break t}}Ga(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qd,lastRenderedState:n},a.queue=s,a=dp.bind(null,ue,s),s.dispatch=a,s=gu(!1),f=yu.bind(null,ue,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=b0.bind(null,ue,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Zd(t){var n=tn();return Kd(n,Le,t)}function Kd(t,n,a){if(n=pu(t,n,qd)[0],t=el(Ci)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Vs(n)}catch(M){throw M===zs?Zo:M}else s=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,Lr(9,nl(),A0.bind(null,c,a),null)),[s,f,t]}function A0(t,n){t.action=n}function Qd(t){var n=tn(),a=Le;if(a!==null)return Kd(n,a,t);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Lr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ue.updateQueue,n===null&&(n=hu(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function nl(){return{destroy:void 0,resource:void 0}}function Jd(){return tn().memoizedState}function il(t,n,a,s){var c=Ln();s=s===void 0?null:s,ue.flags|=t,c.memoizedState=Lr(1|n,nl(),a,s)}function ks(t,n,a,s){var c=tn();s=s===void 0?null:s;var f=c.memoizedState.inst;Le!==null&&s!==null&&ou(s,Le.memoizedState.deps)?c.memoizedState=Lr(n,f,a,s):(ue.flags|=t,c.memoizedState=Lr(1|n,f,a,s))}function $d(t,n){il(8390656,8,t,n)}function tp(t,n){ks(2048,8,t,n)}function ep(t,n){return ks(4,2,t,n)}function np(t,n){return ks(4,4,t,n)}function ip(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function ap(t,n,a){a=a!=null?a.concat([t]):null,ks(4,4,ip.bind(null,n,t),a)}function vu(){}function rp(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&ou(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function sp(t,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&ou(n,s[1]))return s[0];if(s=t(),Xa){Mt(!0);try{t()}finally{Mt(!1)}}return a.memoizedState=[s,n],s}function xu(t,n,a){return a===void 0||(na&1073741824)!==0?t.memoizedState=n:(t.memoizedState=a,t=cm(),ue.lanes|=t,ca|=t,a)}function op(t,n,a,s){return In(a,n)?a:Rr.current!==null?(t=xu(t,a,s),In(t,n)||(un=!0),t):(na&42)===0?(un=!0,t.memoizedState=a):(t=cm(),ue.lanes|=t,ca|=t,n)}function lp(t,n,a,s,c){var f=W.p;W.p=f!==0&&8>f?f:8;var M=B.T,E={};B.T=E,yu(t,!1,n,a);try{var P=c(),Q=B.S;if(Q!==null&&Q(E,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ht=y0(P,s);Ws(t,n,ht,kn(t))}else Ws(t,n,s,kn(t))}catch(gt){Ws(t,n,{then:function(){},status:"rejected",reason:gt},kn())}finally{W.p=f,B.T=M}}function R0(){}function Su(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=cp(t).queue;lp(t,c,n,lt,a===null?R0:function(){return up(t),a(s)})}function cp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:lt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ci,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function up(t){var n=cp(t).next.queue;Ws(t,n,{},kn())}function Mu(){return Mn(lo)}function fp(){return tn().memoizedState}function hp(){return tn().memoizedState}function w0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=kn();t=ta(a);var s=ea(n,t,a);s!==null&&(Wn(s,n,a),Is(s,n,a)),n={cache:Qc()},t.payload=n;return}n=n.return}}function C0(t,n,a){var s=kn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},al(t)?pp(n,a):(a=Gc(t,n,a,s),a!==null&&(Wn(a,t,s),mp(a,n,s)))}function dp(t,n,a){var s=kn();Ws(t,n,a,s)}function Ws(t,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(al(t))pp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var M=n.lastRenderedState,E=f(M,a);if(c.hasEagerState=!0,c.eagerState=E,In(E,M))return Go(t,n,c,0),ze===null&&Ho(),!1}catch{}finally{}if(a=Gc(t,n,c,s),a!==null)return Wn(a,t,s),mp(a,n,s),!0}return!1}function yu(t,n,a,s){if(s={lane:2,revertLane:tf(),action:s,hasEagerState:!1,eagerState:null,next:null},al(t)){if(n)throw Error(r(479))}else n=Gc(t,a,s,2),n!==null&&Wn(n,t,2)}function al(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function pp(t,n){wr=Jo=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function mp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,bt(t,a)}}var rl={readContext:Mn,use:tl,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useLayoutEffect:Ke,useInsertionEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useSyncExternalStore:Ke,useId:Ke,useHostTransitionStatus:Ke,useFormState:Ke,useActionState:Ke,useOptimistic:Ke,useMemoCache:Ke,useCacheRefresh:Ke},gp={readContext:Mn,use:tl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Mn,useEffect:$d,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,il(4194308,4,ip.bind(null,n,t),a)},useLayoutEffect:function(t,n){return il(4194308,4,t,n)},useInsertionEffect:function(t,n){il(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(Xa){Mt(!0);try{t()}finally{Mt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(Xa){Mt(!0);try{a(n)}finally{Mt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=C0.bind(null,ue,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=gu(t);var n=t.queue,a=dp.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:vu,useDeferredValue:function(t,n){var a=Ln();return xu(a,t,n)},useTransition:function(){var t=gu(!1);return t=lp.bind(null,ue,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ue,c=Ln();if(Re){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ze===null)throw Error(r(349));(Me&124)!==0||Bd(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,$d(Fd.bind(null,s,f,t),[t]),s.flags|=2048,Lr(9,nl(),Id.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=ze.identifierPrefix;if(Re){var a=Ai,s=bi;a=(s&~(1<<32-Lt(s)-1)).toString(32)+a,n="«"+n+"R"+a,a=$o++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=E0++,n="«"+n+"r"+a.toString(32)+"»";return t.memoizedState=n},useHostTransitionStatus:Mu,useFormState:Yd,useActionState:Yd,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=yu.bind(null,ue,!0,a),a.dispatch=n,[t,n]},useMemoCache:du,useCacheRefresh:function(){return Ln().memoizedState=w0.bind(null,ue)}},_p={readContext:Mn,use:tl,useCallback:rp,useContext:Mn,useEffect:tp,useImperativeHandle:ap,useInsertionEffect:ep,useLayoutEffect:np,useMemo:sp,useReducer:el,useRef:Jd,useState:function(){return el(Ci)},useDebugValue:vu,useDeferredValue:function(t,n){var a=tn();return op(a,Le.memoizedState,t,n)},useTransition:function(){var t=el(Ci)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:Vs(t),n]},useSyncExternalStore:zd,useId:fp,useHostTransitionStatus:Mu,useFormState:Zd,useActionState:Zd,useOptimistic:function(t,n){var a=tn();return Vd(a,Le,t,n)},useMemoCache:du,useCacheRefresh:hp},L0={readContext:Mn,use:tl,useCallback:rp,useContext:Mn,useEffect:tp,useImperativeHandle:ap,useInsertionEffect:ep,useLayoutEffect:np,useMemo:sp,useReducer:mu,useRef:Jd,useState:function(){return mu(Ci)},useDebugValue:vu,useDeferredValue:function(t,n){var a=tn();return Le===null?xu(a,t,n):op(a,Le.memoizedState,t,n)},useTransition:function(){var t=mu(Ci)[0],n=tn().memoizedState;return[typeof t=="boolean"?t:Vs(t),n]},useSyncExternalStore:zd,useId:fp,useHostTransitionStatus:Mu,useFormState:Qd,useActionState:Qd,useOptimistic:function(t,n){var a=tn();return Le!==null?Vd(a,Le,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:du,useCacheRefresh:hp},Dr=null,Xs=0;function sl(t){var n=Xs;return Xs+=1,Dr===null&&(Dr=[]),wd(Dr,t,n)}function js(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ol(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function vp(t){var n=t._init;return n(t._payload)}function xp(t){function n(q,H){if(t){var K=q.deletions;K===null?(q.deletions=[H],q.flags|=16):K.push(H)}}function a(q,H){if(!t)return null;for(;H!==null;)n(q,H),H=H.sibling;return null}function s(q){for(var H=new Map;q!==null;)q.key!==null?H.set(q.key,q):H.set(q.index,q),q=q.sibling;return H}function c(q,H){return q=Ti(q,H),q.index=0,q.sibling=null,q}function f(q,H,K){return q.index=K,t?(K=q.alternate,K!==null?(K=K.index,K<H?(q.flags|=67108866,H):K):(q.flags|=67108866,H)):(q.flags|=1048576,H)}function M(q){return t&&q.alternate===null&&(q.flags|=67108866),q}function E(q,H,K,pt){return H===null||H.tag!==6?(H=kc(K,q.mode,pt),H.return=q,H):(H=c(H,K),H.return=q,H)}function P(q,H,K,pt){var Pt=K.type;return Pt===T?ht(q,H,K.props.children,pt,K.key):H!==null&&(H.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===ct&&vp(Pt)===H.type)?(H=c(H,K.props),js(H,K),H.return=q,H):(H=ko(K.type,K.key,K.props,null,q.mode,pt),js(H,K),H.return=q,H)}function Q(q,H,K,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=Wc(K,q.mode,pt),H.return=q,H):(H=c(H,K.children||[]),H.return=q,H)}function ht(q,H,K,pt,Pt){return H===null||H.tag!==7?(H=Ba(K,q.mode,pt,Pt),H.return=q,H):(H=c(H,K),H.return=q,H)}function gt(q,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=kc(""+H,q.mode,K),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case v:return K=ko(H.type,H.key,H.props,null,q.mode,K),js(K,H),K.return=q,K;case y:return H=Wc(H,q.mode,K),H.return=q,H;case ct:var pt=H._init;return H=pt(H._payload),gt(q,H,K)}if(st(H)||ut(H))return H=Ba(H,q.mode,K,null),H.return=q,H;if(typeof H.then=="function")return gt(q,sl(H),K);if(H.$$typeof===L)return gt(q,qo(q,H),K);ol(q,H)}return null}function J(q,H,K,pt){var Pt=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Pt!==null?null:E(q,H,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case v:return K.key===Pt?P(q,H,K,pt):null;case y:return K.key===Pt?Q(q,H,K,pt):null;case ct:return Pt=K._init,K=Pt(K._payload),J(q,H,K,pt)}if(st(K)||ut(K))return Pt!==null?null:ht(q,H,K,pt,null);if(typeof K.then=="function")return J(q,H,sl(K),pt);if(K.$$typeof===L)return J(q,H,qo(q,K),pt);ol(q,K)}return null}function et(q,H,K,pt,Pt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return q=q.get(K)||null,E(H,q,""+pt,Pt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case v:return q=q.get(pt.key===null?K:pt.key)||null,P(H,q,pt,Pt);case y:return q=q.get(pt.key===null?K:pt.key)||null,Q(H,q,pt,Pt);case ct:var fe=pt._init;return pt=fe(pt._payload),et(q,H,K,pt,Pt)}if(st(pt)||ut(pt))return q=q.get(K)||null,ht(H,q,pt,Pt,null);if(typeof pt.then=="function")return et(q,H,K,sl(pt),Pt);if(pt.$$typeof===L)return et(q,H,K,qo(H,pt),Pt);ol(H,pt)}return null}function Yt(q,H,K,pt){for(var Pt=null,fe=null,Bt=H,Xt=H=0,hn=null;Bt!==null&&Xt<K.length;Xt++){Bt.index>Xt?(hn=Bt,Bt=null):hn=Bt.sibling;var Ee=J(q,Bt,K[Xt],pt);if(Ee===null){Bt===null&&(Bt=hn);break}t&&Bt&&Ee.alternate===null&&n(q,Bt),H=f(Ee,H,Xt),fe===null?Pt=Ee:fe.sibling=Ee,fe=Ee,Bt=hn}if(Xt===K.length)return a(q,Bt),Re&&Fa(q,Xt),Pt;if(Bt===null){for(;Xt<K.length;Xt++)Bt=gt(q,K[Xt],pt),Bt!==null&&(H=f(Bt,H,Xt),fe===null?Pt=Bt:fe.sibling=Bt,fe=Bt);return Re&&Fa(q,Xt),Pt}for(Bt=s(Bt);Xt<K.length;Xt++)hn=et(Bt,q,Xt,K[Xt],pt),hn!==null&&(t&&hn.alternate!==null&&Bt.delete(hn.key===null?Xt:hn.key),H=f(hn,H,Xt),fe===null?Pt=hn:fe.sibling=hn,fe=hn);return t&&Bt.forEach(function(va){return n(q,va)}),Re&&Fa(q,Xt),Pt}function Wt(q,H,K,pt){if(K==null)throw Error(r(151));for(var Pt=null,fe=null,Bt=H,Xt=H=0,hn=null,Ee=K.next();Bt!==null&&!Ee.done;Xt++,Ee=K.next()){Bt.index>Xt?(hn=Bt,Bt=null):hn=Bt.sibling;var va=J(q,Bt,Ee.value,pt);if(va===null){Bt===null&&(Bt=hn);break}t&&Bt&&va.alternate===null&&n(q,Bt),H=f(va,H,Xt),fe===null?Pt=va:fe.sibling=va,fe=va,Bt=hn}if(Ee.done)return a(q,Bt),Re&&Fa(q,Xt),Pt;if(Bt===null){for(;!Ee.done;Xt++,Ee=K.next())Ee=gt(q,Ee.value,pt),Ee!==null&&(H=f(Ee,H,Xt),fe===null?Pt=Ee:fe.sibling=Ee,fe=Ee);return Re&&Fa(q,Xt),Pt}for(Bt=s(Bt);!Ee.done;Xt++,Ee=K.next())Ee=et(Bt,q,Xt,Ee.value,pt),Ee!==null&&(t&&Ee.alternate!==null&&Bt.delete(Ee.key===null?Xt:Ee.key),H=f(Ee,H,Xt),fe===null?Pt=Ee:fe.sibling=Ee,fe=Ee);return t&&Bt.forEach(function(Dx){return n(q,Dx)}),Re&&Fa(q,Xt),Pt}function Ue(q,H,K,pt){if(typeof K=="object"&&K!==null&&K.type===T&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case v:t:{for(var Pt=K.key;H!==null;){if(H.key===Pt){if(Pt=K.type,Pt===T){if(H.tag===7){a(q,H.sibling),pt=c(H,K.props.children),pt.return=q,q=pt;break t}}else if(H.elementType===Pt||typeof Pt=="object"&&Pt!==null&&Pt.$$typeof===ct&&vp(Pt)===H.type){a(q,H.sibling),pt=c(H,K.props),js(pt,K),pt.return=q,q=pt;break t}a(q,H);break}else n(q,H);H=H.sibling}K.type===T?(pt=Ba(K.props.children,q.mode,pt,K.key),pt.return=q,q=pt):(pt=ko(K.type,K.key,K.props,null,q.mode,pt),js(pt,K),pt.return=q,q=pt)}return M(q);case y:t:{for(Pt=K.key;H!==null;){if(H.key===Pt)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(q,H.sibling),pt=c(H,K.children||[]),pt.return=q,q=pt;break t}else{a(q,H);break}else n(q,H);H=H.sibling}pt=Wc(K,q.mode,pt),pt.return=q,q=pt}return M(q);case ct:return Pt=K._init,K=Pt(K._payload),Ue(q,H,K,pt)}if(st(K))return Yt(q,H,K,pt);if(ut(K)){if(Pt=ut(K),typeof Pt!="function")throw Error(r(150));return K=Pt.call(K),Wt(q,H,K,pt)}if(typeof K.then=="function")return Ue(q,H,sl(K),pt);if(K.$$typeof===L)return Ue(q,H,qo(q,K),pt);ol(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(q,H.sibling),pt=c(H,K),pt.return=q,q=pt):(a(q,H),pt=kc(K,q.mode,pt),pt.return=q,q=pt),M(q)):a(q,H)}return function(q,H,K,pt){try{Xs=0;var Pt=Ue(q,H,K,pt);return Dr=null,Pt}catch(Bt){if(Bt===zs||Bt===Zo)throw Bt;var fe=Fn(29,Bt,null,q.mode);return fe.lanes=pt,fe.return=q,fe}finally{}}}var Ur=xp(!0),Sp=xp(!1),ti=X(null),_i=null;function ia(t){var n=t.alternate;V(on,on.current&1),V(ti,t),_i===null&&(n===null||Rr.current!==null||n.memoizedState!==null)&&(_i=t)}function Mp(t){if(t.tag===22){if(V(on,on.current),V(ti,t),_i===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(_i=t)}}else aa()}function aa(){V(on,on.current),V(ti,ti.current)}function Li(t){it(ti),_i===t&&(_i=null),it(on)}var on=X(0);function ll(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||df(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Eu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Tu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=kn(),c=ta(s);c.payload=n,a!=null&&(c.callback=a),n=ea(t,c,s),n!==null&&(Wn(n,t,s),Is(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=kn(),c=ta(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ea(t,c,s),n!==null&&(Wn(n,t,s),Is(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=kn(),s=ta(a);s.tag=2,n!=null&&(s.callback=n),n=ea(t,s,a),n!==null&&(Wn(n,t,a),Is(n,t,a))}};function yp(t,n,a,s,c,f,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,M):n.prototype&&n.prototype.isPureReactComponent?!ws(a,s)||!ws(c,f):!0}function Ep(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Tu.enqueueReplaceState(n,n.state,null)}function ja(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}var cl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Tp(t){cl(t)}function bp(t){console.error(t)}function Ap(t){cl(t)}function ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Rp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function bu(t,n,a){return a=ta(a),a.tag=3,a.payload={element:null},a.callback=function(){ul(t,n)},a}function wp(t){return t=ta(t),t.tag=3,t}function Cp(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){Rp(n,a,s)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(t.callback=function(){Rp(n,a,s),typeof c!="function"&&(ua===null?ua=new Set([this]):ua.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function D0(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ns(n,a,c,!0),a=ti.current,a!==null){switch(a.tag){case 13:return _i===null?Zu():a.alternate===null&&je===0&&(je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===tu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Qu(t,s,c)),!1;case 22:return a.flags|=65536,s===tu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Qu(t,s,c)),!1}throw Error(r(435,a.tag))}return Qu(t,s,c),Zu(),!1}if(Re)return n=ti.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==qc&&(t=Error(r(422),{cause:s}),Us(Kn(t,a)))):(s!==qc&&(n=Error(r(423),{cause:s}),Us(Kn(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=Kn(s,a),c=bu(t.stateNode,s,c),iu(t,c),je!==4&&(je=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),$s===null?$s=[f]:$s.push(f),je!==4&&(je=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=bu(a.stateNode,s,t),iu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ua===null||!ua.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=wp(c),Cp(c,t,a,s),iu(a,c),!1}a=a.return}while(a!==null);return!1}var Lp=Error(r(461)),un=!1;function gn(t,n,a,s){n.child=t===null?Sp(n,null,a,s):Ur(n,t.child,a,s)}function Dp(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var M={};for(var E in s)E!=="ref"&&(M[E]=s[E])}else M=s;return ka(n),s=lu(t,n,a,M,f,c),E=cu(),t!==null&&!un?(uu(t,n,c),Di(t,n,c)):(Re&&E&&Xc(n),n.flags|=1,gn(t,n,s,c),n.child)}function Up(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!Vc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Np(t,n,f,s,c)):(t=ko(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Nu(t,c)){var M=f.memoizedProps;if(a=a.compare,a=a!==null?a:ws,a(M,s)&&t.ref===n.ref)return Di(t,n,c)}return n.flags|=1,t=Ti(f,s),t.ref=n.ref,t.return=n,n.child=t}function Np(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ws(f,s)&&t.ref===n.ref)if(un=!1,n.pendingProps=s=f,Nu(t,c))(t.flags&131072)!==0&&(un=!0);else return n.lanes=t.lanes,Di(t,n,c)}return Au(t,n,a,s,c)}function Op(t,n,a){var s=n.pendingProps,c=s.children,f=t!==null?t.memoizedState:null;if(s.mode==="hidden"){if((n.flags&128)!==0){if(s=f!==null?f.baseLanes|a:a,t!==null){for(c=n.child=t.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return Pp(t,n,s,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yo(n,f!==null?f.cachePool:null),f!==null?Nd(n,f):ru(),Mp(n);else return n.lanes=n.childLanes=536870912,Pp(t,n,f!==null?f.baseLanes|a:a,a)}else f!==null?(Yo(n,f.cachePool),Nd(n,f),aa(),n.memoizedState=null):(t!==null&&Yo(n,null),ru(),aa());return gn(t,n,c,a),n.child}function Pp(t,n,a,s){var c=$c();return c=c===null?null:{parent:sn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Yo(n,null),ru(),Mp(n),t!==null&&Ns(t,n,s,!0),null}function fl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Au(t,n,a,s,c){return ka(n),a=lu(t,n,a,s,void 0,c),s=cu(),t!==null&&!un?(uu(t,n,c),Di(t,n,c)):(Re&&s&&Xc(n),n.flags|=1,gn(t,n,a,c),n.child)}function zp(t,n,a,s,c,f){return ka(n),n.updateQueue=null,a=Pd(n,s,a,c),Od(t),s=cu(),t!==null&&!un?(uu(t,n,f),Di(t,n,f)):(Re&&s&&Xc(n),n.flags|=1,gn(t,n,a,f),n.child)}function Bp(t,n,a,s,c){if(ka(n),n.stateNode===null){var f=yr,M=a.contextType;typeof M=="object"&&M!==null&&(f=Mn(M)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Tu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},eu(n),M=a.contextType,f.context=typeof M=="object"&&M!==null?Mn(M):yr,f.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Eu(n,a,M,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(M=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),M!==f.state&&Tu.enqueueReplaceState(f,f.state,null),Hs(n,s,f,c),Fs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,P=ja(a,E);f.props=P;var Q=f.context,ht=a.contextType;M=yr,typeof ht=="object"&&ht!==null&&(M=Mn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==M)&&Ep(n,f,s,M),$i=!1;var J=n.memoizedState;f.state=J,Hs(n,s,f,c),Fs(),Q=n.memoizedState,E||J!==Q||$i?(typeof gt=="function"&&(Eu(n,a,gt,s),Q=n.memoizedState),(P=$i||yp(n,a,P,s,J,Q,M))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=M,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,nu(t,n),M=n.memoizedProps,ht=ja(a,M),f.props=ht,gt=n.pendingProps,J=f.context,Q=a.contextType,P=yr,typeof Q=="object"&&Q!==null&&(P=Mn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M!==gt||J!==P)&&Ep(n,f,s,P),$i=!1,J=n.memoizedState,f.state=J,Hs(n,s,f,c),Fs();var et=n.memoizedState;M!==gt||J!==et||$i||t!==null&&t.dependencies!==null&&jo(t.dependencies)?(typeof E=="function"&&(Eu(n,a,E,s),et=n.memoizedState),(ht=$i||yp(n,a,ht,s,J,et,P)||t!==null&&t.dependencies!==null&&jo(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,et,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,et,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=et),f.props=s,f.state=et,f.context=P,s=ht):(typeof f.componentDidUpdate!="function"||M===t.memoizedProps&&J===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&J===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,fl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ur(n,t.child,null,c),n.child=Ur(n,null,a,c)):gn(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Di(t,n,c),t}function Ip(t,n,a,s){return Ds(),n.flags|=256,gn(t,n,a,s),n.child}var Ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wu(t){return{baseLanes:t,cachePool:bd()}}function Cu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function Fp(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,M;if((M=f)||(M=t!==null&&t.memoizedState===null?!1:(on.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,t===null){if(Re){if(c?ia(n):aa(),Re){var E=Xe,P;if(P=E){t:{for(P=E,E=gi;P.nodeType!==8;){if(!E){E=null;break t}if(P=ci(P.nextSibling),P===null){E=null;break t}}E=P}E!==null?(n.memoizedState={dehydrated:E,treeContext:Ia!==null?{id:bi,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},P=Fn(18,null,null,0),P.stateNode=E,P.return=n,n.child=P,An=n,Xe=null,P=!0):P=!1}P||Ga(n)}if(E=n.memoizedState,E!==null&&(E=E.dehydrated,E!==null))return df(E)?n.lanes=32:n.lanes=536870912,null;Li(n)}return E=s.children,s=s.fallback,c?(aa(),c=n.mode,E=hl({mode:"hidden",children:E},c),s=Ba(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,c=n.child,c.memoizedState=wu(a),c.childLanes=Cu(t,M,a),n.memoizedState=Ru,s):(ia(n),Lu(n,E))}if(P=t.memoizedState,P!==null&&(E=P.dehydrated,E!==null)){if(f)n.flags&256?(ia(n),n.flags&=-257,n=Du(t,n,a)):n.memoizedState!==null?(aa(),n.child=t.child,n.flags|=128,n=null):(aa(),c=s.fallback,E=n.mode,s=hl({mode:"visible",children:s.children},E),c=Ba(c,E,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,Ur(n,t.child,null,a),s=n.child,s.memoizedState=wu(a),s.childLanes=Cu(t,M,a),n.memoizedState=Ru,n=c);else if(ia(n),df(E)){if(M=E.nextSibling&&E.nextSibling.dataset,M)var Q=M.dgst;M=Q,s=Error(r(419)),s.stack="",s.digest=M,Us({value:s,source:null,stack:null}),n=Du(t,n,a)}else if(un||Ns(t,n,a,!1),M=(a&t.childLanes)!==0,un||M){if(M=ze,M!==null&&(s=a&-a,s=(s&42)!==0?1:Vt(s),s=(s&(M.suspendedLanes|a))!==0?0:s,s!==0&&s!==P.retryLane))throw P.retryLane=s,Mr(t,s),Wn(M,t,s),Lp;E.data==="$?"||Zu(),n=Du(t,n,a)}else E.data==="$?"?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,Xe=ci(E.nextSibling),An=n,Re=!0,Ha=null,gi=!1,t!==null&&(Jn[$n++]=bi,Jn[$n++]=Ai,Jn[$n++]=Ia,bi=t.id,Ai=t.overflow,Ia=n),n=Lu(n,s.children),n.flags|=4096);return n}return c?(aa(),c=s.fallback,E=n.mode,P=t.child,Q=P.sibling,s=Ti(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,Q!==null?c=Ti(Q,c):(c=Ba(c,E,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,E=t.child.memoizedState,E===null?E=wu(a):(P=E.cachePool,P!==null?(Q=sn._currentValue,P=P.parent!==Q?{parent:Q,pool:Q}:P):P=bd(),E={baseLanes:E.baseLanes|a,cachePool:P}),c.memoizedState=E,c.childLanes=Cu(t,M,a),n.memoizedState=Ru,s):(ia(n),a=t.child,t=a.sibling,a=Ti(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(M=n.deletions,M===null?(n.deletions=[t],n.flags|=16):M.push(t)),n.child=a,n.memoizedState=null,a)}function Lu(t,n){return n=hl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function hl(t,n){return t=Fn(22,t,null,n),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Du(t,n,a){return Ur(n,t.child,null,a),t=Lu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Hp(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),Zc(t.return,n,a)}function Uu(t,n,a,s,c){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function Gp(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(gn(t,n,s.children,a),s=on.current,(s&2)!==0)s=s&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hp(t,a,n);else if(t.tag===19)Hp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}s&=1}switch(V(on,s),c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ll(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Uu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ll(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Uu(n,!0,a,null,f);break;case"together":Uu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Di(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ca|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ns(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Ti(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ti(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Nu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jo(t)))}function U0(t,n,a){switch(n.tag){case 3:Ot(n,n.stateNode.containerInfo),Ji(n,sn,t.memoizedState.cache),Ds();break;case 27:case 5:jt(n);break;case 4:Ot(n,n.stateNode.containerInfo);break;case 10:Ji(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Fp(t,n,a):(ia(n),t=Di(t,n,a),t!==null?t.sibling:null);ia(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ns(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return Gp(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),V(on,on.current),s)break;return null;case 22:case 23:return n.lanes=0,Op(t,n,a);case 24:Ji(n,sn,t.memoizedState.cache)}return Di(t,n,a)}function Vp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)un=!0;else{if(!Nu(t,a)&&(n.flags&128)===0)return un=!1,U0(t,n,a);un=(t.flags&131072)!==0}else un=!1,Re&&(n.flags&1048576)!==0&&vd(n,Xo,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")Vc(s)?(t=ja(s,t),n.tag=1,n=Bp(null,n,s,t,a)):(n.tag=0,n=Au(null,n,s,t,a));else{if(s!=null){if(c=s.$$typeof,c===N){n.tag=11,n=Dp(null,n,s,t,a);break t}else if(c===G){n.tag=14,n=Up(null,n,s,t,a);break t}}throw n=Y(s)||s,Error(r(306,n,""))}}return n;case 0:return Au(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ja(s,n.pendingProps),Bp(t,n,s,c,a);case 3:t:{if(Ot(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,nu(t,n),Hs(n,s,null,a);var M=n.memoizedState;if(s=M.cache,Ji(n,sn,s),s!==f.cache&&Kc(n,[sn],a,!0),Fs(),s=M.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Ip(t,n,s,a);break t}else if(s!==c){c=Kn(Error(r(424)),n),Us(c),n=Ip(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=ci(t.firstChild),An=n,Re=!0,Ha=null,gi=!0,a=Sp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ds(),s===c){n=Di(t,n,a);break t}gn(t,n,s,a)}n=n.child}return n;case 26:return fl(t,n),t===null?(a=jm(n.type,null,n.pendingProps,null))?n.memoizedState=a:Re||(a=n.type,t=n.pendingProps,s=Al(xt.current).createElement(a),s[ye]=n,s[Be]=t,vn(s,a,t),j(s),n.stateNode=s):n.memoizedState=jm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return jt(n),t===null&&Re&&(s=n.stateNode=km(n.type,n.pendingProps,xt.current),An=n,gi=!0,c=Xe,da(n.type)?(pf=c,Xe=ci(s.firstChild)):Xe=c),gn(t,n,n.pendingProps.children,a),fl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Re&&((c=s=Xe)&&(s=sx(s,n.type,n.pendingProps,gi),s!==null?(n.stateNode=s,An=n,Xe=ci(s.firstChild),gi=!1,c=!0):c=!1),c||Ga(n)),jt(n),c=n.type,f=n.pendingProps,M=t!==null?t.memoizedProps:null,s=f.children,uf(c,f)?s=null:M!==null&&uf(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=lu(t,n,T0,null,null,a),lo._currentValue=c),fl(t,n),gn(t,n,s,a),n.child;case 6:return t===null&&Re&&((t=a=Xe)&&(a=ox(a,n.pendingProps,gi),a!==null?(n.stateNode=a,An=n,Xe=null,t=!0):t=!1),t||Ga(n)),null;case 13:return Fp(t,n,a);case 4:return Ot(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ur(n,null,s,a):gn(t,n,s,a),n.child;case 11:return Dp(t,n,n.type,n.pendingProps,a);case 7:return gn(t,n,n.pendingProps,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Ji(n,n.type,s.value),gn(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,ka(n),c=Mn(c),s=s(c),n.flags|=1,gn(t,n,s,a),n.child;case 14:return Up(t,n,n.type,n.pendingProps,a);case 15:return Np(t,n,n.type,n.pendingProps,a);case 19:return Gp(t,n,a);case 31:return s=n.pendingProps,a=n.mode,s={mode:s.mode,children:s.children},t===null?(a=hl(s,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ti(t.child,s),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Op(t,n,a);case 24:return ka(n),s=Mn(sn),t===null?(c=$c(),c===null&&(c=ze,f=Qc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},eu(n),Ji(n,sn,c)):((t.lanes&a)!==0&&(nu(t,n),Hs(n,null,null,a),Fs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ji(n,sn,s)):(s=f.cache,Ji(n,sn,s),s!==c.cache&&Kc(n,[sn],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ui(t){t.flags|=4}function kp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Qm(n)){if(n=ti.current,n!==null&&((Me&4194048)===Me?_i!==null:(Me&62914560)!==Me&&(Me&536870912)===0||n!==_i))throw Bs=tu,Ad;t.flags|=8192}}function dl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?ce():536870912,t.lanes|=n,zr|=n)}function qs(t,n){if(!Re)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function N0(t,n,a){var s=n.pendingProps;switch(jc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(n),null;case 1:return ke(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),wi(sn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ls(n)?Ui(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Md())),ke(n),null;case 26:return a=n.memoizedState,t===null?(Ui(n),a!==null?(ke(n),kp(n,a)):(ke(n),n.flags&=-16777217)):a?a!==t.memoizedState?(Ui(n),ke(n),kp(n,a)):(ke(n),n.flags&=-16777217):(t.memoizedProps!==s&&Ui(n),ke(n),n.flags&=-16777217),null;case 27:ee(n),a=xt.current;var c=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ui(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}t=$.current,Ls(n)?xd(n):(t=km(c,s,a),n.stateNode=t,Ui(n))}return ke(n),null;case 5:if(ee(n),a=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ui(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return ke(n),null}if(t=$.current,Ls(n))xd(n);else{switch(c=Al(xt.current),t){case 1:t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=c.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?t.multiple=!0:s.size&&(t.size=s.size);break;default:t=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}t[ye]=n,t[Be]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)t.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=t;t:switch(vn(t,a,s),a){case"button":case"input":case"select":case"textarea":t=!!s.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Ui(n)}}return ke(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ui(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=xt.current,Ls(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=An,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[ye]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||zm(t.nodeValue,a)),t||Ga(n)}else t=Al(t).createTextNode(s),t[ye]=n,n.stateNode=t}return ke(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ls(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[ye]=n}else Ds(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ke(n),c=!1}else c=Md(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Li(n),n):(Li(n),null)}if(Li(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=s!==null,t=t!==null&&t.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==t&&a&&(n.child.flags|=8192),dl(n,n.updateQueue),ke(n),null;case 4:return Ht(),t===null&&rf(n.stateNode.containerInfo),ke(n),null;case 10:return wi(n.type),ke(n),null;case 19:if(it(on),c=n.memoizedState,c===null)return ke(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)qs(c,!1);else{if(je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ll(t),f!==null){for(n.flags|=128,qs(c,!1),t=f.updateQueue,n.updateQueue=t,dl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)_d(a,t),a=a.sibling;return V(on,on.current&1|2),n.child}t=t.sibling}c.tail!==null&&Se()>gl&&(n.flags|=128,s=!0,qs(c,!1),n.lanes=4194304)}else{if(!s)if(t=ll(f),t!==null){if(n.flags|=128,s=!0,t=t.updateQueue,n.updateQueue=t,dl(n,t),qs(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!Re)return ke(n),null}else 2*Se()-c.renderingStartTime>gl&&a!==536870912&&(n.flags|=128,s=!0,qs(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(t=c.last,t!==null?t.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=Se(),n.sibling=null,t=on.current,V(on,s?t&1|2:t&1),n):(ke(n),null);case 22:case 23:return Li(n),su(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(ke(n),n.subtreeFlags&6&&(n.flags|=8192)):ke(n),a=n.updateQueue,a!==null&&dl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&it(Wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),wi(sn),ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function O0(t,n){switch(jc(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return wi(sn),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ee(n),null;case 13:if(Li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ds()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(on),null;case 4:return Ht(),null;case 10:return wi(n.type),null;case 22:case 23:return Li(n),su(),t!==null&&it(Wa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return wi(sn),null;case 25:return null;default:return null}}function Wp(t,n){switch(jc(n),n.tag){case 3:wi(sn),Ht();break;case 26:case 27:case 5:ee(n);break;case 4:Ht();break;case 13:Li(n);break;case 19:it(on);break;case 10:wi(n.type);break;case 22:case 23:Li(n),su(),t!==null&&it(Wa);break;case 24:wi(sn)}}function Ys(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,M=a.inst;s=f(),M.destroy=s}a=a.next}while(a!==c)}}catch(E){Pe(n,n.return,E)}}function ra(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var M=s.inst,E=M.destroy;if(E!==void 0){M.destroy=void 0,c=n;var P=a,Q=E;try{Q()}catch(ht){Pe(c,P,ht)}}}s=s.next}while(s!==f)}}catch(ht){Pe(n,n.return,ht)}}function Xp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Ud(n,a)}catch(s){Pe(t,t.return,s)}}}function jp(t,n,a){a.props=ja(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function Zs(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Pe(t,n,c)}}function vi(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function qp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function Ou(t,n,a){try{var s=t.stateNode;ex(s,t.type,a,n),s[Be]=n}catch(c){Pe(t,t.return,c)}}function Yp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&da(t.type)||t.tag===4}function Pu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Yp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&da(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zu(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=bl));else if(s!==4&&(s===27&&da(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(zu(t,n,a),t=t.sibling;t!==null;)zu(t,n,a),t=t.sibling}function pl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(pl(t,n,a),t=t.sibling;t!==null;)pl(t,n,a),t=t.sibling}function Zp(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);vn(n,s,a),n[ye]=t,n[Be]=a}catch(f){Pe(t,t.return,f)}}var Ni=!1,Qe=!1,Bu=!1,Kp=typeof WeakSet=="function"?WeakSet:Set,fn=null;function P0(t,n){if(t=t.containerInfo,lf=Ul,t=od(t),Pc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var M=0,E=-1,P=-1,Q=0,ht=0,gt=t,J=null;e:for(;;){for(var et;gt!==a||c!==0&&gt.nodeType!==3||(E=M+c),gt!==f||s!==0&&gt.nodeType!==3||(P=M+s),gt.nodeType===3&&(M+=gt.nodeValue.length),(et=gt.firstChild)!==null;)J=gt,gt=et;for(;;){if(gt===t)break e;if(J===a&&++Q===c&&(E=M),J===f&&++ht===s&&(P=M),(et=gt.nextSibling)!==null)break;gt=J,J=gt.parentNode}gt=et}a=E===-1||P===-1?null:{start:E,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(cf={focusedElem:t,selectionRange:a},Ul=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1024)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Yt=ja(a.type,c,a.elementType===a.type);t=s.getSnapshotBeforeUpdate(Yt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Wt){Pe(a,a.return,Wt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)hf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":hf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function Qp(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:sa(t,a),s&4&&Ys(5,a);break;case 1:if(sa(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(M){Pe(a,a.return,M)}else{var c=ja(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(M){Pe(a,a.return,M)}}s&64&&Xp(a),s&512&&Zs(a,a.return);break;case 3:if(sa(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ud(t,n)}catch(M){Pe(a,a.return,M)}}break;case 27:n===null&&s&4&&Zp(a);case 26:case 5:sa(t,a),n===null&&s&4&&qp(a),s&512&&Zs(a,a.return);break;case 12:sa(t,a);break;case 13:sa(t,a),s&4&&tm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=W0.bind(null,a),lx(t,a))));break;case 22:if(s=a.memoizedState!==null||Ni,!s){n=n!==null&&n.memoizedState!==null||Qe,c=Ni;var f=Qe;Ni=s,(Qe=n)&&!f?oa(t,a,(a.subtreeFlags&8772)!==0):sa(t,a),Ni=c,Qe=f}break;case 30:break;default:sa(t,a)}}function Jp(t){var n=t.alternate;n!==null&&(t.alternate=null,Jp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&fr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ge=null,Dn=!1;function Oi(t,n,a){for(a=a.child;a!==null;)$p(t,n,a),a=a.sibling}function $p(t,n,a){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(yt,a)}catch{}switch(a.tag){case 26:Qe||vi(a,n),Oi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||vi(a,n);var s=Ge,c=Dn;da(a.type)&&(Ge=a.stateNode,Dn=!1),Oi(t,n,a),ao(a.stateNode),Ge=s,Dn=c;break;case 5:Qe||vi(a,n);case 6:if(s=Ge,c=Dn,Ge=null,Oi(t,n,a),Ge=s,Dn=c,Ge!==null)if(Dn)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ge.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ge!==null&&(Dn?(t=Ge,Gm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ho(t)):Gm(Ge,a.stateNode));break;case 4:s=Ge,c=Dn,Ge=a.stateNode.containerInfo,Dn=!0,Oi(t,n,a),Ge=s,Dn=c;break;case 0:case 11:case 14:case 15:Qe||ra(2,a,n),Qe||ra(4,a,n),Oi(t,n,a);break;case 1:Qe||(vi(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&jp(a,n,s)),Oi(t,n,a);break;case 21:Oi(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,Oi(t,n,a),Qe=s;break;default:Oi(t,n,a)}}function tm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ho(t)}catch(a){Pe(n,n.return,a)}}function z0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Kp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Kp),n;default:throw Error(r(435,t.tag))}}function Iu(t,n){var a=z0(t);n.forEach(function(s){var c=X0.bind(null,t,s);a.has(s)||(a.add(s),s.then(c,c))})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,M=n,E=M;t:for(;E!==null;){switch(E.tag){case 27:if(da(E.type)){Ge=E.stateNode,Dn=!1;break t}break;case 5:Ge=E.stateNode,Dn=!1;break t;case 3:case 4:Ge=E.stateNode.containerInfo,Dn=!0;break t}E=E.return}if(Ge===null)throw Error(r(160));$p(f,M,c),Ge=null,Dn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)em(n,t),n=n.sibling}var li=null;function em(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),s&4&&(ra(3,t,t.return),Ys(3,t),ra(5,t,t.return));break;case 1:Hn(n,t),Gn(t),s&512&&(Qe||a===null||vi(a,a.return)),s&64&&Ni&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=li;if(Hn(n,t),Gn(t),s&512&&(Qe||a===null||vi(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[qi]||f[ye]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),vn(f,s,a),f[ye]=t,j(f),s=f;break t;case"link":var M=Zm("link","href",c).get(s+(a.href||""));if(M){for(var E=0;E<M.length;E++)if(f=M[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(E,1);break e}}f=c.createElement(s),vn(f,s,a),c.head.appendChild(f);break;case"meta":if(M=Zm("meta","content",c).get(s+(a.content||""))){for(E=0;E<M.length;E++)if(f=M[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(E,1);break e}}f=c.createElement(s),vn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[ye]=t,j(f),s=f}t.stateNode=s}else Km(c,t.type,t.stateNode);else t.stateNode=Ym(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Km(c,t.type,t.stateNode):Ym(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Ou(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),s&512&&(Qe||a===null||vi(a,a.return)),a!==null&&s&4&&Ou(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),s&512&&(Qe||a===null||vi(a,a.return)),t.flags&32){c=t.stateNode;try{pr(c,"")}catch(et){Pe(t,t.return,et)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Ou(t,c,a!==null?a.memoizedProps:c)),s&1024&&(Bu=!0);break;case 6:if(Hn(n,t),Gn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(et){Pe(t,t.return,et)}}break;case 3:if(Cl=null,c=li,li=Rl(n.containerInfo),Hn(n,t),li=c,Gn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ho(n.containerInfo)}catch(et){Pe(t,t.return,et)}Bu&&(Bu=!1,nm(t));break;case 4:s=li,li=Rl(t.stateNode.containerInfo),Hn(n,t),Gn(t),li=s;break;case 12:Hn(n,t),Gn(t);break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wu=Se()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Iu(t,s)));break;case 22:c=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,Q=Ni,ht=Qe;if(Ni=Q||c,Qe=ht||P,Hn(n,t),Qe=ht,Ni=Q,Gn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||Ni||Qe||qa(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,c)M=f.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{E=P.stateNode;var gt=P.memoizedProps.style,J=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(et){Pe(P,P.return,et)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(et){Pe(P,P.return,et)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Iu(t,a))));break;case 19:Hn(n,t),Gn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Iu(t,s)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Yp(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Pu(t);pl(t,f,c);break;case 5:var M=a.stateNode;a.flags&32&&(pr(M,""),a.flags&=-33);var E=Pu(t);pl(t,E,M);break;case 3:case 4:var P=a.stateNode.containerInfo,Q=Pu(t);zu(t,Q,P);break;default:throw Error(r(161))}}catch(ht){Pe(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function nm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;nm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function sa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qp(t,n.alternate,n),n=n.sibling}function qa(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ra(4,n,n.return),qa(n);break;case 1:vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jp(n,n.return,a),qa(n);break;case 27:ao(n.stateNode);case 26:case 5:vi(n,n.return),qa(n);break;case 22:n.memoizedState===null&&qa(n);break;case 30:qa(n);break;default:qa(n)}t=t.sibling}}function oa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,M=f.flags;switch(f.tag){case 0:case 11:case 15:oa(c,f,a),Ys(4,f);break;case 1:if(oa(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Pe(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)Dd(P[c],E)}catch(Q){Pe(s,s.return,Q)}}a&&M&64&&Xp(f),Zs(f,f.return);break;case 27:Zp(f);case 26:case 5:oa(c,f,a),a&&s===null&&M&4&&qp(f),Zs(f,f.return);break;case 12:oa(c,f,a);break;case 13:oa(c,f,a),a&&M&4&&tm(c,f);break;case 22:f.memoizedState===null&&oa(c,f,a),Zs(f,f.return);break;case 30:break;default:oa(c,f,a)}n=n.sibling}}function Fu(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Os(a))}function Hu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Os(t))}function xi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)im(t,n,a,s),n=n.sibling}function im(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,s),c&2048&&Ys(9,n);break;case 1:xi(t,n,a,s);break;case 3:xi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Os(t)));break;case 12:if(c&2048){xi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,M=f.id,E=f.onPostCommit;typeof E=="function"&&E(M,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Pe(n,n.return,P)}}else xi(t,n,a,s);break;case 13:xi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,M=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,s):Ks(t,n):f._visibility&2?xi(t,n,a,s):(f._visibility|=2,Nr(t,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&Fu(M,n);break;case 24:xi(t,n,a,s),c&2048&&Hu(n.alternate,n);break;default:xi(t,n,a,s)}}function Nr(t,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=t,M=n,E=a,P=s,Q=M.flags;switch(M.tag){case 0:case 11:case 15:Nr(f,M,E,P,c),Ys(8,M);break;case 23:break;case 22:var ht=M.stateNode;M.memoizedState!==null?ht._visibility&2?Nr(f,M,E,P,c):Ks(f,M):(ht._visibility|=2,Nr(f,M,E,P,c)),c&&Q&2048&&Fu(M.alternate,M);break;case 24:Nr(f,M,E,P,c),c&&Q&2048&&Hu(M.alternate,M);break;default:Nr(f,M,E,P,c)}n=n.sibling}}function Ks(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:Ks(a,s),c&2048&&Fu(s.alternate,s);break;case 24:Ks(a,s),c&2048&&Hu(s.alternate,s);break;default:Ks(a,s)}n=n.sibling}}var Qs=8192;function Or(t){if(t.subtreeFlags&Qs)for(t=t.child;t!==null;)am(t),t=t.sibling}function am(t){switch(t.tag){case 26:Or(t),t.flags&Qs&&t.memoizedState!==null&&Mx(li,t.memoizedState,t.memoizedProps);break;case 5:Or(t);break;case 3:case 4:var n=li;li=Rl(t.stateNode.containerInfo),Or(t),li=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=Qs,Qs=16777216,Or(t),Qs=n):Or(t));break;default:Or(t)}}function rm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Js(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,om(s,t)}rm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)sm(t),t=t.sibling}function sm(t){switch(t.tag){case 0:case 11:case 15:Js(t),t.flags&2048&&ra(9,t,t.return);break;case 3:Js(t);break;case 12:Js(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,ml(t)):Js(t);break;default:Js(t)}}function ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,om(s,t)}rm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ra(8,n,n.return),ml(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,ml(n));break;default:ml(n)}t=t.sibling}}function om(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Os(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,fn=s;else t:for(a=t;fn!==null;){s=fn;var c=s.sibling,f=s.return;if(Jp(s),s===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}var B0={getCacheForType:function(t){var n=Mn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a}},I0=typeof WeakMap=="function"?WeakMap:Map,we=0,ze=null,pe=null,Me=0,Ce=0,Vn=null,la=!1,Pr=!1,Gu=!1,Pi=0,je=0,ca=0,Ya=0,Vu=0,ei=0,zr=0,$s=null,Un=null,ku=!1,Wu=0,gl=1/0,_l=null,ua=null,_n=0,fa=null,Br=null,Ir=0,Xu=0,ju=null,lm=null,to=0,qu=null;function kn(){if((we&2)!==0&&Me!==0)return Me&-Me;if(B.T!==null){var t=br;return t!==0?t:tf()}return Ye()}function cm(){ei===0&&(ei=(Me&536870912)===0||Re?Nt():536870912);var t=ti.current;return t!==null&&(t.flags|=32),ei}function Wn(t,n,a){(t===ze&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)&&(Fr(t,0),ha(t,Me,ei,!1)),Ct(t,a),((we&2)===0||t!==ze)&&(t===ze&&((we&2)===0&&(Ya|=a),je===4&&ha(t,Me,ei,!1)),Si(t))}function um(t,n,a){if((we&6)!==0)throw Error(r(327));var s=!a&&(n&124)===0&&(n&t.expiredLanes)===0||Gt(t,n),c=s?G0(t,n):Ku(t,n,!0),f=s;do{if(c===0){Pr&&!s&&ha(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!F0(a)){c=Ku(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var M=0;else M=t.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var E=t;c=$s;var P=E.current.memoizedState.isDehydrated;if(P&&(Fr(E,M).flags|=256),M=Ku(E,M,!1),M!==2){if(Gu&&!P){E.errorRecoveryDisabledLanes|=f,Ya|=f,c=4;break t}f=Un,Un=c,f!==null&&(Un===null?Un=f:Un.push.apply(Un,f))}c=M}if(f=!1,c!==2)continue}}if(c===1){Fr(t,0),ha(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ha(s,n,ei,!la);break t;case 2:Un=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Wu+300-Se(),10<c)){if(ha(s,n,ei,!la),Qt(s,0,!0)!==0)break t;s.timeoutHandle=Fm(fm.bind(null,s,a,Un,_l,ku,n,ei,Ya,zr,la,f,2,-0,0),c);break t}fm(s,a,Un,_l,ku,n,ei,Ya,zr,la,f,0,-0,0)}}break}while(!0);Si(t)}function fm(t,n,a,s,c,f,M,E,P,Q,ht,gt,J,et){if(t.timeoutHandle=-1,gt=n.subtreeFlags,(gt&8192||(gt&16785408)===16785408)&&(oo={stylesheets:null,count:0,unsuspend:Sx},am(n),gt=yx(),gt!==null)){t.cancelPendingCommit=gt(vm.bind(null,t,n,f,a,s,c,M,E,P,ht,1,J,et)),ha(t,f,M,!Q);return}vm(t,n,f,a,s,c,M,E,P)}function F0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!In(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ha(t,n,a,s){n&=~Vu,n&=~Ya,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Lt(c),M=1<<f;s[f]=-1,c&=~M}a!==0&&dt(t,a,n)}function vl(){return(we&6)===0?(eo(0),!1):!0}function Yu(){if(pe!==null){if(Ce===0)var t=pe.return;else t=pe,Ri=Va=null,fu(t),Dr=null,Xs=0,t=pe;for(;t!==null;)Wp(t.alternate,t),t=t.return;pe=null}}function Fr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ix(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Yu(),ze=t,pe=a=Ti(t.current,null),Me=n,Ce=0,Vn=null,la=!1,Pr=Gt(t,n),Gu=!1,zr=ei=Vu=Ya=ca=je=0,Un=$s=null,ku=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Lt(s),f=1<<c;n|=t[c],s&=~f}return Pi=n,Ho(),a}function hm(t,n){ue=null,B.H=rl,n===zs||n===Zo?(n=Cd(),Ce=3):n===Ad?(n=Cd(),Ce=4):Ce=n===Lp?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Vn=n,pe===null&&(je=1,ul(t,Kn(n,t.current)))}function dm(){var t=B.H;return B.H=rl,t===null?rl:t}function pm(){var t=B.A;return B.A=B0,t}function Zu(){je=4,la||(Me&4194048)!==Me&&ti.current!==null||(Pr=!0),(ca&134217727)===0&&(Ya&134217727)===0||ze===null||ha(ze,Me,ei,!1)}function Ku(t,n,a){var s=we;we|=2;var c=dm(),f=pm();(ze!==t||Me!==n)&&(_l=null,Fr(t,n)),n=!1;var M=je;t:do try{if(Ce!==0&&pe!==null){var E=pe,P=Vn;switch(Ce){case 8:Yu(),M=6;break t;case 3:case 2:case 9:case 6:ti.current===null&&(n=!0);var Q=Ce;if(Ce=0,Vn=null,Hr(t,E,P,Q),a&&Pr){M=0;break t}break;default:Q=Ce,Ce=0,Vn=null,Hr(t,E,P,Q)}}H0(),M=je;break}catch(ht){hm(t,ht)}while(!0);return n&&t.shellSuspendCounter++,Ri=Va=null,we=s,B.H=c,B.A=f,pe===null&&(ze=null,Me=0,Ho()),M}function H0(){for(;pe!==null;)mm(pe)}function G0(t,n){var a=we;we|=2;var s=dm(),c=pm();ze!==t||Me!==n?(_l=null,gl=Se()+500,Fr(t,n)):Pr=Gt(t,n);t:do try{if(Ce!==0&&pe!==null){n=pe;var f=Vn;e:switch(Ce){case 1:Ce=0,Vn=null,Hr(t,n,f,1);break;case 2:case 9:if(Rd(f)){Ce=0,Vn=null,gm(n);break}n=function(){Ce!==2&&Ce!==9||ze!==t||(Ce=7),Si(t)},f.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:Rd(f)?(Ce=0,Vn=null,gm(n)):(Ce=0,Vn=null,Hr(t,n,f,7));break;case 5:var M=null;switch(pe.tag){case 26:M=pe.memoizedState;case 5:case 27:var E=pe;if(!M||Qm(M)){Ce=0,Vn=null;var P=E.sibling;if(P!==null)pe=P;else{var Q=E.return;Q!==null?(pe=Q,xl(Q)):pe=null}break e}}Ce=0,Vn=null,Hr(t,n,f,5);break;case 6:Ce=0,Vn=null,Hr(t,n,f,6);break;case 8:Yu(),je=6;break t;default:throw Error(r(462))}}V0();break}catch(ht){hm(t,ht)}while(!0);return Ri=Va=null,B.H=s,B.A=c,we=a,pe!==null?0:(ze=null,Me=0,Ho(),je)}function V0(){for(;pe!==null&&!le();)mm(pe)}function mm(t){var n=Vp(t.alternate,t,Pi);t.memoizedProps=t.pendingProps,n===null?xl(t):pe=n}function gm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=zp(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=zp(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:fu(n);default:Wp(a,n),n=pe=_d(n,Pi),n=Vp(a,n,Pi)}t.memoizedProps=t.pendingProps,n===null?xl(t):pe=n}function Hr(t,n,a,s){Ri=Va=null,fu(n),Dr=null,Xs=0;var c=n.return;try{if(D0(t,c,n,a,Me)){je=1,ul(t,Kn(a,t.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;je=1,ul(t,Kn(a,t.current)),pe=null;return}n.flags&32768?(Re||s===1?t=!0:Pr||(Me&536870912)!==0?t=!1:(la=t=!0,(s===2||s===9||s===3||s===6)&&(s=ti.current,s!==null&&s.tag===13&&(s.flags|=16384))),_m(n,t)):xl(n)}function xl(t){var n=t;do{if((n.flags&32768)!==0){_m(n,la);return}t=n.return;var a=N0(n.alternate,n,Pi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=t}while(n!==null);je===0&&(je=5)}function _m(t,n){do{var a=O0(t.alternate,t);if(a!==null){a.flags&=32767,pe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){pe=t;return}pe=t=a}while(t!==null);je=6,pe=null}function vm(t,n,a,s,c,f,M,E,P){t.cancelPendingCommit=null;do Sl();while(_n!==0);if((we&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Hc,Tt(t,a,f,M,E,P),t===ze&&(pe=ze=null,Me=0),Br=n,fa=t,Ir=a,Xu=f,ju=c,lm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,j0(We,function(){return Em(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,c=W.p,W.p=2,M=we,we|=4;try{P0(t,n,a)}finally{we=M,W.p=c,B.T=s}}_n=1,xm(),Sm(),Mm()}}function xm(){if(_n===1){_n=0;var t=fa,n=Br,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var s=W.p;W.p=2;var c=we;we|=4;try{em(n,t);var f=cf,M=od(t.containerInfo),E=f.focusedElem,P=f.selectionRange;if(M!==E&&E&&E.ownerDocument&&sd(E.ownerDocument.documentElement,E)){if(P!==null&&Pc(E)){var Q=P.start,ht=P.end;if(ht===void 0&&(ht=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ht,E.value.length);else{var gt=E.ownerDocument||document,J=gt&&gt.defaultView||window;if(J.getSelection){var et=J.getSelection(),Yt=E.textContent.length,Wt=Math.min(P.start,Yt),Ue=P.end===void 0?Wt:Math.min(P.end,Yt);!et.extend&&Wt>Ue&&(M=Ue,Ue=Wt,Wt=M);var q=rd(E,Wt),H=rd(E,Ue);if(q&&H&&(et.rangeCount!==1||et.anchorNode!==q.node||et.anchorOffset!==q.offset||et.focusNode!==H.node||et.focusOffset!==H.offset)){var K=gt.createRange();K.setStart(q.node,q.offset),et.removeAllRanges(),Wt>Ue?(et.addRange(K),et.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),et.addRange(K))}}}}for(gt=[],et=E;et=et.parentNode;)et.nodeType===1&&gt.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var pt=gt[E];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Ul=!!lf,cf=lf=null}finally{we=c,W.p=s,B.T=a}}t.current=n,_n=2}}function Sm(){if(_n===2){_n=0;var t=fa,n=Br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var s=W.p;W.p=2;var c=we;we|=4;try{Qp(t,n.alternate,n)}finally{we=c,W.p=s,B.T=a}}_n=3}}function Mm(){if(_n===4||_n===3){_n=0,Zt();var t=fa,n=Br,a=Ir,s=lm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?_n=5:(_n=0,Br=fa=null,ym(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(ua=null),de(a),n=n.stateNode,_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(yt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=B.T,c=W.p,W.p=2,B.T=null;try{for(var f=t.onRecoverableError,M=0;M<s.length;M++){var E=s[M];f(E.value,{componentStack:E.stack})}}finally{B.T=n,W.p=c}}(Ir&3)!==0&&Sl(),Si(t),c=t.pendingLanes,(a&4194090)!==0&&(c&42)!==0?t===qu?to++:(to=0,qu=t):to=0,eo(0)}}function ym(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Os(n)))}function Sl(t){return xm(),Sm(),Mm(),Em()}function Em(){if(_n!==5)return!1;var t=fa,n=Xu;Xu=0;var a=de(Ir),s=B.T,c=W.p;try{W.p=32>a?32:a,B.T=null,a=ju,ju=null;var f=fa,M=Ir;if(_n=0,Br=fa=null,Ir=0,(we&6)!==0)throw Error(r(331));var E=we;if(we|=4,sm(f.current),im(f,f.current,M,a),we=E,eo(0,!1),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(yt,f)}catch{}return!0}finally{W.p=c,B.T=s,ym(t,n)}}function Tm(t,n,a){n=Kn(a,n),n=bu(t.stateNode,n,2),t=ea(t,n,2),t!==null&&(Ct(t,2),Si(t))}function Pe(t,n,a){if(t.tag===3)Tm(t,t,a);else for(;n!==null;){if(n.tag===3){Tm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ua===null||!ua.has(s))){t=Kn(a,t),a=wp(2),s=ea(n,a,2),s!==null&&(Cp(a,s,n,t),Ct(s,2),Si(s));break}}n=n.return}}function Qu(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new I0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Gu=!0,c.add(a),t=k0.bind(null,t,n,a),n.then(t,t))}function k0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ze===t&&(Me&a)===a&&(je===4||je===3&&(Me&62914560)===Me&&300>Se()-Wu?(we&2)===0&&Fr(t,0):Vu|=a,zr===Me&&(zr=0)),Si(t)}function bm(t,n){n===0&&(n=ce()),t=Mr(t,n),t!==null&&(Ct(t,n),Si(t))}function W0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),bm(t,a)}function X0(t,n){var a=0;switch(t.tag){case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),bm(t,a)}function j0(t,n){return nn(t,n)}var Ml=null,Gr=null,Ju=!1,yl=!1,$u=!1,Za=0;function Si(t){t!==Gr&&t.next===null&&(Gr===null?Ml=Gr=t:Gr=Gr.next=t),yl=!0,Ju||(Ju=!0,Y0())}function eo(t,n){if(!$u&&yl){$u=!0;do for(var a=!1,s=Ml;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var M=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Lt(42|t)+1)-1,f&=c&~(M&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Cm(s,f))}else f=Me,f=Qt(s,s===ze?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Gt(s,f)||(a=!0,Cm(s,f));s=s.next}while(a);$u=!1}}function q0(){Am()}function Am(){yl=Ju=!1;var t=0;Za!==0&&(nx()&&(t=Za),Za=0);for(var n=Se(),a=null,s=Ml;s!==null;){var c=s.next,f=Rm(s,n);f===0?(s.next=null,a===null?Ml=c:a.next=c,c===null&&(Gr=a)):(a=s,(t!==0||(f&3)!==0)&&(yl=!0)),s=c}eo(t)}function Rm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var M=31-Lt(f),E=1<<M,P=c[M];P===-1?((E&a)===0||(E&s)!==0)&&(c[M]=Ft(E,n)):P<=n&&(t.expiredLanes|=E),f&=~E}if(n=ze,a=Me,a=Qt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ce===2||Ce===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&It(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Gt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&It(s),de(a)){case 2:case 8:a=be;break;case 32:a=We;break;case 268435456:a=U;break;default:a=We}return s=wm.bind(null,t),a=nn(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&It(s),t.callbackPriority=2,t.callbackNode=null,2}function wm(t,n){if(_n!==0&&_n!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Sl()&&t.callbackNode!==a)return null;var s=Me;return s=Qt(t,t===ze?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(um(t,s,n),Rm(t,Se()),t.callbackNode!=null&&t.callbackNode===a?wm.bind(null,t):null)}function Cm(t,n){if(Sl())return null;um(t,n,!0)}function Y0(){ax(function(){(we&6)!==0?nn(ne,q0):Am()})}function tf(){return Za===0&&(Za=Nt()),Za}function Lm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:No(""+t)}function Dm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Z0(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Lm((c[Be]||null).action),M=s.submitter;M&&(n=(n=M[Be]||null)?Lm(n.formAction):M.getAttribute("formAction"),n!==null&&(f=n,M=null));var E=new Bo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Za!==0){var P=M?Dm(c,M):new FormData(c);Su(a,{pending:!0,data:P,method:c.method,action:f},null,P)}}else typeof f=="function"&&(E.preventDefault(),P=M?Dm(c,M):new FormData(c),Su(a,{pending:!0,data:P,method:c.method,action:f},f,P))},currentTarget:c}]})}}for(var ef=0;ef<Fc.length;ef++){var nf=Fc[ef],K0=nf.toLowerCase(),Q0=nf[0].toUpperCase()+nf.slice(1);oi(K0,"on"+Q0)}oi(ud,"onAnimationEnd"),oi(fd,"onAnimationIteration"),oi(hd,"onAnimationStart"),oi("dblclick","onDoubleClick"),oi("focusin","onFocus"),oi("focusout","onBlur"),oi(p0,"onTransitionRun"),oi(m0,"onTransitionStart"),oi(g0,"onTransitionCancel"),oi(dd,"onTransitionEnd"),wt("onMouseEnter",["mouseout","mouseover"]),wt("onMouseLeave",["mouseout","mouseover"]),wt("onPointerEnter",["pointerout","pointerover"]),wt("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(no));function Um(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var M=s.length-1;0<=M;M--){var E=s[M],P=E.instance,Q=E.currentTarget;if(E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ht){cl(ht)}c.currentTarget=null,f=P}else for(M=0;M<s.length;M++){if(E=s[M],P=E.instance,Q=E.currentTarget,E=E.listener,P!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ht){cl(ht)}c.currentTarget=null,f=P}}}}function me(t,n){var a=n[_s];a===void 0&&(a=n[_s]=new Set);var s=t+"__bubble";a.has(s)||(Nm(n,t,2,!1),a.add(s))}function af(t,n,a){var s=0;n&&(s|=4),Nm(a,t,s,n)}var El="_reactListening"+Math.random().toString(36).slice(2);function rf(t){if(!t[El]){t[El]=!0,rt.forEach(function(a){a!=="selectionchange"&&(J0.has(a)||af(a,!1,t),af(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[El]||(n[El]=!0,af("selectionchange",!1,n))}}function Nm(t,n,a,s){switch(ig(n)){case 2:var c=bx;break;case 8:c=Ax;break;default:c=xf}a=c.bind(null,n,a,t),c=void 0,!Ac||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function sf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var M=s.tag;if(M===3||M===4){var E=s.stateNode.containerInfo;if(E===c)break;if(M===4)for(M=s.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;E!==null;){if(M=Yi(E),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){s=f=M;continue t}E=E.parentNode}}s=s.return}Hh(function(){var Q=f,ht=Tc(a),gt=[];t:{var J=pd.get(t);if(J!==void 0){var et=Bo,Yt=t;switch(t){case"keypress":if(Po(a)===0)break t;case"keydown":case"keyup":et=jv;break;case"focusin":Yt="focus",et=Lc;break;case"focusout":Yt="blur",et=Lc;break;case"beforeblur":case"afterblur":et=Lc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=Zv;break;case ud:case fd:case hd:et=Bv;break;case dd:et=Qv;break;case"scroll":case"scrollend":et=Uv;break;case"wheel":et=$v;break;case"copy":case"cut":case"paste":et=Fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=Xh;break;case"toggle":case"beforetoggle":et=e0}var Wt=(n&4)!==0,Ue=!Wt&&(t==="scroll"||t==="scrollend"),q=Wt?J!==null?J+"Capture":null:J;Wt=[];for(var H=Q,K;H!==null;){var pt=H;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||q===null||(pt=Ms(H,q),pt!=null&&Wt.push(io(H,pt,K))),Ue)break;H=H.return}0<Wt.length&&(J=new et(J,Yt,null,a,ht),gt.push({event:J,listeners:Wt}))}}if((n&7)===0){t:{if(J=t==="mouseover"||t==="pointerover",et=t==="mouseout"||t==="pointerout",J&&a!==Ec&&(Yt=a.relatedTarget||a.fromElement)&&(Yi(Yt)||Yt[yi]))break t;if((et||J)&&(J=ht.window===ht?ht:(J=ht.ownerDocument)?J.defaultView||J.parentWindow:window,et?(Yt=a.relatedTarget||a.toElement,et=Q,Yt=Yt?Yi(Yt):null,Yt!==null&&(Ue=u(Yt),Wt=Yt.tag,Yt!==Ue||Wt!==5&&Wt!==27&&Wt!==6)&&(Yt=null)):(et=null,Yt=Q),et!==Yt)){if(Wt=kh,pt="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Wt=Xh,pt="onPointerLeave",q="onPointerEnter",H="pointer"),Ue=et==null?J:Da(et),K=Yt==null?J:Da(Yt),J=new Wt(pt,H+"leave",et,a,ht),J.target=Ue,J.relatedTarget=K,pt=null,Yi(ht)===Q&&(Wt=new Wt(q,H+"enter",Yt,a,ht),Wt.target=K,Wt.relatedTarget=Ue,pt=Wt),Ue=pt,et&&Yt)e:{for(Wt=et,q=Yt,H=0,K=Wt;K;K=Vr(K))H++;for(K=0,pt=q;pt;pt=Vr(pt))K++;for(;0<H-K;)Wt=Vr(Wt),H--;for(;0<K-H;)q=Vr(q),K--;for(;H--;){if(Wt===q||q!==null&&Wt===q.alternate)break e;Wt=Vr(Wt),q=Vr(q)}Wt=null}else Wt=null;et!==null&&Om(gt,J,et,Wt,!1),Yt!==null&&Ue!==null&&Om(gt,Ue,Yt,Wt,!0)}}t:{if(J=Q?Da(Q):window,et=J.nodeName&&J.nodeName.toLowerCase(),et==="select"||et==="input"&&J.type==="file")var Pt=$h;else if(Qh(J))if(td)Pt=f0;else{Pt=c0;var fe=l0}else et=J.nodeName,!et||et.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?Q&&yc(Q.elementType)&&(Pt=$h):Pt=u0;if(Pt&&(Pt=Pt(t,Q))){Jh(gt,Pt,a,ht);break t}fe&&fe(t,J,Q),t==="focusout"&&Q&&J.type==="number"&&Q.memoizedProps.value!=null&&hr(J,"number",J.value)}switch(fe=Q?Da(Q):window,t){case"focusin":(Qh(fe)||fe.contentEditable==="true")&&(vr=fe,zc=Q,Cs=null);break;case"focusout":Cs=zc=vr=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,ld(gt,a,ht);break;case"selectionchange":if(d0)break;case"keydown":case"keyup":ld(gt,a,ht)}var Bt;if(Uc)t:{switch(t){case"compositionstart":var Xt="onCompositionStart";break t;case"compositionend":Xt="onCompositionEnd";break t;case"compositionupdate":Xt="onCompositionUpdate";break t}Xt=void 0}else _r?Zh(t,a)&&(Xt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Xt="onCompositionStart");Xt&&(jh&&a.locale!=="ko"&&(_r||Xt!=="onCompositionStart"?Xt==="onCompositionEnd"&&_r&&(Bt=Gh()):(Qi=ht,Rc="value"in Qi?Qi.value:Qi.textContent,_r=!0)),fe=Tl(Q,Xt),0<fe.length&&(Xt=new Wh(Xt,t,null,a,ht),gt.push({event:Xt,listeners:fe}),Bt?Xt.data=Bt:(Bt=Kh(a),Bt!==null&&(Xt.data=Bt)))),(Bt=i0?a0(t,a):r0(t,a))&&(Xt=Tl(Q,"onBeforeInput"),0<Xt.length&&(fe=new Wh("onBeforeInput","beforeinput",null,a,ht),gt.push({event:fe,listeners:Xt}),fe.data=Bt)),Z0(gt,t,Q,a,ht)}Um(gt,n)})}function io(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Tl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ms(t,a),c!=null&&s.unshift(io(t,c,f)),c=Ms(t,n),c!=null&&s.push(io(t,c,f))),t.tag===3)return s;t=t.return}return[]}function Vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Om(t,n,a,s,c){for(var f=n._reactName,M=[];a!==null&&a!==s;){var E=a,P=E.alternate,Q=E.stateNode;if(E=E.tag,P!==null&&P===s)break;E!==5&&E!==26&&E!==27||Q===null||(P=Q,c?(Q=Ms(a,f),Q!=null&&M.unshift(io(a,Q,P))):c||(Q=Ms(a,f),Q!=null&&M.push(io(a,Q,P)))),a=a.return}M.length!==0&&t.push({event:n,listeners:M})}var $0=/\r\n?/g,tx=/\u0000|\uFFFD/g;function Pm(t){return(typeof t=="string"?t:""+t).replace($0,`
`).replace(tx,"")}function zm(t,n){return n=Pm(n),Pm(t)===n}function bl(){}function De(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||pr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&pr(t,""+s);break;case"className":te(t,"class",s);break;case"tabIndex":te(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":te(t,a,s);break;case"style":Ih(t,s,f);break;case"data":if(n!=="object"){te(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=No(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&De(t,n,"name",c.name,c,null),De(t,n,"formEncType",c.formEncType,c,null),De(t,n,"formMethod",c.formMethod,c,null),De(t,n,"formTarget",c.formTarget,c,null)):(De(t,n,"encType",c.encType,c,null),De(t,n,"method",c.method,c,null),De(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=No(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=bl);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=No(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":me("beforetoggle",t),me("toggle",t),Jt(t,"popover",s);break;case"xlinkActuate":Ae(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ae(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ae(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ae(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ae(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ae(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ae(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Jt(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Lv.get(a)||a,Jt(t,a,s))}}function of(t,n,a,s,c,f){switch(a){case"style":Ih(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?pr(t,s):(typeof s=="number"||typeof s=="bigint")&&pr(t,""+s);break;case"onScroll":s!=null&&me("scroll",t);break;case"onScrollEnd":s!=null&&me("scrollend",t);break;case"onClick":s!=null&&(t.onclick=bl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[Be]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Jt(t,a,s)}}}function vn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",t),me("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var M=a[f];if(M!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,f,M,a,null)}}c&&De(t,n,"srcSet",a.srcSet,a,null),s&&De(t,n,"src",a.src,a,null);return;case"input":me("invalid",t);var E=f=M=c=null,P=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ht=a[s];if(ht!=null)switch(s){case"name":c=ht;break;case"type":M=ht;break;case"checked":P=ht;break;case"defaultChecked":Q=ht;break;case"value":f=ht;break;case"defaultValue":E=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(r(137,n));break;default:De(t,n,s,ht,a,null)}}Uo(t,f,E,P,Q,M,c,!1),Ki(t);return;case"select":me("invalid",t),s=M=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":M=E;break;case"multiple":s=E;default:De(t,n,c,E,a,null)}n=f,a=M,t.multiple=!!s,n!=null?dr(t,!!s,n,!1):a!=null&&dr(t,!!s,a,!0);return;case"textarea":me("invalid",t),f=c=s=null;for(M in a)if(a.hasOwnProperty(M)&&(E=a[M],E!=null))switch(M){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:De(t,n,M,E,a,null)}zh(t,s,c,f),Ki(t);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:De(t,n,P,s,a,null)}return;case"dialog":me("beforetoggle",t),me("toggle",t),me("cancel",t),me("close",t);break;case"iframe":case"object":me("load",t);break;case"video":case"audio":for(s=0;s<no.length;s++)me(no[s],t);break;case"image":me("error",t),me("load",t);break;case"details":me("toggle",t);break;case"embed":case"source":case"link":me("error",t),me("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:De(t,n,Q,s,a,null)}return;default:if(yc(n)){for(ht in a)a.hasOwnProperty(ht)&&(s=a[ht],s!==void 0&&of(t,n,ht,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&De(t,n,E,s,a,null))}function ex(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,M=null,E=null,P=null,Q=null,ht=null;for(et in a){var gt=a[et];if(a.hasOwnProperty(et)&&gt!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":P=gt;default:s.hasOwnProperty(et)||De(t,n,et,null,s,gt)}}for(var J in s){var et=s[J];if(gt=a[J],s.hasOwnProperty(J)&&(et!=null||gt!=null))switch(J){case"type":f=et;break;case"name":c=et;break;case"checked":Q=et;break;case"defaultChecked":ht=et;break;case"value":M=et;break;case"defaultValue":E=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:et!==gt&&De(t,n,J,et,s,gt)}}Na(t,M,E,P,Q,ht,f,c);return;case"select":et=M=E=J=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":et=P;default:s.hasOwnProperty(f)||De(t,n,f,null,s,P)}for(c in s)if(f=s[c],P=a[c],s.hasOwnProperty(c)&&(f!=null||P!=null))switch(c){case"value":J=f;break;case"defaultValue":E=f;break;case"multiple":M=f;default:f!==P&&De(t,n,c,f,s,P)}n=E,a=M,s=et,J!=null?dr(t,!!a,J,!1):!!s!=!!a&&(n!=null?dr(t,!!a,n,!0):dr(t,!!a,a?[]:"",!1));return;case"textarea":et=J=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:De(t,n,E,null,s,c)}for(M in s)if(c=s[M],f=a[M],s.hasOwnProperty(M)&&(c!=null||f!=null))switch(M){case"value":J=c;break;case"defaultValue":et=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&De(t,n,M,c,s,f)}Ph(t,J,et);return;case"option":for(var Yt in a)if(J=a[Yt],a.hasOwnProperty(Yt)&&J!=null&&!s.hasOwnProperty(Yt))switch(Yt){case"selected":t.selected=!1;break;default:De(t,n,Yt,null,s,J)}for(P in s)if(J=s[P],et=a[P],s.hasOwnProperty(P)&&J!==et&&(J!=null||et!=null))switch(P){case"selected":t.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:De(t,n,P,J,s,et)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Wt in a)J=a[Wt],a.hasOwnProperty(Wt)&&J!=null&&!s.hasOwnProperty(Wt)&&De(t,n,Wt,null,s,J);for(Q in s)if(J=s[Q],et=a[Q],s.hasOwnProperty(Q)&&J!==et&&(J!=null||et!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(r(137,n));break;default:De(t,n,Q,J,s,et)}return;default:if(yc(n)){for(var Ue in a)J=a[Ue],a.hasOwnProperty(Ue)&&J!==void 0&&!s.hasOwnProperty(Ue)&&of(t,n,Ue,void 0,s,J);for(ht in s)J=s[ht],et=a[ht],!s.hasOwnProperty(ht)||J===et||J===void 0&&et===void 0||of(t,n,ht,J,s,et);return}}for(var q in a)J=a[q],a.hasOwnProperty(q)&&J!=null&&!s.hasOwnProperty(q)&&De(t,n,q,null,s,J);for(gt in s)J=s[gt],et=a[gt],!s.hasOwnProperty(gt)||J===et||J==null&&et==null||De(t,n,gt,J,s,et)}var lf=null,cf=null;function Al(t){return t.nodeType===9?t:t.ownerDocument}function Bm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Im(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function uf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ff=null;function nx(){var t=window.event;return t&&t.type==="popstate"?t===ff?!1:(ff=t,!0):(ff=null,!1)}var Fm=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,Hm=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Hm<"u"?function(t){return Hm.resolve(null).then(t).catch(rx)}:Fm;function rx(t){setTimeout(function(){throw t})}function da(t){return t==="head"}function Gm(t,n){var a=n,s=0,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<s&&8>s){a=s;var M=t.ownerDocument;if(a&1&&ao(M.documentElement),a&2&&ao(M.body),a&4)for(a=M.head,ao(a),M=a.firstChild;M;){var E=M.nextSibling,P=M.nodeName;M[qi]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=E}}if(c===0){t.removeChild(f),ho(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:s=a.charCodeAt(0)-48;else s=0;a=f}while(a);ho(n)}function hf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":hf(a),fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function sx(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[qi])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ci(t.nextSibling),t===null)break}return null}function ox(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ci(t.nextSibling),t===null))return null;return t}function df(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function lx(t,n){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ci(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}var pf=null;function Vm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}function km(t,n,a){switch(n=Al(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function ao(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);fr(t)}var ni=new Map,Wm=new Set;function Rl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var zi=W.d;W.d={f:cx,r:ux,D:fx,C:hx,L:dx,m:px,X:gx,S:mx,M:_x};function cx(){var t=zi.f(),n=vl();return t||n}function ux(t){var n=Zi(t);n!==null&&n.tag===5&&n.type==="form"?up(n):zi.r(t)}var kr=typeof document>"u"?null:document;function Xm(t,n,a){var s=kr;if(s&&typeof n=="string"&&n){var c=Fe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Wm.has(c)||(Wm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),vn(n,"link",t),j(n),s.head.appendChild(n)))}}function fx(t){zi.D(t),Xm("dns-prefetch",t,null)}function hx(t,n){zi.C(t,n),Xm("preconnect",t,n)}function dx(t,n,a){zi.L(t,n,a);var s=kr;if(s&&t&&n){var c='link[rel="preload"][as="'+Fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Fe(a.imageSizes)+'"]')):c+='[href="'+Fe(t)+'"]';var f=c;switch(n){case"style":f=Wr(t);break;case"script":f=Xr(t)}ni.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(ro(f))||n==="script"&&s.querySelector(so(f))||(n=s.createElement("link"),vn(n,"link",t),j(n),s.head.appendChild(n)))}}function px(t,n){zi.m(t,n);var a=kr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Fe(s)+'"][href="'+Fe(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Xr(t)}if(!ni.has(f)&&(t=g({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(so(f)))return}s=a.createElement("link"),vn(s,"link",t),j(s),a.head.appendChild(s)}}}function mx(t,n,a){zi.S(t,n,a);var s=kr;if(s&&t){var c=C(s).hoistableStyles,f=Wr(t);n=n||"default";var M=c.get(f);if(!M){var E={loading:0,preload:null};if(M=s.querySelector(ro(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&mf(t,a);var P=M=s.createElement("link");j(P),vn(P,"link",t),P._p=new Promise(function(Q,ht){P.onload=Q,P.onerror=ht}),P.addEventListener("load",function(){E.loading|=1}),P.addEventListener("error",function(){E.loading|=2}),E.loading|=4,wl(M,n,s)}M={type:"stylesheet",instance:M,count:1,state:E},c.set(f,M)}}}function gx(t,n){zi.X(t,n);var a=kr;if(a&&t){var s=C(a).hoistableScripts,c=Xr(t),f=s.get(c);f||(f=a.querySelector(so(c)),f||(t=g({src:t,async:!0},n),(n=ni.get(c))&&gf(t,n),f=a.createElement("script"),j(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function _x(t,n){zi.M(t,n);var a=kr;if(a&&t){var s=C(a).hoistableScripts,c=Xr(t),f=s.get(c);f||(f=a.querySelector(so(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ni.get(c))&&gf(t,n),f=a.createElement("script"),j(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function jm(t,n,a,s){var c=(c=xt.current)?Rl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Wr(a.href),a=C(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Wr(a.href);var f=C(c).hoistableStyles,M=f.get(t);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,M),(f=c.querySelector(ro(t)))&&!f._p&&(M.instance=f,M.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||vx(c,t,a,M.state))),n&&s===null)throw Error(r(528,""));return M}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Xr(a),a=C(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Wr(t){return'href="'+Fe(t)+'"'}function ro(t){return'link[rel="stylesheet"]['+t+"]"}function qm(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function vx(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),vn(n,"link",a),j(n),t.head.appendChild(n))}function Xr(t){return'[src="'+Fe(t)+'"]'}function so(t){return"script[async]"+t}function Ym(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+Fe(a.href)+'"]');if(s)return n.instance=s,j(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),j(s),vn(s,"style",c),wl(s,a.precedence,t),n.instance=s;case"stylesheet":c=Wr(a.href);var f=t.querySelector(ro(c));if(f)return n.state.loading|=4,n.instance=f,j(f),f;s=qm(a),(c=ni.get(c))&&mf(s,c),f=(t.ownerDocument||t).createElement("link"),j(f);var M=f;return M._p=new Promise(function(E,P){M.onload=E,M.onerror=P}),vn(f,"link",s),n.state.loading|=4,wl(f,a.precedence,t),n.instance=f;case"script":return f=Xr(a.src),(c=t.querySelector(so(f)))?(n.instance=c,j(c),c):(s=a,(c=ni.get(f))&&(s=g({},a),gf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),j(c),vn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,wl(s,a.precedence,t));return n.instance}function wl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,M=0;M<s.length;M++){var E=s[M];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function mf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function gf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Cl=null;function Zm(t,n,a){if(Cl===null){var s=new Map,c=Cl=new Map;c.set(a,s)}else c=Cl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[qi]||f[ye]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var M=f.getAttribute(n)||"";M=t+M;var E=s.get(M);E?E.push(f):s.set(M,[f])}}return s}function Km(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function xx(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Qm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var oo=null;function Sx(){}function Mx(t,n,a){if(oo===null)throw Error(r(475));var s=oo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=Wr(a.href),f=t.querySelector(ro(c));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(s.count++,s=Ll.bind(s),t.then(s,s)),n.state.loading|=4,n.instance=f,j(f);return}f=t.ownerDocument||t,a=qm(a),(c=ni.get(c))&&mf(a,c),f=f.createElement("link"),j(f);var M=f;M._p=new Promise(function(E,P){M.onload=E,M.onerror=P}),vn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(s.count++,n=Ll.bind(s),t.addEventListener("load",n),t.addEventListener("error",n))}}function yx(){if(oo===null)throw Error(r(475));var t=oo;return t.stylesheets&&t.count===0&&_f(t,t.stylesheets),0<t.count?function(n){var a=setTimeout(function(){if(t.stylesheets&&_f(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(a)}}:null}function Ll(){if(this.count--,this.count===0){if(this.stylesheets)_f(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Dl=null;function _f(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Dl=new Map,n.forEach(Ex,t),Dl=null,Ll.call(t))}function Ex(t,n){if(!(n.state.loading&4)){var a=Dl.get(t);if(a)var s=a.get(null);else{a=new Map,Dl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var M=c[f];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),s=M)}s&&a.set(null,s)}c=n.instance,M=c.getAttribute("data-precedence"),f=a.get(M)||s,f===s&&a.set(null,c),a.set(M,c),this.count++,s=Ll.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var lo={$$typeof:L,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function Tx(t,n,a,s,c,f,M,E){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=k(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=k(0),this.hiddenUpdates=k(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Jm(t,n,a,s,c,f,M,E,P,Q,ht,gt){return t=new Tx(t,n,a,M,E,P,Q,gt),n=1,f===!0&&(n|=24),f=Fn(3,null,null,n),t.current=f,f.stateNode=t,n=Qc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},eu(f),t}function $m(t){return t?(t=yr,t):yr}function tg(t,n,a,s,c,f){c=$m(c),s.context===null?s.context=c:s.pendingContext=c,s=ta(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ea(t,s,n),a!==null&&(Wn(a,t,n),Is(a,t,n))}function eg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function vf(t,n){eg(t,n),(t=t.alternate)&&eg(t,n)}function ng(t){if(t.tag===13){var n=Mr(t,67108864);n!==null&&Wn(n,t,67108864),vf(t,67108864)}}var Ul=!0;function bx(t,n,a,s){var c=B.T;B.T=null;var f=W.p;try{W.p=2,xf(t,n,a,s)}finally{W.p=f,B.T=c}}function Ax(t,n,a,s){var c=B.T;B.T=null;var f=W.p;try{W.p=8,xf(t,n,a,s)}finally{W.p=f,B.T=c}}function xf(t,n,a,s){if(Ul){var c=Sf(s);if(c===null)sf(t,n,s,Nl,a),ag(t,s);else if(wx(c,t,n,a,s))s.stopPropagation();else if(ag(t,s),n&4&&-1<Rx.indexOf(t)){for(;c!==null;){var f=Zi(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var M=_e(f.pendingLanes);if(M!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;M;){var P=1<<31-Lt(M);E.entanglements[1]|=P,M&=~P}Si(f),(we&6)===0&&(gl=Se()+500,eo(0))}}break;case 13:E=Mr(f,2),E!==null&&Wn(E,f,2),vl(),vf(f,2)}if(f=Sf(s),f===null&&sf(t,n,s,Nl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else sf(t,n,s,null,a)}}function Sf(t){return t=Tc(t),Mf(t)}var Nl=null;function Mf(t){if(Nl=null,t=Yi(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Nl=t,null}function ig(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(se()){case ne:return 2;case be:return 8;case We:case an:return 32;case U:return 268435456;default:return 32}default:return 32}}var yf=!1,pa=null,ma=null,ga=null,co=new Map,uo=new Map,_a=[],Rx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ag(t,n){switch(t){case"focusin":case"focusout":pa=null;break;case"dragenter":case"dragleave":ma=null;break;case"mouseover":case"mouseout":ga=null;break;case"pointerover":case"pointerout":co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":uo.delete(n.pointerId)}}function fo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Zi(n),n!==null&&ng(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function wx(t,n,a,s,c){switch(n){case"focusin":return pa=fo(pa,t,n,a,s,c),!0;case"dragenter":return ma=fo(ma,t,n,a,s,c),!0;case"mouseover":return ga=fo(ga,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return co.set(f,fo(co.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,uo.set(f,fo(uo.get(f)||null,t,n,a,s,c)),!0}return!1}function rg(t){var n=Yi(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,pn(t.priority,function(){if(a.tag===13){var s=kn();s=Vt(s);var c=Mr(a,s);c!==null&&Wn(c,a,s),vf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ol(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Sf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Ec=s,a.target.dispatchEvent(s),Ec=null}else return n=Zi(a),n!==null&&ng(n),t.blockedOn=a,!1;n.shift()}return!0}function sg(t,n,a){Ol(t)&&a.delete(n)}function Cx(){yf=!1,pa!==null&&Ol(pa)&&(pa=null),ma!==null&&Ol(ma)&&(ma=null),ga!==null&&Ol(ga)&&(ga=null),co.forEach(sg),uo.forEach(sg)}function Pl(t,n){t.blockedOn===n&&(t.blockedOn=null,yf||(yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Cx)))}var zl=null;function og(t){zl!==t&&(zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){zl===t&&(zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Mf(s||a)===null)continue;break}var f=Zi(a);f!==null&&(t.splice(n,3),n-=3,Su(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function ho(t){function n(P){return Pl(P,t)}pa!==null&&Pl(pa,t),ma!==null&&Pl(ma,t),ga!==null&&Pl(ga,t),co.forEach(n),uo.forEach(n);for(var a=0;a<_a.length;a++){var s=_a[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<_a.length&&(a=_a[0],a.blockedOn===null);)rg(a),a.blockedOn===null&&_a.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],M=c[Be]||null;if(typeof f=="function")M||og(a);else if(M){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,M=f[Be]||null)E=M.formAction;else if(Mf(c)!==null)continue}else E=M.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),og(a)}}}function Ef(t){this._internalRoot=t}Bl.prototype.render=Ef.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=kn();tg(a,s,t,n,null,null)},Bl.prototype.unmount=Ef.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;tg(t.current,2,null,t,null,null),vl(),n[yi]=null}};function Bl(t){this._internalRoot=t}Bl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ye();t={blockedOn:null,target:t,priority:n};for(var a=0;a<_a.length&&n!==0&&n<_a[a].priority;a++);_a.splice(a,0,t),a===0&&rg(t)}};var lg=e.version;if(lg!=="19.1.0")throw Error(r(527,lg,"19.1.0"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var Lx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{yt=Il.inject(Lx),_t=Il}catch{}}return mo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=Tp,f=bp,M=Ap,E=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(E=n.unstable_transitionCallbacks)),n=Jm(t,1,!1,null,null,a,s,c,f,M,E,null),t[yi]=n.current,rf(t),new Ef(n)},mo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=Tp,M=bp,E=Ap,P=null,Q=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(Q=a.formState)),n=Jm(t,1,!0,n,a??null,s,c,f,M,E,P,Q),n.context=$m(null),a=n.current,s=kn(),s=Vt(s),c=ta(s),c.callback=null,ea(a,c,s),a=s,n.current.lanes=a,Ct(n,a),Si(n),t[yi]=n.current,rf(t),new Bl(n)},mo.version="19.1.0",mo}var vg;function Gx(){if(vg)return Af.exports;vg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Af.exports=Hx(),Af.exports}var Vx=Gx();const kx=Ux(Vx),Wx=({scrollPosition:o})=>{const[e,i]=$t.useState(!1),[r,l]=$t.useState("home"),u=()=>{i(!e)},d=()=>{i(!1)};$t.useEffect(()=>{const p=()=>{window.innerWidth>768&&e&&i(!1)};return window.addEventListener("resize",p),()=>{window.removeEventListener("resize",p)}},[e]),$t.useEffect(()=>{const p=document.querySelectorAll("section[id]"),g=()=>{let x="";p.forEach(v=>{const y=v.offsetTop-100,T=v.offsetHeight;window.scrollY>=y&&window.scrollY<y+T&&(x=v.getAttribute("id"))}),l(x)};return window.addEventListener("scroll",g),()=>{window.removeEventListener("scroll",g)}},[]);const h=p=>{const g=document.getElementById(p);if(g){const x=g.offsetTop;window.scrollTo({top:x-80,behavior:"smooth"}),d()}},m=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"projects",label:"Projects"},{id:"skills",label:"Skills"},{id:"education",label:"Education"},{id:"contact",label:"Contact"}];return I.jsx("header",{className:`header ${o>50?"scrolled":""}`,children:I.jsxs("div",{className:"container header-container",children:[I.jsx("div",{className:"logo",children:I.jsx("a",{href:"#home",onClick:p=>{p.preventDefault(),h("home")},children:"DG"})}),I.jsx("nav",{className:`nav ${e?"open":""}`,children:I.jsx("ul",{className:"nav-list",children:m.map(p=>I.jsx("li",{children:I.jsx("a",{href:`#${p.id}`,className:r===p.id?"active":"",onClick:g=>{g.preventDefault(),h(p.id)},children:p.label})},p.id))})}),I.jsx("div",{className:"header-actions",children:I.jsxs("button",{className:`menu-toggle ${e?"open":""}`,onClick:u,"aria-label":"Toggle menu",children:[I.jsx("span",{}),I.jsx("span",{}),I.jsx("span",{})]})})]})})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="159",Xx=0,xg=1,jx=2,Y_=1,qx=2,Vi=3,Ca=0,zn=1,ki=2,Aa=0,cs=1,uh=2,Sg=3,Mg=4,Yx=5,nr=100,Zx=101,Kx=102,yg=103,Eg=104,Qx=200,Jx=201,$x=202,tS=203,fh=204,hh=205,eS=206,nS=207,iS=208,aS=209,rS=210,sS=211,oS=212,lS=213,cS=214,uS=0,fS=1,hS=2,hc=3,dS=4,pS=5,mS=6,gS=7,Th=0,_S=1,vS=2,Ra=0,xS=1,SS=2,MS=3,yS=4,ES=5,Z_=300,fs=301,hs=302,dh=303,ph=304,vc=306,mh=1e3,pi=1001,gh=1002,wn=1003,Tg=1004,Lf=1005,ai=1006,TS=1007,To=1008,wa=1009,bS=1010,AS=1011,bh=1012,K_=1013,Ta=1014,ba=1015,bo=1016,Q_=1017,J_=1018,ar=1020,RS=1021,mi=1023,wS=1024,CS=1025,rr=1026,ds=1027,LS=1028,$_=1029,DS=1030,tv=1031,ev=1033,Df=33776,Uf=33777,Nf=33778,Of=33779,bg=35840,Ag=35841,Rg=35842,wg=35843,nv=36196,Cg=37492,Lg=37496,Dg=37808,Ug=37809,Ng=37810,Og=37811,Pg=37812,zg=37813,Bg=37814,Ig=37815,Fg=37816,Hg=37817,Gg=37818,Vg=37819,kg=37820,Wg=37821,Pf=36492,Xg=36494,jg=36495,US=36283,qg=36284,Yg=36285,Zg=36286,iv=3e3,sr=3001,NS=3200,OS=3201,av=0,PS=1,ri="",xn="srgb",ji="srgb-linear",Ah="display-p3",xc="display-p3-linear",dc="linear",He="srgb",pc="rec709",mc="p3",jr=7680,Kg=519,zS=512,BS=513,IS=514,rv=515,FS=516,HS=517,GS=518,VS=519,Qg=35044,Jg="300 es",_h=1035,Wi=2e3,gc=2001;class ms{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zf=Math.PI/180,vh=180/Math.PI;function Ao(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function On(o,e,i){return Math.max(e,Math.min(i,o))}function kS(o,e){return(o%e+e)%e}function Bf(o,e,i){return(1-i)*o+i*e}function $g(o){return(o&o-1)===0&&o!==0}function xh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function go(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Te{constructor(e=0,i=0){Te.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class he{constructor(e,i,r,l,u,d,h,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=u,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],x=r[7],v=r[2],y=r[5],T=r[8],b=l[0],S=l[3],_=l[6],O=l[1],L=l[4],N=l[7],D=l[2],z=l[5],G=l[8];return u[0]=d*b+h*O+m*D,u[3]=d*S+h*L+m*z,u[6]=d*_+h*N+m*G,u[1]=p*b+g*O+x*D,u[4]=p*S+g*L+x*z,u[7]=p*_+g*N+x*G,u[2]=v*b+y*O+T*D,u[5]=v*S+y*L+T*z,u[8]=v*_+y*N+T*G,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-r*u*g+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=g*d-h*p,v=h*m-g*u,y=p*u-d*m,T=i*x+r*v+l*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=x*b,e[1]=(l*p-g*r)*b,e[2]=(h*r-l*d)*b,e[3]=v*b,e[4]=(g*i-l*m)*b,e[5]=(l*u-h*i)*b,e[6]=y*b,e[7]=(r*m-p*i)*b,e[8]=(d*i-r*u)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(If.makeScale(e,i)),this}rotate(e){return this.premultiply(If.makeRotation(-e)),this}translate(e,i){return this.premultiply(If.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const If=new he;function sv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function _c(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function WS(){const o=_c("canvas");return o.style.display="block",o}const t_={};function Eo(o){o in t_||(t_[o]=!0,console.warn(o))}const e_=new he().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),n_=new he().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fl={[ji]:{transfer:dc,primaries:pc,toReference:o=>o,fromReference:o=>o},[xn]:{transfer:He,primaries:pc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[xc]:{transfer:dc,primaries:mc,toReference:o=>o.applyMatrix3(n_),fromReference:o=>o.applyMatrix3(e_)},[Ah]:{transfer:He,primaries:mc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(n_),fromReference:o=>o.applyMatrix3(e_).convertLinearToSRGB()}},XS=new Set([ji,xc]),Ne={enabled:!0,_workingColorSpace:ji,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!XS.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Fl[e].toReference,l=Fl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Fl[o].primaries},getTransfer:function(o){return o===ri?dc:Fl[o].transfer}};function us(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ff(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let qr;class ov{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qr===void 0&&(qr=_c("canvas")),qr.width=e.width,qr.height=e.height;const r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=_c("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=us(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(us(i[r]/255)*255):i[r]=us(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class lv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=Ao(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Hf(l[d].image)):u.push(Hf(l[d]))}else u=Hf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Hf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ov.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qS=0;class qn extends ms{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=pi,l=pi,u=ai,d=To,h=mi,m=wa,p=qn.DEFAULT_ANISOTROPY,g=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=Ao(),this.name="",this.source=new lv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===sr?xn:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mh:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mh:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xn?sr:iv}set encoding(e){Eo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===sr?xn:ri}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Z_;qn.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,i=0,r=0,l=1){Ve.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],g=m[4],x=m[8],v=m[1],y=m[5],T=m[9],b=m[2],S=m[6],_=m[10];if(Math.abs(g-v)<.01&&Math.abs(x-b)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+b)<.1&&Math.abs(T+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(y+1)/2,D=(_+1)/2,z=(g+v)/4,G=(x+b)/4,ct=(T+S)/4;return L>N&&L>D?L<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(L),l=z/r,u=G/r):N>D?N<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(N),r=z/l,u=ct/l):D<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(D),r=G/u,l=ct/u),this.set(r,l,u,i),this}let O=Math.sqrt((S-T)*(S-T)+(x-b)*(x-b)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(S-T)/O,this.y=(x-b)/O,this.z=(v-g)/O,this.w=Math.acos((p+y+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YS extends ms{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Ve(0,0,e,i),this.scissorTest=!1,this.viewport=new Ve(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(Eo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===sr?xn:ri),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ai,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new qn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new lv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends YS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class cv extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZS extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],x=r[l+3];const v=u[d+0],y=u[d+1],T=u[d+2],b=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x;return}if(h===1){e[i+0]=v,e[i+1]=y,e[i+2]=T,e[i+3]=b;return}if(x!==b||m!==v||p!==y||g!==T){let S=1-h;const _=m*v+p*y+g*T+x*b,O=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const D=Math.sqrt(L),z=Math.atan2(D,_*O);S=Math.sin(S*z)/D,h=Math.sin(h*z)/D}const N=h*O;if(m=m*S+v*N,p=p*S+y*N,g=g*S+T*N,x=x*S+b*N,S===1-h){const D=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=D,p*=D,g*=D,x*=D}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=x}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],x=u[d],v=u[d+1],y=u[d+2],T=u[d+3];return e[i]=h*T+g*x+m*y-p*v,e[i+1]=m*T+g*v+p*x-h*y,e[i+2]=p*T+g*y+h*v-m*x,e[i+3]=g*T-h*x-m*v-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),x=h(u/2),v=m(r/2),y=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=v*g*x+p*y*T,this._y=p*y*x-v*g*T,this._z=p*g*T+v*y*x,this._w=p*g*x-v*y*T;break;case"YXZ":this._x=v*g*x+p*y*T,this._y=p*y*x-v*g*T,this._z=p*g*T-v*y*x,this._w=p*g*x+v*y*T;break;case"ZXY":this._x=v*g*x-p*y*T,this._y=p*y*x+v*g*T,this._z=p*g*T+v*y*x,this._w=p*g*x-v*y*T;break;case"ZYX":this._x=v*g*x-p*y*T,this._y=p*y*x+v*g*T,this._z=p*g*T-v*y*x,this._w=p*g*x+v*y*T;break;case"YZX":this._x=v*g*x+p*y*T,this._y=p*y*x+v*g*T,this._z=p*g*T-v*y*x,this._w=p*g*x-v*y*T;break;case"XZY":this._x=v*g*x-p*y*T,this._y=p*y*x-v*g*T,this._z=p*g*T+v*y*x,this._w=p*g*x+v*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],v=r+h+x;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(g-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(r>h&&r>x){const y=2*Math.sqrt(1+r-h-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>x){const y=2*Math.sqrt(1+h-r-x);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-r-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(On(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-u*m,this._y=l*g+d*m+u*h-r*p,this._z=u*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const y=1-i;return this._w=y*d+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),x=Math.sin((1-i)*g)/p,v=Math.sin(i*g)/p;return this._w=d*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=u*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(u),r*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,i=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(i_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(i_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),g=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+m*p+d*x-h*g,this.y=r+m*g+h*p-u*x,this.z=l+m*x+u*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gf.copy(this).projectOnVector(e),this.sub(Gf)}reflect(e){return this.sub(Gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(On(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gf=new Z,i_=new Ro;class wo{constructor(e=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,ui):ui.fromBufferAttribute(u,d),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Hl.copy(r.boundingBox)),Hl.applyMatrix4(e.matrixWorld),this.union(Hl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),Gl.subVectors(this.max,_o),Yr.subVectors(e.a,_o),Zr.subVectors(e.b,_o),Kr.subVectors(e.c,_o),xa.subVectors(Zr,Yr),Sa.subVectors(Kr,Zr),Ka.subVectors(Yr,Kr);let i=[0,-xa.z,xa.y,0,-Sa.z,Sa.y,0,-Ka.z,Ka.y,xa.z,0,-xa.x,Sa.z,0,-Sa.x,Ka.z,0,-Ka.x,-xa.y,xa.x,0,-Sa.y,Sa.x,0,-Ka.y,Ka.x,0];return!Vf(i,Yr,Zr,Kr,Gl)||(i=[1,0,0,0,1,0,0,0,1],!Vf(i,Yr,Zr,Kr,Gl))?!1:(Vl.crossVectors(xa,Sa),i=[Vl.x,Vl.y,Vl.z],Vf(i,Yr,Zr,Kr,Gl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ui=new Z,Hl=new wo,Yr=new Z,Zr=new Z,Kr=new Z,xa=new Z,Sa=new Z,Ka=new Z,_o=new Z,Gl=new Z,Vl=new Z,Qa=new Z;function Vf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){Qa.fromArray(o,u);const h=l.x*Math.abs(Qa.x)+l.y*Math.abs(Qa.y)+l.z*Math.abs(Qa.z),m=e.dot(Qa),p=i.dot(Qa),g=r.dot(Qa);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const KS=new wo,vo=new Z,kf=new Z;class Co{constructor(e=new Z,i=-1){this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):KS.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const i=vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(vo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(kf)),this.expandByPoint(vo.copy(e.center).sub(kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new Z,Wf=new Z,kl=new Z,Ma=new Z,Xf=new Z,Wl=new Z,jf=new Z;class Rh{constructor(e=new Z,i=new Z(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ii.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,i),Ii.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Wf.copy(e).add(i).multiplyScalar(.5),kl.copy(i).sub(e).normalize(),Ma.copy(this.origin).sub(Wf);const u=e.distanceTo(i)*.5,d=-this.direction.dot(kl),h=Ma.dot(this.direction),m=-Ma.dot(kl),p=Ma.lengthSq(),g=Math.abs(1-d*d);let x,v,y,T;if(g>0)if(x=d*m-h,v=d*h-m,T=u*g,x>=0)if(v>=-T)if(v<=T){const b=1/g;x*=b,v*=b,y=x*(x+d*v+2*h)+v*(d*x+v+2*m)+p}else v=u,x=Math.max(0,-(d*v+h)),y=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(d*v+h)),y=-x*x+v*(v+2*m)+p;else v<=-T?(x=Math.max(0,-(-d*u+h)),v=x>0?-u:Math.min(Math.max(-u,-m),u),y=-x*x+v*(v+2*m)+p):v<=T?(x=0,v=Math.min(Math.max(-u,-m),u),y=v*(v+2*m)+p):(x=Math.max(0,-(d*u+h)),v=x>0?u:Math.min(Math.max(-u,-m),u),y=-x*x+v*(v+2*m)+p);else v=d>0?-u:u,x=Math.max(0,-(d*v+h)),y=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Wf).addScaledVector(kl,v),y}intersectSphere(e,i){Ii.subVectors(e.center,this.origin);const r=Ii.dot(this.direction),l=Ii.dot(Ii)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(r=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),g>=0?(u=(e.min.y-v.y)*g,d=(e.max.y-v.y)*g):(u=(e.max.y-v.y)*g,d=(e.min.y-v.y)*g),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(e.min.z-v.z)*x,m=(e.max.z-v.z)*x):(h=(e.max.z-v.z)*x,m=(e.min.z-v.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,i,r,l,u){Xf.subVectors(i,e),Wl.subVectors(r,e),jf.crossVectors(Xf,Wl);let d=this.direction.dot(jf),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ma.subVectors(this.origin,e);const m=h*this.direction.dot(Wl.crossVectors(Ma,Wl));if(m<0)return null;const p=h*this.direction.dot(Xf.cross(Ma));if(p<0||m+p>d)return null;const g=-h*Ma.dot(jf);return g<0?null:this.at(g/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,i,r,l,u,d,h,m,p,g,x,v,y,T,b,S){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,g,x,v,y,T,b,S)}set(e,i,r,l,u,d,h,m,p,g,x,v,y,T,b,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=v,_[3]=y,_[7]=T,_[11]=b,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Qr.setFromMatrixColumn(e,0).length(),u=1/Qr.setFromMatrixColumn(e,1).length(),d=1/Qr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(u),x=Math.sin(u);if(e.order==="XYZ"){const v=d*g,y=d*x,T=h*g,b=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=y+T*p,i[5]=v-b*p,i[9]=-h*m,i[2]=b-v*p,i[6]=T+y*p,i[10]=d*m}else if(e.order==="YXZ"){const v=m*g,y=m*x,T=p*g,b=p*x;i[0]=v+b*h,i[4]=T*h-y,i[8]=d*p,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=y*h-T,i[6]=b+v*h,i[10]=d*m}else if(e.order==="ZXY"){const v=m*g,y=m*x,T=p*g,b=p*x;i[0]=v-b*h,i[4]=-d*x,i[8]=T+y*h,i[1]=y+T*h,i[5]=d*g,i[9]=b-v*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const v=d*g,y=d*x,T=h*g,b=h*x;i[0]=m*g,i[4]=T*p-y,i[8]=v*p+b,i[1]=m*x,i[5]=b*p+v,i[9]=y*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const v=d*m,y=d*p,T=h*m,b=h*p;i[0]=m*g,i[4]=b-v*x,i[8]=T*x+y,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*x+T,i[10]=v-b*x}else if(e.order==="XZY"){const v=d*m,y=d*p,T=h*m,b=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=v*x+b,i[5]=d*g,i[9]=y*x-T,i[2]=T*x-y,i[6]=h*g,i[10]=b*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QS,e,JS)}lookAt(e,i,r){const l=this.elements;return Xn.subVectors(e,i),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),ya.crossVectors(r,Xn),ya.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),ya.crossVectors(r,Xn)),ya.normalize(),Xl.crossVectors(Xn,ya),l[0]=ya.x,l[4]=Xl.x,l[8]=Xn.x,l[1]=ya.y,l[5]=Xl.y,l[9]=Xn.y,l[2]=ya.z,l[6]=Xl.z,l[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],x=r[5],v=r[9],y=r[13],T=r[2],b=r[6],S=r[10],_=r[14],O=r[3],L=r[7],N=r[11],D=r[15],z=l[0],G=l[4],ct=l[8],R=l[12],F=l[1],mt=l[5],ut=l[9],St=l[13],Y=l[2],st=l[6],B=l[10],W=l[14],lt=l[3],ft=l[7],w=l[11],X=l[15];return u[0]=d*z+h*F+m*Y+p*lt,u[4]=d*G+h*mt+m*st+p*ft,u[8]=d*ct+h*ut+m*B+p*w,u[12]=d*R+h*St+m*W+p*X,u[1]=g*z+x*F+v*Y+y*lt,u[5]=g*G+x*mt+v*st+y*ft,u[9]=g*ct+x*ut+v*B+y*w,u[13]=g*R+x*St+v*W+y*X,u[2]=T*z+b*F+S*Y+_*lt,u[6]=T*G+b*mt+S*st+_*ft,u[10]=T*ct+b*ut+S*B+_*w,u[14]=T*R+b*St+S*W+_*X,u[3]=O*z+L*F+N*Y+D*lt,u[7]=O*G+L*mt+N*st+D*ft,u[11]=O*ct+L*ut+N*B+D*w,u[15]=O*R+L*St+N*W+D*X,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],x=e[6],v=e[10],y=e[14],T=e[3],b=e[7],S=e[11],_=e[15];return T*(+u*m*x-l*p*x-u*h*v+r*p*v+l*h*y-r*m*y)+b*(+i*m*y-i*p*v+u*d*v-l*d*y+l*p*g-u*m*g)+S*(+i*p*x-i*h*y-u*d*x+r*d*y+u*h*g-r*p*g)+_*(-l*h*g-i*m*x+i*h*v+l*d*x-r*d*v+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],x=e[9],v=e[10],y=e[11],T=e[12],b=e[13],S=e[14],_=e[15],O=x*S*p-b*v*p+b*m*y-h*S*y-x*m*_+h*v*_,L=T*v*p-g*S*p-T*m*y+d*S*y+g*m*_-d*v*_,N=g*b*p-T*x*p+T*h*y-d*b*y-g*h*_+d*x*_,D=T*x*m-g*b*m-T*h*v+d*b*v+g*h*S-d*x*S,z=i*O+r*L+l*N+u*D;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/z;return e[0]=O*G,e[1]=(b*v*u-x*S*u-b*l*y+r*S*y+x*l*_-r*v*_)*G,e[2]=(h*S*u-b*m*u+b*l*p-r*S*p-h*l*_+r*m*_)*G,e[3]=(x*m*u-h*v*u-x*l*p+r*v*p+h*l*y-r*m*y)*G,e[4]=L*G,e[5]=(g*S*u-T*v*u+T*l*y-i*S*y-g*l*_+i*v*_)*G,e[6]=(T*m*u-d*S*u-T*l*p+i*S*p+d*l*_-i*m*_)*G,e[7]=(d*v*u-g*m*u+g*l*p-i*v*p-d*l*y+i*m*y)*G,e[8]=N*G,e[9]=(T*x*u-g*b*u-T*r*y+i*b*y+g*r*_-i*x*_)*G,e[10]=(d*b*u-T*h*u+T*r*p-i*b*p-d*r*_+i*h*_)*G,e[11]=(g*h*u-d*x*u-g*r*p+i*x*p+d*r*y-i*h*y)*G,e[12]=D*G,e[13]=(g*b*l-T*x*l+T*r*v-i*b*v-g*r*S+i*x*S)*G,e[14]=(T*h*l-d*b*l-T*r*m+i*b*m+d*r*S-i*h*S)*G,e[15]=(d*x*l-g*h*l+g*r*m-i*x*m-d*r*v+i*h*v)*G,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,g=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,g=d+d,x=h+h,v=u*p,y=u*g,T=u*x,b=d*g,S=d*x,_=h*x,O=m*p,L=m*g,N=m*x,D=r.x,z=r.y,G=r.z;return l[0]=(1-(b+_))*D,l[1]=(y+N)*D,l[2]=(T-L)*D,l[3]=0,l[4]=(y-N)*z,l[5]=(1-(v+_))*z,l[6]=(S+O)*z,l[7]=0,l[8]=(T+L)*G,l[9]=(S-O)*G,l[10]=(1-(v+b))*G,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=Qr.set(l[0],l[1],l[2]).length();const d=Qr.set(l[4],l[5],l[6]).length(),h=Qr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],fi.copy(this);const p=1/u,g=1/d,x=1/h;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=x,fi.elements[9]*=x,fi.elements[10]*=x,i.setFromRotationMatrix(fi),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Wi){const m=this.elements,p=2*u/(i-e),g=2*u/(r-l),x=(i+e)/(i-e),v=(r+l)/(r-l);let y,T;if(h===Wi)y=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(h===gc)y=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=v,m[13]=0,m[2]=0,m[6]=0,m[10]=y,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Wi){const m=this.elements,p=1/(i-e),g=1/(r-l),x=1/(d-u),v=(i+e)*p,y=(r+l)*g;let T,b;if(h===Wi)T=(d+u)*x,b=-2*x;else if(h===gc)T=u*x,b=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-v,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-y,m[2]=0,m[6]=0,m[10]=b,m[14]=-T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Qr=new Z,fi=new qe,QS=new Z(0,0,0),JS=new Z(1,1,1),ya=new Z,Xl=new Z,Xn=new Z,a_=new qe,r_=new Ro;class Sc{constructor(e=0,i=0,r=0,l=Sc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],v=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(On(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-On(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(On(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-On(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(On(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-On(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return a_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(a_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return r_.setFromEuler(this),this.setFromQuaternion(r_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sc.DEFAULT_ORDER="XYZ";class uv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $S=0;const s_=new Z,Jr=new Ro,Fi=new qe,jl=new Z,xo=new Z,tM=new Z,eM=new Ro,o_=new Z(1,0,0),l_=new Z(0,1,0),c_=new Z(0,0,1),nM={type:"added"},iM={type:"removed"};class bn extends ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new Z,i=new Sc,r=new Ro,l=new Z(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new he}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Jr.setFromAxisAngle(e,i),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,i){return Jr.setFromAxisAngle(e,i),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(o_,e)}rotateY(e){return this.rotateOnAxis(l_,e)}rotateZ(e){return this.rotateOnAxis(c_,e)}translateOnAxis(e,i){return s_.copy(e).applyQuaternion(this.quaternion),this.position.add(s_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(o_,e)}translateY(e){return this.translateOnAxis(l_,e)}translateZ(e){return this.translateOnAxis(c_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?jl.copy(e):jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(xo,jl,this.up):Fi.lookAt(jl,xo,this.up),this.quaternion.setFromRotationMatrix(Fi),l&&(Fi.extractRotation(l.matrixWorld),Jr.setFromRotationMatrix(Fi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(nM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(iM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,eM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const u=i[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];u(e.shapes,x)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),x=d(e.shapes),v=d(e.skeletons),y=d(e.animations),T=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}bn.DEFAULT_UP=new Z(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new Z,Hi=new Z,qf=new Z,Gi=new Z,$r=new Z,ts=new Z,u_=new Z,Yf=new Z,Zf=new Z,Kf=new Z;let ql=!1;class di{constructor(e=new Z,i=new Z,r=new Z){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),hi.subVectors(e,i),l.cross(hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){hi.subVectors(l,i),Hi.subVectors(r,i),qf.subVectors(e,i);const d=hi.dot(hi),h=hi.dot(Hi),m=hi.dot(qf),p=Hi.dot(Hi),g=Hi.dot(qf),x=d*p-h*h;if(x===0)return u.set(-2,-1,-1);const v=1/x,y=(p*m-h*g)*v,T=(d*g-h*m)*v;return u.set(1-y-T,T,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Gi),Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getUV(e,i,r,l,u,d,h,m){return ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ql=!0),this.getInterpolation(e,i,r,l,u,d,h,m)}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,Gi),m.setScalar(0),m.addScaledVector(u,Gi.x),m.addScaledVector(d,Gi.y),m.addScaledVector(h,Gi.z),m}static isFrontFacing(e,i,r,l){return hi.subVectors(r,i),Hi.subVectors(e,i),hi.cross(Hi).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),hi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return di.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,r,l,u){return ql===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ql=!0),di.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}getInterpolation(e,i,r,l,u){return di.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;$r.subVectors(l,r),ts.subVectors(u,r),Yf.subVectors(e,r);const m=$r.dot(Yf),p=ts.dot(Yf);if(m<=0&&p<=0)return i.copy(r);Zf.subVectors(e,l);const g=$r.dot(Zf),x=ts.dot(Zf);if(g>=0&&x<=g)return i.copy(l);const v=m*x-g*p;if(v<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector($r,d);Kf.subVectors(e,u);const y=$r.dot(Kf),T=ts.dot(Kf);if(T>=0&&y<=T)return i.copy(u);const b=y*p-m*T;if(b<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(ts,h);const S=g*T-y*x;if(S<=0&&x-g>=0&&y-T>=0)return u_.subVectors(u,l),h=(x-g)/(x-g+(y-T)),i.copy(l).addScaledVector(u_,h);const _=1/(S+b+v);return d=b*_,h=v*_,i.copy(r).addScaledVector($r,d).addScaledVector(ts,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ea={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Qf(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class xe{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=kS(e,1),i=On(i,0,1),r=On(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=Qf(d,u,e+1/3),this.g=Qf(d,u,e),this.b=Qf(d,u,e-1/3)}return Ne.toWorkingColorSpace(this,l),this}setStyle(e,i=xn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xn){const r=fv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=Ff(e.r),this.g=Ff(e.g),this.b=Ff(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Ne.fromWorkingColorSpace(Tn.copy(this),e),Math.round(On(Tn.r*255,0,255))*65536+Math.round(On(Tn.g*255,0,255))*256+Math.round(On(Tn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Tn.copy(this),i);const r=Tn.r,l=Tn.g,u=Tn.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=g<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Tn.copy(this),i),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=xn){Ne.fromWorkingColorSpace(Tn.copy(this),e);const i=Tn.r,r=Tn.g,l=Tn.b;return e!==xn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Ea),this.setHSL(Ea.h+e,Ea.s+i,Ea.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Ea),e.getHSL(Yl);const r=Bf(Ea.h,Yl.h,i),l=Bf(Ea.s,Yl.s,i),u=Bf(Ea.l,Yl.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new xe;xe.NAMES=fv;let aM=0;class cr extends ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=cs,this.side=Ca,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fh,this.blendDst=hh,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(r.blending=this.blending),this.side!==Ca&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==fh&&(r.blendSrc=this.blendSrc),this.blendDst!==hh&&(r.blendDst=this.blendDst),this.blendEquation!==nr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==hc&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hv extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new Z,Zl=new Te;class Yn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=Qg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ba,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Zl.fromBufferAttribute(this,i),Zl.applyMatrix3(e),this.setXY(i,Zl.x,Zl.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyMatrix3(e),this.setXYZ(i,en.x,en.y,en.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyMatrix4(e),this.setXYZ(i,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.applyNormalMatrix(e),this.setXYZ(i,en.x,en.y,en.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)en.fromBufferAttribute(this,i),en.transformDirection(e),this.setXYZ(i,en.x,en.y,en.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=go(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=go(i,this.array)),i}setX(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=go(i,this.array)),i}setY(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=go(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=go(i,this.array)),i}setW(e,i){return this.normalized&&(i=Nn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Nn(i,this.array),r=Nn(r,this.array),l=Nn(l,this.array),u=Nn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Qg&&(e.usage=this.usage),e}}class dv extends Yn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class pv extends Yn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class si extends Yn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let rM=0;const ii=new qe,Jf=new bn,es=new Z,jn=new wo,So=new wo,dn=new Z;class Bn extends ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sv(e)?pv:dv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new he().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const u=e[r];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new si(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];jn.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];So.setFromBufferAttribute(h),this.morphTargetsRelative?(dn.addVectors(jn.min,So.min),jn.expandByPoint(dn),dn.addVectors(jn.max,So.max),jn.expandByPoint(dn)):(jn.expandByPoint(So.min),jn.expandByPoint(So.max))}jn.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)dn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(dn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)dn.fromBufferAttribute(h,p),m&&(es.fromBufferAttribute(e,p),dn.add(es)),l=Math.max(l,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*h),4));const m=this.getAttribute("tangent").array,p=[],g=[];for(let F=0;F<h;F++)p[F]=new Z,g[F]=new Z;const x=new Z,v=new Z,y=new Z,T=new Te,b=new Te,S=new Te,_=new Z,O=new Z;function L(F,mt,ut){x.fromArray(l,F*3),v.fromArray(l,mt*3),y.fromArray(l,ut*3),T.fromArray(d,F*2),b.fromArray(d,mt*2),S.fromArray(d,ut*2),v.sub(x),y.sub(x),b.sub(T),S.sub(T);const St=1/(b.x*S.y-S.x*b.y);isFinite(St)&&(_.copy(v).multiplyScalar(S.y).addScaledVector(y,-b.y).multiplyScalar(St),O.copy(y).multiplyScalar(b.x).addScaledVector(v,-S.x).multiplyScalar(St),p[F].add(_),p[mt].add(_),p[ut].add(_),g[F].add(O),g[mt].add(O),g[ut].add(O))}let N=this.groups;N.length===0&&(N=[{start:0,count:r.length}]);for(let F=0,mt=N.length;F<mt;++F){const ut=N[F],St=ut.start,Y=ut.count;for(let st=St,B=St+Y;st<B;st+=3)L(r[st+0],r[st+1],r[st+2])}const D=new Z,z=new Z,G=new Z,ct=new Z;function R(F){G.fromArray(u,F*3),ct.copy(G);const mt=p[F];D.copy(mt),D.sub(G.multiplyScalar(G.dot(mt))).normalize(),z.crossVectors(ct,mt);const St=z.dot(g[F])<0?-1:1;m[F*4]=D.x,m[F*4+1]=D.y,m[F*4+2]=D.z,m[F*4+3]=St}for(let F=0,mt=N.length;F<mt;++F){const ut=N[F],St=ut.start,Y=ut.count;for(let st=St,B=St+Y;st<B;st+=3)R(r[st+0]),R(r[st+1]),R(r[st+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Yn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new Z,u=new Z,d=new Z,h=new Z,m=new Z,p=new Z,g=new Z,x=new Z;if(e)for(let v=0,y=e.count;v<y;v+=3){const T=e.getX(v+0),b=e.getX(v+1),S=e.getX(v+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,S),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,S),h.add(g),m.add(g),p.add(g),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,y=i.count;v<y;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),g.subVectors(d,u),x.subVectors(l,u),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)dn.fromBufferAttribute(e,i),dn.normalize(),e.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,x=h.normalized,v=new p.constructor(m.length*g);let y=0,T=0;for(let b=0,S=m.length;b<S;b++){h.isInterleavedBufferAttribute?y=m[b]*h.data.stride+h.offset:y=m[b]*g;for(let _=0;_<g;_++)v[T++]=p[y++]}return new Yn(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Bn,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let g=0,x=p.length;g<x;g++){const v=p[g],y=e(v,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,v=p.length;x<v;x++){const y=p[x];g.push(y.toJSON(e.data))}g.length>0&&(l[m]=g,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const u=e.morphAttributes;for(const p in u){const g=[],x=u[p];for(let v=0,y=x.length;v<y;v++)g.push(x[v].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const f_=new qe,Ja=new Rh,Kl=new Co,h_=new Z,ns=new Z,is=new Z,as=new Z,$f=new Z,Ql=new Z,Jl=new Te,$l=new Te,tc=new Te,d_=new Z,p_=new Z,m_=new Z,ec=new Z,nc=new Z;class Xi extends bn{constructor(e=new Bn,i=new hv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){Ql.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const g=h[m],x=u[m];g!==0&&($f.fromBufferAttribute(x,e),d?Ql.addScaledVector($f,g):Ql.addScaledVector($f.sub(i),g))}i.add(Ql)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(u),Ja.copy(e.ray).recast(e.near),!(Kl.containsPoint(Ja.origin)===!1&&(Ja.intersectSphere(Kl,h_)===null||Ja.origin.distanceToSquared(h_)>(e.far-e.near)**2))&&(f_.copy(u).invert(),Ja.copy(e.ray).applyMatrix4(f_),!(r.boundingBox!==null&&Ja.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Ja)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,g=u.attributes.uv1,x=u.attributes.normal,v=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,b=v.length;T<b;T++){const S=v[T],_=d[S.materialIndex],O=Math.max(S.start,y.start),L=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let N=O,D=L;N<D;N+=3){const z=h.getX(N),G=h.getX(N+1),ct=h.getX(N+2);l=ic(this,_,e,r,p,g,x,z,G,ct),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let S=T,_=b;S<_;S+=3){const O=h.getX(S),L=h.getX(S+1),N=h.getX(S+2);l=ic(this,d,e,r,p,g,x,O,L,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,b=v.length;T<b;T++){const S=v[T],_=d[S.materialIndex],O=Math.max(S.start,y.start),L=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let N=O,D=L;N<D;N+=3){const z=N,G=N+1,ct=N+2;l=ic(this,_,e,r,p,g,x,z,G,ct),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,y.start),b=Math.min(m.count,y.start+y.count);for(let S=T,_=b;S<_;S+=3){const O=S,L=S+1,N=S+2;l=ic(this,d,e,r,p,g,x,O,L,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function sM(o,e,i,r,l,u,d,h){let m;if(e.side===zn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Ca,h),m===null)return null;nc.copy(h),nc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(nc);return p<i.near||p>i.far?null:{distance:p,point:nc.clone(),object:o}}function ic(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,ns),o.getVertexPosition(m,is),o.getVertexPosition(p,as);const g=sM(o,e,i,r,ns,is,as,ec);if(g){l&&(Jl.fromBufferAttribute(l,h),$l.fromBufferAttribute(l,m),tc.fromBufferAttribute(l,p),g.uv=di.getInterpolation(ec,ns,is,as,Jl,$l,tc,new Te)),u&&(Jl.fromBufferAttribute(u,h),$l.fromBufferAttribute(u,m),tc.fromBufferAttribute(u,p),g.uv1=di.getInterpolation(ec,ns,is,as,Jl,$l,tc,new Te),g.uv2=g.uv1),d&&(d_.fromBufferAttribute(d,h),p_.fromBufferAttribute(d,m),m_.fromBufferAttribute(d,p),g.normal=di.getInterpolation(ec,ns,is,as,d_,p_,m_,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:m,c:p,normal:new Z,materialIndex:0};di.getNormal(ns,is,as,x.normal),g.face=x}return g}class Lo extends Bn{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],g=[],x=[];let v=0,y=0;T("z","y","x",-1,-1,r,i,e,d,u,0),T("z","y","x",1,-1,r,i,-e,d,u,1),T("x","z","y",1,1,e,r,i,l,d,2),T("x","z","y",1,-1,e,r,-i,l,d,3),T("x","y","z",1,-1,e,i,r,l,u,4),T("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new si(p,3)),this.setAttribute("normal",new si(g,3)),this.setAttribute("uv",new si(x,2));function T(b,S,_,O,L,N,D,z,G,ct,R){const F=N/G,mt=D/ct,ut=N/2,St=D/2,Y=z/2,st=G+1,B=ct+1;let W=0,lt=0;const ft=new Z;for(let w=0;w<B;w++){const X=w*mt-St;for(let it=0;it<st;it++){const V=it*F-ut;ft[b]=V*O,ft[S]=X*L,ft[_]=Y,p.push(ft.x,ft.y,ft.z),ft[b]=0,ft[S]=0,ft[_]=z>0?1:-1,g.push(ft.x,ft.y,ft.z),x.push(it/G),x.push(1-w/ct),W+=1}}for(let w=0;w<ct;w++)for(let X=0;X<G;X++){const it=v+X+st*w,V=v+X+st*(w+1),$=v+(X+1)+st*(w+1),vt=v+(X+1)+st*w;m.push(it,V,vt),m.push(V,$,vt),lt+=6}h.addGroup(y,lt,R),y+=lt,v+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ps(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Rn(o){const e={};for(let i=0;i<o.length;i++){const r=ps(o[i]);for(const l in r)e[l]=r[l]}return e}function oM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function mv(o){return o.getRenderTarget()===null?o.outputColorSpace:Ne.workingColorSpace}const lM={clone:ps,merge:Rn};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=oM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class gv extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Wi}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Pn extends gv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=vh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vh*2*Math.atan(Math.tan(zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(zf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const rs=-90,ss=1;class fM extends bn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Pn(rs,ss,e,i);l.layers=this.layers,this.add(l);const u=new Pn(rs,ss,e,i);u.layers=this.layers,this.add(u);const d=new Pn(rs,ss,e,i);d.layers=this.layers,this.add(d);const h=new Pn(rs,ss,e,i);h.layers=this.layers,this.add(h);const m=new Pn(rs,ss,e,i);m.layers=this.layers,this.add(m);const p=new Pn(rs,ss,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===gc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,g]=this.children,x=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(x,v,y),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class _v extends qn{constructor(e,i,r,l,u,d,h,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:fs,super(e,i,r,l,u,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hM extends or{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(Eo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===sr?xn:ri),this.texture=new _v(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ai}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Lo(5,5,5),u=new lr({name:"CubemapFromEquirect",uniforms:ps(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Aa});u.uniforms.tEquirect.value=i;const d=new Xi(l,u),h=i.minFilter;return i.minFilter===To&&(i.minFilter=ai),new fM(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}const th=new Z,dM=new Z,pM=new he;class tr{constructor(e=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=th.subVectors(r,i).cross(dM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(th),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||pM.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $a=new Co,ac=new Z;class wh{constructor(e=new tr,i=new tr,r=new tr,l=new tr,u=new tr,d=new tr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Wi){const r=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],x=l[6],v=l[7],y=l[8],T=l[9],b=l[10],S=l[11],_=l[12],O=l[13],L=l[14],N=l[15];if(r[0].setComponents(m-u,v-p,S-y,N-_).normalize(),r[1].setComponents(m+u,v+p,S+y,N+_).normalize(),r[2].setComponents(m+d,v+g,S+T,N+O).normalize(),r[3].setComponents(m-d,v-g,S-T,N-O).normalize(),r[4].setComponents(m-h,v-x,S-b,N-L).normalize(),i===Wi)r[5].setComponents(m+h,v+x,S+b,N+L).normalize();else if(i===gc)r[5].setComponents(h,x,b,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$a.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),$a.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($a)}intersectsSprite(e){return $a.center.set(0,0,0),$a.radius=.7071067811865476,$a.applyMatrix4(e.matrixWorld),this.intersectsSphere($a)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(ac.x=l.normal.x>0?e.max.x:e.min.x,ac.y=l.normal.y>0?e.max.y:e.min.y,ac.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vv(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function mM(o,e){const i=e.isWebGL2,r=new WeakMap;function l(p,g){const x=p.array,v=p.usage,y=x.byteLength,T=o.createBuffer();o.bindBuffer(g,T),o.bufferData(g,x,v),p.onUploadCallback();let b;if(x instanceof Float32Array)b=o.FLOAT;else if(x instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)b=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=o.UNSIGNED_SHORT;else if(x instanceof Int16Array)b=o.SHORT;else if(x instanceof Uint32Array)b=o.UNSIGNED_INT;else if(x instanceof Int32Array)b=o.INT;else if(x instanceof Int8Array)b=o.BYTE;else if(x instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:T,type:b,bytesPerElement:x.BYTES_PER_ELEMENT,version:p.version,size:y}}function u(p,g,x){const v=g.array,y=g._updateRange,T=g.updateRanges;if(o.bindBuffer(x,p),y.count===-1&&T.length===0&&o.bufferSubData(x,0,v),T.length!==0){for(let b=0,S=T.length;b<S;b++){const _=T[b];i?o.bufferSubData(x,_.start*v.BYTES_PER_ELEMENT,v,_.start,_.count):o.bufferSubData(x,_.start*v.BYTES_PER_ELEMENT,v.subarray(_.start,_.start+_.count))}g.clearUpdateRanges()}y.count!==-1&&(i?o.bufferSubData(x,y.offset*v.BYTES_PER_ELEMENT,v,y.offset,y.count):o.bufferSubData(x,y.offset*v.BYTES_PER_ELEMENT,v.subarray(y.offset,y.offset+y.count)),y.count=-1),g.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function h(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);g&&(o.deleteBuffer(g.buffer),r.delete(p))}function m(p,g){if(p.isGLBufferAttribute){const v=r.get(p);(!v||v.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const x=r.get(p);if(x===void 0)r.set(p,l(p,g));else if(x.version<p.version){if(x.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(x.buffer,p,g),x.version=p.version}}return{get:d,remove:h,update:m}}class Ch extends Bn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,x=e/h,v=i/m,y=[],T=[],b=[],S=[];for(let _=0;_<g;_++){const O=_*v-d;for(let L=0;L<p;L++){const N=L*x-u;T.push(N,-O,0),b.push(0,0,1),S.push(L/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let O=0;O<h;O++){const L=O+p*_,N=O+p*(_+1),D=O+1+p*(_+1),z=O+1+p*_;y.push(L,N,z),y.push(N,D,z)}this.setIndex(y),this.setAttribute("position",new si(T,3)),this.setAttribute("normal",new si(b,3)),this.setAttribute("uv",new si(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.width,e.height,e.widthSegments,e.heightSegments)}}var gM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_M=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,SM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,AM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,CM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,LM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,FM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,GM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",qM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,YM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,JM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ey=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ny=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ay=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ry=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,oy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ly=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,my=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_y=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sy=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ey=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ty=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,by=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ay=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cy=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ly=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Dy=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,eE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,iE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,oE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,uE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ME=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,EE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:gM,alphahash_pars_fragment:_M,alphamap_fragment:vM,alphamap_pars_fragment:xM,alphatest_fragment:SM,alphatest_pars_fragment:MM,aomap_fragment:yM,aomap_pars_fragment:EM,batching_pars_vertex:TM,batching_vertex:bM,begin_vertex:AM,beginnormal_vertex:RM,bsdfs:wM,iridescence_fragment:CM,bumpmap_pars_fragment:LM,clipping_planes_fragment:DM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:NM,clipping_planes_vertex:OM,color_fragment:PM,color_pars_fragment:zM,color_pars_vertex:BM,color_vertex:IM,common:FM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:GM,displacementmap_pars_vertex:VM,displacementmap_vertex:kM,emissivemap_fragment:WM,emissivemap_pars_fragment:XM,colorspace_fragment:jM,colorspace_pars_fragment:qM,envmap_fragment:YM,envmap_common_pars_fragment:ZM,envmap_pars_fragment:KM,envmap_pars_vertex:QM,envmap_physical_pars_fragment:cy,envmap_vertex:JM,fog_vertex:$M,fog_pars_vertex:ty,fog_fragment:ey,fog_pars_fragment:ny,gradientmap_pars_fragment:iy,lightmap_fragment:ay,lightmap_pars_fragment:ry,lights_lambert_fragment:sy,lights_lambert_pars_fragment:oy,lights_pars_begin:ly,lights_toon_fragment:uy,lights_toon_pars_fragment:fy,lights_phong_fragment:hy,lights_phong_pars_fragment:dy,lights_physical_fragment:py,lights_physical_pars_fragment:my,lights_fragment_begin:gy,lights_fragment_maps:_y,lights_fragment_end:vy,logdepthbuf_fragment:xy,logdepthbuf_pars_fragment:Sy,logdepthbuf_pars_vertex:My,logdepthbuf_vertex:yy,map_fragment:Ey,map_pars_fragment:Ty,map_particle_fragment:by,map_particle_pars_fragment:Ay,metalnessmap_fragment:Ry,metalnessmap_pars_fragment:wy,morphcolor_vertex:Cy,morphnormal_vertex:Ly,morphtarget_pars_vertex:Dy,morphtarget_vertex:Uy,normal_fragment_begin:Ny,normal_fragment_maps:Oy,normal_pars_fragment:Py,normal_pars_vertex:zy,normal_vertex:By,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Fy,clearcoat_normal_fragment_maps:Hy,clearcoat_pars_fragment:Gy,iridescence_pars_fragment:Vy,opaque_fragment:ky,packing:Wy,premultiplied_alpha_fragment:Xy,project_vertex:jy,dithering_fragment:qy,dithering_pars_fragment:Yy,roughnessmap_fragment:Zy,roughnessmap_pars_fragment:Ky,shadowmap_pars_fragment:Qy,shadowmap_pars_vertex:Jy,shadowmap_vertex:$y,shadowmask_pars_fragment:tE,skinbase_vertex:eE,skinning_pars_vertex:nE,skinning_vertex:iE,skinnormal_vertex:aE,specularmap_fragment:rE,specularmap_pars_fragment:sE,tonemapping_fragment:oE,tonemapping_pars_fragment:lE,transmission_fragment:cE,transmission_pars_fragment:uE,uv_pars_fragment:fE,uv_pars_vertex:hE,uv_vertex:dE,worldpos_vertex:pE,background_vert:mE,background_frag:gE,backgroundCube_vert:_E,backgroundCube_frag:vE,cube_vert:xE,cube_frag:SE,depth_vert:ME,depth_frag:yE,distanceRGBA_vert:EE,distanceRGBA_frag:TE,equirect_vert:bE,equirect_frag:AE,linedashed_vert:RE,linedashed_frag:wE,meshbasic_vert:CE,meshbasic_frag:LE,meshlambert_vert:DE,meshlambert_frag:UE,meshmatcap_vert:NE,meshmatcap_frag:OE,meshnormal_vert:PE,meshnormal_frag:zE,meshphong_vert:BE,meshphong_frag:IE,meshphysical_vert:FE,meshphysical_frag:HE,meshtoon_vert:GE,meshtoon_frag:VE,points_vert:kE,points_frag:WE,shadow_vert:XE,shadow_frag:jE,sprite_vert:qE,sprite_frag:YE},Rt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Mi={basic:{uniforms:Rn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Rn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new xe(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Rn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Rn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Rn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new xe(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Rn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Rn([Rt.points,Rt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Rn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Rn([Rt.common,Rt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Rn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Rn([Rt.sprite,Rt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Rn([Rt.common,Rt.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Rn([Rt.lights,Rt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Mi.physical={uniforms:Rn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const rc={r:0,b:0,g:0};function ZE(o,e,i,r,l,u,d){const h=new xe(0);let m=u===!0?0:1,p,g,x=null,v=0,y=null;function T(S,_){let O=!1,L=_.isScene===!0?_.background:null;L&&L.isTexture&&(L=(_.backgroundBlurriness>0?i:e).get(L)),L===null?b(h,m):L&&L.isColor&&(b(L,1),O=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||O)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),L&&(L.isCubeTexture||L.mapping===vc)?(g===void 0&&(g=new Xi(new Lo(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:ps(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(D,z,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,g.material.toneMapped=Ne.getTransfer(L.colorSpace)!==He,(x!==L||v!==L.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,x=L,v=L.version,y=o.toneMapping),g.layers.enableAll(),S.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Xi(new Ch(2,2),new lr({name:"BackgroundMaterial",uniforms:ps(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Ca,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(L.colorSpace)!==He,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(x!==L||v!==L.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,x=L,v=L.version,y=o.toneMapping),p.layers.enableAll(),S.unshift(p,p.geometry,p.material,0,0,null))}function b(S,_){S.getRGB(rc,mv(o)),r.buffers.color.setClear(rc.r,rc.g,rc.b,_,d)}return{getClearColor:function(){return h},setClearColor:function(S,_=1){h.set(S),m=_,b(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(S){m=S,b(h,m)},render:T}}function KE(o,e,i,r){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||u!==null,h={},m=S(null);let p=m,g=!1;function x(Y,st,B,W,lt){let ft=!1;if(d){const w=b(W,B,st);p!==w&&(p=w,y(p.object)),ft=_(Y,W,B,lt),ft&&O(Y,W,B,lt)}else{const w=st.wireframe===!0;(p.geometry!==W.id||p.program!==B.id||p.wireframe!==w)&&(p.geometry=W.id,p.program=B.id,p.wireframe=w,ft=!0)}lt!==null&&i.update(lt,o.ELEMENT_ARRAY_BUFFER),(ft||g)&&(g=!1,ct(Y,st,B,W),lt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(lt).buffer))}function v(){return r.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function y(Y){return r.isWebGL2?o.bindVertexArray(Y):u.bindVertexArrayOES(Y)}function T(Y){return r.isWebGL2?o.deleteVertexArray(Y):u.deleteVertexArrayOES(Y)}function b(Y,st,B){const W=B.wireframe===!0;let lt=h[Y.id];lt===void 0&&(lt={},h[Y.id]=lt);let ft=lt[st.id];ft===void 0&&(ft={},lt[st.id]=ft);let w=ft[W];return w===void 0&&(w=S(v()),ft[W]=w),w}function S(Y){const st=[],B=[],W=[];for(let lt=0;lt<l;lt++)st[lt]=0,B[lt]=0,W[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:st,enabledAttributes:B,attributeDivisors:W,object:Y,attributes:{},index:null}}function _(Y,st,B,W){const lt=p.attributes,ft=st.attributes;let w=0;const X=B.getAttributes();for(const it in X)if(X[it].location>=0){const $=lt[it];let vt=ft[it];if(vt===void 0&&(it==="instanceMatrix"&&Y.instanceMatrix&&(vt=Y.instanceMatrix),it==="instanceColor"&&Y.instanceColor&&(vt=Y.instanceColor)),$===void 0||$.attribute!==vt||vt&&$.data!==vt.data)return!0;w++}return p.attributesNum!==w||p.index!==W}function O(Y,st,B,W){const lt={},ft=st.attributes;let w=0;const X=B.getAttributes();for(const it in X)if(X[it].location>=0){let $=ft[it];$===void 0&&(it==="instanceMatrix"&&Y.instanceMatrix&&($=Y.instanceMatrix),it==="instanceColor"&&Y.instanceColor&&($=Y.instanceColor));const vt={};vt.attribute=$,$&&$.data&&(vt.data=$.data),lt[it]=vt,w++}p.attributes=lt,p.attributesNum=w,p.index=W}function L(){const Y=p.newAttributes;for(let st=0,B=Y.length;st<B;st++)Y[st]=0}function N(Y){D(Y,0)}function D(Y,st){const B=p.newAttributes,W=p.enabledAttributes,lt=p.attributeDivisors;B[Y]=1,W[Y]===0&&(o.enableVertexAttribArray(Y),W[Y]=1),lt[Y]!==st&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](Y,st),lt[Y]=st)}function z(){const Y=p.newAttributes,st=p.enabledAttributes;for(let B=0,W=st.length;B<W;B++)st[B]!==Y[B]&&(o.disableVertexAttribArray(B),st[B]=0)}function G(Y,st,B,W,lt,ft,w){w===!0?o.vertexAttribIPointer(Y,st,B,lt,ft):o.vertexAttribPointer(Y,st,B,W,lt,ft)}function ct(Y,st,B,W){if(r.isWebGL2===!1&&(Y.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const lt=W.attributes,ft=B.getAttributes(),w=st.defaultAttributeValues;for(const X in ft){const it=ft[X];if(it.location>=0){let V=lt[X];if(V===void 0&&(X==="instanceMatrix"&&Y.instanceMatrix&&(V=Y.instanceMatrix),X==="instanceColor"&&Y.instanceColor&&(V=Y.instanceColor)),V!==void 0){const $=V.normalized,vt=V.itemSize,xt=i.get(V);if(xt===void 0)continue;const Ut=xt.buffer,Ot=xt.type,Ht=xt.bytesPerElement,jt=r.isWebGL2===!0&&(Ot===o.INT||Ot===o.UNSIGNED_INT||V.gpuType===K_);if(V.isInterleavedBufferAttribute){const ee=V.data,nt=ee.stride,nn=V.offset;if(ee.isInstancedInterleavedBuffer){for(let It=0;It<it.locationSize;It++)D(it.location+It,ee.meshPerAttribute);Y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let It=0;It<it.locationSize;It++)N(it.location+It);o.bindBuffer(o.ARRAY_BUFFER,Ut);for(let It=0;It<it.locationSize;It++)G(it.location+It,vt/it.locationSize,Ot,$,nt*Ht,(nn+vt/it.locationSize*It)*Ht,jt)}else{if(V.isInstancedBufferAttribute){for(let ee=0;ee<it.locationSize;ee++)D(it.location+ee,V.meshPerAttribute);Y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ee=0;ee<it.locationSize;ee++)N(it.location+ee);o.bindBuffer(o.ARRAY_BUFFER,Ut);for(let ee=0;ee<it.locationSize;ee++)G(it.location+ee,vt/it.locationSize,Ot,$,vt*Ht,vt/it.locationSize*ee*Ht,jt)}}else if(w!==void 0){const $=w[X];if($!==void 0)switch($.length){case 2:o.vertexAttrib2fv(it.location,$);break;case 3:o.vertexAttrib3fv(it.location,$);break;case 4:o.vertexAttrib4fv(it.location,$);break;default:o.vertexAttrib1fv(it.location,$)}}}}z()}function R(){ut();for(const Y in h){const st=h[Y];for(const B in st){const W=st[B];for(const lt in W)T(W[lt].object),delete W[lt];delete st[B]}delete h[Y]}}function F(Y){if(h[Y.id]===void 0)return;const st=h[Y.id];for(const B in st){const W=st[B];for(const lt in W)T(W[lt].object),delete W[lt];delete st[B]}delete h[Y.id]}function mt(Y){for(const st in h){const B=h[st];if(B[Y.id]===void 0)continue;const W=B[Y.id];for(const lt in W)T(W[lt].object),delete W[lt];delete B[Y.id]}}function ut(){St(),g=!0,p!==m&&(p=m,y(p.object))}function St(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:x,reset:ut,resetDefaultState:St,dispose:R,releaseStatesOfGeometry:F,releaseStatesOfProgram:mt,initAttributes:L,enableAttribute:N,disableUnusedAttributes:z}}function QE(o,e,i,r){const l=r.isWebGL2;let u;function d(g){u=g}function h(g,x){o.drawArrays(u,g,x),i.update(x,u,1)}function m(g,x,v){if(v===0)return;let y,T;if(l)y=o,T="drawArraysInstanced";else if(y=e.get("ANGLE_instanced_arrays"),T="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[T](u,g,x,v),i.update(x,u,v)}function p(g,x,v){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<v;T++)this.render(g[T],x[T]);else{y.multiDrawArraysWEBGL(u,g,0,x,0,v);let T=0;for(let b=0;b<v;b++)T+=x[b];i.update(T,u,1)}}this.setMode=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=p}function JE(o,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const G=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(G.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(G){if(G==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";G="mediump"}return G==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const m=u(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=d||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),b=o.getParameter(o.MAX_VERTEX_ATTRIBS),S=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),_=o.getParameter(o.MAX_VARYING_VECTORS),O=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=v>0,N=d||e.has("OES_texture_float"),D=L&&N,z=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:g,maxTextures:x,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:T,maxAttributes:b,maxVertexUniforms:S,maxVaryings:_,maxFragmentUniforms:O,vertexTextures:L,floatFragmentTextures:N,floatVertexTextures:D,maxSamples:z}}function $E(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new tr,h=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const y=x.length!==0||v||r!==0||l;return l=v,r=x.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,y){const T=x.clippingPlanes,b=x.clipIntersection,S=x.clipShadows,_=o.get(x);if(!l||T===null||T.length===0||u&&!S)u?g(null):p();else{const O=u?0:r,L=O*4;let N=_.clippingState||null;m.value=N,N=g(T,v,L,y);for(let D=0;D!==L;++D)N[D]=i[D];_.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(x,v,y,T){const b=x!==null?x.length:0;let S=null;if(b!==0){if(S=m.value,T!==!0||S===null){const _=y+b*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,N=y;L!==b;++L,N+=4)d.copy(x[L]).applyMatrix4(O,h),d.normal.toArray(S,N),S[N+3]=d.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,S}}function tT(o){let e=new WeakMap;function i(d,h){return h===dh?d.mapping=fs:h===ph&&(d.mapping=hs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===dh||h===ph)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new hM(m.height/2);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class eT extends gv{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ls=4,g_=[.125,.215,.35,.446,.526,.582],ir=20,eh=new eT,__=new xe;let nh=null,ih=0,ah=0;const er=(1+Math.sqrt(5))/2,os=1/er,v_=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,er,os),new Z(0,er,-os),new Z(os,0,er),new Z(-os,0,er),new Z(er,os,0),new Z(-er,os,0)];class x_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=y_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=M_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nh,ih,ah),e.scissorTest=!1,sc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===fs||e.mapping===hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nh=this._renderer.getRenderTarget(),ih=this._renderer.getActiveCubeFace(),ah=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ai,minFilter:ai,generateMipmaps:!1,type:bo,format:mi,colorSpace:ji,depthBuffer:!1},l=S_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=S_(e,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nT(u)),this._blurMaterial=iT(u,e,i)}return l}_compileMaterial(e){const i=new Xi(this._lodPlanes[0],e);this._renderer.compile(i,eh)}_sceneToCubeUV(e,i,r,l){const h=new Pn(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,v=g.toneMapping;g.getClearColor(__),g.toneMapping=Ra,g.autoClear=!1;const y=new hv({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),T=new Xi(new Lo,y);let b=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,b=!0):(y.color.copy(__),b=!0);for(let _=0;_<6;_++){const O=_%3;O===0?(h.up.set(0,m[_],0),h.lookAt(p[_],0,0)):O===1?(h.up.set(0,0,m[_]),h.lookAt(0,p[_],0)):(h.up.set(0,m[_],0),h.lookAt(0,0,p[_]));const L=this._cubeSize;sc(l,O*L,_>2?L:0,L,L),g.setRenderTarget(l),b&&g.render(T,h),g.render(e,h)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=v,g.autoClear=x,e.background=S}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===fs||e.mapping===hs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=y_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=M_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Xi(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;sc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,eh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=v_[(l-1)%v_.length];this._blur(e,l-1,l,u,d)}i.autoClear=r}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new Xi(this._lodPlanes[l],p),v=p.uniforms,y=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*ir-1),b=u/T,S=isFinite(u)?1+Math.floor(g*b):ir;S>ir&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${ir}`);const _=[];let O=0;for(let G=0;G<ir;++G){const ct=G/b,R=Math.exp(-ct*ct/2);_.push(R),G===0?O+=R:G<S&&(O+=2*R)}for(let G=0;G<_.length;G++)_[G]=_[G]/O;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=T,v.mipInt.value=L-r;const N=this._sizeLods[l],D=3*N*(l>L-ls?l-L+ls:0),z=4*(this._cubeSize-N);sc(i,D,z,3*N,2*N),m.setRenderTarget(i),m.render(x,eh)}}function nT(o){const e=[],i=[],r=[];let l=o;const u=o-ls+1+g_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-ls?m=g_[d-o+ls-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,x=1+p,v=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,T=6,b=3,S=2,_=1,O=new Float32Array(b*T*y),L=new Float32Array(S*T*y),N=new Float32Array(_*T*y);for(let z=0;z<y;z++){const G=z%3*2/3-1,ct=z>2?0:-1,R=[G,ct,0,G+2/3,ct,0,G+2/3,ct+1,0,G,ct,0,G+2/3,ct+1,0,G,ct+1,0];O.set(R,b*T*z),L.set(v,S*T*z);const F=[z,z,z,z,z,z];N.set(F,_*T*z)}const D=new Bn;D.setAttribute("position",new Yn(O,b)),D.setAttribute("uv",new Yn(L,S)),D.setAttribute("faceIndex",new Yn(N,_)),e.push(D),l>ls&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function S_(o,e,i){const r=new or(o,e,i);return r.texture.mapping=vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function sc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function iT(o,e,i){const r=new Float32Array(ir),l=new Z(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function M_(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function y_(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Aa,depthTest:!1,depthWrite:!1})}function Lh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===dh||m===ph,g=m===fs||m===hs;if(p||g)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let x=e.get(h);return i===null&&(i=new x_(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),e.set(h,x),x.texture}else{if(e.has(h))return e.get(h).texture;{const x=h.image;if(p&&x&&x.height>0||g&&x&&l(x)){i===null&&(i=new x_(o));const v=p?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,v),h.addEventListener("dispose",u),v.texture}else return null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function rT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function sT(o,e,i,r){const l={},u=new WeakMap;function d(x){const v=x.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);for(const T in v.morphAttributes){const b=v.morphAttributes[T];for(let S=0,_=b.length;S<_;S++)e.remove(b[S])}v.removeEventListener("dispose",d),delete l[v.id];const y=u.get(v);y&&(e.remove(y),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(x,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const T in v)e.update(v[T],o.ARRAY_BUFFER);const y=x.morphAttributes;for(const T in y){const b=y[T];for(let S=0,_=b.length;S<_;S++)e.update(b[S],o.ARRAY_BUFFER)}}function p(x){const v=[],y=x.index,T=x.attributes.position;let b=0;if(y!==null){const O=y.array;b=y.version;for(let L=0,N=O.length;L<N;L+=3){const D=O[L+0],z=O[L+1],G=O[L+2];v.push(D,z,z,G,G,D)}}else if(T!==void 0){const O=T.array;b=T.version;for(let L=0,N=O.length/3-1;L<N;L+=3){const D=L+0,z=L+1,G=L+2;v.push(D,z,z,G,G,D)}}else return;const S=new(sv(v)?pv:dv)(v,1);S.version=b;const _=u.get(x);_&&e.remove(_),u.set(x,S)}function g(x){const v=u.get(x);if(v){const y=x.index;y!==null&&v.version<y.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function oT(o,e,i,r){const l=r.isWebGL2;let u;function d(y){u=y}let h,m;function p(y){h=y.type,m=y.bytesPerElement}function g(y,T){o.drawElements(u,T,h,y*m),i.update(T,u,1)}function x(y,T,b){if(b===0)return;let S,_;if(l)S=o,_="drawElementsInstanced";else if(S=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",S===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}S[_](u,T,h,y*m,b),i.update(T,u,b)}function v(y,T,b){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<b;_++)this.render(y[_]/m,T[_]);else{S.multiDrawElementsWEBGL(u,T,0,h,y,0,b);let _=0;for(let O=0;O<b;O++)_+=T[O];i.update(_,u,1)}}this.setMode=d,this.setIndex=p,this.render=g,this.renderInstances=x,this.renderMultiDraw=v}function lT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function cT(o,e){return o[0]-e[0]}function uT(o,e){return Math.abs(e[1])-Math.abs(o[1])}function fT(o,e,i){const r={},l=new Float32Array(8),u=new WeakMap,d=new Ve,h=[];for(let p=0;p<8;p++)h[p]=[p,0];function m(p,g,x){const v=p.morphTargetInfluences;if(e.isWebGL2===!0){const T=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,b=T!==void 0?T.length:0;let S=u.get(g);if(S===void 0||S.count!==b){let st=function(){St.dispose(),u.delete(g),g.removeEventListener("dispose",st)};var y=st;S!==void 0&&S.texture.dispose();const L=g.morphAttributes.position!==void 0,N=g.morphAttributes.normal!==void 0,D=g.morphAttributes.color!==void 0,z=g.morphAttributes.position||[],G=g.morphAttributes.normal||[],ct=g.morphAttributes.color||[];let R=0;L===!0&&(R=1),N===!0&&(R=2),D===!0&&(R=3);let F=g.attributes.position.count*R,mt=1;F>e.maxTextureSize&&(mt=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const ut=new Float32Array(F*mt*4*b),St=new cv(ut,F,mt,b);St.type=ba,St.needsUpdate=!0;const Y=R*4;for(let B=0;B<b;B++){const W=z[B],lt=G[B],ft=ct[B],w=F*mt*4*B;for(let X=0;X<W.count;X++){const it=X*Y;L===!0&&(d.fromBufferAttribute(W,X),ut[w+it+0]=d.x,ut[w+it+1]=d.y,ut[w+it+2]=d.z,ut[w+it+3]=0),N===!0&&(d.fromBufferAttribute(lt,X),ut[w+it+4]=d.x,ut[w+it+5]=d.y,ut[w+it+6]=d.z,ut[w+it+7]=0),D===!0&&(d.fromBufferAttribute(ft,X),ut[w+it+8]=d.x,ut[w+it+9]=d.y,ut[w+it+10]=d.z,ut[w+it+11]=ft.itemSize===4?d.w:1)}}S={count:b,texture:St,size:new Te(F,mt)},u.set(g,S),g.addEventListener("dispose",st)}let _=0;for(let L=0;L<v.length;L++)_+=v[L];const O=g.morphTargetsRelative?1:1-_;x.getUniforms().setValue(o,"morphTargetBaseInfluence",O),x.getUniforms().setValue(o,"morphTargetInfluences",v),x.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),x.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}else{const T=v===void 0?0:v.length;let b=r[g.id];if(b===void 0||b.length!==T){b=[];for(let N=0;N<T;N++)b[N]=[N,0];r[g.id]=b}for(let N=0;N<T;N++){const D=b[N];D[0]=N,D[1]=v[N]}b.sort(uT);for(let N=0;N<8;N++)N<T&&b[N][1]?(h[N][0]=b[N][0],h[N][1]=b[N][1]):(h[N][0]=Number.MAX_SAFE_INTEGER,h[N][1]=0);h.sort(cT);const S=g.morphAttributes.position,_=g.morphAttributes.normal;let O=0;for(let N=0;N<8;N++){const D=h[N],z=D[0],G=D[1];z!==Number.MAX_SAFE_INTEGER&&G?(S&&g.getAttribute("morphTarget"+N)!==S[z]&&g.setAttribute("morphTarget"+N,S[z]),_&&g.getAttribute("morphNormal"+N)!==_[z]&&g.setAttribute("morphNormal"+N,_[z]),l[N]=G,O+=G):(S&&g.hasAttribute("morphTarget"+N)===!0&&g.deleteAttribute("morphTarget"+N),_&&g.hasAttribute("morphNormal"+N)===!0&&g.deleteAttribute("morphNormal"+N),l[N]=0)}const L=g.morphTargetsRelative?1:1-O;x.getUniforms().setValue(o,"morphTargetBaseInfluence",L),x.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:m}}function hT(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,g=m.geometry,x=e.get(m,g);if(l.get(x)!==p&&(e.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}class xv extends qn{constructor(e,i,r,l,u,d,h,m,p,g){if(g=g!==void 0?g:rr,g!==rr&&g!==ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===rr&&(r=Ta),r===void 0&&g===ds&&(r=ar),super(null,l,u,d,h,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:wn,this.minFilter=m!==void 0?m:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const Sv=new qn,Mv=new xv(1,1);Mv.compareFunction=rv;const yv=new cv,Ev=new ZS,Tv=new _v,E_=[],T_=[],b_=new Float32Array(16),A_=new Float32Array(9),R_=new Float32Array(4);function gs(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=E_[l];if(u===void 0&&(u=new Float32Array(l),E_[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function ln(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Mc(o,e){let i=T_[e];i===void 0&&(i=new Int32Array(e),T_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function dT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function pT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function mT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function gT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function _T(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;R_.set(r),o.uniformMatrix2fv(this.addr,!1,R_),cn(i,r)}}function vT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;A_.set(r),o.uniformMatrix3fv(this.addr,!1,A_),cn(i,r)}}function xT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,r))return;b_.set(r),o.uniformMatrix4fv(this.addr,!1,b_),cn(i,r)}}function ST(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function TT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function wT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?Mv:Sv;i.setTexture2D(e||u,l)}function CT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ev,l)}function LT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Tv,l)}function DT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||yv,l)}function UT(o){switch(o){case 5126:return dT;case 35664:return pT;case 35665:return mT;case 35666:return gT;case 35674:return _T;case 35675:return vT;case 35676:return xT;case 5124:case 35670:return ST;case 35667:case 35671:return MT;case 35668:case 35672:return yT;case 35669:case 35673:return ET;case 5125:return TT;case 36294:return bT;case 36295:return AT;case 36296:return RT;case 35678:case 36198:case 36298:case 36306:case 35682:return wT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return LT;case 36289:case 36303:case 36311:case 36292:return DT}}function NT(o,e){o.uniform1fv(this.addr,e)}function OT(o,e){const i=gs(e,this.size,2);o.uniform2fv(this.addr,i)}function PT(o,e){const i=gs(e,this.size,3);o.uniform3fv(this.addr,i)}function zT(o,e){const i=gs(e,this.size,4);o.uniform4fv(this.addr,i)}function BT(o,e){const i=gs(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function IT(o,e){const i=gs(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function FT(o,e){const i=gs(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function HT(o,e){o.uniform1iv(this.addr,e)}function GT(o,e){o.uniform2iv(this.addr,e)}function VT(o,e){o.uniform3iv(this.addr,e)}function kT(o,e){o.uniform4iv(this.addr,e)}function WT(o,e){o.uniform1uiv(this.addr,e)}function XT(o,e){o.uniform2uiv(this.addr,e)}function jT(o,e){o.uniform3uiv(this.addr,e)}function qT(o,e){o.uniform4uiv(this.addr,e)}function YT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Sv,u[d])}function ZT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Ev,u[d])}function KT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Tv,u[d])}function QT(o,e,i){const r=this.cache,l=e.length,u=Mc(i,l);ln(r,u)||(o.uniform1iv(this.addr,u),cn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||yv,u[d])}function JT(o){switch(o){case 5126:return NT;case 35664:return OT;case 35665:return PT;case 35666:return zT;case 35674:return BT;case 35675:return IT;case 35676:return FT;case 5124:case 35670:return HT;case 35667:case 35671:return GT;case 35668:case 35672:return VT;case 35669:case 35673:return kT;case 5125:return WT;case 36294:return XT;case 36295:return jT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return YT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return KT;case 36289:case 36303:case 36311:case 36292:return QT}}class $T{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=UT(i.type)}}class tb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=JT(i.type)}}class eb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function w_(o,e){o.seq.push(e),o.map[e.id]=e}function nb(o,e,i){const r=o.name,l=r.length;for(rh.lastIndex=0;;){const u=rh.exec(r),d=rh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){w_(i,p===void 0?new $T(h,o,e):new tb(h,o,e));break}else{let x=i.map[h];x===void 0&&(x=new eb(h),w_(i,x)),i=x}}}class fc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);nb(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function C_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const ib=37297;let ab=0;function rb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function sb(o){const e=Ne.getPrimaries(Ne.workingColorSpace),i=Ne.getPrimaries(o);let r;switch(e===i?r="":e===mc&&i===pc?r="LinearDisplayP3ToLinearSRGB":e===pc&&i===mc&&(r="LinearSRGBToLinearDisplayP3"),o){case ji:case xc:return[r,"LinearTransferOETF"];case xn:case Ah:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function L_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+rb(o.getShaderSource(e),d)}else return l}function ob(o,e){const i=sb(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function lb(o,e){let i;switch(e){case xS:i="Linear";break;case SS:i="Reinhard";break;case MS:i="OptimizedCineon";break;case yS:i="ACESFilmic";break;case ES:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function cb(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(yo).join(`
`)}function ub(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function fb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function yo(o){return o!==""}function D_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(o){return o.replace(hb,pb)}const db=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function pb(o,e){let i=oe[e];if(i===void 0){const r=db.get(e);if(r!==void 0)i=oe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Sh(i)}const mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function N_(o){return o.replace(mb,gb)}function gb(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function O_(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _b(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Y_?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===qx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function vb(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case fs:case hs:e="ENVMAP_TYPE_CUBE";break;case vc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case hs:e="ENVMAP_MODE_REFRACTION";break}return e}function Sb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Th:e="ENVMAP_BLENDING_MULTIPLY";break;case _S:e="ENVMAP_BLENDING_MIX";break;case vS:e="ENVMAP_BLENDING_ADD";break}return e}function Mb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function yb(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=_b(i),p=vb(i),g=xb(i),x=Sb(i),v=Mb(i),y=i.isWebGL2?"":cb(i),T=ub(u),b=l.createProgram();let S,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(yo).join(`
`),S.length>0&&(S+=`
`),_=[y,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(yo).join(`
`),_.length>0&&(_+=`
`)):(S=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),_=[y,O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ra?"#define TONE_MAPPING":"",i.toneMapping!==Ra?oe.tonemapping_pars_fragment:"",i.toneMapping!==Ra?lb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,ob("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(yo).join(`
`)),d=Sh(d),d=D_(d,i),d=U_(d,i),h=Sh(h),h=D_(h,i),h=U_(h,i),d=N_(d),h=N_(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===Jg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Jg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=O+S+d,N=O+_+h,D=C_(l,l.VERTEX_SHADER,L),z=C_(l,l.FRAGMENT_SHADER,N);l.attachShader(b,D),l.attachShader(b,z),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function G(mt){if(o.debug.checkShaderErrors){const ut=l.getProgramInfoLog(b).trim(),St=l.getShaderInfoLog(D).trim(),Y=l.getShaderInfoLog(z).trim();let st=!0,B=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(st=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,D,z);else{const W=L_(l,D,"vertex"),lt=L_(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Program Info Log: `+ut+`
`+W+`
`+lt)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(St===""||Y==="")&&(B=!1);B&&(mt.diagnostics={runnable:st,programLog:ut,vertexShader:{log:St,prefix:S},fragmentShader:{log:Y,prefix:_}})}l.deleteShader(D),l.deleteShader(z),ct=new fc(l,b),R=fb(l,b)}let ct;this.getUniforms=function(){return ct===void 0&&G(this),ct};let R;this.getAttributes=function(){return R===void 0&&G(this),R};let F=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=l.getProgramParameter(b,ib)),F},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=z,this}let Eb=0;class Tb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new bb(e),i.set(e,r)),r}}class bb{constructor(e){this.id=Eb++,this.code=e,this.usedTimes=0}}function Ab(o,e,i,r,l,u,d){const h=new uv,m=new Tb,p=[],g=l.isWebGL2,x=l.logarithmicDepthBuffer,v=l.vertexTextures;let y=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return R===0?"uv":`uv${R}`}function S(R,F,mt,ut,St){const Y=ut.fog,st=St.geometry,B=R.isMeshStandardMaterial?ut.environment:null,W=(R.isMeshStandardMaterial?i:e).get(R.envMap||B),lt=W&&W.mapping===vc?W.image.height:null,ft=T[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const w=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,X=w!==void 0?w.length:0;let it=0;st.morphAttributes.position!==void 0&&(it=1),st.morphAttributes.normal!==void 0&&(it=2),st.morphAttributes.color!==void 0&&(it=3);let V,$,vt,xt;if(ft){const pn=Mi[ft];V=pn.vertexShader,$=pn.fragmentShader}else V=R.vertexShader,$=R.fragmentShader,m.update(R),vt=m.getVertexShaderID(R),xt=m.getFragmentShaderID(R);const Ut=o.getRenderTarget(),Ot=St.isInstancedMesh===!0,Ht=St.isBatchedMesh===!0,jt=!!R.map,ee=!!R.matcap,nt=!!W,nn=!!R.aoMap,It=!!R.lightMap,le=!!R.bumpMap,Zt=!!R.normalMap,Se=!!R.displacementMap,se=!!R.emissiveMap,ne=!!R.metalnessMap,be=!!R.roughnessMap,We=R.anisotropy>0,an=R.clearcoat>0,U=R.iridescence>0,A=R.sheen>0,at=R.transmission>0,yt=We&&!!R.anisotropyMap,_t=an&&!!R.clearcoatMap,Mt=an&&!!R.clearcoatNormalMap,Lt=an&&!!R.clearcoatRoughnessMap,At=U&&!!R.iridescenceMap,Dt=U&&!!R.iridescenceThicknessMap,Kt=A&&!!R.sheenColorMap,ge=A&&!!R.sheenRoughnessMap,Et=!!R.specularMap,_e=!!R.specularColorMap,Qt=!!R.specularIntensityMap,Gt=at&&!!R.transmissionMap,Ft=at&&!!R.thicknessMap,Nt=!!R.gradientMap,ce=!!R.alphaMap,k=R.alphaTest>0,Ct=!!R.alphaHash,Tt=!!R.extensions,dt=!!st.attributes.uv1,bt=!!st.attributes.uv2,Vt=!!st.attributes.uv3;let de=Ra;return R.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(de=o.toneMapping),{isWebGL2:g,shaderID:ft,shaderType:R.type,shaderName:R.name,vertexShader:V,fragmentShader:$,defines:R.defines,customVertexShaderID:vt,customFragmentShaderID:xt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Ht,instancing:Ot,instancingColor:Ot&&St.instanceColor!==null,supportsVertexTextures:v,outputColorSpace:Ut===null?o.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:ji,map:jt,matcap:ee,envMap:nt,envMapMode:nt&&W.mapping,envMapCubeUVHeight:lt,aoMap:nn,lightMap:It,bumpMap:le,normalMap:Zt,displacementMap:v&&Se,emissiveMap:se,normalMapObjectSpace:Zt&&R.normalMapType===PS,normalMapTangentSpace:Zt&&R.normalMapType===av,metalnessMap:ne,roughnessMap:be,anisotropy:We,anisotropyMap:yt,clearcoat:an,clearcoatMap:_t,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Lt,iridescence:U,iridescenceMap:At,iridescenceThicknessMap:Dt,sheen:A,sheenColorMap:Kt,sheenRoughnessMap:ge,specularMap:Et,specularColorMap:_e,specularIntensityMap:Qt,transmission:at,transmissionMap:Gt,thicknessMap:Ft,gradientMap:Nt,opaque:R.transparent===!1&&R.blending===cs,alphaMap:ce,alphaTest:k,alphaHash:Ct,combine:R.combine,mapUv:jt&&b(R.map.channel),aoMapUv:nn&&b(R.aoMap.channel),lightMapUv:It&&b(R.lightMap.channel),bumpMapUv:le&&b(R.bumpMap.channel),normalMapUv:Zt&&b(R.normalMap.channel),displacementMapUv:Se&&b(R.displacementMap.channel),emissiveMapUv:se&&b(R.emissiveMap.channel),metalnessMapUv:ne&&b(R.metalnessMap.channel),roughnessMapUv:be&&b(R.roughnessMap.channel),anisotropyMapUv:yt&&b(R.anisotropyMap.channel),clearcoatMapUv:_t&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:ge&&b(R.sheenRoughnessMap.channel),specularMapUv:Et&&b(R.specularMap.channel),specularColorMapUv:_e&&b(R.specularColorMap.channel),specularIntensityMapUv:Qt&&b(R.specularIntensityMap.channel),transmissionMapUv:Gt&&b(R.transmissionMap.channel),thicknessMapUv:Ft&&b(R.thicknessMap.channel),alphaMapUv:ce&&b(R.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Zt||We),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,vertexUv1s:dt,vertexUv2s:bt,vertexUv3s:Vt,pointsUvs:St.isPoints===!0&&!!st.attributes.uv&&(jt||ce),fog:!!Y,useFog:R.fog===!0,fogExp2:Y&&Y.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,skinning:St.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:it,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&mt.length>0,shadowMapType:o.shadowMap.type,toneMapping:de,useLegacyLights:o._useLegacyLights,decodeVideoTexture:jt&&R.map.isVideoTexture===!0&&Ne.getTransfer(R.map.colorSpace)===He,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ki,flipSided:R.side===zn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Tt&&R.extensions.derivatives===!0,extensionFragDepth:Tt&&R.extensions.fragDepth===!0,extensionDrawBuffers:Tt&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Tt&&R.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function _(R){const F=[];if(R.shaderID?F.push(R.shaderID):(F.push(R.customVertexShaderID),F.push(R.customFragmentShaderID)),R.defines!==void 0)for(const mt in R.defines)F.push(mt),F.push(R.defines[mt]);return R.isRawShaderMaterial===!1&&(O(F,R),L(F,R),F.push(o.outputColorSpace)),F.push(R.customProgramCacheKey),F.join()}function O(R,F){R.push(F.precision),R.push(F.outputColorSpace),R.push(F.envMapMode),R.push(F.envMapCubeUVHeight),R.push(F.mapUv),R.push(F.alphaMapUv),R.push(F.lightMapUv),R.push(F.aoMapUv),R.push(F.bumpMapUv),R.push(F.normalMapUv),R.push(F.displacementMapUv),R.push(F.emissiveMapUv),R.push(F.metalnessMapUv),R.push(F.roughnessMapUv),R.push(F.anisotropyMapUv),R.push(F.clearcoatMapUv),R.push(F.clearcoatNormalMapUv),R.push(F.clearcoatRoughnessMapUv),R.push(F.iridescenceMapUv),R.push(F.iridescenceThicknessMapUv),R.push(F.sheenColorMapUv),R.push(F.sheenRoughnessMapUv),R.push(F.specularMapUv),R.push(F.specularColorMapUv),R.push(F.specularIntensityMapUv),R.push(F.transmissionMapUv),R.push(F.thicknessMapUv),R.push(F.combine),R.push(F.fogExp2),R.push(F.sizeAttenuation),R.push(F.morphTargetsCount),R.push(F.morphAttributeCount),R.push(F.numDirLights),R.push(F.numPointLights),R.push(F.numSpotLights),R.push(F.numSpotLightMaps),R.push(F.numHemiLights),R.push(F.numRectAreaLights),R.push(F.numDirLightShadows),R.push(F.numPointLightShadows),R.push(F.numSpotLightShadows),R.push(F.numSpotLightShadowsWithMaps),R.push(F.numLightProbes),R.push(F.shadowMapType),R.push(F.toneMapping),R.push(F.numClippingPlanes),R.push(F.numClipIntersection),R.push(F.depthPacking)}function L(R,F){h.disableAll(),F.isWebGL2&&h.enable(0),F.supportsVertexTextures&&h.enable(1),F.instancing&&h.enable(2),F.instancingColor&&h.enable(3),F.matcap&&h.enable(4),F.envMap&&h.enable(5),F.normalMapObjectSpace&&h.enable(6),F.normalMapTangentSpace&&h.enable(7),F.clearcoat&&h.enable(8),F.iridescence&&h.enable(9),F.alphaTest&&h.enable(10),F.vertexColors&&h.enable(11),F.vertexAlphas&&h.enable(12),F.vertexUv1s&&h.enable(13),F.vertexUv2s&&h.enable(14),F.vertexUv3s&&h.enable(15),F.vertexTangents&&h.enable(16),F.anisotropy&&h.enable(17),F.alphaHash&&h.enable(18),F.batching&&h.enable(19),R.push(h.mask),h.disableAll(),F.fog&&h.enable(0),F.useFog&&h.enable(1),F.flatShading&&h.enable(2),F.logarithmicDepthBuffer&&h.enable(3),F.skinning&&h.enable(4),F.morphTargets&&h.enable(5),F.morphNormals&&h.enable(6),F.morphColors&&h.enable(7),F.premultipliedAlpha&&h.enable(8),F.shadowMapEnabled&&h.enable(9),F.useLegacyLights&&h.enable(10),F.doubleSided&&h.enable(11),F.flipSided&&h.enable(12),F.useDepthPacking&&h.enable(13),F.dithering&&h.enable(14),F.transmission&&h.enable(15),F.sheen&&h.enable(16),F.opaque&&h.enable(17),F.pointsUvs&&h.enable(18),F.decodeVideoTexture&&h.enable(19),R.push(h.mask)}function N(R){const F=T[R.type];let mt;if(F){const ut=Mi[F];mt=lM.clone(ut.uniforms)}else mt=R.uniforms;return mt}function D(R,F){let mt;for(let ut=0,St=p.length;ut<St;ut++){const Y=p[ut];if(Y.cacheKey===F){mt=Y,++mt.usedTimes;break}}return mt===void 0&&(mt=new yb(o,F,R,u),p.push(mt)),mt}function z(R){if(--R.usedTimes===0){const F=p.indexOf(R);p[F]=p[p.length-1],p.pop(),R.destroy()}}function G(R){m.remove(R)}function ct(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:N,acquireProgram:D,releaseProgram:z,releaseShaderCache:G,programs:p,dispose:ct}}function Rb(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function r(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function wb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function P_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function z_(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(x,v,y,T,b,S){let _=o[e];return _===void 0?(_={id:x.id,object:x,geometry:v,material:y,groupOrder:T,renderOrder:x.renderOrder,z:b,group:S},o[e]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=y,_.groupOrder=T,_.renderOrder=x.renderOrder,_.z=b,_.group=S),e++,_}function h(x,v,y,T,b,S){const _=d(x,v,y,T,b,S);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(x,v,y,T,b,S){const _=d(x,v,y,T,b,S);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,v){i.length>1&&i.sort(x||wb),r.length>1&&r.sort(v||P_),l.length>1&&l.sort(v||P_)}function g(){for(let x=e,v=o.length;x<v;x++){const y=o[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:g,sort:p}}function Cb(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new z_,o.set(r,[d])):l>=u.length?(d=new z_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function Lb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Z,color:new xe};break;case"SpotLight":i={position:new Z,direction:new Z,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return o[e.id]=i,i}}}function Db(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Ub=0;function Nb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Ob(o,e){const i=new Lb,r=Db(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new Z);const u=new Z,d=new qe,h=new qe;function m(g,x){let v=0,y=0,T=0;for(let ut=0;ut<9;ut++)l.probe[ut].set(0,0,0);let b=0,S=0,_=0,O=0,L=0,N=0,D=0,z=0,G=0,ct=0,R=0;g.sort(Nb);const F=x===!0?Math.PI:1;for(let ut=0,St=g.length;ut<St;ut++){const Y=g[ut],st=Y.color,B=Y.intensity,W=Y.distance,lt=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)v+=st.r*B*F,y+=st.g*B*F,T+=st.b*B*F;else if(Y.isLightProbe){for(let ft=0;ft<9;ft++)l.probe[ft].addScaledVector(Y.sh.coefficients[ft],B);R++}else if(Y.isDirectionalLight){const ft=i.get(Y);if(ft.color.copy(Y.color).multiplyScalar(Y.intensity*F),Y.castShadow){const w=Y.shadow,X=r.get(Y);X.shadowBias=w.bias,X.shadowNormalBias=w.normalBias,X.shadowRadius=w.radius,X.shadowMapSize=w.mapSize,l.directionalShadow[b]=X,l.directionalShadowMap[b]=lt,l.directionalShadowMatrix[b]=Y.shadow.matrix,N++}l.directional[b]=ft,b++}else if(Y.isSpotLight){const ft=i.get(Y);ft.position.setFromMatrixPosition(Y.matrixWorld),ft.color.copy(st).multiplyScalar(B*F),ft.distance=W,ft.coneCos=Math.cos(Y.angle),ft.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),ft.decay=Y.decay,l.spot[_]=ft;const w=Y.shadow;if(Y.map&&(l.spotLightMap[G]=Y.map,G++,w.updateMatrices(Y),Y.castShadow&&ct++),l.spotLightMatrix[_]=w.matrix,Y.castShadow){const X=r.get(Y);X.shadowBias=w.bias,X.shadowNormalBias=w.normalBias,X.shadowRadius=w.radius,X.shadowMapSize=w.mapSize,l.spotShadow[_]=X,l.spotShadowMap[_]=lt,z++}_++}else if(Y.isRectAreaLight){const ft=i.get(Y);ft.color.copy(st).multiplyScalar(B),ft.halfWidth.set(Y.width*.5,0,0),ft.halfHeight.set(0,Y.height*.5,0),l.rectArea[O]=ft,O++}else if(Y.isPointLight){const ft=i.get(Y);if(ft.color.copy(Y.color).multiplyScalar(Y.intensity*F),ft.distance=Y.distance,ft.decay=Y.decay,Y.castShadow){const w=Y.shadow,X=r.get(Y);X.shadowBias=w.bias,X.shadowNormalBias=w.normalBias,X.shadowRadius=w.radius,X.shadowMapSize=w.mapSize,X.shadowCameraNear=w.camera.near,X.shadowCameraFar=w.camera.far,l.pointShadow[S]=X,l.pointShadowMap[S]=lt,l.pointShadowMatrix[S]=Y.shadow.matrix,D++}l.point[S]=ft,S++}else if(Y.isHemisphereLight){const ft=i.get(Y);ft.skyColor.copy(Y.color).multiplyScalar(B*F),ft.groundColor.copy(Y.groundColor).multiplyScalar(B*F),l.hemi[L]=ft,L++}}O>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Rt.LTC_FLOAT_1,l.rectAreaLTC2=Rt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Rt.LTC_HALF_1,l.rectAreaLTC2=Rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=v,l.ambient[1]=y,l.ambient[2]=T;const mt=l.hash;(mt.directionalLength!==b||mt.pointLength!==S||mt.spotLength!==_||mt.rectAreaLength!==O||mt.hemiLength!==L||mt.numDirectionalShadows!==N||mt.numPointShadows!==D||mt.numSpotShadows!==z||mt.numSpotMaps!==G||mt.numLightProbes!==R)&&(l.directional.length=b,l.spot.length=_,l.rectArea.length=O,l.point.length=S,l.hemi.length=L,l.directionalShadow.length=N,l.directionalShadowMap.length=N,l.pointShadow.length=D,l.pointShadowMap.length=D,l.spotShadow.length=z,l.spotShadowMap.length=z,l.directionalShadowMatrix.length=N,l.pointShadowMatrix.length=D,l.spotLightMatrix.length=z+G-ct,l.spotLightMap.length=G,l.numSpotLightShadowsWithMaps=ct,l.numLightProbes=R,mt.directionalLength=b,mt.pointLength=S,mt.spotLength=_,mt.rectAreaLength=O,mt.hemiLength=L,mt.numDirectionalShadows=N,mt.numPointShadows=D,mt.numSpotShadows=z,mt.numSpotMaps=G,mt.numLightProbes=R,l.version=Ub++)}function p(g,x){let v=0,y=0,T=0,b=0,S=0;const _=x.matrixWorldInverse;for(let O=0,L=g.length;O<L;O++){const N=g[O];if(N.isDirectionalLight){const D=l.directional[v];D.direction.setFromMatrixPosition(N.matrixWorld),u.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(_),v++}else if(N.isSpotLight){const D=l.spot[T];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(N.matrixWorld),u.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(_),T++}else if(N.isRectAreaLight){const D=l.rectArea[b];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(_),h.identity(),d.copy(N.matrixWorld),d.premultiply(_),h.extractRotation(d),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(N.isPointLight){const D=l.point[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(_),y++}else if(N.isHemisphereLight){const D=l.hemi[S];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(_),S++}}}return{setup:m,setupView:p,state:l}}function B_(o,e){const i=new Ob(o,e),r=[],l=[];function u(){r.length=0,l.length=0}function d(x){r.push(x)}function h(x){l.push(x)}function m(x){i.setup(r,x)}function p(x){i.setupView(r,x)}return{init:u,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:d,pushShadow:h}}function Pb(o,e){let i=new WeakMap;function r(u,d=0){const h=i.get(u);let m;return h===void 0?(m=new B_(o,e),i.set(u,[m])):d>=h.length?(m=new B_(o,e),h.push(m)):m=h[d],m}function l(){i=new WeakMap}return{get:r,dispose:l}}class zb extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bb extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Hb(o,e,i){let r=new wh;const l=new Te,u=new Te,d=new Ve,h=new zb({depthPacking:OS}),m=new Bb,p={},g=i.maxTextureSize,x={[Ca]:zn,[zn]:Ca,[ki]:ki},v=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Ib,fragmentShader:Fb}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new Bn;T.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Xi(T,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y_;let _=this.type;this.render=function(D,z,G){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||D.length===0)return;const ct=o.getRenderTarget(),R=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),mt=o.state;mt.setBlending(Aa),mt.buffers.color.setClear(1,1,1,1),mt.buffers.depth.setTest(!0),mt.setScissorTest(!1);const ut=_!==Vi&&this.type===Vi,St=_===Vi&&this.type!==Vi;for(let Y=0,st=D.length;Y<st;Y++){const B=D[Y],W=B.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const lt=W.getFrameExtents();if(l.multiply(lt),u.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/lt.x),l.x=u.x*lt.x,W.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/lt.y),l.y=u.y*lt.y,W.mapSize.y=u.y)),W.map===null||ut===!0||St===!0){const w=this.type!==Vi?{minFilter:wn,magFilter:wn}:{};W.map!==null&&W.map.dispose(),W.map=new or(l.x,l.y,w),W.map.texture.name=B.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const ft=W.getViewportCount();for(let w=0;w<ft;w++){const X=W.getViewport(w);d.set(u.x*X.x,u.y*X.y,u.x*X.z,u.y*X.w),mt.viewport(d),W.updateMatrices(B,w),r=W.getFrustum(),N(z,G,W.camera,B,this.type)}W.isPointLightShadow!==!0&&this.type===Vi&&O(W,G),W.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(ct,R,F)};function O(D,z){const G=e.update(b);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,y.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new or(l.x,l.y)),v.uniforms.shadow_pass.value=D.map.texture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(z,null,G,v,b,null),y.uniforms.shadow_pass.value=D.mapPass.texture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(z,null,G,y,b,null)}function L(D,z,G,ct){let R=null;const F=G.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)R=F;else if(R=G.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const mt=R.uuid,ut=z.uuid;let St=p[mt];St===void 0&&(St={},p[mt]=St);let Y=St[ut];Y===void 0&&(Y=R.clone(),St[ut]=Y),R=Y}if(R.visible=z.visible,R.wireframe=z.wireframe,ct===Vi?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:x[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const mt=o.properties.get(R);mt.light=G}return R}function N(D,z,G,ct,R){if(D.visible===!1)return;if(D.layers.test(z.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&R===Vi)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld);const ut=e.update(D),St=D.material;if(Array.isArray(St)){const Y=ut.groups;for(let st=0,B=Y.length;st<B;st++){const W=Y[st],lt=St[W.materialIndex];if(lt&&lt.visible){const ft=L(D,lt,ct,R);D.onBeforeShadow(o,D,z,G,ut,ft,W),o.renderBufferDirect(G,null,ut,ft,D,W),D.onAfterShadow(o,D,z,G,ut,ft,W)}}}else if(St.visible){const Y=L(D,St,ct,R);D.onBeforeShadow(o,D,z,G,ut,Y,null),o.renderBufferDirect(G,null,ut,Y,D,null),D.onAfterShadow(o,D,z,G,ut,Y,null)}}const mt=D.children;for(let ut=0,St=mt.length;ut<St;ut++)N(mt[ut],z,G,ct,R)}}function Gb(o,e,i){const r=i.isWebGL2;function l(){let k=!1;const Ct=new Ve;let Tt=null;const dt=new Ve(0,0,0,0);return{setMask:function(bt){Tt!==bt&&!k&&(o.colorMask(bt,bt,bt,bt),Tt=bt)},setLocked:function(bt){k=bt},setClear:function(bt,Vt,de,Ye,pn){pn===!0&&(bt*=Ye,Vt*=Ye,de*=Ye),Ct.set(bt,Vt,de,Ye),dt.equals(Ct)===!1&&(o.clearColor(bt,Vt,de,Ye),dt.copy(Ct))},reset:function(){k=!1,Tt=null,dt.set(-1,0,0,0)}}}function u(){let k=!1,Ct=null,Tt=null,dt=null;return{setTest:function(bt){bt?Ht(o.DEPTH_TEST):jt(o.DEPTH_TEST)},setMask:function(bt){Ct!==bt&&!k&&(o.depthMask(bt),Ct=bt)},setFunc:function(bt){if(Tt!==bt){switch(bt){case uS:o.depthFunc(o.NEVER);break;case fS:o.depthFunc(o.ALWAYS);break;case hS:o.depthFunc(o.LESS);break;case hc:o.depthFunc(o.LEQUAL);break;case dS:o.depthFunc(o.EQUAL);break;case pS:o.depthFunc(o.GEQUAL);break;case mS:o.depthFunc(o.GREATER);break;case gS:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Tt=bt}},setLocked:function(bt){k=bt},setClear:function(bt){dt!==bt&&(o.clearDepth(bt),dt=bt)},reset:function(){k=!1,Ct=null,Tt=null,dt=null}}}function d(){let k=!1,Ct=null,Tt=null,dt=null,bt=null,Vt=null,de=null,Ye=null,pn=null;return{setTest:function(ve){k||(ve?Ht(o.STENCIL_TEST):jt(o.STENCIL_TEST))},setMask:function(ve){Ct!==ve&&!k&&(o.stencilMask(ve),Ct=ve)},setFunc:function(ve,ye,Be){(Tt!==ve||dt!==ye||bt!==Be)&&(o.stencilFunc(ve,ye,Be),Tt=ve,dt=ye,bt=Be)},setOp:function(ve,ye,Be){(Vt!==ve||de!==ye||Ye!==Be)&&(o.stencilOp(ve,ye,Be),Vt=ve,de=ye,Ye=Be)},setLocked:function(ve){k=ve},setClear:function(ve){pn!==ve&&(o.clearStencil(ve),pn=ve)},reset:function(){k=!1,Ct=null,Tt=null,dt=null,bt=null,Vt=null,de=null,Ye=null,pn=null}}}const h=new l,m=new u,p=new d,g=new WeakMap,x=new WeakMap;let v={},y={},T=new WeakMap,b=[],S=null,_=!1,O=null,L=null,N=null,D=null,z=null,G=null,ct=null,R=new xe(0,0,0),F=0,mt=!1,ut=null,St=null,Y=null,st=null,B=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let lt=!1,ft=0;const w=o.getParameter(o.VERSION);w.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(w)[1]),lt=ft>=1):w.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(w)[1]),lt=ft>=2);let X=null,it={};const V=o.getParameter(o.SCISSOR_BOX),$=o.getParameter(o.VIEWPORT),vt=new Ve().fromArray(V),xt=new Ve().fromArray($);function Ut(k,Ct,Tt,dt){const bt=new Uint8Array(4),Vt=o.createTexture();o.bindTexture(k,Vt),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let de=0;de<Tt;de++)r&&(k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY)?o.texImage3D(Ct,0,o.RGBA,1,1,dt,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ct+de,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return Vt}const Ot={};Ot[o.TEXTURE_2D]=Ut(o.TEXTURE_2D,o.TEXTURE_2D,1),Ot[o.TEXTURE_CUBE_MAP]=Ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Ot[o.TEXTURE_2D_ARRAY]=Ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Ot[o.TEXTURE_3D]=Ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),m.setClear(1),p.setClear(0),Ht(o.DEPTH_TEST),m.setFunc(hc),se(!1),ne(xg),Ht(o.CULL_FACE),Zt(Aa);function Ht(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function jt(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function ee(k,Ct){return y[k]!==Ct?(o.bindFramebuffer(k,Ct),y[k]=Ct,r&&(k===o.DRAW_FRAMEBUFFER&&(y[o.FRAMEBUFFER]=Ct),k===o.FRAMEBUFFER&&(y[o.DRAW_FRAMEBUFFER]=Ct)),!0):!1}function nt(k,Ct){let Tt=b,dt=!1;if(k)if(Tt=T.get(Ct),Tt===void 0&&(Tt=[],T.set(Ct,Tt)),k.isWebGLMultipleRenderTargets){const bt=k.texture;if(Tt.length!==bt.length||Tt[0]!==o.COLOR_ATTACHMENT0){for(let Vt=0,de=bt.length;Vt<de;Vt++)Tt[Vt]=o.COLOR_ATTACHMENT0+Vt;Tt.length=bt.length,dt=!0}}else Tt[0]!==o.COLOR_ATTACHMENT0&&(Tt[0]=o.COLOR_ATTACHMENT0,dt=!0);else Tt[0]!==o.BACK&&(Tt[0]=o.BACK,dt=!0);dt&&(i.isWebGL2?o.drawBuffers(Tt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Tt))}function nn(k){return S!==k?(o.useProgram(k),S=k,!0):!1}const It={[nr]:o.FUNC_ADD,[Zx]:o.FUNC_SUBTRACT,[Kx]:o.FUNC_REVERSE_SUBTRACT};if(r)It[yg]=o.MIN,It[Eg]=o.MAX;else{const k=e.get("EXT_blend_minmax");k!==null&&(It[yg]=k.MIN_EXT,It[Eg]=k.MAX_EXT)}const le={[Qx]:o.ZERO,[Jx]:o.ONE,[$x]:o.SRC_COLOR,[fh]:o.SRC_ALPHA,[rS]:o.SRC_ALPHA_SATURATE,[iS]:o.DST_COLOR,[eS]:o.DST_ALPHA,[tS]:o.ONE_MINUS_SRC_COLOR,[hh]:o.ONE_MINUS_SRC_ALPHA,[aS]:o.ONE_MINUS_DST_COLOR,[nS]:o.ONE_MINUS_DST_ALPHA,[sS]:o.CONSTANT_COLOR,[oS]:o.ONE_MINUS_CONSTANT_COLOR,[lS]:o.CONSTANT_ALPHA,[cS]:o.ONE_MINUS_CONSTANT_ALPHA};function Zt(k,Ct,Tt,dt,bt,Vt,de,Ye,pn,ve){if(k===Aa){_===!0&&(jt(o.BLEND),_=!1);return}if(_===!1&&(Ht(o.BLEND),_=!0),k!==Yx){if(k!==O||ve!==mt){if((L!==nr||z!==nr)&&(o.blendEquation(o.FUNC_ADD),L=nr,z=nr),ve)switch(k){case cs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uh:o.blendFunc(o.ONE,o.ONE);break;case Sg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case cs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case uh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Sg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}N=null,D=null,G=null,ct=null,R.set(0,0,0),F=0,O=k,mt=ve}return}bt=bt||Ct,Vt=Vt||Tt,de=de||dt,(Ct!==L||bt!==z)&&(o.blendEquationSeparate(It[Ct],It[bt]),L=Ct,z=bt),(Tt!==N||dt!==D||Vt!==G||de!==ct)&&(o.blendFuncSeparate(le[Tt],le[dt],le[Vt],le[de]),N=Tt,D=dt,G=Vt,ct=de),(Ye.equals(R)===!1||pn!==F)&&(o.blendColor(Ye.r,Ye.g,Ye.b,pn),R.copy(Ye),F=pn),O=k,mt=!1}function Se(k,Ct){k.side===ki?jt(o.CULL_FACE):Ht(o.CULL_FACE);let Tt=k.side===zn;Ct&&(Tt=!Tt),se(Tt),k.blending===cs&&k.transparent===!1?Zt(Aa):Zt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),m.setFunc(k.depthFunc),m.setTest(k.depthTest),m.setMask(k.depthWrite),h.setMask(k.colorWrite);const dt=k.stencilWrite;p.setTest(dt),dt&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),We(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ht(o.SAMPLE_ALPHA_TO_COVERAGE):jt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(k){ut!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),ut=k)}function ne(k){k!==Xx?(Ht(o.CULL_FACE),k!==St&&(k===xg?o.cullFace(o.BACK):k===jx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):jt(o.CULL_FACE),St=k}function be(k){k!==Y&&(lt&&o.lineWidth(k),Y=k)}function We(k,Ct,Tt){k?(Ht(o.POLYGON_OFFSET_FILL),(st!==Ct||B!==Tt)&&(o.polygonOffset(Ct,Tt),st=Ct,B=Tt)):jt(o.POLYGON_OFFSET_FILL)}function an(k){k?Ht(o.SCISSOR_TEST):jt(o.SCISSOR_TEST)}function U(k){k===void 0&&(k=o.TEXTURE0+W-1),X!==k&&(o.activeTexture(k),X=k)}function A(k,Ct,Tt){Tt===void 0&&(X===null?Tt=o.TEXTURE0+W-1:Tt=X);let dt=it[Tt];dt===void 0&&(dt={type:void 0,texture:void 0},it[Tt]=dt),(dt.type!==k||dt.texture!==Ct)&&(X!==Tt&&(o.activeTexture(Tt),X=Tt),o.bindTexture(k,Ct||Ot[k]),dt.type=k,dt.texture=Ct)}function at(){const k=it[X];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function yt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{o.compressedTexImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Mt(){try{o.texSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Lt(){try{o.texSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Dt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Kt(){try{o.texStorage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{o.texStorage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{o.texImage2D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _e(){try{o.texImage3D.apply(o,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(k){vt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),vt.copy(k))}function Gt(k){xt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),xt.copy(k))}function Ft(k,Ct){let Tt=x.get(Ct);Tt===void 0&&(Tt=new WeakMap,x.set(Ct,Tt));let dt=Tt.get(k);dt===void 0&&(dt=o.getUniformBlockIndex(Ct,k.name),Tt.set(k,dt))}function Nt(k,Ct){const dt=x.get(Ct).get(k);g.get(Ct)!==dt&&(o.uniformBlockBinding(Ct,dt,k.__bindingPointIndex),g.set(Ct,dt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),r===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},X=null,it={},y={},T=new WeakMap,b=[],S=null,_=!1,O=null,L=null,N=null,D=null,z=null,G=null,ct=null,R=new xe(0,0,0),F=0,mt=!1,ut=null,St=null,Y=null,st=null,B=null,vt.set(0,0,o.canvas.width,o.canvas.height),xt.set(0,0,o.canvas.width,o.canvas.height),h.reset(),m.reset(),p.reset()}return{buffers:{color:h,depth:m,stencil:p},enable:Ht,disable:jt,bindFramebuffer:ee,drawBuffers:nt,useProgram:nn,setBlending:Zt,setMaterial:Se,setFlipSided:se,setCullFace:ne,setLineWidth:be,setPolygonOffset:We,setScissorTest:an,activeTexture:U,bindTexture:A,unbindTexture:at,compressedTexImage2D:yt,compressedTexImage3D:_t,texImage2D:Et,texImage3D:_e,updateUBOMapping:Ft,uniformBlockBinding:Nt,texStorage2D:Kt,texStorage3D:ge,texSubImage2D:Mt,texSubImage3D:Lt,compressedTexSubImage2D:At,compressedTexSubImage3D:Dt,scissor:Qt,viewport:Gt,reset:ce}}function Vb(o,e,i,r,l,u,d){const h=l.isWebGL2,m=l.maxTextures,p=l.maxCubemapSize,g=l.maxTextureSize,x=l.maxSamples,v=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,y=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),T=new WeakMap;let b;const S=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(U,A){return _?new OffscreenCanvas(U,A):_c("canvas")}function L(U,A,at,yt){let _t=1;if((U.width>yt||U.height>yt)&&(_t=yt/Math.max(U.width,U.height)),_t<1||A===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const Mt=A?xh:Math.floor,Lt=Mt(_t*U.width),At=Mt(_t*U.height);b===void 0&&(b=O(Lt,At));const Dt=at?O(Lt,At):b;return Dt.width=Lt,Dt.height=At,Dt.getContext("2d").drawImage(U,0,0,Lt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Lt+"x"+At+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function N(U){return $g(U.width)&&$g(U.height)}function D(U){return h?!1:U.wrapS!==pi||U.wrapT!==pi||U.minFilter!==wn&&U.minFilter!==ai}function z(U,A){return U.generateMipmaps&&A&&U.minFilter!==wn&&U.minFilter!==ai}function G(U){o.generateMipmap(U)}function ct(U,A,at,yt,_t=!1){if(h===!1)return A;if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Mt=A;if(A===o.RED&&(at===o.FLOAT&&(Mt=o.R32F),at===o.HALF_FLOAT&&(Mt=o.R16F),at===o.UNSIGNED_BYTE&&(Mt=o.R8)),A===o.RED_INTEGER&&(at===o.UNSIGNED_BYTE&&(Mt=o.R8UI),at===o.UNSIGNED_SHORT&&(Mt=o.R16UI),at===o.UNSIGNED_INT&&(Mt=o.R32UI),at===o.BYTE&&(Mt=o.R8I),at===o.SHORT&&(Mt=o.R16I),at===o.INT&&(Mt=o.R32I)),A===o.RG&&(at===o.FLOAT&&(Mt=o.RG32F),at===o.HALF_FLOAT&&(Mt=o.RG16F),at===o.UNSIGNED_BYTE&&(Mt=o.RG8)),A===o.RGBA){const Lt=_t?dc:Ne.getTransfer(yt);at===o.FLOAT&&(Mt=o.RGBA32F),at===o.HALF_FLOAT&&(Mt=o.RGBA16F),at===o.UNSIGNED_BYTE&&(Mt=Lt===He?o.SRGB8_ALPHA8:o.RGBA8),at===o.UNSIGNED_SHORT_4_4_4_4&&(Mt=o.RGBA4),at===o.UNSIGNED_SHORT_5_5_5_1&&(Mt=o.RGB5_A1)}return(Mt===o.R16F||Mt===o.R32F||Mt===o.RG16F||Mt===o.RG32F||Mt===o.RGBA16F||Mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Mt}function R(U,A,at){return z(U,at)===!0||U.isFramebufferTexture&&U.minFilter!==wn&&U.minFilter!==ai?Math.log2(Math.max(A.width,A.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?A.mipmaps.length:1}function F(U){return U===wn||U===Tg||U===Lf?o.NEAREST:o.LINEAR}function mt(U){const A=U.target;A.removeEventListener("dispose",mt),St(A),A.isVideoTexture&&T.delete(A)}function ut(U){const A=U.target;A.removeEventListener("dispose",ut),st(A)}function St(U){const A=r.get(U);if(A.__webglInit===void 0)return;const at=U.source,yt=S.get(at);if(yt){const _t=yt[A.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&Y(U),Object.keys(yt).length===0&&S.delete(at)}r.remove(U)}function Y(U){const A=r.get(U);o.deleteTexture(A.__webglTexture);const at=U.source,yt=S.get(at);delete yt[A.__cacheKey],d.memory.textures--}function st(U){const A=U.texture,at=r.get(U),yt=r.get(A);if(yt.__webglTexture!==void 0&&(o.deleteTexture(yt.__webglTexture),d.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(at.__webglFramebuffer[_t]))for(let Mt=0;Mt<at.__webglFramebuffer[_t].length;Mt++)o.deleteFramebuffer(at.__webglFramebuffer[_t][Mt]);else o.deleteFramebuffer(at.__webglFramebuffer[_t]);at.__webglDepthbuffer&&o.deleteRenderbuffer(at.__webglDepthbuffer[_t])}else{if(Array.isArray(at.__webglFramebuffer))for(let _t=0;_t<at.__webglFramebuffer.length;_t++)o.deleteFramebuffer(at.__webglFramebuffer[_t]);else o.deleteFramebuffer(at.__webglFramebuffer);if(at.__webglDepthbuffer&&o.deleteRenderbuffer(at.__webglDepthbuffer),at.__webglMultisampledFramebuffer&&o.deleteFramebuffer(at.__webglMultisampledFramebuffer),at.__webglColorRenderbuffer)for(let _t=0;_t<at.__webglColorRenderbuffer.length;_t++)at.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(at.__webglColorRenderbuffer[_t]);at.__webglDepthRenderbuffer&&o.deleteRenderbuffer(at.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let _t=0,Mt=A.length;_t<Mt;_t++){const Lt=r.get(A[_t]);Lt.__webglTexture&&(o.deleteTexture(Lt.__webglTexture),d.memory.textures--),r.remove(A[_t])}r.remove(A),r.remove(U)}let B=0;function W(){B=0}function lt(){const U=B;return U>=m&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+m),B+=1,U}function ft(U){const A=[];return A.push(U.wrapS),A.push(U.wrapT),A.push(U.wrapR||0),A.push(U.magFilter),A.push(U.minFilter),A.push(U.anisotropy),A.push(U.internalFormat),A.push(U.format),A.push(U.type),A.push(U.generateMipmaps),A.push(U.premultiplyAlpha),A.push(U.flipY),A.push(U.unpackAlignment),A.push(U.colorSpace),A.join()}function w(U,A){const at=r.get(U);if(U.isVideoTexture&&We(U),U.isRenderTargetTexture===!1&&U.version>0&&at.__version!==U.version){const yt=U.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(at,U,A);return}}i.bindTexture(o.TEXTURE_2D,at.__webglTexture,o.TEXTURE0+A)}function X(U,A){const at=r.get(U);if(U.version>0&&at.__version!==U.version){Ht(at,U,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,at.__webglTexture,o.TEXTURE0+A)}function it(U,A){const at=r.get(U);if(U.version>0&&at.__version!==U.version){Ht(at,U,A);return}i.bindTexture(o.TEXTURE_3D,at.__webglTexture,o.TEXTURE0+A)}function V(U,A){const at=r.get(U);if(U.version>0&&at.__version!==U.version){jt(at,U,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture,o.TEXTURE0+A)}const $={[mh]:o.REPEAT,[pi]:o.CLAMP_TO_EDGE,[gh]:o.MIRRORED_REPEAT},vt={[wn]:o.NEAREST,[Tg]:o.NEAREST_MIPMAP_NEAREST,[Lf]:o.NEAREST_MIPMAP_LINEAR,[ai]:o.LINEAR,[TS]:o.LINEAR_MIPMAP_NEAREST,[To]:o.LINEAR_MIPMAP_LINEAR},xt={[zS]:o.NEVER,[VS]:o.ALWAYS,[BS]:o.LESS,[rv]:o.LEQUAL,[IS]:o.EQUAL,[GS]:o.GEQUAL,[FS]:o.GREATER,[HS]:o.NOTEQUAL};function Ut(U,A,at){if(at?(o.texParameteri(U,o.TEXTURE_WRAP_S,$[A.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,$[A.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,$[A.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,vt[A.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,vt[A.minFilter])):(o.texParameteri(U,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(U,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(A.wrapS!==pi||A.wrapT!==pi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(U,o.TEXTURE_MAG_FILTER,F(A.magFilter)),o.texParameteri(U,o.TEXTURE_MIN_FILTER,F(A.minFilter)),A.minFilter!==wn&&A.minFilter!==ai&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,xt[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const yt=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===wn||A.minFilter!==Lf&&A.minFilter!==To||A.type===ba&&e.has("OES_texture_float_linear")===!1||h===!1&&A.type===bo&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||r.get(A).__currentAnisotropy)&&(o.texParameterf(U,yt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy)}}function Ot(U,A){let at=!1;U.__webglInit===void 0&&(U.__webglInit=!0,A.addEventListener("dispose",mt));const yt=A.source;let _t=S.get(yt);_t===void 0&&(_t={},S.set(yt,_t));const Mt=ft(A);if(Mt!==U.__cacheKey){_t[Mt]===void 0&&(_t[Mt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,at=!0),_t[Mt].usedTimes++;const Lt=_t[U.__cacheKey];Lt!==void 0&&(_t[U.__cacheKey].usedTimes--,Lt.usedTimes===0&&Y(A)),U.__cacheKey=Mt,U.__webglTexture=_t[Mt].texture}return at}function Ht(U,A,at){let yt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(yt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(yt=o.TEXTURE_3D);const _t=Ot(U,A),Mt=A.source;i.bindTexture(yt,U.__webglTexture,o.TEXTURE0+at);const Lt=r.get(Mt);if(Mt.version!==Lt.__version||_t===!0){i.activeTexture(o.TEXTURE0+at);const At=Ne.getPrimaries(Ne.workingColorSpace),Dt=A.colorSpace===ri?null:Ne.getPrimaries(A.colorSpace),Kt=A.colorSpace===ri||At===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const ge=D(A)&&N(A.image)===!1;let Et=L(A.image,ge,!1,g);Et=an(A,Et);const _e=N(Et)||h,Qt=u.convert(A.format,A.colorSpace);let Gt=u.convert(A.type),Ft=ct(A.internalFormat,Qt,Gt,A.colorSpace,A.isVideoTexture);Ut(yt,A,_e);let Nt;const ce=A.mipmaps,k=h&&A.isVideoTexture!==!0&&Ft!==nv,Ct=Lt.__version===void 0||_t===!0,Tt=R(A,Et,_e);if(A.isDepthTexture)Ft=o.DEPTH_COMPONENT,h?A.type===ba?Ft=o.DEPTH_COMPONENT32F:A.type===Ta?Ft=o.DEPTH_COMPONENT24:A.type===ar?Ft=o.DEPTH24_STENCIL8:Ft=o.DEPTH_COMPONENT16:A.type===ba&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===rr&&Ft===o.DEPTH_COMPONENT&&A.type!==bh&&A.type!==Ta&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=Ta,Gt=u.convert(A.type)),A.format===ds&&Ft===o.DEPTH_COMPONENT&&(Ft=o.DEPTH_STENCIL,A.type!==ar&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=ar,Gt=u.convert(A.type))),Ct&&(k?i.texStorage2D(o.TEXTURE_2D,1,Ft,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Ft,Et.width,Et.height,0,Qt,Gt,null));else if(A.isDataTexture)if(ce.length>0&&_e){k&&Ct&&i.texStorage2D(o.TEXTURE_2D,Tt,Ft,ce[0].width,ce[0].height);for(let dt=0,bt=ce.length;dt<bt;dt++)Nt=ce[dt],k?i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Nt.width,Nt.height,Qt,Gt,Nt.data):i.texImage2D(o.TEXTURE_2D,dt,Ft,Nt.width,Nt.height,0,Qt,Gt,Nt.data);A.generateMipmaps=!1}else k?(Ct&&i.texStorage2D(o.TEXTURE_2D,Tt,Ft,Et.width,Et.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,Et.width,Et.height,Qt,Gt,Et.data)):i.texImage2D(o.TEXTURE_2D,0,Ft,Et.width,Et.height,0,Qt,Gt,Et.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){k&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Ft,ce[0].width,ce[0].height,Et.depth);for(let dt=0,bt=ce.length;dt<bt;dt++)Nt=ce[dt],A.format!==mi?Qt!==null?k?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Nt.width,Nt.height,Et.depth,Qt,Nt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,dt,Ft,Nt.width,Nt.height,Et.depth,0,Nt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?i.texSubImage3D(o.TEXTURE_2D_ARRAY,dt,0,0,0,Nt.width,Nt.height,Et.depth,Qt,Gt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,dt,Ft,Nt.width,Nt.height,Et.depth,0,Qt,Gt,Nt.data)}else{k&&Ct&&i.texStorage2D(o.TEXTURE_2D,Tt,Ft,ce[0].width,ce[0].height);for(let dt=0,bt=ce.length;dt<bt;dt++)Nt=ce[dt],A.format!==mi?Qt!==null?k?i.compressedTexSubImage2D(o.TEXTURE_2D,dt,0,0,Nt.width,Nt.height,Qt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,dt,Ft,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Nt.width,Nt.height,Qt,Gt,Nt.data):i.texImage2D(o.TEXTURE_2D,dt,Ft,Nt.width,Nt.height,0,Qt,Gt,Nt.data)}else if(A.isDataArrayTexture)k?(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Ft,Et.width,Et.height,Et.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Qt,Gt,Et.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,Et.width,Et.height,Et.depth,0,Qt,Gt,Et.data);else if(A.isData3DTexture)k?(Ct&&i.texStorage3D(o.TEXTURE_3D,Tt,Ft,Et.width,Et.height,Et.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Qt,Gt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Ft,Et.width,Et.height,Et.depth,0,Qt,Gt,Et.data);else if(A.isFramebufferTexture){if(Ct)if(k)i.texStorage2D(o.TEXTURE_2D,Tt,Ft,Et.width,Et.height);else{let dt=Et.width,bt=Et.height;for(let Vt=0;Vt<Tt;Vt++)i.texImage2D(o.TEXTURE_2D,Vt,Ft,dt,bt,0,Qt,Gt,null),dt>>=1,bt>>=1}}else if(ce.length>0&&_e){k&&Ct&&i.texStorage2D(o.TEXTURE_2D,Tt,Ft,ce[0].width,ce[0].height);for(let dt=0,bt=ce.length;dt<bt;dt++)Nt=ce[dt],k?i.texSubImage2D(o.TEXTURE_2D,dt,0,0,Qt,Gt,Nt):i.texImage2D(o.TEXTURE_2D,dt,Ft,Qt,Gt,Nt);A.generateMipmaps=!1}else k?(Ct&&i.texStorage2D(o.TEXTURE_2D,Tt,Ft,Et.width,Et.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,Qt,Gt,Et)):i.texImage2D(o.TEXTURE_2D,0,Ft,Qt,Gt,Et);z(A,_e)&&G(yt),Lt.__version=Mt.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function jt(U,A,at){if(A.image.length!==6)return;const yt=Ot(U,A),_t=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+at);const Mt=r.get(_t);if(_t.version!==Mt.__version||yt===!0){i.activeTexture(o.TEXTURE0+at);const Lt=Ne.getPrimaries(Ne.workingColorSpace),At=A.colorSpace===ri?null:Ne.getPrimaries(A.colorSpace),Dt=A.colorSpace===ri||Lt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Kt=A.isCompressedTexture||A.image[0].isCompressedTexture,ge=A.image[0]&&A.image[0].isDataTexture,Et=[];for(let dt=0;dt<6;dt++)!Kt&&!ge?Et[dt]=L(A.image[dt],!1,!0,p):Et[dt]=ge?A.image[dt].image:A.image[dt],Et[dt]=an(A,Et[dt]);const _e=Et[0],Qt=N(_e)||h,Gt=u.convert(A.format,A.colorSpace),Ft=u.convert(A.type),Nt=ct(A.internalFormat,Gt,Ft,A.colorSpace),ce=h&&A.isVideoTexture!==!0,k=Mt.__version===void 0||yt===!0;let Ct=R(A,_e,Qt);Ut(o.TEXTURE_CUBE_MAP,A,Qt);let Tt;if(Kt){ce&&k&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,Nt,_e.width,_e.height);for(let dt=0;dt<6;dt++){Tt=Et[dt].mipmaps;for(let bt=0;bt<Tt.length;bt++){const Vt=Tt[bt];A.format!==mi?Gt!==null?ce?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,Vt.width,Vt.height,Gt,Vt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,Nt,Vt.width,Vt.height,0,Vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,Vt.width,Vt.height,Gt,Ft,Vt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,Nt,Vt.width,Vt.height,0,Gt,Ft,Vt.data)}}}else{Tt=A.mipmaps,ce&&k&&(Tt.length>0&&Ct++,i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,Nt,Et[0].width,Et[0].height));for(let dt=0;dt<6;dt++)if(ge){ce?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Et[dt].width,Et[dt].height,Gt,Ft,Et[dt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Nt,Et[dt].width,Et[dt].height,0,Gt,Ft,Et[dt].data);for(let bt=0;bt<Tt.length;bt++){const de=Tt[bt].image[dt].image;ce?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,de.width,de.height,Gt,Ft,de.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,Nt,de.width,de.height,0,Gt,Ft,de.data)}}else{ce?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Gt,Ft,Et[dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,Nt,Gt,Ft,Et[dt]);for(let bt=0;bt<Tt.length;bt++){const Vt=Tt[bt];ce?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,Gt,Ft,Vt.image[dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,Nt,Gt,Ft,Vt.image[dt])}}}z(A,Qt)&&G(o.TEXTURE_CUBE_MAP),Mt.__version=_t.version,A.onUpdate&&A.onUpdate(A)}U.__version=A.version}function ee(U,A,at,yt,_t,Mt){const Lt=u.convert(at.format,at.colorSpace),At=u.convert(at.type),Dt=ct(at.internalFormat,Lt,At,at.colorSpace);if(!r.get(A).__hasExternalTextures){const ge=Math.max(1,A.width>>Mt),Et=Math.max(1,A.height>>Mt);_t===o.TEXTURE_3D||_t===o.TEXTURE_2D_ARRAY?i.texImage3D(_t,Mt,Dt,ge,Et,A.depth,0,Lt,At,null):i.texImage2D(_t,Mt,Dt,ge,Et,0,Lt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),be(A)?v.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,yt,_t,r.get(at).__webglTexture,0,ne(A)):(_t===o.TEXTURE_2D||_t>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,yt,_t,r.get(at).__webglTexture,Mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function nt(U,A,at){if(o.bindRenderbuffer(o.RENDERBUFFER,U),A.depthBuffer&&!A.stencilBuffer){let yt=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if(at||be(A)){const _t=A.depthTexture;_t&&_t.isDepthTexture&&(_t.type===ba?yt=o.DEPTH_COMPONENT32F:_t.type===Ta&&(yt=o.DEPTH_COMPONENT24));const Mt=ne(A);be(A)?v.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Mt,yt,A.width,A.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,Mt,yt,A.width,A.height)}else o.renderbufferStorage(o.RENDERBUFFER,yt,A.width,A.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(A.depthBuffer&&A.stencilBuffer){const yt=ne(A);at&&be(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,yt,o.DEPTH24_STENCIL8,A.width,A.height):be(A)?v.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,yt,o.DEPTH24_STENCIL8,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const yt=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let _t=0;_t<yt.length;_t++){const Mt=yt[_t],Lt=u.convert(Mt.format,Mt.colorSpace),At=u.convert(Mt.type),Dt=ct(Mt.internalFormat,Lt,At,Mt.colorSpace),Kt=ne(A);at&&be(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Dt,A.width,A.height):be(A)?v.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,Dt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Dt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function nn(U,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),w(A.depthTexture,0);const yt=r.get(A.depthTexture).__webglTexture,_t=ne(A);if(A.depthTexture.format===rr)be(A)?v.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(A.depthTexture.format===ds)be(A)?v.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function It(U){const A=r.get(U),at=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!A.__autoAllocateDepthBuffer){if(at)throw new Error("target.depthTexture not supported in Cube render targets");nn(A.__webglFramebuffer,U)}else if(at){A.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[yt]),A.__webglDepthbuffer[yt]=o.createRenderbuffer(),nt(A.__webglDepthbuffer[yt],U,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=o.createRenderbuffer(),nt(A.__webglDepthbuffer,U,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function le(U,A,at){const yt=r.get(U);A!==void 0&&ee(yt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),at!==void 0&&It(U)}function Zt(U){const A=U.texture,at=r.get(U),yt=r.get(A);U.addEventListener("dispose",ut),U.isWebGLMultipleRenderTargets!==!0&&(yt.__webglTexture===void 0&&(yt.__webglTexture=o.createTexture()),yt.__version=A.version,d.memory.textures++);const _t=U.isWebGLCubeRenderTarget===!0,Mt=U.isWebGLMultipleRenderTargets===!0,Lt=N(U)||h;if(_t){at.__webglFramebuffer=[];for(let At=0;At<6;At++)if(h&&A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer[At]=[];for(let Dt=0;Dt<A.mipmaps.length;Dt++)at.__webglFramebuffer[At][Dt]=o.createFramebuffer()}else at.__webglFramebuffer[At]=o.createFramebuffer()}else{if(h&&A.mipmaps&&A.mipmaps.length>0){at.__webglFramebuffer=[];for(let At=0;At<A.mipmaps.length;At++)at.__webglFramebuffer[At]=o.createFramebuffer()}else at.__webglFramebuffer=o.createFramebuffer();if(Mt)if(l.drawBuffers){const At=U.texture;for(let Dt=0,Kt=At.length;Dt<Kt;Dt++){const ge=r.get(At[Dt]);ge.__webglTexture===void 0&&(ge.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&U.samples>0&&be(U)===!1){const At=Mt?A:[A];at.__webglMultisampledFramebuffer=o.createFramebuffer(),at.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,at.__webglMultisampledFramebuffer);for(let Dt=0;Dt<At.length;Dt++){const Kt=At[Dt];at.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,at.__webglColorRenderbuffer[Dt]);const ge=u.convert(Kt.format,Kt.colorSpace),Et=u.convert(Kt.type),_e=ct(Kt.internalFormat,ge,Et,Kt.colorSpace,U.isXRRenderTarget===!0),Qt=ne(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,_e,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,at.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(at.__webglDepthRenderbuffer=o.createRenderbuffer(),nt(at.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,yt.__webglTexture),Ut(o.TEXTURE_CUBE_MAP,A,Lt);for(let At=0;At<6;At++)if(h&&A.mipmaps&&A.mipmaps.length>0)for(let Dt=0;Dt<A.mipmaps.length;Dt++)ee(at.__webglFramebuffer[At][Dt],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Dt);else ee(at.__webglFramebuffer[At],U,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);z(A,Lt)&&G(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Mt){const At=U.texture;for(let Dt=0,Kt=At.length;Dt<Kt;Dt++){const ge=At[Dt],Et=r.get(ge);i.bindTexture(o.TEXTURE_2D,Et.__webglTexture),Ut(o.TEXTURE_2D,ge,Lt),ee(at.__webglFramebuffer,U,ge,o.COLOR_ATTACHMENT0+Dt,o.TEXTURE_2D,0),z(ge,Lt)&&G(o.TEXTURE_2D)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(h?At=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(At,yt.__webglTexture),Ut(At,A,Lt),h&&A.mipmaps&&A.mipmaps.length>0)for(let Dt=0;Dt<A.mipmaps.length;Dt++)ee(at.__webglFramebuffer[Dt],U,A,o.COLOR_ATTACHMENT0,At,Dt);else ee(at.__webglFramebuffer,U,A,o.COLOR_ATTACHMENT0,At,0);z(A,Lt)&&G(At),i.unbindTexture()}U.depthBuffer&&It(U)}function Se(U){const A=N(U)||h,at=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let yt=0,_t=at.length;yt<_t;yt++){const Mt=at[yt];if(z(Mt,A)){const Lt=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,At=r.get(Mt).__webglTexture;i.bindTexture(Lt,At),G(Lt),i.unbindTexture()}}}function se(U){if(h&&U.samples>0&&be(U)===!1){const A=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],at=U.width,yt=U.height;let _t=o.COLOR_BUFFER_BIT;const Mt=[],Lt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=r.get(U),Dt=U.isWebGLMultipleRenderTargets===!0;if(Dt)for(let Kt=0;Kt<A.length;Kt++)i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Kt=0;Kt<A.length;Kt++){Mt.push(o.COLOR_ATTACHMENT0+Kt),U.depthBuffer&&Mt.push(Lt);const ge=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(ge===!1&&(U.depthBuffer&&(_t|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&(_t|=o.STENCIL_BUFFER_BIT)),Dt&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,At.__webglColorRenderbuffer[Kt]),ge===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Lt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Lt])),Dt){const Et=r.get(A[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,at,yt,0,0,at,yt,_t,o.NEAREST),y&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Mt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Kt=0;Kt<A.length;Kt++){i.bindFramebuffer(o.FRAMEBUFFER,At.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,At.__webglColorRenderbuffer[Kt]);const ge=r.get(A[Kt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,At.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,ge,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function ne(U){return Math.min(x,U.samples)}function be(U){const A=r.get(U);return h&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function We(U){const A=d.render.frame;T.get(U)!==A&&(T.set(U,A),U.update())}function an(U,A){const at=U.colorSpace,yt=U.format,_t=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===_h||at!==ji&&at!==ri&&(Ne.getTransfer(at)===He?h===!1?e.has("EXT_sRGB")===!0&&yt===mi?(U.format=_h,U.minFilter=ai,U.generateMipmaps=!1):A=ov.sRGBToLinear(A):(yt!==mi||_t!==wa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",at)),A}this.allocateTextureUnit=lt,this.resetTextureUnits=W,this.setTexture2D=w,this.setTexture2DArray=X,this.setTexture3D=it,this.setTextureCube=V,this.rebindTextures=le,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=be}function kb(o,e,i){const r=i.isWebGL2;function l(u,d=ri){let h;const m=Ne.getTransfer(d);if(u===wa)return o.UNSIGNED_BYTE;if(u===Q_)return o.UNSIGNED_SHORT_4_4_4_4;if(u===J_)return o.UNSIGNED_SHORT_5_5_5_1;if(u===bS)return o.BYTE;if(u===AS)return o.SHORT;if(u===bh)return o.UNSIGNED_SHORT;if(u===K_)return o.INT;if(u===Ta)return o.UNSIGNED_INT;if(u===ba)return o.FLOAT;if(u===bo)return r?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===RS)return o.ALPHA;if(u===mi)return o.RGBA;if(u===wS)return o.LUMINANCE;if(u===CS)return o.LUMINANCE_ALPHA;if(u===rr)return o.DEPTH_COMPONENT;if(u===ds)return o.DEPTH_STENCIL;if(u===_h)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===LS)return o.RED;if(u===$_)return o.RED_INTEGER;if(u===DS)return o.RG;if(u===tv)return o.RG_INTEGER;if(u===ev)return o.RGBA_INTEGER;if(u===Df||u===Uf||u===Nf||u===Of)if(m===He)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===Df)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===Uf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===Nf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Of)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===Df)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===Uf)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===Nf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Of)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===bg||u===Ag||u===Rg||u===wg)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===bg)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Ag)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Rg)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===wg)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===nv)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Cg||u===Lg)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===Cg)return m===He?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===Lg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Dg||u===Ug||u===Ng||u===Og||u===Pg||u===zg||u===Bg||u===Ig||u===Fg||u===Hg||u===Gg||u===Vg||u===kg||u===Wg)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===Dg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===Ug)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Ng)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Og)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===Pg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===zg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Bg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Ig)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Fg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Hg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Gg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===Vg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===kg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Wg)return m===He?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Pf||u===Xg||u===jg)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===Pf)return m===He?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===Xg)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===jg)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===US||u===qg||u===Yg||u===Zg)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===Pf)return h.COMPRESSED_RED_RGTC1_EXT;if(u===qg)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===Yg)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===Zg)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===ar?r?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class Wb extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class oc extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Xb={type:"move"};class sh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const b of e.hand.values()){const S=i.getJointPose(b,r),_=this._getHandJoint(p,b);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=g.position.distanceTo(x.position),y=.02,T=.005;p.inputState.pinching&&v>y+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=y-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Xb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new oc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class jb extends ms{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,g=null,x=null,v=null,y=null,T=null;const b=i.getContextAttributes();let S=null,_=null;const O=[],L=[],N=new Te;let D=null;const z=new Pn;z.layers.enable(1),z.viewport=new Ve;const G=new Pn;G.layers.enable(2),G.viewport=new Ve;const ct=[z,G],R=new Wb;R.layers.enable(1),R.layers.enable(2);let F=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let $=O[V];return $===void 0&&($=new sh,O[V]=$),$.getTargetRaySpace()},this.getControllerGrip=function(V){let $=O[V];return $===void 0&&($=new sh,O[V]=$),$.getGripSpace()},this.getHand=function(V){let $=O[V];return $===void 0&&($=new sh,O[V]=$),$.getHandSpace()};function ut(V){const $=L.indexOf(V.inputSource);if($===-1)return;const vt=O[$];vt!==void 0&&(vt.update(V.inputSource,V.frame,p||d),vt.dispatchEvent({type:V.type,data:V.inputSource}))}function St(){l.removeEventListener("select",ut),l.removeEventListener("selectstart",ut),l.removeEventListener("selectend",ut),l.removeEventListener("squeeze",ut),l.removeEventListener("squeezestart",ut),l.removeEventListener("squeezeend",ut),l.removeEventListener("end",St),l.removeEventListener("inputsourceschange",Y);for(let V=0;V<O.length;V++){const $=L[V];$!==null&&(L[V]=null,O[V].disconnect($))}F=null,mt=null,e.setRenderTarget(S),y=null,v=null,x=null,l=null,_=null,it.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){u=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){h=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",ut),l.addEventListener("selectstart",ut),l.addEventListener("selectend",ut),l.addEventListener("squeeze",ut),l.addEventListener("squeezestart",ut),l.addEventListener("squeezeend",ut),l.addEventListener("end",St),l.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await i.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(N),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:l.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,$),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),_=new or(y.framebufferWidth,y.framebufferHeight,{format:mi,type:wa,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let $=null,vt=null,xt=null;b.depth&&(xt=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,$=b.stencil?ds:rr,vt=b.stencil?ar:Ta);const Ut={colorFormat:i.RGBA8,depthFormat:xt,scaleFactor:u};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(Ut),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),_=new or(v.textureWidth,v.textureHeight,{format:mi,type:wa,depthTexture:new xv(v.textureWidth,v.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const Ot=e.properties.get(_);Ot.__ignoreDepthValues=v.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),it.setContext(l),it.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function Y(V){for(let $=0;$<V.removed.length;$++){const vt=V.removed[$],xt=L.indexOf(vt);xt>=0&&(L[xt]=null,O[xt].disconnect(vt))}for(let $=0;$<V.added.length;$++){const vt=V.added[$];let xt=L.indexOf(vt);if(xt===-1){for(let Ot=0;Ot<O.length;Ot++)if(Ot>=L.length){L.push(vt),xt=Ot;break}else if(L[Ot]===null){L[Ot]=vt,xt=Ot;break}if(xt===-1)break}const Ut=O[xt];Ut&&Ut.connect(vt)}}const st=new Z,B=new Z;function W(V,$,vt){st.setFromMatrixPosition($.matrixWorld),B.setFromMatrixPosition(vt.matrixWorld);const xt=st.distanceTo(B),Ut=$.projectionMatrix.elements,Ot=vt.projectionMatrix.elements,Ht=Ut[14]/(Ut[10]-1),jt=Ut[14]/(Ut[10]+1),ee=(Ut[9]+1)/Ut[5],nt=(Ut[9]-1)/Ut[5],nn=(Ut[8]-1)/Ut[0],It=(Ot[8]+1)/Ot[0],le=Ht*nn,Zt=Ht*It,Se=xt/(-nn+It),se=Se*-nn;$.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(se),V.translateZ(Se),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ne=Ht+Se,be=jt+Se,We=le-se,an=Zt+(xt-se),U=ee*jt/be*ne,A=nt*jt/be*ne;V.projectionMatrix.makePerspective(We,an,U,A,ne,be),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function lt(V,$){$===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices($.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;R.near=G.near=z.near=V.near,R.far=G.far=z.far=V.far,(F!==R.near||mt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),F=R.near,mt=R.far);const $=V.parent,vt=R.cameras;lt(R,$);for(let xt=0;xt<vt.length;xt++)lt(vt[xt],$);vt.length===2?W(R,z,G):R.projectionMatrix.copy(z.projectionMatrix),ft(V,R,$)};function ft(V,$,vt){vt===null?V.matrix.copy($.matrixWorld):(V.matrix.copy(vt.matrixWorld),V.matrix.invert(),V.matrix.multiply($.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy($.projectionMatrix),V.projectionMatrixInverse.copy($.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=vh*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&y===null))return m},this.setFoveation=function(V){m=V,v!==null&&(v.fixedFoveation=V),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=V)};let w=null;function X(V,$){if(g=$.getViewerPose(p||d),T=$,g!==null){const vt=g.views;y!==null&&(e.setRenderTargetFramebuffer(_,y.framebuffer),e.setRenderTarget(_));let xt=!1;vt.length!==R.cameras.length&&(R.cameras.length=0,xt=!0);for(let Ut=0;Ut<vt.length;Ut++){const Ot=vt[Ut];let Ht=null;if(y!==null)Ht=y.getViewport(Ot);else{const ee=x.getViewSubImage(v,Ot);Ht=ee.viewport,Ut===0&&(e.setRenderTargetTextures(_,ee.colorTexture,v.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(_))}let jt=ct[Ut];jt===void 0&&(jt=new Pn,jt.layers.enable(Ut),jt.viewport=new Ve,ct[Ut]=jt),jt.matrix.fromArray(Ot.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Ot.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Ut===0&&(R.matrix.copy(jt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xt===!0&&R.cameras.push(jt)}}for(let vt=0;vt<O.length;vt++){const xt=L[vt],Ut=O[vt];xt!==null&&Ut!==void 0&&Ut.update(xt,$,p||d)}w&&w(V,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),T=null}const it=new vv;it.setAnimationLoop(X),this.setAnimationLoop=function(V){w=V},this.dispose=function(){}}}function qb(o,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,mv(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,O,L,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),x(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,N)):_.isMeshMatcapMaterial?(u(S,_),T(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),b(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,O,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===zn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===zn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const O=e.get(_).envMap;if(O&&(S.envMap.value=O,S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap){S.lightMap.value=_.lightMap;const L=o._useLegacyLights===!0?Math.PI:1;S.lightMapIntensity.value=_.lightMapIntensity*L,i(_.lightMap,S.lightMapTransform)}_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,O,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*O,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),e.get(_).envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,O){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===zn&&S.clearcoatNormalScale.value.negate())),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function b(S,_){const O=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function Yb(o,e,i,r){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(O,L){const N=L.program;r.uniformBlockBinding(O,N)}function p(O,L){let N=l[O.id];N===void 0&&(T(O),N=g(O),l[O.id]=N,O.addEventListener("dispose",S));const D=L.program;r.updateUBOMapping(O,D);const z=e.render.frame;u[O.id]!==z&&(v(O),u[O.id]=z)}function g(O){const L=x();O.__bindingPointIndex=L;const N=o.createBuffer(),D=O.__size,z=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,D,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,N),N}function x(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const L=l[O.id],N=O.uniforms,D=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let z=0,G=N.length;z<G;z++){const ct=N[z];if(y(ct,z,D)===!0){const R=ct.__offset,F=Array.isArray(ct.value)?ct.value:[ct.value];let mt=0;for(let ut=0;ut<F.length;ut++){const St=F[ut],Y=b(St);typeof St=="number"?(ct.__data[0]=St,o.bufferSubData(o.UNIFORM_BUFFER,R+mt,ct.__data)):St.isMatrix3?(ct.__data[0]=St.elements[0],ct.__data[1]=St.elements[1],ct.__data[2]=St.elements[2],ct.__data[3]=St.elements[0],ct.__data[4]=St.elements[3],ct.__data[5]=St.elements[4],ct.__data[6]=St.elements[5],ct.__data[7]=St.elements[0],ct.__data[8]=St.elements[6],ct.__data[9]=St.elements[7],ct.__data[10]=St.elements[8],ct.__data[11]=St.elements[0]):(St.toArray(ct.__data,mt),mt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,R,ct.__data)}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(O,L,N){const D=O.value;if(N[L]===void 0){if(typeof D=="number")N[L]=D;else{const z=Array.isArray(D)?D:[D],G=[];for(let ct=0;ct<z.length;ct++)G.push(z[ct].clone());N[L]=G}return!0}else if(typeof D=="number"){if(N[L]!==D)return N[L]=D,!0}else{const z=Array.isArray(N[L])?N[L]:[N[L]],G=Array.isArray(D)?D:[D];for(let ct=0;ct<z.length;ct++){const R=z[ct];if(R.equals(G[ct])===!1)return R.copy(G[ct]),!0}}return!1}function T(O){const L=O.uniforms;let N=0;const D=16;let z=0;for(let G=0,ct=L.length;G<ct;G++){const R=L[G],F={boundary:0,storage:0},mt=Array.isArray(R.value)?R.value:[R.value];for(let ut=0,St=mt.length;ut<St;ut++){const Y=mt[ut],st=b(Y);F.boundary+=st.boundary,F.storage+=st.storage}if(R.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=N,G>0){z=N%D;const ut=D-z;z!==0&&ut-F.boundary<0&&(N+=D-z,R.__offset=N)}N+=F.storage}return z=N%D,z>0&&(N+=D-z),O.__size=N,O.__cache={},this}function b(O){const L={boundary:0,storage:0};return typeof O=="number"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function S(O){const L=O.target;L.removeEventListener("dispose",S);const N=d.indexOf(L.__bindingPointIndex);d.splice(N,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete u[L.id]}function _(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}class Dh{constructor(e={}){const{canvas:i=WS(),context:r=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1}=e;this.isWebGLRenderer=!0;let v;r!==null?v=r.getContextAttributes().alpha:v=d;const y=new Uint32Array(4),T=new Int32Array(4);let b=null,S=null;const _=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xn,this._useLegacyLights=!1,this.toneMapping=Ra,this.toneMappingExposure=1;const L=this;let N=!1,D=0,z=0,G=null,ct=-1,R=null;const F=new Ve,mt=new Ve;let ut=null;const St=new xe(0);let Y=0,st=i.width,B=i.height,W=1,lt=null,ft=null;const w=new Ve(0,0,st,B),X=new Ve(0,0,st,B);let it=!1;const V=new wh;let $=!1,vt=!1,xt=null;const Ut=new qe,Ot=new Te,Ht=new Z,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return G===null?W:1}let nt=r;function nn(C,j){for(let rt=0;rt<C.length;rt++){const ot=C[rt],tt=i.getContext(ot,j);if(tt!==null)return tt}return null}try{const C={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Eh}`),i.addEventListener("webglcontextlost",ce,!1),i.addEventListener("webglcontextrestored",k,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),nt===null){const j=["webgl2","webgl","experimental-webgl"];if(L.isWebGL1Renderer===!0&&j.shift(),nt=nn(j,C),nt===null)throw nn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&nt instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),nt.getShaderPrecisionFormat===void 0&&(nt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let It,le,Zt,Se,se,ne,be,We,an,U,A,at,yt,_t,Mt,Lt,At,Dt,Kt,ge,Et,_e,Qt,Gt;function Ft(){It=new rT(nt),le=new JE(nt,It,e),It.init(le),_e=new kb(nt,It,le),Zt=new Gb(nt,It,le),Se=new lT(nt),se=new Rb,ne=new Vb(nt,It,Zt,se,le,_e,Se),be=new tT(L),We=new aT(L),an=new mM(nt,le),Qt=new KE(nt,It,an,le),U=new sT(nt,an,Se,Qt),A=new hT(nt,U,an,Se),Kt=new fT(nt,le,ne),Lt=new $E(se),at=new Ab(L,be,We,It,le,Qt,Lt),yt=new qb(L,se),_t=new Cb,Mt=new Pb(It,le),Dt=new ZE(L,be,We,Zt,A,v,m),At=new Hb(L,A,le),Gt=new Yb(nt,Se,le,Zt),ge=new QE(nt,It,Se,le),Et=new oT(nt,It,Se,le),Se.programs=at.programs,L.capabilities=le,L.extensions=It,L.properties=se,L.renderLists=_t,L.shadowMap=At,L.state=Zt,L.info=Se}Ft();const Nt=new jb(L,nt);this.xr=Nt,this.getContext=function(){return nt},this.getContextAttributes=function(){return nt.getContextAttributes()},this.forceContextLoss=function(){const C=It.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=It.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(st,B,!1))},this.getSize=function(C){return C.set(st,B)},this.setSize=function(C,j,rt=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}st=C,B=j,i.width=Math.floor(C*W),i.height=Math.floor(j*W),rt===!0&&(i.style.width=C+"px",i.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(st*W,B*W).floor()},this.setDrawingBufferSize=function(C,j,rt){st=C,B=j,W=rt,i.width=Math.floor(C*rt),i.height=Math.floor(j*rt),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(w)},this.setViewport=function(C,j,rt,ot){C.isVector4?w.set(C.x,C.y,C.z,C.w):w.set(C,j,rt,ot),Zt.viewport(F.copy(w).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,j,rt,ot){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,j,rt,ot),Zt.scissor(mt.copy(X).multiplyScalar(W).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(C){Zt.setScissorTest(it=C)},this.setOpaqueSort=function(C){lt=C},this.setTransparentSort=function(C){ft=C},this.getClearColor=function(C){return C.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(C=!0,j=!0,rt=!0){let ot=0;if(C){let tt=!1;if(G!==null){const wt=G.texture.format;tt=wt===ev||wt===tv||wt===$_}if(tt){const wt=G.texture.type,zt=wt===wa||wt===Ta||wt===bh||wt===ar||wt===Q_||wt===J_,kt=Dt.getClearColor(),qt=Dt.getClearAlpha(),ae=kt.r,Jt=kt.g,te=kt.b;zt?(y[0]=ae,y[1]=Jt,y[2]=te,y[3]=qt,nt.clearBufferuiv(nt.COLOR,0,y)):(T[0]=ae,T[1]=Jt,T[2]=te,T[3]=qt,nt.clearBufferiv(nt.COLOR,0,T))}else ot|=nt.COLOR_BUFFER_BIT}j&&(ot|=nt.DEPTH_BUFFER_BIT),rt&&(ot|=nt.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ce,!1),i.removeEventListener("webglcontextrestored",k,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),_t.dispose(),Mt.dispose(),se.dispose(),be.dispose(),We.dispose(),A.dispose(),Qt.dispose(),Gt.dispose(),at.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",pn),Nt.removeEventListener("sessionend",ve),xt&&(xt.dispose(),xt=null),ye.stop()};function ce(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=Se.autoReset,j=At.enabled,rt=At.autoUpdate,ot=At.needsUpdate,tt=At.type;Ft(),Se.autoReset=C,At.enabled=j,At.autoUpdate=rt,At.needsUpdate=ot,At.type=tt}function Ct(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Tt(C){const j=C.target;j.removeEventListener("dispose",Tt),dt(j)}function dt(C){bt(C),se.remove(C)}function bt(C){const j=se.get(C).programs;j!==void 0&&(j.forEach(function(rt){at.releaseProgram(rt)}),C.isShaderMaterial&&at.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,rt,ot,tt,wt){j===null&&(j=jt);const zt=tt.isMesh&&tt.matrixWorld.determinant()<0,kt=Yi(C,j,rt,ot,tt);Zt.setMaterial(ot,zt);let qt=rt.index,ae=1;if(ot.wireframe===!0){if(qt=U.getWireframeAttribute(rt),qt===void 0)return;ae=2}const Jt=rt.drawRange,te=rt.attributes.position;let Ae=Jt.start*ae,mn=(Jt.start+Jt.count)*ae;wt!==null&&(Ae=Math.max(Ae,wt.start*ae),mn=Math.min(mn,(wt.start+wt.count)*ae)),qt!==null?(Ae=Math.max(Ae,0),mn=Math.min(mn,qt.count)):te!=null&&(Ae=Math.max(Ae,0),mn=Math.min(mn,te.count));const Ze=mn-Ae;if(Ze<0||Ze===1/0)return;Qt.setup(tt,ot,kt,rt,qt);let Sn,Oe=ge;if(qt!==null&&(Sn=an.get(qt),Oe=Et,Oe.setIndex(Sn)),tt.isMesh)ot.wireframe===!0?(Zt.setLineWidth(ot.wireframeLinewidth*ee()),Oe.setMode(nt.LINES)):Oe.setMode(nt.TRIANGLES);else if(tt.isLine){let ie=ot.linewidth;ie===void 0&&(ie=1),Zt.setLineWidth(ie*ee()),tt.isLineSegments?Oe.setMode(nt.LINES):tt.isLineLoop?Oe.setMode(nt.LINE_LOOP):Oe.setMode(nt.LINE_STRIP)}else tt.isPoints?Oe.setMode(nt.POINTS):tt.isSprite&&Oe.setMode(nt.TRIANGLES);if(tt.isBatchedMesh)Oe.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)Oe.renderInstances(Ae,Ze,tt.count);else if(rt.isInstancedBufferGeometry){const ie=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,vs=Math.min(rt.instanceCount,ie);Oe.renderInstances(Ae,Ze,vs)}else Oe.render(Ae,Ze)};function Vt(C,j,rt){C.transparent===!0&&C.side===ki&&C.forceSinglePass===!1?(C.side=zn,C.needsUpdate=!0,La(C,j,rt),C.side=Ca,C.needsUpdate=!0,La(C,j,rt),C.side=ki):La(C,j,rt)}this.compile=function(C,j,rt=null){rt===null&&(rt=C),S=Mt.get(rt),S.init(),O.push(S),rt.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(S.pushLight(tt),tt.castShadow&&S.pushShadow(tt))}),C!==rt&&C.traverseVisible(function(tt){tt.isLight&&tt.layers.test(j.layers)&&(S.pushLight(tt),tt.castShadow&&S.pushShadow(tt))}),S.setupLights(L._useLegacyLights);const ot=new Set;return C.traverse(function(tt){const wt=tt.material;if(wt)if(Array.isArray(wt))for(let zt=0;zt<wt.length;zt++){const kt=wt[zt];Vt(kt,rt,tt),ot.add(kt)}else Vt(wt,rt,tt),ot.add(wt)}),O.pop(),S=null,ot},this.compileAsync=function(C,j,rt=null){const ot=this.compile(C,j,rt);return new Promise(tt=>{function wt(){if(ot.forEach(function(zt){se.get(zt).currentProgram.isReady()&&ot.delete(zt)}),ot.size===0){tt(C);return}setTimeout(wt,10)}It.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let de=null;function Ye(C){de&&de(C)}function pn(){ye.stop()}function ve(){ye.start()}const ye=new vv;ye.setAnimationLoop(Ye),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(C){de=C,Nt.setAnimationLoop(C),C===null?ye.stop():ye.start()},Nt.addEventListener("sessionstart",pn),Nt.addEventListener("sessionend",ve),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(j),j=Nt.getCamera()),C.isScene===!0&&C.onBeforeRender(L,C,j,G),S=Mt.get(C,O.length),S.init(),O.push(S),Ut.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),V.setFromProjectionMatrix(Ut),vt=this.localClippingEnabled,$=Lt.init(this.clippingPlanes,vt),b=_t.get(C,_.length),b.init(),_.push(b),Be(C,j,0,L.sortObjects),b.finish(),L.sortObjects===!0&&b.sort(lt,ft),this.info.render.frame++,$===!0&&Lt.beginShadows();const rt=S.state.shadowsArray;if(At.render(rt,C,j),$===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Dt.render(b,C),S.setupLights(L._useLegacyLights),j.isArrayCamera){const ot=j.cameras;for(let tt=0,wt=ot.length;tt<wt;tt++){const zt=ot[tt];yi(b,C,zt,zt.viewport)}}else yi(b,C,j);G!==null&&(ne.updateMultisampleRenderTarget(G),ne.updateRenderTargetMipmap(G)),C.isScene===!0&&C.onAfterRender(L,C,j),Qt.resetDefaultState(),ct=-1,R=null,O.pop(),O.length>0?S=O[O.length-1]:S=null,_.pop(),_.length>0?b=_[_.length-1]:b=null};function Be(C,j,rt,ot){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)rt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)S.pushLight(C),C.castShadow&&S.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||V.intersectsSprite(C)){ot&&Ht.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ut);const zt=A.update(C),kt=C.material;kt.visible&&b.push(C,zt,kt,rt,Ht.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||V.intersectsObject(C))){const zt=A.update(C),kt=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ht.copy(C.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),Ht.copy(zt.boundingSphere.center)),Ht.applyMatrix4(C.matrixWorld).applyMatrix4(Ut)),Array.isArray(kt)){const qt=zt.groups;for(let ae=0,Jt=qt.length;ae<Jt;ae++){const te=qt[ae],Ae=kt[te.materialIndex];Ae&&Ae.visible&&b.push(C,zt,Ae,rt,Ht.z,te)}}else kt.visible&&b.push(C,zt,kt,rt,Ht.z,null)}}const wt=C.children;for(let zt=0,kt=wt.length;zt<kt;zt++)Be(wt[zt],j,rt,ot)}function yi(C,j,rt,ot){const tt=C.opaque,wt=C.transmissive,zt=C.transparent;S.setupLightsView(rt),$===!0&&Lt.setGlobalState(L.clippingPlanes,rt),wt.length>0&&_s(tt,wt,j,rt),ot&&Zt.viewport(F.copy(ot)),tt.length>0&&ur(tt,j,rt),wt.length>0&&ur(wt,j,rt),zt.length>0&&ur(zt,j,rt),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function _s(C,j,rt,ot){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;const wt=le.isWebGL2;xt===null&&(xt=new or(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")?bo:wa,minFilter:To,samples:wt?4:0})),L.getDrawingBufferSize(Ot),wt?xt.setSize(Ot.x,Ot.y):xt.setSize(xh(Ot.x),xh(Ot.y));const zt=L.getRenderTarget();L.setRenderTarget(xt),L.getClearColor(St),Y=L.getClearAlpha(),Y<1&&L.setClearColor(16777215,.5),L.clear();const kt=L.toneMapping;L.toneMapping=Ra,ur(C,rt,ot),ne.updateMultisampleRenderTarget(xt),ne.updateRenderTargetMipmap(xt);let qt=!1;for(let ae=0,Jt=j.length;ae<Jt;ae++){const te=j[ae],Ae=te.object,mn=te.geometry,Ze=te.material,Sn=te.group;if(Ze.side===ki&&Ae.layers.test(ot.layers)){const Oe=Ze.side;Ze.side=zn,Ze.needsUpdate=!0,Do(Ae,rt,ot,mn,Ze,Sn),Ze.side=Oe,Ze.needsUpdate=!0,qt=!0}}qt===!0&&(ne.updateMultisampleRenderTarget(xt),ne.updateRenderTargetMipmap(xt)),L.setRenderTarget(zt),L.setClearColor(St,Y),L.toneMapping=kt}function ur(C,j,rt){const ot=j.isScene===!0?j.overrideMaterial:null;for(let tt=0,wt=C.length;tt<wt;tt++){const zt=C[tt],kt=zt.object,qt=zt.geometry,ae=ot===null?zt.material:ot,Jt=zt.group;kt.layers.test(rt.layers)&&Do(kt,j,rt,qt,ae,Jt)}}function Do(C,j,rt,ot,tt,wt){C.onBeforeRender(L,j,rt,ot,tt,wt),C.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),tt.onBeforeRender(L,j,rt,ot,C,wt),tt.transparent===!0&&tt.side===ki&&tt.forceSinglePass===!1?(tt.side=zn,tt.needsUpdate=!0,L.renderBufferDirect(rt,j,ot,tt,C,wt),tt.side=Ca,tt.needsUpdate=!0,L.renderBufferDirect(rt,j,ot,tt,C,wt),tt.side=ki):L.renderBufferDirect(rt,j,ot,tt,C,wt),C.onAfterRender(L,j,rt,ot,tt,wt)}function La(C,j,rt){j.isScene!==!0&&(j=jt);const ot=se.get(C),tt=S.state.lights,wt=S.state.shadowsArray,zt=tt.state.version,kt=at.getParameters(C,tt.state,wt,j,rt),qt=at.getProgramCacheKey(kt);let ae=ot.programs;ot.environment=C.isMeshStandardMaterial?j.environment:null,ot.fog=j.fog,ot.envMap=(C.isMeshStandardMaterial?We:be).get(C.envMap||ot.environment),ae===void 0&&(C.addEventListener("dispose",Tt),ae=new Map,ot.programs=ae);let Jt=ae.get(qt);if(Jt!==void 0){if(ot.currentProgram===Jt&&ot.lightsStateVersion===zt)return fr(C,kt),Jt}else kt.uniforms=at.getUniforms(C),C.onBuild(rt,kt,L),C.onBeforeCompile(kt,L),Jt=at.acquireProgram(kt,qt),ae.set(qt,Jt),ot.uniforms=kt.uniforms;const te=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(te.clippingPlanes=Lt.uniform),fr(C,kt),ot.needsLights=Da(C),ot.lightsStateVersion=zt,ot.needsLights&&(te.ambientLightColor.value=tt.state.ambient,te.lightProbe.value=tt.state.probe,te.directionalLights.value=tt.state.directional,te.directionalLightShadows.value=tt.state.directionalShadow,te.spotLights.value=tt.state.spot,te.spotLightShadows.value=tt.state.spotShadow,te.rectAreaLights.value=tt.state.rectArea,te.ltc_1.value=tt.state.rectAreaLTC1,te.ltc_2.value=tt.state.rectAreaLTC2,te.pointLights.value=tt.state.point,te.pointLightShadows.value=tt.state.pointShadow,te.hemisphereLights.value=tt.state.hemi,te.directionalShadowMap.value=tt.state.directionalShadowMap,te.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,te.spotShadowMap.value=tt.state.spotShadowMap,te.spotLightMatrix.value=tt.state.spotLightMatrix,te.spotLightMap.value=tt.state.spotLightMap,te.pointShadowMap.value=tt.state.pointShadowMap,te.pointShadowMatrix.value=tt.state.pointShadowMatrix),ot.currentProgram=Jt,ot.uniformsList=null,Jt}function qi(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=fc.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function fr(C,j){const rt=se.get(C);rt.outputColorSpace=j.outputColorSpace,rt.batching=j.batching,rt.instancing=j.instancing,rt.instancingColor=j.instancingColor,rt.skinning=j.skinning,rt.morphTargets=j.morphTargets,rt.morphNormals=j.morphNormals,rt.morphColors=j.morphColors,rt.morphTargetsCount=j.morphTargetsCount,rt.numClippingPlanes=j.numClippingPlanes,rt.numIntersection=j.numClipIntersection,rt.vertexAlphas=j.vertexAlphas,rt.vertexTangents=j.vertexTangents,rt.toneMapping=j.toneMapping}function Yi(C,j,rt,ot,tt){j.isScene!==!0&&(j=jt),ne.resetTextureUnits();const wt=j.fog,zt=ot.isMeshStandardMaterial?j.environment:null,kt=G===null?L.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ji,qt=(ot.isMeshStandardMaterial?We:be).get(ot.envMap||zt),ae=ot.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Jt=!!rt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),te=!!rt.morphAttributes.position,Ae=!!rt.morphAttributes.normal,mn=!!rt.morphAttributes.color;let Ze=Ra;ot.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ze=L.toneMapping);const Sn=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Oe=Sn!==void 0?Sn.length:0,ie=se.get(ot),vs=S.state.lights;if($===!0&&(vt===!0||C!==R)){const Fe=C===R&&ot.id===ct;Lt.setState(ot,C,Fe)}let Ie=!1;ot.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==vs.state.version||ie.outputColorSpace!==kt||tt.isBatchedMesh&&ie.batching===!1||!tt.isBatchedMesh&&ie.batching===!0||tt.isInstancedMesh&&ie.instancing===!1||!tt.isInstancedMesh&&ie.instancing===!0||tt.isSkinnedMesh&&ie.skinning===!1||!tt.isSkinnedMesh&&ie.skinning===!0||tt.isInstancedMesh&&ie.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&ie.instancingColor===!1&&tt.instanceColor!==null||ie.envMap!==qt||ot.fog===!0&&ie.fog!==wt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Lt.numPlanes||ie.numIntersection!==Lt.numIntersection)||ie.vertexAlphas!==ae||ie.vertexTangents!==Jt||ie.morphTargets!==te||ie.morphNormals!==Ae||ie.morphColors!==mn||ie.toneMapping!==Ze||le.isWebGL2===!0&&ie.morphTargetsCount!==Oe)&&(Ie=!0):(Ie=!0,ie.__version=ot.version);let Je=ie.currentProgram;Ie===!0&&(Je=La(ot,j,tt));let xs=!1,Ua=!1,Ki=!1;const rn=Je.getUniforms(),Zn=ie.uniforms;if(Zt.useProgram(Je.program)&&(xs=!0,Ua=!0,Ki=!0),ot.id!==ct&&(ct=ot.id,Ua=!0),xs||R!==C){rn.setValue(nt,"projectionMatrix",C.projectionMatrix),rn.setValue(nt,"viewMatrix",C.matrixWorldInverse);const Fe=rn.map.cameraPosition;Fe!==void 0&&Fe.setValue(nt,Ht.setFromMatrixPosition(C.matrixWorld)),le.logarithmicDepthBuffer&&rn.setValue(nt,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&rn.setValue(nt,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Ua=!0,Ki=!0)}if(tt.isSkinnedMesh){rn.setOptional(nt,tt,"bindMatrix"),rn.setOptional(nt,tt,"bindMatrixInverse");const Fe=tt.skeleton;Fe&&(le.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),rn.setValue(nt,"boneTexture",Fe.boneTexture,ne)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}tt.isBatchedMesh&&(rn.setOptional(nt,tt,"batchingTexture"),rn.setValue(nt,"batchingTexture",tt._matricesTexture,ne));const Ss=rt.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0&&le.isWebGL2===!0)&&Kt.update(tt,rt,Je),(Ua||ie.receiveShadow!==tt.receiveShadow)&&(ie.receiveShadow=tt.receiveShadow,rn.setValue(nt,"receiveShadow",tt.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Zn.envMap.value=qt,Zn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),Ua&&(rn.setValue(nt,"toneMappingExposure",L.toneMappingExposure),ie.needsLights&&Zi(Zn,Ki),wt&&ot.fog===!0&&yt.refreshFogUniforms(Zn,wt),yt.refreshMaterialUniforms(Zn,ot,W,B,xt),fc.upload(nt,qi(ie),Zn,ne)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(fc.upload(nt,qi(ie),Zn,ne),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&rn.setValue(nt,"center",tt.center),rn.setValue(nt,"modelViewMatrix",tt.modelViewMatrix),rn.setValue(nt,"normalMatrix",tt.normalMatrix),rn.setValue(nt,"modelMatrix",tt.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const Fe=ot.uniformsGroups;for(let Na=0,Uo=Fe.length;Na<Uo;Na++)if(le.isWebGL2){const hr=Fe[Na];Gt.update(hr,Je),Gt.bind(hr,Je)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Je}function Zi(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Da(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(C,j,rt){se.get(C.texture).__webglTexture=j,se.get(C.depthTexture).__webglTexture=rt;const ot=se.get(C);ot.__hasExternalTextures=!0,ot.__hasExternalTextures&&(ot.__autoAllocateDepthBuffer=rt===void 0,ot.__autoAllocateDepthBuffer||It.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ot.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,j){const rt=se.get(C);rt.__webglFramebuffer=j,rt.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,rt=0){G=C,D=j,z=rt;let ot=!0,tt=null,wt=!1,zt=!1;if(C){const qt=se.get(C);qt.__useDefaultFramebuffer!==void 0?(Zt.bindFramebuffer(nt.FRAMEBUFFER,null),ot=!1):qt.__webglFramebuffer===void 0?ne.setupRenderTarget(C):qt.__hasExternalTextures&&ne.rebindTextures(C,se.get(C.texture).__webglTexture,se.get(C.depthTexture).__webglTexture);const ae=C.texture;(ae.isData3DTexture||ae.isDataArrayTexture||ae.isCompressedArrayTexture)&&(zt=!0);const Jt=se.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Jt[j])?tt=Jt[j][rt]:tt=Jt[j],wt=!0):le.isWebGL2&&C.samples>0&&ne.useMultisampledRTT(C)===!1?tt=se.get(C).__webglMultisampledFramebuffer:Array.isArray(Jt)?tt=Jt[rt]:tt=Jt,F.copy(C.viewport),mt.copy(C.scissor),ut=C.scissorTest}else F.copy(w).multiplyScalar(W).floor(),mt.copy(X).multiplyScalar(W).floor(),ut=it;if(Zt.bindFramebuffer(nt.FRAMEBUFFER,tt)&&le.drawBuffers&&ot&&Zt.drawBuffers(C,tt),Zt.viewport(F),Zt.scissor(mt),Zt.setScissorTest(ut),wt){const qt=se.get(C.texture);nt.framebufferTexture2D(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,nt.TEXTURE_CUBE_MAP_POSITIVE_X+j,qt.__webglTexture,rt)}else if(zt){const qt=se.get(C.texture),ae=j||0;nt.framebufferTextureLayer(nt.FRAMEBUFFER,nt.COLOR_ATTACHMENT0,qt.__webglTexture,rt||0,ae)}ct=-1},this.readRenderTargetPixels=function(C,j,rt,ot,tt,wt,zt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=se.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&zt!==void 0&&(kt=kt[zt]),kt){Zt.bindFramebuffer(nt.FRAMEBUFFER,kt);try{const qt=C.texture,ae=qt.format,Jt=qt.type;if(ae!==mi&&_e.convert(ae)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const te=Jt===bo&&(It.has("EXT_color_buffer_half_float")||le.isWebGL2&&It.has("EXT_color_buffer_float"));if(Jt!==wa&&_e.convert(Jt)!==nt.getParameter(nt.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Jt===ba&&(le.isWebGL2||It.has("OES_texture_float")||It.has("WEBGL_color_buffer_float")))&&!te){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ot&&rt>=0&&rt<=C.height-tt&&nt.readPixels(j,rt,ot,tt,_e.convert(ae),_e.convert(Jt),wt)}finally{const qt=G!==null?se.get(G).__webglFramebuffer:null;Zt.bindFramebuffer(nt.FRAMEBUFFER,qt)}}},this.copyFramebufferToTexture=function(C,j,rt=0){const ot=Math.pow(2,-rt),tt=Math.floor(j.image.width*ot),wt=Math.floor(j.image.height*ot);ne.setTexture2D(j,0),nt.copyTexSubImage2D(nt.TEXTURE_2D,rt,0,0,C.x,C.y,tt,wt),Zt.unbindTexture()},this.copyTextureToTexture=function(C,j,rt,ot=0){const tt=j.image.width,wt=j.image.height,zt=_e.convert(rt.format),kt=_e.convert(rt.type);ne.setTexture2D(rt,0),nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,rt.flipY),nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),nt.pixelStorei(nt.UNPACK_ALIGNMENT,rt.unpackAlignment),j.isDataTexture?nt.texSubImage2D(nt.TEXTURE_2D,ot,C.x,C.y,tt,wt,zt,kt,j.image.data):j.isCompressedTexture?nt.compressedTexSubImage2D(nt.TEXTURE_2D,ot,C.x,C.y,j.mipmaps[0].width,j.mipmaps[0].height,zt,j.mipmaps[0].data):nt.texSubImage2D(nt.TEXTURE_2D,ot,C.x,C.y,zt,kt,j.image),ot===0&&rt.generateMipmaps&&nt.generateMipmap(nt.TEXTURE_2D),Zt.unbindTexture()},this.copyTextureToTexture3D=function(C,j,rt,ot,tt=0){if(L.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=C.max.x-C.min.x+1,zt=C.max.y-C.min.y+1,kt=C.max.z-C.min.z+1,qt=_e.convert(ot.format),ae=_e.convert(ot.type);let Jt;if(ot.isData3DTexture)ne.setTexture3D(ot,0),Jt=nt.TEXTURE_3D;else if(ot.isDataArrayTexture)ne.setTexture2DArray(ot,0),Jt=nt.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}nt.pixelStorei(nt.UNPACK_FLIP_Y_WEBGL,ot.flipY),nt.pixelStorei(nt.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),nt.pixelStorei(nt.UNPACK_ALIGNMENT,ot.unpackAlignment);const te=nt.getParameter(nt.UNPACK_ROW_LENGTH),Ae=nt.getParameter(nt.UNPACK_IMAGE_HEIGHT),mn=nt.getParameter(nt.UNPACK_SKIP_PIXELS),Ze=nt.getParameter(nt.UNPACK_SKIP_ROWS),Sn=nt.getParameter(nt.UNPACK_SKIP_IMAGES),Oe=rt.isCompressedTexture?rt.mipmaps[0]:rt.image;nt.pixelStorei(nt.UNPACK_ROW_LENGTH,Oe.width),nt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,Oe.height),nt.pixelStorei(nt.UNPACK_SKIP_PIXELS,C.min.x),nt.pixelStorei(nt.UNPACK_SKIP_ROWS,C.min.y),nt.pixelStorei(nt.UNPACK_SKIP_IMAGES,C.min.z),rt.isDataTexture||rt.isData3DTexture?nt.texSubImage3D(Jt,tt,j.x,j.y,j.z,wt,zt,kt,qt,ae,Oe.data):rt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),nt.compressedTexSubImage3D(Jt,tt,j.x,j.y,j.z,wt,zt,kt,qt,Oe.data)):nt.texSubImage3D(Jt,tt,j.x,j.y,j.z,wt,zt,kt,qt,ae,Oe),nt.pixelStorei(nt.UNPACK_ROW_LENGTH,te),nt.pixelStorei(nt.UNPACK_IMAGE_HEIGHT,Ae),nt.pixelStorei(nt.UNPACK_SKIP_PIXELS,mn),nt.pixelStorei(nt.UNPACK_SKIP_ROWS,Ze),nt.pixelStorei(nt.UNPACK_SKIP_IMAGES,Sn),tt===0&&ot.generateMipmaps&&nt.generateMipmap(Jt),Zt.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?ne.setTextureCube(C,0):C.isData3DTexture?ne.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ne.setTexture2DArray(C,0):ne.setTexture2D(C,0),Zt.unbindTexture()},this.resetState=function(){D=0,z=0,G=null,Zt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Ah?"display-p3":"srgb",i.unpackColorSpace=Ne.workingColorSpace===xc?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xn?sr:iv}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===sr?xn:ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Zb extends Dh{}Zb.prototype.isWebGL1Renderer=!0;class bv extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class Uh extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const I_=new Z,F_=new Z,H_=new qe,oh=new Rh,lc=new Co;class Av extends bn{constructor(e=new Bn,i=new Uh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)I_.fromBufferAttribute(i,l-1),F_.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=I_.distanceTo(F_);e.setAttribute("lineDistance",new si(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(l),lc.radius+=u,e.ray.intersectsSphere(lc)===!1)return;H_.copy(l).invert(),oh.copy(e.ray).applyMatrix4(H_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=new Z,g=new Z,x=new Z,v=new Z,y=this.isLineSegments?2:1,T=r.index,S=r.attributes.position;if(T!==null){const _=Math.max(0,d.start),O=Math.min(T.count,d.start+d.count);for(let L=_,N=O-1;L<N;L+=y){const D=T.getX(L),z=T.getX(L+1);if(p.fromBufferAttribute(S,D),g.fromBufferAttribute(S,z),oh.distanceSqToSegment(p,g,v,x)>m)continue;v.applyMatrix4(this.matrixWorld);const ct=e.ray.origin.distanceTo(v);ct<e.near||ct>e.far||i.push({distance:ct,point:x.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,d.start),O=Math.min(S.count,d.start+d.count);for(let L=_,N=O-1;L<N;L+=y){if(p.fromBufferAttribute(S,L),g.fromBufferAttribute(S,L+1),oh.distanceSqToSegment(p,g,v,x)>m)continue;v.applyMatrix4(this.matrixWorld);const z=e.ray.origin.distanceTo(v);z<e.near||z>e.far||i.push({distance:z,point:x.clone().applyMatrix4(this.matrixWorld),index:L,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}const G_=new Z,V_=new Z;class Kb extends Av{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)G_.fromBufferAttribute(i,l),V_.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+G_.distanceTo(V_);e.setAttribute("lineDistance",new si(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nh extends cr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const k_=new qe,Mh=new Rh,cc=new Co,uc=new Z;class Rv extends bn{constructor(e=new Bn,i=new Nh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(l),cc.radius+=u,e.ray.intersectsSphere(cc)===!1)return;k_.copy(l).invert(),Mh.copy(e.ray).applyMatrix4(k_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,x=r.attributes.position;if(p!==null){const v=Math.max(0,d.start),y=Math.min(p.count,d.start+d.count);for(let T=v,b=y;T<b;T++){const S=p.getX(T);uc.fromBufferAttribute(x,S),W_(uc,S,m,l,e,i,this)}}else{const v=Math.max(0,d.start),y=Math.min(x.count,d.start+d.count);for(let T=v,b=y;T<b;T++)uc.fromBufferAttribute(x,T),W_(uc,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function W_(o,e,i,r,l,u,d){const h=Mh.distanceSqToPoint(o);if(h<i){const m=new Z;Mh.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,object:d})}}class Oh extends Bn{constructor(e=1,i=32,r=16,l=0,u=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(d+h,Math.PI);let p=0;const g=[],x=new Z,v=new Z,y=[],T=[],b=[],S=[];for(let _=0;_<=r;_++){const O=[],L=_/r;let N=0;_===0&&d===0?N=.5/i:_===r&&m===Math.PI&&(N=-.5/i);for(let D=0;D<=i;D++){const z=D/i;x.x=-e*Math.cos(l+z*u)*Math.sin(d+L*h),x.y=e*Math.cos(d+L*h),x.z=e*Math.sin(l+z*u)*Math.sin(d+L*h),T.push(x.x,x.y,x.z),v.copy(x).normalize(),b.push(v.x,v.y,v.z),S.push(z+N,1-L),O.push(p++)}g.push(O)}for(let _=0;_<r;_++)for(let O=0;O<i;O++){const L=g[_][O+1],N=g[_][O],D=g[_+1][O],z=g[_+1][O+1];(_!==0||d>0)&&y.push(L,N,z),(_!==r-1||m<Math.PI)&&y.push(N,D,z)}this.setIndex(y),this.setAttribute("position",new si(T,3)),this.setAttribute("normal",new si(b,3)),this.setAttribute("uv",new si(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qb extends cr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new xe(16777215),this.specular=new xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=av,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class wv extends bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const lh=new qe,X_=new Z,j_=new Z;class Jb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;X_.setFromMatrixPosition(e.matrixWorld),i.position.copy(X_),j_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(j_),i.updateMatrixWorld(),lh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const q_=new qe,Mo=new Z,ch=new Z;class $b extends Jb{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(e,i=0){const r=this.camera,l=this.matrix,u=e.distance||r.far;u!==r.far&&(r.far=u,r.updateProjectionMatrix()),Mo.setFromMatrixPosition(e.matrixWorld),r.position.copy(Mo),ch.copy(r.position),ch.add(this._cubeDirections[i]),r.up.copy(this._cubeUps[i]),r.lookAt(ch),r.updateMatrixWorld(),l.makeTranslation(-Mo.x,-Mo.y,-Mo.z),q_.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(q_)}}class tA extends wv{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new $b}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class eA extends wv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);const nA=()=>{const o=$t.useRef(null),e=$t.useRef(null),i=$t.useRef(new bv),r=$t.useRef(null),l=$t.useRef(null),u=$t.useRef(null),d=$t.useRef(null),h=$t.useRef(null);return $t.useEffect(()=>{if(!o.current)return;for(;o.current.firstChild;)o.current.removeChild(o.current.firstChild);r.current=new Pn(75,1,.1,2e3),r.current.position.z=3,e.current=new Dh({antialias:!0,alpha:!0}),e.current.setSize(500,500),e.current.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.current.appendChild(e.current.domElement);const m=new Oh(1.5,64,64),p=new Qb({color:10309341,wireframe:!0,transparent:!0,opacity:.4,shininess:100});l.current=new Xi(m,p),i.current.add(l.current);const g=new eA(16777215,.5);i.current.add(g);const x=new tA(16777215,1);x.position.set(5,5,5),i.current.add(x);const v=new Bn,y=300,T=new Float32Array(y*3),b=new Nh({color:13073919,size:.05,transparent:!0,opacity:.8});for(let z=0;z<y;z++){const G=Math.acos(-1+2*z/y),ct=Math.sqrt(y*Math.PI)*G;T[z*3]=Math.cos(ct)*Math.sin(G)*1.5,T[z*3+1]=Math.sin(ct)*Math.sin(G)*1.5,T[z*3+2]=Math.cos(G)*1.5}v.setAttribute("position",new Yn(T,3)),u.current=new Rv(v,b),i.current.add(u.current);const S=new Bn,_=100,O=new Float32Array(_*6);for(let z=0;z<_;z++){const G=Math.floor(Math.random()*y),ct=Math.floor(Math.random()*y);O[z*6]=T[G*3],O[z*6+1]=T[G*3+1],O[z*6+2]=T[G*3+2],O[z*6+3]=T[ct*3],O[z*6+4]=T[ct*3+1],O[z*6+5]=T[ct*3+2]}S.setAttribute("position",new Yn(O,3));const L=new Uh({color:13073919,transparent:!0,opacity:.2});d.current=new Kb(S,L),i.current.add(d.current);const N=()=>{l.current&&u.current&&d.current&&(l.current.rotation.y+=.003,u.current.rotation.y+=.003,d.current.rotation.y+=.003),e.current.render(i.current,r.current),h.current=requestAnimationFrame(N)};N();const D=()=>{const z=Math.min(window.innerWidth*.4,500);e.current.setSize(z,z),r.current.aspect=1,r.current.updateProjectionMatrix()};return window.addEventListener("resize",D),D(),()=>{window.removeEventListener("resize",D),h.current&&cancelAnimationFrame(h.current),e.current&&e.current.dispose(),i.current.clear()}},[]),I.jsx("section",{id:"home",className:"hero",children:I.jsxs("div",{className:"container hero-container",children:[I.jsxs("div",{className:"hero-content",children:[I.jsxs("h1",{className:"hero-title",children:["Darshil ",I.jsx("span",{className:"gradient-text",children:"Goti"})]}),I.jsx("h2",{className:"hero-subtitle",children:"Software Engineer"}),I.jsx("p",{className:"hero-description",children:"Crafting elegant and innovative solutions to complex challenges"}),I.jsxs("div",{className:"hero-cta",children:[I.jsx("a",{href:"#contact",className:"btn btn-primary glow-effect",children:"Get in Touch"}),I.jsx("a",{href:"#projects",className:"btn btn-outline",children:"View Projects"})]})]}),I.jsx("div",{className:"hero-globe",ref:o})]})})},iA=()=>{const o=$t.useRef(null);return $t.useEffect(()=>{const e=new IntersectionObserver(([i])=>{i.isIntersecting&&i.target.classList.add("visible")},{root:null,threshold:.1});return o.current&&e.observe(o.current),()=>{o.current&&e.unobserve(o.current)}},[]),I.jsx("section",{id:"about",className:"about",children:I.jsxs("div",{className:"container",children:[I.jsx("h2",{className:"section-title",children:"About Me"}),I.jsxs("div",{className:"about-content fade-in",ref:o,children:[I.jsxs("div",{className:"about-text",children:[I.jsx("p",{children:"I'm a Software Engineer based in Ahmedabad, Gujarat, with a passion for building elegant, user-friendly applications. With a strong foundation in Computer Science from Nirma University, I specialize in full-stack development and AI-driven solutions."}),I.jsx("p",{children:"Currently working at Crest Data Systems, I focus on developing AI-driven tools that enhance security operations and streamline data analysis workflows. I'm particularly interested in creating solutions that make complex systems more accessible and efficient."}),I.jsx("p",{children:"When I'm not coding, you can find me solving algorithmic problems on platforms like LeetCode and Codeforces, where I've solved over 1000 coding challenges."})]}),I.jsxs("div",{className:"about-info",children:[I.jsxs("div",{className:"info-item",children:[I.jsx("span",{className:"info-label",children:"Name"}),I.jsx("span",{className:"info-value",children:"Darshil Goti"})]}),I.jsxs("div",{className:"info-item",children:[I.jsx("span",{className:"info-label",children:"Email"}),I.jsx("span",{className:"info-value",children:I.jsx("a",{href:"mailto:darshilgoti31@gmail.com",children:"darshilgoti31@gmail.com"})})]}),I.jsxs("div",{className:"info-item",children:[I.jsx("span",{className:"info-label",children:"Phone"}),I.jsx("span",{className:"info-value",children:I.jsx("a",{href:"tel:+916356775766",children:"+91 6356775766"})})]}),I.jsxs("div",{className:"info-item",children:[I.jsx("span",{className:"info-label",children:"Location"}),I.jsx("span",{className:"info-value",children:"Ahmedabad, Gujarat, India"})]}),I.jsxs("div",{className:"social-links",children:[I.jsx("a",{href:"https://linkedin.com/in/darshilgoti",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:I.jsx("i",{className:"fab fa-linkedin"})}),I.jsx("a",{href:"https://github.com/darshil31",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:I.jsx("i",{className:"fab fa-github"})}),I.jsx("a",{href:"https://leetcode.com/darshil3",target:"_blank",rel:"noopener noreferrer","aria-label":"LeetCode",children:I.jsx("i",{className:"fas fa-code"})}),I.jsx("a",{href:"https://codeforces.com/profile/darshil31",target:"_blank",rel:"noopener noreferrer","aria-label":"CodeForces",children:I.jsx("i",{className:"fas fa-laptop-code"})})]})]})]})]})})},aA=()=>{const o=$t.useRef(null);$t.useEffect(()=>{const i=new IntersectionObserver(([r])=>{r.isIntersecting&&r.target.classList.add("visible")},{root:null,threshold:.1});return o.current&&i.observe(o.current),()=>{o.current&&i.unobserve(o.current)}},[]);const e=[{title:"Software Engineer (E2)",company:"Crest Data Systems",location:"Ahmedabad, Gujarat",period:"April 2025 – Present",description:""},{title:"Software Engineer (E1)",company:"Crest Data Systems",location:"Ahmedabad, Gujarat",period:"July 2024 – March 2025",description:"Developed and deployed an AI-driven SOC Analyst to analyze alerts from tools like Splunk, Elastic, and Datadog. Automated alert classification, reduced false positives, and prioritized threats to enhance SOC team efficiency and response time."},{title:"Software Engineer Intern (E0)",company:"Crest Data Systems",location:"Ahmedabad, Gujarat",period:"January 2024 – June 2024",description:"Developed and deployed an AI-driven SOC Analyst to analyze alerts from tools like Splunk, Elastic, and Datadog. Automated alert classification, reduced false positives, and prioritized threats to enhance SOC team efficiency and response time."},{title:"Full-Stack Developer Intern",company:"MARQUEE SOLUTIONS",location:"Surat, Gujarat",period:"June 2023 – July 2023",description:"Wrote and reviewed code for POS Web App in JS."}];return I.jsx("section",{id:"experience",className:"experience",children:I.jsxs("div",{className:"container",children:[I.jsx("h2",{className:"section-title",children:"Experience"}),I.jsx("div",{className:"experience-timeline fade-in",ref:o,children:e.map((i,r)=>I.jsxs("div",{className:"timeline-item",children:[I.jsx("div",{className:"timeline-dot"}),I.jsxs("div",{className:"timeline-content",children:[I.jsxs("div",{className:"timeline-header",children:[I.jsx("h3",{className:"timeline-title",children:i.title}),I.jsx("span",{className:"timeline-period",children:i.period})]}),I.jsxs("div",{className:"timeline-company",children:[i.company," | ",i.location]}),I.jsx("p",{className:"timeline-description",children:i.description})]})]},r))})]})})},rA=()=>{const o=$t.useRef(null);$t.useEffect(()=>{const i=new IntersectionObserver(([r])=>{r.isIntersecting&&r.target.classList.add("visible")},{root:null,threshold:.1});return o.current&&i.observe(o.current),()=>{o.current&&i.unobserve(o.current)}},[]);const e=[{title:"POS Web App",description:"Implemented all major features of a POS system, including product management, inventory tracking, and customer checkout.",technologies:["HTML","CSS","React.js","Express.js","Node.js","MongoDB"],period:"Winter 2022",link:"#"},{title:"Image Editing Tool",description:"Implemented an image editing tool using Python and OpenCV. The tool provides functionalities like image cropping, resizing, color adjustment, and applying various filters.",technologies:["Python","OpenCV","Tkinter"],period:"Summer 2023",link:"#"},{title:"Sorting Visualizer",description:"Developed a web app using HTML, CSS, and JavaScript to visualize classic sorting algorithms.",technologies:["HTML","CSS","Bootstrap","JavaScript"],period:"Summer 2023",link:"#"}];return I.jsx("section",{id:"projects",className:"projects",children:I.jsxs("div",{className:"container",children:[I.jsx("h2",{className:"section-title",children:"Projects"}),I.jsx("div",{className:"projects-grid fade-in",ref:o,children:e.map((i,r)=>I.jsxs("div",{className:"project-card",children:[I.jsxs("div",{className:"project-content",children:[I.jsxs("div",{className:"project-header",children:[I.jsx("h3",{className:"project-title",children:i.title}),I.jsx("span",{className:"project-period",children:i.period})]}),I.jsx("p",{className:"project-description",children:i.description}),I.jsx("div",{className:"project-tech",children:i.technologies.map((l,u)=>I.jsx("span",{className:"tech-tag",children:l},u))})]}),I.jsx("div",{className:"project-footer",children:I.jsxs("a",{href:i.link,className:"project-link",target:"_blank",rel:"noopener noreferrer",children:["View Project ",I.jsx("i",{className:"fas fa-arrow-right"})]})})]},r))})]})})},sA=()=>{const o=$t.useRef(null);$t.useEffect(()=>{const i=new IntersectionObserver(([r])=>{r.isIntersecting&&r.target.classList.add("visible")},{root:null,threshold:.1});return o.current&&i.observe(o.current),()=>{o.current&&i.unobserve(o.current)}},[]);const e=[{title:"Programming Languages",skills:["C++","Python","JavaScript","Java","C","SQL","HTML/CSS"]},{title:"Frameworks & Libraries",skills:["React.js","FastAPI","Express.js","Node.js","Tailwind CSS"]},{title:"Databases",skills:["MongoDB","SQL","PostgreSQL"]},{title:"Developer Tools",skills:["VS Code","Git","GitHub","Docker","Jira","Keycloak"]},{title:"Operating Systems",skills:["Windows","Linux"]}];return I.jsx("section",{id:"skills",className:"skills",children:I.jsxs("div",{className:"container",children:[I.jsx("h2",{className:"section-title",children:"Technical Skills"}),I.jsx("div",{className:"skills-container fade-in",ref:o,children:e.map((i,r)=>I.jsxs("div",{className:"skill-category",children:[I.jsx("h3",{className:"category-title",children:i.title}),I.jsx("div",{className:"skills-grid",children:i.skills.map((l,u)=>I.jsx("div",{className:"skill-item",children:I.jsx("span",{className:"skill-name",children:l})},u))})]},r))})]})})},oA=()=>{const o=$t.useRef(null);$t.useEffect(()=>{const i=new IntersectionObserver(([r])=>{r.isIntersecting&&r.target.classList.add("visible")},{root:null,threshold:.1});return o.current&&i.observe(o.current),()=>{o.current&&i.unobserve(o.current)}},[]);const e=[{institution:"Institute of Technology, Nirma University",degree:"Bachelor of Science in Computer Science",location:"Ahmedabad, Gujarat",period:"2020 - 2024",details:["Cumulative GPA 8.42 / 10"],logo:"https://upload.wikimedia.org/wikipedia/en/8/83/Nirma_University_Logo.png"},{institution:"Ashadeep Vidhyalaya",degree:"High School",location:"Surat, Gujarat",period:"2018 - 2020",details:["Percentage 96.83%"],logo:"https://cdn-icons-png.flaticon.com/512/2602/2602414.png"}];return I.jsx("section",{id:"education",className:"education",children:I.jsxs("div",{className:"container",children:[I.jsx("h2",{className:"section-title",children:"Education"}),I.jsx("div",{className:"education-container fade-in",ref:o,children:e.map((i,r)=>I.jsxs("div",{className:"education-card card",children:[I.jsxs("div",{className:"education-header",children:[I.jsx("div",{className:"education-logo",children:I.jsx("img",{src:i.logo||"/placeholder.svg",alt:i.institution})}),I.jsxs("div",{className:"education-info",children:[I.jsx("h3",{className:"education-institution",children:i.institution}),I.jsxs("div",{className:"education-degree",children:[i.degree," | ",i.location]})]}),I.jsx("div",{className:"education-period",children:I.jsx("span",{children:i.period})})]}),I.jsx("div",{className:"education-details",children:I.jsx("ul",{children:i.details.map((l,u)=>I.jsx("li",{children:l},u))})})]},r))})]})})},lA=()=>{const o=$t.useRef(null);$t.useEffect(()=>{const i=new IntersectionObserver(([r])=>{r.isIntersecting&&r.target.classList.add("visible")},{root:null,threshold:.1});return o.current&&i.observe(o.current),()=>{o.current&&i.unobserve(o.current)}},[]);const e=[{name:"Data Structure & Algorithms",icon:"fas fa-code-branch",description:"Study of fundamental data structures and algorithm design techniques"},{name:"Object Oriented Programming",icon:"fas fa-cubes",description:"Programming paradigm based on the concept of objects and classes"},{name:"Operating Systems",icon:"fas fa-desktop",description:"Study of OS concepts, process management, memory management, and file systems"},{name:"Database Management System",icon:"fas fa-database",description:"Design and implementation of database systems and query languages"},{name:"Computer Networks",icon:"fas fa-network-wired",description:"Study of network protocols, architecture, and communication systems"},{name:"Machine Learning",icon:"fas fa-brain",description:"Algorithms and statistical models for computer systems to perform tasks without explicit instructions"},{name:"Cloud Computing",icon:"fas fa-cloud",description:"Study of cloud services, deployment models, and virtualization technologies"}];return I.jsx("section",{id:"coursework",className:"coursework",children:I.jsxs("div",{className:"container",children:[I.jsx("h2",{className:"section-title",children:"Relevant Coursework"}),I.jsx("div",{className:"coursework-grid fade-in",ref:o,children:e.map((i,r)=>I.jsxs("div",{className:"coursework-card card",children:[I.jsx("div",{className:"coursework-icon",children:I.jsx("i",{className:i.icon})}),I.jsx("h3",{className:"coursework-name",children:i.name}),I.jsx("p",{className:"coursework-description",children:i.description})]},r))})]})})},cA=()=>{const o=$t.useRef(null);$t.useEffect(()=>{const i=new IntersectionObserver(([r])=>{r.isIntersecting&&r.target.classList.add("visible")},{root:null,threshold:.1});return o.current&&i.observe(o.current),()=>{o.current&&i.unobserve(o.current)}},[]);const e=[{title:"Academic Excellence",description:"Achieved 8th rank in the state in S.S.C. Examination.",icon:"fas fa-award"},{title:"Coding Proficiency",description:"Solved 1000+ coding questions on platforms like LeetCode, CodeChef, and Codeforces.",icon:"fas fa-laptop-code"},{title:"Hackathon Success",description:"Runner-up at Mined Hackathon (National Level Competition), Track: D360 (Diamond Query ChatBot).",icon:"fas fa-trophy"}];return I.jsx("section",{id:"accomplishments",className:"accomplishments",children:I.jsxs("div",{className:"container",children:[I.jsx("h2",{className:"section-title",children:"Accomplishments"}),I.jsx("div",{className:"accomplishments-grid fade-in",ref:o,children:e.map((i,r)=>I.jsxs("div",{className:"accomplishment-card card",children:[I.jsx("div",{className:"accomplishment-icon",children:I.jsx("i",{className:i.icon})}),I.jsx("h3",{className:"accomplishment-title",children:i.title}),I.jsx("p",{className:"accomplishment-description",children:i.description})]},r))})]})})},uA=()=>{const o=$t.useRef(null);$t.useEffect(()=>{const i=new IntersectionObserver(([r])=>{r.isIntersecting&&r.target.classList.add("visible")},{root:null,threshold:.1});return o.current&&i.observe(o.current),()=>{o.current&&i.unobserve(o.current)}},[]);const e=[{platform:"LeetCode",username:"darshil3",link:"https://leetcode.com/darshil3/",logo:"https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",stats:"Solved 500+ problems"},{platform:"Codeforces",username:"darshil31",link:"https://codeforces.com/profile/darshil31",logo:"https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",stats:"Participated in 20+ contests"},{platform:"CodeChef",username:"darshilgoti",link:"https://www.codechef.com/users/darshilgoti",logo:"https://cdn.codechef.com/sites/default/files/uploads/pictures/811b20a47eac52b10c90ab82e0628e21.png",stats:"3★ coder"},{platform:"GitHub",username:"darshil31",link:"https://github.com/darshil31",logo:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",stats:"10+ repositories"},{platform:"LinkedIn",username:"darshilgoti",link:"https://linkedin.com/in/darshilgoti",logo:"https://cdn-icons-png.flaticon.com/512/174/174857.png",stats:"500+ connections"}];return I.jsx("section",{id:"profiles",className:"online-profiles",children:I.jsxs("div",{className:"container",children:[I.jsx("h2",{className:"section-title",children:"Online Profiles"}),I.jsx("div",{className:"profiles-grid fade-in",ref:o,children:e.map((i,r)=>I.jsxs("a",{href:i.link,className:"profile-card card",target:"_blank",rel:"noopener noreferrer",children:[I.jsx("div",{className:"profile-logo",children:I.jsx("img",{src:i.logo||"/placeholder.svg",alt:i.platform})}),I.jsx("h3",{className:"profile-platform",children:i.platform}),I.jsxs("div",{className:"profile-username",children:["@",i.username]}),I.jsx("div",{className:"profile-stats",children:i.stats})]},r))})]})})},fA=()=>{const[o,e]=$t.useState({name:"",email:"",subject:"",message:""}),[i,r]=$t.useState({}),[l,u]=$t.useState(!1),[d,h]=$t.useState(!1),m=$t.useRef(null);$t.useEffect(()=>{const v=new IntersectionObserver(([y])=>{y.isIntersecting&&y.target.classList.add("visible")},{root:null,threshold:.1});return m.current&&v.observe(m.current),()=>{m.current&&v.unobserve(m.current)}},[]);const p=v=>{const{name:y,value:T}=v.target;e({...o,[y]:T})},g=()=>{const v={};return o.name.trim()||(v.name="Name is required"),o.email.trim()?/\S+@\S+\.\S+/.test(o.email)||(v.email="Email is invalid"):v.email="Email is required",o.subject.trim()||(v.subject="Subject is required"),o.message.trim()||(v.message="Message is required"),r(v),Object.keys(v).length===0},x=v=>{v.preventDefault(),g()&&(u(!0),setTimeout(()=>{u(!1),h(!0),e({name:"",email:"",subject:"",message:""}),setTimeout(()=>{h(!1)},5e3)},1500))};return I.jsx("section",{id:"contact",className:"contact",children:I.jsxs("div",{className:"container",children:[I.jsx("h2",{className:"section-title",children:"Get In Touch"}),I.jsxs("div",{className:"contact-container fade-in",ref:m,children:[I.jsx("div",{className:"contact-info",children:I.jsxs("div",{className:"info-items",children:[I.jsxs("div",{className:"info-item",children:[I.jsx("div",{className:"info-icon",children:I.jsx("i",{className:"fas fa-map-marker-alt"})}),I.jsxs("div",{className:"info-content",children:[I.jsx("h3",{children:"Location"}),I.jsx("p",{children:"Ahmedabad, Gujarat, India"})]})]}),I.jsxs("div",{className:"info-item",children:[I.jsx("div",{className:"info-icon",children:I.jsx("i",{className:"fas fa-envelope"})}),I.jsxs("div",{className:"info-content",children:[I.jsx("h3",{children:"Email"}),I.jsx("p",{children:I.jsx("a",{href:"mailto:darshilgoti31@gmail.com",children:"darshilgoti31@gmail.com"})})]})]}),I.jsxs("div",{className:"info-item",children:[I.jsx("div",{className:"info-icon",children:I.jsx("i",{className:"fas fa-phone-alt"})}),I.jsxs("div",{className:"info-content",children:[I.jsx("h3",{children:"Phone"}),I.jsx("p",{children:I.jsx("a",{href:"tel:+916356775766",children:"+91 6356775766"})})]})]})]})}),I.jsx("div",{className:"contact-form card",children:I.jsxs("form",{onSubmit:x,children:[I.jsxs("div",{className:"form-group",children:[I.jsx("label",{htmlFor:"name",children:"Name"}),I.jsx("input",{type:"text",id:"name",name:"name",value:o.name,onChange:p,className:i.name?"error":""}),i.name&&I.jsx("span",{className:"error-message",children:i.name})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{htmlFor:"email",children:"Email"}),I.jsx("input",{type:"email",id:"email",name:"email",value:o.email,onChange:p,className:i.email?"error":""}),i.email&&I.jsx("span",{className:"error-message",children:i.email})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{htmlFor:"subject",children:"Subject"}),I.jsx("input",{type:"text",id:"subject",name:"subject",value:o.subject,onChange:p,className:i.subject?"error":""}),i.subject&&I.jsx("span",{className:"error-message",children:i.subject})]}),I.jsxs("div",{className:"form-group",children:[I.jsx("label",{htmlFor:"message",children:"Message"}),I.jsx("textarea",{id:"message",name:"message",rows:"5",value:o.message,onChange:p,className:i.message?"error":""}),i.message&&I.jsx("span",{className:"error-message",children:i.message})]}),I.jsx("button",{type:"submit",className:"btn btn-primary",disabled:l,children:l?"Sending...":"Send Message"}),d&&I.jsx("div",{className:"success-message",children:"Your message has been sent successfully!"})]})})]})]})})},hA=()=>{const o=new Date().getFullYear(),[e,i]=$t.useState(0);return $t.useEffect(()=>{let r=parseInt(localStorage.getItem("visitorCount"))||0;r+=1,localStorage.setItem("visitorCount",r),i(r)},[]),I.jsx("footer",{className:"footer",children:I.jsxs("div",{className:"container footer-container",children:[I.jsxs("div",{className:"footer-content",children:[I.jsx("div",{className:"footer-logo",children:I.jsx("a",{href:"#home",children:"DG"})}),I.jsxs("div",{className:"footer-social",children:[I.jsx("a",{href:"https://linkedin.com/in/darshilgoti",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:I.jsx("i",{className:"fab fa-linkedin"})}),I.jsx("a",{href:"https://github.com/darshil31",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:I.jsx("i",{className:"fab fa-github"})}),I.jsx("a",{href:"https://leetcode.com/darshil3",target:"_blank",rel:"noopener noreferrer","aria-label":"LeetCode",children:I.jsx("i",{className:"fas fa-code"})}),I.jsx("a",{href:"https://codeforces.com/profile/darshil31",target:"_blank",rel:"noopener noreferrer","aria-label":"CodeForces",children:I.jsx("i",{className:"fas fa-laptop-code"})})]})]}),I.jsxs("div",{className:"footer-bottom",children:[I.jsxs("p",{children:["© ",o," Darshil Goti. All Rights Reserved."]}),I.jsxs("p",{children:["Visitors: ",e]})]})]})})},dA=()=>{const[o,e]=$t.useState(!1),i=()=>{window.pageYOffset>300?e(!0):e(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return $t.useEffect(()=>(window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)),[]),I.jsx("div",{className:`scroll-to-top ${o?"visible":""}`,children:I.jsx("button",{onClick:r,"aria-label":"Scroll to top",children:I.jsx("i",{className:"fas fa-arrow-up"})})})},pA=()=>{const o=$t.useRef(null),e=$t.useRef(null),i=$t.useRef(null),r=$t.useRef(null),l=$t.useRef(null);return $t.useEffect(()=>{if(!o.current)return;i.current=new bv;const u=window.innerWidth/window.innerHeight;r.current=new Pn(75,u,.1,1e3),r.current.position.z=30,e.current=new Dh({antialias:!0,alpha:!0}),e.current.setSize(window.innerWidth,window.innerHeight),e.current.setPixelRatio(window.devicePixelRatio),o.current.appendChild(e.current.domElement);const d=new Bn,h=2e3,m=new Float32Array(h*3);for(let S=0;S<h*3;S++)m[S]=(Math.random()-.5)*100;d.setAttribute("position",new Yn(m,3));const p=new Nh({size:.1,transparent:!0,blending:uh});p.color=new xe("#9d4edd");const g=new Rv(d,p);i.current.add(g);const x=new Uh({color:"#9d4edd",transparent:!0,opacity:.2}),v=50,y=[];for(let S=0;S<v;S++){const _=new Bn,O=[],L=new Z((Math.random()-.5)*100,(Math.random()-.5)*100,(Math.random()-.5)*100),N=new Z(L.x+(Math.random()-.5)*20,L.y+(Math.random()-.5)*20,L.z+(Math.random()-.5)*20);O.push(L,N),_.setFromPoints(O);const D=new Av(_,x);i.current.add(D),y.push({line:D,velocity:Math.random()*.01+.005})}const T=()=>{g.rotation.x+=5e-4,g.rotation.y+=5e-4,y.forEach(S=>{S.line.rotation.x+=S.velocity*.1,S.line.rotation.y+=S.velocity*.15}),e.current.render(i.current,r.current),l.current=requestAnimationFrame(T)};T();const b=()=>{const S=window.innerWidth,_=window.innerHeight;e.current.setSize(S,_),r.current.aspect=S/_,r.current.updateProjectionMatrix()};return window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b),l.current&&cancelAnimationFrame(l.current),e.current&&o.current&&o.current.removeChild(e.current.domElement)}},[]),I.jsx("div",{ref:o,className:"background-animation"})};function mA(){const[o,e]=$t.useState(0);return $t.useEffect(()=>{const i=()=>{e(window.scrollY)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[]),I.jsxs("div",{className:"app",children:[I.jsx(pA,{}),I.jsx(Wx,{scrollPosition:o}),I.jsxs("main",{children:[I.jsx(nA,{}),I.jsx(iA,{}),I.jsx(aA,{}),I.jsx(rA,{}),I.jsx(sA,{}),I.jsx(oA,{}),I.jsx(lA,{}),I.jsx(cA,{}),I.jsx(uA,{}),I.jsx(fA,{})]}),I.jsx(hA,{}),I.jsx(dA,{})]})}const gA=kx.createRoot(document.getElementById("root"));gA.render(I.jsx(mA,{}));
