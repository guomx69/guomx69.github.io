import{eY as d,aK as S,an as x,a8 as b,c2 as N,am as V,bd as W,ej as q,a$ as rn,ab as an}from"./index-cf1f9edc.js";import{l,Q as h,B,c as z,z as A,q as F,y as j,m as P,V as D,t as O,v as w,u as E,w as p,x as L,H as T,b as R,I as sn,K as un,M as cn,P as H,A as M,S as C,U as fn,X as J}from"./arcadeUtils-52d9c897.js";import{A as on,h as ln,S as dn,m as wn,x as hn,p as mn,O as yn,g as pn,R as vn,D as gn,b as Pn,E as In,k as An,y as Fn,w as Rn,W as K,K as Q,F as Z,M as U,d as xn,C as X,U as Y,B as Nn,L as bn,P as Sn,v as On,H as G,N as _,J as jn,j as Dn,T as Mn,V as Cn}from"./geometryEngineAsync-1f5ef467.js";import{t as i,e as s}from"./executionError-c92d3b85.js";import{t as $,s as nn}from"./portalUtils-4067a4ae.js";import"./arcadeTimeUtils-0c8493bd.js";import"./number-be8268ad.js";function tn(r){return rn.indexOf("4.")===0?N.fromExtent(r):new N({spatialReference:r.spatialReference,rings:[[[r.xmin,r.ymin],[r.xmin,r.ymax],[r.xmax,r.ymax],[r.xmax,r.ymin],[r.xmin,r.ymin]]]})}function I(r,t,e){if(h(r,2,2,t,e),!(r[0]instanceof d&&r[1]instanceof d)){if(!(r[0]instanceof d&&r[1]===null)){if(!(r[1]instanceof d&&r[0]===null)){if(r[0]!==null||r[1]!==null)throw new i(t,s.InvalidParameter,e)}}}}async function en(r,t){if(r.type!=="polygon"&&r.type!=="polyline"&&r.type!=="extent")return 0;let e=1;(r.spatialReference.vcsWkid||r.spatialReference.latestVcsWkid)&&(e=fn(r.spatialReference)/an(r.spatialReference));let c=0;if(r.type==="polyline")for(const n of r.paths)for(let a=1;a<n.length;a++)c+=J(n[a],n[a-1],e);else if(r.type==="polygon")for(const n of r.rings){for(let a=1;a<n.length;a++)c+=J(n[a],n[a-1],e);(n[0][0]!==n[n.length-1][0]||n[0][1]!==n[n.length-1][1]||n[0][2]!==void 0&&n[0][2]!==n[n.length-1][2])&&(c+=J(n[0],n[n.length-1],e))}else r.type==="extent"&&(c+=2*J([r.xmin,r.ymin,0],[r.xmax,r.ymin,0],e),c+=2*J([r.xmin,r.ymin,0],[r.xmin,r.ymax,0],e),c*=2,c+=4*Math.abs(w(r.zmax,0)*e-w(r.zmin,0)*e));const o=new x({hasZ:!1,hasM:!1,spatialReference:r.spatialReference,paths:[[0,0],[0,c]]});return Z(o,t)}function Vn(r){r.mode==="async"&&(r.functions.disjoint=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]===null||n[1]===null||on(n[0],n[1])))},r.functions.intersects=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&ln(n[0],n[1])))},r.functions.touches=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&dn(n[0],n[1])))},r.functions.crosses=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&wn(n[0],n[1])))},r.functions.within=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&hn(n[0],n[1])))},r.functions.contains=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&mn(n[0],n[1])))},r.functions.overlaps=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]!==null&&yn(n[0],n[1])))},r.functions.equals=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(h(n,2,2,t,e),n[0]===n[1]||(n[0]instanceof d&&n[1]instanceof d?pn(n[0],n[1]):!(!B(n[0])||!B(n[1]))&&n[0].equals(n[1]))))},r.functions.relate=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,3,3,t,e),n[0]instanceof d&&n[1]instanceof d)return vn(n[0],n[1],z(n[2]));if(n[0]instanceof d&&n[1]===null||n[1]instanceof d&&n[0]===null||n[0]===null&&n[1]===null)return!1;throw new i(t,s.InvalidParameter,e)})},r.functions.intersection=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]===null||n[1]===null?null:gn(n[0],n[1])))},r.functions.union=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{const a=[];if((n=l(n)).length===0)throw new i(t,s.WrongNumberOfParameters,e);if(n.length===1)if(A(n[0])){const u=l(n[0]);for(let f=0;f<u.length;f++)if(u[f]!==null){if(!(u[f]instanceof d))throw new i(t,s.InvalidParameter,e);a.push(u[f])}}else{if(!F(n[0])){if(n[0]instanceof d)return j(P(n[0]),t.spatialReference);if(n[0]===null)return null;throw new i(t,s.InvalidParameter,e)}{const u=l(n[0].toArray());for(let f=0;f<u.length;f++)if(u[f]!==null){if(!(u[f]instanceof d))throw new i(t,s.InvalidParameter,e);a.push(u[f])}}}else for(let u=0;u<n.length;u++)if(n[u]!==null){if(!(n[u]instanceof d))throw new i(t,s.InvalidParameter,e);a.push(n[u])}return a.length===0?null:Pn(a)})},r.functions.difference=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]!==null&&n[1]===null?P(n[0]):n[0]===null?null:In(n[0],n[1])))},r.functions.symmetricdifference=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>(I(n=l(n),t,e),n[0]===null&&n[1]===null?null:n[0]===null?P(n[1]):n[1]===null?P(n[0]):An(n[0],n[1])))},r.functions.clip=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,2,t,e),!(n[1]instanceof S)&&n[1]!==null)throw new i(t,s.InvalidParameter,e);if(n[0]===null)return null;if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);return n[1]===null?null:Fn(n[0],n[1])})},r.functions.cut=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,2,t,e),!(n[1]instanceof x)&&n[1]!==null)throw new i(t,s.InvalidParameter,e);if(n[0]===null)return[];if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);return n[1]===null?[P(n[0])]:Rn(n[0],n[1])})},r.functions.area=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=l(n))[0]===null)return 0;if(D(n[0])){const a=await n[0].sumArea(O(w(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new i(t,s.Cancelled,e);return a}if(A(n[0])||F(n[0])){const a=E(n[0],t.spatialReference);return a===null?0:K(a,O(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);return K(n[0],O(w(n[1],-1)))})},r.functions.areageodetic=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=l(n))[0]===null)return 0;if(D(n[0])){const a=await n[0].sumArea(O(w(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new i(t,s.Cancelled,e);return a}if(A(n[0])||F(n[0])){const a=E(n[0],t.spatialReference);return a===null?0:Q(a,O(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);return Q(n[0],O(w(n[1],-1)))})},r.functions.length=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=l(n))[0]===null)return 0;if(D(n[0])){const a=await n[0].sumLength(p(w(n[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new i(t,s.Cancelled,e);return a}if(A(n[0])||F(n[0])){const a=L(n[0],t.spatialReference);return a===null?0:Z(a,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);return Z(n[0],p(w(n[1],-1)))})},r.functions.length3d=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(h(n,1,2,t,e),(n=l(n))[0]===null)return 0;if(A(n[0])||F(n[0])){const a=L(n[0],t.spatialReference);return a===null?0:a.hasZ===!0?en(a,p(w(n[1],-1))):Z(a,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);return n[0].hasZ===!0?en(n[0],p(w(n[1],-1))):Z(n[0],p(w(n[1],-1)))})},r.functions.lengthgeodetic=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(h(n,1,2,t,e),(n=l(n))[0]===null)return 0;if(D(n[0])){const a=await n[0].sumLength(p(w(n[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new i(t,s.Cancelled,e);return a}if(A(n[0])||F(n[0])){const a=L(n[0],t.spatialReference);return a===null?0:U(a,p(w(n[1],-1)))}if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);return U(n[0],p(w(n[1],-1)))})},r.functions.distance=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=l(n),h(n,2,3,t,e);let a=n[0];(A(n[0])||F(n[0]))&&(a=T(n[0],t.spatialReference));let u=n[1];if((A(n[1])||F(n[1]))&&(u=T(n[1],t.spatialReference)),!(a instanceof d))throw new i(t,s.InvalidParameter,e);if(!(u instanceof d))throw new i(t,s.InvalidParameter,e);return xn(a,u,p(w(n[2],-1)))})},r.functions.distancegeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=l(n),h(n,2,3,t,e);const a=n[0],u=n[1];if(!(a instanceof b))throw new i(t,s.InvalidParameter,e);if(!(u instanceof b))throw new i(t,s.InvalidParameter,e);const f=new x({paths:[],spatialReference:a.spatialReference});return f.addPath([a,u]),U(f,p(w(n[2],-1)))})},r.functions.densify=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);const a=R(n[1]);if(isNaN(a))throw new i(t,s.InvalidParameter,e);if(a<=0)throw new i(t,s.InvalidParameter,e);return n[0]instanceof N||n[0]instanceof x?X(n[0],a,p(w(n[2],-1))):n[0]instanceof S?X(tn(n[0]),a,p(w(n[2],-1))):n[0]})},r.functions.densifygeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);const a=R(n[1]);if(isNaN(a))throw new i(t,s.InvalidParameter,e);if(a<=0)throw new i(t,s.InvalidParameter,e);return n[0]instanceof N||n[0]instanceof x?Y(n[0],a,p(w(n[2],-1))):n[0]instanceof S?Y(tn(n[0]),a,p(w(n[2],-1))):n[0]})},r.functions.generalize=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,4,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);const a=R(n[1]);if(isNaN(a))throw new i(t,s.InvalidParameter,e);return Nn(n[0],a,sn(w(n[2],!0)),p(w(n[3],-1)))})},r.functions.buffer=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);const a=R(n[1]);if(isNaN(a))throw new i(t,s.InvalidParameter,e);return a===0?P(n[0]):bn(n[0],a,p(w(n[2],-1)))})},r.functions.buffergeodetic=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,3,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);const a=R(n[1]);if(isNaN(a))throw new i(t,s.InvalidParameter,e);return a===0?P(n[0]):Sn(n[0],a,p(w(n[2],-1)))})},r.functions.offset=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,2,6,t,e),n[0]===null)return null;if(!(n[0]instanceof N||n[0]instanceof x))throw new i(t,s.InvalidParameter,e);const a=R(n[1]);if(isNaN(a))throw new i(t,s.InvalidParameter,e);const u=R(w(n[4],10));if(isNaN(u))throw new i(t,s.InvalidParameter,e);const f=R(w(n[5],0));if(isNaN(f))throw new i(t,s.InvalidParameter,e);return On(n[0],a,p(w(n[2],-1)),z(w(n[3],"round")).toLowerCase(),u,f)})},r.functions.rotate=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{n=l(n),h(n,2,3,t,e);let a=n[0];if(a===null)return null;if(!(a instanceof d))throw new i(t,s.InvalidParameter,e);a instanceof S&&(a=N.fromExtent(a));const u=R(n[1]);if(isNaN(u))throw new i(t,s.InvalidParameter,e);const f=w(n[2],null);if(f===null)return G(a,u);if(f instanceof b)return G(a,u,f);throw new i(t,s.InvalidParameter,e)})},r.functions.centroid=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,1,1,t,e),n[0]===null)return null;let a=n[0];if((A(n[0])||F(n[0]))&&(a=T(n[0],t.spatialReference)),a===null)return null;if(!(a instanceof d))throw new i(t,s.InvalidParameter,e);return a instanceof b?j(P(n[0]),t.spatialReference):a instanceof N?a.centroid:a instanceof x?un(a):a instanceof V?cn(a):a instanceof S?a.center:null})},r.functions.multiparttosinglepart=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{n=l(n),h(n,1,1,t,e);const a=[];if(n[0]===null)return null;if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);if(n[0]instanceof b)return[j(P(n[0]),t.spatialReference)];if(n[0]instanceof S)return[j(P(n[0]),t.spatialReference)];const u=await _(n[0]);if(u instanceof N){const f=[],y=[];for(let m=0;m<u.rings.length;m++)if(u.isClockwise(u.rings[m])){const v=W({rings:[u.rings[m]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});f.push(v)}else y.push({ring:u.rings[m],pt:u.getPoint(m,0)});for(let m=0;m<y.length;m++)for(let v=0;v<f.length;v++)if(f[v].contains(y[m].pt)){f[v].addRing(y[m].ring);break}return f}if(u instanceof x){const f=[];for(let y=0;y<u.paths.length;y++){const m=W({paths:[u.paths[y]],hasZ:u.hasZ===!0,hazM:u.hasM===!0,spatialReference:u.spatialReference.toJSON()});f.push(m)}return f}if(n[0]instanceof V){const f=j(P(n[0]),t.spatialReference);for(let y=0;y<f.points.length;y++)a.push(f.getPoint(y));return a}return null})},r.functions.issimple=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,1,1,t,e),n[0]===null)return!0;if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);return jn(n[0])})},r.functions.simplify=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);return _(n[0])})},r.functions.convexhull=function(t,e){return r.standardFunctionAsync(t,e,(c,o,n)=>{if(n=l(n),h(n,1,1,t,e),n[0]===null)return null;if(!(n[0]instanceof d))throw new i(t,s.InvalidParameter,e);return Dn(n[0])})},r.functions.getuser=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{h(n,0,2,t,e);let a=w(n[1],""),u=a===!0;if(a=a===!0||a===!1?"":z(a),n.length===0||n[0]instanceof H){let y=null;y=t.services&&t.services.portal?t.services.portal:q.getDefault(),n.length>0&&(y=$(n[0],y));const m=await nn(y,a,u);if(m){const v=JSON.parse(JSON.stringify(m));for(const g of["lastLogin","created","modified"])v[g]!==void 0&&v[g]!==null&&(v[g]=new Date(v[g]));return M.convertObjectToArcadeDictionary(v,C(t))}return null}let f=null;if(D(n[0])&&(f=n[0]),f){if(u=!1,a)return null;await f.load();const y=await f.getOwningSystemUrl();if(!y){if(!a){const g=await f.getIdentityUser();return g?M.convertObjectToArcadeDictionary({username:g},C(t)):null}return null}let m=null;m=t.services&&t.services.portal?t.services.portal:q.getDefault(),m=$(new H(y),m);const v=await nn(m,a,u);if(v){const g=JSON.parse(JSON.stringify(v));for(const k of["lastLogin","created","modified"])g[k]!==void 0&&g[k]!==null&&(g[k]=new Date(g[k]));return M.convertObjectToArcadeDictionary(g,C(t))}return null}throw new i(t,s.InvalidParameter,e)})}),r.functions.nearestcoordinate=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(n=l(n),h(n,2,2,t,e),!(n[0]instanceof d||n[0]===null))throw new i(t,s.InvalidParameter,e);if(!(n[1]instanceof b||n[1]===null))throw new i(t,s.InvalidParameter,e);if(n[0]===null||n[1]===null)return null;const a=await Mn(n[0],n[1]);return a===null?null:M.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance},C(t),!1,!0)})},r.functions.nearestvertex=function(t,e){return r.standardFunctionAsync(t,e,async(c,o,n)=>{if(n=l(n),h(n,2,2,t,e),!(n[0]instanceof d||n[0]===null))throw new i(t,s.InvalidParameter,e);if(!(n[1]instanceof b||n[1]===null))throw new i(t,s.InvalidParameter,e);if(n[0]===null||n[1]===null)return null;const a=await Cn(n[0],n[1]);return a===null?null:M.convertObjectToArcadeDictionary({coordinate:a.coordinate,distance:a.distance},C(t),!1,!0)})}}export{Vn as registerFunctions};
