import{hf as I,hh as q,hM as Y,hE as b,hN as Q,hJ as M,hO as K,ho as x,hP as J,hj as T,hl as L,hA as Z,hQ as W,hx as E,hR as H,hS as ee}from"./index-d4439fba.js";class te extends K{constructor(){super(...arguments),Object.defineProperty(this,"processor",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}incrementRef(){}decrementRef(){}_onPush(e){this.processor&&this.processor.processRow(e),super._onPush(e)}_onInsertIndex(e,t){this.processor&&this.processor.processRow(t),super._onInsertIndex(e,t)}_onSetIndex(e,t,i){this.processor&&this.processor.processRow(i),super._onSetIndex(e,t,i)}}class V extends Y{constructor(e,t,i){super(i),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"dataContext",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"open",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"close",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.dataContext=t,this.component=e,this._settings.visible=!0,this._checkDirty()}markDirty(){this.component.markDirtyValues(this)}_startAnimation(){this.component._root._addAnimation(this)}_animationTime(){return this.component._root.animationTime}_dispose(){this.component&&this.component.disposeDataItem(this),super._dispose()}show(e){this.setRaw("visible",!0),this.component&&this.component.showDataItem(this,e)}hide(e){this.setRaw("visible",!1),this.component&&this.component.hideDataItem(this,e)}isHidden(){return!this.get("visible")}}class j extends I{constructor(){super(...arguments),Object.defineProperty(this,"_data",{enumerable:!0,configurable:!0,writable:!0,value:new te}),Object.defineProperty(this,"_dataItems",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_mainDataItems",{enumerable:!0,configurable:!0,writable:!0,value:this._dataItems}),Object.defineProperty(this,"valueFields",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"fields",{enumerable:!0,configurable:!0,writable:!0,value:["id"]}),Object.defineProperty(this,"_valueFields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valueFieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fields",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_fieldsF",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_valuesDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataChanged",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataGrouped",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"inited",{enumerable:!0,configurable:!0,writable:!0,value:!1})}set data(e){e.incrementRef(),this._data.decrementRef(),this._data=e}get data(){return this._data}_dispose(){super._dispose(),this._data.decrementRef()}_onDataClear(){}_afterNew(){super._afterNew(),this._data.incrementRef(),this._updateFields(),this._disposers.push(this.data.events.onAll(e=>{const t=this._mainDataItems;if(this.markDirtyValues(),this._markDirtyGroup(),this._dataChanged=!0,e.type==="clear")b(t,i=>{i.dispose()}),t.length=0,this._onDataClear();else if(e.type==="push"){const i=new V(this,e.newValue,this._makeDataItem(e.newValue));t.push(i),this.processDataItem(i)}else if(e.type==="setIndex"){const i=t[e.index],s=this._makeDataItem(e.newValue);i.bullets&&i.bullets.length==0&&(i.bullets=void 0),Q(s).forEach(a=>{i.animate({key:a,to:s[a],duration:this.get("interpolationDuration",0),easing:this.get("interpolationEasing")})}),i.dataContext=e.newValue}else if(e.type==="insertIndex"){const i=new V(this,e.newValue,this._makeDataItem(e.newValue));t.splice(e.index,0,i),this.processDataItem(i)}else if(e.type==="removeIndex")t[e.index].dispose(),t.splice(e.index,1);else{if(e.type!=="moveIndex")throw new Error("Unknown IStreamEvent type");{const i=t[e.oldIndex];t.splice(e.oldIndex,1),t.splice(e.newIndex,0,i)}}this._afterDataChange()}))}_updateFields(){this.valueFields&&(this._valueFields=[],this._valueFieldsF={},b(this.valueFields,e=>{this.get(e+"Field")&&(this._valueFields.push(e),this._valueFieldsF[e]={fieldKey:e+"Field",workingKey:e+"Working"})})),this.fields&&(this._fields=[],this._fieldsF={},b(this.fields,e=>{this.get(e+"Field")&&(this._fields.push(e),this._fieldsF[e]=e+"Field")}))}get dataItems(){return this._dataItems}processDataItem(e){}_makeDataItem(e){const t={};return this._valueFields&&b(this._valueFields,i=>{const s=this.get(this._valueFieldsF[i].fieldKey);t[i]=e[s],t[this._valueFieldsF[i].workingKey]=t[i]}),this._fields&&b(this._fields,i=>{const s=this.get(this._fieldsF[i]);t[i]=e[s]}),t}makeDataItem(e){let t=new V(this,void 0,e);return this.processDataItem(t),t}pushDataItem(e){const t=this.makeDataItem(e);return this._mainDataItems.push(t),t}disposeDataItem(e){}showDataItem(e,t){return M(this,void 0,void 0,function*(){e.set("visible",!0)})}hideDataItem(e,t){return M(this,void 0,void 0,function*(){e.set("visible",!1)})}_clearDirty(){super._clearDirty(),this._valuesDirty=!1}_afterDataChange(){}_afterChanged(){if(super._afterChanged(),this._dataChanged){const e="datavalidated";this.events.isEnabled(e)&&this.events.dispatch(e,{type:e,target:this}),this._dataChanged=!1}this.inited=!0}markDirtyValues(e){this.markDirty(),this._valuesDirty=!0}_markDirtyGroup(){this._dataGrouped=!1}markDirtySize(){this._sizeDirty=!0,this.markDirty()}}function ie(r){return new Promise((e,t)=>{setTimeout(e,r)})}Object.defineProperty(j,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Component"}),Object.defineProperty(j,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:I.classNames.concat([j.className])});let se={millisecond:1,second:1e3,minute:6e4,hour:36e5,day:864e5,week:6048e5,month:2629742400,year:31536e6};function O(r,e){return e==null&&(e=1),se[r]*e}function z(r,e,t,i,s,a,n){if(!n||s){let h=0;switch(s||e=="millisecond"||(h=r.getTimezoneOffset(),r.setUTCMinutes(r.getUTCMinutes()-h)),e){case"day":let u=r.getUTCDate();if(t>1){if(a){a=z(a,"day",1);let y=r.getTime()-a.getTime(),w=Math.floor(y/O("day")/t),D=O("day",w*t);r.setTime(a.getTime()+D-h*O("minute"))}}else r.setUTCDate(u);r.setUTCHours(0,0,0,0);break;case"second":let o=r.getUTCSeconds();t>1&&(o=Math.floor(o/t)*t),r.setUTCSeconds(o,0);break;case"millisecond":if(t==1)return r;let c=r.getUTCMilliseconds();c=Math.floor(c/t)*t,r.setUTCMilliseconds(c);break;case"hour":let m=r.getUTCHours();t>1&&(m=Math.floor(m/t)*t),r.setUTCHours(m,0,0,0);break;case"minute":let d=r.getUTCMinutes();t>1&&(d=Math.floor(d/t)*t),r.setUTCMinutes(d,0,0);break;case"month":let l=r.getUTCMonth();t>1&&(l=Math.floor(l/t)*t),r.setUTCMonth(l,1),r.setUTCHours(0,0,0,0);break;case"year":let p=r.getUTCFullYear();t>1&&(p=Math.floor(p/t)*t),r.setUTCFullYear(p,0,1),r.setUTCHours(0,0,0,0);break;case"week":let g=r.getUTCDate(),f=r.getUTCDay();T(i)||(i=1),g=f>=i?g-f+i:g-(7+f)+i,r.setUTCDate(g),r.setUTCHours(0,0,0,0)}if(!s&&e!="millisecond"&&(r.setUTCMinutes(r.getUTCMinutes()+h),e=="day"||e=="week"||e=="month"||e=="year")){let u=r.getTimezoneOffset();if(u!=h){let o=u-h;r.setUTCMinutes(r.getUTCMinutes()+o)}}return r}{if(isNaN(r.getTime()))return r;let h=n.offsetUTC(r),u=r.getTimezoneOffset(),o=n.parseDate(r),c=o.year,m=o.month,d=o.day,l=o.hour,p=o.minute,g=o.second,f=o.millisecond,y=o.weekday;switch(e){case"day":if(t>1&&a){a=z(a,"day",1,i,s,void 0,n);let D=r.getTime()-a.getTime(),_=Math.floor(D/O("day")/t),C=O("day",_*t);r.setTime(a.getTime()+C),o=n.parseDate(r),c=o.year,m=o.month,d=o.day}l=0,p=h-u,g=0,f=0;break;case"second":p+=h-u,t>1&&(g=Math.floor(g/t)*t),f=0;break;case"millisecond":p+=h-u,t>1&&(f=Math.floor(f/t)*t);break;case"hour":t>1&&(l=Math.floor(l/t)*t),p=h-u,g=0,f=0;break;case"minute":t>1&&(p=Math.floor(p/t)*t),p+=h-u,g=0,f=0;break;case"month":t>1&&(m=Math.floor(m/t)*t),d=1,l=0,p=h-u,g=0,f=0;break;case"year":t>1&&(c=Math.floor(c/t)*t),m=0,d=1,l=0,p=h-u,g=0,f=0;break;case"week":T(i)||(i=1),d=y>=i?d-y+i:d-(7+y)+i,l=0,p=h-u,g=0,f=0}let w=(r=new Date(c,m,d,l,p,g,f)).getTimezoneOffset();return w!=u&&r.setTime(r.getTime()+6e4*(u-w)),r}}class N extends j{constructor(){super(...arguments),Object.defineProperty(this,"_aggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_selectionAggregatesCalculated",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_dataProcessed",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_psi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"_pei",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"chart",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"bullets",{enumerable:!0,configurable:!0,writable:!0,value:new K}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:I.new(this._root,{width:x,height:x,position:"absolute"})})}_afterNew(){this.valueFields.push("value"),super._afterNew(),this.setPrivate("customData",{}),this._disposers.push(this.bullets.events.onAll(e=>{if(e.type==="clear")this._handleBullets(this.dataItems);else if(e.type==="push")this._handleBullets(this.dataItems);else if(e.type==="setIndex")this._handleBullets(this.dataItems);else if(e.type==="insertIndex")this._handleBullets(this.dataItems);else if(e.type==="removeIndex")this._handleBullets(this.dataItems);else{if(e.type!=="moveIndex")throw new Error("Unknown IListEvent type");this._handleBullets(this.dataItems)}}))}_dispose(){this.bulletsContainer.dispose(),super._dispose()}startIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("startIndex",0),e)}endIndex(){let e=this.dataItems.length;return Math.min(this.getPrivate("endIndex",e),e)}_handleBullets(e){b(e,t=>{const i=t.bullets;i&&(b(i,s=>{s.dispose()}),t.bullets=void 0)}),this.markDirtyValues()}getDataItemById(e){return J(this.dataItems,t=>t.get("id")==e)}_makeBullets(e){this._shouldMakeBullet(e)&&(e.bullets=[],this.bullets.each(t=>{this._makeBullet(e,t)}))}_shouldMakeBullet(e){return!0}_makeBullet(e,t,i){const s=t(this._root,this,e);if(s){let a=s.get("sprite");a&&(a._setDataItem(e),a.setRaw("position","absolute"),this.bulletsContainer.children.push(a)),s._index=i,s.series=this,e.bullets.push(s)}return s}_clearDirty(){super._clearDirty(),this._aggregatesCalculated=!1,this._selectionAggregatesCalculated=!1}_prepareChildren(){super._prepareChildren();let e=this.startIndex(),t=this.endIndex();if(this.isDirty("heatRules")&&(this._valuesDirty=!0),this.isPrivateDirty("baseValueSeries")){const i=this.getPrivate("baseValueSeries");i&&this._disposers.push(i.onPrivate("startIndex",()=>{this.markDirtyValues()}))}if(this.get("calculateAggregates")&&(this._valuesDirty&&!this._dataProcessed&&(this._aggregatesCalculated||(this._calculateAggregates(0,this.dataItems.length),this._aggregatesCalculated=!0)),this._psi==e&&this._pei==t||this._selectionAggregatesCalculated||(e===0&&t===this.dataItems.length&&this._aggregatesCalculated||this._calculateAggregates(e,t),this._selectionAggregatesCalculated=!0)),this.isDirty("tooltip")){let i=this.get("tooltip");i&&(i.hide(0),i.set("tooltipTarget",this))}if(this.isDirty("fill")||this.isDirty("stroke")){let i;const s=this.get("legendDataItem");if(s&&(i=s.get("markerRectangle"),i&&this.isVisible())){if(this.isDirty("stroke")){let a=this.get("stroke");i.set("stroke",a)}if(this.isDirty("fill")){let a=this.get("fill");i.set("fill",a)}}this.updateLegendMarker(void 0)}if(this.bullets.length>0){let i=this.startIndex(),s=this.endIndex();s<this.dataItems.length&&s++;for(let a=i;a<s;a++){let n=this.dataItems[a];n.bullets||this._makeBullets(n)}}}_calculateAggregates(e,t){let i=this._valueFields;if(!i)throw new Error("No value fields are set for the series.");const s={},a={},n={},h={},u={},o={},c={},m={},d={};b(i,l=>{s[l]=0,a[l]=0,n[l]=0}),b(i,l=>{let p=l+"Change",g=l+"ChangePercent",f=l+"ChangePrevious",y=l+"ChangePreviousPercent",w=l+"ChangeSelection",D=l+"ChangeSelectionPercent",_="valueY";l!="valueX"&&l!="openValueX"&&l!="lowValueX"&&l!="highValueX"||(_="valueX");const C=this.getPrivate("baseValueSeries");for(let S=e;S<t;S++){const P=this.dataItems[S];let v=P.get(l);v!=null&&(n[l]++,s[l]+=v,a[l]+=Math.abs(v),m[l]=s[l]/n[l],(h[l]>v||h[l]==null)&&(h[l]=v),(u[l]<v||u[l]==null)&&(u[l]=v),c[l]=v,o[l]==null&&(o[l]=v,d[l]=v,C&&(o[_]=C._getBase(_))),e===0&&(P.setRaw(p,v-o[_]),P.setRaw(g,(v-o[_])/o[_]*100)),P.setRaw(f,v-d[_]),P.setRaw(y,(v-d[_])/d[_]*100),P.setRaw(w,v-o[_]),P.setRaw(D,(v-o[_])/o[_]*100),d[l]=v)}}),b(i,l=>{this.setPrivate(l+"AverageSelection",m[l]),this.setPrivate(l+"CountSelection",n[l]),this.setPrivate(l+"SumSelection",s[l]),this.setPrivate(l+"AbsoluteSumSelection",a[l]),this.setPrivate(l+"LowSelection",h[l]),this.setPrivate(l+"HighSelection",u[l]),this.setPrivate(l+"OpenSelection",o[l]),this.setPrivate(l+"CloseSelection",c[l])}),e===0&&t===this.dataItems.length&&b(i,l=>{this.setPrivate(l+"Average",m[l]),this.setPrivate(l+"Count",n[l]),this.setPrivate(l+"Sum",s[l]),this.setPrivate(l+"AbsoluteSum",a[l]),this.setPrivate(l+"Low",h[l]),this.setPrivate(l+"High",u[l]),this.setPrivate(l+"Open",o[l]),this.setPrivate(l+"Close",c[l])})}_updateChildren(){super._updateChildren(),this._psi=this.startIndex(),this._pei=this.endIndex(),this.isDirty("visible")&&this.bulletsContainer.set("visible",this.get("visible"));const e=this.get("heatRules");if(this._valuesDirty&&e&&e.length>0&&b(e,t=>{const i=t.minValue||this.getPrivate(t.dataField+"Low")||0,s=t.maxValue||this.getPrivate(t.dataField+"High")||0;b(t.target._entities,a=>{const n=a.dataItem.get(t.dataField);if(T(n))if(t.customFunction)t.customFunction.call(this,a,i,s,n);else{let h,u;h=t.logarithmic?(Math.log(n)*Math.LOG10E-Math.log(i)*Math.LOG10E)/(Math.log(s)*Math.LOG10E-Math.log(i)*Math.LOG10E):(n-i)/(s-i),!T(n)||T(h)&&Math.abs(h)!=1/0||(h=.5),T(t.min)?u=t.min+(t.max-t.min)*h:t.min instanceof L?u=L.interpolate(h,t.min,t.max):t.min instanceof Z&&(u=W(h,t.min,t.max)),a.set(t.key,u)}else t.neutral&&a.set(t.key,t.neutral)})}),this.get("visible")&&this.bullets.length>0){let t=this.dataItems.length,i=this.startIndex(),s=this.endIndex();s<t&&s++,i>0&&i--;for(let a=0;a<i;a++)this._hideBullets(this.dataItems[a]);for(let a=i;a<s;a++)this._positionBullets(this.dataItems[a]);for(let a=s;a<t;a++)this._hideBullets(this.dataItems[a])}}_positionBullets(e){e.bullets&&b(e.bullets,t=>{this._positionBullet(t);const i=t.get("sprite");t.get("dynamic")&&(i&&(i._markDirtyKey("fill"),i.markDirtySize()),i instanceof I&&i.walkChildren(s=>{s._markDirtyKey("fill"),s.markDirtySize(),s instanceof E&&s.text.markDirtyText()})),i instanceof E&&i.get("populateText")&&i.text.markDirtyText()})}_hideBullets(e){e.bullets&&b(e.bullets,t=>{let i=t.get("sprite");i&&i.setPrivate("visible",!1)})}_positionBullet(e){}_placeBulletsContainer(e){e.bulletsContainer.children.moveValue(this.bulletsContainer)}_removeBulletsContainer(){const e=this.bulletsContainer;e.parent&&e.parent.children.removeValue(e)}disposeDataItem(e){const t=e.bullets;t&&b(t,i=>{i.dispose()})}_getItemReaderLabel(){return""}showDataItem(e,t){const i=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return M(this,void 0,void 0,function*(){const s=[i.showDataItem.call(this,e,t)],a=e.bullets;a&&b(a,n=>{s.push(n.get("sprite").show(t))}),yield Promise.all(s)})}hideDataItem(e,t){const i=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return M(this,void 0,void 0,function*(){const s=[i.hideDataItem.call(this,e,t)],a=e.bullets;a&&b(a,n=>{s.push(n.get("sprite").hide(t))}),yield Promise.all(s)})}_sequencedShowHide(e,t){return M(this,void 0,void 0,function*(){if(this.get("sequencedInterpolation"))if(T(t)||(t=this.get("interpolationDuration",0)),t>0){const i=this.startIndex(),s=this.endIndex();yield Promise.all(H(this.dataItems,(a,n)=>M(this,void 0,void 0,function*(){let h=t||0;(n<i-10||n>s+10)&&(h=0);let u=this.get("sequencedDelay",0)+h/(s-i);yield ie(u*(n-i)),e?yield this.showDataItem(a,h):yield this.hideDataItem(a,h)})))}else yield Promise.all(H(this.dataItems,i=>e?this.showDataItem(i,0):this.hideDataItem(i,0)))})}updateLegendValue(e){if(e){const t=e.get("legendDataItem");if(t){const i=t.get("valueLabel");if(i){const a=i.text;let n="";i._setDataItem(e),n=this.get("legendValueText",a.get("text","")),i.set("text",n),a.markDirtyText()}const s=t.get("label");if(s){const a=s.text;let n="";s._setDataItem(e),n=this.get("legendLabelText",a.get("text","")),s.set("text",n),a.markDirtyText()}}}}updateLegendMarker(e){}_onHide(){super._onHide();const e=this.getTooltip();e&&e.hide()}hoverDataItem(e){}unhoverDataItem(e){}_getBase(e){const t=this.dataItems[this.startIndex()];return t?t.get(e):0}}function G(r,e){for(let t=0,i=e.length;t<i;t++){const s=e[t];if(s.length>0){let a=s[0];if(a.length>0){let n=a[0];r.moveTo(n.x,n.y);for(let h=0,u=s.length;h<u;h++)ae(r,s[h])}}}}function ae(r,e){for(let t=0,i=e.length;t<i;t++){const s=e[t];r.lineTo(s.x,s.y)}}Object.defineProperty(N,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Series"}),Object.defineProperty(N,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:j.classNames.concat([N.className])});class $ extends q{_beforeChanged(){super._beforeChanged(),(this.isDirty("points")||this.isDirty("segments")||this._sizeDirty||this.isPrivateDirty("width")||this.isPrivateDirty("height"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){const e=this.get("points"),t=this.get("segments");if(e&&e.length>0){let i=e[0];this._display.moveTo(i.x,i.y),G(this._display,[[e]])}else if(t)G(this._display,t);else if(!this.get("draw")){let i=this.width(),s=this.height();this._display.moveTo(0,0),this._display.lineTo(i,s)}}}}function oe(r){return function(){return r}}Object.defineProperty($,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Line"}),Object.defineProperty($,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:q.classNames.concat([$.className])});const R=Math.PI,A=2*R,k=1e-6,le=A-k;function X(r){this._+=r[0];for(let e=1,t=r.length;e<t;++e)this._+=arguments[e]+r[e]}function re(r){let e=Math.floor(r);if(!(e>=0))throw new Error(`invalid digits: ${r}`);if(e>15)return X;const t=10**e;return function(i){this._+=i[0];for(let s=1,a=i.length;s<a;++s)this._+=Math.round(arguments[s]*t)/t+i[s]}}class ne{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?X:re(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,i,s){this._append`Q${+e},${+t},${this._x1=+i},${this._y1=+s}`}bezierCurveTo(e,t,i,s,a,n){this._append`C${+e},${+t},${+i},${+s},${this._x1=+a},${this._y1=+n}`}arcTo(e,t,i,s,a){if(e=+e,t=+t,i=+i,s=+s,(a=+a)<0)throw new Error(`negative radius: ${a}`);let n=this._x1,h=this._y1,u=i-e,o=s-t,c=n-e,m=h-t,d=c*c+m*m;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(d>k)if(Math.abs(m*u-o*c)>k&&a){let l=i-n,p=s-h,g=u*u+o*o,f=l*l+p*p,y=Math.sqrt(g),w=Math.sqrt(d),D=a*Math.tan((R-Math.acos((g+d-f)/(2*y*w)))/2),_=D/w,C=D/y;Math.abs(_-1)>k&&this._append`L${e+_*c},${t+_*m}`,this._append`A${a},${a},0,0,${+(m*l>c*p)},${this._x1=e+C*u},${this._y1=t+C*o}`}else this._append`L${this._x1=e},${this._y1=t}`}arc(e,t,i,s,a,n){if(e=+e,t=+t,n=!!n,(i=+i)<0)throw new Error(`negative radius: ${i}`);let h=i*Math.cos(s),u=i*Math.sin(s),o=e+h,c=t+u,m=1^n,d=n?s-a:a-s;this._x1===null?this._append`M${o},${c}`:(Math.abs(this._x1-o)>k||Math.abs(this._y1-c)>k)&&this._append`L${o},${c}`,i&&(d<0&&(d=d%A+A),d>le?this._append`A${i},${i},0,1,${m},${e-h},${t-u}A${i},${i},0,1,${m},${this._x1=o},${this._y1=c}`:d>k&&this._append`A${i},${i},0,${+(d>=R)},${m},${this._x1=e+i*Math.cos(a)},${this._y1=t+i*Math.sin(a)}`)}rect(e,t,i,s){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${i=+i}v${+s}h${-i}Z`}toString(){return this._}}function ue(r){let e=3;return r.digits=function(t){if(!arguments.length)return e;if(t==null)e=null;else{const i=Math.floor(t);if(!(i>=0))throw new RangeError(`invalid digits: ${t}`);e=i}return r},()=>new ne(e)}class F extends I{constructor(){super(...arguments),Object.defineProperty(this,"chartContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(I.new(this._root,{width:x,height:x,interactiveChildren:!1}))}),Object.defineProperty(this,"bulletsContainer",{enumerable:!0,configurable:!0,writable:!0,value:I.new(this._root,{interactiveChildren:!1,isMeasured:!1,position:"absolute",width:x,height:x})})}}Object.defineProperty(F,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Chart"}),Object.defineProperty(F,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:I.classNames.concat([F.className])});class U extends F{constructor(){super(...arguments),Object.defineProperty(this,"seriesContainer",{enumerable:!0,configurable:!0,writable:!0,value:I.new(this._root,{width:x,height:x,isMeasured:!1})}),Object.defineProperty(this,"series",{enumerable:!0,configurable:!0,writable:!0,value:new ee})}_afterNew(){super._afterNew(),this._disposers.push(this.series);const e=this.seriesContainer.children;this._disposers.push(this.series.events.onAll(t=>{if(t.type==="clear"){b(t.oldValues,s=>{this._removeSeries(s)});const i=this.get("colors");i&&i.reset()}else if(t.type==="push")e.moveValue(t.newValue),this._processSeries(t.newValue);else if(t.type==="setIndex")e.setIndex(t.index,t.newValue),this._processSeries(t.newValue);else if(t.type==="insertIndex")e.insertIndex(t.index,t.newValue),this._processSeries(t.newValue);else if(t.type==="removeIndex")this._removeSeries(t.oldValue);else{if(t.type!=="moveIndex")throw new Error("Unknown IListEvent type");e.moveValue(t.value,t.newIndex),this._processSeries(t.value)}}))}_processSeries(e){e.chart=this,e._placeBulletsContainer(this)}_removeSeries(e){e.isDisposed()||(this.seriesContainer.children.removeValue(e),e._removeBulletsContainer())}}Object.defineProperty(U,"className",{enumerable:!0,configurable:!0,writable:!0,value:"SerialChart"}),Object.defineProperty(U,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:F.classNames.concat([U.className])});class B extends ${}Object.defineProperty(B,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Tick"}),Object.defineProperty(B,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:$.classNames.concat([B.className])});export{B,N as D,z as I,U,ue as V,j as _,V as g,oe as k};