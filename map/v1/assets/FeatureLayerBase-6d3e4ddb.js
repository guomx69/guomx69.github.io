import{ah as e,ai as t,ds as g,al as p,cO as l,eH as M,J as ce,b9 as ie,fY as be,fZ as je,d5 as F,f_ as Ie,f$ as Se,aj as he,aS as B,g0 as G,g1 as Ee,g2 as Fe,df as me,g3 as $e,g4 as Oe,bq as Te,g5 as Me,g6 as Ve,g7 as Re,bF as oe,V as se,g8 as Le,fu as Ne,g9 as De,ga as Be}from"./index-2e5318f2.js";import{d as Ue,S as Ce,R as Ge,x as Ae}from"./featureLayerUtils-e2aea7a3.js";var A;let w=A=class extends g{constructor(o){super(o),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new A({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};e([t({type:String,json:{write:!0}})],w.prototype,"expression",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"name",void 0),e([t({type:["boolean","date","number","string"],json:{write:!0}})],w.prototype,"returnType",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"title",void 0),w=A=e([p("esri.form.ExpressionInfo")],w);const ke=w;let x=class extends g{constructor(i){super(i),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};e([t({type:String,json:{write:!0}})],x.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],x.prototype,"label",void 0),e([t()],x.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],x.prototype,"visibilityExpression",void 0),x=e([p("esri.form.elements.Element")],x);const $=x;var k;let V=k=class extends g{constructor(o){super(o),this.type=null}clone(){return new k({type:this.type})}};e([t({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],V.prototype,"type",void 0),V=k=e([p("esri.form.elements.inputs.AttachmentInput")],V);const We=V;var W;let b=W=class extends ${constructor(o){super(o),this.attachmentKeyword=null,this.editable=!0,this.input=null,this.type="attachment"}clone(){return new W({attachmentKeyword:this.attachmentKeyword,description:this.description,editable:this.editable,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})}};e([t({type:String,json:{write:!0}})],b.prototype,"attachmentKeyword",void 0),e([t({type:Boolean,json:{write:!0}})],b.prototype,"editable",void 0),e([t({type:We,json:{read:{source:"inputType"},write:{target:"inputType"}}})],b.prototype,"input",void 0),e([t({type:["attachment"],json:{read:!1,write:!0}})],b.prototype,"type",void 0),b=W=e([p("esri.form.elements.AttachmentElement")],b);const re=b;let R=class extends g{constructor(i){super(i),this.type=null}};e([t()],R.prototype,"type",void 0),R=e([p("esri.form.elements.inputs.Input")],R);const O=R;let T=class extends O{constructor(o){super(o),this.maxLength=null,this.minLength=0}};e([t({type:Number,json:{write:!0}})],T.prototype,"maxLength",void 0),e([t({type:Number,json:{write:!0}})],T.prototype,"minLength",void 0),T=e([p("esri.form.elements.inputs.TextInput")],T);const ee=T;var Q;let L=Q=class extends ee{constructor(o){super(o),this.type="barcode-scanner"}clone(){return new Q({maxLength:this.maxLength,minLength:this.minLength})}};e([t({type:["barcode-scanner"],json:{read:!1,write:!0}})],L.prototype,"type",void 0),L=Q=e([p("esri.form.elements.inputs.BarcodeScannerInput")],L);const Qe=L;var H;let j=H=class extends O{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new H({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};e([t({type:String,json:{write:!0}})],j.prototype,"noValueOptionLabel",void 0),e([t({type:Boolean,json:{write:!0}})],j.prototype,"showNoValueOption",void 0),e([t({type:["combo-box"],json:{read:!1,write:!0}})],j.prototype,"type",void 0),j=H=e([p("esri.form.elements.inputs.ComboBoxInput")],j);const He=j;var J;function ne(o){return o!=null?new Date(o):null}function pe(o){return o?o.getTime():null}let y=J=class extends O{constructor(o){super(o),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(o,i){return ne(i.max)}writeMax(o,i){i.max=pe(o)}readMin(o,i){return ne(i.min)}writeMin(o,i){i.min=pe(o)}clone(){return new J({includeTime:this.includeTime,max:this.max,min:this.min})}};e([t({type:Boolean,json:{write:!0}})],y.prototype,"includeTime",void 0),e([t({type:Date,json:{type:Number,write:!0}})],y.prototype,"max",void 0),e([l("max")],y.prototype,"readMax",null),e([M("max")],y.prototype,"writeMax",null),e([t({type:Date,json:{type:Number,write:!0}})],y.prototype,"min",void 0),e([l("min")],y.prototype,"readMin",null),e([M("min")],y.prototype,"writeMin",null),e([t({type:["datetime-picker"],json:{read:!1,write:!0}})],y.prototype,"type",void 0),y=J=e([p("esri.form.elements.inputs.DateTimePickerInput")],y);const Je=y;var P;let I=P=class extends O{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new P({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};e([t({type:String,json:{write:!0}})],I.prototype,"noValueOptionLabel",void 0),e([t({type:Boolean,json:{write:!0}})],I.prototype,"showNoValueOption",void 0),e([t({type:["radio-buttons"],json:{read:!1,write:!0}})],I.prototype,"type",void 0),I=P=e([p("esri.form.elements.inputs.RadioButtonsInput")],I);const Pe=I;var q;let S=q=class extends O{constructor(o){super(o),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new q({offValue:this.offValue,onValue:this.onValue})}};e([t({type:[String,Number],json:{write:!0}})],S.prototype,"offValue",void 0),e([t({type:[String,Number],json:{write:!0}})],S.prototype,"onValue",void 0),e([t({type:["switch"],json:{read:!1,write:!0}})],S.prototype,"type",void 0),S=q=e([p("esri.form.elements.inputs.SwitchInput")],S);const qe=S;var z;let N=z=class extends ee{constructor(o){super(o),this.type="text-area"}clone(){return new z({maxLength:this.maxLength,minLength:this.minLength})}};e([t({type:["text-area"],json:{read:!1,write:!0}})],N.prototype,"type",void 0),N=z=e([p("esri.form.elements.inputs.TextAreaInput")],N);const ze=N;var Z;let D=Z=class extends ee{constructor(o){super(o),this.type="text-box"}clone(){return new Z({maxLength:this.maxLength,minLength:this.minLength})}};e([t({type:["text-box"],json:{read:!1,write:!0}})],D.prototype,"type",void 0),D=Z=e([p("esri.form.elements.inputs.TextBoxInput")],D);const Ze=D,_e={base:O,key:"type",typeMap:{"barcode-scanner":Qe,"combo-box":He,"datetime-picker":Je,"radio-buttons":Pe,switch:qe,"text-area":ze,"text-box":Ze}};var _;const ve="esri.form.elements.FieldElement",le=ce.getLogger(ve);let d=_=class extends ${constructor(o){super(o),this.domain=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}get editable(){return ie(le,"editable",{replacement:"editableExpression",version:"4.26",warnOnce:!0}),this._get("editable")??!0}set editable(o){ie(le,"editable",{replacement:"editableExpression",version:"4.26",warnOnce:!0}),this._set("editable",o)}clone(){return new _({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};e([t({types:be,json:{read:{reader:je},write:!0}})],d.prototype,"domain",void 0),e([t({type:Boolean,json:{write:!0}})],d.prototype,"editable",null),e([t({type:String,json:{write:!0}})],d.prototype,"editableExpression",void 0),e([t({type:String,json:{write:!0}})],d.prototype,"fieldName",void 0),e([t({type:String,json:{write:!0}})],d.prototype,"hint",void 0),e([t({types:_e,json:{read:{source:"inputType"},write:{target:"inputType"}}})],d.prototype,"input",void 0),e([t({type:String,json:{write:!0}})],d.prototype,"requiredExpression",void 0),e([t({type:String,json:{read:!1,write:!0}})],d.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],d.prototype,"valueExpression",void 0),d=_=e([p(ve)],d);const ae=d;var K;let v=K=class extends ${constructor(o){super(o),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new K({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:F(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([t({type:Number,json:{write:!0}})],v.prototype,"displayCount",void 0),e([t({type:["list"],json:{write:!0}})],v.prototype,"displayType",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"editableExpression",void 0),e([t({type:[Ie],json:{write:!0}})],v.prototype,"orderByFields",void 0),e([t({type:Number,json:{write:!0}})],v.prototype,"relationshipId",void 0),e([t({type:["relationship"],json:{read:!1,write:!0}})],v.prototype,"type",void 0),v=K=e([p("esri.form.elements.RelationshipElement")],v);const de=v;function fe(o){return{typesWithGroup:{base:$,key:"type",typeMap:{attachment:re,field:ae,group:o,relationship:de}},typesWithoutGroup:{base:$,key:"type",typeMap:{attachment:re,field:ae,relationship:de}}}}function ge(o,i,r=!0){if(!o)return null;const s=r?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return o.filter(n=>s[n.type]).map(n=>s[n.type].fromJSON(n))}function we(o,i,r=!0){if(!o)return null;const s=r?i.typesWithGroup.typeMap:i.typesWithoutGroup.typeMap;return o.filter(n=>s[n.type]).map(n=>n.toJSON())}function xe(o,i,r=!0){return o?o.map(s=>Se(r?i.typesWithGroup:i.typesWithoutGroup,s)):null}var Y;let h=Y=class extends ${constructor(o){super(o),this.elements=null,this.initialState="expanded",this.type="group"}castElements(o){return xe(o,U,!1)}readElements(o,i){return ge(i.formElements,U,!1)}writeElements(o,i){i.formElements=we(o,U,!1)}clone(){return new Y({description:this.description,elements:F(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};e([t({json:{write:!0}})],h.prototype,"elements",void 0),e([he("elements")],h.prototype,"castElements",null),e([l("elements",["formElements"])],h.prototype,"readElements",null),e([M("elements")],h.prototype,"writeElements",null),e([t({type:["collapsed","expanded"],json:{write:!0}})],h.prototype,"initialState",void 0),e([t({type:String,json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=Y=e([p("esri.form.elements.GroupElement")],h);const U=fe(h),Ke=h;var X;const C=fe(Ke);let c=X=class extends g{constructor(o){super(o),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(o){return xe(o,C)}readElements(o,i){return ge(i.formElements,C)}writeElements(o,i){i.formElements=we(o,C)}clone(){return new X({description:this.description,expressionInfos:F(this.expressionInfos),elements:F(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}};e([t({type:String,json:{write:!0}})],c.prototype,"description",void 0),e([t({json:{write:!0}})],c.prototype,"elements",void 0),e([he("elements")],c.prototype,"castElements",null),e([l("elements",["formElements"])],c.prototype,"readElements",null),e([M("elements")],c.prototype,"writeElements",null),e([t({type:[ke],json:{write:!0}})],c.prototype,"expressionInfos",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],c.prototype,"preserveFieldValuesWhenHidden",void 0),e([t({type:String,json:{write:!0}})],c.prototype,"title",void 0),c=X=e([p("esri.form.FormTemplate")],c);const rt=c;let f=class extends B(g){constructor(i){super(i),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.dateFieldsTimeReference=null}};e([t()],f.prototype,"creatorField",void 0),e([t()],f.prototype,"creationDateField",void 0),e([t()],f.prototype,"editorField",void 0),e([t()],f.prototype,"editDateField",void 0),e([t()],f.prototype,"realm",void 0),e([t({type:G})],f.prototype,"dateFieldsTimeReference",void 0),f=e([p("esri.layers.support.EditFieldsInfo")],f);const Ye=f;let m=class extends B(g){constructor(i){super(i)}};e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"name",void 0),e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"fields",void 0),e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"isAscending",void 0),e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"indexType",void 0),e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"isUnique",void 0),e([t({constructOnly:!0,json:{write:!0}})],m.prototype,"description",void 0),m=e([p("esri.layers.support.FeatureIndex")],m);let E=class extends B(g){constructor(i){super(i),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};e([t({type:String,json:{read:{source:"shapeAreaFieldName"}}})],E.prototype,"shapeAreaField",void 0),e([t({type:String,json:{read:{source:"shapeLengthFieldName"}}})],E.prototype,"shapeLengthField",void 0),e([t({type:String,json:{read:o=>Ee.read(o)||Fe.read(o)}})],E.prototype,"units",void 0),E=e([p("esri.layers.support.GeometryFieldsInfo")],E);const Xe=E,ue=new me({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),ye=new me({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let u=class extends B(g){constructor(o){super(o),this.cardinality=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};e([t({json:{read:ue.read,write:ue.write}})],u.prototype,"cardinality",void 0),e([t({json:{read:!0,write:!0}})],u.prototype,"composite",void 0),e([t({json:{read:!0,write:!0}})],u.prototype,"id",void 0),e([t({json:{read:!0,write:!0}})],u.prototype,"keyField",void 0),e([t({json:{read:!0,write:!0}})],u.prototype,"keyFieldInRelationshipTable",void 0),e([t({json:{read:!0,write:!0}})],u.prototype,"name",void 0),e([t({json:{read:!0,write:!0}})],u.prototype,"relatedTableId",void 0),e([t({json:{read:!0,write:!0}})],u.prototype,"relationshipTableId",void 0),e([t({json:{read:ye.read,write:ye.write}})],u.prototype,"role",void 0),u=e([p("esri.layers.support.Relationship")],u);const et=u,at=o=>{let i=class extends o{constructor(){super(...arguments),this.capabilities=null,this.copyright=null,this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.displayField=null,this.definitionExpression=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.isTable=!1,this.layerId=void 0,this.minScale=0,this.maxScale=0,this.globalIdField=null,this.objectIdField=null,this.preferredTimeReference=null,this.relationships=null,this.sourceJSON=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.spatialReference=oe.WGS84,this.subtypeField=null,this.trackIdField=null,this.indexes=new(se.ofType(m)),this.version=void 0}readCapabilitiesFromService(r,s){return Ne(s,this.url)}get effectiveCapabilities(){var te;const r=this.capabilities;if(!r)return null;const s=F(r),{operations:n,editing:a}=s;return(te=this.sourceJSON)!=null&&te.isMultiServicesView?(this.userHasUpdateItemPrivileges&&(n.supportsQuery=!0),s):this.userHasUpdateItemPrivileges?(n.supportsAdd=n.supportsDelete=n.supportsEditing=n.supportsQuery=n.supportsUpdate=a.supportsDeleteByOthers=a.supportsGeometryUpdate=a.supportsUpdateByOthers=!0,s):(this.userHasFullEditingPrivileges&&n.supportsEditing&&(n.supportsAdd=n.supportsDelete=n.supportsUpdate=a.supportsGeometryUpdate=!0),s)}get hasFullEditingRestrictions(){var a;const r=this.capabilities;if(!r||(a=this.sourceJSON)!=null&&a.isMultiServicesView)return!1;const{operations:s,editing:n}=r;return s.supportsEditing&&!(s.supportsAdd&&s.supportsDelete&&s.supportsUpdate&&n.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){var a;const r=this.capabilities;if(!r)return!1;const{operations:s,editing:n}=r;return(a=this.sourceJSON)!=null&&a.isMultiServicesView?!s.supportsQuery:!(s.supportsAdd&&s.supportsDelete&&s.supportsEditing&&s.supportsQuery&&s.supportsUpdate&&n.supportsDeleteByOthers&&n.supportsGeometryUpdate&&n.supportsUpdateByOthers)}readEditingInfo(r,s){const{editingInfo:n}=s;return n?{lastEditDate:n.lastEditDate!=null?new Date(n.lastEditDate):null}:null}readIsTableFromService(r,s){return s.type==="Table"}readMinScale(r,s){return s.effectiveMinScale||r||0}readMaxScale(r,s){return s.effectiveMaxScale||r||0}readGlobalIdFieldFromService(r,s){return Ce(s)}readObjectIdFieldFromService(r,s){return Ge(s)}readServiceDefinitionExpression(r,s){return s.definitionQuery||s.definitionExpression}set url(r){const s=De({layer:this,url:r,nonStandardUrlAllowed:!0,logger:ce.getLogger(this)});this._set("url",s.url),s.layerId!=null&&this._set("layerId",s.layerId)}writeUrl(r,s,n,a){Be(this,r,null,s,a)}readVersion(r,s){return Ae(s)}};return e([t({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","maxRecordCount","maxRecordCountFactor","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],i.prototype,"capabilities",void 0),e([l("service","capabilities")],i.prototype,"readCapabilitiesFromService",null),e([t({readOnly:!0})],i.prototype,"effectiveCapabilities",null),e([t({readOnly:!0})],i.prototype,"hasFullEditingRestrictions",null),e([t({readOnly:!0})],i.prototype,"hasUpdateItemRestrictions",null),e([t({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],i.prototype,"copyright",void 0),e([t({type:G})],i.prototype,"dateFieldsTimeReference",void 0),e([t({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),e([t({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],i.prototype,"displayField",void 0),e([t({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),e([t({readOnly:!0,type:Ye})],i.prototype,"editFieldsInfo",void 0),e([t({readOnly:!0})],i.prototype,"editingInfo",void 0),e([l("editingInfo")],i.prototype,"readEditingInfo",null),e([t((()=>{const r=F($e),s=r.json.origins;return s["web-map"]={read:!1,write:!1},s["portal-item"]={read:!1,write:!1},r})())],i.prototype,"elevationInfo",void 0),e([t({type:Oe,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],i.prototype,"floorInfo",void 0),e([t({type:Te,json:{origins:{service:{read:{source:"extent"}}}}})],i.prototype,"fullExtent",void 0),e([t()],i.prototype,"gdbVersion",void 0),e([t({readOnly:!0,type:Xe,json:{read:{source:"geometryProperties"}}})],i.prototype,"geometryFieldsInfo",void 0),e([t({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:Ue.read}}}})],i.prototype,"geometryType",void 0),e([t({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasM",void 0),e([t({type:Boolean,json:{origins:{service:{read:!0}}}})],i.prototype,"hasZ",void 0),e([t({readOnly:!0,type:Me})],i.prototype,"heightModelInfo",void 0),e([t({type:Date})],i.prototype,"historicMoment",void 0),e([t({readOnly:!0})],i.prototype,"isTable",void 0),e([l("service","isTable",["type"])],i.prototype,"readIsTableFromService",null),e([t({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],i.prototype,"layerId",void 0),e([t(Ve)],i.prototype,"minScale",void 0),e([l("service","minScale",["minScale","effectiveMinScale"])],i.prototype,"readMinScale",null),e([t(Re)],i.prototype,"maxScale",void 0),e([l("service","maxScale",["maxScale","effectiveMaxScale"])],i.prototype,"readMaxScale",null),e([t({type:String})],i.prototype,"globalIdField",void 0),e([l("service","globalIdField",["globalIdField","fields"])],i.prototype,"readGlobalIdFieldFromService",null),e([t({type:String})],i.prototype,"objectIdField",void 0),e([l("service","objectIdField",["objectIdField","fields"])],i.prototype,"readObjectIdFieldFromService",null),e([t({type:G})],i.prototype,"preferredTimeReference",void 0),e([t({type:[et],readOnly:!0})],i.prototype,"relationships",void 0),e([t()],i.prototype,"sourceJSON",void 0),e([t({type:Boolean})],i.prototype,"returnM",void 0),e([t({type:Boolean})],i.prototype,"returnZ",void 0),e([t({readOnly:!0})],i.prototype,"serviceDefinitionExpression",void 0),e([l("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],i.prototype,"readServiceDefinitionExpression",null),e([t({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],i.prototype,"serviceItemId",void 0),e([t({type:oe,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],i.prototype,"spatialReference",void 0),e([t({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],i.prototype,"subtypeField",void 0),e([t({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],i.prototype,"trackIdField",void 0),e([t({readOnly:!0,json:{write:!1}})],i.prototype,"serverGens",void 0),e([t({type:se.ofType(m),readOnly:!0})],i.prototype,"indexes",void 0),e([t(Le)],i.prototype,"url",null),e([M("url")],i.prototype,"writeUrl",null),e([t({json:{origins:{service:{read:!0}},read:!1}})],i.prototype,"version",void 0),e([l("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],i.prototype,"readVersion",null),i=e([p("esri.layers.mixins.FeatureLayerBase")],i),i};export{at as w,rt as y};
