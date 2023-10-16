import{aF as v,a9 as S,x as u,ff as w,l as b,L as k,fj as E,bi as d,fk as F,fh as C,bh as A,a4 as R,aB as G,fl as y,aQ as P,aO as I,eV as O,dd as x,fm as $,u as r,v as p,w as Z,fi as z,fn as H}from"./index-a6c97245.js";import{a as L}from"./normalizeUtilsSync-377676c0.js";import{m as M}from"./FeatureStore-4e237b2f.js";import{e as W}from"./QueryEngine-415f21f1.js";import{i as j,o as q}from"./queryEngineUtils-23758920.js";import{i as g,r as T,n as m}from"./symbologySnappingCandidates-2eda3ec7.js";import"./BoundsStore-1dd527bc.js";import"./PooledRBush-2a36edb5.js";import"./optimizedFeatureQueryEngineAdapter-54c813ca.js";import"./centroid-8e8cfa47.js";import"./timeSupport-1a67ea9c.js";import"./projectionSupport-862a59d2.js";import"./json-48e3ea08.js";import"./WhereClause-46f9e1f1.js";import"./QueryEngineCapabilities-42e44ded.js";import"./quantizationUtils-13d96edf.js";import"./utils-d7f40faf.js";import"./generateRendererUtils-ca22fc71.js";import"./SnappingCandidate-970faec6.js";import"./VertexSnappingCandidate-20814018.js";import"./PointSnappingHint-fcdaae39.js";const f="graphics-collections";let a=class extends v(S){get updating(){return this.updatingHandles.updating}get _hasZ(){const e=this.view;return e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes"}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,s=e!=null&&e.type==="3d";if(!s||t.type==="map-notes")return g();const i=async(o,n)=>(await z(e.whenLayerView(t),n)).elevationAlignPointsInFeatures(o,n);return g(s,{elevationInfo:t.elevationInfo,alignPointsInFeatures:i,spatialReference:e.spatialReference})}get _snappingElevationFilter(){const{view:e}=this,t=e!=null&&e.type==="3d"&&this.layerSource.layer.type!=="map-notes";return T(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource,s=e!=null&&e.type==="3d",i=this._extrudedPolygonSymbolsCount>0;return s&&t.type!=="map-notes"&&i?m(i,async(o,n)=>{const l=await e.whenLayerView(t);return d(n),l.queryForSymbologySnapping({candidates:o,spatialReference:e.spatialReference},n)}):m()}constructor(e){super(e),this.availability=1,this._sources={multipoint:null,point:null,polygon:null,polyline:null},this._loadedWkids=new Set,this._loadedWkts=new Set,this._pendingAdds=[],this._extrudedPolygonSymbolsCount=0}destroy(){for(const e of this._pendingAdds)e.task.abort();this._pendingAdds.length=0,this._mapSources(e=>this._destroySource(e))}initialize(){this.updatingHandles.add(()=>this.getGraphicsLayers(),s=>{this.updatingHandles.removeHandles(f);for(const i of s)this._addMany(i.graphics.toArray()),this.handles.add([i.on("graphic-update",o=>this._onGraphicUpdate(o)),this.updatingHandles.addOnCollectionChange(()=>i.graphics,o=>this._onGraphicsChanged(o))],f)},u);const{view:e}=this,{layer:t}=this.layerSource;e!=null&&e.type==="3d"&&t.type!=="map-notes"&&this.addHandles([e.elevationProvider.on("elevation-change",({context:s})=>{w(s,t.elevationInfo)&&this._snappingElevationAligner.notifyElevationSourceChange()}),b(()=>t.elevationInfo,()=>this._snappingElevationAligner.notifyElevationSourceChange(),u),k(()=>t,["edits","apply-edits","graphic-update"],()=>this._symbologySnappingFetcher.notifySymbologyChange())])}async fetchCandidates(e,t){const{point:s}=e,i=await E(this._mapSources(l=>this._fetchCandidatesForSource(l,e,t)));d(t);const o=this._getGroundElevation,n=i.flat().map(l=>j(l,o));return F(s,n),n}get _getGroundElevation(){return q(this.view)}async _fetchCandidatesForSource(e,t,s){var c;const i=C(t,((c=this.view)==null?void 0:c.type)??"2d"),o=await e.queryEngine.executeQueryForSnapping(i,s);d(s);const n=await this._snappingElevationAligner.alignCandidates(o.candidates,s);d(s);const l=await this._symbologySnappingFetcher.fetch(n,s);d(s);const _=l.length===0?n:[...n,...l];return this._snappingElevationFilter.filter(i,_)}refresh(){}_onGraphicUpdate(e){if(this.getGraphicsLayers().some(t=>t.graphics.includes(e.graphic)))switch(e.property){case"geometry":case"visible":this._remove(e.graphic),this._addMany([e.graphic])}}_onGraphicsChanged(e){for(const t of e.removed)this._remove(t);this._addMany(e.added)}_addMany(e){const t=[],s=new Map;for(const i of e)i.geometry!=null&&(this._needsInitializeProjection(i.geometry.spatialReference)?(t.push(i.geometry.spatialReference),s.set(i.uid,i)):this._add(i));this._createPendingAdd(t,s)}_createPendingAdd(e,t){if(!e.length)return;const s=A(async n=>{await R(e.map(l=>({source:l,dest:this.spatialReference})),{signal:n}),this._markLoadedSpatialReferences(e);for(const[,l]of t)this._add(l)});this.updatingHandles.addPromise(s.promise);const i={task:s,graphics:t},o=()=>H(this._pendingAdds,i);s.promise.then(o,o),this._pendingAdds.push(i)}_markLoadedSpatialReferences(e){for(const t of e)t.wkid!=null&&this._loadedWkids.add(t.wkid),t.wkt!=null&&this._loadedWkts.add(t.wkt)}_add(e){if(e.geometry==null||!e.visible)return;let t=e.geometry;if(t.type==="mesh")return;t.type==="extent"&&(t=G.fromExtent(t));const s=this._ensureSource(t.type);if(s==null)return;const i=this._createOptimizedFeature(e.uid,t);i!=null&&(s.featureStore.add(i),y(e.symbol)&&this._extrudedPolygonSymbolsCount++)}_needsInitializeProjection(e){return(e.wkid==null||!this._loadedWkids.has(e.wkid))&&(e.wkt==null||!this._loadedWkts.has(e.wkt))&&!P(e,this.spatialReference)}_createOptimizedFeature(e,t){const s=I(L(t),this.spatialReference);if(!s)return null;const i=this._ensureGeometryHasZ(s),o=O(i,this._hasZ,!1);return new x(o,{[h]:e},null,e)}_ensureGeometryHasZ(e){if(!this._hasZ)return e;const t=i=>{for(;i.length<3;)i.push(0)},s=e.clone();switch(s.hasZ=!0,s.type){case"point":s.z=s.z??0;break;case"multipoint":s.points.forEach(t);break;case"polyline":s.paths.forEach(i=>i.forEach(t));break;case"polygon":s.rings.forEach(i=>i.forEach(t))}return s}_ensureSource(e){const t=this._sources[e];if(t!=null)return t;const s=this._createSource(e);return this._sources[e]=s,s}_createSource(e){const t=$.toJSON(e),s=this._hasZ,i=new M({geometryType:t,hasZ:s,hasM:!1});return{featureStore:i,queryEngine:new W({featureStore:i,fields:[{name:h,type:"esriFieldTypeOID",alias:h}],geometryType:t,hasM:!1,hasZ:s,objectIdField:h,spatialReference:this.spatialReference,scheduler:this.view!=null&&this.view.type==="3d"?this.view.resourceController.scheduler:null}),type:e}}_remove(e){this._mapSources(t=>this._removeFromSource(t,e));for(const t of this._pendingAdds)t.graphics.delete(e.uid),t.graphics.size===0&&t.task.abort()}_removeFromSource(e,t){const s=t.uid;e.featureStore.has(s)&&(e.featureStore.removeById(t.uid),y(t.symbol)&&this._extrudedPolygonSymbolsCount--)}_destroySource(e){e.queryEngine.destroy(),this._sources[e.type]=null}_mapSources(e){const{point:t,polygon:s,polyline:i,multipoint:o}=this._sources,n=[];return t!=null&&n.push(e(t)),s!=null&&n.push(e(s)),i!=null&&n.push(e(i)),o!=null&&n.push(e(o)),n}};r([p()],a.prototype,"getGraphicsLayers",void 0),r([p({constructOnly:!0})],a.prototype,"layerSource",void 0),r([p({constructOnly:!0})],a.prototype,"spatialReference",void 0),r([p({constructOnly:!0})],a.prototype,"view",void 0),r([p({readOnly:!0})],a.prototype,"updating",null),r([p({readOnly:!0})],a.prototype,"availability",void 0),r([p()],a.prototype,"_hasZ",null),r([p()],a.prototype,"_snappingElevationAligner",null),r([p()],a.prototype,"_snappingElevationFilter",null),r([p()],a.prototype,"_symbologySnappingFetcher",null),r([p()],a.prototype,"_extrudedPolygonSymbolsCount",void 0),r([p()],a.prototype,"_getGroundElevation",null),a=r([Z("esri.views.interactive.snapping.featureSources.GraphicsSnappingSource")],a);const h="OBJECTID";export{a as GraphicsSnappingSource};
