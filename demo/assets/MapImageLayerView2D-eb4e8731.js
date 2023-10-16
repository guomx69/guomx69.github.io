import{ap as o,aq as a,bB as g,at as m,bU as l,bm as d,b3 as u,T as c,z as y}from"./index-646a7cf7.js";import{a as f}from"./BitmapContainer-331e5eee.js";import{f as x,d as w}from"./LayerView-2b126957.js";import{o as v}from"./GraphicsView2D-87f823f5.js";import{n as _}from"./HighlightGraphicContainer-8052194c.js";import{v as H}from"./ExportStrategy-18708141.js";import{a as I}from"./RefreshableLayerView-c6e1df02.js";import{U as b,r as U}from"./drapedUtils-bdceb89f.js";import"./WGLContainer-d2730c65.js";import"./definitions-c33d924c.js";import"./VertexArrayObject-553339a1.js";import"./Texture-8e0a0fd4.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-412643b9.js";import"./enums-55085e26.js";import"./number-e491b09e.js";import"./ProgramTemplate-4db56880.js";import"./GeometryUtils-0f44b7c3.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./Container-a5fb7677.js";import"./EffectView-edf43b82.js";import"./earcut-626bfe99.js";import"./cimAnalyzer-19dae0aa.js";import"./fontUtils-7e6ef232.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./utils-78b784da.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-d80336d0.js";import"./floatRGBA-d6ce4858.js";import"./normalizeUtilsSync-5606d391.js";import"./projectionSupport-8e38e8b0.js";import"./json-48e3ea08.js";import"./AttributeStoreView-8d419fe1.js";import"./TiledDisplayObject-6b6b29b3.js";import"./visualVariablesUtils-c34611a9.js";import"./ExpandedCIM-b55b30d9.js";import"./clusterUtils-440b10b0.js";import"./util-e715e94a.js";import"./Matcher-332ccf7b.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-17a7e2f7.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-270be81a.js";import"./ComputedAttributeStorage-ca2831c8.js";import"./arcadeTimeUtils-96d50c32.js";import"./executionError-c92d3b85.js";import"./BaseGraphicContainer-659236a0.js";import"./FeatureContainer-8bb6067b.js";import"./TileContainer-0671e700.js";import"./vec3f32-ad1dc57f.js";import"./Bitmap-344fb3ff.js";import"./popupUtils-bd866d38.js";const V=t=>{let e=class extends t{initialize(){this.exportImageParameters=new l({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){var i;return((i=this.view)==null?void 0:i.floors)??null}get exportImageVersion(){var i;return(i=this.exportImageParameters)==null||i.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}canResume(){var i;return!!super.canResume()&&!((i=this.timeExtent)!=null&&i.isEmpty)}};return o([a()],e.prototype,"exportImageParameters",void 0),o([a({readOnly:!0})],e.prototype,"floors",null),o([a({readOnly:!0})],e.prototype,"exportImageVersion",null),o([a()],e.prototype,"layer",void 0),o([a()],e.prototype,"suspended",void 0),o([a(g)],e.prototype,"timeExtent",void 0),e=o([m("esri.views.layers.MapImageLayerView")],e),e};let s=class extends V(I(x(w))){constructor(){super(...arguments),this._highlightGraphics=new d,this._updateHash=""}fetchPopupFeatures(t,e){return this._popupHighlightHelper.fetchPopupFeatures(t,e)}update(t){const e=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==e&&(this._updateHash=e,this.strategy.update(t).catch(r=>{u(r)||c.getLogger(this).error(r)}),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:e,version:r}=this.layer,i=r>=10.3,n=r>=10;this._bitmapContainer=new f,this.container.addChild(this._bitmapContainer),this._highlightView=new v({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new _(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new b({createFetchPopupFeaturesQueryGeometry:(p,h)=>U(p,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(p,h)=>{this._highlightView.graphicUpdateHandler({graphic:p,property:h})},layerView:this,updatingHandles:this.updatingHandles}),this.strategy=new H({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:e,imageRotationSupported:i,imageNormalizationSupported:n,hidpi:!0}),this.addAttachHandles(y(()=>this.exportImageVersion,()=>this.requestUpdate())),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,r,i){return this.layer.fetchImage(t,e,r,{timeExtent:this.timeExtent,floors:this.floors,...i})}fetchImageBitmap(t,e,r,i){return this.layer.fetchImageBitmap(t,e,r,{timeExtent:this.timeExtent,floors:this.floors,...i})}highlight(t){return this._popupHighlightHelper.highlight(t)}};o([a()],s.prototype,"strategy",void 0),o([a()],s.prototype,"updating",void 0),s=o([m("esri.views.2d.layers.MapImageLayerView2D")],s);const Ct=s;export{Ct as default};
