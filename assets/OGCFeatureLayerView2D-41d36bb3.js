import{u as t,v as p,w as e}from"./index-a6c97245.js";import a from"./FeatureLayerView2D-1f9f564a.js";import"./EffectView-b76003f0.js";import"./definitions-93bd9194.js";import"./LayerView2D-66195bd8.js";import"./Container-d687363b.js";import"./enums-b14466b3.js";import"./Texture-31c4f382.js";import"./AttributeStoreView-a75a8afe.js";import"./TiledDisplayObject-962ea01b.js";import"./color-070b46a1.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-0259ebc3.js";import"./VertexArrayObject-d7a3254f.js";import"./vec4f32-0d1b2306.js";import"./ProgramTemplate-bb165b15.js";import"./GeometryUtils-19fdb7c0.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-15ea0d28.js";import"./visualVariablesUtils-78808dfe.js";import"./cimAnalyzer-bcf3cdca.js";import"./fontUtils-543e6eef.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-65793346.js";import"./quantizationUtils-13d96edf.js";import"./floatRGBA-f2fcae6c.js";import"./ExpandedCIM-87f47b3e.js";import"./util-7b977ae4.js";import"./BitmapTileContainer-12b86e36.js";import"./Bitmap-72184be9.js";import"./TileContainer-88c4ebf1.js";import"./CircularArray-ef508845.js";import"./BufferPool-17520c3d.js";import"./FeatureContainer-bace7d73.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-5032feb3.js";import"./LayerView-68cbc071.js";import"./RefreshableLayerView-0ede27ef.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const _=o;export{_ as default};