import{aw as s,ax as a,ay as I,bf as G,lD as Z,a6 as O,c2 as S,f2 as H,ln as x,mp as X,bh as h,v as Y,bn as B,aG as ee,em as te,G as q,cQ as re,mW as se,fX as ie,fY as oe,fZ as ae,ld as ne,f_ as le,lr as pe,fl as de,ex as ye,lN as A,mX as T,a7 as u,aj as ue,a4 as ce,aO as he,cG as fe,q as d,aD as me,lj as ge,fz as ve,_ as we,m2 as D,gI as F,fy as be,au as Ie,gE as Le,mY as Se,mZ as Fe,m_ as _e,lv as je,lP as Oe,lQ as Ee,lR as R,lu as $e,m$ as xe,lk as Ae,ll as Te,aA as De,lU as Re,lm as Pe,eW as Ne}from"./index-cf1f9edc.js";import{N as Ue,K as P}from"./SceneService-430564f9.js";import{t as Ge,l as qe,i as Qe}from"./FetchAssociatedFeatureLayer-d7e0fcab.js";import{s as Q,l as Ce,u as Ve,m as ke}from"./I3SLayerDefinitions-8c56f2c4.js";import{g as Je}from"./persistable-e8b9fb65.js";import{n as Ke,p as We}from"./popupUtils-09881f6b.js";import"./originUtils-1469eeaf.js";import"./multiOriginJSONSupportUtils-c978f4c3.js";import"./resourceUtils-72b23525.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./quat-b7a99513.js";import"./quatf64-3363c48e.js";import"./I3SBinaryReader-1feaa3f8.js";import"./VertexAttribute-9f2e53ec.js";import"./spatialReferenceEllipsoidUtils-9b71f651.js";import"./symbolColorUtils-e19e89fa.js";import"./vec3f32-ad1dc57f.js";import"./plane-f34c3f22.js";import"./sphere-561e8618.js";import"./resourceExtension-7a1d050b.js";let y=class extends G{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};s([a({type:String,json:{read:!0,write:!0}})],y.prototype,"name",void 0),s([a({type:String,json:{read:!0,write:!0}})],y.prototype,"field",void 0),s([a({type:[Number],json:{read:!0,write:!0}})],y.prototype,"currentRangeExtent",void 0),s([a({type:[Number],json:{read:!0,write:!0}})],y.prototype,"fullRangeExtent",void 0),s([a({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=s([I("esri.layers.support.RangeInfo")],y);var w;let _=w=class extends Z(O.ofType(S)){constructor(e){super(e)}clone(){return new w(this.items.map(e=>e.clone()))}write(e,t){return this.toJSON(t)}toJSON(e){var r;const t=(r=e==null?void 0:e.layer)==null?void 0:r.spatialReference;return t?this.toArray().map(o=>{if(!t.equals(o.spatialReference)){if(!H(o.spatialReference,t))return e&&e.messages&&e.messages.push(new x("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const l=new S;X(o,l,t),o=l}const n=o.toJSON(e);return delete n.spatialReference,n}).filter(o=>o!=null):(e!=null&&e.messages&&e.messages.push(new x("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map(o=>o.toJSON(e)))}static fromJSON(e,t){const r=new w;return e.forEach(o=>r.add(S.fromJSON(o,t))),r}};_=w=s([I("esri.layers.support.PolygonCollection")],_);const b=_;var j;let f=j=class extends G{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new b,this._geometriesSource=null,this._handles=new Y}initialize(){this._handles.add(B(()=>this.geometries,"after-changes",()=>this.geometries=this.geometries,ee))}destroy(){this._handles.destroy()}readGeometries(e,t,r){Array.isArray(e)?this.geometries=b.fromJSON(e,r):this._geometriesSource={url:te(e,r),context:r}}async loadGeometries(e,t){if(this._geometriesSource==null)return;const{url:r,context:o}=this._geometriesSource,n=await q(r,{responseType:"json",signal:t==null?void 0:t.signal}),l=e.toJSON(),p=n.data.map(c=>({...c,spatialReference:l}));this.geometries=b.fromJSON(p,o),this._geometriesSource=null}clone(){const e=new j({geometries:re(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};s([a({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],f.prototype,"spatialRelationship",void 0),s([a({type:b,nonNullable:!0,json:{write:!0}}),Je({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries"})],f.prototype,"geometries",void 0),s([h(["web-scene","portal-item"],"geometries")],f.prototype,"readGeometries",null),f=j=s([I("esri.layers.support.SceneFilter")],f);const Me=f,ze=["3DObject","Point"],N=Pe();let i=class extends se(Ue(ie(oe(ae(ne(le(pe(de(Ne))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new O,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var o,n,l;const r=(n=(o=this.getFeatureType(t==null?void 0:t.feature))==null?void 0:o.domains)==null?void 0:n[e];return r&&r.type!=="inherited"?r:((l=this.getField(e))==null?void 0:l.domain)??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){var e;return((e=this.associatedLayer)==null?void 0:e.types)??[]}get typeIdField(){var e;return((e=this.associatedLayer)==null?void 0:e.typeIdField)??null}get templates(){var e;return((e=this.associatedLayer)==null?void 0:e.templates)??null}get formTemplate(){var e;return((e=this.associatedLayer)==null?void 0:e.formTemplate)??null}get fieldsIndex(){return new ye(this.fields)}readNodePages(e,t,r){return t.layerType==="Point"&&(e=t.pointNodePages),e==null||typeof e!="object"?null:Q.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return Ze[this.profile]||"mesh"}set renderer(e){A(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return e!=null&&typeof e=="object"||(e={}),e.color==null&&(e.color=!1),e}get capabilities(){var E,$;const e=((E=this.associatedLayer)==null?void 0:E.capabilities)??Ge,{query:t,editing:{supportsGlobalId:r,supportsRollbackOnFailure:o,supportsUploadWithItemId:n,supportsGeometryUpdate:l,supportsReturnServiceEditsInSourceSpatialReference:p},data:{supportsZ:c,supportsM:m,isVersioned:g,supportsAttachment:C},operations:{supportsEditing:V,supportsAdd:k,supportsUpdate:J,supportsDelete:K,supportsQuery:W,supportsQueryAttachments:M,supportsAsyncConvert3D:z}}=e,v=e.operations.supportsChangeTracking,L=!!(($=this.associatedLayer)!=null&&$.infoFor3D)&&T();return{query:t,editing:{supportsGlobalId:r,supportsReturnServiceEditsInSourceSpatialReference:p,supportsRollbackOnFailure:o,supportsGeometryUpdate:L&&l,supportsUploadWithItemId:n},data:{supportsAttachment:C,supportsZ:c,supportsM:m,isVersioned:g},operations:{supportsQuery:W,supportsQueryAttachments:M,supportsEditing:V&&v,supportsAdd:L&&k&&v,supportsDelete:L&&K&&v,supportsUpdate:J&&v,supportsAsyncConvert3D:z}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.userHasEditingPrivileges}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){var e;return((e=this.associatedLayer)==null?void 0:e.infoFor3D)??null}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeOID"&&(e=r.name),!!e)),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some(r=>(r.type==="esriFieldTypeGlobalID"&&(e=r.name),!!e)),e||void 0}get displayField(){var e;return((e=this.associatedLayer)==null?void 0:e.displayField)??null}readProfile(e,t){const r=t.store.profile;return r!=null&&U[r]?U[r]:(u.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){const t=e!=null?e.signal:null,r=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(ue).then(()=>this._fetchService(t)).then(()=>Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()])).then(()=>this._validateElevationInfo()).then(()=>this._applyAssociatedLayerOverrides()).then(()=>this._populateFieldUsageInfo()).then(()=>ce(this,{origin:"service"},t)).then(()=>A(this.renderer,this.fieldsIndex)).then(()=>this.finishLoadEditablePortalLayer(e));return this.addResolvingPromise(r),Promise.resolve(this)}async beforeSave(){this.filter!=null&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){u.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new he;return this.geometryType!=="mesh"&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryExtent(e||this.createQuery(),t))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatureCount(e||this.createQuery(),t))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryFeatures(e||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const o of r.features)o.layer=this,o.sourceLayer=this;return r})}async queryCachedAttributes(e,t){const r=fe(this.fieldsIndex,await Ke(this,We(this)));return qe(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,r)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||r.length===0)throw new d("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const o=new me;return o.attributes=r[0],o.layer=this,o.sourceLayer=this,o}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryObjectIds(e||this.createQuery(),t))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then(r=>r.queryAttachments(e,t))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(u.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return ge(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e!=null&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new d("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new d("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return this.statisticsInfo!=null&&this.statisticsInfo.some(t=>t.name===e)}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new d("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new d("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.statisticsInfo)if(o.name===r.name){const n=ve(this.parsedUrl.path,o.href);return q(n,{query:{f:"json",token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(l=>l.data)}throw new d("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(P.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(P.SAVE,e)}async applyEdits(e,t){const{applyEdits:r}=await we(()=>import("./editingSupport-b8002a58.js"),["assets/editingSupport-b8002a58.js","assets/index-cf1f9edc.js","assets/index-8d370f8c.css"]);if(await this.load(),!this.associatedLayer)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),r(this,this.associatedLayer.source,e,t)}async uploadAssets(e,t){if(await this.load(),this.associatedLayer==null)throw new d(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&!ze.includes(e.layerType))throw new d("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(r,o){let n=!1,l=!1;if(r==null)n=!0,l=!0;else{const p=o&&o.isGeographic;switch(r){case"east-north-up":case"earth-centered":n=!0,l=p;break;case"vertex-reference-frame":n=!0,l=!p;break;default:n=!1}}if(!n)throw new d("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!l)throw new d("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if(this.profile==="points")e.push("Point");else{if(this.profile!=="mesh-pyramids")throw new d("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){var e,t;if(this._fieldUsageInfo={},this.fields)for(const r of this.fields){const o=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some(p=>p.name===r.name)),n=!!((t=(e=this.associatedLayer)==null?void 0:e.fields)!=null&&t.some(p=>p&&r.name===p.name)),l={supportsLabelingInfo:o,supportsRenderer:o,supportsPopupTemplate:o||n,supportsLayerQuery:n};this._fieldUsageInfo[r.name]=l}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride()}_applyAssociatedLayerFieldsOverrides(){var t;if(!((t=this.associatedLayer)!=null&&t.fields))return;let e=null;for(const r of this.associatedLayer.fields){const o=this.getField(r.name);o?(!o.domain&&r.domain&&(o.domain=r.domain.clone()),o.editable=r.editable,o.nullable=r.nullable,o.length=r.length):(e||(e=this.fields?this.fields.slice():[]),e.push(r.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=D(this);for(let r=0;r<e.length;r++){const o=e[r],n=this.originIdOf(o),l=this.associatedLayer.originIdOf(o);n<l&&(l===F.SERVICE||l===F.PORTAL_ITEM)&&t.setAtOrigin(o,this.associatedLayer[o],l)}}_applyAssociatedLayerExtentOverride(){var o,n,l,p,c,m,g;const e=(n=(o=this.associatedLayer)==null?void 0:o.editingInfo)==null?void 0:n.lastEditDate,t=(l=this.associatedLayer)==null?void 0:l.serverGens,r=(p=this.associatedLayer)==null?void 0:p.getAtOrigin("fullExtent","service");!T()||((c=this.associatedLayer)==null?void 0:c.infoFor3D)==null||!r||!be((m=this.associatedLayer)==null?void 0:m.url)||!e||((g=this.serviceUpdateTimeStamp)==null?void 0:g.lastUpdate)===e.getTime()||!this.serviceUpdateTimeStamp&&(t==null?void 0:t.minServerGen)===(t==null?void 0:t.serverGen)||D(this).setAtOrigin("fullExtent",r.clone(),F.SERVICE)}async _setAssociatedFeatureLayer(e){if(!["mesh-pyramids","points"].includes(this.profile))return;const t=new Qe(this.parsedUrl,this.portalItem,this.apiKey,e);try{this.associatedLayer=await t.fetch()}catch(r){Ie(r)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await Le(()=>this.popupEnabled&&this.popupTemplate!=null);const e=`this SceneLayer: ${this.title}`;this.attributeStorageInfo==null?u.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):u.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;e&&(this.profile==="mesh-pyramids"&&e.mode==="relative-to-scene"&&u.getLogger(this).warn(".elevationInfo=","Mesh scene layers don't support relative-to-scene elevation mode"),e.featureExpressionInfo&&e.featureExpressionInfo.expression!=="0"&&u.getLogger(this).warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};s([a({types:{key:"type",base:Se,typeMap:{selection:Fe}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],i.prototype,"featureReduction",void 0),s([a({type:[y],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],i.prototype,"rangeInfos",void 0),s([a({json:{read:!1}})],i.prototype,"associatedLayer",void 0),s([a({type:["show","hide"]})],i.prototype,"listMode",void 0),s([a({type:["ArcGISSceneServiceLayer"]})],i.prototype,"operationalLayerType",void 0),s([a({json:{read:!1},readOnly:!0})],i.prototype,"type",void 0),s([a({...N.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"fields",void 0),s([a()],i.prototype,"types",null),s([a()],i.prototype,"typeIdField",null),s([a()],i.prototype,"templates",null),s([a()],i.prototype,"formTemplate",null),s([a({readOnly:!0})],i.prototype,"fieldsIndex",null),s([a({type:_e,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),s([a(N.outFields)],i.prototype,"outFields",void 0),s([a({type:Q,readOnly:!0,json:{read:!1}})],i.prototype,"nodePages",void 0),s([h("service","nodePages",["nodePages","pointNodePages"])],i.prototype,"readNodePages",null),s([a({type:[Ce],readOnly:!0})],i.prototype,"materialDefinitions",void 0),s([a({type:[Ve],readOnly:!0})],i.prototype,"textureSetDefinitions",void 0),s([a({type:[ke],readOnly:!0})],i.prototype,"geometryDefinitions",void 0),s([a({readOnly:!0})],i.prototype,"serviceUpdateTimeStamp",void 0),s([a({readOnly:!0})],i.prototype,"attributeStorageInfo",void 0),s([a({readOnly:!0})],i.prototype,"statisticsInfo",void 0),s([a({type:O.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],i.prototype,"excludeObjectIds",void 0),s([a({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),s([a({type:Me,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],i.prototype,"filter",void 0),s([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],i.prototype,"path",void 0),s([a(je)],i.prototype,"elevationInfo",null),s([a({type:String})],i.prototype,"geometryType",null),s([a(Oe)],i.prototype,"labelsVisible",void 0),s([a({type:[Ee],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:R},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:R},write:!0}})],i.prototype,"labelingInfo",void 0),s([a($e)],i.prototype,"legendEnabled",void 0),s([a({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){var o,n;if(typeof e=="number"&&e>=0&&e<=1)return e;const r=(n=(o=t.layerDefinition)==null?void 0:o.drawingInfo)==null?void 0:n.transparency;return r!==void 0?xe(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],i.prototype,"opacity",void 0),s([a({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"priority",void 0),s([a({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"semantic",void 0),s([a({types:Ae,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],i.prototype,"renderer",null),s([a({json:{read:!1}})],i.prototype,"cachedDrawingInfo",void 0),s([h("service","cachedDrawingInfo")],i.prototype,"readCachedDrawingInfo",null),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"capabilities",null),s([a({type:Boolean,json:{read:!1}})],i.prototype,"editingEnabled",null),s([a({readOnly:!0,json:{write:!1,read:!1}})],i.prototype,"infoFor3D",null),s([a(Te)],i.prototype,"popupEnabled",void 0),s([a({type:De,json:{name:"popupInfo",write:!0}})],i.prototype,"popupTemplate",void 0),s([a({readOnly:!0,json:{read:!1}})],i.prototype,"defaultPopupTemplate",null),s([a({type:String,json:{read:!1}})],i.prototype,"objectIdField",void 0),s([h("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdField",null),s([a({type:String,json:{read:!1}})],i.prototype,"globalIdField",void 0),s([h("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdField",null),s([a({readOnly:!0,type:String,json:{read:!1}})],i.prototype,"displayField",null),s([a({type:String,json:{read:!1}})],i.prototype,"profile",void 0),s([h("service","profile",["store.profile"])],i.prototype,"readProfile",null),s([a({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],i.prototype,"normalReferenceFrame",void 0),s([a(Re)],i.prototype,"screenSizePerspectiveEnabled",void 0),i=s([I("esri.layers.SceneLayer")],i);const U={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Ze={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"},gt=i;export{gt as default};
