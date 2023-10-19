import{aw as f,ax as g,ay as H,aI as O,aJ as U,b7 as z,q as V,aD as L,a6 as Q,aE as $,b8 as q,b9 as A,_ as j,ba as k,ab as R,bb as D,g as N,bc as B,aK as P,bd as C,be as J,bf as K,a3 as W,bg as X}from"./index-05ea3609.js";import{n as Y,p as Z}from"./popupUtils-3bc051c0.js";function _(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function ee(e){let t=0,r=0;for(let a=0;a<e.length;a++){const s=e[a].size;typeof s=="number"&&(t+=s,r++)}return t/r}function I(e,t){return typeof e=="number"?e:e&&e.stops&&e.stops.length?ee(e.stops):t}function te(e,t){if(!t)return e;const r=t.filter(i=>i.type==="size").map(i=>{const{maxSize:o,minSize:c}=i;return(I(o,e)+I(c,e))/2});let a=0;const s=r.length;if(s===0)return e;for(let i=0;i<s;i++)a+=r[i];const n=Math.floor(a/s);return Math.max(n,e)}function E(e){var s;const t=e&&e.renderer,r=(e&&e.event&&e.event.pointerType)==="touch"?9:6;if(!t)return r;const a="visualVariables"in t?te(r,t.visualVariables):r;if(t.type==="simple")return _(a,t.symbol);if(t.type==="unique-value"){let n=a;return(s=t.uniqueValueInfos)==null||s.forEach(i=>{n=_(n,i.symbol)}),n}if(t.type==="class-breaks"){let n=a;return t.classBreakInfos.forEach(i=>{n=_(n,i.symbol)}),n}return t.type==="dot-density"||t.type,a}let F=null;function le(e,t){return t.type==="tile"||t.type==="map-image"}let y=class extends O{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=U(async t=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(t).catch(()=>{}))})}initialize(){const e=t=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(t).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([z(()=>this.highlightGraphics,"change",t=>e(t.added),{onListenerAdd:t=>e(t)})])}async fetchPopupFeatures(e,t){var i,o;const{layerView:{layer:r,view:{scale:a}}}=this;if(!e)throw new V("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:r});const s=re(r.sublayers,a,t);if(!s.length)return[];const n=await ae(r,s);if(!((((o=(i=r.capabilities)==null?void 0:i.operations)==null?void 0:o.supportsIdentify)??!0)&&r.version>=10.5)&&!n)throw new V("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:r});return n?this._fetchPopupFeaturesUsingQueries(e,s,t):this._fetchPopupFeaturesUsingIdentify(e,s,t)}clearHighlights(){var e;(e=this.highlightGraphics)==null||e.removeAll()}highlight(e){const t=this.highlightGraphics;if(!t)return{remove(){}};let r=null;if(e instanceof L?r=[e]:Q.isCollection(e)&&e.length>0?r=e.toArray():Array.isArray(e)&&e.length>0&&(r=e),r=r==null?void 0:r.filter($),!r||!r.length)return q();for(const a of r){const s=a.sourceLayer;s!=null&&"geometryType"in s&&s.geometryType==="point"&&(a.visible=!1)}return t.addMany(r),{remove:()=>{t.removeMany(r??[])}}}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:r,highlightGraphicUpdated:a}=this;if(r&&a)for(const s of e){const n=s.sourceLayer&&"renderer"in s.sourceLayer&&s.sourceLayer.renderer;s.sourceLayer&&"geometryType"in s.sourceLayer&&s.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(s).then(async i=>{var l;i||(i=new A);let o=null;const c="visualVariables"in n?(l=n.visualVariables)==null?void 0:l.find(u=>u.type==="size"):void 0;c&&(F||(F=(await j(()=>import("./index-05ea3609.js").then(u=>u.oj),["assets/index-05ea3609.js","assets/index-8d370f8c.css"])).getSize),o=F(c,s,{view:t.type,scale:t.scale,shape:i.type==="simple-marker"?i.style:null})),o||(o="width"in i&&"height"in i&&i.width!=null&&i.height!=null?Math.max(i.width,i.height):"size"in i?i.size:16),r.includes(s)&&(s.symbol=new A({style:"square",size:o,xoffset:"xoffset"in i?i.xoffset:0,yoffset:"yoffset"in i?i.yoffset:0}),a(s,"symbol"),s.visible=!0)})}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:r},highlightGraphics:a,highlightGraphicUpdated:s}=this;if(this._highlightGeometriesResolution=e,!s||!(a!=null&&a.length)||!t.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(e),i=new Map;for(const l of a)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>n){const u=l.sourceLayer;k(i,u,()=>new Map).set(l.getObjectId(),l)}const o=Array.from(i,([l,u])=>{const h=l.createQuery();return h.objectIds=[...u.keys()],h.outFields=[l.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=n,h.outSpatialReference=r.spatialReference,l.queryFeatures(h)}),c=await Promise.all(o);if(!this.destroyed)for(const{features:l}of c)for(const u of l){const h=u.sourceLayer,p=i.get(h).get(u.getObjectId());p&&a.includes(p)&&(p.geometry=u.geometry,s(p,"geometry"),this._featuresResolutions.set(p,n))}}_getTargetResolution(e){const t=e*R(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){const a=await this._createIdentifyParameters(e,t,r);if(a==null)return[];const{results:s}=await D(this.layerView.layer.parsedUrl,a);return s.map(n=>n.feature)}async _createIdentifyParameters(e,t,r){const{floors:a,layer:s,timeExtent:n,view:{spatialReference:i,scale:o}}=this.layerView,c=r!=null?r.event:null;if(!t.length)return null;await Promise.all(t.map(({sublayer:d})=>d.load().catch(()=>{})));const l=Math.min(N("mapservice-popup-identify-max-tolerance"),s.allSublayers.reduce((d,m)=>m.renderer?E({renderer:m.renderer,event:c}):d,2)),u=this.createFetchPopupFeaturesQueryGeometry(e,l),h=B(o,i),p=Math.round(u.width/h),w=new P({xmin:u.center.x-h*p,ymin:u.center.y-h*p,xmax:u.center.x+h*p,ymax:u.center.y+h*p,spatialReference:u.spatialReference});return new C({floors:a,gdbVersion:"gdbVersion"in s?s.gdbVersion:void 0,geometry:e,height:p,layerOption:"popup",mapExtent:w,returnGeometry:!0,spatialReference:i,sublayers:s.sublayers,timeExtent:n,tolerance:l,width:p})}async _fetchPopupFeaturesUsingQueries(e,t,r){const{layerView:{floors:a,timeExtent:s}}=this,n=r!=null?r.event:null,i=t.map(async({sublayer:o,popupTemplate:c})=>{var M;if(await o.load().catch(()=>{}),o.capabilities&&!o.capabilities.operations.supportsQuery)return[];const l=o.createQuery(),u=E({renderer:o.renderer,event:n}),h=this.createFetchPopupFeaturesQueryGeometry(e,u),p=new Set,[w]=await Promise.all([Y(o,c),(M=o.renderer)==null?void 0:M.collectRequiredFields(p,o.fieldsIndex)]);J(p,o.fieldsIndex,w);const d=Array.from(p).sort();if(l.geometry=h,l.outFields=d,l.timeExtent=s,a){const v=a.clone(),x=K(v,o);x!=null&&(l.where=l.where?`(${l.where}) AND (${x})`:x)}const m=this._getTargetResolution(h.width/u),S=await se(c),G=o.geometryType==="point"||S&&S.arcadeUtils.hasGeometryOperations(c);G||(l.maxAllowableOffset=m);let{features:b}=await o.queryFeatures(l);const T=G?0:m;b=await ie(o,b);for(const v of b)this._featuresResolutions.set(v,T);return b});return(await W(i)).reverse().reduce((o,c)=>c.value?[...o,...c.value]:o,[]).filter($)}};function re(e,t,r){const a=[],s=n=>{const i=n.minScale===0||t<=n.minScale,o=n.maxScale===0||t>=n.maxScale;if(n.visible&&i&&o){if(n.sublayers)n.sublayers.forEach(s);else if(n.popupEnabled){const c=Z(n,{...r,defaultPopupTemplateEnabled:!1});c!=null&&a.unshift({sublayer:n,popupTemplate:c})}}};return((e==null?void 0:e.toArray())??[]).reverse().map(s),a}function se(e){var t;return(t=e.expressionInfos)!=null&&t.length||Array.isArray(e.content)&&e.content.some(r=>r.type==="expression")?X():Promise.resolve()}async function ae(e,t){var r,a;if((a=(r=e.capabilities)==null?void 0:r.operations)!=null&&a.supportsQuery)return!0;try{return await Promise.any(t.map(({sublayer:s})=>s.load().then(()=>s.capabilities.operations.supportsQuery)))}catch{return!1}}async function ie(e,t){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map(a=>r.getSymbolAsync(a).then(s=>s?a:null))).then(a=>a.filter(s=>s!=null)):t.filter(a=>r.getSymbol(a)!=null)),t}f([g({constructOnly:!0})],y.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),f([g({constructOnly:!0})],y.prototype,"layerView",void 0),f([g({constructOnly:!0})],y.prototype,"highlightGraphics",void 0),f([g({constructOnly:!0})],y.prototype,"highlightGraphicUpdated",void 0),f([g({constructOnly:!0})],y.prototype,"updatingHandles",void 0),y=f([H("esri.views.layers.support.MapService")],y);function ue(e,t,r,a=new P){let s=0;if(r.type==="2d")s=t*(r.resolution??0);else if(r.type==="3d"){const u=r.overlayPixelSizeInMapUnits(e),h=r.basemapSpatialReference;s=h==null||h.equals(r.spatialReference)?t*u:R(h)/R(r.spatialReference)}const n=e.x-s,i=e.y-s,o=e.x+s,c=e.y+s,{spatialReference:l}=r;return a.xmin=Math.min(n,o),a.ymin=Math.min(i,c),a.xmax=Math.max(n,o),a.ymax=Math.max(i,c),a.spatialReference=l,a}new P;export{le as S,y as U,ue as r};
