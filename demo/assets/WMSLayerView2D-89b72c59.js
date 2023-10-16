import{ap as o,aq as m,bB as F,at as I,x as M,q as g,b3 as q,T as C,z as E,by as R}from"./index-646a7cf7.js";import{a as b}from"./BitmapContainer-331e5eee.js";import{f as U,d as V}from"./LayerView-2b126957.js";import{v as W}from"./ExportStrategy-18708141.js";import{a as L}from"./RefreshableLayerView-c6e1df02.js";import{l as z}from"./ExportWMSImageParameters-0dc23f4b.js";import"./WGLContainer-d2730c65.js";import"./definitions-c33d924c.js";import"./VertexArrayObject-553339a1.js";import"./Texture-8e0a0fd4.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-412643b9.js";import"./enums-55085e26.js";import"./number-e491b09e.js";import"./ProgramTemplate-4db56880.js";import"./GeometryUtils-0f44b7c3.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./Container-a5fb7677.js";import"./EffectView-edf43b82.js";import"./earcut-626bfe99.js";import"./Bitmap-344fb3ff.js";const H=e=>{let t=class extends e{initialize(){this.exportImageParameters=new z({layer:this.layer})}destroy(){this.exportImageParameters=M(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:a}=this;if(!r)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:p}=a;if(!p)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:i,width:s,height:n,x:d,y:c}=u;if(!(i&&s&&n))throw new g("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:s,height:n});return a.fetchFeatureInfo(i,s,n,d,c)}};return o([m()],t.prototype,"exportImageParameters",void 0),o([m({readOnly:!0})],t.prototype,"exportImageVersion",null),o([m()],t.prototype,"layer",void 0),o([m(F)],t.prototype,"timeExtent",void 0),t=o([I("esri.layers.mixins.WMSLayerView")],t),t};let h=class extends H(L(U(V))){constructor(){super(...arguments),this.bitmapContainer=new b}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{q(t)||C.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new b,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(E(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=M(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:a,y:p}=e,{spatialReference:u}=t;let i,s=0,n=0;if(r.children.some($=>{const{width:x,height:f,resolution:w,x:y,y:l}=$,v=y+w*x,P=l-w*f;return a>=y&&a<=v&&p<=l&&p>=P&&(i=new R({xmin:y,ymin:P,xmax:v,ymax:l,spatialReference:u}),s=x,n=f,!0)}),!i)return null;const d=i.width/s,c=Math.round((a-i.xmin)/d),S=Math.round((i.ymax-p)/d);return{extent:i,width:s,height:n,x:c,y:S}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...a})}};o([m()],h.prototype,"strategy",void 0),o([m()],h.prototype,"updating",void 0),h=o([I("esri.views.2d.layers.WMSLayerView2D")],h);const nt=h;export{nt as default};
