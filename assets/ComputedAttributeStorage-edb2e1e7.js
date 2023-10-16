import{M as c,de as U,eW as $,gg as j,gk as M,N as H,eY as P,kR as L,al as D,eZ as Z,kS as _,kT as Y,hf as J,s as Q,kU as V,go as q,bn as W,m as N,ae as C,kV as X,kW as K,b7 as tt,gp as et,ao as st}from"./index-a6c97245.js";import{T as rt}from"./arcadeTimeUtils-69f0c442.js";import{t as it}from"./centroid-8e8cfa47.js";import{V as nt,W as at,S as ot,t as R,Q as ht,R as ut}from"./definitions-93bd9194.js";import{c as dt,u as lt,f as p,e as ct,i as _t,n as ft,l as gt,a as pt,s as O,b as u}from"./visualVariablesUtils-78808dfe.js";import{W as mt}from"./color-070b46a1.js";import{U as f}from"./enums-b14466b3.js";class y{static fromBuffer(t,e){return new y(t,e)}static create(t,e=4294967295){const s=new Uint32Array(Math.ceil(t/32));return new y(s,e)}constructor(t,e){this._mask=0,this._buf=t,this._mask=e}_getIndex(t){return Math.floor(t/32)}has(t){const e=this._mask&t;return!!(this._buf[this._getIndex(e)]&1<<e%32)}hasRange(t,e){let s=t,r=e;for(;s%32&&s!==r;){if(this.has(s))return!0;s++}for(;r%32&&s!==r;){if(this.has(s))return!0;r--}if(s===r)return!1;for(let i=s/32;i!==r/32;i++)if(this._buf[i])return!0;return!1}set(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]|=r}setRange(t,e){let s=t,r=e;for(;s%32&&s!==r;)this.set(s++);for(;r%32&&s!==r;)this.set(r--);if(s!==r)for(let i=s/32;i!==r/32;i++)this._buf[i]=4294967295}unset(t){const e=this._mask&t,s=this._getIndex(e),r=1<<e%32;this._buf[s]&=4294967295^r}resize(t){const e=this._buf,s=new Uint32Array(Math.ceil(t/32));s.set(e),this._buf=s}or(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=t._buf[e];return this}and(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=t._buf[e];return this}xor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=t._buf[e];return this}ior(t){for(let e=0;e<this._buf.length;e++)this._buf[e]|=~t._buf[e];return this}iand(t){for(let e=0;e<this._buf.length;e++)this._buf[e]&=~t._buf[e];return this}ixor(t){for(let e=0;e<this._buf.length;e++)this._buf[e]^=~t._buf[e];return this}any(){for(let t=0;t<this._buf.length;t++)if(this._buf[t])return!0;return!1}copy(t){for(let e=0;e<this._buf.length;e++)this._buf[e]=t._buf[e];return this}clone(){return new y(this._buf.slice(),this._mask)}clear(){for(let t=0;t<this._buf.length;t++)this._buf[t]=0}forEachSet(t){for(let e=0;e<this._buf.length;e++){let s=this._buf[e],r=32*e;if(s)for(;s;)1&s&&t(r),s>>>=1,r++}}countSet(){let t=0;return this.forEachSet(e=>{t++}),t}}let b=0;const z=c("featurelayer-simplify-thresholds")??[.5,.5,.5,.5],yt=z[0],xt=z[1],bt=z[2],It=z[3],k=c("featurelayer-simplify-payload-size-factors")??[1,2,4],St=k[0],Tt=k[1],At=k[2],zt=c("featurelayer-simplify-mobile-factor")??2,Ft=c("esri-mobile");let v=class{constructor(t,e){this.type="FeatureSetReader",this.arcadeDeclaredClass="esri.arcade.Feature",this.seen=!1,this.instance=0,this._tx=0,this._ty=0,this._sx=1,this._sy=1,this._deleted=null,this._joined=[],this._objectIdToIndex=null,this._level=0,this._datetimeMetadata=null,this.contextTimeReference=null,this.instance=t,this._layerSchema=e}static createInstance(){return b++,b=b>65535?0:b,b}get isEmpty(){return this._deleted!=null&&this._deleted.countSet()===this.getSize()}set level(t){this._level=t}getAreaSimplificationThreshold(t,e){let s=1;const r=Ft?zt:1;e>4e6?s=At*r:e>1e6?s=Tt*r:e>5e5?s=St*r:e>1e5&&(s=r);let i=0;t>4e3?i=It*s:t>2e3?i=bt*s:t>100?i=xt:t>15&&(i=yt);let n=8;return this._level<4?n=1:this._level<5?n=2:this._level<6&&(n=4),i*n}createQuantizedExtrudedQuad(t,e){return new U([5],[t-1,e,1,-1,1,1,-1,1,-1,-1])}parseTimestampOffset(t){return t}setArcadeSpatialReference(t){this._arcadeSpatialReference=t}attachStorage(t){this._storage=t}getQuantizationTransform(){throw new Error("Unable to find transform for featureSet")}getStorage(){return this._storage}getComputedNumeric(t){return this.getComputedNumericAtIndex(0)}setComputedNumeric(t,e){return this.setComputedNumericAtIndex(e,0)}getComputedString(t){return this.getComputedStringAtIndex(0)}setComputedString(t,e){return this.setComputedStringAtIndex(0,e)}getComputedNumericAtIndex(t){return this._storage.getComputedNumericAtIndex(this.getDisplayId(),t)}setComputedNumericAtIndex(t,e){this._storage.setComputedNumericAtIndex(this.getDisplayId(),t,e)}getComputedStringAtIndex(t){return this._storage.getComputedStringAtIndex(this.getDisplayId(),t)}setComputedStringAtIndex(t,e){return this._storage.setComputedStringAtIndex(this.getDisplayId(),t,e)}transform(t,e,s,r){const i=this.copy();return i._tx+=t,i._ty+=e,i._sx*=s,i._sy*=r,i}readAttribute(t,e=!1){const s=this._readAttribute(t,e);if(s!==void 0)return s;for(const r of this._joined){r.setIndex(this.getIndex());const i=r._readAttribute(t,e);if(i!==void 0)return i}}readAttributes(){const t=this._readAttributes();for(const e of this._joined){e.setIndex(this.getIndex());const s=e._readAttributes();for(const r of Object.keys(s))t[r]=s[r]}return t}joinAttributes(t){this._joined.push(t)}readArcadeFeature(){return this}hasField(t){return this.fields.has(t)}geometry(){const t=this.readHydratedGeometry(),e=$(t,this.geometryType,this.hasZ,this.hasM),s=j(e);return s&&(s.spatialReference=this._arcadeSpatialReference),s}get dateTimeReferenceFieldIndex(){return this._datetimeMetadata||(this._datetimeMetadata=rt.create(this._layerSchema.fields,this._layerSchema)),this._datetimeMetadata}autocastArcadeDate(t,e){var s;return e&&e instanceof Date?this.isUnknownDateTimeField(t)?M.unknownDateJSToArcadeDate(e):M.dateJSAndZoneToArcadeDate(e,((s=this.contextTimeReference)==null?void 0:s.timeZone)??"system"):e}isUnknownDateTimeField(t){var e;return((e=this.dateTimeReferenceFieldIndex)==null?void 0:e.fieldTimeZone(t))==="unknown"}fieldSourceTimeZone(t){var e;return((e=this.dateTimeReferenceFieldIndex)==null?void 0:e.fieldTimeZone(t))??""}get layerPreferredTimeZone(){var t;return((t=this.dateTimeReferenceFieldIndex)==null?void 0:t.layerPreferredTimeZone)??""}field(t){if(this.hasField(t))return this.autocastArcadeDate(t,this.readAttribute(t,!0));for(const e of this._joined)if(e.setIndex(this.getIndex()),e.hasField(t)){const s=e._readAttribute(t,!0);return this.autocastArcadeDate(t,s)}throw new Error(`Field ${t} does not exist`)}setField(t,e){throw new Error("Unable to update feature attribute values, feature is readonly")}keys(){return this.fields.fields.map(t=>t.name)}castToText(t=!1){if(!t)return JSON.stringify(this.readLegacyFeature());const e=this.readLegacyFeature();if(!e)return JSON.stringify(null);const s={geometry:e.geometry,attributes:{...e.attributes??{}}};for(const r in s.attributes){const i=s.attributes[r];i instanceof Date&&(s.attributes[r]=i.getTime())}return JSON.stringify(s)}gdbVersion(){return null}fullSchema(){return this._layerSchema}castAsJson(t=null){var e;return{attributes:this._readAttributes(),geometry:(t==null?void 0:t.keepGeometryType)===!0?this.geometry():((e=this.geometry())==null?void 0:e.toJSON())??null}}castAsJsonAsync(t=null,e=null){return Promise.resolve(this.castAsJson(e))}removeIds(t){if(this._objectIdToIndex==null){const s=new Map,r=this.getCursor();for(;r.next();){const i=H(r.getObjectId());s.set(i,r.getIndex())}this._objectIdToIndex=s}const e=this._objectIdToIndex;for(const s of t)e.has(s)&&this.removeAtIndex(e.get(s))}removeAtIndex(t){this._deleted==null&&(this._deleted=y.create(this.getSize())),this._deleted.set(t)}readGeometryForDisplay(){return this.readUnquantizedGeometry(!0)}readLegacyGeometryForDisplay(){return this.readLegacyGeometry(!0)}*features(){const t=this.getCursor();for(;t.next();)yield t.readOptimizedFeature()}_getExists(){return this._deleted==null||!this._deleted.has(this.getIndex())}_computeCentroid(){if(this.geometryType!=="esriGeometryPolygon")return null;const t=this.readUnquantizedGeometry();if(!t||t.hasIndeterminateRingOrder)return null;const e=this.getQuantizationTransform()??null;return it(new U,t,this.hasM,this.hasZ,e)}copyInto(t){t.seen=this.seen,t._storage=this._storage,t._arcadeSpatialReference=this._arcadeSpatialReference,t._joined=this._joined,t._tx=this._tx,t._ty=this._ty,t._sx=this._sx,t._sy=this._sy,t._deleted=this._deleted,t._objectIdToIndex=this._objectIdToIndex}};function Ct({coords:d,lengths:t}){let e=0;for(const s of t){for(let r=1;r<s;r++)d[2*(e+r)]+=d[2*(e+r)-2],d[2*(e+r)+1]+=d[2*(e+r)-1];e+=s}}let Ot=class g extends v{static fromFeatures(t,e){const{objectIdField:s,geometryType:r}=e,i=P([],t,r,!1,!1,s);for(let n=0;n<i.length;n++)i[n].displayId=t[n].displayId;return g.fromOptimizedFeatures(i,e)}static fromFeatureSet(t,e){const s=L(t,e.objectIdField);return g.fromOptimizedFeatureSet(s,e)}static fromOptimizedFeatureSet(t,e){const{features:s}=t,r=g.fromOptimizedFeatures(s,e);return r._exceededTransferLimit=t.exceededTransferLimit,r._transform=t.transform,r._fieldsIndex=new D(e.fields),r}static fromOptimizedFeatures(t,e,s){const r=v.createInstance(),i=new g(r,t,e);return i._fieldsIndex=new D(e.fields),i._transform=s,i}constructor(t,e,s){super(t,s),this._exceededTransferLimit=!1,this._featureIndex=-1,this._fieldsIndex=null,this._geometryType=s==null?void 0:s.geometryType,this._features=e}get fields(){return this._fieldsIndex}get _current(){return this._features[this._featureIndex]}get geometryType(){return this._geometryType}get hasFeatures(){return!!this._features.length}get hasNext(){return this._featureIndex+1<this._features.length}get exceededTransferLimit(){return this._exceededTransferLimit}get hasZ(){return!1}get hasM(){return!1}removeIds(t){const e=new Set(t);this._features=this._features.filter(s=>!(s.objectId!=null&&e.has(s.objectId)))}append(t){for(const e of t)this._features.push(e)}getSize(){return this._features.length}getCursor(){return this.copy()}getQuantizationTransform(){return this._transform}getAttributeHash(){let t="";for(const e in this._current.attributes)t+=this._current.attributes[e];return t}getIndex(){return this._featureIndex}setIndex(t){this._featureIndex=t}getObjectId(){var t;return(t=this._current)==null?void 0:t.objectId}getDisplayId(){return this._current.displayId}setDisplayId(t){this._current.displayId=t}getGroupId(){return this._current.groupId}setGroupId(t){this._current.groupId=t}copy(){const t=new g(this.instance,this._features,this.fullSchema());return this.copyInto(t),t}next(){for(;++this._featureIndex<this._features.length&&!this._getExists(););return this._featureIndex<this._features.length}readLegacyFeature(){return Z(this._current,this.geometryType,this.hasZ,this.hasM)}readOptimizedFeature(){return this._current}readLegacyPointGeometry(){return this.readGeometry()?{x:this.getX(),y:this.getY()}:null}readLegacyGeometry(){const t=this.readUnquantizedGeometry();return $(t,this.geometryType,this.hasZ,this.hasM)}readLegacyCentroid(){const t=this.readCentroid();return t==null?null:{x:t.coords[0]*this._sx+this._tx,y:t.coords[1]*this._sy+this._ty}}readGeometryArea(){return _(this._current)?Y(this._current.geometry,2):0}readUnquantizedGeometry(){const t=this.readGeometry();if(this.geometryType==="esriGeometryPoint"||!t)return t;const e=t.clone();return Ct(e),e}readHydratedGeometry(){const t=this._current.geometry;if(t==null)return null;const e=t.clone();return this._transform!=null&&J(e,e,this.hasZ,this.hasM,this._transform),e}getXHydrated(){if(!_(this._current))return 0;const t=this._current.geometry.coords[0],e=this.getQuantizationTransform();return e==null?t:t*e.scale[0]+e.translate[0]}getYHydrated(){if(!_(this._current))return 0;const t=this._current.geometry.coords[1],e=this.getQuantizationTransform();return e==null?t:e.translate[1]-t*e.scale[1]}getX(){return _(this._current)?this._current.geometry.coords[0]*this._sx+this._tx:0}getY(){return _(this._current)?this._current.geometry.coords[1]*this._sy+this._ty:0}readGeometry(){if(!_(this._current)){if(this._current.centroid!=null){const[s,r]=this._current.centroid.coords;return this.createQuantizedExtrudedQuad(s,r)}return null}const t=this._current.geometry.clone();if(t.isPoint)return t.coords[0]=t.coords[0]*this._sx+this._tx,t.coords[1]=t.coords[1]*this._sy+this._ty,t;let e=0;for(const s of t.lengths)t.coords[2*e]=t.coords[2*e]*this._sx+this._tx,t.coords[2*e+1]=t.coords[2*e+1]*this._sy+this._ty,e+=s;return t}readCentroid(){return _(this._current)?this._computeCentroid():this._current.centroid}_readAttribute(t,e){var i;const s=this._fieldsIndex.get(t);if(!s)return;let r=this._current.attributes[s.name];return r==null?r:(((i=this.fields.get(t))==null?void 0:i.type)==="esriFieldTypeTimestampOffset"&&(r=this.parseTimestampOffset(r)),e&&this.fields.isDateField(t)?new Date(r):r)}copyInto(t){super.copyInto(t),t._featureIndex=this._featureIndex,t._transform=this._transform,t._fieldsIndex=this._fieldsIndex}_readAttributes(){return this._current.attributes}};const m=Q.getLogger("esri.views.layers.2d.features.support.AttributeStore"),T=ft(gt,m),I={sharedArrayBuffer:c("esri-shared-array-buffer"),atomics:c("esri-atomics")};function w(d,t){return e=>t(d(e))}class wt{constructor(t,e,s,r){this.size=0,this.texelSize=4,this.dirtyStart=0,this.dirtyEnd=0;const{pixelType:i,layout:n,textureOnly:a}=r;this.textureOnly=a||!1,this.pixelType=i,this._ctype=e,this.layout=n,this._resetRange(),this._shared=t,this.size=s,a||(this.data=this._initData(i,s,t,e))}get buffer(){return et(this.data,t=>t.buffer)}unsetComponentAllTexels(t,e){const s=this.data;for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]&=~e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponentAllTexels(t,e){const s=this.data;for(let r=0;r<this.size*this.size;r++)s[r*this.texelSize+t]|=255&e;this.dirtyStart=0,this.dirtyEnd=this.size*this.size-1}setComponent(t,e,s){const r=this.data;for(const i of s)r[i*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,i),this.dirtyEnd=Math.max(this.dirtyEnd,i)}setComponentTexel(t,e,s){this.data[s*this.texelSize+t]|=e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}unsetComponentTexel(t,e,s){this.data[s*this.texelSize+t]&=~e,this.dirtyStart=Math.min(this.dirtyStart,s),this.dirtyEnd=Math.max(this.dirtyEnd,s)}getData(t,e){const s=p(t);return this.data[s*this.texelSize+e]}setData(t,e,s){const r=p(t),i=1<<e;this.layout&i?this.data!=null&&(this.data[r*this.texelSize+e]=s,this.dirtyStart=Math.min(this.dirtyStart,r),this.dirtyEnd=Math.max(this.dirtyEnd,r)):m.error("mapview-attributes-store","Tried to set a value for a texel's readonly component")}lock(){this.pixelType===f.UNSIGNED_BYTE&&this._shared&&I.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,1)}unlock(){this.pixelType===f.UNSIGNED_BYTE&&this._shared&&I.atomics&&this._ctype!=="local"&&Atomics.store(this.data,0,0)}expand(t){if(this.size=t,!this.textureOnly){const e=this._initData(this.pixelType,t,this._shared,this._ctype),s=this.data;e.set(s),this.data=e}}toMessage(){const t=this.dirtyStart,e=this.dirtyEnd,s=this.texelSize;if(t>e)return null;this._resetRange();const r=!(this._shared||this._ctype==="local"),i=this.pixelType,n=this.layout,a=this.data;return{start:t,end:e,data:r&&a.slice(t*s,(e+1)*s)||null,pixelType:i,layout:n}}_initData(t,e,s,r){const i=s&&r!=="local"?SharedArrayBuffer:ArrayBuffer,n=mt(t),a=new n(new i(e*e*4*n.BYTES_PER_ELEMENT));for(let h=0;h<a.length;h+=4)a[h+1]=255;return a}_resetRange(){this.dirtyStart=2147483647,this.dirtyEnd=0}}class Bt{constructor(t,e){this._client=t,this.config=e,this.updatingHandles=new V,this._blocks=new Array,this._filters=new Array(nt),this._attributeComputeInfo=null,this._targetType=0,this._abortController=new AbortController,this._hasScaleExpr=!1,this._size=32,this._nextUpdate=null,this._currUpdate=null,this._idsToHighlight=new Set;const s=e.supportsTextureFloat?f.FLOAT:f.UNSIGNED_BYTE;T(`Creating AttributeStore ${I.sharedArrayBuffer?"with":"without"} shared memory`),this._blockDescriptors=[{pixelType:f.UNSIGNED_BYTE,layout:1},{pixelType:f.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:f.UNSIGNED_BYTE,layout:15,textureOnly:!0},{pixelType:s,layout:15},{pixelType:s,layout:15},{pixelType:s,layout:15},{pixelType:s,layout:15}],this._blocks=this._blockDescriptors.map(()=>null)}destroy(){this._abortController.abort(),this.updatingHandles.destroy()}get hasScaleExpr(){return this._hasScaleExpr}get _signal(){return this._abortController.signal}get hasHighlight(){return this._idsToHighlight.size>0}isUpdating(){const t=this.updatingHandles.updating||!!this._nextUpdate;return c("esri-2d-log-updating")&&console.log(`Updating AttributeStore: ${t}
  -> updatingHandles ${this.updatingHandles.updating} (currUpdate: ${!!this._currUpdate})
  -> nextUpdate: ${!!this._nextUpdate}
`),t}update(t,e){this.config=e;const s=e.schema.processors[0].storage,r=q(this._schema,s);if((t.targets.feature||t.targets.aggregate)&&(t.storage.data=!0),r&&(c("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:",r),t.storage.data=!0,this._schema=s,this._attributeComputeInfo=null,s!=null)){switch(s.target){case"feature":this._targetType=lt;break;case"aggregate":this._targetType=dt}if(s.type==="subtype"){this._attributeComputeInfo={isSubtype:!0,subtypeField:s.subtypeField,map:new Map};for(const i in s.mapping){const n=s.mapping[i];if(n!=null&&n.vvMapping!=null)for(const a of n.vvMapping)this._bindAttribute(a,parseInt(i,10))}}else{if(this._attributeComputeInfo={isSubtype:!1,map:new Map},s.vvMapping!=null)for(const i of s.vvMapping)this._bindAttribute(i);if(s.attributeMapping!=null)for(const i of s.attributeMapping)this._bindAttribute(i)}}}onTileData(t,e){if(e.addOrUpdate==null)return;const s=e.addOrUpdate.getCursor();for(;s.next();){const r=s.getDisplayId();this.setAttributeData(r,s)}}async setHighlight(t,e){const r=this._getBlock(0),i=e.map(n=>p(n));r.lock(),r.unsetComponentAllTexels(0,1),r.setComponent(0,1,i),r.unlock(),this._idsToHighlight.clear();for(const n of t)this._idsToHighlight.add(n);await this.sendUpdates()}async updateFilters(t,e,s){c("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters");const{service:r,spatialReference:i}=s,{filters:n}=e,a=n.map((o,l)=>this._updateFilter(o,l,r,i)),h=(await Promise.all(a)).some(o=>o);c("esri-2d-update-debug")&&console.debug("AttributeStore::updateFilters - finsihed"),h&&(t.storage.filters=!0,c("esri-2d-update-debug")&&console.debug("Applying Update - AttributeStore:","Filters changed"))}setData(t,e,s,r){const i=p(t);this._ensureSizeForTexel(i),this._getBlock(e).setData(t,s,r)}getData(t,e,s){return this._getBlock(e).getData(t,s)}getHighlightFlag(t){return this._idsToHighlight.has(t)?at:0}unsetAttributeData(t){const e=p(t);this._getBlock(0).setData(e,0,0)}setAttributeData(t,e){const s=p(t);if(this._ensureSizeForTexel(s),this._getBlock(0).setData(s,0,this.getFilterFlags(e)),this._targetType!==ct(t))return;const r=this._attributeComputeInfo,i=this.config.supportsTextureFloat?1:2,n=4;let a=null;r&&(a=r.isSubtype?r.map.get(e.readAttribute(r.subtypeField)):r.map,a&&a.size&&a.forEach((h,o)=>{const l=o*i%n,S=Math.floor(o*i/n),x=this._getBlock(S+ot),F=h(e);if(this.config.supportsTextureFloat)x.setData(s,l,F);else if(F===R)x.setData(s,l,255),x.setData(s,l+1,255);else{const E=st(Math.round(F),-32767,32766)+32768,B=255&E,G=(65280&E)>>8;x.setData(s,l,B),x.setData(s,l+1,G)}}))}sendUpdates(){if(c("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate"),this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=W(),this.updatingHandles.addPromise(this._nextUpdate.promise),this._nextUpdate.promise;const t={blocks:this._blocks.map(e=>e!=null?e.toMessage():null)};return this._currUpdate=this._createResources().then(()=>{const e=()=>{if(this._currUpdate=null,this._nextUpdate){const r=this._nextUpdate;this._nextUpdate=null,this.sendUpdates().then(()=>r.resolve())}else c("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::No additional updates queued")};c("esri-2d-update-debug")&&console.debug("AttributeStore::sendUpdate::client.update");const s=this.updatingHandles.addPromise(this._client.update(t,this._signal).then(e).catch(e));return this._client.render(this._signal),s}).catch(e=>{if(N(e))return this._createResourcesPromise=null,this._createResources();m.error(new C("mapview-attribute-store","Encountered an error during client update",e))}),this._currUpdate}_ensureSizeForTexel(t){for(;t>=this._size*this._size;)if(this._expand())return}_bindAttribute(t,e){function s(){const{normalizationField:o}=t;return o?l=>{const S=l.readAttribute(o);return S?l.readAttribute(t.field)/S:null}:l=>l.readAttribute(t.field)}function r(){return t.normalizationField&&m.warn("mapview-arcade","Ignoring normalizationField specified with an arcade expression which is not supported."),o=>o.getComputedNumericAtIndex(t.fieldIndex)}let i;if(t.fieldIndex!=null)i=r();else{if(!t.field)return;i=s()}const{valueRepresentation:n}=t;n&&(i=w(i,o=>pt(o,n)));const a=o=>o===null||isNaN(o)||o===1/0||o===-1/0?R:o,h=this._attributeComputeInfo;if(h.isSubtype){const o=h.map.get(e)??new Map;o.set(t.binding,w(i,a)),h.map.set(e,o)}else h.map.set(t.binding,w(i,a))}_createResources(){if(this._createResourcesPromise!=null)return this._createResourcesPromise;this._getBlock(ht),this._getBlock(ut),T("Initializing AttributeStore");const t={shared:I.sharedArrayBuffer&&this._client.type!=="local",size:this._size,blocks:X(this._blocks,s=>({textureOnly:s.textureOnly,buffer:s.buffer,pixelType:s.pixelType}))},e=this._client.initialize(t,this._signal).catch(s=>{N(s)?this._createResourcesPromise=null:m.error(new C("mapview-attribute-store","Encountered an error during client initialization",s))});return this._createResourcesPromise=e,e.then(()=>this._createResourcesPromise==null?this._createResources():void 0),e}_getBlock(t){const e=this._blocks[t];if(e!=null)return e;T(`Initializing AttributeBlock at index ${t}`);const s=I.sharedArrayBuffer,r=this._client.type,i=new wt(s,r,this._size,this._blockDescriptors[t]);return this._blocks[t]=i,this._createResourcesPromise=null,i}_expand(){if(this._size<this.config.maxTextureSize){const t=this._size<<=1;return T("Expanding block size to",t,this._blocks),K(this._blocks,e=>e.expand(t)),this._createResourcesPromise=null,this._size=t,0}return m.error(new C("mapview-limitations","Maximum number of onscreen features exceeded.")),-1}async _updateFilter(t,e,s,r){const i=this._filters[e],n=i!=null&&i.hash;if(!i&&!t||n===JSON.stringify(t))return!1;if(t==null){if(!i)return!1;const h=1<<e+1,o=this._getBlock(0);return this._filters[e]=null,o.setComponentAllTexels(0,h),this.sendUpdates(),!0}return await(await this._getFilter(e,s)).update(t,r),!0}async _getFilter(t,e){const s=this._filters[t];if(s!=null)return s;const{default:r}=await tt(()=>import("./FeatureFilter-896e558c.js"),["assets/FeatureFilter-896e558c.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css","assets/timeSupport-1a67ea9c.js","assets/projectionSupport-862a59d2.js","assets/json-48e3ea08.js","assets/FeatureStore2D-72805f34.js","assets/CircularArray-ef508845.js","assets/arcadeTimeUtils-69f0c442.js","assets/centroid-8e8cfa47.js","assets/definitions-93bd9194.js","assets/visualVariablesUtils-78808dfe.js","assets/color-070b46a1.js","assets/enums-f1a6a48a.js","assets/enums-b14466b3.js","assets/VertexElementDescriptor-2925c6af.js","assets/number-e491b09e.js"]),i=new r({geometryType:e.geometryType,hasM:!1,hasZ:!1,timeInfo:e.timeInfo,fieldsIndex:new D(e.fields)});return this._filters[t]=i,i}isVisible(t){return!!(2&this._getBlock(0).getData(t,0))}getFilterFlags(t){let e=0;const s=_t(t.getDisplayId());for(let i=0;i<this._filters.length;i++){const n=!!(s&1<<i),a=this._filters[i];e|=(!n||a==null||a.check(t)?1:0)<<i}let r=0;if(this._idsToHighlight.size){const i=t.getObjectId();r=this.getHighlightFlag(i)}return e<<1|r}}let Dt=class{constructor(){this._freeIds=[],this._idCounter=1}createId(t=!1){return O(this._getFreeId(),t)}releaseId(t){this._freeIds.push(t)}_getFreeId(){return this._freeIds.length?this._freeIds.pop():this._idCounter++}};function A(d,t,e){if(!(d.length>t))for(;d.length<=t;)d.push(e)}class jt{constructor(){this._numerics=[],this._strings=[],this._idGenerator=new Dt,this._allocatedSize=256,this._bitsets=[],this._instanceIds=[],this._bounds=[]}createBitset(){const t=this._bitsets.length;return this._bitsets.push(y.create(this._allocatedSize,u)),t+1}getBitset(t){return this._bitsets[t-1]}_expand(){this._allocatedSize<<=1;for(const t of this._bitsets)t.resize(this._allocatedSize)}_ensureNumeric(t,e){this._numerics[t]||(this._numerics[t]=[]),A(this._numerics[t],e,0)}_ensureInstanceId(t){A(this._instanceIds,t,0)}_ensureString(t,e){this._strings[t]||(this._strings[t]=[]),A(this._strings[t],e,null)}createDisplayId(t=!1){const e=this._idGenerator.createId();return e>this._allocatedSize&&this._expand(),O(e,t)}releaseDisplayId(t){for(const e of this._bitsets)e.unset(t);return this._idGenerator.releaseId(t&u)}getComputedNumeric(t,e){return this.getComputedNumericAtIndex(t&u,0)}setComputedNumeric(t,e,s){return this.setComputedNumericAtIndex(t&u,s,0)}getComputedString(t,e){return this.getComputedStringAtIndex(t&u,0)}setComputedString(t,e,s){return this.setComputedStringAtIndex(t&u,0,s)}getComputedNumericAtIndex(t,e){const s=t&u;return this._ensureNumeric(e,s),this._numerics[e][s]}setComputedNumericAtIndex(t,e,s){const r=t&u;this._ensureNumeric(e,r),this._numerics[e][r]=s}getInstanceId(t){const e=t&u;return this._ensureInstanceId(e),this._instanceIds[e]}setInstanceId(t,e){const s=t&u;this._ensureInstanceId(s),this._instanceIds[s]=e}getComputedStringAtIndex(t,e){const s=t&u;return this._ensureString(e,s),this._strings[e][s]}setComputedStringAtIndex(t,e,s){const r=t&u;this._ensureString(e,r),this._strings[e][r]=s}getXMin(t){return this._bounds[4*(t&u)]}getYMin(t){return this._bounds[4*(t&u)+1]}getXMax(t){return this._bounds[4*(t&u)+2]}getYMax(t){return this._bounds[4*(t&u)+3]}setBounds(t,e){const s=e.readHydratedGeometry();if(!s||!s.coords.length)return!1;let r=1/0,i=1/0,n=-1/0,a=-1/0;s.forEachVertex((o,l)=>{r=Math.min(r,o),i=Math.min(i,l),n=Math.max(n,o),a=Math.max(a,l)});const h=t&u;return A(this._bounds,4*h+4,0),this._bounds[4*h]=r,this._bounds[4*h+1]=i,this._bounds[4*h+2]=n,this._bounds[4*h+3]=a,!0}}export{Bt as B,v as I,Ot as h,jt as r,y as t};
