import{hl as f,h8 as R,hc as _,hm as u,h9 as T,hn as g}from"./index-cf1f9edc.js";class p extends f{_beforeChanged(){super._beforeChanged(),(this.isDirty("cornerRadiusTL")||this.isDirty("cornerRadiusTR")||this.isDirty("cornerRadiusBR")||this.isDirty("cornerRadiusBL"))&&(this._clear=!0)}_draw(){let s=this.width(),e=this.height(),t=s,i=e,l=t/Math.abs(s),c=i/Math.abs(e);if(_(t)&&_(i)){let d=Math.min(t,i)/2,r=u(this.get("cornerRadiusTL",8),d),n=u(this.get("cornerRadiusTR",8),d),h=u(this.get("cornerRadiusBR",8),d),o=u(this.get("cornerRadiusBL",8),d),b=Math.min(Math.abs(t/2),Math.abs(i/2));r=g(r,0,b),n=g(n,0,b),h=g(h,0,b),o=g(o,0,b);const a=this._display;a.moveTo(r*l,0),a.lineTo(t-n*l,0),n>0&&a.arcTo(t,0,t,n*c,n),a.lineTo(t,i-h*c),h>0&&a.arcTo(t,i,t-h*l,i,h),a.lineTo(o*l,i),o>0&&a.arcTo(0,i,0,i-o*c,o),a.lineTo(0,r*c),r>0&&a.arcTo(0,0,r*l,0,r),a.closePath()}}}Object.defineProperty(p,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RoundedRectangle"}),Object.defineProperty(p,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:f.classNames.concat([p.className])});class m extends R{_afterNew(){this._settings.themeTags=T(this._settings.themeTags,["button"]),super._afterNew(),this._settings.background||this.set("background",p.new(this._root,{themeTags:T(this._settings.themeTags,["background"])}))}_prepareChildren(){if(super._prepareChildren(),this.isDirty("icon")){const s=this._prevSettings.icon,e=this.get("icon");e!==s&&(this._disposeProperty("icon"),s&&s.dispose(),e&&this.children.push(e),this._prevSettings.icon=e)}if(this.isDirty("label")){const s=this._prevSettings.label,e=this.get("label");e!==s&&(this._disposeProperty("label"),s&&s.dispose(),e&&this.children.push(e),this._prevSettings.label=e)}}}Object.defineProperty(m,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Button"}),Object.defineProperty(m,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:R.classNames.concat([m.className])});export{p as n,m as o};
