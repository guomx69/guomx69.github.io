import{ap as l,aq as o,at as T,c1 as R,dp as v,fs as P,fv as U,fu as $,fx as I,fy as M,fz as W,by as j,bN as h,bJ as S,U as L,jU as r,h2 as d,q as E,kU as D,h5 as O,G as w,jT as g,ac as q,c3 as b,c4 as z,bg as A}from"./index-646a7cf7.js";var f;let y=f=class extends R{constructor(e){super(e)}clone(){return new f({customLayerParameters:v(this.customLayerParameters),customParameters:v(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};l([o({json:{type:Object,write:!0}})],y.prototype,"customLayerParameters",void 0),l([o({json:{type:Object,write:!0}})],y.prototype,"customParameters",void 0),l([o({type:String,json:{write:!0}})],y.prototype,"layerIdentifier",void 0),l([o({type:String,json:{write:!0}})],y.prototype,"tileMatrixSet",void 0),l([o({type:String,json:{write:!0}})],y.prototype,"url",void 0),y=f=l([T("esri.layer.support.WMTSLayerInfo")],y);var m;let s=m=class extends P(U($(I(M(W(A)))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new j(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,h.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=h.WebMercator,this.subDomains=null,this.tileInfo=new S({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new L({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:h.WebMercator}),spatialReference:h.WebMercator,lods:[new r({level:0,scale:591657527591555e-6,resolution:156543.033928}),new r({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new r({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new r({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new r({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new r({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new r({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new r({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new r({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new r({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new r({level:10,scale:577790.554289,resolution:152.874056570411}),new r({level:11,scale:288895.277144,resolution:76.4370282850732}),new r({level:12,scale:144447.638572,resolution:38.2185141425366}),new r({level:13,scale:72223.819286,resolution:19.1092570712683}),new r({level:14,scale:36111.909643,resolution:9.55462853563415}),new r({level:15,scale:18055.954822,resolution:4.77731426794937}),new r({level:16,scale:9027.977411,resolution:2.38865713397468}),new r({level:17,scale:4513.988705,resolution:1.19432856685505}),new r({level:18,scale:2256.994353,resolution:.597164283559817}),new r({level:19,scale:1128.497176,resolution:.298582141647617}),new r({level:20,scale:564.248588,resolution:.14929107082380833}),new r({level:21,scale:282.124294,resolution:.07464553541190416}),new r({level:22,scale:141.062147,resolution:.03732276770595208}),new r({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return typeof e=="string"?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(()=>{var a;let i="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const n=new d(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&((a=n.authority)!=null&&a.includes("{subDomain}"))&&(i="is missing 'subDomains' property")}else i="spatialReference must match tileInfo.spatialReference";else i="is missing the required 'urlTemplate' property value";if(i)throw new E("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${i}`)});return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||t.fullExtent&&t.fullExtent.spatialReference&&h.fromJSON(t.fullExtent.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:i}=this,a=new d(t),n=a.scheme?a.scheme+"://":"//",c=n+a.authority+"/",p=a.authority;if(p!=null&&p.includes("{subDomain}")){if(i&&i.length>0&&p.split(".").length>1)for(const u of i)e.push(n+p.replaceAll(/\{subDomain\}/gi,u)+"/")}else e.push(c);return e.map(u=>(u.charAt(u.length-1)!=="/"&&(u+="/"),u))}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new d(e),i=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(i.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){e&&D(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=O(e)),t.templateUrl=e}fetchTile(e,t,i,a={}){const{signal:n}=a,c=this.getTileUrl(e,t,i),p={responseType:"image",signal:n,query:{...this.refreshParameters}};return w(c,p).then(u=>u.data)}async fetchImageBitmapTile(e,t,i,a={}){const{signal:n}=a;if(this.fetchTile!==m.prototype.fetchTile){const x=await this.fetchTile(e,t,i,a);return g(x,e,t,i,n)}const c=this.getTileUrl(e,t,i),p={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:u}=await w(c,p);return g(u,e,t,i,n)}getTileUrl(e,t,i){const{levelValues:a,tileServers:n,urlPath:c}=this;if(!a||!n||!c)return"";const p=a[e];return n[t%n.length]+q(c,{level:p,z:p,col:i,x:i,row:t,y:t})}};l([o({type:String,value:"",json:{write:!0}})],s.prototype,"copyright",void 0),l([o({type:j,json:{write:!0},nonNullable:!0})],s.prototype,"fullExtent",void 0),l([o({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"legendEnabled",void 0),l([o({type:["show","hide"]})],s.prototype,"listMode",void 0),l([o({json:{read:!0,write:!0}})],s.prototype,"blendMode",void 0),l([o()],s.prototype,"levelValues",null),l([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),l([o({type:["WebTiledLayer"],value:"WebTiledLayer"})],s.prototype,"operationalLayerType",void 0),l([o({readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),l([o({type:h})],s.prototype,"spatialReference",void 0),l([b("spatialReference",["spatialReference","fullExtent.spatialReference"])],s.prototype,"readSpatialReference",null),l([o({type:[String],json:{write:!0}})],s.prototype,"subDomains",void 0),l([o({type:S,json:{write:!0}})],s.prototype,"tileInfo",void 0),l([o({readOnly:!0})],s.prototype,"tileServers",null),l([o({json:{read:!1}})],s.prototype,"type",void 0),l([o()],s.prototype,"urlPath",null),l([o({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],s.prototype,"urlTemplate",void 0),l([b("urlTemplate",["urlTemplate","templateUrl"])],s.prototype,"readUrlTemplate",null),l([z("urlTemplate",{templateUrl:{type:String}})],s.prototype,"writeUrlTemplate",null),l([o({type:y,json:{write:!0}})],s.prototype,"wmtsInfo",void 0),s=m=l([T("esri.layers.WebTileLayer")],s);const V=s,N=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{V as L,N as W,y as p};
