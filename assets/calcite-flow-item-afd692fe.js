import{p as C,H as w,c,a as v,h as o,b as E}from"./index-a6c97245.js";import{c as B,u as L,d as F}from"./interactive-69210934.js";import{s as I,a as S,c as y}from"./loadable-d1c829dc.js";import{c as x,a as A,s as P,d as M,b as O,u as T}from"./t9n-16bc3599.js";import{d as $,S as s}from"./panel-1e0baa92.js";import{d as D}from"./action-4660a862.js";import{d as z}from"./action-menu-0fc28d48.js";import{d as R}from"./icon-3e71ad21.js";import{d as H}from"./loader-278c0aa3.js";import{d as _}from"./popover-da0be003.js";import{d as U}from"./scrim-2b0c0785.js";import"./key-bcbe3efc.js";import"./observers-fa6f09b5.js";import"./focusTrapComponent-2529d051.js";import"./guid-0d265cb2.js";import"./floating-ui-f7e1fd92.js";import"./debounce-fe65f68f.js";import"./openCloseComponent-fd175910.js";import"./FloatingArrow-baa446af.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.1
 */const W={backButton:"back-button"},h={backLeft:"chevron-left",backRight:"chevron-right"},a={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},j=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}calcite-panel{--calcite-panel-footer-padding:var(--calcite-flow-item-footer-padding);--calcite-panel-header-border-block-end:var(--calcite-flow-item-header-border-block-end)}:host([hidden]){display:none}[hidden]{display:none}",m=C(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=c(this,"calciteFlowItemBack",7),this.calciteFlowItemScroll=c(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=c(this,"calciteFlowItemClose",6),this.calciteFlowItemToggle=c(this,"calciteFlowItemToggle",6),this.handlePanelScroll=t=>{t.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=t=>{t.stopPropagation(),this.calciteFlowItemClose.emit()},this.handlePanelToggle=t=>{t.stopPropagation(),this.calciteFlowItemToggle.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=t=>{this.backButtonEl=t},this.setContainerRef=t=>{this.containerEl=t},this.closable=!1,this.closed=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.showBackButton=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){B(this),x(this),A(this)}async componentWillLoad(){await P(this),I(this)}componentDidRender(){L(this)}disconnectedCallback(){F(this),M(this),O(this)}componentDidLoad(){S(this)}effectiveLocaleChange(){T(this,this.effectiveLocale)}async setFocus(){await y(this);const{backButtonEl:t,containerEl:e}=this;if(t)return t.setFocus();if(e)return e.setFocus()}async scrollContentTo(t){var e;await((e=this.containerEl)==null?void 0:e.scrollContentTo(t))}renderBackButton(){const{el:t}=this,e=v(t)==="rtl",{showBackButton:n,backButtonClick:l,messages:r}=this,i=r.back,d=e?h.backRight:h.backLeft;return n?o("calcite-action",{"aria-label":i,class:W.backButton,icon:d,key:"flow-back-button",onClick:l,scale:"s",slot:"header-actions-start",text:i,title:i,ref:this.setBackRef}):null}render(){const{collapsed:t,collapseDirection:e,collapsible:n,closable:l,closed:r,description:i,disabled:d,heading:u,headingLevel:p,loading:b,menuOpen:g,messages:k}=this;return o(E,null,o("calcite-panel",{closable:l,closed:r,collapseDirection:e,collapsed:t,collapsible:n,description:i,disabled:d,heading:u,headingLevel:p,loading:b,menuOpen:g,messageOverrides:k,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,onCalcitePanelToggle:this.handlePanelToggle,ref:this.setContainerRef},this.renderBackButton(),o("slot",{name:a.actionBar,slot:s.actionBar}),o("slot",{name:a.headerActionsStart,slot:s.headerActionsStart}),o("slot",{name:a.headerActionsEnd,slot:s.headerActionsEnd}),o("slot",{name:a.headerContent,slot:s.headerContent}),o("slot",{name:a.headerMenuActions,slot:s.headerMenuActions}),o("slot",{name:a.fab,slot:s.fab}),o("slot",{name:a.footerActions,slot:s.footerActions}),o("slot",{name:a.footer,slot:s.footer}),o("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return j}},[1,"calcite-flow-item",{closable:[516],closed:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],showBackButton:[4,"show-back-button"],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function f(){if(typeof customElements>"u")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim"].forEach(e=>{switch(e){case"calcite-flow-item":customElements.get(e)||customElements.define(e,m);break;case"calcite-action":customElements.get(e)||D();break;case"calcite-action-menu":customElements.get(e)||z();break;case"calcite-icon":customElements.get(e)||R();break;case"calcite-loader":customElements.get(e)||H();break;case"calcite-panel":customElements.get(e)||$();break;case"calcite-popover":customElements.get(e)||_();break;case"calcite-scrim":customElements.get(e)||U();break}})}f();const re=m,de=f;export{re as CalciteFlowItem,de as defineCustomElement};
