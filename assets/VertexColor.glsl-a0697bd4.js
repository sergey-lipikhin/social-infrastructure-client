import{hG as jr,bE as I,b7 as Xt,gI as Yi,s as Wr,aI as Xi,d4 as cr,ah as Ji,hI as at,mN as nt,bi as ur,rm as Zi,j7 as Ki,bj as Qi,gB as Be,ae as qr,jP as es,df as kr,cC as Z,l4 as ft,gY as ke,ca as Jt,ll as ye,a_ as ts,rn as rs,ro as is,cf as U,cM as ss,cr as as,ao as $t,kQ as ns,u as $,a9 as os,v as F,w as ls,bF as Ge,O as Et,rp as hr,rq as cs,cV as Zt,cW as Yr,k7 as us,cb as hs,jk as Gt,cy as ds,ce as ee,cd as ue,qJ as fs,cp as Rt,qD as ms,dm as ps,qh as Vt,qz as gs,hA as Xr,hB as vs,mL as Ot,qT as _s,qK as xs,rf as Ts,gK as dr,hy as Kt,cl as Qt,cc as Fe,oj as Ss,hJ as fr,cn as bs,co as mr,rr as Es,hE as Ct,qU as Jr,rs as Zr,j2 as Pe,gm as As,ji as Kr,cg as ys,i$ as Is}from"./index-a6c97245.js";import{t as Rs}from"./requestImageUtils-2f3ee55b.js";import{u as ot,D as pr,t as Os,N as Ut,a as Ie}from"./basicInterfaces-bb952591.js";import{f as xe,G as Ne,L as Ve,D as lt,E as At,C as ne,F as ws,I as Ye,O as se,_ as Ms}from"./enums-b14466b3.js";import{T as He,E as $s,e as er,b as Cs,n as Ps}from"./Texture-31c4f382.js";import{s as P}from"./InterleavedLayout-ddec9a00.js";import{o as gr,r as zs,e as he}from"./mat4f64-65d35099.js";import{y as vr,t as Ls}from"./Indices-b766e722.js";import{w as Fs}from"./triangle-0231590c.js";import{O as d}from"./VertexAttribute-9f2e53ec.js";import{t as Ns}from"./doublePrecisionUtils-e3c3d0d8.js";import{o as u,n as Re,W as Qr,_ as ei}from"./OrderIndependentTransparency-0ab46cc4.js";import{e as Xe}from"./mat3f64-221ce671.js";import{S as Ds}from"./quat-7c737b79.js";import{e as Bs}from"./quatf64-3363c48e.js";import{n as Hs}from"./vec3f32-ad1dc57f.js";import{_ as ti}from"./sphere-812d69dd.js";import{x as ri,c as _r,y as Gs,u as Vs,q as Us,i as xr}from"./BufferView-c58f8e7f.js";import{t as oe}from"./VertexElementDescriptor-2925c6af.js";import{u as js,c as Ws,x as Tr}from"./VertexArrayObject-d7a3254f.js";var Te;(function(t){t[t.Layer=0]="Layer",t[t.Object=1]="Object",t[t.Mesh=2]="Mesh",t[t.Line=3]="Line",t[t.Point=4]="Point",t[t.Material=5]="Material",t[t.Texture=6]="Texture",t[t.COUNT=7]="COUNT"})(Te||(Te={}));let tr=class{constructor(){this.id=jr()}unload(){}},qs=class{constructor(e){this.channel=e,this.id=jr()}};function ks(t,e){return t==null&&(t=[]),t.push(e),t}function Ys(t,e){if(t==null)return null;const r=t.filter(i=>i!==e);return r.length===0?null:r}function Xo(t,e,r,i,s){mt[0]=t.get(e,0),mt[1]=t.get(e,1),mt[2]=t.get(e,2),Ns(mt,ze,3),r.set(s,0,ze[0]),i.set(s,0,ze[1]),r.set(s,1,ze[2]),i.set(s,1,ze[3]),r.set(s,2,ze[4]),i.set(s,2,ze[5])}const mt=I(),ze=new Float32Array(6);function Xs(){if(Ft==null){const t=e=>Yi(`esri/libs/basisu/${e}`);Ft=Xt(()=>import("./basis_transcoder-667fcab6.js"),["assets/basis_transcoder-667fcab6.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css"]).then(e=>e.b).then(({default:e})=>e({locateFile:t}).then(r=>(r.initializeBasis(),delete r.then,r)))}return Ft}let Ft;var De;(function(t){t[t.ETC1_RGB=0]="ETC1_RGB",t[t.ETC2_RGBA=1]="ETC2_RGBA",t[t.BC1_RGB=2]="BC1_RGB",t[t.BC3_RGBA=3]="BC3_RGBA",t[t.BC4_R=4]="BC4_R",t[t.BC5_RG=5]="BC5_RG",t[t.BC7_M6_RGB=6]="BC7_M6_RGB",t[t.BC7_M5_RGBA=7]="BC7_M5_RGBA",t[t.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",t[t.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",t[t.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",t[t.ATC_RGB=11]="ATC_RGB",t[t.ATC_RGBA=12]="ATC_RGBA",t[t.FXT1_RGB=17]="FXT1_RGB",t[t.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",t[t.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",t[t.ETC2_EAC_R11=20]="ETC2_EAC_R11",t[t.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",t[t.RGBA32=13]="RGBA32",t[t.RGB565=14]="RGB565",t[t.BGR565=15]="BGR565",t[t.RGBA4444=16]="RGBA4444"})(De||(De={}));let le=null,pt=null;async function ii(){return pt==null&&(pt=Xs(),le=await pt),pt}function Js(t,e){if(le==null)return t.byteLength;const r=new le.BasisFile(new Uint8Array(t)),i=ai(r)?si(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),e):0;return r.close(),r.delete(),i}function Zs(t,e){if(le==null)return t.byteLength;const r=new le.KTX2File(new Uint8Array(t)),i=ni(r)?si(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),e):0;return r.close(),r.delete(),i}function si(t,e,r,i,s){const a=$s(e?xe.COMPRESSED_RGBA8_ETC2_EAC:xe.COMPRESSED_RGB8_ETC2),n=s&&t>1?(4**t-1)/(3*4**(t-1)):1;return Math.ceil(r*i*a*n)}function ai(t){return t.getNumImages()>=1&&!t.isUASTC()}function ni(t){return t.getFaces()>=1&&t.isETC1S()}async function Ks(t,e,r){le==null&&(le=await ii());const i=new le.BasisFile(new Uint8Array(r));if(!ai(i))return null;i.startTranscoding();const s=oi(t,e,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),(a,n)=>i.getImageTranscodedSizeInBytes(0,a,n),(a,n,o)=>i.transcodeImage(o,0,a,n,0,0));return i.close(),i.delete(),s}async function Qs(t,e,r){le==null&&(le=await ii());const i=new le.KTX2File(new Uint8Array(r));if(!ni(i))return null;i.startTranscoding();const s=oi(t,e,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),(a,n)=>i.getImageTranscodedSizeInBytes(a,0,0,n),(a,n,o)=>i.transcodeImage(o,a,0,0,n,0,-1,-1));return i.close(),i.delete(),s}function oi(t,e,r,i,s,a,n,o){const{compressedTextureETC:c,compressedTextureS3TC:l}=t.capabilities,[h,f]=c?i?[De.ETC2_RGBA,xe.COMPRESSED_RGBA8_ETC2_EAC]:[De.ETC1_RGB,xe.COMPRESSED_RGB8_ETC2]:l?i?[De.BC3_RGBA,xe.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[De.BC1_RGB,xe.COMPRESSED_RGB_S3TC_DXT1_EXT]:[De.RGBA32,Ne.RGBA],m=e.hasMipmap?r:Math.min(1,r),p=[];for(let g=0;g<m;g++)p.push(new Uint8Array(n(g,h))),o(g,h,p[g]);return e.internalFormat=f,e.hasMipmap=p.length>1,e.samplingMode=e.hasMipmap?Ve.LINEAR_MIPMAP_LINEAR:Ve.LINEAR,e.width=s,e.height=a,new He(t,e,{type:"compressed",levels:p})}const gt=Wr.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),ea=542327876,ta=131072,ra=4;function rr(t){return t.charCodeAt(0)+(t.charCodeAt(1)<<8)+(t.charCodeAt(2)<<16)+(t.charCodeAt(3)<<24)}function ia(t){return String.fromCharCode(255&t,t>>8&255,t>>16&255,t>>24&255)}const sa=rr("DXT1"),aa=rr("DXT3"),na=rr("DXT5"),oa=31,la=0,ca=1,ua=2,ha=3,da=4,fa=7,ma=20,pa=21;function ga(t,e,r){const i=va(r,e.hasMipmap??!1);if(i==null)throw new Error("DDS texture data is null");const{textureData:s,internalFormat:a,width:n,height:o}=i;return e.samplingMode=s.levels.length>1?Ve.LINEAR_MIPMAP_LINEAR:Ve.LINEAR,e.hasMipmap=s.levels.length>1,e.internalFormat=a,e.width=n,e.height=o,new He(t,e,s)}function va(t,e){const r=new Int32Array(t,0,oa);if(r[la]!==ea)return gt.error("Invalid magic number in DDS header"),null;if(!(r[ma]&ra))return gt.error("Unsupported format, must contain a FourCC code"),null;const i=r[pa];let s,a;switch(i){case sa:s=8,a=xe.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case aa:s=16,a=xe.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case na:s=16,a=xe.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return gt.error("Unsupported FourCC code:",ia(i)),null}let n=1,o=r[da],c=r[ha];!(3&o)&&!(3&c)||(gt.warn("Rounding up compressed texture size to nearest multiple of 4."),o=o+3&-4,c=c+3&-4);const l=o,h=c;let f,m;r[ua]&ta&&e!==!1&&(n=Math.max(1,r[fa]));let p=r[ca]+4;const g=[];for(let _=0;_<n;++_)m=(o+3>>2)*(c+3>>2)*s,f=new Uint8Array(t,p,m),g.push(f),p+=m,o=Math.max(1,o>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:g},internalFormat:a,width:l,height:h}}let Jo=class extends tr{constructor(e,r){super(),this._data=e,this.type=Te.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new Xi,this.parameters=r||{},this.parameters.mipmap=this.parameters.mipmap!==!1,this.parameters.noUnpackFlip=this.parameters.noUnpackFlip||!1,this.parameters.preMultiplyAlpha=this.parameters.preMultiplyAlpha||!1,this.parameters.wrap=this.parameters.wrap||{s:lt.REPEAT,t:lt.REPEAT},this._startPreload(e)}_startPreload(e){e!=null&&(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(cr(e.src)||e.preload==="auto"&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const r=!e.paused;if(e.src=e.src,r&&e.autoplay){const i=()=>{e.removeEventListener("canplay",i),e.play()};e.addEventListener("canplay",i)}}}_startPreloadImageElement(e){Ji(e.src)||cr(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}dispose(){this._data=void 0}_createDescriptor(e){const r=new er;return r.wrapMode=this.parameters.wrap??lt.REPEAT,r.flipped=!this.parameters.noUnpackFlip,r.samplingMode=this.parameters.mipmap?Ve.LINEAR_MIPMAP_LINEAR:Ve.LINEAR,r.hasMipmap=!!this.parameters.mipmap,r.preMultiplyAlpha=!!this.parameters.preMultiplyAlpha,r.maxAnisotropy=this.parameters.maxAnisotropy??(this.parameters.mipmap?e.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var e;return((e=this._glTexture)==null?void 0:e.gpuMemoryUsage)||_a(this._data,this.parameters)}load(e){if(this._glTexture!=null)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new He(e,this._createDescriptor(e),null),this._glTexture):typeof r=="string"?this._loadFromURL(e,r):r instanceof Image?this._loadFromImageElement(e,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r):(at(r)||nt(r))&&this.parameters.encoding===ot.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):(at(r)||nt(r))&&this.parameters.encoding===ot.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):(at(r)||nt(r))&&this.parameters.encoding===ot.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):nt(r)?this._loadFromPixelData(e,r):at(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e){return this._data instanceof HTMLVideoElement&&this._glTexture!=null?this._data.readyState<ct.HAVE_CURRENT_DATA||e===this._data.currentTime?e:(this._glTexture.setData(this._data),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.parameters.updateCallback&&this.parameters.updateCallback(),this._data.currentTime):e}_loadFromDDSData(e,r){return this._glTexture=ga(e,this._createDescriptor(e),r),this._glTexture}_loadFromKTX2(e,r){return this._loadAsync(()=>Qs(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromBasis(e,r){return this._loadAsync(()=>Ks(e,this._createDescriptor(e),r).then(i=>(this._glTexture=i,i)))}_loadFromPixelData(e,r){P(this.parameters.width>0&&this.parameters.height>0);const i=this._createDescriptor(e);return i.pixelFormat=this.parameters.components===1?Ne.LUMINANCE:this.parameters.components===3?Ne.RGB:Ne.RGBA,i.width=this.parameters.width??0,i.height=this.parameters.height??0,this._glTexture=new He(e,i,r),this._glTexture}_loadFromURL(e,r){return this._loadAsync(async i=>{const s=await Rs(r,{signal:i});return ur(i),this._loadFromImage(e,s)})}_loadFromImageElement(e,r){return r.complete?this._loadFromImage(e,r):this._loadAsync(async i=>{const s=await Zi(r,r.src,!1,i);return ur(i),this._loadFromImage(e,s)})}_loadFromVideoElement(e,r){return r.readyState>=ct.HAVE_CURRENT_DATA?this._loadFromImage(e,r):this._loadFromVideoElementAsync(e,r)}_loadFromVideoElementAsync(e,r){return this._loadAsync(i=>new Promise((s,a)=>{const n=()=>{r.removeEventListener("loadeddata",o),r.removeEventListener("error",c),es(l)},o=()=>{r.readyState>=ct.HAVE_CURRENT_DATA&&(n(),s(this._loadFromImage(e,r)))},c=h=>{n(),a(h||new qr("Failed to load video"))};r.addEventListener("loadeddata",o),r.addEventListener("error",c);const l=Ki(i,()=>c(Qi()))}))}_loadFromImage(e,r){const i=li(r);this.parameters.width=i.width,this.parameters.height=i.height;const s=this._createDescriptor(e);return s.pixelFormat=this.parameters.components===3?Ne.RGB:Ne.RGBA,s.width=i.width,s.height=i.height,this._glTexture=new He(e,s,r),this._glTexture}_loadAsync(e){const r=new AbortController;this._loadingController=r;const i=e(r.signal);this._loadingPromise=i;const s=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===i&&(this._loadingPromise=null)};return i.then(s,s),i}unload(){if(this._glTexture=Be(this._glTexture),this._loadingController!=null){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function _a(t,e){if(t==null)return 0;if(at(t)||nt(t))return e.encoding===ot.KTX2_ENCODING?Zs(t,!!e.mipmap):e.encoding===ot.BASIS_ENCODING?Js(t,!!e.mipmap):t.byteLength;const{width:r,height:i}=t instanceof Image||t instanceof ImageData||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement?li(t):e;return(e.mipmap?4/3:1)*r*i*(e.components||4)||0}function li(t){return t instanceof HTMLVideoElement?{width:t.videoWidth,height:t.videoHeight}:t}var ct;(function(t){t[t.HAVE_NOTHING=0]="HAVE_NOTHING",t[t.HAVE_METADATA=1]="HAVE_METADATA",t[t.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",t[t.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",t[t.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(ct||(ct={}));let xa=class extends js{},ci=class{constructor(e,r){this._module=e,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},ui=class{constructor(e,r,i){this.release=i,this.initializeConfiguration(e,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=Be(this._program),this._pipeline=this._configuration=null}reload(e){Be(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,r=null,i){e.setPipelineState(this.getPipelineState(r,i))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return At.TRIANGLES}getPipelineState(e,r){return this._pipeline}initializeConfiguration(e,r){}};var M;(function(t){t[t.Pass=0]="Pass",t[t.Draw=1]="Draw"})(M||(M={}));let hi=class{constructor(e,r,i){this._context=e,this._locations=i,this._textures=new Map,this._freeTextureUnits=new kr({deallocator:null}),this._glProgram=e.programCache.acquire(r.generate("vertex"),r.generate("fragment"),i),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBind(M.Pass,this),this.bindDraw=r.generateBind(M.Draw,this),this._fragmentUniforms=Cs()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,r){this._glProgram.setUniform1i(e,r?1:0)}setUniform1i(e,r){this._glProgram.setUniform1i(e,r)}setUniform1f(e,r){this._glProgram.setUniform1f(e,r)}setUniform2fv(e,r){this._glProgram.setUniform2fv(e,r)}setUniform3fv(e,r){this._glProgram.setUniform3fv(e,r)}setUniform4fv(e,r){this._glProgram.setUniform4fv(e,r)}setUniformMatrix3fv(e,r){this._glProgram.setUniformMatrix3fv(e,r)}setUniformMatrix4fv(e,r){this._glProgram.setUniformMatrix4fv(e,r)}setUniform1fv(e,r){this._glProgram.setUniform1fv(e,r)}setUniform1iv(e,r){this._glProgram.setUniform1iv(e,r)}setUniform2iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform3iv(e,r){this._glProgram.setUniform3iv(e,r)}setUniform4iv(e,r){this._glProgram.setUniform4iv(e,r)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,r){if(r==null||r.glName==null){const s=this._textures.get(e);return s&&(this._context.bindTexture(null,s.unit),this._freeTextureUnit(s),this._textures.delete(e)),null}let i=this._textures.get(e);return i==null?(i=this._allocTextureUnit(r),this._textures.set(e,i)):i.texture=r,this._context.useProgram(this),this.setUniform1i(e,i.unit),this._context.bindTexture(r,i.unit),i.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,r)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(r,e.unit)}),this._fragmentUniforms!=null&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};function ir(t){t.code.add(u`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function sr(t){t.include(ir),t.code.add(u`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture(depthTex, uv)), nearFar);
}`)}let j=class{constructor(e,r,i,s,a=null){this.name=e,this.type=r,this.arraySize=a,this.bind={[M.Pass]:null,[M.Draw]:null},i!=null&&s!=null&&(this.bind[i]=s)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},Se=class extends j{constructor(e,r){super(e,"vec2",M.Pass,(i,s,a)=>i.setUniform2fv(e,r(s,a)))}},X=class extends j{constructor(e,r){super(e,"vec4",M.Pass,(i,s,a)=>i.setUniform4fv(e,r(s,a)))}};function Ta(t){t.fragment.uniforms.add(new X("projInfo",(e,r)=>Sa(r))),t.fragment.uniforms.add(new Se("zScale",(e,r)=>di(r))),t.fragment.code.add(u`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function Sa(t){const e=t.camera.projectionMatrix;return e[11]===0?Z(Sr,2/(t.camera.fullWidth*e[0]),2/(t.camera.fullHeight*e[5]),(1+e[12])/e[0],(1+e[13])/e[5]):Z(Sr,-2/(t.camera.fullWidth*e[0]),-2/(t.camera.fullHeight*e[5]),(1-e[8])/e[0],(1-e[9])/e[5])}const Sr=ft();function di(t){return t.camera.projectionMatrix[11]===0?ke(br,0,1):ke(br,1,0)}const br=Jt();let Y=class extends j{constructor(e,r){super(e,"vec3",M.Pass,(i,s,a)=>i.setUniform3fv(e,r(s,a)))}},ut=class extends j{constructor(e,r){super(e,"float",M.Pass,(i,s,a)=>i.setUniform1f(e,r(s,a)))}},de=class extends j{constructor(e,r){super(e,"sampler2D",M.Pass,(i,s,a)=>i.bindTexture(e,r(s,a)))}},ht=class extends j{constructor(e,r){super(e,"mat4",M.Pass,(i,s,a)=>i.setUniformMatrix4fv(e,r(s,a)))}};const fi=Wr.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let mi=class{constructor(){this._includedModules=new Map}include(e,r){if(this._includedModules.has(e)){const i=this._includedModules.get(e);if(i!==r){fi.error("Trying to include shader module multiple times with different sets of options.");const s=new Set;for(const a of Object.keys(i))i[a]!==e[a]&&s.add(a);for(const a of Object.keys(e))i[a]!==e[a]&&s.add(a);s.forEach(a=>console.error(`  ${a}: current ${i[a]} new ${e[a]}`))}}else this._includedModules.set(e,r),e(this.builder,r)}},pi=class extends mi{constructor(){super(...arguments),this.vertex=new Er,this.fragment=new Er,this.attributes=new Aa,this.varyings=new ya,this.extensions=new jt,this.constants=new gi}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const r=this.extensions.generateSource(e),i=this.attributes.generateSource(e),s=this.varyings.generateSource(e),a=e==="vertex"?this.vertex:this.fragment,n=a.uniforms.generateSource(),o=a.code.generateSource(),c=e==="vertex"?Ra:Ia,l=this.constants.generateSource().concat(a.constants.generateSource());return`#version 300 es
${r.join(`
`)}

${c}

${l.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${s.join(`
`)}

${o.join(`
`)}`}generateBind(e,r){const i=new Map;this.vertex.uniforms.entries.forEach(n=>{const o=n.bind[e];o!=null&&i.set(n.name,o)}),this.fragment.uniforms.entries.forEach(n=>{const o=n.bind[e];o!=null&&i.set(n.name,o)});const s=Array.from(i.values()),a=s.length;return(n,o,c)=>{for(let l=0;l<a;++l)s[l](r,n,o,c)}}},ba=class{constructor(){this._entries=new Map}add(...e){for(const r of e)this._add(r)}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new qr(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else fi.error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(e=>e.arraySize!=null?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`)}get entries(){return Array.from(this._entries.values())}},Ea=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},Er=class extends mi{constructor(){super(...arguments),this.uniforms=new ba,this.code=new Ea,this.constants=new gi}get builder(){return this}},Aa=class{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}},ya=class{constructor(){this._entries=new Map}add(e,r){this._entries.has(e)&&P(this._entries.get(e)===r),this._entries.set(e,r)}generateSource(e){const r=new Array;return this._entries.forEach((i,s)=>r.push(e==="vertex"?`out ${i} ${s};`:`in ${i} ${s};`)),r}},jt=class Wt{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?Wt.ALLOWLIST_VERTEX:Wt.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(i=>r.includes(i)).map(i=>`#extension ${i} : enable`)}};jt.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],jt.ALLOWLIST_VERTEX=[];let gi=class N{constructor(){this._entries=new Set}add(e,r,i){let s="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":s=N._numberToFloatStr(i);break;case"int":s=N._numberToIntStr(i);break;case"bool":s=i.toString();break;case"vec2":s=`vec2(${N._numberToFloatStr(i[0])},                            ${N._numberToFloatStr(i[1])})`;break;case"vec3":s=`vec3(${N._numberToFloatStr(i[0])},                            ${N._numberToFloatStr(i[1])},                            ${N._numberToFloatStr(i[2])})`;break;case"vec4":s=`vec4(${N._numberToFloatStr(i[0])},                            ${N._numberToFloatStr(i[1])},                            ${N._numberToFloatStr(i[2])},                            ${N._numberToFloatStr(i[3])})`;break;case"ivec2":s=`ivec2(${N._numberToIntStr(i[0])},                             ${N._numberToIntStr(i[1])})`;break;case"ivec3":s=`ivec3(${N._numberToIntStr(i[0])},                             ${N._numberToIntStr(i[1])},                             ${N._numberToIntStr(i[2])})`;break;case"ivec4":s=`ivec4(${N._numberToIntStr(i[0])},                             ${N._numberToIntStr(i[1])},                             ${N._numberToIntStr(i[2])},                             ${N._numberToIntStr(i[3])})`;break;case"mat2":case"mat3":case"mat4":s=`${r}(${Array.prototype.map.call(i,a=>N._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${s};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}};const Ia=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif

out vec4 fragColor;`,Ra=`precision highp float;
precision highp sampler2D;`,Pt=new Map([[d.POSITION,0],[d.NORMAL,1],[d.NORMALCOMPRESSED,1],[d.UV0,2],[d.COLOR,3],[d.COLORFEATUREATTRIBUTE,3],[d.SIZE,4],[d.TANGENT,4],[d.AUXPOS1,5],[d.SYMBOLCOLOR,5],[d.AUXPOS2,6],[d.FEATUREATTRIBUTE,6],[d.INSTANCEFEATUREATTRIBUTE,6],[d.INSTANCECOLOR,7],[d.OBJECTANDLAYERIDCOLOR,7],[d.INSTANCEOBJECTANDLAYERIDCOLOR,7],[d.MODEL,8],[d.MODELNORMAL,12],[d.MODELORIGINHI,11],[d.MODELORIGINLO,15]]);new oe(d.POSITION,3,ne.FLOAT,0,12);new oe(d.POSITION,3,ne.FLOAT,0,20),new oe(d.UV0,2,ne.FLOAT,12,20);new oe(d.POSITION,3,ne.FLOAT,0,32),new oe(d.NORMAL,3,ne.FLOAT,12,32),new oe(d.UV0,2,ne.FLOAT,24,32);new oe(d.POSITION,3,ne.FLOAT,0,16),new oe(d.COLOR,4,ne.UNSIGNED_BYTE,12,16);const Oa=[new oe(d.POSITION,2,ne.FLOAT,0,8)],wa=[new oe(d.POSITION,2,ne.FLOAT,0,16),new oe(d.UV0,2,ne.FLOAT,8,16)];function Ma(t,e=Oa,r=Pt,i=-1,s=1){let a=null;return e===wa?a=new Float32Array([i,i,0,0,s,i,1,0,i,s,0,1,s,s,1,1]):a=new Float32Array([i,i,s,i,i,s,s,s]),new xa(t,r,{geometry:e},{geometry:Ws.createVertex(t,ws.STATIC_DRAW,a)})}function gl(t){const e=new er;return e.samplingMode=Ve.NEAREST,e.width=e.height=1,new He(t,e,new Uint8Array([255,255,255,255]))}var Ar;(function(t){t[t.INTEGRATED_MESH=0]="INTEGRATED_MESH",t[t.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",t[t.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",t[t.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",t[t.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",t[t.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",t[t.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",t[t.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",t[t.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",t[t.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",t[t.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",t[t.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",t[t.LASERLINES=12]="LASERLINES",t[t.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",t[t.HUD_MATERIAL=14]="HUD_MATERIAL",t[t.LABEL_MATERIAL=15]="LABEL_MATERIAL",t[t.LINE_CALLOUTS=16]="LINE_CALLOUTS",t[t.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",t[t.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",t[t.DRAPED_WATER=19]="DRAPED_WATER",t[t.VOXEL=20]="VOXEL",t[t.MAX_SLOTS=21]="MAX_SLOTS"})(Ar||(Ar={}));function $a(t){return Math.abs(t*t*t)}function vi(t,e,r){const i=r.parameters,s=r.paddingPixelsOverride;return et.scale=Math.min(i.divisor/(e-i.offset),1),et.factor=$a(t),et.minPixelSize=i.minPixelSize,et.paddingPixels=s,et}function _i(t,e){return t===0?e.minPixelSize:e.minPixelSize*(1+2*e.paddingPixels/t)}function xi(t,e){return Math.max(ye(t*e.scale,t,e.factor),_i(t,e))}function Ca(t,e,r){const i=vi(t,e,r);return i.minPixelSize=0,i.paddingPixels=0,xi(1,i)}function vl(t,e,r,i){i.scale=Ca(t,e,r),i.factor=0,i.minPixelSize=r.parameters.minPixelSize,i.paddingPixels=r.paddingPixelsOverride}function _l(t,e,r=[0,0]){const i=Math.min(Math.max(e.scale,_i(t[1],e)/Math.max(1e-5,t[1])),1);return r[0]=t[0]*i,r[1]=t[1]*i,r}function Pa(t,e,r,i){return xi(t,vi(e,r,i))}const et={scale:0,factor:0,minPixelSize:0,paddingPixels:0},vt=ts();function xl(t,e,r,i,s,a){if(t.visible)if(t.boundingInfo){P(t.type===Te.Mesh);const n=e.tolerance;Ti(t.boundingInfo,r,i,n,s,a)}else{const n=t.indices.get(d.POSITION),o=t.vertexAttributes.get(d.POSITION);bi(r,i,0,n.length/3,n,o,void 0,s,a)}}const za=I();function Ti(t,e,r,i,s,a){if(t==null)return;const n=Fa(e,r,za);if(rs(vt,t.bbMin),is(vt,t.bbMax),s!=null&&s.applyToAabb(vt),Na(vt,e,n,i)){const{primitiveIndices:o,indices:c,position:l}=t,h=o?o.length:c.length/3;if(h>Ga){const f=t.getChildren();if(f!==void 0){for(const m of f)Ti(m,e,r,i,s,a);return}}bi(e,r,0,h,c,l,o,s,a)}}const Si=I();function bi(t,e,r,i,s,a,n,o,c){if(n)return La(t,e,r,i,s,a,n,o,c);const{data:l,stride:h}=a,f=t[0],m=t[1],p=t[2],g=e[0]-f,_=e[1]-m,x=e[2]-p;for(let E=r,B=3*r;E<i;++E){let R=h*s[B++],y=l[R++],z=l[R++],T=l[R];R=h*s[B++];let S=l[R++],O=l[R++],b=l[R];R=h*s[B++];let v=l[R++],w=l[R++],A=l[R];o!=null&&([y,z,T]=o.applyToVertex(y,z,T,E),[S,O,b]=o.applyToVertex(S,O,b,E),[v,w,A]=o.applyToVertex(v,w,A,E));const L=S-y,V=O-z,H=b-T,W=v-y,fe=w-z,me=A-T,Oe=_*me-fe*x,Je=x*W-me*g,Ze=g*fe-W*_,ae=L*Oe+V*Je+H*Ze;if(Math.abs(ae)<=Number.EPSILON)continue;const K=f-y,we=m-z,Me=p-T,ce=K*Oe+we*Je+Me*Ze;if(ae>0){if(ce<0||ce>ae)continue}else if(ce>0||ce<ae)continue;const pe=we*H-V*Me,Ke=Me*L-H*K,Qe=K*V-L*we,$e=g*pe+_*Ke+x*Qe;if(ae>0){if($e<0||ce+$e>ae)continue}else if($e>0||ce+$e<ae)continue;const Ce=(W*pe+fe*Ke+me*Qe)/ae;Ce>=0&&c(Ce,Ei(L,V,H,W,fe,me,Si),E,!1)}}function La(t,e,r,i,s,a,n,o,c){const{data:l,stride:h}=a,f=t[0],m=t[1],p=t[2],g=e[0]-f,_=e[1]-m,x=e[2]-p;for(let E=r;E<i;++E){const B=n[E];let R=3*B,y=h*s[R++],z=l[y++],T=l[y++],S=l[y];y=h*s[R++];let O=l[y++],b=l[y++],v=l[y];y=h*s[R];let w=l[y++],A=l[y++],L=l[y];o!=null&&([z,T,S]=o.applyToVertex(z,T,S,E),[O,b,v]=o.applyToVertex(O,b,v,E),[w,A,L]=o.applyToVertex(w,A,L,E));const V=O-z,H=b-T,W=v-S,fe=w-z,me=A-T,Oe=L-S,Je=_*Oe-me*x,Ze=x*fe-Oe*g,ae=g*me-fe*_,K=V*Je+H*Ze+W*ae;if(Math.abs(K)<=Number.EPSILON)continue;const we=f-z,Me=m-T,ce=p-S,pe=we*Je+Me*Ze+ce*ae;if(K>0){if(pe<0||pe>K)continue}else if(pe>0||pe<K)continue;const Ke=Me*W-H*ce,Qe=ce*V-W*we,$e=we*H-V*Me,Ce=g*Ke+_*Qe+x*$e;if(K>0){if(Ce<0||pe+Ce>K)continue}else if(Ce>0||pe+Ce<K)continue;const lr=(fe*Ke+me*Qe+Oe*$e)/K;lr>=0&&c(lr,Ei(V,H,W,fe,me,Oe,Si),B,!1)}}const yr=I(),Ir=I();function Ei(t,e,r,i,s,a,n){return U(yr,t,e,r),U(Ir,i,s,a),ss(n,yr,Ir),as(n,n),n}function Fa(t,e,r){return U(r,1/(e[0]-t[0]),1/(e[1]-t[1]),1/(e[2]-t[2]))}function Na(t,e,r,i){return Da(t,e,r,i,1/0)}function Da(t,e,r,i,s){const a=(t[0]-i-e[0])*r[0],n=(t[3]+i-e[0])*r[0];let o=Math.min(a,n),c=Math.max(a,n);const l=(t[1]-i-e[1])*r[1],h=(t[4]+i-e[1])*r[1];if(c=Math.min(c,Math.max(l,h)),c<0||(o=Math.max(o,Math.min(l,h)),o>c))return!1;const f=(t[2]-i-e[2])*r[2],m=(t[5]+i-e[2])*r[2];return c=Math.min(c,Math.max(f,m)),!(c<0)&&(o=Math.max(o,Math.min(f,m)),!(o>c)&&o<s)}function Tl(t,e,r,i,s){let a=(r.screenLength||0)*t.pixelRatio;s!=null&&(a=Pa(a,i,e,s));const n=a*Math.tan(.5*t.fovY)/(.5*t.fullHeight);return $t(n*e,r.minWorldLength||0,r.maxWorldLength!=null?r.maxWorldLength:1/0)}function Ai(t,e){const r=e?Ai(e):{};for(const i in t){let s=t[i];s&&s.forEach&&(s=Ha(s)),s==null&&i in r||(r[i]=s)}return r}function Ba(t,e){let r=!1;for(const i in e){const s=e[i];s!==void 0&&(Array.isArray(s)?t[i]===null?(t[i]=s.slice(),r=!0):ns(t[i],s)&&(r=!0):t[i]!==s&&(r=!0,t[i]=s))}return r}function Ha(t){const e=[];return t.forEach(r=>e.push(r)),e}const Sl={multiply:1,ignore:2,replace:3,tint:4},Ga=1e3;let Va=class extends Re{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map(()=>0):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,r={key:this.key};for(const i of e)r[i]=this[i];return r}};function tt(t={}){return(e,r)=>{if(e._parameterNames=e._parameterNames??[],e._parameterNames.push(r),t.constValue!=null)Object.defineProperty(e,r,{get:()=>t.constValue});else{const i=e._parameterNames.length-1,s=t.count||2,a=Math.ceil(Math.log2(s)),n=e._parameterBits??[0];let o=0;for(;n[o]+a>16;)o++,o>=n.length&&n.push(0);e._parameterBits=n;const c=n[o],l=(1<<a)-1<<c;n[o]+=a,Object.defineProperty(e,r,{get(){return this[i]},set(h){if(this[i]!==h&&(this[i]=h,this._keyDirty=!0,this._parameterBits[o]=this._parameterBits[o]&~l|+h<<c&l,typeof h!="number"&&typeof h!="boolean"))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof h)}})}}}function yi(t,e=!0){t.attributes.add(d.POSITION,"vec2"),e&&t.varyings.add("uv","vec2"),t.vertex.code.add(u`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${e?u`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}let C=class extends os{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};$([F()],C.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),$([F()],C.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),$([F()],C.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),$([F()],C.prototype,"DECONFLICTOR_SHOW_GRID",void 0),$([F()],C.prototype,"LABELS_SHOW_BORDER",void 0),$([F()],C.prototype,"TEXT_SHOW_BASELINE",void 0),$([F()],C.prototype,"TEXT_SHOW_BORDER",void 0),$([F()],C.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),$([F()],C.prototype,"OVERLAY_SHOW_CENTER",void 0),$([F()],C.prototype,"SHOW_POI",void 0),$([F()],C.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),$([F()],C.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),$([F()],C.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),$([F()],C.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),$([F()],C.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),$([F()],C.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),$([F()],C.prototype,"I3S_TREE_SHOW_TILES",void 0),$([F()],C.prototype,"I3S_SHOW_MODIFICATIONS",void 0),$([F()],C.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),$([F()],C.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),$([F()],C.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),$([F()],C.prototype,"LINE_WIREFRAMES",void 0),C=$([ls("esri.views.3d.support.DebugFlags")],C);const Ua=new C;var qt,Rr,Or,k,wr;(function(t){t[t.INNER=0]="INNER",t[t.OUTER=1]="OUTER"})(qt||(qt={})),function(t){t[t.REGULAR=0]="REGULAR",t[t.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",t[t.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",t[t.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(Rr||(Rr={})),function(t){t[t.OFF=0]="OFF",t[t.ON=1]="ON"}(Or||(Or={})),function(t){t[t.Color=0]="Color",t[t.ColorNoRasterImage=1]="ColorNoRasterImage",t[t.Highlight=2]="Highlight",t[t.Water=3]="Water",t[t.Occluded=4]="Occluded",t[t.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor"}(k||(k={})),function(t){t[t.FADING=0]="FADING",t[t.IMMEDIATE=1]="IMMEDIATE",t[t.UNFADED=2]="UNFADED"}(wr||(wr={}));let ja=class{constructor(e,r){this.vec3=e,this.id=r}};function Wa(t,e,r,i){return new ja(Ge(t,e,r),i)}var We;(function(t){t[t.None=0]="None",t[t.ColorAndWater=1]="ColorAndWater",t[t.Highlight=2]="Highlight",t[t.Occluded=3]="Occluded",t[t.ObjectAndLayerIdColor=4]="ObjectAndLayerIdColor"})(We||(We={}));const qa=1.3;let yl=class{get extent(){return this._extent}constructor(e,r){this.index=e,this.renderTargets=r,this._extent=Et(),this.resolution=0,this.renderLocalOrigin=Wa(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new ka,this.hasDrapedFeatureSource=!1,this.hasDrapedRasterSource=!1,this.hasTargetWithoutRasterImage=!1,this.index=e,this.validTargets=new Array(r.renderTargets.length).fill(!1)}getValidTexture(e){return this.validTargets[e]?this.renderTargets.getTarget(e).getTexture():null}get _needsColorWithoutRasterImage(){return this.hasDrapedRasterSource&&this.hasDrapedFeatureSource&&this.hasTargetWithoutRasterImage}getColorTexture(e){const r=e===We.ColorAndWater?this.renderTargets.getTarget(k.Color):e===We.Highlight?this.renderTargets.getTarget(k.Highlight):e===We.ObjectAndLayerIdColor?this.renderTargets.getTarget(k.ObjectAndLayerIdColor):this.renderTargets.getTarget(k.Occluded);return r?r.getTexture():null}getColorTextureNoRasterImage(){return this._needsColorWithoutRasterImage?this.getValidTexture(k.ColorNoRasterImage):this.hasDrapedFeatureSource?this.getValidTexture(k.Color):null}getNormalTexture(e){const r=e===We.ColorAndWater?this.renderTargets.getTarget(k.Water):null;return r?r.getTexture():null}draw(e,r){const i=this.computeRenderTargetValidityBitfield();for(const s of this.renderTargets.renderTargets)s.type!==k.ColorNoRasterImage||this._needsColorWithoutRasterImage?this.validTargets[s.type]=e.drawTarget(this,s,r):this.validTargets[s.type]=!1;return i^this.computeRenderTargetValidityBitfield()?pr.CHANGED:pr.UNCHANGED}computeRenderTargetValidityBitfield(){const e=this.validTargets;return+e[k.Color]|+e[k.ColorNoRasterImage]<<1|+e[k.Highlight]<<2|+e[k.Water]<<3|+e[k.Occluded]<<4}setupGeometryViewsCyclical(e){this.setupGeometryViewsDirect();const r=.001*e.range;if(this._extent[0]-r<=e.min){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];hr(this._extent,e.range,0,i)}if(this._extent[2]+r>=e.max){const i=this.canvasGeometries.extents[this.canvasGeometries.numViews++];hr(this._extent,-e.range,0,i)}}setupGeometryViewsDirect(){this.canvasGeometries.numViews=1,cs(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let e=0;e<this.canvasGeometries.numViews;e++){const r=this.canvasGeometries.extents[e];if(r[0]!==r[2]&&r[1]!==r[3])return!0}return!1}applyViewport(e){e.setViewport(this.index===qt.INNER?0:this.resolution,0,this.resolution,this.resolution)}},ka=class{constructor(){this.extents=[Et(),Et(),Et()],this.numViews=0}};var te;(function(t){t[t.Color=0]="Color",t[t.Depth=1]="Depth",t[t.Normal=2]="Normal",t[t.Shadow=3]="Shadow",t[t.ShadowHighlight=4]="ShadowHighlight",t[t.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",t[t.Highlight=6]="Highlight",t[t.Alpha=7]="Alpha",t[t.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",t[t.COUNT=9]="COUNT"})(te||(te={}));let Ol=class{constructor(e,r,i=!1,s=r){this.data=e,this.size=r,this.exclusive=i,this.stride=s}};function Ya(t){if(t.length<Zt)return Array.from(t);if(Yr(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return us(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}let Xa=class Ii{constructor(e,r,i,s){this.primitiveIndices=e,this._numIndexPerPrimitive=r,this.indices=i,this.position=s,this._children=void 0,P(e.length>=1),P(i.length%this._numIndexPerPrimitive==0),P(i.length>=e.length*this._numIndexPerPrimitive),P(s.size===3||s.size===4);const{data:a,size:n}=s,o=e.length;let c=n*i[this._numIndexPerPrimitive*e[0]];Le.clear(),Le.push(c);const l=Ge(a[c],a[c+1],a[c+2]),h=hs(l);for(let p=0;p<o;++p){const g=this._numIndexPerPrimitive*e[p];for(let _=0;_<this._numIndexPerPrimitive;++_){c=n*i[g+_],Le.push(c);let x=a[c];l[0]=Math.min(x,l[0]),h[0]=Math.max(x,h[0]),x=a[c+1],l[1]=Math.min(x,l[1]),h[1]=Math.max(x,h[1]),x=a[c+2],l[2]=Math.min(x,l[2]),h[2]=Math.max(x,h[2])}}this.bbMin=l,this.bbMax=h;const f=Gt(I(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(h[0]-l[0],h[1]-l[1]),h[2]-l[2]);let m=this.radius*this.radius;for(let p=0;p<Le.length;++p){c=Le.at(p);const g=a[c]-f[0],_=a[c+1]-f[1],x=a[c+2]-f[2],E=g*g+_*_+x*x;if(E<=m)continue;const B=Math.sqrt(E),R=.5*(B-this.radius);this.radius=this.radius+R,m=this.radius*this.radius;const y=R/B;f[0]+=g*y,f[1]+=_*y,f[2]+=x*y}this.center=f,Le.clear()}getChildren(){if(this._children||ds(this.bbMin,this.bbMax)<=1)return this._children;const e=Gt(I(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,i=new Uint8Array(r),s=new Array(8);for(let l=0;l<8;++l)s[l]=0;const{data:a,size:n}=this.position;for(let l=0;l<r;++l){let h=0;const f=this._numIndexPerPrimitive*this.primitiveIndices[l];let m=n*this.indices[f],p=a[m],g=a[m+1],_=a[m+2];for(let x=1;x<this._numIndexPerPrimitive;++x){m=n*this.indices[f+x];const E=a[m],B=a[m+1],R=a[m+2];E<p&&(p=E),B<g&&(g=B),R<_&&(_=R)}p<e[0]&&(h|=1),g<e[1]&&(h|=2),_<e[2]&&(h|=4),i[l]=h,++s[h]}let o=0;for(let l=0;l<8;++l)s[l]>0&&++o;if(o<2)return;const c=new Array(8);for(let l=0;l<8;++l)c[l]=s[l]>0?new Uint32Array(s[l]):void 0;for(let l=0;l<8;++l)s[l]=0;for(let l=0;l<r;++l){const h=i[l];c[h][s[h]++]=this.primitiveIndices[l]}this._children=new Array;for(let l=0;l<8;++l)c[l]!==void 0&&this._children.push(new Ii(c[l],this._numIndexPerPrimitive,this.indices,this.position));return this._children}static prune(){Le.prune()}};const Le=new kr({deallocator:null});function Ja(t,e,r){if(!t||!e)return!1;const{size:i,data:s}=t;U(r,0,0,0),U(Q,0,0,0);let a=0,n=0;for(let o=0;o<e.length-2;o+=3){const c=e[o]*i,l=e[o+1]*i,h=e[o+2]*i;U(G,s[c],s[c+1],s[c+2]),U(ve,s[l],s[l+1],s[l+2]),U(_t,s[h],s[h+1],s[h+2]);const f=Fs(G,ve,_t);f?(ee(G,G,ve),ee(G,G,_t),ue(G,G,1/3*f),ee(r,r,G),a+=f):(ee(Q,Q,G),ee(Q,Q,ve),ee(Q,Q,_t),n+=3)}return(n!==0||a!==0)&&(a!==0?(ue(r,r,1/a),!0):n!==0&&(ue(r,Q,1/n),!0))}function Za(t,e,r){if(!t||!e)return!1;const{size:i,data:s}=t;U(r,0,0,0);let a=-1,n=0;for(let o=0;o<e.length;o++){const c=e[o]*i;a!==c&&(r[0]+=s[c],r[1]+=s[c+1],r[2]+=s[c+2],n++),a=c}return n>1&&ue(r,r,1/n),n>0}function Ka(t,e,r,i){if(!t)return!1;U(i,0,0,0),U(Q,0,0,0);let s=0,a=0;const{size:n,data:o}=t,c=e?e.length-1:o.length/n-1,l=c+(r?2:0);for(let h=0;h<l;h+=2){const f=h<c?h:c,m=h<c?h+1:0,p=(e?e[f]:f)*n,g=(e?e[m]:m)*n;G[0]=o[p],G[1]=o[p+1],G[2]=o[p+2],ve[0]=o[g],ve[1]=o[g+1],ve[2]=o[g+2],ue(G,ee(G,G,ve),.5);const _=fs(G,ve);_>0?(ee(i,i,ue(G,G,_)),s+=_):s===0&&(ee(Q,Q,G),a++)}return s!==0?(ue(i,i,1/s),!0):a!==0&&(ue(i,Q,1/a),!0)}const G=I(),ve=I(),_t=I(),Q=I();let Ml=class Ri extends tr{constructor(e,r,i=[],s=null,a=Te.Mesh,n=null,o=-1){super(),this.material=e,this.mapPositions=s,this.type=a,this.objectAndLayerIdColor=n,this.edgeIndicesLength=o,this.visible=!0,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[c,l]of r)l&&this._vertexAttributes.set(c,{...l});if(i==null||i.length===0){const c=Qa(this._vertexAttributes),l=vr(c);this.edgeIndicesLength=this.edgeIndicesLength<0?c:this.edgeIndicesLength;for(const h of this._vertexAttributes.keys())this._indices.set(h,l)}else for(const[c,l]of i)l&&(this._indices.set(c,Ls(l)),c===d.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(c).length:this.edgeIndicesLength))}instantiate(e={}){const r=new Ri(e.material||this.material,[],void 0,this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._vertexAttributes.forEach((i,s)=>{i.exclusive=!1,r._vertexAttributes.set(s,i)}),this._indices.forEach((i,s)=>r._indices.set(s,i)),r._boundingInfo=this._boundingInfo,r.transformation=e.transformation||this.transformation,r}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){let r=this._vertexAttributes.get(e);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:Ya(r.data)},this._vertexAttributes.set(e,r)),r}setAttributeData(e,r){const i=this._vertexAttributes.get(e);i&&this._vertexAttributes.set(e,{...i,exclusive:!0,data:r})}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===Te.Mesh?this._computeAttachmentOriginTriangles(e):this.type===Te.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(this._transformation!=null&&Rt(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const r=this.indices.get(d.POSITION),i=this.vertexAttributes.get(d.POSITION);return Ja(i,r,e)}_computeAttachmentOriginLines(e){const r=this.vertexAttributes.get(d.POSITION),i=this.indices.get(d.POSITION);return Ka(r,i,i&&en(this.material.parameters,r,i),e)}_computeAttachmentOriginPoints(e){const r=this.indices.get(d.POSITION),i=this.vertexAttributes.get(d.POSITION);return Za(i,r,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(d.POSITION),r=this.vertexAttributes.get(d.POSITION);if(!e||e.length===0||!r)return null;const i=this.type===Te.Mesh?3:1;P(e.length%i==0,"Indexing error: "+e.length+" not divisible by "+i);const s=vr(e.length/i);return new Xa(s,i,e,r)}get transformation(){return this._transformation??gr}set transformation(e){this._transformation=e&&e!==gr?zs(e):null}get shaderTransformation(){return this._shaderTransformer!=null?this._shaderTransformer(this.transformation):this.transformation}get shaderTransformer(){return this._shaderTransformer}set shaderTransformer(e){this._shaderTransformer=e}get hasVolatileTransformation(){return this._shaderTransformer!=null}addHighlight(){const e=new qs(Os.Highlight);return this.highlights=ks(this.highlights,e),e}removeHighlight(e){this.highlights=Ys(this.highlights,e)}};function Qa(t){const e=t.values().next().value;return e==null?0:e.data.length/e.size}function en(t,e,r){return!(!("isClosed"in t)||!t.isClosed)&&(r?r.length>2:e.data.length>6)}let tn=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,r){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(e){return Ut.LOADED}},Cl=class extends tr{constructor(e,r){super(),this.type=Te.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=Pt,this._pp0=Ge(0,0,1),this._pp1=Ge(0,0,0),this._parameters=Ai(e,r),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,r=!0){Ba(this._parameters,e)&&(this.validateParameters(this._parameters),r&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(this.renderOccluded&e.renderOccludedMask)!=0}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository!=null&&this.repository.materialChanged(this)}intersectDraped(e,r,i,s,a,n){return this._pp0[0]=this._pp1[0]=s[0],this._pp0[1]=this._pp1[1]=s[1],this.intersect(e,r,i,this._pp0,this._pp1,a)}};var wt;(function(t){t[t.None=0]="None",t[t.Occlude=1]="Occlude",t[t.Transparent=2]="Transparent",t[t.OccludeAndTransparent=4]="OccludeAndTransparent",t[t.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",t[t.Opaque=16]="Opaque"})(wt||(wt={}));let zl=class extends Re{constructor(){super(...arguments),this.renderOccluded=wt.Occlude}};var q,Mr;(function(t){t[t.Undefined=0]="Undefined",t[t.DefinedSize=1]="DefinedSize",t[t.DefinedScale=2]="DefinedScale"})(q||(q={})),function(t){t[t.Undefined=0]="Undefined",t[t.DefinedAngle=1]="DefinedAngle"}(Mr||(Mr={}));let ar=class{constructor(e){this.field=e}},rn=class extends ar{constructor(e){super(e),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[q.Undefined,q.Undefined,q.Undefined]}},sn=class extends ar{constructor(e){super(e),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}};class an extends ar{constructor(e){super(e),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}}let nn=class{};function rt(t){return t!=null}function Ue(t){return typeof t=="number"}function zt(t){return typeof t=="string"}function on(t){return t==null||zt(t)}function D(t,e){t&&t.push(e)}function ln(t,e,r,i=he()){const s=t||0,a=e||0,n=r||0;return s!==0&&_s(i,i,-s/180*Math.PI),a!==0&&xs(i,i,a/180*Math.PI),n!==0&&Ts(i,i,n/180*Math.PI),i}function Ee(t,e,r,i,s){const a=t.minSize,n=t.maxSize;if(t.expression)return D(s,"Could not convert size info: expression not supported"),!1;if(t.useSymbolValue){const o=i.symbolSize[r];return e.minSize[r]=o,e.maxSize[r]=o,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=q.DefinedSize,!0}if(rt(t.field))return rt(t.stops)?t.stops.length===2&&Ue(t.stops[0].size)&&Ue(t.stops[1].size)?($r(t.stops[0].size,t.stops[1].size,t.stops[0].value,t.stops[1].value,e,r),e.type[r]=q.DefinedSize,!0):(D(s,"Could not convert size info: stops only supported with 2 elements"),!1):Ue(a)&&Ue(n)&&rt(t.minDataValue)&&rt(t.maxDataValue)?($r(a,n,t.minDataValue,t.maxDataValue,e,r),e.type[r]=q.DefinedSize,!0):t.valueUnit==="unknown"?(D(s,"Could not convert size info: proportional size not supported"),!1):dr[t.valueUnit]!=null?(e.minSize[r]=-1/0,e.maxSize[r]=1/0,e.offset[r]=0,e.factor[r]=1/dr[t.valueUnit],e.type[r]=q.DefinedSize,!0):(D(s,"Could not convert size info: scale-dependent size not supported"),!1);if(!rt(t.field)){if(t.stops&&t.stops[0]&&Ue(t.stops[0].size))return e.minSize[r]=t.stops[0].size,e.maxSize[r]=t.stops[0].size,e.offset[r]=e.minSize[r],e.factor[r]=0,e.type[r]=q.DefinedSize,!0;if(Ue(a))return e.minSize[r]=a,e.maxSize[r]=a,e.offset[r]=a,e.factor[r]=0,e.type[r]=q.DefinedSize,!0}return D(s,"Could not convert size info: unsupported variant of sizeInfo"),!1}function $r(t,e,r,i,s,a){const n=Math.abs(i-r)>0?(e-t)/(i-r):0;s.minSize[a]=n>0?t:e,s.maxSize[a]=n>0?e:t,s.offset[a]=t-r*n,s.factor[a]=n}function cn(t,e,r,i){if(t.normalizationField||t.valueRepresentation)return D(i,"Could not convert size info: unsupported property"),null;if(!on(t.field))return D(i,"Could not convert size info: field is not a string"),null;if(e.size){if(t.field)if(e.size.field){if(t.field!==e.size.field)return D(i,"Could not convert size info: multiple fields in use"),null}else e.size.field=t.field}else e.size=new rn(t.field);let s;switch(t.axis){case"width":return s=Ee(t,e.size,0,r,i),s?e:null;case"height":return s=Ee(t,e.size,2,r,i),s?e:null;case"depth":return s=Ee(t,e.size,1,r,i),s?e:null;case"width-and-depth":return s=Ee(t,e.size,0,r,i),s&&Ee(t,e.size,1,r,i),s?e:null;case null:case void 0:case"all":return s=Ee(t,e.size,0,r,i),s=s&&Ee(t,e.size,1,r,i),s=s&&Ee(t,e.size,2,r,i),s?e:null;default:return D(i,`Could not convert size info: unknown axis "${t.axis}""`),null}}function un(t,e,r){for(let s=0;s<3;++s){let a=e.unitInMeters;t.type[s]===q.DefinedSize&&(a*=e.modelSize[s],t.type[s]=q.DefinedScale),t.minSize[s]=t.minSize[s]/a,t.maxSize[s]=t.maxSize[s]/a,t.offset[s]=t.offset[s]/a,t.factor[s]=t.factor[s]/a}let i;if(t.type[0]!==q.Undefined)i=0;else if(t.type[1]!==q.Undefined)i=1;else{if(t.type[2]===q.Undefined)return D(r,"No size axis contains a valid size or scale"),!1;i=2}for(let s=0;s<3;++s)t.type[s]===q.Undefined&&(t.minSize[s]=t.minSize[i],t.maxSize[s]=t.maxSize[i],t.offset[s]=t.offset[i],t.factor[s]=t.factor[i],t.type[s]=t.type[i]);return!0}function Cr(t,e,r){t[4*e]=r.r/255,t[4*e+1]=r.g/255,t[4*e+2]=r.b/255,t[4*e+3]=r.a}function hn(t,e,r){if(t.normalizationField)return D(r,"Could not convert color info: unsupported property"),null;if(zt(t.field)){if(!t.stops)return D(r,"Could not convert color info: missing stops or colors"),null;{if(t.stops.length>8)return D(r,"Could not convert color info: too many color stops"),null;e.color=new sn(t.field);const i=t.stops;for(let s=0;s<8;++s){const a=i[Math.min(s,i.length-1)];e.color.values[s]=a.value,Cr(e.color.colors,s,a.color)}}}else{if(!(t.stops&&t.stops.length>=0))return D(r,"Could not convert color info: no field and no colors/stops"),null;{const i=t.stops&&t.stops.length>=0&&t.stops[0].color;e.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let s=0;s<8;s++)e.color.values[s]=1/0,Cr(e.color.colors,s,i)}}return e}function dn(t,e,r){if(t.normalizationField)return D(r,"Could not convert opacity info: unsupported property"),null;if(zt(t.field)){if(!t.stops)return D(r,"Could not convert opacity info: missing stops or opacities"),null;{if(t.stops.length>8)return D(r,"Could not convert opacity info: too many opacity stops"),null;e.opacity=new an(t.field);const i=t.stops;for(let s=0;s<8;++s){const a=i[Math.min(s,i.length-1)];e.opacity.values[s]=a.value,e.opacity.opacityValues[s]=a.opacity}}}else{if(!(t.stops&&t.stops.length>=0))return D(r,"Could not convert opacity info: no field and no opacities/stops"),null;{const i=t.stops&&t.stops.length>=0?t.stops[0].opacity:0;e.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let s=0;s<8;s++)e.opacity.values[s]=1/0,e.opacity.opacityValues[s]=i}}return e}function Nt(t,e,r){const i=r===2&&t.rotationType==="arithmetic";e.offset[r]=i?90:0,e.factor[r]=i?-1:1,e.type[r]=1}function fn(t,e,r){if(!zt(t.field))return D(r,"Could not convert rotation info: field is not a string"),null;if(e.rotation){if(t.field)if(e.rotation.field){if(t.field!==e.rotation.field)return D(r,"Could not convert rotation info: multiple fields in use"),null}else e.rotation.field=t.field}else e.rotation={field:t.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(t.axis){case"tilt":return Nt(t,e.rotation,0),e;case"roll":return Nt(t,e.rotation,1),e;case null:case void 0:case"heading":return Nt(t,e.rotation,2),e;default:return D(r,`Could not convert rotation info: unknown axis "${t.axis}""`),null}}let Hl=class{constructor(e,r=[1,1,1],i=[1,1,1],s=1,a=[0,0,0],n=[1,1,1],o=[0,0,0]){this.supports=e,this.modelSize=r,this.symbolSize=i,this.unitInMeters=s,this.anchor=a,this.scale=n,this.rotation=o}};function Oi(t,e,r){if(!t)return null;const i=t.reduce((s,a)=>{if(!s)return s;if(a.valueExpression)return D(r,"Could not convert visual variables: arcade expressions not supported"),null;switch(a.type){case"size":return e.supports.size?cn(a,s,e,r):s;case"color":return e.supports.color?hn(a,s,r):s;case"opacity":return e.supports.opacity?dn(a,s,r):null;case"rotation":return e.supports.rotation?fn(a,s,r):s;default:return null}},new nn);return!(t.length>0&&i)||i.size||i.color||i.opacity||i.rotation?i&&i.size&&!un(i.size,e,r)?null:i:null}let mn=class{constructor(e,r,i){this.visualVariables=e,this.materialParameters=r,this.requiresShaderTransformation=i}};function Ul(t,e){if(!t||Ua.TESTS_DISABLE_FAST_UPDATES)return null;const r=Oi(t.visualVariables,e);return r?new mn(r,Mi(r,e),!!r.size):null}function jl(t,e,r){if(!e||!t)return!1;const i=t.visualVariables,s=Oi(e.visualVariables,r);return!!s&&!!(xt(i.size,s.size,"size")&&xt(i.color,s.color,"color")&&xt(i.rotation,s.rotation,"rotation")&&xt(i.opacity,s.opacity,"opacity"))&&(t.visualVariables=s,t.materialParameters=Mi(s,r),t.requiresShaderTransformation=!!s.size,!0)}function xt(t,e,r){if(!!t!=!!e||t&&t.field!==(e==null?void 0:e.field))return!1;if(t&&r==="rotation"){const i=t,s=e;for(let a=0;a<3;a++)if(i.type[a]!==s.type[a]||i.offset[a]!==s.offset[a]||i.factor[a]!==s.factor[a])return!1}return!0}class wi extends Re{constructor(e){super(),this.vvSize=(e==null?void 0:e.size)??null,this.vvColor=(e==null?void 0:e.color)??null,this.vvOpacity=(e==null?void 0:e.opacity)??null}}function Mi(t,e){const r=new wi(t);return r.vvSize&&(r.vvSymbolAnchor=e.anchor,ms(dt),ln(e.rotation[2],e.rotation[0],e.rotation[1],dt),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||Xe(),ps(r.vvSymbolRotationMatrix,dt)),r}function Wl(t,e,r){if(!t.vvSize)return r;Vt(Ae,r);const i=t.vvSymbolRotationMatrix;gs(dt,i[0],i[1],i[2],0,i[3],i[4],i[5],0,i[6],i[7],i[8],0,0,0,0,1),Xr(Ae,Ae,dt);for(let s=0;s<3;++s){const a=t.vvSize.offset[s]+e[0]*t.vvSize.factor[s];Pr[s]=$t(a,t.vvSize.minSize[s],t.vvSize.maxSize[s])}return vs(Ae,Ae,Pr),Ot(Ae,Ae,t.vvSymbolAnchor),Ae}function ql(t,e,r){if(e.vvSize)for(let i=0;i<3;++i){const s=e.vvSize.offset[i]+r[0]*e.vvSize.factor[i];t[i]=$t(s,e.vvSize.minSize[i],e.vvSize.maxSize[i])}else U(t,1,1,1)}function kl(t,e){const r=t==null?0:e.attributes[t];return typeof r=="number"&&isFinite(r)?r:0}const Ae=he(),Pr=I(),dt=he();let Yl=class extends wi{constructor(){super(...arguments),this.renderOccluded=wt.Occlude}};const Dt=8;let it=class extends Va{};$([tt({constValue:!0})],it.prototype,"hasSliceHighlight",void 0),$([tt({constValue:!1})],it.prototype,"hasSliceInVertexProgram",void 0),$([tt({constValue:!1})],it.prototype,"instancedDoublePrecision",void 0),$([tt({constValue:!1})],it.prototype,"hasModelTransformation",void 0),$([tt({constValue:M.Pass})],it.prototype,"pbrTextureBindType",void 0);function pn(t){t.attributes.add(d.POSITION,"vec3"),t.vertex.code.add(u`vec3 positionModel() { return position; }`)}function gn({code:t},e){e.doublePrecisionRequiresObfuscation?t.add(u`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):t.add(u`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let be=class extends j{constructor(e,r){super(e,"vec3",M.Draw,(i,s,a,n)=>i.setUniform3fv(e,r(s,a,n)))}},$i=class extends j{constructor(e,r){super(e,"mat3",M.Draw,(i,s,a)=>i.setUniformMatrix3fv(e,r(s,a)))}},nr=class extends j{constructor(e,r){super(e,"mat3",M.Pass,(i,s,a)=>i.setUniformMatrix3fv(e,r(s,a)))}};function Ci(t,e){t.include(pn);const r=t.vertex;r.include(gn,e),t.varyings.add("vPositionWorldCameraRelative","vec3"),t.varyings.add("vPosition_view","vec3"),r.uniforms.add(new Y("transformWorldFromViewTH",i=>i.transformWorldFromViewTH),new Y("transformWorldFromViewTL",i=>i.transformWorldFromViewTL),new nr("transformViewFromCameraRelativeRS",i=>i.transformViewFromCameraRelativeRS),new ht("transformProjFromView",i=>i.transformProjFromView),new $i("transformWorldFromModelRS",i=>i.transformWorldFromModelRS),new be("transformWorldFromModelTH",i=>i.transformWorldFromModelTH),new be("transformWorldFromModelTL",i=>i.transformWorldFromModelTL)),r.code.add(u`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(u`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${e.spherical?u`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:u`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),t.fragment.uniforms.add(new Y("transformWorldFromViewTL",i=>i.transformWorldFromViewTL)),r.code.add(u`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),t.fragment.code.add(u`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class vn extends Re{constructor(){super(...arguments),this.transformWorldFromViewTH=I(),this.transformWorldFromViewTL=I(),this.transformViewFromCameraRelativeRS=Xe(),this.transformProjFromView=he()}}class _n extends Re{constructor(){super(...arguments),this.transformWorldFromModelRS=Xe(),this.transformWorldFromModelTH=I(),this.transformWorldFromModelTL=I()}}function zr(t){t.varyings.add("linearDepth","float")}function xn(t){t.vertex.uniforms.add(new Se("nearFar",(e,r)=>r.camera.nearFar))}function Pi(t){t.vertex.code.add(u`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ec(t,e){const{vertex:r}=t;switch(e.output){case te.Color:if(e.receiveShadows)return zr(t),void r.code.add(u`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case te.Depth:case te.Shadow:case te.ShadowHighlight:case te.ShadowExcludeHighlight:return t.include(Ci,e),zr(t),xn(t),Pi(t),void r.code.add(u`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(u`void forwardLinearDepth() {}`)}function tc(t,e){Tn(t,e,new be("slicePlaneOrigin",(r,i)=>Sn(e,r,i)),new be("slicePlaneBasis1",(r,i)=>{var s;return Lr(e,r,i,(s=i.slicePlane)==null?void 0:s.basis1)}),new be("slicePlaneBasis2",(r,i)=>{var s;return Lr(e,r,i,(s=i.slicePlane)==null?void 0:s.basis2)}))}function Tn(t,e,...r){if(!e.hasSlicePlane){const n=u`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return e.hasSliceInVertexProgram&&t.vertex.code.add(n),void t.fragment.code.add(n)}e.hasSliceInVertexProgram&&t.vertex.uniforms.add(...r),t.fragment.uniforms.add(...r);const i=u`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,s=u`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=e.hasSliceHighlight?u`
        ${s}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:u`#define highlightSlice(_color_, _pos_) (_color_)`;e.hasSliceInVertexProgram&&t.vertex.code.add(i),t.fragment.code.add(i),t.fragment.code.add(a)}function zi(t,e,r){return t.instancedDoublePrecision?U(bn,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):e.slicePlaneLocalOrigin}function Li(t,e){return t!=null?Qt(Mt,e.origin,t):e.origin}function Fi(t,e,r){return t.hasSliceTranslatedView?e!=null?Ot(En,r.camera.viewMatrix,e):r.camera.viewMatrix:null}function Sn(t,e,r){if(r.slicePlane==null)return Kt;const i=zi(t,e,r),s=Li(i,r.slicePlane),a=Fi(t,i,r);return a!=null?Rt(Mt,s,a):s}function Lr(t,e,r,i){if(i==null||r.slicePlane==null)return Kt;const s=zi(t,e,r),a=Li(s,r.slicePlane),n=Fi(t,s,r);return n!=null?(ee(st,i,a),Rt(Mt,a,n),Rt(st,st,n),Qt(st,st,Mt)):i}const bn=I(),Mt=I(),st=I(),En=he();function rc(t,e){const r=e.output===te.ObjectAndLayerIdColor,i=e.objectAndLayerIdColorInstanced;r&&(t.varyings.add("objectAndLayerIdColorVarying","vec4"),i?t.attributes.add(d.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):t.attributes.add(d.OBJECTANDLAYERIDCOLOR,"vec4")),t.vertex.code.add(u`
     void forwardObjectAndLayerIdColor() {
      ${r?i?u`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:u`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:u``} }`),t.fragment.code.add(u`
      void outputObjectAndLayerIdColor() {
        ${r?u`fragColor = objectAndLayerIdColorVarying;`:u``} }`)}let An=class extends j{constructor(e,r,i){super(e,"vec4",M.Pass,(s,a,n)=>s.setUniform4fv(e,r(a,n)),i)}},yn=class extends j{constructor(e,r,i){super(e,"float",M.Pass,(s,a,n)=>s.setUniform1fv(e,r(a,n)),i)}};function ac(t,e){const{vertex:r,attributes:i}=t;e.hasVvInstancing&&(e.vvSize||e.vvColor)&&i.add(d.INSTANCEFEATUREATTRIBUTE,"vec4"),e.vvSize?(r.uniforms.add(new Y("vvSizeMinSize",s=>s.vvSize.minSize)),r.uniforms.add(new Y("vvSizeMaxSize",s=>s.vvSize.maxSize)),r.uniforms.add(new Y("vvSizeOffset",s=>s.vvSize.offset)),r.uniforms.add(new Y("vvSizeFactor",s=>s.vvSize.factor)),r.uniforms.add(new nr("vvSymbolRotationMatrix",s=>s.vvSymbolRotationMatrix)),r.uniforms.add(new Y("vvSymbolAnchor",s=>s.vvSymbolAnchor)),r.code.add(u`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(u`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${e.hasVvInstancing?u`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(u`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),e.vvColor?(r.constants.add("vvColorNumber","int",Dt),r.uniforms.add(new yn("vvColorValues",s=>s.vvColor.values,Dt),new An("vvColorColors",s=>s.vvColor.colors,Dt)),r.code.add(u`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${e.hasVvInstancing?u`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(u`vec4 vvColor() { return vec4(1.0); }`)}function nc(t,e){switch(t.fragment.include(ir),e.output){case te.Shadow:case te.ShadowHighlight:case te.ShadowExcludeHighlight:t.fragment.code.add(u`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
fragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case te.Depth:t.fragment.code.add(u`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}let In=class extends j{constructor(e,r){super(e,"mat4",M.Draw,(i,s,a)=>i.setUniformMatrix4fv(e,r(s,a)))}};function Rn(t,e){e.instancedDoublePrecision?t.constants.add("cameraPosition","vec3",Kt):t.uniforms.add(new be("cameraPosition",(r,i)=>U(Ni,i.camera.viewInverseTransposeMatrix[3]-r.origin[0],i.camera.viewInverseTransposeMatrix[7]-r.origin[1],i.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function lc(t,e){if(!e.instancedDoublePrecision)return void t.uniforms.add(new ht("proj",(i,s)=>s.camera.projectionMatrix),new In("view",(i,s)=>Ot(Fr,s.camera.viewMatrix,i.origin)),new be("localOrigin",i=>i.origin));const r=i=>U(Ni,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]);t.uniforms.add(new ht("proj",(i,s)=>s.camera.projectionMatrix),new ht("view",(i,s)=>Ot(Fr,s.camera.viewMatrix,r(s))),new Y("localOrigin",(i,s)=>r(s)))}const Fr=he(),Ni=I();function cc(t){t.uniforms.add(new ht("viewNormal",(e,r)=>r.camera.viewInverseTransposeMatrix))}function uc(t,e){t.uniforms.add(new ut("pixelRatio",(r,i)=>i.camera.pixelRatio/(e.draped?qa:1)))}function hc(t,e){e.hasMultipassTerrain&&(t.fragment.include(sr),t.fragment.uniforms.add(new de("terrainDepthTexture",(r,i)=>i.multipassTerrain.linearDepthTexture)),t.fragment.uniforms.add(new Se("nearFar",(r,i)=>i.camera.nearFar)),t.fragment.uniforms.add(new Se("inverseViewport",(r,i)=>i.inverseViewport)),t.fragment.code.add(u`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${e.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}let dc=class{constructor(){this.enabled=!1,this.cullAboveGround=!1}};function Di(t){t.vertex.code.add(u`const float PI = 3.141592653589793;`),t.fragment.code.add(u`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}const mc=.1,pc=.001;function gc(t){t.code.add(u`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}const vc={func:Ye.LESS},_c={func:Ye.ALWAYS},xc={mask:255},Tc={mask:0},Sc={function:{func:Ye.ALWAYS,ref:Ie.OutlineVisualElementMask,mask:Ie.OutlineVisualElementMask},operation:{fail:se.KEEP,zFail:se.KEEP,zPass:se.ZERO}},bc={function:{func:Ye.ALWAYS,ref:Ie.OutlineVisualElementMask,mask:Ie.OutlineVisualElementMask},operation:{fail:se.KEEP,zFail:se.KEEP,zPass:se.REPLACE}},Ec={function:{func:Ye.EQUAL,ref:Ie.OutlineVisualElementMask,mask:Ie.OutlineVisualElementMask},operation:{fail:se.KEEP,zFail:se.KEEP,zPass:se.KEEP}},Ac={function:{func:Ye.NOTEQUAL,ref:Ie.OutlineVisualElementMask,mask:Ie.OutlineVisualElementMask},operation:{fail:se.KEEP,zFail:se.KEEP,zPass:se.KEEP}};let On=class{constructor(e=I()){this.intensity=e}},wn=class{constructor(e=I(),r=Ge(.57735,.57735,.57735)){this.intensity=e,this.direction=r}},kt=class{constructor(e=I(),r=Ge(.57735,.57735,.57735),i=!0,s=1,a=1){this.intensity=e,this.direction=r,this.castShadows=i,this.specularStrength=s,this.environmentStrength=a}},Bi=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function Mn(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e[i];return r}function Bt(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]*e;return r}function qe(t,e,r){(r=r||t).length=t.length;for(let i=0;i<t.length;i++)r[i]=t[i]+e[i];return r}function Hi(t){return(t+1)*(t+1)}function $n(t){return $t(Math.floor(Math.sqrt(t)-1),0,2)}function Gi(t,e,r){const i=t[0],s=t[1],a=t[2],n=r||[];return n.length=Hi(e),e>=0&&(n[0]=.28209479177),e>=1&&(n[1]=.4886025119*i,n[2]=.4886025119*a,n[3]=.4886025119*s),e>=2&&(n[4]=1.09254843059*i*s,n[5]=1.09254843059*s*a,n[6]=.31539156525*(3*a*a-1),n[7]=1.09254843059*i*a,n[8]=.54627421529*(i*i-s*s)),n}function Cn(t,e){const r=Hi(t),i=e||{r:[],g:[],b:[]};i.r.length=i.g.length=i.b.length=r;for(let s=0;s<r;s++)i.r[s]=i.g[s]=i.b[s]=0;return i}function Pn(t,e){const r=$n(e.r.length);for(const i of t)Ss(Yt,i.direction),Gi(Yt,r,_e),Mn(_e,yt),Bt(_e,i.intensity[0],je),qe(e.r,je),Bt(_e,i.intensity[1],je),qe(e.g,je),Bt(_e,i.intensity[2],je),qe(e.b,je);return e}function zn(t,e){Gi(Yt,0,_e);for(const r of t)e.r[0]+=_e[0]*yt[0]*r.intensity[0]*4*Math.PI,e.g[0]+=_e[0]*yt[0]*r.intensity[1]*4*Math.PI,e.b[0]+=_e[0]*yt[0]*r.intensity[2]*4*Math.PI;return e}function Ln(t,e,r,i){Cn(e,i),U(r.intensity,0,0,0);let s=!1;const a=Fn,n=Nn,o=Dn;a.length=0,n.length=0,o.length=0;for(const c of t)c instanceof kt&&!s?(Fe(r.direction,c.direction),Fe(r.intensity,c.intensity),r.specularStrength=c.specularStrength,r.environmentStrength=c.environmentStrength,r.castShadows=c.castShadows,s=!0):c instanceof kt||c instanceof wn?a.push(c):c instanceof On?n.push(c):c instanceof Bi&&o.push(c);Pn(a,i),zn(n,i);for(const c of o)qe(i.r,c.r),qe(i.g,c.g),qe(i.b,c.b)}const Fn=[],Nn=[],Dn=[],_e=[0],je=[0],Yt=I(),yt=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];let Nr=class{constructor(){this.color=I(),this.intensity=1}},Bn=class{constructor(){this.direction=I(),this.ambient=new Nr,this.diffuse=new Nr}};const Hn=.4;class $c{constructor(){this._shOrder=2,this._legacy=new Bn,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new Bi,this._mainLight=new kt(I(),Ge(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){Ln(e,this._shOrder,this._mainLight,this._sphericalHarmonics),Fe(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,ue(this._legacy.diffuse.color,this._mainLight.intensity,r),Fe(Tt,this._legacy.diffuse.color),ue(Tt,Tt,Hn*this.globalFactor),ee(this._legacy.ambient.color,this._legacy.ambient.color,Tt)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),Fe(this._mainLight.direction,e.mainLight.direction),Fe(this._mainLight.intensity,e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,r,i){if(Gt(this._mainLight.intensity,e.mainLight.intensity,r.mainLight.intensity,i),this._mainLight.environmentStrength=ye(e.mainLight.environmentStrength,r.mainLight.environmentStrength,i),this._mainLight.specularStrength=ye(e.mainLight.specularStrength,r.mainLight.specularStrength,i),Fe(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=ye(e.globalFactor,r.globalFactor,i),this.noonFactor=ye(e.noonFactor,r.noonFactor,i),e.sh.r.length===r.sh.r.length)for(let s=0;s<r.sh.r.length;s++)this._sphericalHarmonics.r[s]=ye(e.sh.r[s],r.sh.r[s],i),this._sphericalHarmonics.g[s]=ye(e.sh.g[s],r.sh.g[s],i),this._sphericalHarmonics.b[s]=ye(e.sh.b[s],r.sh.b[s],i);else for(let s=0;s<r.sh.r.length;s++)this._sphericalHarmonics.r[s]=r.sh.r[s],this._sphericalHarmonics.g[s]=r.sh.g[s],this._sphericalHarmonics.b[s]=r.sh.b[s]}}const Tt=I();let Cc=class{constructor(){this._transform=he(),this._transformInverse=new St({value:this._transform},bs,he),this._transformInverseTranspose=new St(this._transformInverse,mr,he),this._transformTranspose=new St({value:this._transform},mr,he),this._transformInverseRotation=new St({value:this._transform},Es,Xe)}_invalidateLazyTransforms(){this._transformInverse.invalidate(),this._transformInverseTranspose.invalidate(),this._transformTranspose.invalidate(),this._transformInverseRotation.invalidate()}get transform(){return this._transform}get inverse(){return this._transformInverse.value}get inverseTranspose(){return this._transformInverseTranspose.value}get inverseRotation(){return this._transformInverseRotation.value}get transpose(){return this._transformTranspose.value}setTransformMatrix(e){Vt(this._transform,e)}multiplyTransform(e){Xr(this._transform,this._transform,e)}set(e){Vt(this._transform,e),this._invalidateLazyTransforms()}setAndInvalidateLazyTransforms(e,r){this.setTransformMatrix(e),this.multiplyTransform(r),this._invalidateLazyTransforms()}},St=class{constructor(e,r,i){this._original=e,this._update=r,this._dirty=!0,this._transform=i()}invalidate(){this._dirty=!0}get value(){return this._dirty&&(this._update(this._transform,this._original.value),this._dirty=!1),this._transform}};class Gn{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=I(),this._mbs=ti(),this._obb={center:I(),halfSize:Hs(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,r,i){const s=e,a=r,n=i+this.componentLocalOriginLength,o=this._totalOffset/Math.sqrt(s*s+a*a+n*n);return this._tmpVertex[0]=e+s*o,this._tmpVertex[1]=r+a*o,this._tmpVertex[2]=i+n*o,this._tmpVertex}applyToAabb(e){const r=e[0],i=e[1],s=e[2]+this.componentLocalOriginLength,a=e[3],n=e[4],o=e[5]+this.componentLocalOriginLength,c=r*a<0?0:Math.min(Math.abs(r),Math.abs(a)),l=i*n<0?0:Math.min(Math.abs(i),Math.abs(n)),h=s*o<0?0:Math.min(Math.abs(s),Math.abs(o)),f=Math.sqrt(c*c+l*l+h*h);if(f<this._totalOffset)return e[0]-=r<0?this._totalOffset:0,e[1]-=i<0?this._totalOffset:0,e[2]-=s<0?this._totalOffset:0,e[3]+=a>0?this._totalOffset:0,e[4]+=n>0?this._totalOffset:0,e[5]+=o>0?this._totalOffset:0,e;const m=Math.max(Math.abs(r),Math.abs(a)),p=Math.max(Math.abs(i),Math.abs(n)),g=Math.max(Math.abs(s),Math.abs(o)),_=Math.sqrt(m*m+p*p+g*g),x=this._totalOffset/_,E=this._totalOffset/f;return e[0]+=r*(r>0?x:E),e[1]+=i*(i>0?x:E),e[2]+=s*(s>0?x:E),e[3]+=a*(a<0?x:E),e[4]+=n*(n<0?x:E),e[5]+=o*(o<0?x:E),e}applyToMbs(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this._totalOffset/r;return this._mbs[0]=e[0]+e[0]*i,this._mbs[1]=e[1]+e[1]*i,this._mbs[2]=e[2]+e[2]*i,this._mbs[3]=e[3]+e[3]*this._totalOffset/r,this._mbs}applyToObb(e){const r=e.center,i=this._totalOffset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);this._obb.center[0]=r[0]+r[0]*i,this._obb.center[1]=r[1]+r[1]*i,this._obb.center[2]=r[2]+r[2]*i,fr(this._obb.halfSize,e.halfSize,e.quaternion),ee(this._obb.halfSize,this._obb.halfSize,e.center);const s=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*s,this._obb.halfSize[1]+=this._obb.halfSize[1]*s,this._obb.halfSize[2]+=this._obb.halfSize[2]*s,Qt(this._obb.halfSize,this._obb.halfSize,e.center),Ds(Br,e.quaternion),fr(this._obb.halfSize,this._obb.halfSize,Br),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}let Vn=class{constructor(e=0){this.offset=e,this.sphere=ti(),this.tmpVertex=I()}applyToVertex(e,r,i){const s=this.objectTransform.transform;let a=s[0]*e+s[4]*r+s[8]*i+s[12],n=s[1]*e+s[5]*r+s[9]*i+s[13],o=s[2]*e+s[6]*r+s[10]*i+s[14];const c=this.offset/Math.sqrt(a*a+n*n+o*o);a+=a*c,n+=n*c,o+=o*c;const l=this.objectTransform.inverse;return this.tmpVertex[0]=l[0]*a+l[4]*n+l[8]*o+l[12],this.tmpVertex[1]=l[1]*a+l[5]*n+l[9]*o+l[13],this.tmpVertex[2]=l[2]*a+l[6]*n+l[10]*o+l[14],this.tmpVertex}applyToMinMax(e,r){const i=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*i,e[1]+=e[1]*i,e[2]+=e[2]*i;const s=this.offset/Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]);r[0]+=r[0]*s,r[1]+=r[1]*s,r[2]+=r[2]*s}applyToAabb(e){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*i,e[4]+=e[4]*i,e[5]+=e[5]*i,e}applyToBoundingSphere(e){const r=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),i=this.offset/r;return this.sphere[0]=e[0]+e[0]*i,this.sphere[1]=e[1]+e[1]*i,this.sphere[2]=e[2]+e[2]*i,this.sphere[3]=e[3]+e[3]*this.offset/r,this.sphere}};const Dr=new Vn;function Fc(t){return t!=null?(Dr.offset=t,Dr):null}new Gn;const Br=Bs();function Un(t,e){switch(e.normalType){case re.Compressed:t.attributes.add(d.NORMALCOMPRESSED,"vec2"),t.vertex.code.add(u`vec3 normalModel() {
float z = 1.0 - abs(normalCompressed.x) - abs(normalCompressed.y);
return vec3(normalCompressed + sign(normalCompressed) * min(z, 0.0), z);
}`);break;case re.Attribute:t.attributes.add(d.NORMAL,"vec3"),t.vertex.code.add(u`vec3 normalModel() {
return normal;
}`);break;case re.ScreenDerivative:t.fragment.code.add(u`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:Ct(e.normalType);case re.COUNT:case re.Ground:}}var re;(function(t){t[t.Attribute=0]="Attribute",t[t.Compressed=1]="Compressed",t[t.Ground=2]="Ground",t[t.ScreenDerivative=3]="ScreenDerivative",t[t.COUNT=4]="COUNT"})(re||(re={}));function Nc(t,e){switch(e.normalType){case re.Attribute:case re.Compressed:t.include(Un,e),t.varyings.add("vNormalWorld","vec3"),t.varyings.add("vNormalView","vec3"),t.vertex.uniforms.add(new $i("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new nr("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),t.vertex.code.add(u`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case re.Ground:t.include(Ci,e),t.varyings.add("vNormalWorld","vec3"),t.vertex.code.add(u`
        void forwardNormal() {
          vNormalWorld = ${e.spherical?u`normalize(vPositionWorldCameraRelative);`:u`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case re.ScreenDerivative:t.vertex.code.add(u`void forwardNormal() {}`);break;default:Ct(e.normalType);case re.COUNT:}}let Dc=class extends vn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Xe()}},Hc=class extends _n{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Xe(),this.toMapSpace=ft()}};function Hr(t,e,r,i){const s=r.typedBuffer,a=r.typedBufferStride,n=t.length;i*=a;for(let o=0;o<n;++o){const c=2*t[o];s[i]=e[c],s[i+1]=e[c+1],i+=a}}function Vi(t,e,r,i,s){const a=r.typedBuffer,n=r.typedBufferStride,o=t.length;if(i*=n,s==null||s===1)for(let c=0;c<o;++c){const l=3*t[c];a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],i+=n}else for(let c=0;c<o;++c){const l=3*t[c];for(let h=0;h<s;++h)a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],i+=n}}function Ui(t,e,r,i,s=1){const a=r.typedBuffer,n=r.typedBufferStride,o=t.length;if(i*=n,s===1)for(let c=0;c<o;++c){const l=4*t[c];a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],a[i+3]=e[l+3],i+=n}else for(let c=0;c<o;++c){const l=4*t[c];for(let h=0;h<s;++h)a[i]=e[l],a[i+1]=e[l+1],a[i+2]=e[l+2],a[i+3]=e[l+3],i+=n}}function Vc(t,e,r){const i=t.typedBuffer,s=t.typedBufferStride;e*=s;for(let a=0;a<r;++a)i[e]=0,i[e+1]=0,i[e+2]=0,i[e+3]=0,e+=s}function jn(t,e,r,i,s,a=1){if(!r)return void Vi(t,e,i,s,a);const n=i.typedBuffer,o=i.typedBufferStride,c=t.length,l=r[0],h=r[1],f=r[2],m=r[4],p=r[5],g=r[6],_=r[8],x=r[9],E=r[10],B=r[12],R=r[13],y=r[14];s*=o;let z=0,T=0,S=0;const O=Jr(r)?b=>{z=e[b]+B,T=e[b+1]+R,S=e[b+2]+y}:b=>{const v=e[b],w=e[b+1],A=e[b+2];z=l*v+m*w+_*A+B,T=h*v+p*w+x*A+R,S=f*v+g*w+E*A+y};if(a===1)for(let b=0;b<c;++b)O(3*t[b]),n[s]=z,n[s+1]=T,n[s+2]=S,s+=o;else for(let b=0;b<c;++b){O(3*t[b]);for(let v=0;v<a;++v)n[s]=z,n[s+1]=T,n[s+2]=S,s+=o}}function Wn(t,e,r,i,s,a=1){if(!r)return void Vi(t,e,i,s,a);const n=r,o=i.typedBuffer,c=i.typedBufferStride,l=t.length,h=n[0],f=n[1],m=n[2],p=n[4],g=n[5],_=n[6],x=n[8],E=n[9],B=n[10],R=!Zr(n),y=1e-6,z=1-y;s*=c;let T=0,S=0,O=0;const b=Jr(n)?v=>{T=e[v],S=e[v+1],O=e[v+2]}:v=>{const w=e[v],A=e[v+1],L=e[v+2];T=h*w+p*A+x*L,S=f*w+g*A+E*L,O=m*w+_*A+B*L};if(a===1)if(R)for(let v=0;v<l;++v){b(3*t[v]);const w=T*T+S*S+O*O;if(w<z&&w>y){const A=1/Math.sqrt(w);o[s]=T*A,o[s+1]=S*A,o[s+2]=O*A}else o[s]=T,o[s+1]=S,o[s+2]=O;s+=c}else for(let v=0;v<l;++v)b(3*t[v]),o[s]=T,o[s+1]=S,o[s+2]=O,s+=c;else for(let v=0;v<l;++v){if(b(3*t[v]),R){const w=T*T+S*S+O*O;if(w<z&&w>y){const A=1/Math.sqrt(w);T*=A,S*=A,O*=A}}for(let w=0;w<a;++w)o[s]=T,o[s+1]=S,o[s+2]=O,s+=c}}function qn(t,e,r,i,s,a=1){if(!r)return void Ui(t,e,i,s,a);const n=r,o=i.typedBuffer,c=i.typedBufferStride,l=t.length,h=n[0],f=n[1],m=n[2],p=n[4],g=n[5],_=n[6],x=n[8],E=n[9],B=n[10],R=!Zr(n),y=1e-6,z=1-y;if(s*=c,a===1)for(let T=0;T<l;++T){const S=4*t[T],O=e[S],b=e[S+1],v=e[S+2],w=e[S+3];let A=h*O+p*b+x*v,L=f*O+g*b+E*v,V=m*O+_*b+B*v;if(R){const H=A*A+L*L+V*V;if(H<z&&H>y){const W=1/Math.sqrt(H);A*=W,L*=W,V*=W}}o[s]=A,o[s+1]=L,o[s+2]=V,o[s+3]=w,s+=c}else for(let T=0;T<l;++T){const S=4*t[T],O=e[S],b=e[S+1],v=e[S+2],w=e[S+3];let A=h*O+p*b+x*v,L=f*O+g*b+E*v,V=m*O+_*b+B*v;if(R){const H=A*A+L*L+V*V;if(H<z&&H>y){const W=1/Math.sqrt(H);A*=W,L*=W,V*=W}}for(let H=0;H<a;++H)o[s]=A,o[s+1]=L,o[s+2]=V,o[s+3]=w,s+=c}}function kn(t,e,r,i,s,a=1){const n=i.typedBuffer,o=i.typedBufferStride,c=t.length;if(s*=o,r!==e.length||r!==4)if(a!==1)if(r!==4)for(let l=0;l<c;++l){const h=3*t[l];for(let f=0;f<a;++f)n[s]=e[h],n[s+1]=e[h+1],n[s+2]=e[h+2],n[s+3]=255,s+=o}else for(let l=0;l<c;++l){const h=4*t[l];for(let f=0;f<a;++f)n[s]=e[h],n[s+1]=e[h+1],n[s+2]=e[h+2],n[s+3]=e[h+3],s+=o}else{if(r===4){for(let l=0;l<c;++l){const h=4*t[l];n[s]=e[h],n[s+1]=e[h+1],n[s+2]=e[h+2],n[s+3]=e[h+3],s+=o}return}for(let l=0;l<c;++l){const h=3*t[l];n[s]=e[h],n[s+1]=e[h+1],n[s+2]=e[h+2],n[s+3]=255,s+=o}}else{n[s]=e[0],n[s+1]=e[1],n[s+2]=e[2],n[s+3]=e[3];const l=new Uint32Array(i.typedBuffer.buffer,i.start),h=o/4,f=l[s/=4];s+=h;const m=c*a;for(let p=1;p<m;++p)l[s]=f,s+=h}}function Yn(t,e,r,i){const s=r.typedBuffer,a=r.typedBufferStride,n=t.length,o=e[0];i*=a;for(let c=0;c<n;++c)s[i]=o,i+=a}function Xn(t,e,r,i,s=1){const a=e.typedBuffer,n=e.typedBufferStride;if(i*=n,s===1)for(let o=0;o<r;++o)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n;else for(let o=0;o<r;++o)for(let c=0;c<s;++c)a[i]=t[0],a[i+1]=t[1],a[i+2]=t[2],a[i+3]=t[3],i+=n}function Jn(t,e,r,i,s,a){for(const n of e.fields.keys()){const o=t.vertexAttributes.get(n),c=t.indices.get(n);if(o&&c)Zn(n,o,c,r,i,s,a);else if(n===d.OBJECTANDLAYERIDCOLOR&&t.objectAndLayerIdColor!=null){const l=t.indices.get(d.POSITION);if(P(!!l,`No buffer view for ${n}`),l){const h=l.length,f=s.getField(n,ri);Xn(t.objectAndLayerIdColor,f,h,a)}}}}function Zn(t,e,r,i,s,a,n){switch(t){case d.POSITION:{P(e.size===3);const o=a.getField(t,xr);P(!!o,`No buffer view for ${t}`),o&&jn(r,e.data,i,o,n);break}case d.NORMAL:{P(e.size===3);const o=a.getField(t,xr);P(!!o,`No buffer view for ${t}`),o&&Wn(r,e.data,s,o,n);break}case d.NORMALCOMPRESSED:{P(e.size===2);const o=a.getField(t,Us);P(!!o,`No buffer view for ${t}`),o&&Hr(r,e.data,o,n);break}case d.UV0:{P(e.size===2);const o=a.getField(t,Vs);P(!!o,`No buffer view for ${t}`),o&&Hr(r,e.data,o,n);break}case d.COLOR:case d.SYMBOLCOLOR:{const o=a.getField(t,ri);P(!!o,`No buffer view for ${t}`),P(e.size===3||e.size===4),!o||e.size!==3&&e.size!==4||kn(r,e.data,e.size,o,n);break}case d.COLORFEATUREATTRIBUTE:{const o=a.getField(t,Gs);P(!!o,`No buffer view for ${t}`),P(e.size===1),o&&e.size===1&&Yn(r,e.data,o,n);break}case d.TANGENT:{P(e.size===4);const o=a.getField(t,_r);P(!!o,`No buffer view for ${t}`),o&&qn(r,e.data,s,o,n);break}case d.PROFILERIGHT:case d.PROFILEUP:case d.PROFILEVERTEXANDNORMAL:case d.FEATUREVALUE:{P(e.size===4);const o=a.getField(t,_r);P(!!o,`No buffer view for ${t}`),o&&Ui(r,e.data,o,n)}}}let Uc=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.indices.get(d.POSITION).length}write(e,r,i,s,a){Jn(i,this.vertexBufferLayout,e,r,s,a)}};var ie;function Kn(t,e){switch(e.textureCoordinateType){case ie.Default:return t.attributes.add(d.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(u`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case ie.Compressed:return t.attributes.add(d.UV0,"vec2"),t.varyings.add("vuv0","vec2"),void t.vertex.code.add(u`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case ie.Atlas:return t.attributes.add(d.UV0,"vec2"),t.varyings.add("vuv0","vec2"),t.attributes.add(d.UVREGION,"vec4"),t.varyings.add("vuvRegion","vec4"),void t.vertex.code.add(u`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:Ct(e.textureCoordinateType);case ie.None:return void t.vertex.code.add(u`void forwardTextureCoordinates() {}`);case ie.COUNT:return}}(function(t){t[t.None=0]="None",t[t.Default=1]="Default",t[t.Atlas=2]="Atlas",t[t.Compressed=3]="Compressed",t[t.COUNT=4]="COUNT"})(ie||(ie={}));function Qn(t){t.fragment.code.add(u`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function eo(t,e){switch(t.include(Kn,e),e.textureCoordinateType){case ie.Default:case ie.Compressed:return void t.fragment.code.add(u`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case ie.Atlas:return t.include(Qn),void t.fragment.code.add(u`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:Ct(e.textureCoordinateType);case ie.None:case ie.COUNT:return}}let It=class extends j{constructor(e,r){super(e,"sampler2D",M.Draw,(i,s,a)=>i.bindTexture(e,r(s,a)))}},qc=class extends tn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,r=>this._texture=r),this._acquire(e.normalTextureId,r=>this._textureNormal=r),this._acquire(e.emissiveTextureId,r=>this._textureEmissive=r),this._acquire(e.occlusionTextureId,r=>this._textureOcclusion=r),this._acquire(e.metallicRoughnessTextureId,r=>this._textureMetallicRoughness=r)}dispose(){this._texture=Pe(this._texture),this._textureNormal=Pe(this._textureNormal),this._textureEmissive=Pe(this._textureEmissive),this._textureOcclusion=Pe(this._textureOcclusion),this._textureMetallicRoughness=Pe(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return this._numLoading===0?Ut.LOADED:Ut.LOADING}get textureBindParameters(){return new to(this._texture!=null?this._texture.glTexture:null,this._textureNormal!=null?this._textureNormal.glTexture:null,this._textureEmissive!=null?this._textureEmissive.glTexture:null,this._textureOcclusion!=null?this._textureOcclusion.glTexture:null,this._textureMetallicRoughness!=null?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){this._texture!=null&&e===this._texture.id||(this._texture=Pe(this._texture),this._textureId=e,this._acquire(this._textureId,r=>this._texture=r))}_acquire(e,r){if(e==null)return void r(null);const i=this._textureRepository.acquire(e);if(As(i))return++this._numLoading,void i.then(s=>{if(this._disposed)return Pe(s),void r(null);r(s)}).finally(()=>--this._numLoading);r(i)}},to=class extends Re{constructor(e=null,r=null,i=null,s=null,a=null){super(),this.texture=e,this.textureNormal=r,this.textureEmissive=i,this.textureOcclusion=s,this.textureMetallicRoughness=a}};var J;(function(t){t[t.Disabled=0]="Disabled",t[t.Normal=1]="Normal",t[t.Schematic=2]="Schematic",t[t.Water=3]="Water",t[t.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",t[t.Terrain=5]="Terrain",t[t.TerrainWithWater=6]="TerrainWithWater",t[t.COUNT=7]="COUNT"})(J||(J={}));function Xc(t,e){const r=t.fragment,i=e.hasMetallicRoughnessTexture||e.hasEmissionTexture||e.hasOcclusionTexture;if(e.pbrMode===J.Normal&&i&&t.include(eo,e),e.pbrMode!==J.Schematic)if(e.pbrMode!==J.Disabled){if(e.pbrMode===J.Normal){r.code.add(u`vec3 mrr;
vec3 emission;
float occlusion;`);const s=e.pbrTextureBindType;e.hasMetallicRoughnessTexture&&(r.uniforms.add(s===M.Pass?new de("texMetallicRoughness",a=>a.textureMetallicRoughness):new It("texMetallicRoughness",a=>a.textureMetallicRoughness)),r.code.add(u`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),e.hasEmissionTexture&&(r.uniforms.add(s===M.Pass?new de("texEmission",a=>a.textureEmissive):new It("texEmission",a=>a.textureEmissive)),r.code.add(u`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),e.hasOcclusionTexture?(r.uniforms.add(s===M.Pass?new de("texOcclusion",a=>a.textureOcclusion):new It("texOcclusion",a=>a.textureOcclusion)),r.code.add(u`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(u`float getBakedOcclusion() { return 1.0; }`),s===M.Pass?r.uniforms.add(new Y("emissionFactor",a=>a.emissiveFactor),new Y("mrrFactors",a=>a.mrrFactors)):r.uniforms.add(new be("emissionFactor",a=>a.emissiveFactor),new be("mrrFactors",a=>a.mrrFactors)),r.code.add(u`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${e.hasMetallicRoughnessTexture?u`applyMetallnessAndRoughness(${e.hasMetallicRoughnessTextureTransform?u`metallicRoughnessUV`:"vuv0"});`:""}

      ${e.hasEmissionTexture?u`applyEmission(${e.hasEmissiveTextureTransform?u`emissiveUV`:"vuv0"});`:""}

      ${e.hasOcclusionTexture?u`applyOcclusion(${e.hasOcclusionTextureTransform?u`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(u`float getBakedOcclusion() { return 1.0; }`);else r.code.add(u`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}let ro=class extends j{constructor(e,r){super(e,"int",M.Pass,(i,s,a)=>i.setUniform1i(e,r(s,a)))}},io=class extends j{constructor(e,r,i){super(e,"mat4",M.Draw,(s,a,n,o)=>s.setUniformMatrix4fv(e,r(a,n,o)),i)}},so=class extends j{constructor(e,r,i){super(e,"mat4",M.Pass,(s,a,n)=>s.setUniformMatrix4fv(e,r(a,n)),i)}};function Qc(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new so("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),ji(t))}function eu(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new io("shadowMapMatrix",(r,i)=>i.shadowMap.getShadowMapMatrices(r.origin),4)),ji(t))}function ji(t){const e=t.fragment;e.include(ir),e.uniforms.add(new de("shadowMapTex",(r,i)=>i.shadowMap.depthTexture),new ro("numCascades",(r,i)=>i.shadowMap.numCascades),new X("cascadeDistances",(r,i)=>i.shadowMap.cascadeDistances)),e.code.add(u`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + (numCascades == 1 ? 1.0 : 0.5) * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float texSize, sampler2D _depthTex) {
float halfPixelSize = 0.5 / texSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, float(textureSize(shadowMapTex, 0).x), shadowMapTex);
}`)}function tu(t){Pi(t),t.vertex.code.add(u`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),t.vertex.code.add(u`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}const ao=Kr(1,1,0,1),no=Kr(1,0,1,1);function ru(t){t.fragment.uniforms.add(new de("depthTexture",(e,r)=>r.highlightDepthTexture)),t.fragment.constants.add("occludedHighlightFlag","vec4",ao).add("unoccludedHighlightFlag","vec4",no),t.fragment.code.add(u`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}function iu(t,e){const r=t.fragment,i=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;i===0?(r.uniforms.add(new Y("lightingAmbientSH0",(s,a)=>U(Gr,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0]))),r.code.add(u`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===1?(r.uniforms.add(new X("lightingAmbientSH_R",(s,a)=>Z(ge,a.lighting.sh.r[0],a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3])),new X("lightingAmbientSH_G",(s,a)=>Z(ge,a.lighting.sh.g[0],a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3])),new X("lightingAmbientSH_B",(s,a)=>Z(ge,a.lighting.sh.b[0],a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3]))),r.code.add(u`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):i===2&&(r.uniforms.add(new Y("lightingAmbientSH0",(s,a)=>U(Gr,a.lighting.sh.r[0],a.lighting.sh.g[0],a.lighting.sh.b[0])),new X("lightingAmbientSH_R1",(s,a)=>Z(ge,a.lighting.sh.r[1],a.lighting.sh.r[2],a.lighting.sh.r[3],a.lighting.sh.r[4])),new X("lightingAmbientSH_G1",(s,a)=>Z(ge,a.lighting.sh.g[1],a.lighting.sh.g[2],a.lighting.sh.g[3],a.lighting.sh.g[4])),new X("lightingAmbientSH_B1",(s,a)=>Z(ge,a.lighting.sh.b[1],a.lighting.sh.b[2],a.lighting.sh.b[3],a.lighting.sh.b[4])),new X("lightingAmbientSH_R2",(s,a)=>Z(ge,a.lighting.sh.r[5],a.lighting.sh.r[6],a.lighting.sh.r[7],a.lighting.sh.r[8])),new X("lightingAmbientSH_G2",(s,a)=>Z(ge,a.lighting.sh.g[5],a.lighting.sh.g[6],a.lighting.sh.g[7],a.lighting.sh.g[8])),new X("lightingAmbientSH_B2",(s,a)=>Z(ge,a.lighting.sh.b[5],a.lighting.sh.b[6],a.lighting.sh.b[7],a.lighting.sh.b[8]))),r.code.add(u`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==J.Normal&&e.pbrMode!==J.Schematic||r.code.add(u`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Gr=I(),ge=ft();function oo(t){t.uniforms.add(new Y("mainLightDirection",(e,r)=>r.lighting.mainLight.direction))}function lo(t){t.uniforms.add(new Y("mainLightIntensity",(e,r)=>r.lighting.mainLight.intensity))}function su(t){oo(t.fragment),lo(t.fragment),t.fragment.code.add(u`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function co(t){const e=t.fragment.code;e.add(u`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.add(u`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.add(u`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function au(t,e){const r=t.fragment.code;t.include(Di),e.pbrMode!==J.Normal&&e.pbrMode!==J.Schematic&&e.pbrMode!==J.Terrain&&e.pbrMode!==J.TerrainWithWater||(r.add(u`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(u`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),e.pbrMode!==J.Normal&&e.pbrMode!==J.Schematic||(t.include(co),r.add(u`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(u`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(u`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(u`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function nu(t,e){const r=t.fragment.code;t.include(Di),r.add(u`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${e.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(u`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(u`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(u`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(u`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}class ou extends j{constructor(e,r){super(e,"bool",M.Pass,(i,s,a)=>i.setUniform1b(e,r(s,a)))}}let uo=class extends j{constructor(e,r){super(e,"vec2",M.Draw,(i,s,a,n)=>i.setUniform2fv(e,r(s,a,n)))}};const Ht=4;function ho(){const t=new pi,e=t.fragment;t.include(yi);const r=(Ht+1)/2,i=1/(2*r*r);return e.include(sr),e.uniforms.add(new de("depthMap",s=>s.depthTexture),new It("tex",s=>s.colorTexture),new uo("blurSize",s=>s.blurSize),new ut("projScale",(s,a)=>{const n=ys(a.camera.eye,a.camera.center);return n>5e4?Math.max(0,s.projScale-(n-5e4)):s.projScale}),new Se("nearFar",(s,a)=>a.camera.nearFar)),e.code.add(u`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${u.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.code.add(u`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${u.int(Ht)}; r <= ${u.int(Ht)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragColor = vec4(b / w_total);
    }
  `),t}const fo=Object.freeze(Object.defineProperty({__proto__:null,build:ho},Symbol.toStringTag,{value:"Module"}));let Wi=class qi extends ui{initializeProgram(e){return new hi(e.rctx,qi.shader.get().build(),Pt)}initializePipeline(){return Qr({colorWrite:ei})}};Wi.shader=new ci(fo,()=>Xt(()=>import("./SSAOBlur.glsl-777f2203.js"),["assets/SSAOBlur.glsl-777f2203.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css","assets/OrderIndependentTransparency-0ab46cc4.js","assets/enums-b14466b3.js","assets/basicInterfaces-bb952591.js","assets/VertexAttribute-9f2e53ec.js","assets/requestImageUtils-2f3ee55b.js","assets/Texture-31c4f382.js","assets/InterleavedLayout-ddec9a00.js","assets/BufferView-c58f8e7f.js","assets/types-1305598a.js","assets/mat4f64-65d35099.js","assets/Indices-b766e722.js","assets/triangle-0231590c.js","assets/sphere-812d69dd.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-e0d341b8.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/quat-7c737b79.js","assets/vec3f32-ad1dc57f.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-d7a3254f.js"]));const mo="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM",Vr=16;function po(){const t=new pi,e=t.fragment;return t.include(yi),e.include(sr),t.include(Ta),e.uniforms.add(new ut("radius",(r,i)=>or(i.camera))),e.code.add(u`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(u`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new Se("nearFar",(r,i)=>i.camera.nearFar),new de("normalMap",r=>r.normalTexture),new de("depthMap",r=>r.depthTexture),new Se("zScale",(r,i)=>di(i)),new ut("projScale",r=>r.projScale),new de("rnm",r=>r.noiseTexture),new Se("rnmScale",(r,i)=>ke(Ur,i.camera.fullWidth/r.noiseTexture.descriptor.width,i.camera.fullHeight/r.noiseTexture.descriptor.height)),new ut("intensity",r=>r.intensity),new Se("screenSize",(r,i)=>ke(Ur,i.camera.fullWidth,i.camera.fullHeight))),e.code.add(u`
    void main(void) {
      fillSphere();
      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        fragColor = vec4(0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w < 0.5;

      float sum = 0.0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${u.int(Vr)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          if (texture(normalMap, tcTap).w < 0.5) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${u.int(Vr)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      fragColor = vec4(A);
    }
  `),t}function or(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const Ur=Jt(),go=Object.freeze(Object.defineProperty({__proto__:null,build:po,getRadius:or},Symbol.toStringTag,{value:"Module"}));class Lt extends ui{initializeProgram(e){return new hi(e.rctx,Lt.shader.get().build(),Pt)}initializePipeline(){return Qr({colorWrite:ei})}}Lt.shader=new ci(go,()=>Xt(()=>import("./SSAO.glsl-771c8ac4.js"),["assets/SSAO.glsl-771c8ac4.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css","assets/OrderIndependentTransparency-0ab46cc4.js","assets/enums-b14466b3.js","assets/basicInterfaces-bb952591.js","assets/VertexAttribute-9f2e53ec.js","assets/requestImageUtils-2f3ee55b.js","assets/Texture-31c4f382.js","assets/InterleavedLayout-ddec9a00.js","assets/BufferView-c58f8e7f.js","assets/types-1305598a.js","assets/mat4f64-65d35099.js","assets/Indices-b766e722.js","assets/triangle-0231590c.js","assets/sphere-812d69dd.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-e0d341b8.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/quat-7c737b79.js","assets/vec3f32-ad1dc57f.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-d7a3254f.js"]));class vo extends Re{constructor(){super(...arguments),this.projScale=1}}let _o=class extends vo{constructor(){super(...arguments),this.intensity=1}},xo=class extends Re{},To=class extends xo{constructor(){super(...arguments),this.blurSize=Jt()}};const bt=2;class du{constructor(e,r,i,s){this._view=e,this._techniqueRepository=r,this._rctx=i,this._requestRender=s,this._quadVAO=null,this._passParameters=new _o,this._drawParameters=new To}dispose(){this.enabled=!1,this._quadVAO=Be(this._quadVAO)}destroy(){this.dispose()}disposeOffscreenBuffers(){var e,r;(e=this._ssaoFBO)==null||e.resize(0,0),(r=this._blurFBO)==null||r.resize(0,0)}set enabled(e){e?this._enable():this._disable()}get enabled(){return this._enableTime!=null}get active(){return this.enabled&&this._ssaoTechnique.compiled&&this._blurTechnique.compiled}get colorTexture(){var e;return(e=this._ssaoFBO)==null?void 0:e.colorTexture}render(e,r,i,s){if(this._enableTime==null||i==null||s==null||this._ssaoFBO==null||this._blurFBO==null)return;if(!this.active)return this._enableTime=r,void this._requestRender();this._enableTime===0&&(this._enableTime=r);const a=this._rctx,n=e.camera,o=this._view.qualitySettings.fadeDuration,c=o>0?Math.min(o,r-this._enableTime)/o:1;this._passParameters.normalTexture=s,this._passParameters.depthTexture=i,this._passParameters.projScale=1/n.computeRenderPixelSizeAtDist(1),this._passParameters.intensity=4*So/or(n)**6*c;const l=n.fullViewport,h=l[2],f=l[3],m=h/bt,p=f/bt;this._ssaoFBO.resize(h,f),this._blurFBO.resize(m,p),this._quadVAO==null&&(this._quadVAO=Ma(this._rctx)),a.bindFramebuffer(this._ssaoFBO),a.setViewport(0,0,h,f),a.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),a.bindVAO(this._quadVAO);const g=Ps(this._quadVAO,"geometry");a.drawArrays(At.TRIANGLE_STRIP,0,g);const _=a.bindTechnique(this._blurTechnique,this._passParameters,e);a.setViewport(0,0,m,p),a.bindFramebuffer(this._blurFBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,ke(this._drawParameters.blurSize,0,bt/f),_.bindDraw(this._drawParameters,e,this._passParameters),a.setViewport(0,0,m,p),a.drawArrays(At.TRIANGLE_STRIP,0,g),a.bindFramebuffer(this._ssaoFBO),a.setViewport(0,0,h,f),a.setClearColor(1,1,1,0),a.clear(Ms.COLOR_BUFFER_BIT),a.setViewport(0,0,m,p),this._drawParameters.colorTexture=this._blurFBO.colorTexture,ke(this._drawParameters.blurSize,bt/h,0),_.bindDraw(this._drawParameters,e,this._passParameters),a.drawArrays(At.TRIANGLE_STRIP,0,g),a.setViewport(l[0],l[1],l[2],l[3]),c<1&&this._requestRender()}_enable(){if(this._enableTime!=null)return;const e=new er;e.wrapMode=lt.CLAMP_TO_EDGE,this._ssaoFBO=new Tr(this._rctx,e),this._blurFBO=new Tr(this._rctx,e);const r=Uint8Array.from(atob(mo),i=>i.charCodeAt(0));e.pixelFormat=Ne.RGB,e.wrapMode=lt.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new He(this._rctx,e,r),this._ssaoTechnique==null&&(this._ssaoTechnique=this._techniqueRepository.acquire(Lt)),this._blurTechnique==null&&(this._blurTechnique=this._techniqueRepository.acquire(Wi)),this._enableTime=Is(0),this._requestRender()}_disable(){this._enableTime=null,this._passParameters.noiseTexture=Be(this._passParameters.noiseTexture),this._blurFBO=Be(this._blurFBO),this._ssaoFBO=Be(this._ssaoFBO)}get gpuMemoryUsage(){var e,r;return(((e=this._blurFBO)==null?void 0:e.gpuMemoryUsage)??0)+(((r=this._ssaoFBO)==null?void 0:r.gpuMemoryUsage)??0)}}const So=.5;function fu(t,e=!1){return t<=Zt?e?new Array(t).fill(0):new Array(t):new Float32Array(t)}function mu(t){return(Yr(t)?t.length:t.byteLength/8)<=Zt?Array.from(t):new Float32Array(t)}function pu(t,e,r){return Array.isArray(t)?t.slice(e,e+r):t.subarray(e,e+r)}function bo(t){t.vertex.code.add(u`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),t.vertex.code.add(u`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),t.vertex.code.add(u`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),t.vertex.code.add(u`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),t.vertex.code.add(u`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),t.vertex.code.add(u`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),t.vertex.code.add(u`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function gu(t){t.uniforms.add(new X("screenSizePerspective",e=>ki(e.screenSizePerspective)))}function Eo(t){t.uniforms.add(new X("screenSizePerspectiveAlignment",e=>ki(e.screenSizePerspectiveAlignment||e.screenSizePerspective)))}function ki(t){return Z(Ao,t.parameters.divisor,t.parameters.offset,t.parameters.minPixelSize,t.paddingPixelsOverride)}const Ao=ft();function vu(t,e){const r=t.vertex;e.hasVerticalOffset?(Io(r),e.hasScreenSizePerspective&&(t.include(bo),Eo(r),Rn(t.vertex,e)),r.code.add(u`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${e.spherical?u`vec3 worldNormal = normalize(worldPos + localOrigin);`:u`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${e.hasScreenSizePerspective?u`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:u`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(u`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const yo=ft();function Io(t){t.uniforms.add(new X("verticalOffset",(e,r)=>{const{minWorldLength:i,maxWorldLength:s,screenLength:a}=e.verticalOffset,n=Math.tan(.5*r.camera.fovY)/(.5*r.camera.fullViewport[3]),o=r.camera.pixelRatio||1;return Z(yo,a*o,n,i,s)}))}function _u(t,e){e.hasVertexColors?(t.attributes.add(d.COLOR,"vec4"),t.varyings.add("vColor","vec4"),t.vertex.code.add(u`void forwardVertexColor() { vColor = color; }`),t.vertex.code.add(u`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):t.vertex.code.add(u`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}export{Y as $,xn as A,ie as B,eo as C,M as D,It as E,Hn as F,J as G,au as H,iu as I,Di as J,oo as K,lo as L,su as M,ou as N,bt as O,Sl as P,gc as Q,pi as R,pn as S,vu as T,Rn as U,ec as V,_u as W,X,Qc as Y,eu as Z,hc as _,gn as a,yl as a$,Xc as a0,Hc as a1,Dc as a2,mc as a3,wt as a4,ci as a5,ui as a6,hi as a7,Pt as a8,xc as a9,jn as aA,tr as aB,qs as aC,ks as aD,Ys as aE,k as aF,yn as aG,ir as aH,uc as aI,zr as aJ,Pi as aK,_c as aL,Ac as aM,Tc as aN,Ec as aO,vc as aP,Yl as aQ,Wa as aR,$c as aS,dc as aT,Cc as aU,j as aV,nu as aW,du as aX,gl as aY,On as aZ,qt as a_,bc as aa,Sc as ab,it as ac,Cl as ad,Tl as ae,xl as af,Fc as ag,Ar as ah,Uc as ai,qc as aj,Ol as ak,Jo as al,Ml as am,fu as an,Te as ao,sr as ap,Ta as aq,Se as ar,xa as as,yi as at,Ai as au,Ba as av,Ma as aw,tn as ax,zl as ay,Jn as az,pc as b,Ua as b0,qa as b1,mu as b2,bo as b3,Io as b4,Eo as b5,gu as b6,xi as b7,_l as b8,vl as b9,to as ba,Wn as bb,kn as bc,Ui as bd,Vc as be,Xn as bf,kl as bg,Ul as bh,jl as bi,Wl as bj,Hl as bk,Xo as bl,ql as bm,pu as bn,bi as bo,Dt as bp,An as bq,Na as br,Zn as bs,ho as c,po as d,ro as e,ut as f,ht as g,te as h,nr as i,tu as j,Kn as k,ac as l,or as m,tc as n,be as o,lc as p,ru as q,tt as r,de as s,Va as t,cc as u,Un as v,Nc as w,re as x,nc as y,rc as z};
