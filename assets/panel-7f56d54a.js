import{p as A,H as k,c as g,at as c,au as y,av as E,h as n,t as v,aw as H}from"./index-fdfa590d.js";import{c as w,u as z,d as F}from"./interactive-c63d961a.js";import{s as M,a as B,c as L}from"./loadable-2a2d3905.js";import{c as P}from"./observers-d8508c63.js";import{d as O,S as I}from"./action-menu-f113beb5.js";import{H as D}from"./focusTrapComponent-67860a68.js";import{c as T,a as $,s as N,d as R,b as _,u as K}from"./t9n-58647fac.js";import{d as W}from"./action-7e59ed9f.js";import{d as j}from"./icon-001847d5.js";import{d as U}from"./loader-6e51c251.js";import{d as G}from"./popover-26a7b513.js";import{d as q}from"./scrim-6c563638.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v1.9.1
 */const o={actionBarContainer:"action-bar-container",backButton:"back-button",container:"container",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer"},f={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right",expand:"chevron-down",collapse:"chevron-up"},r={actionBar:"action-bar",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},J=":host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{z-index:var(--calcite-app-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);border-block-end:var(--calcite-panel-header-border-block-end, 1px solid var(--calcite-ui-border-3))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-ui-border-3)}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;background-color:var(--calcite-ui-background)}.footer{display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);flex:0 0 auto;padding:var(--calcite-panel-footer-padding, 0.5rem);border-block-start:1px solid var(--calcite-ui-border-3)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-app-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}",Q=A(class extends k{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=g(this,"calcitePanelClose",6),this.calcitePanelToggle=g(this,"calcitePanelToggle",6),this.calcitePanelScroll=g(this,"calcitePanelScroll",6),this.resizeObserver=P("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.collapse=()=>{this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{this.hasStartActions=c(e)},this.handleHeaderActionsEndSlotChange=e=>{this.hasEndActions=c(e)},this.handleHeaderMenuActionsSlotChange=e=>{this.hasMenuItems=c(e)},this.handleActionBarSlotChange=e=>{const t=y(e).filter(a=>a==null?void 0:a.matches("calcite-action-bar"));t.forEach(a=>a.layout="horizontal"),this.hasActionBar=!!t.length},this.handleHeaderContentSlotChange=e=>{this.hasHeaderContent=c(e)},this.handleFooterSlotChange=e=>{this.hasFooterContent=c(e)},this.handleFooterActionsSlotChange=e=>{this.hasFooterActions=c(e)},this.handleFabSlotChange=e=>{this.hasFab=c(e)},this.setPanelScrollEl=e=>{var t,a;this.panelScrollEl=e,(t=this.resizeObserver)==null||t.disconnect(),e&&((a=this.resizeObserver)==null||a.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.collapsed=!1,this.collapseDirection="down",this.collapsible=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasActionBar=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale="",this.showHeaderContent=!1}onMessagesChange(){}connectedCallback(){w(this),T(this),$(this)}async componentWillLoad(){M(this),await N(this)}componentDidLoad(){B(this)}componentDidRender(){z(this)}disconnectedCallback(){var e;F(this),R(this),_(this),(e=this.resizeObserver)==null||e.disconnect()}effectiveLocaleChange(){K(this,this.effectiveLocale)}async setFocus(){await L(this),E(this.containerEl)}async scrollContentTo(e){var t;(t=this.panelScrollEl)==null||t.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:a,hasHeaderContent:i}=this,s=e?n(D,{class:o.heading,level:t},e):null,l=a?n("span",{class:o.description},a):null;return!i&&(s||l)?n("div",{class:o.headerContent,key:"header-content"},s,l):null}renderActionBar(){return n("div",{class:o.actionBarContainer,hidden:!this.hasActionBar},n("slot",{name:r.actionBar,onSlotchange:this.handleActionBarSlotChange}))}renderHeaderSlottedContent(){return n("div",{class:o.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},n("slot",{name:r.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return n("div",{class:{[o.headerActionsStart]:!0,[o.headerActions]:!0},hidden:!e,key:"header-actions-start"},n("slot",{name:r.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:a,collapsed:i,collapseDirection:s,collapsible:l,hasMenuItems:p}=this,{collapse:d,expand:h,close:u}=t,m=[f.expand,f.collapse];s==="up"&&m.reverse();const b=l?n("calcite-action",{"aria-expanded":v(!i),"aria-label":d,"data-test":"collapse",icon:i?m[0]:m[1],onClick:this.collapse,text:d,title:i?h:d}):null,C=a?n("calcite-action",{"aria-label":u,"data-test":"close",icon:f.close,onClick:this.close,text:u,title:u}):null,x=n("slot",{name:r.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),S=e||b||C||p;return n("div",{class:{[o.headerActionsEnd]:!0,[o.headerActions]:!0},hidden:!S,key:"header-actions-end"},x,this.renderMenu(),b,C)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:a}=this;return n("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:a,placement:"bottom-end"},n("calcite-action",{icon:f.menu,slot:I.trigger,text:t.options}),n("slot",{name:r.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:a,closable:i,collapsible:s,hasMenuItems:l,hasActionBar:p}=this,d=this.renderHeaderContent(),h=e||!!d||t||a||s||i||l;return this.showHeaderContent=h,n("header",{class:o.header,hidden:!(h||p)},n("div",{class:{[o.headerContainer]:!0,[o.headerContainerBorderEnd]:p},hidden:!h},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),d,this.renderHeaderActionsEnd()),this.renderActionBar())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,a=e||t;return n("footer",{class:o.footer,hidden:!a},n("slot",{key:"footer-slot",name:r.footer,onSlotchange:this.handleFooterSlotChange}),n("slot",{key:"footer-actions-slot",name:r.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){return n("div",{class:o.contentWrapper,hidden:this.collapsible&&this.collapsed,onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},n("slot",null),this.renderFab())}renderFab(){return n("div",{class:o.fabContainer,hidden:!this.hasFab},n("slot",{name:r.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{loading:e,panelKeyDownHandler:t,closed:a,closable:i}=this,s=n("article",{"aria-busy":v(e),class:o.container,hidden:a,onKeyDown:t,tabIndex:i?0:-1,ref:this.setContainerRef},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return n(H,null,e?n("calcite-scrim",{loading:e}):null,s)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return J}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[516],collapsed:[516],collapseDirection:[1,"collapse-direction"],collapsible:[516],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasActionBar:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],showHeaderContent:[32],setFocus:[64],scrollContentTo:[64]}]);function V(){if(typeof customElements>"u")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(t=>{switch(t){case"calcite-panel":customElements.get(t)||customElements.define(t,Q);break;case"calcite-action":customElements.get(t)||W();break;case"calcite-action-menu":customElements.get(t)||O();break;case"calcite-icon":customElements.get(t)||j();break;case"calcite-loader":customElements.get(t)||U();break;case"calcite-popover":customElements.get(t)||G();break;case"calcite-scrim":customElements.get(t)||q();break}})}V();export{Q as P,r as S,V as d};