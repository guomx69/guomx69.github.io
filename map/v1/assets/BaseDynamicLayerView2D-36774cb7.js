import{au as s,a7 as p,aw as a,ax as r,ay as m}from"./index-cf1f9edc.js";import{a as h}from"./BitmapContainer-18c4dd8d.js";import{f as n,d}from"./LayerView-de5fc9b1.js";import{v as c}from"./ExportStrategy-e0839890.js";import{a as u}from"./RefreshableLayerView-5611363e.js";import"./WGLContainer-cb5f2066.js";import"./definitions-9bd633e4.js";import"./VertexArrayObject-e167aff4.js";import"./Texture-98b2958f.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-6250d5ce.js";import"./enums-55085e26.js";import"./number-e491b09e.js";import"./ProgramTemplate-7bbdf1d1.js";import"./GeometryUtils-74a0ae91.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./Container-6d7657d3.js";import"./EffectView-1f253006.js";import"./earcut-19a5cba4.js";import"./Bitmap-f1b2cf0b.js";let t=class extends u(n(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};a([r()],t.prototype,"_strategy",void 0),a([r()],t.prototype,"updating",void 0),t=a([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const k=t;export{k as default};
