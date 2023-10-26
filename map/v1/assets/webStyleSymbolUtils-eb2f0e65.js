import{q as w,ej as x,cR as F,en as N,eo as b,ep as g,eT as U,el as j,em as D,eU as $,eV as R,eW as h,eX as d,ek as T,eq as W}from"./index-2e5318f2.js";import{c as k,a as S}from"./devEnvironmentUtils-5002a058.js";function M(e,t,l,a){const n=e.name;return n==null?Promise.reject(new w("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?E(n,t,a):x(e,t,a).then(r=>A(F(r),n,t,l,W,a))}function v(e,t){return t.items.find(l=>l.name===e)}function A(e,t,l,a,n,r){var p;const m=l&&l.portal!=null?l.portal:N.getDefault(),c={portal:m,url:b(e.baseUrl),origin:"portal-item"},o=v(t,e.data);if(!o){const y=`The symbol name '${t}' could not be found`;return Promise.reject(new w("symbolstyleutils:symbol-name-not-found",y,{symbolName:t}))}let i=g(n(o,a),c),u=((p=o.thumbnail)==null?void 0:p.href)??null;const f=o.thumbnail&&o.thumbnail.imageData;k()&&(i=S(i)??"",u=S(u));const P={portal:m,url:b(U(i)),origin:"portal-item"};return j(i,r).then(y=>{const O=a==="cimRef"?D(y.data):y.data,s=$(O,P);if(s&&R(s)){if(u){const q=g(u,c);s.thumbnail=new h({url:q})}else f&&(s.thumbnail=new h({url:`data:image/png;base64,${f}`}));e.styleUrl?s.styleOrigin=new d({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new d({portal:l.portal,styleName:e.styleName,name:t}))}return s})}function E(e,t,l){const a=T.replaceAll(/\{SymbolName\}/gi,e),n=t.portal!=null?t.portal:N.getDefault();return j(a,l).then(r=>{const m=D(r.data);return $(m,{portal:n,url:b(U(a)),origin:"portal-item"})})}export{A as fetchSymbolFromStyle,v as getStyleItemFromStyle,M as resolveWebStyleSymbol};
