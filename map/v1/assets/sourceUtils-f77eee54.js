import{iT as m,iU as p,aM as g,hk as y,iV as w,em as f,_}from"./index-863b69c4.js";class I{constructor(){this.code=null,this.description=null}}class b{constructor(n){this.error=new I,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=n}}function d(e){return new b(e)}class v{constructor(n){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=n}}function E(e){return new v(e)}const a=new Set;function T(e,n,t,h=!1,u){a.clear();for(const s in t){const i=e.get(s);if(!i)continue;const l=t[s],r=q(i,l);if(r!==l&&u&&u.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:i,originalValue:l,sanitizedValue:r}}),a.add(i.name),i&&(h||i.editable)){const c=m(i,r);if(c)return d(p(c,i,r));n[i.name]=r}}for(const s of(e==null?void 0:e.requiredFields)??[])if(!a.has(s.name))return d(`missing required field "${s.name}"`);return null}function q(e,n){let t=n;return typeof n=="string"&&g(e)?t=parseFloat(n):n!=null&&y(e)&&typeof n!="string"&&(t=String(n)),w(t)}let o;function j(e,n){if(!e||!f(n))return e;if("rings"in e||"paths"in e){if(o==null)throw new TypeError("geometry engine not loaded");return o.simplify(n,e)}return e}async function P(){return o==null&&(o=await _(()=>import("./geometryEngineJSON-27b741bc.js"),["assets/geometryEngineJSON-27b741bc.js","assets/geometryEngineBase-da106c70.js","assets/index-863b69c4.js","assets/index-aa249352.css","assets/geometryEngineJSON-a61cdbeb.js","assets/json-48e3ea08.js"])),o}async function F(e,n){!f(e)||n!=="esriGeometryPolygon"&&n!=="esriGeometryPolyline"||await P()}export{E as c,T as d,j as h,d as u,F as y};