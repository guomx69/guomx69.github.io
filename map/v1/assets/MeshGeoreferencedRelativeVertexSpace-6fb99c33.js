import{aU as a,a as n,L as l,bM as p,ah as o,fE as c,ai as g,al as d,dB as y}from"./index-92ca6b80.js";let r=class extends a(y){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=n()}getOriginPoint(e){const[t,i,s]=this.origin;return new l({x:t,y:i,z:s,spatialReference:e})}setOriginFormPoint({x:e,y:t,z:i}){this.origin=p(e,t,i??0)}};o([c({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],r.prototype,"type",void 0),o([g({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"origin",void 0),r=o([d("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],r);const h=r;export{h as m};
