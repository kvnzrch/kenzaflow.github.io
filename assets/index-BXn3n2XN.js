const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/app-CRr4hnRY.js","assets/index-BNC_TFrd.js","assets/index-CWYW8tlc.css","assets/window-buttons-DfEpxIfK.js","assets/use-is-mobile-iBFgy_NJ.js","assets/use-tasks-Ckkbzaqi.js","assets/Group-B0pGAqt6.js","assets/IconX-DT3j0a0D.js","assets/createReactComponent-Da5UDAqk.js","assets/window-title-D7xxKqD2.js","assets/use-computed-color-scheme-AQKBBTQB.js","assets/Badge-BYuU50xl.js","assets/use-manifest-Ckabvl2t.js"])))=>i.map(i=>d[i]);
import{j as Re,r as cs,_ as hs}from"./index-BNC_TFrd.js";import{W as ds,C as ps}from"./window-wGdUt0BA.js";import{u as us}from"./use-manifest-Ckabvl2t.js";import{w as gs}from"./wait-dev-76YwnSSB.js";import"./use-is-mobile-iBFgy_NJ.js";import"./use-tasks-Ckkbzaqi.js";import"./use-colors-Cnr-RNTE.js";import"./use-computed-color-scheme-AQKBBTQB.js";import"./noise-BmPEaWFr.js";import"./proxy-BBKe3Jvx.js";import"./Paper-i45WbCwI.js";var Xi={};var Yi;function vs(){if(Yi)return Xi;Yi=1;const q=globalThis,Nt=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wt=Symbol(),Ue=new WeakMap;let ze=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Nt&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Ue.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ue.set(t,e))}return e}toString(){return this.cssText}};const Zi=e=>new ze(typeof e=="string"?e:e+"",void 0,Wt),b=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((n,o,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[r+1],e[0]);return new ze(i,e,Wt)},Ji=(e,t)=>{if(Nt)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const n=document.createElement("style"),o=q.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}},Fe=Nt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const n of t.cssRules)i+=n.cssText;return Zi(i)})(e):e;const{is:tn,defineProperty:en,getOwnPropertyDescriptor:nn,getOwnPropertyNames:on,getOwnPropertySymbols:rn,getPrototypeOf:sn}=Object,G=globalThis,je=G.trustedTypes,an=je?je.emptyScript:"",Le=G.reactiveElementPolyfillSupport,ot=(e,t)=>e,yt={toAttribute(e,t){switch(t){case Boolean:e=e?an:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Kt=(e,t)=>!tn(e,t),Ie={attribute:!0,type:String,converter:yt,reflect:!1,hasChanged:Kt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),G.litPropertyMetadata??(G.litPropertyMetadata=new WeakMap);let X=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);n!==void 0&&en(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:o}=nn(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get(){return n?.call(this)},set(r){const s=n?.call(this);o.call(this,r),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ie}static _$Ei(){if(this.hasOwnProperty(ot("elementProperties")))return;const e=sn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ot("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ot("properties"))){const t=this.properties,i=[...on(t),...rn(t)];for(const n of i)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,n]of t)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const n=this._$Eu(t,i);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const n of i)t.unshift(Fe(n))}else e!==void 0&&t.push(Fe(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ji(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var i;const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const r=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:yt).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){var i;const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const r=n.getPropertyOptions(o),s=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)==null?void 0:i.fromAttribute)!==void 0?r.converter:yt;this._$Em=o,this[o]=s.fromAttribute(t,r.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Kt)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,r]of n)r.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],r)}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$EO)==null||e.forEach(n=>{var o;return(o=n.hostUpdate)==null?void 0:o.call(n)}),this.update(i)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[ot("elementProperties")]=new Map,X[ot("finalized")]=new Map,Le?.({ReactiveElement:X}),(G.reactiveElementVersions??(G.reactiveElementVersions=[])).push("2.0.4");const At=globalThis,Ct=At.trustedTypes,Ne=Ct?Ct.createPolicy("lit-html",{createHTML:e=>e}):void 0,We="$lit$",U=`lit$${Math.random().toFixed(9).slice(2)}$`,Ke="?"+U,ln=`<${Ke}>`,F=document,rt=()=>F.createComment(""),st=e=>e===null||typeof e!="object"&&typeof e!="function",Qe=Array.isArray,cn=e=>Qe(e)||typeof e?.[Symbol.iterator]=="function",Qt=`[ 	
\f\r]`,at=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qe=/-->/g,Ge=/>/g,j=RegExp(`>|${Qt}(?:([^\\s"'>=/]+)(${Qt}*=${Qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Xe=/'/g,Ye=/"/g,Ze=/^(?:script|style|textarea|title)$/i,hn=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),g=hn(1),Y=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Je=new WeakMap,L=F.createTreeWalker(F,129);function ti(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ne!==void 0?Ne.createHTML(t):t}const dn=(e,t)=>{const i=e.length-1,n=[];let o,r=t===2?"<svg>":"",s=at;for(let a=0;a<i;a++){const l=e[a];let h,d,c=-1,p=0;for(;p<l.length&&(s.lastIndex=p,d=s.exec(l),d!==null);)p=s.lastIndex,s===at?d[1]==="!--"?s=qe:d[1]!==void 0?s=Ge:d[2]!==void 0?(Ze.test(d[2])&&(o=RegExp("</"+d[2],"g")),s=j):d[3]!==void 0&&(s=j):s===j?d[0]===">"?(s=o??at,c=-1):d[1]===void 0?c=-2:(c=s.lastIndex-d[2].length,h=d[1],s=d[3]===void 0?j:d[3]==='"'?Ye:Xe):s===Ye||s===Xe?s=j:s===qe||s===Ge?s=at:(s=j,o=void 0);const u=s===j&&e[a+1].startsWith("/>")?" ":"";r+=s===at?l+ln:c>=0?(n.push(h),l.slice(0,c)+We+l.slice(c)+U+u):l+U+(c===-2?a:u)}return[ti(e,r+(e[i]||"<?>")+(t===2?"</svg>":"")),n]};class lt{constructor({strings:t,_$litType$:i},n){let o;this.parts=[];let r=0,s=0;const a=t.length-1,l=this.parts,[h,d]=dn(t,i);if(this.el=lt.createElement(h,n),L.currentNode=this.el.content,i===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=L.nextNode())!==null&&l.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(We)){const p=d[s++],u=o.getAttribute(c).split(U),v=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:v[2],strings:u,ctor:v[1]==="."?un:v[1]==="?"?gn:v[1]==="@"?vn:Pt}),o.removeAttribute(c)}else c.startsWith(U)&&(l.push({type:6,index:r}),o.removeAttribute(c));if(Ze.test(o.tagName)){const c=o.textContent.split(U),p=c.length-1;if(p>0){o.textContent=Ct?Ct.emptyScript:"";for(let u=0;u<p;u++)o.append(c[u],rt()),L.nextNode(),l.push({type:2,index:++r});o.append(c[p],rt())}}}else if(o.nodeType===8)if(o.data===Ke)l.push({type:2,index:r});else{let c=-1;for(;(c=o.data.indexOf(U,c+1))!==-1;)l.push({type:7,index:r}),c+=U.length-1}r++}}static createElement(t,i){const n=F.createElement("template");return n.innerHTML=t,n}}function Z(e,t,i=e,n){var o,r;if(t===Y)return t;let s=n!==void 0?(o=i._$Co)==null?void 0:o[n]:i._$Cl;const a=st(t)?void 0:t._$litDirective$;return s?.constructor!==a&&((r=s?._$AO)==null||r.call(s,!1),a===void 0?s=void 0:(s=new a(e),s._$AT(e,i,n)),n!==void 0?(i._$Co??(i._$Co=[]))[n]=s:i._$Cl=s),s!==void 0&&(t=Z(e,s._$AS(e,t.values),s,n)),t}class pn{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:n}=this._$AD,o=(t?.creationScope??F).importNode(i,!0);L.currentNode=o;let r=L.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let h;l.type===2?h=new ct(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new xn(r,this,t)),this._$AV.push(h),l=n[++a]}s!==l?.index&&(r=L.nextNode(),s++)}return L.currentNode=F,o}p(t){let i=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,i),i+=n.strings.length-2):n._$AI(t[i])),i++}}class ct{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,i,n,o){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Z(this,t,i),st(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==Y&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):cn(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==$&&st(this._$AH)?this._$AA.nextSibling.data=t:this.T(F.createTextNode(t)),this._$AH=t}$(t){var i;const{values:n,_$litType$:o}=t,r=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=lt.createElement(ti(o.h,o.h[0]),this.options)),o);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(n);else{const s=new pn(r,this),a=s.u(this.options);s.p(n),this.T(a),this._$AH=s}}_$AC(t){let i=Je.get(t.strings);return i===void 0&&Je.set(t.strings,i=new lt(t)),i}k(t){Qe(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let n,o=0;for(const r of t)o===i.length?i.push(n=new ct(this.S(rt()),this.S(rt()),this,this.options)):n=i[o],n._$AI(r),o++;o<i.length&&(this._$AR(n&&n._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,i);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var i;this._$AM===void 0&&(this._$Cv=t,(i=this._$AP)==null||i.call(this,t))}}class Pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,n,o,r){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,i=this,n,o){const r=this.strings;let s=!1;if(r===void 0)t=Z(this,t,i,0),s=!st(t)||t!==this._$AH&&t!==Y,s&&(this._$AH=t);else{const a=t;let l,h;for(t=r[0],l=0;l<r.length-1;l++)h=Z(this,a[n+l],i,l),h===Y&&(h=this._$AH[l]),s||(s=!st(h)||h!==this._$AH[l]),h===$?t=$:t!==$&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}s&&!o&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let un=class extends Pt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}};class gn extends Pt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}}class vn extends Pt{constructor(t,i,n,o,r){super(t,i,n,o,r),this.type=5}_$AI(t,i=this){if((t=Z(this,t,i,0)??$)===Y)return;const n=this._$AH,o=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==$&&(n===$||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i;typeof this._$AH=="function"?this._$AH.call(((i=this.options)==null?void 0:i.host)??this.element,t):this._$AH.handleEvent(t)}}class xn{constructor(t,i,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ei=At.litHtmlPolyfillSupport;ei?.(lt,ct),(At.litHtmlVersions??(At.litHtmlVersions=[])).push("3.1.3");const fn=(e,t,i)=>{const n=i?.renderBefore??t;let o=n._$litPart$;if(o===void 0){const r=i?.renderBefore??null;n._$litPart$=o=new ct(t.insertBefore(rt(),r),r,void 0,i??{})}return o._$AI(e),o};let m=class extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=fn(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Y}};var ii;m._$litElement$=!0,m.finalized=!0,(ii=globalThis.litElementHydrateSupport)==null||ii.call(globalThis,{LitElement:m});const ni=globalThis.litElementPolyfillSupport;ni?.({LitElement:m}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");const y=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const mn={attribute:!0,type:String,converter:yt,reflect:!1,hasChanged:Kt},wn=(e=mn,t,i)=>{const{kind:n,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),r.set(i.name,e),n==="accessor"){const{name:s}=i;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.P(s,void 0,e),a}}}if(n==="setter"){const{name:s}=i;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+n)};function f(e){return(t,i)=>typeof i=="object"?wn(e,t,i):((n,o,r)=>{const s=o.hasOwnProperty(r);return o.constructor.createProperty(r,s?{...n,wrapped:!0}:n),s?Object.getOwnPropertyDescriptor(o,r):void 0})(e,t,i)}function T(e){return f({...e,state:!0,attribute:!1})}const bn=(e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,i),i);function oi(e,t){return(i,n,o)=>{const r=s=>{var a;return((a=s.renderRoot)==null?void 0:a.querySelector(e))??null};return bn(i,n,{get(){return r(this)}})}}var yn=Object.defineProperty,An=Object.getOwnPropertyDescriptor,qt=(e,t,i,n)=>{for(var o=n>1?void 0:n?An(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&yn(t,i,o),o};let $t=class extends m{static get styles(){return b`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      .content {
        margin: 11px;
        display: grid;
        grid-template-columns: 67px 253px;
      }

      .info {
        margin-top: 6px;
      }

      .storage {
        display: grid;
        grid-template-columns: auto auto;
        grid-template-rows: auto auto;
      }

      paint-button {
        margin-right: 1px;
        float: right;
      }

      a {
        color: var(--button-text);
      }
    `}async firstUpdated(e){if(super.firstUpdated(e),"storage"in navigator){const{usage:t,quota:i}=await navigator.storage.estimate();this.totalFreeMemory=i,this.freeMemoryPercentage=100-(t??1)/(i??1)*100}}render(){return g`
      <paint-window caption="About Paint" close>
        <div class="content">
          <img src="assets/icon.png" width="32" height="32" alt="" />
          <div class="info">
            Paint<br />
            <a
              href="https://github.com/christianliebel/paint"
              target="_blank"
              rel="noopener noreferrer"
              >https://github.com/christianliebel/paint</a
            ><br />
            <a
              href="3rdpartylicenses.txt"
              target="_blank"
              rel="noopener noreferrer"
              >Made possible by third-party software</a
            ><br />
            <br />
            <br />
            This project is licensed under:<br />
            Apache 2.0
            <br />
            <br />
            <br />
            <paint-ruler></paint-ruler>
            <br />
            <div class="storage">
              <span>Storage Available to Paint:</span>
              <span>${this.getFreeMemoryInKB()} KB</span>
              <span>System Resources:</span>
              <span>${this.getFreeMemoryPercentage()}% Free</span>
            </div>
            <br />
            <paint-button tabindex="0" @click="${this.onOK}"
              >OK</paint-button
            >
          </div>
        </div>
      </paint-window>
    `}getFreeMemoryInKB(){if(typeof this.totalFreeMemory>"u")return"???";const e=Math.round(this.totalFreeMemory/1024);return Intl.NumberFormat("en-US").format(e)}getFreeMemoryPercentage(){return typeof this.freeMemoryPercentage>"u"?"???":Math.round(this.freeMemoryPercentage)}onOK(){this.dispatchEvent(new CustomEvent("close"))}};qt([f({attribute:!1})],$t.prototype,"totalFreeMemory",2),qt([f({attribute:!1})],$t.prototype,"freeMemoryPercentage",2),$t=qt([y("paint-dialog-about")],$t);function ht(e,t={}){return new Promise(i=>{var n;const o=(n=document.querySelector("paint-app"))==null?void 0:n.shadowRoot,r=document.createElement(e);Object.entries(t).forEach(([s,a])=>r[s]=a),r.addEventListener("close",s=>{o?.removeChild(r),i(s.detail)}),o?.appendChild(r)})}function kt(e,t=null,i="",n="ok"){return ht("paint-dialog-message-box",{prompt:e,icon:t,title:i,layout:n})}function O(e,t){const i=t?e.indexOf(t):-1;return g`${e.substring(0,i)}<span class="mnemonic"
      >${t}</span
    >${e.substring(i+1)}`}var Cn=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,dt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Pn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Cn(t,i,o),o};let J=class extends m{constructor(){super(...arguments),this.width="",this.height="",this.unit="pels",this.color="colors",this.units=[{value:"inches",label:"Inches",mnemonic:"I"},{value:"cm",label:"Cm",mnemonic:"m"},{value:"pels",label:"Pels",mnemonic:"P"}],this.colors=[{value:"black-and-white",label:"Black and white",mnemonic:"B"},{value:"colors",label:"Colors",mnemonic:"l"}]}static get styles(){return b`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      paint-window {
        width: 306px;
      }

      div.container {
        display: flex;
        margin: 11px 12px;
      }

      div.container > form {
        flex: 1;
      }

      div.container > form > div.dimensions {
        display: grid;
        grid-template-columns: 44px 45px 47px 50px;
        align-items: center;
      }

      div.container > form > div.dimensions > span {
        padding-left: 2px; /* 9px; */
      }

      div.container > form > div.dimensions > input[type='text'] {
        box-sizing: border-box;
        width: 100%;
        height: 23px;
        outline: none;
      }

      div.container > form > fieldset {
        margin: 8px 0 1px 0;
      }

      div.container > form > fieldset input[type='radio'] {
        margin: 0;
      }

      div.container > div.buttons {
        display: flex;
        flex-direction: column;
        margin-left: 12px;
      }

      div.container > div.buttons paint-button + paint-button {
        margin-top: 5px;
      }

      div.container > div.buttons paint-button:last-of-type {
        margin-top: 6px;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `}render(){return g` <paint-window caption="Attributes" help close>
      <div class="container">
        <form>
          <div class="dimensions">
            <span>${O("Width:","W")}</span>
            <input
              type="text"
              .value="${this.width}"
              @change="${e=>this.width=e.target.value}"
            />
            <span>${O("Height:","H")}</span>
            <input
              type="text"
              .value="${this.height}"
              @change="${e=>this.height=e.target.value}"
            />
          </div>

          <fieldset>
            <legend>Units</legend>
            ${this.units.map(({value:e,label:t,mnemonic:i})=>g`
                <label
                  ><input
                    type="radio"
                    name="unit"
                    value="${e}"
                    .checked="${this.unit===e}"
                    @change="${()=>this.unit=e}"
                    disabled
                  />
                  ${O(t,i)}</label
                >
              `)}
          </fieldset>

          <fieldset>
            <legend>Colors</legend>
            ${this.colors.map(({value:e,label:t,mnemonic:i})=>g`
                <label
                  ><input
                    type="radio"
                    name="color"
                    value="${e}"
                    .checked="${this.color===e}"
                    @change="${()=>this.color=e}"
                    disabled
                  />
                  ${O(t,i)}</label
                >
              `)}
          </fieldset>
        </form>

        <div class="buttons">
          <paint-button @click="${this.onOk}" tabindex="0">OK</paint-button>
          <paint-button @click="${this.onCancel}" tabindex="0"
            >Cancel
          </paint-button>
          <paint-button @click="${this.onDefault}" tabindex="0"
            >${O("Default","D")}
          </paint-button>
        </div>
      </div>
    </paint-window>`}async onOk(){const{width:e,height:t,unit:i,color:n}=this;if(e.length>5||t.length>5){await kt("Please enter no more than 5 characters.","warning","Paint");return}this.dispatchEvent(new CustomEvent("close",{detail:{width:e,height:t,unit:i,color:n}}))}onCancel(){this.dispatchEvent(new CustomEvent("close"))}onDefault(){this.width=screen.width.toString(),this.height=screen.height.toString(),this.unit="pels",this.color="colors"}};dt([T()],J.prototype,"width",2),dt([T()],J.prototype,"height",2),dt([T()],J.prototype,"unit",2),dt([T()],J.prototype,"color",2),J=dt([y("paint-dialog-attributes")],J);var $n=Object.defineProperty,kn=Object.getOwnPropertyDescriptor,Gt=(e,t,i,n)=>{for(var o=n>1?void 0:n?kn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&$n(t,i,o),o};let Et=class extends m{constructor(){super(...arguments),this.currentMagnifierSize=1,this.magnifierSizes=[1,2,4,6,8],this.selectedMagnifierSize=1}static get styles(){return b`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      paint-window {
        width: 306px;
      }

      div.container {
        display: flex;
        margin: 11px;
      }

      div.container > form {
        flex: 1;
      }

      div.container > form > div.current-level {
        display: flex;
        margin-bottom: 6px;
      }

      div.container > form > div.current-level > span.label {
        margin-left: 10px;
        width: 128px;
      }

      div.container > form > fieldset {
        margin: 0;
      }

      div.container > form > fieldset > div.zoom-levels {
        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-auto-flow: column;
        align-items: center;
      }

      div.container > form > fieldset label {
        margin: 7px 0;
      }

      div.container > form > fieldset label input[type='radio'] {
        margin-left: 0;
        margin-right: 0;
      }

      div.container > div.buttons {
        display: flex;
        flex-direction: column;
        margin: 0 1px 0 11px;
      }

      div.container > div.buttons > paint-button {
        margin-bottom: 5px;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `}firstUpdated(e){super.firstUpdated(e),this.selectedMagnifierSize=this.currentMagnifierSize}render(){return g`
      <paint-window caption="Custom Zoom" help close>
        <div class="container">
          <form>
            <div class="current-level">
              <span class="label">Current zoom:</span>
              <span>${this.currentMagnifierSize*100}</span>
            </div>
            <fieldset>
              <legend>Zoom to</legend>
              <div class="zoom-levels">
                ${this.magnifierSizes.map(e=>g`
                    <label>
                      <input
                        type="radio"
                        name="zoom"
                        value="${e}"
                        @change="${()=>this.selectedMagnifierSize=e}"
                        .checked="${this.selectedMagnifierSize===e}"
                      />
                      ${O((e*100).toString(),e.toString())}%
                    </label>
                  `)}
              </div>
            </fieldset>
          </form>
          <div class="buttons">
            <paint-button @click="${()=>this.onOk()}" tabindex="0"
              >OK</paint-button
            >
            <paint-button @click="${()=>this.onCancel()}" tabindex="0"
              >Cancel
            </paint-button>
          </div>
        </div>
      </paint-window>
    `}onOk(){this.dispatchEvent(new CustomEvent("close",{detail:{magnifierSize:this.selectedMagnifierSize}}))}onCancel(){this.dispatchEvent(new CustomEvent("close"))}};Gt([f({type:Number,attribute:!1})],Et.prototype,"currentMagnifierSize",2),Gt([T()],Et.prototype,"selectedMagnifierSize",2),Et=Gt([y("paint-dialog-custom-zoom")],Et);var En=Object.defineProperty,Sn=Object.getOwnPropertyDescriptor,Xt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Sn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&En(t,i,o),o};let St=class extends m{constructor(){super(...arguments),this.modes=[{value:"flip-horizontal",text:"Flip horizontal",mnemonic:"F"},{value:"flip-vertical",text:"Flip vertical",mnemonic:"v"},{value:"rotate",text:"Rotate by angle",mnemonic:"R"}],this.selectedMode=this.modes[0].value,this.degrees=[{value:90,mnemonic:"9"},{value:180,mnemonic:"1"},{value:270,mnemonic:"2"}],this.selectedDegree=this.degrees[0].value}static get styles(){return b`
      :host {
        position: absolute;
        left: 0;
        bottom: 0;
        top: 0;
        right: 0;
      }

      .content {
        display: flex;
        padding: 13px;
      }

      .options {
        width: 174px;
        display: flex;
        flex-direction: column;
      }

      .options input[name='degree'] {
        margin-left: 50px;
      }

      .buttons {
        width: 75px;
        display: flex;
        flex-direction: column;
        margin-left: 8px;
      }

      .buttons paint-button {
        margin-bottom: 5px;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `}render(){return g`
      <paint-window caption="Flip and Rotate" help close>
        <div class="content">
          <div>
            <fieldset>
              <legend>Flip and Rotate</legend>
              <div class="options">
                ${this.modes.map(e=>g`
                    <label
                      ><input
                        type="radio"
                        name="mode"
                        value="${e.value}"
                        @change="${()=>this.selectedMode=e.value}"
                        .checked="${e.value===this.selectedMode}"
                      />
                      ${O(e.text,e.mnemonic)}</label
                    >
                  `)}
                ${this.degrees.map(e=>g`
                    <label
                      ><input
                        type="radio"
                        name="degree"
                        value="${e.value}"
                        @change="${()=>this.selectedDegree=e.value}"
                        .checked="${e.value==this.selectedDegree}"
                        ?disabled="${this.selectedMode!=="rotate"}"
                      />
                      ${O(`${e.value}°`,e.mnemonic)}</label
                    >
                  `)}
              </div>
            </fieldset>
          </div>
          <div class="buttons">
            <paint-button @click="${()=>this.onOk()}" tabindex="0">
              OK
            </paint-button>
            <paint-button @click="${()=>this.onCancel()}" tabindex="0">
              Cancel
            </paint-button>
          </div>
        </div>
      </paint-window>
    `}getFlipRotateParams(){return this.selectedMode==="rotate"?{action:"rotate",param:this.selectedDegree}:{action:"flip",param:this.selectedMode==="flip-horizontal"?"horizontal":"vertical"}}onOk(){this.dispatchEvent(new CustomEvent("close",{detail:this.getFlipRotateParams()}))}onCancel(){this.dispatchEvent(new CustomEvent("close"))}};Xt([T()],St.prototype,"selectedMode",2),Xt([T()],St.prototype,"selectedDegree",2),St=Xt([y("paint-dialog-flip-and-rotate")],St);function Tn(e,t,i,n,o){let r=0,s=n,a=1;const l=i*i,h=n*n,d=-(l/4+i%2+h),c=-(h/4+n%2+l),p=-(h/4+n%2);let u=-i*s,v=2*h*r,x=-2*l*s;const C=2*h,z=2*l;function M(){r++,v+=C,u+=v}function S(){s--,x+=z,u+=x}function Q(ss,as,ls){for(let Be=0;Be<ls;Be++)o({x:ss+Be,y:as})}for(;s>=0&&r<=i;)u+h*r<=d||u+l*s<=p?(M(),a+=2):u-l*s>c?(Q(e-r,t-s,a),s!=0&&Q(e-r,t+s,a),S()):(Q(e-r,t-s,a),s!=0&&Q(e-r,t+s,a),M(),S(),a+=2);n==0&&Q(e-i,t,2*i+1)}class On{onPointerDown(t,i,n,o){n.context&&(n.context.fillStyle=o.stroke.value),this.currentPosition={x:t,y:i},this.spray(n),this.intervalHandle=setInterval(()=>this.spray(n),30)}spray({airbrushSize:t,context:i}){if(this.currentPosition&&i){const n=Math.floor(t/2),{x:o,y:r}=this.currentPosition,s=[];Tn(o,r,n,n,a=>s.push(a));for(let a=0;a<10;a++){const l=Math.round(Math.random()*(s.length-1)),{x:h,y:d}=s[l];i.fillRect(h,d,1,1)}}}onPointerMove(t,i,n){typeof this.intervalHandle<"u"&&(this.spray(n),this.currentPosition={x:t,y:i})}onPointerUp(){typeof this.intervalHandle<"u"&&(clearInterval(this.intervalHandle),this.intervalHandle=this.currentPosition=void 0)}}function w(e){e?.dispatchEvent(new CustomEvent("drawing-context-changed",{detail:{...e.drawingContext},bubbles:!0,composed:!0}))}class Mn{onPointerDown(t,i,n){this.onPointerMove(t,i,n)}onPointerMove(t,i,n){n.context&&(n.previewColor=this.pickColor(t,i,n.context),w(n.element))}onPointerUp(t,i,n,o){n.context&&(n.previewColor=null,n.colors[o.stroke.key]=this.pickColor(t,i,n.context),n.previousEditingTool&&(n.tool=n.previousEditingTool),w(n.element))}pickColor(t,i,n){const[o,r,s]=n.getImageData(t,i,1,1).data;return`rgb(${o} ${r} ${s})`}}function V(e,t,i,n,o){for(var r=Math.abs(i-e),s=e<i?1:-1,a=-Math.abs(n-t),l=t<n?1:-1,h=r+a,d;;){if(o(e,t),d=2*h,d>=a){if(e===i)break;h+=a,e+=s}if(d<=r){if(t===n)break;h+=r,t+=l}}}function Hn(e,t,i,n,o){var r=Math.abs(i-e),s=Math.abs(n-t),a=s&1,l=4*(1-r)*s*s,h=4*(a+1)*r*r,d=l+h+a*r*r,c;e>i&&(e=i,i+=r),t>n&&(t=n),t+=(s+1)/2,n=t-a,r=8*r*r,a=8*s*s;do o(i,t),o(e,t),o(e,n),o(i,n),c=2*d,c<=h&&(t++,n--,d+=h+=r),(c>=l||2*d>h)&&(e++,i--,d+=l+=a);while(e<=i);for(;t-n<=s;)o(e-1,t),o(i+1,t++),o(e-1,n),o(i+1,n--)}class Vn{constructor(){this.previous={x:0,y:0}}onPointerDown(t,i,{context:n},o){n&&(n.fillStyle=o.stroke.value,n.fillRect(t,i,1,1),this.previous={x:t,y:i})}onPointerMove(t,i,{context:n}){V(this.previous.x,this.previous.y,t,i,(o,r)=>{n?.fillRect(o,r,1,1)}),this.previous={x:t,y:i}}}var I=(function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(n,o,r){i.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:r})},i.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,o){if(o&1&&(n=i(n)),o&8||o&4&&typeof n=="object"&&n&&n.__esModule)return n;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),o&2&&typeof n!="string")for(var s in n)i.d(r,s,(function(a){return n[a]}).bind(null,s));return r},i.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(o,"a",o),o},i.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},i.p="",i(i.s=0)})([function(e,t,i){i.r(t),i.d(t,"isSameColor",function(){return r}),i.d(t,"setColorAtPixel",function(){return o}),i.d(t,"getColorAtPixel",function(){return n}),i.d(t,"colorToRGBA",function(){return a}),i.d(t,"hex2RGBA",function(){return s});function n(d,c,p){var u=d.width,v=d.data,x=4*(p*u+c);if(v[x+3]===void 0)throw new Error("Invalid pixel coordinates: x="+c+"; y="+p);return{r:v[x],g:v[x+1],b:v[x+2],a:v[x+3]}}function o(d,c,p,u){var v=d.width,x=d.data,C=4*(u*v+p);if(x[C+3]===void 0)throw new Error("Invalid pixel coordinates. Cannot set color at: x="+p+"; y="+u);x[C+0]=c.r&255,x[C+1]=c.g&255,x[C+2]=c.b&255,x[C+3]=c.a&255}function r(d,c,p){return p===void 0&&(p=0),!(Math.abs(d.r-c.r)>p||Math.abs(d.g-c.g)>p||Math.abs(d.b-c.b)>p||Math.abs(d.a-c.a)>p)}function s(d,c){c===void 0&&(c=255);var p=d;if(d.indexOf("#")===0&&(p=d.slice(1)),p.length===3&&(p=p[0]+p[0]+p[1]+p[1]+p[2]+p[2]),p.length!==6)throw new Error("Invalid HEX color "+p+".");var u=parseInt(p.slice(0,2),16),v=parseInt(p.slice(2,4),16),x=parseInt(p.slice(4,6),16);return{r:u,g:v,b:x,a:c}}function a(d){if(d.indexOf("rgba")!==-1){var c=/rgba\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9\.]{1,})/g.exec(d);c[0];var p=c[1],u=c[2],v=c[3],x=c[4];return{r:parseInt(p),g:parseInt(u),b:parseInt(v),a:Math.ceil(parseFloat(x)*255)}}else if(d.indexOf("rgb")!==-1){var C=/rgb\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3})/g.exec(d);C[0];var p=C[1],u=C[2],v=C[3];return{r:parseInt(p),g:parseInt(u),b:parseInt(v),a:255}}else{if(d.indexOf("#")!==-1)return s(d);throw new Error("Unsupported color format. Please use CSS rgba, rgb, or HEX!")}}var l=(function(){function d(c){this.collectModifiedPixels=!1,this.modifiedPixelsCount=0,this.modifiedPixels=new Set,this._tolerance=0,this._queue=[],this.imageData=c,this.isSameColor=r,this.setColorAtPixel=o,this.getColorAtPixel=n,this.colorToRGBA=a}return d.prototype.fill=function(c,p,u,v){this._newColor=this.colorToRGBA(c),this._replacedColor=this.getColorAtPixel(this.imageData,p,u),this._tolerance=v,!this.isSameColor(this._replacedColor,this._newColor,this._tolerance)&&(this.addToQueue([p,p,u,-1]),this.fillQueue())},d.prototype.addToQueue=function(c){this._queue.push(c)},d.prototype.popFromQueue=function(){return this._queue.length?this._queue.pop():null},d.prototype.isValidTarget=function(c){if(c!==null){var p=this.getColorAtPixel(this.imageData,c.x,c.y);return this.isSameColor(this._replacedColor,p,this._tolerance)}},d.prototype.fillLineAt=function(c,p){if(!this.isValidTarget({x:c,y:p}))return[-1,-1];this.setPixelColor(this._newColor,{x:c,y:p});for(var u=c,v=c,x=this.getPixelNeighbour("left",u,p);x&&this.isValidTarget(x);)this.setPixelColor(this._newColor,x),u=x.x,x=this.getPixelNeighbour("left",u,p);for(x=this.getPixelNeighbour("right",v,p);x&&this.isValidTarget(x);)this.setPixelColor(this._newColor,x),v=x.x,x=this.getPixelNeighbour("right",v,p);return[u,v]},d.prototype.fillQueue=function(){for(var c=this.popFromQueue();c;){for(var p=c[0],u=c[1],v=c[2],x=c[3],C=p;C!==-1&&C<=u;){var z=this.fillLineAt(C,v),M=z[0],S=z[1];M!==-1&&(M>=p&&S<=u&&x!==-1?(x<v&&v+1<this.imageData.height&&this.addToQueue([M,S,v+1,v]),x>v&&v>0&&this.addToQueue([M,S,v-1,v])):(v>0&&this.addToQueue([M,S,v-1,v]),v+1<this.imageData.height&&this.addToQueue([M,S,v+1,v]))),S===-1&&C<=u?C+=1:C=S+1}c=this.popFromQueue()}},d.prototype.setPixelColor=function(c,p){this.setColorAtPixel(this.imageData,c,p.x,p.y),this.modifiedPixelsCount++,this.collectModifiedPixels&&this.modifiedPixels.add(p.x+"|"+p.y)},d.prototype.getPixelNeighbour=function(c,p,u){p=p|0,u=u|0;var v;switch(c){case"right":v={x:p+1|0,y:u};break;case"left":v={x:p-1|0,y:u};break}return v.x>=0&&v.x<this.imageData.width?v:null},d})(),h=l;t.default=h}]);I===void 0&&console.error("esm-webpack-plugin: nothing exported!");const _n=I.default;I.isSameColor,I.setColorAtPixel,I.getColorAtPixel,I.colorToRGBA,I.hex2RGBA;class Dn{onPointerDown(t,i,{canvas:n,context:o},r){if(n&&o){const s=new _n(o.getImageData(0,0,n.width,n.height));s.fill(r.stroke.value,t,i,0),o.putImageData(s.imageData,0,0)}}}function _(e){e?.clearRect(0,0,e.canvas.width,e.canvas.height)}function ri(e,t,i,n){i===1&&n.fillRect(e,t,1,1),i===2&&n.fillRect(e-1,t-1,2,2),i===3&&(n.fillRect(e-1,t,3,1),n.fillRect(e,t-1,1,3)),i===4&&(n.fillRect(e-1,t-2,2,4),n.fillRect(e-2,t-1,4,2)),i===5&&(n.fillRect(e-1,t-2,3,5),n.fillRect(e-2,t-1,5,3)),i===7&&(n.fillRect(e-1,t-3,3,7),n.fillRect(e-3,t-1,7,3),n.fillRect(e-2,t-2,5,5))}class Bn{constructor(){this.previous={x:0,y:0}}onPointerHover(t,i,{canvas:n,brush:o,previewContext:r},s){n&&r&&(_(r),r.fillStyle=s.stroke.value,this.drawBrush(t,i,o,r))}onPointerDown(t,i,{brush:n,context:o},r){o&&(o.fillStyle=r.stroke.value,this.drawBrush(t,i,n,o),this.previous={x:t,y:i})}onPointerMove(t,i,{brush:n,context:o}){if(o){let r={...this.previous};V(this.previous.x,this.previous.y,t,i,(s,a)=>{const l={x:s-r.x,y:a-r.y};this.drawBrush(s,a,n,o,l),r={x:s,y:a}}),this.previous={x:t,y:i}}}drawBrush(t,i,{type:n,size:o},r,s){if(n==="circle")return ri(t,i,o,r);const a=Math.floor(o/2);if(n==="square")return this.drawSquare(t,i,a,o,r);const l=o%2===0?-1:0,h=s?i-Math.min(0,s.y):0;if(n==="forward-diagonal"){if(s&&s.y!==0){const d=s.y===-1&&s.x===-1?t:t-1;this.drawForwardLine(d,h,a,l,r)}this.drawForwardLine(t,i,a,l,r);return}if(n==="backward-diagonal"){if(s&&s.y!==0){const d=s.y===-1&&s.x===1?t:t+1;this.drawBackwardLine(d,h,a,l,r)}this.drawBackwardLine(t,i,a,l,r);return}throw new Error("Unknown brush type.")}drawSquare(t,i,n,o,r){r.fillRect(t-n,i-n,o,o)}drawForwardLine(t,i,n,o,r){const s={x:t-n,y:i+n+o},a={x:t+n+o,y:i-n};V(s.x,s.y,a.x,a.y,(l,h)=>{r.fillRect(l,h,1,1)})}drawBackwardLine(t,i,n,o,r){const s={x:t-n,y:i-n},a={x:t+n+o,y:i+n+o};V(s.x,s.y,a.x,a.y,(l,h)=>{r.fillRect(l,h,1,1)})}}class Rn{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{canvas:n,lineWidth:o,fillStyle:r,previewContext:s},a){n&&s&&this.drawRectangle(t,i,s,s,r,o,a)}onPointerUp(t,i,{canvas:n,context:o,lineWidth:r,fillStyle:s,previewContext:a},l){n&&o&&a&&this.drawRectangle(t,i,o,a,s,r,l)}drawRectangle(t,i,n,o,r,s,a){_(o);const l=Math.min(this.startPosition.x,t),h=Math.max(this.startPosition.x,t),d=Math.min(this.startPosition.y,i),c=Math.max(this.startPosition.y,i),p=Math.abs(h-l),u=Math.abs(c-d);if(r.stroke&&(p<s*2||u<s*2)){n.fillStyle=a.stroke.value,n.fillRect(l,d,p,u);return}r.fill&&(n.fillStyle=a.fill.value,n.fillRect(l,d,p,u)),r.stroke&&(n.fillStyle=a.stroke.value,this.getPointsForLine(l,d,h,c,s).forEach(({x:v,y:x})=>{n.fillRect(v,x,1,1)}))}getPointsForLine(t,i,n,o,r){const s=[];for(let a=0;a<r;a++)V(t+a,i+a,n,i+a,(l,h)=>s.push({x:l,y:h})),V(t+a,i+a,t+a,o,(l,h)=>s.push({x:l,y:h})),V(n-a,o-a,n-a,i,(l,h)=>s.push({x:l,y:h})),V(n-a,o-a,t,o-a,(l,h)=>s.push({x:l,y:h}));return s}}class Un{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i,{previewContext:n,context:o},r){n&&o&&(this.startPosition={x:t,y:i},n.fillStyle=o.fillStyle=r.stroke.value)}onPointerMove(t,i,{previewContext:n,canvas:o,lineWidth:r}){o&&n&&this.drawLine(t,i,n,n,r)}onPointerUp(t,i,{previewContext:n,context:o,canvas:r,lineWidth:s}){n&&o&&r&&this.drawLine(t,i,o,n,s)}drawLine(t,i,n,o,r){_(o),V(t,i,this.startPosition.x,this.startPosition.y,(s,a)=>{ri(s,a,r,n)})}}function si(e,t,i){i?.dispatchEvent(new CustomEvent("area",{detail:{width:Math.abs(t.x-e.x),height:Math.abs(t.y-e.y)},bubbles:!0,composed:!0}))}function ai(e,t,i){_(i),i?.setLineDash([4]),i?.strokeRect(e.x+.5,e.y+.5,t.x-e.x,t.y-e.y),i?.setLineDash([])}class zn{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{element:n,previewContext:o}){ai(this.startPosition,{x:t,y:i},o),si(this.startPosition,{x:t,y:i},n)}onPointerUp(t,i,n){const{element:o,previewContext:r}=n;_(r),o?.dispatchEvent(new CustomEvent("area",{bubbles:!0,composed:!0}));const s=t-this.startPosition.x,a=i-this.startPosition.y;n.selection=s===0&&a===0?null:{x:this.startPosition.x,y:this.startPosition.y,width:s,height:a},w(o)}}class Fn{constructor(){this.previous={x:0,y:0}}onPointerHover(t,i,{canvas:n,previewContext:o,eraserSize:r,colors:s}){n&&o&&(_(o),t>0&&t<n.width&&i>0&&i<n.height&&(o.fillStyle="black",o.fillRect(...this.getFillRectArgs(t,i,r)),o.fillStyle=s.secondary,o.fillRect(...this.getFillRectArgs(t,i,r-2))))}onPointerDown(t,i,{context:n,eraserSize:o,colors:{secondary:r}}){n&&(n.fillStyle=r,this.previous={x:t,y:i},n.fillRect(...this.getFillRectArgs(t,i,o)))}onPointerMove(t,i,{eraserSize:n,context:o}){V(this.previous.x,this.previous.y,t,i,(r,s)=>{o?.fillRect(...this.getFillRectArgs(r,s,n))}),this.previous={x:t,y:i}}getFillRectArgs(t,i,n){return[t-n/2,i-n/2,n,n]}}class jn{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{fillStyle:n,canvas:o,previewContext:r},s){o&&r&&this.drawEllipse(t,i,n,s,r,r)}onPointerUp(t,i,{fillStyle:n,canvas:o,context:r,previewContext:s},a){o&&r&&s&&this.drawEllipse(t,i,n,a,r,s)}drawEllipse(t,i,n,o,r,s){_(s);const a=[];if(Hn(this.startPosition.x,this.startPosition.y,t,i,(l,h)=>{a.push({x:l,y:h})}),n.fill){r.fillStyle=o.fill.value,a.sort((h,d)=>h.y-d.y||h.x-d.x);const l=this.getFillPixels(a);Array.from(l).forEach(h=>{this.drawPixel(r,h)})}n.stroke&&(r.fillStyle=o.stroke.value),a.forEach(l=>{this.drawPixel(r,l)})}drawPixel(t,{x:i,y:n}){t.fillRect(Math.floor(i),Math.floor(n),1,1)}*getFillPixels(t){let i;for(const n of t){if(i?.y===n.y&&n.x-i.x>1){const o=Math.min(i.x,n.x),r=Math.max(i.x,n.x);for(let s=o;s<=r;s++)yield{x:s,y:n.y}}i=n}}}function tt(e){e.view.textToolbar=e.text.showToolbar&&e.text.active}class li{constructor(){this.startPosition={x:0,y:0}}onPointerDown(t,i){this.startPosition={x:t,y:i}}onPointerMove(t,i,{previewContext:n,element:o}){ai(this.startPosition,{x:t,y:i},n),si(this.startPosition,{x:t,y:i},o)}onPointerUp(t,i,n){var o;_(n.previewContext);const r=n.text.x=Math.min(t,this.startPosition.x),s=n.text.y=Math.min(i,this.startPosition.y),a=Math.max(t,this.startPosition.x),l=Math.max(i,this.startPosition.y),h=a-r,d=l-s;h<10||d<10||((o=n.element)==null||o.dispatchEvent(new CustomEvent("area",{bubbles:!0,composed:!0})),n.text.active=!0,tt(n),n.text.width=h,n.text.height=d,w(n.element))}}const ci={tooltip:"Free-Form Select",helpText:"Selects a free-form part of the picture to move, copy, or edit.",imagePosition:"0 0"},hi={tooltip:"Select",helpText:"Selects a rectangular part of the picture to move, copy, or edit.",imagePosition:"-16px 0",instance:new zn},Yt={tooltip:"Eraser/Color Eraser",helpText:"Erases a portion of the picture, using the selected eraser shape.",imagePosition:"-32px 0",instance:new Fn,cursor:"none"},Ln={tooltip:"Fill With Color",helpText:"Fills an area with the current drawing color.",imagePosition:"-48px 0",instance:new Dn},di={tooltip:"Pick Color",helpText:"Picks up a color from the picture for drawing.",imagePosition:"-64px 0",instance:new Mn},pi={tooltip:"Magnifier",helpText:"Changes the magnification.",imagePosition:"-80px 0"},Tt={tooltip:"Pencil",helpText:"Draws a free-form line one pixel wide.",imagePosition:"-96px 0",instance:new Vn},Zt={tooltip:"Brush",helpText:"Draws using a brush with the selected shape and size.",imagePosition:"-112px 0",instance:new Bn},Jt={tooltip:"Airbrush",helpText:"Draws using an airbrush of the selected size.",imagePosition:"-128px 0",instance:new On},ui={tooltip:"Text",helpText:"Inserts text into the picture.",imagePosition:"-144px 0",instance:new li},te={tooltip:"Line",helpText:"Draws a straight line with the selected line width.",imagePosition:"-160px 0",instance:new Un},ee={tooltip:"Curve",helpText:"Draws a curved line with the selected line width.",imagePosition:"-176px 0"},ie={tooltip:"Rectangle",helpText:"Draws a rectangle with the selected fill style.",imagePosition:"-192px 0",instance:new Rn},ne={tooltip:"Polygon",helpText:"Draws a polygon with the selected fill style.",imagePosition:"-208px 0"},gi={tooltip:"Ellipse",helpText:"Draws an ellipse with the selected fill style.",imagePosition:"-224px 0",instance:new jn},oe={tooltip:"Rounded Rectangle",helpText:"Draws a rounded rectangle with the selected fill style.",imagePosition:"-240px 0"},In=[ci,hi,Yt,Ln,di,pi,Tt,Zt,Jt,ui,te,ee,ie,ne,gi,oe],vi={primary:"#000000",secondary:"#FFFFFF"},xi=["#000000","#808080","#800000","#808000","#008000","#008080","#000080","#800080","#808040","#004040","#0080FF","#004080","#4000FF","#804000","#FFFFFF","#C0C0C0","#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#FFFF80","#00FF80","#80FFFF","#8080FF","#FF0080","#FF8040"],k={lineWidth:1,colors:{...vi},palette:[...xi],previewColor:null,drawOpaque:!0,eraserSize:8,magnifierSize:1,previousMagnifierSize:4,brush:{type:"circle",size:4},airbrushSize:9,fillStyle:{stroke:!0,fill:!1},tool:Tt,previousEditingTool:Tt,selection:null,view:{statusBar:!0,colorBox:!0,toolBox:!0,textToolbar:!1},document:{title:"untitled",dirty:!1},text:{active:!1,font:"Arial",size:12,showToolbar:!0,bold:!1,italic:!1,underline:!1},element:null,previewCanvas:null,previewContext:null,canvas:null,context:null,history:null},Nn=[8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72],Wn=["Arial","Verdana","Tahoma","Trebuchet MS","Times New Roman","Georgia","Garamond","Courier New","Brush Script MT"];let re;async function fi(){return re||Promise.resolve([...Wn])}function Kn(){return re?!1:"queryLocalFonts"in window?(re=Qn(),!0):!1}async function Qn(){const e=[];for await(const t of await window.queryLocalFonts())e.push(t.family);return e.filter((t,i)=>e.indexOf(t)===i)}var qn=Object.defineProperty,Gn=Object.getOwnPropertyDescriptor,se=(e,t,i,n)=>{for(var o=n>1?void 0:n?Gn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&qn(t,i,o),o};let Ot=class extends m{constructor(){super(...arguments),this.drawingContext=k,this.fonts=[],this.fontSizes=Nn}static get styles(){return b`
      paint-window {
        position: absolute;
        top: 0;
      }

      .content {
        display: flex;
        align-items: start;
        padding: 4px 7px 4px 5px;
      }

      .font-list {
        width: 164px;
        height: 20px;

        margin-right: 9px;
      }

      .font-sizes {
        width: 72px;
        height: 21px;

        margin-right: 11px;
      }

      paint-button {
        height: 22px;
        width: 23px;
      }
    `}async firstUpdated(e){super.firstUpdated(e),this.fonts=await fi(),this.addEventListener("close",()=>{this.drawingContext.text.showToolbar=!1,tt(this.drawingContext),w(this)})}updateFont(e){this.drawingContext.text.font=e.target.value,w(this)}updateSize(e){this.drawingContext.text.size=parseInt(e.target.value),w(this)}toggle(e){this.drawingContext.text[e]=!this.drawingContext.text[e],w(this)}render(){return this.drawingContext.view.textToolbar?g`
      <paint-window caption="Fonts" tool close>
        <div class="content">
          <select
            class="font-list"
            @click="${()=>this.onFontListClick()}"
            @change="${e=>this.updateFont(e)}"
          >
            ${this.fonts.map(e=>g` <option
                value="${e}"
                ?selected="${e===this.drawingContext.text.font}"
              >
                ${e}
              </option>`)}
          </select>
          <select
            class="font-sizes"
            @change="${e=>this.updateSize(e)}"
          >
            ${this.fontSizes.map(e=>g` <option
                  value="${e}"
                  ?selected="${e===this.drawingContext.text.size}"
                >
                  ${e}
                </option>`)}
          </select>
          <paint-button @click="${()=>this.toggle("bold")}" tabindex="0">
            B
          </paint-button>
          <paint-button @click="${()=>this.toggle("italic")}" tabindex="0">
            I
          </paint-button>
          <paint-button @click="${()=>this.toggle("underline")}" tabindex="0">
            U
          </paint-button>
        </div>
      </paint-window>
    `:g``}async onFontListClick(){Kn()&&(this.fonts=await fi())}};se([f({type:Object})],Ot.prototype,"drawingContext",2),se([T()],Ot.prototype,"fonts",2),Ot=se([y("paint-dialog-text-toolbar")],Ot);var Xn=Object.defineProperty,Yn=Object.getOwnPropertyDescriptor,et=(e,t,i,n)=>{for(var o=n>1?void 0:n?Yn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Xn(t,i,o),o};let N=class extends m{constructor(){super(...arguments),this.prompt="",this.title="",this.icon=null,this.layout="ok"}static get styles(){return b`
      paint-window {
        position: absolute;
        top: 0;

        max-width: 400px;
      }

      paint-window .content {
        margin: 11px;
        display: grid;

        grid-template-columns: auto 1fr;
        grid-row-gap: 17px;
        align-items: center;
      }

      paint-window img.icon {
        width: 32px;
        height: 32px;

        margin-right: 17px;

        image-rendering: pixelated;
      }

      paint-window .prompt {
        grid-column-start: 2;
        grid-column-end: 3;

        white-space: pre-wrap;
      }

      paint-window .buttons {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 3;

        display: flex;
        justify-content: center;
      }

      paint-window .buttons paint-button + paint-button {
        margin-left: 6px;
      }
    `}firstUpdated(e){super.firstUpdated(e),requestAnimationFrame(()=>{var t;return(t=this.window)==null?void 0:t.center()})}render(){return g`
      <paint-window caption="${this.title}" close>
        <div class="content">
          ${this.getIcon()}
          <div class="prompt">${this.prompt}</div>
          <div class="buttons">${this.getDialogLayout()}</div>
        </div>
      </paint-window>
    `}getIcon(){return this.icon==="warning"?g` <img
        class="icon"
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAElBMVEUAAAAAAAAAgACAgIDAwMD//wCJvpKsAAAAAXRSTlMAQObYZgAAAIxJREFUKJFlj9EJAjAMREN1gXy4gf0vZAGhOoCQ7L+KNpWkZ+6vD+71QrRzJ0yzxz+YA0A3LUCwYTYLGNAwlDgQaDBImr35dkq6Ay1ADsUCKQkworGBFiC5W/mV5yywhoVk7TayPMeBZ0uaZWYCtpB4w7/9SQBIKDgkp9MlHYAWIHR9nplfq2CILvAeH0wjUtKxjmmsAAAAAElFTkSuQmCC"
      />`:g``}getDialogLayout(){if(this.layout==="ok")return g` <paint-button
        @click="${()=>this.onClose("ok")}"
        tabindex="0"
        >OK
      </paint-button>`;if(this.layout==="yes-no-cancel")return g`
        <paint-button @click="${()=>this.onClose("yes")}" tabindex="0"
          >${O("Yes","Y")}
        </paint-button>
        <paint-button @click="${()=>this.onClose("no")}" tabindex="0"
          >${O("No","N")}
        </paint-button>
        <paint-button @click="${()=>this.onClose("cancel")}" tabindex="0"
          >Cancel
        </paint-button>
      `;throw new Error("Unsupported Layout.")}onClose(e){this.dispatchEvent(new CustomEvent("close",{detail:e}))}};et([f({type:String})],N.prototype,"prompt",2),et([f({type:String})],N.prototype,"title",2),et([f({type:String})],N.prototype,"icon",2),et([f({type:String})],N.prototype,"layout",2),et([oi("paint-window")],N.prototype,"window",2),N=et([y("paint-dialog-message-box")],N);var Zn=Object.defineProperty,Jn=Object.getOwnPropertyDescriptor,Mt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Jn(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Zn(t,i,o),o};let W=class extends m{constructor(){super(),this.caption="",this.help=!1,this.close=!1,this.position={x:100,y:50},this.mousePosition=null,this.pointerMoveListener=this.onPointerMove.bind(this),this.pointerUpListener=this.onPointerUp.bind(this),document.addEventListener("pointermove",this.pointerMoveListener),document.addEventListener("pointerup",this.pointerUpListener),this.moveWindow()}static get styles(){return b`
      :host {
        border: 1px solid var(--button-face);
        border-right-color: var(--button-darker);
        border-bottom-color: var(--button-darker);
        background-color: var(--button-face);
        display: flex;
        position: absolute;
        z-index: var(--z-index-dialog);
        box-sizing: border-box;
      }

      .wrapper {
        border: 1px solid var(--button-light);
        border-right-color: var(--button-dark);
        border-bottom-color: var(--button-dark);
        padding: 1px;
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      div.title-bar {
        background-color: var(--highlight);
        color: var(--highlight-text);
        height: 18px;
        display: flex;
        font-weight: bold;
        align-items: center;
        box-sizing: border-box;
        padding: 1px 2px;
        margin-bottom: 1px;
      }

      :host[tool] div.title-bar {
        height: 15px;
        font-size: 9px;
        /* TODO: More stuff */
      }

      div.title-bar span.title {
        flex: 1;
      }

      paint-window-title-bar-button:last-of-type {
        margin-left: 2px;
      }
    `}render(){return g`
      <div class="wrapper">
        <div class="title-bar" @pointerdown="${this.onPointerDown}">
          <span class="title">${this.caption}</span>
          ${this.help?g`<paint-window-title-bar-button
                help
              ></paint-window-title-bar-button>`:""}
          ${this.close?g`<paint-window-title-bar-button
                close
                @click="${this.onClose}"
              ></paint-window-title-bar-button>`:""}
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("pointerup",this.pointerUpListener)}onPointerDown({clientX:e,clientY:t}){this.mousePosition={clientX:e,clientY:t}}onPointerMove({clientX:e,clientY:t}){if(this.mousePosition){e=W.clamp(e,0,innerWidth),t=W.clamp(t,0,innerHeight);const i=e-this.mousePosition.clientX,n=t-this.mousePosition.clientY;this.position.x=this.position.x+i,this.position.y=this.position.y+n,this.mousePosition={clientX:e,clientY:t},this.moveWindow()}}static clamp(e,t,i){return Math.min(Math.max(e,t),i)}onPointerUp(){this.mousePosition=null}center(){const{width:e,height:t}=this.getBoundingClientRect();this.position={x:(innerWidth-e)/2,y:(innerHeight-t)/2},this.moveWindow()}moveWindow(){this.style.transform=`translate(${this.position.x}px, ${this.position.y}px)`}onClose(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};Mt([f({type:String})],W.prototype,"caption",2),Mt([f({type:Boolean})],W.prototype,"help",2),Mt([f({type:Boolean})],W.prototype,"close",2),W=Mt([y("paint-window")],W);var to=Object.defineProperty,eo=Object.getOwnPropertyDescriptor,ae=(e,t,i,n)=>{for(var o=n>1?void 0:n?eo(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&to(t,i,o),o};let Ht=class extends m{constructor(){super(),this.help=!1,this.close=!1,this.addEventListener("pointerdown",e=>{e.stopPropagation()})}static get styles(){return b`
      :host {
        box-sizing: border-box;
        width: 16px;
        height: 14px;
        border: 1px solid var(--button-light);
        border-bottom-color: var(--button-darker);
        border-right-color: var(--button-darker);
        background-color: var(--button-face);
        color: var(--button-text);
      }

      div.wrapper {
        box-sizing: border-box;
        height: 12px;
        border: 1px solid transparent;
        border-bottom-color: var(--button-dark);
        border-right-color: var(--button-dark);
        display: flex;
        justify-content: center;
      }

      :host(:active:hover) {
        border: 1px solid var(--button-darker);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);
      }

      :host(:active:hover) div.wrapper {
        border: 1px solid var(--canvas);
        border-bottom-color: transparent;
        border-right-color: transparent;
      }

      :host(:active:hover) svg {
        margin: 1px 0 0 1px;
      }

      path {
        fill: currentColor;
      }
    `}render(){return g` <div class="wrapper">${this.getButton()}</div> `}getButton(){if(this.help)return g`
        <svg viewBox="0 0 6 9" width="6" height="9">
          <path d="M0,1h1V0h4v1h1v2H5v1H4v2H2V4h1V3h1V1H2v2H0V1z" />
          <path d="M2,7h2v2H2V7z" />
        </svg>
      `;if(this.close)return g`
        <svg viewBox="0 0 8 9" width="8" height="9">
          <path
            d="M0,1h2v1h1v1h2V2h1V1h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V7H5V6H3v1H2v1H0V7h1V6h1V5h1V4H2V3H1V2H0V1z"
          />
        </svg>
      `}};ae([f({type:Boolean})],Ht.prototype,"help",2),ae([f({type:Boolean})],Ht.prototype,"close",2),Ht=ae([y("paint-window-title-bar-button")],Ht);const le=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function ce(e,t,i,n){e.addEventListener?e.addEventListener(t,i,n):e.attachEvent&&e.attachEvent("on".concat(t),i)}function pt(e,t,i,n){e.removeEventListener?e.removeEventListener(t,i,n):e.detachEvent&&e.detachEvent("on".concat(t),i)}function mi(e,t){const i=t.slice(0,t.length-1);for(let n=0;n<i.length;n++)i[n]=e[i[n].toLowerCase()];return i}function wi(e){typeof e!="string"&&(e=""),e=e.replace(/\s/g,"");const t=e.split(",");let i=t.lastIndexOf("");for(;i>=0;)t[i-1]+=",",t.splice(i,1),i=t.lastIndexOf("");return t}function io(e,t){const i=e.length>=t.length?e:t,n=e.length>=t.length?t:e;let o=!0;for(let r=0;r<i.length;r++)n.indexOf(i[r])===-1&&(o=!1);return o}const ut={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":le?173:189,"=":le?61:187,";":le?59:186,"'":222,"[":219,"]":221,"\\":220},D={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},he={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},E={16:!1,18:!1,17:!1,91:!1},P={};for(let e=1;e<20;e++)ut["f".concat(e)]=111+e;let A=[],gt=null,bi="all";const B=new Map,vt=e=>ut[e.toLowerCase()]||D[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),no=e=>Object.keys(ut).find(t=>ut[t]===e),oo=e=>Object.keys(D).find(t=>D[t]===e);function yi(e){bi=e||"all"}function xt(){return bi||"all"}function ro(){return A.slice(0)}function so(){return A.map(e=>no(e)||oo(e)||String.fromCharCode(e))}function ao(){const e=[];return Object.keys(P).forEach(t=>{P[t].forEach(i=>{let{key:n,scope:o,mods:r,shortcut:s}=i;e.push({scope:o,shortcut:s,mods:r,keys:n.split("+").map(a=>vt(a))})})}),e}function lo(e){const t=e.target||e.srcElement,{tagName:i}=t;let n=!0;const o=i==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(t.type);return(t.isContentEditable||(o||i==="TEXTAREA"||i==="SELECT")&&!t.readOnly)&&(n=!1),n}function co(e){return typeof e=="string"&&(e=vt(e)),A.indexOf(e)!==-1}function ho(e,t){let i,n;e||(e=xt());for(const o in P)if(Object.prototype.hasOwnProperty.call(P,o))for(i=P[o],n=0;n<i.length;)i[n].scope===e?i.splice(n,1).forEach(r=>{let{element:s}=r;return de(s)}):n++;xt()===e&&yi(t||"all")}function po(e){let t=e.keyCode||e.which||e.charCode;const i=A.indexOf(t);if(i>=0&&A.splice(i,1),e.key&&e.key.toLowerCase()==="meta"&&A.splice(0,A.length),(t===93||t===224)&&(t=91),t in E){E[t]=!1;for(const n in D)D[n]===t&&(R[n]=!1)}}function Ai(e){if(typeof e>"u")Object.keys(P).forEach(o=>{Array.isArray(P[o])&&P[o].forEach(r=>Vt(r)),delete P[o]}),de(null);else if(Array.isArray(e))e.forEach(o=>{o.key&&Vt(o)});else if(typeof e=="object")e.key&&Vt(e);else if(typeof e=="string"){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];let[o,r]=i;typeof o=="function"&&(r=o,o=""),Vt({key:e,scope:o,method:r,splitKey:"+"})}}const Vt=e=>{let{key:t,scope:i,method:n,splitKey:o="+"}=e;wi(t).forEach(r=>{const s=r.split(o),a=s.length,l=s[a-1],h=l==="*"?"*":vt(l);if(!P[h])return;i||(i=xt());const d=a>1?mi(D,s):[],c=[];P[h]=P[h].filter(p=>{const u=(n?p.method===n:!0)&&p.scope===i&&io(p.mods,d);return u&&c.push(p.element),!u}),c.forEach(p=>de(p))})};function Ci(e,t,i,n){if(t.element!==n)return;let o;if(t.scope===i||t.scope==="all"){o=t.mods.length>0;for(const r in E)Object.prototype.hasOwnProperty.call(E,r)&&(!E[r]&&t.mods.indexOf(+r)>-1||E[r]&&t.mods.indexOf(+r)===-1)&&(o=!1);(t.mods.length===0&&!E[16]&&!E[18]&&!E[17]&&!E[91]||o||t.shortcut==="*")&&(t.keys=[],t.keys=t.keys.concat(A),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&(e.cancelBubble=!0)))}}function Pi(e,t){const i=P["*"];let n=e.keyCode||e.which||e.charCode;if(!R.filter.call(this,e))return;if((n===93||n===224)&&(n=91),A.indexOf(n)===-1&&n!==229&&A.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach(a=>{const l=he[a];e[a]&&A.indexOf(l)===-1?A.push(l):!e[a]&&A.indexOf(l)>-1?A.splice(A.indexOf(l),1):a==="metaKey"&&e[a]&&A.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(A=A.slice(A.indexOf(l))))}),n in E){E[n]=!0;for(const a in D)D[a]===n&&(R[a]=!0);if(!i)return}for(const a in E)Object.prototype.hasOwnProperty.call(E,a)&&(E[a]=e[he[a]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState("AltGraph")&&(A.indexOf(17)===-1&&A.push(17),A.indexOf(18)===-1&&A.push(18),E[17]=!0,E[18]=!0);const o=xt();if(i)for(let a=0;a<i.length;a++)i[a].scope===o&&(e.type==="keydown"&&i[a].keydown||e.type==="keyup"&&i[a].keyup)&&Ci(e,i[a],o,t);if(!(n in P))return;const r=P[n],s=r.length;for(let a=0;a<s;a++)if((e.type==="keydown"&&r[a].keydown||e.type==="keyup"&&r[a].keyup)&&r[a].key){const l=r[a],{splitKey:h}=l,d=l.key.split(h),c=[];for(let p=0;p<d.length;p++)c.push(vt(d[p]));c.sort().join("")===A.sort().join("")&&Ci(e,l,o,t)}}function R(e,t,i){A=[];const n=wi(e);let o=[],r="all",s=document,a=0,l=!1,h=!0,d="+",c=!1,p=!1;for(i===void 0&&typeof t=="function"&&(i=t),Object.prototype.toString.call(t)==="[object Object]"&&(t.scope&&(r=t.scope),t.element&&(s=t.element),t.keyup&&(l=t.keyup),t.keydown!==void 0&&(h=t.keydown),t.capture!==void 0&&(c=t.capture),typeof t.splitKey=="string"&&(d=t.splitKey),t.single===!0&&(p=!0)),typeof t=="string"&&(r=t),p&&Ai(e,r);a<n.length;a++)e=n[a].split(d),o=[],e.length>1&&(o=mi(D,e)),e=e[e.length-1],e=e==="*"?"*":vt(e),e in P||(P[e]=[]),P[e].push({keyup:l,keydown:h,scope:r,mods:o,shortcut:n[a],method:i,key:n[a],splitKey:d,element:s});if(typeof s<"u"&&window){if(!B.has(s)){const u=function(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;return Pi(x,s)},v=function(){let x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;Pi(x,s),po(x)};B.set(s,{keydownListener:u,keyupListenr:v,capture:c}),ce(s,"keydown",u,c),ce(s,"keyup",v,c)}if(!gt){const u=()=>{A=[]};gt={listener:u,capture:c},ce(window,"focus",u,c)}}}function uo(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(P).forEach(i=>{P[i].filter(n=>n.scope===t&&n.shortcut===e).forEach(n=>{n&&n.method&&n.method()})})}function de(e){const t=Object.values(P).flat();if(t.findIndex(i=>{let{element:n}=i;return n===e})<0){const{keydownListener:i,keyupListenr:n,capture:o}=B.get(e)||{};i&&n&&(pt(e,"keyup",n,o),pt(e,"keydown",i,o),B.delete(e))}if((t.length<=0||B.size<=0)&&(Object.keys(B).forEach(i=>{const{keydownListener:n,keyupListenr:o,capture:r}=B.get(i)||{};n&&o&&(pt(i,"keyup",o,r),pt(i,"keydown",n,r),B.delete(i))}),B.clear(),Object.keys(P).forEach(i=>delete P[i]),gt)){const{listener:i,capture:n}=gt;pt(window,"focus",i,n),gt=null}}const pe={getPressedKeyString:so,setScope:yi,getScope:xt,deleteScope:ho,getPressedKeyCodes:ro,getAllKeyCodes:ao,isPressed:co,filter:lo,trigger:uo,unbind:Ai,keyMap:ut,modifier:D,modifierMap:he};for(const e in pe)Object.prototype.hasOwnProperty.call(pe,e)&&(R[e]=pe[e]);if(typeof window<"u"){const e=window.hotkeys;R.noConflict=t=>(t&&window.hotkeys===R&&(window.hotkeys=e),R),window.hotkeys=R}function go(e){e.magnifierSize!==1&&e.tool.instance instanceof li&&(e.tool=e.previousEditingTool,e.text.active=!1,tt(e))}function ue(e){return"createImageBitmap"in self?createImageBitmap(e):new Promise(t=>{const i=new Image;i.onload=()=>{URL.revokeObjectURL(i.src),t(i)},i.src=URL.createObjectURL(e)})}async function ge(e,{canvas:t,previewCanvas:i,context:n}){const o=await ue(e);t&&i&&n&&(t.width=i.width=o.width,t.height=i.height=o.height,n.fillStyle="white",n.fillRect(0,0,o.width,o.height),n.drawImage(o,0,0))}function vo(e){"launchQueue"in window&&window.launchQueue.setConsumer(async t=>{const[i]=t.files;if(i){const n=await i.getFile();e.document.title=n.name,e.document.handle=i,await ge(n,e)}})}const xo=3;class fo{constructor(t){this.drawingContext=t,this.stack=[],this.stackPointer=-1}clear(){this.stack.length=0,this.stackPointer=-1}commit(){this.drawingContext.document.dirty=!0,this.stack.splice(this.stackPointer+1),this.stack.length===xo+1&&this.stack.shift();const{canvas:t,context:i}=this.drawingContext,n=t?.width??0,o=t?.height??0,r=i?.getImageData(0,0,n,o);if(o&&n&&r){const s=this.stack.push({height:o,width:n,imageData:r});this.stackPointer=s-1}w(this.drawingContext.element)}undo(){if(!this.canUndo())throw new Error("No actions to undo.");this.stackPointer--,this.restoreEntry()}redo(){if(!this.canRedo())throw new Error("No actions to redo.");this.stackPointer++,this.restoreEntry()}restoreEntry(){const{height:t,width:i,imageData:n}=this.stack[this.stackPointer],{canvas:o,previewCanvas:r,context:s}=this.drawingContext;o&&r&&s&&(o.height=r.height=t,o.width=r.width=i,s.putImageData(n,0,0)),w(this.drawingContext.element)}canUndo(){return this.stackPointer>0}canRedo(){return this.stackPointer>=0&&this.stackPointer<this.stack.length-1}}function mo(e){return e=e.replace(/(Ctrl\+(\S+))/g,"$1,⌘+$2"),e=e.replace(/Shft/g,"shift"),e=e.replace(/PgUp/g,"pageup"),e=e.replace(/PgDn/g,"pagedown"),e}function _t(e,t,{document:i,element:n}){i.handle=e,i.title=t,w(n)}function wo(e){e.addEventListener("dragover",t=>{t.preventDefault()}),e.addEventListener("drop",async t=>{var i;t.preventDefault();const{drawingContext:n}=e,o=[...((i=t.dataTransfer)==null?void 0:i.items)??[]].filter(({kind:r})=>r==="file");for(const r of o){const s=await r.getAsFileSystemHandle();if(!s||!bo(s))continue;const a=await s.getFile();await ge(a,n),_t(s,s.name,n);return}})}function bo(e){return e.kind==="file"}class $i{canExecute({selection:t}){return!!t}execute({selection:t,context:i,colors:n}){if(t&&i){i.fillStyle=n.secondary;const{x:o,y:r,width:s,height:a}=t;i.fillRect(o,r,s,a)}}}function Dt(e){return new Promise((t,i)=>{e.toBlob(n=>{n?t(n):i("Blob callback returned null!")})})}async function ki(e,{x:t,y:i,width:n,height:o}){var r;const s=e.getImageData(t,i,n,o),a=document.createElement("canvas");return a.width=n,a.height=o,(r=a.getContext("2d"))==null||r.putImageData(s,0,0),Dt(a)}class Ei{canExecute({selection:t}){return"write"in navigator.clipboard&&!!t}async execute({context:t,selection:i}){t&&i&&await navigator.clipboard.write([new ClipboardItem({"image/png":ki(t,i)})])}}const ve=(()=>{if(typeof self>"u")return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch{return!1}return"showOpenFilePicker"in self})(),yo=ve?Promise.resolve().then(function(){return $o}):Promise.resolve().then(function(){return Mo});async function xe(...e){return(await yo).default(...e)}ve?Promise.resolve().then(function(){return Eo}):Promise.resolve().then(function(){return Vo});const Ao=ve?Promise.resolve().then(function(){return To}):Promise.resolve().then(function(){return Do});async function Bt(...e){return(await Ao).default(...e)}const Co=async e=>{const t=await e.getFile();return t.handle=e,t};var Po=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const t=[];e.forEach((o,r)=>{t[r]={description:o.description||"Files",accept:{}},o.mimeTypes?o.mimeTypes.map(s=>{t[r].accept[s]=o.extensions||[]}):t[r].accept["*/*"]=o.extensions||[]});const i=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),n=await Promise.all(i.map(Co));return e[0].multiple?n:n[0]},$o={__proto__:null,default:Po};function Rt(e){function t(i){if(Object(i)!==i)return Promise.reject(new TypeError(i+" is not an object."));var n=i.done;return Promise.resolve(i.value).then(function(o){return{value:o,done:n}})}return Rt=function(i){this.s=i,this.n=i.next},Rt.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(i){var n=this.s.return;return n===void 0?Promise.resolve({value:i,done:!0}):t(n.apply(this.s,arguments))},throw:function(i){var n=this.s.return;return n===void 0?Promise.reject(i):t(n.apply(this.s,arguments))}},new Rt(e)}const Si=async(e,t,i=e.name,n)=>{const o=[],r=[];var s,a=!1,l=!1;try{for(var h,d=(function(c){var p,u,v,x=2;for(typeof Symbol<"u"&&(u=Symbol.asyncIterator,v=Symbol.iterator);x--;){if(u&&(p=c[u])!=null)return p.call(c);if(v&&(p=c[v])!=null)return new Rt(p.call(c));u="@@asyncIterator",v="@@iterator"}throw new TypeError("Object is not async iterable")})(e.values());a=!(h=await d.next()).done;a=!1){const c=h.value,p=`${i}/${c.name}`;c.kind==="file"?r.push(c.getFile().then(u=>(u.directoryHandle=e,u.handle=c,Object.defineProperty(u,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>p})))):c.kind!=="directory"||!t||n&&n(c)||o.push(Si(c,t,p,n))}}catch(c){l=!0,s=c}finally{try{a&&d.return!=null&&await d.return()}finally{if(l)throw s}}return[...(await Promise.all(o)).flat(),...await Promise.all(r)]};var ko=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await t.values()).next()).done?[t]:Si(t,e.recursive,void 0,e.skipDirectory)},Eo={__proto__:null,default:ko},So=async(e,t=[{}],i=null,n=!1,o=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const r=[];let s=null;if(e instanceof Blob&&e.type?s=e.type:e.headers&&e.headers.get("content-type")&&(s=e.headers.get("content-type")),t.forEach((h,d)=>{r[d]={description:h.description||"Files",accept:{}},h.mimeTypes?(d===0&&s&&h.mimeTypes.push(s),h.mimeTypes.map(c=>{r[d].accept[c]=h.extensions||[]})):s?r[d].accept[s]=h.extensions||[]:r[d].accept["*/*"]=h.extensions||[]}),i)try{await i.getFile()}catch(h){if(i=null,n)throw h}const a=i||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:r,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!i&&o&&o(a);const l=await a.createWritable();return"stream"in e?(await e.stream().pipeTo(l),a):"body"in e?(await e.body.pipeTo(l),a):(await l.write(await e),await l.close(),a)},To={__proto__:null,default:So},Oo=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,i)=>{const n=document.createElement("input");n.type="file";const o=[...e.map(l=>l.mimeTypes||[]),...e.map(l=>l.extensions||[])].join();n.multiple=e[0].multiple||!1,n.accept=o||"",n.style.display="none",document.body.append(n);const r=l=>{typeof s=="function"&&s(),t(l)},s=e[0].legacySetup&&e[0].legacySetup(r,()=>s(i),n),a=()=>{window.removeEventListener("focus",a),n.remove()};n.addEventListener("click",()=>{window.addEventListener("focus",a)}),n.addEventListener("change",()=>{window.removeEventListener("focus",a),n.remove(),r(n.multiple?Array.from(n.files):n.files[0])}),"showPicker"in HTMLInputElement.prototype?n.showPicker():n.click()})),Mo={__proto__:null,default:Oo},Ho=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,i)=>{const n=document.createElement("input");n.type="file",n.webkitdirectory=!0;const o=s=>{typeof r=="function"&&r(),t(s)},r=e[0].legacySetup&&e[0].legacySetup(o,()=>r(i),n);n.addEventListener("change",()=>{let s=Array.from(n.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(s=s.filter(a=>a.webkitRelativePath.split("/").every(l=>!e[0].skipDirectory({name:l,kind:"directory"})))):s=s.filter(a=>a.webkitRelativePath.split("/").length===2),o(s)}),"showPicker"in HTMLInputElement.prototype?n.showPicker():n.click()})),Vo={__proto__:null,default:Ho},_o=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);const i=document.createElement("a");let n=e;"body"in e&&(n=await(async function(s,a){const l=s.getReader(),h=new ReadableStream({start:p=>(async function u(){return l.read().then(({done:v,value:x})=>{if(!v)return p.enqueue(x),u();p.close()})})()}),d=new Response(h),c=await d.blob();return l.releaseLock(),new Blob([c],{type:a})})(e.body,e.headers.get("content-type"))),i.download=t.fileName||"Untitled",i.href=URL.createObjectURL(await n);const o=()=>{typeof r=="function"&&r()},r=t.legacySetup&&t.legacySetup(o,()=>r(),i);return i.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(i.href),3e4),o()}),i.click(),null},Do={__proto__:null,default:_o};class Bo{canExecute({selection:t}){return!!t}async execute({context:t,selection:i}){if(t&&i){const n=await ki(t,i);await Bt(n)}}}class Ro{constructor(){this.copy=new Ei,this.clearSelection=new $i}canExecute(t){return this.copy.canExecute(t)&&this.clearSelection.canExecute(t)}async execute(t){await this.copy.execute(t),this.clearSelection.execute(t)}}class Uo{canExecute(){var t;return!!((t=navigator.clipboard)!=null&&t.read)}async execute({context:t}){if(t){const i=await navigator.clipboard.read();for(const n of i)try{for(const o of n.types)if(o.match(/^image\//)){const r=await n.getType(o),s=await ue(r);t.drawImage(s,0,0)}}catch(o){console.error("Clipboard API paste error",o)}}}}class zo{async execute({context:t}){if(t){const i=await xe(),n=await ue(i);t.drawImage(n,0,0)}}}class Fo{canExecute(t){var i;return((i=t?.history)==null?void 0:i.canRedo())??!1}execute(t){var i;(i=t?.history)==null||i.redo()}}class jo{execute(t){if(t.canvas){const{width:i,height:n}=t.canvas;t.selection={x:0,y:0,width:i,height:n},w(t.element)}}}class Lo{canExecute(t){var i;return((i=t?.history)==null?void 0:i.canUndo())??!1}execute(t){var i;(i=t?.history)==null||i.undo()}}const Io={caption:"Edit",mnemonic:"E",helpText:"",entries:[{caption:"Undo",mnemonic:"U",shortcut:"Ctrl+Z",helpText:"Undoes the last action.",instance:new Lo},{caption:"Repeat",mnemonic:"R",shortcut:"F4",helpText:"Redoes the previously undone action.",instance:new Fo},{separator:!0},{caption:"Cut",mnemonic:"t",shortcut:"Ctrl+X",helpText:"Cuts the selection and puts it on the Clipboard.",instance:new Ro},{caption:"Copy",mnemonic:"C",shortcut:"Ctrl+C",helpText:"Copies the selection and puts it on the Clipboard.",instance:new Ei},{caption:"Paste",mnemonic:"P",shortcut:"Ctrl+V",helpText:"Inserts the contents of the Clipboard.",instance:new Uo},{caption:"Clear Selection",mnemonic:"l",shortcut:"Del",helpText:"Deletes the selection.",instance:new $i},{caption:"Select All",mnemonic:"A",shortcut:"Ctrl+L",helpText:"Selects everything.",instance:new jo},{separator:!0},{caption:"Copy To…",mnemonic:"o",helpText:"Copies the selection to a file.",instance:new Bo},{caption:"Paste From…",mnemonic:"F",helpText:"Pastes a file into the selection.",instance:new zo}]};class Ti{async execute(t){if(!t.canvas)return;const i=await Dt(t.canvas),n=await Bt(i,{fileName:t.document.title,extensions:[".png"],description:"PNG files"});n&&_t(n,n.name,t)}}class Oi{async execute(t){if(t.canvas&&t.document.handle){const i=await Dt(t.canvas);await Bt(i,void 0,t.document.handle)}else await new Ti().execute(t)}}async function Mi(e){if(!e.document.dirty)return;const t=await kt(`Save changes to ${e.document.title}?`,"warning","Paint","yes-no-cancel");if(t==="cancel")throw Error("User cancelled operation.");t==="yes"&&await new Oi().execute(e)}class No{async execute(t){try{await Mi(t),t.document.dirty=!1,window.close()}catch{}}}function fe({canvas:e,context:t,colors:i,history:n},o=!0){e&&t&&n&&(t.fillStyle=i.secondary,t.fillRect(0,0,e.width,e.height),o&&n.commit())}class Hi{canExecute({selection:t}){return!t}execute(t){fe(t)}}class Wo{async execute(t){var i;try{await Mi(t),_t(void 0,"untitled",t),t.palette=[...xi],t.colors={...vi},(i=t.history)==null||i.clear(),new Hi().execute(t),t.document.dirty=!1}catch{}}}class Ko{async execute(t){const i=await xe({extensions:[".png"],description:"PNG Files"});_t(i.handle,i.name,t),await ge(i,t)}}class me{execute(){window.print()}}class Qo{constructor(){this.fakePng=this.getFileFromPngBlob(new Blob,"fake.png")}canExecute(){return!!navigator.canShare&&navigator.canShare({files:[this.fakePng]})}async execute({canvas:t,document:i}){if(t){const n=await Dt(t);await navigator.share({files:[this.getFileFromPngBlob(n,`${i.title}.png`)],title:i.title})}}getFileFromPngBlob(t,i){return new File([t],i,{type:"image/png"})}}const qo={caption:"File",mnemonic:"F",helpText:"",entries:[{caption:"New",mnemonic:"N",shortcut:"Ctrl+N",helpText:"Creates a new document.",instance:new Wo},{caption:"Open…",mnemonic:"O",shortcut:"Ctrl+O",helpText:"Opens an existing document.",instance:new Ko},{caption:"Save",mnemonic:"S",shortcut:"Ctrl+S",helpText:"Saves the active document.",instance:new Oi},{caption:"Save As…",mnemonic:"A",helpText:"Saves the active document with a new name.",instance:new Ti},{separator:!0},{caption:"Print Preview",mnemonic:"v",helpText:"Displays full pages.",instance:new me},{caption:"Page Setup…",mnemonic:"t",helpText:"Changes the page layout.",instance:new me},{caption:"Print…",mnemonic:"P",shortcut:"Ctrl+P",helpText:"Prints the active document and sets printing options.",instance:new me},{separator:!0},{caption:"Send…",mnemonic:"e",helpText:"Sends a picture by using mail or fax.",instance:new Qo},{separator:!0},{caption:"Set As Wallpaper (Tiled)",mnemonic:"W",helpText:"Tiles this bitmap as the desktop wallpaper.",instance:null},{caption:"Set As Wallpaper (Centered)",mnemonic:"l",helpText:"Centers this bitmap as the desktop wallpaper.",instance:null},{separator:!0},{caption:"Recent File",instance:null,helpText:"Opens this document."},{separator:!0},{caption:"Exit",mnemonic:"x",shortcut:"Alt+F4",helpText:"Quits Paint.",instance:new No}]};class Go{execute(){ht("paint-dialog-about")}}const Xo={caption:"Help",mnemonic:"H",helpText:"",entries:[{caption:"Help Topics",mnemonic:"H",helpText:"Displays Help for the current task or command."},{separator:!0},{caption:"About Paint",mnemonic:"A",helpText:"Displays program information, version number, and copyright.",instance:new Go}]};class Yo{async execute(t){var i;const{previewCanvas:n,context:o}=t;if(!n||!o)return;const{canvas:r}=o,s=await ht("paint-dialog-attributes",{width:r.width.toString(),height:r.height.toString(),unit:"pels",color:"colors"});if(!s)return;const a=parseInt(s.width,10),l=parseInt(s.height,10);if(!this.isValidValue(a)||!this.isValidValue(l)){await kt("Bitmaps must be greater than one pixel on a side.","warning","Paint");return}const h=o.getImageData(0,0,r.width,r.height);r.width=n.width=a,r.height=n.height=l,fe(t,!1),o.putImageData(h,0,0),(i=t.history)==null||i.commit()}isValidValue(t){return isFinite(t)&&t>0}}class Zo{execute({canvas:t,context:i,selection:n,history:o}){if(i&&t){const r=i.globalCompositeOperation;i.globalCompositeOperation="difference",i.fillStyle="white",n?i.fillRect(n.x,n.y,n.width,n.height):i.fillRect(0,0,t.width,t.height),i.globalCompositeOperation=r,o?.commit()}}}class H{async execute({context:t,canvas:i,previewCanvas:n,history:o}){const r=await ht("paint-dialog-flip-and-rotate");!r||!i||!t||!n||!o||H.flipOrRotate(r,i,n,t,o)}static flipOrRotate(t,i,n,o,r){const s=H.cloneCanvas(i);t.action==="flip"?H.flip(t.param,i,o):t.action==="rotate"&&H.rotate(t.param,i,n,o),o.drawImage(s,0,0),o.setTransform(1,0,0,1,0,0),r.commit()}static cloneCanvas(t){var i;const n=document.createElement("canvas");return n.width=t.width,n.height=t.height,(i=n.getContext("2d"))==null||i.drawImage(t,0,0),n}static flip(t,i,n){t==="horizontal"?(n.translate(i.width,0),n.scale(-1,1)):t==="vertical"&&(n.translate(0,i.height),n.scale(1,-1))}static rotate(t,i,n,o){t===90?(H.rotateCanvas(i,n),o.translate(i.width,0),o.rotate(H.getRadianAngle(90))):t===180?(o.translate(i.width,i.height),o.rotate(H.getRadianAngle(180))):t===270&&(H.rotateCanvas(i,n),o.translate(0,i.height),o.rotate(H.getRadianAngle(270)))}static rotateCanvas(t,i){const{height:n,width:o}=t;t.height=i.height=o,t.width=i.width=n}static getRadianAngle(t){return t*Math.PI/180}}const Jo={caption:"Image",mnemonic:"I",helpText:"",entries:[{caption:"Flip/Rotate…",mnemonic:"F",helpText:"Flips or rotates the picture or a selection.",instance:new H},{caption:"Stretch/Skew…",mnemonic:"S",shortcut:"Ctrl+W",helpText:"Stretches or skews the picture or a selection."},{caption:"Invert Colors",mnemonic:"I",shortcut:"Ctrl+I",helpText:"Inverts the colors of the picture or a selection.",instance:new Zo},{caption:"Attributes…",mnemonic:"A",shortcut:"Ctrl+E",helpText:"Changes the attributes of the picture.",instance:new Yo},{caption:"Clear Image",mnemonic:"C",shortcut:"Ctrl+Shft+N",helpText:"Clears the picture or selection.",instance:new Hi}]};class tr{async execute({palette:t}){const i=t.length,n=4+i*4,o=24+i*4,r=new ArrayBuffer(o),s=new Uint8Array(r),a=new DataView(r),l=new TextEncoder;s.set(l.encode("RIFF")),a.setUint32(4,o-8,!0),s.set(l.encode("PAL "),8),s.set(l.encode("data"),12),a.setUint32(16,n,!0),a.setUint16(20,768,!0),a.setUint16(22,i,!0);const h=document.createElement("canvas").getContext("2d");for(let c=0;c<i;c++){h.fillStyle=t[c],h.fillRect(0,0,1,1);const[p,u,v]=h.getImageData(0,0,1,1).data,x=24+c*4;a.setUint8(x,p),a.setUint8(x+1,u),a.setUint8(x+2,v),a.setUint8(x+3,0)}const d=new Blob([r],{type:"application/octet-stream"});await Bt(d,{fileName:"untitled.pal",extensions:[".pal"],description:"Palette"})}}class er{async execute(t){try{const i=await xe({extensions:[".pal"],description:"Palette"});await this.updateContextFromFile(i,t)}catch{}}async updateContextFromFile(t,i){try{const n=await t.arrayBuffer();this.readPalette(n).forEach((o,r)=>i.palette[r]=o),w(i.element)}catch{await kt(`${t.name}
Paint cannot open this file.
This file is not in the correct format.`,"warning","Paint")}}readPalette(t){const i=new DataView(t),n=new TextDecoder;if(n.decode(t.slice(0,4))!=="RIFF")throw new Error("Non-RIFF palettes are not supported.");if(n.decode(t.slice(8,12))!=="PAL ")throw new Error("Only PAL form types are supported.");if(n.decode(t.slice(12,16))!=="data")throw new Error("Expected a data chunk.");const o=[],r=i.getUint16(22,!0);for(let s=0;s<r;s++){const a=24+s*4,l=i.getUint8(a),h=i.getUint8(a+1),d=i.getUint8(a+2);o.push(`rgb(${l} ${h} ${d})`)}return o.slice(0,26)}}class ir{isChecked({drawOpaque:t}){return t}execute(t){t.drawOpaque=!t.drawOpaque,w(t.element)}}const nr={caption:"Options",mnemonic:"O",helpText:"",entries:[{caption:"Edit Colors…",mnemonic:"E",helpText:"Creates a new color."},{caption:"Get Colors…",mnemonic:"G",helpText:"Uses a previously saved palette of colors.",instance:new er},{caption:"Save Colors…",mnemonic:"S",helpText:"Saves the current palette of colors to a file.",instance:new tr},{caption:"Draw Opaque",mnemonic:"D",helpText:"Makes the current selection either opaque or transparent.",instance:new ir}]};class or{async execute(t){const i=await ht("paint-dialog-custom-zoom",{currentMagnifierSize:t.magnifierSize});i!=null&&i.magnifierSize&&(t.magnifierSize=i.magnifierSize,w(t.element))}}class rr{execute(t){t.magnifierSize=4,w(t.element)}}class sr{execute(t){t.magnifierSize=1,w(t.element)}}class ar{isChecked(t){return t.text.showToolbar??!1}canExecute(t){return t.text.active}execute(t){t.text.showToolbar=!t.text.showToolbar,tt(t),w(t.element)}}class lr{async execute({canvas:t}){t&&await t.requestFullscreen()}}class cr{isChecked({view:{statusBar:t}}){return t}execute(t){t.view.statusBar=!t.view.statusBar,w(t.element)}}class hr{isChecked({view:{toolBox:t}}){return t}execute(t){t.view.toolBox=!t.view.toolBox,w(t.element)}}class dr{isChecked({view:{colorBox:t}}){return t}execute(t){t.view.colorBox=!t.view.colorBox,w(t.element)}}const pr={caption:"View",mnemonic:"V",helpText:"",entries:[{caption:"Tool Box",shortcut:"Ctrl+T",mnemonic:"T",helpText:"Shows or hides the tool box.",instance:new hr},{caption:"Color Box",shortcut:"Ctrl+A",mnemonic:"C",helpText:"Shows or hides the color box.",instance:new dr},{caption:"Status Bar",mnemonic:"S",helpText:"Shows or hides the status bar.",instance:new cr},{separator:!0},{caption:"Zoom",mnemonic:"Z",helpText:"",entries:[{caption:"Normal Size",mnemonic:"N",shortcut:"Ctrl+PgUp",helpText:"Zooms the picture to 100%.",instance:new sr},{caption:"Large Size",mnemonic:"L",shortcut:"Ctrl+PgDn",helpText:"Zooms the picture to 400%.",instance:new rr},{caption:"Custom…",mnemonic:"u",helpText:"Zooms the picture.",instance:new or},{separator:!0},{caption:"Show Grid",mnemonic:"G",shortcut:"Ctrl+G",helpText:"Shows or hides the grid."},{caption:"Show Thumbnail",mnemonic:"h",helpText:"Shows or hides the thumbnail view of the picture."}]},{caption:"View Bitmap",mnemonic:"V",shortcut:"Ctrl+F",helpText:"Displays the entire picture.",instance:new lr},{caption:"Text Toolbar",mnemonic:"e",helpText:"Shows or hides the text toolbar.",instance:new ar}]},Vi=[qo,Io,pr,Jo,nr,Xo];var ur=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,ft=(e,t,i,n)=>{for(var o=n>1?void 0:n?gr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&ur(t,i,o),o};const we="For Help, click Help Topics on the Help Menu.";let it=class extends m{constructor(){super(),this.areaText="",this.coordinateText="",this.helpText=we,this.drawingContext=k,this.previousTitle="",this.areaText="",this.coordinateText="",this.helpText=we,this.drawingContext=k,this.drawingContext.history=new fo(this.drawingContext),this.addEventListener("set-help-text",e=>{this.helpText=e.detail??we}),this.addEventListener("coordinate",e=>{this.coordinateText=e.detail?`${e.detail.x},${e.detail.y}`:""}),this.addEventListener("area",e=>{this.areaText=e.detail?`${e.detail.width}x${e.detail.height}`:""}),this.addEventListener("drawing-context-changed",e=>{const t=e.detail;go(t),this.drawingContext=t}),this.addEventListener("invoke-action",e=>{e.detail(this.drawingContext)}),this.addEventListener("canvas-ready",()=>vo(this.drawingContext)),this.beforeUnloadListener=this.onBeforeUnload.bind(this),window.addEventListener("beforeunload",this.beforeUnloadListener),wo(this),this.registerHotkeys(Vi)}static get styles(){return b`
      :host {
        --button-face: rgb(192 192 192);
        --button-light: white;
        --button-dark: rgb(128 128 128);
        --button-darker: black;
        --button-text: black;
        --canvas: rgb(128 128 128);
        --disabled-text: rgb(128 128 128);
        --highlight: rgb(0 0 128);
        --highlight-text: white;
        --highlight-disabled-text: rgb(128 128 128);
        --disabled-text-backdrop: white;
        --selected-background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAAAAABX3VL4AAAADklEQVQIHWP4f4DhwH8ACoADf16N/DIAAAAASUVORK5CYII=');

        --z-index-menu: 10;
        --z-index-dialog: 20;

        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        font-size: 9pt;

        display: inline-flex;
        flex-direction: column;
        background-color: var(--canvas);
        color: var(--button-text);
        isolation: isolate;

        user-select: none;
        -webkit-user-select: none;
        cursor: default;

        -webkit-tap-highlight-color: transparent;
      }

      @media (prefers-color-scheme: dark) {
        :host {
          --button-face: rgb(64 64 64);
          --button-light: rgb(128 128 128);
          --button-dark: rgb(32 32 32);
          --button-text: white;
          --canvas: rgb(32 32 32);
          --disabled-text: rgb(64 64 64);
          --highlight: rgb(0 0 128);
          --highlight-text: white;
          --highlight-disabled-text: rgb(128 128 128);
          --disabled-text-backdrop: rgb(192 192 192);
          --selected-background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAAAAABX3VL4AAAADklEQVQIHWNocGBwaAAABIYBga3c92oAAAAASUVORK5CYII=');
        }
      }

      @media print {
        * {
          display: none;
        }

        paint-canvas {
          display: block;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }

      div {
        overflow: hidden;
        flex: 1;
        display: flex;
      }

      div > paint-canvas {
        flex: 1;
      }

      div > paint-tool-bar {
        width: 57px;
        min-width: 57px;
      }

      paint-tool-bar {
        display: flex;
        flex-direction: column;
      }

      paint-tool-bar.color-box {
        height: 49px;
        justify-content: space-between;
      }

      paint-tool-bar.color-box paint-color-box {
        margin-top: 7px;
      }

      paint-ruler {
        z-index: 1;
      }

      paint-tool-box {
        margin-top: -2px;
        flex: 1;
      }
    `}registerHotkeys(e){e.filter(t=>!("separator"in t&&t.separator)).forEach(t=>{"entries"in t&&Array.isArray(t.entries)&&this.registerHotkeys(t.entries),"shortcut"in t&&typeof t.shortcut=="string"&&R(mo(t.shortcut),()=>{var i;return this.canActionExecute(t,this.drawingContext)&&this.dispatchEvent(new CustomEvent("invoke-action",{detail:(i=t.instance)==null?void 0:i.execute.bind(t.instance),bubbles:!0,composed:!0})),!1})})}canActionExecute(e,t){return e.instance?e.instance.canExecute?e.instance.canExecute(t):!0:!1}render(){return this.dispatchTitleChangeEvent(),g`
      <paint-menu-bar
        .entries="${Vi}"
        .drawingContext="${this.drawingContext}"
      ></paint-menu-bar>
      <div>
        ${this.drawingContext.view.toolBox?g` <paint-tool-bar>
              <paint-ruler></paint-ruler>
              <paint-tool-box
                .drawingContext="${this.drawingContext}"
              ></paint-tool-box>
              <paint-ruler></paint-ruler>
            </paint-tool-bar>`:""}
        <paint-canvas .drawingContext="${this.drawingContext}"></paint-canvas>
      </div>
      ${this.drawingContext.view.colorBox?g` <paint-tool-bar class="color-box">
            <paint-color-box .drawingContext="${this.drawingContext}">
            </paint-color-box>
            <paint-ruler></paint-ruler>
          </paint-tool-bar>`:""}
      ${this.drawingContext.view.statusBar?g` <paint-status-bar
            helpText="${this.helpText}"
            coordinateText="${this.coordinateText}"
            areaText="${this.areaText}"
          ></paint-status-bar>`:""}
      ${this.drawingContext.view.textToolbar?g` <paint-dialog-text-toolbar
            .drawingContext="${this.drawingContext}"
          ></paint-dialog-text-toolbar>`:""}
    `}dispatchTitleChangeEvent(){this.previousTitle!==this.drawingContext.document.title&&(this.previousTitle=this.drawingContext.document.title,this.dispatchEvent(new CustomEvent("titlechange",{detail:{title:this.drawingContext.document.title},composed:!0,bubbles:!0})))}onBeforeUnload(e){this.drawingContext.document.dirty&&(e.preventDefault(),e.returnValue="")}disconnectedCallback(){super.disconnectedCallback(),this.beforeUnloadListener&&window.removeEventListener("beforeunload",this.beforeUnloadListener)}};ft([T()],it.prototype,"areaText",2),ft([T()],it.prototype,"coordinateText",2),ft([T()],it.prototype,"helpText",2),ft([T()],it.prototype,"drawingContext",2),it=ft([y("paint-app")],it);var vr=(e,t,i,n)=>{for(var o=t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let _i=class extends m{static get styles(){return b`
      :host,
      * {
        box-sizing: border-box;
      }

      :host {
        display: inline-block;

        background-color: var(--button-face);
        color: var(--button-text);

        border: 1px solid var(--button-light);
        border-right-color: var(--button-darker);
        border-bottom-color: var(--button-darker);

        width: 75px;
        height: 23px;
      }

      div.inline-border {
        width: 100%;
        height: 100%;

        padding: 2px;

        border: 1px solid transparent;
        border-right-color: var(--button-dark);
        border-bottom-color: var(--button-dark);
      }

      div.focus-border {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;
      }

      :host(:focus) {
        border-color: var(--button-darker);
        border-right-width: 2px;
        border-bottom-width: 2px;
        outline: none;
      }

      :host(:focus) div.inline-border {
        border-top-color: var(--button-light);
        border-left-color: var(--button-light);

        padding-right: 1px;
        padding-bottom: 1px;
      }

      :host(:focus) div.focus-border {
        border: 1px dotted var(--button-text);
      }

      :host(:active:hover) {
        border-color: var(--button-darker);
        border-right-width: 1px;
        border-bottom-width: 1px;
      }

      :host(:active:hover) div.inline-border {
        border-color: var(--button-dark);

        padding-right: 2px;
        padding-bottom: 2px;
      }

      :host(:active:hover) div.focus-border {
        padding-top: 1px;
        padding-left: 1px;
      }

      path {
        color: currentColor;
      }

      ::slotted(.mnemonic) {
        text-decoration: underline;
      }
    `}constructor(){super(),this.addEventListener("keydown",e=>{["Space","Enter"].includes(e.code)&&this.dispatchEvent(new MouseEvent("click"))})}render(){return g` <div class="inline-border">
      <div class="focus-border">
        <slot></slot>
      </div>
    </div>`}};_i=vr([y("paint-button")],_i);var xr=Object.defineProperty,fr=Object.getOwnPropertyDescriptor,nt=(e,t,i,n)=>{for(var o=n>1?void 0:n?fr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&xr(t,i,o),o};let K=class extends m{constructor(){super(...arguments),this.drawingContext=k,this.inCanvas=!1,this.canvasWidth=screen.width,this.canvasHeight=screen.height,this.pointerDown=!1,this.previewColor="primary",this.lastPointerEventTime=0}static get styles(){return b`
      :host {
        height: 100%;

        box-sizing: border-box;
        border: 1px solid var(--button-dark);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);

        overflow: hidden;
      }

      div.frame {
        height: 100%;

        box-sizing: border-box;
        border: 1px solid var(--button-darker);
        border-bottom-color: var(--button-face);
        border-right-color: var(--button-face);

        overflow: hidden;
      }

      div.scroll-container {
        height: 100%;
        overflow: auto;
        touch-action: none;
      }

      div.document {
        vertical-align: top;
        display: inline-grid;
        grid-template-columns: 3px auto 3px;
        grid-template-rows: 3px auto 3px;
      }

      paint-handle {
        place-self: center;
      }

      canvas,
      paint-text-area {
        grid-row: 2;
        grid-column: 2;
      }

      canvas {
        image-rendering: pixelated;
        transform-origin: top left;
      }

      canvas.preview {
        pointer-events: none;
      }

      @media print {
        :host,
        * {
          border: 0 !important;
        }

        canvas.main {
          position: fixed;
          top: 0;
          left: 0;
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
        }
      }
    `}render(){return this.tool=this.drawingContext.tool.instance,g`
      <div class="frame">
        <div class="scroll-container">
          <div class="document">
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle disabled></paint-handle>
            <!-- contains the actual drawing -->
            <canvas
              class="main"
              width="${this.canvasWidth}"
              height="${this.canvasHeight}"
              style="transform: scale(${this.drawingContext.magnifierSize})"
              @pointerdown="${this.onPointerDown}"
              @contextmenu="${e=>e.preventDefault()}"
              @pointerenter="${this.onPointerEnter}"
              @pointerleave="${this.onPointerLeave}"
            ></canvas>
            <!-- for operations with previews (line, rectangle, brush, …) -->
            <canvas
              class="preview"
              style="transform: scale(${this.drawingContext.magnifierSize})"
              width="${this.canvasWidth}"
              height="${this.canvasHeight}"
            ></canvas>
            <paint-text-area
              .drawingContext="${this.drawingContext}"
            ></paint-text-area>
            <paint-handle></paint-handle>
            <paint-handle disabled></paint-handle>
            <paint-handle></paint-handle>
            <paint-handle></paint-handle>
          </div>
        </div>
      </div>
    `}firstUpdated(){if(!this.shadowRoot)throw new Error("Shadow root not present.");const e=this.shadowRoot.querySelector("canvas.main"),t=this.shadowRoot.querySelector("canvas.preview"),i=e.getContext("2d",{desynchronized:!0}),n=t.getContext("2d",{desynchronized:!0});if(!i||!n)throw new Error("Canvas context not present.");i.imageSmoothingEnabled=!1,this.drawingContext.canvas=e,this.drawingContext.context=i,this.drawingContext.previewCanvas=t,this.drawingContext.previewContext=n,this.drawingContext.element=this,fe(this.drawingContext),this.drawingContext.document.dirty=!1,w(this),document.addEventListener("pointermove",o=>this.throttledPointerMove(o)),document.addEventListener("pointerup",o=>this.onPointerUp(o)),this.dispatchEvent(new CustomEvent("canvas-ready",{bubbles:!0,composed:!0}))}throttledPointerMove(e){const t=Date.now();t-this.lastPointerEventTime<8||(this.lastPointerEventTime=t,this.onPointerMove(e))}getToolEventArgs(e,t){const i=this.pointerDown?this.previewColor:"primary",n=i==="primary"?"secondary":"primary",o={stroke:{key:i,value:this.drawingContext.colors[i]},fill:{key:n,value:this.drawingContext.colors[n]}};return[e,t,this.drawingContext,o]}onPointerDown(e){var t;if(this.pointerDown=!0,this.previewColor=e.button!==2?"primary":"secondary",this.drawingContext.text.active=!1,tt(this.drawingContext),w(this),(t=this.tool)!=null&&t.onPointerDown){const{x:i,y:n}=this.getCoordinates(e);this.tool.onPointerDown(...this.getToolEventArgs(i,n))}e.preventDefault()}onPointerMove(e){var t,i;const{x:n,y:o}=this.getCoordinates(e);this.inCanvas&&this.drawingContext.canvas&&this.dispatchEvent(new CustomEvent("coordinate",{detail:{x:Math.max(0,Math.min(this.drawingContext.canvas.width,n)),y:Math.max(0,Math.min(this.drawingContext.canvas.height,o))},bubbles:!0,composed:!0})),(t=this.tool)!=null&&t.onPointerHover&&this.tool.onPointerHover(...this.getToolEventArgs(n,o)),this.pointerDown&&(i=this.tool)!=null&&i.onPointerMove&&this.tool.onPointerMove(...this.getToolEventArgs(n,o))}onPointerUp(e){var t,i,n;if(!this.pointerDown)return;const{x:o,y:r}=this.getCoordinates(e);(t=this.tool)!=null&&t.onPointerUp&&this.tool.onPointerUp(...this.getToolEventArgs(o,r)),(i=this.drawingContext.history)==null||i.commit(),this.pointerDown=!1,(n=this.tool)!=null&&n.onPointerHover&&this.tool.onPointerHover(...this.getToolEventArgs(o,r))}onPointerEnter(){this.inCanvas=!0;const{canvas:e,tool:t}=this.drawingContext;e&&(e.style.cursor=t.cursor??"default")}onPointerLeave(){this.inCanvas=!1,this.dispatchEvent(new CustomEvent("coordinate",{bubbles:!0,composed:!0}))}getCoordinates({clientX:e,clientY:t}){if(!this.drawingContext.canvas)throw new Error("Canvas not initialized yet.");const{left:i,top:n}=this.drawingContext.canvas.getBoundingClientRect(),o=Math.floor((e-i)/this.drawingContext.magnifierSize),r=Math.floor((t-n)/this.drawingContext.magnifierSize);return{x:o,y:r}}};nt([f()],K.prototype,"drawingContext",2),nt([f({attribute:!1})],K.prototype,"inCanvas",2),nt([f({attribute:!1})],K.prototype,"tool",2),nt([f({attribute:!1})],K.prototype,"canvasWidth",2),nt([f({attribute:!1})],K.prototype,"canvasHeight",2),K=nt([y("paint-canvas")],K);var mr=Object.defineProperty,wr=Object.getOwnPropertyDescriptor,Di=(e,t,i,n)=>{for(var o=n>1?void 0:n?wr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&mr(t,i,o),o};let be=class extends m{constructor(){super(...arguments),this.drawingContext=k}static get styles(){return b`
      :host {
        display: grid;
        box-sizing: border-box;
        width: 256px;
        height: 33px;
        grid-template-columns: 15px repeat(15, 16px);
        grid-template-rows: 16px 16px;
      }

      paint-color-switcher {
        grid-column: 1 / span 2;
        grid-row: 1 / span 2;
      }
    `}render(){return g`
      <paint-color-switcher
        primaryColor="${this.drawingContext.colors.primary}"
        secondaryColor="${this.drawingContext.colors.secondary}"
        @pointerdown="${e=>this.swapColors(e)}"
      >
      </paint-color-switcher>
      ${this.drawingContext.palette.map(e=>g` <paint-color-picker
            color="${e}"
            .drawingContext="${this.drawingContext}"
          >
          </paint-color-picker>`)}
    `}swapColors({pointerType:e}){if(["pen","touch"].includes(e)){const{primary:t,secondary:i}=this.drawingContext.colors;this.drawingContext.colors.primary=i,this.drawingContext.colors.secondary=t,w(this)}}};Di([f()],be.prototype,"drawingContext",2),be=Di([y("paint-color-box")],be);var br=Object.defineProperty,yr=Object.getOwnPropertyDescriptor,ye=(e,t,i,n)=>{for(var o=n>1?void 0:n?yr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&br(t,i,o),o};let Ut=class extends m{constructor(){super(),this.drawingContext=k,this.color="",this.addEventListener("click",()=>{this.dispatchColorEvent("primary")}),this.addEventListener("contextmenu",e=>{this.dispatchColorEvent("secondary"),e.preventDefault()})}static get styles(){return b`
      :host {
        border: 1px solid var(--button-light);
        border-top-color: var(--button-dark);
        border-left-color: var(--button-dark);
      }

      div.frame {
        box-sizing: border-box;
        border: 1px solid var(--button-face);
        border-top-color: var(--button-darker);
        border-left-color: var(--button-darker);
        height: 100%;
      }
    `}dispatchColorEvent(e){this.drawingContext.colors[e]=this.color,w(this)}render(){return g`<div
      class="frame"
      style="background-color: ${this.color};"
    ></div>`}};ye([f()],Ut.prototype,"drawingContext",2),ye([f()],Ut.prototype,"color",2),Ut=ye([y("paint-color-picker")],Ut);var Ar=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,Ae=(e,t,i,n)=>{for(var o=n>1?void 0:n?Cr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Ar(t,i,o),o};let zt=class extends m{constructor(){super(...arguments),this.primaryColor="",this.secondaryColor=""}static get styles(){return b`
      :host {
        border: 1px solid var(--button-light);
        border-top-color: var(--button-dark);
        border-left-color: var(--button-dark);
        background: var(--selected-background);
        image-rendering: pixelated;
      }

      div.frame {
        box-sizing: border-box;
        border: 1px solid var(--button-face);
        border-top-color: var(--button-darker);
        border-left-color: var(--button-darker);
        height: 100%;
        padding: 3px 2px;
        position: relative;
      }

      div.color {
        box-sizing: border-box;
        width: 15px;
        height: 15px;
        border: 1px solid var(--button-dark);
        border-top-color: var(--button-light);
        border-left-color: var(--button-light);
        position: absolute;
        z-index: 2;
      }

      div.color.secondary {
        z-index: 1;
        left: 9px;
        top: 10px;
      }

      div.color > div {
        box-sizing: border-box;
        border: 1px solid var(--button-face);
        height: 100%;
      }
    `}render(){return g`
      <div class="frame">
        <div class="color primary">
          <div style="background-color: ${this.primaryColor}"></div>
        </div>
        <div class="color secondary">
          <div style="background-color: ${this.secondaryColor}"></div>
        </div>
      </div>
    `}};Ae([f()],zt.prototype,"primaryColor",2),Ae([f()],zt.prototype,"secondaryColor",2),zt=Ae([y("paint-color-switcher")],zt);var Pr=(e,t,i,n)=>{for(var o=t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let Bi=class extends m{static get styles(){return b`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 3px;
        height: 3px;
        border-top: 1px solid var(--highlight);
        border-left: 1px solid var(--highlight);
        background-color: var(--highlight);
      }

      :host([disabled]) {
        background-color: var(--highlight-text);
      }
    `}render(){return g``}};Bi=Pr([y("paint-handle")],Bi);var $r=(e,t,i,n)=>{for(var o=t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let Ri=class extends m{static get styles(){return b`
      :host {
        box-sizing: border-box;
        border: 1px solid var(--button-dark);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);

        display: flex;
        align-items: flex-end;
      }
    `}render(){return g`<slot></slot>`}};Ri=$r([y("paint-inset-container")],Ri);var kr=Object.defineProperty,Er=Object.getOwnPropertyDescriptor,Ce=(e,t,i,n)=>{for(var o=n>1?void 0:n?Er(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&kr(t,i,o),o};let Ft=class extends m{constructor(){super(),this.entries=[],this.drawingContext=k,this.addEventListener("click",e=>e.stopPropagation())}static get styles(){return b`
      :host {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: var(--z-index-menu);
        display: inline-block;
        box-sizing: border-box;
        border: 1px solid var(--button-darker);
        border-top: 1px solid var(--button-face);
        border-left: 1px solid var(--button-face);
        background-color: var(--button-face);
        color: var(--button-text);
      }

      :host(.submenu) {
        top: -3px;
        left: 100%;
      }

      div.frame {
        border: 1px solid var(--canvas);
        border-top: 1px solid var(--button-light);
        border-left: 1px solid var(--button-light);
        display: grid;
        grid-template-columns: 22px auto auto 19px;
        padding: 1px;
        white-space: nowrap;
      }

      paint-ruler {
        grid-column: 1 / span 4;
        margin: 1px 0;
      }

      .menu-entry {
        display: contents;
      }

      .menu-entry span {
        box-sizing: border-box;
        padding: 2px 0;
        position: relative;
      }

      .menu-entry span .mnemonic {
        text-decoration: underline;
      }

      .menu-entry:not(:hover) paint-menu {
        display: none;
      }

      .menu-entry .selection svg {
        height: 9px;
        width: 9px;
        margin-left: 6px;
      }

      .menu-entry .opener svg {
        height: 7px;
        width: 4px;
        margin-left: 10px;
      }

      .menu-entry span.shortcut {
        padding-left: 9px;
      }

      .menu-entry span {
        fill: var(--button-text);
      }

      .menu-entry:hover span {
        background-color: var(--highlight);
        color: var(--highlight-text);
        fill: var(--highlight-text);
      }

      .menu-entry.disabled:hover span {
        color: var(--highlight-disabled-text);
        fill: var(--highlight-disabled-text);
        text-shadow: none;
      }

      .menu-entry.disabled:hover svg .shadow {
        fill: transparent;
      }

      .menu-entry.disabled span {
        color: var(--disabled-text);
        fill: var(--disabled-text);
        text-shadow: 1px 1px 0 var(--disabled-text-backdrop);
      }

      .disabled svg .shadow {
        fill: var(--disabled-text-backdrop);
      }
    `}render(){return g` <div class="frame">
      ${this.entries.map(e=>this.getMenuEntry(e))}
    </div>`}getMenuEntry(e){return"separator"in e?g` <paint-ruler></paint-ruler>`:g`
      <div
        class="menu-entry ${this.isDisabled(e)?"disabled":""}"
        @click="${()=>this.execute(e)}"
        @pointerenter="${()=>this.setHelpText(e.helpText)}"
        @pointerleave="${()=>this.setHelpText()}"
      >
        <span class="selection">
          ${this.isChecked(e)?g` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                <path
                  class="shadow"
                  fill="transparent"
                  d="M4,7v2h1V8h1V7h1V6h1V5h1V2H8L4,7z"
                />
                <path
                  d="M1,3v3h1v1h1v1h1V7h1V6h1V5h1V4h1V1H7v1H6v1H5v1H4v1H3V4H2V3H1z"
                />
              </svg>`:""}
        </span>
        <span>${O(e.caption,e.mnemonic)}</span>
        <span class="${e.shortcut?"shortcut":""}"
          >${e.shortcut}</span
        >
        <span class="opener">
          ${e.entries?g` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 7">
                  <path d="M0,0v7h1V6h1V5h1V4h1V3H3V2H2V1H1V0H0z" />
                </svg>
                <paint-menu
                  class="submenu"
                  .entries="${e.entries}"
                  .drawingContext="${this.drawingContext}"
                ></paint-menu>`:""}
        </span>
      </div>
    `}isChecked(e){var t;return!!((t=e.instance)!=null&&t.isChecked&&e.instance.isChecked(this.drawingContext))}isDisabled({instance:e,entries:t}){return!(t||e&&(!e.canExecute||e.canExecute(this.drawingContext)))}execute(e){var t;!this.isDisabled(e)&&(t=e.instance)!=null&&t.execute&&(this.dispatchEvent(new CustomEvent("invoke-action",{detail:e.instance.execute.bind(e.instance),bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("action-executed",{bubbles:!0,composed:!0})))}setHelpText(e){this.dispatchEvent(new CustomEvent("set-help-text",{detail:e,bubbles:!0,composed:!0}))}};Ce([f()],Ft.prototype,"entries",2),Ce([f()],Ft.prototype,"drawingContext",2),Ft=Ce([y("paint-menu")],Ft);var Sr=Object.defineProperty,Tr=Object.getOwnPropertyDescriptor,jt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Tr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Sr(t,i,o),o};let mt=class extends m{constructor(){super(),this.entries=[],this.drawingContext=k,this.activeMenu=null,document.addEventListener("click",()=>this.activeMenu=null),this.addEventListener("action-executed",()=>this.activeMenu=null)}static get styles(){return b`
      :host {
        background-color: var(--button-face);
        display: flex;
        height: 20px;
      }

      ul {
        list-style-type: none;
        display: flex;
        margin: 0;
        padding: 1px 0;
      }

      li {
        padding: 1px 6px;
        position: relative;
      }

      li.active {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }

      li.disabled {
        color: var(--canvas);
        text-shadow: 1px 1px 0 var(--highlight-text);
      }

      li.active.disabled {
        color: var(--canvas);
        text-shadow: none;
      }

      paint-menu {
        display: none;
      }

      li.active paint-menu {
        display: block;
      }

      span.mnemonic {
        text-decoration: underline;
      }
    `}render(){return g`
      <ul @click="${e=>e.stopPropagation()}">
        ${this.entries.map(e=>g`
            <li
              @click="${()=>this.onClick(e)}"
              @pointerenter="${()=>this.onPointerEnter(e)}"
              @pointerleave="${()=>this.onPointerLeave()}"
              class="${this.activeMenu===e?"active":""}"
            >
              ${O(e.caption,e.mnemonic)}
              <paint-menu
                .entries="${e.entries}"
                .drawingContext="${this.drawingContext}"
              >
              </paint-menu>
            </li>
          `)}
      </ul>
    `}onClick(e){this.activeMenu=this.activeMenu===e?null:e}onPointerEnter(e){this.dispatchEvent(new CustomEvent("set-help-text",{detail:e.helpText,bubbles:!0,composed:!0})),this.activeMenu&&(this.activeMenu=e)}onPointerLeave(){this.dispatchEvent(new CustomEvent("set-help-text",{bubbles:!0,composed:!0}))}};jt([f()],mt.prototype,"entries",2),jt([f()],mt.prototype,"drawingContext",2),jt([f({attribute:!1})],mt.prototype,"activeMenu",2),mt=jt([y("paint-menu-bar")],mt);var Or=(e,t,i,n)=>{for(var o=t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let Ui=class extends m{static get styles(){return b`
      :host {
        display: block;
        border-top: 1px solid var(--button-dark);
        border-bottom: 1px solid var(--button-light);
      }
    `}render(){return g``}};Ui=Or([y("paint-ruler")],Ui);var Mr=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,Lt=(e,t,i,n)=>{for(var o=n>1?void 0:n?Hr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Mr(t,i,o),o};let wt=class extends m{constructor(){super(...arguments),this.helpText="",this.coordinateText="",this.areaText=""}static get styles(){return b`
      :host {
        background-color: var(--button-face);
        box-sizing: border-box;
        height: 23px;
        display: flex;
        padding: 2px 0 0 2px;
      }

      paint-inset-container {
        margin-left: 2px;
        flex: 1;
        overflow: hidden;
        white-space: nowrap;
      }

      paint-inset-container.tool {
        max-width: 115px;
      }

      paint-inset-container.tool img {
        align-self: flex-start;
        margin-right: 3px;
        image-rendering: pixelated;
      }

      @media (prefers-color-scheme: dark) {
        img {
          filter: invert(1);
        }
      }
    `}render(){return g`
      <paint-inset-container>${this.helpText}</paint-inset-container>
      <paint-inset-container class="tool">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAOklEQVQokWPAAv5jE8QGmIhVSHXNFIP/SJiBAZX+z4BdnIGUsCEaEGsiVnV0iapB5uchbjN+moHhPwBmmBjumUjVpgAAAABJRU5ErkJggg=="
          alt=""
        />
        ${this.coordinateText}
      </paint-inset-container>
      <paint-inset-container class="tool">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPAQMAAAABGAcJAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAChJREFUCB1jYBJiYOJiYPoHJoUYgODXKhCpxMSgACZXMDAUgdm/VgEAbW0GLYF8fC8AAAAASUVORK5CYII="
          alt=""
        />
        ${this.areaText}
      </paint-inset-container>
    `}};Lt([f()],wt.prototype,"helpText",2),Lt([f()],wt.prototype,"coordinateText",2),Lt([f()],wt.prototype,"areaText",2),wt=Lt([y("paint-status-bar")],wt);function Vr(e){e.includes("BlinkMacSystemFont")&&console.warn("break-styled-lines: Using BlinkMacSystemFont can cause Chrome to crash in certain environments!")}function Pe(e){return Array.isArray(e)&&(e.length>0?typeof e[0]=="string":!0)}function zi(e){return Array.isArray(e)&&(e.length>0?!Pe(e):!0)}function _r(e,t,i,n){const o=e.text.split("").reduce((a,l)=>{const h=a[a.length-1]||"",d=h.slice(-1);return l===" "&&d!==" "?[...a,l]:l!==" "&&d===" "?[...a,l]:[...a.slice(0,-1),`${h}${l}`]},[]),{lastLineWidth:r,lines:s}=o.reduce((a,l)=>{n.font=e.font;const{width:h}=n.measureText(l),d=a.lastLineWidth+h;if(d<=t){const u=[...a.lines.slice(-1),l].join("");return{lastLineWidth:d,lines:[...a.lines.slice(0,-1),u]}}if(h>t&&a.lastLineWidth===0)return{lastLineWidth:h,lines:[...a.lines.slice(0,-1),l]};const c=a.lines.slice(-1).join(""),p=[...a.lines.slice(0,-1),c.trimEnd()];return l.trim().length===0?{lastLineWidth:0,lines:[...p,""]}:{lastLineWidth:h,lines:[...p,l]}},{lastLineWidth:i,lines:[]});return{lastLineWidth:r,text:s.join(`
`)}}function Fi(e,t){const i="OffscreenCanvas"in window,n=document.createElement("canvas"),o=i?n.transferControlToOffscreen():n;o.width=t;const r=o.getContext("2d");return r?e.reduce((s,a)=>{const{lastLineWidth:l,text:h}=_r(a,t,s.lastLineWidth,r);return{lastLineWidth:l,lines:[...s.lines,h]}},{lastLineWidth:0,lines:[]}).lines:(console.warn("No canvas context was found, so the string was left as is!"),e.map(({text:s})=>s))}function Dr(e,t){return zi(e)?e.map(({text:i,font:n})=>({text:$e(i),font:n||t})):Pe(e)?e.map(i=>({text:$e(i),font:t})):[{text:$e(e),font:t}]}var Br=/(\r\n|\n|\r)/gm;function $e(e){return e.replace(Br," ")}function Rr(e,t,i){Vr(i);const n=Dr(e,i);return Pe(e)||zi(e)?Fi(n,t):Fi(n,t)[0]}var Ur=Rr,zr=Object.defineProperty,Fr=Object.getOwnPropertyDescriptor,ke=(e,t,i,n)=>{for(var o=n>1?void 0:n?Fr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&zr(t,i,o),o};let bt=class extends m{constructor(){super(...arguments),this.editingActive=!1,this.drawingContext=k}static get styles(){return b`
      textarea {
        position: absolute;
        box-sizing: border-box;
        border: 1px dashed var(--highlight);
        padding: 0;
        background-color: transparent;
        color: transparent;
        resize: none;
        outline: 0;
        overflow: hidden;
      }

      textarea::selection {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }
    `}firstUpdated(e){if(super.firstUpdated(e),!this.textarea)throw new Error("Textarea not found.");const t=this.textarea;t.addEventListener("input",()=>{requestAnimationFrame(()=>t.scrollTop=0),this.drawPreview()})}render(){var e,t;const{context:i,previewContext:n,text:o}=this.drawingContext;return this.style.display=o.active?"block":"none",this.editingActive&&!o.active&&this.commitTextBox(),this.editingActive=o.active,i&&n&&o.active&&((e=this.textarea)==null||e.focus(),(t=this.textarea)==null||t.scroll(0,0),this.drawPreview()),g`<textarea style="${this.getTextAreaStyle()}"></textarea>`}getTextAreaStyle(){const{colors:e,text:t}=this.drawingContext,{width:i,height:n,x:o,y:r,font:s,size:a,bold:l,italic:h,underline:d}=t;return`
      width: ${i}px;
      height: ${n}px;
      transform: translate(${o}px, ${r}px);
      font-family: "${s}"; 
      font-size: ${a}px;
      font-weight: ${l?"bold":"normal"};
      font-style: ${h?"italic":"normal"};
      text-decoration: ${d?"underline":"none"};
      caret-color: ${e.primary};
    `}drawPreview(){this.drawingContext.previewContext&&(_(this.drawingContext.previewContext),this.drawTextBox(this.drawingContext.previewContext))}commitTextBox(){this.editingActive&&!this.drawingContext.text.active&&this.textarea&&this.drawingContext.previewContext&&this.drawingContext.context&&(this.editingActive=!1,_(this.drawingContext.previewContext),this.drawTextBox(this.drawingContext.context),this.textarea.value="")}drawTextBox(e){var t;const{x:i,y:n,width:o,height:r,size:s,font:a,bold:l,italic:h,underline:d}=this.drawingContext.text;this.drawingContext.drawOpaque&&(e.fillStyle=this.drawingContext.colors.secondary,e.fillRect(i??0,n??0,o??0,r??0)),e.fillStyle=this.drawingContext.colors.primary;const c=h?"italic ":"",p=l?"bold ":"";e.font=`${c}${p}${s}px ${a}`;const u=1,v=(o??0)-u*2,x=bt.getLineHeight(e,s);(((t=this.textarea)==null?void 0:t.value)??"").split(`
`).map(C=>Ur(C,v,e.font).split(`
`)).reduce((C,z)=>C.concat(z),[]).forEach((C,z)=>{const M=(i??0)+u,S=(n??0)+s+x*z;if(!(S-(n??0)>=(r??0))&&(e.fillText(C,M,S),d)){const{width:Q}=e.measureText(C);e.fillRect(M,S+1,Q,1)}})}static getLineHeight(e,t){const i=e.measureText("");return typeof i.fontBoundingBoxAscent=="number"&&typeof i.fontBoundingBoxDescent=="number"?i.fontBoundingBoxAscent+i.fontBoundingBoxDescent:t*1.2}};ke([f()],bt.prototype,"drawingContext",2),ke([oi("textarea")],bt.prototype,"textarea",2),bt=ke([y("paint-text-area")],bt);var jr=Object.defineProperty,Lr=Object.getOwnPropertyDescriptor,ji=(e,t,i,n)=>{for(var o=n>1?void 0:n?Lr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&jr(t,i,o),o};let Ee=class extends m{static get styles(){return b`
      :host {
        display: inline-block;
        box-sizing: border-box;
        width: 25px;
        height: 25px;
        border: 1px solid var(--button-darker);
        border-top: 1px solid var(--button-light);
        border-left: 1px solid var(--button-light);
        background-color: var(--button-face);
        image-rendering: pixelated;
      }

      div.wrapper {
        height: 100%;
        border: 1px solid var(--button-dark);
        border-top: 1px solid var(--button-face);
        border-left: 1px solid var(--button-face);
        box-sizing: border-box;
      }

      div.tool {
        display: inline-block;
        width: 16px;
        height: 16px;
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAQCAMAAADODVF7AAAAPFBMVEUAAAAAAP8AracA//////8AAAAAAIAAAP8AgAAAgIAAracA//8R/P925P+qAADU/wDx/6/+//z///7///9MKWy9AAAABXRSTlMAAAAAAMJrBrEAAAKhSURBVFjDtZcJcsMgDEVlnJ/Fbpou979rWQRIIBKSTNV2MnXB6D+0lSgYqHwcnjQSBkB9Er8vPSO5BbNnkTbEhxhv5/ORfZh7f1qMNwHwqcD1ei0IeA0+PyG24HzGHQXFpdaYYrqsMQBxq5MAwurBBiEuHC98aZ1LS4L8YPgHAHmPYGFsl/pp+gKRf5C/02daga9g/reyARss/QMATM8AsKyn3X/VkKUui5SP1euSDcpaANW5xlGoZxqCyjmh/1wBYNs23NOfCTCA220EYPe2ApfLBRoALP09gH5NAyC/SuFpwhiDqGaHsv4IIMkM+qWLheizAOL9U9R/RAEAIwREik4AgJmqIGO9zUREQNEfACShSX/w0ekK+DSAEAB7AIDjMRDIADoCMqdFDegFwbpbGpQWHRN2Cgj9xACyfv86R82VWTXA6x8C8AGwegBBfyBQyngDQHYV2QXeB4Dx9ccDWemZXeYM4KcbXL0x0gAwB2Dfl9U/OCbDAABIAyj18G0Autr0OXIIznv3o8cZABX9KQI8BhFHaQ7gIpkBiK4nmqqvAR+nZaFMQESAIqAHq4OohwMAoPkUEH/ra28FwGeKkho7oUstoe0IpU1YAPAbDRwB67oyAa4Boy7VqLYBQPe6mSJoJn9NgQQgnynG3SjQ9fpVoyy9WgHANzKAEwOg2gXQzALy7ZMAZETMt0GyBiF1GRVAnoRc0u+cswlEJ30NJQ3gByoC1trnhVcwRpoOQDsImb3j8SCki8y90RGamgv6XbWWQAIAGgHwTWBZYhXIcwegJxitqK0BvX/GP0+T/wxNzs76hNAQvdDNABBjI90S0TgCFg0AMmS7G+26QGuglwDQywDctkn9rq25wqniY7ZUAxZF4IGgOgfA1tamxCM9f65ALLCME2qOAAAAAElFTkSuQmCC');
        background-repeat: no-repeat;
        margin: 2px;
      }

      @media (prefers-color-scheme: dark) {
        div.tool {
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAQCAMAAADODVF7AAAAPFBMVEXAwMD///8AAIAAAP8AgAAAgIAAracA//8R/P925P+qAADAwMDCwsLHx8fPz8/U/wDx/6/+//z///7////+6RXUAAAAAnRSTlMAAHaTzTgAAAJxSURBVFjDpZeLesMgCEYxbe06duf933VeIyAa07J9a2dM5D8CEnDRyPEPZSBND7GZRJQuISJoU0P5X3faaF9oNinb0gOh3NH+HujvAIBcN2p7PB4aAb6/8xG8Xj/mAGxnyPg2pHQGQJw9uKHuGGLbtTSiCWTsEOVHwwMA+AQAGnx/Xr8Dfhflhctv/iwO/0TD4nQa8SgB0AwAqqzgAC738KND1oxgsrNBmA2AP17OBl0D1LrE9V8bAPR+J2DqlwTw+3sE4B4s3H273Wjg8WDPaTSoLtRHCTz7dDgqglx/cjrLjPrrpnL95wBA2X+X9G88w3sA5M4AIPM26je4n9JFwK4/Op10fmX9hUCLAHcewD1HQNS/bdxrTWDAowcgwdC8tEQAZMQPByD0ZwBVfyuLZcsAzBoQ9A8BxAAIAKL+nQD1VWAUD68DOKispf5X/TkDPqt+XzKZyqM5AFwAADEC0srbxgj0AIb58DIAWW2MHInOB/erx/Wsb/qBLZsrfpLfiqSRAS16Lm8X1wjwuOaO0Wo/QNMSYKcAu9bX3gagKCjdHtMfgsh7Uk2DOCY0AMwVE1kEZAKkDqpj/T0AdTquFEEz+VsKZABVAGt3q8Cmn7eIjACqNgAJf7ECuNyrL5sK253A7EAcAJDVdPUYdFYjxKodBwCWftEjNwKhjMoMIPxDHQF92lYANOuIukbIPDuOG6Fh49i91VQAYOiXs3cC+KP6YgYgHQJ2mlpbNq7Ws3ZxYmCWhhkAR2IsyI+nordm10LYvRmJCOj0s5Cl0dbQmv5lAG4ZgFMAwPum39nvwFo/trRyXQAsKh297hrvBlP7B7tDQGM5XMIEAAAAAElFTkSuQmCC');
        }
      }

      :host(.active),
      :host(:active:hover) {
        border: 1px solid var(--button-light);
        border-top: 1px solid var(--button-darker);
        border-left: 1px solid var(--button-darker);
        background-image: var(--selected-background);
      }

      :host(.active) div.wrapper,
      :host(:active:hover) div.wrapper {
        border: 1px solid var(--button-face);
        border-top: 1px solid var(--button-dark);
        border-left: 1px solid var(--button-dark);
      }

      :host(:active:hover) div.wrapper {
        background-color: var(--button-face);
      }

      :host(.active) div.tool {
        margin: 3px;
      }

      :host(:active:hover) div.tool {
        margin: 4px;
      }
    `}constructor(){super(),this.addEventListener("pointerenter",()=>{var e;return this.dispatchEvent(new CustomEvent("set-help-text",{detail:((e=this.tool)==null?void 0:e.helpText)??"",bubbles:!0,composed:!0}))}),this.addEventListener("pointerleave",()=>this.dispatchEvent(new CustomEvent("set-help-text",{bubbles:!0,composed:!0})))}render(){var e;return g`
      <div class="wrapper">
        <div
          class="tool"
          style="background-position: ${(e=this.tool)==null?void 0:e.imagePosition}"
        ></div>
      </div>
    `}};ji([f()],Ee.prototype,"tool",2),Ee=ji([y("paint-tool")],Ee);var Ir=Object.defineProperty,Nr=Object.getOwnPropertyDescriptor,Li=(e,t,i,n)=>{for(var o=n>1?void 0:n?Nr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Ir(t,i,o),o};let Se=class extends m{constructor(){super(...arguments),this.drawingContext=k,this.options=[{size:9,selectionWidth:17,width:11,height:10,path:"M5,1h1v2h2V1h1v4h1V4h1v2H9V5H6v1h1V5h1v1h1v1h2v1h-1v1H9v1H8V8h1V7H7v1H6v1h1v1H6V9H4v1H3V9h1V8H3V7h2V6H4v1H3V5h2V4h1V3H5v1H4v1H3V4h1V3H3V2h1v1h1V1z"},{size:17,selectionWidth:22,width:18,height:16,path:"M8,0h1v1h1V0h3v1h-3v1h1v1h1V2h1v2h1V3h1V1h1v1h-1v2h-1v1h3V3h1v2h-1v2h-1v1h1v1h-3V7h1V6h-1V5h-2v1h1v3h1v7h-4v-2h1v2h1v-1h1v1h1v-3h-1v-1h1v-1h-2V7H9v1h2V7h1v2h-1v1h1v1h-1v1H9v-2H7v1H6v1h1v2h2v1H7v-1H6v-2H5v1H3v1H2v-1h1v-1h1v-1H3v-1h2v1h1v-1H5V9H4V8h1v1h3V8H6V7H3v1H2V7h1V6h3V4H4V3h1V2h1v2h1v3h1V4h1V3h1v2h1V3h-1V2H9V1H8V0z"},{size:25,selectionWidth:24,width:24,height:24,path:"M14,0v1h-1V0v2h1v2h3v1h2V4h3v1h-1V4h-1v1h-1v2h1v1h2V7h1v1h-2v1h1v1h-1V9h-1v1h-1V9h1V8h-2V6h-1v1h-2v2h-2V8h-1v2h2V9h2V7h1v1h1v1h-1v2h7v1h-1v-1h-2v1h1v2h1v1h-1v-2h-1v-1h-1v-1h-1v1h-1v1h-1v1h1v1h2v2h4v1h-2v4h-1v-2h-6v-2h1v1h-1v1h3v-1h1v1h2v1h1v-3h1v-1h-5v-1h1v-1h-3v-3h-1v2h-1v1h1v1h-2v3h1v1h-1v1h1v1h-1v-1h-2v-1h1v1h1v-2h-2v-1H9v1H8v1h1v1h1v1H8v-1H3v-2H2v-4h1v1H2v2h1v2h1v1h2v-2H4v-2h1v-2h1v-1H5v-1h1v1h1v-1h1v-1h3v1h1v1H9v-1H8v1H7v1H6v2H5v1h1v1h2v-1h1v-1H8v-1h1v-1H8v-1h1v1h3v1H9v1h2v1h1v-2h1v-1h-1v-1h1v-2h1v-1h-1v1h-2v-1H9v-1H8v1H5v1H2v1H1v-1h1v-1h1v1h1V9H0V8h1v1h2V5h3V3H4V2h4v1H7v3H4v2h1v2h3V8H7V7H6v1H5V6h2v1h1v1h1v2h1V9h1V7H9V6H7V5h2V4h1V2H9V1h2v3h2V0H14z"}]}static get styles(){return b`
      ul {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
        margin: -4px 0 0 0;
      }

      li {
        margin-top: 8px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li.selected {
        background-color: var(--highlight);
        color: var(--highlight-text);
      }

      path {
        fill: currentColor;
      }
    `}render(){const{airbrushSize:e}=this.drawingContext;return g`
      <ul>
        ${this.options.map(({size:t,selectionWidth:i,width:n,height:o,path:r})=>g`
              <li
                class="${e===t?"selected":""}"
                style="width: ${i}px"
                @click="${()=>this.setSize(t)}"
              >
                <svg style="width: ${n}px; height: ${o}px;">
                  <path d="${r}"></path>
                </svg>
              </li>
            `)}
      </ul>
    `}setSize(e){this.drawingContext.airbrushSize=e,w(this)}};Li([f({type:Object})],Se.prototype,"drawingContext",2),Se=Li([y("paint-tool-airbrush")],Se);var Wr=(e,t,i,n)=>{for(var o=t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=s(o)||o);return o};let Ii=class extends m{static get styles(){return b`
      :host {
        background-color: var(--button-face);
        padding-right: 1px;
      }
    `}render(){return g`<slot></slot>`}};Ii=Wr([y("paint-tool-bar")],Ii);var Kr=Object.defineProperty,Qr=Object.getOwnPropertyDescriptor,Te=(e,t,i,n)=>{for(var o=n>1?void 0:n?Qr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Kr(t,i,o),o};let It=class extends m{constructor(){super(...arguments),this.drawingContext=k}static get styles(){return b`
      :host {
        display: flex;
        flex-flow: row wrap;
        align-content: flex-start;
        justify-content: center;
      }

      paint-inset-container {
        width: 41px;
        height: 66px;
        margin-top: 3px;
        display: block;
      }

      paint-inset-container * {
        height: 100%;
      }

      paint-tool.unavailable {
        filter: saturate(0%) opacity(50%);
        pointer-events: none;
      }
    `}render(){return g`
      ${In.map(e=>{var t;return g` <paint-tool
          .tool=${e}
          title="${e.tooltip}"
          class="${((t=this.drawingContext)==null?void 0:t.tool)===e?"active":""} ${e.instance?"":"unavailable"}"
          @click="${()=>this.selectTool(e)}"
        ></paint-tool>`})}
      <paint-inset-container>
        ${this.getToolHtml(this.drawingContext.tool)}
      </paint-inset-container>
    `}selectTool(e){this.drawingContext.text.active=!1,tt(this.drawingContext),this.isEditingTool(this.drawingContext.tool)&&(this.drawingContext.previousEditingTool=this.drawingContext.tool),this.drawingContext.tool=e,w(this)}isEditingTool(e){return[Jt,Zt,ee,Yt,te,Tt,ne,ie,oe].includes(e)}getToolHtml(e){return di===e?g` <paint-tool-color-preview
        .drawingContext="${this.drawingContext}"
      ></paint-tool-color-preview>`:[te,ee].includes(e)?g` <paint-tool-line-width
        .drawingContext="${this.drawingContext}"
      ></paint-tool-line-width>`:[ie,gi,ne,oe].includes(e)?g` <paint-tool-fill-style
        .drawingContext="${this.drawingContext}"
      ></paint-tool-fill-style>`:[ci,hi,ui].includes(e)?g` <paint-tool-draw-opaque
        .drawingContext="${this.drawingContext}"
      ></paint-tool-draw-opaque>`:Yt===e?g` <paint-tool-eraser-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-eraser-size>`:Zt===e?g` <paint-tool-brush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-brush>`:Jt===e?g` <paint-tool-airbrush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-airbrush>`:pi===e?g`TBD`:""}};Te([f()],It.prototype,"drawingContext",2),Te([f({attribute:!1})],It.prototype,"tool",2),It=Te([y("paint-tool-box")],It);var qr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,Ni=(e,t,i,n)=>{for(var o=n>1?void 0:n?Gr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&qr(t,i,o),o};let Oe=class extends m{constructor(){super(...arguments),this.drawingContext=k,this.brushConfigs=[{type:"circle",sizes:[{value:7,path:"M3,0h3v1h1v1h1v3H7v1H6v1H3V6H2V5H1V2h1V1h1z"},{value:4,path:"M3,2h2v1h1v2H5v1H3V5H2V3h1z"},{value:1,path:"M4,3h1v1h-1z"}]},{type:"square",sizes:[{value:8,path:"M0,0H8V8H0z"},{value:5,path:"M2,1H7V6H2z"},{value:2,path:"M3,3H5V5H3z"}]},{type:"forward-diagonal",sizes:[{value:8,path:"M8,0H7v1H6v1H5v1H4v1H3v1H2v1H1v1H0v1h1V7h1V6h1V5h1V4h1V3h1V2h1V1h1V0z"},{value:5,path:"M7,1H6v1H5v1H4v1H3v1H2v1h1V5h1V4h1V3h1V2h1z"},{value:2,path:"M3,5H4V4H5V3H4V4H3z"}]},{type:"backward-diagonal",sizes:[{value:8,path:"M0,0h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H7V7H6V6H5V5H4V4H3V3H2V2H1V1H0V0z"},{value:5,path:"M2,1h1v1h1v1h1v1h1v1h1v1H6V5H5V4H4V3H3V2H2z"},{value:2,path:"M3,3h1v1h1v1H4V4H3z"}]}]}static get styles(){return b`
      :host {
        display: grid;
        grid-template-columns: repeat(3, 12px);
        grid-template-rows: repeat(4, 12px);
        grid-gap: 4px 1px;
        padding: 2px 0;
        position: relative;
      }

      .selection {
        width: 5px;
        height: 12px;
        margin-left: 4px;
      }

      div.selected {
        color: var(--highlight-text);
      }

      svg {
        margin: 2px;
        width: 8px;
        height: 8px;
        position: absolute;
      }

      path {
        fill: currentColor;
      }

      .selected .selection {
        background-color: var(--highlight);
      }
    `}render(){return g`${this.brushConfigs.map(({type:e,sizes:t})=>t.map(({value:i,path:n})=>g`<div
            @click=${()=>this.onSelect(e,i)}
            class="${this.drawingContext.brush.size===i&&this.drawingContext.brush.type===e?"selected":""}"
          ><svg viewBox="0 0 8 8"><path d="${n}"></svg>
          <div class="selection"></div>
        </div>`))}`}onSelect(e,t){this.drawingContext.brush.type=e,this.drawingContext.brush.size=t,w(this)}};Ni([f()],Oe.prototype,"drawingContext",2),Oe=Ni([y("paint-tool-brush")],Oe);var Xr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Wi=(e,t,i,n)=>{for(var o=n>1?void 0:n?Yr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Xr(t,i,o),o};let Me=class extends m{constructor(){super(...arguments),this.drawingContext=k}static get styles(){return b`
      :host {
        display: block;
      }
    `}render(){var e;this.style.backgroundColor=((e=this.drawingContext)==null?void 0:e.previewColor)??"transparent"}};Wi([f()],Me.prototype,"drawingContext",2),Me=Wi([y("paint-tool-color-preview")],Me);var Zr=Object.defineProperty,Jr=Object.getOwnPropertyDescriptor,Ki=(e,t,i,n)=>{for(var o=n>1?void 0:n?Jr(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&Zr(t,i,o),o};let He=class extends m{constructor(){super(...arguments),this.drawingContext=k}static get styles(){return b`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px 0;
      }

      li {
        box-sizing: border-box;
        height: 29px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        margin-bottom: 3px;
        image-rendering: pixelated;
        background-repeat: no-repeat;
      }

      li.selected {
        background-color: var(--highlight);
      }

      li.opaque {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXAQMAAAC7/GShAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAGRJREFUCFtjuJ277XYCQwMDA4MCAwQ0W1nOUWBoWaTkocDAoqTEARKx4lBgaFikBCRZgOJAEeudHQoouiDsnscS0xUYhKYsmcLAMAlIKjBMer4EJNKyBiTSAhLpaZmVjqoL7AYAf/8iQr5WGX0AAAAASUVORK5CYII=');
        background-position: 2px 3px;
      }

      li.transparent {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAXAQMAAAC7/GShAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAAGlJREFUCFtjuJ277XYCQwMDA4MCAwQ0W1nOUWBoWaTkocDAoqTEARKx4lBgaFikBCRZgOJAEeudHQoouiDsuZN8TiowcEatWsvA0BnVtVaBoXOaz2mgSJjGaqBI0IqVQJEgj5WousBuAABA1CB3t6hRhgAAAABJRU5ErkJggg==');
        background-position: 1px 3px;
      }

      img {
        image-rendering: pixelated;
      }
    `}render(){return g`
      <ul>
        <li
          class="${this.getClasses(!0)}"
          @click="${()=>this.selectValue(!0)}"
        ></li>
        <li
          class="${this.getClasses(!1)}"
          @click="${()=>this.selectValue(!1)}"
        ></li>
      </ul>
    `}getClasses(e){return[...e===this.drawingContext.drawOpaque?["selected"]:[],...e?["opaque"]:["transparent"]].join(" ")}selectValue(e){this.drawingContext.drawOpaque=e,w(this)}};Ki([f()],He.prototype,"drawingContext",2),He=Ki([y("paint-tool-draw-opaque")],He);var ts=Object.defineProperty,es=Object.getOwnPropertyDescriptor,Qi=(e,t,i,n)=>{for(var o=n>1?void 0:n?es(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&ts(t,i,o),o};let Ve=class extends m{constructor(){super(...arguments),this.drawingContext=k,this.eraserSizes=[4,6,8,10]}static get styles(){return b`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px;
      }

      li {
        margin-bottom: 2px;
      }

      li .selection-wrapper {
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
      }

      li.selected .selection-wrapper {
        background-color: var(--highlight);
      }

      li div.size {
        background-color: var(--button-text);
      }

      li.selected div.size {
        background-color: var(--highlight-text);
      }
    `}render(){return g`
      <ul>
        ${this.eraserSizes.map(e=>g`
            <li
              class="${e===this.drawingContext.eraserSize?"selected":""}"
              @click="${()=>this.selectSize(e)}"
            >
              <div class="selection-wrapper">
                <div class="size" style="${this.getStyle(e)}"></div>
              </div>
            </li>
          `)}
      </ul>
    `}getStyle(e){return`width: ${e}px; height: ${e}px`}selectSize(e){this.drawingContext.eraserSize=e,w(this)}};Qi([f()],Ve.prototype,"drawingContext",2),Ve=Qi([y("paint-tool-eraser-size")],Ve);var is=Object.defineProperty,ns=Object.getOwnPropertyDescriptor,qi=(e,t,i,n)=>{for(var o=n>1?void 0:n?ns(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&is(t,i,o),o};let _e=class extends m{constructor(){super(...arguments),this.drawingContext=k,this.fillStyles=[{stroke:!0,fill:!1},{stroke:!0,fill:!0},{stroke:!1,fill:!0}]}static get styles(){return b`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 3px 2px;
      }

      li {
        height: 18px;
        width: 35px;
        margin-bottom: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li.selected {
        background-color: var(--highlight);
      }

      li .item {
        width: 27px;
        height: 10px;
        box-sizing: border-box;
      }

      li .item.stroke {
        border: 1px solid var(--button-text);
      }

      li.selected .item.stroke {
        border-color: var(--highlight-text);
      }

      li .item.fill {
        background-color: var(--button-dark);
      }
    `}render(){return g`
      <ul>
        ${this.fillStyles.map(e=>g`
            <li
              class="${this.isSelected(e)?"selected":""}"
              @click="${()=>this.onSelect(e)}"
            >
              <div class="item ${this.getClasses(e)}"></div>
            </li>
          `)}
      </ul>
    `}isSelected({stroke:e,fill:t}){return e===this.drawingContext.fillStyle.stroke&&t===this.drawingContext.fillStyle.fill}getClasses({stroke:e,fill:t}){return[...e?["stroke"]:[],...t?["fill"]:[]].join(" ")}onSelect(e){this.drawingContext.fillStyle=e,w(this)}};qi([f()],_e.prototype,"drawingContext",2),_e=qi([y("paint-tool-fill-style")],_e);var os=Object.defineProperty,rs=Object.getOwnPropertyDescriptor,Gi=(e,t,i,n)=>{for(var o=n>1?void 0:n?rs(t,i):t,r=e.length-1,s;r>=0;r--)(s=e[r])&&(o=(n?s(t,i,o):s(o))||o);return n&&o&&os(t,i,o),o};let De=class extends m{constructor(){super(...arguments),this.drawingContext=k,this.lineWidths=[1,2,3,4,5]}static get styles(){return b`
      ul {
        list-style-type: none;
        margin: 0;
        padding: 1px 2px;
      }

      li {
        margin-top: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 10px;
        box-sizing: border-box;
      }

      li:nth-child(odd) {
        padding-bottom: 1px;
      }

      li div {
        width: 27px;
        background-color: var(--button-text);
      }

      li.selected {
        background-color: var(--highlight);
      }

      li.selected div {
        background-color: var(--highlight-text);
      }
    `}render(){return g`
      <ul>
        ${this.lineWidths.map(e=>g` <li
            @click="${()=>this.onUpdateWidth(e)}"
            class="${this.drawingContext.lineWidth===e?"selected":""}"
          >
            <div style="height: ${e}px"></div>
          </li>`)}
      </ul>
    `}onUpdateWidth(e){this.drawingContext.lineWidth=e,w(this)}};return Gi([f()],De.prototype,"drawingContext",2),De=Gi([y("paint-tool-line-width")],De),Xi}vs();const xs=cs.lazy(async()=>(await gs(),hs(()=>import("./app-CRr4hnRY.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))));function Ss(){const q=us("paint");return Re.jsx(ds,{manifest:q,children:Re.jsx(ps,{children:Re.jsx(xs,{})})})}export{Ss as default};
