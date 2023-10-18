import{mq as P,mr as N,ms as x,l0 as d,mt as _,mu as O,mv as R,mw as b,mx as y,my as S,lq as j,fz as F,g8 as q,_ as z,mz as A}from"./index-a7b6bd71.js";import{i as B}from"./multiOriginJSONSupportUtils-c978f4c3.js";import{t as f}from"./resourceExtension-ad7f6c30.js";function C(e){const o=(e==null?void 0:e.origins)??[void 0];return(t,n)=>{const s=E(e,t,n);for(const a of o){const i=P(t,a,n);for(const r in s)i[r]=s[r]}}}function E(e,o,t){if((e==null?void 0:e.type)==="resource")return J(e,o,t);switch((e==null?void 0:e.type)??"other"){case"other":return{read:!0,write:!0};case"url":{const{read:n,write:s}=A;return{read:n,write:s}}}}function J(e,o,t){const n=N(o,t);return{type:String,read:(s,a,i)=>{const r=x(s,a,i);return n.type===String?r:typeof n.type=="function"?new n.type({url:r}):void 0},write:{writer(s,a,i,r){if(!r||!r.resources)return typeof s=="string"?void(a[i]=d(s,r)):void(a[i]=s.write({},r));const m=K(s),p=d(m,{...r,verifyItemRelativeUrls:r&&r.verifyItemRelativeUrls?{writtenUrls:r.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},_.NO),c=n.type!==String&&(!B(this)||r&&r.origin&&this.originIdOf(t)>O(r.origin)),u={object:this,propertyName:t,value:s,targetUrl:p,dest:a,targetPropertyName:i,context:r,params:e};r&&r.portalItem&&p&&!R(p)?c?T(u):V(u):r&&r.portalItem&&(p==null||b(p)!=null||y(p)||c)?g(u):a[i]=p}}}}function g(e){const{targetUrl:o,params:t,value:n,context:s,dest:a,targetPropertyName:i}=e;if(!s.portalItem)return;const r=S(o),m=(r==null?void 0:r.filename)??j(),p=(t==null?void 0:t.prefix)??(r==null?void 0:r.prefix),c=h(n,o,s),u=F(p,m),w=`${u}.${f(c)}`,l=s.portalItem.resourceFromPath(w);y(o)&&s.resources&&s.resources.pendingOperations.push(D(o).then(I=>{l.path=`${u}.${f(I)}`,a[i]=l.itemRelativeUrl}).catch(()=>{}));const U=(t==null?void 0:t.compress)??!1;s.resources&&v({...e,resource:l,content:c,compress:U,updates:s.resources.toAdd}),a[i]=l.itemRelativeUrl}function T(e){const{context:o,targetUrl:t,params:n,value:s,dest:a,targetPropertyName:i}=e;if(!o.portalItem)return;const r=o.portalItem.resourceFromPath(t),m=h(s,t,o),p=f(m),c=q(r.path),u=(n==null?void 0:n.compress)??!1;p===c?(o.resources&&v({...e,resource:r,content:m,compress:u,updates:o.resources.toUpdate}),a[i]=t):g(e)}function V({context:e,targetUrl:o,dest:t,targetPropertyName:n}){e.portalItem&&e.resources&&(e.resources.toKeep.push({resource:e.portalItem.resourceFromPath(o),compress:!1}),t[n]=o)}function v({object:e,propertyName:o,updates:t,resource:n,content:s,compress:a}){t.push({resource:n,content:s,compress:a,finish:i=>{L(e,o,i)}})}function h(e,o,t){return typeof e=="string"?{url:o}:new Blob([JSON.stringify(e.toJSON(t))],{type:"application/json"})}async function D(e){const o=(await z(()=>import("./index-a7b6bd71.js").then(n=>n.og),["assets/index-a7b6bd71.js","assets/index-8d370f8c.css"])).default,{data:t}=await o(e,{responseType:"blob"});return t}function K(e){return e==null?null:typeof e=="string"?e:e.url}function L(e,o,t){typeof e[o]=="string"?e[o]=t.url:e[o].url=t.url}export{C as g};