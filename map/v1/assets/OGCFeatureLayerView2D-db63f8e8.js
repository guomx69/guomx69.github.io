import{aw as t,ax as p,ay as e}from"./index-d4439fba.js";import a from"./FeatureLayerView2D-78588cbe.js";import"./EffectView-1ebf3123.js";import"./definitions-74ad6ac7.js";import"./LayerView-f3936c89.js";import"./Container-6e479c6e.js";import"./enums-b14466b3.js";import"./Texture-0cb1f60b.js";import"./AttributeStoreView-61b17f15.js";import"./TiledDisplayObject-3d778797.js";import"./color-9dbb79eb.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-383a9410.js";import"./VertexArrayObject-42a98d28.js";import"./ProgramTemplate-f2a4c3cb.js";import"./GeometryUtils-3c96c3cc.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-3cf5ced9.js";import"./visualVariablesUtils-5bd1b0d1.js";import"./cimAnalyzer-228b82f1.js";import"./fontUtils-dfb0dc71.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-b079a230.js";import"./floatRGBA-78333eeb.js";import"./ExpandedCIM-5eb8fb15.js";import"./util-2bc45a5e.js";import"./BitmapTileContainer-0630ee63.js";import"./Bitmap-9b0ed363.js";import"./TileContainer-7273c9d9.js";import"./CircularArray-ef508845.js";import"./BufferPool-82682218.js";import"./FeatureContainer-b0866c89.js";import"./popupUtils-dc914887.js";import"./RefreshableLayerView-16d7b284.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const U=o;export{U as default};