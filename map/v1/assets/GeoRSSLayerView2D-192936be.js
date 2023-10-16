import{z as l,B as h,bs as g,V as w,bt as f,bu as d,bv as n,ap as u,at as b}from"./index-863b69c4.js";import{f as V,d as S}from"./LayerView-d9926869.js";import{i as _}from"./GraphicContainer-36a859bb.js";import{o as T}from"./GraphicsView2D-bb4b0b81.js";import"./Container-87057bfb.js";import"./EffectView-2bf50287.js";import"./definitions-f332f039.js";import"./enums-b14466b3.js";import"./Texture-63b3aabe.js";import"./color-be4f2780.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-d964ccc0.js";import"./FeatureContainer-0797e5ca.js";import"./AttributeStoreView-5bf1a6aa.js";import"./TiledDisplayObject-293d87cb.js";import"./WGLContainer-5571db45.js";import"./VertexArrayObject-24ab20c3.js";import"./ProgramTemplate-0a4e2d7e.js";import"./GeometryUtils-2f658116.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-a5f3f929.js";import"./visualVariablesUtils-70e6ffd5.js";import"./cimAnalyzer-030fc793.js";import"./fontUtils-9e27d131.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./utils-a792838f.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-2203dc6a.js";import"./floatRGBA-77322fb5.js";import"./ExpandedCIM-0d72801c.js";import"./clusterUtils-47a45850.js";import"./util-1bf4e25a.js";import"./TileContainer-37501404.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtilsSync-7641ea25.js";import"./projectionSupport-036a685b.js";import"./json-48e3ea08.js";import"./Matcher-a4ad98aa.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-12a20174.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-ff967ee7.js";import"./ComputedAttributeStorage-577f0f48.js";import"./arcadeTimeUtils-db1d2842.js";import"./executionError-c92d3b85.js";let y=class extends V(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(t,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(e=>{const i=this._popupTemplates.get(e),s=e.hitTest(t);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=i;return s}).flat().map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:t}))}update(t){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(t)}attach(){this.addAttachHandles([l(()=>{var t;return(t=this.layer)==null?void 0:t.featureCollections},t=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of t){const i=g.fromJSON(o),s=new w(i.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[i.geometryType]=m,this._popupTemplates.set(m,c),i.geometryType!=="polygon"||this.layer.polygonSymbol?i.geometryType!=="polyline"||this.layer.lineSymbol?i.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.polygonSymbol},t=>{this._graphicsViewMap.polygon.renderer=new n({symbol:t})},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.lineSymbol},t=>{this._graphicsViewMap.polyline.renderer=new n({symbol:t})},h),l(()=>{var t;return(t=this.layer)==null?void 0:t.pointSymbol},t=>{this._graphicsViewMap.point.renderer=new n({symbol:t})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const t of this.graphicsViews)t.viewChange()}_clear(){this.container.removeAllChildren();for(const t of this.graphicsViews)t.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vt=y;export{Vt as default};