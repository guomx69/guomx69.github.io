import{bQ as n,by as m}from"./index-646a7cf7.js";import{p as f}from"./queryTopFeatures-553961ca.js";import{S as p}from"./TopFeaturesQuery-f92fde3c.js";async function u(o,r,a){const e=n(o),t=await f(e,p.from(r),{...a});return{count:t.data.count,extent:m.fromJSON(t.data.extent)}}export{u as executeForTopExtents};
