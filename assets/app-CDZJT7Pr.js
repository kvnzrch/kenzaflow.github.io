import{Ht as e,Vn as t}from"./insecure-stubs-Dw9d47im.js";import{n,t as r}from"./use-manifest-C7pjTKBR.js";import{n as i,t as a}from"./use-is-mobile-eVe46pJn.js";import{t as o}from"./window-title-Du4MHirh.js";var s=globalThis,c=s.ShadowRoot&&(s.ShadyCSS===void 0||s.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,l=Symbol(),u=new WeakMap,d=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==l)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(c&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=u.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&u.set(t,e))}return e}toString(){return this.cssText}},f=e=>new d(typeof e==`string`?e:e+``,void 0,l),p=(e,...t)=>new d(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(e._$cssResult$===!0)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,l),ee=(e,t)=>{if(c)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=s.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},te=c?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return f(t)})(e):e,{is:ne,defineProperty:re,getOwnPropertyDescriptor:ie,getOwnPropertyNames:ae,getOwnPropertySymbols:m,getPrototypeOf:oe}=Object,se=globalThis,ce=se.trustedTypes,le=ce?ce.emptyScript:``,ue=se.reactiveElementPolyfillSupport,h=(e,t)=>e,de={toAttribute(e,t){switch(t){case Boolean:e=e?le:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},fe=(e,t)=>!ne(e,t),pe={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:fe};Symbol.metadata??(Symbol.metadata=Symbol(`metadata`)),se.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=pe){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&re(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=ie(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return r?.call(this)},set(t){let a=r?.call(this);i.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??pe}static _$Ei(){if(this.hasOwnProperty(h(`elementProperties`)))return;let e=oe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(h(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(h(`properties`))){let e=this.properties,t=[...ae(e),...m(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(te(e))}else e!==void 0&&t.push(te(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(e=>e(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ee(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(e=>e.hostConnected?.call(e))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(e=>e.hostDisconnected?.call(e))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(n.converter?.toAttribute===void 0?de:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?de:e.converter;this._$Em=r,this[r]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??fe)(this[e],t))return;this.P(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e)n.wrapped!==!0||this._$AL.has(t)||this[t]===void 0||this.P(t,this[t],n)}let t=!1,n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$EO)==null||e.forEach(e=>e.hostUpdate?.call(e)),this.update(n)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(e=>e.hostUpdated?.call(e)),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[h(`elementProperties`)]=new Map,g[h(`finalized`)]=new Map,ue?.({ReactiveElement:g}),(se.reactiveElementVersions??=[]).push(`2.0.4`);var me=globalThis,he=me.trustedTypes,ge=he?he.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,_e=`$lit$`,_=`lit$${Math.random().toFixed(9).slice(2)}$`,ve=`?`+_,ye=`<${ve}>`,v=document,y=()=>v.createComment(``),be=e=>e===null||typeof e!=`object`&&typeof e!=`function`,xe=Array.isArray,Se=e=>xe(e)||typeof e?.[Symbol.iterator]==`function`,Ce=`[ 	
\f\r]`,b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,we=/-->/g,Te=/>/g,x=RegExp(`>|${Ce}(?:([^\\s"'>=/]+)(${Ce}*=${Ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,`g`),Ee=/'/g,De=/"/g,Oe=/^(?:script|style|textarea|title)$/i,S=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),C=Symbol.for(`lit-noChange`),w=Symbol.for(`lit-nothing`),ke=new WeakMap,T=v.createTreeWalker(v,129);function Ae(e,t){if(!Array.isArray(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ge===void 0?t:ge.createHTML(t)}var je=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:``,o=b;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===b?c[1]===`!--`?o=we:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=x):(Oe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=x):o=Te:o===x?c[0]===`>`?(o=i??b,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?x:c[3]===`"`?De:Ee):o===De||o===Ee?o=x:o===we||o===Te?o=b:(o=x,i=void 0);let d=o===x&&e[t+1].startsWith(`/>`)?` `:``;a+=o===b?n+ye:l>=0?(r.push(s),n.slice(0,l)+_e+n.slice(l)+_+d):n+_+(l===-2?t:d)}return[Ae(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:``)),r]},Me=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=je(t,n);if(this.el=e.createElement(l,r),T.currentNode=this.el.content,n===2){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=T.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(_e)){let t=u[o++],n=i.getAttribute(e).split(_),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ie:r[1]===`?`?Le:r[1]===`@`?Re:Fe}),i.removeAttribute(e)}else e.startsWith(_)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Oe.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=he?he.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],y()),T.nextNode(),c.push({type:2,index:++a});i.append(e[t],y())}}}else if(i.nodeType===8)if(i.data===ve)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}a++}}static createElement(e,t){let n=v.createElement(`template`);return n.innerHTML=e,n}};function E(e,t,n=e,r){var i;if(t===C)return t;let a=r===void 0?n._$Cl:n._$Co?.[r],o=be(t)?void 0:t._$litDirective$;return a?.constructor!==o&&((i=a?._$AO)==null||i.call(a,!1),o===void 0?a=void 0:(a=new o(e),a._$AT(e,n,r)),r===void 0?n._$Cl=a:(n._$Co??=[])[r]=a),a!==void 0&&(t=E(e,a._$AS(e,t.values),a,r)),t}var Ne=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??v).importNode(t,!0);T.currentNode=r;let i=T.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Pe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new ze(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=T.nextNode(),a++)}return T.currentNode=v,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Pe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),be(e)?e===w||e==null||e===``?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==C&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Se(e)?this.k(e):this._(e):this.T(e):this.$(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==w&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Me.createElement(Ae(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Ne(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=ke.get(e.strings);return t===void 0&&ke.set(e.strings,t=new Me(e)),t}k(t){xe(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.S(y()),this.S(y()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null||n.call(this,!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Fe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=E(this,e,t,0),a=!be(e)||e!==this._$AH&&e!==C,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=E(this,r[n+o],t,o),s===C&&(s=this._$AH[o]),a||=!be(s)||s!==this._$AH[o],s===w?e=w:e!==w&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ie=class extends Fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},Le=class extends Fe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},Re=class extends Fe{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=E(this,e,t,0)??w)===C)return;let n=this._$AH,r=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==w&&(n===w||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ze=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}},Be=me.litHtmlPolyfillSupport;Be?.(Me,Pe),(me.litHtmlVersions??=[]).push(`3.1.3`);var Ve=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Pe(t.insertBefore(y(),e),e,void 0,n??{})}return i._$AI(e),i},D=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ve(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return C}},He;D._$litElement$=!0,D.finalized=!0,(He=globalThis.litElementHydrateSupport)==null||He.call(globalThis,{LitElement:D});var Ue=globalThis.litElementPolyfillSupport;Ue?.({LitElement:D}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push(`4.0.5`);var O=e=>(t,n)=>{n===void 0?customElements.define(e,t):n.addInitializer(()=>{customElements.define(e,t)})},We={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:fe},Ge=(e=We,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e)},init(t){return t!==void 0&&this.P(r,void 0,e),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e)}}throw Error(`Unsupported decorator location: `+r)};function k(e){return(t,n)=>typeof n==`object`?Ge(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,r?{...e,wrapped:!0}:e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function A(e){return k({...e,state:!0,attribute:!1})}var Ke=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function qe(e,t){return(t,n,r)=>{let i=t=>t.renderRoot?.querySelector(e)??null;return Ke(t,n,{get(){return i(this)}})}}var Je=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Xe=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ye(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Je(t,n,i),i},Ze=class extends D{static get styles(){return p`
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
    `}async firstUpdated(e){if(super.firstUpdated(e),`storage`in navigator){let{usage:e,quota:t}=await navigator.storage.estimate();this.totalFreeMemory=t,this.freeMemoryPercentage=100-(e??1)/(t??1)*100}}render(){return S`
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
    `}getFreeMemoryInKB(){if(typeof this.totalFreeMemory>`u`)return`???`;let e=Math.round(this.totalFreeMemory/1024);return Intl.NumberFormat(`en-US`).format(e)}getFreeMemoryPercentage(){return typeof this.freeMemoryPercentage>`u`?`???`:Math.round(this.freeMemoryPercentage)}onOK(){this.dispatchEvent(new CustomEvent(`close`))}};Xe([k({attribute:!1})],Ze.prototype,`totalFreeMemory`,2),Xe([k({attribute:!1})],Ze.prototype,`freeMemoryPercentage`,2),Ze=Xe([O(`paint-dialog-about`)],Ze);function Qe(e,t={}){return new Promise(n=>{let r=document.querySelector(`paint-app`)?.shadowRoot,i=document.createElement(e);Object.entries(t).forEach(([e,t])=>i[e]=t),i.addEventListener(`close`,e=>{r?.removeChild(i),n(e.detail)}),r?.appendChild(i)})}function $e(e,t=null,n=``,r=`ok`){return Qe(`paint-dialog-message-box`,{prompt:e,icon:t,title:n,layout:r})}function j(e,t){let n=t?e.indexOf(t):-1;return S`${e.substring(0,n)}<span class="mnemonic"
      >${t}</span
    >${e.substring(n+1)}`}var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,nt=(e,t,n,r)=>{for(var i=r>1?void 0:r?tt(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&et(t,n,i),i},M=class extends D{constructor(){super(...arguments),this.width=``,this.height=``,this.unit=`pels`,this.color=`colors`,this.units=[{value:`inches`,label:`Inches`,mnemonic:`I`},{value:`cm`,label:`Cm`,mnemonic:`m`},{value:`pels`,label:`Pels`,mnemonic:`P`}],this.colors=[{value:`black-and-white`,label:`Black and white`,mnemonic:`B`},{value:`colors`,label:`Colors`,mnemonic:`l`}]}static get styles(){return p`
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
    `}render(){return S` <paint-window caption="Attributes" help close>
      <div class="container">
        <form>
          <div class="dimensions">
            <span>${j(`Width:`,`W`)}</span>
            <input
              type="text"
              .value="${this.width}"
              @change="${e=>this.width=e.target.value}"
            />
            <span>${j(`Height:`,`H`)}</span>
            <input
              type="text"
              .value="${this.height}"
              @change="${e=>this.height=e.target.value}"
            />
          </div>

          <fieldset>
            <legend>Units</legend>
            ${this.units.map(({value:e,label:t,mnemonic:n})=>S`
                <label
                  ><input
                    type="radio"
                    name="unit"
                    value="${e}"
                    .checked="${this.unit===e}"
                    @change="${()=>this.unit=e}"
                    disabled
                  />
                  ${j(t,n)}</label
                >
              `)}
          </fieldset>

          <fieldset>
            <legend>Colors</legend>
            ${this.colors.map(({value:e,label:t,mnemonic:n})=>S`
                <label
                  ><input
                    type="radio"
                    name="color"
                    value="${e}"
                    .checked="${this.color===e}"
                    @change="${()=>this.color=e}"
                    disabled
                  />
                  ${j(t,n)}</label
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
            >${j(`Default`,`D`)}
          </paint-button>
        </div>
      </div>
    </paint-window>`}async onOk(){let{width:e,height:t,unit:n,color:r}=this;if(e.length>5||t.length>5){await $e(`Please enter no more than 5 characters.`,`warning`,`Paint`);return}this.dispatchEvent(new CustomEvent(`close`,{detail:{width:e,height:t,unit:n,color:r}}))}onCancel(){this.dispatchEvent(new CustomEvent(`close`))}onDefault(){this.width=screen.width.toString(),this.height=screen.height.toString(),this.unit=`pels`,this.color=`colors`}};nt([A()],M.prototype,`width`,2),nt([A()],M.prototype,`height`,2),nt([A()],M.prototype,`unit`,2),nt([A()],M.prototype,`color`,2),M=nt([O(`paint-dialog-attributes`)],M);var rt=Object.defineProperty,it=Object.getOwnPropertyDescriptor,at=(e,t,n,r)=>{for(var i=r>1?void 0:r?it(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&rt(t,n,i),i},ot=class extends D{constructor(){super(...arguments),this.currentMagnifierSize=1,this.magnifierSizes=[1,2,4,6,8],this.selectedMagnifierSize=1}static get styles(){return p`
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
    `}firstUpdated(e){super.firstUpdated(e),this.selectedMagnifierSize=this.currentMagnifierSize}render(){return S`
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
                ${this.magnifierSizes.map(e=>S`
                    <label>
                      <input
                        type="radio"
                        name="zoom"
                        value="${e}"
                        @change="${()=>this.selectedMagnifierSize=e}"
                        .checked="${this.selectedMagnifierSize===e}"
                      />
                      ${j((e*100).toString(),e.toString())}%
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
    `}onOk(){this.dispatchEvent(new CustomEvent(`close`,{detail:{magnifierSize:this.selectedMagnifierSize}}))}onCancel(){this.dispatchEvent(new CustomEvent(`close`))}};at([k({type:Number,attribute:!1})],ot.prototype,`currentMagnifierSize`,2),at([A()],ot.prototype,`selectedMagnifierSize`,2),ot=at([O(`paint-dialog-custom-zoom`)],ot);var st=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,lt=(e,t,n,r)=>{for(var i=r>1?void 0:r?ct(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&st(t,n,i),i},ut=class extends D{constructor(){super(...arguments),this.modes=[{value:`flip-horizontal`,text:`Flip horizontal`,mnemonic:`F`},{value:`flip-vertical`,text:`Flip vertical`,mnemonic:`v`},{value:`rotate`,text:`Rotate by angle`,mnemonic:`R`}],this.selectedMode=this.modes[0].value,this.degrees=[{value:90,mnemonic:`9`},{value:180,mnemonic:`1`},{value:270,mnemonic:`2`}],this.selectedDegree=this.degrees[0].value}static get styles(){return p`
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
    `}render(){return S`
      <paint-window caption="Flip and Rotate" help close>
        <div class="content">
          <div>
            <fieldset>
              <legend>Flip and Rotate</legend>
              <div class="options">
                ${this.modes.map(e=>S`
                    <label
                      ><input
                        type="radio"
                        name="mode"
                        value="${e.value}"
                        @change="${()=>this.selectedMode=e.value}"
                        .checked="${e.value===this.selectedMode}"
                      />
                      ${j(e.text,e.mnemonic)}</label
                    >
                  `)}
                ${this.degrees.map(e=>S`
                    <label
                      ><input
                        type="radio"
                        name="degree"
                        value="${e.value}"
                        @change="${()=>this.selectedDegree=e.value}"
                        .checked="${e.value==this.selectedDegree}"
                        ?disabled="${this.selectedMode!==`rotate`}"
                      />
                      ${j(`${e.value}°`,e.mnemonic)}</label
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
    `}getFlipRotateParams(){return this.selectedMode===`rotate`?{action:`rotate`,param:this.selectedDegree}:{action:`flip`,param:this.selectedMode===`flip-horizontal`?`horizontal`:`vertical`}}onOk(){this.dispatchEvent(new CustomEvent(`close`,{detail:this.getFlipRotateParams()}))}onCancel(){this.dispatchEvent(new CustomEvent(`close`))}};lt([A()],ut.prototype,`selectedMode`,2),lt([A()],ut.prototype,`selectedDegree`,2),ut=lt([O(`paint-dialog-flip-and-rotate`)],ut);function dt(e,t,n,r,i){let a=0,o=r,s=1,c=n*n,l=r*r,u=-(c/4+n%2+l),d=-(l/4+r%2+c),f=-(l/4+r%2),p=-n*o,ee=2*l*a,te=-2*c*o,ne=2*l,re=2*c;function ie(){a++,ee+=ne,p+=ee}function ae(){o--,te+=re,p+=te}function m(e,t,n){for(let r=0;r<n;r++)i({x:e+r,y:t})}for(;o>=0&&a<=n;)p+l*a<=u||p+c*o<=f?(ie(),s+=2):p-c*o>d?(m(e-a,t-o,s),o!=0&&m(e-a,t+o,s),ae()):(m(e-a,t-o,s),o!=0&&m(e-a,t+o,s),ie(),ae(),s+=2);r==0&&m(e-n,t,2*n+1)}var ft=class{onPointerDown(e,t,n,r){n.context&&(n.context.fillStyle=r.stroke.value),this.currentPosition={x:e,y:t},this.spray(n),this.intervalHandle=setInterval(()=>this.spray(n),30)}spray({airbrushSize:e,context:t}){if(this.currentPosition&&t){let n=Math.floor(e/2),{x:r,y:i}=this.currentPosition,a=[];dt(r,i,n,n,e=>a.push(e));for(let e=0;e<10;e++){let{x:e,y:n}=a[Math.round(Math.random()*(a.length-1))];t.fillRect(e,n,1,1)}}}onPointerMove(e,t,n){typeof this.intervalHandle<`u`&&(this.spray(n),this.currentPosition={x:e,y:t})}onPointerUp(){typeof this.intervalHandle<`u`&&(clearInterval(this.intervalHandle),this.intervalHandle=this.currentPosition=void 0)}};function N(e){e?.dispatchEvent(new CustomEvent(`drawing-context-changed`,{detail:{...e.drawingContext},bubbles:!0,composed:!0}))}var pt=class{onPointerDown(e,t,n){this.onPointerMove(e,t,n)}onPointerMove(e,t,n){n.context&&(n.previewColor=this.pickColor(e,t,n.context),N(n.element))}onPointerUp(e,t,n,r){n.context&&(n.previewColor=null,n.colors[r.stroke.key]=this.pickColor(e,t,n.context),n.previousEditingTool&&(n.tool=n.previousEditingTool),N(n.element))}pickColor(e,t,n){let[r,i,a]=n.getImageData(e,t,1,1).data;return`rgb(${r} ${i} ${a})`}};function P(e,t,n,r,i){for(var a=Math.abs(n-e),o=e<n?1:-1,s=-Math.abs(r-t),c=t<r?1:-1,l=a+s,u;;){if(i(e,t),u=2*l,u>=s){if(e===n)break;l+=s,e+=o}if(u<=a){if(t===r)break;l+=a,t+=c}}}function mt(e,t,n,r,i){var a=Math.abs(n-e),o=Math.abs(r-t),s=o&1,c=4*(1-a)*o*o,l=4*(s+1)*a*a,u=c+l+s*a*a,d;e>n&&(e=n,n+=a),t>r&&(t=r),t+=(o+1)/2,r=t-s,a=8*a*a,s=8*o*o;do i(n,t),i(e,t),i(e,r),i(n,r),d=2*u,d<=l&&(t++,r--,u+=l+=a),(d>=c||2*u>l)&&(e++,n--,u+=c+=s);while(e<=n);for(;t-r<=o;)i(e-1,t),i(n+1,t++),i(e-1,r),i(n+1,r--)}var ht=class{constructor(){this.previous={x:0,y:0}}onPointerDown(e,t,{context:n},r){n&&(n.fillStyle=r.stroke.value,n.fillRect(e,t,1,1),this.previous={x:e,y:t})}onPointerMove(e,t,{context:n}){P(this.previous.x,this.previous.y,e,t,(e,t)=>{n?.fillRect(e,t,1,1)}),this.previous={x:e,y:t}}},F=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){typeof Symbol<`u`&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:`Module`}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(t&1&&(e=n(e)),t&8||t&4&&typeof e==`object`&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),t&2&&typeof e!=`string`)for(var i in e)n.d(r,i,(function(t){return e[t]}).bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,`a`,t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=``,n(n.s=0)}([function(e,t,n){n.r(t),n.d(t,`isSameColor`,function(){return a}),n.d(t,`setColorAtPixel`,function(){return i}),n.d(t,`getColorAtPixel`,function(){return r}),n.d(t,`colorToRGBA`,function(){return s}),n.d(t,`hex2RGBA`,function(){return o});function r(e,t,n){var r=e.width,i=e.data,a=4*(n*r+t);if(i[a+3]===void 0)throw Error(`Invalid pixel coordinates: x=`+t+`; y=`+n);return{r:i[a],g:i[a+1],b:i[a+2],a:i[a+3]}}function i(e,t,n,r){var i=e.width,a=e.data,o=4*(r*i+n);if(a[o+3]===void 0)throw Error(`Invalid pixel coordinates. Cannot set color at: x=`+n+`; y=`+r);a[o+0]=t.r&255,a[o+1]=t.g&255,a[o+2]=t.b&255,a[o+3]=t.a&255}function a(e,t,n){return n===void 0&&(n=0),!(Math.abs(e.r-t.r)>n||Math.abs(e.g-t.g)>n||Math.abs(e.b-t.b)>n||Math.abs(e.a-t.a)>n)}function o(e,t){t===void 0&&(t=255);var n=e;if(e.indexOf(`#`)===0&&(n=e.slice(1)),n.length===3&&(n=n[0]+n[0]+n[1]+n[1]+n[2]+n[2]),n.length!==6)throw Error(`Invalid HEX color `+n+`.`);return{r:parseInt(n.slice(0,2),16),g:parseInt(n.slice(2,4),16),b:parseInt(n.slice(4,6),16),a:t}}function s(e){if(e.indexOf(`rgba`)!==-1){var t=/rgba\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9\.]{1,})/g.exec(e);t[0];var n=t[1],r=t[2],i=t[3],a=t[4];return{r:parseInt(n),g:parseInt(r),b:parseInt(i),a:Math.ceil(parseFloat(a)*255)}}else if(e.indexOf(`rgb`)!==-1){var s=/rgb\(.*?([0-9]{1,3}).*?([0-9]{1,3}).*?([0-9]{1,3})/g.exec(e);s[0];var n=s[1],r=s[2],i=s[3];return{r:parseInt(n),g:parseInt(r),b:parseInt(i),a:255}}else{if(e.indexOf(`#`)!==-1)return o(e);throw Error(`Unsupported color format. Please use CSS rgba, rgb, or HEX!`)}}t.default=function(){function e(e){this.collectModifiedPixels=!1,this.modifiedPixelsCount=0,this.modifiedPixels=new Set,this._tolerance=0,this._queue=[],this.imageData=e,this.isSameColor=a,this.setColorAtPixel=i,this.getColorAtPixel=r,this.colorToRGBA=s}return e.prototype.fill=function(e,t,n,r){this._newColor=this.colorToRGBA(e),this._replacedColor=this.getColorAtPixel(this.imageData,t,n),this._tolerance=r,!this.isSameColor(this._replacedColor,this._newColor,this._tolerance)&&(this.addToQueue([t,t,n,-1]),this.fillQueue())},e.prototype.addToQueue=function(e){this._queue.push(e)},e.prototype.popFromQueue=function(){return this._queue.length?this._queue.pop():null},e.prototype.isValidTarget=function(e){if(e!==null){var t=this.getColorAtPixel(this.imageData,e.x,e.y);return this.isSameColor(this._replacedColor,t,this._tolerance)}},e.prototype.fillLineAt=function(e,t){if(!this.isValidTarget({x:e,y:t}))return[-1,-1];this.setPixelColor(this._newColor,{x:e,y:t});for(var n=e,r=e,i=this.getPixelNeighbour(`left`,n,t);i&&this.isValidTarget(i);)this.setPixelColor(this._newColor,i),n=i.x,i=this.getPixelNeighbour(`left`,n,t);for(i=this.getPixelNeighbour(`right`,r,t);i&&this.isValidTarget(i);)this.setPixelColor(this._newColor,i),r=i.x,i=this.getPixelNeighbour(`right`,r,t);return[n,r]},e.prototype.fillQueue=function(){for(var e=this.popFromQueue();e;){for(var t=e[0],n=e[1],r=e[2],i=e[3],a=t;a!==-1&&a<=n;){var o=this.fillLineAt(a,r),s=o[0],c=o[1];s!==-1&&(s>=t&&c<=n&&i!==-1?(i<r&&r+1<this.imageData.height&&this.addToQueue([s,c,r+1,r]),i>r&&r>0&&this.addToQueue([s,c,r-1,r])):(r>0&&this.addToQueue([s,c,r-1,r]),r+1<this.imageData.height&&this.addToQueue([s,c,r+1,r]))),c===-1&&a<=n?a+=1:a=c+1}e=this.popFromQueue()}},e.prototype.setPixelColor=function(e,t){this.setColorAtPixel(this.imageData,e,t.x,t.y),this.modifiedPixelsCount++,this.collectModifiedPixels&&this.modifiedPixels.add(t.x+`|`+t.y)},e.prototype.getPixelNeighbour=function(e,t,n){t|=0,n|=0;var r;switch(e){case`right`:r={x:t+1|0,y:n};break;case`left`:r={x:t-1|0,y:n};break}return r.x>=0&&r.x<this.imageData.width?r:null},e}()}]);F===void 0&&console.error(`esm-webpack-plugin: nothing exported!`);var gt=F.default;F.isSameColor,F.setColorAtPixel,F.getColorAtPixel,F.colorToRGBA,F.hex2RGBA;var _t=class{onPointerDown(e,t,{canvas:n,context:r},i){if(n&&r){let a=new gt(r.getImageData(0,0,n.width,n.height));a.fill(i.stroke.value,e,t,0),r.putImageData(a.imageData,0,0)}}};function I(e){e?.clearRect(0,0,e.canvas.width,e.canvas.height)}function vt(e,t,n,r){n===1&&r.fillRect(e,t,1,1),n===2&&r.fillRect(e-1,t-1,2,2),n===3&&(r.fillRect(e-1,t,3,1),r.fillRect(e,t-1,1,3)),n===4&&(r.fillRect(e-1,t-2,2,4),r.fillRect(e-2,t-1,4,2)),n===5&&(r.fillRect(e-1,t-2,3,5),r.fillRect(e-2,t-1,5,3)),n===7&&(r.fillRect(e-1,t-3,3,7),r.fillRect(e-3,t-1,7,3),r.fillRect(e-2,t-2,5,5))}var yt=class{constructor(){this.previous={x:0,y:0}}onPointerHover(e,t,{canvas:n,brush:r,previewContext:i},a){n&&i&&(I(i),i.fillStyle=a.stroke.value,this.drawBrush(e,t,r,i))}onPointerDown(e,t,{brush:n,context:r},i){r&&(r.fillStyle=i.stroke.value,this.drawBrush(e,t,n,r),this.previous={x:e,y:t})}onPointerMove(e,t,{brush:n,context:r}){if(r){let i={...this.previous};P(this.previous.x,this.previous.y,e,t,(e,t)=>{let a={x:e-i.x,y:t-i.y};this.drawBrush(e,t,n,r,a),i={x:e,y:t}}),this.previous={x:e,y:t}}}drawBrush(e,t,{type:n,size:r},i,a){if(n===`circle`)return vt(e,t,r,i);let o=Math.floor(r/2);if(n===`square`)return this.drawSquare(e,t,o,r,i);let s=r%2==0?-1:0,c=a?t-Math.min(0,a.y):0;if(n===`forward-diagonal`){if(a&&a.y!==0){let t=a.y===-1&&a.x===-1?e:e-1;this.drawForwardLine(t,c,o,s,i)}this.drawForwardLine(e,t,o,s,i);return}if(n===`backward-diagonal`){if(a&&a.y!==0){let t=a.y===-1&&a.x===1?e:e+1;this.drawBackwardLine(t,c,o,s,i)}this.drawBackwardLine(e,t,o,s,i);return}throw Error(`Unknown brush type.`)}drawSquare(e,t,n,r,i){i.fillRect(e-n,t-n,r,r)}drawForwardLine(e,t,n,r,i){let a={x:e-n,y:t+n+r},o={x:e+n+r,y:t-n};P(a.x,a.y,o.x,o.y,(e,t)=>{i.fillRect(e,t,1,1)})}drawBackwardLine(e,t,n,r,i){let a={x:e-n,y:t-n},o={x:e+n+r,y:t+n+r};P(a.x,a.y,o.x,o.y,(e,t)=>{i.fillRect(e,t,1,1)})}},bt=class{constructor(){this.startPosition={x:0,y:0}}onPointerDown(e,t){this.startPosition={x:e,y:t}}onPointerMove(e,t,{canvas:n,lineWidth:r,fillStyle:i,previewContext:a},o){n&&a&&this.drawRectangle(e,t,a,a,i,r,o)}onPointerUp(e,t,{canvas:n,context:r,lineWidth:i,fillStyle:a,previewContext:o},s){n&&r&&o&&this.drawRectangle(e,t,r,o,a,i,s)}drawRectangle(e,t,n,r,i,a,o){I(r);let s=Math.min(this.startPosition.x,e),c=Math.max(this.startPosition.x,e),l=Math.min(this.startPosition.y,t),u=Math.max(this.startPosition.y,t),d=Math.abs(c-s),f=Math.abs(u-l);if(i.stroke&&(d<a*2||f<a*2)){n.fillStyle=o.stroke.value,n.fillRect(s,l,d,f);return}i.fill&&(n.fillStyle=o.fill.value,n.fillRect(s,l,d,f)),i.stroke&&(n.fillStyle=o.stroke.value,this.getPointsForLine(s,l,c,u,a).forEach(({x:e,y:t})=>{n.fillRect(e,t,1,1)}))}getPointsForLine(e,t,n,r,i){let a=[];for(let o=0;o<i;o++)P(e+o,t+o,n,t+o,(e,t)=>a.push({x:e,y:t})),P(e+o,t+o,e+o,r,(e,t)=>a.push({x:e,y:t})),P(n-o,r-o,n-o,t,(e,t)=>a.push({x:e,y:t})),P(n-o,r-o,e,r-o,(e,t)=>a.push({x:e,y:t}));return a}},xt=class{constructor(){this.startPosition={x:0,y:0}}onPointerDown(e,t,{previewContext:n,context:r},i){n&&r&&(this.startPosition={x:e,y:t},n.fillStyle=r.fillStyle=i.stroke.value)}onPointerMove(e,t,{previewContext:n,canvas:r,lineWidth:i}){r&&n&&this.drawLine(e,t,n,n,i)}onPointerUp(e,t,{previewContext:n,context:r,canvas:i,lineWidth:a}){n&&r&&i&&this.drawLine(e,t,r,n,a)}drawLine(e,t,n,r,i){I(r),P(e,t,this.startPosition.x,this.startPosition.y,(e,t)=>{vt(e,t,i,n)})}};function St(e,t,n){n?.dispatchEvent(new CustomEvent(`area`,{detail:{width:Math.abs(t.x-e.x),height:Math.abs(t.y-e.y)},bubbles:!0,composed:!0}))}function Ct(e,t,n){I(n),n?.setLineDash([4]),n?.strokeRect(e.x+.5,e.y+.5,t.x-e.x,t.y-e.y),n?.setLineDash([])}var wt=class{constructor(){this.startPosition={x:0,y:0}}onPointerDown(e,t){this.startPosition={x:e,y:t}}onPointerMove(e,t,{element:n,previewContext:r}){Ct(this.startPosition,{x:e,y:t},r),St(this.startPosition,{x:e,y:t},n)}onPointerUp(e,t,n){let{element:r,previewContext:i}=n;I(i),r?.dispatchEvent(new CustomEvent(`area`,{bubbles:!0,composed:!0}));let a=e-this.startPosition.x,o=t-this.startPosition.y;n.selection=a===0&&o===0?null:{x:this.startPosition.x,y:this.startPosition.y,width:a,height:o},N(r)}},Tt=class{constructor(){this.previous={x:0,y:0}}onPointerHover(e,t,{canvas:n,previewContext:r,eraserSize:i,colors:a}){n&&r&&(I(r),e>0&&e<n.width&&t>0&&t<n.height&&(r.fillStyle=`black`,r.fillRect(...this.getFillRectArgs(e,t,i)),r.fillStyle=a.secondary,r.fillRect(...this.getFillRectArgs(e,t,i-2))))}onPointerDown(e,t,{context:n,eraserSize:r,colors:{secondary:i}}){n&&(n.fillStyle=i,this.previous={x:e,y:t},n.fillRect(...this.getFillRectArgs(e,t,r)))}onPointerMove(e,t,{eraserSize:n,context:r}){P(this.previous.x,this.previous.y,e,t,(e,t)=>{r?.fillRect(...this.getFillRectArgs(e,t,n))}),this.previous={x:e,y:t}}getFillRectArgs(e,t,n){return[e-n/2,t-n/2,n,n]}},Et=class{constructor(){this.startPosition={x:0,y:0}}onPointerDown(e,t){this.startPosition={x:e,y:t}}onPointerMove(e,t,{fillStyle:n,canvas:r,previewContext:i},a){r&&i&&this.drawEllipse(e,t,n,a,i,i)}onPointerUp(e,t,{fillStyle:n,canvas:r,context:i,previewContext:a},o){r&&i&&a&&this.drawEllipse(e,t,n,o,i,a)}drawEllipse(e,t,n,r,i,a){I(a);let o=[];if(mt(this.startPosition.x,this.startPosition.y,e,t,(e,t)=>{o.push({x:e,y:t})}),n.fill){i.fillStyle=r.fill.value,o.sort((e,t)=>e.y-t.y||e.x-t.x);let e=this.getFillPixels(o);Array.from(e).forEach(e=>{this.drawPixel(i,e)})}n.stroke&&(i.fillStyle=r.stroke.value),o.forEach(e=>{this.drawPixel(i,e)})}drawPixel(e,{x:t,y:n}){e.fillRect(Math.floor(t),Math.floor(n),1,1)}*getFillPixels(e){let t;for(let n of e){if(t?.y===n.y&&n.x-t.x>1){let e=Math.min(t.x,n.x),r=Math.max(t.x,n.x);for(let t=e;t<=r;t++)yield{x:t,y:n.y}}t=n}}};function L(e){e.view.textToolbar=e.text.showToolbar&&e.text.active}var Dt=class{constructor(){this.startPosition={x:0,y:0}}onPointerDown(e,t){this.startPosition={x:e,y:t}}onPointerMove(e,t,{previewContext:n,element:r}){Ct(this.startPosition,{x:e,y:t},n),St(this.startPosition,{x:e,y:t},r)}onPointerUp(e,t,n){var r;I(n.previewContext);let i=n.text.x=Math.min(e,this.startPosition.x),a=n.text.y=Math.min(t,this.startPosition.y),o=Math.max(e,this.startPosition.x),s=Math.max(t,this.startPosition.y),c=o-i,l=s-a;c<10||l<10||((r=n.element)==null||r.dispatchEvent(new CustomEvent(`area`,{bubbles:!0,composed:!0})),n.text.active=!0,L(n),n.text.width=c,n.text.height=l,N(n.element))}},Ot={tooltip:`Free-Form Select`,helpText:`Selects a free-form part of the picture to move, copy, or edit.`,imagePosition:`0 0`},kt={tooltip:`Select`,helpText:`Selects a rectangular part of the picture to move, copy, or edit.`,imagePosition:`-16px 0`,instance:new wt},At={tooltip:`Eraser/Color Eraser`,helpText:`Erases a portion of the picture, using the selected eraser shape.`,imagePosition:`-32px 0`,instance:new Tt,cursor:`none`},jt={tooltip:`Fill With Color`,helpText:`Fills an area with the current drawing color.`,imagePosition:`-48px 0`,instance:new _t},Mt={tooltip:`Pick Color`,helpText:`Picks up a color from the picture for drawing.`,imagePosition:`-64px 0`,instance:new pt},Nt={tooltip:`Magnifier`,helpText:`Changes the magnification.`,imagePosition:`-80px 0`},Pt={tooltip:`Pencil`,helpText:`Draws a free-form line one pixel wide.`,imagePosition:`-96px 0`,instance:new ht},Ft={tooltip:`Brush`,helpText:`Draws using a brush with the selected shape and size.`,imagePosition:`-112px 0`,instance:new yt},It={tooltip:`Airbrush`,helpText:`Draws using an airbrush of the selected size.`,imagePosition:`-128px 0`,instance:new ft},Lt={tooltip:`Text`,helpText:`Inserts text into the picture.`,imagePosition:`-144px 0`,instance:new Dt},Rt={tooltip:`Line`,helpText:`Draws a straight line with the selected line width.`,imagePosition:`-160px 0`,instance:new xt},zt={tooltip:`Curve`,helpText:`Draws a curved line with the selected line width.`,imagePosition:`-176px 0`},Bt={tooltip:`Rectangle`,helpText:`Draws a rectangle with the selected fill style.`,imagePosition:`-192px 0`,instance:new bt},Vt={tooltip:`Polygon`,helpText:`Draws a polygon with the selected fill style.`,imagePosition:`-208px 0`},Ht={tooltip:`Ellipse`,helpText:`Draws an ellipse with the selected fill style.`,imagePosition:`-224px 0`,instance:new Et},Ut={tooltip:`Rounded Rectangle`,helpText:`Draws a rounded rectangle with the selected fill style.`,imagePosition:`-240px 0`},Wt=[Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut],Gt={primary:`#000000`,secondary:`#FFFFFF`},Kt=`#000000.#808080.#800000.#808000.#008000.#008080.#000080.#800080.#808040.#004040.#0080FF.#004080.#4000FF.#804000.#FFFFFF.#C0C0C0.#FF0000.#FFFF00.#00FF00.#00FFFF.#0000FF.#FF00FF.#FFFF80.#00FF80.#80FFFF.#8080FF.#FF0080.#FF8040`.split(`.`),R={lineWidth:1,colors:{...Gt},palette:[...Kt],previewColor:null,drawOpaque:!0,eraserSize:8,magnifierSize:1,previousMagnifierSize:4,brush:{type:`circle`,size:4},airbrushSize:9,fillStyle:{stroke:!0,fill:!1},tool:Pt,previousEditingTool:Pt,selection:null,view:{statusBar:!0,colorBox:!0,toolBox:!0,textToolbar:!1},document:{title:`untitled`,dirty:!1},text:{active:!1,font:`Arial`,size:12,showToolbar:!0,bold:!1,italic:!1,underline:!1},element:null,previewCanvas:null,previewContext:null,canvas:null,context:null,history:null},qt=[8,9,10,11,12,14,16,18,20,22,24,26,28,36,48,72],Jt=[`Arial`,`Verdana`,`Tahoma`,`Trebuchet MS`,`Times New Roman`,`Georgia`,`Garamond`,`Courier New`,`Brush Script MT`],Yt;async function Xt(){return Yt||Promise.resolve([...Jt])}function Zt(){return Yt?!1:`queryLocalFonts`in window?(Yt=Qt(),!0):!1}async function Qt(){let e=[];for await(let t of await window.queryLocalFonts())e.push(t.family);return e.filter((t,n)=>e.indexOf(t)===n)}var $t=Object.defineProperty,en=Object.getOwnPropertyDescriptor,tn=(e,t,n,r)=>{for(var i=r>1?void 0:r?en(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&$t(t,n,i),i},nn=class extends D{constructor(){super(...arguments),this.drawingContext=R,this.fonts=[],this.fontSizes=qt}static get styles(){return p`
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
    `}async firstUpdated(e){super.firstUpdated(e),this.fonts=await Xt(),this.addEventListener(`close`,()=>{this.drawingContext.text.showToolbar=!1,L(this.drawingContext),N(this)})}updateFont(e){this.drawingContext.text.font=e.target.value,N(this)}updateSize(e){this.drawingContext.text.size=parseInt(e.target.value),N(this)}toggle(e){this.drawingContext.text[e]=!this.drawingContext.text[e],N(this)}render(){return this.drawingContext.view.textToolbar?S`
      <paint-window caption="Fonts" tool close>
        <div class="content">
          <select
            class="font-list"
            @click="${()=>this.onFontListClick()}"
            @change="${e=>this.updateFont(e)}"
          >
            ${this.fonts.map(e=>S` <option
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
            ${this.fontSizes.map(e=>S` <option
                  value="${e}"
                  ?selected="${e===this.drawingContext.text.size}"
                >
                  ${e}
                </option>`)}
          </select>
          <paint-button @click="${()=>this.toggle(`bold`)}" tabindex="0">
            B
          </paint-button>
          <paint-button @click="${()=>this.toggle(`italic`)}" tabindex="0">
            I
          </paint-button>
          <paint-button @click="${()=>this.toggle(`underline`)}" tabindex="0">
            U
          </paint-button>
        </div>
      </paint-window>
    `:S``}async onFontListClick(){Zt()&&(this.fonts=await Xt())}};tn([k({type:Object})],nn.prototype,`drawingContext`,2),tn([A()],nn.prototype,`fonts`,2),nn=tn([O(`paint-dialog-text-toolbar`)],nn);var rn=Object.defineProperty,an=Object.getOwnPropertyDescriptor,z=(e,t,n,r)=>{for(var i=r>1?void 0:r?an(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&rn(t,n,i),i},B=class extends D{constructor(){super(...arguments),this.prompt=``,this.title=``,this.icon=null,this.layout=`ok`}static get styles(){return p`
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
    `}firstUpdated(e){super.firstUpdated(e),requestAnimationFrame(()=>this.window?.center())}render(){return S`
      <paint-window caption="${this.title}" close>
        <div class="content">
          ${this.getIcon()}
          <div class="prompt">${this.prompt}</div>
          <div class="buttons">${this.getDialogLayout()}</div>
        </div>
      </paint-window>
    `}getIcon(){return this.icon===`warning`?S` <img
        class="icon"
        alt=""
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAElBMVEUAAAAAAAAAgACAgIDAwMD//wCJvpKsAAAAAXRSTlMAQObYZgAAAIxJREFUKJFlj9EJAjAMREN1gXy4gf0vZAGhOoCQ7L+KNpWkZ+6vD+71QrRzJ0yzxz+YA0A3LUCwYTYLGNAwlDgQaDBImr35dkq6Ay1ADsUCKQkworGBFiC5W/mV5yywhoVk7TayPMeBZ0uaZWYCtpB4w7/9SQBIKDgkp9MlHYAWIHR9nplfq2CILvAeH0wjUtKxjmmsAAAAAElFTkSuQmCC"
      />`:S``}getDialogLayout(){if(this.layout===`ok`)return S` <paint-button
        @click="${()=>this.onClose(`ok`)}"
        tabindex="0"
        >OK
      </paint-button>`;if(this.layout===`yes-no-cancel`)return S`
        <paint-button @click="${()=>this.onClose(`yes`)}" tabindex="0"
          >${j(`Yes`,`Y`)}
        </paint-button>
        <paint-button @click="${()=>this.onClose(`no`)}" tabindex="0"
          >${j(`No`,`N`)}
        </paint-button>
        <paint-button @click="${()=>this.onClose(`cancel`)}" tabindex="0"
          >Cancel
        </paint-button>
      `;throw Error(`Unsupported Layout.`)}onClose(e){this.dispatchEvent(new CustomEvent(`close`,{detail:e}))}};z([k({type:String})],B.prototype,`prompt`,2),z([k({type:String})],B.prototype,`title`,2),z([k({type:String})],B.prototype,`icon`,2),z([k({type:String})],B.prototype,`layout`,2),z([qe(`paint-window`)],B.prototype,`window`,2),B=z([O(`paint-dialog-message-box`)],B);var on=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,cn=(e,t,n,r)=>{for(var i=r>1?void 0:r?sn(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&on(t,n,i),i},V=class extends D{constructor(){super(),this.caption=``,this.help=!1,this.close=!1,this.position={x:100,y:50},this.mousePosition=null,this.pointerMoveListener=this.onPointerMove.bind(this),this.pointerUpListener=this.onPointerUp.bind(this),document.addEventListener(`pointermove`,this.pointerMoveListener),document.addEventListener(`pointerup`,this.pointerUpListener),this.moveWindow()}static get styles(){return p`
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
    `}render(){return S`
      <div class="wrapper">
        <div class="title-bar" @pointerdown="${this.onPointerDown}">
          <span class="title">${this.caption}</span>
          ${this.help?S`<paint-window-title-bar-button
                help
              ></paint-window-title-bar-button>`:``}
          ${this.close?S`<paint-window-title-bar-button
                close
                @click="${this.onClose}"
              ></paint-window-title-bar-button>`:``}
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(`pointermove`,this.pointerMoveListener),document.removeEventListener(`pointerup`,this.pointerUpListener)}onPointerDown({clientX:e,clientY:t}){this.mousePosition={clientX:e,clientY:t}}onPointerMove({clientX:e,clientY:t}){if(this.mousePosition){e=V.clamp(e,0,innerWidth),t=V.clamp(t,0,innerHeight);let n=e-this.mousePosition.clientX,r=t-this.mousePosition.clientY;this.position.x=this.position.x+n,this.position.y=this.position.y+r,this.mousePosition={clientX:e,clientY:t},this.moveWindow()}}static clamp(e,t,n){return Math.min(Math.max(e,t),n)}onPointerUp(){this.mousePosition=null}center(){let{width:e,height:t}=this.getBoundingClientRect();this.position={x:(innerWidth-e)/2,y:(innerHeight-t)/2},this.moveWindow()}moveWindow(){this.style.transform=`translate(${this.position.x}px, ${this.position.y}px)`}onClose(){this.dispatchEvent(new CustomEvent(`close`,{bubbles:!0,composed:!0}))}};cn([k({type:String})],V.prototype,`caption`,2),cn([k({type:Boolean})],V.prototype,`help`,2),cn([k({type:Boolean})],V.prototype,`close`,2),V=cn([O(`paint-window`)],V);var ln=Object.defineProperty,un=Object.getOwnPropertyDescriptor,dn=(e,t,n,r)=>{for(var i=r>1?void 0:r?un(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ln(t,n,i),i},fn=class extends D{constructor(){super(),this.help=!1,this.close=!1,this.addEventListener(`pointerdown`,e=>{e.stopPropagation()})}static get styles(){return p`
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
    `}render(){return S` <div class="wrapper">${this.getButton()}</div> `}getButton(){if(this.help)return S`
        <svg viewBox="0 0 6 9" width="6" height="9">
          <path d="M0,1h1V0h4v1h1v2H5v1H4v2H2V4h1V3h1V1H2v2H0V1z" />
          <path d="M2,7h2v2H2V7z" />
        </svg>
      `;if(this.close)return S`
        <svg viewBox="0 0 8 9" width="8" height="9">
          <path
            d="M0,1h2v1h1v1h2V2h1V1h2v1H7v1H6v1H5v1h1v1h1v1h1v1H6V7H5V6H3v1H2v1H0V7h1V6h1V5h1V4H2V3H1V2H0V1z"
          />
        </svg>
      `}};dn([k({type:Boolean})],fn.prototype,`help`,2),dn([k({type:Boolean})],fn.prototype,`close`,2),fn=dn([O(`paint-window-title-bar-button`)],fn);var pn=typeof navigator<`u`?navigator.userAgent.toLowerCase().indexOf(`firefox`)>0:!1;function mn(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent(`on${t}`,n)}function H(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent(`on${t}`,n)}function hn(e,t){let n=t.slice(0,t.length-1);for(let t=0;t<n.length;t++)n[t]=e[n[t].toLowerCase()];return n}function gn(e){typeof e!=`string`&&(e=``),e=e.replace(/\s/g,``);let t=e.split(`,`),n=t.lastIndexOf(``);for(;n>=0;)t[n-1]+=`,`,t.splice(n,1),n=t.lastIndexOf(``);return t}function _n(e,t){let n=e.length>=t.length?e:t,r=e.length>=t.length?t:e,i=!0;for(let e=0;e<n.length;e++)r.indexOf(n[e])===-1&&(i=!1);return i}var U={backspace:8,"⌫":8,tab:9,clear:12,enter:13,"↩":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"⇪":20,",":188,".":190,"/":191,"`":192,"-":pn?173:189,"=":pn?61:187,";":pn?59:186,"'":222,"[":219,"]":221,"\\":220},W={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},vn={16:`shiftKey`,18:`altKey`,17:`ctrlKey`,91:`metaKey`,shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},G={16:!1,18:!1,17:!1,91:!1},K={};for(let e=1;e<20;e++)U[`f${e}`]=111+e;var q=[],yn=null,bn=`all`,J=new Map,xn=e=>U[e.toLowerCase()]||W[e.toLowerCase()]||e.toUpperCase().charCodeAt(0),Sn=e=>Object.keys(U).find(t=>U[t]===e),Cn=e=>Object.keys(W).find(t=>W[t]===e);function wn(e){bn=e||`all`}function Tn(){return bn||`all`}function En(){return q.slice(0)}function Dn(){return q.map(e=>Sn(e)||Cn(e)||String.fromCharCode(e))}function On(){let e=[];return Object.keys(K).forEach(t=>{K[t].forEach(t=>{let{key:n,scope:r,mods:i,shortcut:a}=t;e.push({scope:r,shortcut:a,mods:i,keys:n.split(`+`).map(e=>xn(e))})})}),e}function kn(e){let t=e.target||e.srcElement,{tagName:n}=t,r=!0,i=n===`INPUT`&&![`checkbox`,`radio`,`range`,`button`,`file`,`reset`,`submit`,`color`].includes(t.type);return(t.isContentEditable||(i||n===`TEXTAREA`||n===`SELECT`)&&!t.readOnly)&&(r=!1),r}function An(e){return typeof e==`string`&&(e=xn(e)),q.indexOf(e)!==-1}function jn(e,t){let n,r;e||=Tn();for(let t in K)if(Object.prototype.hasOwnProperty.call(K,t))for(n=K[t],r=0;r<n.length;)n[r].scope===e?n.splice(r,1).forEach(e=>{let{element:t}=e;return Rn(t)}):r++;Tn()===e&&wn(t||`all`)}function Mn(e){let t=e.keyCode||e.which||e.charCode,n=q.indexOf(t);if(n>=0&&q.splice(n,1),e.key&&e.key.toLowerCase()===`meta`&&q.splice(0,q.length),(t===93||t===224)&&(t=91),t in G){G[t]=!1;for(let e in W)W[e]===t&&(Y[e]=!1)}}function Nn(e){if(typeof e>`u`)Object.keys(K).forEach(e=>{Array.isArray(K[e])&&K[e].forEach(e=>Pn(e)),delete K[e]}),Rn(null);else if(Array.isArray(e))e.forEach(e=>{e.key&&Pn(e)});else if(typeof e==`object`)e.key&&Pn(e);else if(typeof e==`string`){let[t,n]=[...arguments].slice(1);typeof t==`function`&&(n=t,t=``),Pn({key:e,scope:t,method:n,splitKey:`+`})}}var Pn=e=>{let{key:t,scope:n,method:r,splitKey:i=`+`}=e;gn(t).forEach(e=>{let t=e.split(i),a=t.length,o=t[a-1],s=o===`*`?`*`:xn(o);if(!K[s])return;n||=Tn();let c=a>1?hn(W,t):[],l=[];K[s]=K[s].filter(e=>{let t=(r?e.method===r:!0)&&e.scope===n&&_n(e.mods,c);return t&&l.push(e.element),!t}),l.forEach(e=>Rn(e))})};function Fn(e,t,n,r){if(t.element!==r)return;let i;if(t.scope===n||t.scope===`all`){i=t.mods.length>0;for(let e in G)Object.prototype.hasOwnProperty.call(G,e)&&(!G[e]&&t.mods.indexOf(+e)>-1||G[e]&&t.mods.indexOf(+e)===-1)&&(i=!1);(t.mods.length===0&&!G[16]&&!G[18]&&!G[17]&&!G[91]||i||t.shortcut===`*`)&&(t.keys=[],t.keys=t.keys.concat(q),t.method(e,t)===!1&&(e.preventDefault?e.preventDefault():e.returnValue=!1,e.stopPropagation&&e.stopPropagation(),e.cancelBubble&&=!0))}}function In(e,t){let n=K[`*`],r=e.keyCode||e.which||e.charCode;if(!Y.filter.call(this,e))return;if((r===93||r===224)&&(r=91),q.indexOf(r)===-1&&r!==229&&q.push(r),[`ctrlKey`,`altKey`,`shiftKey`,`metaKey`].forEach(t=>{let n=vn[t];e[t]&&q.indexOf(n)===-1?q.push(n):!e[t]&&q.indexOf(n)>-1?q.splice(q.indexOf(n),1):t===`metaKey`&&e[t]&&q.length===3&&(e.ctrlKey||e.shiftKey||e.altKey||(q=q.slice(q.indexOf(n))))}),r in G){G[r]=!0;for(let e in W)W[e]===r&&(Y[e]=!0);if(!n)return}for(let t in G)Object.prototype.hasOwnProperty.call(G,t)&&(G[t]=e[vn[t]]);e.getModifierState&&!(e.altKey&&!e.ctrlKey)&&e.getModifierState(`AltGraph`)&&(q.indexOf(17)===-1&&q.push(17),q.indexOf(18)===-1&&q.push(18),G[17]=!0,G[18]=!0);let i=Tn();if(n)for(let r=0;r<n.length;r++)n[r].scope===i&&(e.type===`keydown`&&n[r].keydown||e.type===`keyup`&&n[r].keyup)&&Fn(e,n[r],i,t);if(!(r in K))return;let a=K[r],o=a.length;for(let n=0;n<o;n++)if((e.type===`keydown`&&a[n].keydown||e.type===`keyup`&&a[n].keyup)&&a[n].key){let r=a[n],{splitKey:o}=r,s=r.key.split(o),c=[];for(let e=0;e<s.length;e++)c.push(xn(s[e]));c.sort().join(``)===q.sort().join(``)&&Fn(e,r,i,t)}}function Y(e,t,n){q=[];let r=gn(e),i=[],a=`all`,o=document,s=0,c=!1,l=!0,u=`+`,d=!1,f=!1;for(n===void 0&&typeof t==`function`&&(n=t),Object.prototype.toString.call(t)===`[object Object]`&&(t.scope&&(a=t.scope),t.element&&(o=t.element),t.keyup&&(c=t.keyup),t.keydown!==void 0&&(l=t.keydown),t.capture!==void 0&&(d=t.capture),typeof t.splitKey==`string`&&(u=t.splitKey),t.single===!0&&(f=!0)),typeof t==`string`&&(a=t),f&&Nn(e,a);s<r.length;s++)e=r[s].split(u),i=[],e.length>1&&(i=hn(W,e)),e=e[e.length-1],e=e===`*`?`*`:xn(e),e in K||(K[e]=[]),K[e].push({keyup:c,keydown:l,scope:a,mods:i,shortcut:r[s],method:n,key:r[s],splitKey:u,element:o});if(typeof o<`u`&&window){if(!J.has(o)){let e=function(){return In(arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event,o)},t=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.event;In(e,o),Mn(e)};J.set(o,{keydownListener:e,keyupListenr:t,capture:d}),mn(o,`keydown`,e,d),mn(o,`keyup`,t,d)}if(!yn){let e=()=>{q=[]};yn={listener:e,capture:d},mn(window,`focus`,e,d)}}}function Ln(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:`all`;Object.keys(K).forEach(n=>{K[n].filter(n=>n.scope===t&&n.shortcut===e).forEach(e=>{e&&e.method&&e.method()})})}function Rn(e){let t=Object.values(K).flat();if(t.findIndex(t=>{let{element:n}=t;return n===e})<0){let{keydownListener:t,keyupListenr:n,capture:r}=J.get(e)||{};t&&n&&(H(e,`keyup`,n,r),H(e,`keydown`,t,r),J.delete(e))}if((t.length<=0||J.size<=0)&&(Object.keys(J).forEach(e=>{let{keydownListener:t,keyupListenr:n,capture:r}=J.get(e)||{};t&&n&&(H(e,`keyup`,n,r),H(e,`keydown`,t,r),J.delete(e))}),J.clear(),Object.keys(K).forEach(e=>delete K[e]),yn)){let{listener:e,capture:t}=yn;H(window,`focus`,e,t),yn=null}}var zn={getPressedKeyString:Dn,setScope:wn,getScope:Tn,deleteScope:jn,getPressedKeyCodes:En,getAllKeyCodes:On,isPressed:An,filter:kn,trigger:Ln,unbind:Nn,keyMap:U,modifier:W,modifierMap:vn};for(let e in zn)Object.prototype.hasOwnProperty.call(zn,e)&&(Y[e]=zn[e]);if(typeof window<`u`){let e=window.hotkeys;Y.noConflict=t=>(t&&window.hotkeys===Y&&(window.hotkeys=e),Y),window.hotkeys=Y}function Bn(e){e.magnifierSize!==1&&e.tool.instance instanceof Dt&&(e.tool=e.previousEditingTool,e.text.active=!1,L(e))}function Vn(e){return`createImageBitmap`in self?createImageBitmap(e):new Promise(t=>{let n=new Image;n.onload=()=>{URL.revokeObjectURL(n.src),t(n)},n.src=URL.createObjectURL(e)})}async function Hn(e,{canvas:t,previewCanvas:n,context:r}){let i=await Vn(e);t&&n&&r&&(t.width=n.width=i.width,t.height=n.height=i.height,r.fillStyle=`white`,r.fillRect(0,0,i.width,i.height),r.drawImage(i,0,0))}function Un(e){`launchQueue`in window&&window.launchQueue.setConsumer(async t=>{let[n]=t.files;if(n){let t=await n.getFile();e.document.title=t.name,e.document.handle=n,await Hn(t,e)}})}var Wn=class{constructor(e){this.drawingContext=e,this.stack=[],this.stackPointer=-1}clear(){this.stack.length=0,this.stackPointer=-1}commit(){this.drawingContext.document.dirty=!0,this.stack.splice(this.stackPointer+1),this.stack.length===4&&this.stack.shift();let{canvas:e,context:t}=this.drawingContext,n=e?.width??0,r=e?.height??0,i=t?.getImageData(0,0,n,r);if(r&&n&&i){let e=this.stack.push({height:r,width:n,imageData:i});this.stackPointer=e-1}N(this.drawingContext.element)}undo(){if(!this.canUndo())throw Error(`No actions to undo.`);this.stackPointer--,this.restoreEntry()}redo(){if(!this.canRedo())throw Error(`No actions to redo.`);this.stackPointer++,this.restoreEntry()}restoreEntry(){let{height:e,width:t,imageData:n}=this.stack[this.stackPointer],{canvas:r,previewCanvas:i,context:a}=this.drawingContext;r&&i&&a&&(r.height=i.height=e,r.width=i.width=t,a.putImageData(n,0,0)),N(this.drawingContext.element)}canUndo(){return this.stackPointer>0}canRedo(){return this.stackPointer>=0&&this.stackPointer<this.stack.length-1}};function Gn(e){return e=e.replace(/(Ctrl\+(\S+))/g,`$1,⌘+$2`),e=e.replace(/Shft/g,`shift`),e=e.replace(/PgUp/g,`pageup`),e=e.replace(/PgDn/g,`pagedown`),e}function Kn(e,t,{document:n,element:r}){n.handle=e,n.title=t,N(r)}function qn(e){e.addEventListener(`dragover`,e=>{e.preventDefault()}),e.addEventListener(`drop`,async t=>{t.preventDefault();let{drawingContext:n}=e,r=[...t.dataTransfer?.items??[]].filter(({kind:e})=>e===`file`);for(let e of r){let t=await e.getAsFileSystemHandle();if(!(!t||!Jn(t))){await Hn(await t.getFile(),n),Kn(t,t.name,n);return}}})}function Jn(e){return e.kind===`file`}var Yn=class{canExecute({selection:e}){return!!e}execute({selection:e,context:t,colors:n}){if(e&&t){t.fillStyle=n.secondary;let{x:r,y:i,width:a,height:o}=e;t.fillRect(r,i,a,o)}}};function Xn(e){return new Promise((t,n)=>{e.toBlob(e=>{e?t(e):n(`Blob callback returned null!`)})})}async function Zn(e,{x:t,y:n,width:r,height:i}){var a;let o=e.getImageData(t,n,r,i),s=document.createElement(`canvas`);return s.width=r,s.height=i,(a=s.getContext(`2d`))==null||a.putImageData(o,0,0),Xn(s)}var Qn=class{canExecute({selection:e}){return`write`in navigator.clipboard&&!!e}async execute({context:e,selection:t}){e&&t&&await navigator.clipboard.write([new ClipboardItem({"image/png":Zn(e,t)})])}},$n=(()=>{if(typeof self>`u`)return!1;if(`top`in self&&self!==top)try{top.window.document._=0}catch{return!1}return`showOpenFilePicker`in self})(),er=$n?Promise.resolve().then(function(){return ar}):Promise.resolve().then(function(){return ur});async function tr(...e){return(await er).default(...e)}$n?Promise.resolve().then(function(){return cr}):Promise.resolve().then(function(){return dr});var nr=$n?Promise.resolve().then(function(){return lr}):Promise.resolve().then(function(){return fr});async function rr(...e){return(await nr).default(...e)}var ir=async e=>{let t=await e.getFile();return t.handle=e,t},ar={__proto__:null,default:async(e=[{}])=>{Array.isArray(e)||(e=[e]);let t=[];e.forEach((e,n)=>{t[n]={description:e.description||`Files`,accept:{}},e.mimeTypes?e.mimeTypes.map(r=>{t[n].accept[r]=e.extensions||[]}):t[n].accept[`*/*`]=e.extensions||[]});let n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),r=await Promise.all(n.map(ir));return e[0].multiple?r:r[0]}};function or(e){function t(e){if(Object(e)!==e)return Promise.reject(TypeError(e+` is not an object.`));var t=e.done;return Promise.resolve(e.value).then(function(e){return{value:e,done:t}})}return or=function(e){this.s=e,this.n=e.next},or.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var n=this.s.return;return n===void 0?Promise.resolve({value:e,done:!0}):t(n.apply(this.s,arguments))},throw:function(e){var n=this.s.return;return n===void 0?Promise.reject(e):t(n.apply(this.s,arguments))}},new or(e)}var sr=async(e,t,n=e.name,r)=>{let i=[],a=[];var o,s=!1,c=!1;try{for(var l,u=function(e){var t,n,r,i=2;for(typeof Symbol<`u`&&(n=Symbol.asyncIterator,r=Symbol.iterator);i--;){if(n&&(t=e[n])!=null)return t.call(e);if(r&&(t=e[r])!=null)return new or(t.call(e));n=`@@asyncIterator`,r=`@@iterator`}throw TypeError(`Object is not async iterable`)}(e.values());s=!(l=await u.next()).done;s=!1){let o=l.value,s=`${n}/${o.name}`;o.kind===`file`?a.push(o.getFile().then(t=>(t.directoryHandle=e,t.handle=o,Object.defineProperty(t,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>s})))):o.kind!==`directory`||!t||r&&r(o)||i.push(sr(o,t,s,r))}}catch(e){c=!0,o=e}finally{try{s&&u.return!=null&&await u.return()}finally{if(c)throw o}}return[...(await Promise.all(i)).flat(),...await Promise.all(a)]},cr={__proto__:null,default:async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||`read`;let t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await t.values()).next()).done?[t]:sr(t,e.recursive,void 0,e.skipDirectory)}},lr={__proto__:null,default:async(e,t=[{}],n=null,r=!1,i=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||`Untitled`;let a=[],o=null;if(e instanceof Blob&&e.type?o=e.type:e.headers&&e.headers.get(`content-type`)&&(o=e.headers.get(`content-type`)),t.forEach((e,t)=>{a[t]={description:e.description||`Files`,accept:{}},e.mimeTypes?(t===0&&o&&e.mimeTypes.push(o),e.mimeTypes.map(n=>{a[t].accept[n]=e.extensions||[]})):o?a[t].accept[o]=e.extensions||[]:a[t].accept[`*/*`]=e.extensions||[]}),n)try{await n.getFile()}catch(e){if(n=null,r)throw e}let s=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:a,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&i&&i(s);let c=await s.createWritable();return`stream`in e?(await e.stream().pipeTo(c),s):`body`in e?(await e.body.pipeTo(c),s):(await c.write(await e),await c.close(),s)}},ur={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,n)=>{let r=document.createElement(`input`);r.type=`file`;let i=[...e.map(e=>e.mimeTypes||[]),...e.map(e=>e.extensions||[])].join();r.multiple=e[0].multiple||!1,r.accept=i||``,r.style.display=`none`,document.body.append(r);let a=e=>{typeof o==`function`&&o(),t(e)},o=e[0].legacySetup&&e[0].legacySetup(a,()=>o(n),r),s=()=>{window.removeEventListener(`focus`,s),r.remove()};r.addEventListener(`click`,()=>{window.addEventListener(`focus`,s)}),r.addEventListener(`change`,()=>{window.removeEventListener(`focus`,s),r.remove(),a(r.multiple?Array.from(r.files):r.files[0])}),`showPicker`in HTMLInputElement.prototype?r.showPicker():r.click()}))},dr={__proto__:null,default:async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,n)=>{let r=document.createElement(`input`);r.type=`file`,r.webkitdirectory=!0;let i=e=>{typeof a==`function`&&a(),t(e)},a=e[0].legacySetup&&e[0].legacySetup(i,()=>a(n),r);r.addEventListener(`change`,()=>{let t=Array.from(r.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(t=t.filter(t=>t.webkitRelativePath.split(`/`).every(t=>!e[0].skipDirectory({name:t,kind:`directory`})))):t=t.filter(e=>e.webkitRelativePath.split(`/`).length===2),i(t)}),`showPicker`in HTMLInputElement.prototype?r.showPicker():r.click()}))},fr={__proto__:null,default:async(e,t={})=>{Array.isArray(t)&&(t=t[0]);let n=document.createElement(`a`),r=e;`body`in e&&(r=await async function(e,t){let n=e.getReader(),r=new ReadableStream({start:e=>async function t(){return n.read().then(({done:n,value:r})=>{if(!n)return e.enqueue(r),t();e.close()})}()}),i=await new Response(r).blob();return n.releaseLock(),new Blob([i],{type:t})}(e.body,e.headers.get(`content-type`))),n.download=t.fileName||`Untitled`,n.href=URL.createObjectURL(await r);let i=()=>{typeof a==`function`&&a()},a=t.legacySetup&&t.legacySetup(i,()=>a(),n);return n.addEventListener(`click`,()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),i()}),n.click(),null}},pr=class{canExecute({selection:e}){return!!e}async execute({context:e,selection:t}){e&&t&&await rr(await Zn(e,t))}},mr=class{constructor(){this.copy=new Qn,this.clearSelection=new Yn}canExecute(e){return this.copy.canExecute(e)&&this.clearSelection.canExecute(e)}async execute(e){await this.copy.execute(e),this.clearSelection.execute(e)}},hr=class{canExecute(){var e;return!!((e=navigator.clipboard)!=null&&e.read)}async execute({context:e}){if(e){let t=await navigator.clipboard.read();for(let n of t)try{for(let t of n.types)if(t.match(/^image\//)){let r=await Vn(await n.getType(t));e.drawImage(r,0,0)}}catch(e){console.error(`Clipboard API paste error`,e)}}}},gr=class{async execute({context:e}){if(e){let t=await Vn(await tr());e.drawImage(t,0,0)}}},_r=class{canExecute(e){return(e?.history)?.canRedo()??!1}execute(e){var t;(t=e?.history)==null||t.redo()}},vr=class{execute(e){if(e.canvas){let{width:t,height:n}=e.canvas;e.selection={x:0,y:0,width:t,height:n},N(e.element)}}},yr={caption:`Edit`,mnemonic:`E`,helpText:``,entries:[{caption:`Undo`,mnemonic:`U`,shortcut:`Ctrl+Z`,helpText:`Undoes the last action.`,instance:new class{canExecute(e){return(e?.history)?.canUndo()??!1}execute(e){var t;(t=e?.history)==null||t.undo()}}},{caption:`Repeat`,mnemonic:`R`,shortcut:`F4`,helpText:`Redoes the previously undone action.`,instance:new _r},{separator:!0},{caption:`Cut`,mnemonic:`t`,shortcut:`Ctrl+X`,helpText:`Cuts the selection and puts it on the Clipboard.`,instance:new mr},{caption:`Copy`,mnemonic:`C`,shortcut:`Ctrl+C`,helpText:`Copies the selection and puts it on the Clipboard.`,instance:new Qn},{caption:`Paste`,mnemonic:`P`,shortcut:`Ctrl+V`,helpText:`Inserts the contents of the Clipboard.`,instance:new hr},{caption:`Clear Selection`,mnemonic:`l`,shortcut:`Del`,helpText:`Deletes the selection.`,instance:new Yn},{caption:`Select All`,mnemonic:`A`,shortcut:`Ctrl+L`,helpText:`Selects everything.`,instance:new vr},{separator:!0},{caption:`Copy To…`,mnemonic:`o`,helpText:`Copies the selection to a file.`,instance:new pr},{caption:`Paste From…`,mnemonic:`F`,helpText:`Pastes a file into the selection.`,instance:new gr}]},br=class{async execute(e){if(!e.canvas)return;let t=await rr(await Xn(e.canvas),{fileName:e.document.title,extensions:[`.png`],description:`PNG files`});t&&Kn(t,t.name,e)}},xr=class{async execute(e){e.canvas&&e.document.handle?await rr(await Xn(e.canvas),void 0,e.document.handle):await new br().execute(e)}};async function Sr(e){if(!e.document.dirty)return;let t=await $e(`Save changes to ${e.document.title}?`,`warning`,`Paint`,`yes-no-cancel`);if(t===`cancel`)throw Error(`User cancelled operation.`);t===`yes`&&await new xr().execute(e)}var Cr=class{async execute(e){try{await Sr(e),e.document.dirty=!1,window.close()}catch{}}};function wr({canvas:e,context:t,colors:n,history:r},i=!0){e&&t&&r&&(t.fillStyle=n.secondary,t.fillRect(0,0,e.width,e.height),i&&r.commit())}var Tr=class{canExecute({selection:e}){return!e}execute(e){wr(e)}},Er=class{async execute(e){var t;try{await Sr(e),Kn(void 0,`untitled`,e),e.palette=[...Kt],e.colors={...Gt},(t=e.history)==null||t.clear(),new Tr().execute(e),e.document.dirty=!1}catch{}}},Dr=class{async execute(e){let t=await tr({extensions:[`.png`],description:`PNG Files`});Kn(t.handle,t.name,e),await Hn(t,e)}},Or=class{execute(){window.print()}},kr=class{constructor(){this.fakePng=this.getFileFromPngBlob(new Blob,`fake.png`)}canExecute(){return!!navigator.canShare&&navigator.canShare({files:[this.fakePng]})}async execute({canvas:e,document:t}){if(e){let n=await Xn(e);await navigator.share({files:[this.getFileFromPngBlob(n,`${t.title}.png`)],title:t.title})}}getFileFromPngBlob(e,t){return new File([e],t,{type:`image/png`})}},Ar={caption:`File`,mnemonic:`F`,helpText:``,entries:[{caption:`New`,mnemonic:`N`,shortcut:`Ctrl+N`,helpText:`Creates a new document.`,instance:new Er},{caption:`Open…`,mnemonic:`O`,shortcut:`Ctrl+O`,helpText:`Opens an existing document.`,instance:new Dr},{caption:`Save`,mnemonic:`S`,shortcut:`Ctrl+S`,helpText:`Saves the active document.`,instance:new xr},{caption:`Save As…`,mnemonic:`A`,helpText:`Saves the active document with a new name.`,instance:new br},{separator:!0},{caption:`Print Preview`,mnemonic:`v`,helpText:`Displays full pages.`,instance:new Or},{caption:`Page Setup…`,mnemonic:`t`,helpText:`Changes the page layout.`,instance:new Or},{caption:`Print…`,mnemonic:`P`,shortcut:`Ctrl+P`,helpText:`Prints the active document and sets printing options.`,instance:new Or},{separator:!0},{caption:`Send…`,mnemonic:`e`,helpText:`Sends a picture by using mail or fax.`,instance:new kr},{separator:!0},{caption:`Set As Wallpaper (Tiled)`,mnemonic:`W`,helpText:`Tiles this bitmap as the desktop wallpaper.`,instance:null},{caption:`Set As Wallpaper (Centered)`,mnemonic:`l`,helpText:`Centers this bitmap as the desktop wallpaper.`,instance:null},{separator:!0},{caption:`Recent File`,instance:null,helpText:`Opens this document.`},{separator:!0},{caption:`Exit`,mnemonic:`x`,shortcut:`Alt+F4`,helpText:`Quits Paint.`,instance:new Cr}]},jr={caption:`Help`,mnemonic:`H`,helpText:``,entries:[{caption:`Help Topics`,mnemonic:`H`,helpText:`Displays Help for the current task or command.`},{separator:!0},{caption:`About Paint`,mnemonic:`A`,helpText:`Displays program information, version number, and copyright.`,instance:new class{execute(){Qe(`paint-dialog-about`)}}}]},Mr=class{async execute(e){var t;let{previewCanvas:n,context:r}=e;if(!n||!r)return;let{canvas:i}=r,a=await Qe(`paint-dialog-attributes`,{width:i.width.toString(),height:i.height.toString(),unit:`pels`,color:`colors`});if(!a)return;let o=parseInt(a.width,10),s=parseInt(a.height,10);if(!this.isValidValue(o)||!this.isValidValue(s)){await $e(`Bitmaps must be greater than one pixel on a side.`,`warning`,`Paint`);return}let c=r.getImageData(0,0,i.width,i.height);i.width=n.width=o,i.height=n.height=s,wr(e,!1),r.putImageData(c,0,0),(t=e.history)==null||t.commit()}isValidValue(e){return isFinite(e)&&e>0}},Nr=class{execute({canvas:e,context:t,selection:n,history:r}){if(t&&e){let i=t.globalCompositeOperation;t.globalCompositeOperation=`difference`,t.fillStyle=`white`,n?t.fillRect(n.x,n.y,n.width,n.height):t.fillRect(0,0,e.width,e.height),t.globalCompositeOperation=i,r?.commit()}}},Pr={caption:`Image`,mnemonic:`I`,helpText:``,entries:[{caption:`Flip/Rotate…`,mnemonic:`F`,helpText:`Flips or rotates the picture or a selection.`,instance:new class e{async execute({context:t,canvas:n,previewCanvas:r,history:i}){let a=await Qe(`paint-dialog-flip-and-rotate`);!a||!n||!t||!r||!i||e.flipOrRotate(a,n,r,t,i)}static flipOrRotate(t,n,r,i,a){let o=e.cloneCanvas(n);t.action===`flip`?e.flip(t.param,n,i):t.action===`rotate`&&e.rotate(t.param,n,r,i),i.drawImage(o,0,0),i.setTransform(1,0,0,1,0,0),a.commit()}static cloneCanvas(e){var t;let n=document.createElement(`canvas`);return n.width=e.width,n.height=e.height,(t=n.getContext(`2d`))==null||t.drawImage(e,0,0),n}static flip(e,t,n){e===`horizontal`?(n.translate(t.width,0),n.scale(-1,1)):e===`vertical`&&(n.translate(0,t.height),n.scale(1,-1))}static rotate(t,n,r,i){t===90?(e.rotateCanvas(n,r),i.translate(n.width,0),i.rotate(e.getRadianAngle(90))):t===180?(i.translate(n.width,n.height),i.rotate(e.getRadianAngle(180))):t===270&&(e.rotateCanvas(n,r),i.translate(0,n.height),i.rotate(e.getRadianAngle(270)))}static rotateCanvas(e,t){let{height:n,width:r}=e;e.height=t.height=r,e.width=t.width=n}static getRadianAngle(e){return e*Math.PI/180}}},{caption:`Stretch/Skew…`,mnemonic:`S`,shortcut:`Ctrl+W`,helpText:`Stretches or skews the picture or a selection.`},{caption:`Invert Colors`,mnemonic:`I`,shortcut:`Ctrl+I`,helpText:`Inverts the colors of the picture or a selection.`,instance:new Nr},{caption:`Attributes…`,mnemonic:`A`,shortcut:`Ctrl+E`,helpText:`Changes the attributes of the picture.`,instance:new Mr},{caption:`Clear Image`,mnemonic:`C`,shortcut:`Ctrl+Shft+N`,helpText:`Clears the picture or selection.`,instance:new Tr}]},Fr=class{async execute({palette:e}){let t=e.length,n=4+t*4,r=24+t*4,i=new ArrayBuffer(r),a=new Uint8Array(i),o=new DataView(i),s=new TextEncoder;a.set(s.encode(`RIFF`)),o.setUint32(4,r-8,!0),a.set(s.encode(`PAL `),8),a.set(s.encode(`data`),12),o.setUint32(16,n,!0),o.setUint16(20,768,!0),o.setUint16(22,t,!0);let c=document.createElement(`canvas`).getContext(`2d`);for(let n=0;n<t;n++){c.fillStyle=e[n],c.fillRect(0,0,1,1);let[t,r,i]=c.getImageData(0,0,1,1).data,a=24+n*4;o.setUint8(a,t),o.setUint8(a+1,r),o.setUint8(a+2,i),o.setUint8(a+3,0)}await rr(new Blob([i],{type:`application/octet-stream`}),{fileName:`untitled.pal`,extensions:[`.pal`],description:`Palette`})}},Ir=class{async execute(e){try{let t=await tr({extensions:[`.pal`],description:`Palette`});await this.updateContextFromFile(t,e)}catch{}}async updateContextFromFile(e,t){try{let n=await e.arrayBuffer();this.readPalette(n).forEach((e,n)=>t.palette[n]=e),N(t.element)}catch{await $e(`${e.name}
Paint cannot open this file.
This file is not in the correct format.`,`warning`,`Paint`)}}readPalette(e){let t=new DataView(e),n=new TextDecoder;if(n.decode(e.slice(0,4))!==`RIFF`)throw Error(`Non-RIFF palettes are not supported.`);if(n.decode(e.slice(8,12))!==`PAL `)throw Error(`Only PAL form types are supported.`);if(n.decode(e.slice(12,16))!==`data`)throw Error(`Expected a data chunk.`);let r=[],i=t.getUint16(22,!0);for(let e=0;e<i;e++){let n=24+e*4,i=t.getUint8(n),a=t.getUint8(n+1),o=t.getUint8(n+2);r.push(`rgb(${i} ${a} ${o})`)}return r.slice(0,26)}},Lr=class{isChecked({drawOpaque:e}){return e}execute(e){e.drawOpaque=!e.drawOpaque,N(e.element)}},Rr={caption:`Options`,mnemonic:`O`,helpText:``,entries:[{caption:`Edit Colors…`,mnemonic:`E`,helpText:`Creates a new color.`},{caption:`Get Colors…`,mnemonic:`G`,helpText:`Uses a previously saved palette of colors.`,instance:new Ir},{caption:`Save Colors…`,mnemonic:`S`,helpText:`Saves the current palette of colors to a file.`,instance:new Fr},{caption:`Draw Opaque`,mnemonic:`D`,helpText:`Makes the current selection either opaque or transparent.`,instance:new Lr}]},zr=class{async execute(e){let t=await Qe(`paint-dialog-custom-zoom`,{currentMagnifierSize:e.magnifierSize});t!=null&&t.magnifierSize&&(e.magnifierSize=t.magnifierSize,N(e.element))}},Br=class{execute(e){e.magnifierSize=4,N(e.element)}},Vr=class{execute(e){e.magnifierSize=1,N(e.element)}},Hr=class{isChecked(e){return e.text.showToolbar??!1}canExecute(e){return e.text.active}execute(e){e.text.showToolbar=!e.text.showToolbar,L(e),N(e.element)}},Ur=class{async execute({canvas:e}){e&&await e.requestFullscreen()}},Wr=class{isChecked({view:{statusBar:e}}){return e}execute(e){e.view.statusBar=!e.view.statusBar,N(e.element)}},Gr=class{isChecked({view:{toolBox:e}}){return e}execute(e){e.view.toolBox=!e.view.toolBox,N(e.element)}},Kr=class{isChecked({view:{colorBox:e}}){return e}execute(e){e.view.colorBox=!e.view.colorBox,N(e.element)}},qr=[Ar,yr,{caption:`View`,mnemonic:`V`,helpText:``,entries:[{caption:`Tool Box`,shortcut:`Ctrl+T`,mnemonic:`T`,helpText:`Shows or hides the tool box.`,instance:new Gr},{caption:`Color Box`,shortcut:`Ctrl+A`,mnemonic:`C`,helpText:`Shows or hides the color box.`,instance:new Kr},{caption:`Status Bar`,mnemonic:`S`,helpText:`Shows or hides the status bar.`,instance:new Wr},{separator:!0},{caption:`Zoom`,mnemonic:`Z`,helpText:``,entries:[{caption:`Normal Size`,mnemonic:`N`,shortcut:`Ctrl+PgUp`,helpText:`Zooms the picture to 100%.`,instance:new Vr},{caption:`Large Size`,mnemonic:`L`,shortcut:`Ctrl+PgDn`,helpText:`Zooms the picture to 400%.`,instance:new Br},{caption:`Custom…`,mnemonic:`u`,helpText:`Zooms the picture.`,instance:new zr},{separator:!0},{caption:`Show Grid`,mnemonic:`G`,shortcut:`Ctrl+G`,helpText:`Shows or hides the grid.`},{caption:`Show Thumbnail`,mnemonic:`h`,helpText:`Shows or hides the thumbnail view of the picture.`}]},{caption:`View Bitmap`,mnemonic:`V`,shortcut:`Ctrl+F`,helpText:`Displays the entire picture.`,instance:new Ur},{caption:`Text Toolbar`,mnemonic:`e`,helpText:`Shows or hides the text toolbar.`,instance:new Hr}]},Pr,Rr,jr],Jr=Object.defineProperty,Yr=Object.getOwnPropertyDescriptor,Xr=(e,t,n,r)=>{for(var i=r>1?void 0:r?Yr(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Jr(t,n,i),i},Zr=`For Help, click Help Topics on the Help Menu.`,X=class extends D{constructor(){super(),this.areaText=``,this.coordinateText=``,this.helpText=Zr,this.drawingContext=R,this.previousTitle=``,this.areaText=``,this.coordinateText=``,this.helpText=Zr,this.drawingContext=R,this.drawingContext.history=new Wn(this.drawingContext),this.addEventListener(`set-help-text`,e=>{this.helpText=e.detail??Zr}),this.addEventListener(`coordinate`,e=>{this.coordinateText=e.detail?`${e.detail.x},${e.detail.y}`:``}),this.addEventListener(`area`,e=>{this.areaText=e.detail?`${e.detail.width}x${e.detail.height}`:``}),this.addEventListener(`drawing-context-changed`,e=>{let t=e.detail;Bn(t),this.drawingContext=t}),this.addEventListener(`invoke-action`,e=>{e.detail(this.drawingContext)}),this.addEventListener(`canvas-ready`,()=>Un(this.drawingContext)),this.beforeUnloadListener=this.onBeforeUnload.bind(this),window.addEventListener(`beforeunload`,this.beforeUnloadListener),qn(this),this.registerHotkeys(qr)}static get styles(){return p`
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
    `}registerHotkeys(e){e.filter(e=>!(`separator`in e&&e.separator)).forEach(e=>{`entries`in e&&Array.isArray(e.entries)&&this.registerHotkeys(e.entries),`shortcut`in e&&typeof e.shortcut==`string`&&Y(Gn(e.shortcut),()=>(this.canActionExecute(e,this.drawingContext)&&this.dispatchEvent(new CustomEvent(`invoke-action`,{detail:e.instance?.execute.bind(e.instance),bubbles:!0,composed:!0})),!1))})}canActionExecute(e,t){return e.instance?e.instance.canExecute?e.instance.canExecute(t):!0:!1}render(){return this.dispatchTitleChangeEvent(),S`
      <paint-menu-bar
        .entries="${qr}"
        .drawingContext="${this.drawingContext}"
      ></paint-menu-bar>
      <div>
        ${this.drawingContext.view.toolBox?S` <paint-tool-bar>
              <paint-ruler></paint-ruler>
              <paint-tool-box
                .drawingContext="${this.drawingContext}"
              ></paint-tool-box>
              <paint-ruler></paint-ruler>
            </paint-tool-bar>`:``}
        <paint-canvas .drawingContext="${this.drawingContext}"></paint-canvas>
      </div>
      ${this.drawingContext.view.colorBox?S` <paint-tool-bar class="color-box">
            <paint-color-box .drawingContext="${this.drawingContext}">
            </paint-color-box>
            <paint-ruler></paint-ruler>
          </paint-tool-bar>`:``}
      ${this.drawingContext.view.statusBar?S` <paint-status-bar
            helpText="${this.helpText}"
            coordinateText="${this.coordinateText}"
            areaText="${this.areaText}"
          ></paint-status-bar>`:``}
      ${this.drawingContext.view.textToolbar?S` <paint-dialog-text-toolbar
            .drawingContext="${this.drawingContext}"
          ></paint-dialog-text-toolbar>`:``}
    `}dispatchTitleChangeEvent(){this.previousTitle!==this.drawingContext.document.title&&(this.previousTitle=this.drawingContext.document.title,this.dispatchEvent(new CustomEvent(`titlechange`,{detail:{title:this.drawingContext.document.title},composed:!0,bubbles:!0})))}onBeforeUnload(e){this.drawingContext.document.dirty&&(e.preventDefault(),e.returnValue=``)}disconnectedCallback(){super.disconnectedCallback(),this.beforeUnloadListener&&window.removeEventListener(`beforeunload`,this.beforeUnloadListener)}};Xr([A()],X.prototype,`areaText`,2),Xr([A()],X.prototype,`coordinateText`,2),Xr([A()],X.prototype,`helpText`,2),Xr([A()],X.prototype,`drawingContext`,2),X=Xr([O(`paint-app`)],X);var Qr=Object.defineProperty,$r=Object.getOwnPropertyDescriptor,ei=(e,t,n,r)=>{for(var i=r>1?void 0:r?$r(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Qr(t,n,i),i},ti=class extends D{static get styles(){return p`
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
    `}constructor(){super(),this.addEventListener(`keydown`,e=>{[`Space`,`Enter`].includes(e.code)&&this.dispatchEvent(new MouseEvent(`click`))})}render(){return S` <div class="inline-border">
      <div class="focus-border">
        <slot></slot>
      </div>
    </div>`}};ti=ei([O(`paint-button`)],ti);var ni=Object.defineProperty,ri=Object.getOwnPropertyDescriptor,Z=(e,t,n,r)=>{for(var i=r>1?void 0:r?ri(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ni(t,n,i),i},Q=class extends D{constructor(){super(...arguments),this.drawingContext=R,this.inCanvas=!1,this.canvasWidth=screen.width,this.canvasHeight=screen.height,this.pointerDown=!1,this.previewColor=`primary`,this.lastPointerEventTime=0}static get styles(){return p`
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
    `}render(){return this.tool=this.drawingContext.tool.instance,S`
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
    `}firstUpdated(){if(!this.shadowRoot)throw Error(`Shadow root not present.`);let e=this.shadowRoot.querySelector(`canvas.main`),t=this.shadowRoot.querySelector(`canvas.preview`),n=e.getContext(`2d`,{desynchronized:!0}),r=t.getContext(`2d`,{desynchronized:!0});if(!n||!r)throw Error(`Canvas context not present.`);n.imageSmoothingEnabled=!1,this.drawingContext.canvas=e,this.drawingContext.context=n,this.drawingContext.previewCanvas=t,this.drawingContext.previewContext=r,this.drawingContext.element=this,wr(this.drawingContext),this.drawingContext.document.dirty=!1,N(this),document.addEventListener(`pointermove`,e=>this.throttledPointerMove(e)),document.addEventListener(`pointerup`,e=>this.onPointerUp(e)),this.dispatchEvent(new CustomEvent(`canvas-ready`,{bubbles:!0,composed:!0}))}throttledPointerMove(e){let t=Date.now();t-this.lastPointerEventTime<8||(this.lastPointerEventTime=t,this.onPointerMove(e))}getToolEventArgs(e,t){let n=this.pointerDown?this.previewColor:`primary`,r=n===`primary`?`secondary`:`primary`,i={stroke:{key:n,value:this.drawingContext.colors[n]},fill:{key:r,value:this.drawingContext.colors[r]}};return[e,t,this.drawingContext,i]}onPointerDown(e){var t;if(this.pointerDown=!0,this.previewColor=e.button===2?`secondary`:`primary`,this.drawingContext.text.active=!1,L(this.drawingContext),N(this),(t=this.tool)!=null&&t.onPointerDown){let{x:t,y:n}=this.getCoordinates(e);this.tool.onPointerDown(...this.getToolEventArgs(t,n))}e.preventDefault()}onPointerMove(e){var t,n;let{x:r,y:i}=this.getCoordinates(e);this.inCanvas&&this.drawingContext.canvas&&this.dispatchEvent(new CustomEvent(`coordinate`,{detail:{x:Math.max(0,Math.min(this.drawingContext.canvas.width,r)),y:Math.max(0,Math.min(this.drawingContext.canvas.height,i))},bubbles:!0,composed:!0})),(t=this.tool)!=null&&t.onPointerHover&&this.tool.onPointerHover(...this.getToolEventArgs(r,i)),this.pointerDown&&(n=this.tool)!=null&&n.onPointerMove&&this.tool.onPointerMove(...this.getToolEventArgs(r,i))}onPointerUp(e){var t,n,r;if(!this.pointerDown)return;let{x:i,y:a}=this.getCoordinates(e);(t=this.tool)!=null&&t.onPointerUp&&this.tool.onPointerUp(...this.getToolEventArgs(i,a)),(n=this.drawingContext.history)==null||n.commit(),this.pointerDown=!1,(r=this.tool)!=null&&r.onPointerHover&&this.tool.onPointerHover(...this.getToolEventArgs(i,a))}onPointerEnter(){this.inCanvas=!0;let{canvas:e,tool:t}=this.drawingContext;e&&(e.style.cursor=t.cursor??`default`)}onPointerLeave(){this.inCanvas=!1,this.dispatchEvent(new CustomEvent(`coordinate`,{bubbles:!0,composed:!0}))}getCoordinates({clientX:e,clientY:t}){if(!this.drawingContext.canvas)throw Error(`Canvas not initialized yet.`);let{left:n,top:r}=this.drawingContext.canvas.getBoundingClientRect();return{x:Math.floor((e-n)/this.drawingContext.magnifierSize),y:Math.floor((t-r)/this.drawingContext.magnifierSize)}}};Z([k()],Q.prototype,`drawingContext`,2),Z([k({attribute:!1})],Q.prototype,`inCanvas`,2),Z([k({attribute:!1})],Q.prototype,`tool`,2),Z([k({attribute:!1})],Q.prototype,`canvasWidth`,2),Z([k({attribute:!1})],Q.prototype,`canvasHeight`,2),Q=Z([O(`paint-canvas`)],Q);var ii=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,oi=(e,t,n,r)=>{for(var i=r>1?void 0:r?ai(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ii(t,n,i),i},si=class extends D{constructor(){super(...arguments),this.drawingContext=R}static get styles(){return p`
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
    `}render(){return S`
      <paint-color-switcher
        primaryColor="${this.drawingContext.colors.primary}"
        secondaryColor="${this.drawingContext.colors.secondary}"
        @pointerdown="${e=>this.swapColors(e)}"
      >
      </paint-color-switcher>
      ${this.drawingContext.palette.map(e=>S` <paint-color-picker
            color="${e}"
            .drawingContext="${this.drawingContext}"
          >
          </paint-color-picker>`)}
    `}swapColors({pointerType:e}){if([`pen`,`touch`].includes(e)){let{primary:e,secondary:t}=this.drawingContext.colors;this.drawingContext.colors.primary=t,this.drawingContext.colors.secondary=e,N(this)}}};oi([k()],si.prototype,`drawingContext`,2),si=oi([O(`paint-color-box`)],si);var ci=Object.defineProperty,li=Object.getOwnPropertyDescriptor,ui=(e,t,n,r)=>{for(var i=r>1?void 0:r?li(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ci(t,n,i),i},di=class extends D{constructor(){super(),this.drawingContext=R,this.color=``,this.addEventListener(`click`,()=>{this.dispatchColorEvent(`primary`)}),this.addEventListener(`contextmenu`,e=>{this.dispatchColorEvent(`secondary`),e.preventDefault()})}static get styles(){return p`
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
    `}dispatchColorEvent(e){this.drawingContext.colors[e]=this.color,N(this)}render(){return S`<div
      class="frame"
      style="background-color: ${this.color};"
    ></div>`}};ui([k()],di.prototype,`drawingContext`,2),ui([k()],di.prototype,`color`,2),di=ui([O(`paint-color-picker`)],di);var fi=Object.defineProperty,pi=Object.getOwnPropertyDescriptor,mi=(e,t,n,r)=>{for(var i=r>1?void 0:r?pi(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&fi(t,n,i),i},hi=class extends D{constructor(){super(...arguments),this.primaryColor=``,this.secondaryColor=``}static get styles(){return p`
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
    `}render(){return S`
      <div class="frame">
        <div class="color primary">
          <div style="background-color: ${this.primaryColor}"></div>
        </div>
        <div class="color secondary">
          <div style="background-color: ${this.secondaryColor}"></div>
        </div>
      </div>
    `}};mi([k()],hi.prototype,`primaryColor`,2),mi([k()],hi.prototype,`secondaryColor`,2),hi=mi([O(`paint-color-switcher`)],hi);var gi=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,vi=(e,t,n,r)=>{for(var i=r>1?void 0:r?_i(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&gi(t,n,i),i},yi=class extends D{static get styles(){return p`
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
    `}render(){return S``}};yi=vi([O(`paint-handle`)],yi);var bi=Object.defineProperty,xi=Object.getOwnPropertyDescriptor,Si=(e,t,n,r)=>{for(var i=r>1?void 0:r?xi(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&bi(t,n,i),i},Ci=class extends D{static get styles(){return p`
      :host {
        box-sizing: border-box;
        border: 1px solid var(--button-dark);
        border-bottom-color: var(--button-light);
        border-right-color: var(--button-light);

        display: flex;
        align-items: flex-end;
      }
    `}render(){return S`<slot></slot>`}};Ci=Si([O(`paint-inset-container`)],Ci);var wi=Object.defineProperty,Ti=Object.getOwnPropertyDescriptor,Ei=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ti(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&wi(t,n,i),i},Di=class extends D{constructor(){super(),this.entries=[],this.drawingContext=R,this.addEventListener(`click`,e=>e.stopPropagation())}static get styles(){return p`
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
    `}render(){return S` <div class="frame">
      ${this.entries.map(e=>this.getMenuEntry(e))}
    </div>`}getMenuEntry(e){return`separator`in e?S` <paint-ruler></paint-ruler>`:S`
      <div
        class="menu-entry ${this.isDisabled(e)?`disabled`:``}"
        @click="${()=>this.execute(e)}"
        @pointerenter="${()=>this.setHelpText(e.helpText)}"
        @pointerleave="${()=>this.setHelpText()}"
      >
        <span class="selection">
          ${this.isChecked(e)?S` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 9">
                <path
                  class="shadow"
                  fill="transparent"
                  d="M4,7v2h1V8h1V7h1V6h1V5h1V2H8L4,7z"
                />
                <path
                  d="M1,3v3h1v1h1v1h1V7h1V6h1V5h1V4h1V1H7v1H6v1H5v1H4v1H3V4H2V3H1z"
                />
              </svg>`:``}
        </span>
        <span>${j(e.caption,e.mnemonic)}</span>
        <span class="${e.shortcut?`shortcut`:``}"
          >${e.shortcut}</span
        >
        <span class="opener">
          ${e.entries?S` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 7">
                  <path d="M0,0v7h1V6h1V5h1V4h1V3H3V2H2V1H1V0H0z" />
                </svg>
                <paint-menu
                  class="submenu"
                  .entries="${e.entries}"
                  .drawingContext="${this.drawingContext}"
                ></paint-menu>`:``}
        </span>
      </div>
    `}isChecked(e){var t;return!!((t=e.instance)!=null&&t.isChecked&&e.instance.isChecked(this.drawingContext))}isDisabled({instance:e,entries:t}){return!(t||e&&(!e.canExecute||e.canExecute(this.drawingContext)))}execute(e){var t;!this.isDisabled(e)&&(t=e.instance)!=null&&t.execute&&(this.dispatchEvent(new CustomEvent(`invoke-action`,{detail:e.instance.execute.bind(e.instance),bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent(`action-executed`,{bubbles:!0,composed:!0})))}setHelpText(e){this.dispatchEvent(new CustomEvent(`set-help-text`,{detail:e,bubbles:!0,composed:!0}))}};Ei([k()],Di.prototype,`entries`,2),Ei([k()],Di.prototype,`drawingContext`,2),Di=Ei([O(`paint-menu`)],Di);var Oi=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,Ai=(e,t,n,r)=>{for(var i=r>1?void 0:r?ki(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Oi(t,n,i),i},ji=class extends D{constructor(){super(),this.entries=[],this.drawingContext=R,this.activeMenu=null,document.addEventListener(`click`,()=>this.activeMenu=null),this.addEventListener(`action-executed`,()=>this.activeMenu=null)}static get styles(){return p`
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
    `}render(){return S`
      <ul @click="${e=>e.stopPropagation()}">
        ${this.entries.map(e=>S`
            <li
              @click="${()=>this.onClick(e)}"
              @pointerenter="${()=>this.onPointerEnter(e)}"
              @pointerleave="${()=>this.onPointerLeave()}"
              class="${this.activeMenu===e?`active`:``}"
            >
              ${j(e.caption,e.mnemonic)}
              <paint-menu
                .entries="${e.entries}"
                .drawingContext="${this.drawingContext}"
              >
              </paint-menu>
            </li>
          `)}
      </ul>
    `}onClick(e){this.activeMenu=this.activeMenu===e?null:e}onPointerEnter(e){this.dispatchEvent(new CustomEvent(`set-help-text`,{detail:e.helpText,bubbles:!0,composed:!0})),this.activeMenu&&=e}onPointerLeave(){this.dispatchEvent(new CustomEvent(`set-help-text`,{bubbles:!0,composed:!0}))}};Ai([k()],ji.prototype,`entries`,2),Ai([k()],ji.prototype,`drawingContext`,2),Ai([k({attribute:!1})],ji.prototype,`activeMenu`,2),ji=Ai([O(`paint-menu-bar`)],ji);var Mi=Object.defineProperty,Ni=Object.getOwnPropertyDescriptor,Pi=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ni(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Mi(t,n,i),i},Fi=class extends D{static get styles(){return p`
      :host {
        display: block;
        border-top: 1px solid var(--button-dark);
        border-bottom: 1px solid var(--button-light);
      }
    `}render(){return S``}};Fi=Pi([O(`paint-ruler`)],Fi);var Ii=Object.defineProperty,Li=Object.getOwnPropertyDescriptor,Ri=(e,t,n,r)=>{for(var i=r>1?void 0:r?Li(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ii(t,n,i),i},zi=class extends D{constructor(){super(...arguments),this.helpText=``,this.coordinateText=``,this.areaText=``}static get styles(){return p`
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
    `}render(){return S`
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
    `}};Ri([k()],zi.prototype,`helpText`,2),Ri([k()],zi.prototype,`coordinateText`,2),Ri([k()],zi.prototype,`areaText`,2),zi=Ri([O(`paint-status-bar`)],zi);function Bi(e){e.includes(`BlinkMacSystemFont`)&&console.warn(`break-styled-lines: Using BlinkMacSystemFont can cause Chrome to crash in certain environments!`)}function Vi(e){return Array.isArray(e)&&(e.length>0?typeof e[0]==`string`:!0)}function Hi(e){return Array.isArray(e)&&(e.length>0?!Vi(e):!0)}function Ui(e,t,n,r){let{lastLineWidth:i,lines:a}=e.text.split(``).reduce((e,t)=>{let n=e[e.length-1]||``,r=n.slice(-1);return t===` `&&r!==` `||t!==` `&&r===` `?[...e,t]:[...e.slice(0,-1),`${n}${t}`]},[]).reduce((n,i)=>{r.font=e.font;let{width:a}=r.measureText(i),o=n.lastLineWidth+a;if(o<=t){let e=[...n.lines.slice(-1),i].join(``);return{lastLineWidth:o,lines:[...n.lines.slice(0,-1),e]}}if(a>t&&n.lastLineWidth===0)return{lastLineWidth:a,lines:[...n.lines.slice(0,-1),i]};let s=n.lines.slice(-1).join(``),c=[...n.lines.slice(0,-1),s.trimEnd()];return i.trim().length===0?{lastLineWidth:0,lines:[...c,``]}:{lastLineWidth:a,lines:[...c,i]}},{lastLineWidth:n,lines:[]});return{lastLineWidth:i,text:a.join(`
`)}}function Wi(e,t){let n=`OffscreenCanvas`in window,r=document.createElement(`canvas`),i=n?r.transferControlToOffscreen():r;i.width=t;let a=i.getContext(`2d`);return a?e.reduce((e,n)=>{let{lastLineWidth:r,text:i}=Ui(n,t,e.lastLineWidth,a);return{lastLineWidth:r,lines:[...e.lines,i]}},{lastLineWidth:0,lines:[]}).lines:(console.warn(`No canvas context was found, so the string was left as is!`),e.map(({text:e})=>e))}function Gi(e,t){return Hi(e)?e.map(({text:e,font:n})=>({text:qi(e),font:n||t})):Vi(e)?e.map(e=>({text:qi(e),font:t})):[{text:qi(e),font:t}]}var Ki=/(\r\n|\n|\r)/gm;function qi(e){return e.replace(Ki,` `)}function Ji(e,t,n){Bi(n);let r=Gi(e,n);return Vi(e)||Hi(e)?Wi(r,t):Wi(r,t)[0]}var Yi=Ji,Xi=Object.defineProperty,Zi=Object.getOwnPropertyDescriptor,Qi=(e,t,n,r)=>{for(var i=r>1?void 0:r?Zi(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Xi(t,n,i),i},$i=class extends D{constructor(){super(...arguments),this.editingActive=!1,this.drawingContext=R}static get styles(){return p`
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
    `}firstUpdated(e){if(super.firstUpdated(e),!this.textarea)throw Error(`Textarea not found.`);let t=this.textarea;t.addEventListener(`input`,()=>{requestAnimationFrame(()=>t.scrollTop=0),this.drawPreview()})}render(){var e,t;let{context:n,previewContext:r,text:i}=this.drawingContext;return this.style.display=i.active?`block`:`none`,this.editingActive&&!i.active&&this.commitTextBox(),this.editingActive=i.active,n&&r&&i.active&&((e=this.textarea)==null||e.focus(),(t=this.textarea)==null||t.scroll(0,0),this.drawPreview()),S`<textarea style="${this.getTextAreaStyle()}"></textarea>`}getTextAreaStyle(){let{colors:e,text:t}=this.drawingContext,{width:n,height:r,x:i,y:a,font:o,size:s,bold:c,italic:l,underline:u}=t;return`
      width: ${n}px;
      height: ${r}px;
      transform: translate(${i}px, ${a}px);
      font-family: "${o}"; 
      font-size: ${s}px;
      font-weight: ${c?`bold`:`normal`};
      font-style: ${l?`italic`:`normal`};
      text-decoration: ${u?`underline`:`none`};
      caret-color: ${e.primary};
    `}drawPreview(){this.drawingContext.previewContext&&(I(this.drawingContext.previewContext),this.drawTextBox(this.drawingContext.previewContext))}commitTextBox(){this.editingActive&&!this.drawingContext.text.active&&this.textarea&&this.drawingContext.previewContext&&this.drawingContext.context&&(this.editingActive=!1,I(this.drawingContext.previewContext),this.drawTextBox(this.drawingContext.context),this.textarea.value=``)}drawTextBox(e){let{x:t,y:n,width:r,height:i,size:a,font:o,bold:s,italic:c,underline:l}=this.drawingContext.text;this.drawingContext.drawOpaque&&(e.fillStyle=this.drawingContext.colors.secondary,e.fillRect(t??0,n??0,r??0,i??0)),e.fillStyle=this.drawingContext.colors.primary,e.font=`${c?`italic `:``}${s?`bold `:``}${a}px ${o}`;let u=(r??0)-2,d=$i.getLineHeight(e,a);(this.textarea?.value??``).split(`
`).map(t=>Yi(t,u,e.font).split(`
`)).reduce((e,t)=>e.concat(t),[]).forEach((r,o)=>{let s=(t??0)+1,c=(n??0)+a+d*o;if(!(c-(n??0)>=(i??0))&&(e.fillText(r,s,c),l)){let{width:t}=e.measureText(r);e.fillRect(s,c+1,t,1)}})}static getLineHeight(e,t){let n=e.measureText(``);return typeof n.fontBoundingBoxAscent==`number`&&typeof n.fontBoundingBoxDescent==`number`?n.fontBoundingBoxAscent+n.fontBoundingBoxDescent:t*1.2}};Qi([k()],$i.prototype,`drawingContext`,2),Qi([qe(`textarea`)],$i.prototype,`textarea`,2),$i=Qi([O(`paint-text-area`)],$i);var ea=Object.defineProperty,ta=Object.getOwnPropertyDescriptor,na=(e,t,n,r)=>{for(var i=r>1?void 0:r?ta(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ea(t,n,i),i},ra=class extends D{static get styles(){return p`
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
    `}constructor(){super(),this.addEventListener(`pointerenter`,()=>this.dispatchEvent(new CustomEvent(`set-help-text`,{detail:this.tool?.helpText??``,bubbles:!0,composed:!0}))),this.addEventListener(`pointerleave`,()=>this.dispatchEvent(new CustomEvent(`set-help-text`,{bubbles:!0,composed:!0})))}render(){return S`
      <div class="wrapper">
        <div
          class="tool"
          style="background-position: ${this.tool?.imagePosition}"
        ></div>
      </div>
    `}};na([k()],ra.prototype,`tool`,2),ra=na([O(`paint-tool`)],ra);var ia=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,oa=(e,t,n,r)=>{for(var i=r>1?void 0:r?aa(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ia(t,n,i),i},sa=class extends D{constructor(){super(...arguments),this.drawingContext=R,this.options=[{size:9,selectionWidth:17,width:11,height:10,path:`M5,1h1v2h2V1h1v4h1V4h1v2H9V5H6v1h1V5h1v1h1v1h2v1h-1v1H9v1H8V8h1V7H7v1H6v1h1v1H6V9H4v1H3V9h1V8H3V7h2V6H4v1H3V5h2V4h1V3H5v1H4v1H3V4h1V3H3V2h1v1h1V1z`},{size:17,selectionWidth:22,width:18,height:16,path:`M8,0h1v1h1V0h3v1h-3v1h1v1h1V2h1v2h1V3h1V1h1v1h-1v2h-1v1h3V3h1v2h-1v2h-1v1h1v1h-3V7h1V6h-1V5h-2v1h1v3h1v7h-4v-2h1v2h1v-1h1v1h1v-3h-1v-1h1v-1h-2V7H9v1h2V7h1v2h-1v1h1v1h-1v1H9v-2H7v1H6v1h1v2h2v1H7v-1H6v-2H5v1H3v1H2v-1h1v-1h1v-1H3v-1h2v1h1v-1H5V9H4V8h1v1h3V8H6V7H3v1H2V7h1V6h3V4H4V3h1V2h1v2h1v3h1V4h1V3h1v2h1V3h-1V2H9V1H8V0z`},{size:25,selectionWidth:24,width:24,height:24,path:`M14,0v1h-1V0v2h1v2h3v1h2V4h3v1h-1V4h-1v1h-1v2h1v1h2V7h1v1h-2v1h1v1h-1V9h-1v1h-1V9h1V8h-2V6h-1v1h-2v2h-2V8h-1v2h2V9h2V7h1v1h1v1h-1v2h7v1h-1v-1h-2v1h1v2h1v1h-1v-2h-1v-1h-1v-1h-1v1h-1v1h-1v1h1v1h2v2h4v1h-2v4h-1v-2h-6v-2h1v1h-1v1h3v-1h1v1h2v1h1v-3h1v-1h-5v-1h1v-1h-3v-3h-1v2h-1v1h1v1h-2v3h1v1h-1v1h1v1h-1v-1h-2v-1h1v1h1v-2h-2v-1H9v1H8v1h1v1h1v1H8v-1H3v-2H2v-4h1v1H2v2h1v2h1v1h2v-2H4v-2h1v-2h1v-1H5v-1h1v1h1v-1h1v-1h3v1h1v1H9v-1H8v1H7v1H6v2H5v1h1v1h2v-1h1v-1H8v-1h1v-1H8v-1h1v1h3v1H9v1h2v1h1v-2h1v-1h-1v-1h1v-2h1v-1h-1v1h-2v-1H9v-1H8v1H5v1H2v1H1v-1h1v-1h1v1h1V9H0V8h1v1h2V5h3V3H4V2h4v1H7v3H4v2h1v2h3V8H7V7H6v1H5V6h2v1h1v1h1v2h1V9h1V7H9V6H7V5h2V4h1V2H9V1h2v3h2V0H14z`}]}static get styles(){return p`
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
    `}render(){let{airbrushSize:e}=this.drawingContext;return S`
      <ul>
        ${this.options.map(({size:t,selectionWidth:n,width:r,height:i,path:a})=>S`
              <li
                class="${e===t?`selected`:``}"
                style="width: ${n}px"
                @click="${()=>this.setSize(t)}"
              >
                <svg style="width: ${r}px; height: ${i}px;">
                  <path d="${a}"></path>
                </svg>
              </li>
            `)}
      </ul>
    `}setSize(e){this.drawingContext.airbrushSize=e,N(this)}};oa([k({type:Object})],sa.prototype,`drawingContext`,2),sa=oa([O(`paint-tool-airbrush`)],sa);var ca=Object.defineProperty,la=Object.getOwnPropertyDescriptor,ua=(e,t,n,r)=>{for(var i=r>1?void 0:r?la(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ca(t,n,i),i},da=class extends D{static get styles(){return p`
      :host {
        background-color: var(--button-face);
        padding-right: 1px;
      }
    `}render(){return S`<slot></slot>`}};da=ua([O(`paint-tool-bar`)],da);var fa=Object.defineProperty,pa=Object.getOwnPropertyDescriptor,ma=(e,t,n,r)=>{for(var i=r>1?void 0:r?pa(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&fa(t,n,i),i},ha=class extends D{constructor(){super(...arguments),this.drawingContext=R}static get styles(){return p`
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
    `}render(){return S`
      ${Wt.map(e=>S` <paint-tool
          .tool=${e}
          title="${e.tooltip}"
          class="${this.drawingContext?.tool===e?`active`:``} ${e.instance?``:`unavailable`}"
          @click="${()=>this.selectTool(e)}"
        ></paint-tool>`)}
      <paint-inset-container>
        ${this.getToolHtml(this.drawingContext.tool)}
      </paint-inset-container>
    `}selectTool(e){this.drawingContext.text.active=!1,L(this.drawingContext),this.isEditingTool(this.drawingContext.tool)&&(this.drawingContext.previousEditingTool=this.drawingContext.tool),this.drawingContext.tool=e,N(this)}isEditingTool(e){return[It,Ft,zt,At,Rt,Pt,Vt,Bt,Ut].includes(e)}getToolHtml(e){return Mt===e?S` <paint-tool-color-preview
        .drawingContext="${this.drawingContext}"
      ></paint-tool-color-preview>`:[Rt,zt].includes(e)?S` <paint-tool-line-width
        .drawingContext="${this.drawingContext}"
      ></paint-tool-line-width>`:[Bt,Ht,Vt,Ut].includes(e)?S` <paint-tool-fill-style
        .drawingContext="${this.drawingContext}"
      ></paint-tool-fill-style>`:[Ot,kt,Lt].includes(e)?S` <paint-tool-draw-opaque
        .drawingContext="${this.drawingContext}"
      ></paint-tool-draw-opaque>`:At===e?S` <paint-tool-eraser-size
        .drawingContext="${this.drawingContext}"
      ></paint-tool-eraser-size>`:Ft===e?S` <paint-tool-brush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-brush>`:It===e?S` <paint-tool-airbrush
        .drawingContext="${this.drawingContext}"
      ></paint-tool-airbrush>`:Nt===e?S`TBD`:``}};ma([k()],ha.prototype,`drawingContext`,2),ma([k({attribute:!1})],ha.prototype,`tool`,2),ha=ma([O(`paint-tool-box`)],ha);var ga=Object.defineProperty,_a=Object.getOwnPropertyDescriptor,va=(e,t,n,r)=>{for(var i=r>1?void 0:r?_a(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ga(t,n,i),i},ya=class extends D{constructor(){super(...arguments),this.drawingContext=R,this.brushConfigs=[{type:`circle`,sizes:[{value:7,path:`M3,0h3v1h1v1h1v3H7v1H6v1H3V6H2V5H1V2h1V1h1z`},{value:4,path:`M3,2h2v1h1v2H5v1H3V5H2V3h1z`},{value:1,path:`M4,3h1v1h-1z`}]},{type:`square`,sizes:[{value:8,path:`M0,0H8V8H0z`},{value:5,path:`M2,1H7V6H2z`},{value:2,path:`M3,3H5V5H3z`}]},{type:`forward-diagonal`,sizes:[{value:8,path:`M8,0H7v1H6v1H5v1H4v1H3v1H2v1H1v1H0v1h1V7h1V6h1V5h1V4h1V3h1V2h1V1h1V0z`},{value:5,path:`M7,1H6v1H5v1H4v1H3v1H2v1h1V5h1V4h1V3h1V2h1z`},{value:2,path:`M3,5H4V4H5V3H4V4H3z`}]},{type:`backward-diagonal`,sizes:[{value:8,path:`M0,0h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1H7V7H6V6H5V5H4V4H3V3H2V2H1V1H0V0z`},{value:5,path:`M2,1h1v1h1v1h1v1h1v1h1v1H6V5H5V4H4V3H3V2H2z`},{value:2,path:`M3,3h1v1h1v1H4V4H3z`}]}]}static get styles(){return p`
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
    `}render(){return S`${this.brushConfigs.map(({type:e,sizes:t})=>t.map(({value:t,path:n})=>S`<div
            @click=${()=>this.onSelect(e,t)}
            class="${this.drawingContext.brush.size===t&&this.drawingContext.brush.type===e?`selected`:``}"
          ><svg viewBox="0 0 8 8"><path d="${n}"></svg>
          <div class="selection"></div>
        </div>`))}`}onSelect(e,t){this.drawingContext.brush.type=e,this.drawingContext.brush.size=t,N(this)}};va([k()],ya.prototype,`drawingContext`,2),ya=va([O(`paint-tool-brush`)],ya);var ba=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,Sa=(e,t,n,r)=>{for(var i=r>1?void 0:r?xa(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&ba(t,n,i),i},Ca=class extends D{constructor(){super(...arguments),this.drawingContext=R}static get styles(){return p`
      :host {
        display: block;
      }
    `}render(){this.style.backgroundColor=this.drawingContext?.previewColor??`transparent`}};Sa([k()],Ca.prototype,`drawingContext`,2),Ca=Sa([O(`paint-tool-color-preview`)],Ca);var wa=Object.defineProperty,Ta=Object.getOwnPropertyDescriptor,Ea=(e,t,n,r)=>{for(var i=r>1?void 0:r?Ta(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&wa(t,n,i),i},Da=class extends D{constructor(){super(...arguments),this.drawingContext=R}static get styles(){return p`
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
    `}render(){return S`
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
    `}getClasses(e){return[...e===this.drawingContext.drawOpaque?[`selected`]:[],...e?[`opaque`]:[`transparent`]].join(` `)}selectValue(e){this.drawingContext.drawOpaque=e,N(this)}};Ea([k()],Da.prototype,`drawingContext`,2),Da=Ea([O(`paint-tool-draw-opaque`)],Da);var Oa=Object.defineProperty,ka=Object.getOwnPropertyDescriptor,Aa=(e,t,n,r)=>{for(var i=r>1?void 0:r?ka(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Oa(t,n,i),i},ja=class extends D{constructor(){super(...arguments),this.drawingContext=R,this.eraserSizes=[4,6,8,10]}static get styles(){return p`
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
    `}render(){return S`
      <ul>
        ${this.eraserSizes.map(e=>S`
            <li
              class="${e===this.drawingContext.eraserSize?`selected`:``}"
              @click="${()=>this.selectSize(e)}"
            >
              <div class="selection-wrapper">
                <div class="size" style="${this.getStyle(e)}"></div>
              </div>
            </li>
          `)}
      </ul>
    `}getStyle(e){return`width: ${e}px; height: ${e}px`}selectSize(e){this.drawingContext.eraserSize=e,N(this)}};Aa([k()],ja.prototype,`drawingContext`,2),ja=Aa([O(`paint-tool-eraser-size`)],ja);var Ma=Object.defineProperty,Na=Object.getOwnPropertyDescriptor,Pa=(e,t,n,r)=>{for(var i=r>1?void 0:r?Na(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ma(t,n,i),i},Fa=class extends D{constructor(){super(...arguments),this.drawingContext=R,this.fillStyles=[{stroke:!0,fill:!1},{stroke:!0,fill:!0},{stroke:!1,fill:!0}]}static get styles(){return p`
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
    `}render(){return S`
      <ul>
        ${this.fillStyles.map(e=>S`
            <li
              class="${this.isSelected(e)?`selected`:``}"
              @click="${()=>this.onSelect(e)}"
            >
              <div class="item ${this.getClasses(e)}"></div>
            </li>
          `)}
      </ul>
    `}isSelected({stroke:e,fill:t}){return e===this.drawingContext.fillStyle.stroke&&t===this.drawingContext.fillStyle.fill}getClasses({stroke:e,fill:t}){return[...e?[`stroke`]:[],...t?[`fill`]:[]].join(` `)}onSelect(e){this.drawingContext.fillStyle=e,N(this)}};Pa([k()],Fa.prototype,`drawingContext`,2),Fa=Pa([O(`paint-tool-fill-style`)],Fa);var Ia=Object.defineProperty,La=Object.getOwnPropertyDescriptor,Ra=(e,t,n,r)=>{for(var i=r>1?void 0:r?La(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&Ia(t,n,i),i},za=class extends D{constructor(){super(...arguments),this.drawingContext=R,this.lineWidths=[1,2,3,4,5]}static get styles(){return p`
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
    `}render(){return S`
      <ul>
        ${this.lineWidths.map(e=>S` <li
            @click="${()=>this.onUpdateWidth(e)}"
            class="${this.drawingContext.lineWidth===e?`selected`:``}"
          >
            <div style="height: ${e}px"></div>
          </li>`)}
      </ul>
    `}onUpdateWidth(e){this.drawingContext.lineWidth=e,N(this)}};Ra([k()],za.prototype,`drawingContext`,2),za=Ra([O(`paint-tool-line-width`)],za);var $=t();function Ba(){let t=r(`paint`);return(0,$.jsx)($.Fragment,{children:(0,$.jsxs)(e,{pos:`absolute`,left:0,top:0,right:0,bottom:0,display:`grid`,style:{gridTemplateRows:`auto 1fr`},onContextMenu:e=>{e.stopPropagation()},children:[a()?(0,$.jsx)(e,{}):(0,$.jsxs)(i,{children:[(0,$.jsx)(e,{p:16/3,children:(0,$.jsx)(n,{manifest:t})}),(0,$.jsx)(o,{manifest:t})]}),(0,$.jsx)(e,{about:`paint`,pos:`relative`,w:`100%`,h:`100%`,style:{pointerEvents:`auto`},children:(0,$.jsx)(`paint-app`,{style:{position:`absolute`,top:0,left:0,right:0,bottom:0}})})]})})}export{Ba as default};