import{bm as w,bn as y,bo as I,bp as V,z as v,bq as T,b3 as n,br as g,T as q,ap as o,aq as m,at as H}from"./index-646a7cf7.js";import"./Rasterizer-13051754.js";import"./EffectView-edf43b82.js";import"./Container-a5fb7677.js";import"./BufferPool-830d9783.js";import"./color-412643b9.js";import"./WGLContainer-d2730c65.js";import"./enums-b14466b3.js";import"./Texture-8e0a0fd4.js";import"./ProgramTemplate-4db56880.js";import"./definitions-c33d924c.js";import"./GeometryUtils-0f44b7c3.js";import"./VertexArrayObject-553339a1.js";import"./number-e491b09e.js";import"./StyleDefinition-fbc907c2.js";import"./enums-fb086c25.js";import"./MagnifierPrograms-683754be.js";import"./OrderIndependentTransparency-309a1bc3.js";import"./floatRGBA-d6ce4858.js";import"./testSVGPremultipliedAlpha-13823163.js";import{o as b}from"./GraphicsView2D-87f823f5.js";import"./AttributeStoreView-8d419fe1.js";import"./earcut-626bfe99.js";import"./vec3f32-ad1dc57f.js";import{t as U,o as f,n as d}from"./imageUtils-fbe63d09.js";import{f as Q,d as S}from"./LayerView-2b126957.js";import{n as C}from"./HighlightGraphicContainer-8052194c.js";import{a as k}from"./RefreshableLayerView-c6e1df02.js";import{S as F,U as R,r as z}from"./drapedUtils-bdceb89f.js";import"./cimAnalyzer-19dae0aa.js";import"./fontUtils-7e6ef232.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./enums-55085e26.js";import"./utils-78b784da.js";import"./alignmentUtils-ae955d28.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-d80336d0.js";import"./rasterizingUtils-811fd970.js";import"./VertexElementDescriptor-2925c6af.js";import"./config-1337d16e.js";import"./imageutils-8b4bdcb1.js";import"./Matcher-332ccf7b.js";import"./visualVariablesUtils-c34611a9.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-17a7e2f7.js";import"./ExpandedCIM-b55b30d9.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-270be81a.js";import"./CircularArray-ef508845.js";import"./throttle-7bf02de9.js";import"./ComputedAttributeStorage-ca2831c8.js";import"./arcadeTimeUtils-96d50c32.js";import"./executionError-c92d3b85.js";import"./projectionSupport-8e38e8b0.js";import"./json-48e3ea08.js";import"./basicInterfaces-4ab7cc6a.js";import"./normalizeUtilsSync-5606d391.js";import"./TiledDisplayObject-6b6b29b3.js";import"./clusterUtils-440b10b0.js";import"./util-e715e94a.js";import"./BitmapTileContainer-0743d7e2.js";import"./Bitmap-344fb3ff.js";import"./TileContainer-0671e700.js";import"./BaseGraphicContainer-659236a0.js";import"./FeatureContainer-8bb6067b.js";import"./popupUtils-bd866d38.js";const G=[0,0];let s=class extends k(U(Q(S))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new w,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||this.layer.resampling!==!1}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(t){var e;this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume(),(e=this._highlightView)==null||e.processUpdate(t)}attach(){const t="tileServers"in this.layer?this.layer.tileServers:null,e=this.tilemapCache;if(this._tileInfoView=new y(this.layer.tileInfo,this.layer.fullExtent,e==null?void 0:e.effectiveMinLOD,e==null?void 0:e.effectiveMaxLOD),this._fetchQueue=new I({tileInfoView:this._tileInfoView,concurrency:t&&10*t.length||10,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new V({cachePolicy:"keep",resampling:this.resampling,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),F(this,this.layer)){const i=this._highlightView=new b({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new C(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new R({createFetchPopupFeaturesQueryGeometry:(r,h)=>z(r,h,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(r,h)=>{i.graphicUpdateHandler({graphic:r,property:h})},layerView:this,updatingHandles:this.updatingHandles})}this.requestUpdate(),this.addAttachHandles(v(()=>this.resampling,()=>{this.doRefresh()})),super.attach()}detach(){var t;super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),(t=this._popupHighlightHelper)==null||t.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeatures(t,e){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeatures(t,e):[]}highlight(t){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(t):{remove(){}}}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return T((e=this.layer.tileInfo)==null?void 0:e.spatialReference,t)}async doRefresh(){!this.attached||this.updateRequested||this.suspended||(this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._enqueueTileFetch(t)))}isUpdating(){var t;return((t=this._fetchQueue)==null?void 0:t.updating)??!1}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(G,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._enqueueTileFetch(e),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i=this.tilemapCache,{signal:r,resamplingLevel:h=0}=e;if(!i)try{return await this._fetchImage(t,r)}catch(a){if(!n(a)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(h<3){const u=this._tileInfoView.getTileParentId(t.id);if(u){const c=new g(u),_=await this.fetchTile(c,{...e,resamplingLevel:h+1});return d(this._tileInfoView,_,c,t)}}throw a}const p=new g(0,0,0,0);let l;try{if(await i.fetchAvailabilityUpsample(t.level,t.row,t.col,p,{signal:r}),p.level!==t.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);l=await this._fetchImage(p,r)}catch(a){if(n(a))throw a;l=await this._fetchImage(t,r)}return this.resampling?d(this._tileInfoView,l,p,t):l}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.requestRender(),t.once("attach",()=>this.requestUpdate())}catch(e){n(e)||q.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}};o([m()],s.prototype,"_fetchQueue",void 0),o([m()],s.prototype,"resampling",null),o([m()],s.prototype,"tilemapCache",null),s=o([H("esri.views.2d.layers.TileLayerView2D")],s);const Nt=s;export{Nt as default};
