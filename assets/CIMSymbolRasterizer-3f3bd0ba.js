import{eJ as U,bi as j,eK as K,eL as p,N as F,eA as A,eM as Q,ag as V,ct as q,eN as B,eO as X}from"./index-a6c97245.js";import{r as Z,n as $,i as Y,e as ee,G as te,V as ae,Q as ie}from"./cimAnalyzer-bcf3cdca.js";import{h as re}from"./CIMResourceManager-24be3cf1.js";import{c as se}from"./Rasterizer-0ccaf640.js";import"./fontUtils-543e6eef.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./alignmentUtils-ae955d28.js";import"./definitions-93bd9194.js";import"./number-e491b09e.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-65793346.js";import"./quantizationUtils-13d96edf.js";import"./floatRGBA-f2fcae6c.js";import"./imageutils-fc337d4e.js";import"./rasterizingUtils-4607c15e.js";var J;(function(w){w.Legend="legend",w.Preview="preview"})(J||(J={}));const T=w=>w&&w.scaleFactor?w.scaleFactor:1,oe=96/72;class xe{constructor(t,e){this._spatialReference=t,this._avoidSDF=e,this._resourceCache=new Map,this._imageDataCanvas=null,this._pictureMarkerCache=new Map,this._textRasterizer=new Z,this._cimResourceManager=new re,this._rasterizer=new se(this._cimResourceManager)}get resourceManager(){return this._cimResourceManager}async rasterizeCIMSymbolAsync(t,e,o,i,a,s,c,r){if(!t)return null;const{data:g}=t;if(!g||g.type!=="CIMSymbolReference"||!g.symbol)return null;const{symbol:y}=g;s||(s=U(y));const f=await $.resolveSymbolOverrides(g,e,this._spatialReference,a,s,c,r);this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const m=this._imageDataCanvas,l=this._cimResourceManager,d=[];Y.fetchResources(f,l,d),Y.fetchFonts(f,l,d),d.length>0&&await Promise.all(d);const{width:h,height:u}=o,z=ne(s,h,u,i),n=Y.getEnvelope(f,z,l);if(!n)return null;const P=(window.devicePixelRatio||1)*oe;let C=1,D=0,v=0;switch(y.type){case"CIMPointSymbol":case"CIMTextSymbol":{let R=1;n.width>h&&(R=h/n.width);let S=1;n.height>u&&(S=u/n.height),i==="preview"&&(n.width<h&&(R=h/n.width),n.height<u&&(S=u/n.height)),C=Math.min(R,S),D=n.x+n.width/2,v=n.y+n.height/2}break;case"CIMLineSymbol":{let R=1;n.height>u&&(R=u/n.height),C=R,v=n.y+n.height/2;const S=n.x*C+h/2,M=(n.x+n.width)*C+h/2;if(S<0){const{paths:b}=z;b[0][0][0]-=S}if(M>h){const{paths:b}=z;b[0][2][0]-=M-h}}break;case"CIMPolygonSymbol":{D=n.x+n.width/2,v=n.y+n.height/2;const R=n.x*C+h/2,S=(n.x+n.width)*C+h/2,M=n.y*C+u/2,b=(n.y+n.height)*C+u/2,{rings:k}=z;R<0&&(k[0][0][0]-=R,k[0][3][0]-=R,k[0][4][0]-=R),M<0&&(k[0][0][1]+=M,k[0][1][1]+=M,k[0][4][1]+=M),S>h&&(k[0][1][0]-=S-h,k[0][2][0]-=S-h),b>u&&(k[0][2][1]+=b-u,k[0][3][1]+=b-u)}}m.width=h*P,m.height=u*P;const _=1;m.width+=2*_,m.height+=2*_;const x=m.getContext("2d"),I=ie.createIdentity();return I.translate(-D,-v),I.scale(C*P,-C*P),I.translate(h*P/2+_,u*P/2+_),x.clearRect(0,0,m.width,m.height),new ee(x,l,I,!0).drawSymbol(f,z),x.getImageData(0,0,m.width,m.height)}async analyzeCIMSymbol3D(t,e,o,i,a){const s=[],c=e?{geometryType:i,spatialReference:this._spatialReference,fields:e}:null,r=[];Y.fetchFonts(t.data.symbol,this._cimResourceManager,r),await Promise.all(r);const g=new te(this._cimResourceManager,c);let y;await g.analyzeSymbolReference(t.data,this._avoidSDF,s),j(a);for(const f of s)f.cim.type!=="CIMPictureMarker"&&f.cim.type!=="CIMPictureFill"&&f.cim.type!=="CIMPictureStroke"||(y||(y=[]),y.push(this._fetchPictureMarkerResource(f,a))),o&&f.type==="text"&&typeof f.text=="string"&&f.text.includes("[")&&(f.text=K(o,f.text,f.cim.textCase));return y&&await Promise.all(y),s}rasterizeCIMSymbol3D(t,e,o,i,a,s){const c=[];for(const r of t){i&&typeof i.scaleFactor=="function"&&(i.scaleFactor=i.scaleFactor(e,a,s));const g=this._getRasterizedResource(r,e,o,i,a,s);if(!g)continue;let y=0,f=g.anchorX||0,m=g.anchorY||0,l=!1,d=0,h=0;if(o==="esriGeometryPoint"){const u=T(i);if(d=p(r.offsetX,e,a,s)*u||0,h=p(r.offsetY,e,a,s)*u||0,r.type==="marker")y=p(r.rotation,e,a,s)||0,l=r.rotateClockwise??!1;else if(r.type==="text"){if(y=p(r.angle,e,a,s)||0,r.horizontalAlignment!==void 0)switch(r.horizontalAlignment){case"left":f=-.5;break;case"right":f=.5;break;default:f=0}if(r.verticalAlignment!==void 0)switch(r.verticalAlignment){case"top":m=.5;break;case"bottom":m=-.5;break;case"baseline":m=-.25;break;default:m=0}}}g!=null&&c.push({angle:y,rotateClockWise:l,anchorX:f,anchorY:m,offsetX:d,offsetY:h,rasterizedResource:g})}return this.getSymbolImage(c)}getSymbolImage(t){const e=document.createElement("canvas"),o=F(e.getContext("2d"));let i=0,a=0,s=0,c=0;const r=[];for(let m=0;m<t.length;m++){const l=t[m],d=l.rasterizedResource;if(!d)continue;const h=d.size,u=l.offsetX,z=l.offsetY,n=l.anchorX,P=l.anchorY,C=l.rotateClockWise||!1;let D=l.angle,v=A(u)-h[0]*(.5+n),_=A(z)-h[1]*(.5+P),x=v+h[0],I=_+h[1];if(D){C&&(D=-D);const M=Math.sin(D*Math.PI/180),b=Math.cos(D*Math.PI/180),k=v*b-_*M,O=v*M+_*b,L=v*b-I*M,H=v*M+I*b,N=x*b-I*M,E=x*M+I*b,G=x*b-_*M,W=x*M+_*b;v=Math.min(k,L,N,G),_=Math.min(O,H,E,W),x=Math.max(k,L,N,G),I=Math.max(O,H,E,W)}i=v<i?v:i,a=_<a?_:a,s=x>s?x:s,c=I>c?I:c;const R=o.createImageData(d.size[0],d.size[1]);R.data.set(new Uint8ClampedArray(d.image.buffer));const S={offsetX:u,offsetY:z,rotateClockwise:C,angle:D,rasterizedImage:R,anchorX:n,anchorY:P};r.push(S)}e.width=s-i,e.height=c-a;const g=-i,y=c;for(let m=0;m<r.length;m++){const l=r[m],d=this._imageDataToCanvas(l.rasterizedImage),h=l.rasterizedImage.width,u=l.rasterizedImage.height,z=g-h*(.5+l.anchorX),n=y-u*(.5-l.anchorY);if(l.angle){const P=(360-l.angle)*Math.PI/180;o.save(),o.translate(A(l.offsetX),-A(l.offsetY)),o.translate(g,y),o.rotate(P),o.translate(-g,-y),o.drawImage(d,z,n),o.restore()}else o.drawImage(d,z+A(l.offsetX),n-A(l.offsetY))}const f=new Q({x:g/e.width-.5,y:y/e.height-.5});return{imageData:e.width!==0&&e.height!==0?o.getImageData(0,0,e.width,e.height):o.createImageData(1,1),anchorPosition:f}}async _fetchPictureMarkerResource(t,e){const o=t.materialHash;if(!this._pictureMarkerCache.get(o)){const i=(await V(t.cim.url,{responseType:"image",signal:e&&e.signal})).data;this._pictureMarkerCache.set(o,i)}}_imageDataToCanvas(t){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const e=this._imageDataCanvas,o=F(e.getContext("2d"));return e.width=t.width,e.height=t.height,o.putImageData(t,0,0),e}_imageTo32Array(t,e,o,i){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));const a=this._imageDataCanvas,s=F(a.getContext("2d"));if(a.width=e,a.height=o,s.drawImage(t,0,0,e,o),i){s.save();const c=new q(i);s.fillStyle=c.toHex(),s.globalCompositeOperation="multiply",s.fillRect(0,0,e,o),s.globalCompositeOperation="destination-atop",s.drawImage(t,0,0,e,o),s.restore()}return new Uint32Array(s.getImageData(0,0,e,o).data.buffer)}_getRasterizedResource(t,e,o,i,a,s){let c,r,g;if(t.type==="text")return this._rasterizeTextResource(t,e,i,a,s);({analyzedCIM:c,hash:r}=ce(t,e,a,s));const m=T(i);if(t.cim.type==="CIMPictureMarker"){const h=p(t.size,e,a,s)*m,{image:u,width:z,height:n}=F(this._getPictureResource(t,h,p(t.color,e,a,s)));return g={image:u,size:[z,n],sdf:!1,simplePattern:!1,anchorX:t.anchorPoint?t.anchorPoint.x:0,anchorY:t.anchorPoint?t.anchorPoint.y:0},g}B(c,m,{preserveOutlineWidth:!1});const l=c;r+=o,i&&(r+=JSON.stringify(i));const d=this._resourceCache;return d.has(r)?d.get(r):(g=this._rasterizer.rasterizeJSONResource({cim:l,type:t.type,url:t.url,mosaicHash:r,size:null,path:null},window.devicePixelRatio||1,this._avoidSDF),d.set(r,g),g)}_rasterizeTextResource(t,e,o,i,a){var _,x,I;const s=T(o),c=p(t.text,e,i,a);if(!c||c.length===0)return null;const r=t.cim,g=p((r==null?void 0:r.fontFamilyName)||t.fontName,e,i,a),y=p(((_=r==null?void 0:r.font)==null?void 0:_.style)||t.style,e,i,a),f=p(((x=r==null?void 0:r.font)==null?void 0:x.weight)||t.weight,e,i,a),m=p(((I=r==null?void 0:r.font)==null?void 0:I.decoration)||t.decoration,e,i,a),l=p(t.size,e,i,a)*s,d=p(t.horizontalAlignment,e,i,a),h=p(t.verticalAlignment,e,i,a),u=X(p(t.color,e,i,a)),z=X(p(t.outlineColor,e,i,a)),n=p(t.outlineSize,e,i,a),P=t.backgroundColor!=null?X(t.backgroundColor):null,C=t.borderLineColor!=null?X(t.borderLineColor):null,D=t.borderLineWidth!=null?t.borderLineWidth:null,v={color:u,size:l,horizontalAlignment:d,verticalAlignment:h,font:{family:g,style:y,weight:f,decoration:m},halo:{size:n||0,color:z,style:y},backgroundColor:P,borderLine:C!=null&&D!=null?{color:C,size:D}:null,pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(c,v)}_getPictureResource(t,e,o){const i=this._pictureMarkerCache.get(t.materialHash);if(!i)return null;const a=i.height/i.width,s=e?a>1?A(e):A(e)/a:i.width,c=e?a>1?A(e)*a:A(e):i.height;return{image:this._imageTo32Array(i,s,c,o),width:s,height:c}}}function ne(w,t,e,o){const a=-t/2+1,s=t/2-1,c=e/2-1,r=-e/2+1;switch(w){case"esriGeometryPoint":return{x:0,y:0};case"esriGeometryPolyline":return{paths:[[[a,0],[0,0],[s,0]]]};default:return o==="legend"?{rings:[[[a,c],[s,0],[s,r],[a,r],[a,c]]]}:{rings:[[[a,c],[s,c],[s,r],[a,r],[a,c]]]}}}function ce(w,t,e,o){let i,a;return typeof w.materialHash=="function"?(i=(0,w.materialHash)(t,e,o),a=ae(w.cim,w.materialOverrides)):(i=w.materialHash,a=w.cim),{analyzedCIM:a,hash:i}}export{xe as CIMSymbolRasterizer,J as GeometryStyle};
