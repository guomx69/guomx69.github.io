import{j as c,X as h}from"./Popup-21ced434.js";class u extends c{_afterNew(){super._afterNewApplyThemes(),this._dirty.colors=!1}_beforeChanged(){this.isDirty("colors")&&this.reset()}generateColors(){this.setPrivate("currentPass",this.getPrivate("currentPass",0)+1);const e=this.getPrivate("currentPass"),t=this.get("colors",[this.get("baseColor",h.fromHex(16711680))]);this.getPrivate("numColors")||this.setPrivate("numColors",t.length);const r=this.getPrivate("numColors"),g=0,i=this.get("passOptions"),P=this.get("reuse");for(let a=g;a<r;a++)if(P)t.push(t[a]);else{const o=t[a].toHSL();let n=o.h+(i.hue||0)*e;for(;n>1;)n-=1;let s=o.s+(i.saturation||0)*e;s>1&&(s=1),s<0&&(s=0);let l=o.l+(i.lightness||0)*e;for(;l>1;)l-=1;t.push(h.fromHSL(n,s,l))}}getIndex(e){const t=this.get("colors",[]),r=this.get("saturation");return e>=t.length?(this.generateColors(),this.getIndex(e)):r!=null?h.saturate(t[e],r):t[e]}next(){let e=this.getPrivate("currentStep",this.get("startIndex",0));return this.setPrivate("currentStep",e+this.get("step",1)),this.getIndex(e)}reset(){this.setPrivate("currentStep",this.get("startIndex",0)),this.setPrivate("currentPass",0)}}Object.defineProperty(u,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColorSet"}),Object.defineProperty(u,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:c.classNames.concat([u.className])});export{u as s};
