import{T as y,lQ as h,_ as m,lR as v,q as d,ad as w,ag as b,aM as x,ab as _,lS as E}from"./index-646a7cf7.js";const p=y.getLogger("esri.layers.support.labelFormatUtils"),g={type:"simple",evaluate:()=>null},F={getAttribute:(t,n)=>t.field(n)};async function T(t,n,r){if(!t||!t.symbol||!n)return g;const l=t.where,s=h(t),i=l?await m(()=>import("./WhereClause-b0322657.js").then(e=>e.W),["assets/WhereClause-b0322657.js","assets/index-646a7cf7.js","assets/index-aa249352.css","assets/executionError-c92d3b85.js"]):null;let o;if(s.type==="arcade"){const e=await v(s.expression,r,n);if(e==null)return g;o={type:"arcade",evaluate(u){try{const a=e.evaluate({$feature:"attributes"in u?e.repurposeFeature(u):u},e.services);if(a!=null)return a.toString()}catch(a){p.error(new d("arcade-expression-error","Encountered an error when evaluating label expression for feature",{error:a,feature:u,expression:s}))}return null},needsHydrationToEvaluate:()=>E(s.expression)==null}}else o={type:"simple",evaluate:e=>s.expression.replaceAll(/{[^}]*}/g,u=>{const a=u.slice(1,-1),c=n.get(a);if(!c)return u;let f=null;return"attributes"in e?e&&e.attributes&&(f=e.attributes[c.name]):f=e.field(c.name),f==null?"":$(f,c)})};if(l){let e;try{e=i.WhereClause.create(l,n)}catch(a){return p.error(new d("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:a})),g}const u=o.evaluate;o.evaluate=a=>{const c="attributes"in a?void 0:F;try{if(e.testFeature(a,c))return u(a)}catch(f){p.error(new d("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:a,error:f}))}return null}}return o}function $(t,n){if(t==null)return"";const r=n.domain;if(r){if(r.type==="codedValue"||r.type==="coded-value"){const s=t;for(const i of r.codedValues)if(i.code===s)return i.name}else if(r.type==="range"){const s=+t,i="range"in r?r.range[0]:r.minValue,o="range"in r?r.range[1]:r.maxValue;if(i<=s&&s<=o)return r.name}}let l=t;return n.type==="date"||n.type==="esriFieldTypeDate"?l=w(l,b("short-date")):x(n)&&(l=_(+l)),l||""}export{T as createLabelFunction,$ as formatField};
