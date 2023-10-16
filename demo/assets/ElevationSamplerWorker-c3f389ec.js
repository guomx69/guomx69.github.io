import{g as l}from"./index-646a7cf7.js";import{h as m}from"./PooledRBush-03566aef.js";import{T as h}from"./georeference-7b72c0f1.js";import"./mat3f64-221ce671.js";import"./mat4f64-1413b4a7.js";import"./spatialReferenceEllipsoidUtils-fde27c01.js";import"./MeshLocalVertexSpace-dbbdb26b.js";import"./MeshGeoreferencedRelativeVertexSpace-e796d0ae.js";import"./quat-2ba2d781.js";import"./quatf64-3363c48e.js";import"./vec32-048339ee.js";import"./BufferView-edebfb6d.js";class M{async createIndex(t,e){const o=new Array;if(!t.vertexAttributes||!t.vertexAttributes.position)return new m;const a=this._createMeshData(t),n=e!=null?await e.invoke("createIndexThread",a,{transferList:o}):this.createIndexThread(a).result;return this._createPooledRBush().fromJSON(n)}createIndexThread(t){const e=new Float64Array(t.position),o=this._createPooledRBush();return t.components?this._createIndexComponentsThread(o,e,t.components.map(a=>new Uint32Array(a))):this._createIndexAllThread(o,e)}_createIndexAllThread(t,e){const o=new Array(e.length/9);let a=0;for(let n=0;n<e.length;n+=9)o[a++]=p(e,n,n+3,n+6);return t.load(o),{result:t.toJSON()}}_createIndexComponentsThread(t,e,o){let a=0;for(const s of o)a+=s.length/3;const n=new Array(a);let c=0;for(const s of o)for(let i=0;i<s.length;i+=3)n[c++]=p(e,3*s[i],3*s[i+1],3*s[i+2]);return t.load(n),{result:t.toJSON()}}_createMeshData(t){const e=(t.vertexSpace.isRelative?h({position:t.vertexAttributes.position,normal:null,tangent:null},t.vertexSpace,t.transform,t.spatialReference).position:t.vertexAttributes.position).buffer;return!t.components||t.components.some(o=>!o.faces)?{position:e}:{position:e,components:t.components.map(o=>o.faces)}}_createPooledRBush(){return new m(9,l("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}}function p(r,t,e,o){return{minX:Math.min(r[t],r[e],r[o]),maxX:Math.max(r[t],r[e],r[o]),minY:Math.min(r[t+1],r[e+1],r[o+1]),maxY:Math.max(r[t+1],r[e+1],r[o+1]),p0:[r[t],r[t+1],r[t+2]],p1:[r[e],r[e+1],r[e+2]],p2:[r[o],r[o+1],r[o+2]]}}export{M as default};
