import{z as l,B as h,bk as g,V as w,bl as f,bm as d,bn as n,ah as u,al as b}from"./index-2e5318f2.js";import{f as V,d as S}from"./LayerView-291681c3.js";import{i as _}from"./GraphicContainer-5d2488d2.js";import{o as T}from"./GraphicsView2D-7ebfe447.js";import"./Container-d1d96c5a.js";import"./EffectView-a2790783.js";import"./definitions-b648854a.js";import"./enums-b14466b3.js";import"./Texture-f87342ae.js";import"./color-872b970c.js";import"./enums-55085e26.js";import"./VertexElementDescriptor-2925c6af.js";import"./number-e491b09e.js";import"./BaseGraphicContainer-e070cf5c.js";import"./FeatureContainer-7e14dfbe.js";import"./AttributeStoreView-f979641a.js";import"./TiledDisplayObject-9a5a8aa6.js";import"./WGLContainer-094e8b1d.js";import"./VertexArrayObject-f5600c96.js";import"./ProgramTemplate-35172516.js";import"./GeometryUtils-313eb076.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-9bfd73cf.js";import"./visualVariablesUtils-35152664.js";import"./cimAnalyzer-c31e96af.js";import"./fontUtils-1356fe6e.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./utils-3a6e77c7.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-94927ab6.js";import"./floatRGBA-77089d96.js";import"./ExpandedCIM-d098c35d.js";import"./clusterUtils-f975a0b1.js";import"./util-4851600d.js";import"./TileContainer-915999c5.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtilsSync-29249310.js";import"./projectionSupport-bb505a6b.js";import"./json-48e3ea08.js";import"./Matcher-3461763f.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-7cffdd0a.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-eb2f0e65.js";import"./ComputedAttributeStorage-07e0bdc4.js";import"./arcadeTimeUtils-9e0bbadb.js";import"./executionError-c92d3b85.js";let y=class extends V(S){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(i,r){if(!this.graphicsViews.length)return null;const o=this.layer;return this.graphicsViews.reverse().map(e=>{const t=this._popupTemplates.get(e),s=e.hitTest(i);for(const p of s)p.layer=o,p.sourceLayer=o,p.popupTemplate=t;return s}).flat().map(e=>({type:"graphic",graphic:e,layer:o,mapPoint:i}))}update(i){if(this.graphicsViews)for(const r of this.graphicsViews)r.processUpdate(i)}attach(){this.addAttachHandles([l(()=>{var i;return(i=this.layer)==null?void 0:i.featureCollections},i=>{this._clear();for(const{popupInfo:r,featureSet:o,layerDefinition:e}of i){const t=g.fromJSON(o),s=new w(t.features),p=e.drawingInfo,c=r?f.fromJSON(r):null,a=d(p.renderer),m=new T({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:s,renderer:a,container:new _(this.view.featuresTilingScheme)});this._graphicsViewMap[t.geometryType]=m,this._popupTemplates.set(m,c),t.geometryType!=="polygon"||this.layer.polygonSymbol?t.geometryType!=="polyline"||this.layer.lineSymbol?t.geometryType!=="point"||this.layer.pointSymbol||(this.layer.pointSymbol=a.symbol):this.layer.lineSymbol=a.symbol:this.layer.polygonSymbol=a.symbol,this.graphicsViews.push(m),this.container.addChild(m.container)}},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.polygonSymbol},i=>{this._graphicsViewMap.polygon.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.lineSymbol},i=>{this._graphicsViewMap.polyline.renderer=new n({symbol:i})},h),l(()=>{var i;return(i=this.layer)==null?void 0:i.pointSymbol},i=>{this._graphicsViewMap.point.renderer=new n({symbol:i})},h)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews)i.viewChange()}_clear(){this.container.removeAllChildren();for(const i of this.graphicsViews)i.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};y=u([b("esri.views.2d.layers.GeoRSSLayerView2D")],y);const Vi=y;export{Vi as default};
