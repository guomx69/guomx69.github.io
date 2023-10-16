import{ap as o,aq as u,by as A,bJ as X,at as N,c1 as Y,c3 as R,V as q,q as _,U as ge,jU as we,lf as B,lg as xe,aN as de,fs as ve,fv as Se,fu as Me,fx as Ie,fy as Te,fz as Le,z as re,be as j,az as ie,a5 as se,h7 as Ee,G as K,jT as le,dp as ae,ev as oe,bR as Pe,c4 as be,bg as Ce}from"./index-646a7cf7.js";import{p as Re,L as Oe}from"./WebTileLayer-f34edeeb.js";import{e as Ae}from"./TileInfoTilemapCache-3302f4b5.js";import{o as Q}from"./crsUtils-3bab3d8c.js";import{o as ne}from"./xmlUtils-444cb4c0.js";var G;let F=G=class extends Y{constructor(e){super(e),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const e=new G;return this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("tileInfo")&&(e.tileInfo=this.tileInfo&&this.tileInfo.clone()),e}};o([u({type:A,json:{read:{source:"fullExtent"}}})],F.prototype,"fullExtent",void 0),o([u({type:String,json:{read:{source:"id"}}})],F.prototype,"id",void 0),o([u({type:X,json:{read:{source:"tileInfo"}}})],F.prototype,"tileInfo",void 0),F=G=o([N("esri.layer.support.TileMatrixSet")],F);const Fe=F;var J;let E=J=class extends Y{constructor(e){super(e),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const e=new J;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([u({json:{read:{source:"id"}}})],E.prototype,"id",void 0),o([u({json:{read:{source:"title"}}})],E.prototype,"title",void 0),o([u({json:{read:{source:"abstract"}}})],E.prototype,"description",void 0),o([u({json:{read:{source:"legendUrl"}}})],E.prototype,"legendUrl",void 0),o([u({json:{read:{source:"isDefault"}}})],E.prototype,"isDefault",void 0),o([u({json:{read:{source:"keywords"}}})],E.prototype,"keywords",void 0),E=J=o([N("esri.layer.support.WMTSStyle")],E);const $e=E;var z;let x=z=class extends Y{constructor(e){super(e),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(e,t){return(e=t.fullExtent)?A.fromJSON(e):null}readFullExtents(e,t){var r,i;return(r=t.fullExtents)!=null&&r.length?t.fullExtents.map(s=>A.fromJSON(s)):((i=t.tileMatrixSets)==null?void 0:i.map(s=>A.fromJSON(s.fullExtent)).filter(s=>s))??[]}get imageFormat(){let e=this._get("imageFormat");return e||(e=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),e}set imageFormat(e){const t=this.imageFormats;e&&(e.includes("image/")||t&&!t.includes(e))&&(e.includes("image/")||(e="image/"+e),t&&!t.includes(e))?console.error("The layer doesn't support the format of "+e):this._set("imageFormat",e)}get styleId(){var t,r;let e=this._get("styleId");return e||(e=((r=(t=this.styles)==null?void 0:t.at(0))==null?void 0:r.id)??""),e}set styleId(e){this._set("styleId",e)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find(e=>e.id===this.tileMatrixSetId):null}clone(){var t;const e=new z;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("imageFormats")&&(e.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(e.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("styleId")&&(e.styleId=this.styleId),this.hasOwnProperty("styles")&&(e.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(e.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(e.tileMatrixSets=(t=this.tileMatrixSets)==null?void 0:t.clone()),this.hasOwnProperty("title")&&(e.title=this.title),e}};o([u()],x.prototype,"description",void 0),o([u()],x.prototype,"fullExtent",void 0),o([R("fullExtent",["fullExtent"])],x.prototype,"readFullExtent",null),o([u({readOnly:!0})],x.prototype,"fullExtents",void 0),o([R("fullExtents",["fullExtents","tileMatrixSets"])],x.prototype,"readFullExtents",null),o([u()],x.prototype,"id",void 0),o([u()],x.prototype,"imageFormat",null),o([u({json:{read:{source:"formats"}}})],x.prototype,"imageFormats",void 0),o([u()],x.prototype,"layer",void 0),o([u()],x.prototype,"parent",void 0),o([u()],x.prototype,"styleId",null),o([u({type:q.ofType($e),json:{read:{source:"styles"}}})],x.prototype,"styles",void 0),o([u({json:{write:{ignoreOrigin:!0}}})],x.prototype,"title",void 0),o([u()],x.prototype,"tileMatrixSetId",void 0),o([u({readOnly:!0})],x.prototype,"tileMatrixSet",null),o([u({type:q.ofType(Fe),json:{read:{source:"tileMatrixSets"}}})],x.prototype,"tileMatrixSets",void 0),x=z=o([N("esri.layers.support.WMTSSublayer")],x);const U=x,me=90.71428571428571;function ue(e){const t=e.replaceAll(/ows:/gi,"");if(!g("Contents",new DOMParser().parseFromString(t,"text/xml").documentElement))throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function Ve(e,t){var te;e=e.replaceAll(/ows:/gi,"");const r=new DOMParser().parseFromString(e,"text/xml").documentElement,i=new Map,s=new Map,a=g("Contents",r);if(!a)throw new _("wmtslayer:wmts-capabilities-xml-is-not-valid");const l=g("OperationsMetadata",r),n=l==null?void 0:l.querySelector("[name='GetTile']"),p=n==null?void 0:n.getElementsByTagName("Get"),m=p&&Array.prototype.slice.call(p),y=(te=t.url)==null?void 0:te.indexOf("https"),f=y!==void 0&&y>-1;let c,w,S=t.serviceMode,v=t==null?void 0:t.url;if(m&&m.length&&m.some(T=>{const L=g("Constraint",T);return!L||$("AllowedValues","Value",S,L)?(v=T.attributes[0].nodeValue,!0):(!L||$("AllowedValues","Value","RESTful",L)||$("AllowedValues","Value","REST",L)?w=T.attributes[0].nodeValue:L&&!$("AllowedValues","Value","KVP",L)||(c=T.attributes[0].nodeValue),!1)}),!v)if(w)v=w,S="RESTful";else if(c)v=c,S="KVP";else{const T=g("ServiceMetadataURL",r);v=T==null?void 0:T.getAttribute("xlink:href")}const P=v.indexOf("1.0.0/");P===-1&&S==="RESTful"?v+="/":P>-1&&(v=v.substring(0,P)),S==="KVP"&&(v+=P>-1?"":"?"),f&&(v=v.replace(/^http:/i,"https:"));const M=h("ServiceIdentification>ServiceTypeVersion",r),I=h("ServiceIdentification>AccessConstraints",r),b=I&&/^none$/i.test(I)?null:I,k=C("Layer",a),W=C("TileMatrixSet",a),D=k.map(T=>{const L=h("Identifier",T);return i.set(L,T),je(L,T,W,f,M)});return{copyright:b,dimensionMap:s,layerMap:i,layers:D,serviceMode:S,tileUrl:v}}function Ue(e){return e.layers.forEach(t=>{var r;(r=t.tileMatrixSets)==null||r.forEach(i=>{var a;const s=i.tileInfo;s&&s.dpi!==96&&((a=s.lods)==null||a.forEach(l=>{var n;l.scale=96*l.scale/s.dpi,l.resolution=fe((n=s.spatialReference)==null?void 0:n.wkid,l.scale*me/96,i.id)}),s.dpi=96)})}),e}function Z(e){return e.nodeType===Node.ELEMENT_NODE}function g(e,t){for(let r=0;r<t.childNodes.length;r++){const i=t.childNodes[r];if(Z(i)&&i.nodeName===e)return i}return null}function C(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];Z(s)&&s.nodeName===e&&r.push(s)}return r}function O(e,t){const r=[];for(let i=0;i<t.childNodes.length;i++){const s=t.childNodes[i];Z(s)&&s.nodeName===e&&r.push(s)}return r.map(i=>i.textContent).filter(de)}function h(e,t){return e.split(">").forEach(r=>{t&&(t=g(r,t))}),t&&t.textContent}function $(e,t,r,i){let s;return Array.prototype.slice.call(i.childNodes).some(a=>{if(a.nodeName.includes(e)){const l=g(t,a),n=l&&l.textContent;if(n===r||r.split(":")&&r.split(":")[1]===n)return s=a,!0}return!1}),s}function je(e,t,r,i,s){const a=h("Abstract",t),l=O("Format",t);return{id:e,fullExtent:We(t),fullExtents:De(t),description:a,formats:l,styles:Be(t,i),title:h("Title",t),tileMatrixSets:Ke(s,t,r)}}function he(e,t){var y;const r=[],i=(y=e.layerMap)==null?void 0:y.get(t);if(!i)return null;const s=C("ResourceURL",i),a=C("Dimension",i);let l,n,p,m;return a.length&&(l=h("Identifier",a[0]),n=O("Default",a[0])||O("Value",a[0])),a.length>1&&(p=h("Identifier",a[1]),m=O("Default",a[1])||O("Value",a[1])),e.dimensionMap.set(t,{dimensions:n,dimensions2:m}),s.forEach(f=>{let c=f.getAttribute("template");if(f.getAttribute("resourceType")==="tile"){if(l&&n.length)if(c.includes("{"+l+"}"))c=c.replace("{"+l+"}","{dimensionValue}");else{const w=c.toLowerCase().indexOf("{"+l.toLowerCase()+"}");w>-1&&(c=c.substring(0,w)+"{dimensionValue}"+c.substring(w+l.length+2))}if(p&&m.length)if(c.includes("{"+p+"}"))c=c.replace("{"+p+"}","{dimensionValue2}");else{const w=c.toLowerCase().indexOf("{"+p.toLowerCase()+"}");w>-1&&(c=c.substring(0,w)+"{dimensionValue2}"+c.substring(w+p.length+2))}r.push({template:c,format:f.getAttribute("format"),resourceType:"tile"})}}),r}function _e(e,t,r,i,s,a,l,n){var c,w;const p=Ne(e,t,i);if(!((p==null?void 0:p.length)>0))return"";const{dimensionMap:m}=e,y=(c=m.get(t).dimensions)==null?void 0:c[0],f=(w=m.get(t).dimensions2)==null?void 0:w[0];return p[l%p.length].template.replaceAll(/\{Style\}/gi,s??"").replaceAll(/\{TileMatrixSet\}/gi,r??"").replaceAll(/\{TileMatrix\}/gi,a).replaceAll(/\{TileRow\}/gi,""+l).replaceAll(/\{TileCol\}/gi,""+n).replaceAll(/\{dimensionValue\}/gi,y).replaceAll(/\{dimensionValue2\}/gi,f)}function Ne(e,t,r){const i=he(e,t),s=i==null?void 0:i.filter(a=>a.format===r);return(s!=null&&s.length?s:i)??[]}function ke(e,t,r,i){const{dimensionMap:s}=e,a=he(e,t);let l="";if(a&&a.length>0){const n=s.get(t).dimensions&&s.get(t).dimensions[0],p=s.get(t).dimensions2&&s.get(t).dimensions2[0];l=a[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replaceAll(/\{Style\}/gi,i),l=l.replaceAll(/\{TileMatrixSet\}/gi,r),l=l.replaceAll(/\{TileMatrix\}/gi,"{level}"),l=l.replaceAll(/\{TileRow\}/gi,"{row}"),l=l.replaceAll(/\{TileCol\}/gi,"{col}"),l=l.replaceAll(/\{dimensionValue\}/gi,n),l=l.replaceAll(/\{dimensionValue2\}/gi,p)}return l}function We(e){const t=g("WGS84BoundingBox",e),r=t?h("LowerCorner",t).split(" "):["-180","-90"],i=t?h("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function De(e){const t=[];return ne(e,{BoundingBox:r=>{if(!r.getAttribute("crs"))return;const i=r.getAttribute("crs").toLowerCase(),s=ee(i),a=i.includes("epsg")&&Q(s.wkid);let l,n,p,m;ne(r,{LowerCorner:y=>{[l,n]=y.textContent.split(" ").map(f=>Number.parseFloat(f)),a&&([l,n]=[n,l])},UpperCorner:y=>{[p,m]=y.textContent.split(" ").map(f=>Number.parseFloat(f)),a&&([p,m]=[m,p])}}),t.push({xmin:l,ymin:n,xmax:p,ymax:m,spatialReference:s})}}),t}function Be(e,t){return C("Style",e).map(r=>{const i=g("LegendURL",r),s=g("Keywords",r),a=s?O("Keyword",s):[];let l=i&&i.getAttribute("xlink:href");return t&&(l=l&&l.replace(/^http:/i,"https:")),{abstract:h("Abstract",r),id:h("Identifier",r),isDefault:r.getAttribute("isDefault")==="true",keywords:a,legendUrl:l,title:h("Title",r)}})}function Ke(e,t,r){return C("TileMatrixSetLink",t).map(i=>qe(e,i,r))}function qe(e,t,r){const i=g("TileMatrixSet",t).textContent,s=O("TileMatrix",t),a=r.find(M=>{const I=g("Identifier",M),b=I&&I.textContent;return!!(b===i||i.split(":")&&i.split(":")[1]===b)}),l=g("TileMatrixSetLimits",t),n=l&&C("TileMatrixLimits",l),p=new Map;if(n!=null&&n.length)for(const M of n){const I=g("TileMatrix",M).textContent,b=+g("MinTileRow",M).textContent,k=+g("MaxTileRow",M).textContent,W=+g("MinTileCol",M).textContent,D=+g("MaxTileCol",M).textContent;p.set(I,{minCol:W,maxCol:D,minRow:b,maxRow:k})}const m=h("SupportedCRS",a).toLowerCase(),y=Ge(a,m),f=y.spatialReference,c=g("TileMatrix",a),w=[parseInt(h("TileWidth",c),10),parseInt(h("TileHeight",c),10)],S=[];s.length?s.forEach((M,I)=>{const b=$("TileMatrix","Identifier",M,a);S.push(pe(b,m,I,i,p))}):C("TileMatrix",a).forEach((M,I)=>{S.push(pe(M,m,I,i,p))});const v=Je(e,a,y,w,S[0]).toJSON(),P=new X({dpi:96,spatialReference:f,size:w,origin:y,lods:S}).toJSON();return{id:i,fullExtent:v,tileInfo:P}}function ee(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);t!==900913&&t!==3857||(t=102100);const r=He(e);return r!=null&&(t=r),{wkid:t}}function Ge(e,t){return ye(g("TileMatrix",e),t)}function ye(e,t){const r=ee(t),[i,s]=h("TopLeftCorner",e).split(" ").map(l=>parseFloat(l)),a=t.includes("epsg")&&Q(r.wkid);return new ge(a?{x:s,y:i,spatialReference:r}:{x:i,y:s,spatialReference:r})}function Je(e,t,r,i,s){const a=g("BoundingBox",t);let l,n,p,m,y,f;if(a&&(l=h("LowerCorner",a).split(" "),n=h("UpperCorner",a).split(" ")),l&&l.length>1&&n&&n.length>1)p=parseFloat(l[0]),y=parseFloat(l[1]),m=parseFloat(n[0]),f=parseFloat(n[1]);else{const c=g("TileMatrix",t),w=parseInt(h("MatrixWidth",c),10),S=parseInt(h("MatrixHeight",c),10);p=r.x,f=r.y,m=p+w*i[0]*s.resolution,y=f-S*i[1]*s.resolution}return ze(e,r.spatialReference,r)?new A(y,p,f,m,r.spatialReference):new A(p,y,m,f,r.spatialReference)}function ze(e,t,r){return e==="1.0.0"&&Q(t.wkid)&&!(r.spatialReference.isGeographic&&r.x<-90&&r.y>=-90)}var V;function He(e){return e.includes("crs84")||e.includes("crs:84")?V.CRS84:e.includes("crs83")||e.includes("crs:83")?V.CRS83:e.includes("crs27")||e.includes("crs:27")?V.CRS27:null}function pe(e,t,r,i,s){const a=ee(t),l=h("Identifier",e);let n=parseFloat(h("ScaleDenominator",e));const p=fe(a.wkid,n,i);n*=96/me;const m=+h("MatrixWidth",e),y=+h("MatrixHeight",e),{maxCol:f=m-1,maxRow:c=y-1,minCol:w=0,minRow:S=0}=s.get(l)??{},{x:v,y:P}=ye(e,t);return new we({cols:[w,f],level:r,levelValue:l,origin:[v,P],scale:n,resolution:p,rows:[S,c]})}function fe(e,t,r){let i;return i=B.hasOwnProperty(""+e)?B.values[B[e]]:r==="default028mm"?6370997*Math.PI/180:xe(e).metersPerDegree,7*t/25e3/i}(function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27"})(V||(V={}));var H;const ce={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},Xe=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let d=H=class extends ve(Se(Me(Ie(Te(Le(Ce)))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([re(()=>this.activeLayer,(t,r)=>{var i;r&&!((i=this.sublayers)!=null&&i.includes(r))&&(r.layer=null,r.parent=null),t&&(t.layer=this,t.parent=this)},j),ie(()=>this.sublayers,"after-add",({item:t})=>{t.layer=this,t.parent=this},j),ie(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=null,t.parent=null},j),re(()=>this.sublayers,(t,r)=>{if(r)for(const i of r)i.layer=null,i.parent=null;if(t)for(const i of t)i.layer=this,i.parent=this},j)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(se).then(()=>this._fetchService(e)).catch(t=>{throw se(t),new _("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:t})})),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new U);let i=t.layers.find(s=>s.id===this.activeLayer.id);return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i==null?void 0:i.layerIdentifier;let l=null;const n=i==null?void 0:i.tileMatrixSet;n&&(Array.isArray(n)?n.length&&(l=n[0]):l=n);const p=s==null?void 0:s.format,m=s==null?void 0:s.style;return new U({id:a,imageFormat:p,styleId:m,tileMatrixSetId:l})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=Ee("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return Ye(t.layers,r)}get supportedSpatialReferences(){var e;return((e=this.activeLayer.tileMatrixSets)==null?void 0:e.map(t=>{var r;return(r=t.tileInfo)==null?void 0:r.spatialReference}).toArray().filter(de))??[]}get tilemapCache(){var t,r;const e=(r=(t=this.activeLayer)==null?void 0:t.tileMatrixSet)==null?void 0:r.tileInfo;return e?new Ae(e):void 0}get title(){var e;return((e=this.activeLayer)==null?void 0:e.title)??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&e.substr(-1)==="/"?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r==null?void 0:r.tileInfo,s=e.fullExtent,a=new Re({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(a.customLayerParameters=this.customLayerParameters),this.customParameters&&(a.customParameters=this.customParameters),new Oe({fullExtent:s,urlTemplate:t,tileInfo:i,wmtsInfo:a})}async fetchTile(e,t,r,i={}){const{signal:s}=i,a=this.getTileUrl(e,t,r),{data:l}=await K(a,{responseType:"image",signal:s});return l}async fetchImageBitmapTile(e,t,r,i={}){const{signal:s}=i;if(this.fetchTile!==H.prototype.fetchTile){const n=await this.fetchTile(e,t,r,i);return le(n,e,t,r,s)}const a=this.getTileUrl(e,t,r),{data:l}=await K(a,{responseType:"blob",signal:s});return le(l,e,t,r,s)}findSublayerById(e){var t;return(t=this.sublayers)==null?void 0:t.find(r=>r.id===e)}getTileUrl(e,t,r){var n;const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),s=(n=i==null?void 0:i.tileInfo)==null?void 0:n.lods[e],a=s?s.levelValue||`${s.level}`:`${e}`;let l=this.resourceInfo?"":_e({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,a,t,r);return l||(l=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,a).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)),l=this._appendCustomLayerParameters(l),l}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const s=ke({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(s)return s}if(this.serviceMode==="KVP")return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if(this.serviceMode==="RESTful"){let s="";return ce[r.toLowerCase()]&&(s=ce[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)this.resourceInfo.serviceMode==="KVP"&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),ue(t.data)}catch{const r=this.serviceMode==="KVP"?"RESTful":"KVP";try{t=await this._getCapabilities(r,e),ue(t.data),this.serviceMode=r}catch(i){throw new _("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:i})}}this.resourceInfo?t.data=Ue(t.data):t.data=Ve(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,t){const r=this._getCapabilitiesUrl(e);return await K(r,{...t,responseType:"text"})}_getTileMatrixSetById(e){var i;const t=this.findSublayerById(this.activeLayer.id);return(i=t==null?void 0:t.tileMatrixSets)==null?void 0:i.find(s=>s.id===e)}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...ae(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=oe(e),i={...r.query,...t},s=Pe(i);return s===""?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=this.url.split("?")[0];const t=e==="KVP"?`${this.url}?request=GetCapabilities&service=WMTS&version=${this.version}`:`${this.url}/${this.version}/WMTSCapabilities.xml`;return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=oe(e).query;if(!t)return null;const r={};return Object.keys(t).forEach(i=>{r[i.toLowerCase()]=t[i]}),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const i=Object.keys(r);i.length&&(e=e?ae(e):{},i.forEach(s=>{e.hasOwnProperty(s)||Xe.has(s)||(e[s]=r[s])}))}return e}};function Ye(e,t){return e.map(r=>{const i=new U;return i.read(r,t),i})}o([u()],d.prototype,"dimensionMap",void 0),o([u()],d.prototype,"layerMap",void 0),o([u({type:U,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],d.prototype,"activeLayer",void 0),o([R("service","activeLayer",["layers"])],d.prototype,"readActiveLayerFromService",null),o([R(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],d.prototype,"readActiveLayerFromItemOrWebDoc",null),o([be(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:X},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],d.prototype,"writeActiveLayer",null),o([u({type:String,value:"",json:{write:!0}})],d.prototype,"copyright",void 0),o([u({type:["show","hide"]})],d.prototype,"listMode",void 0),o([u({json:{read:!0,write:!0}})],d.prototype,"blendMode",void 0),o([u({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],d.prototype,"customParameters",void 0),o([R(["portal-item","web-document"],"customParameters")],d.prototype,"readCustomParameters",null),o([u({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],d.prototype,"customLayerParameters",void 0),o([u({type:A,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],d.prototype,"fullExtent",void 0),o([u({readOnly:!0})],d.prototype,"fullExtents",null),o([u({type:["WebTiledLayer"]})],d.prototype,"operationalLayerType",void 0),o([u()],d.prototype,"resourceInfo",void 0),o([u()],d.prototype,"serviceMode",void 0),o([R(["portal-item","web-document"],"serviceMode",["templateUrl"])],d.prototype,"readServiceMode",null),o([u({type:q.ofType(U)})],d.prototype,"sublayers",void 0),o([R("service","sublayers",["layers"])],d.prototype,"readSublayersFromService",null),o([u({readOnly:!0})],d.prototype,"supportedSpatialReferences",null),o([u({readOnly:!0})],d.prototype,"tilemapCache",null),o([u({json:{read:{source:"title"}}})],d.prototype,"title",null),o([u({json:{read:!1},readOnly:!0,value:"wmts"})],d.prototype,"type",void 0),o([u({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],d.prototype,"url",null),o([u()],d.prototype,"version",void 0),d=H=o([N("esri.layers.WMTSLayer")],d);const it=d;export{it as default};
