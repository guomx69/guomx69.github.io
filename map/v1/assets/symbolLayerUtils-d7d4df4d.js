import{dA as v,q as n,G as y,_ as p,lB as c,gC as w,lC as b,a as l}from"./index-863b69c4.js";let s=f();function f(){return new v(50)}function B(){s=f()}async function T(r,o){var i,t;if((i=r.resource)!=null&&i.href)return _(r.resource.href).then(e=>[e.width,e.height]);if((t=r.resource)!=null&&t.primitive)return o!=null?[o,o]:[256,256];throw new n("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function _(r){return y(r,{responseType:"image"}).then(o=>o.data)}async function x(r,o=null){var t;if(!r.isPrimitive){const e=r.resource.href;if(!e)throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const a=s.get(e);if(a!==void 0)return a;const{fetch:h}=await p(()=>import("./objectResourceUtils-f034923e.js").then(d=>d.o),["assets/objectResourceUtils-f034923e.js","assets/devEnvironmentUtils-5002a058.js","assets/index-863b69c4.js","assets/index-aa249352.css","assets/mat3f64-221ce671.js","assets/mat4f64-1413b4a7.js","assets/BufferView-1654aa9b.js","assets/vec32-68da8ab2.js","assets/DefaultMaterial_COLOR_GAMMA-370eb06e.js","assets/enums-b14466b3.js","assets/quat-56c88372.js","assets/quatf64-3363c48e.js","assets/resourceUtils-1d112ccb.js","assets/basicInterfaces-4ab7cc6a.js","assets/Indices-7f4c786b.js","assets/byteSizeEstimations-7cf1c05d.js","assets/NestedMap-1b5db22e.js","assets/requestImageUtils-80139c87.js","assets/InterleavedLayout-95171761.js","assets/types-1305598a.js","assets/sphere-71903319.js","assets/ByteSizeUnit-d4757d40.js","assets/lineSegment-23a0345f.js","assets/VertexAttribute-9f2e53ec.js","assets/Texture-63b3aabe.js","assets/OrderIndependentTransparency-309a1bc3.js","assets/vec3f32-ad1dc57f.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/symbolColorUtils-8f9ef9e1.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-24ab20c3.js"]),m=await h(e,{disableTextures:!0}),u=c(m.referenceBoundingBox,l());return s.put(e,u),u}if(!((t=r.resource)!=null&&t.primitive))throw new n("symbol:invalid-resource","The symbol does not have a valid resource");const i=w(b(r.resource.primitive));if(o!=null)for(let e=0;e<i.length;e++)i[e]*=o;return c(i,l())}export{B as clearBoundingBoxCache,T as computeIconLayerResourceSize,x as computeObjectLayerResourceSize};