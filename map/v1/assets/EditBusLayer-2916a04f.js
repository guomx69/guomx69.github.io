import{aZ as x,ah as E,al as w,C as L,d5 as r}from"./index-2e5318f2.js";const I=new x.EventEmitter;function $(d,i,s=!1){const a=L();return s=i==null||s,I.emit("apply-edits",{serviceUrl:d,layerId:i,mayReceiveServiceEdits:s,result:a.promise}),a}const b="esri.layers.mixins.EditBusLayer",p=Symbol(b);function R(d){return d!=null&&typeof d=="object"&&p in d}const T=d=>{var i;let s=class extends d{constructor(...a){super(...a),this[i]=!0,this.when().then(()=>{this.own([I.on("apply-edits",g=>{const{serviceUrl:y,layerId:n,mayReceiveServiceEdits:f,result:j}=g,A=y===this.url,u=n!=null&&this.layerId!=null&&n===this.layerId;if(!A||!u&&!f)return;const v=j.then(e=>{var h;if(u&&(e.addedFeatures.length||e.updatedFeatures.length||e.deletedFeatures.length||e.addedAttachments.length||e.updatedAttachments.length||e.deletedAttachments.length))return this.emit("edits",r(e)),e;const c=(h=e.editedFeatures)==null?void 0:h.find(({layerId:l})=>l===this.layerId);if(c){const{adds:l,updates:o,deletes:F}=c.editedFeatures,m={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:l?l.map(({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]})):[],deletedFeatures:F?F.map(({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]})):[],updatedFeatures:o?o.map(({current:{attributes:t}})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]})):[],editedFeatures:r(e.editedFeatures),exceededTransferLimit:!1};return this.emit("edits",m),m}return{edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:r(e.editedFeatures),exceededTransferLimit:!1}});this.emit("apply-edits",{result:v})})])},()=>{})}};return i=p,s=E([w(b)],s),s};export{T as c,$ as l,R as n};
