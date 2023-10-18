import{G as L,bq as R,de as B,jr as C,oe as S,kL as P,b3 as z,ja as q}from"./index-a7b6bd71.js";import{e as A}from"./mat3f64-221ce671.js";import{p as D,m as G,c as N,g as k,a as K}from"./meshFeatureSet-b9198c7b.js";import{c as O,x as j,L as Q,O as E,i as F,E as U,T as V,u as H}from"./BufferView-a525abe2.js";import{t as J,f as W,i as X,o as M}from"./vec32-94ffecc4.js";import{n as Y,l as Z,a as ee,d as te,r as oe,e as ne,g as v,h as re,i as se,j as I,k as ae,m as le,o as ue}from"./DefaultMaterial_COLOR_GAMMA-e9f38770.js";import{e as ie}from"./types-1305598a.js";import{q as ce}from"./georeference-f8a6aa16.js";import{t as fe}from"./resourceUtils-1d112ccb.js";import{D as w}from"./enums-b14466b3.js";import"./imageUtils-c2d0d1ae.js";import"./MeshGeoreferencedRelativeVertexSpace-4bdafaa0.js";import"./MeshLocalVertexSpace-323a376b.js";import"./earcut-f9d24089.js";import"./Indices-6c0f8abd.js";import"./deduplicate-3dac155d.js";import"./External-78928aec.js";import"./mat4f64-1413b4a7.js";import"./spatialReferenceEllipsoidUtils-4b7cd7d7.js";import"./quat-9ddbc3c2.js";import"./quatf64-3363c48e.js";import"./basicInterfaces-4ab7cc6a.js";function me(e,o,t){const a=e.typedBuffer,s=e.typedBufferStride,r=o.typedBuffer,f=o.typedBufferStride,l=t?t.count:o.count;let u=(t&&t.dstIndex?t.dstIndex:0)*s,c=(t&&t.srcIndex?t.srcIndex:0)*f;for(let i=0;i<l;++i){for(let n=0;n<9;++n)a[u+n]=r[c+n];u+=s,c+=f}}Object.freeze(Object.defineProperty({__proto__:null,copy:me},Symbol.toStringTag,{value:"Module"}));function pe(e,o,t){const a=e.typedBuffer,s=e.typedBufferStride,r=o.typedBuffer,f=o.typedBufferStride,l=t?t.count:o.count;let u=(t&&t.dstIndex?t.dstIndex:0)*s,c=(t&&t.srcIndex?t.srcIndex:0)*f;for(let i=0;i<l;++i){for(let n=0;n<16;++n)a[u+n]=r[c+n];u+=s,c+=f}}Object.freeze(Object.defineProperty({__proto__:null,copy:pe},Symbol.toStringTag,{value:"Module"}));function T(e,o){return new e(new ArrayBuffer(o*e.ElementCount*ie(e.ElementType)))}async function Ve(e,o,t){const a={...t,useTransform:(t==null?void 0:t.useTransform)??!0},s=new Y(de(a)),r=(await Z(s,o,a,!0)).model,f=r.lods.shift(),l=new Map,u=new Map;r.textures.forEach((g,h)=>l.set(h,Te(g))),r.materials.forEach((g,h)=>u.set(h,$e(g,l)));const c=ge(f);for(const g of c.parts)ye(c,g,u);const{position:i,normal:n,tangent:m,color:p,texCoord0:y}=c.vertexAttributes,b={position:i.typedBuffer,normal:n!=null?n.typedBuffer:null,tangent:m!=null?m.typedBuffer:null,uv:y!=null?y.typedBuffer:null,color:p!=null?p.typedBuffer:null},x=ce(b,e,a);return{transform:x.transform,vertexSpace:x.vertexSpace,components:c.components,spatialReference:e.spatialReference,vertexAttributes:new D({position:x.vertexAttributes.position,normal:x.vertexAttributes.normal,tangent:x.vertexAttributes.tangent,color:b.color,uv:b.uv})}}function de(e){const o=e==null?void 0:e.resolveFile;return o?{busy:!1,request:async(t,a,s)=>{const r=o(t);return(await L(r,{responseType:a==="image"?"image":a==="binary"?"array-buffer":"json",signal:s!=null?s.signal:null})).data}}:null}function $(e,o){if(e==null)return"-";const t=e.typedBuffer;return`${R(o,t.buffer,()=>o.size)}/${t.byteOffset}/${t.byteLength}`}function xe(e){return e!=null?e.toString():"-"}function ge(e){let o=0;const t={color:!1,tangent:!1,normal:!1,texCoord0:!1},a=new Map,s=new Map,r=[];for(const f of e.parts){const{attributes:{position:l,normal:u,color:c,tangent:i,texCoord0:n}}=f,m=`
      ${$(l,a)}/
      ${$(u,a)}/
      ${$(c,a)}/
      ${$(i,a)}/
      ${$(n,a)}/
      ${xe(f.transform)}
    `;let p=!1;const y=R(s,m,()=>(p=!0,{start:o,length:l.count}));p&&(o+=l.count),u&&(t.normal=!0),c&&(t.color=!0),i&&(t.tangent=!0),n&&(t.texCoord0=!0),r.push({gltf:f,writeVertices:p,region:y})}return{vertexAttributes:{position:T(V,o),normal:t.normal?T(F,o):null,tangent:t.tangent?T(O,o):null,color:t.color?T(j,o):null,texCoord0:t.texCoord0?T(H,o):null},parts:r,components:[]}}function Te(e){return new G({data:(fe(e.data),e.data),wrap:ve(e.parameters.wrap)})}function $e(e,o){const t=new B(we(e.color,e.opacity)),a=e.emissiveFactor?new B(Be(e.emissiveFactor)):null,s=r=>r?new K({scale:r.scale?[r.scale[0],r.scale[1]]:[1,1],rotation:q(r.rotation??0),offset:r.offset?[r.offset[0],r.offset[1]]:[0,0]}):null;return new N({color:t,colorTexture:o.get(e.textureColor),normalTexture:o.get(e.textureNormal),emissiveColor:a,emissiveTexture:o.get(e.textureEmissive),occlusionTexture:o.get(e.textureOcclusion),alphaMode:he(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:o.get(e.textureMetallicRoughness),colorTextureTransform:s(e.colorTextureTransform),normalTextureTransform:s(e.normalTextureTransform),occlusionTextureTransform:s(e.occlusionTextureTransform),emissiveTextureTransform:s(e.emissiveTextureTransform),metallicRoughnessTextureTransform:s(e.metallicRoughnessTextureTransform)})}function ye(e,o,t){o.writeVertices&&be(e,o);const{indices:a,attributes:s,primitiveType:r,material:f}=o.gltf;let l=ee(a||s.position.count,r);const u=o.region.start;if(u){const c=new Uint32Array(l);for(let i=0;i<l.length;i++)c[i]+=u;l=c}e.components.push(new k({faces:l,material:t.get(f),shading:s.normal?"source":"flat",trustSourceNormals:!0}))}function be(e,o){const{position:t,normal:a,tangent:s,color:r,texCoord0:f}=e.vertexAttributes,l=o.region.start,{attributes:u,transform:c}=o.gltf,i=u.position.count;if(J(t.slice(l,i),u.position,c),u.normal!=null&&a!=null){const n=C(A(),c),m=a.slice(l,i);W(m,u.normal,n),S(n)&&X(m,m)}else a!=null&&te(a,0,0,1,{dstIndex:l,count:i});if(u.tangent!=null&&s!=null){const n=C(A(),c),m=s.slice(l,i);oe(m,u.tangent,n),S(n)&&ne(m,m)}else s!=null&&v(s,0,0,1,1,{dstIndex:l,count:i});if(u.texCoord0!=null&&f!=null?re(f.slice(l,i),u.texCoord0):f!=null&&se(f,0,0,{dstIndex:l,count:i}),u.color!=null&&r!=null){const n=u.color,m=r.slice(l,i);if(n.elementCount===4)n instanceof O?I(m,n,255):n instanceof j?ae(m,n):n instanceof Q&&I(m,n,1/256);else{v(m,255,255,255,255);const p=E.fromTypedArray(m.typedBuffer,m.typedBufferStride);n instanceof F?M(p,n,255):n instanceof E?le(p,n):n instanceof U&&M(p,n,1/256)}}else r!=null&&v(r.slice(l,i),255,255,255,255)}function he(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function ve(e){return{horizontal:_(e.s),vertical:_(e.t)}}function _(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(e){return e**(1/ue)*255}function we(e,o){return P(d(e[0]),d(e[1]),d(e[2]),o)}function Be(e){return z(d(e[0]),d(e[1]),d(e[2]))}export{Ve as loadGLTFMesh};