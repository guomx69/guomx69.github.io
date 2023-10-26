import{aw as m,ay as d,z as u,B as y,g as h,cf as c}from"./index-a5053c33.js";import b from"./FeatureLayerView2D-626cc669.js";import"./EffectView-9ccd51b6.js";import"./definitions-d1fe318a.js";import"./LayerView-aa463c0e.js";import"./Container-6839def4.js";import"./enums-b14466b3.js";import"./Texture-408d4df9.js";import"./AttributeStoreView-fa6430bb.js";import"./TiledDisplayObject-7ca1f244.js";import"./color-a5649cb2.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./WGLContainer-859715a7.js";import"./VertexArrayObject-26951441.js";import"./ProgramTemplate-6644db4b.js";import"./GeometryUtils-44b09aa6.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-1209bc91.js";import"./visualVariablesUtils-fae0a54c.js";import"./cimAnalyzer-ba8a50b9.js";import"./fontUtils-17915f7f.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-2fb66477.js";import"./floatRGBA-56297d84.js";import"./ExpandedCIM-a31dc40a.js";import"./util-b57aabdf.js";import"./BitmapTileContainer-82a27110.js";import"./Bitmap-b7bf1dbd.js";import"./TileContainer-b8f12fc5.js";import"./CircularArray-ef508845.js";import"./BufferPool-f778bc7f.js";import"./FeatureContainer-cccb18a7.js";import"./popupUtils-d7c5b653.js";import"./RefreshableLayerView-0a66e568.js";function g(i,e){return!i.visible||i.minScale!==0&&e>i.minScale||i.maxScale!==0&&e<i.maxScale}let a=class extends b{initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),y)],"constructor")}isUpdating(){var l;const i=this.layer.sublayers.some(p=>p.renderer!=null),e=this._commandsQueue.updating,s=this._updatingRequiredFieldsPromise!=null,t=!this._proxy||!this._proxy.isReady,r=this._pipelineIsUpdating,o=this.tileRenderer==null||((l=this.tileRenderer)==null?void 0:l.updating),n=i&&(e||s||t||r||o);return h("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}
  -> hasRenderer ${i}
  -> hasPendingCommand ${e}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
  -> updatingTileRenderer ${o}
`),n}_injectOverrides(i){let e=super._injectOverrides(i);const s=this.view.scale,t=this.layer.sublayers.filter(o=>g(o,s)).map(o=>o.subtypeCode);if(!t.length)return e;e=e??new c().toJSON();const r=`NOT ${this.layer.subtypeField} IN (${t.join(",")})`;return e.where=e.where?`(${e.where}) AND (${r})`:r,e}_setLayersForFeature(i){const e=this.layer.fieldsIndex.get(this.layer.subtypeField),s=i.attributes[e.name],t=this.layer.sublayers.find(r=>r.subtypeCode===s);i.layer=i.sourceLayer=t}_createSchemaConfig(){const i={subtypeField:this.layer.subtypeField,sublayers:Array.from(this.layer.sublayers).map(r=>({featureReduction:null,geometryType:this.layer.geometryType,labelingInfo:r.labelingInfo,labelsVisible:r.labelsVisible,renderer:r.renderer,subtypeCode:r.subtypeCode,orderBy:null}))},e=this.layer.sublayers.map(r=>r.subtypeCode).join(","),s=this.layer.sublayers.length?`${this.layer.subtypeField} IN (${e})`:"1=2";let t=this.layer.definitionExpression?this.layer.definitionExpression+" AND ":"";return t+=s,{...super._createSchemaConfig(),...i,definitionExpression:t}}};a=m([d("esri.views.2d.layers.SubtypeGroupLayerView2D")],a);const se=a;export{se as default};