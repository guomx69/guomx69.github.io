import{aw as m,ay as d,z as u,B as y,g as h,cr as c}from"./index-cf1f9edc.js";import b from"./FeatureLayerView2D-ad00d5f8.js";import"./EffectView-1f253006.js";import"./definitions-9bd633e4.js";import"./LayerView-de5fc9b1.js";import"./Container-6d7657d3.js";import"./enums-b14466b3.js";import"./Texture-98b2958f.js";import"./AttributeStoreView-7368932e.js";import"./TiledDisplayObject-ce000c2d.js";import"./color-6250d5ce.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-cb5f2066.js";import"./VertexArrayObject-e167aff4.js";import"./ProgramTemplate-7bbdf1d1.js";import"./GeometryUtils-74a0ae91.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-19a5cba4.js";import"./visualVariablesUtils-084bce9d.js";import"./cimAnalyzer-6c67340f.js";import"./fontUtils-e5a6d9a4.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-98deeb3c.js";import"./floatRGBA-6de551b1.js";import"./ExpandedCIM-8988ffb4.js";import"./util-6fd73f41.js";import"./BitmapTileContainer-e283f7dd.js";import"./Bitmap-f1b2cf0b.js";import"./TileContainer-932ca96d.js";import"./CircularArray-ef508845.js";import"./BufferPool-4e7a4bb4.js";import"./FeatureContainer-20504031.js";import"./popupUtils-09881f6b.js";import"./RefreshableLayerView-5611363e.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let a=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var l;const i=this.layer.sublayers.some(p=>p.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((l=this.tileRenderer)==null?void 0:l.updating),n=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),n}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};a=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],a);const se=a;export{se as default};
