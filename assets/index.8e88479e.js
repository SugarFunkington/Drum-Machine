(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function ua(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const fl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cl=ua(fl);function vo(e){return!!e||e===""}function da(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=he(r)?ml(r):da(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(he(e))return e;if(ne(e))return e}}const ul=/;(?![^(]*\))/g,dl=/:(.+)/;function ml(e){const t={};return e.split(ul).forEach(n=>{if(n){const r=n.split(dl);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Tt(e){let t="";if(he(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const r=Tt(e[n]);r&&(t+=r+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bo=e=>he(e)?e:e==null?"":j(e)||ne(e)&&(e.toString===wo||!U(e.toString))?JSON.stringify(e,yo,2):String(e),yo=(e,t)=>t&&t.__v_isRef?yo(e,t.value):Dt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:_o(t)?{[`Set(${t.size})`]:[...t.values()]}:ne(t)&&!j(t)&&!ko(t)?String(t):t,G={},$t=[],Re=()=>{},pl=()=>!1,hl=/^on[^a-z]/,or=e=>hl.test(e),ma=e=>e.startsWith("onUpdate:"),pe=Object.assign,pa=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},gl=Object.prototype.hasOwnProperty,W=(e,t)=>gl.call(e,t),j=Array.isArray,Dt=e=>sr(e)==="[object Map]",_o=e=>sr(e)==="[object Set]",U=e=>typeof e=="function",he=e=>typeof e=="string",ha=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",xo=e=>ne(e)&&U(e.then)&&U(e.catch),wo=Object.prototype.toString,sr=e=>wo.call(e),vl=e=>sr(e).slice(8,-1),ko=e=>sr(e)==="[object Object]",ga=e=>he(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Un=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),lr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bl=/-(\w)/g,Ye=lr(e=>e.replace(bl,(t,n)=>n?n.toUpperCase():"")),yl=/\B([A-Z])/g,Vt=lr(e=>e.replace(yl,"-$1").toLowerCase()),fr=lr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=lr(e=>e?`on${fr(e)}`:""),fn=(e,t)=>!Object.is(e,t),Er=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Jn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ao=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ri;const _l=()=>ri||(ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ze;class Co{constructor(t=!1){this.detached=t,this.active=!0,this.effects=[],this.cleanups=[],this.parent=ze,!t&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}run(t){if(this.active){const n=ze;try{return ze=this,t()}finally{ze=n}}}on(){ze=this}off(){ze=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this.active=!1}}}function Eo(e){return new Co(e)}function xl(e,t=ze){t&&t.active&&t.effects.push(e)}const va=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Po=e=>(e.w&ct)>0,Oo=e=>(e.n&ct)>0,wl=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ct},kl=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Po(a)&&!Oo(a)?a.delete(e):t[n++]=a,a.w&=~ct,a.n&=~ct}t.length=n}},Fr=new WeakMap;let en=0,ct=1;const $r=30;let Te;const Et=Symbol(""),Dr=Symbol("");class ba{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xl(this,r)}run(){if(!this.active)return this.fn();let t=Te,n=st;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Te,Te=this,st=!0,ct=1<<++en,en<=$r?wl(this):ai(this),this.fn()}finally{en<=$r&&kl(this),ct=1<<--en,Te=this.parent,st=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Te===this?this.deferStop=!0:this.active&&(ai(this),this.onStop&&this.onStop(),this.active=!1)}}function ai(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let st=!0;const So=[];function qt(){So.push(st),st=!1}function Xt(){const e=So.pop();st=e===void 0?!0:e}function Ce(e,t,n){if(st&&Te){let r=Fr.get(e);r||Fr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=va()),To(a)}}function To(e,t){let n=!1;en<=$r?Oo(e)||(e.n|=ct,n=!Po(e)):n=!e.has(Te),n&&(e.add(Te),Te.deps.push(e))}function qe(e,t,n,r,a,i){const o=Fr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&j(e))o.forEach((l,f)=>{(f==="length"||f>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":j(e)?ga(n)&&s.push(o.get("length")):(s.push(o.get(Et)),Dt(e)&&s.push(o.get(Dr)));break;case"delete":j(e)||(s.push(o.get(Et)),Dt(e)&&s.push(o.get(Dr)));break;case"set":Dt(e)&&s.push(o.get(Et));break}if(s.length===1)s[0]&&jr(s[0]);else{const l=[];for(const f of s)f&&l.push(...f);jr(va(l))}}function jr(e,t){const n=j(e)?e:[...e];for(const r of n)r.computed&&ii(r);for(const r of n)r.computed||ii(r)}function ii(e,t){(e!==Te||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Al=ua("__proto__,__v_isRef,__isVue"),Io=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ha)),Cl=ya(),El=ya(!1,!0),Pl=ya(!0),oi=Ol();function Ol(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=V(this);for(let i=0,o=this.length;i<o;i++)Ce(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(V)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){qt();const r=V(this)[t].apply(this,n);return Xt(),r}}),e}function ya(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Yl:Fo:t?Ro:Mo).get(r))return r;const o=j(r);if(!e&&o&&W(oi,a))return Reflect.get(oi,a,i);const s=Reflect.get(r,a,i);return(ha(a)?Io.has(a):Al(a))||(e||Ce(r,"get",a),t)?s:oe(s)?o&&ga(a)?s:s.value:ne(s)?e?$o(s):ur(s):s}}const Sl=Lo(),Tl=Lo(!0);function Lo(e=!1){return function(n,r,a,i){let o=n[r];if(Ht(o)&&oe(o)&&!oe(a))return!1;if(!e&&(!Gn(a)&&!Ht(a)&&(o=V(o),a=V(a)),!j(n)&&oe(o)&&!oe(a)))return o.value=a,!0;const s=j(n)&&ga(r)?Number(r)<n.length:W(n,r),l=Reflect.set(n,r,a,i);return n===V(i)&&(s?fn(a,o)&&qe(n,"set",r,a):qe(n,"add",r,a)),l}}function Il(e,t){const n=W(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&qe(e,"delete",t,void 0),r}function Ll(e,t){const n=Reflect.has(e,t);return(!ha(t)||!Io.has(t))&&Ce(e,"has",t),n}function Nl(e){return Ce(e,"iterate",j(e)?"length":Et),Reflect.ownKeys(e)}const No={get:Cl,set:Sl,deleteProperty:Il,has:Ll,ownKeys:Nl},Ml={get:Pl,set(e,t){return!0},deleteProperty(e,t){return!0}},Rl=pe({},No,{get:El,set:Tl}),_a=e=>e,cr=e=>Reflect.getPrototypeOf(e);function Sn(e,t,n=!1,r=!1){e=e.__v_raw;const a=V(e),i=V(t);n||(t!==i&&Ce(a,"get",t),Ce(a,"get",i));const{has:o}=cr(a),s=r?_a:n?ka:cn;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Tn(e,t=!1){const n=this.__v_raw,r=V(n),a=V(e);return t||(e!==a&&Ce(r,"has",e),Ce(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function In(e,t=!1){return e=e.__v_raw,!t&&Ce(V(e),"iterate",Et),Reflect.get(e,"size",e)}function si(e){e=V(e);const t=V(this);return cr(t).has.call(t,e)||(t.add(e),qe(t,"add",e,e)),this}function li(e,t){t=V(t);const n=V(this),{has:r,get:a}=cr(n);let i=r.call(n,e);i||(e=V(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?fn(t,o)&&qe(n,"set",e,t):qe(n,"add",e,t),this}function fi(e){const t=V(this),{has:n,get:r}=cr(t);let a=n.call(t,e);a||(e=V(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&qe(t,"delete",e,void 0),i}function ci(){const e=V(this),t=e.size!==0,n=e.clear();return t&&qe(e,"clear",void 0,void 0),n}function Ln(e,t){return function(r,a){const i=this,o=i.__v_raw,s=V(o),l=t?_a:e?ka:cn;return!e&&Ce(s,"iterate",Et),o.forEach((f,u)=>r.call(a,l(f),l(u),i))}}function Nn(e,t,n){return function(...r){const a=this.__v_raw,i=V(a),o=Dt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,f=a[e](...r),u=n?_a:t?ka:cn;return!t&&Ce(i,"iterate",l?Dr:Et),{next(){const{value:m,done:p}=f.next();return p?{value:m,done:p}:{value:s?[u(m[0]),u(m[1])]:u(m),done:p}},[Symbol.iterator](){return this}}}}function tt(e){return function(...t){return e==="delete"?!1:this}}function Fl(){const e={get(i){return Sn(this,i)},get size(){return In(this)},has:Tn,add:si,set:li,delete:fi,clear:ci,forEach:Ln(!1,!1)},t={get(i){return Sn(this,i,!1,!0)},get size(){return In(this)},has:Tn,add:si,set:li,delete:fi,clear:ci,forEach:Ln(!1,!0)},n={get(i){return Sn(this,i,!0)},get size(){return In(this,!0)},has(i){return Tn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Ln(!0,!1)},r={get(i){return Sn(this,i,!0,!0)},get size(){return In(this,!0)},has(i){return Tn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Ln(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Nn(i,!1,!1),n[i]=Nn(i,!0,!1),t[i]=Nn(i,!1,!0),r[i]=Nn(i,!0,!0)}),[e,n,t,r]}const[$l,Dl,jl,zl]=Fl();function xa(e,t){const n=t?e?zl:jl:e?Dl:$l;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(W(n,a)&&a in r?n:r,a,i)}const Bl={get:xa(!1,!1)},Hl={get:xa(!1,!0)},Ul={get:xa(!0,!1)},Mo=new WeakMap,Ro=new WeakMap,Fo=new WeakMap,Yl=new WeakMap;function Wl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kl(e){return e.__v_skip||!Object.isExtensible(e)?0:Wl(vl(e))}function ur(e){return Ht(e)?e:wa(e,!1,No,Bl,Mo)}function Vl(e){return wa(e,!1,Rl,Hl,Ro)}function $o(e){return wa(e,!0,Ml,Ul,Fo)}function wa(e,t,n,r,a){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Kl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function lt(e){return Ht(e)?lt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function Gn(e){return!!(e&&e.__v_isShallow)}function Do(e){return lt(e)||Ht(e)}function V(e){const t=e&&e.__v_raw;return t?V(t):e}function Ut(e){return Jn(e,"__v_skip",!0),e}const cn=e=>ne(e)?ur(e):e,ka=e=>ne(e)?$o(e):e;function jo(e){st&&Te&&(e=V(e),To(e.dep||(e.dep=va())))}function zo(e,t){e=V(e),e.dep&&jr(e.dep)}function oe(e){return!!(e&&e.__v_isRef===!0)}function Bo(e){return ql(e,!1)}function ql(e,t){return oe(e)?e:new Xl(e,t)}class Xl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:V(t),this._value=n?t:cn(t)}get value(){return jo(this),this._value}set value(t){const n=this.__v_isShallow||Gn(t)||Ht(t);t=n?t:V(t),fn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:cn(t),zo(this))}}function Jl(e){return oe(e)?e.value:e}const Gl={get:(e,t,n)=>Jl(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return oe(a)&&!oe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ho(e){return lt(e)?e:new Proxy(e,Gl)}function Zl(e){const t=j(e)?new Array(e.length):{};for(const n in e)t[n]=ef(e,n);return t}class Ql{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function ef(e,t,n){const r=e[t];return oe(r)?r:new Ql(e,t,n)}var Uo;class tf{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Uo]=!1,this._dirty=!0,this.effect=new ba(t,()=>{this._dirty||(this._dirty=!0,zo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=V(this);return jo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Uo="__v_isReadonly";function nf(e,t,n=!1){let r,a;const i=U(e);return i?(r=e,a=Re):(r=e.get,a=e.set),new tf(r,a,i||!a,n)}function ft(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){dr(i,t,n)}return a}function Oe(e,t,n,r){if(U(e)){const i=ft(e,t,n,r);return i&&xo(i)&&i.catch(o=>{dr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function dr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const f=i.ec;if(f){for(let u=0;u<f.length;u++)if(f[u](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){ft(l,null,10,[e,o,s]);return}}rf(e,n,a,r)}function rf(e,t,n,r=!0){console.error(e)}let un=!1,zr=!1;const ve=[];let He=0;const jt=[];let Ve=null,xt=0;const Yo=Promise.resolve();let Aa=null;function Wo(e){const t=Aa||Yo;return e?t.then(this?e.bind(this):e):t}function af(e){let t=He+1,n=ve.length;for(;t<n;){const r=t+n>>>1;dn(ve[r])<e?t=r+1:n=r}return t}function Ca(e){(!ve.length||!ve.includes(e,un&&e.allowRecurse?He+1:He))&&(e.id==null?ve.push(e):ve.splice(af(e.id),0,e),Ko())}function Ko(){!un&&!zr&&(zr=!0,Aa=Yo.then(qo))}function of(e){const t=ve.indexOf(e);t>He&&ve.splice(t,1)}function sf(e){j(e)?jt.push(...e):(!Ve||!Ve.includes(e,e.allowRecurse?xt+1:xt))&&jt.push(e),Ko()}function ui(e,t=un?He+1:0){for(;t<ve.length;t++){const n=ve[t];n&&n.pre&&(ve.splice(t,1),t--,n())}}function Vo(e){if(jt.length){const t=[...new Set(jt)];if(jt.length=0,Ve){Ve.push(...t);return}for(Ve=t,Ve.sort((n,r)=>dn(n)-dn(r)),xt=0;xt<Ve.length;xt++)Ve[xt]();Ve=null,xt=0}}const dn=e=>e.id==null?1/0:e.id,lf=(e,t)=>{const n=dn(e)-dn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function qo(e){zr=!1,un=!0,ve.sort(lf);const t=Re;try{for(He=0;He<ve.length;He++){const n=ve[He];n&&n.active!==!1&&ft(n,null,14)}}finally{He=0,ve.length=0,Vo(),un=!1,Aa=null,(ve.length||jt.length)&&qo()}}function ff(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||G;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:p}=r[u]||G;p&&(a=n.map(_=>_.trim())),m&&(a=n.map(Ao))}let s,l=r[s=Cr(t)]||r[s=Cr(Ye(t))];!l&&i&&(l=r[s=Cr(Vt(t))]),l&&Oe(l,e,6,a);const f=r[s+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(f,e,6,a)}}function Xo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!U(e)){const l=f=>{const u=Xo(f,t,!0);u&&(s=!0,pe(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(ne(e)&&r.set(e,null),null):(j(i)?i.forEach(l=>o[l]=null):pe(o,i),ne(e)&&r.set(e,o),o)}function mr(e,t){return!e||!or(t)?!1:(t=t.slice(2).replace(/Once$/,""),W(e,t[0].toLowerCase()+t.slice(1))||W(e,Vt(t))||W(e,t))}let Le=null,Jo=null;function Zn(e){const t=Le;return Le=e,Jo=e&&e.type.__scopeId||null,t}function Go(e,t=Le,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&wi(-1);const i=Zn(t);let o;try{o=e(...a)}finally{Zn(i),r._d&&wi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Pr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:f,render:u,renderCache:m,data:p,setupState:_,ctx:S,inheritAttrs:O}=e;let $,b;const C=Zn(e);try{if(n.shapeFlag&4){const D=a||r;$=Be(u.call(D,D,m,i,_,p,S)),b=l}else{const D=t;$=Be(D.length>1?D(i,{attrs:l,slots:s,emit:f}):D(i,null)),b=t.props?l:cf(l)}}catch(D){rn.length=0,dr(D,e,1),$=me(Fe)}let R=$;if(b&&O!==!1){const D=Object.keys(b),{shapeFlag:F}=R;D.length&&F&7&&(o&&D.some(ma)&&(b=uf(b,o)),R=ut(R,b))}return n.dirs&&(R=ut(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),$=R,Zn(C),$}const cf=e=>{let t;for(const n in e)(n==="class"||n==="style"||or(n))&&((t||(t={}))[n]=e[n]);return t},uf=(e,t)=>{const n={};for(const r in e)(!ma(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function df(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?di(r,o,f):!!o;if(l&8){const u=t.dynamicProps;for(let m=0;m<u.length;m++){const p=u[m];if(o[p]!==r[p]&&!mr(f,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?di(r,o,f):!0:!!o;return!1}function di(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!mr(n,i))return!0}return!1}function mf({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pf=e=>e.__isSuspense;function hf(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):sf(e)}function gf(e,t){if(de){let n=de.provides;const r=de.parent&&de.parent.provides;r===n&&(n=de.provides=Object.create(r)),n[e]=t}}function Yn(e,t,n=!1){const r=de||Le;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&U(t)?t.call(r.proxy):t}}function vf(e,t){return Ea(e,null,{flush:"post"})}const mi={};function nn(e,t,n){return Ea(e,t,n)}function Ea(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=G){const s=de;let l,f=!1,u=!1;if(oe(e)?(l=()=>e.value,f=Gn(e)):lt(e)?(l=()=>e,r=!0):j(e)?(u=!0,f=e.some(b=>lt(b)||Gn(b)),l=()=>e.map(b=>{if(oe(b))return b.value;if(lt(b))return Mt(b);if(U(b))return ft(b,s,2)})):U(e)?t?l=()=>ft(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Oe(e,s,3,[p])}:l=Re,t&&r){const b=l;l=()=>Mt(b())}let m,p=b=>{m=$.onStop=()=>{ft(b,s,4)}};if(gn)return p=Re,t?n&&Oe(t,s,3,[l(),u?[]:void 0,p]):l(),Re;let _=u?[]:mi;const S=()=>{if(!!$.active)if(t){const b=$.run();(r||f||(u?b.some((C,R)=>fn(C,_[R])):fn(b,_)))&&(m&&m(),Oe(t,s,3,[b,_===mi?void 0:_,p]),_=b)}else $.run()};S.allowRecurse=!!t;let O;a==="sync"?O=S:a==="post"?O=()=>xe(S,s&&s.suspense):(S.pre=!0,s&&(S.id=s.uid),O=()=>Ca(S));const $=new ba(l,O);return t?n?S():_=$.run():a==="post"?xe($.run.bind($),s&&s.suspense):$.run(),()=>{$.stop(),s&&s.scope&&pa(s.scope.effects,$)}}function bf(e,t,n){const r=this.proxy,a=he(e)?e.includes(".")?Zo(r,e):()=>r[e]:e.bind(r,r);let i;U(t)?i=t:(i=t.handler,n=t);const o=de;Wt(this);const s=Ea(a,i.bind(r),n);return o?Wt(o):Pt(),s}function Zo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Mt(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),oe(e))Mt(e.value,t);else if(j(e))for(let n=0;n<e.length;n++)Mt(e[n],t);else if(_o(e)||Dt(e))e.forEach(n=>{Mt(n,t)});else if(ko(e))for(const n in e)Mt(e[n],t);return e}function Qo(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Sa(()=>{e.isMounted=!0}),rs(()=>{e.isUnmounting=!0}),e}const Pe=[Function,Array],yf={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Pe,onEnter:Pe,onAfterEnter:Pe,onEnterCancelled:Pe,onBeforeLeave:Pe,onLeave:Pe,onAfterLeave:Pe,onLeaveCancelled:Pe,onBeforeAppear:Pe,onAppear:Pe,onAfterAppear:Pe,onAppearCancelled:Pe},setup(e,{slots:t}){const n=wn(),r=Qo();let a;return()=>{const i=t.default&&Pa(t.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const O of i)if(O.type!==Fe){o=O;break}}const s=V(e),{mode:l}=s;if(r.isLeaving)return Or(o);const f=pi(o);if(!f)return Or(o);const u=mn(f,s,r,n);pn(f,u);const m=n.subTree,p=m&&pi(m);let _=!1;const{getTransitionKey:S}=f.type;if(S){const O=S();a===void 0?a=O:O!==a&&(a=O,_=!0)}if(p&&p.type!==Fe&&(!wt(f,p)||_)){const O=mn(p,s,r,n);if(pn(p,O),l==="out-in")return r.isLeaving=!0,O.afterLeave=()=>{r.isLeaving=!1,n.update()},Or(o);l==="in-out"&&f.type!==Fe&&(O.delayLeave=($,b,C)=>{const R=es(r,p);R[String(p.key)]=p,$._leaveCb=()=>{b(),$._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=C})}return o}}},_f=yf;function es(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function mn(e,t,n,r){const{appear:a,mode:i,persisted:o=!1,onBeforeEnter:s,onEnter:l,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:m,onLeave:p,onAfterLeave:_,onLeaveCancelled:S,onBeforeAppear:O,onAppear:$,onAfterAppear:b,onAppearCancelled:C}=t,R=String(e.key),D=es(n,e),F=(P,H)=>{P&&Oe(P,r,9,H)},Z=(P,H)=>{const K=H[1];F(P,H),j(P)?P.every(re=>re.length<=1)&&K():P.length<=1&&K()},z={mode:i,persisted:o,beforeEnter(P){let H=s;if(!n.isMounted)if(a)H=O||s;else return;P._leaveCb&&P._leaveCb(!0);const K=D[R];K&&wt(e,K)&&K.el._leaveCb&&K.el._leaveCb(),F(H,[P])},enter(P){let H=l,K=f,re=u;if(!n.isMounted)if(a)H=$||l,K=b||f,re=C||u;else return;let L=!1;const Q=P._enterCb=le=>{L||(L=!0,le?F(re,[P]):F(K,[P]),z.delayedLeave&&z.delayedLeave(),P._enterCb=void 0)};H?Z(H,[P,Q]):Q()},leave(P,H){const K=String(e.key);if(P._enterCb&&P._enterCb(!0),n.isUnmounting)return H();F(m,[P]);let re=!1;const L=P._leaveCb=Q=>{re||(re=!0,H(),Q?F(S,[P]):F(_,[P]),P._leaveCb=void 0,D[K]===e&&delete D[K])};D[K]=e,p?Z(p,[P,L]):L()},clone(P){return mn(P,t,n,r)}};return z}function Or(e){if(pr(e))return e=ut(e),e.children=null,e}function pi(e){return pr(e)?e.children?e.children[0]:void 0:e}function pn(e,t){e.shapeFlag&6&&e.component?pn(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Pa(e,t=!1,n){let r=[],a=0;for(let i=0;i<e.length;i++){let o=e[i];const s=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ge?(o.patchFlag&128&&a++,r=r.concat(Pa(o.children,t,s))):(t||o.type!==Fe)&&r.push(s!=null?ut(o,{key:s}):o)}if(a>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Oa(e){return U(e)?{setup:e,name:e.name}:e}const Wn=e=>!!e.type.__asyncLoader,pr=e=>e.type.__isKeepAlive;function xf(e,t){ts(e,"a",t)}function wf(e,t){ts(e,"da",t)}function ts(e,t,n=de){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(hr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)pr(a.parent.vnode)&&kf(r,t,n,a),a=a.parent}}function kf(e,t,n,r){const a=hr(t,e,r,!0);gr(()=>{pa(r[t],a)},n)}function hr(e,t,n=de,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;qt(),Wt(n);const s=Oe(t,n,e,o);return Pt(),Xt(),s});return r?a.unshift(i):a.push(i),i}}const Qe=e=>(t,n=de)=>(!gn||e==="sp")&&hr(e,(...r)=>t(...r),n),Af=Qe("bm"),Sa=Qe("m"),Cf=Qe("bu"),ns=Qe("u"),rs=Qe("bum"),gr=Qe("um"),Ef=Qe("sp"),Pf=Qe("rtg"),Of=Qe("rtc");function Sf(e,t=de){hr("ec",e,t)}function vt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(qt(),Oe(l,n,8,[e.el,s,e,t]),Xt())}}const as="components";function Yt(e,t){return If(as,e,!0,t)||e}const Tf=Symbol();function If(e,t,n=!0,r=!1){const a=Le||de;if(a){const i=a.type;if(e===as){const s=sc(i,!1);if(s&&(s===t||s===Ye(t)||s===fr(Ye(t))))return i}const o=hi(a[e]||i[e],t)||hi(a.appContext[e],t);return!o&&r?i:o}}function hi(e,t){return e&&(e[t]||e[Ye(t)]||e[fr(Ye(t))])}function Ta(e,t,n,r){let a;const i=n&&n[r];if(j(e)||he(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(ne(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const f=o[s];a[s]=t(e[f],f,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Br=e=>e?hs(e)?Ra(e)||e.proxy:Br(e.parent):null,Qn=pe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Br(e.parent),$root:e=>Br(e.root),$emit:e=>e.emit,$options:e=>Ia(e),$forceUpdate:e=>e.f||(e.f=()=>Ca(e.update)),$nextTick:e=>e.n||(e.n=Wo.bind(e.proxy)),$watch:e=>bf.bind(e)}),Lf={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let f;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==G&&W(r,t))return o[t]=1,r[t];if(a!==G&&W(a,t))return o[t]=2,a[t];if((f=e.propsOptions[0])&&W(f,t))return o[t]=3,i[t];if(n!==G&&W(n,t))return o[t]=4,n[t];Hr&&(o[t]=0)}}const u=Qn[t];let m,p;if(u)return t==="$attrs"&&Ce(e,"get",t),u(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==G&&W(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,W(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==G&&W(a,t)?(a[t]=n,!0):r!==G&&W(r,t)?(r[t]=n,!0):W(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==G&&W(e,o)||t!==G&&W(t,o)||(s=i[0])&&W(s,o)||W(r,o)||W(Qn,o)||W(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:W(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Hr=!0;function Nf(e){const t=Ia(e),n=e.proxy,r=e.ctx;Hr=!1,t.beforeCreate&&gi(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:f,created:u,beforeMount:m,mounted:p,beforeUpdate:_,updated:S,activated:O,deactivated:$,beforeDestroy:b,beforeUnmount:C,destroyed:R,unmounted:D,render:F,renderTracked:Z,renderTriggered:z,errorCaptured:P,serverPrefetch:H,expose:K,inheritAttrs:re,components:L,directives:Q,filters:le}=t;if(f&&Mf(f,r,null,e.appContext.config.unwrapInjectedRef),o)for(const ae in o){const X=o[ae];U(X)&&(r[ae]=X.bind(n))}if(a){const ae=a.call(n,n);ne(ae)&&(e.data=ur(ae))}if(Hr=!0,i)for(const ae in i){const X=i[ae],ht=U(X)?X.bind(n,n):U(X.get)?X.get.bind(n,n):Re,Pn=!U(X)&&U(X.set)?X.set.bind(n):Re,gt=Ae({get:ht,set:Pn});Object.defineProperty(r,ae,{enumerable:!0,configurable:!0,get:()=>gt.value,set:$e=>gt.value=$e})}if(s)for(const ae in s)is(s[ae],r,n,ae);if(l){const ae=U(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(X=>{gf(X,ae[X])})}u&&gi(u,e,"c");function ue(ae,X){j(X)?X.forEach(ht=>ae(ht.bind(n))):X&&ae(X.bind(n))}if(ue(Af,m),ue(Sa,p),ue(Cf,_),ue(ns,S),ue(xf,O),ue(wf,$),ue(Sf,P),ue(Of,Z),ue(Pf,z),ue(rs,C),ue(gr,D),ue(Ef,H),j(K))if(K.length){const ae=e.exposed||(e.exposed={});K.forEach(X=>{Object.defineProperty(ae,X,{get:()=>n[X],set:ht=>n[X]=ht})})}else e.exposed||(e.exposed={});F&&e.render===Re&&(e.render=F),re!=null&&(e.inheritAttrs=re),L&&(e.components=L),Q&&(e.directives=Q)}function Mf(e,t,n=Re,r=!1){j(e)&&(e=Ur(e));for(const a in e){const i=e[a];let o;ne(i)?"default"in i?o=Yn(i.from||a,i.default,!0):o=Yn(i.from||a):o=Yn(i),oe(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function gi(e,t,n){Oe(j(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function is(e,t,n,r){const a=r.includes(".")?Zo(n,r):()=>n[r];if(he(e)){const i=t[e];U(i)&&nn(a,i)}else if(U(e))nn(a,e.bind(n));else if(ne(e))if(j(e))e.forEach(i=>is(i,t,n,r));else{const i=U(e.handler)?e.handler.bind(n):t[e.handler];U(i)&&nn(a,i,e)}}function Ia(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(f=>er(l,f,o,!0)),er(l,t,o)),ne(t)&&i.set(t,l),l}function er(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&er(e,i,n,!0),a&&a.forEach(o=>er(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Rf[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Rf={data:vi,props:_t,emits:_t,methods:_t,computed:_t,beforeCreate:be,created:be,beforeMount:be,mounted:be,beforeUpdate:be,updated:be,beforeDestroy:be,beforeUnmount:be,destroyed:be,unmounted:be,activated:be,deactivated:be,errorCaptured:be,serverPrefetch:be,components:_t,directives:_t,watch:$f,provide:vi,inject:Ff};function vi(e,t){return t?e?function(){return pe(U(e)?e.call(this,this):e,U(t)?t.call(this,this):t)}:t:e}function Ff(e,t){return _t(Ur(e),Ur(t))}function Ur(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function be(e,t){return e?[...new Set([].concat(e,t))]:t}function _t(e,t){return e?pe(pe(Object.create(null),e),t):t}function $f(e,t){if(!e)return t;if(!t)return e;const n=pe(Object.create(null),e);for(const r in t)n[r]=be(e[r],t[r]);return n}function Df(e,t,n,r=!1){const a={},i={};Jn(i,vr,1),e.propsDefaults=Object.create(null),os(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Vl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function jf(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=V(a),[l]=e.propsOptions;let f=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let m=0;m<u.length;m++){let p=u[m];if(mr(e.emitsOptions,p))continue;const _=t[p];if(l)if(W(i,p))_!==i[p]&&(i[p]=_,f=!0);else{const S=Ye(p);a[S]=Yr(l,s,S,_,e,!1)}else _!==i[p]&&(i[p]=_,f=!0)}}}else{os(e,t,a,i)&&(f=!0);let u;for(const m in s)(!t||!W(t,m)&&((u=Vt(m))===m||!W(t,u)))&&(l?n&&(n[m]!==void 0||n[u]!==void 0)&&(a[m]=Yr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!W(t,m)&&!0)&&(delete i[m],f=!0)}f&&qe(e,"set","$attrs")}function os(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Un(l))continue;const f=t[l];let u;a&&W(a,u=Ye(l))?!i||!i.includes(u)?n[u]=f:(s||(s={}))[u]=f:mr(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,o=!0)}if(i){const l=V(n),f=s||G;for(let u=0;u<i.length;u++){const m=i[u];n[m]=Yr(a,l,m,f[m],e,!W(f,m))}}return o}function Yr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=W(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&U(l)){const{propsDefaults:f}=a;n in f?r=f[n]:(Wt(a),r=f[n]=l.call(null,t),Pt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Vt(n))&&(r=!0))}return r}function ss(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!U(e)){const u=m=>{l=!0;const[p,_]=ss(m,t,!0);pe(o,p),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return ne(e)&&r.set(e,$t),$t;if(j(i))for(let u=0;u<i.length;u++){const m=Ye(i[u]);bi(m)&&(o[m]=G)}else if(i)for(const u in i){const m=Ye(u);if(bi(m)){const p=i[u],_=o[m]=j(p)||U(p)?{type:p}:p;if(_){const S=xi(Boolean,_.type),O=xi(String,_.type);_[0]=S>-1,_[1]=O<0||S<O,(S>-1||W(_,"default"))&&s.push(m)}}}const f=[o,s];return ne(e)&&r.set(e,f),f}function bi(e){return e[0]!=="$"}function yi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function _i(e,t){return yi(e)===yi(t)}function xi(e,t){return j(t)?t.findIndex(n=>_i(n,e)):U(t)&&_i(t,e)?0:-1}const ls=e=>e[0]==="_"||e==="$stable",La=e=>j(e)?e.map(Be):[Be(e)],zf=(e,t,n)=>{if(t._n)return t;const r=Go((...a)=>La(t(...a)),n);return r._c=!1,r},fs=(e,t,n)=>{const r=e._ctx;for(const a in e){if(ls(a))continue;const i=e[a];if(U(i))t[a]=zf(a,i,r);else if(i!=null){const o=La(i);t[a]=()=>o}}},cs=(e,t)=>{const n=La(t);e.slots.default=()=>n},Bf=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=V(t),Jn(t,"_",n)):fs(t,e.slots={})}else e.slots={},t&&cs(e,t);Jn(e.slots,vr,1)},Hf=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=G;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(pe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,fs(t,a)),o=t}else t&&(cs(e,t),o={default:1});if(i)for(const s in a)!ls(s)&&!(s in o)&&delete a[s]};function us(){return{app:null,config:{isNativeTag:pl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uf=0;function Yf(e,t){return function(r,a=null){U(r)||(r=Object.assign({},r)),a!=null&&!ne(a)&&(a=null);const i=us(),o=new Set;let s=!1;const l=i.app={_uid:Uf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:fc,get config(){return i.config},set config(f){},use(f,...u){return o.has(f)||(f&&U(f.install)?(o.add(f),f.install(l,...u)):U(f)&&(o.add(f),f(l,...u))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,u){return u?(i.components[f]=u,l):i.components[f]},directive(f,u){return u?(i.directives[f]=u,l):i.directives[f]},mount(f,u,m){if(!s){const p=me(r,a);return p.appContext=i,u&&t?t(p,f):e(p,f,m),s=!0,l._container=f,f.__vue_app__=l,Ra(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(f,u){return i.provides[f]=u,l}};return l}}function Wr(e,t,n,r,a=!1){if(j(e)){e.forEach((p,_)=>Wr(p,t&&(j(t)?t[_]:t),n,r,a));return}if(Wn(r)&&!a)return;const i=r.shapeFlag&4?Ra(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,f=t&&t.r,u=s.refs===G?s.refs={}:s.refs,m=s.setupState;if(f!=null&&f!==l&&(he(f)?(u[f]=null,W(m,f)&&(m[f]=null)):oe(f)&&(f.value=null)),U(l))ft(l,s,12,[o,u]);else{const p=he(l),_=oe(l);if(p||_){const S=()=>{if(e.f){const O=p?W(m,l)?m[l]:u[l]:l.value;a?j(O)&&pa(O,i):j(O)?O.includes(i)||O.push(i):p?(u[l]=[i],W(m,l)&&(m[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,W(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(u[e.k]=o))};o?(S.id=-1,xe(S,n)):S()}}}const xe=hf;function Wf(e){return Kf(e)}function Kf(e,t){const n=_l();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:f,setElementText:u,parentNode:m,nextSibling:p,setScopeId:_=Re,insertStaticContent:S}=e,O=(c,d,h,v=null,g=null,w=null,A=!1,x=null,k=!!d.dynamicChildren)=>{if(c===d)return;c&&!wt(c,d)&&(v=On(c),$e(c,g,w,!0),c=null),d.patchFlag===-2&&(k=!1,d.dynamicChildren=null);const{type:y,ref:N,shapeFlag:T}=d;switch(y){case Na:$(c,d,h,v);break;case Fe:b(c,d,h,v);break;case Kn:c==null&&C(d,h,v,A);break;case ge:L(c,d,h,v,g,w,A,x,k);break;default:T&1?F(c,d,h,v,g,w,A,x,k):T&6?Q(c,d,h,v,g,w,A,x,k):(T&64||T&128)&&y.process(c,d,h,v,g,w,A,x,k,It)}N!=null&&g&&Wr(N,c&&c.ref,w,d||c,!d)},$=(c,d,h,v)=>{if(c==null)r(d.el=s(d.children),h,v);else{const g=d.el=c.el;d.children!==c.children&&f(g,d.children)}},b=(c,d,h,v)=>{c==null?r(d.el=l(d.children||""),h,v):d.el=c.el},C=(c,d,h,v)=>{[c.el,c.anchor]=S(c.children,d,h,v,c.el,c.anchor)},R=({el:c,anchor:d},h,v)=>{let g;for(;c&&c!==d;)g=p(c),r(c,h,v),c=g;r(d,h,v)},D=({el:c,anchor:d})=>{let h;for(;c&&c!==d;)h=p(c),a(c),c=h;a(d)},F=(c,d,h,v,g,w,A,x,k)=>{A=A||d.type==="svg",c==null?Z(d,h,v,g,w,A,x,k):H(c,d,g,w,A,x,k)},Z=(c,d,h,v,g,w,A,x)=>{let k,y;const{type:N,props:T,shapeFlag:M,transition:B,dirs:Y}=c;if(k=c.el=o(c.type,w,T&&T.is,T),M&8?u(k,c.children):M&16&&P(c.children,k,null,v,g,w&&N!=="foreignObject",A,x),Y&&vt(c,null,v,"created"),T){for(const q in T)q!=="value"&&!Un(q)&&i(k,q,null,T[q],w,c.children,v,g,We);"value"in T&&i(k,"value",null,T.value),(y=T.onVnodeBeforeMount)&&je(y,v,c)}z(k,c,c.scopeId,A,v),Y&&vt(c,null,v,"beforeMount");const J=(!g||g&&!g.pendingBranch)&&B&&!B.persisted;J&&B.beforeEnter(k),r(k,d,h),((y=T&&T.onVnodeMounted)||J||Y)&&xe(()=>{y&&je(y,v,c),J&&B.enter(k),Y&&vt(c,null,v,"mounted")},g)},z=(c,d,h,v,g)=>{if(h&&_(c,h),v)for(let w=0;w<v.length;w++)_(c,v[w]);if(g){let w=g.subTree;if(d===w){const A=g.vnode;z(c,A,A.scopeId,A.slotScopeIds,g.parent)}}},P=(c,d,h,v,g,w,A,x,k=0)=>{for(let y=k;y<c.length;y++){const N=c[y]=x?it(c[y]):Be(c[y]);O(null,N,d,h,v,g,w,A,x)}},H=(c,d,h,v,g,w,A)=>{const x=d.el=c.el;let{patchFlag:k,dynamicChildren:y,dirs:N}=d;k|=c.patchFlag&16;const T=c.props||G,M=d.props||G;let B;h&&bt(h,!1),(B=M.onVnodeBeforeUpdate)&&je(B,h,d,c),N&&vt(d,c,h,"beforeUpdate"),h&&bt(h,!0);const Y=g&&d.type!=="foreignObject";if(y?K(c.dynamicChildren,y,x,h,v,Y,w):A||X(c,d,x,null,h,v,Y,w,!1),k>0){if(k&16)re(x,d,T,M,h,v,g);else if(k&2&&T.class!==M.class&&i(x,"class",null,M.class,g),k&4&&i(x,"style",T.style,M.style,g),k&8){const J=d.dynamicProps;for(let q=0;q<J.length;q++){const se=J[q],Se=T[se],Lt=M[se];(Lt!==Se||se==="value")&&i(x,se,Se,Lt,g,c.children,h,v,We)}}k&1&&c.children!==d.children&&u(x,d.children)}else!A&&y==null&&re(x,d,T,M,h,v,g);((B=M.onVnodeUpdated)||N)&&xe(()=>{B&&je(B,h,d,c),N&&vt(d,c,h,"updated")},v)},K=(c,d,h,v,g,w,A)=>{for(let x=0;x<d.length;x++){const k=c[x],y=d[x],N=k.el&&(k.type===ge||!wt(k,y)||k.shapeFlag&70)?m(k.el):h;O(k,y,N,null,v,g,w,A,!0)}},re=(c,d,h,v,g,w,A)=>{if(h!==v){if(h!==G)for(const x in h)!Un(x)&&!(x in v)&&i(c,x,h[x],null,A,d.children,g,w,We);for(const x in v){if(Un(x))continue;const k=v[x],y=h[x];k!==y&&x!=="value"&&i(c,x,y,k,A,d.children,g,w,We)}"value"in v&&i(c,"value",h.value,v.value)}},L=(c,d,h,v,g,w,A,x,k)=>{const y=d.el=c?c.el:s(""),N=d.anchor=c?c.anchor:s("");let{patchFlag:T,dynamicChildren:M,slotScopeIds:B}=d;B&&(x=x?x.concat(B):B),c==null?(r(y,h,v),r(N,h,v),P(d.children,h,N,g,w,A,x,k)):T>0&&T&64&&M&&c.dynamicChildren?(K(c.dynamicChildren,M,h,g,w,A,x),(d.key!=null||g&&d===g.subTree)&&ds(c,d,!0)):X(c,d,h,N,g,w,A,x,k)},Q=(c,d,h,v,g,w,A,x,k)=>{d.slotScopeIds=x,c==null?d.shapeFlag&512?g.ctx.activate(d,h,v,A,k):le(d,h,v,g,w,A,k):ce(c,d,k)},le=(c,d,h,v,g,w,A)=>{const x=c.component=nc(c,v,g);if(pr(c)&&(x.ctx.renderer=It),rc(x),x.asyncDep){if(g&&g.registerDep(x,ue),!c.el){const k=x.subTree=me(Fe);b(null,k,d,h)}return}ue(x,c,d,h,g,w,A)},ce=(c,d,h)=>{const v=d.component=c.component;if(df(c,d,h))if(v.asyncDep&&!v.asyncResolved){ae(v,d,h);return}else v.next=d,of(v.update),v.update();else d.el=c.el,v.vnode=d},ue=(c,d,h,v,g,w,A)=>{const x=()=>{if(c.isMounted){let{next:N,bu:T,u:M,parent:B,vnode:Y}=c,J=N,q;bt(c,!1),N?(N.el=Y.el,ae(c,N,A)):N=Y,T&&Er(T),(q=N.props&&N.props.onVnodeBeforeUpdate)&&je(q,B,N,Y),bt(c,!0);const se=Pr(c),Se=c.subTree;c.subTree=se,O(Se,se,m(Se.el),On(Se),c,g,w),N.el=se.el,J===null&&mf(c,se.el),M&&xe(M,g),(q=N.props&&N.props.onVnodeUpdated)&&xe(()=>je(q,B,N,Y),g)}else{let N;const{el:T,props:M}=d,{bm:B,m:Y,parent:J}=c,q=Wn(d);if(bt(c,!1),B&&Er(B),!q&&(N=M&&M.onVnodeBeforeMount)&&je(N,J,d),bt(c,!0),T&&Ar){const se=()=>{c.subTree=Pr(c),Ar(T,c.subTree,c,g,null)};q?d.type.__asyncLoader().then(()=>!c.isUnmounted&&se()):se()}else{const se=c.subTree=Pr(c);O(null,se,h,v,c,g,w),d.el=se.el}if(Y&&xe(Y,g),!q&&(N=M&&M.onVnodeMounted)){const se=d;xe(()=>je(N,J,se),g)}(d.shapeFlag&256||J&&Wn(J.vnode)&&J.vnode.shapeFlag&256)&&c.a&&xe(c.a,g),c.isMounted=!0,d=h=v=null}},k=c.effect=new ba(x,()=>Ca(y),c.scope),y=c.update=()=>k.run();y.id=c.uid,bt(c,!0),y()},ae=(c,d,h)=>{d.component=c;const v=c.vnode.props;c.vnode=d,c.next=null,jf(c,d.props,v,h),Hf(c,d.children,h),qt(),ui(),Xt()},X=(c,d,h,v,g,w,A,x,k=!1)=>{const y=c&&c.children,N=c?c.shapeFlag:0,T=d.children,{patchFlag:M,shapeFlag:B}=d;if(M>0){if(M&128){Pn(y,T,h,v,g,w,A,x,k);return}else if(M&256){ht(y,T,h,v,g,w,A,x,k);return}}B&8?(N&16&&We(y,g,w),T!==y&&u(h,T)):N&16?B&16?Pn(y,T,h,v,g,w,A,x,k):We(y,g,w,!0):(N&8&&u(h,""),B&16&&P(T,h,v,g,w,A,x,k))},ht=(c,d,h,v,g,w,A,x,k)=>{c=c||$t,d=d||$t;const y=c.length,N=d.length,T=Math.min(y,N);let M;for(M=0;M<T;M++){const B=d[M]=k?it(d[M]):Be(d[M]);O(c[M],B,h,null,g,w,A,x,k)}y>N?We(c,g,w,!0,!1,T):P(d,h,v,g,w,A,x,k,T)},Pn=(c,d,h,v,g,w,A,x,k)=>{let y=0;const N=d.length;let T=c.length-1,M=N-1;for(;y<=T&&y<=M;){const B=c[y],Y=d[y]=k?it(d[y]):Be(d[y]);if(wt(B,Y))O(B,Y,h,null,g,w,A,x,k);else break;y++}for(;y<=T&&y<=M;){const B=c[T],Y=d[M]=k?it(d[M]):Be(d[M]);if(wt(B,Y))O(B,Y,h,null,g,w,A,x,k);else break;T--,M--}if(y>T){if(y<=M){const B=M+1,Y=B<N?d[B].el:v;for(;y<=M;)O(null,d[y]=k?it(d[y]):Be(d[y]),h,Y,g,w,A,x,k),y++}}else if(y>M)for(;y<=T;)$e(c[y],g,w,!0),y++;else{const B=y,Y=y,J=new Map;for(y=Y;y<=M;y++){const we=d[y]=k?it(d[y]):Be(d[y]);we.key!=null&&J.set(we.key,y)}let q,se=0;const Se=M-Y+1;let Lt=!1,ei=0;const Zt=new Array(Se);for(y=0;y<Se;y++)Zt[y]=0;for(y=B;y<=T;y++){const we=c[y];if(se>=Se){$e(we,g,w,!0);continue}let De;if(we.key!=null)De=J.get(we.key);else for(q=Y;q<=M;q++)if(Zt[q-Y]===0&&wt(we,d[q])){De=q;break}De===void 0?$e(we,g,w,!0):(Zt[De-Y]=y+1,De>=ei?ei=De:Lt=!0,O(we,d[De],h,null,g,w,A,x,k),se++)}const ti=Lt?Vf(Zt):$t;for(q=ti.length-1,y=Se-1;y>=0;y--){const we=Y+y,De=d[we],ni=we+1<N?d[we+1].el:v;Zt[y]===0?O(null,De,h,ni,g,w,A,x,k):Lt&&(q<0||y!==ti[q]?gt(De,h,ni,2):q--)}}},gt=(c,d,h,v,g=null)=>{const{el:w,type:A,transition:x,children:k,shapeFlag:y}=c;if(y&6){gt(c.component.subTree,d,h,v);return}if(y&128){c.suspense.move(d,h,v);return}if(y&64){A.move(c,d,h,It);return}if(A===ge){r(w,d,h);for(let T=0;T<k.length;T++)gt(k[T],d,h,v);r(c.anchor,d,h);return}if(A===Kn){R(c,d,h);return}if(v!==2&&y&1&&x)if(v===0)x.beforeEnter(w),r(w,d,h),xe(()=>x.enter(w),g);else{const{leave:T,delayLeave:M,afterLeave:B}=x,Y=()=>r(w,d,h),J=()=>{T(w,()=>{Y(),B&&B()})};M?M(w,Y,J):J()}else r(w,d,h)},$e=(c,d,h,v=!1,g=!1)=>{const{type:w,props:A,ref:x,children:k,dynamicChildren:y,shapeFlag:N,patchFlag:T,dirs:M}=c;if(x!=null&&Wr(x,null,h,c,!0),N&256){d.ctx.deactivate(c);return}const B=N&1&&M,Y=!Wn(c);let J;if(Y&&(J=A&&A.onVnodeBeforeUnmount)&&je(J,d,c),N&6)ll(c.component,h,v);else{if(N&128){c.suspense.unmount(h,v);return}B&&vt(c,null,d,"beforeUnmount"),N&64?c.type.remove(c,d,h,g,It,v):y&&(w!==ge||T>0&&T&64)?We(y,d,h,!1,!0):(w===ge&&T&384||!g&&N&16)&&We(k,d,h),v&&Za(c)}(Y&&(J=A&&A.onVnodeUnmounted)||B)&&xe(()=>{J&&je(J,d,c),B&&vt(c,null,d,"unmounted")},h)},Za=c=>{const{type:d,el:h,anchor:v,transition:g}=c;if(d===ge){sl(h,v);return}if(d===Kn){D(c);return}const w=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(c.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:x}=g,k=()=>A(h,w);x?x(c.el,w,k):k()}else w()},sl=(c,d)=>{let h;for(;c!==d;)h=p(c),a(c),c=h;a(d)},ll=(c,d,h)=>{const{bum:v,scope:g,update:w,subTree:A,um:x}=c;v&&Er(v),g.stop(),w&&(w.active=!1,$e(A,c,d,h)),x&&xe(x,d),xe(()=>{c.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&c.asyncDep&&!c.asyncResolved&&c.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},We=(c,d,h,v=!1,g=!1,w=0)=>{for(let A=w;A<c.length;A++)$e(c[A],d,h,v,g)},On=c=>c.shapeFlag&6?On(c.component.subTree):c.shapeFlag&128?c.suspense.next():p(c.anchor||c.el),Qa=(c,d,h)=>{c==null?d._vnode&&$e(d._vnode,null,null,!0):O(d._vnode||null,c,d,null,null,null,h),ui(),Vo(),d._vnode=c},It={p:O,um:$e,m:gt,r:Za,mt:le,mc:P,pc:X,pbc:K,n:On,o:e};let kr,Ar;return t&&([kr,Ar]=t(It)),{render:Qa,hydrate:kr,createApp:Yf(Qa,kr)}}function bt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function ds(e,t,n=!1){const r=e.children,a=t.children;if(j(r)&&j(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=it(a[i]),s.el=o.el),n||ds(o,s))}}function Vf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(a=n[n.length-1],e[a]<f){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<f?i=s+1:o=s;f<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const qf=e=>e.__isTeleport,ge=Symbol(void 0),Na=Symbol(void 0),Fe=Symbol(void 0),Kn=Symbol(void 0),rn=[];let Ne=null;function ye(e=!1){rn.push(Ne=e?null:[])}function Xf(){rn.pop(),Ne=rn[rn.length-1]||null}let hn=1;function wi(e){hn+=e}function ms(e){return e.dynamicChildren=hn>0?Ne||$t:null,Xf(),hn>0&&Ne&&Ne.push(e),e}function Xe(e,t,n,r,a,i){return ms(ke(e,t,n,r,a,i,!0))}function zt(e,t,n,r,a){return ms(me(e,t,n,r,a,!0))}function Kr(e){return e?e.__v_isVNode===!0:!1}function wt(e,t){return e.type===t.type&&e.key===t.key}const vr="__vInternal",ps=({key:e})=>e!=null?e:null,Vn=({ref:e,ref_key:t,ref_for:n})=>e!=null?he(e)||oe(e)||U(e)?{i:Le,r:e,k:t,f:!!n}:e:null;function ke(e,t=null,n=null,r=0,a=null,i=e===ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ps(t),ref:t&&Vn(t),scopeId:Jo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Ma(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=he(n)?8:16),hn>0&&!o&&Ne&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ne.push(l),l}const me=Jf;function Jf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Tf)&&(e=Fe),Kr(e)){const s=ut(e,t,!0);return n&&Ma(s,n),hn>0&&!i&&Ne&&(s.shapeFlag&6?Ne[Ne.indexOf(e)]=s:Ne.push(s)),s.patchFlag|=-2,s}if(lc(e)&&(e=e.__vccOpts),t){t=Gf(t);let{class:s,style:l}=t;s&&!he(s)&&(t.class=Tt(s)),ne(l)&&(Do(l)&&!j(l)&&(l=pe({},l)),t.style=da(l))}const o=he(e)?1:pf(e)?128:qf(e)?64:ne(e)?4:U(e)?2:0;return ke(e,t,n,r,a,o,i,!0)}function Gf(e){return e?Do(e)||vr in e?pe({},e):e:null}function ut(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Qf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&ps(s),ref:t&&t.ref?n&&a?j(a)?a.concat(Vn(t)):[a,Vn(t)]:Vn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ut(e.ssContent),ssFallback:e.ssFallback&&ut(e.ssFallback),el:e.el,anchor:e.anchor}}function Zf(e=" ",t=0){return me(Na,null,e,t)}function Vr(e="",t=!1){return t?(ye(),zt(Fe,null,e)):me(Fe,null,e)}function Be(e){return e==null||typeof e=="boolean"?me(Fe):j(e)?me(ge,null,e.slice()):typeof e=="object"?it(e):me(Na,null,String(e))}function it(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ut(e)}function Ma(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Ma(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(vr in t)?t._ctx=Le:a===3&&Le&&(Le.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else U(t)?(t={default:t,_ctx:Le},n=32):(t=String(t),r&64?(n=16,t=[Zf(t)]):n=8);e.children=t,e.shapeFlag|=n}function Qf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Tt([t.class,r.class]));else if(a==="style")t.style=da([t.style,r.style]);else if(or(a)){const i=t[a],o=r[a];o&&i!==o&&!(j(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function je(e,t,n,r=null){Oe(e,t,7,[n,r])}const ec=us();let tc=0;function nc(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ec,i={uid:tc++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Co(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ss(r,a),emitsOptions:Xo(r,a),emit:null,emitted:null,propsDefaults:G,inheritAttrs:r.inheritAttrs,ctx:G,data:G,props:G,attrs:G,slots:G,refs:G,setupState:G,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ff.bind(null,i),e.ce&&e.ce(i),i}let de=null;const wn=()=>de||Le,Wt=e=>{de=e,e.scope.on()},Pt=()=>{de&&de.scope.off(),de=null};function hs(e){return e.vnode.shapeFlag&4}let gn=!1;function rc(e,t=!1){gn=t;const{props:n,children:r}=e.vnode,a=hs(e);Df(e,n,a,t),Bf(e,r);const i=a?ac(e,t):void 0;return gn=!1,i}function ac(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ut(new Proxy(e.ctx,Lf));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?oc(e):null;Wt(e),qt();const i=ft(r,e,0,[e.props,a]);if(Xt(),Pt(),xo(i)){if(i.then(Pt,Pt),t)return i.then(o=>{ki(e,o,t)}).catch(o=>{dr(o,e,0)});e.asyncDep=i}else ki(e,i,t)}else gs(e,t)}function ki(e,t,n){U(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=Ho(t)),gs(e,n)}let Ai;function gs(e,t,n){const r=e.type;if(!e.render){if(!t&&Ai&&!r.render){const a=r.template||Ia(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,f=pe(pe({isCustomElement:i,delimiters:s},o),l);r.render=Ai(a,f)}}e.render=r.render||Re}Wt(e),qt(),Nf(e),Xt(),Pt()}function ic(e){return new Proxy(e.attrs,{get(t,n){return Ce(e,"get","$attrs"),t[n]}})}function oc(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=ic(e))},slots:e.slots,emit:e.emit,expose:t}}function Ra(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ho(Ut(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)}}))}function sc(e,t=!0){return U(e)?e.displayName||e.name:e.name||t&&e.__name}function lc(e){return U(e)&&"__vccOpts"in e}const Ae=(e,t)=>nf(e,t,gn);function vs(e,t,n){const r=arguments.length;return r===2?ne(t)&&!j(t)?Kr(t)?me(e,null,[t]):me(e,t):me(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Kr(n)&&(n=[n]),me(e,t,n))}const fc="3.2.41",cc="http://www.w3.org/2000/svg",kt=typeof document<"u"?document:null,Ci=kt&&kt.createElement("template"),uc={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?kt.createElementNS(cc,e):kt.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>kt.createTextNode(e),createComment:e=>kt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>kt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ci.innerHTML=r?`<svg>${e}</svg>`:e;const s=Ci.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function dc(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function mc(e,t,n){const r=e.style,a=he(n);if(n&&!a){for(const i in n)qr(r,i,n[i]);if(t&&!he(t))for(const i in t)n[i]==null&&qr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ei=/\s*!important$/;function qr(e,t,n){if(j(n))n.forEach(r=>qr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=pc(e,t);Ei.test(n)?e.setProperty(Vt(r),n.replace(Ei,""),"important"):e[r]=n}}const Pi=["Webkit","Moz","ms"],Sr={};function pc(e,t){const n=Sr[t];if(n)return n;let r=Ye(t);if(r!=="filter"&&r in e)return Sr[t]=r;r=fr(r);for(let a=0;a<Pi.length;a++){const i=Pi[a]+r;if(i in e)return Sr[t]=i}return t}const Oi="http://www.w3.org/1999/xlink";function hc(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Oi,t.slice(6,t.length)):e.setAttributeNS(Oi,t,n);else{const i=cl(t);n==null||i&&!vo(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function gc(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=vo(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function vc(e,t,n,r){e.addEventListener(t,n,r)}function bc(e,t,n,r){e.removeEventListener(t,n,r)}function yc(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=_c(t);if(r){const f=i[t]=kc(r,a);vc(e,s,f,l)}else o&&(bc(e,s,o,l),i[t]=void 0)}}const Si=/(?:Once|Passive|Capture)$/;function _c(e){let t;if(Si.test(e)){t={};let r;for(;r=e.match(Si);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vt(e.slice(2)),t]}let Tr=0;const xc=Promise.resolve(),wc=()=>Tr||(xc.then(()=>Tr=0),Tr=Date.now());function kc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(Ac(r,n.value),t,5,[r])};return n.value=e,n.attached=wc(),n}function Ac(e,t){if(j(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Ti=/^on[a-z]/,Cc=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?dc(e,r,a):t==="style"?mc(e,n,r):or(t)?ma(t)||yc(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ec(e,t,r,a))?gc(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),hc(e,t,r,a))};function Ec(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Ti.test(t)&&U(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Ti.test(t)&&he(n)?!1:t in e}function bs(e){const t=wn();if(!t)return;const n=()=>Xr(t.subTree,e(t.proxy));vf(n),Sa(()=>{const r=new MutationObserver(n);r.observe(t.subTree.el.parentNode,{childList:!0}),gr(()=>r.disconnect())})}function Xr(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{Xr(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)Ii(e.el,t);else if(e.type===ge)e.children.forEach(n=>Xr(n,t));else if(e.type===Kn){let{el:n,anchor:r}=e;for(;n&&(Ii(n,t),n!==r);)n=n.nextSibling}}function Ii(e,t){if(e.nodeType===1){const n=e.style;for(const r in t)n.setProperty(`--${r}`,t[r])}}const nt="transition",Qt="animation",ys={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pc=pe({},_f.props,ys),yt=(e,t=[])=>{j(e)?e.forEach(n=>n(...t)):e&&e(...t)},Li=e=>e?j(e)?e.some(t=>t.length>1):e.length>1:!1;function Oc(e){const t={};for(const L in e)L in ys||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:f=o,appearToClass:u=s,leaveFromClass:m=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=e,S=Sc(a),O=S&&S[0],$=S&&S[1],{onBeforeEnter:b,onEnter:C,onEnterCancelled:R,onLeave:D,onLeaveCancelled:F,onBeforeAppear:Z=b,onAppear:z=C,onAppearCancelled:P=R}=t,H=(L,Q,le)=>{at(L,Q?u:s),at(L,Q?f:o),le&&le()},K=(L,Q)=>{L._isLeaving=!1,at(L,m),at(L,_),at(L,p),Q&&Q()},re=L=>(Q,le)=>{const ce=L?z:C,ue=()=>H(Q,L,le);yt(ce,[Q,ue]),Ni(()=>{at(Q,L?l:i),Ke(Q,L?u:s),Li(ce)||Mi(Q,r,O,ue)})};return pe(t,{onBeforeEnter(L){yt(b,[L]),Ke(L,i),Ke(L,o)},onBeforeAppear(L){yt(Z,[L]),Ke(L,l),Ke(L,f)},onEnter:re(!1),onAppear:re(!0),onLeave(L,Q){L._isLeaving=!0;const le=()=>K(L,Q);Ke(L,m),xs(),Ke(L,p),Ni(()=>{!L._isLeaving||(at(L,m),Ke(L,_),Li(D)||Mi(L,r,$,le))}),yt(D,[L,le])},onEnterCancelled(L){H(L,!1),yt(R,[L])},onAppearCancelled(L){H(L,!0),yt(P,[L])},onLeaveCancelled(L){K(L),yt(F,[L])}})}function Sc(e){if(e==null)return null;if(ne(e))return[Ir(e.enter),Ir(e.leave)];{const t=Ir(e);return[t,t]}}function Ir(e){return Ao(e)}function Ke(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function at(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Ni(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Tc=0;function Mi(e,t,n,r){const a=e._endId=++Tc,i=()=>{a===e._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:s,propCount:l}=_s(e,t);if(!o)return r();const f=o+"end";let u=0;const m=()=>{e.removeEventListener(f,p),i()},p=_=>{_.target===e&&++u>=l&&m()};setTimeout(()=>{u<l&&m()},s+1),e.addEventListener(f,p)}function _s(e,t){const n=window.getComputedStyle(e),r=S=>(n[S]||"").split(", "),a=r(nt+"Delay"),i=r(nt+"Duration"),o=Ri(a,i),s=r(Qt+"Delay"),l=r(Qt+"Duration"),f=Ri(s,l);let u=null,m=0,p=0;t===nt?o>0&&(u=nt,m=o,p=i.length):t===Qt?f>0&&(u=Qt,m=f,p=l.length):(m=Math.max(o,f),u=m>0?o>f?nt:Qt:null,p=u?u===nt?i.length:l.length:0);const _=u===nt&&/\b(transform|all)(,|$)/.test(n[nt+"Property"]);return{type:u,timeout:m,propCount:p,hasTransform:_}}function Ri(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Fi(n)+Fi(e[r])))}function Fi(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function xs(){return document.body.offsetHeight}const ws=new WeakMap,ks=new WeakMap,Ic={name:"TransitionGroup",props:pe({},Pc,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=wn(),r=Qo();let a,i;return ns(()=>{if(!a.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!Fc(a[0].el,n.vnode.el,o))return;a.forEach(Nc),a.forEach(Mc);const s=a.filter(Rc);xs(),s.forEach(l=>{const f=l.el,u=f.style;Ke(f,o),u.transform=u.webkitTransform=u.transitionDuration="";const m=f._moveCb=p=>{p&&p.target!==f||(!p||/transform$/.test(p.propertyName))&&(f.removeEventListener("transitionend",m),f._moveCb=null,at(f,o))};f.addEventListener("transitionend",m)})}),()=>{const o=V(e),s=Oc(o);let l=o.tag||ge;a=i,i=t.default?Pa(t.default()):[];for(let f=0;f<i.length;f++){const u=i[f];u.key!=null&&pn(u,mn(u,s,r,n))}if(a)for(let f=0;f<a.length;f++){const u=a[f];pn(u,mn(u,s,r,n)),ws.set(u,u.el.getBoundingClientRect())}return me(l,null,i)}}},Lc=Ic;function Nc(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function Mc(e){ks.set(e,e.el.getBoundingClientRect())}function Rc(e){const t=ws.get(e),n=ks.get(e),r=t.left-n.left,a=t.top-n.top;if(r||a){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${r}px,${a}px)`,i.transitionDuration="0s",e}}function Fc(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach(o=>{o.split(/\s+/).forEach(s=>s&&r.classList.remove(s))}),n.split(/\s+/).forEach(o=>o&&r.classList.add(o)),r.style.display="none";const a=t.nodeType===1?t:t.parentNode;a.appendChild(r);const{hasTransform:i}=_s(r);return a.removeChild(r),i}const $c=pe({patchProp:Cc},uc);let $i;function Dc(){return $i||($i=Wf($c))}const jc=(...e)=>{const t=Dc().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=zc(r);if(!a)return;const i=t._component;!U(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function zc(e){return he(e)?document.querySelector(e):e}var Bc=!1;/*!
  * pinia v2.0.23
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let As;const br=e=>As=e,Cs=Symbol();function Jr(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var an;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(an||(an={}));function Hc(){const e=Eo(!0),t=e.run(()=>Bo({}));let n=[],r=[];const a=Ut({install(i){br(a),a._a=i,i.provide(Cs,a),i.config.globalProperties.$pinia=a,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Bc?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return a}const Es=()=>{};function Di(e,t,n,r=Es){e.push(t);const a=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&wn()&&gr(a),a}function Nt(e,...t){e.slice().forEach(n=>{n(...t)})}function Gr(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],a=e[n];Jr(a)&&Jr(r)&&e.hasOwnProperty(n)&&!oe(r)&&!lt(r)?e[n]=Gr(a,r):e[n]=r}return e}const Uc=Symbol();function Yc(e){return!Jr(e)||!e.hasOwnProperty(Uc)}const{assign:ot}=Object;function Wc(e){return!!(oe(e)&&e.effect)}function Kc(e,t,n,r){const{state:a,actions:i,getters:o}=t,s=n.state.value[e];let l;function f(){s||(n.state.value[e]=a?a():{});const u=Zl(n.state.value[e]);return ot(u,i,Object.keys(o||{}).reduce((m,p)=>(m[p]=Ut(Ae(()=>{br(n);const _=n._s.get(e);return o[p].call(_,_)})),m),{}))}return l=Ps(e,f,t,n,r,!0),l.$reset=function(){const m=a?a():{};this.$patch(p=>{ot(p,m)})},l}function Ps(e,t,n={},r,a,i){let o;const s=ot({actions:{}},n),l={deep:!0};let f,u,m=Ut([]),p=Ut([]),_;const S=r.state.value[e];!i&&!S&&(r.state.value[e]={}),Bo({});let O;function $(z){let P;f=u=!1,typeof z=="function"?(z(r.state.value[e]),P={type:an.patchFunction,storeId:e,events:_}):(Gr(r.state.value[e],z),P={type:an.patchObject,payload:z,storeId:e,events:_});const H=O=Symbol();Wo().then(()=>{O===H&&(f=!0)}),u=!0,Nt(m,P,r.state.value[e])}const b=Es;function C(){o.stop(),m=[],p=[],r._s.delete(e)}function R(z,P){return function(){br(r);const H=Array.from(arguments),K=[],re=[];function L(ce){K.push(ce)}function Q(ce){re.push(ce)}Nt(p,{args:H,name:z,store:F,after:L,onError:Q});let le;try{le=P.apply(this&&this.$id===e?this:F,H)}catch(ce){throw Nt(re,ce),ce}return le instanceof Promise?le.then(ce=>(Nt(K,ce),ce)).catch(ce=>(Nt(re,ce),Promise.reject(ce))):(Nt(K,le),le)}}const D={_p:r,$id:e,$onAction:Di.bind(null,p),$patch:$,$reset:b,$subscribe(z,P={}){const H=Di(m,z,P.detached,()=>K()),K=o.run(()=>nn(()=>r.state.value[e],re=>{(P.flush==="sync"?u:f)&&z({storeId:e,type:an.direct,events:_},re)},ot({},l,P)));return H},$dispose:C},F=ur(D);r._s.set(e,F);const Z=r._e.run(()=>(o=Eo(),o.run(()=>t())));for(const z in Z){const P=Z[z];if(oe(P)&&!Wc(P)||lt(P))i||(S&&Yc(P)&&(oe(P)?P.value=S[z]:Gr(P,S[z])),r.state.value[e][z]=P);else if(typeof P=="function"){const H=R(z,P);Z[z]=H,s.actions[z]=P}}return ot(F,Z),ot(V(F),Z),Object.defineProperty(F,"$state",{get:()=>r.state.value[e],set:z=>{$(P=>{ot(P,z)})}}),r._p.forEach(z=>{ot(F,o.run(()=>z({store:F,app:r._a,pinia:r,options:s})))}),S&&i&&n.hydrate&&n.hydrate(F.$state,S),f=!0,u=!0,F}function Os(e,t,n){let r,a;const i=typeof t=="function";typeof e=="string"?(r=e,a=i?n:t):(a=e,r=e.id);function o(s,l){const f=wn();return s=s||f&&Yn(Cs),s&&br(s),s=As,s._s.has(r)||(i?Ps(r,t,a,s):Kc(r,a,s)),s._s.get(r)}return o.$id=r,o}const Ss=Os("drums",{state:()=>({drums:{q:"Heater-1",w:"Heater-2",e:"Heater-3",a:"Heater-4",s:"Open-HH",d:"Closed-HH",z:"Clap",x:"Kick-n-hat",c:"Kick"}}),actions:{getDrums(){return this.drums}}}),kn=Os("main",{state:()=>({loopRecording:!1,drumbeatStartTime:0,drumbeatEndTime:0,loopDuration:0,loops:[]}),getters:{},actions:{toggleRecording(e){let t=this.loops[this.loops.length-1];(e.code==="Space"||e.type==="click")&&(this.loopRecording?(this.drumbeatEndTime=new Date().getTime(),t.length?t.push({drumbeat:"",pause:this.drumbeatEndTime-this.drumbeatStartTime}):this.loops.pop(),t===this.loops[0]&&this.setLoopDuration(t),this.drumbeatEndTime=0,this.drumbeatStartTime=0,this.loopRecording=!1):(this.loopRecording=!0,this.loops.push([]),this.drumbeatStartTime=new Date().getTime()))},async playLoop(e){const t=a=>new Promise(i=>setTimeout(i,a)),r=Ss().getDrums();for(let a=0;a<this.loops[e].length;a++)await t(this.loops[e].at(a).pause),this.loops[e].at(a).drumbeat!==""&&new Audio("./src/assets/sounds/"+r[this.loops[e].at(a).drumbeat]+".mp3").play()},deleteLoop(e){this.loops.splice(e,1)},setLoopDuration(e){this.loopDuration=e.reduce((t,n)=>t+=n.pause,0)},addDrumbeat(e){this.drumbeatEndTime=new Date().getTime();let t=this.drumbeatEndTime-this.drumbeatStartTime;this.loops[this.loops.length-1].push({drumbeat:e,pause:t}),this.drumbeatEndTime=0,this.drumbeatStartTime=new Date().getTime()}}});const Jt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Vc={name:"DrumPad",props:["drumbeat","keybind"],data(){return{isPressed:!1,store:kn()}},methods:{playDrum(e){(e.key===this.keybind||e.type==="click")&&(this.isPressed=!0,new Audio("./src/assets/sounds/"+this.drumbeat+".mp3").play(),setTimeout(()=>{this.isPressed=!1},200),this.store.loopRecording&&this.store.addDrumbeat(this.keybind))}},created(){window.addEventListener("keydown",this.playDrum)}},qc={class:"column is-4"},Xc={class:"is-size-3 has-text-centered has-text-light"};function Jc(e,t,n,r,a,i){return ye(),Xe("div",qc,[ke("div",{class:Tt(["drumpad",{pressed:a.isPressed}]),onClick:t[0]||(t[0]=o=>i.playDrum(o)),onKeypress:t[1]||(t[1]=o=>i.playDrum(e.e))},[ke("p",Xc,bo(n.keybind.toUpperCase()),1)],34)])}const Gc=Jt(Vc,[["render",Jc]]);const Zc={name:"LoopRecorder",data(){return{store:kn()}},created(){window.addEventListener("keydown",this.toggleRecording)},methods:{toggleRecording(e){this.store.toggleRecording(e),this.store.loopRecording||this.$emit("stopRecording")}}},Qc={class:"has-text-centered p-2"};function eu(e,t,n,r,a,i){return ye(),Xe("div",Qc,[ke("button",{class:Tt(["notRecording",{recording:this.store.loopRecording}]),onClick:t[0]||(t[0]=o=>this.toggleRecording(o)),onKeypress:t[1]||(t[1]=o=>this.toggleRecording(o))},null,34)])}const tu=Jt(Zc,[["render",eu]]);const Fa={name:"DrumbeatPreview",props:["index","drum","loop","playingLoop","loopStarted","parentBox"],data(){return{left:0,store:kn()}},mounted(){this.store.loops.indexOf(this.loop)&&this.setDrumbeatPosition(this.store.loopDuration,this.parentBox)},methods:{setDrumbeatPosition(e,t){const r=document.getElementsByClassName("drumbeat-playback")[this.$props.index].getBoundingClientRect().left;let i=this.loop.reduce((o,s,l)=>l<=this.$props.index?o+s.pause:o,0)/e;if(i>.9&&(i=.9),this.store.loops.indexOf(this.loop))this.left=i*100;else{let o=t[0].width*i+t[0].left;this.left=o-r}}}},ji=()=>{bs(e=>({"057aee0a":e.left+"px",e76722c8:e.left+"%"}))},zi=Fa.setup;Fa.setup=zi?(e,t)=>(ji(),zi(e,t)):ji;const nu=Fa;function ru(e,t,n,r,a,i){return n.drum.drumbeat!==""?(ye(),Xe("div",{key:0,class:Tt(["drumbeat-playback has-text-light has-text-centered is-unselectable",{"position-set":this.$props.loopStarted,"not-first-loop":this.store.loops.indexOf(this.loop)}])},bo(n.drum.drumbeat.toUpperCase()),3)):Vr("",!0)}const au=Jt(nu,[["render",ru],["__scopeId","data-v-2623bca0"]]);const $a={name:"LoopPlayback",props:["loop","index"],components:{DrumbeatPreview:au},data(){return{store:kn(),playingLoop:!1,loopStarted:!1,onBeatPlayLoop:!1,loopDuration:0,parentBox:{}}},methods:{async playLoop(e){if(this.playingLoop=!0,e||(this.loopDuration=this.store.loopDuration,this.$emit("durationSet")),setTimeout(()=>{this.playingLoop=!1},this.store.loopDuration-10),!this.loopStarted){for(let t=0;t<this.$refs.drumbeatPreview.length;t++)this.$refs.drumbeatPreview[t].setDrumbeatPosition(this.store.loopDuration,this.parentBox);this.loopStarted=!0}await this.store.playLoop(e)},togglePlayPause(){this.onBeatPlayLoop=!this.onBeatPlayLoop}},mounted(){const e=document.getElementsByClassName("progress-bar-bg");this.parentBox=e[0].getClientRects(),this.loopDuration=this.store.loopDuration}},Bi=()=>{bs(e=>({12198044:e.loopDuration+"ms"}))},Hi=$a.setup;$a.setup=Hi?(e,t)=>(Bi(),Hi(e,t)):Bi;const iu=$a,ou={class:"progress-container p-2 is-flex is-flex-direction-row is-justify-content-space-between"},su={class:"drumbeat-progress-indicator"},lu={class:"drumbeats is-flex is-flex-direction-row is-justify-content-center"},fu={class:"progress-bar-bg"};function cu(e,t,n,r,a,i){const o=Yt("font-awesome-icon"),s=Yt("DrumbeatPreview");return ye(),Xe("div",ou,[ke("button",{onClick:t[0]||(t[0]=l=>this.togglePlayPause())},[this.onBeatPlayLoop?Vr("",!0):(ye(),zt(o,{key:0,icon:"fa-solid fa-play"})),this.onBeatPlayLoop?(ye(),zt(o,{key:1,icon:"fa-solid fa-pause"})):Vr("",!0)]),ke("div",su,[ke("div",lu,[(ye(!0),Xe(ge,null,Ta(n.loop,(l,f)=>(ye(),zt(s,{index:f,drum:l,loop:n.loop,playingLoop:this.playingLoop,loopStarted:this.loopStarted,parentBox:this.parentBox,ref_for:!0,ref:"drumbeatPreview"},null,8,["index","drum","loop","playingLoop","loopStarted","parentBox"]))),256))]),ke("div",fu,[ke("div",{class:Tt(["progress-bar",{"in-progress":this.playingLoop}])},null,2)])]),ke("button",{onClick:t[1]||(t[1]=l=>this.store.deleteLoop(n.index))},[me(o,{icon:"fa-solid fa-trash-can"})])])}const uu=Jt(iu,[["render",cu],["__scopeId","data-v-954c3a04"]]);const du={name:"LoopManager",components:{LoopRecorder:tu,LoopPlayback:uu},data(){return{store:kn()}},methods:{startBeat(){setInterval(()=>{for(const e in this.$refs.loops)this.loopBeginningStatusCheck(e)},this.store.loopDuration)},autoplayLoop(){let e=this.$refs.loops.at(-1);e.playLoop(e.index),e.onBeatPlayLoop=!0},loopBeginningStatusCheck(e){if(this.store.loopRecording){let t=this.$refs.loops.at(-1);t.loopStarted=!0,t.loop.length===0?this.store.drumbeatStartTime=new Date().getTime():(this.store.toggleRecording({type:"click"}),this.autoplayLoop())}this.$refs.loops.at(e).onBeatPlayLoop&&this.$refs.loops.at(e).playLoop(e)}}};function mu(e,t,n,r,a,i){const o=Yt("LoopRecorder"),s=Yt("LoopPlayback");return ye(),Xe(ge,null,[me(o,{onStopRecording:t[0]||(t[0]=l=>this.autoplayLoop())}),me(Lc,{name:"loopList"},{default:Go(()=>[(ye(!0),Xe(ge,null,Ta(this.store.loops,(l,f)=>(ye(),zt(s,{ref_for:!0,ref:"loops",loop:l,index:f,key:l,onDurationSet:t[1]||(t[1]=u=>i.startBeat())},null,8,["loop","index"]))),128))]),_:1})],64)}const pu=Jt(du,[["render",mu],["__scopeId","data-v-e51d85f5"]]),hu={components:{DrumPad:Gc,LoopManager:pu},data(){return{store:Ss()}}},gu={class:"section"},vu={class:"container",style:{"max-width":"350px"}},bu={class:"columns is-mobile is-multiline"};function yu(e,t,n,r,a,i){const o=Yt("DrumPad"),s=Yt("LoopManager");return ye(),Xe("div",gu,[ke("div",vu,[ke("div",bu,[(ye(!0),Xe(ge,null,Ta(this.store.getDrums(),(l,f)=>(ye(),zt(o,{drumbeat:l,keybind:f},null,8,["drumbeat","keybind"]))),256))]),me(s)])])}const _u=Jt(hu,[["render",yu]]);function Ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ui(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ui(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function tr(e){return tr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},tr(e)}function xu(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function wu(e,t,n){return t&&Yi(e.prototype,t),n&&Yi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Da(e,t){return Au(e)||Eu(e,t)||Ts(e,t)||Ou()}function An(e){return ku(e)||Cu(e)||Ts(e)||Pu()}function ku(e){if(Array.isArray(e))return Zr(e)}function Au(e){if(Array.isArray(e))return e}function Cu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Eu(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ts(e,t){if(!!e){if(typeof e=="string")return Zr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zr(e,t)}}function Zr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Pu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ou(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wi=function(){},ja={},Is={},Ls=null,Ns={mark:Wi,measure:Wi};try{typeof window<"u"&&(ja=window),typeof document<"u"&&(Is=document),typeof MutationObserver<"u"&&(Ls=MutationObserver),typeof performance<"u"&&(Ns=performance)}catch{}var Su=ja.navigator||{},Ki=Su.userAgent,Vi=Ki===void 0?"":Ki,dt=ja,te=Is,qi=Ls,Mn=Ns;dt.document;var et=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",Ms=~Vi.indexOf("MSIE")||~Vi.indexOf("Trident/"),Rn,Fn,$n,Dn,jn,Je="___FONT_AWESOME___",Qr=16,Rs="fa",Fs="svg-inline--fa",Ot="data-fa-i2svg",ea="data-fa-pseudo-element",Tu="data-fa-pseudo-element-pending",za="data-prefix",Ba="data-icon",Xi="fontawesome-i2svg",Iu="async",Lu=["HTML","HEAD","STYLE","SCRIPT"],$s=function(){try{return!0}catch{return!1}}(),ee="classic",ie="sharp",Ha=[ee,ie];function Cn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ee]}})}var vn=Cn((Rn={},fe(Rn,ee,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),fe(Rn,ie,{fa:"solid",fass:"solid","fa-solid":"solid"}),Rn)),bn=Cn((Fn={},fe(Fn,ee,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),fe(Fn,ie,{solid:"fass"}),Fn)),yn=Cn(($n={},fe($n,ee,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),fe($n,ie,{fass:"fa-solid"}),$n)),Nu=Cn((Dn={},fe(Dn,ee,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),fe(Dn,ie,{"fa-solid":"fass"}),Dn)),Mu=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,Ds="fa-layers-text",Ru=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Fu=Cn((jn={},fe(jn,ee,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),fe(jn,ie,{900:"fass"}),jn)),js=[1,2,3,4,5,6,7,8,9,10],$u=js.concat([11,12,13,14,15,16,17,18,19,20]),Du=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],At={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},_n=new Set;Object.keys(bn[ee]).map(_n.add.bind(_n));Object.keys(bn[ie]).map(_n.add.bind(_n));var ju=[].concat(Ha,An(_n),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",At.GROUP,At.SWAP_OPACITY,At.PRIMARY,At.SECONDARY]).concat(js.map(function(e){return"".concat(e,"x")})).concat($u.map(function(e){return"w-".concat(e)})),on=dt.FontAwesomeConfig||{};function zu(e){var t=te.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Bu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(te&&typeof te.querySelector=="function"){var Hu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Hu.forEach(function(e){var t=Da(e,2),n=t[0],r=t[1],a=Bu(zu(n));a!=null&&(on[r]=a)})}var zs={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rs,replacementClass:Fs,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};on.familyPrefix&&(on.cssPrefix=on.familyPrefix);var Kt=E(E({},zs),on);Kt.autoReplaceSvg||(Kt.observeMutations=!1);var I={};Object.keys(zs).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Kt[e]=n,sn.forEach(function(r){return r(I)})},get:function(){return Kt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Kt.cssPrefix=t,sn.forEach(function(n){return n(I)})},get:function(){return Kt.cssPrefix}});dt.FontAwesomeConfig=I;var sn=[];function Uu(e){return sn.push(e),function(){sn.splice(sn.indexOf(e),1)}}var rt=Qr,Ue={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Yu(e){if(!(!e||!et)){var t=te.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=te.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return te.head.insertBefore(t,r),e}}var Wu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function xn(){for(var e=12,t="";e-- >0;)t+=Wu[Math.random()*62|0];return t}function Gt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ua(e){return e.classList?Gt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Bs(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ku(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Bs(e[n]),'" ')},"").trim()}function yr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ya(e){return e.size!==Ue.size||e.x!==Ue.x||e.y!==Ue.y||e.rotate!==Ue.rotate||e.flipX||e.flipY}function Vu(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:f}}function qu(e){var t=e.transform,n=e.width,r=n===void 0?Qr:n,a=e.height,i=a===void 0?Qr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ms?l+="translate(".concat(t.x/rt-r/2,"em, ").concat(t.y/rt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/rt,"em), calc(-50% + ").concat(t.y/rt,"em)) "):l+="translate(".concat(t.x/rt,"em, ").concat(t.y/rt,"em) "),l+="scale(".concat(t.size/rt*(t.flipX?-1:1),", ").concat(t.size/rt*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Xu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Hs(){var e=Rs,t=Fs,n=I.cssPrefix,r=I.replacementClass,a=Xu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ji=!1;function Lr(){I.autoAddCss&&!Ji&&(Yu(Hs()),Ji=!0)}var Ju={mixout:function(){return{dom:{css:Hs,insertCss:Lr}}},hooks:function(){return{beforeDOMElementCreation:function(){Lr()},beforeI2svg:function(){Lr()}}}},Ge=dt||{};Ge[Je]||(Ge[Je]={});Ge[Je].styles||(Ge[Je].styles={});Ge[Je].hooks||(Ge[Je].hooks={});Ge[Je].shims||(Ge[Je].shims=[]);var Me=Ge[Je],Us=[],Gu=function e(){te.removeEventListener("DOMContentLoaded",e),nr=1,Us.map(function(t){return t()})},nr=!1;et&&(nr=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),nr||te.addEventListener("DOMContentLoaded",Gu));function Zu(e){!et||(nr?setTimeout(e,0):Us.push(e))}function En(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Bs(e):"<".concat(t," ").concat(Ku(r),">").concat(i.map(En).join(""),"</").concat(t,">")}function Gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Qu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Nr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Qu(n,a):n,l,f,u;for(r===void 0?(l=1,u=t[i[0]]):(l=0,u=r);l<o;l++)f=i[l],u=s(u,t[f],f,t);return u};function ed(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function ta(e){var t=ed(e);return t.length===1?t[0].toString(16):null}function td(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Zi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function na(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Zi(t);typeof Me.hooks.addPack=="function"&&!a?Me.hooks.addPack(e,Zi(t)):Me.styles[e]=E(E({},Me.styles[e]||{}),i),e==="fas"&&na("fa",t)}var zn,Bn,Hn,Rt=Me.styles,nd=Me.shims,rd=(zn={},fe(zn,ee,Object.values(yn[ee])),fe(zn,ie,Object.values(yn[ie])),zn),Wa=null,Ys={},Ws={},Ks={},Vs={},qs={},ad=(Bn={},fe(Bn,ee,Object.keys(vn[ee])),fe(Bn,ie,Object.keys(vn[ie])),Bn);function id(e){return~ju.indexOf(e)}function od(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!id(a)?a:null}var Xs=function(){var t=function(i){return Nr(Rt,function(o,s,l){return o[l]=Nr(s,i,{}),o},{})};Ys=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ws=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),qs=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Rt||I.autoFetchSvg,r=Nr(nd,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ks=r.names,Vs=r.unicodes,Wa=_r(I.styleDefault,{family:I.familyDefault})};Uu(function(e){Wa=_r(e.styleDefault,{family:I.familyDefault})});Xs();function Ka(e,t){return(Ys[e]||{})[t]}function sd(e,t){return(Ws[e]||{})[t]}function Ct(e,t){return(qs[e]||{})[t]}function Js(e){return Ks[e]||{prefix:null,iconName:null}}function ld(e){var t=Vs[e],n=Ka("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function mt(){return Wa}var Va=function(){return{prefix:null,iconName:null,rest:[]}};function _r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ee:n,a=vn[r][e],i=bn[r][e]||bn[r][a],o=e in Me.styles?e:null;return i||o||null}var Qi=(Hn={},fe(Hn,ee,Object.keys(yn[ee])),fe(Hn,ie,Object.keys(yn[ie])),Hn);function xr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},fe(t,ee,"".concat(I.cssPrefix,"-").concat(ee)),fe(t,ie,"".concat(I.cssPrefix,"-").concat(ie)),t),o=null,s=ee;(e.includes(i[ee])||e.some(function(f){return Qi[ee].includes(f)}))&&(s=ee),(e.includes(i[ie])||e.some(function(f){return Qi[ie].includes(f)}))&&(s=ie);var l=e.reduce(function(f,u){var m=od(I.cssPrefix,u);if(Rt[u]?(u=rd[s].includes(u)?Nu[s][u]:u,o=u,f.prefix=u):ad[s].indexOf(u)>-1?(o=u,f.prefix=_r(u,{family:s})):m?f.iconName=m:u!==I.replacementClass&&u!==i[ee]&&u!==i[ie]&&f.rest.push(u),!a&&f.prefix&&f.iconName){var p=o==="fa"?Js(f.iconName):{},_=Ct(f.prefix,f.iconName);p.prefix&&(o=null),f.iconName=p.iconName||_||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!Rt.far&&Rt.fas&&!I.autoFetchSvg&&(f.prefix="fas")}return f},Va());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ie&&(Rt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=Ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=mt()||"fas"),l}var fd=function(){function e(){xu(this,e),this.definitions={}}return wu(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),na(s,o[s]);var l=yn[ee][s];l&&na(l,o[s]),Xs()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,f=o.icon,u=f[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(m){typeof m=="string"&&(n[s][m]=f)}),n[s][l]=f}),n}}]),e}(),eo=[],Ft={},Bt={},cd=Object.keys(Bt);function ud(e,t){var n=t.mixoutsTo;return eo=e,Ft={},Object.keys(Bt).forEach(function(r){cd.indexOf(r)===-1&&delete Bt[r]}),eo.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),tr(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Ft[o]||(Ft[o]=[]),Ft[o].push(i[o])})}r.provides&&r.provides(Bt)}),n}function ra(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Ft[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function St(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Ft[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bt[e]?Bt[e].apply(null,t):void 0}function aa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||mt();if(!!t)return t=Ct(n,t)||t,Gi(Gs.definitions,n,t)||Gi(Me.styles,n,t)}var Gs=new fd,dd=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,St("noAuto")},md={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return et?(St("beforeI2svg",t),Ze("pseudoElements2svg",t),Ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,Zu(function(){hd({autoReplaceSvgRoot:n}),St("watch",t)})}},pd={icon:function(t){if(t===null)return null;if(tr(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=_r(t[0]);return{prefix:r,iconName:Ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Mu))){var a=xr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||mt(),iconName:Ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=mt();return{prefix:i,iconName:Ct(i,t)||t}}}},Ee={noAuto:dd,config:I,dom:md,parse:pd,library:Gs,findIconDefinition:aa,toHtml:En},hd=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(Me.styles).length>0||I.autoFetchSvg)&&et&&I.autoReplaceSvg&&Ee.dom.i2svg({node:r})};function wr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return En(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!et){var r=te.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function gd(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ya(o)&&n.found&&!r.found){var s=n.width,l=n.height,f={x:s/l/2,y:.5};a.style=yr(E(E({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function vd(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function qa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,f=e.maskId,u=e.titleId,m=e.extra,p=e.watchable,_=p===void 0?!1:p,S=r.found?r:n,O=S.width,$=S.height,b=a==="fak",C=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(H){return m.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(m.classes).join(" "),R={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat($)})},D=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(O/$*16*.0625,"em")}:{};_&&(R.attributes[Ot]=""),l&&(R.children.push({tag:"title",attributes:{id:R.attributes["aria-labelledby"]||"title-".concat(u||xn())},children:[l]}),delete R.attributes.title);var F=E(E({},R),{},{prefix:a,iconName:i,main:n,mask:r,maskId:f,transform:o,symbol:s,styles:E(E({},D),m.styles)}),Z=r.found&&n.found?Ze("generateAbstractMask",F)||{children:[],attributes:{}}:Ze("generateAbstractIcon",F)||{children:[],attributes:{}},z=Z.children,P=Z.attributes;return F.children=z,F.attributes=P,s?vd(F):gd(F)}function to(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,f=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(f[Ot]="");var u=E({},o.styles);Ya(a)&&(u.transform=qu({transform:a,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var m=yr(u);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function bd(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=yr(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mr=Me.styles;function ia(e){var t=e[0],n=e[1],r=e.slice(4),a=Da(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(At.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(At.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(At.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var yd={found:!1,width:512,height:512};function _d(e,t){!$s&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function oa(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=mt()),new Promise(function(r,a){if(Ze("missingIconAbstract"),n==="fa"){var i=Js(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Mr[t]&&Mr[t][e]){var o=Mr[t][e];return r(ia(o))}_d(e,t),r(E(E({},yd),{},{icon:I.showMissingIcons&&e?Ze("missingIconAbstract")||{}:{}}))})}var no=function(){},sa=I.measurePerformance&&Mn&&Mn.mark&&Mn.measure?Mn:{mark:no,measure:no},tn='FA "6.2.0"',xd=function(t){return sa.mark("".concat(tn," ").concat(t," begins")),function(){return Zs(t)}},Zs=function(t){sa.mark("".concat(tn," ").concat(t," ends")),sa.measure("".concat(tn," ").concat(t),"".concat(tn," ").concat(t," begins"),"".concat(tn," ").concat(t," ends"))},Xa={begin:xd,end:Zs},qn=function(){};function ro(e){var t=e.getAttribute?e.getAttribute(Ot):null;return typeof t=="string"}function wd(e){var t=e.getAttribute?e.getAttribute(za):null,n=e.getAttribute?e.getAttribute(Ba):null;return t&&n}function kd(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Ad(){if(I.autoReplaceSvg===!0)return Xn.replace;var e=Xn[I.autoReplaceSvg];return e||Xn.replace}function Cd(e){return te.createElementNS("http://www.w3.org/2000/svg",e)}function Ed(e){return te.createElement(e)}function Qs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Cd:Ed:n;if(typeof e=="string")return te.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Qs(o,{ceFn:r}))}),a}function Pd(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Xn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Qs(a),n)}),n.getAttribute(Ot)===null&&I.keepOriginalSource){var r=te.createComment(Pd(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ua(n).indexOf(I.replacementClass))return Xn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return En(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function ao(e){e()}function el(e,t){var n=typeof t=="function"?t:qn;if(e.length===0)n();else{var r=ao;I.mutateApproach===Iu&&(r=dt.requestAnimationFrame||ao),r(function(){var a=Ad(),i=Xa.begin("mutate");e.map(a),i(),n()})}}var Ja=!1;function tl(){Ja=!0}function la(){Ja=!1}var rr=null;function io(e){if(!!qi&&!!I.observeMutations){var t=e.treeCallback,n=t===void 0?qn:t,r=e.nodeCallback,a=r===void 0?qn:r,i=e.pseudoElementsCallback,o=i===void 0?qn:i,s=e.observeMutationsRoot,l=s===void 0?te:s;rr=new qi(function(f){if(!Ja){var u=mt();Gt(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ro(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ro(m.target)&&~Du.indexOf(m.attributeName))if(m.attributeName==="class"&&wd(m.target)){var p=xr(Ua(m.target)),_=p.prefix,S=p.iconName;m.target.setAttribute(za,_||u),S&&m.target.setAttribute(Ba,S)}else kd(m.target)&&a(m.target)})}}),et&&rr.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Od(){!rr||rr.disconnect()}function Sd(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Td(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=xr(Ua(e));return a.prefix||(a.prefix=mt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=sd(a.prefix,e.innerText)||Ka(a.prefix,ta(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Id(e){var t=Gt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||xn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ld(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ue,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function oo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Td(e),r=n.iconName,a=n.prefix,i=n.rest,o=Id(e),s=ra("parseNodeAttributes",{},e),l=t.styleParser?Sd(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ue,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Nd=Me.styles;function nl(e){var t=I.autoReplaceSvg==="nest"?oo(e,{styleParser:!1}):oo(e);return~t.extra.classes.indexOf(Ds)?Ze("generateLayersText",e,t):Ze("generateSvgReplacementMutation",e,t)}var pt=new Set;Ha.map(function(e){pt.add("fa-".concat(e))});Object.keys(vn[ee]).map(pt.add.bind(pt));Object.keys(vn[ie]).map(pt.add.bind(pt));pt=An(pt);function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!et)return Promise.resolve();var n=te.documentElement.classList,r=function(m){return n.add("".concat(Xi,"-").concat(m))},a=function(m){return n.remove("".concat(Xi,"-").concat(m))},i=I.autoFetchSvg?pt:Ha.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Nd));i.includes("fa")||i.push("fa");var o=[".".concat(Ds,":not([").concat(Ot,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Gt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Xa.begin("onTree"),f=s.reduce(function(u,m){try{var p=nl(m);p&&u.push(p)}catch(_){$s||_.name==="MissingIcon"&&console.error(_)}return u},[]);return new Promise(function(u,m){Promise.all(f).then(function(p){el(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),m(p)})})}function Md(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;nl(e).then(function(n){n&&el([n],t)})}function Rd(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:aa(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:aa(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Fd=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ue:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,f=n.maskId,u=f===void 0?null:f,m=n.title,p=m===void 0?null:m,_=n.titleId,S=_===void 0?null:_,O=n.classes,$=O===void 0?[]:O,b=n.attributes,C=b===void 0?{}:b,R=n.styles,D=R===void 0?{}:R;if(!!t){var F=t.prefix,Z=t.iconName,z=t.icon;return wr(E({type:"icon"},t),function(){return St("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(p?C["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(S||xn()):(C["aria-hidden"]="true",C.focusable="false")),qa({icons:{main:ia(z),mask:l?ia(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:F,iconName:Z,transform:E(E({},Ue),a),symbol:o,title:p,maskId:u,titleId:S,extra:{attributes:C,styles:D,classes:$}})})}},$d={mixout:function(){return{icon:Rd(Fd)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=so,n.nodeCallback=Md,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?te:r,i=n.callback,o=i===void 0?function(){}:i;return so(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,f=r.symbol,u=r.mask,m=r.maskId,p=r.extra;return new Promise(function(_,S){Promise.all([oa(a,s),u.iconName?oa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var $=Da(O,2),b=$[0],C=$[1];_([n,qa({icons:{main:b,mask:C},prefix:s,iconName:a,transform:l,symbol:f,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=yr(s);l.length>0&&(a.style=l);var f;return Ya(o)&&(f=Ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(f||i.icon),{children:r,attributes:a}}}},Dd={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return wr({type:"layer"},function(){St("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(An(i)).join(" ")},children:o}]})}}}},jd={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,f=l===void 0?{}:l,u=r.styles,m=u===void 0?{}:u;return wr({type:"counter",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:r}),bd({content:n.toString(),title:i,extra:{attributes:f,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(An(s))}})})}}}},zd={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ue:a,o=r.title,s=o===void 0?null:o,l=r.classes,f=l===void 0?[]:l,u=r.attributes,m=u===void 0?{}:u,p=r.styles,_=p===void 0?{}:p;return wr({type:"text",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:r}),to({content:n,transform:E(E({},Ue),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(I.cssPrefix,"-layers-text")].concat(An(f))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Ms){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/f,l=u.height/f}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,to({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Bd=new RegExp('"',"ug"),lo=[1105920,1112319];function Hd(e){var t=e.replace(Bd,""),n=td(t,0),r=n>=lo[0]&&n<=lo[1],a=t.length===2?t[0]===t[1]:!1;return{value:ta(a?t[0]:t),isSecondary:r||a}}function fo(e,t){var n="".concat(Tu).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Gt(e.children),o=i.filter(function(z){return z.getAttribute(ea)===t})[0],s=dt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ru),f=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&u!=="none"&&u!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?ie:ee,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?bn[p][l[2].toLowerCase()]:Fu[p][f],S=Hd(m),O=S.value,$=S.isSecondary,b=l[0].startsWith("FontAwesome"),C=Ka(_,O),R=C;if(b){var D=ld(O);D.iconName&&D.prefix&&(C=D.iconName,_=D.prefix)}if(C&&!$&&(!o||o.getAttribute(za)!==_||o.getAttribute(Ba)!==R)){e.setAttribute(n,R),o&&e.removeChild(o);var F=Ld(),Z=F.extra;Z.attributes[ea]=t,oa(C,_).then(function(z){var P=qa(E(E({},F),{},{icons:{main:z,mask:Va()},prefix:_,iconName:R,extra:Z,watchable:!0})),H=te.createElement("svg");t==="::before"?e.insertBefore(H,e.firstChild):e.appendChild(H),H.outerHTML=P.map(function(K){return En(K)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Ud(e){return Promise.all([fo(e,"::before"),fo(e,"::after")])}function Yd(e){return e.parentNode!==document.head&&!~Lu.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ea)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function co(e){if(!!et)return new Promise(function(t,n){var r=Gt(e.querySelectorAll("*")).filter(Yd).map(Ud),a=Xa.begin("searchPseudoElements");tl(),Promise.all(r).then(function(){a(),la(),t()}).catch(function(){a(),la(),n()})})}var Wd={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=co,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?te:r;I.searchPseudoElements&&co(a)}}},uo=!1,Kd={mixout:function(){return{dom:{unwatch:function(){tl(),uo=!0}}}},hooks:function(){return{bootstrap:function(){io(ra("mutationObserverCallbacks",{}))},noAuto:function(){Od()},watch:function(n){var r=n.observeMutationsRoot;uo?la():io(ra("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},mo=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Vd={mixout:function(){return{parse:{transform:function(n){return mo(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=mo(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),u="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:p};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},Rr={x:0,y:0,width:"100%",height:"100%"};function po(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function qd(e){return e.tag==="g"?e.children:[e]}var Xd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?xr(a.split(" ").map(function(o){return o.trim()})):Va();return i.prefix||(i.prefix=mt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,f=i.width,u=i.icon,m=o.width,p=o.icon,_=Vu({transform:l,containerWidth:m,iconWidth:f}),S={tag:"rect",attributes:E(E({},Rr),{},{fill:"white"})},O=u.children?{children:u.children.map(po)}:{},$={tag:"g",attributes:E({},_.inner),children:[po(E({tag:u.tag,attributes:E(E({},u.attributes),_.path)},O))]},b={tag:"g",attributes:E({},_.outer),children:[$]},C="mask-".concat(s||xn()),R="clip-".concat(s||xn()),D={tag:"mask",attributes:E(E({},Rr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,b]},F={tag:"defs",children:[{tag:"clipPath",attributes:{id:R},children:qd(p)},D]};return r.push(F,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(R,")"),mask:"url(#".concat(C,")")},Rr)}),{children:r,attributes:a}}}},Jd={provides:function(t){var n=!1;dt.matchMedia&&(n=dt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Gd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Zd=[Ju,$d,Dd,jd,zd,Wd,Kd,Vd,Xd,Jd,Gd];ud(Zd,{mixoutsTo:Ee});Ee.noAuto;var rl=Ee.config,Qd=Ee.library;Ee.dom;var ar=Ee.parse;Ee.findIconDefinition;Ee.toHtml;var em=Ee.icon;Ee.layer;var tm=Ee.text;Ee.counter;function ho(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ho(Object(n),!0).forEach(function(r){_e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ho(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ir(e){return ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ir(e)}function _e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function nm(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function rm(e,t){if(e==null)return{};var n=nm(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function fa(e){return am(e)||im(e)||om(e)||sm()}function am(e){if(Array.isArray(e))return ca(e)}function im(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function om(e,t){if(!!e){if(typeof e=="string")return ca(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ca(e,t)}}function ca(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function sm(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var lm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},al={exports:{}};(function(e){(function(t){var n=function(b,C,R){if(!f(C)||m(C)||p(C)||_(C)||l(C))return C;var D,F=0,Z=0;if(u(C))for(D=[],Z=C.length;F<Z;F++)D.push(n(b,C[F],R));else{D={};for(var z in C)Object.prototype.hasOwnProperty.call(C,z)&&(D[b(z,R)]=n(b,C[z],R))}return D},r=function(b,C){C=C||{};var R=C.separator||"_",D=C.split||/(?=[A-Z])/;return b.split(D).join(R)},a=function(b){return S(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(C,R){return R?R.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var C=a(b);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(b,C){return r(b,C).toLowerCase()},s=Object.prototype.toString,l=function(b){return typeof b=="function"},f=function(b){return b===Object(b)},u=function(b){return s.call(b)=="[object Array]"},m=function(b){return s.call(b)=="[object Date]"},p=function(b){return s.call(b)=="[object RegExp]"},_=function(b){return s.call(b)=="[object Boolean]"},S=function(b){return b=b-0,b===b},O=function(b,C){var R=C&&"process"in C?C.process:C;return typeof R!="function"?b:function(D,F){return R(D,b,F)}},$={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,C){return n(O(a,C),b)},decamelizeKeys:function(b,C){return n(O(o,C),b,C)},pascalizeKeys:function(b,C){return n(O(i,C),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=$:t.humps=$})(lm)})(al);var fm=al.exports,cm=["class","style"];function um(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=fm.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function dm(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ga(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,f){var u=e.attributes[f];switch(f){case"class":l.class=dm(u);break;case"style":l.style=um(u);break;default:l.attrs[f]=u}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=rm(n,cm);return vs(e.tag,Ie(Ie(Ie({},t),{},{class:a.class,style:Ie(Ie({},a.style),o)},a.attrs),s),r)}var il=!1;try{il=!0}catch{}function mm(){if(!il&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ln(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?_e({},e,t):{}}function pm(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},_e(t,"fa-".concat(e.size),e.size!==null),_e(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),_e(t,"fa-pull-".concat(e.pull),e.pull!==null),_e(t,"fa-swap-opacity",e.swapOpacity),_e(t,"fa-bounce",e.bounce),_e(t,"fa-shake",e.shake),_e(t,"fa-beat",e.beat),_e(t,"fa-fade",e.fade),_e(t,"fa-beat-fade",e.beatFade),_e(t,"fa-flash",e.flash),_e(t,"fa-spin-pulse",e.spinPulse),_e(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function go(e){if(e&&ir(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ar.icon)return ar.icon(e);if(e===null)return null;if(ir(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var hm=Oa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ae(function(){return go(t.icon)}),i=Ae(function(){return ln("classes",pm(t))}),o=Ae(function(){return ln("transform",typeof t.transform=="string"?ar.transform(t.transform):t.transform)}),s=Ae(function(){return ln("mask",go(t.mask))}),l=Ae(function(){return em(a.value,Ie(Ie(Ie(Ie({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});nn(l,function(u){if(!u)return mm("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var f=Ae(function(){return l.value?Ga(l.value.abstract[0],{},r):null});return function(){return f.value}}});Oa({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=rl.familyPrefix,i=Ae(function(){return["".concat(a,"-layers")].concat(fa(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return vs("div",{class:i.value},r.default?r.default():[])}}});Oa({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=rl.familyPrefix,i=Ae(function(){return ln("classes",[].concat(fa(t.counter?["".concat(a,"-layers-counter")]:[]),fa(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=Ae(function(){return ln("transform",typeof t.transform=="string"?ar.transform(t.transform):t.transform)}),s=Ae(function(){var f=tm(t.value.toString(),Ie(Ie({},o.value),i.value)),u=f.abstract;return t.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),u[0]}),l=Ae(function(){return Ga(s.value,{},r)});return function(){return l.value}}});var gm={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},vm={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},bm={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]};Qd.add(bm,vm,gm);const ym=Hc(),ol=jc(_u);ol.use(ym);ol.component("font-awesome-icon",hm).mount("#app");
