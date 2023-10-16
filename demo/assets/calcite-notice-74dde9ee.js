import{lh as v,H as b,I as k,J as c,lw as l,K as t,lx as x}from"./index-646a7cf7.js";import{c as w}from"./observers-279029a9.js";import{s as C,a as z,c as y}from"./loadable-b32b8f07.js";import{c as E,a as O,d as L,b as B,s as M,u as N}from"./t9n-b62fb2bf.js";import{o as r}from"./openCloseComponent-dfd1a340.js";import{d as S}from"./icon-c29b1cab.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.1
 */const d=new Set;let n;const h={childList:!0};function q(e){n||(n=w("mutation",m)),n.observe(e.el,h)}function R(e){d.delete(e.el),m(n.takeRecords()),n.disconnect();for(const[i]of d.entries())n.observe(i,h)}function m(e){e.forEach(({target:i})=>{v(i)})}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.1
 */var a;(function(e){e.brand="lightbulb",e.danger="exclamationMarkTriangle",e.info="information",e.success="checkCircle",e.warning="exclamationMarkTriangle"})(a||(a={}));/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.1
 */const o={title:"title",message:"message",link:"link",actionsEnd:"actions-end"},s={actionsEnd:"actions-end",close:"notice-close",container:"container",content:"notice-content",icon:"notice-icon"},F=`:host([scale=s]){--calcite-notice-spacing-token-small:0.5rem;--calcite-notice-spacing-token-large:0.75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:0.5rem}:host([scale=m]){--calcite-notice-spacing-token-small:0.75rem;--calcite-notice-spacing-token-large:1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small:1rem;--calcite-notice-spacing-token-large:1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:0.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:0.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width:auto}:host([width=half]){--calcite-notice-width:50%}:host([width=full]){--calcite-notice-width:100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:none;inline-size:100%;background-color:var(--calcite-ui-foreground-1);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;max-block-size:0;text-align:start;border-inline-start:0px solid;box-shadow:0 0 0 0 transparent}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-ui-focus-offset-invert),
                1
              )
            )
          )}:host{display:flex}:host([open]) .container{pointer-events:auto;display:flex;max-block-size:100%;align-items:center;border-width:2px;opacity:1;--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0px;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0px;display:inline;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:var(--calcite-notice-spacing-token-small)}.notice-content{box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.notice-close:active{background-color:var(--calcite-ui-foreground-3)}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-ui-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-ui-brand)}:host([kind=info]) .container{border-color:var(--calcite-ui-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-ui-info)}:host([kind=danger]) .container{border-color:var(--calcite-ui-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-ui-danger)}:host([kind=success]) .container{border-color:var(--calcite-ui-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-ui-success)}:host([kind=warning]) .container{border-color:var(--calcite-ui-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-ui-warning)}:host([hidden]){display:none}[hidden]{display:none}`,g=b(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteNoticeBeforeClose=c(this,"calciteNoticeBeforeClose",6),this.calciteNoticeBeforeOpen=c(this,"calciteNoticeBeforeOpen",6),this.calciteNoticeClose=c(this,"calciteNoticeClose",6),this.calciteNoticeOpen=c(this,"calciteNoticeOpen",6),this.setTransitionEl=e=>{this.transitionEl=e},this.close=()=>{this.open=!1},this.openTransitionProp="opacity",this.open=!1,this.kind="brand",this.closable=!1,this.icon=void 0,this.iconFlipRtl=!1,this.scale="m",this.width="auto",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}openHandler(){r(this)}onMessagesChange(){}updateRequestedIcon(){this.requestedIcon=l(a,this.icon,this.kind)}connectedCallback(){q(this),E(this),O(this)}disconnectedCallback(){R(this),L(this),B(this)}async componentWillLoad(){C(this),this.requestedIcon=l(a,this.icon,this.kind),await M(this),this.open&&r(this)}componentDidLoad(){z(this)}render(){const{el:e}=this,i=t("button",{"aria-label":this.messages.close,class:s.close,onClick:this.close,ref:u=>this.closeButton=u},t("calcite-icon",{icon:"x",scale:this.scale==="l"?"m":"s"})),p=x(e,o.actionsEnd);return t("div",{class:s.container,ref:this.setTransitionEl},this.requestedIcon?t("div",{class:s.icon},t("calcite-icon",{flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:this.scale==="l"?"m":"s"})):null,t("div",{class:s.content},t("slot",{name:o.title}),t("slot",{name:o.message}),t("slot",{name:o.link})),p?t("div",{class:s.actionsEnd},t("slot",{name:o.actionsEnd})):null,this.closable?i:null)}async setFocus(){await y(this);const e=this.el.querySelector("calcite-link");if(!(!this.closeButton&&!e)){if(e)return e.setFocus();this.closeButton&&this.closeButton.focus()}}onBeforeClose(){this.calciteNoticeBeforeClose.emit()}onBeforeOpen(){this.calciteNoticeBeforeOpen.emit()}onClose(){this.calciteNoticeClose.emit()}onOpen(){this.calciteNoticeOpen.emit()}effectiveLocaleChange(){N(this,this.effectiveLocale)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{open:["openHandler"],messageOverrides:["onMessagesChange"],icon:["updateRequestedIcon"],kind:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return F}},[1,"calcite-notice",{open:[1540],kind:[513],closable:[516],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],width:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);function f(){if(typeof customElements>"u")return;["calcite-notice","calcite-icon"].forEach(i=>{switch(i){case"calcite-notice":customElements.get(i)||customElements.define(i,g);break;case"calcite-icon":customElements.get(i)||S();break}})}f();const $=g,A=f;export{$ as CalciteNotice,A as defineCustomElement};
