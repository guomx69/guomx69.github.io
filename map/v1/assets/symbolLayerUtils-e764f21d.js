import{cW as v,q as n,G as y,_ as p,kV as c,f3 as w,kW as b,a as l}from"./index-a5053c33.js";let s=f();function f(){return new v(50)}function T(){s=f()}async function x(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function B(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./objectResourceUtils-e96f4313.js").then(d=>d.o),["assets/objectResourceUtils-e96f4313.js","assets/index-a5053c33.js","assets/index-8d370f8c.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-186f58d9.js","assets/vec32-f20293e7.js","assets/DefaultMaterial_COLOR_GAMMA-4ddf75c9.js","assets/enums-b14466b3.js","assets/quat-fe63bd3e.js","assets/quatf64-3363c48e.js","assets/resourceUtils-1d112ccb.js","assets/basicInterfaces-4ab7cc6a.js","assets/Indices-8c32946c.js","assets/byteSizeEstimations-7cf1c05d.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-c821a5c3.js","assets/InterleavedLayout-cf4bb21b.js","assets/types-1305598a.js","assets/sphere-b300ce37.js","assets/lineSegment-0ebdb9a4.js","assets/VertexAttribute-9f2e53ec.js","assets/Texture-408d4df9.js","assets/OrderIndependentTransparency-309a1bc3.js","assets/vec3f32-ad1dc57f.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-e6a55e94.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-26951441.js"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=w(b(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{T as clearBoundingBoxCache,x as computeIconLayerResourceSize,B as computeObjectLayerResourceSize};