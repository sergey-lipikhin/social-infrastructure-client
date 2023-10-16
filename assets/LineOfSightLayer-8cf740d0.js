import{fo as j,bD as A,kI as y,u as e,v as s,aA as x,ip as $,w as d,a9 as _,kE as T,V as v,K as N,l as w,dH as O,J as L,gp as c,kJ as P,fR as H,kK as C,kL as J,kM as K,fr as M,fu as D,bd as V}from"./index-a6c97245.js";import{c as B}from"./Analysis-e91d808e.js";import{g as f}from"./persistable-4213dfbe.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-d6d3f90e.js";function R(t,i){return I(t)===I(i)}function I(t){if(t==null)return null;const i=t.layer!=null?t.layer.id:"";let n=null;return n=t.objectId!=null?t.objectId:t.layer!=null&&"objectIdField"in t.layer&&t.layer.objectIdField!=null&&t.attributes!=null?t.attributes[t.layer.objectIdField]:t.uid,n==null?null:`o-${i}-${n}`}const E={json:{write:{writer:G,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:Q}}}};function G(t,i){var n;t!=null&&((n=t.layer)==null?void 0:n.objectIdField)!=null&&t.attributes!=null&&(i.feature={layerId:t.layer.id,objectId:t.attributes[t.layer.objectIdField]})}function Q(t){if(t.layerId!=null&&t.objectId!=null)return{uid:null,layer:{id:t.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:t.objectId}}}let o=class extends j(A(_)){constructor(i){super(i),this.position=null,this.elevationInfo=null,this.feature=null}equals(i){return y(this.position,i.position)&&y(this.elevationInfo,i.elevationInfo)&&R(this.feature,i.feature)}};e([s({type:x,json:{write:{isRequired:!0}}})],o.prototype,"position",void 0),e([s({type:$}),f()],o.prototype,"elevationInfo",void 0),e([s(E)],o.prototype,"feature",void 0),o=e([d("esri.analysis.LineOfSightAnalysisObserver")],o);const F=o;let a=class extends j(T){constructor(t){super(t),this.position=null,this.elevationInfo=null,this.feature=null}equals(t){return y(this.position,t.position)&&y(this.elevationInfo,t.elevationInfo)&&R(this.feature,t.feature)}};e([s({type:x}),f()],a.prototype,"position",void 0),e([s({type:$}),f()],a.prototype,"elevationInfo",void 0),e([s(E)],a.prototype,"feature",void 0),a=e([d("esri.analysis.LineOfSightAnalysisTarget")],a);const S=a,g=v.ofType(S);let l=class extends B{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles(w(()=>this._computeExtent(),t=>{t!=null&&t.pending!=null||this._set("extent",t!=null?t.extent:null)},O))}get targets(){return this._get("targets")||new g}set targets(t){this._set("targets",L(t,this.targets,g))}get spatialReference(){return this.observer!=null&&this.observer.position!=null?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[c(this.observer,t=>t.position)]}async waitComputeExtent(){const t=this._computeExtent();return t!=null?t.pending:Promise.resolve()}_computeExtent(){const t=this.spatialReference;if(this.observer==null||this.observer.position==null||t==null)return null;const i=u=>K(u.position,u.elevationInfo)==="absolute-height",n=this.observer.position,b=P(n.x,n.y,n.z,n.x,n.y,n.z);for(const u of this.targets)if(u.position!=null){const p=H(u.position,t);if(p.pending!=null)return{pending:p.pending,extent:null};if(p.geometry!=null){const{x:z,y:k,z:q}=p.geometry;C(b,[z,k,q])}}const h=J(b,t);return i(this.observer)&&this.targets.every(i)||(h.zmin=void 0,h.zmax=void 0),{pending:null,extent:h}}clear(){this.observer=null,this.targets.removeAll()}};e([s({type:["line-of-sight"]})],l.prototype,"type",void 0),e([s({type:F,json:{read:!0,write:!0}})],l.prototype,"observer",void 0),e([s({cast:N,type:g,nonNullable:!0,json:{read:!0,write:!0}})],l.prototype,"targets",null),e([s({value:null,readOnly:!0})],l.prototype,"extent",void 0),e([s({readOnly:!0})],l.prototype,"spatialReference",null),e([s({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",null),l=e([d("esri.analysis.LineOfSightAnalysis")],l);const m=l,U=v.ofType(S);let r=class extends M(D(V)){constructor(t){super(t),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new m,this.opacity=1}initialize(){this.addHandles(w(()=>this.analysis,(t,i)=>{i!=null&&i.parent===this&&(i.parent=null),t!=null&&(t.parent=this)},O))}async load(){return this.analysis!=null&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return c(this.analysis,t=>t.observer)}set observer(t){c(this.analysis,i=>i.observer=t)}get targets(){return this.analysis!=null?this.analysis.targets:new v}set targets(t){var i;L(t,(i=this.analysis)==null?void 0:i.targets)}get fullExtent(){return this.analysis!=null?this.analysis.extent:null}get spatialReference(){return this.analysis!=null?this.analysis.spatialReference:null}releaseAnalysis(t){this.analysis===t&&(this.analysis=new m)}};e([s({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),e([s({type:["LineOfSightLayer"]})],r.prototype,"operationalLayerType",void 0),e([s({type:F,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],r.prototype,"observer",null),e([s({type:U,json:{read:!0,write:{ignoreOrigin:!0}}})],r.prototype,"targets",null),e([s({nonNullable:!0,json:{read:!1,write:!1}})],r.prototype,"analysis",void 0),e([s({readOnly:!0})],r.prototype,"fullExtent",null),e([s({readOnly:!0})],r.prototype,"spatialReference",null),e([s({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],r.prototype,"opacity",void 0),e([s({type:["show","hide"]})],r.prototype,"listMode",void 0),r=e([d("esri.layers.LineOfSightLayer")],r);const it=r;export{it as default};
