import{u as t,v as a,w as s}from"./index-fdfa590d.js";import{f as o}from"./LayerView2D-b1809504.js";import{d as p}from"./LayerView-2d6bbbeb.js";import"./Container-c5aca323.js";import"./EffectView-88fc1232.js";import"./definitions-b77f917a.js";import"./enums-b14466b3.js";import"./Texture-49e8f2d7.js";let e=class extends o(p){constructor(){super(...arguments),this.layer=null}attach(){}detach(){}supportsSpatialReference(r){return!0}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}update(r){}};t([a()],e.prototype,"layer",void 0),e=t([s("esri.views.2d.layers.VideoLayerView2D")],e);const h=e;export{h as default};