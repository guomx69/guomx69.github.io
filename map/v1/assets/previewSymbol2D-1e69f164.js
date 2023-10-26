import{dv as L,u as w,q as R,e3 as x,ea as V}from"./index-92ca6b80.js";import{c as W}from"./fontUtils-d47aa814.js";import{f as Z,y as A,h as H}from"./utils-b83067c2.js";import{v as z,B as U,D,k as $}from"./symbolUtils-c6efb1a4.js";import"./utils-f30d5a62.js";import"./colorUtils-c0f43caf.js";import"./webStyleSymbolUtils-6728cee9.js";import"./devEnvironmentUtils-5002a058.js";function G(a){let{r:e,g:i,b:n,a:o}=a;return o<1&&(e=Math.round(o*e+255*(1-o)),i=Math.round(o*i+255*(1-o)),n=Math.round(o*n+255*(1-o))),new L({r:e,g:i,b:n})}function E(a,e){const{r:i,g:n,b:o}=e!=null&&e.ignoreAlpha?a:G(a);return .2126*i+.7152*n+.0722*o}const O="picture-fill",I="picture-marker",J="simple-fill",K="simple-line",N="simple-marker",Q="text",X="Aa",Y=z.size,M=z.maxSize,_=z.maxOutlineSize,ee=z.lineWidth,q=225,ae=document.createElement("canvas");function P(a,e){const i=ae.getContext("2d"),n=[];return e&&(e.weight&&n.push(e.weight),e.size&&n.push(e.size+"px"),e.family&&n.push(e.family)),i.font=n.join(" "),i.measureText(a).width}const ne=7.2/2.54,ie=72/2.54;function oe(a){if(a.length===0)return 0;if(a.length>2){const e=V(1),i=parseFloat(a);switch(a.slice(-2)){case"px":return i;case"pt":return i*e;case"in":return 72*i*e;case"pc":return 12*i*e;case"mm":return i*ne*e;case"cm":return i*ie*e}}return parseFloat(a)}function k(a){const e=a==null?void 0:a.size;return{width:e!=null&&typeof e=="object"&&"width"in e?w(e.width):null,height:e!=null&&typeof e=="object"&&"height"in e?w(e.height):null}}async function le(a,e){const i=e.fill,n=a.color;if((i==null?void 0:i.type)==="pattern"&&n&&a.type!==O){const o=await H(i.src,n.toCss(!0));i.src=o,e.fill=i}}async function se(a,e,i,n){var p,r,c;if(!("font"in a)||!a.font||e.shape.type!=="text")return;try{await W(a.font)}catch{}const{width:o}=k(n),u=/[\uE600-\uE6FF]/.test(e.shape.text);o!=null||u||(i[0]=P(e.shape.text,{weight:(p=e.font)==null?void 0:p.weight,size:(r=e.font)==null?void 0:r.size,family:(c=e.font)==null?void 0:c.family}))}function te(a,e,i,n,o){var u;if(a.haloColor!=null&&a.haloSize!=null){o.masking??(o.masking=i.map(()=>[]));const p=w(a.haloSize);n[0]+=p,n[1]+=p,i.unshift([{...e,fill:null,stroke:{color:a.haloColor,width:2*p,join:"round",cap:"round"}}]),o.masking.unshift([{shape:{type:"rect",x:0,y:0,width:n[0]+2*x,height:n[1]+2*x},fill:[255,255,255],stroke:null},{...e,fill:[0,0,0,0],stroke:null}])}a.backgroundColor==null&&a.borderLineColor==null||(n[0]+=2*x,n[1]+=2*x,i.unshift([{shape:{type:"rect",x:0,y:0,width:n[0],height:n[1]},fill:a.backgroundColor,stroke:{color:a.borderLineColor,width:w(a.borderLineSize)}}]),(u=o.masking)==null||u.unshift([]))}function T(a,e){return a>e?"dark":"light"}function re(a,e){var C,S;const i=typeof(e==null?void 0:e.size)=="number"?e==null?void 0:e.size:null,n=i!=null?w(i):null,o=(e==null?void 0:e.maxSize)!=null?w(e.maxSize):null,u=(e==null?void 0:e.rotation)!=null?e.rotation:"angle"in a?a.angle:null,p=Z(a);let r=A(a);ce(a,245)!=="dark"||e!=null&&e.ignoreWhiteSymbols||(r={width:.75,...r,color:"#bdc3c7"});const c={shape:null,fill:p,stroke:r,offset:[0,0]};r!=null&&r.width&&(r.width=Math.min(r.width,_));const d=(r==null?void 0:r.width)||0;let g=(e==null?void 0:e.size)!=null&&((e==null?void 0:e.scale)==null||(e==null?void 0:e.scale)),l=0,s=0,v=!1;switch(a.type){case N:{const h=a.style,{width:m,height:t}=k(e),b=m===t&&m!=null?m:n??Math.min(w(a.size),o||M);switch(l=b,s=b,h){case"circle":c.shape={type:"circle",cx:0,cy:0,r:.5*b},g||(l+=d,s+=d);break;case"cross":c.shape={type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[l,.5*s]},{command:"M",values:[.5*l,0]},{command:"L",values:[.5*l,s]}]};break;case"diamond":c.shape={type:"path",path:[{command:"M",values:[0,.5*s]},{command:"L",values:[.5*l,0]},{command:"L",values:[l,.5*s]},{command:"L",values:[.5*l,s]},{command:"Z",values:[]}]},g||(l+=d,s+=d);break;case"square":c.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]},g||(l+=d,s+=d),u&&(v=!0);break;case"triangle":c.shape={type:"path",path:[{command:"M",values:[.5*l,0]},{command:"L",values:[l,s]},{command:"L",values:[0,s]},{command:"Z",values:[]}]},g||(l+=d,s+=d),u&&(v=!0);break;case"x":c.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,s]},{command:"M",values:[l,0]},{command:"L",values:[0,s]}]},u&&(v=!0);break;case"path":c.shape={type:"path",path:a.path||""},g||(l+=d,s+=d),u&&(v=!0),g=!0}break}case K:{const{width:h,height:m}=k(e),t=m??n??d,b=h??ee;r&&(r.width=t),l=b,s=t;const y=((C=c==null?void 0:c.stroke)==null?void 0:C.cap)||"butt",f=y==="round";g=!0,c.stroke&&(c.stroke.cap=y==="butt"?"square":y),c.shape={type:"path",path:[{command:"M",values:[f?t/2:0,s/2]},{command:"L",values:[f?l-t/2:l,s/2]}]};break}case O:case J:{const h=typeof(e==null?void 0:e.symbolConfig)=="object"&&!!((S=e==null?void 0:e.symbolConfig)!=null&&S.isSquareFill),{width:m,height:t}=k(e);l=!h&&m!==t||m==null?n??Y:m,s=!h&&m!==t||t==null?l:t,g||(l+=d,s+=d),g=!0,c.shape=h?{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[l,0]},{command:"L",values:[l,s]},{command:"L",values:[0,s]},{command:"L",values:[0,0]},{command:"Z",values:[]}]}:U.fill[0];break}case I:{const h=Math.min(w(a.width),o||M),m=Math.min(w(a.height),o||M),{width:t,height:b}=k(e),y=t===b&&t!=null?t:n??Math.max(h,m),f=h/m;l=f<=1?Math.ceil(y*f):y,s=f<=1?y:Math.ceil(y/f),c.shape={type:"image",x:-Math.round(l/2),y:-Math.round(s/2),width:l,height:s,src:a.url||""},u&&(v=!0);break}case Q:{const h=a,m=(e==null?void 0:e.overrideText)||h.text||X,t=h.font,{width:b,height:y}=k(e),f=y??n??Math.min(w(t.size),o||M),B=P(m,{weight:t.weight,size:f,family:t.family}),F=/[\uE600-\uE6FF]/.test(m);l=b??(F?f:B),s=f;let j=.25*oe((t?f:0).toString());F&&(j+=5),c.shape={type:"text",text:m,x:h.xoffset||0,y:h.yoffset||j,align:"middle",alignBaseline:h.verticalAlignment,decoration:t&&t.decoration,rotated:h.rotated,kerning:h.kerning},c.font=t&&{size:f,style:t.style,decoration:t.decoration,weight:t.weight,family:t.family};break}}return{shapeDescriptor:c,size:[l,s],renderOptions:{node:e==null?void 0:e.node,scale:g,opacity:e==null?void 0:e.opacity,rotation:u,useRotationSize:v,effectView:e==null?void 0:e.effectView,ariaLabel:e==null?void 0:e.ariaLabel}}}async function we(a,e){var p;const{shapeDescriptor:i,size:n,renderOptions:o}=re(a,e);if(!i.shape)throw new R("symbolPreview: renderPreviewHTML2D","symbol not supported.");await le(a,i),await se(a,i,n,e);const u=[[i]];if(typeof(e==null?void 0:e.symbolConfig)=="object"&&((p=e==null?void 0:e.symbolConfig)!=null&&p.applyColorModulation)){const r=.6*n[0];u.unshift([{...i,offset:[-r,0],fill:D(i.fill,-.3)}]),u.push([{...i,offset:[r,0],fill:D(i.fill,.3)}]),n[0]+=2*r,o.scale=!1}return a.type==="text"&&te(a,i,u,n,o),$(u,n,o)}function ce(a,e=q){const i=Z(a),n=A(a),o=!i||"type"in i?null:new L(i),u=n!=null&&n.color?new L(n==null?void 0:n.color):null,p=o?T(E(o),e):null,r=u?T(E(u),e):null;return r?p?p===r?p:e>=q?"light":"dark":r:p}export{ce as getContrastingBackgroundTheme,re as getRenderSymbolParameters,we as previewSymbol2D};
