import{bQ as n,by as m}from"./index-863b69c4.js";import{p as f}from"./queryTopFeatures-c9787c06.js";import{S as p}from"./TopFeaturesQuery-6f5774b9.js";async function u(o,r,a){const e=n(o),t=await f(e,p.from(r),{...a});return{count:t.data.count,extent:m.fromJSON(t.data.extent)}}export{u as executeForTopExtents};