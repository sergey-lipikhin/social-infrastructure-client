import{aO as T,aA as k,ag as G,f as D,V as B,l as O,bk as N,E as C,aE as $,aN as F,aW as E,gh as W,gz as A,g7 as H,fY as K,u as v,v as S,w as Y}from"./index-a6c97245.js";import{b as P,g as J,d as Q}from"./kmlUtils-5069629f.js";import{w as X,b as Z,T as tt}from"./Bitmap-72184be9.js";import{a as et}from"./BitmapContainer-0a509f67.js";import{f as it}from"./LayerView2D-66195bd8.js";import{i as M}from"./GraphicContainer-64ab0250.js";import{o as R}from"./GraphicsView2D-59288940.js";import{d as at}from"./LayerView-68cbc071.js";import{C as st,$ as rt}from"./rasterProjectionHelper-24edc81d.js";import{n as ot}from"./WGLContainer-0259ebc3.js";import{P as nt,o as lt}from"./RenderingContext-583e952e.js";import{D as U,G as ht,U as pt,X as L}from"./enums-b14466b3.js";import{x as mt}from"./VertexArrayObject-d7a3254f.js";import{m as ct}from"./rasterUtils-532d2cdf.js";import{e as j,T as dt}from"./Texture-31c4f382.js";import"./Container-d687363b.js";import"./EffectView-b76003f0.js";import"./definitions-93bd9194.js";import"./color-070b46a1.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-7b4806e9.js";import"./FeatureContainer-bace7d73.js";import"./AttributeStoreView-a75a8afe.js";import"./TiledDisplayObject-962ea01b.js";import"./visualVariablesUtils-78808dfe.js";import"./GeometryUtils-19fdb7c0.js";import"./alignmentUtils-ae955d28.js";import"./cimAnalyzer-bcf3cdca.js";import"./fontUtils-543e6eef.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-65793346.js";import"./quantizationUtils-13d96edf.js";import"./floatRGBA-f2fcae6c.js";import"./ExpandedCIM-87f47b3e.js";import"./util-7b977ae4.js";import"./TileContainer-88c4ebf1.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtilsSync-377676c0.js";import"./projectionSupport-862a59d2.js";import"./json-48e3ea08.js";import"./Matcher-d1c53dbe.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-01d55ff3.js";import"./earcut-15ea0d28.js";import"./ComputedAttributeStorage-edb2e1e7.js";import"./arcadeTimeUtils-69f0c442.js";import"./centroid-8e8cfa47.js";import"./vec4f32-0d1b2306.js";import"./ProgramTemplate-bb165b15.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./programUtils-21d4aebf.js";import"./NestedMap-1b5db22e.js";import"./OrderIndependentTransparency-0ab46cc4.js";import"./basicInterfaces-bb952591.js";import"./testSVGPremultipliedAlpha-f5b66613.js";import"./doublePrecisionUtils-e3c3d0d8.js";class p{constructor(t){if(this._ownsRctx=!1,t)this._ownsRctx=!1,this._rctx=t;else{if(p._instance)return p._instanceRefCount++,p._instance;p._instanceRefCount=1,p._instance=this,this._ownsRctx=!0;const e=document.createElement("canvas").getContext("webgl");e.getExtension("OES_texture_float"),this._rctx=new nt(e,{})}const a={applyProjection:!0,bilinear:!1,bicubic:!1},r=lt("raster/reproject","raster/reproject",new Map([["a_position",0]]),a);this._program=this._rctx.programCache.acquire(r.shaders.vertexShader,r.shaders.fragmentShader,r.attributes),this._rctx.useProgram(this._program),this._program.setUniform1f("u_opacity",1),this._program.setUniform1i("u_image",0),this._program.setUniform1i("u_flipY",0),this._program.setUniform1i("u_transformGrid",1),this._quad=new ot(this._rctx,[0,0,1,0,0,1,1,1])}reprojectTexture(t,a,r=!1){const e=T(t.extent,a),s=new k({x:(t.extent.xmax-t.extent.xmin)/t.texture.descriptor.width,y:(t.extent.ymax-t.extent.ymin)/t.texture.descriptor.height,spatialReference:t.extent.spatialReference}),{x:o,y:h}=st(s,a,t.extent);let n=(o+h)/2;const l=Math.round((e.xmax-e.xmin)/n),g=Math.round((e.ymax-e.ymin)/n);n=(e.width/l+e.height/g)/2;const I=new k({x:n,y:n,spatialReference:e.spatialReference}),_=rt({projectedExtent:e,srcBufferExtent:t.extent,pixelSize:I,hasWrapAround:!0,spacing:[16,16]}),w=ct(this._rctx,_),y=new j(l,g);y.wrapMode=U.CLAMP_TO_EDGE;const m=new mt(this._rctx,y);this._rctx.bindFramebuffer(m),this._rctx.setViewport(0,0,l,g),this._rctx.useProgram(this._program),this._rctx.bindTexture(t.texture,0),this._rctx.bindTexture(w,1),this._quad.bind();const{width:x=0,height:f=0}=t.texture.descriptor;if(this._program.setUniform2f("u_srcImageSize",x,f),this._program.setUniform2fv("u_transformSpacing",_.spacing),this._program.setUniform2fv("u_transformGridSize",_.size),this._program.setUniform2f("u_targetImageSize",l,g),this._quad.draw(),this._quad.unbind(),this._rctx.useProgram(null),this._rctx.bindFramebuffer(null),w.dispose(),r){const{width:c,height:V}=m,u=new ImageData(c??0,V??0);m.readPixels(0,0,c??0,V??0,ht.RGBA,pt.UNSIGNED_BYTE,u.data);const z=m.detachColorTexture(L.COLOR_ATTACHMENT0);return m.dispose(),{texture:z,extent:e,imageData:u}}const b=m.detachColorTexture(L.COLOR_ATTACHMENT0);return m.dispose(),{texture:b,extent:e}}reprojectBitmapData(t,a){const r=X(t.bitmapData)?Z(t.bitmapData):t.bitmapData,e=new j;e.wrapMode=U.CLAMP_TO_EDGE,e.width=t.bitmapData.width,e.height=t.bitmapData.height;const s=new dt(this._rctx,e,r),o=this.reprojectTexture({texture:s,extent:t.extent},a,!0);o.texture.dispose();const h=document.createElement("canvas"),n=o.imageData;return h.width=n.width,h.height=n.height,h.getContext("2d").putImageData(n,0,0),{bitmapData:h,extent:o.extent}}async loadAndReprojectBitmapData(t,a,r){const e=(await G(t,{responseType:"image"})).data,s=document.createElement("canvas");s.width=e.width,s.height=e.height;const o=s.getContext("2d");o.drawImage(e,0,0);const h=o.getImageData(0,0,s.width,s.height);if(a.spatialReference.equals(r))return{bitmapData:h,extent:a};const n=this.reprojectBitmapData({bitmapData:h,extent:a},r);return{bitmapData:n.bitmapData,extent:n.extent}}destroy(){this._ownsRctx?(p._instanceRefCount--,p._instanceRefCount===0&&(this._quad.dispose(),this._program.dispose(),this._rctx.dispose(),p._instance=null)):(this._quad.dispose(),this._program.dispose())}}p._instanceRefCount=0;class q{constructor(){this.allSublayers=new Map,this.allPoints=[],this.allPolylines=[],this.allPolygons=[],this.allMapImages=[]}}let d=class extends it(at){constructor(){super(...arguments),this._bitmapIndex=new Map,this._mapImageContainer=new et,this._kmlVisualData=new q,this._fetchController=null,this.allVisiblePoints=new D,this.allVisiblePolylines=new D,this.allVisiblePolygons=new D,this.allVisibleMapImages=new B}async hitTest(i,t){var r,e,s;const a=this.layer;return[(r=this._pointsView)==null?void 0:r.hitTest(i),(e=this._polylinesView)==null?void 0:e.hitTest(i),(s=this._polygonsView)==null?void 0:s.hitTest(i)].flat().filter(Boolean).map(o=>(o.layer=a,o.sourceLayer=a,{type:"graphic",graphic:o,layer:a,mapPoint:i}))}update(i){this._polygonsView&&this._polygonsView.processUpdate(i),this._polylinesView&&this._polylinesView.processUpdate(i),this._pointsView&&this._pointsView.processUpdate(i)}attach(){this._fetchController=new AbortController,this.container.addChild(this._mapImageContainer),this._polygonsView=new R({view:this.view,graphics:this.allVisiblePolygons,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polygonsView.container),this._polylinesView=new R({view:this.view,graphics:this.allVisiblePolylines,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._polylinesView.container),this._pointsView=new R({view:this.view,graphics:this.allVisiblePoints,requestUpdateCallback:()=>this.requestUpdate(),container:new M(this.view.featuresTilingScheme)}),this.container.addChild(this._pointsView.container),this.addAttachHandles([this.allVisibleMapImages.on("change",i=>{i.added.forEach(t=>this._addMapImage(t)),i.removed.forEach(t=>this._removeMapImage(t))}),O(()=>this.layer.visibleSublayers,i=>{for(const[t,a]of this._kmlVisualData.allSublayers)a.visibility=0;for(const t of i){const a=this._kmlVisualData.allSublayers.get(t.id);a&&(a.visibility=1)}this._refreshCollections()})]),this.updatingHandles.addPromise(this._fetchService(this._fetchController.signal)),this._imageReprojector=new p}detach(){this._fetchController=N(this._fetchController),this._mapImageContainer.removeAllChildren(),this.container.removeAllChildren(),this._bitmapIndex.clear(),this._polygonsView=C(this._polygonsView),this._polylinesView=C(this._polylinesView),this._pointsView=C(this._pointsView),this._imageReprojector=C(this._imageReprojector)}moveStart(){}viewChange(){this._polygonsView.viewChange(),this._polylinesView.viewChange(),this._pointsView.viewChange()}moveEnd(){}isUpdating(){return this._pointsView.updating||this._polygonsView.updating||this._polylinesView.updating}_addMapImage(i){var t,a;((t=this.view.spatialReference)!=null&&t.isWGS84||(a=this.view.spatialReference)!=null&&a.isWebMercator)&&this._imageReprojector.loadAndReprojectBitmapData(i.href,$.fromJSON(i.extent),this.view.spatialReference).then(r=>{const e=new tt(r.bitmapData);e.x=r.extent.xmin,e.y=r.extent.ymax,e.resolution=r.extent.width/r.bitmapData.width,e.rotation=i.rotation,this._mapImageContainer.addChild(e),this._bitmapIndex.set(i,e)})}async _getViewDependentUrl(i,t){const{viewFormat:a,viewBoundScale:r,httpQuery:e}=i;if(a!=null){if(t==null)throw new Error("Loading this network link requires a view state.");let s;if(await F(),r!=null&&r!==1){const c=new $(t.extent);c.expand(r),s=c}else s=t.extent;s=T(s,E.WGS84);const o=T(s,E.WebMercator),h=s.xmin,n=s.xmax,l=s.ymin,g=s.ymax,I=t.size[0]*t.pixelRatio,_=t.size[1]*t.pixelRatio,w=Math.max(o.width,o.height),y={"[bboxWest]":h.toString(),"[bboxEast]":n.toString(),"[bboxSouth]":l.toString(),"[bboxNorth]":g.toString(),"[lookatLon]":s.center.x.toString(),"[lookatLat]":s.center.y.toString(),"[lookatRange]":w.toString(),"[lookatTilt]":"0","[lookatHeading]":t.rotation.toString(),"[lookatTerrainLon]":s.center.x.toString(),"[lookatTerrainLat]":s.center.y.toString(),"[lookatTerrainAlt]":"0","[cameraLon]":s.center.x.toString(),"[cameraLat]":s.center.y.toString(),"[cameraAlt]":w.toString(),"[horizFov]":"60","[vertFov]":"60","[horizPixels]":I.toString(),"[vertPixels]":_.toString(),"[terrainEnabled]":"0","[clientVersion]":W,"[kmlVersion]":"2.2","[clientName]":"ArcGIS API for JavaScript","[language]":"en-US"},m=c=>{for(const V in c){let u;for(u in y)c[V]=c[V].replace(u,y[u])}},x=A(a);m(x);let f={};e!=null&&(f=A(e),m(f));const b=H(i.href);return b.query={...b.query,...x,...f},`${b.path}?${K(x)}`}return i.href}async _fetchService(i){const t=new q;await this._loadVisualData(this.layer.url,t,i),this._kmlVisualData=t,this._refreshCollections()}_refreshCollections(){this.allVisiblePoints.removeAll(),this.allVisiblePolylines.removeAll(),this.allVisiblePolygons.removeAll(),this.allVisibleMapImages.removeAll(),this.allVisiblePoints.addMany(this._kmlVisualData.allPoints.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolylines.addMany(this._kmlVisualData.allPolylines.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisiblePolygons.addMany(this._kmlVisualData.allPolygons.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i)),this.allVisibleMapImages.addMany(this._kmlVisualData.allMapImages.filter(i=>this._isSublayerVisible(i.sublayerId)).map(({item:i})=>i))}_isSublayerVisible(i){const t=this._kmlVisualData.allSublayers.get(i);return!!(t!=null&&t.visibility)&&(t.parentFolderId===-1||this._isSublayerVisible(t.parentFolderId))}_loadVisualData(i,t,a){return this._fetchParsedKML(i,a).then(async r=>{for(const e of r.sublayers){t.allSublayers.set(e.id,e);const s=e.points?await P(e.points):[],o=e.polylines?await P(e.polylines):[],h=e.polygons?await P(e.polygons):[],n=e.mapImages||[];if(t.allPoints.push(...s.map(l=>({item:l,sublayerId:e.id}))),t.allPolylines.push(...o.map(l=>({item:l,sublayerId:e.id}))),t.allPolygons.push(...h.map(l=>({item:l,sublayerId:e.id}))),t.allMapImages.push(...n.map(l=>({item:l,sublayerId:e.id}))),e.networkLink){const l=await this._getViewDependentUrl(e.networkLink,this.view.state);await this._loadVisualData(l,t,a)}}})}_fetchParsedKML(i,t){return J(i,this.layer.spatialReference,this.layer.refreshInterval,t).then(a=>Q(a.data))}_removeMapImage(i){const t=this._bitmapIndex.get(i);t&&(this._mapImageContainer.removeChild(t),this._bitmapIndex.delete(i))}};v([S()],d.prototype,"_pointsView",void 0),v([S()],d.prototype,"_polylinesView",void 0),v([S()],d.prototype,"_polygonsView",void 0),v([S()],d.prototype,"updating",void 0),d=v([Y("esri.views.2d.layers.KMLLayerView2D")],d);const be=d;export{be as default};
