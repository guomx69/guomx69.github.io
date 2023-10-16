import{hN as xt,hY as vt,hZ as dt,h_ as wt,h$ as Mt,bL as Rt,ap as h,aq as P,at as bt,c1 as _t,a as U,i0 as Ct,bS as it,i1 as b,i2 as Ot,i3 as st,i4 as Z,i5 as Nt,T as lt,i6 as j,i7 as B,i8 as H,gJ as K,gI as Q,i9 as Et,hT as St,ia as jt,ib as Bt,ic as Lt,id as L,ie as ct,ig as X,ih as zt,ii as Vt,gu as It,ij as Gt,ik as Wt,il as qt,im as Yt}from"./index-646a7cf7.js";import{e as ut}from"./mat3f64-221ce671.js";import{e as w,o as E}from"./mat4f64-1413b4a7.js";import{c as R}from"./spatialReferenceEllipsoidUtils-fde27c01.js";import{m as Ut,p as kt,t as tt,o as Dt}from"./MeshLocalVertexSpace-dbbdb26b.js";import{m as Jt}from"./MeshGeoreferencedRelativeVertexSpace-e796d0ae.js";import{v as G,y as Zt,x as Ht}from"./quat-2ba2d781.js";import{e as k}from"./quatf64-3363c48e.js";import{n as x,s as ft,r as M}from"./vec32-048339ee.js";import{i as $,T as A}from"./BufferView-edebfb6d.js";function T(t=pt){return[t[0],t[1],t[2],t[3]]}function S(t,r,e=T()){return xt(e,t),e[3]=r,e}function rt(t,r,e=T()){return G(_,t,W(t)),G(et,r,W(r)),Zt(_,et,_),Qt(e,vt(Ht(e,_)))}function Nr(t,r,e,n=T()){return S(dt,t,C),S(wt,r,nt),S(Mt,e,ot),rt(C,nt,C),rt(C,ot,n),n}function Er(t){return t}function Kt(t){return t[3]}function W(t){return Rt(t[3])}function Qt(t,r){return t[3]=r,t}const pt=[0,0,1,0],_=k(),et=k();T();const C=T(),nt=T(),ot=T();var q;let y=q=class extends _t{constructor(t){super(t),this.translation=U(),this.rotationAxis=Ct(pt),this.rotationAngle=0,this.scale=it(1,1,1)}get rotation(){return S(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=b(t),this.rotationAngle=Kt(t)}get localMatrix(){const t=w();return G(at,this.rotation,W(this.rotation)),Ot(t,at,this.translation,this.scale),t}get localMatrixInverse(){return st(w(),this.localMatrix)}applyLocal(t,r){return Z(r,t,this.localMatrix)}applyLocalInverse(t,r){return Z(r,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&Nt(this.localMatrix,t.localMatrix)}clone(){const t={translation:b(this.translation),rotationAxis:b(this.rotationAxis),rotationAngle:this.rotationAngle,scale:b(this.scale)};return new q(t)}};h([P({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"translation",void 0),h([P({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAxis",void 0),h([P({type:Number,nonNullable:!0,json:{write:!0}})],y.prototype,"rotationAngle",void 0),h([P({type:[Number],nonNullable:!0,json:{write:!0}})],y.prototype,"scale",void 0),h([P()],y.prototype,"rotation",null),h([P()],y.prototype,"localMatrix",null),h([P()],y.prototype,"localMatrixInverse",null),y=q=h([bt("esri.geometry.support.MeshTransform")],y);const at=k(),Xt=y;function gt(t,r){return t.isGeographic||t.isWebMercator&&((r==null?void 0:r.geographic)??!0)}function Sr(t,r,e){const n=!t.isGeoreferenced;(e==null?void 0:e.geographic)!=null&&e.geographic!==n&&lt.getLogger(r).warnOnce(`Specifying the 'geographic' parameter (${e.geographic}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}const z=lt.getLogger("esri.geometry.support.meshUtils.normalProjection");function tr(t,r,e,n,o){return I(n)?(V(m.TO_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o)),o):(z.error("Cannot convert spatial reference to PCPF"),o)}function rr(t,r,e,n,o){return I(n)?(V(m.FROM_PCPF,$.fromTypedArray(t),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o)),o):(z.error("Cannot convert to spatial reference from PCPF"),o)}function er(t,r,e){return j(t,r,0,e,R(r),0,t.length/3),e}function nr(t,r,e){return j(t,R(e),0,r,e,0,t.length/3),r}function or(t,r,e){return L(u,e),x(r,t,u),ct(u)||ft(r,r),r}function ar(t,r,e){if(L(u,e),x(r,t,u,4),ct(u)||ft(r,r,4),t!==r)for(let n=3;n<t.length;n+=4)r[n]=t[n];return r}function ir(t,r,e,n,o){if(!I(n))return z.error("Cannot convert spatial reference to PCPF"),o;V(m.TO_PCPF,$.fromTypedArray(t,4*Float32Array.BYTES_PER_ELEMENT),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o,4*Float32Array.BYTES_PER_ELEMENT));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function sr(t,r,e,n,o){if(!I(n))return z.error("Cannot convert to spatial reference from PCPF"),o;V(m.FROM_PCPF,$.fromTypedArray(t,16),A.fromTypedArray(r),A.fromTypedArray(e),n,$.fromTypedArray(o,16));for(let a=3;a<t.length;a+=4)o[a]=t[a];return o}function V(t,r,e,n,o,a){if(!r)return;const i=e.count,c=R(o);if(yt(o))for(let s=0;s<i;s++)n.getVec(s,O),r.getVec(s,g),B(c,O,N,c),H(u,N),t===m.FROM_PCPF&&K(u,u),Q(g,g,u),a.setVec(s,g);else for(let s=0;s<i;s++){n.getVec(s,O),r.getVec(s,g),B(c,O,N,c),H(u,N);const l=Et(e.get(s,1));let f=Math.cos(l);t===m.TO_PCPF&&(f=1/f),u[0]*=f,u[1]*=f,u[2]*=f,u[3]*=f,u[4]*=f,u[5]*=f,t===m.FROM_PCPF&&K(u,u),Q(g,g,u),St(g,g),a.setVec(s,g)}return a}function I(t){return yt(t)||lr(t)}function yt(t){return t.isWGS84||jt(t)||Bt(t)||Lt(t)}function lr(t){return t.isWebMercator}var m;(function(t){t[t.TO_PCPF=0]="TO_PCPF",t[t.FROM_PCPF=1]="FROM_PCPF"})(m||(m={}));const O=U(),g=U(),N=w(),u=ut();function D(t,r,e){return gt(r.spatialReference,e)?gr(t,r,e):pr(t,r,e)}function mt(t,r,e,n){const{position:o,normal:a,tangent:i}=t;if(!r.isRelative)return{position:o,normal:a,tangent:i};const c=(e==null?void 0:e.localMatrix)??E;return D({position:M(new Float64Array(o.length),o,c),normal:a!=null?or(a,new Float32Array(a.length),c):null,tangent:i!=null?ar(i,new Float32Array(i.length),c):null},r.getOriginPoint(n),{geographic:!r.isGeoreferenced})}function cr(t,r,e){if(e!=null&&e.useTransform){const{position:n,normal:o,tangent:a}=t,{x:i,y:c,z:s}=r,l=it(i,c,s??0);return{vertexAttributes:{position:n,normal:o,tangent:a},vertexSpace:e.geographic??1?new Ut({origin:l}):new Jt({origin:l}),transform:new Xt}}return{vertexAttributes:D(t,r,e),vertexSpace:new kt,transform:null}}function Y(t,r,e){return gt(r.spatialReference,e)?$r(t,r,e):ht(t,r,e)}function ur(t,r,e,n,o){if(!r.isRelative)return Y(t,n,o);const{spatialReference:a}=n,i=mt(t,r,e,a);return n.equals(r.getOriginPoint(a))?ht(i,n,o):Y(i,n,o)}function fr({positions:t,transform:r,vertexSpace:e,inSpatialReference:n,outSpatialReference:o,outPositions:a,local:i}){const c=e.isRelative?e.origin:X,s=e.isRelative?(r==null?void 0:r.localMatrix)??E:E;if(e.isGeoreferenced){const p=a??tt(t.length);if(zt(s,E)?Dt(p,t):M(p,t,s),!Vt(c,X)){const[Pt,Ft,Tt]=c;for(let d=0;d<p.length;d+=3)p[d]+=Pt,p[d+1]+=Ft,p[d+2]+=Tt}return j(p,n,0,p,o,0,p.length/3),p}const l=R(n),f=!i&&It(n,l)?l:n;B(n,c,F,f),Gt(F,F,s);const v=a??tt(t.length);return M(v,t,F),j(v,f,0,v,o,0,v.length/3),v}function pr(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,i=r.y,c=r.z??0,s=J(e?e.unit:null,r.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=o[l]*s+a,n[l+1]=o[l+1]*s+i,n[l+2]=o[l+2]*s+c;return{position:n,normal:t.normal,tangent:t.tangent}}function gr(t,r,e){const n=r.spatialReference,o=$t(r,e,F),a=new Float64Array(t.position.length),i=yr(t.position,o,n,a),c=L(At,o);return{position:i,normal:mr(i,a,t.normal,c,n),tangent:hr(i,a,t.tangent,c,n)}}function yr(t,r,e,n){M(n,t,r);const o=new Float64Array(t.length);return nr(n,o,e)}function mr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);return x(a,e,n),rr(a,t,r,o,a),a}function hr(t,r,e,n,o){if(e==null)return null;const a=new Float32Array(e.length);x(a,e,n,4);for(let i=3;i<a.length;i+=4)a[i]=e[i];return sr(a,t,r,o,a),a}function ht(t,r,e){const n=new Float64Array(t.position.length),o=t.position,a=r.x,i=r.y,c=r.z??0,s=J(e?e.unit:null,r.spatialReference);for(let l=0;l<o.length;l+=3)n[l]=(o[l]-a)/s,n[l+1]=(o[l+1]-i)/s,n[l+2]=(o[l+2]-c)/s;return{position:n,normal:t.normal,tangent:t.tangent}}function $r(t,r,e){const n=r.spatialReference;$t(r,e,F);const o=st(Tr,F),a=new Float64Array(t.position.length),i=Ar(t.position,n,o,a),c=L(At,o);return{position:i,normal:Pr(t.normal,t.position,a,n,c),tangent:Fr(t.tangent,t.position,a,n,c)}}function $t(t,r,e){B(t.spatialReference,[t.x,t.y,t.z??0],e,R(t.spatialReference));const n=J(r?r.unit:null,t.spatialReference);return Wt(e,e,[n,n,n]),e}function Ar(t,r,e,n){const o=er(t,r,n),a=new Float64Array(o.length);return M(a,o,e),a}function Pr(t,r,e,n,o){if(t==null)return null;const a=tr(t,r,e,n,new Float32Array(t.length));return x(a,a,o),a}function Fr(t,r,e,n,o){if(t==null)return null;const a=ir(t,r,e,n,new Float32Array(t.length));return x(a,a,o,4),a}function J(t,r){if(t==null)return 1;const e=qt(r);return 1/Yt(e,"meters",t)}const F=w(),Tr=w(),At=ut(),jr=Object.freeze(Object.defineProperty({__proto__:null,georeference:D,georeferenceApplyTransform:mt,georeferenceByTransform:cr,project:fr,ungeoreference:Y,ungeoreferenceByTransform:ur},Symbol.toStringTag,{value:"Module"}));export{Y as D,nr as E,fr as I,Xt as N,D as O,ir as R,mt as T,tr as _,T as a,ur as b,jr as c,rt as g,er as h,rr as j,Nr as l,Sr as o,cr as q,gt as r,sr as v,W as w,Er as x};
