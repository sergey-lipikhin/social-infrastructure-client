import{p as P,H as w,c,t as p,aq as k,av as C,q as x,h as o,b as L,i as H}from"./index-a6c97245.js";import{f as R,c as A,d as D,a as F,r as z,F as m}from"./floating-ui-f7e1fd92.js";import{d as h,a as u,c as B,u as O,H as T}from"./focusTrapComponent-2529d051.js";import{g as S}from"./guid-0d265cb2.js";import{o as g}from"./openCloseComponent-fd175910.js";import{u as M,c as U,a as _,s as I,d as $,b as q}from"./t9n-16bc3599.js";import{i as X}from"./key-bcbe3efc.js";import{s as Y,a as j,c as K}from"./loadable-d1c829dc.js";import{c as W}from"./observers-fa6f09b5.js";import{F as G}from"./FloatingArrow-baa446af.js";import{d as J}from"./action-4660a862.js";import{d as N}from"./icon-3e71ad21.js";import{d as Q}from"./loader-278c0aa3.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.1
 */const a={container:"container",imageContainer:"image-container",closeButtonContainer:"close-button-container",closeButton:"close-button",content:"content",hasHeader:"has-header",header:"header",headerContent:"header-content",heading:"heading"},V="auto",v="aria-controls",b="aria-expanded";class Z{constructor(){this.registeredElements=new Map,this.registeredElementCount=0,this.queryPopover=e=>{const{registeredElements:i}=this,s=e.find(n=>i.has(n));return i.get(s)},this.togglePopovers=e=>{const i=e.composedPath(),s=this.queryPopover(i);s&&!s.triggerDisabled&&(s.open=!s.open),Array.from(this.registeredElements.values()).filter(n=>n!==s&&n.autoClose&&n.open&&!i.includes(n)).forEach(n=>n.open=!1)},this.keyHandler=e=>{e.defaultPrevented||(e.key==="Escape"?this.closeAllPopovers():X(e.key)&&this.togglePopovers(e))},this.clickHandler=e=>{H(e)&&this.togglePopovers(e)}}registerElement(e,i){this.registeredElementCount++,this.registeredElements.set(e,i),this.registeredElementCount===1&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,this.registeredElementCount===0&&this.removeListeners()}closeAllPopovers(){Array.from(this.registeredElements.values()).forEach(e=>e.open=!1)}addListeners(){document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("keydown",this.keyHandler,{capture:!0})}removeListeners(){document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("keydown",this.keyHandler,{capture:!0})}}const ee=":host{--calcite-floating-ui-z-index:var(--calcite-popover-z-index, var(--calcite-app-z-index-popup));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}:host([scale=s]) .heading{padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding-inline:1.25rem;padding-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host{pointer-events:none}:host([open]){pointer-events:initial}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}.heading{margin:0px;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);word-wrap:break-word;word-break:break-word}.container{position:relative;display:flex;block-size:100%;flex-direction:row;flex-wrap:nowrap;border-radius:0.25rem;color:var(--calcite-ui-text-1)}.container.has-header{flex-direction:column}.content{display:flex;block-size:100%;inline-size:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:0.25rem;border-end-end-radius:0.25rem}::slotted(calcite-panel),::slotted(calcite-flow){block-size:100%}:host([hidden]){display:none}[hidden]{display:none}",E=new Z,te=P(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePopoverBeforeClose=c(this,"calcitePopoverBeforeClose",6),this.calcitePopoverClose=c(this,"calcitePopoverClose",6),this.calcitePopoverBeforeOpen=c(this,"calcitePopoverBeforeOpen",6),this.calcitePopoverOpen=c(this,"calcitePopoverOpen",6),this.mutationObserver=W("mutation",()=>this.updateFocusTrapElements()),this.guid=`calcite-popover-${S()}`,this.openTransitionProp="opacity",this.hasLoaded=!1,this.setTransitionEl=t=>{this.transitionEl=t},this.setFilteredPlacements=()=>{const{el:t,flipPlacements:e}=this;this.filteredFlipPlacements=e?R(e,t):null},this.setUpReferenceElement=(t=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),A(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:i,effectiveReferenceElement:s}=this;t&&i&&!s&&console.warn(`${e.tagName}: reference-element id "${i}" was not found.`,{el:e}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.setExpandedAttr=()=>{const{effectiveReferenceElement:t,open:e}=this;t&&"setAttribute"in t&&t.setAttribute(b,p(e))},this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t)return;const e=this.getId();"setAttribute"in t&&t.setAttribute(v,e),E.registerElement(t,this.el),this.setExpandedAttr()},this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;t&&("removeAttribute"in t&&(t.removeAttribute(v),t.removeAttribute(b)),E.unregisterElement(t))},this.hide=()=>{this.open=!1},this.storeArrowEl=t=>{this.arrowEl=t,this.reposition(!0)},this.autoClose=!1,this.closable=!1,this.flipDisabled=!1,this.focusTrapDisabled=!1,this.pointerDisabled=!1,this.flipPlacements=void 0,this.heading=void 0,this.headingLevel=void 0,this.label=void 0,this.messageOverrides=void 0,this.messages=void 0,this.offsetDistance=D,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement=V,this.referenceElement=void 0,this.scale="m",this.triggerDisabled=!1,this.effectiveLocale="",this.floatingLayout="vertical",this.effectiveReferenceElement=void 0,this.defaultMessages=void 0}handleFocusTrapDisabled(t){this.open&&(t?h(this):u(this))}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}onMessagesChange(){}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(t){g(this),t&&this.reposition(!0),this.setExpandedAttr()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement(),this.reposition(!0)}effectiveLocaleChange(){M(this,this.effectiveLocale)}connectedCallback(){this.setFilteredPlacements(),U(this),_(this),this.setUpReferenceElement(this.hasLoaded),B(this),this.open&&g(this)}async componentWillLoad(){await I(this),Y(this)}componentDidLoad(){j(this),this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),$(this),q(this),F(this,this.effectiveReferenceElement,this.el),h(this)}async reposition(t=!1){const{el:e,effectiveReferenceElement:i,placement:s,overlayPositioning:n,flipDisabled:d,filteredFlipPlacements:r,offsetDistance:l,offsetSkidding:f,arrowEl:y}=this;return z(this,{floatingEl:e,referenceEl:i,overlayPositioning:n,placement:s,flipDisabled:d,flipPlacements:r,offsetDistance:l,offsetSkidding:f,arrowEl:y,type:"popover"},t)}async setFocus(){await K(this),k(this.el),C(this.el)}async updateFocusTrapElements(){O(this)}getReferenceElement(){const{referenceElement:t,el:e}=this;return(typeof t=="string"?x(e,{id:t}):t)||null}onBeforeOpen(){this.calcitePopoverBeforeOpen.emit()}onOpen(){this.calcitePopoverOpen.emit(),u(this)}onBeforeClose(){this.calcitePopoverBeforeClose.emit()}onClose(){this.calcitePopoverClose.emit(),h(this)}renderCloseButton(){const{messages:t,closable:e}=this;return e?o("div",{class:a.closeButtonContainer,key:a.closeButtonContainer},o("calcite-action",{appearance:"transparent",class:a.closeButton,onClick:this.hide,scale:this.scale,text:t.close,ref:i=>this.closeButtonEl=i},o("calcite-icon",{icon:"x",scale:this.scale==="l"?"m":this.scale}))):null}renderHeader(){const{heading:t,headingLevel:e}=this,i=t?o(T,{class:a.heading,level:e},t):null;return i?o("div",{class:a.header,key:a.header},i,this.renderCloseButton()):null}render(){const{effectiveReferenceElement:t,heading:e,label:i,open:s,pointerDisabled:n,floatingLayout:d}=this,r=t&&s,l=!r,f=n?null:o(G,{floatingLayout:d,key:"floating-arrow",ref:this.storeArrowEl});return o(L,{"aria-hidden":p(l),"aria-label":i,"aria-live":"polite","calcite-hydrated-hidden":l,id:this.getId(),role:"dialog"},o("div",{class:{[m.animation]:!0,[m.animationActive]:r},ref:this.setTransitionEl},f,o("div",{class:{[a.hasHeader]:!!e,[a.container]:!0}},this.renderHeader(),o("div",{class:a.content},o("slot",null)),e?null:this.renderCloseButton())))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{focusTrapDisabled:["handleFocusTrapDisabled"],flipPlacements:["flipPlacementsHandler"],messageOverrides:["onMessagesChange"],offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return ee}},[1,"calcite-popover",{autoClose:[516,"auto-close"],closable:[516],flipDisabled:[516,"flip-disabled"],focusTrapDisabled:[516,"focus-trap-disabled"],pointerDisabled:[516,"pointer-disabled"],flipPlacements:[16],heading:[1],headingLevel:[514,"heading-level"],label:[1],messageOverrides:[1040],messages:[1040],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[1540],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],scale:[513],triggerDisabled:[516,"trigger-disabled"],effectiveLocale:[32],floatingLayout:[32],effectiveReferenceElement:[32],defaultMessages:[32],reposition:[64],setFocus:[64],updateFocusTrapElements:[64]}]);function ie(){if(typeof customElements>"u")return;["calcite-popover","calcite-action","calcite-icon","calcite-loader"].forEach(e=>{switch(e){case"calcite-popover":customElements.get(e)||customElements.define(e,te);break;case"calcite-action":customElements.get(e)||J();break;case"calcite-icon":customElements.get(e)||N();break;case"calcite-loader":customElements.get(e)||Q();break}})}ie();export{ie as d};
