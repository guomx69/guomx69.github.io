import{ja as a,a as c,iW as m,i$ as e,iX as p,kA as j,bD as b,D as A,j1 as D}from"./index-05ea3609.js";import{s as h,c as k}from"./sphere-0fa2214e.js";function s(r){return r?{origin:a(r.origin),vector:a(r.vector)}:{origin:c(),vector:c()}}function W(r,n,i=s()){return m(i.origin,r),e(i.vector,n,r),i}function X(r,n,i){return w(r,n,0,1,i)}function w(r,n,i,u,o){const{vector:t,origin:v}=r,f=e(k.get(),n,v),g=p(t,f)/j(t);return b(o,t,A(g,i,u)),D(o,o,r.origin)}new h(()=>s());export{W as b,X as j,s as v};
