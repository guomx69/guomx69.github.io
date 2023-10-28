import{ak as u,V as f,aF as w,z as o,B as p,ar as y,ah as _,al as V}from"./index-edf1cead.js";import{h as v}from"./Container-93bc143e.js";import{r as C}from"./GroupContainer-480a2ac7.js";import{f as H,d as b}from"./LayerView-3e008698.js";import{i as c}from"./GraphicContainer-d37adaa8.js";import{o as g}from"./GraphicsView2D-4936cf93.js";import"./EffectView-caaae2d8.js";import"./definitions-4e50b8bb.js";import"./enums-b14466b3.js";import"./Texture-fa872f05.js";import"./WGLContainer-7b621762.js";import"./VertexArrayObject-4993c7e2.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-4180df3d.js";import"./enums-55085e26.js";import"./number-e491b09e.js";import"./ProgramTemplate-b85ac4aa.js";import"./GeometryUtils-87d0ec45.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./earcut-c3520e2b.js";import"./BaseGraphicContainer-fc34a333.js";import"./FeatureContainer-fa087d0b.js";import"./AttributeStoreView-9715ba03.js";import"./TiledDisplayObject-c6bd6cb6.js";import"./visualVariablesUtils-44c6f339.js";import"./cimAnalyzer-a3b0bb67.js";import"./fontUtils-5dd2e502.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-53652037.js";import"./utils-a941d33c.js";import"./Rect-ea14f53a.js";import"./quantizationUtils-fe80be7e.js";import"./floatRGBA-2a9b8092.js";import"./ExpandedCIM-2a39fa6f.js";import"./clusterUtils-5ded844a.js";import"./util-421799ed.js";import"./TileContainer-d7453e14.js";import"./vec3f32-ad1dc57f.js";import"./normalizeUtilsSync-f11102c4.js";import"./projectionSupport-1a5588c8.js";import"./json-48e3ea08.js";import"./Matcher-867ec160.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-3d6b2927.js";import"./devEnvironmentUtils-5002a058.js";import"./webStyleSymbolUtils-7ce2d52a.js";import"./ComputedAttributeStorage-07dd2af1.js";import"./arcadeTimeUtils-c60ee006.js";import"./executionError-c92d3b85.js";const m="sublayers",n="layerView",T=Object.freeze({remove(){},pause(){},resume(){}});let l=class extends H(b){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new C}async fetchPopupFeatures(i){return Array.from(this.graphicsViews(),t=>t.hitTest(i).filter(e=>!!e.popupTemplate)).flat()}*graphicsViews(){this._graphicsViewsFeatureCollectionMap==null?this._graphicsViews==null?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(i,t){return Array.from(this.graphicsViews(),e=>{const s=e.hitTest(i);if(this._graphicsViewsFeatureCollectionMap!=null){const a=this._graphicsViewsFeatureCollectionMap.get(e);for(const r of s)!r.popupTemplate&&a.popupTemplate&&(r.popupTemplate=a.popupTemplate),r.sourceLayer=r.layer=this.layer}return s}).flat().map(e=>({type:"graphic",graphic:e,layer:this.layer,mapPoint:i}))}highlight(i){let t;typeof i=="number"?t=[i]:i instanceof u?t=[i.uid]:Array.isArray(i)&&i.length>0?t=typeof i[0]=="number"?i:i.map(s=>s&&s.uid):f.isCollection(i)&&(t=i.map(s=>s&&s.uid).toArray());const e=t==null?void 0:t.filter(w);return e!=null&&e.length?(this._addHighlight(e),{remove:()=>{this._removeHighlight(e)}}):T}update(i){for(const t of this.graphicsViews())t.processUpdate(i)}attach(){const i=this.view,t=()=>this.requestUpdate(),e=this.layer.featureCollections;if(e!=null&&e.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of e){const a=new c(this.view.featuresTilingScheme),r=new g({view:i,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:a});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([o(()=>s.visible,h=>r.container.visible=h,p),o(()=>r.updating,()=>this.notifyChange("updating"),p)],n)}this._updateHighlight()}else this.layer.sublayers!=null&&this.addHandles(y(()=>this.layer.sublayers,"change",()=>this._createGraphicsViews(),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),m)}detach(){this._destroyGraphicsViews(),this.removeHandles(m)}moveStart(){}moveEnd(){}viewChange(){for(const i of this.graphicsViews())i.viewChange()}isUpdating(){for(const i of this.graphicsViews())if(i.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(n);for(const i of this.graphicsViews())i.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),this.layer.sublayers==null)return;const i=[],t=this.view,e=()=>this.requestUpdate();for(const s of this.layer.sublayers){const a=new v,r=new c(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const h=new g({view:t,graphics:s.graphics,requestUpdateCallback:e,container:r});this.addHandles([s.on("graphic-update",h.graphicUpdateHandler),o(()=>s.visible,d=>h.container.visible=d,p),o(()=>h.updating,()=>this.notifyChange("updating"),p)],n),a.addChild(h.container),this.container.addChild(a),i.push(h)}this._graphicsViews=i,this._updateHighlight()}_addHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(i){for(const t of i)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;e===0?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const i=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(i)}};l=_([V("esri.views.2d.layers.MapNotesLayerView2D")],l);const Hi=l;export{Hi as default};