import{qh as nt,hA as Lt,jk as Tn,cp as te,cg as Ht,bF as pi,qU as On,cf as W,ce as K,cm as tr,cc as H,bE as D,aI as aa,df as Je,du as na,E as la,gB as it,M as lt,i$ as Mr,ji as Nt,u as g,v as M,a9 as xs,ls as Ts,l4 as Ve,cl as ie,cE as Gs,cL as Bs,cK as Hi,cB as Br,qV as Cn,hz as bn,cn as or,co as ca,og as mr,qW as Rn,qX as ks,qY as qs,ck as dt,qZ as Zs,q_ as An,jg as Pn,jh as rr,cd as Z,ll as $t,dz as St,ch as at,cM as Ye,cr as ne,ci as En,s as Ur,q$ as da,w as $i,qt as $e,r0 as Os,cC as Lr,b7 as gr,ao as Mt,r1 as Ii,hG as ha,dk as fi,ca as Y,mL as Xs,oj as Dn,cj as $n,gY as Ft,nc as Ot,nd as Kt,lr as Or,jd as Js,c8 as er,n9 as ge,r2 as In,lK as Ys,cb as Mn,hn as Ln,nU as Nn,r3 as Fn,r4 as zn,r5 as jn,fn as Qs,r6 as st,r7 as Un,l as Wi,dH as Ks,L as Vn,n3 as Hn,j2 as Wn,r8 as Gn,r9 as Gi,km as Bn,ra as kn,g_ as qn,rb as Zn,rc as Xn,hj as Cs,rd as Jn,qw as Yn,O as ua,re as Qn,hp as Kn,lR as el,qT as tl,qK as rl,rf as il,aP as sl,rg as ol,rh as al,ri as nl,dl as ll,hu as cl,bi as dl,jp as hl,rj as ul,dm as eo,dp as pl,qA as fl,rk as ml,rl as gl}from"./index-a6c97245.js";import{r as oe,n as Q,t as to}from"./vec3f32-ad1dc57f.js";import{t as bs,a as ro}from"./DoubleArray-96e88651.js";import{aB as pa,ao as vr,aC as io,aD as so,aE as oo,h as x,aF as rt,R as _r,at as vl,s as Qe,X as Oe,t as fa,r as y,ac as yr,f as B,$ as ir,aG as ao,l as Rs,aH as As,U as Ps,aI as Vr,al as _l,J as yl,y as ma,z as Mi,p as Hr,g as ur,ar as zt,aJ as ga,aK as wl,_ as Es,n as ot,Q as Li,b as De,a6 as wr,a7 as Sr,a9 as mi,aa as gi,ab as Ds,ah as V,a5 as xr,aL as no,aM as Sl,aN as xl,aO as Tl,aP as va,ad as Ni,a4 as wt,ax as Fi,aQ as _a,aR as lo,am as Ie,ak as F,ap as $s,aS as Bi,aT as Ol,aU as Cl,ag as co,a1 as bl,af as Rl,aV as Al,D as Pl,N as ai,K as ya,L as wa,aW as El,j as Is,V as Dl,q as zi,M as $l,I as Il,G as Sa,Z as Ml,a8 as Wr,ai as Ms,ay as xa,as as Ll,aX as Nl,aY as Fl,aZ as zl,a_ as kr,a$ as ho,b0 as ms,b1 as jl,aw as Ul,an as Fe,b2 as uo,b3 as Ta,b4 as Vl,u as Hl,b5 as Oa,b6 as Wl,a3 as po,b7 as Gl,b8 as Bl,b9 as fo,ae as kl,aj as ql,ba as Zl,aA as Xl,bb as Jl,bc as Yl,bd as mo,be as go,bf as Ql,W as Ca,A as Kl,az as ec}from"./VertexColor.glsl-a0697bd4.js";import{l as ba,y as tc}from"./Indices-b766e722.js";import{l as Ra,h as ht,_ as _t,R as ae,W as vi,T as rc,q as ic}from"./plane-f0d62c60.js";import{_ as Aa,d as vt,f as sc,h as oc,k as gs,p as ac,R as nc}from"./sphere-812d69dd.js";import{s as we,l as Pa,H as ut,a as lc,c as Gt,f as qr,h as cc}from"./InterleavedLayout-ddec9a00.js";import{O as h}from"./VertexAttribute-9f2e53ec.js";import{o as Ls,e as k}from"./mat4f64-65d35099.js";import{o as dc,x as hc,u as uc}from"./interfaces-6a52f173.js";import{e as Ns}from"./mat3f64-221ce671.js";import{x as pc,i as fc,u as mc}from"./BufferView-c58f8e7f.js";import{n as gc,o as m,a as ee,W as Ze,c as Dr,A as ji,l as Fs,b as pr,E as Ea,_ as ct,f as vc,d as Da,S as $a,g as Ia,e as _c,h as yc}from"./OrderIndependentTransparency-0ab46cc4.js";import{o as wc}from"./floatRGBA-f2fcae6c.js";import{D as Nr,L as _i,E as fr,M as Sc,_ as yi,B as xc,F as Tc,R as Xe,I as Oc}from"./enums-b14466b3.js";import{t as vo,N as Cc,n as zs}from"./basicInterfaces-bb952591.js";import{a as wi,f as Ma}from"./triangulationUtils-4a253704.js";import{x as La,i as bc,c as Rc}from"./VertexArrayObject-d7a3254f.js";import{e as Si,T as ni,n as Ac}from"./Texture-31c4f382.js";import{t as js}from"./NestedMap-1b5db22e.js";import{W as Pc,I as Ec,L as Dc,s as $c,l as yt}from"./Octree-3004e05b.js";import{v as Ui,M as Na,b as ar,k as Fa}from"./lineSegment-e0d341b8.js";import"./boundedPlane-0cbeb150.js";import{r as Ic}from"./glUtil-0b7ee6ea.js";var $r,xi,vs;(function(t){t[t.RasterImage=0]="RasterImage",t[t.Features=1]="Features"})($r||($r={})),function(t){t[t.MapLayer=0]="MapLayer",t[t.ViewLayer=1]="ViewLayer",t[t.Outline=2]="Outline",t[t.SnappingHint=3]="SnappingHint"}(xi||(xi={})),function(t){t[t.WithRasterImage=0]="WithRasterImage",t[t.WithoutRasterImage=1]="WithoutRasterImage"}(vs||(vs={}));var Ti,qe;(function(t){t[t.ADD=0]="ADD",t[t.UPDATE=1]="UPDATE",t[t.REMOVE=2]="REMOVE"})(Ti||(Ti={})),function(t){t[t.NONE=0]="NONE",t[t.VISIBILITY=1]="VISIBILITY",t[t.GEOMETRY=2]="GEOMETRY",t[t.TRANSFORMATION=4]="TRANSFORMATION",t[t.HIGHLIGHT=8]="HIGHLIGHT",t[t.OCCLUDEE=16]="OCCLUDEE"}(qe||(qe={}));var Fr;(function(t){t[t.ASYNC=0]="ASYNC",t[t.SYNC=1]="SYNC"})(Fr||(Fr={}));let Mc=class extends pa{get geometries(){return this._geometries}get transformation(){return this._transformation??Ls}set transformation(e){this._transformation=nt(this._transformation??k(),e),this._invalidateBoundingVolume(),this._emit("objectTransformation",this)}get shaderTransformation(){return this._shaderTransformation??this.transformation}set shaderTransformation(e){this._shaderTransformation=nt(this._shaderTransformation??k(),e),this._invalidateBoundingVolume(),this._emit("objectShaderTransformation",this)}clearShaderTransformation(){this._shaderTransformation=void 0,this._invalidateBoundingVolume(),this._emit("objectShaderTransformation",this)}constructor(e={}){super(),this.type=vr.Object,this._hasVolatileTransformation=!1,this._parentLayer=null,this._visible=!0,this.castShadow=e.castShadow??!0,this.usesVerticalDistanceToGround=e.usesVerticalDistanceToGround??!1,this.graphicUid=e.graphicUid,this.layerUid=e.layerUid,e.isElevationSource&&(this.lastValidElevationBB=new za),this._geometries=e.geometries?Array.from(e.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(e){we(this._parentLayer==null||e==null,"Object3D can only be added to a single Layer"),this._parentLayer=e}addGeometry(e){e.visible=this._visible,this._geometries.push(e),this._hasVolatileTransformation=this._hasVolatileTransformation||e.hasVolatileTransformation,this._emit("objectGeometryAdded",{object:this,geometry:e}),this._invalidateBoundingVolume()}removeGeometry(e){const r=this._geometries.splice(e,1)[0];r&&(this._emit("objectGeometryRemoved",{object:this,geometry:r}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttrsUpdated(e){this._emit("objectGeometryUpdated",{object:this,geometry:e}),this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(e){if(this._visible!==e){this._visible=e;for(const r of this._geometries)r.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const e=new io(vo.MaskOccludee);for(const r of this._geometries)r.occludees=so(r.occludees,e);return this._emit("occlusionChanged",this),e}removeOcclude(e){for(const r of this._geometries)r.occludees=oo(r.occludees,e);this._emit("occlusionChanged",this)}highlight(){const e=new io(vo.Highlight);for(const r of this._geometries)r.highlights=so(r.highlights,e);return this._emit("highlightChanged",this),e}removeHighlight(e){for(const r of this._geometries)r.highlights=oo(r.highlights,e);this._emit("highlightChanged",this)}getCombinedStaticTransformation(e,r){return Lt(r,this.transformation,e.transformation)}getCombinedShaderTransformation(e,r=k()){return Lt(r,this.shaderTransformation,e.shaderTransformation)}hasVolativeTransformation(){return this._hasVolatileTransformation}get boundingVolumeWorldSpace(){return this._bvWorldSpace&&!this._hasVolatileTransformation||(this._bvWorldSpace=this._bvWorldSpace||new _o,this._validateBoundingVolume(this._bvWorldSpace,Ir.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace&&!this._hasVolatileTransformation||(this._bvObjectSpace=this._bvObjectSpace||new _o,this._validateBoundingVolume(this._bvObjectSpace,Ir.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(e,r){const i=r===Ir.ObjectSpace;for(const s of this._geometries){const o=s.boundingInfo;o&&Lc(o,e,i?s.shaderTransformation:this.getCombinedShaderTransformation(s))}Tn(e.bounds,e.min,e.max,.5);for(const s of this._geometries){const o=s.boundingInfo;if(o==null)continue;const n=i?s.shaderTransformation:this.getCombinedShaderTransformation(s),a=Ra(n);te(yo,o.center,n);const l=Ht(yo,e.bounds),c=o.radius*a;e.bounds[3]=Math.max(e.bounds[3],l+c)}}_invalidateBoundingVolume(){var r;const e=(r=this._bvWorldSpace)==null?void 0:r.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&e&&this._parentLayer.notifyObjectBBChanged(this,e)}_emit(e,r){this._parentLayer&&this._parentLayer.events.emit(e,r)}get test(){const e=this;return{hasGeometry:r=>e._geometries.includes(r),getGeometryIndex:r=>e._geometries.indexOf(r)}}},za=class{constructor(){this.min=pi(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=pi(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}},_o=class extends za{constructor(){super(...arguments),this.bounds=Aa()}};function Lc(t,e,r){const i=t.bbMin,s=t.bbMax;if(On(r)){const o=W(Nc,r[12],r[13],r[14]);K(Re,i,o),K(je,s,o);for(let n=0;n<3;++n)e.min[n]=Math.min(e.min[n],Re[n]),e.max[n]=Math.max(e.max[n],je[n])}else if(te(Re,i,r),tr(i,s))for(let o=0;o<3;++o)e.min[o]=Math.min(e.min[o],Re[o]),e.max[o]=Math.max(e.max[o],Re[o]);else{te(je,s,r);for(let o=0;o<3;++o)e.min[o]=Math.min(e.min[o],Re[o],je[o]),e.max[o]=Math.max(e.max[o],Re[o],je[o]);for(let o=0;o<3;++o){H(Re,i),H(je,s),Re[o]=s[o],je[o]=i[o],te(Re,Re,r),te(je,je,r);for(let n=0;n<3;++n)e.min[n]=Math.min(e.min[n],Re[n],je[n]),e.max[n]=Math.max(e.max[n],Re[n],je[n])}}}const Nc=D(),Re=D(),je=D(),yo=D();var Ir;(function(t){t[t.WorldSpace=0]="WorldSpace",t[t.ObjectSpace=1]="ObjectSpace"})(Ir||(Ir={}));const Fc=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","shaderTransformationChanged","objectTransformation","visibilityChanged","occlusionChanged","highlightChanged","objectGeometryAdded","objectGeometryRemoved","objectGeometryUpdated"];let zc=class extends pa{get objects(){return this._objects}constructor(e,r,i=""){super(),this.stage=e,this.apiLayerUid=i,this.type=vr.Layer,this.events=new aa,this.sliceable=!1,this._objects=new Je,this._objectsAdded=new Je,this._handles=new na,this.apiLayerUid=i,this.visible=(r==null?void 0:r.visible)??!0,this.pickable=(r==null?void 0:r.pickable)??!0,this.updatePolicy=(r==null?void 0:r.updatePolicy)??Fr.ASYNC,this._disableOctree=(r==null?void 0:r.disableOctree)??!1,e.add(this);for(const s of Fc)this._handles.add(this.events.on(s,o=>e.handleEvent(s,o)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}add(e){this._objects.push(e),e.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:e}),this._octree!=null&&this._objectsAdded.push(e)}remove(e){this._objects.removeUnordered(e)&&(e.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:e}),this._octree!=null&&(this._objectsAdded.removeUnordered(e)||this._octree.remove([e])))}addMany(e){this._objects.pushArray(e);for(const r of e)r.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:e}),this._octree!=null&&this._objectsAdded.pushArray(e)}removeMany(e){const r=new Array;if(this._objects.removeUnorderedMany(e,e.length,r),r.length!==0){for(const i of r)i.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:r}),this._octree!=null){for(let i=0;i<r.length;)this._objectsAdded.removeUnordered(r[i])?(r[i]=r[r.length-1],r.length-=1):++i;this._octree.remove(r)}}}sync(){this.updatePolicy!==Fr.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(e,r){this._octree==null||this._objectsAdded.includes(e)||this._octree.update(e,r)}getSpatialQueryAccelerator(){return this._octree==null&&this._objects.length>50&&!this._disableOctree?(this._octree=new Pc(e=>e.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):this._octree!=null&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}shaderTransformationChanged(){this.invalidateSpatialQueryAccelerator(),this.events.emit("shaderTransformationChanged",this)}invalidateSpatialQueryAccelerator(){this._octree=la(this._octree),this._objectsAdded.clear()}},ja=class{constructor(e,r){this._fbo=null;const i=new Si;i.wrapMode=Nr.CLAMP_TO_EDGE,i.samplingMode=_i.LINEAR_MIPMAP_LINEAR,i.hasMipmap=r,i.maxAnisotropy=8,this._fbo=new La(e,i)}dispose(){this._fbo=it(this._fbo)}getTexture(){var e;return(e=this._fbo)==null?void 0:e.colorTexture}isValid(){return this._fbo!=null}resize(e,r){var i;(i=this._fbo)==null||i.resize(e,r)}bind(e){e.bindFramebuffer(this._fbo)}generateMipMap(){var r;const e=(r=this._fbo)==null?void 0:r.colorTexture;e!=null&&e.descriptor.hasMipmap&&e.generateMipmap()}disposeRenderTargetMemory(){var e;(e=this._fbo)==null||e.resize(0,0)}get gpuMemoryUsage(){var e;return((e=this._fbo)==null?void 0:e.gpuMemoryUsage)??0}},Bt=class{constructor(e,r,i,s=!0){this.output=r,this.type=i,this.valid=!1,this.lastUsed=Mr(1/0),this.fbo=new ja(e,s)}},jc=class{constructor(e){this.renderTargets=[new Bt(e,x.Color,rt.Color),new Bt(e,x.Color,rt.ColorNoRasterImage),new Bt(e,x.Highlight,rt.Highlight,!1),new Bt(e,x.Normal,rt.Water),new Bt(e,x.Color,rt.Occluded)],lt("enable-feature:objectAndLayerId-rendering")&&this.renderTargets.push(new Bt(e,x.ObjectAndLayerIdColor,rt.ObjectAndLayerIdColor))}getTarget(e){return this.renderTargets[e].fbo}dispose(){for(const e of this.renderTargets)e.fbo.dispose()}disposeRenderTargetMemory(){for(const e of this.renderTargets)e.fbo.disposeRenderTargetMemory()}validateUsageForTarget(e,r,i){return e?(r.lastUsed=i,!1):i-r.lastUsed>Uc?(r.fbo.disposeRenderTargetMemory(),r.lastUsed=Mr(1/0),!1):r.lastUsed<1/0}get gpuMemoryUsage(){return this.renderTargets.reduce((e,r)=>e+r.fbo.gpuMemoryUsage,0)}};const Uc=Mr(1e3);let Ua=class extends gc{constructor(){super(...arguments),this.color=Nt(1,1,1,1)}};function Vc(){const t=new _r;return t.include(vl),t.fragment.uniforms.add(new Qe("tex",e=>e.texture),new Oe("uColor",e=>e.color)),t.fragment.code.add(m`void main() {
vec4 texColor = texture(tex, uv);
fragColor = texColor * uColor;
}`),t}const Hc=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:Ua,build:Vc},Symbol.toStringTag,{value:"Module"}));let Wc=class{constructor(e){this._context=e,this._perConstructorInstances=new js,this._frameCounter=0,this._keepAliveFrameCount=wo}get viewingMode(){return this._context.viewingMode}get constructionContext(){return this._context}destroy(){this._perConstructorInstances.forEach(e=>e.forEach(r=>r.technique.destroy())),this._perConstructorInstances.clear()}acquire(e,r=Bc){const i=r.key;let s=this._perConstructorInstances.get(e,i);if(s==null){const o=new e(this._context,r,()=>this.release(o));s=new Gc(o),this._perConstructorInstances.set(e,i,s)}return++s.refCount,s.technique}releaseAndAcquire(e,r,i){if(i!=null){if(r.key===i.key)return i;this.release(i)}return this.acquire(e,r)}release(e){if(e==null||this._perConstructorInstances.empty)return;const r=this._perConstructorInstances.get(e.constructor,e.key);r!=null&&(--r.refCount,r.refCount===0&&(r.refZeroFrame=this._frameCounter))}frameUpdate(){this._frameCounter++,this._keepAliveFrameCount!==wo&&this._perConstructorInstances.forEach((e,r)=>{e.forEach((i,s)=>{i.refCount===0&&i.refZeroFrame+this._keepAliveFrameCount<this._frameCounter&&(i.technique.destroy(),this._perConstructorInstances.delete(r,s))})})}async reloadAll(){const e=new Array;this._perConstructorInstances.forEach((r,i)=>{const s=async(o,n)=>{const a=n.shader;a&&(await a.reload(),o.forEach(l=>l.technique.reload(this._context)))};e.push(s(r,i))}),await Promise.all(e)}},Gc=class{constructor(e){this.technique=e,this.refCount=0,this.refZeroFrame=0}};const wo=-1,Bc=new fa;function kc(t,e,r){return 2*Math.atan(Math.sqrt(e*e+r*r)*Math.tan(.5*t)/e)}function qc(t,e,r){return 2*Math.atan(Math.sqrt(e*e+r*r)*Math.tan(.5*t)/r)}function Zc(t,e,r){return 2*Math.atan(e*Math.tan(.5*t)/Math.sqrt(e*e+r*r))}function Xc(t,e,r){return 2*Math.atan(r*Math.tan(.5*t)/Math.sqrt(e*e+r*r))}var _s;let z=_s=class extends xs{constructor(t={}){super(t),this._center=D(),this._up=D(),this._viewUp=D(),this._viewForward=D(),this._viewRight=D(),this._ray=vt(),this._viewport=Nt(0,0,1,1),this._padding=Nt(0,0,0,0),this._fov=55/180*Math.PI,this._nearFar=Ts(1,1e3),this._viewDirty=!0,this._viewMatrix=k(),this._viewProjectionDirty=!0,this._viewProjectionMatrix=k(),this._viewInverseTransposeMatrixDirty=!0,this._viewInverseTransposeMatrix=k(),this._frustumDirty=!0,this._frustum=Ec(),this._fullViewport=Ve(),this._pixelRatio=1,this.relativeElevation=0}get pixelRatio(){return this._pixelRatio}set pixelRatio(t){this._pixelRatio=t>0?t:1}get eye(){return this._ray.origin}set eye(t){this._compareAndSetView(t,this._ray.origin)}get center(){return this._center}set center(t){this._compareAndSetView(t,this._center,"_center")}get ray(){return ie(this._ray.direction,this.center,this.eye),this._ray}get up(){return this._up}set up(t){this._compareAndSetView(t,this._up,"_up")}get viewMatrix(){return this._ensureViewClean(),this._viewMatrix}set viewMatrix(t){nt(this._viewMatrix,t),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0,this._viewProjectionDirty=!0,this._frustumDirty=!0}get viewForward(){return this._ensureViewClean(),this._viewForward}get viewUp(){return this._ensureViewClean(),this._viewUp}get viewRight(){return this._ensureViewClean(),this._viewRight}get nearFar(){return this._nearFar}get near(){return this._nearFar[0]}set near(t){this._nearFar[0]!==t&&(this._nearFar[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}get far(){return this._nearFar[1]}set far(t){this._nearFar[1]!==t&&(this._nearFar[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_nearFar"))}get viewport(){return this._viewport}set viewport(t){this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]}get screenViewport(){if(this.pixelRatio===1)return this._viewport;const t=Gs(Ve(),this._viewport,1/this.pixelRatio),e=this._get("screenViewport");return e&&Bs(t,e)?e:t}get screenPadding(){if(this.pixelRatio===1)return this._padding;const t=Gs(Ve(),this._padding,1/this.pixelRatio),e=this._get("screenPadding");return e&&Bs(t,e)?e:t}get x(){return this._viewport[0]}set x(t){t+=this._padding[U.LEFT],this._viewport[0]!==t&&(this._viewport[0]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get y(){return this._viewport[1]}set y(t){t+=this._padding[U.BOTTOM],this._viewport[1]!==t&&(this._viewport[1]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get width(){return this._viewport[2]}set width(t){this._viewport[2]!==t&&(this._viewport[2]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get height(){return this._viewport[3]}set height(t){this._viewport[3]!==t&&(this._viewport[3]=t,this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_viewport"))}get fullWidth(){return this._viewport[2]+this._padding[U.RIGHT]+this._padding[U.LEFT]}set fullWidth(t){this.width=t-(this._padding[U.RIGHT]+this._padding[U.LEFT])}get fullHeight(){return this._viewport[3]+this._padding[U.TOP]+this._padding[U.BOTTOM]}set fullHeight(t){this.height=t-(this._padding[U.TOP]+this._padding[U.BOTTOM])}get fullViewport(){return this._fullViewport[0]=this._viewport[0]-this._padding[U.LEFT],this._fullViewport[1]=this._viewport[1]-this._padding[U.BOTTOM],this._fullViewport[2]=this.fullWidth,this._fullViewport[3]=this.fullHeight,this._fullViewport}get _aspect(){return this.width/this.height}get padding(){return this._padding}set padding(t){Hi(this._padding,t)||(this._viewport[0]+=t[U.LEFT]-this._padding[U.LEFT],this._viewport[1]+=t[U.BOTTOM]-this._padding[U.BOTTOM],this._viewport[2]-=t[U.RIGHT]+t[U.LEFT]-(this._padding[U.RIGHT]+this._padding[U.LEFT]),this._viewport[3]-=t[U.TOP]+t[U.BOTTOM]-(this._padding[U.TOP]+this._padding[U.BOTTOM]),Br(this._padding,t),this._viewProjectionDirty=!0,this._frustumDirty=!0,this.notifyChange("_padding"),this.notifyChange("_viewport"))}get viewProjectionMatrix(){return this._viewProjectionDirty&&(Lt(this._viewProjectionMatrix,this.projectionMatrix,this.viewMatrix),this._viewProjectionDirty=!1),this._viewProjectionMatrix}get projectionMatrix(){const t=this.width,e=this.height,r=this.near*Math.tan(this.fovY/2),i=r*this._aspect,s=Cn(k(),-i*(1+2*this._padding[U.LEFT]/t),i*(1+2*this._padding[U.RIGHT]/t),-r*(1+2*this._padding[U.BOTTOM]/e),r*(1+2*this._padding[U.TOP]/e),this.near,this.far),o=this._get("projectionMatrix");return o&&bn(o,s)?o:s}get inverseProjectionMatrix(){return or(k(),this.projectionMatrix)||this._get("inverseProjectionMatrix")||k()}get fov(){return this._fov}set fov(t){this._fov=t,this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovX(){return Zc(this._fov,this.width,this.height)}set fovX(t){this._fov=kc(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}get fovY(){return Xc(this._fov,this.width,this.height)}set fovY(t){this._fov=qc(t,this.width,this.height),this._viewProjectionDirty=!0,this._frustumDirty=!0}get distance(){return Ht(this.center,this.eye)}get frustum(){return this._recomputeFrustum(),this._frustum}get viewInverseTransposeMatrix(){return(this._viewInverseTransposeMatrixDirty||this._viewDirty)&&(or(this._viewInverseTransposeMatrix,this.viewMatrix),ca(this._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),this._viewInverseTransposeMatrix}depthNDCToWorld(t){const e=2*t-1;return 2*this.near*this.far/(this.far+this.near-e*(this.far-this.near))}get perRenderPixelRatio(){return Math.tan(this.fovX/2)/(this.width/2)}get perScreenPixelRatio(){return this.perRenderPixelRatio*this.pixelRatio}get aboveGround(){return this.relativeElevation!=null&&this.relativeElevation>=0}copyFrom(t){H(this._ray.origin,t.eye),this.center=t.center,this.up=t.up,Br(this._viewport,t.viewport),this.notifyChange("_viewport"),Br(this._padding,t.padding),this.notifyChange("_padding"),mr(this._nearFar,t.nearFar),this.notifyChange("_nearFar"),this._fov=t.fov,this.relativeElevation=t.relativeElevation;const e=t;return this._viewDirty=e._viewDirty,this._viewDirty||(nt(this._viewMatrix,t.viewMatrix),H(this._viewRight,t.viewRight),H(this._viewUp,t.viewUp),H(this._viewForward,t.viewForward)),this._viewProjectionDirty=!0,this._frustumDirty=e._frustumDirty,this._frustumDirty||(Dc(this._frustum,t.frustum),this._frustumDirty=!1),e._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(nt(this._viewInverseTransposeMatrix,t.viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1),Br(this._fullViewport,t.fullViewport),this.pixelRatio=t.pixelRatio,this}copyViewFrom(t){this.eye=t.eye,this.center=t.center,this.up=t.up}clone(){return new _s().copyFrom(this)}equals(t){return tr(this.eye,t.eye)&&tr(this.center,t.center)&&tr(this.up,t.up)&&Hi(this._viewport,t.viewport)&&Hi(this._padding,t.padding)&&Rn(this.nearFar,t.nearFar)&&this._fov===t.fov&&this.pixelRatio===t.pixelRatio&&this.relativeElevation===t.relativeElevation}almostEquals(t){if(Math.abs(t.fov-this._fov)>=.001||ks(t.screenPadding,this.screenPadding)>=1||ks(this.screenViewport,t.screenViewport)>=1)return!1;qs(pe,t.eye,t.center),qs(ki,this.eye,this.center);const e=dt(pe,ki),r=Zs(pe),i=Zs(ki),s=5e-4;return e*e>=(1-1e-10)*r*i&&An(t.eye,this.eye)<Math.max(r,i)*s*s}computeRenderPixelSizeAt(t){return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(t))}computeRenderPixelSizeAtDist(t){return t*this.perScreenPixelRatio}computeScreenPixelSizeAt(t){return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(t))}_viewDirectionDistance(t){return Math.abs(sc(this.viewForward,ie(pe,t,this.eye)))}computeScreenPixelSizeAtDist(t){return t*this.perScreenPixelRatio}computeDistanceFromRadius(t,e){return t/Math.tan(Math.min(this.fovX,this.fovY)/(2*(e||1)))}getScreenCenter(t=Pn()){return t[0]=(this.padding[U.LEFT]+this.width/2)/this.pixelRatio,t[1]=(this.padding[U.TOP]+this.height/2)/this.pixelRatio,t}getRenderCenter(t,e=.5,r=.5){return t[0]=this.padding[U.LEFT]+this.width*e,t[1]=this.padding[U.BOTTOM]+this.height*r,t[2]=.5,t}setGLViewport(t){const e=this.viewport,r=this.padding;t.setViewport(e[0]-r[3],e[1]-r[2],e[2]+r[1]+r[3],e[3]+r[0]+r[2])}applyProjection(t,e){t!==I&&H(I,t),I[3]=1,rr(I,I,this.projectionMatrix);const r=Math.abs(I[3]);Z(I,I,1/r);const i=this.fullViewport;e[0]=$t(0,i[0]+i[2],.5+.5*I[0]),e[1]=$t(0,i[1]+i[3],.5+.5*I[1]),e[2]=.5*(I[2]+1),e[3]=r}unapplyProjection(t,e){const r=this.fullViewport;I[0]=(t[0]/(r[0]+r[2])*2-1)*t[3],I[1]=(t[1]/(r[1]+r[3])*2-1)*t[3],I[2]=(2*t[2]-1)*t[3],I[3]=t[3],this.inverseProjectionMatrix!=null&&(rr(I,I,this.inverseProjectionMatrix),e[0]=I[0],e[1]=I[1],e[2]=I[2])}projectToScreen(t,e){return this.projectToRenderScreen(t,qi),this.renderToScreen(qi,e),e}projectToRenderScreen(t,e){if(I[0]=t[0],I[1]=t[1],I[2]=t[2],I[3]=1,rr(I,I,this.viewProjectionMatrix),I[3]===0)return null;Z(I,I,1/Math.abs(I[3]));const r=this.fullViewport;return"x"in e?(e.x=$t(0,r[0]+r[2],.5+.5*I[0]),e.y=$t(0,r[1]+r[3],.5+.5*I[1])):(e[0]=$t(0,r[0]+r[2],.5+.5*I[0]),e[1]=$t(0,r[1]+r[3],.5+.5*I[1]),e.length>2&&(e[2]=.5*(I[2]+1))),e}unprojectFromScreen(t,e){return this.unprojectFromRenderScreen(this.screenToRender(t,qi),e)}unprojectFromRenderScreen(t,e){if(Lt(Zr,this.projectionMatrix,this.viewMatrix),!or(Zr,Zr))return null;const r=this.fullViewport;return I[0]=2*(t[0]-r[0])/r[2]-1,I[1]=2*(t[1]-r[1])/r[3]-1,I[2]=2*t[2]-1,I[3]=1,rr(I,I,Zr),I[3]===0?null:(e[0]=I[0]/I[3],e[1]=I[1]/I[3],e[2]=I[2]/I[3],e)}constrainWindowSize(t,e,r,i){const s=t*this.pixelRatio,o=e*this.pixelRatio,n=Math.max(s-r/2,0),a=Math.max(this.fullHeight-o-i/2,0),l=-Math.min(s-r/2,0),c=-Math.min(this.fullHeight-o-i/2,0);return[n,a,r-l- -Math.min(this.fullWidth-s-r/2,0),i-c- -Math.min(o-i/2,0)]}computeUp(t){t===St.Global?this._computeUpGlobal():this._computeUpLocal()}screenToRender(t,e){const r=t[0]*this.pixelRatio,i=this.fullHeight-t[1]*this.pixelRatio;return e[0]=r,e[1]=i,e}renderToScreen(t,e){const r=t[0]/this.pixelRatio,i=(this.fullHeight-t[1])/this.pixelRatio;e[0]=r,e[1]=i}_computeUpGlobal(){ie(pe,this.center,this.eye);const t=at(this.center);t<1?(W(this._up,0,0,1),this._markViewDirty(),this.notifyChange("_up")):Math.abs(dt(pe,this.center))>.9999*at(pe)*t||(Ye(this._up,pe,this.center),Ye(this._up,this._up,pe),ne(this._up,this._up),this.notifyChange("_up"),this._markViewDirty())}_computeUpLocal(){En(pe,this.eye,this.center),Math.abs(pe[2])<=.9999&&(Z(pe,pe,pe[2]),W(this._up,-pe[0],-pe[1],1-pe[2]),ne(this._up,this._up),this.notifyChange("_up"),this._markViewDirty())}_compareAndSetView(t,e,r=""){typeof t[0]=="number"&&isFinite(t[0])&&typeof t[1]=="number"&&isFinite(t[1])&&typeof t[2]=="number"&&isFinite(t[2])?tr(t,e)||(H(e,t),this._markViewDirty(),r.length&&this.notifyChange(r)):Ur.getLogger("esri.views.3d.webgl-engine.lib.Camera").warn("Camera vector contains invalid number, ignoring value")}_markViewDirty(){this._viewDirty=!0,this._frustumDirty=!0,this._viewProjectionDirty=!0}_recomputeFrustum(){this._frustumDirty&&($c(this.viewMatrix,this.projectionMatrix,this._frustum),this._frustumDirty=!1)}_ensureViewClean(){this._viewDirty&&(da(this._viewMatrix,this.eye,this.center,this.up),W(this._viewForward,-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10]),W(this._viewUp,this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9]),W(this._viewRight,this._viewMatrix[0],this._viewMatrix[4],this._viewMatrix[8]),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)}};g([M()],z.prototype,"_center",void 0),g([M()],z.prototype,"_up",void 0),g([M()],z.prototype,"_viewport",void 0),g([M()],z.prototype,"_padding",void 0),g([M()],z.prototype,"_fov",void 0),g([M()],z.prototype,"_nearFar",void 0),g([M()],z.prototype,"_pixelRatio",void 0),g([M()],z.prototype,"pixelRatio",null),g([M()],z.prototype,"eye",null),g([M()],z.prototype,"center",null),g([M()],z.prototype,"up",null),g([M({readOnly:!0})],z.prototype,"nearFar",null),g([M()],z.prototype,"near",null),g([M()],z.prototype,"far",null),g([M()],z.prototype,"viewport",null),g([M({readOnly:!0})],z.prototype,"screenViewport",null),g([M({readOnly:!0})],z.prototype,"screenPadding",null),g([M()],z.prototype,"x",null),g([M()],z.prototype,"y",null),g([M()],z.prototype,"width",null),g([M()],z.prototype,"height",null),g([M()],z.prototype,"fullWidth",null),g([M()],z.prototype,"fullHeight",null),g([M({readOnly:!0})],z.prototype,"_aspect",null),g([M()],z.prototype,"padding",null),g([M({readOnly:!0})],z.prototype,"projectionMatrix",null),g([M({readOnly:!0})],z.prototype,"inverseProjectionMatrix",null),g([M()],z.prototype,"fov",null),g([M()],z.prototype,"fovX",null),g([M()],z.prototype,"fovY",null),z=_s=g([$i("esri.views.3d.webgl-engine.lib.Camera")],z);const I=Ve(),Zr=k(),pe=D(),ki=D(),qi=$e();var U;(function(t){t[t.TOP=0]="TOP",t[t.RIGHT=1]="RIGHT",t[t.BOTTOM=2]="BOTTOM",t[t.LEFT=3]="LEFT"})(U||(U={}));let Jc=class{constructor(e,r,i,s){this._textureRepository=e,this._techniqueRepository=r,this.materialChanged=i,this.requestRender=s,this._id2glMaterialRef=new js}dispose(){this._textureRepository.destroy()}acquire(e,r,i){if(this._ownMaterial(e),!e.requiresSlot(r,i))return null;let s=this._id2glMaterialRef.get(i,e.id);if(s==null){const o=e.createGLMaterial({material:e,techniqueRep:this._techniqueRepository,textureRep:this._textureRepository,output:i});s=new Yc(o),this._id2glMaterialRef.set(i,e.id,s)}return s.ref(),s.glMaterial}release(e,r){const i=this._id2glMaterialRef.get(r,e.id);i!=null&&(i.unref(),i.referenced||(it(i.glMaterial),this._id2glMaterialRef.delete(r,e.id)))}_ownMaterial(e){e.repository!=null&&e.repository!==this&&Ur.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),e.repository=this}},Yc=class{constructor(e){this.glMaterial=e,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,we(this._refCnt>=0)}get referenced(){return this._refCnt>0}},Qc=class{constructor(){this.enabled=!0,this._time=Mr(0)}get time(){return this._time}advance({deltaTime:e,fixedTime:r}){return r!=null?this._time!==r&&(this._time=r,!0):(this._time=Mr(this._time+e),e!==0)}};var jt,zr;(function(t){t[t.Draped=0]="Draped",t[t.Screen=1]="Screen",t[t.World=2]="World",t[t.COUNT=3]="COUNT"})(jt||(jt={})),function(t){t[t.Center=0]="Center",t[t.Tip=1]="Tip",t[t.COUNT=2]="COUNT"}(zr||(zr={}));let de=class extends yr{constructor(){super(...arguments),this.output=x.Color,this.transparencyPassType=ee.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.writeDepth=!1,this.space=jt.Screen,this.hideOnShortSegments=!1,this.hasCap=!1,this.anchor=zr.Center,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}get draped(){return this.space===jt.Draped}};g([y({count:x.COUNT})],de.prototype,"output",void 0),g([y({count:ee.COUNT})],de.prototype,"transparencyPassType",void 0),g([y()],de.prototype,"occluder",void 0),g([y()],de.prototype,"hasSlicePlane",void 0),g([y()],de.prototype,"writeDepth",void 0),g([y({count:jt.COUNT})],de.prototype,"space",void 0),g([y()],de.prototype,"hideOnShortSegments",void 0),g([y()],de.prototype,"hasCap",void 0),g([y({count:zr.COUNT})],de.prototype,"anchor",void 0),g([y()],de.prototype,"hasTip",void 0),g([y()],de.prototype,"vvSize",void 0),g([y()],de.prototype,"vvColor",void 0),g([y()],de.prototype,"vvOpacity",void 0),g([y()],de.prototype,"hasOccludees",void 0),g([y()],de.prototype,"hasMultipassTerrain",void 0),g([y()],de.prototype,"cullAboveGround",void 0),g([y({constValue:!0})],de.prototype,"hasVvInstancing",void 0),g([y({constValue:!0})],de.prototype,"hasSliceTranslatedView",void 0);const So=8;function Kc(t,e){const r=t.vertex;r.uniforms.add(new B("intrinsicWidth",i=>i.width)),e.vvSize?(t.attributes.add(h.SIZEFEATUREATTRIBUTE,"float"),r.uniforms.add(new ir("vvSizeMinSize",i=>i.vvSize.minSize),new ir("vvSizeMaxSize",i=>i.vvSize.maxSize),new ir("vvSizeOffset",i=>i.vvSize.offset),new ir("vvSizeFactor",i=>i.vvSize.factor)),r.code.add(m`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(t.attributes.add(h.SIZE,"float"),r.code.add(m`float getSize(){
return intrinsicWidth * size;
}`)),e.vvOpacity?(t.attributes.add(h.OPACITYFEATUREATTRIBUTE,"float"),r.constants.add("vvOpacityNumber","int",8),r.uniforms.add(new ao("vvOpacityValues",i=>i.vvOpacity.values,So),new ao("vvOpacityOpacities",i=>i.vvOpacity.opacityValues,So)),r.code.add(m`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):r.code.add(m`vec4 applyOpacity( vec4 color ){
return color;
}`),e.vvColor?(t.include(Rs,e),t.attributes.add(h.COLORFEATUREATTRIBUTE,"float"),r.code.add(m`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(t.attributes.add(h.COLOR,"vec4"),r.code.add(m`vec4 getColor(){
return applyOpacity(color);
}`))}function Va(t){return t.pattern.map(e=>Math.round(e*t.pixelRatio))}function ed(t){if(t==null)return 1;const e=Va(t);return Math.floor(e.reduce((r,i)=>r+i))}function td(t){return Va(t).reduce((e,r)=>Math.max(e,r))}const rd=2;function id(t){return t==null?Os:t.length===4?t:Lr(sd,t[0],t[1],t[2],1)}const sd=Ve();function Ha(t,e){t.constants.add("stippleAlphaColorDiscard","float",.001),t.constants.add("stippleAlphaHighlightDiscard","float",.5),e.stippleEnabled?od(t,e):ad(t)}function od(t,e){const r=!(e.draped&&e.stipplePreferContinuous),{vertex:i,fragment:s}=t;s.include(As),e.draped||(Ps(i,e),i.uniforms.add(new B("worldToScreenPerDistanceRatio",(o,n)=>1/n.camera.perScreenPixelRatio)),i.code.add(m`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),t.varyings.add("vStippleDistance","float"),e.stippleRequiresClamp&&t.varyings.add("vStippleDistanceLimits","vec2"),e.stippleRequiresStretchMeasure&&t.varyings.add("vStipplePatternStretch","float"),i.code.add(m`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${ld};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),i.code.add(m`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),i.code.add(m`
    if (segmentLengthPseudoScreen >= ${r?"patternLength":"1e4"}) {
  `),Vr(i,e),i.code.add(m`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${e.stippleRequiresStretchMeasure?m`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),s.constants.add("stippleTexturePadding","float",rd),s.uniforms.add(new Qe("stipplePatternTexture",o=>o.stippleTexture),new B("stipplePatternSDFNormalizer",o=>nd(o.stipplePattern)),new B("stipplePatternPixelSizeInv",o=>1/Us(o))),s.code.add(m`float padStippleTexture(float u) {
float paddedTextureSize = float(textureSize(stipplePatternTexture, 0).x);
float unpaddedTextureSize = paddedTextureSize - stippleTexturePadding;
return (u * unpaddedTextureSize + stippleTexturePadding * 0.5) / paddedTextureSize;
}`),s.code.add(m`
    float getStippleSDF(out bool isClamped) {
      ${e.stippleRequiresClamp?m`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:m`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${e.stippleScaleWithLineWidth?m`u *= vLineSizeInv;`:""}
      u = padStippleTexture(fract(u));

      float encodedSDF = rgba2float(texture(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${e.stippleRequiresStretchMeasure?m`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:m`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${e.stippleScaleWithLineWidth?m`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:m`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),e.stippleOffColorEnabled?(s.uniforms.add(new Oe("stippleOffColor",o=>id(o.stippleOffColor))),s.code.add(m`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):s.code.add(m`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function ad(t){t.fragment.code.add(m`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function nd(t){return t?(Math.floor(.5*(td(t)-1))+.5)/t.pixelRatio:1}function Us(t){const e=t.stipplePattern;return e?ed(t.stipplePattern)/e.pixelRatio:1}const ld=m.float(.4),Vs=128,Wa=.5;function sf(t,e=Vs,r=e*Wa,i=0){const s=cd(t,e,r,i);return new _l(s,{mipmap:!1,wrap:{s:Nr.CLAMP_TO_EDGE,t:Nr.CLAMP_TO_EDGE},width:e,height:e,components:4,noUnpackFlip:!0})}function cd(t,e=Vs,r=e*Wa,i=0){switch(t){case"circle":default:return dd(e,r);case"square":return hd(e,r);case"cross":return pd(e,r,i);case"x":return fd(e,r,i);case"kite":return ud(e,r);case"triangle":return md(e,r);case"arrow":return gd(e,r)}}function dd(t,e){const r=t/2-.5;return Gr(t,ka(r,r,e/2))}function hd(t,e){return Ga(t,e,!1)}function ud(t,e){return Ga(t,e,!0)}function pd(t,e,r=0){return Ba(t,e,!1,r)}function fd(t,e,r=0){return Ba(t,e,!0,r)}function md(t,e){return Gr(t,qa(t/2,e,e/2))}function gd(t,e){const r=e,i=e/2,s=t/2,o=.8*r,n=ka(s,(t-e)/2-o,Math.sqrt(o*o+i*i)),a=qa(s,r,i);return Gr(t,(l,c)=>Math.max(a(l,c),-n(l,c)))}function Ga(t,e,r){return r&&(e/=Math.SQRT2),Gr(t,(i,s)=>{let o=i-.5*t+.25,n=.5*t-s-.75;if(r){const a=(o+n)/Math.SQRT2;n=(n-o)/Math.SQRT2,o=a}return Math.max(Math.abs(o),Math.abs(n))-.5*e})}function Ba(t,e,r,i=0){e-=i,r&&(e*=Math.SQRT2);const s=.5*e;return Gr(t,(o,n)=>{let a,l=o-.5*t,c=.5*t-n-1;if(r){const d=(l+c)/Math.SQRT2;c=(c-l)/Math.SQRT2,l=d}return l=Math.abs(l),c=Math.abs(c),a=l>c?l>s?Math.sqrt((l-s)*(l-s)+c*c):c:c>s?Math.sqrt(l*l+(c-s)*(c-s)):l,a-=i/2,a})}function ka(t,e,r){return(i,s)=>{const o=i-t,n=s-e;return Math.sqrt(o*o+n*n)-r}}function qa(t,e,r){const i=Math.sqrt(e*e+r*r);return(s,o)=>{const n=Math.abs(s-t)-r,a=o-t+e/2+.75,l=(e*n+r*a)/i,c=-a;return Math.max(l,c)}}function Gr(t,e){const r=new Uint8Array(4*t*t);for(let i=0;i<t;i++)for(let s=0;s<t;s++){const o=s+t*i;let n=e(s,i);n=n/t+.5,wc(n,r,4*o)}return r}const Za=64,vd=Za/2,_d=vd/5,yd=Za/_d,of=.25;function wd(t,e){const{vertex:r,constants:i}=t;i.add("markerSizePerLineWidth","float",yd),Vr(r,e),r.uniforms.get("markerScale")==null&&r.constants.add("markerScale","float",1),r.code.add(m`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),e.space===jt.World&&(r.constants.add("maxSegmentLengthFraction","float",.45),r.uniforms.add(new B("perRenderPixelRatio",(s,o)=>o.camera.perRenderPixelRatio)),r.code.add(m`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}var Ut;(function(t){t[t.BUTT=0]="BUTT",t[t.SQUARE=1]="SQUARE",t[t.ROUND=2]="ROUND",t[t.COUNT=3]="COUNT"})(Ut||(Ut={}));let G=class extends yr{constructor(){super(...arguments),this.output=x.Color,this.capType=Ut.BUTT,this.transparencyPassType=ee.NONE,this.occluder=!1,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.wireframe=!1,this.objectAndLayerIdColorInstanced=!1}};g([y({count:x.COUNT})],G.prototype,"output",void 0),g([y({count:Ut.COUNT})],G.prototype,"capType",void 0),g([y({count:ee.COUNT})],G.prototype,"transparencyPassType",void 0),g([y()],G.prototype,"occluder",void 0),g([y()],G.prototype,"hasSlicePlane",void 0),g([y()],G.prototype,"hasPolygonOffset",void 0),g([y()],G.prototype,"writeDepth",void 0),g([y()],G.prototype,"draped",void 0),g([y()],G.prototype,"stippleEnabled",void 0),g([y()],G.prototype,"stippleOffColorEnabled",void 0),g([y()],G.prototype,"stippleScaleWithLineWidth",void 0),g([y()],G.prototype,"stipplePreferContinuous",void 0),g([y()],G.prototype,"roundJoins",void 0),g([y()],G.prototype,"applyMarkerOffset",void 0),g([y()],G.prototype,"vvSize",void 0),g([y()],G.prototype,"vvColor",void 0),g([y()],G.prototype,"vvOpacity",void 0),g([y()],G.prototype,"falloffEnabled",void 0),g([y()],G.prototype,"innerColorEnabled",void 0),g([y()],G.prototype,"hasOccludees",void 0),g([y()],G.prototype,"hasMultipassTerrain",void 0),g([y()],G.prototype,"cullAboveGround",void 0),g([y()],G.prototype,"wireframe",void 0),g([y({constValue:!0})],G.prototype,"stippleRequiresClamp",void 0),g([y({constValue:!0})],G.prototype,"stippleRequiresStretchMeasure",void 0),g([y({constValue:!0})],G.prototype,"hasVvInstancing",void 0),g([y({constValue:!0})],G.prototype,"hasSliceTranslatedView",void 0),g([y()],G.prototype,"objectAndLayerIdColorInstanced",void 0);const Oi=1;function Sd(t){const e=new _r,{vertex:r,fragment:i}=e,s=t.hasMultipassTerrain&&(t.output===x.Color||t.output===x.Alpha);e.include(yl),e.include(Kc,t),e.include(Ha,t);const o=t.applyMarkerOffset&&!t.draped;o&&(r.uniforms.add(new B("markerScale",p=>p.markerScale)),e.include(wd,{space:jt.World,draped:!1})),t.output===x.Depth&&e.include(ma,t),e.include(Mi,t),Hr(r,t),r.uniforms.add(new ur("inverseProjectionMatrix",(p,v)=>v.camera.inverseProjectionMatrix),new zt("nearFar",(p,v)=>v.camera.nearFar),new B("miterLimit",p=>p.join!=="miter"?0:p.miterLimit),new Oe("viewport",(p,v)=>v.camera.fullViewport)),r.constants.add("LARGE_HALF_FLOAT","float",65500),e.attributes.add(h.POSITION,"vec3"),e.attributes.add(h.SUBDIVISIONFACTOR,"float"),e.attributes.add(h.UV0,"vec2"),e.attributes.add(h.AUXPOS1,"vec3"),e.attributes.add(h.AUXPOS2,"vec3"),e.varyings.add("vColor","vec4"),e.varyings.add("vpos","vec3"),ga(e),s&&e.varyings.add("depth","float");const n=t.stippleEnabled&&t.stippleScaleWithLineWidth;n&&e.varyings.add("vLineSizeInv","float");const a=t.capType===Ut.ROUND,l=n||a;l&&e.varyings.add("vLineWidth","float");const c=t.innerColorEnabled||a;c&&e.varyings.add("vLineDistance","float");const d=t.stippleEnabled&&a,f=t.falloffEnabled||d;f&&e.varyings.add("vLineDistanceNorm","float"),a&&(e.varyings.add("vSegmentSDF","float"),e.varyings.add("vReverseSegmentSDF","float")),r.code.add(m`#define PERPENDICULAR(v) vec2(v.y, -v.x);
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),r.code.add(m`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),wl(e),r.code.add(m`
    void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
      float vnp = nearFar[0] * 0.99;

      if(pos.z > -nearFar[0]) {
        //current pos behind ncp --> we need to clip
        if (!isStartVertex) {
          if(prev.z < -nearFar[0]) {
            //previous in front of ncp
            pos = mix(prev, pos, interp(vnp, prev, pos));
            next = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        } else {
          if(next.z < -nearFar[0]) {
            //next in front of ncp
            pos = mix(pos, next, interp(vnp, pos, next));
            prev = pos;
          } else {
            pos = vec4(0.0, 0.0, 0.0, 1.0);
          }
        }
      } else {
        //current position visible
        if (prev.z > -nearFar[0]) {
          //previous behind ncp
          prev = mix(pos, prev, interp(vnp, pos, prev));
        }
        if (next.z > -nearFar[0]) {
          //next behind ncp
          next = mix(next, pos, interp(vnp, next, pos));
        }
      }

      ${s?"depth = pos.z;":""}
      linearDepth = calculateLinearDepth(nearFar,pos.z);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);
    }
  `),Vr(r,t),r.code.add(m`
  void main(void) {
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;

      float lineSize = getSize();
      float lineWidth = lineSize * pixelRatio;

      ${l?m`vLineWidth = lineWidth;`:""}
      ${n?m`vLineSizeInv = 1.0 / lineSize;`:""}

      // convert sub-pixel coverage to alpha
      if (lineWidth < 1.0) {
        coverage = lineWidth;
        lineWidth = 1.0;
      }else{
        // Ribbon lines cannot properly render non-integer sizes. Round width to integer size if
        // larger than one for better quality. Note that we do render < 1 pixels more or less correctly
        // so we only really care to round anything larger than 1.
        lineWidth = floor(lineWidth + 0.5);
      }

      vec4 pos  = view * vec4(position.xyz, 1.0);
      vec4 prev = view * vec4(auxpos1.xyz, 1.0);
      vec4 next = view * vec4(auxpos2.xyz, 1.0);
  `),o&&r.code.add(m`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),r.code.add(m`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(t.stippleEnabled||a)&&r.code.add(m`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${a?m`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),r.code.add(m`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),t.roundJoins?r.code.add(m`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = PERPENDICULAR(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = PERPENDICULAR(endDir);

        float factor = ${t.stippleEnabled?m`min(1.0, subdivisionFactor * ${m.float((Oi+2)/(Oi+1))})`:m`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `):r.code.add(m`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);`);const u=t.capType!==Ut.BUTT;return r.code.add(m`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = PERPENDICULAR(joinDisplacementDir);

      ${u?m`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),r.code.add(m`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;

    ${f||c?m`float lineDistNorm = sign(uv0.y) * pos.w;`:""}

    ${c?m`vLineDistance = lineWidth * lineDistNorm;`:""}
    ${f?m`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),a&&r.code.add(m`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),t.stippleEnabled&&(t.draped?r.uniforms.add(new B("worldToScreenRatio",(p,v)=>1/v.screenToPCSRatio)):r.code.add(m`vec3 segmentCenter = mix((auxpos2 + position) * 0.5, (position + auxpos1) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),r.code.add(m`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(auxpos2 - position, position - auxpos1, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),t.draped?r.code.add(m`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):r.code.add(m`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),r.uniforms.add(new B("stipplePatternPixelSize",p=>Us(p))),r.code.add(m`
      float patternLength = ${t.stippleScaleWithLineWidth?"lineSize * ":""} stipplePatternPixelSize;

      // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the fragment shader
      vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of joins)
      if (segmentLengthScreenDouble >= 0.001) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1] at the
        // original vertex positions, and slightly outside of that range at the displaced positions
        vec2 stippleDisplacement = pos.xy - segmentOrigin;
        float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen distance
      vStippleDistanceLimits *= pos.w;
      vStippleDistance *= pos.w;

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e038, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e038);
    `)),r.code.add(m`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${t.wireframe&&!t.draped?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }
  }
  `),s&&e.include(Es,t),e.include(ot,t),i.include(Li),i.code.add(m`
  void main() {
    discardBySlice(vpos);
    ${s?"terrainDepthTest(gl_FragCoord, depth);":""}
  `),t.wireframe?i.code.add(m`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(a&&i.code.add(m`
      float sdf = min(vSegmentSDF, vReverseSegmentSDF);
      vec2 fragmentPosition = vec2(
        min(sdf, 0.0),
        vLineDistance
      ) * gl_FragCoord.w;

      float fragmentRadius = length(fragmentPosition);
      float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

      if (capCoverage < ${m.float(De)}) {
        discard;
      }
    `),d?i.code.add(m`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${m.float(De)}, stippleCoverage);
      `):i.code.add(m`float stippleAlpha = getStippleAlpha();`),i.uniforms.add(new Oe("intrinsicColor",p=>p.color)),t.output!==x.ObjectAndLayerIdColor&&i.code.add(m`discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);`),i.code.add(m`vec4 color = intrinsicColor * vColor;`),t.innerColorEnabled&&(i.uniforms.add(new Oe("innerColor",p=>p.innerColor??p.color),new B("innerWidth",(p,v)=>p.innerWidth*v.camera.pixelRatio)),i.code.add(m`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),i.code.add(m`vec4 finalColor = blendStipple(color, stippleAlpha);`),t.falloffEnabled&&(i.uniforms.add(new B("falloff",p=>p.falloff)),i.code.add(m`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`))),i.code.add(m`
    ${t.output===x.ObjectAndLayerIdColor?m`finalColor.a = 1.0;`:""}

    if (finalColor.a < ${m.float(De)}) {
      discard;
    }

    ${t.output===x.Alpha?m`fragColor = vec4(finalColor.a);`:""}
    ${t.output===x.Color?m`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${t.output===x.Color&&t.transparencyPassType===ee.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    ${t.output===x.Highlight?m`fragColor = vec4(1.0);`:""}
    ${t.output===x.Depth?m`outputDepth(linearDepth);`:""}
    ${t.output===x.ObjectAndLayerIdColor?m`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const xd=Object.freeze(Object.defineProperty({__proto__:null,RIBBONLINE_NUM_ROUND_JOIN_SUBDIVISIONS:Oi,build:Sd},Symbol.toStringTag,{value:"Module"})),Xa=new Map([[h.POSITION,0],[h.SUBDIVISIONFACTOR,1],[h.UV0,2],[h.AUXPOS1,3],[h.AUXPOS2,4],[h.COLOR,5],[h.COLORFEATUREATTRIBUTE,5],[h.SIZE,6],[h.SIZEFEATUREATTRIBUTE,6],[h.OPACITYFEATUREATTRIBUTE,7],[h.OBJECTANDLAYERIDCOLOR,8]]);let Ja=class Ya extends wr{initializeProgram(e){return new Sr(e.rctx,Ya.shader.get().build(this.configuration),Xa)}_makePipelineState(e,r){const i=this.configuration,s=e===ee.NONE,o=e===ee.FrontFace;return Ze({blending:i.output===x.Color||i.output===x.Alpha?s?Dr:ji(e):null,depthTest:{func:Fs(e)},depthWrite:s?i.writeDepth?pr:null:Ea(e),colorWrite:ct,stencilWrite:i.hasOccludees?mi:null,stencilTest:i.hasOccludees?r?gi:Ds:null,polygonOffset:s||o?i.hasPolygonOffset?xo:null:vc})}initializePipeline(){const e=this.configuration;if(e.occluder){const r=e.hasPolygonOffset?xo:null;this._occluderPipelineTransparent=Ze({blending:Dr,polygonOffset:r,depthTest:no,depthWrite:null,colorWrite:ct,stencilWrite:null,stencilTest:Sl}),this._occluderPipelineOpaque=Ze({blending:Dr,polygonOffset:r,depthTest:no,depthWrite:null,colorWrite:ct,stencilWrite:xl,stencilTest:Tl}),this._occluderPipelineMaskWrite=Ze({blending:null,polygonOffset:r,depthTest:va,depthWrite:null,colorWrite:null,stencilWrite:mi,stencilTest:gi})}return this._occludeePipelineState=this._makePipelineState(this.configuration.transparencyPassType,!0),this._makePipelineState(this.configuration.transparencyPassType,!1)}get primitiveType(){return this.configuration.wireframe?fr.LINES:fr.TRIANGLE_STRIP}getPipelineState(e,r){return r?this._occludeePipelineState:this.configuration.occluder?e===V.TRANSPARENT_OCCLUDER_MATERIAL?this._occluderPipelineTransparent:e===V.OCCLUDER_MATERIAL?this._occluderPipelineOpaque:this._occluderPipelineMaskWrite:super.getPipelineState(e,r)}};Ja.shader=new xr(xd,()=>gr(()=>import("./RibbonLine.glsl-1a48d50f.js"),["assets/RibbonLine.glsl-1a48d50f.js","assets/VertexColor.glsl-a0697bd4.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css","assets/requestImageUtils-2f3ee55b.js","assets/basicInterfaces-bb952591.js","assets/enums-b14466b3.js","assets/Texture-31c4f382.js","assets/InterleavedLayout-ddec9a00.js","assets/BufferView-c58f8e7f.js","assets/types-1305598a.js","assets/mat4f64-65d35099.js","assets/Indices-b766e722.js","assets/triangle-0231590c.js","assets/sphere-812d69dd.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-e0d341b8.js","assets/VertexAttribute-9f2e53ec.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/OrderIndependentTransparency-0ab46cc4.js","assets/quat-7c737b79.js","assets/vec3f32-ad1dc57f.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-d7a3254f.js","assets/floatRGBA-f2fcae6c.js","assets/DoubleArray-96e88651.js","assets/plane-f0d62c60.js","assets/interfaces-6a52f173.js","assets/triangulationUtils-4a253704.js","assets/earcut-15ea0d28.js","assets/deduplicate-058a0b05.js","assets/NestedMap-1b5db22e.js","assets/Octree-3004e05b.js","assets/boundedPlane-0cbeb150.js","assets/glUtil-0b7ee6ea.js"]));const xo={factor:0,units:-4};var be;(function(t){t[t.LEFT_JOIN_START=-2]="LEFT_JOIN_START",t[t.LEFT_JOIN_END=-1]="LEFT_JOIN_END",t[t.LEFT_CAP_START=-4]="LEFT_CAP_START",t[t.LEFT_CAP_END=-5]="LEFT_CAP_END",t[t.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",t[t.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",t[t.RIGHT_CAP_START=4]="RIGHT_CAP_START",t[t.RIGHT_CAP_END=5]="RIGHT_CAP_END"})(be||(be={}));let Td=class extends Ni{constructor(e){super(e,new Cd),this._configuration=new G,this._vertexAttributeLocations=Xa}isClosed(e,r){return Ka(this.parameters,e,r)}getConfiguration(e,r){this._configuration.output=e,this._configuration.draped=r.slot===V.DRAPED_MATERIAL;const i=this.parameters.stipplePattern!=null&&e!==x.Highlight;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&this.parameters.stippleOffColor!=null,this._configuration.stippleScaleWithLineWidth=i&&this.parameters.stippleScaleWithLineWidth,this._configuration.stipplePreferContinuous=i&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.roundJoins=this.parameters.join==="round",this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Rd(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.occluder=this.parameters.renderOccluded===wt.OccludeAndTransparentStencil,this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.wireframe=this.parameters.wireframe,this._configuration}intersectDraped(e,r,i,s,o,n){if(!i.options.selectionMode)return;const a=e.vertexAttributes.get(h.POSITION).data,l=e.vertexAttributes.get(h.SIZE);let c=this.parameters.width;if(this.parameters.vvSize){const _=e.vertexAttributes.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Mt(this.parameters.vvSize.offset[0]+_*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else l&&(c*=l.data[0]);const d=s[0],f=s[1],u=(c/2+4)*e.screenToWorldRatio;let p=Number.MAX_VALUE,v=0;for(let _=0;_<a.length-5;_+=3){const w=a[_],O=a[_+1],T=d-w,S=f-O,R=a[_+3]-w,C=a[_+4]-O,b=Mt((R*T+C*S)/(R*R+C*C),0,1),L=R*b-T,A=C*b-S,j=L*L+A*A;j<p&&(p=j,v=_/3)}p<u*u&&o(n.dist,n.normal,v,!1)}intersect(e,r,i,s,o,n){if(!i.options.selectionMode||!e.visible)return;if(!Pa(r))return void Ur.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const a=e.vertexAttributes,l=a.get(h.POSITION).data;let c=this.parameters.width;if(this.parameters.vvSize){const T=a.get(h.SIZEFEATUREATTRIBUTE).data[0];c*=Mt(this.parameters.vvSize.offset[0]+T*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else a.has(h.SIZE)&&(c*=a.get(h.SIZE).data[0]);const d=i.camera,f=Ad;mr(f,i.point);const u=c*d.pixelRatio/2+4*d.pixelRatio;W(Cr[0],f[0]-u,f[1]+u,0),W(Cr[1],f[0]+u,f[1]+u,0),W(Cr[2],f[0]+u,f[1]-u,0),W(Cr[3],f[0]-u,f[1]-u,0);for(let T=0;T<4;T++)if(!d.unprojectFromRenderScreen(Cr[T],Ke[T]))return;_t(d.eye,Ke[0],Ke[1],Xi),_t(d.eye,Ke[1],Ke[2],Ji),_t(d.eye,Ke[2],Ke[3],Yi),_t(d.eye,Ke[3],Ke[0],Qi);let p=Number.MAX_VALUE,v=0;const _=Qa(this.parameters,a,e.indices)?l.length-2:l.length-5;for(let T=0;T<_;T+=3){Se[0]=l[T]+r[12],Se[1]=l[T+1]+r[13],Se[2]=l[T+2]+r[14];const S=(T+3)%l.length;if(xe[0]=l[S]+r[12],xe[1]=l[S+1]+r[13],xe[2]=l[S+2]+r[14],ae(Xi,Se)<0&&ae(Xi,xe)<0||ae(Ji,Se)<0&&ae(Ji,xe)<0||ae(Yi,Se)<0&&ae(Yi,xe)<0||ae(Qi,Se)<0&&ae(Qi,xe)<0)continue;if(d.projectToRenderScreen(Se,bt),d.projectToRenderScreen(xe,Rt),bt[2]<0&&Rt[2]>0){ie(Ge,Se,xe);const C=d.frustum,b=-ae(C[yt.NEAR],Se)/dt(Ge,vi(C[yt.NEAR]));Z(Ge,Ge,b),K(Se,Se,Ge),d.projectToRenderScreen(Se,bt)}else if(bt[2]>0&&Rt[2]<0){ie(Ge,xe,Se);const C=d.frustum,b=-ae(C[yt.NEAR],xe)/dt(Ge,vi(C[yt.NEAR]));Z(Ge,Ge,b),K(xe,xe,Ge),d.projectToRenderScreen(xe,Rt)}else if(bt[2]<0&&Rt[2]<0)continue;bt[2]=0,Rt[2]=0;const R=Na(ar(bt,Rt,Co),f);R<p&&(p=R,H(To,Se),H(Oo,xe),v=T/3)}const w=i.rayBegin,O=i.rayEnd;if(p<u*u){let T=Number.MAX_VALUE;if(Fa(ar(To,Oo,Co),ar(w,O,Pd),Ct)){ie(Ct,Ct,w);const S=at(Ct);Z(Ct,Ct,1/S),T=S/Ht(w,O)}n(T,Ct,v,!1)}}get _layout(){const e=ut().vec3f(h.POSITION).f32(h.SUBDIVISIONFACTOR).vec2f(h.UV0).vec3f(h.AUXPOS1).vec3f(h.AUXPOS2);return this.parameters.vvSize?e.f32(h.SIZEFEATUREATTRIBUTE):e.f32(h.SIZE),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4f(h.COLOR),this.parameters.vvOpacity&&e.f32(h.OPACITYFEATUREATTRIBUTE),lt("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),e}createBufferWriter(){return new bd(this._layout,this.parameters)}requiresSlot(e,r){return r===x.Color||r===x.Alpha||r===x.Highlight||r===x.Depth||r===x.ObjectAndLayerIdColor?e===V.DRAPED_MATERIAL?!0:this.parameters.renderOccluded===wt.OccludeAndTransparentStencil?e===V.OPAQUE_MATERIAL||e===V.OCCLUDER_MATERIAL||e===V.TRANSPARENT_OCCLUDER_MATERIAL:r===x.Color||r===x.Alpha?e===(this.parameters.writeDepth?V.TRANSPARENT_MATERIAL:V.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL):e===V.OPAQUE_MATERIAL:!1}createGLMaterial(e){return new Od(e)}validateParameters(e){e.join!=="miter"&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}},Od=class extends Fi{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextureRepository.release(this._stipplePattern),this._stipplePattern=null}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==x.Color&&this._output!==x.Alpha||this._updateOccludeeState(e);const r=this._material.parameters.stipplePattern;return this._stipplePattern!==r&&(this._material.setParameters({stippleTexture:this._stippleTextureRepository.swap(r,this._stipplePattern)}),this._stipplePattern=r),this.ensureTechnique(Ja,e)}},Cd=class extends _a{constructor(){super(...arguments),this.width=0,this.color=Ii,this.join="miter",this.cap=Ut.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stippleScaleWithLineWidth=!1,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.hasOccludees=!1,this.wireframe=!1}},bd=class{constructor(e,r){this._parameters=r,this.numJoinSubdivisions=0,this.vertexBufferLayout=e;const i=r.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=i;break;case"round":this.numJoinSubdivisions=Oi+i}}_isClosed(e){return Qa(this._parameters,e.vertexAttributes,e.indices)}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){const i=e.indices.get(h.POSITION).length/2+1,s=this._isClosed(e);let o=s?2:2*2;return o+=((s?i:i-1)-(s?0:1))*(2*this.numJoinSubdivisions+4),o+=2,this._parameters.wireframe&&(o=2+4*(o-2)),o}write(e,r,i,s,o){var Wt;const n=Ed,a=Dd,l=$d,c=i.vertexAttributes.get(h.POSITION).data,d=i.indices&&i.indices.get(h.POSITION),f=(Wt=i.vertexAttributes.get(h.DISTANCETOSTART))==null?void 0:Wt.data;d&&d.length!==2*(c.length/3-1)&&console.warn("RibbonLineMaterial does not support indices");let u=1,p=0;this._parameters.vvSize?p=i.vertexAttributes.get(h.SIZEFEATUREATTRIBUTE).data[0]:i.vertexAttributes.has(h.SIZE)&&(u=i.vertexAttributes.get(h.SIZE).data[0]);let v=[1,1,1,1],_=0;this._parameters.vvColor?_=i.vertexAttributes.get(h.COLORFEATUREATTRIBUTE).data[0]:i.vertexAttributes.has(h.COLOR)&&(v=i.vertexAttributes.get(h.COLOR).data);const w=lt("enable-feature:objectAndLayerId-rendering")?i.objectAndLayerIdColor:null;let O=0;this._parameters.vvOpacity&&(O=i.vertexAttributes.get(h.OPACITYFEATUREATTRIBUTE).data[0]);const T=c.length/3,S=new Float32Array(s.buffer),R=lt("enable-feature:objectAndLayerId-rendering")?new Uint8Array(s.buffer):null,C=this.vertexBufferLayout.stride/4;let b=o*C;const L=b;let A=0;const j=f?(X,Me,ze)=>A=f[ze]:(X,Me,ze)=>A+=Ht(X,Me),ce=lt("enable-feature:objectAndLayerId-rendering"),E=(X,Me,ze,$,Tt,We,Tr)=>{if(S[b++]=Me[0],S[b++]=Me[1],S[b++]=Me[2],S[b++]=$,S[b++]=Tr,S[b++]=Tt,S[b++]=X[0],S[b++]=X[1],S[b++]=X[2],S[b++]=ze[0],S[b++]=ze[1],S[b++]=ze[2],S[b++]=this._parameters.vvSize?p:u,this._parameters.vvColor)S[b++]=_;else{const pt=Math.min(4*We,v.length-4);S[b++]=v[pt],S[b++]=v[pt+1],S[b++]=v[pt+2],S[b++]=v[pt+3]}this._parameters.vvOpacity&&(S[b++]=O),ce&&(w!=null&&(R[4*b]=w[0],R[4*b+1]=w[1],R[4*b+2]=w[2],R[4*b+3]=w[3]),b++)};b+=C,W(a,c[0],c[1],c[2]),e&&te(a,a,e);const q=this._isClosed(i);if(q){const X=c.length-3;W(n,c[X],c[X+1],c[X+2]),e&&te(n,n,e)}else W(l,c[3],c[4],c[5]),e&&te(l,l,e),E(a,a,l,1,be.LEFT_CAP_START,0,0),E(a,a,l,1,be.RIGHT_CAP_START,0,0),H(n,a),H(a,l);const ue=q?0:1,He=q?T:T-1;for(let X=ue;X<He;X++){const Me=(X+1)%T*3;W(l,c[Me],c[Me+1],c[Me+2]),e&&te(l,l,e),j(n,a,X),E(n,a,l,0,be.LEFT_JOIN_END,X,A),E(n,a,l,0,be.RIGHT_JOIN_END,X,A);const ze=this.numJoinSubdivisions;for(let $=0;$<ze;++$){const Tt=($+1)/(ze+1);E(n,a,l,Tt,be.LEFT_JOIN_END,X,A),E(n,a,l,Tt,be.RIGHT_JOIN_END,X,A)}E(n,a,l,1,be.LEFT_JOIN_START,X,A),E(n,a,l,1,be.RIGHT_JOIN_START,X,A),H(n,a),H(a,l)}q?(W(l,c[3],c[4],c[5]),e&&te(l,l,e),A=j(n,a,He),E(n,a,l,0,be.LEFT_JOIN_END,ue,A),E(n,a,l,0,be.RIGHT_JOIN_END,ue,A)):(A=j(n,a,He),E(n,a,a,0,be.LEFT_CAP_END,He,A),E(n,a,a,0,be.RIGHT_CAP_END,He,A)),Zi(S,L+C,S,L,C),b=Zi(S,b-C,S,b,C),this._parameters.wireframe&&this._addWireframeVertices(s,L,b,C)}_addWireframeVertices(e,r,i,s){const o=new Float32Array(e.buffer,i*Float32Array.BYTES_PER_ELEMENT),n=new Float32Array(e.buffer,r*Float32Array.BYTES_PER_ELEMENT,i-r);let a=0;const l=c=>a=Zi(n,c,o,a,s);for(let c=0;c<n.length-1;c+=2*s)l(c),l(c+2*s),l(c+1*s),l(c+2*s),l(c+1*s),l(c+3*s)}};function Zi(t,e,r,i,s){for(let o=0;o<s;o++)r[i++]=t[e++];return i}function Qa(t,e,r){return Ka(t,e.get(h.POSITION).data,r?r.get(h.POSITION):null)}function Ka(t,e,r){return!!t.isClosed&&(r?r.length>2:e.length>6)}function Rd(t){return t.anchor===zr.Tip&&t.hideOnShortSegments&&t.placement==="begin-end"&&t.worldSpace}const Se=D(),xe=D(),Ge=D(),Ct=D(),Ad=D(),bt=$e(),Rt=$e(),To=D(),Oo=D(),Co=Ui(),Pd=Ui(),Ed=D(),Dd=D(),$d=D(),Cr=[$e(),$e(),$e(),$e()],Ke=[D(),D(),D(),D()],Xi=ht(),Ji=ht(),Yi=ht(),Qi=ht();let Id=class{constructor(e){this._originSR=e,this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._rootOriginId="root/"+ha()}getOrigin(e){const r=this._origins.get(this._rootOriginId);if(r==null){const d=lo(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const i=this._gridSize,s=Math.round(e[0]/i),o=Math.round(e[1]/i),n=Math.round(e[2]/i),a=`${s}/${o}/${n}`;let l=this._origins.get(a);const c=.5*i;if(ie(le,e,r.vec3),le[0]=Math.abs(le[0]),le[1]=Math.abs(le[1]),le[2]=Math.abs(le[2]),le[0]<c&&le[1]<c&&le[2]<c){if(l){const d=Math.max(...le);if(ie(le,e,l.vec3),le[0]=Math.abs(le[0]),le[1]=Math.abs(le[1]),le[2]=Math.abs(le[2]),Math.max(...le)<d)return l}return r}return l||(l=lo(s*i,o*i,n*i,a),this._origins.set(a,l)),l}_drawOriginBox(e,r=Nt(1,1,0,1)){const i=window.view,s=i._stage,o=r.toString();if(!this._objects.has(o)){this._material=new Td({width:2,color:r}),s.add(this._material);const p=new zc(s,{pickable:!1}),v=new Mc({castShadow:!1});s.add(v),p.add(v),this._objects.set(o,v)}const n=this._objects.get(o),a=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],l=a.length,c=new Array(3*l),d=new Array,f=.5*this._gridSize;for(let p=0;p<l;p++)c[3*p]=e[0]+(1&a[p]?f:-f),c[3*p+1]=e[1]+(2&a[p]?f:-f),c[3*p+2]=e[2]+(4&a[p]?f:-f),p>0&&d.push(p-1,p);fi(c,this._originSR,0,c,i.renderSpatialReference,0,l);const u=new Ie(this._material,[[h.POSITION,new F(c,3,!0)]],[[h.POSITION,d]],null,vr.Line);s.add(u),n.addGeometry(u)}get test(){const e=this;return{set gridSize(r){e._gridSize=r}}}};const le=D();var jr,Ci;(function(t){t[t.RENDERING=0]="RENDERING",t[t.FINISHED_RENDERING=1]="FINISHED_RENDERING",t[t.FADING_TEXTURE_CHANNELS=2]="FADING_TEXTURE_CHANNELS",t[t.SWITCH_CHANNELS=3]="SWITCH_CHANNELS",t[t.FINISHED=4]="FINISHED"})(jr||(jr={})),function(t){t[t.RG=0]="RG",t[t.BA=1]="BA"}(Ci||(Ci={}));let Md=class{constructor(){this.readChannels=Ci.RG,this.renderingStage=jr.FINISHED,this.startTime=0,this.startTimeHeightFade=0,this.cameraPositionLastFrame=D(),this.isCameraPositionFinal=!0,this.parallax=new bo,this.parallaxNew=new bo,this.crossFade={enabled:!1,factor:1,distanceThresholdFactor:.3},this.fadeInOut={stage:nr.FINISHED,factor:1,distanceThresholdFactor:.6},this.fadeIn={stage:bi.FINISHED,factor:1,distanceThresholdFactor:2},this.fadeInOutHeight={stage:Ri.FINISHED,factor:-1}}get isFading(){return this.fadeInOut.stage===nr.FADE_OUT||this.fadeInOut.stage===nr.FADE_IN||this.fadeIn.stage===bi.FADE_IN||this.fadeInOutHeight.stage!==Ri.FINISHED||this.renderingStage===jr.FADING_TEXTURE_CHANNELS}};var bi,nr,Ri;(function(t){t[t.FINISHED=0]="FINISHED",t[t.CHANGE_ANCHOR=1]="CHANGE_ANCHOR",t[t.FADE_IN=2]="FADE_IN"})(bi||(bi={})),function(t){t[t.FINISHED=0]="FINISHED",t[t.FADE_OUT=1]="FADE_OUT",t[t.SWITCH=2]="SWITCH",t[t.FADE_IN=3]="FADE_IN"}(nr||(nr={})),function(t){t[t.FINISHED=0]="FINISHED",t[t.HEIGHT_FADE=1]="HEIGHT_FADE"}(Ri||(Ri={}));let bo=class{constructor(){this.anchorPointClouds=D(),this.cloudsHeight=1e5,this.radiusCurvatureCorrectionFactor=0,this.transform=k()}};function Ld(t){t.include($s),t.uniforms.add(new Qe("geometryDepthTexture",(e,r)=>r.multipassGeometry.linearDepthTexture),new zt("nearFar",(e,r)=>r.camera.nearFar)),t.code.add(m`bool geometryDepthTest(vec2 pos, float elementDepth) {
float geometryDepth = linearDepthFromTexture(geometryDepthTexture, pos, nearFar);
return (elementDepth < (geometryDepth - 1.0));
}`)}let Nd=class{constructor(){this.enabled=!1}};function Fd(t,e){const r=t.fragment;r.include($s),r.uniforms.add(new zt("nearFar",(i,s)=>s.camera.nearFar)),r.uniforms.add(new Qe("depthMap",(i,s)=>s.linearDepthTexture)),r.uniforms.add(new ur("proj",(i,s)=>s.ssr.camera.projectionMatrix)),r.uniforms.add(new B("invResolutionHeight",(i,s)=>1/s.ssr.camera.height)),r.uniforms.add(new ur("reprojectionMatrix",(i,s)=>s.ssr.reprojectionMatrix)),r.code.add(m`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${e.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P, nearFar); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        return vec3(P, depth);
      }

      // continue with ray marching
      P += dP;
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
    }
    return vec3(P, 0.0);
  }
  `)}let zd=class{constructor(){this.enabled=!1,this.fadeFactor=1,this.reprojectionMatrix=k()}},jd=class{constructor(e,r,i){this.shadowMap=e,this.ssaoHelper=r,this.slicePlane=i,this.slot=V.OPAQUE_MATERIAL,this.hasOccludees=!1,this.enableFillLights=!0,this.transparencyPassType=ee.NONE,this.alignPixelEnabled=!1,this._camera=new z,this._inverseViewport=Y(),this.oldLighting=new Bi,this.newLighting=new Bi,this._fadedLighting=new Bi,this._lighting=this.newLighting,this.ssr=new zd,this.multipassTerrain=new Ol,this.multipassGeometry=new Nd,this.overlays=[],this.cloudsFade=new Md}get camera(){return this._camera}set camera(e){this._camera=this.ssr.camera=e,this._inverseViewport[0]=1/e.fullViewport[2],this._inverseViewport[1]=1/e.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}get weatherFading(){return this._lighting===this._fadedLighting}fadeLighting(e){const{oldLighting:r,newLighting:i}=this;e>=1?this._lighting=i:(this._fadedLighting.lerpLighting(r,i,e),this._lighting=this._fadedLighting)}},Ud=class{constructor(e,r,i,s=null){this.rctx=e,this.sliceHelper=s,this.lastFrameCamera=new z,this.output=x.Color,this.renderOccludedMask=Ro,this.bindParameters=new jd(r,i,s!=null?s.plane:null),this.bindParameters.alignPixelEnabled=!0}resetRenderOccludedMask(){this.renderOccludedMask=Ro}};const Ro=wt.Occlude|wt.OccludeAndTransparent|wt.OccludeAndTransparentStencil;let Er=class extends z{constructor(){super(...arguments),this._projectionMatrix=k()}get projectionMatrix(){return this._projectionMatrix}};g([M()],Er.prototype,"_projectionMatrix",void 0),g([M({readOnly:!0})],Er.prototype,"projectionMatrix",null),Er=g([$i("esri.views.3d.webgl-engine.lib.CascadeCamera")],Er);const Ao=16;function Vd(t){return Math.ceil(t/Ao)*Ao}var Po;(function(t){t[t.Highlight=0]="Highlight",t[t.Default=1]="Default"})(Po||(Po={}));let Xr=class{constructor(){this.camera=new Er,this.lightMat=k()}},Hd=class{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}},Wd=class{get depthTexture(){var e;return(e=this._fbo)==null?void 0:e.colorTexture}get textureSize(){return this._textureSize}get numCascades(){return this._numCascades}get cascadeDistances(){return Lr(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}constructor(e,r){this._rctx=e,this._viewingMode=r,this._enabled=!1,this._snapshots=new Array,this._textureSize=0,this._numCascades=1,this.settings=new Hd,this._projectionView=k(),this._projectionViewInverse=k(),this._modelViewLight=k(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=Ve(),this._cascades=[new Xr,new Xr,new Xr,new Xr],this._lastOrigin=null,this._maxTextureSize=Math.min(lt("esri-mobile")?2048:8192,this._rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}disposeOffscreenBuffers(){this._fbo=it(this._fbo),this._discardAllSnapshots()}set maxCascades(e){this.settings.maxNumCascadesHighQuality=Mt(Math.floor(e),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(e){this._enabled=e,e||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&this.depthTexture!=null}getSnapshot(e){return this.enabled?this._snapshots[e]:null}get cascades(){for(let e=0;e<this._numCascades;++e)es[e]=this._cascades[e];return es.length=this._numCascades,es}start(e,r,i,s,o){we(this.enabled),this._textureSize=this._computeTextureSize(e,o,s),this._ensureDepthTexture();const{near:n,far:a}=this._clampNearFar(i);this._computeCascadeDistances(a,n,s),this._setupMatrices(e,r);const{viewMatrix:l,projectionMatrix:c}=e;for(let d=0;d<this._numCascades;++d)this._constructCascade(d,c,l,r);this._lastOrigin=null,this.clear()}finish(e){we(this.enabled),this._rctx.bindFramebuffer(e)}getShadowMapMatrices(e){if(!this._lastOrigin||!tr(e,this._lastOrigin)){this._lastOrigin=this._lastOrigin||D(),H(this._lastOrigin,e);for(let r=0;r<this._numCascades;++r){Xs(Lo,this._cascades[r].lightMat,e);for(let i=0;i<16;++i)No[16*r+i]=Lo[i]}}return No}takeCascadeSnapshotTo(e,r){we(this.enabled);const i=this._ensureSnapshot(r);this._bindFbo();const s=this._rctx,o=s.bindTexture(i,ni.TEXTURE_UNIT_FOR_UPDATES);s.gl.copyTexSubImage2D(Sc.TEXTURE_2D,0,e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[0],e.camera.viewport[1],e.camera.viewport[2],e.camera.viewport[3]),s.bindTexture(o,ni.TEXTURE_UNIT_FOR_UPDATES)}clear(){const e=this._rctx;this._bindFbo(),e.setClearColor(1,1,1,1),e.clearSafe(yi.COLOR_BUFFER_BIT|yi.DEPTH_BUFFER_BIT)}_computeTextureSize(e,r,i){const s=Math.min(window.devicePixelRatio,r)/e.pixelRatio,o=Math.max(e.fullWidth,e.fullHeight)*s,n=i?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality;return Math.floor(Math.min(this._maxTextureSize,Vd((this.numCascades===1?1:2)*o*n)))}_ensureDepthTexture(){var r,i;if(((r=this._fbo)==null?void 0:r.width)===this._textureSize)return;const e=new Si(this._textureSize);e.wrapMode=Nr.CLAMP_TO_EDGE,e.samplingMode=_i.NEAREST,(i=this._fbo)==null||i.dispose(),this._fbo=new La(this._rctx,e,new bc(xc.DEPTH_COMPONENT16,this._textureSize))}_ensureSnapshot(e){let r=this._snapshots[e];if(r!=null&&r.descriptor.width===this._textureSize)return r;this._discardSnapshot(e);const i=new Si;return i.wrapMode=Nr.CLAMP_TO_EDGE,i.samplingMode=_i.NEAREST,i.width=this._textureSize,i.height=this._textureSize,r=new ni(this._rctx,i),this._snapshots[e]=r,r}_discardSnapshot(e){this._snapshots[e]=it(this._snapshots[e])}_discardAllSnapshots(){for(let e=0;e<this._snapshots.length;++e)this._discardSnapshot(e);this._snapshots.length=0}_bindFbo(){const e=this._rctx;e.unbindTexture(this.depthTexture),e.bindFramebuffer(this._fbo)}_constructCascade(e,r,i,s){const o=this._cascades[e],n=-this._cascadeDistances[e],a=-this._cascadeDistances[e+1],l=(r[10]*n+r[14])/Math.abs(r[11]*n+r[15]),c=(r[10]*a+r[14])/Math.abs(r[11]*a+r[15]);we(l<c);for(let p=0;p<8;++p){Lr(Eo,p%4==0||p%4==3?-1:1,p%4==0||p%4==1?-1:1,p<4?l:c,1);const v=Ne[p];rr(v,Eo,this._projectionViewInverse),v[0]/=v[3],v[1]/=v[3],v[2]/=v[3]}Dn(Ki,Ne[0]),o.camera.viewMatrix=Xs(Gd,this._modelViewLight,Ki);for(let p=0;p<8;++p)te(Ne[p],Ne[p],o.camera.viewMatrix);let d=Ne[0][2],f=Ne[0][2];for(let p=1;p<8;++p)d=Math.min(d,Ne[p][2]),f=Math.max(f,Ne[p][2]);d-=200,f+=200,o.camera.near=-f,o.camera.far=-d,Zd(i,s,d,f,o.camera),Lt(o.lightMat,o.camera.projectionMatrix,o.camera.viewMatrix);const u=this._textureSize/(this.numCascades===1?1:2);o.camera.viewport=[e%2==0?0:u,Math.floor(e/2)===0?0:u,u,u]}_setupMatrices(e,r){Lt(this._projectionView,e.projectionMatrix,e.viewMatrix),or(this._projectionViewInverse,this._projectionView);const i=this._viewingMode===St.Global?e.eye:W(Ki,0,0,1);da(this._modelViewLight,[0,0,0],[-r[0],-r[1],-r[2]],i)}_clampNearFar(e){let{near:r,far:i}=e;return r<2&&(r=2),i<2&&(i=2),r>=i&&(r=2,i=4),{near:r,far:i}}_computeCascadeDistances(e,r,i){const s=i?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor(lc(e/r,4)),s);const o=(e-r)/this._numCascades,n=(e/r)**(1/this._numCascades);let a=r,l=r;for(let c=0;c<this._numCascades+1;++c)this._cascadeDistances[c]=$t(a,l,this.settings.splitSchemeLambda),a*=n,l+=o}get gpuMemoryUsage(){var e;return this._snapshots.reduce((r,i)=>r+((i==null?void 0:i.gpuMemoryUsage)??0),((e=this._fbo)==null?void 0:e.gpuMemoryUsage)??0)}get test(){return{cascades:this._cascades,textureSize:this._textureSize}}};const Gd=k(),Eo=Ve(),Ne=[];for(let t=0;t<8;++t)Ne.push(Ve());const Do=Y(),$o=Y(),Bd=Y(),Io=Y(),Mo=Y(),Ki=D(),es=[],Lo=k(),No=new Array(64),Ae=Y(),kt=Y(),At=[Y(),Y(),Y(),Y()],re=Y(),ts=Y(),ft=Y(),br=Y(),qt=Y(),Zt=Y(),Jr=Y();function kd(t,e,r,i,s,o,n,a){Ft(Ae,0,0);for(let C=0;C<4;++C)Ot(Ae,Ae,t[C]);Kt(Ae,Ae,.25),Ft(kt,0,0);for(let C=4;C<8;++C)Ot(kt,kt,t[C]);Kt(kt,kt,.25),Or(At[0],t[4],t[5],.5),Or(At[1],t[5],t[6],.5),Or(At[2],t[6],t[7],.5),Or(At[3],t[7],t[4],.5);let l=0,c=Js(At[0],Ae);for(let C=1;C<4;++C){const b=Js(At[C],Ae);b<c&&(c=b,l=C)}er(re,At[l],t[l+4]);const d=re[0];let f,u;re[0]=-re[1],re[1]=d,er(ts,kt,Ae),ge(ts,re)<0&&In(re,re),Or(re,re,ts,r),Ys(re,re),f=u=ge(er(ft,t[0],Ae),re);for(let C=1;C<8;++C){const b=ge(er(ft,t[C],Ae),re);b<f?f=b:b>u&&(u=b)}mr(i,Ae),Kt(ft,re,f-e),Ot(i,i,ft);let p=-1,v=1,_=0,w=0;for(let C=0;C<8;++C){er(br,t[C],i),Ys(br,br);const b=re[0]*br[1]-re[1]*br[0];b>0?b>p&&(p=b,_=C):b<v&&(v=b,w=C)}Gt(p>0,"leftArea"),Gt(v<0,"rightArea"),Kt(qt,re,f),Ot(qt,qt,Ae),Kt(Zt,re,u),Ot(Zt,Zt,Ae),Jr[0]=-re[1],Jr[1]=re[0];const O=qr(i,t[w],Zt,Ot(ft,Zt,Jr),1,s),T=qr(i,t[_],Zt,ft,1,o),S=qr(i,t[_],qt,Ot(ft,qt,Jr),1,n),R=qr(i,t[w],qt,ft,1,a);Gt(O,"rayRay"),Gt(T,"rayRay"),Gt(S,"rayRay"),Gt(R,"rayRay")}function N(t,e){return 3*e+t}const Fo=Y();function Ce(t,e){return Ft(Fo,t[e],t[e+3]),Fo}const Te=Y(),P=Ns();function qd(t,e,r,i,s){er(Te,r,i),Kt(Te,Te,.5),P[0]=Te[0],P[1]=Te[1],P[2]=0,P[3]=Te[1],P[4]=-Te[0],P[5]=0,P[6]=Te[0]*Te[0]+Te[1]*Te[1],P[7]=Te[0]*Te[1]-Te[1]*Te[0],P[8]=1,P[N(0,2)]=-ge(Ce(P,0),t),P[N(1,2)]=-ge(Ce(P,1),t);let o=ge(Ce(P,0),r)+P[N(0,2)],n=ge(Ce(P,1),r)+P[N(1,2)],a=ge(Ce(P,0),i)+P[N(0,2)],l=ge(Ce(P,1),i)+P[N(1,2)];o=-(o+a)/(n+l),P[N(0,0)]+=P[N(1,0)]*o,P[N(0,1)]+=P[N(1,1)]*o,P[N(0,2)]+=P[N(1,2)]*o,o=1/(ge(Ce(P,0),r)+P[N(0,2)]),n=1/(ge(Ce(P,1),r)+P[N(1,2)]),P[N(0,0)]*=o,P[N(0,1)]*=o,P[N(0,2)]*=o,P[N(1,0)]*=n,P[N(1,1)]*=n,P[N(1,2)]*=n,P[N(2,0)]=P[N(1,0)],P[N(2,1)]=P[N(1,1)],P[N(2,2)]=P[N(1,2)],P[N(1,2)]+=1,o=ge(Ce(P,1),e)+P[N(1,2)],n=ge(Ce(P,2),e)+P[N(2,2)],a=ge(Ce(P,1),r)+P[N(1,2)],l=ge(Ce(P,2),r)+P[N(2,2)],o=-.5*(o/n+a/l),P[N(1,0)]+=P[N(2,0)]*o,P[N(1,1)]+=P[N(2,1)]*o,P[N(1,2)]+=P[N(2,2)]*o,o=ge(Ce(P,1),e)+P[N(1,2)],n=ge(Ce(P,2),e)+P[N(2,2)],a=-n/o,P[N(1,0)]*=a,P[N(1,1)]*=a,P[N(1,2)]*=a,s[0]=P[0],s[1]=P[1],s[2]=0,s[3]=P[2],s[4]=P[3],s[5]=P[4],s[6]=0,s[7]=P[5],s[8]=0,s[9]=0,s[10]=1,s[11]=0,s[12]=P[6],s[13]=P[7],s[14]=0,s[15]=P[8]}function Zd(t,e,r,i,s){const o=1/Ne[0][3],n=1/Ne[4][3];we(o<n);let a=o+Math.sqrt(o*n);const l=Math.sin($n(t[2]*e[0]+t[6]*e[1]+t[10]*e[2]));a/=l,kd(Ne,a,l,Do,$o,Bd,Io,Mo),qd(Do,$o,Io,Mo,s.projectionMatrix),s.projectionMatrix[10]=2/(r-i),s.projectionMatrix[14]=-(r+i)/(r-i)}var xt,Vt;(function(t){t[t.OBJECT=0]="OBJECT",t[t.HUD=1]="HUD",t[t.TERRAIN=2]="TERRAIN",t[t.OVERLAY=3]="OVERLAY",t[t.I3S=4]="I3S",t[t.PCL=5]="PCL",t[t.LOD=6]="LOD",t[t.VOXEL=7]="VOXEL"})(xt||(xt={}));let Xd=class{constructor(){this.verticalOffset=0,this.selectionMode=!1,this.hud=!0,this.selectOpaqueTerrainOnly=!0,this.invisibleTerrain=!1,this.backfacesTerrain=!0,this.isFiltered=!1,this.filteredLayerUids=[],this.store=Vt.ALL}};(function(t){t[t.MIN=0]="MIN",t[t.MINMAX=1]="MINMAX",t[t.ALL=2]="ALL"})(Vt||(Vt={}));let Jd=class{constructor(e,r,i){this.object=e,this.geometryId=r,this.triangleNr=i}},Yd=class extends Jd{constructor(e,r,i,s){super(e,r,i),this.center=s!=null?Mn(s):null}},Qd=class{constructor(e){this.layerUid=e}},Kd=class extends Qd{constructor(e,r){super(e),this.graphicUid=r}};function eh(t){return t!=null&&t.dist!=null}let th=class extends Kd{constructor(e,r,i){super(e,r),this.triangleNr=i}},rh=class{constructor(){this.adds=new Je,this.removes=new Je,this.updates=new Je({allocator:e=>e||new ih,deallocator:e=>(e.renderGeometry=null,e)})}clear(){this.adds.clear(),this.removes.clear(),this.updates.clear()}prune(){this.adds.prune(),this.removes.prune(),this.updates.prune()}get empty(){return this.adds.length===0&&this.removes.length===0&&this.updates.length===0}},ih=class{},sh=class{constructor(){this.adds=new Array,this.removes=new Array,this.updates=new Array}};const zo=1e-5;let oh=class{constructor(e){this.options=new Xd,this._results=new ah,this.transform=new Cl,this.tolerance=zo,this.verticalOffset=null,this._ray=vt(),this._rayEnd=D(),this._rayBeginTransformed=D(),this._rayEndTransformed=D(),this.viewingMode=e??St.Global}get results(){return this._results}get ray(){return this._ray}get rayBegin(){return this._ray.origin}get rayEnd(){return this._rayEnd}reset(e,r,i){this.resetWithRay(oc(e,r,this._ray),i)}resetWithRay(e,r){this.camera=r,e!==this._ray&&gs(e,this._ray),this.options.verticalOffset!==0?this.viewingMode===St.Local?this._ray.origin[2]-=this.options.verticalOffset:this.verticalOffset=this.options.verticalOffset:this.verticalOffset=null,K(this._rayEnd,this._ray.origin,this._ray.direction),this._results.init(this._ray)}intersect(e=null,r,i,s,o){this.point=r,this.filterPredicate=s,this.tolerance=i??zo;const n=co(this.verticalOffset);if(e&&e.length>0){const a=o?l=>{o(l)&&this.intersectObject(l)}:l=>{this.intersectObject(l)};for(const l of e){const c=l.getSpatialQueryAccelerator&&l.getSpatialQueryAccelerator();c!=null?(n!=null?c.forEachAlongRayWithVerticalOffset(this._ray.origin,this._ray.direction,a,n):c.forEachAlongRay(this._ray.origin,this._ray.direction,a),this.options.selectionMode&&this.options.hud&&c.forEachDegenerateObject(a)):l.objects.forAll(d=>a(d))}}this.sortResults()}intersectObject(e){const r=e.geometries;if(!r)return;const i=e.shaderTransformation,s=co(this.verticalOffset);for(const o of r){if(!o.visible)continue;const{material:n,id:a}=o;this.transform.setAndInvalidateLazyTransforms(i,o.shaderTransformation),te(this._rayBeginTransformed,this.rayBegin,this.transform.inverse),te(this._rayEndTransformed,this.rayEnd,this.transform.inverse);const l=this.transform.transform;s!=null&&(s.objectTransform=this.transform),n.intersect(o,this.transform.transform,this,this._rayBeginTransformed,this._rayEndTransformed,(c,d,f,u,p,v)=>{if(c>=0){if(this.filterPredicate!=null&&!this.filterPredicate(this._ray.origin,this._rayEnd,c))return;const _=u?this._results.hud:this._results,w=u?O=>{const T=new Yd(e,a,f,v);O.set(xt.HUD,T,c,d,Ls,p)}:O=>O.set(xt.OBJECT,{object:e,geometryId:a,triangleNr:f},c,d,l,p);if((_.min.drapedLayerOrder==null||p>=_.min.drapedLayerOrder)&&(_.min.dist==null||c<_.min.dist)&&w(_.min),this.options.store!==Vt.MIN&&(_.max.drapedLayerOrder==null||p<_.max.drapedLayerOrder)&&(_.max.dist==null||c>_.max.dist)&&w(_.max),this.options.store===Vt.ALL)if(u){const O=new ys(this._ray);w(O),this._results.hud.all.push(O)}else{const O=new lr(this._ray);w(O),this._results.all.push(O)}}})}}sortResults(e=this._results.all){e.sort((r,i)=>r.dist!==i.dist?(r.dist??0)-(i.dist??0):r.drapedLayerOrder!==i.drapedLayerOrder?(r.drapedLayerOrder??Number.MAX_VALUE)-(i.drapedLayerOrder??Number.MAX_VALUE):(i.drapedLayerGraphicOrder??Number.MIN_VALUE)-(r.drapedLayerGraphicOrder??Number.MIN_VALUE))}};function $f(t){return new oh(t)}let ah=class{constructor(){this.min=new lr(vt()),this.max=new lr(vt()),this.hud={min:new ys(vt()),max:new ys(vt()),all:new Array},this.ground=new lr(vt()),this.all=[]}init(e){this.min.init(e),this.max.init(e),this.ground.init(e),this.all.length=0,this.hud.min.init(e),this.hud.max.init(e),this.hud.all.length=0}},lr=class{get ray(){return this._ray}get distanceInRenderSpace(){return this.dist!=null?(Z(Yr,this.ray.direction,this.dist),at(Yr)):null}getIntersectionPoint(e){return!!eh(this)&&(Z(Yr,this.ray.direction,this.dist),K(e,this.ray.origin,Yr),!0)}getTransformedNormal(e){return H(Rr,this.normal),Rr[3]=0,rr(Rr,Rr,this.transformation),H(e,Rr),ne(e,e)}constructor(e){this.intersector=xt.OBJECT,this.normal=D(),this.transformation=k(),this._ray=vt(),this.init(e)}init(e){this.dist=null,this.target=null,this.drapedLayerOrder=null,this.drapedLayerGraphicOrder=null,this.intersector=xt.OBJECT,gs(e,this._ray)}set(e,r,i,s,o,n,a){this.intersector=e,this.dist=i,H(this.normal,s??Ln),nt(this.transformation,o??Ls),this.target=r,this.drapedLayerOrder=n,this.drapedLayerGraphicOrder=a}copy(e){gs(e.ray,this._ray),this.intersector=e.intersector,this.dist=e.dist,this.target=e.target,this.drapedLayerOrder=e.drapedLayerOrder,this.drapedLayerGraphicOrder=e.drapedLayerGraphicOrder,H(this.normal,e.normal),nt(this.transformation,e.transformation)}},ys=class extends lr{constructor(){super(...arguments),this.intersector=xt.HUD}};function nh(t){return new lr(t)}const Yr=D(),Rr=Ve();function lh(t){const e=new Map,r=i=>{let s=e.get(i);return s||(s=new sh,e.set(i,s)),s};return t.removes.forAll(i=>{rs(i)&&r(i.material).removes.push(i)}),t.adds.forAll(i=>{rs(i)&&r(i.material).adds.push(i)}),t.updates.forAll(i=>{rs(i.renderGeometry)&&r(i.renderGeometry.material).updates.push(i)}),e}function rs(t){return t.geometry.indexCount>=1}let ch=class{constructor(e,r){this._material=e,this._repository=r,this._map=new Map}destroy(){this._map.forEach((e,r)=>{e!=null&&this._repository.release(this._material,r)})}load(e,r,i){if(!this._material.requiresSlot(r,i))return null;this._map.has(i)||this._map.set(i,this._repository.acquire(this._material,r,i));const s=this._map.get(i);if(s!=null){if(s.ensureResources(e)===Cc.LOADED)return s;this._repository.requestRender()}return null}},dh=class extends bl{constructor(e=D()){super(),this.origin=e,this.slicePlaneLocalOrigin=this.origin}};const hh=ut().vec3f(h.POSITION),uh=ut().vec3f(h.POSITION).vec2f(h.UV0),ph=ut().vec3f(h.POSITION).vec4u8(h.COLOR);ut().vec3f(h.POSITION).vec4u8(h.OBJECTANDLAYERIDCOLOR);const fh=ut().vec3f(h.POSITION).vec2f(h.UV0).vec4u8(h.OBJECTANDLAYERIDCOLOR);ut().vec3f(h.POSITION).vec4u8(h.COLOR).vec4u8(h.OBJECTANDLAYERIDCOLOR);let en=class extends Ni{intersect(e,r,i,s,o,n){return Rl(e,i,s,o,void 0,n)}};function mh(t){t.fragment.code.add(m`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function gh(t){t.fragment.code.add(m`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}function jo(t){t.fragment.uniforms.add(new Qe("texWaveNormal",e=>e.waveNormal),new Qe("texWavePerturbation",e=>e.wavePertubation),new Oe("waveParams",e=>Lr(vh,e.waveStrength,e.waveTextureRepeat,e.flowStrength,e.flowOffset)),new zt("waveDirection",e=>Ft(_h,e.waveDirection[0]*e.waveVelocity,e.waveDirection[1]*e.waveVelocity))),t.include(mh),t.fragment.code.add(m`const vec2  FLOW_JUMP = vec2(6.0/25.0, 5.0/24.0);
vec2 textureDenormalized2D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rg - 1.0;
}
float sampleNoiseTexture(vec2 _uv) {
return texture(texWavePerturbation, _uv).b;
}
vec3 textureDenormalized3D(sampler2D _tex, vec2 _uv) {
return 2.0 * texture(_tex, _uv).rgb - 1.0;
}
float computeProgress(vec2 uv, float time) {
return fract(time);
}
float computeWeight(vec2 uv, float time) {
float progress = computeProgress(uv, time);
return 1.0 - abs(1.0 - 2.0 * progress);
}
vec3 computeUVPerturbedWeigth(sampler2D texFlow, vec2 uv, float time, float phaseOffset) {
float flowStrength = waveParams[2];
float flowOffset = waveParams[3];
vec2 flowVector = textureDenormalized2D(texFlow, uv) * flowStrength;
float progress = computeProgress(uv, time + phaseOffset);
float weight = computeWeight(uv, time + phaseOffset);
vec2 result = uv;
result -= flowVector * (progress + flowOffset);
result += phaseOffset;
result += (time - progress) * FLOW_JUMP;
return vec3(result, weight);
}
const float TIME_NOISE_TEXTURE_REPEAT = 0.3737;
const float TIME_NOISE_STRENGTH = 7.77;
vec3 getWaveLayer(sampler2D _texNormal, sampler2D _dudv, vec2 _uv, vec2 _waveDir, float time) {
float waveStrength = waveParams[0];
vec2 waveMovement = time * -_waveDir;
float timeNoise = sampleNoiseTexture(_uv * TIME_NOISE_TEXTURE_REPEAT) * TIME_NOISE_STRENGTH;
vec3 uv_A = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.0);
vec3 uv_B = computeUVPerturbedWeigth(_dudv, _uv + waveMovement, time + timeNoise, 0.5);
vec3 normal_A = textureDenormalized3D(_texNormal, uv_A.xy) * uv_A.z;
vec3 normal_B = textureDenormalized3D(_texNormal, uv_B.xy) * uv_B.z;
vec3 mixNormal = normalize(normal_A + normal_B);
mixNormal.xy *= waveStrength;
mixNormal.z = sqrt(1.0 - dot(mixNormal.xy, mixNormal.xy));
return mixNormal;
}
vec4 getSurfaceNormalAndFoam(vec2 _uv, float _time) {
float waveTextureRepeat = waveParams[1];
vec3 normal = getWaveLayer(texWaveNormal, texWavePerturbation, _uv * waveTextureRepeat, waveDirection, _time);
float foam  = normals2FoamIntensity(normal, waveParams[0]);
return vec4(normal, foam);
}`)}const vh=Ve(),_h=Y();function Uo(t,e){e.spherical?t.vertex.code.add(m`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return normalize(pos + origin);
}`):t.vertex.code.add(m`vec3 getLocalUp(in vec3 pos, in vec3 origin) {
return vec3(0.0, 0.0, 1.0);
}`),e.spherical?t.vertex.code.add(m`mat3 getTBNMatrix(in vec3 n) {
vec3 t = normalize(cross(vec3(0.0, 0.0, 1.0), n));
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`):t.vertex.code.add(m`mat3 getTBNMatrix(in vec3 n) {
vec3 t = vec3(1.0, 0.0, 0.0);
vec3 b = normalize(cross(n, t));
return mat3(t, b, n);
}`)}function yh(t){t.fragment.code.add(m`const float GAMMA = 2.2;
const float INV_GAMMA = 0.4545454545;
vec4 delinearizeGamma(vec4 color) {
return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.w);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}let wh=class extends Al{constructor(e,r){super(e,"samplerCube",Pl.Pass,(i,s,o)=>i.bindTexture(e,r(s,o)))}};function Sh(t){const e=t.fragment;e.uniforms.add(new ur("rotationMatrixClouds",(r,i)=>i.cloudsFade.parallax.transform),new ur("rotationMatrixCloudsCrossFade",(r,i)=>i.cloudsFade.parallaxNew.transform),new ir("anchorPosition",(r,i)=>i.cloudsFade.parallax.anchorPointClouds),new ir("anchorPositionCrossFade",(r,i)=>i.cloudsFade.parallaxNew.anchorPointClouds),new B("cloudsHeight",(r,i)=>i.cloudsFade.parallax.cloudsHeight),new B("radiusCurvatureCorrectionFactor",(r,i)=>i.cloudsFade.parallax.radiusCurvatureCorrectionFactor),new B("totalFadeInOut",(r,i)=>i.cloudsFade.fadeInOut.stage===nr.FINISHED?i.cloudsFade.fadeInOutHeight.factor+1-i.cloudsFade.fadeIn.factor:i.cloudsFade.fadeInOutHeight.factor+1-i.cloudsFade.fadeInOut.factor),new B("crossFadeAnchorFactor",(r,i)=>Mt(i.cloudsFade.crossFade.factor,0,1)),new wh("cubeMap",(r,i)=>{var s;return(s=i.cloudsFade.data)!=null&&s.cubeMap?i.cloudsFade.data.cubeMap.colorTexture:null}),new ai("crossFade",(r,i)=>i.cloudsFade.crossFade.enabled),new ai("readChannelsRG",(r,i)=>i.cloudsFade.readChannels===Ci.RG),new ai("fadeTextureChannels",(r,i)=>i.cloudsFade.renderingStage===jr.FADING_TEXTURE_CHANNELS)),e.constants.add("planetRadius","float",Nn.radius),e.code.add(m`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),e.code.add(m`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),e.code.add(m`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),ya(e),wa(e),e.code.add(m`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(mainLightDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(mainLightDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, RIM_SCATTERING_FACTOR)) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),e.code.add(m`vec4 getCloudData(vec3 rayDir, bool readOtherChannel)
{
vec4 cloudData = texture(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
bool readChannels = readChannelsRG ^^ readOtherChannel;
if (readChannels) {
cloudData = vec4(vec3(cloudData.r), cloudData.g);
} else {
cloudData = vec4(vec3(cloudData.b), cloudData.a);
}
if (length(cloudData) == 0.0) {
return vec4(cloudData.rgb, 1.0);
}
return cloudData;
}`),e.code.add(m`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),e.code.add(m`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected, fadeTextureChannels);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),e.code.add(m`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}function xh(t,e){t.include(El,e),t.include(yh),t.include(gh),e.hasCloudsReflections&&t.include(Sh,e),e.hasScreenSpaceReflections&&t.include(Fd,e);const r=t.fragment;r.constants.add("fresnelSky","vec3",[.02,1,15]).add("fresnelMaterial","vec2",[.02,.1]).add("roughness","float",.015).add("foamIntensityExternal","float",1.7).add("ssrIntensity","float",.65).add("ssrHeightFadeStart","float",3e5).add("ssrHeightFadeEnd","float",5e5).add("waterDiffusion","float",.92).add("waterSeaColorMod","float",.8).add("correctionViewingPowerFactor","float",.4).add("skyZenitColor","vec3",[.52,.68,.9]).add("skyColor","vec3",[.67,.79,.9]).add("cloudFresnelModifier","vec2",[1.2,.01]),r.code.add(m`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),r.uniforms.add(new B("lightingSpecularStrength",(i,s)=>s.lighting.mainLight.specularStrength),new B("lightingEnvironmentStrength",(i,s)=>s.lighting.mainLight.environmentStrength)),r.code.add(m`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
specular = lightingSpecularStrength * shadingInfo.NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),e.hasCloudsReflections&&r.code.add(m`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * clamp((1.0 - totalFadeInOut), 0.0, 1.0);`),e.hasScreenSpaceReflections?(r.uniforms.add(new ur("view",(i,s)=>s.ssr.camera.viewMatrix),new Qe("lastFrameColorTexture",(i,s)=>s.ssr.lastFrameColorTexture),new B("fadeFactorSSR",(i,s)=>s.ssr.fadeFactor)),r.code.add(m`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view *vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`)):r.code.add(m`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),e.hasCloudsReflections?e.hasScreenSpaceReflections?r.code.add(m`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`):r.code.add(m`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`):r.code.add(m`return waterRenderedColor;
}`)}function Th(t){const e=new _r,{vertex:r,fragment:i}=e;Hr(r,t),e.include(Is,t),e.attributes.add(h.POSITION,"vec3"),e.attributes.add(h.UV0,"vec2");const s=new Oe("waterColor",o=>o.color);if(t.output===x.Color&&t.isDraped)return e.varyings.add("vpos","vec3"),r.uniforms.add(s),r.code.add(m`
        void main(void) {
          if (waterColor.a < ${m.float(De)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vpos = position;
          gl_Position = transformPosition(proj, view, vpos);
        }
    `),i.uniforms.add(s),i.code.add(m`void main() {
fragColor = waterColor;
}`),e;switch(t.output!==x.Color&&t.output!==x.Alpha||(e.include(Uo,t),e.include(Dl,t),e.varyings.add("vuv","vec2"),e.varyings.add("vpos","vec3"),e.varyings.add("vnormal","vec3"),e.varyings.add("vtbnMatrix","mat3"),t.hasMultipassTerrain&&e.varyings.add("depth","float"),r.uniforms.add(s),r.code.add(m`
      void main(void) {
        if (waterColor.a < ${m.float(De)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vuv = uv0;
        vpos = position;

        vnormal = getLocalUp(vpos, localOrigin);
        vtbnMatrix = getTBNMatrix(vnormal);

        ${t.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}

        gl_Position = transformPosition(proj, view, vpos);
        ${t.output===x.Color?"forwardLinearDepth();":""}
      }
    `)),e.include(Es,t),t.output){case x.Alpha:e.include(ot,t),i.uniforms.add(s),i.code.add(m`
        void main() {
          discardBySlice(vpos);
          ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

          fragColor = vec4(waterColor.a);
        }
      `);break;case x.Color:e.include($l),e.include(Il,{pbrMode:Sa.Disabled,lightingSphericalHarmonicsOrder:2}),e.include(jo),e.include(ot,t),e.include(Ml,t),e.include(xh,t),i.uniforms.add(s,new B("timeElapsed",o=>o.timeElapsed),r.uniforms.get("view"),r.uniforms.get("localOrigin")),Ps(i,t),i.include(Li),ya(i),wa(i),i.code.add(m`
      void main() {
        discardBySlice(vpos);
        ${t.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        vec3 localUp = vnormal;
        // the created normal is in tangent space
        vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);

        // we rotate the normal according to the tangent-bitangent-normal-Matrix
        vec3 n = normalize(vtbnMatrix * tangentNormalFoam.xyz);
        vec3 v = -normalize(vpos - cameraPosition);
        float shadow = ${t.receiveShadows?m`1.0 - readShadowMap(vpos, linearDepth)`:"1.0"};
        vec4 vPosView = view * vec4(vpos, 1.0);
        vec4 final = vec4(getSeaColor(n, v, mainLightDirection, waterColor.rgb, mainLightIntensity, localUp, shadow, tangentNormalFoam.w, vPosView.xyz, vpos + localOrigin), waterColor.w);

        // gamma correction
        fragColor = delinearizeGamma(final);
        fragColor = highlightSlice(fragColor, vpos);
        ${t.transparencyPassType===ee.Color?"fragColor = premultiplyAlpha(fragColor);":""}
      }
    `);break;case x.Normal:e.include(Uo,t),e.include(jo,t),e.include(ot,t),e.varyings.add("vpos","vec3"),e.varyings.add("vuv","vec2"),r.uniforms.add(s),r.code.add(m`
        void main(void) {
          if (waterColor.a < ${m.float(De)}) {
            // Discard this vertex
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
            return;
          }

          vuv = uv0;
          vpos = position;

          gl_Position = transformPosition(proj, view, vpos);
        }
    `),i.uniforms.add(new B("timeElapsed",o=>o.timeElapsed)),i.code.add(m`void main() {
discardBySlice(vpos);
vec4 tangentNormalFoam = getSurfaceNormalAndFoam(vuv, timeElapsed);
tangentNormalFoam.xyz = normalize(tangentNormalFoam.xyz);
fragColor = vec4((tangentNormalFoam.xyz + vec3(1.0)) * 0.5, tangentNormalFoam.w);
}`);break;case x.Highlight:e.include(zi,t),e.varyings.add("vpos","vec3"),r.uniforms.add(s),r.code.add(m`
      void main(void) {
        if (waterColor.a < ${m.float(De)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
      }
    `),e.include(ot,t),i.code.add(m`void main() {
discardBySlice(vpos);
outputHighlight();
}`);break;case x.ObjectAndLayerIdColor:e.include(Mi,t),e.varyings.add("vpos","vec3"),r.uniforms.add(s),r.code.add(m`
      void main(void) {
        if (waterColor.a < ${m.float(De)}) {
          // Discard this vertex
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          return;
        }

        vpos = position;
        gl_Position = transformPosition(proj, view, vpos);
        forwardObjectAndLayerIdColor();
      }
    `),e.include(ot,t),i.code.add(m`void main() {
discardBySlice(vpos);
outputObjectAndLayerIdColor();
}`)}return e}const Oh=Object.freeze(Object.defineProperty({__proto__:null,build:Th},Symbol.toStringTag,{value:"Module"}));let tn=class rn extends wr{initializeConfiguration(e,r){r.spherical=e.viewingMode===St.Global,r.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result}initializeProgram(e){return new Sr(e.rctx,rn.shader.get().build(this.configuration),Wr)}_setPipelineState(e){const r=this.configuration,i=e===ee.NONE,s=e===ee.FrontFace;return Ze({blending:r.output!==x.Normal&&r.output!==x.Highlight&&r.output!==x.ObjectAndLayerIdColor&&r.transparent?i?Dr:ji(e):null,depthTest:{func:Fs(e)},depthWrite:i?r.writeDepth?pr:null:Ea(e),colorWrite:ct,polygonOffset:i||s?null:Da(r.enableOffset)})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}};tn.shader=new xr(Oh,()=>gr(()=>import("./WaterSurface.glsl-22022987.js"),["assets/WaterSurface.glsl-22022987.js","assets/VertexColor.glsl-a0697bd4.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css","assets/requestImageUtils-2f3ee55b.js","assets/basicInterfaces-bb952591.js","assets/enums-b14466b3.js","assets/Texture-31c4f382.js","assets/InterleavedLayout-ddec9a00.js","assets/BufferView-c58f8e7f.js","assets/types-1305598a.js","assets/mat4f64-65d35099.js","assets/Indices-b766e722.js","assets/triangle-0231590c.js","assets/sphere-812d69dd.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-e0d341b8.js","assets/VertexAttribute-9f2e53ec.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/OrderIndependentTransparency-0ab46cc4.js","assets/quat-7c737b79.js","assets/vec3f32-ad1dc57f.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-d7a3254f.js","assets/DoubleArray-96e88651.js","assets/plane-f0d62c60.js","assets/interfaces-6a52f173.js","assets/floatRGBA-f2fcae6c.js","assets/triangulationUtils-4a253704.js","assets/earcut-15ea0d28.js","assets/deduplicate-058a0b05.js","assets/NestedMap-1b5db22e.js","assets/Octree-3004e05b.js","assets/boundedPlane-0cbeb150.js","assets/glUtil-0b7ee6ea.js"]));let se=class extends yr{constructor(){super(...arguments),this.output=x.Color,this.transparencyPassType=ee.NONE,this.spherical=!1,this.receiveShadows=!1,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!1,this.hasScreenSpaceReflections=!1,this.doublePrecisionRequiresObfuscation=!1,this.hasCloudsReflections=!1,this.objectAndLayerIdColorInstanced=!1,this.isDraped=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}};g([y({count:x.COUNT})],se.prototype,"output",void 0),g([y({count:ee.COUNT})],se.prototype,"transparencyPassType",void 0),g([y()],se.prototype,"spherical",void 0),g([y()],se.prototype,"receiveShadows",void 0),g([y()],se.prototype,"hasSlicePlane",void 0),g([y()],se.prototype,"transparent",void 0),g([y()],se.prototype,"enableOffset",void 0),g([y()],se.prototype,"writeDepth",void 0),g([y()],se.prototype,"hasScreenSpaceReflections",void 0),g([y()],se.prototype,"doublePrecisionRequiresObfuscation",void 0),g([y()],se.prototype,"hasCloudsReflections",void 0),g([y()],se.prototype,"objectAndLayerIdColorInstanced",void 0),g([y()],se.prototype,"isDraped",void 0),g([y()],se.prototype,"hasMultipassTerrain",void 0),g([y()],se.prototype,"cullAboveGround",void 0),g([y({constValue:Sa.Water})],se.prototype,"pbrMode",void 0),g([y({constValue:!0})],se.prototype,"useCustomDTRExponentForWater",void 0),g([y({constValue:!0})],se.prototype,"highStepCount",void 0),g([y({constValue:!1})],se.prototype,"useFillLights",void 0);let Ch=class extends Fi{_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.receiveShadows&&this._material.setParameters({receiveShadows:e.shadowMap.enabled})}_updateSSRState(e){e.ssr.enabled!==this._material.parameters.hasScreenSpaceReflections&&this._material.setParameters({hasScreenSpaceReflections:e.ssr.enabled})}_updateCloudsReflectionState(e){const r=e.cloudsFade.data!=null;r!==this._material.parameters.hasCloudsReflections&&this._material.setParameters({hasCloudsReflections:r})}ensureResources(e){return this._techniqueRepository.constructionContext.waterTextureRepository.ensureResources(e)}beginSlot(e){return this._output===x.Color&&(this._updateShadowState(e),this._updateSSRState(e),this._updateCloudsReflectionState(e)),this._material.setParameters(this._techniqueRepository.constructionContext.waterTextureRepository.passParameters),this.ensureTechnique(tn,e)}},bh=class extends en{constructor(e){super(e,new Rh),this._configuration=new se,this.animation=new Qc}getConfiguration(e,r){return this._configuration.output=e,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.receiveShadows=this.parameters.receiveShadows,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.hasScreenSpaceReflections=this.parameters.hasScreenSpaceReflections,this._configuration.hasCloudsReflections=this.parameters.hasCloudsReflections,this._configuration.isDraped=this.parameters.isDraped,this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<$a,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration}update(e){const r=Math.min(e.camera.relativeElevation,e.camera.distance);this.animation.enabled=Math.sqrt(this.parameters.waveTextureRepeat/this.parameters.waveStrength)*r<Ah;const i=this.animation.advance(e);return this.setParameters({timeElapsed:Fn(this.animation.time)*this.parameters.animationSpeed},!1),this.animation.enabled&&i}requiresSlot(e,r){switch(r){case x.Normal:return e===V.DRAPED_WATER;case x.Color:if(this.parameters.isDraped)return e===V.DRAPED_MATERIAL;break;case x.Alpha:break;case x.Highlight:case x.ObjectAndLayerIdColor:return e===V.OPAQUE_MATERIAL||e===V.DRAPED_MATERIAL;default:return!1}let i=V.OPAQUE_MATERIAL;return this.parameters.transparent&&(i=this.parameters.writeDepth?V.TRANSPARENT_MATERIAL:V.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL),e===i}createGLMaterial(e){return new Ch(e)}createBufferWriter(){return new Ms(lt("enable-feature:objectAndLayerId-rendering")?fh:uh)}},Rh=class extends xa{constructor(){super(...arguments),this.waveStrength=.06,this.waveTextureRepeat=32,this.waveDirection=Ts(1,0),this.waveVelocity=.05,this.flowStrength=.015,this.flowOffset=-.5,this.animationSpeed=.35,this.timeElapsed=0,this.color=Nt(0,0,0,0),this.transparent=!0,this.writeDepth=!0,this.hasSlicePlane=!1,this.isDraped=!1,this.receiveShadows=!0,this.hasScreenSpaceReflections=!1,this.hasCloudsReflections=!1,this.origin=D(),this.modelTransformation=null}};const Ah=35e3;let Hs=class{constructor(e=0,r=0){this.from=e,this.to=r}get numElements(){return this.to-this.from}};function Vo(t){const e=new Map;t.forAll(i=>e.set(i.from,i));let r=!0;for(;r;)r=!1,t.forEach(i=>{const s=e.get(i.to);s&&(i.to=s.to,e.delete(s.from),t.removeUnordered(s),r=!0)})}let Ho=class extends Hs{constructor(e,r,i){super(r,i),this.geometry=e}get isVisible(){return this.geometry.visible}get hasHighlights(){return this.geometry.highlights!=null&&this.isVisible}get hasOccludees(){return this.geometry.occludees!=null}},Ph=class{constructor(){this.first=0,this.count=0}},Eh=class{constructor(){this._numElements=0,this._instances=new Map,this.holes=new Je({allocator:e=>e||new Hs,deallocator:null}),this.hasHiddenInstances=!1,this.hasHighlights=!1,this.hasOccludees=!1,this.drawCommandsDirty=!0,this.drawCommandsDefault=Qr(),this.drawCommandsHighlight=Qr(),this.drawCommandsOccludees=Qr(),this.drawCommandsShadowHighlightRest=Qr()}get numElements(){return this._numElements}get instances(){return this._instances}addInstance(e,r){this.deleteInstance(e),this._instances.set(e,r),this._numElements+=r.numElements}deleteInstance(e){const r=this._instances.get(e);r&&(this._numElements-=r.numElements,this._instances.delete(e))}updateInstance(e,r,i){const s=this._instances.get(e);s&&(this._numElements-=s.numElements,s.from=r,s.to=i,this._numElements+=s.numElements)}updateDrawState(e){e.isVisible?(e.hasHighlights&&(this.hasHighlights=!0),e.hasOccludees&&(this.hasOccludees=!0)):this.hasHiddenInstances=!0}updateDrawCommands(e){if(this.drawCommandsDefault.clear(),this.drawCommandsHighlight.clear(),this.drawCommandsOccludees.clear(),this.drawCommandsShadowHighlightRest.clear(),this.drawCommandsDirty=!1,this._instances.size===0)return;if(!this.needsMultipleCommands()){const i=this.drawCommandsDefault.pushNew(),s=this.holes.front();return this.vao!=null&&this.holes.length===1&&s.to===Math.floor(this.vao.byteSize/e)?(i.first=0,void(i.count=s.from)):(i.first=1/0,i.count=0,this._instances.forEach(o=>{i.first=Math.min(i.first,o.from),i.count=Math.max(i.count,o.to)}),void(i.count-=i.first))}const r=Array.from(this._instances.values()).sort((i,s)=>i.from===s.from?i.to-s.to:i.from-s.from);for(const i of r)i.isVisible&&(Wo(i.hasOccludees?this.drawCommandsOccludees:this.drawCommandsDefault,i),Wo(i.hasHighlights?this.drawCommandsHighlight:this.drawCommandsShadowHighlightRest,i))}needsMultipleCommands(){return this.hasOccludees||this.hasHighlights||this.hasHiddenInstances}};function Dh(t){return t.vao!=null}function Qr(){return new Je({allocator:t=>t||new Ph,deallocator:t=>t})}function Wo(t,e){const r=t.back();if(r==null){const i=t.pushNew();return i.first=e.from,void(i.count=e.numElements)}if($h(r,e)){const i=e.from-r.first+e.numElements;r.count=i}else{const i=t.pushNew();i.first=e.from,i.count=e.numElements}}function $h(t,e){return t.first+t.count>=e.from}let Ih=class{constructor(e){this.origin=e,this.buffers=new Array}dispose(){this.buffers.forEach(e=>e.vao.dispose()),this.buffers.length=0}findBuffer(e){return this.buffers.find(r=>r.instances.has(e))}};const Mh=jn+1;let Lh=class{constructor(e,r,i){this._rctx=e,this._locations=r,this._layout=i,this._cache=e.newCache("VaoCache",Nh)}dispose(){this._cache.destroy()}newVao(e){const r=e.toString(),i=this._cache.pop(r);if(i!=null){const o=i.pop();return i.length>0&&this._cache.put(r,i,e*i.length,Mh),o}const s=new Ll(this._rctx,this._locations,{geometry:this._layout},{geometry:Rc.createVertex(this._rctx,Tc.STATIC_DRAW)});return s.vertexBuffers.geometry.setSize(e),s}deleteVao(e){if(e==null)return null;const r=e.byteSize,i=r.toString(),s=this._cache.pop(i);return s!=null?(s.push(e),this._cache.put(i,s,r*s.length,-1)):this._cache.put(i,[e],r,-1),null}};function Nh(t,e){if(e===zn.ALL)return void t.forEach(s=>s.dispose());const r=t.pop(),i=t.length*r.byteSize;return r.dispose(),i}let Fh=class{constructor(e,r,i){this._rctx=e,this._materialRepository=r,this.material=i,this._dataByOrigin=new Map,this._hasHighlights=!1,this._hasOccludees=!1,this._glMaterials=new ch(this.material,this._materialRepository),this._bufferWriter=i.createBufferWriter(),this._vaoCache=new Lh(e,i.vertexAttributeLocations,Ic(this._bufferWriter.vertexBufferLayout))}dispose(){this._glMaterials.destroy(),this._dataByOrigin.forEach(e=>e.dispose()),this._dataByOrigin.clear(),this._vaoCache.dispose()}get isEmpty(){return this._dataByOrigin.size===0}get hasHighlights(){return this._hasHighlights}get hasOccludees(){return this._hasOccludees}get hasWater(){return!this.isEmpty&&this.material instanceof bh}get rendersOccluded(){return!this.isEmpty&&this.material.renderOccluded!==wt.Occlude}get numGeometries(){let e=0;return this._dataByOrigin.forEach(r=>e+=r.buffers.reduce((i,s)=>i+s.instances.size,0)),e}forEachGeometry(e){this._dataByOrigin.forEach(r=>r.buffers.forEach(i=>i.instances.forEach(s=>e(s.geometry))))}modify(e){this._updateGeometries(e.updates),this._addAndRemoveGeometries(e.adds,e.removes),this._updateDrawCommands()}_updateGeometries(e){const r=this._bufferWriter,i=r.vertexBufferLayout.stride/4;for(const s of e){const o=s.renderGeometry,n=this._dataByOrigin.get(o.localOrigin.id),a=n==null?void 0:n.findBuffer(o.id);if(a==null)return;const l=a.instances.get(o.id);if(s.updateType&(qe.GEOMETRY|qe.TRANSFORMATION)){const c=ri(r.elementCount(l.geometry.geometry)*i),d=r.vertexBufferLayout.createView(c.buffer);this._writeGeometry(o,d,0),a.vao.vertexBuffers.geometry.setSubData(c,l.from*i,0,l.numElements*i),ii()}s.updateType&(qe.HIGHLIGHT|qe.OCCLUDEE|qe.VISIBILITY)&&(a.drawCommandsDirty=!0)}}_computeDeltas(e,r){const i=new js;for(const s of e){const o=s.localOrigin;if(o==null)continue;let n=i.get(o.id,null);n==null&&(n=new Go(o.vec3),i.set(o.id,null,n)),n.changes.push(s)}for(const s of r){const o=s.localOrigin;if(o==null)continue;const n=this._dataByOrigin.get(o.id),a=n==null?void 0:n.findBuffer(s.id);if(a==null)continue;let l=i.get(o.id,a);l==null&&(l=new Go(o.vec3),i.set(o.id,a,l)),l.changes.push(s)}return i}_addAndRemoveGeometries(e,r){const{_bufferWriter:i,_dataByOrigin:s}=this,o=i.vertexBufferLayout.stride/4,n=this._computeDeltas(e,r);n.forEach((a,l)=>{const c=a.get(null),d=c!=null?c.changes:[];n.delete(l,null);let f=s.get(l);if(a.forEach((u,p)=>{if(n.delete(l,p),p==null)return void we(!1,"No VAO for removed geometries");if(p.instances.size===u.changes.length)return this._vaoCache.deleteVao(p.vao),Qs(f.buffers,p),void(f.buffers.length===0&&d.length===0&&s.delete(l));const v=p.numElements,_=p.vao.byteSize/4,w=d.reduce((R,C)=>R+i.elementCount(C.geometry),0),O=u.changes.reduce((R,C)=>R+i.elementCount(C.geometry),0),T=Math.min((v+w-O)*o,ti),S=T>_;T>Ai&&T<_/2?(u.changes.forEach(({id:R})=>p.deleteInstance(R)),p.instances.forEach(({geometry:R})=>d.push(R)),this._vaoCache.deleteVao(p.vao),Qs(f.buffers,p)):S?this._applyAndRebuild(p,d,u):this._applyRemoves(p,u)}),d.length>0)for(f==null&&(f=new Ih(c.origin),s.set(l,f)),f.buffers.forEach(u=>this._applyAdds(u,d));d.length>0;)f.buffers.push(this._applyAndRebuild(new Eh,d,null))})}_updateDrawCommands(){this._hasHighlights=!1,this._hasOccludees=!1,this._dataByOrigin.forEach(e=>{e.buffers.forEach(r=>{r.drawCommandsDirty&&(r.hasHiddenInstances=!1,r.hasHighlights=!1,r.hasOccludees=!1,st(r.instances,i=>(r.updateDrawState(i),r.hasHiddenInstances&&r.hasHighlights&&r.hasOccludees)),r.updateDrawCommands(this._bufferWriter.vertexBufferLayout.stride)),this._hasHighlights=this._hasHighlights||r.hasHighlights,this._hasOccludees=this._hasOccludees||r.hasOccludees})})}_applyAndRebuild(e,r,i){if(i!=null)for(const v of i.changes)e.deleteInstance(v.id);const s=this._bufferWriter,o=s.vertexBufferLayout.stride,n=o/4,a=Math.floor(ti/n);let l=e.numElements;for(;r.length>0;){const v=r.pop(),_=s.elementCount(v.geometry);if(l+_>a&&l>0){r.push(v);break}l+=_;const w=new Ho(v,0,0);we(e.instances.get(v.id)==null),e.addInstance(v.id,w)}const c=l*n,d=ri(c),f=s.vertexBufferLayout.createView(d.buffer);let u=0;e.hasHiddenInstances=!1,e.hasHighlights=!1,e.hasOccludees=!1,e.instances.forEach((v,_)=>{this._writeGeometry(v.geometry,f,u);const w=u;u+=s.elementCount(v.geometry.geometry),e.updateInstance(_,w,u),e.updateDrawState(v)}),this._vaoCache.deleteVao(e.vao),e.vao=this._vaoCache.newVao(qo(c)),e.vao.vertexBuffers.geometry.setSubData(d,0,0,u*n),ii(),e.holes.clear();const p=e.holes.pushNew();return p.from=u,p.to=Math.floor(e.vao.byteSize/o),e.updateDrawCommands(o),e}_applyRemoves(e,r){if(r.changes.length===0)return;for(const a of r.changes){const l=a.id,c=e.instances.get(l);if(!c)continue;e.deleteInstance(l);const d=Be.back();if(d){if(d.to===c.from){d.to=c.to;continue}if(d.from===c.to){d.from=c.from;continue}}const f=Be.pushNew();f.from=c.from,f.to=c.to}Vo(Be);const i=this._bufferWriter.vertexBufferLayout.stride/4,s=Be.reduce((a,l)=>Math.max(a,l.numElements),0)*i,o=ri(s);o.fill(0,0,s);const n=e.vao.vertexBuffers.geometry;Be.forAll(a=>n.setSubData(o,a.from*i,0,a.numElements*i)),ii(),e.holes.pushArray(Be.data,Be.length),Be.forAll((a,l)=>Be.data[l]=null),Be.clear(),e.drawCommandsDirty=!0}_applyAdds(e,r){if(r.length===0)return;if(!Dh(e))return void this._applyAndRebuild(e,r,null);const i=this._bufferWriter,s=i.vertexBufferLayout.stride/4,o=e.numElements,n=r.reduce((O,T)=>O+i.elementCount(T.geometry),0),a=Math.min((o+n)*s,ti),l=4*a;if(e.vao.byteSize<qo(ti-Ai)&&l>e.vao.byteSize)return void this._applyAndRebuild(e,r,null);Vo(e.holes);const c=new Array;for(const O of r){const T=i.elementCount(O.geometry),S=zh(e.holes,T);c.push(S)}const d=e.vao.vertexBuffers.geometry;let f=0,u=0,p=0;const v=ri(a),_=i.vertexBufferLayout.createView(v.buffer);r.forEach((O,T)=>{const S=c[T];if(S==null)return;if(p!==S){const b=p-u;b>0&&d.setSubData(v,u*s,0,b*s),u=S,f=0}const R=i.elementCount(O.geometry);this._writeGeometry(O,_,f),f+=R,p=S+R;const C=new Ho(O,S,S+R);we(e.instances.get(O.id)==null),e.addInstance(O.id,C),e.drawCommandsDirty=!0});const w=p-u;w>0&&d.setSubData(v,u*s,0,w*s),Un(r,(O,T)=>c[T]==null),ii()}_writeGeometry(e,r,i){const s=e.localOrigin.vec3;cc(Bo,-s[0],-s[1],-s[2]);const o=Lt(jh,Bo,e.transformation);or(Kr,o),ca(Kr,Kr),this._bufferWriter.write(o,Kr,e.geometry,r,i)}updateAnimation(e){return this.material.update(e)}requiresSlot(e,r){return this.material.requiresSlot(e,r)}prepareTechnique(e){const{output:r,bindParameters:i}=e;if(!this.requiresSlot(i.slot,r))return null;const s=r===x.Highlight||r===x.ShadowHighlight;if(s&&!this._hasHighlights)return null;const o=r===x.ShadowExcludeHighlight,n=!(s||o);for(const a of this._dataByOrigin.values())for(const l of a.buffers){if(s&&!l.hasHighlights)continue;const c=(s?l.drawCommandsHighlight:o&&l.needsMultipleCommands()?l.drawCommandsShadowHighlightRest:l.drawCommandsDefault)||null,d=n&&l.drawCommandsOccludees||null;if(c!=null&&c.length||d!=null&&d.length){const f=this._glMaterials.load(e.rctx,i.slot,r),u=f!=null?f.beginSlot(i):null;if(u!=null)return u}}return null}render(e,r){var c;const{output:i,bindParameters:s}=e,o=i===x.Highlight||i===x.ShadowHighlight,n=i===x.ShadowExcludeHighlight,a=!(o||n),l=this._rctx;(c=l.appleAmdDriverHelper)==null||c.resetIndicesType(),l.bindTechnique(r,this.material.parameters,s);for(const d of this._dataByOrigin.values())for(const f of d.buffers){if(o&&!f.hasHighlights)continue;const u=(o?f.drawCommandsHighlight:n&&f.needsMultipleCommands()?f.drawCommandsShadowHighlightRest:f.drawCommandsDefault)||null,p=a&&f.drawCommandsOccludees||null;(u!=null&&u.length||p!=null&&p.length)&&(r.program.bindDraw(new dh(d.origin),s,this.material.parameters),r.ensureAttributeLocations(f.vao),l.bindVAO(f.vao),u!=null&&u.length&&(r.bindPipelineState(l,s.slot,!1),u.forAll(v=>l.drawArrays(r.primitiveType,v.first,v.count))),p!=null&&p.length&&(r.bindPipelineState(l,s.slot,!0),p.forAll(v=>l.drawArrays(r.primitiveType,v.first,v.count))))}}get test(){return{material:this.material,glMaterials:this._glMaterials,dataByOrigin:this._dataByOrigin}}},Go=class{constructor(e){this.origin=e,this.changes=new Array}};function zh(t,e){let r;if(!t.some(s=>!(s.numElements<e)&&(r=s,!0)))return null;const i=r.from;return r.from+=e,r.from>=r.to&&t.removeUnordered(r),i}const Bo=k(),jh=k(),Kr=k(),Be=new Je({allocator:t=>t||new Hs,deallocator:null}),Ai=65536,ei=4*Ai,ko=1024,sn=16777216,ti=sn/4;let li=new Float32Array(Ai);function ri(t){return li.length<t&&(li=new Float32Array(t)),li}function qo(t){const e=4*t;return e<=ko?ko:e<ei?ei:Math.max(Math.min(Math.ceil(1.5*e/ei)*ei,sn),e)}function ii(){li=new Float32Array(2)}let Le=class extends xs{constructor(e){super(e),this._pending=new Uh,this._changes=new rh,this._materialRenderers=new Map,this._sortedMaterialRenderers=new Je,this._geometries=new Map,this._hasHighlights=!1,this._hasWater=!1}destroy(){this._changes.prune(),this._materialRenderers.forEach(e=>e.dispose()),this._materialRenderers.clear(),this._sortedMaterialRenderers.clear(),this._geometries.clear(),this._pending.clear()}get updating(){return!this._pending.empty||this._changes.updates.length>0}get rctx(){return this.rendererContext.rctx}get _materialRepository(){return this.rendererContext.materialRepository}get _localOriginFactory(){return this.rendererContext.localOriginFactory}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return st(this._materialRenderers,e=>e.rendersOccluded)}get isEmpty(){return!this.updating&&this._materialRenderers.size===0&&this._geometries.size===0}commitChanges(){if(!this.updating)return!1;this._processAddsRemoves();const e=lh(this._changes);let r=!1,i=!1,s=!1;return e.forEach((o,n)=>{let a=this._materialRenderers.get(n);if(!a&&o.adds.length>0&&(a=new Fh(this.rctx,this._materialRepository,n),this._materialRenderers.set(n,a),r=!0,i=!0,s=!0),!a)return;const l=i||a.hasHighlights,c=s||a.hasWater;a.modify(o),i=i||l!==a.hasHighlights,s=s||c!==a.hasWater,a.isEmpty&&(this._materialRenderers.delete(n),a.dispose(),r=!0)}),this._changes.clear(),r&&this._updateSortedMaterialRenderers(),i&&(this._hasHighlights=st(this._materialRenderers,o=>o.hasHighlights)),s&&(this._hasWater=st(this._materialRenderers,o=>o.hasWater)),this.notifyChange("updating"),!0}addGeometries(e,r){if(e.length===0)return;const i=this._validateRenderGeometries(e);for(const o of i)this._geometries.set(o.id,o);const s=this._pending.empty;for(const o of i)this._pending.adds.add(o);s&&this.notifyChange("updating"),r===Ti.UPDATE&&this._notifyGraphicGeometryChanged(e)}removeGeometries(e,r){const i=this._pending.empty,s=this._pending.adds;for(const o of e)s.has(o)?(this._pending.removed.add(o),s.delete(o)):this._pending.removed.has(o)||this._pending.removes.add(o),this._geometries.delete(o.id);i&&!this._pending.empty&&this.notifyChange("updating"),r===Ti.UPDATE&&this._notifyGraphicGeometryChanged(e)}modifyGeometries(e,r){const i=this._changes.updates.length===0;for(const s of e){const o=this._changes.updates.pushNew();o.renderGeometry=this._validateRenderGeometry(s),o.updateType=r}switch(i&&this._changes.updates.length>0&&this.notifyChange("updating"),r){case qe.TRANSFORMATION:case qe.GEOMETRY:return this._notifyGraphicGeometryChanged(e);case qe.VISIBILITY:return this._notifyGraphicVisibilityChanged(e)}}updateAnimation(e){let r=!1;return this._sortedMaterialRenderers.forAll(i=>r=i.updateAnimation(e)||r),r}render(e){this._sortedMaterialRenderers.forAll(r=>{if(r.material.shouldRender(e)){const i=r.prepareTechnique(e);i!=null&&r.render(e,i)}})}intersect(e,r,i,s,o){return this._geometries.forEach(n=>{if(s&&!s(n))return;this._intersectRenderGeometry(n,i,r,0,e,o);const a=this.rendererContext.longitudeCyclical;a&&(n.boundingSphere[0]-n.boundingSphere[3]<a.min&&this._intersectRenderGeometry(n,i,r,a.range,e,o),n.boundingSphere[0]+n.boundingSphere[3]>a.max&&this._intersectRenderGeometry(n,i,r,-a.range,e,o)),o++}),o}_updateSortedMaterialRenderers(){this._sortedMaterialRenderers.clear();let e=0;this._materialRenderers.forEach((r,i)=>{i.insertOrder=e++,this._sortedMaterialRenderers.push(r)}),this._sortedMaterialRenderers.sort((r,i)=>{const s=i.material.renderPriority-r.material.renderPriority;return s!==0?s:r.material.insertOrder-i.material.insertOrder})}_processAddsRemoves(){this._changes.adds.clear(),this._changes.removes.clear(),this._changes.adds.pushArray(Array.from(this._pending.adds)),this._changes.removes.pushArray(Array.from(this._pending.removes));for(let e=0;e<this._changes.updates.length;){const r=this._changes.updates.data[e];this._pending.has(r.renderGeometry)?this._changes.updates.removeUnorderedIndex(e):e++}this._pending.clear()}_intersectRenderGeometry(e,r,i,s,o,n){if(!e.visible)return;let a=0;s+=e.transformation[12],a=e.transformation[13],is[0]=i[0]-s,is[1]=i[1]-a,e.screenToWorldRatio=this.rendererContext.screenToWorldRatio,e.material.intersectDraped(e,null,o,is,(l,c,d)=>{Vh(r,d,e.material.renderPriority,n,o,e.layerUid,e.graphicUid)},r)}_notifyGraphicGeometryChanged(e){if(this.drapeSource.notifyGraphicGeometryChanged==null)return;let r;for(const i of e){const s=i.graphicUid;s!=null&&s!==r&&(this.drapeSource.notifyGraphicGeometryChanged(s),r=s)}}_notifyGraphicVisibilityChanged(e){if(this.drapeSource.notifyGraphicVisibilityChanged==null)return;let r;for(const i of e){const s=i.graphicUid;s!=null&&s!==r&&(this.drapeSource.notifyGraphicVisibilityChanged(s),r=s)}}_validateRenderGeometries(e){for(const r of e)this._validateRenderGeometry(r);return e}_validateRenderGeometry(e){return e.localOrigin==null&&(e.localOrigin=this._localOriginFactory.getOrigin(e.boundingSphere)),e}get test(){return{sortedMaterialRenderers:this._sortedMaterialRenderers}}};g([M()],Le.prototype,"drapeSource",void 0),g([M()],Le.prototype,"updating",null),g([M()],Le.prototype,"rctx",null),g([M()],Le.prototype,"rendererContext",void 0),g([M()],Le.prototype,"_materialRepository",null),g([M()],Le.prototype,"_localOriginFactory",null),g([M({readOnly:!0})],Le.prototype,"isEmpty",null),g([M()],Le.prototype,"_materialRenderers",void 0),g([M()],Le.prototype,"_geometries",void 0),Le=g([$i("esri.views.3d.webgl-engine.lib.SortedRenderGeometryRenderer")],Le);let Uh=class{constructor(){this.adds=new Set,this.removes=new Set,this.removed=new Set}get empty(){return this.adds.size===0&&this.removes.size===0&&this.removed.size===0}has(e){return this.adds.has(e)||this.removes.has(e)||this.removed.has(e)}clear(){this.adds.clear(),this.removes.clear(),this.removed.clear()}};function Vh(t,e,r,i,s,o,n){const a=new th(o,n,e),l=c=>{c.set(xt.OVERLAY,a,t.dist,t.normal,t.transformation,r,i)};if((s.results.min.drapedLayerOrder==null||r>=s.results.min.drapedLayerOrder)&&(s.results.min.dist==null||s.results.ground.dist<=s.results.min.dist)&&l(s.results.min),s.options.store!==Vt.MIN&&(s.results.max.drapedLayerOrder==null||r<s.results.max.drapedLayerOrder)&&(s.results.max.dist==null||s.results.ground.dist>s.results.max.dist)&&l(s.results.max),s.options.store===Vt.ALL){const c=nh(s.ray);l(c),s.results.all.push(c)}}const is=Y();let on=class an extends wr{initializeProgram(e){return new Sr(e.rctx,an.shader.get().build(),Wr)}initializePipeline(){return this.configuration.hasAlpha?Ze({blending:Ia(Xe.SRC_ALPHA,Xe.ONE,Xe.ONE_MINUS_SRC_ALPHA,Xe.ONE_MINUS_SRC_ALPHA),colorWrite:ct}):Ze({colorWrite:ct})}};on.shader=new xr(Hc,()=>gr(()=>import("./TextureOnly.glsl-8f690827.js"),["assets/TextureOnly.glsl-8f690827.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css","assets/OrderIndependentTransparency-0ab46cc4.js","assets/enums-b14466b3.js","assets/basicInterfaces-bb952591.js","assets/VertexAttribute-9f2e53ec.js","assets/VertexColor.glsl-a0697bd4.js","assets/requestImageUtils-2f3ee55b.js","assets/Texture-31c4f382.js","assets/InterleavedLayout-ddec9a00.js","assets/BufferView-c58f8e7f.js","assets/types-1305598a.js","assets/mat4f64-65d35099.js","assets/Indices-b766e722.js","assets/triangle-0231590c.js","assets/sphere-812d69dd.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-e0d341b8.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/quat-7c737b79.js","assets/vec3f32-ad1dc57f.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-d7a3254f.js","assets/DoubleArray-96e88651.js","assets/plane-f0d62c60.js","assets/interfaces-6a52f173.js","assets/floatRGBA-f2fcae6c.js","assets/triangulationUtils-4a253704.js","assets/earcut-15ea0d28.js","assets/deduplicate-058a0b05.js","assets/NestedMap-1b5db22e.js","assets/Octree-3004e05b.js","assets/boundedPlane-0cbeb150.js","assets/glUtil-0b7ee6ea.js"]));let nn=class extends fa{constructor(){super(...arguments),this.hasAlpha=!1}};g([y()],nn.prototype,"hasAlpha",void 0);let et=class extends xs{get _bindParameters(){return this._renderContext.bindParameters}get _rctx(){return this.view._stage.renderView.renderingContext}get rctx(){return this._rctx}get materialRepository(){return this._materialRepository}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}constructor(e){super(e),this._overlays=null,this._overlayRenderTarget=null,this._hasHighlights=!1,this._rendersOccluded=!1,this._hasWater=!1,this._handles=new na,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new Je,this._passParameters=new Ua,this._materialRepository=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this._camera=new z,this.worldToPCSRatio=1,this.events=new aa,this.longitudeCyclical=null}initialize(){const e=this.view._stage.renderView,{waterTextureRepository:r,stippleTextureRepository:i,markerTextureRepository:s}=e;this._shaderTechniqueRepository=new Wc({rctx:this._rctx,viewingMode:St.Local,stippleTextureRepository:i,markerTextureRepository:s,waterTextureRepository:r}),this._renderContext=new Ud(this._rctx,new Wd(this._rctx,this.view.state.viewingMode),new Nl(this.view,this._shaderTechniqueRepository,this._rctx,()=>{})),this._handles.add([Wi(()=>r.updating,()=>this.events.emit("content-changed"),Ks),Wi(()=>this.spatialReference,o=>this._localOriginFactory=new Id(o),Ks),Vn(()=>this.view.allLayerViews,"after-changes",()=>this._sortedDrapeSourceRenderersDirty=!0)]),this._materialRepository=new Jc(e.textureRepository,this._shaderTechniqueRepository,o=>{(o.renderOccluded&Zo)>0!==this._rendersOccluded&&this._updateRendersOccluded(),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")},()=>this.events.emit("content-changed")),this._bindParameters.slot=V.DRAPED_MATERIAL,this._bindParameters.highlightDepthTexture=Fl(this._rctx),this._camera.near=1,this._camera.far=1e4,this._camera.relativeElevation=null,this._bindParameters.camera=this._camera,this._bindParameters.transparencyPassType=ee.NONE,this._bindParameters.newLighting.noonFactor=0,this._bindParameters.newLighting.globalFactor=0,this._bindParameters.newLighting.set([new zl(pi(1,1,1))]),this._handles.add(this.view.resourceController.scheduler.registerTask(Hn.STAGE,this))}destroy(){this._handles.destroy(),this._renderers.forEach(e=>e.destroy()),this._renderers.clear(),this._debugTextureTechnique=Wn(this._debugTextureTechnique),this._passParameters.texture=it(this._passParameters.texture),this._bindParameters.highlightDepthTexture=it(this._bindParameters.highlightDepthTexture),this._shaderTechniqueRepository=la(this._shaderTechniqueRepository),this._temporaryFBO=it(this._temporaryFBO),this._quadVAO=it(this._quadVAO),this.disposeOverlays()}get updating(){return this._sortedDrapeSourceRenderersDirty||st(this._renderers,e=>e.updating)}get hasOverlays(){return this._overlays!=null&&this._overlayRenderTarget!=null}get gpuMemoryUsage(){return this._overlayRenderTarget!=null?this._overlayRenderTarget.gpuMemoryUsage:0}createGeometryDrapeSourceRenderer(e){return this.createDrapeSourceRenderer(e,Le)}createDrapeSourceRenderer(e,r,i){const s=this._renderers.get(e);s!=null&&s.destroy();const o=new r({...i,rendererContext:this,drapeSource:e});return this._renderers.set(e,o),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in e&&this._handles.add(Wi(()=>e.fullOpacity,()=>this.events.emit("content-changed")),e),o}removeDrapeSourceRenderer(e){if(e==null)return;const r=this._renderers.get(e);r!=null&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(e),this._handles.remove(e),r.destroy())}collectUnusedRenderTargetMemory(){let e=!1;const r=Gn();if(this._overlayRenderTarget!=null)for(const i of this._overlayRenderTarget.renderTargets){const s=this.overlays[kr.INNER].validTargets[i.type];e=this._overlayRenderTarget.validateUsageForTarget(s,i,r)||e}return e}get overlays(){return this._overlays??[]}ensureDrapeTargets(e){this._overlays!=null&&this._overlays.forEach(r=>r.hasTargetWithoutRasterImage=Gi(e,i=>i.drapeTargetType===vs.WithoutRasterImage))}ensureDrapeSources(e){this._overlays!=null&&this._overlays.forEach(r=>{r.hasDrapedFeatureSource=Gi(e,i=>i.drapeSourceType===$r.Features),r.hasDrapedRasterSource=Gi(e,i=>i.drapeSourceType===$r.RasterImage)})}ensureOverlays(e,r){this._overlays==null&&(this._overlayRenderTarget=new jc(this._rctx),this._overlays=[new ho(kr.INNER,this._overlayRenderTarget),new ho(kr.OUTER,this._overlayRenderTarget)]),this.ensureDrapeTargets(e),this.ensureDrapeSources(r)}disposeOverlays(){this._overlays=null,this._overlayRenderTarget=it(this._overlayRenderTarget),this.events.emit("textures-disposed")}get running(){return this.updating}runTask(e){this._processDrapeSources(e,()=>!0)}_processDrapeSources(e,r){let i=!1;for(const[s,o]of this._renderers){if(e.done)break;(s.destroyed||r(s))&&o.commitChanges()&&(i=!0,e.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,i=!0,this._updateSortedDrapeSourceRenderers()),i&&(this._overlays!=null&&this._renderers.size===0&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this._updateHasHighlights(),this._updateRendersOccluded(),this._updateHasWater())}processSyncDrapeSources(){this._processDrapeSources(Bn,e=>e.updatePolicy===Fr.SYNC)}get isEmpty(){return!ms.OVERLAY_DRAW_DEBUG_TEXTURE&&!st(this._renderers,e=>!e.isEmpty)}get hasHighlights(){return this._hasHighlights}get hasWater(){return this._hasWater}get rendersOccluded(){return this._rendersOccluded}updateAnimation(e){let r=!1;return this._renderers.forEach(i=>r=i.updateAnimation(e)||r),r}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}drawTarget(e,r,i){const s=e.canvasGeometries;if(s.numViews===0)return!1;const{alignPixelEnabled:o,contentPixelRatio:n}=i;this._screenToWorldRatio=n*e.mapUnitsPerPixel/jl;const a=r.output;if(this.isEmpty||a===x.Highlight&&!this.hasHighlights||a===x.Normal&&!this.hasWater||!e.hasSomeSizedView())return!1;const l=r.fbo;if(!l.isValid())return!1;const c=2*e.resolution,d=e.resolution;l.resize(c,d);const f=this._rctx;if(this._camera.pixelRatio=e.pixelRatio*n,this._renderContext.output=a,this._bindParameters.alignPixelEnabled=o,this._bindParameters.screenToWorldRatio=this._screenToWorldRatio,this._bindParameters.screenToPCSRatio=this._screenToWorldRatio*this.worldToPCSRatio,this._bindParameters.slot=a===x.Normal?V.DRAPED_WATER:V.DRAPED_MATERIAL,e.applyViewport(this._rctx),l.bind(f),e.index===kr.INNER&&(f.setClearColor(0,0,0,0),f.clearSafe(yi.COLOR_BUFFER_BIT)),r.type===rt.Occluded&&(this._renderContext.renderOccludedMask=Zo),ms.OVERLAY_DRAW_DEBUG_TEXTURE&&r.type!==rt.Occluded)for(let u=0;u<s.numViews;u++)this._setViewParameters(s.extents[u],e),this._drawDebugTexture(e.resolution,Wh[e.index]);return this._renderers.size>0&&this._sortedRenderers.forAll(({drapeSource:u,renderer:p})=>{if(r.type===rt.ColorNoRasterImage&&u.drapeSourceType===$r.RasterImage)return;const{fullOpacity:v}=u,_=v!=null&&v<1&&a===x.Color;_&&(this.bindTemporaryFramebuffer(this._rctx,c,d),f.clearSafe(yi.COLOR_BUFFER_BIT));for(let w=0;w<s.numViews;w++)this._setViewParameters(s.extents[w],e),p.render(this._renderContext);_&&this._temporaryFBO!=null&&(l.bind(f),this.view._stage.renderView.compositingHelper.compositeOverlay(this._renderContext.bindParameters,this._temporaryFBO.getTexture(),v,e.index))}),f.bindFramebuffer(null),l.generateMipMap(),this._renderContext.resetRenderOccludedMask(),!0}bindTemporaryFramebuffer(e,r,i){this._temporaryFBO==null&&(this._temporaryFBO=new ja(e,!1)),this._temporaryFBO.resize(r,i),this._temporaryFBO.bind(e)}async reloadShaders(){await this._shaderTechniqueRepository.reloadAll()}notifyContentChanged(){this.events.emit("content-changed")}intersect(e,r,i,s){var n;let o=0;for(const a of this._renderers.values())o=((n=a.intersect)==null?void 0:n.call(a,e,r,i,s,o))??o}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),this._renderers.size===0)return;const e=this.view.map.allLayers;this._renderers.forEach((r,i)=>{const s=e.indexOf(i.layer),o=s>=0,n=this._renderers.size*(i.renderGroup??(o?xi.MapLayer:xi.ViewLayer))+(o?s:0);this._sortedRenderers.push(new Hh(i,r,n))}),this._sortedRenderers.sort((r,i)=>r.index-i.index)}_setViewParameters(e,r){const i=this._camera;i.viewport=[0,0,r.resolution,r.resolution],kn(i.projectionMatrix,0,e[2]-e[0],0,e[3]-e[1],i.near,i.far),qn(i.viewMatrix,[-e[0],-e[1],0])}_updateHasWater(){const e=st(this._renderers,r=>r.hasWater);e!==this._hasWater&&(this._hasWater=e,this.events.emit("has-water",e))}_updateHasHighlights(){const e=st(this._renderers,r=>r.hasHighlights);e!==this._hasHighlights&&(this._hasHighlights=e,this.events.emit("has-highlights",e))}_updateRendersOccluded(){const e=st(this._renderers,r=>r.rendersOccluded);e!==this._rendersOccluded&&(this._rendersOccluded=e,this.events.emit("renders-occluded",e))}_drawDebugTexture(e,r){this._ensureDebugPatternResources(e,r);const i=this._rctx;i.bindTechnique(this._debugTextureTechnique,this._passParameters,null),i.bindVAO(this._quadVAO),i.drawArrays(fr.TRIANGLE_STRIP,0,Ac(this._quadVAO,"geometry"))}_ensureDebugPatternResources(e,r){if(W(this._passParameters.color,r[0],r[1],r[2]),this._passParameters.texture)return;const i=new Uint8Array(e*e*4);let s=0;for(let a=0;a<e;a++)for(let l=0;l<e;l++){const c=Math.floor(l/10),d=Math.floor(a/10);c<2||d<2||10*c>e-20||10*d>e-20?(i[s++]=255,i[s++]=255,i[s++]=255,i[s++]=255):(i[s++]=255,i[s++]=255,i[s++]=255,i[s++]=1&c&&1&d?1&l^1&a?0:255:1&c^1&d?0:128)}const o=new Si(e);o.samplingMode=_i.NEAREST,this._passParameters.texture=new ni(this._rctx,o,i);const n=new nn;n.hasAlpha=!0,this._debugTextureTechnique=this._shaderTechniqueRepository.acquire(on,n),this._quadVAO=Ul(this._rctx)}get test(){return{drapedRenderers:Array.from(this._renderers.values()),getDrapeSourceRenderer:e=>this._renderers.get(e)}}};g([M()],et.prototype,"_sortedDrapeSourceRenderersDirty",void 0),g([M({autoDestroy:!0})],et.prototype,"_shaderTechniqueRepository",void 0),g([M({constructOnly:!0})],et.prototype,"view",void 0),g([M()],et.prototype,"worldToPCSRatio",void 0),g([M()],et.prototype,"spatialReference",void 0),g([M({type:Boolean,readOnly:!0})],et.prototype,"updating",null),g([M()],et.prototype,"isEmpty",null),et=g([$i("esri.views.3d.terrain.OverlayRenderer")],et);let Hh=class{constructor(e,r,i){this.drapeSource=e,this.renderer=r,this.index=i}};const Wh=[[1,.5,.5],[.5,.5,1]],Gh=-2,Zo=wt.OccludeAndTransparent;var ws;(function(t){function e(n,a){const l=n[a],c=n[a+1],d=n[a+2];return Math.sqrt(l*l+c*c+d*d)}function r(n,a){const l=n[a],c=n[a+1],d=n[a+2],f=1/Math.sqrt(l*l+c*c+d*d);n[a]*=f,n[a+1]*=f,n[a+2]*=f}function i(n,a,l){n[a]*=l,n[a+1]*=l,n[a+2]*=l}function s(n,a,l,c,d,f=a){(d=d||n)[f]=n[a]+l[c],d[f+1]=n[a+1]+l[c+1],d[f+2]=n[a+2]+l[c+2]}function o(n,a,l,c,d,f=a){(d=d||n)[f]=n[a]-l[c],d[f+1]=n[a+1]-l[c+1],d[f+2]=n[a+2]-l[c+2]}t.length=e,t.normalize=r,t.scale=i,t.add=s,t.subtract=o})(ws||(ws={}));const Xt=ws,ss=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Bh=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],kh=[0,0,1,0,1,1,0,1],qh=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],ln=new Array(36);for(let t=0;t<6;t++)for(let e=0;e<6;e++)ln[6*t+e]=t;const It=new Array(36);for(let t=0;t<6;t++)It[6*t]=0,It[6*t+1]=1,It[6*t+2]=2,It[6*t+3]=2,It[6*t+4]=3,It[6*t+5]=0;function im(t,e){Array.isArray(e)||(e=[e,e,e]);const r=new Array(24);for(let i=0;i<8;i++)r[3*i]=ss[i][0]*e[0],r[3*i+1]=ss[i][1]*e[1],r[3*i+2]=ss[i][2]*e[2];return new Ie(t,[[h.POSITION,new F(r,3,!0)],[h.NORMAL,new F(Bh,3)],[h.UV0,new F(kh,2)]],[[h.POSITION,qh],[h.NORMAL,ln],[h.UV0,It]])}const os=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Zh=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Xh=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Jh=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function sm(t,e){Array.isArray(e)||(e=[e,e,e]);const r=new Array(18);for(let i=0;i<6;i++)r[3*i]=os[i][0]*e[0],r[3*i+1]=os[i][1]*e[1],r[3*i+2]=os[i][2]*e[2];return new Ie(t,[[h.POSITION,new F(r,3,!0)],[h.NORMAL,new F(Zh,3)]],[[h.POSITION,Xh],[h.NORMAL,Jh]])}const ci=oe(-.5,0,-.5),di=oe(.5,0,-.5),hi=oe(0,0,.5),ui=oe(0,.5,0),Jt=Q(),Yt=Q(),cr=Q(),dr=Q(),hr=Q();ie(Jt,ci,ui),ie(Yt,ci,di),Ye(cr,Jt,Yt),ne(cr,cr),ie(Jt,di,ui),ie(Yt,di,hi),Ye(dr,Jt,Yt),ne(dr,dr),ie(Jt,hi,ui),ie(Yt,hi,ci),Ye(hr,Jt,Yt),ne(hr,hr);const as=[ci,di,hi,ui],Yh=[0,-1,0,cr[0],cr[1],cr[2],dr[0],dr[1],dr[2],hr[0],hr[1],hr[2]],Qh=[0,1,2,3,1,0,3,2,1,3,0,2],Kh=[0,0,0,1,1,1,2,2,2,3,3,3];function om(t,e){Array.isArray(e)||(e=[e,e,e]);const r=new Array(12);for(let i=0;i<4;i++)r[3*i]=as[i][0]*e[0],r[3*i+1]=as[i][1]*e[1],r[3*i+2]=as[i][2]*e[2];return new Ie(t,[[h.POSITION,new F(r,3,!0)],[h.NORMAL,new F(Yh,3)]],[[h.POSITION,Qh],[h.NORMAL,Kh]])}function am(t,e,r,i,s={uv:!0}){const o=-Math.PI,n=2*Math.PI,a=-Math.PI/2,l=Math.PI,c=Math.max(3,Math.floor(r)),d=Math.max(2,Math.floor(i)),f=(c+1)*(d+1),u=Fe(3*f),p=Fe(3*f),v=Fe(2*f),_=[];let w=0;for(let R=0;R<=d;R++){const C=[],b=R/d,L=a+b*l,A=Math.cos(L);for(let j=0;j<=c;j++){const ce=j/c,E=o+ce*n,q=Math.cos(E)*A,ue=Math.sin(L),He=-Math.sin(E)*A;u[3*w]=q*e,u[3*w+1]=ue*e,u[3*w+2]=He*e,p[3*w]=q,p[3*w+1]=ue,p[3*w+2]=He,v[2*w]=ce,v[2*w+1]=b,C.push(w),++w}_.push(C)}const O=new Array;for(let R=0;R<d;R++)for(let C=0;C<c;C++){const b=_[R][C],L=_[R][C+1],A=_[R+1][C+1],j=_[R+1][C];R===0?(O.push(b),O.push(A),O.push(j)):R===d-1?(O.push(b),O.push(L),O.push(A)):(O.push(b),O.push(L),O.push(A),O.push(A),O.push(j),O.push(b))}const T=[[h.POSITION,O],[h.NORMAL,O]],S=[[h.POSITION,new F(u,3,!0)],[h.NORMAL,new F(p,3,!0)]];return s.uv&&(S.push([h.UV0,new F(v,2,!0)]),T.push([h.UV0,O])),s.offset&&(T[0][0]=h.OFFSET,S[0][0]=h.OFFSET,T.push([h.POSITION,ba(O.length)]),S.push([h.POSITION,new F(Float64Array.from(s.offset),3,!0)])),new Ie(t,S,T)}function nm(t,e,r,i){const{vertexAttributes:s,indices:o}=eu(e,r,i);return new Ie(t,s,o)}function eu(t,e,r){const i=t;let s,o;if(r)s=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],o=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];else{const d=i*(1+Math.sqrt(5))/2;s=[-i,d,0,i,d,0,-i,-d,0,i,-d,0,0,-i,d,0,i,d,0,-i,-d,0,i,-d,d,0,-i,d,0,i,-d,0,-i,-d,0,i],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1]}for(let d=0;d<s.length;d+=3)Xt.scale(s,d,t/Xt.length(s,d));let n={};function a(d,f){d>f&&([d,f]=[f,d]);const u=d.toString()+"."+f.toString();if(n[u])return n[u];let p=s.length;return s.length+=3,Xt.add(s,3*d,s,3*f,s,p),Xt.scale(s,p,t/Xt.length(s,p)),p/=3,n[u]=p,p}for(let d=0;d<e;d++){const f=o.length,u=new Array(4*f);for(let p=0;p<f;p+=3){const v=o[p],_=o[p+1],w=o[p+2],O=a(v,_),T=a(_,w),S=a(w,v),R=4*p;u[R]=v,u[R+1]=O,u[R+2]=S,u[R+3]=_,u[R+4]=T,u[R+5]=O,u[R+6]=w,u[R+7]=S,u[R+8]=T,u[R+9]=O,u[R+10]=T,u[R+11]=S}o=u,n={}}const l=uo(s);for(let d=0;d<l.length;d+=3)Xt.normalize(l,d);const c=[[h.POSITION,o],[h.NORMAL,o]];return{vertexAttributes:[[h.POSITION,new F(uo(s),3,!0)],[h.NORMAL,new F(l,3,!0)]],indices:c}}function lm(t,e,r,i,s,o,n,a,l=null){const c=r?[r[0],r[1],r[2]]:[0,0,0],d=e?[e[0],e[1],e[2]]:[0,0,1];n=n||[0,0];const f=i?[255*i[0],255*i[1],255*i[2],i.length>3?255*i[3]:255]:[255,255,255,255],u=s!=null&&s.length===2?s:[1,1],p=[[h.POSITION,new F(c,3,!0)],[h.NORMAL,new F(d,3,!0)],[h.UV0,new F(n,n.length)],[h.COLOR,new F(f,4,!0)],[h.SIZE,new F(u,2)]];if(o!=null){const v=[o[0],o[1],o[2],o[3]];p.push([h.AUXPOS1,new F(v,4)])}if(a!=null){const v=[a[0],a[1],a[2],a[3]];p.push([h.AUXPOS2,new F(v,4)])}return new Ie(t,p,null,null,vr.Point,l)}function cm(t,e,r,i,s,o=!0,n=!0){let a=0;const l=r,c=e;let d=oe(0,a,0),f=oe(0,a+c,0),u=oe(0,-1,0),p=oe(0,1,0);s&&(a=c,f=oe(0,0,0),d=oe(0,a,0),u=oe(0,1,0),p=oe(0,-1,0));const v=[f,d],_=[u,p],w=i+2,O=Math.sqrt(c*c+l*l);if(s)for(let A=i-1;A>=0;A--){const j=A*(2*Math.PI/i),ce=oe(Math.cos(j)*l,a,Math.sin(j)*l);v.push(ce);const E=oe(c*Math.cos(j)/O,-l/O,c*Math.sin(j)/O);_.push(E)}else for(let A=0;A<i;A++){const j=A*(2*Math.PI/i),ce=oe(Math.cos(j)*l,a,Math.sin(j)*l);v.push(ce);const E=oe(c*Math.cos(j)/O,l/O,c*Math.sin(j)/O);_.push(E)}const T=new Array,S=new Array;if(o){for(let A=3;A<v.length;A++)T.push(1),T.push(A-1),T.push(A),S.push(0),S.push(0),S.push(0);T.push(v.length-1),T.push(2),T.push(1),S.push(0),S.push(0),S.push(0)}if(n){for(let A=3;A<v.length;A++)T.push(A),T.push(A-1),T.push(0),S.push(A),S.push(A-1),S.push(1);T.push(0),T.push(2),T.push(v.length-1),S.push(1),S.push(2),S.push(_.length-1)}const R=Fe(3*w);for(let A=0;A<w;A++)R[3*A]=v[A][0],R[3*A+1]=v[A][1],R[3*A+2]=v[A][2];const C=Fe(3*w);for(let A=0;A<w;A++)C[3*A]=_[A][0],C[3*A+1]=_[A][1],C[3*A+2]=_[A][2];const b=[[h.POSITION,T],[h.NORMAL,S]],L=[[h.POSITION,new F(R,3,!0)],[h.NORMAL,new F(C,3,!0)]];return new Ie(t,L,b)}function dm(t,e,r,i,s,o,n){const a=s?to(s):oe(1,0,0),l=o?to(o):oe(0,0,0);n??(n=!0);const c=Q();ne(c,a);const d=Q();Z(d,c,Math.abs(e));const f=Q();Z(f,d,-.5),K(f,f,l);const u=oe(0,1,0);Math.abs(1-dt(c,u))<.2&&W(u,0,0,1);const p=Q();Ye(p,c,u),ne(p,p),Ye(u,p,c);const v=2*i+(n?2:0),_=i+(n?2:0),w=Fe(3*v),O=Fe(3*_),T=Fe(2*v),S=new Array(3*i*(n?4:2)),R=new Array(3*i*(n?4:2));n&&(w[3*(v-2)]=f[0],w[3*(v-2)+1]=f[1],w[3*(v-2)+2]=f[2],T[2*(v-2)]=0,T[2*(v-2)+1]=0,w[3*(v-1)]=w[3*(v-2)]+d[0],w[3*(v-1)+1]=w[3*(v-2)+1]+d[1],w[3*(v-1)+2]=w[3*(v-2)+2]+d[2],T[2*(v-1)]=1,T[2*(v-1)+1]=1,O[3*(_-2)]=-c[0],O[3*(_-2)+1]=-c[1],O[3*(_-2)+2]=-c[2],O[3*(_-1)]=c[0],O[3*(_-1)+1]=c[1],O[3*(_-1)+2]=c[2]);const C=(E,q,ue)=>{S[E]=q,R[E]=ue};let b=0;const L=Q(),A=Q();for(let E=0;E<i;E++){const q=E*(2*Math.PI/i);Z(L,u,Math.sin(q)),Z(A,p,Math.cos(q)),K(L,L,A),O[3*E]=L[0],O[3*E+1]=L[1],O[3*E+2]=L[2],Z(L,L,r),K(L,L,f),w[3*E]=L[0],w[3*E+1]=L[1],w[3*E+2]=L[2],T[2*E]=E/i,T[2*E+1]=0,w[3*(E+i)]=w[3*E]+d[0],w[3*(E+i)+1]=w[3*E+1]+d[1],w[3*(E+i)+2]=w[3*E+2]+d[2],T[2*(E+i)]=E/i,T[2*E+1]=1;const ue=(E+1)%i;C(b++,E,E),C(b++,E+i,E),C(b++,ue,ue),C(b++,ue,ue),C(b++,E+i,E),C(b++,ue+i,ue)}if(n){for(let E=0;E<i;E++){const q=(E+1)%i;C(b++,v-2,_-2),C(b++,E,_-2),C(b++,q,_-2)}for(let E=0;E<i;E++){const q=(E+1)%i;C(b++,E+i,_-1),C(b++,v-1,_-1),C(b++,q+i,_-1)}}const j=[[h.POSITION,S],[h.NORMAL,R],[h.UV0,S]],ce=[[h.POSITION,new F(w,3,!0)],[h.NORMAL,new F(O,3,!0)],[h.UV0,new F(T,2,!0)]];return new Ie(t,ce,j)}function hm(t,e,r,i,s,o){i=i||10,s=s==null||s,we(e.length>1);const n=[[0,0,0]],a=[],l=[];for(let c=0;c<i;c++){a.push([0,-c-1,-(c+1)%i-1]);const d=c/i*2*Math.PI;l.push([Math.cos(d)*r,Math.sin(d)*r])}return tu(t,l,e,n,a,s,o)}function tu(t,e,r,i,s,o,n=oe(0,0,0)){const a=e.length,l=Fe(r.length*a*3+(6*i.length||0)),c=Fe(r.length*a*3+(i?6:0)),d=new Array,f=new Array;let u=0,p=0;const v=Q(),_=Q(),w=Q(),O=Q(),T=Q(),S=Q(),R=Q(),C=D(),b=Q(),L=Q(),A=Q(),j=Q(),ce=Q(),E=ht();W(b,0,1,0),ie(_,r[1],r[0]),ne(_,_),o?(K(C,r[0],n),ne(w,C)):W(w,0,0,1),Xo(_,w,b,b,T,w,Jo),H(O,w),H(j,T);for(let $=0;$<i.length;$++)Z(S,T,i[$][0]),Z(C,w,i[$][2]),K(S,S,C),K(S,S,r[0]),l[u++]=S[0],l[u++]=S[1],l[u++]=S[2];c[p++]=-_[0],c[p++]=-_[1],c[p++]=-_[2];for(let $=0;$<s.length;$++)d.push(s[$][0]>0?s[$][0]:-s[$][0]-1+i.length),d.push(s[$][1]>0?s[$][1]:-s[$][1]-1+i.length),d.push(s[$][2]>0?s[$][2]:-s[$][2]-1+i.length),f.push(0),f.push(0),f.push(0);let q=i.length;const ue=i.length-1;for(let $=0;$<r.length;$++){let Tt=!1;$>0&&(H(v,_),$<r.length-1?(ie(_,r[$+1],r[$]),ne(_,_)):Tt=!0,K(L,v,_),ne(L,L),K(A,r[$-1],O),rc(r[$],L,E),ic(E,ac(A,v),C)?(ie(C,C,r[$]),ne(w,C),Ye(T,L,w),ne(T,T)):Xo(L,O,j,b,T,w,Jo),H(O,w),H(j,T)),o&&(K(C,r[$],n),ne(ce,C));for(let We=0;We<a;We++)if(Z(S,T,e[We][0]),Z(C,w,e[We][1]),K(S,S,C),ne(R,S),c[p++]=R[0],c[p++]=R[1],c[p++]=R[2],K(S,S,r[$]),l[u++]=S[0],l[u++]=S[1],l[u++]=S[2],!Tt){const Tr=(We+1)%a;d.push(q+We),d.push(q+a+We),d.push(q+Tr),d.push(q+Tr),d.push(q+a+We),d.push(q+a+Tr);for(let pt=0;pt<6;pt++){const xn=d.length-6;f.push(d[xn+pt]-ue)}}q+=a}const He=r[r.length-1];for(let $=0;$<i.length;$++)Z(S,T,i[$][0]),Z(C,w,i[$][1]),K(S,S,C),K(S,S,He),l[u++]=S[0],l[u++]=S[1],l[u++]=S[2];const Wt=p/3;c[p++]=_[0],c[p++]=_[1],c[p++]=_[2];const X=q-a;for(let $=0;$<s.length;$++)d.push(s[$][0]>=0?q+s[$][0]:-s[$][0]-1+X),d.push(s[$][2]>=0?q+s[$][2]:-s[$][2]-1+X),d.push(s[$][1]>=0?q+s[$][1]:-s[$][1]-1+X),f.push(Wt),f.push(Wt),f.push(Wt);const Me=[[h.POSITION,d],[h.NORMAL,f]],ze=[[h.POSITION,new F(l,3,!0)],[h.NORMAL,new F(c,3,!0)]];return new Ie(t,ze,Me)}function um(t,e,r,i){we(e.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),we(e[0].length===3,"createPolylineGeometry(): malformed vertex"),we(r==null||r.length===e.length,"createPolylineGeometry: need same number of points and normals"),we(r==null||r[0].length===3,"createPolylineGeometry(): malformed normal");const s=bs(3*e.length),o=new Array(2*(e.length-1));let n=0,a=0;for(let d=0;d<e.length;d++){for(let f=0;f<3;f++)s[n++]=e[d][f];d>0&&(o[a++]=d-1,o[a++]=d)}const l=[],c=[];if(l.push([h.POSITION,o]),c.push([h.POSITION,new F(s,3,!0)]),r){const d=Fe(3*r.length);let f=0;for(let u=0;u<e.length;u++)for(let p=0;p<3;p++)d[f++]=r[u][p];l.push([h.NORMAL,o]),c.push([h.NORMAL,new F(d,3,!0)])}return i&&(c.push([h.COLOR,new F(i,4)]),l.push([h.COLOR,tc(i.length/4)])),new Ie(t,c,l,null,vr.Line)}function pm(t,e,r,i,s,o=0){const n=new Array(18),a=[[-r,o,s/2],[i,o,s/2],[0,e+o,s/2],[-r,o,-s/2],[i,o,-s/2],[0,e+o,-s/2]],l=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let c=0;c<6;c++)n[3*c]=a[c][0],n[3*c+1]=a[c][1],n[3*c+2]=a[c][2];return new Ie(t,[[h.POSITION,new F(n,3,!0)]],[[h.POSITION,l]])}function fm(t,e){const r=t.getMutableAttribute(h.POSITION).data;for(let i=0;i<r.length;i+=3){const s=r[i],o=r[i+1],n=r[i+2];W(Qt,s,o,n),te(Qt,Qt,e),r[i]=Qt[0],r[i+1]=Qt[1],r[i+2]=Qt[2]}}function mm(t,e=t){const r=t.vertexAttributes,i=r.get(h.POSITION).data,s=r.get(h.NORMAL).data;if(s){const o=e.getMutableAttribute(h.NORMAL).data;for(let n=0;n<s.length;n+=3){const a=s[n+1];o[n+1]=-s[n+2],o[n+2]=a}}if(i){const o=e.getMutableAttribute(h.POSITION).data;for(let n=0;n<i.length;n+=3){const a=i[n+1];o[n+1]=-i[n+2],o[n+2]=a}}}function ns(t,e,r,i,s){return!(Math.abs(dt(e,t))>s)&&(Ye(r,t,e),ne(r,r),Ye(i,r,t),ne(i,i),!0)}function Xo(t,e,r,i,s,o,n){return ns(t,e,s,o,n)||ns(t,r,s,o,n)||ns(t,i,s,o,n)}const Jo=.99619469809,Qt=Q();let gm=class{constructor(e,r={}){this.geometry=e,this.screenToWorldRatio=1,this._transformation=k(),this._shaderTransformation=null,this._boundingSphere=null,this.id=ha(),this.layerUid=r.layerUid,this.graphicUid=r.graphicUid,this.shaderTransformer=r.shaderTransformer,this.castShadow=r.castShadow??!1}get transformation(){return this._transformation}get boundingInfo(){return this.geometry.boundingInfo}updateTransformation(e){e(this._transformation),this._shaderTransformation=this._boundingSphere=null}shaderTransformationChanged(){this._shaderTransformation=null}get boundingSphere(){return this._boundingSphere?this._boundingSphere:this.boundingInfo?(this._boundingSphere=te(Aa(),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*Ra(this.shaderTransformation),this._boundingSphere):nc}get hasShaderTransformation(){return this.shaderTransformer!=null}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this.shaderTransformer==null?this.transformation:(this._shaderTransformation||(this._shaderTransformation=nt(k(),this.shaderTransformer(this.transformation))),this._shaderTransformation)}get indices(){return this.geometry.indices}get vertexAttributes(){return this.geometry.vertexAttributes}get highlights(){return this.geometry.highlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(e){this.geometry.visible=e}};function cn(t){return t.type==="point"}function _m(t,e){if(t.type==="point")return mt(t,e,!1);if(dc(t))switch(t.type){case"extent":return mt(t.center,e,!1);case"polygon":return mt(t.centroid,e,!1);case"polyline":return mt(Yo(t),e,!0);case"mesh":return mt(t.origin,e,!1)}else switch(t.type){case"extent":return mt(ru(t),e,!0);case"polygon":return mt(iu(t),e,!0);case"polyline":return mt(Yo(t),e,!0)}}function Yo(t){const e=t.paths[0];if(!e||e.length===0)return null;const r=Zn(e,Xn(e)/2);return Cs(r[0],r[1],r[2],t.spatialReference)}function ru(t){return Cs(.5*(t.xmax+t.xmin),.5*(t.ymax+t.ymin),t.zmin!=null&&t.zmax!=null&&isFinite(t.zmin)&&isFinite(t.zmax)?.5*(t.zmax+t.zmin):void 0,t.spatialReference)}function iu(t){const e=t.rings[0];if(!e||e.length===0)return null;const r=Jn(t.rings,!!t.hasZ);return Cs(r[0],r[1],r[2],t.spatialReference)}function mt(t,e,r){const i=r?t:hc(t);return e&&t?Yn(t,i,e)?i:null:i}function ym(t,e,r,i=0){if(t){e||(e=ua());const s=t;let o=.5*s.width*(r-1),n=.5*s.height*(r-1);return s.width<1e-7*s.height?o+=n/20:s.height<1e-7*s.width&&(n+=o/20),Lr(e,s.xmin-o-i,s.ymin-n-i,s.xmax+o+i,s.ymax+n+i),e}return null}function su(t,e){for(let r=0;r<t.geometries.length;++r){const i=t.geometries[r].getMutableAttribute(h.AUXPOS1);i&&i.data[3]!==e&&(i.data[3]=e,t.geometryVertexAttrsUpdated(t.geometries[r]))}}function wm(t,e,r=null){const i=Qn(Ii);return t!=null&&(i[0]=t[0],i[1]=t[1],i[2]=t[2]),e!=null?i[3]=e:t!=null&&t.length>3&&(i[3]=t[3]),r&&(i[0]*=r,i[1]*=r,i[2]*=r,i[3]*=r),i}function Sm(t=el,e,r,i=1){const s=new Array(3);if(e==null||r==null)s[0]=1,s[1]=1,s[2]=1;else{let o,n=0;for(let a=2;a>=0;a--){const l=t[a];let c;const d=l!=null,f=a===0&&!o&&!d,u=r[a];l==="symbol-value"||f?c=u!==0?e[a]/u:1:d&&l!=="proportional"&&isFinite(l)&&(c=u!==0?l/u:1),c!=null&&(s[a]=c,o=c,n=Math.max(n,Math.abs(c)))}for(let a=2;a>=0;a--)s[a]==null?s[a]=o:s[a]===0&&(s[a]=.001*n)}for(let o=2;o>=0;o--)s[o]/=i;return Kn(s)}function ou(t){return t.isPrimitive!=null}function xm(t){return au(ou(t)?[t.width,t.depth,t.height]:t)?null:"Symbol sizes may not be negative values"}function au(t){const e=r=>r==null||r>=0;return Array.isArray(t)?t.every(e):e(t)}function Tm(t,e,r,i=k()){return t&&tl(i,i,-t/180*Math.PI),e&&rl(i,i,e/180*Math.PI),r&&il(i,i,r/180*Math.PI),i}function Om(t,e,r){if(r.minDemResolution!=null)return r.minDemResolution;const i=sl(e),s=ol(t)*i,o=al(t)*i,n=nl(t)*(e.isGeographic?1:i);return s===0&&o===0&&n===0?r.minDemResolutionForPoints:.01*Math.max(s,o,n)}let Cm=class{constructor(e,r=null,i=0){this.array=e,this.spatialReference=r,this.offset=i}};function dn(t){return"array"in t}function si(t,e,r="ground"){if(cn(e))return t.getElevation(e.x,e.y,e.z||0,e.spatialReference,r);if(dn(e)){let i=e.offset;return t.getElevation(e.array[i++],e.array[i++],e.array[i]||0,e.spatialReference??t.spatialReference,r)}return t.getElevation(e[0],e[1],e[2]||0,t.spatialReference,r)}function nu(t,e,r,i,s,o,n,a,l,c,d){const f=fu[d.mode];let u,p,v=0;if(fi(t,e,r,i,l.spatialReference,s,a))return f.requiresAlignment(d)?(v=f.applyElevationAlignmentBuffer(i,s,o,n,a,l,c,d),u=o,p=n):(u=i,p=s),fi(u,l.spatialReference,p,o,c.spatialReference,n,a)?v:void 0}function hn(t,e,r,i,s){const o=(cn(t)?t.z:dn(t)?t.array[t.offset+2]:t[2])||0;switch(r.mode){case"on-the-ground":{const n=si(e,t,"ground")??0;return s.verticalDistanceToGround=0,s.sampledElevation=n,void(s.z=n)}case"relative-to-ground":{const n=si(e,t,"ground")??0,a=r.geometryZWithOffset(o,i);return s.verticalDistanceToGround=a,s.sampledElevation=n,void(s.z=a+n)}case"relative-to-scene":{const n=si(e,t,"scene")??0,a=r.geometryZWithOffset(o,i);return s.verticalDistanceToGround=a,s.sampledElevation=n,void(s.z=a+n)}case"absolute-height":{const n=r.geometryZWithOffset(o,i),a=si(e,t,"ground")??0;return s.verticalDistanceToGround=n-a,s.sampledElevation=a,void(s.z=n)}default:return void(s.z=0)}}function Rm(t,e,r,i){return hn(t,e,r,i,sr),sr.z}function Am(t,e,r){return e==null||r==null?t.definedChanged:e==="on-the-ground"&&r==="on-the-ground"?t.staysOnTheGround:e===r||e!=="on-the-ground"&&r!=="on-the-ground"?Ss.UPDATE:t.onTheGroundChanged}function Pm(t){return t==="relative-to-ground"||t==="relative-to-scene"}function Em(t){return t!=="absolute-height"}function Dm(t,e,r,i,s){hn(e,r,s,i,sr),su(t,sr.verticalDistanceToGround);const o=sr.sampledElevation,n=nt(mu,t.transformation);return oi[0]=e.x,oi[1]=e.y,oi[2]=sr.z,ll(e.spatialReference,oi,n,i.spatialReference)?t.transformation=n:console.warn("Could not locate symbol object properly, it might be misplaced"),o}function lu(t,e,r,i,s,o){let n=0;const a=o.spatialReference;e*=3,i*=3;for(let l=0;l<s;++l){const c=t[e],d=t[e+1],f=t[e+2],u=o.getElevation(c,d,f,a,"ground")??0;n+=u,r[i]=c,r[i+1]=d,r[i+2]=u,e+=3,i+=3}return n/s}function cu(t,e,r,i,s,o,n,a){let l=0;const c=a.calculateOffsetRenderUnits(n),d=a.featureExpressionInfoContext,f=o.spatialReference;e*=3,i*=3;for(let u=0;u<s;++u){const p=t[e],v=t[e+1],_=t[e+2],w=o.getElevation(p,v,_,f,"ground")??0;l+=w,r[i]=p,r[i+1]=v,r[i+2]=d==null?_+w+c:w+c,e+=3,i+=3}return l/s}function du(t,e,r,i,s,o,n,a){let l=0;const c=a.calculateOffsetRenderUnits(n),d=a.featureExpressionInfoContext,f=o.spatialReference;e*=3,i*=3;for(let u=0;u<s;++u){const p=t[e],v=t[e+1],_=t[e+2],w=o.getElevation(p,v,_,f,"scene")??0;l+=w,r[i]=p,r[i+1]=v,r[i+2]=d==null?_+w+c:w+c,e+=3,i+=3}return l/s}function hu(t){const e=t.meterUnitOffset,r=t.featureExpressionInfoContext;return e!==0||r!=null}function uu(t,e,r,i,s,o,n,a){const l=a.calculateOffsetRenderUnits(n),c=a.featureExpressionInfoContext;e*=3,i*=3;for(let d=0;d<s;++d){const f=t[e],u=t[e+1],p=t[e+2];r[i]=f,r[i+1]=u,r[i+2]=c==null?p+l:l,e+=3,i+=3}return 0}let pu=class{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}};var Ss;(function(t){t[t.NONE=0]="NONE",t[t.UPDATE=1]="UPDATE",t[t.RECREATE=2]="RECREATE"})(Ss||(Ss={}));const fu={"absolute-height":{applyElevationAlignmentBuffer:uu,requiresAlignment:hu},"on-the-ground":{applyElevationAlignmentBuffer:lu,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:cu,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:du,requiresAlignment:()=>!0}},mu=k(),sr=new pu,oi=D(),gu=Ur.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function vu(t){return{cachedResult:t.cachedResult,arcade:t.arcade?{func:t.arcade.func,context:t.arcade.modules.arcadeUtils.createExecContext(null,{sr:t.arcade.context.spatialReference}),modules:t.arcade.modules}:null}}async function Im(t,e,r,i){const s=t&&t.expression;if(typeof s!="string")return null;const o=Su(s);if(o!=null)return{cachedResult:o};const n=await cl();dl(r);const a=n.arcadeUtils,l=a.createSyntaxTree(s);return a.dependsOnView(l)?(i!=null&&i.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:a.createFunction(l),context:a.createExecContext(null,{sr:e}),modules:n}}}function _u(t,e,r){return t.arcadeUtils.createFeature(e.attributes,e.geometry,r)}function yu(t,e){if(t!=null&&!un(t)){if(!e||!t.arcade)return void gu.errorOncePerTick("Arcade support required but not provided");const r=e;r._geometry&&(r._geometry=uc(r._geometry)),t.arcade.modules.arcadeUtils.updateExecContext(t.arcade.context,e)}}function wu(t){if(t!=null){if(un(t))return t.cachedResult;const e=t.arcade;let r=e==null?void 0:e.modules.arcadeUtils.executeFunction(e.func,e.context);return typeof r!="number"&&(t.cachedResult=0,r=0),r}return 0}function Mm(t,e=!1){let r=t&&t.featureExpressionInfo;const i=r&&r.expression;return e||i==="0"||(r=null),r??null}const Lm={cachedResult:0};function un(t){return t.cachedResult!=null}function Su(t){return t==="0"?0:null}let Nm=class pn{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(e){this._unit=e,this._metersPerElevationInfoUnit=hl(e)}get requiresSampledElevationInfo(){return this.mode!=="absolute-height"}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(e){this._meterUnitOffset=e,this._renderUnitOffset=0}set offsetElevationInfoUnits(e){this._meterUnitOffset=e*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(e){this._renderUnitOffset+=e}geometryZWithOffset(e,r){const i=this.calculateOffsetRenderUnits(r);return this.featureExpressionInfoContext!=null?i:e+i}calculateOffsetRenderUnits(e){let r=this._meterUnitOffset;const i=this.featureExpressionInfoContext;return i!=null&&(r+=wu(i)*this._metersPerElevationInfoUnit),r/e.unitInMeters+this._renderUnitOffset}setFromElevationInfo(e){this.mode=e.mode,this.unit=ul(e.unit)?e.unit:"meters",this.offsetElevationInfoUnits=e.offset??0}updateFeatureExpressionInfoContext(e,r,i){if(e==null)return void(this._featureExpressionInfoContext=null);const s=e&&e.arcade;s&&r!=null&&i!=null?(this._featureExpressionInfoContext=vu(e),yu(this._featureExpressionInfoContext,_u(s.modules,r,i))):this._featureExpressionInfoContext=e}static fromElevationInfo(e){const r=new pn;return e!=null&&r.setFromElevationInfo(e),r}};function xu(t){return t instanceof Float32Array&&t.length>=16}function Tu(t){return Array.isArray(t)&&t.length>=16}function Ou(t){return xu(t)||Tu(t)}function Ws(t){t.uniforms.add(new ai("alignPixelEnabled",(e,r)=>r.alignPixelEnabled)),t.code.add(m`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),t.code.add(m`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var Pi;(function(t){t[t.Occluded=0]="Occluded",t[t.NotOccluded=1]="NotOccluded",t[t.Both=2]="Both",t[t.COUNT=3]="COUNT"})(Pi||(Pi={}));var Ue;function Cu(t,e){t.include(Ta),t.attributes.add(h.POSITION,"vec3"),t.attributes.add(h.NORMAL,"vec3"),t.attributes.add(h.AUXPOS1,"vec4");const r=t.vertex;Hr(r,e),Ps(r,e),r.uniforms.add(new Oe("viewport",(i,s)=>s.camera.fullViewport),new B("polygonOffset",i=>i.shaderPolygonOffset),new B("cameraGroundRelative",(i,s)=>s.camera.aboveGround?1:-1),new B("renderTransparentlyOccludedHUD",(i,s)=>s.renderTransparentlyOccludedHUD===Pi.Occluded?1:s.renderTransparentlyOccludedHUD===Pi.NotOccluded?0:.75),new Qe("hudVisibilityTexture",(i,s)=>s.hudVisibilityTexture)),e.hasVerticalOffset&&Vl(r),r.constants.add("smallOffsetAngle","float",.984807753012208),r.code.add(m`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),r.code.add(m`float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
float pointGroundSign = sign(pointGroundDistance);
if (pointGroundSign == 0.0) {
pointGroundSign = cameraGroundRelative;
}
float groundRelative = cameraGroundRelative * pointGroundSign;
if (polygonOffset > .0) {
float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
float factor = (1.0 - tanAlpha / viewport[2]);
if (groundRelative > 0.0) {
posView *= factor;
}
else {
posView /= factor;
}
}
return groundRelative;
}`),e.draped&&!e.hasVerticalOffset||Hl(r),e.draped||(r.uniforms.add(new B("perDistancePixelRatio",(i,s)=>Math.tan(s.camera.fovY/2)/(s.camera.fullViewport[2]/2))),r.code.add(m`void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
float distanceToCamera = length(posView);
float pixelOffset = distanceToCamera * perDistancePixelRatio * 0.5;
vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;
vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
posModel += modelOffset;
posView += viewOffset;
}`)),e.screenCenterOffsetUnitsEnabled===Ue.Screen&&Vr(r,e),e.hasScreenSizePerspective&&Oa(r),r.code.add(m`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      // centerOffset is in view space and is used to implement world size offsetting
      // of labels with respect to objects. It also pulls the label towards the viewer
      // so that the label is visible in front of the object.
      vec3 centerOffset = auxpos1.xyz;

      // The pointGroundDistance is the distance of the geometry to the ground and is
      // negative if the point is below the ground, or positive if the point is above
      // ground.
      float pointGroundDistance = auxpos1.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${e.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${e.hasScreenSizePerspective&&(e.hasVerticalOffset||e.screenCenterOffsetUnitsEnabled===Ue.Screen)?"vec4 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${e.hasVerticalOffset?e.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${e.hasVerticalOffset?m`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${e.screenCenterOffsetUnitsEnabled!==Ue.Screen?m`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `:""}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${e.screenCenterOffsetUnitsEnabled===Ue.Screen?e.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${e.screenCenterOffsetUnitsEnabled===Ue.Screen?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `),r.include(Ws),r.code.add(m`bool testVisibilityHUD(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}(function(t){t[t.World=0]="World",t[t.Screen=1]="Screen",t[t.COUNT=2]="COUNT"})(Ue||(Ue={}));let bu=class{constructor(){this.factor=new Qo,this.factorAlignment=new Qo}},Qo=class{constructor(){this.scale=0,this.factor=0,this.minPixelSize=0,this.paddingPixels=0}};function Ru(t,e){const{vertex:r,fragment:i}=t;r.include(Ws),e.hasMultipassGeometry&&r.include(Ld),e.hasMultipassTerrain&&t.varyings.add("depth","float"),r.code.add(m`
  void main(void) {
    vec4 posProjCenter;
    if (dot(position, position) > 0.0) {
      // Render single point to center of the pixel to avoid subpixel
      // filtering to affect the marker color
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      posProjCenter = alignToPixelCenter(posProj, viewport.zw);

      ${e.hasMultipassGeometry?m`
        // Don't draw vertices behind geometry
        if(geometryDepthTest(.5 + .5 * posProjCenter.xy / posProjCenter.w, projectAux.posView.z)){
          posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
        }`:""}

      ${e.hasMultipassTerrain?"depth = projectAux.posView.z;":""}
      vec3 vpos = projectAux.posModel;
      if (rejectBySlice(vpos)) {
        // Project out of clip space
        posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
      }

    } else {
      // Project out of clip space
      posProjCenter = vec4(1e038, 1e038, 1e038, 1.0);
    }

    gl_Position = posProjCenter;
    gl_PointSize = 1.0;
  }
  `),e.hasMultipassTerrain&&i.include($s),e.hasMultipassTerrain&&i.uniforms.add(new Qe("terrainDepthTexture",(s,o)=>o.multipassTerrain.linearDepthTexture),new zt("nearFar",(s,o)=>o.camera.nearFar)),i.include(As),i.code.add(m`
  void main() {
    fragColor = vec4(1);
    ${e.hasMultipassTerrain?m`
          // Read the rgba data from the texture linear depth
          vec4 terrainDepthData = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);

          float terrainDepth = linearDepthFromFloat(rgba2float(terrainDepthData), nearFar);

          // If HUD vertex is behind terrain and the terrain depth is not the initialize value (e.g. we are not looking at the sky)
          // Mark the HUD vertex as occluded by transparent terrain
          if(depth < terrainDepth && terrainDepthData != vec4(0,0,0,1)){
            fragColor.g = 0.5;
          }`:""}
  }
  `)}function Au(t){const e=new _r,r=t.signedDistanceFieldEnabled;if(e.include(Cu,t),e.include(ot,t),t.occlusionPass)return e.include(Ru,t),e;const{vertex:i,fragment:s}=e;e.include(Ta),s.include(As),s.include(Li),e.include(Rs,t),e.include(Mi,t),e.varyings.add("vcolor","vec4"),e.varyings.add("vtc","vec2"),e.varyings.add("vsize","vec2"),t.binaryHighlightOcclusionEnabled&&e.varyings.add("voccluded","float"),i.uniforms.add(new Oe("viewport",(c,d)=>d.camera.fullViewport),new zt("screenOffset",(c,d)=>Ft(fn,2*c.screenOffset[0]*d.camera.pixelRatio,2*c.screenOffset[1]*d.camera.pixelRatio)),new zt("anchorPosition",c=>Ei(c)),new Oe("materialColor",c=>c.color)),Vr(i,t),r&&(i.uniforms.add(new Oe("outlineColor",c=>c.outlineColor)),s.uniforms.add(new Oe("outlineColor",c=>Ko(c)?c.outlineColor:Os),new B("outlineSize",c=>Ko(c)?c.outlineSize:0))),t.hasScreenSizePerspective&&(Wl(i),Oa(i)),(t.debugDrawLabelBorder||t.binaryHighlightOcclusionEnabled)&&e.varyings.add("debugBorderCoords","vec4"),e.attributes.add(h.UV0,"vec2"),e.attributes.add(h.COLOR,"vec4"),e.attributes.add(h.SIZE,"vec2"),e.attributes.add(h.AUXPOS2,"vec4"),i.code.add(m`
    void main(void) {
      ProjectHUDAux projectAux;
      vec4 posProj = projectPositionHUD(projectAux);
      forwardObjectAndLayerIdColor();

      if (rejectBySlice(projectAux.posModel)) {
        // Project outside of clip plane
        gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
        return;
      }
      vec2 inputSize;
      ${t.hasScreenSizePerspective?m`
      inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);
      vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);
         `:m`
      inputSize = size;
      vec2 screenOffsetScaled = screenOffset;`}

      ${t.vvSize?"inputSize *= vvScale(auxpos2).xx;":""}

      vec2 combinedSize = inputSize * pixelRatio;
      vec4 quadOffset = vec4(0.0);

      ${t.occlusionTestEnabled||t.binaryHighlightOcclusionEnabled?"bool visible = testVisibilityHUD(posProj);":""}

      ${t.binaryHighlightOcclusionEnabled?"voccluded = visible ? 0.0 : 1.0;":""}
    `);const o=m`vec2 uv01 = floor(uv0);
vec2 uv = uv0 - uv01;
quadOffset.xy = ((uv01 - anchorPosition) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;`;t.pixelSnappingEnabled&&i.include(Ws);const n=t.pixelSnappingEnabled?r?m`posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;`:m`posProj += quadOffset;
if (inputSize.x == size.x) {
posProj = alignToPixelOrigin(posProj, viewport.zw);
}`:m`posProj += quadOffset;`;i.code.add(m`
    ${t.occlusionTestEnabled?"if (visible) {":""}
    ${o}
    ${t.vvColor?"vcolor = interpolateVVColor(auxpos2.y) * materialColor;":"vcolor = color / 255.0 * materialColor;"}

    ${t.output===x.ObjectAndLayerIdColor?m`vcolor.a = 1.0;`:""}

    bool alphaDiscard = vcolor.a < ${m.float(De)};
    ${r?`alphaDiscard = alphaDiscard && outlineColor.a < ${m.float(De)};`:""}
    if (alphaDiscard) {
      // "early discard" if both symbol color (= fill) and outline color (if applicable) are transparent
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      return;
    } else {
      ${n}
      gl_Position = posProj;
    }

    vtc = uv;

    ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(uv01, 1.5 / combinedSize);":""}
    vsize = inputSize;
    ${t.occlusionTestEnabled?m`} else { vtc = vec2(0.0);
      ${t.debugDrawLabelBorder?"debugBorderCoords = vec4(0.5, 0.5, 1.5 / combinedSize);}":"}"}`:""}
  }
  `),s.uniforms.add(new Qe("tex",c=>c.texture));const a=t.debugDrawLabelBorder?m`(isBorder > 0.0 ? 0.0 : ${m.float(po)})`:m.float(po),l=m`
    ${t.debugDrawLabelBorder?m`
      float isBorder = float(any(lessThan(debugBorderCoords.xy, debugBorderCoords.zw)) || any(greaterThan(debugBorderCoords.xy, 1.0 - debugBorderCoords.zw)));`:""}

    ${r?m`
      vec4 fillPixelColor = vcolor;

      // Attempt to sample texel centers to avoid that thin cross outlines
      // disappear with large symbol sizes.
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/7058#issuecomment-603041
      const float txSize = ${m.float(Vs)};
      const float texelSize = 1.0 / txSize;
      // Calculate how much we have to add/subtract to/from each texel to reach the size of an onscreen pixel
      vec2 scaleFactor = (vsize - txSize) * texelSize;
      vec2 samplePos = vtc + (vec2(1.0, -1.0) * texelSize) * scaleFactor;

      // Get distance and map it into [-0.5, 0.5]
      float d = rgba2float(texture(tex, samplePos)) - 0.5;

      // Distance in output units (i.e. pixels)
      float dist = d * vsize.x;

      // Create smooth transition from the icon into its outline
      float fillAlphaFactor = clamp(0.5 - dist, 0.0, 1.0);
      fillPixelColor.a *= fillAlphaFactor;

      if (outlineSize > 0.25) {
        vec4 outlinePixelColor = outlineColor;
        float clampedOutlineSize = min(outlineSize, 0.5*vsize.x);

        // Create smooth transition around outline
        float outlineAlphaFactor = clamp(0.5 - (abs(dist) - 0.5*clampedOutlineSize), 0.0, 1.0);
        outlinePixelColor.a *= outlineAlphaFactor;

        if (
          outlineAlphaFactor + fillAlphaFactor < ${a} ||
          fillPixelColor.a + outlinePixelColor.a < ${m.float(De)}
        ) {
          discard;
        }

        // perform un-premultiplied over operator (see https://en.wikipedia.org/wiki/Alpha_compositing#Description)
        float compositeAlpha = outlinePixelColor.a + fillPixelColor.a * (1.0 - outlinePixelColor.a);
        vec3 compositeColor = vec3(outlinePixelColor) * outlinePixelColor.a +
          vec3(fillPixelColor) * fillPixelColor.a * (1.0 - outlinePixelColor.a);

        fragColor = vec4(compositeColor, compositeAlpha);
      } else {
        if (fillAlphaFactor < ${a}) {
          discard;
        }

        fragColor = premultiplyAlpha(fillPixelColor);
      }

      // visualize SDF:
      // fragColor = vec4(clamp(-dist/vsize.x*2.0, 0.0, 1.0), clamp(dist/vsize.x*2.0, 0.0, 1.0), 0.0, 1.0);
      `:m`
          vec4 texColor = texture(tex, vtc, -0.5);
          if (texColor.a < ${a}) {
            discard;
          }
          fragColor = texColor * premultiplyAlpha(vcolor);
          `}

    // Draw debug border with transparency, so that original texels along border are still partially visible
    ${t.debugDrawLabelBorder?m`fragColor = mix(fragColor, vec4(1.0, 0.0, 1.0, 1.0), isBorder * 0.5);`:""}
  `;return t.output===x.Alpha&&s.code.add(m`
      void main() {
        ${l}
        fragColor = vec4(fragColor.a);
      }
      `),t.output===x.ObjectAndLayerIdColor&&s.code.add(m`
      void main() {
        ${l}
        outputObjectAndLayerIdColor();
      }
      `),t.output===x.Color&&s.code.add(m`
    void main() {
      ${l}
      ${t.transparencyPassType===ee.FrontFace?"fragColor.rgb /= fragColor.a;":""}
    }
    `),t.output===x.Highlight&&(e.include(zi,t),s.code.add(m`
    void main() {
      ${l}
      ${t.binaryHighlightOcclusionEnabled?m`
          if (voccluded == 1.0) {
            fragColor = vec4(1.0, 1.0, 0.0, 1.0);
          } else {
            fragColor = vec4(1.0, 0.0, 1.0, 1.0);
          }`:"outputHighlight();"}
    }
    `)),e}function Ko(t){return t.outlineColor[3]>0&&t.outlineSize>0}function Ei(t,e=fn){return t.textureIsSignedDistanceField?Pu(t.anchorPosition,t.distanceFieldBoundingBox,e):mr(e,t.anchorPosition),e}function Pu(t,e,r){e!=null?Ft(r,t[0]*(e[2]-e[0])+e[0],t[1]*(e[3]-e[1])+e[1]):Ft(r,0,0)}const fn=Y(),Eu=Object.freeze(Object.defineProperty({__proto__:null,build:Au,calculateAnchorPosForRendering:Ei},Symbol.toStringTag,{value:"Module"}));let mn=class gn extends wr{initializeConfiguration(e,r){r.spherical=e.viewingMode===St.Global}initializeProgram(e){return new Sr(e.rctx,gn.shader.get().build(this.configuration),Wr)}_setPipelineState(e){const r=this.configuration,i=e===ee.NONE,s=e===ee.FrontFace,o=this.configuration.hasPolygonOffset?Du:null,n=(i||s)&&r.output!==x.Highlight&&(r.depthEnabled||r.occlusionPass)?pr:null;return Ze({blending:r.output===x.Color||r.output===x.Alpha||r.output===x.Highlight?i?$u:ji(e):null,depthTest:{func:Oc.LEQUAL},depthWrite:n,colorWrite:ct,polygonOffset:o})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return this.configuration.occlusionPass?fr.POINTS:fr.TRIANGLES}};mn.shader=new xr(Eu,()=>gr(()=>import("./HUDMaterial.glsl-ca6008e0.js"),["assets/HUDMaterial.glsl-ca6008e0.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css","assets/floatRGBA-f2fcae6c.js","assets/VertexColor.glsl-a0697bd4.js","assets/requestImageUtils-2f3ee55b.js","assets/basicInterfaces-bb952591.js","assets/enums-b14466b3.js","assets/Texture-31c4f382.js","assets/InterleavedLayout-ddec9a00.js","assets/BufferView-c58f8e7f.js","assets/types-1305598a.js","assets/mat4f64-65d35099.js","assets/Indices-b766e722.js","assets/triangle-0231590c.js","assets/sphere-812d69dd.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-e0d341b8.js","assets/VertexAttribute-9f2e53ec.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/OrderIndependentTransparency-0ab46cc4.js","assets/quat-7c737b79.js","assets/vec3f32-ad1dc57f.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-d7a3254f.js","assets/DoubleArray-96e88651.js","assets/plane-f0d62c60.js","assets/interfaces-6a52f173.js","assets/triangulationUtils-4a253704.js","assets/earcut-15ea0d28.js","assets/deduplicate-058a0b05.js","assets/NestedMap-1b5db22e.js","assets/Octree-3004e05b.js","assets/boundedPlane-0cbeb150.js","assets/glUtil-0b7ee6ea.js"]));const Du={factor:0,units:-4},$u=_c(Xe.ONE,Xe.ONE_MINUS_SRC_ALPHA);class J extends yr{constructor(){super(...arguments),this.output=x.Color,this.screenCenterOffsetUnitsEnabled=Ue.World,this.transparencyPassType=ee.NONE,this.spherical=!1,this.occlusionTestEnabled=!0,this.signedDistanceFieldEnabled=!1,this.vvSize=!1,this.vvColor=!1,this.hasVerticalOffset=!1,this.hasScreenSizePerspective=!1,this.debugDrawLabelBorder=!1,this.binaryHighlightOcclusionEnabled=!0,this.hasSlicePlane=!1,this.hasPolygonOffset=!1,this.depthEnabled=!0,this.pixelSnappingEnabled=!0,this.draped=!1,this.hasMultipassGeometry=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.occlusionPass=!1,this.objectAndLayerIdColorInstanced=!1}}g([y({count:x.COUNT})],J.prototype,"output",void 0),g([y({count:Ue.COUNT})],J.prototype,"screenCenterOffsetUnitsEnabled",void 0),g([y({count:ee.COUNT})],J.prototype,"transparencyPassType",void 0),g([y()],J.prototype,"spherical",void 0),g([y()],J.prototype,"occlusionTestEnabled",void 0),g([y()],J.prototype,"signedDistanceFieldEnabled",void 0),g([y()],J.prototype,"vvSize",void 0),g([y()],J.prototype,"vvColor",void 0),g([y()],J.prototype,"hasVerticalOffset",void 0),g([y()],J.prototype,"hasScreenSizePerspective",void 0),g([y()],J.prototype,"debugDrawLabelBorder",void 0),g([y()],J.prototype,"binaryHighlightOcclusionEnabled",void 0),g([y()],J.prototype,"hasSlicePlane",void 0),g([y()],J.prototype,"hasPolygonOffset",void 0),g([y()],J.prototype,"depthEnabled",void 0),g([y()],J.prototype,"pixelSnappingEnabled",void 0),g([y()],J.prototype,"draped",void 0),g([y()],J.prototype,"hasMultipassGeometry",void 0),g([y()],J.prototype,"hasMultipassTerrain",void 0),g([y()],J.prototype,"cullAboveGround",void 0),g([y()],J.prototype,"occlusionPass",void 0),g([y()],J.prototype,"objectAndLayerIdColorInstanced",void 0),g([y({constValue:!0})],J.prototype,"hasSliceInVertexProgram",void 0),g([y({constValue:!1})],J.prototype,"hasVvInstancing",void 0);let jm=class extends Ni{constructor(e){super(e,new Hu),this._configuration=new J}getConfiguration(e,r){return this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVerticalOffset=!!this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective,this._configuration.screenCenterOffsetUnitsEnabled=this.parameters.centerOffsetUnits==="screen"?Ue.Screen:Ue.World,this._configuration.hasPolygonOffset=this.parameters.polygonOffset,this._configuration.draped=this.parameters.isDraped,this._configuration.occlusionTestEnabled=this.parameters.occlusionTest,this._configuration.pixelSnappingEnabled=this.parameters.pixelSnappingEnabled,this._configuration.signedDistanceFieldEnabled=this.parameters.textureIsSignedDistanceField,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.occlusionPass=r.slot===V.OCCLUSION_PIXELS&&this.parameters.occlusionTest&&(e===x.Color||e===x.Alpha),e===x.Color&&(this._configuration.debugDrawLabelBorder=!!ms.LABELS_SHOW_BORDER),e===x.Highlight&&(this._configuration.binaryHighlightOcclusionEnabled=this.parameters.binaryHighlightOcclusion),this._configuration.depthEnabled=this.parameters.depthEnabled,this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.hasMultipassGeometry=r.multipassGeometry.enabled,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration}intersect(e,r,i,s,o,n){if(!i.options.selectionMode||!i.options.hud||!e.visible)return;const a=this.parameters;let l=1,c=1;if(eo(cs,r),e.shaderTransformer!=null){const T=e.shaderTransformer(ra);l=T[0],c=T[5],Lu(cs)}const d=e.vertexAttributes.get(h.POSITION),f=e.vertexAttributes.get(h.SIZE),u=e.vertexAttributes.get(h.NORMAL),p=e.vertexAttributes.get(h.AUXPOS1);we(d.size>=3);const v=i.point,_=i.camera,w=Ei(a);l*=_.pixelRatio,c*=_.pixelRatio;const O=this.parameters.centerOffsetUnits==="screen";for(let T=0;T<d.data.length/d.size;T++){const S=T*d.size;W(fe,d.data[S],d.data[S+1],d.data[S+2]),te(fe,fe,r);const R=T*f.size;gt[0]=f.data[R]*l,gt[1]=f.data[R+1]*c,te(fe,fe,_.viewMatrix);const C=T*p.size;if(W(Pe,p.data[C],p.data[C+1],p.data[C+2]),!O&&(fe[0]+=Pe[0],fe[1]+=Pe[1],Pe[2]!==0)){const L=Pe[2];ne(Pe,fe),ie(fe,fe,Z(Pe,Pe,L))}const b=T*u.size;if(W(Ar,u.data[b],u.data[b+1],u.data[b+2]),this._normalAndViewAngle(Ar,cs,_,ds),this._applyVerticalOffsetTransformationView(fe,ds,_,ls),_.applyProjection(fe,ve),ve[0]>-1){ve[0]=Math.floor(ve[0]),ve[1]=Math.floor(ve[1]),O&&(Pe[0]||Pe[1])&&(ve[0]+=Pe[0],Pe[1]!==0&&(ve[1]+=Gl(Pe[1],ls.factorAlignment)),_.unapplyProjection(ve,fe)),ve[0]+=this.parameters.screenOffset[0],ve[1]+=this.parameters.screenOffset[1],Bl(gt,ls.factor,gt);const L=ju*_.pixelRatio;let A=0;if(a.textureIsSignedDistanceField&&(A=a.outlineSize*_.pixelRatio/2),v&&ea(v,ve[0],ve[1],gt,L,A,a,w)){const j=i.ray;if(te(ta,fe,or(zu,_.viewMatrix)),ve[0]=v[0],ve[1]=v[1],_.unprojectFromRenderScreen(ve,fe)){const ce=D();H(ce,j.direction);const E=1/at(ce);Z(ce,ce,E),n(Ht(j.origin,fe)*E,ce,-1,!0,1,ta)}}}}}intersectDraped(e,r,i,s,o,n){const a=e.vertexAttributes.get(h.POSITION),l=e.vertexAttributes.get(h.SIZE),c=this.parameters,d=Ei(c);let f=1,u=1;if(e.shaderTransformer!=null){const v=e.shaderTransformer(ra);f=v[0],u=v[5]}f*=e.screenToWorldRatio,u*=e.screenToWorldRatio;const p=Uu*e.screenToWorldRatio;for(let v=0;v<a.data.length/a.size;v++){const _=v*a.size,w=a.data[_],O=a.data[_+1],T=v*l.size;gt[0]=l.data[T]*f,gt[1]=l.data[T+1]*u;let S=0;c.textureIsSignedDistanceField&&(S=c.outlineSize*e.screenToWorldRatio/2),ea(s,w,O,gt,p,S,c,d)&&o(n.dist,n.normal,-1,!1)}}createBufferWriter(){return new Gu(this)}_normalAndViewAngle(e,r,i,s){return Ou(r)&&(r=eo(Fu,r)),pl(s.normal,e,r),te(s.normal,s.normal,i.viewInverseTransposeMatrix),s.cosAngle=dt(vn,Vu),s}_updateScaleInfo(e,r,i){const s=this.parameters;s.screenSizePerspective!=null?fo(i,r,s.screenSizePerspective,e.factor):(e.factor.scale=1,e.factor.factor=0,e.factor.minPixelSize=0,e.factor.paddingPixels=0),s.screenSizePerspectiveAlignment!=null?fo(i,r,s.screenSizePerspectiveAlignment,e.factorAlignment):(e.factorAlignment.factor=e.factor.factor,e.factorAlignment.scale=e.factor.scale,e.factorAlignment.minPixelSize=e.factor.minPixelSize,e.factorAlignment.paddingPixels=e.factor.paddingPixels)}applyShaderOffsetsView(e,r,i,s,o,n,a){const l=this._normalAndViewAngle(r,i,o,ds);return this._applyVerticalGroundOffsetView(e,l,o,a),this._applyVerticalOffsetTransformationView(a,l,o,n),this._applyPolygonOffsetView(a,l,s[3],o,a),this._applyCenterOffsetView(a,s,a),a}applyShaderOffsetsNDC(e,r,i,s,o){return this._applyCenterOffsetNDC(e,r,i,s),o!=null&&H(o,s),this._applyPolygonOffsetNDC(s,r,i,s),s}_applyPolygonOffsetView(e,r,i,s,o){const n=s.aboveGround?1:-1;let a=Math.sign(i);a===0&&(a=n);const l=n*a;if(this.parameters.shaderPolygonOffset<=0)return H(o,e);const c=Mt(Math.abs(r.cosAngle),.01,1),d=1-Math.sqrt(1-c*c)/c/s.viewport[2];return Z(o,e,l>0?d:1/d),o}_applyVerticalGroundOffsetView(e,r,i,s){const o=at(e),n=i.aboveGround?1:-1,a=.5*i.computeRenderPixelSizeAtDist(o),l=Z(fe,r.normal,n*a);return K(s,e,l),s}_applyVerticalOffsetTransformationView(e,r,i,s){const o=this.parameters;if(!o.verticalOffset||!o.verticalOffset.screenLength){if(o.screenSizePerspective||o.screenSizePerspectiveAlignment){const c=at(e);this._updateScaleInfo(s,c,r.cosAngle)}else s.factor.scale=1,s.factorAlignment.scale=1;return e}const n=at(e),a=o.screenSizePerspectiveAlignment??o.screenSizePerspective,l=kl(i,n,o.verticalOffset,r.cosAngle,a);return this._updateScaleInfo(s,n,r.cosAngle),Z(r.normal,r.normal,l),K(e,e,r.normal)}_applyCenterOffsetView(e,r,i){const s=this.parameters.centerOffsetUnits!=="screen";return i!==e&&H(i,e),s&&(i[0]+=r[0],i[1]+=r[1],r[2]&&(ne(Ar,i),K(i,i,Z(Ar,Ar,r[2])))),i}_applyCenterOffsetNDC(e,r,i,s){const o=this.parameters.centerOffsetUnits!=="screen";return s!==e&&H(s,e),o||(s[0]+=r[0]/i.fullWidth*2,s[1]+=r[1]/i.fullHeight*2),s}_applyPolygonOffsetNDC(e,r,i,s){const o=this.parameters.shaderPolygonOffset;if(e!==s&&H(s,e),o){const n=i.aboveGround?1:-1,a=n*Math.sign(r[3]);s[2]-=(a||n)*o}return s}requiresSlot(e,r){if(r===x.Color||r===x.Alpha||r===x.Highlight||r===x.ObjectAndLayerIdColor){if(e===V.DRAPED_MATERIAL)return!0;const{drawInSecondSlot:i,occlusionTest:s}=this.parameters;return e===(i?V.LABEL_MATERIAL:V.HUD_MATERIAL)||s&&e===V.OCCLUSION_PIXELS}return!1}createGLMaterial(e){return new Iu(e)}calculateRelativeScreenBounds(e,r,i=ua()){return Mu(this.parameters,e,r,i),i[2]=i[0]+e[0],i[3]=i[1]+e[1],i}},Iu=class extends ql{constructor(e){super({...e,...e.material.parameters})}selectProgram(e){return this.ensureTechnique(mn,e)}beginSlot(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.selectProgram(e)}};function Mu(t,e,r,i=Nu){return mr(i,t.anchorPosition),i[0]*=-e[0],i[1]*=-e[1],i[0]+=t.screenOffset[0]*r,i[1]+=t.screenOffset[1]*r,i}function Lu(t){const e=t[0],r=t[1],i=t[2],s=t[3],o=t[4],n=t[5],a=t[6],l=t[7],c=t[8],d=1/Math.sqrt(e*e+r*r+i*i),f=1/Math.sqrt(s*s+o*o+n*n),u=1/Math.sqrt(a*a+l*l+c*c);return t[0]=e*d,t[1]=r*d,t[2]=i*d,t[3]=s*f,t[4]=o*f,t[5]=n*f,t[6]=a*u,t[7]=l*u,t[8]=c*u,t}function ea(t,e,r,i,s,o,n,a){let l=e-s-(a[0]>0?i[0]*a[0]:0),c=l+i[0]+2*s,d=r-s-(a[1]>0?i[1]*a[1]:0),f=d+i[1]+2*s;const u=n.distanceFieldBoundingBox;return n.textureIsSignedDistanceField&&u!=null&&(l+=i[0]*u[0],d+=i[1]*u[1],c-=i[0]*(1-u[2]),f-=i[1]*(1-u[3]),l-=o,c+=o,d-=o,f+=o),t[0]>l&&t[0]<c&&t[1]>d&&t[1]<f}const ls=new bu,Nu=Y(),fe=D(),Ar=D(),ve=Ve(),vn=D(),ta=D(),cs=Ns(),Fu=Ns(),zu=k(),Pe=D(),ds={normal:vn,cosAngle:0},ra=k(),ju=1,Uu=2,gt=[0,0],Vu=pi(0,0,1);class Hu extends Zl{constructor(){super(...arguments),this.renderOccluded=wt.Occlude,this.color=Nt(1,1,1,1),this.texCoordScale=[1,1],this.polygonOffset=!1,this.anchorPosition=Ts(.5,.5),this.screenOffset=[0,0],this.shaderPolygonOffset=1e-5,this.textureIsSignedDistanceField=!1,this.outlineColor=Nt(1,1,1,1),this.outlineSize=0,this.vvSizeEnabled=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.hasSlicePlane=!1,this.pixelSnappingEnabled=!0,this.occlusionTest=!0,this.binaryHighlightOcclusion=!0,this.centerOffsetUnits="world",this.drawInSecondSlot=!1,this.depthEnabled=!0,this.isDraped=!1}}const _n=ut().vec3f(h.POSITION).vec3f(h.NORMAL).vec2f(h.UV0).vec4u8(h.COLOR).vec2f(h.SIZE).vec4f(h.AUXPOS1).vec4f(h.AUXPOS2),Wu=_n.clone().vec4u8(h.OBJECTANDLAYERIDCOLOR);class Gu{constructor(e){this._material=e,this.vertexBufferLayout=lt("enable-feature:objectAndLayerId-rendering")?Wu:_n}elementCount(e){return 6*e.indices.get(h.POSITION).length}write(e,r,i,s,o){Xl(i.indices.get(h.POSITION),i.vertexAttributes.get(h.POSITION).data,e,s.position,o,6),Jl(i.indices.get(h.NORMAL),i.vertexAttributes.get(h.NORMAL).data,r,s.normal,o,6);const n=i.vertexAttributes.get(h.UV0).data;let a,l,c,d;if(n==null||n.length<4){const O=this._material.parameters;a=0,l=0,c=O.texCoordScale[0],d=O.texCoordScale[1]}else a=n[0],l=n[1],c=n[2],d=n[3];c=Math.min(1.99999,c+1),d=Math.min(1.99999,d+1);let f=i.indices.get(h.POSITION).length,u=o;const p=s.uv0;for(let O=0;O<f;++O)p.set(u,0,a),p.set(u,1,l),u+=1,p.set(u,0,c),p.set(u,1,l),u+=1,p.set(u,0,c),p.set(u,1,d),u+=1,p.set(u,0,c),p.set(u,1,d),u+=1,p.set(u,0,a),p.set(u,1,d),u+=1,p.set(u,0,a),p.set(u,1,l),u+=1;Yl(i.indices.get(h.COLOR),i.vertexAttributes.get(h.COLOR).data,4,s.color,o,6);const v=i.indices.get(h.SIZE),_=i.vertexAttributes.get(h.SIZE).data;f=v.length;const w=s.size;u=o;for(let O=0;O<f;++O){const T=_[2*v[O]],S=_[2*v[O]+1];for(let R=0;R<6;++R)w.set(u,0,T),w.set(u,1,S),u+=1}if(i.indices.get(h.AUXPOS1)&&i.vertexAttributes.get(h.AUXPOS1)?mo(i.indices.get(h.AUXPOS1),i.vertexAttributes.get(h.AUXPOS1).data,s.auxpos1,o,6):go(s.auxpos1,o,6*f),i.indices.get(h.AUXPOS2)&&i.vertexAttributes.get(h.AUXPOS2)?mo(i.indices.get(h.AUXPOS2),i.vertexAttributes.get(h.AUXPOS2).data,s.auxpos2,o,6):go(s.auxpos2,o,6*f),i.objectAndLayerIdColor!=null&&i.indices.get(h.POSITION)){const O=i.indices.get(h.POSITION).length,T=s.getField(h.OBJECTANDLAYERIDCOLOR,pc);Ql(i.objectAndLayerIdColor,T,O,o,6)}}}function Bu(t){const e=new _r,{vertex:r,fragment:i,attributes:s,varyings:o}=e;Hr(r,t),e.include(Is,t),e.include(Ca,t),e.include(Rs,t),e.include(Mi,t),s.add(h.POSITION,"vec3"),t.vvColor&&s.add(h.COLORFEATUREATTRIBUTE,"float"),o.add("vColor","vec4"),o.add("vpos","vec3");const n=t.hasMultipassTerrain&&(t.output===x.Color||t.output===x.Alpha);n&&o.add("depth","float"),r.uniforms.add(new Oe("eColor",c=>c.color));const a=t.output===x.Depth;a&&(e.include(ma,t),Kl(e),ga(e)),r.code.add(m`
    void main(void) {
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${t.hasVertexColors?"vColor *= eColor;":t.vvColor?"vColor = eColor * interpolateVVColor(colorFeatureAttribute);":"vColor = eColor;"}
      ${n?"depth = (view * vec4(vpos, 1.0)).z;":""}
      gl_Position = ${a?m`transformPositionWithDepth(proj, view, vpos, nearFar, linearDepth);`:m`transformPosition(proj, view, vpos);`}
    }
  `),e.include(ot,t),n&&e.include(Es,t),i.include(Li);const l=t.output===x.Highlight;return l&&e.include(zi,t),i.code.add(m`
  void main() {
    discardBySlice(vpos);
    ${n?"terrainDepthTest(gl_FragCoord, depth);":""}
    vec4 fColor = vColor;

    ${t.output===x.ObjectAndLayerIdColor?m`fColor.a = 1.0;`:""}

    if (fColor.a < ${m.float(De)}) {
      discard;
    }

    ${t.output===x.Alpha?m`fragColor = vec4(fColor.a);`:""}

    ${t.output===x.Color?m`fragColor = highlightSlice(fColor, vpos); ${t.transparencyPassType===ee.Color?"fragColor = premultiplyAlpha(fragColor);":""}`:""}
    ${l?m`outputHighlight();`:""};
    ${t.output===x.Depth?m`outputDepth(linearDepth);`:""};
    ${t.output===x.ObjectAndLayerIdColor?m`outputObjectAndLayerIdColor();`:""}
  }
  `),e}const ku=Object.freeze(Object.defineProperty({__proto__:null,build:Bu},Symbol.toStringTag,{value:"Module"}));let yn=class wn extends wr{initializeProgram(e){return new Sr(e.rctx,wn.shader.get().build(this.configuration),Wr)}_createPipeline(e,r){const i=this.configuration,s=e===ee.NONE,o=e===ee.FrontFace;return Ze({blending:i.output!==x.Color&&i.output!==x.Alpha||!i.transparent?null:s?Dr:ji(e),culling:yc(i.cullFace),depthTest:{func:Fs(e)},depthWrite:(s||o)&&i.writeDepth?pr:null,colorWrite:ct,stencilWrite:i.hasOccludees?mi:null,stencilTest:i.hasOccludees?r?gi:Ds:null,polygonOffset:s||o?i.polygonOffset?qu:null:Da(i.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._createPipeline(this.configuration.transparencyPassType,!0),this._createPipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}};yn.shader=new xr(ku,()=>gr(()=>import("./ColorMaterial.glsl-be1e51f6.js"),["assets/ColorMaterial.glsl-be1e51f6.js","assets/VertexColor.glsl-a0697bd4.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css","assets/requestImageUtils-2f3ee55b.js","assets/basicInterfaces-bb952591.js","assets/enums-b14466b3.js","assets/Texture-31c4f382.js","assets/InterleavedLayout-ddec9a00.js","assets/BufferView-c58f8e7f.js","assets/types-1305598a.js","assets/mat4f64-65d35099.js","assets/Indices-b766e722.js","assets/triangle-0231590c.js","assets/sphere-812d69dd.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-e0d341b8.js","assets/VertexAttribute-9f2e53ec.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/OrderIndependentTransparency-0ab46cc4.js","assets/quat-7c737b79.js","assets/vec3f32-ad1dc57f.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-d7a3254f.js","assets/DoubleArray-96e88651.js","assets/plane-f0d62c60.js","assets/interfaces-6a52f173.js","assets/floatRGBA-f2fcae6c.js","assets/triangulationUtils-4a253704.js","assets/earcut-15ea0d28.js","assets/deduplicate-058a0b05.js","assets/NestedMap-1b5db22e.js","assets/Octree-3004e05b.js","assets/boundedPlane-0cbeb150.js","assets/glUtil-0b7ee6ea.js"]));const qu={factor:1,units:1};let he=class extends yr{constructor(){super(...arguments),this.output=x.Color,this.cullFace=zs.None,this.transparencyPassType=ee.NONE,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.cullAboveGround=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1}};g([y({count:x.COUNT})],he.prototype,"output",void 0),g([y({count:zs.COUNT})],he.prototype,"cullFace",void 0),g([y({count:ee.COUNT})],he.prototype,"transparencyPassType",void 0),g([y()],he.prototype,"hasSlicePlane",void 0),g([y()],he.prototype,"hasVertexColors",void 0),g([y()],he.prototype,"transparent",void 0),g([y()],he.prototype,"polygonOffset",void 0),g([y()],he.prototype,"enableOffset",void 0),g([y()],he.prototype,"writeDepth",void 0),g([y()],he.prototype,"hasOccludees",void 0),g([y()],he.prototype,"hasMultipassTerrain",void 0),g([y()],he.prototype,"cullAboveGround",void 0),g([y()],he.prototype,"objectAndLayerIdColorInstanced",void 0),g([y()],he.prototype,"vvColor",void 0),g([y({constValue:!0})],he.prototype,"hasVvInstancing",void 0),g([y({constValue:!1})],he.prototype,"vvSize",void 0),g([y({constValue:!1})],he.prototype,"vvOpacity",void 0);class Wm extends en{constructor(e){super(e,new Xu),this.supportsEdges=!0,this._configuration=new he}getConfiguration(e,r){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=r.transparencyPassType,this._configuration.enableOffset=r.camera.relativeElevation<$a,this._configuration.hasMultipassTerrain=r.multipassTerrain.enabled,this._configuration.cullAboveGround=r.multipassTerrain.cullAboveGround,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration}requiresSlot(e,r){return r===x.Color||r===x.Alpha||r===x.Highlight||r===x.Depth&&this.parameters.writeLinearDepth||r===x.ObjectAndLayerIdColor?e===V.DRAPED_MATERIAL?!0:r===x.Highlight?e===V.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?V.TRANSPARENT_MATERIAL:V.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:V.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new Zu(e)}createBufferWriter(){const e=ut().vec3f(h.POSITION);return lt("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(h.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?e.f32(h.COLORFEATUREATTRIBUTE):e.vec4u8(h.COLOR),new Ms(e)}}class Zu extends Fi{_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==x.Color&&this._output!==x.Alpha||this._updateOccludeeState(e),this.ensureTechnique(yn,e)}}let Xu=class extends _a{constructor(){super(...arguments),this.color=Os,this.transparent=!1,this.writeDepth=!0,this.writeLinearDepth=!1,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=zs.None,this.hasOccludees=!1}};const me={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},Ju={dash:me.dash,"dash-dot":[...me.dash,...me.dot],dot:me.dot,"long-dash":me["long-dash"],"long-dash-dot":[...me["long-dash"],...me.dot],"long-dash-dot-dot":[...me["long-dash"],...me.dot,...me.dot],none:null,"short-dash":me["short-dash"],"short-dash-dot":[...me["short-dash"],...me["short-dot"]],"short-dash-dot-dot":[...me["short-dash"],...me["short-dot"],...me["short-dot"]],"short-dot":me["short-dot"],solid:null},Yu=8;function Qu(t,e){return t==null?t:{pattern:t.slice(),pixelRatio:e}}function Bm(t){return{pattern:[t,t],pixelRatio:2}}function km(t){return t!=null&&t.type==="style"?Ku(t.style):null}function Ku(t){return t!=null?Qu(Ju[t],Yu):null}function qm(t,e,r=null){const i=[],s=[],o=e.mapPositions;ep(e,s,i);const n=s[0][1].data,a=i[0][1].length,l=ba(a);return tp(e,s,i,l),sp(e,s,i,l),rp(e,s,i,l),ip(e,s,i,l),op(e,s,i,l),ap(e,s,i,l),np(e,s,i,n),new Ie(t,s,i,o,vr.Line,r)}function ep(t,e,r){const{attributeData:{position:i},removeDuplicateStartEnd:s}=t,o=lp(i)&&s,n=i.length/3-(o?1:0),a=new Array(2*(n-1)),l=o?i.slice(0,i.length-3):i;let c=0;for(let d=0;d<n-1;d++)a[c++]=d,a[c++]=d+1;e.push([h.POSITION,new F(l,3,o)]),r.push([h.POSITION,a])}function tp(t,e,r,i){if(t.attributeData.colorFeature!=null)return;const s=t.attributeData.color;e.push([h.COLOR,new F(s??Ii,4)]),r.push([h.COLOR,i])}function rp(t,e,r,i){if(t.attributeData.normal==null)return;const s=t.attributeData.normal;e.push([h.NORMAL,new F(s,3)]),r.push([h.NORMAL,i])}function ip(t,e,r,i){t.attributeData.colorFeature!=null&&(e.push([h.COLORFEATUREATTRIBUTE,new F([t.attributeData.colorFeature],1,!0)]),r.push([h.COLOR,i]))}function sp(t,e,r,i){t.attributeData.sizeFeature==null&&(e.push([h.SIZE,new F([t.attributeData.size??1],1,!0)]),r.push([h.SIZE,i]))}function op(t,e,r,i){t.attributeData.sizeFeature!=null&&(e.push([h.SIZEFEATUREATTRIBUTE,new F([t.attributeData.sizeFeature],1,!0)]),r.push([h.SIZEFEATUREATTRIBUTE,i]))}function ap(t,e,r,i){const s=t.attributeData.opacityFeature;s!=null&&(e.push([h.OPACITYFEATUREATTRIBUTE,new F([s],1,!0)]),r.push([h.OPACITYFEATUREATTRIBUTE,i]))}function np(t,e,r,i){if(t.overlayInfo==null||t.overlayInfo.renderCoordsHelper.viewingMode!==St.Global||!t.overlayInfo.spatialReference.isGeographic)return;const s=bs(i.length),o=fl(t.overlayInfo.spatialReference);for(let u=0;u<s.length;u+=3)ml(i,u,s,u,o);const n=i.length/3,a=Fe(n+1);let l=cp,c=dp,d=0,f=0;W(l,s[f++],s[f++],s[f++]),a[0]=0;for(let u=1;u<n+1;++u)u===n&&(f=0),W(c,s[f++],s[f++],s[f++]),d+=gl(l,c),a[u]=d,[l,c]=[c,l];e.push([h.DISTANCETOSTART,new F(a,1,!0)]),r.push([h.DISTANCETOSTART,r[0][1]])}function lp(t){const e=t.length;return t[0]===t[e-3]&&t[1]===t[e-2]&&t[2]===t[e-1]}const cp=D(),dp=D();function Zm(t,e,r,i){const s=t.type==="polygon"?wi.CCW_IS_HOLE:wi.NONE,o=t.type==="polygon"?t.rings:t.paths,{position:n,outlines:a}=Ma(o,!!t.hasZ,s),l=bs(n.length),c=nu(n,t.spatialReference,0,l,0,n,0,n.length/3,e,r,i),d=c!=null;return{lines:d?Sn(a,n,l):[],projectionSuccess:d,sampledElevation:c}}function Xm(t,e){const r=t.type==="polygon"?wi.CCW_IS_HOLE:wi.NONE,i=t.type==="polygon"?t.rings:t.paths,{position:s,outlines:o}=Ma(i,!1,r),n=fi(s,t.spatialReference,0,s,e,0,s.length/3);for(let a=2;a<s.length;a+=3)s[a]=Gh;return{lines:n?Sn(o,s):[],projectionSuccess:n}}function Sn(t,e,r=null){const i=new Array;for(const{index:s,count:o}of t){if(o<=1)continue;const n=3*s,a=3*o;i.push({position:ro(e,3*s,3*o),mapPositions:r!=null?ro(r,n,a):void 0})}return i}function hp(t){const e=new _r,{vertex:r,fragment:i}=e;return e.include(Is,t),e.include(Ca,t),e.include(Ha,t),Hr(r,t),t.stippleEnabled&&(e.attributes.add(h.UV0,"vec2"),e.attributes.add(h.AUXPOS1,"vec3"),r.uniforms.add(new Oe("viewport",(s,o)=>o.camera.fullViewport))),e.attributes.add(h.POSITION,"vec3"),e.varyings.add("vpos","vec3"),r.code.add(m`void main(void) {
vpos = position;
forwardNormalizedVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),t.stippleEnabled&&(r.code.add(m`vec4 vpos2 = transformPosition(proj, view, auxpos1);
vec2 ndcToPixel = viewport.zw * 0.5;
float lineSegmentPixelSize = length((vpos2.xy / vpos2.w - gl_Position.xy / gl_Position.w) * ndcToPixel);`),t.draped?r.uniforms.add(new B("worldToScreenRatio",(s,o)=>1/o.screenToPCSRatio)):r.code.add(m`vec3 segmentCenter = (position + auxpos1) * 0.5;
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),r.code.add(m`float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);`),t.draped?r.code.add(m`float startPseudoScreen = uv0.y * discreteWorldToScreenRatio - mix(0.0, lineSegmentPixelSize, uv0.x);
float segmentLengthPseudoScreen = lineSegmentPixelSize;`):r.code.add(m`float segmentLengthRender = length(position - auxpos1);
float startPseudoScreen = mix(uv0.y, uv0.y - segmentLengthRender, uv0.x) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),r.uniforms.add(new B("stipplePatternPixelSize",s=>Us(s))),r.code.add(m`vec2 stippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, lineSegmentPixelSize, stipplePatternPixelSize);
vStippleDistance = mix(stippleDistanceLimits.x, stippleDistanceLimits.y, uv0.x);
vStippleDistance *= gl_Position.w;`)),r.code.add(m`}`),t.output===x.Highlight&&e.include(zi,t),e.include(ot,t),i.uniforms.add(new B("alphaCoverage",(s,o)=>Math.min(1,s.width*o.camera.pixelRatio))),t.hasVertexColors||i.uniforms.add(new Oe("constantColor",s=>s.color)),i.code.add(m`
  void main() {
    discardBySlice(vpos);

    vec4 color = ${t.hasVertexColors?"vColor":"constantColor"};

    float stippleAlpha = getStippleAlpha();
    discardByStippleAlpha(stippleAlpha, stippleAlphaColorDiscard);

    vec4 finalColor = blendStipple(vec4(color.rgb, color.a * alphaCoverage), stippleAlpha);

    ${t.output===x.ObjectAndLayerIdColor?m`finalColor.a = 1.0;`:""}

    if (finalColor.a < ${m.float(De)}) {
      discard;
    }

    ${t.output===x.Color?m`fragColor = highlightSlice(finalColor, vpos);`:""}
    ${t.output===x.Highlight?m`outputHighlight();`:""}
  }
  `),e}const up=Object.freeze(Object.defineProperty({__proto__:null,build:hp},Symbol.toStringTag,{value:"Module"}));class Vi extends wr{get _stippleEnabled(){return this.configuration.stippleEnabled&&this.configuration.output!==x.Highlight}initializeProgram(e){return new Sr(e.rctx,Vi.shader.get().build(this.configuration),Wr)}initializePipeline(){const e=this.configuration,r=Ia(Xe.SRC_ALPHA,Xe.ONE,Xe.ONE_MINUS_SRC_ALPHA,Xe.ONE_MINUS_SRC_ALPHA),i=(s,o=null,n=null)=>Ze({blending:o,depthTest:va,depthWrite:n,colorWrite:ct,stencilWrite:e.hasOccludees?mi:null,stencilTest:e.hasOccludees?s?gi:Ds:null});return e.output===x.Color?(this._occludeePipelineState=i(!0,e.transparent||this._stippleEnabled?r:null,pr),i(!1,e.transparent||this._stippleEnabled?r:null,pr)):i(!1)}get primitiveType(){return fr.LINES}getPipelineState(e,r){return r?this._occludeePipelineState:super.getPipelineState(e,r)}}Vi.shader=new xr(up,()=>gr(()=>import("./NativeLine.glsl-d941a121.js"),["assets/NativeLine.glsl-d941a121.js","assets/VertexColor.glsl-a0697bd4.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css","assets/requestImageUtils-2f3ee55b.js","assets/basicInterfaces-bb952591.js","assets/enums-b14466b3.js","assets/Texture-31c4f382.js","assets/InterleavedLayout-ddec9a00.js","assets/BufferView-c58f8e7f.js","assets/types-1305598a.js","assets/mat4f64-65d35099.js","assets/Indices-b766e722.js","assets/triangle-0231590c.js","assets/sphere-812d69dd.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-e0d341b8.js","assets/VertexAttribute-9f2e53ec.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/OrderIndependentTransparency-0ab46cc4.js","assets/quat-7c737b79.js","assets/vec3f32-ad1dc57f.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-d7a3254f.js","assets/DoubleArray-96e88651.js","assets/plane-f0d62c60.js","assets/interfaces-6a52f173.js","assets/floatRGBA-f2fcae6c.js","assets/triangulationUtils-4a253704.js","assets/earcut-15ea0d28.js","assets/deduplicate-058a0b05.js","assets/NestedMap-1b5db22e.js","assets/Octree-3004e05b.js","assets/boundedPlane-0cbeb150.js","assets/glUtil-0b7ee6ea.js"]));class Ee extends yr{constructor(){super(...arguments),this.output=x.Color,this.hasSlicePlane=!1,this.hasVertexColors=!1,this.transparent=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.hasOccludees=!1}}g([y({count:x.COUNT})],Ee.prototype,"output",void 0),g([y()],Ee.prototype,"hasSlicePlane",void 0),g([y()],Ee.prototype,"hasVertexColors",void 0),g([y()],Ee.prototype,"transparent",void 0),g([y()],Ee.prototype,"draped",void 0),g([y()],Ee.prototype,"stippleEnabled",void 0),g([y()],Ee.prototype,"stippleOffColorEnabled",void 0),g([y()],Ee.prototype,"stipplePreferContinuous",void 0),g([y()],Ee.prototype,"hasOccludees",void 0),g([y({constValue:!1})],Ee.prototype,"stippleRequiresClamp",void 0),g([y({constValue:!1})],Ee.prototype,"stippleScaleWithLineWidth",void 0),g([y({constValue:!1})],Ee.prototype,"stippleRequiresStretchMeasure",void 0);var Di;(function(t){t[t.START=0]="START",t[t.END=1]="END"})(Di||(Di={}));class Jm extends Ni{constructor(e){super(e,new mp),this._configuration=new Ee}getConfiguration(e,r){this._configuration.output=e,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.transparent=this.parameters.color[3]<1||this.parameters.width<1,this._configuration.draped=r.slot===V.DRAPED_MATERIAL;const i=this.parameters.stipplePattern!=null;return this._configuration.stippleEnabled=i,this._configuration.stippleOffColorEnabled=i&&this.parameters.stippleOffColor!=null,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.stipplePreferContinuous=this.parameters.stipplePreferContinuous,this._configuration}intersect(e,r,i,s,o,n){if(!i.options.selectionMode||!e.visible)return;if(!Pa(r))return void Ur.getLogger("esri.views.3d.webgl-engine.materials.NativeLineMaterial").error("intersection assumes a translation-only matrix");const a=e.vertexAttributes.get(h.POSITION).data,l=i.camera,c=vp;mr(c,i.point);const d=2;W(Pr[0],c[0]-d,c[1]+d,0),W(Pr[1],c[0]+d,c[1]+d,0),W(Pr[2],c[0]+d,c[1]-d,0),W(Pr[3],c[0]-d,c[1]-d,0);for(let _=0;_<4;_++)if(!l.unprojectFromRenderScreen(Pr[_],tt[_]))return;_t(l.eye,tt[0],tt[1],hs),_t(l.eye,tt[1],tt[2],us),_t(l.eye,tt[2],tt[3],ps),_t(l.eye,tt[3],tt[0],fs);let f=Number.MAX_VALUE,u=0;for(let _=0;_<a.length-5;_+=3){if(_e[0]=a[_]+r[12],_e[1]=a[_+1]+r[13],_e[2]=a[_+2]+r[14],ye[0]=a[_+3]+r[12],ye[1]=a[_+4]+r[13],ye[2]=a[_+5]+r[14],ae(hs,_e)<0&&ae(hs,ye)<0||ae(us,_e)<0&&ae(us,ye)<0||ae(ps,_e)<0&&ae(ps,ye)<0||ae(fs,_e)<0&&ae(fs,ye)<0)continue;if(l.projectToRenderScreen(_e,Et),l.projectToRenderScreen(ye,Dt),Et[2]<0&&Dt[2]>0){ie(ke,_e,ye);const O=l.frustum,T=-ae(O[yt.NEAR],_e)/dt(ke,vi(O[yt.NEAR]));Z(ke,ke,T),K(_e,_e,ke),l.projectToRenderScreen(_e,Et)}else if(Et[2]>0&&Dt[2]<0){ie(ke,ye,_e);const O=l.frustum,T=-ae(O[yt.NEAR],ye)/dt(ke,vi(O[yt.NEAR]));Z(ke,ke,T),K(ye,ye,ke),l.projectToRenderScreen(ye,Dt)}else if(Et[2]<0&&Dt[2]<0)continue;Et[2]=0,Dt[2]=0;const w=Na(ar(Et,Dt,oa),c);w<f&&(f=w,H(ia,_e),H(sa,ye),u=_/3)}const p=i.rayBegin,v=i.rayEnd;if(f<d*d){let _=Number.MAX_VALUE;if(Fa(ar(ia,sa,oa),ar(p,v,gp),Pt)){ie(Pt,Pt,p);const w=at(Pt);Z(Pt,Pt,1/w),_=w/Ht(p,v)}n(_,Pt,u,!1)}}intersectDraped(e,r,i,s,o,n){if(!i.options.selectionMode)return;const a=e.vertexAttributes.get(h.POSITION).data,l=e.vertexAttributes.get(h.SIZE),c=l?l.data[0]:0,d=s[0],f=s[1],u=((c+1)/2+4)*e.screenToWorldRatio;let p=Number.MAX_VALUE,v=0;for(let _=0;_<a.length-5;_+=3){const w=a[_],O=a[_+1],T=d-w,S=f-O,R=a[_+3]-w,C=a[_+4]-O,b=Mt((R*T+C*S)/(R*R+C*C),0,1),L=R*b-T,A=C*b-S,j=L*L+A*A;j<p&&(p=j,v=_/3)}p<u*u&&o(n.dist,n.normal,v,!1)}requiresSlot(e,r){return!(r!==x.Color&&r!==x.Highlight&&r!==x.ObjectAndLayerIdColor||e!==V.OPAQUE_MATERIAL&&e!==V.DRAPED_MATERIAL)}createGLMaterial(e){return new pp(e)}createBufferWriter(){const e=this.parameters.hasVertexColors?ph:hh;return this.parameters.stipplePattern==null?new Ms(e):new fp(e.clone().vec3f(h.AUXPOS1).vec2f(h.UV0))}}class pp extends Fi{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextureRepository.release(this._stipplePattern),this._stipplePattern=null}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===x.Color&&this._updateOccludeeState(e);const r=this._material.parameters.stipplePattern;return this._stipplePattern!==r&&(this._material.setParameters({stippleTexture:this._stippleTextureRepository.swap(r,this._stipplePattern)}),this._stipplePattern=r),this.ensureTechnique(Vi,e)}}class fp{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.indices.get(h.POSITION).length}write(e,r,i,s,o){ec(i,this.vertexBufferLayout,e,r,s,o),this._writeAuxpos1(e,i,s,o),this._writeUV0(e,i,s,o)}_writeAuxpos1(e,r,i,s){const o=i.getField(h.AUXPOS1,fc),n=r.indices.get(h.POSITION),a=r.vertexAttributes.get(h.POSITION).data,l=e,c=o.typedBufferStride,d=o.typedBuffer;s*=c;for(let f=0;f<n.length-1;f+=2)for(const u of[1,0]){const p=3*n[f+u],v=a[p],_=a[p+1],w=a[p+2],O=l[0]*v+l[4]*_+l[8]*w+l[12],T=l[1]*v+l[5]*_+l[9]*w+l[13],S=l[2]*v+l[6]*_+l[10]*w+l[14];d[s]=O,d[s+1]=T,d[s+2]=S,s+=c}}_writeUV0(e,r,i,s){var S;const o=i.getField(h.UV0,mc),n=r.indices.get(h.POSITION),a=r.vertexAttributes.get(h.POSITION).data,l=(S=r.vertexAttributes.get(h.DISTANCETOSTART))==null?void 0:S.data,c=o.typedBufferStride,d=o.typedBuffer;let f=0;d[s*=c]=Di.START,d[s+1]=f,s+=c;const u=3*n[0],p=W(_e,a[u],a[u+1],a[u+2]);e&&te(p,p,e);const v=ye,_=n.length-1;let w=1;const O=l?(R,C,b)=>f=l[b]:(R,C,b)=>f+=Ht(R,C);for(let R=1;R<_;R+=2){const C=3*n[R];W(v,a[C],a[C+1],a[C+2]),e&&te(v,v,e),O(p,v,w++);for(let b=0;b<2;++b)d[s]=1-b,d[s+1]=f,s+=c;H(p,v)}const T=3*n[_];W(v,a[T],a[T+1],a[T+2]),e&&te(v,v,e),O(p,v,w),d[s]=Di.END,d[s+1]=f}}class mp extends xa{constructor(){super(...arguments),this.color=Ii,this.hasVertexColors=!1,this.hasSlicePlane=!1,this.width=1,this.stipplePreferContinuous=!0,this.hasOccludees=!1,this.stippleTexture=null}}const _e=D(),ye=D(),ke=D(),Pt=D(),Et=$e(),Dt=$e(),ia=D(),sa=D(),oa=Ui(),gp=Ui(),vp=D(),Pr=[$e(),$e(),$e(),$e()],tt=[D(),D(),D(),D()],hs=ht(),us=ht(),ps=ht(),fs=ht();export{Au as $,Sd as A,Td as B,Fr as C,Ei as D,Ti as E,uh as F,_m as G,pm as H,dm as I,hm as J,jm as K,cm as L,tu as M,Mm as N,fm as O,Im as P,hn as Q,pu as R,Th as S,su as T,Cm as U,Mc as V,yu as W,Jm as X,Om as Y,mm as Z,sm as _,xi as a,om as a0,im as a1,nm as a2,Lm as a3,wm as a4,Ss as a5,Dm as a6,Ws as a7,Cu as a8,Ld as a9,Uo as aA,au as aB,Rh as aC,bh as aD,$f as aE,Id as aF,ym as aG,Ue as aa,Am as ab,Pm as ac,_u as ad,xm as ae,Em as af,qe as ag,Vs as ah,Ut as ai,jt as aj,Kc as ak,wd as al,zr as am,Za as an,vd as ao,of as ap,de as aq,km as ar,Kd as as,ch as at,xt as au,Vt as av,nh as aw,Sm as ax,Tm as ay,Xo as az,gm as b,zc as c,Nm as d,$r as e,Rm as f,lm as g,Wa as h,Ua as i,Oi as j,Wm as k,Vc as l,Bm as m,Gh as n,sf as o,um as p,Xm as q,qm as r,Zm as s,nu as t,hp as u,am as v,Bu as w,z as x,si as y,en as z};
