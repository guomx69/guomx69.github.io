import{V as i,bx as n,ap as r,aq as s,bw as l,at as o}from"./index-646a7cf7.js";import{f as h,d}from"./LayerView-2b126957.js";import"./Container-a5fb7677.js";import"./EffectView-edf43b82.js";import"./definitions-c33d924c.js";import"./enums-b14466b3.js";import"./Texture-8e0a0fd4.js";let t=class extends h(d){constructor(e){super(e),this.layerViews=new i}set layerViews(e){this._set("layerViews",n(e,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((e,a)=>e+a.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((e,a)=>this.container.addChildAt(e.container,a))}};r([s({cast:l})],t.prototype,"layerViews",null),r([s({readOnly:!0})],t.prototype,"updatingProgress",null),t=r([o("esri.views.2d.layers.KnowledgeGraphLayerView2D")],t);const V=t;export{V as default};
