import{au as s,a7 as p,aw as a,ax as r,ay as m}from"./index-d4439fba.js";import{a as h}from"./BitmapContainer-989d85e9.js";import{f as n,d}from"./LayerView-f3936c89.js";import{v as c}from"./ExportStrategy-dc4d3d05.js";import{a as u}from"./RefreshableLayerView-16d7b284.js";import"./WGLContainer-383a9410.js";import"./definitions-74ad6ac7.js";import"./VertexArrayObject-42a98d28.js";import"./Texture-0cb1f60b.js";import"./enums-b14466b3.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-9dbb79eb.js";import"./enums-55085e26.js";import"./number-e491b09e.js";import"./ProgramTemplate-f2a4c3cb.js";import"./GeometryUtils-3c96c3cc.js";import"./alignmentUtils-ae955d28.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./Container-6e479c6e.js";import"./EffectView-1ebf3123.js";import"./earcut-3cf5ced9.js";import"./Bitmap-9b0ed363.js";let t=class extends u(n(d)){update(e){this._strategy.update(e).catch(i=>{s(i)||p.getLogger(this).error(i)}),this.notifyChange("updating")}attach(){this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._strategy=new c({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,i,o){return this.layer.fetchImageBitmap(e,i,o)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};a([r()],t.prototype,"_strategy",void 0),a([r()],t.prototype,"updating",void 0),t=a([m("esri.views.2d.layers.BaseDynamicLayerView2D")],t);const k=t;export{k as default};