import{aw as t,ax as p,ay as e}from"./index-cf1f9edc.js";import a from"./FeatureLayerView2D-ad00d5f8.js";import"./EffectView-1f253006.js";import"./definitions-9bd633e4.js";import"./LayerView-de5fc9b1.js";import"./Container-6d7657d3.js";import"./enums-b14466b3.js";import"./Texture-98b2958f.js";import"./AttributeStoreView-7368932e.js";import"./TiledDisplayObject-ce000c2d.js";import"./color-6250d5ce.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-cb5f2066.js";import"./VertexArrayObject-e167aff4.js";import"./ProgramTemplate-7bbdf1d1.js";import"./GeometryUtils-74a0ae91.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-19a5cba4.js";import"./visualVariablesUtils-084bce9d.js";import"./cimAnalyzer-6c67340f.js";import"./fontUtils-e5a6d9a4.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-98deeb3c.js";import"./floatRGBA-6de551b1.js";import"./ExpandedCIM-8988ffb4.js";import"./util-6fd73f41.js";import"./BitmapTileContainer-e283f7dd.js";import"./Bitmap-f1b2cf0b.js";import"./TileContainer-932ca96d.js";import"./CircularArray-ef508845.js";import"./BufferPool-4e7a4bb4.js";import"./FeatureContainer-20504031.js";import"./popupUtils-09881f6b.js";import"./RefreshableLayerView-5611363e.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const U=o;export{U as default};
