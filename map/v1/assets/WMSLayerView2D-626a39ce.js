import{aw as o,ax as m,aN as F,ay as b,x as M,q as g,au as C,a7 as E,z as q,aK as R}from"./index-cf1f9edc.js";import{a as I}from"./BitmapContainer-18c4dd8d.js";import{f as U,d as V}from"./LayerView-de5fc9b1.js";import{v as W}from"./ExportStrategy-e0839890.js";import{a as L}from"./RefreshableLayerView-5611363e.js";import{l as z}from"./ExportWMSImageParameters-d0da8634.js";import"./WGLContainer-cb5f2066.js";import"./definitions-9bd633e4.js";import"./VertexArrayObject-e167aff4.js";import"./Texture-98b2958f.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-6250d5ce.js";import"./enums-55085e26.js";import"./number-e491b09e.js";import"./ProgramTemplate-7bbdf1d1.js";import"./GeometryUtils-74a0ae91.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./Container-6d7657d3.js";import"./EffectView-1f253006.js";import"./earcut-19a5cba4.js";import"./Bitmap-f1b2cf0b.js";const H=e=>{let t=class extends e{initialize(){this.exportImageParameters=new z({layer:this.layer})}destroy(){this.exportImageParameters=M(this.exportImageParameters)}get exportImageVersion(){var r;return(r=this.exportImageParameters)==null||r.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(r){const{layer:a}=this;if(!r)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a}));const{popupEnabled:p}=a;if(!p)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const u=this.createFetchPopupFeaturesQuery(r);if(!u)return Promise.resolve([]);const{extent:i,width:s,height:n,x:d,y:c}=u;if(!(i&&s&&n))throw new g("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:i,width:s,height:n});return a.fetchFeatureInfo(i,s,n,d,c)}};return o([m()],t.prototype,"exportImageParameters",void 0),o([m({readOnly:!0})],t.prototype,"exportImageVersion",null),o([m()],t.prototype,"layer",void 0),o([m(F)],t.prototype,"timeExtent",void 0),t=o([b("esri.layers.mixins.WMSLayerView")],t),t};let h=class extends H(L(U(V))){constructor(){super(...arguments),this.bitmapContainer=new I}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{C(t)||E.getLogger(this).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:r}=e;this.bitmapContainer=new I,this.container.addChild(this.bitmapContainer),this.strategy=new W({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:r,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=M(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:r}=this,{x:a,y:p}=e,{spatialReference:u}=t;let i,s=0,n=0;if(r.children.some($=>{const{width:x,height:f,resolution:w,x:y,y:l}=$,v=y+w*x,P=l-w*f;return a>=y&&a<=v&&p<=l&&p>=P&&(i=new R({xmin:y,ymin:P,xmax:v,ymax:l,spatialReference:u}),s=x,n=f,!0)}),!i)return null;const d=i.width/s,c=Math.round((a-i.xmin)/d),S=Math.round((i.ymax-p)/d);return{extent:i,width:s,height:n,x:c,y:S}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,a){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,...a})}};o([m()],h.prototype,"strategy",void 0),o([m()],h.prototype,"updating",void 0),h=o([b("esri.views.2d.layers.WMSLayerView2D")],h);const nt=h;export{nt as default};
