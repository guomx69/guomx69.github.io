import{bQ as s,bs as i}from"./index-863b69c4.js";import{y as n}from"./queryTopFeatures-c9787c06.js";import{S as p}from"./TopFeaturesQuery-6f5774b9.js";async function b(r,o,t,a){const m=s(r),e={...a},{data:f}=await n(m,p.from(o),t,e);return i.fromJSON(f)}export{b as executeTopFeaturesQuery};