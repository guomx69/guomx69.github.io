import{aw as t,ax as p,ay as e}from"./index-650b4fdd.js";import a from"./FeatureLayerView2D-3c534b4a.js";import"./EffectView-bf3c1891.js";import"./definitions-5e0e38c0.js";import"./LayerView-123af3c3.js";import"./Container-01e66e42.js";import"./enums-b14466b3.js";import"./Texture-f6348ae2.js";import"./AttributeStoreView-4c38e5a7.js";import"./TiledDisplayObject-f3761b81.js";import"./color-1d7e752a.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-a7ca1fab.js";import"./VertexArrayObject-ab47a1d6.js";import"./ProgramTemplate-05235e0a.js";import"./GeometryUtils-efe9597c.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-27ea47a3.js";import"./visualVariablesUtils-860f1be8.js";import"./cimAnalyzer-a75fa5be.js";import"./fontUtils-fc0691f0.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-f146c253.js";import"./floatRGBA-79a9de9b.js";import"./ExpandedCIM-0496b033.js";import"./util-b828dc39.js";import"./BitmapTileContainer-f3d5ae91.js";import"./Bitmap-7fa768bb.js";import"./TileContainer-42268b14.js";import"./CircularArray-ef508845.js";import"./BufferPool-ede83915.js";import"./FeatureContainer-cb4c1483.js";import"./popupUtils-af378d79.js";import"./RefreshableLayerView-d7ad5a62.js";const s=i=>{let r=class extends i{get availableFields(){return this.layer.fieldsIndex.fields.map(m=>m.name)}};return t([p()],r.prototype,"layer",void 0),t([p({readOnly:!0})],r.prototype,"availableFields",null),r=t([e("esri.views.layers.OGCFeatureLayerView")],r),r};let o=class extends s(a){supportsSpatialReference(i){return this.layer.serviceSupportsSpatialReference(i)}};o=t([e("esri.views.2d.layers.OGCFeatureLayerView2D")],o);const U=o;export{U as default};
