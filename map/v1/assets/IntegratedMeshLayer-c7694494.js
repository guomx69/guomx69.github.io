import{aw as t,ax as a,bR as S,ff as T,ay as f,eP as _,eW as x,lk as N,mo as L,cF as R,lA as b,a6 as I,ea as M,G as j,g6 as A,g7 as J,g8 as K,la as V,g9 as $,lo as D,v as P,b7 as U,aG as G,ec as E,aj as k,q as d,ch as q,ls as z,eN as C}from"./index-d4439fba.js";import{g as m}from"./persistable-8ca3afca.js";import{N as F,K as v}from"./SceneService-5b8b6851.js";import{s as W,l as B,u as H,m as Q}from"./I3SLayerDefinitions-ae0b467d.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceExtension-33807888.js";import"./originUtils-1469eeaf.js";import"./resourceUtils-9d3c1a60.js";var h;let n=h=class extends _{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,i,o,s){if(s.layer&&s.layer.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!x(e.spatialReference,s.layer.spatialReference))return void(s&&s.messages&&s.messages.push(new N("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const l=new S;L(e,l,s.layer.spatialReference),i[o]=l.toJSON(s)}else i[o]=e.toJSON(s);delete i[o].spatialReference}clone(){return new h({geometry:R(this.geometry),type:this.type})}};t([a({type:S}),m()],n.prototype,"geometry",void 0),t([T(["web-scene","portal-item"],"geometry")],n.prototype,"writeGeometry",null),t([a({type:["clip","mask","replace"],nonNullable:!0}),m()],n.prototype,"type",void 0),n=h=t([f("esri.layers.support.SceneModification")],n);const c=n;var p;let y=p=class extends b(I.ofType(c)){constructor(e){super(e),this.url=null}clone(){return new p({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(i=>i.toJSON(e)).filter(i=>!!i.geometry)}static fromJSON(e,i){const o=new p;for(const s of e)o.add(c.fromJSON(s,i));return o}static async fromUrl(e,i,o){const s={url:M(e),origin:"service"},l=await j(e,{responseType:"json",signal:o==null?void 0:o.signal}),O=i.toJSON(),u=[];for(const g of l.data)u.push(c.fromJSON({...g,geometry:{...g.geometry,spatialReference:O}},s));return new p({url:e,items:u})}};t([a({type:String})],y.prototype,"url",void 0),y=p=t([f("esri.layers.support.SceneModifications")],y);const w=y;let r=class extends F(A(J(K(V($(D(C))))))){constructor(...e){super(...e),this._handles=new P,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(U(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,G))}normalizeCtorArgs(e,i){return typeof e=="string"?{url:e,...i}:e}readModifications(e,i,o){this._modificationsSource={url:E(e,o),context:o}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const i=e==null?void 0:e.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){k(o)}if(await this._fetchService(i),this._modificationsSource!=null){const o=await w.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",o,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,i)}beforeSave(){if(this._modificationsSource!=null)return this.load().then(()=>{},()=>{})}async saveAs(e,i){return this._debouncedSaveOperations(v.SAVE_AS,{...i,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(v.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};t([a({type:String,readOnly:!0})],r.prototype,"geometryType",void 0),t([a({type:["show","hide"]})],r.prototype,"listMode",void 0),t([a({type:["IntegratedMeshLayer"]})],r.prototype,"operationalLayerType",void 0),t([a({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),t([a({type:W,readOnly:!0})],r.prototype,"nodePages",void 0),t([a({type:[B],readOnly:!0})],r.prototype,"materialDefinitions",void 0),t([a({type:[H],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),t([a({type:[Q],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),t([a({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),t([a({type:w}),m({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],r.prototype,"modifications",void 0),t([q(["web-scene","portal-item"],"modifications")],r.prototype,"readModifications",null),t([a(z)],r.prototype,"elevationInfo",void 0),t([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),r=t([f("esri.layers.IntegratedMeshLayer")],r);const re=r;export{re as default};