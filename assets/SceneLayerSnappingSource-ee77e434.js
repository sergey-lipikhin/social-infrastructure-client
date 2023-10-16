import{cW as _,jO as C,u as s,v as n,w as f,gr as S,fb as E,fc as H,bE as k,jP as x,bk as I,jQ as v,gp as O,j9 as $,a9 as R,bi as V,R as j}from"./index-a6c97245.js";import{h as L}from"./WorkerHandle-3ba564af.js";import{t as y}from"./workerHelper-49cc3bbd.js";import{f as A}from"./edgeProcessing-62c6eee5.js";import{E as P}from"./sphere-812d69dd.js";import{r as D}from"./VertexSnappingCandidate-20814018.js";import"./InterleavedLayout-ddec9a00.js";import"./BufferView-c58f8e7f.js";import"./types-1305598a.js";import"./deduplicate-058a0b05.js";import"./Indices-b766e722.js";import"./VertexAttribute-9f2e53ec.js";import"./glUtil-0b7ee6ea.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./mat3f64-221ce671.js";import"./mat4f64-65d35099.js";import"./quatf64-3363c48e.js";import"./PointSnappingHint-fcdaae39.js";class W extends L{constructor(e){super("EdgeProcessingWorker","extract",{extract:t=>[t.dataBuffer],extractComponentsEdgeLocations:t=>[t.dataBuffer],extractEdgeLocations:t=>[t.dataBuffer]},e)}async process(e,t,i){if(i)return A(e);const c=await this.invoke(new w(e),t);return this._unpackOutput(c)}async extractEdgeLocations(e,t){const i=await this.invokeMethod("extractEdgeLocations",new w(e),t);return y(i)}async extractComponentsEdgeLocations(e,t){const i=await this.invokeMethod("extractComponentsEdgeLocations",new w(e),t);return y(i)}_unpackOutput(e){return{regular:{instancesData:y(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:y(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}}}class w{constructor(e){this.dataBuffer=e.data.buffer,this.writerSettings=e.writerSettings,this.skipDeduplicate=e.skipDeduplicate,this.indices=_(e.indices)?e.indices:e.indices.buffer,this.indicesType=_(e.indices)?"Array":C(e.indices)?"Uint32Array":"Uint16Array",this.indicesLength=e.indicesLength}}let d=class extends S{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new B(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const i=e.coordinateHelper,{point:c}=e,a=z;this.renderCoordsHelper.toRenderCoords(c,i.spatialReference,a);const h=e.distance,l=typeof h=="number"?h:h.distance,p=await this._workerHandle.invoke({bounds:P(a[0],a[1],a[2],l),returnEdge:e.returnEdge,returnVertex:e.returnVertex},t);return p.candidates.sort((g,b)=>g.distance-b.distance),p.candidates.map(g=>this._convertCandidate(i,g))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new E({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new D({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const i=k();return this.renderCoordsHelper.fromRenderCoords(t,i,e),H(i)}async _fetchAllEdgeLocations(e,t){const i=[],c=[];for(const{id:a,uid:h}of e.components)this._ids.has(a)&&i.push((async()=>{const l=await this.fetchEdgeLocations(a,t.signal),p=l.locations.buffer;return c.push(p),{id:a,uid:h,objectIds:l.objectIds,locations:p,origin:l.origin,type:l.type}})());return{result:{components:(await Promise.all(i)).filter(({id:a})=>this._ids.has(a))},transferList:c}}};s([n({constructOnly:!0})],d.prototype,"renderCoordsHelper",void 0),s([n({constructOnly:!0})],d.prototype,"fetchEdgeLocations",void 0),s([n({constructOnly:!0})],d.prototype,"schedule",void 0),s([n({readOnly:!0})],d.prototype,"availability",void 0),d=s([f("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],d);class B extends L{constructor(e,t){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}const z=k();let o=class extends S{get updating(){return this.updatingHandles.updating}constructor(r){super(r),this.availability=1,this._abortController=new AbortController}destroy(){this._tracker=x(this._tracker),this._abortController=I(this._abortController)}initialize(){const{view:r}=this,e=r.resourceController;this._edgeWorker=new W(m(e)),this._workerHandle=new d({renderCoordsHelper:this.view.renderCoordsHelper,schedule:m(e),fetchEdgeLocations:async(t,i)=>{if(this._tracker==null)throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(t,this._edgeWorker,i)}}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([v(this._workerHandle),v(this._edgeWorker)])}async fetchCandidates(r,e){return this._workerHandle.fetchCandidates(r,e)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const r=O(this._abortController,t=>t.signal),e=await this.getLayerView();e==null||$(r)||(this._tracker=e.trackSnappingSources({add:(t,i)=>{this.updatingHandles.addPromise(this._workerHandle.add({id:t,bounds:i},r))},remove:t=>{this.updatingHandles.addPromise(this._workerHandle.remove({id:t},r))}}))}};function m(r){return e=>r.immediate.schedule(e)}s([n({constructOnly:!0})],o.prototype,"getLayerView",void 0),s([n({constructOnly:!0})],o.prototype,"view",void 0),s([n({readOnly:!0})],o.prototype,"updating",null),s([n({readOnly:!0})],o.prototype,"availability",void 0),o=s([f("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],o);let u=class extends R{get updating(){return this._i3sSources.some(r=>r.updating)}constructor(r){super(r),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(r=>r.destroy()),this._i3sSources.length=0}initialize(){const{view:r}=this,e=this.layerSource.layer;this._i3sSources=e.type==="building-scene"?this._getBuildingSceneI3SSources(r,e):[this._getSceneLayerI3SSource(r,e)]}async fetchCandidates(r,e){const t=await Promise.all(this._i3sSources.map(i=>i.fetchCandidates(r,e)));return V(e),t.flat()}refresh(){this._i3sSources.forEach(r=>r.refresh())}_getBuildingSceneI3SSources(r,e){return e.allSublayers.toArray().map(t=>t.type==="building-component"?new o({getLayerView:async()=>(await r.whenLayerView(e)).whenSublayerView(t),view:r}):null).filter(j)}_getSceneLayerI3SSource(r,e){return new o({getLayerView:async()=>{const t=await r.whenLayerView(e);return t.type==="scene-layer-graphics-3d"?void 0:t},view:r})}};s([n({constructOnly:!0})],u.prototype,"layerSource",void 0),s([n({constructOnly:!0})],u.prototype,"view",void 0),s([n({readOnly:!0})],u.prototype,"updating",null),s([n({readOnly:!0})],u.prototype,"availability",void 0),u=s([f("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],u);export{u as SceneLayerSnappingSource};