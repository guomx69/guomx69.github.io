import{bI as s,bk as i}from"./index-edf1cead.js";import{y as n}from"./queryTopFeatures-881296dd.js";import{S as p}from"./TopFeaturesQuery-d9df3d33.js";async function b(r,o,t,a){const m=s(r),e={...a},{data:f}=await n(m,p.from(o),t,e);return i.fromJSON(f)}export{b as executeTopFeaturesQuery};