import{go as s,eF as r,T as n,df as l}from"./index-646a7cf7.js";function o(){return{fields:{type:[s],value:null},fieldsIndex:{readOnly:!0,get(){return new r(this.fields||[])}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){var t;const e=this._userOutFields;if(!e||!e.length)return null;if(e.includes("*"))return["*"];if(!this.fields)return e;for(const i of e)((t=this.fieldsIndex)==null?void 0:t.has(i))||n.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${i} found in outFields`,{layer:this,outFields:e});return l(this.fieldsIndex,e)}}}}export{o as s};
