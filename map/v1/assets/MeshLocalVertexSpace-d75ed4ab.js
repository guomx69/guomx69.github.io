import{gi as a,hk as u,aU as n,dB as l,ah as s,fE as c,al as y,a as f,L as g,bM as h,ai as d}from"./index-92ca6b80.js";function m(e,r=!1){return e<=a?r?new Array(e).fill(0):new Array(e):new Float64Array(e)}function x(e){return(u(e)?e.length:e.byteLength/8)<=a?Array.from(e):new Float64Array(e)}function $(e,r,t){return Array.isArray(e)?e.slice(r,r+t):e.subarray(r,r+t)}function w(e,r){for(let t=0;t<r.length;++t)e[t]=r[t];return e}function b(e){return Array.isArray(e)?new Float64Array(e):e}let i=class extends n(l){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};s([c({georeferenced:"georeferenced"},{readOnly:!0})],i.prototype,"type",void 0),i=s([y("esri.geometry.support.MeshGeoreferencedVertexSpace")],i);const v=i;let o=class extends n(l){constructor(e){super(e),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=f()}getOriginPoint(e){const[r,t,p]=this.origin;return new g({x:r,y:t,z:p,spatialReference:e})}setOriginFormPoint({x:e,y:r,z:t}){this.origin=h(e,r,t??0)}};s([c({local:"local"},{readOnly:!0})],o.prototype,"type",void 0),s([d({type:[Number],nonNullable:!0,json:{write:!0}})],o.prototype,"origin",void 0),o=s([y("esri.geometry.support.MeshLocalVertexSpace")],o);const F=o;export{$ as a,x as e,F as m,w as o,v as p,m as t,b as y};
