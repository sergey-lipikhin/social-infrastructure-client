import{u as t,v as p,w as e}from"./index-fdfa590d.js";import a from"./FeatureLayerView2D-faad0ecb.js";import"./EffectView-88fc1232.js";import"./definitions-b77f917a.js";import"./LayerView2D-b1809504.js";import"./Container-c5aca323.js";import"./enums-b14466b3.js";import"./Texture-49e8f2d7.js";import"./AttributeStoreView-e6e43d4a.js";import"./TiledDisplayObject-bf2313fd.js";import"./color-40238c06.js";import"./enums-f1a6a48a.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-777ff42e.js";import"./VertexArrayObject-e943c837.js";import"./vec4f32-0d1b2306.js";import"./ProgramTemplate-acf57c6e.js";import"./GeometryUtils-a6bf4843.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-6c3a7c54.js";import"./visualVariablesUtils-c057ebbd.js";import"./cimAnalyzer-513e6c62.js";import"./fontUtils-bfde2177.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-21189de1.js";import"./quantizationUtils-1cbccb3f.js";import"./floatRGBA-4b494040.js";import"./ExpandedCIM-49489b60.js";import"./util-1d45df17.js";import"./BitmapTileContainer-37c27a0a.js";import"./Bitmap-2f80cf44.js";import"./TileContainer-58dd9f78.js";import"./CircularArray-ef508845.js";import"./BufferPool-71d7a14e.js";import"./FeatureContainer-8ffad194.js";import"./floorFilterUtils-080a7cd2.js";import"./popupUtils-7d573183.js";import"./LayerView-2d6bbbeb.js";import"./RefreshableLayerView-0f81c99a.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const _=o;export{_ as default};