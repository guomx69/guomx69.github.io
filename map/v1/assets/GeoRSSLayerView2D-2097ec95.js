import{z as l,B as h,bk as g,V as w,bl as f,bm as d,bn as n,ah as u,al as b}from"./index-edf1cead.js";import{f as V,d as S}from"./LayerView-3e008698.js";import{i as _}from"./GraphicContainer-d37adaa8.js";import{o as T}from"./GraphicsView2D-4936cf93.js";import"./Container-93bc143e.js";import"./EffectView-caaae2d8.js";import"./definitions-4e50b8bb.js";import"./enums-b14466b3.js";import"./Texture-fa872f05.js";import"./color-4180df3d.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-fc34a333.js";import"./FeatureContainer-fa087d0b.js";import"./AttributeStoreView-9715ba03.js";import"./TiledDisplayObject-c6bd6cb6.js";import"./WGLContainer-7b621762.js";import"./VertexArrayObject-4993c7e2.js";import"./ProgramTemplate-b85ac4aa.js";import"./GeometryUtils-87d0ec45.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-c3520e2b.js";import"./visualVariablesUtils-44c6f339.js";import"./cimAnalyzer-a3b0bb67.js";import"./fontUtils-5dd2e502.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./utils-a941d33c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-fe80be7e.js";import"./floatRGBA-2a9b8092.js";import"./ExpandedCIM-2a39fa6f.js";import"./clusterUtils-5ded844a.js";import"./util-421799ed.js";import"./TileContainer-d7453e14.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtilsSync-f11102c4.js";import"./projectionSupport-1a5588c8.js";import"./json-48e3ea08.js";import"./Matcher-867ec160.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-3d6b2927.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-7ce2d52a.js";import"./ComputedAttributeStorage-07dd2af1.js";import"./arcadeTimeUtils-c60ee006.js";import"./executionError-c92d3b85.js";let y=class extends V(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).flat().map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vi=y;export{Vi as default};