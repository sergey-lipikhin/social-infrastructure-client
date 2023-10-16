import{E as p,F as o,V as a,R as g,u as s,v as m,w as l}from"./index-a6c97245.js";import{f as c}from"./LayerView2D-66195bd8.js";import{i as n}from"./GraphicContainer-64ab0250.js";import{o as d}from"./GraphicsView2D-59288940.js";import{d as u}from"./LayerView-68cbc071.js";import"./Container-d687363b.js";import"./EffectView-b76003f0.js";import"./definitions-93bd9194.js";import"./enums-b14466b3.js";import"./Texture-31c4f382.js";import"./color-070b46a1.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-7b4806e9.js";import"./FeatureContainer-bace7d73.js";import"./AttributeStoreView-a75a8afe.js";import"./TiledDisplayObject-962ea01b.js";import"./WGLContainer-0259ebc3.js";import"./VertexArrayObject-d7a3254f.js";import"./vec4f32-0d1b2306.js";import"./ProgramTemplate-bb165b15.js";import"./GeometryUtils-19fdb7c0.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-15ea0d28.js";import"./visualVariablesUtils-78808dfe.js";import"./cimAnalyzer-bcf3cdca.js";import"./fontUtils-543e6eef.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-65793346.js";import"./quantizationUtils-13d96edf.js";import"./floatRGBA-f2fcae6c.js";import"./ExpandedCIM-87f47b3e.js";import"./util-7b977ae4.js";import"./TileContainer-88c4ebf1.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtilsSync-377676c0.js";import"./projectionSupport-862a59d2.js";import"./json-48e3ea08.js";import"./Matcher-d1c53dbe.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-01d55ff3.js";import"./ComputedAttributeStorage-edb2e1e7.js";import"./arcadeTimeUtils-69f0c442.js";import"./centroid-8e8cfa47.js";const w={remove(){},pause(){},resume(){}};let e=class extends c(u){constructor(){super(...arguments),this._highlightIds=new Map}attach(){this.graphicsView=new d({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this.layer.graphics,container:new n(this.view.featuresTilingScheme)}),this._updateHighlight(),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this.layer.on("graphic-update",this.graphicsView.graphicUpdateHandler))}detach(){this.container.removeAllChildren(),this.graphicsView=p(this.graphicsView)}async hitTest(i){return this.graphicsView?this.graphicsView.hitTest(i).map(t=>({type:"graphic",graphic:t,mapPoint:i,layer:this.layer})):null}async fetchPopupFeatures(i){return this.graphicsView?this.graphicsView.hitTest(i).filter(t=>!!t.popupTemplate):[]}queryGraphics(){return Promise.resolve(this.graphicsView.graphics)}update(i){this.graphicsView.processUpdate(i)}moveStart(){}viewChange(){this.graphicsView.viewChange()}moveEnd(){}isUpdating(){return!this.graphicsView||this.graphicsView.updating}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof o?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(h=>h&&h.uid):a.isCollection(i)&&i.length>0&&(t=i.map(h=>h&&h.uid).toArray());const r=t==null?void 0:t.filter(g);return r!=null&&r.length?(this._addHighlight(r),{remove:()=>this._removeHighlight(r)}):w}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t);this._highlightIds.set(t,r+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const r=this._highlightIds.get(t)-1;r===0?this._highlightIds.delete(t):this._highlightIds.set(t,r)}this._updateHighlight()}_updateHighlight(){var i;(i=this.graphicsView)==null||i.setHighlight(Array.from(this._highlightIds.keys()))}};s([m()],e.prototype,"graphicsView",void 0),e=s([l("esri.views.2d.layers.GraphicsLayerView2D")],e);const ci=e;export{ci as default};