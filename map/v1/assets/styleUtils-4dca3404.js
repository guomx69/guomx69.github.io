import{Z as a,s as c,e_ as g}from"./index-2e5318f2.js";async function l(r,e,o){const n=r&&r.getAtOrigin&&r.getAtOrigin("renderer",e.origin);if(n&&n.type==="unique-value"&&n.styleOrigin){const s=await a(n.populateFromStyle());if(c(o),s.ok===!1){const t=s.error;e&&e.messages&&e.messages.push(new g("renderer:style-reference",`Failed to create unique value renderer from style reference: ${t.message}`,{error:t,context:e})),r.clear("renderer",e==null?void 0:e.origin)}}}export{l as t};
