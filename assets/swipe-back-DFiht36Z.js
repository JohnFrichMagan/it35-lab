import{c as A}from"./index-BMc2ZHnG.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */class R{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){var r;return new W(this,this.newID(),t.name,(r=t.priority)!==null&&r!==void 0?r:0,!!t.disableScroll)}createBlocker(t={}){return new B(this,this.newID(),t.disable,!!t.disableScroll)}start(t,r,i){return this.canStart(t)?(this.requestedStart.set(r,i),!0):(this.requestedStart.delete(r),!1)}capture(t,r,i){if(!this.start(t,r,i))return!1;const c=this.requestedStart;let n=-1e4;if(c.forEach(a=>{n=Math.max(n,a)}),n===i){this.capturedId=r,c.clear();const a=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(a),!0}return c.delete(r),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,r){let i=this.disabledGestures.get(t);i===void 0&&(i=new Set,this.disabledGestures.set(t,i)),i.add(r)}enableGesture(t,r){const i=this.disabledGestures.get(t);i!==void 0&&i.delete(r)}disableScroll(t){this.disabledScroll.add(t),this.disabledScroll.size===1&&document.body.classList.add(P)}enableScroll(t){this.disabledScroll.delete(t),this.disabledScroll.size===0&&document.body.classList.remove(P)}canStart(t){return!(this.capturedId!==void 0||this.isDisabled(t))}isCaptured(){return this.capturedId!==void 0}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const r=this.disabledGestures.get(t);return!!(r&&r.size>0)}newID(){return this.gestureId++,this.gestureId}}class W{constructor(t,r,i,c,n){this.id=r,this.name=i,this.disableScroll=n,this.priority=c*1e6+r,this.ctrl=t}canStart(){return this.ctrl?this.ctrl.canStart(this.name):!1}start(){return this.ctrl?this.ctrl.start(this.name,this.id,this.priority):!1}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class B{constructor(t,r,i,c){this.id=r,this.disable=i,this.disableScroll=c,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const P="backdrop-no-scroll",V=new R;/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const g=(e,t,r,i)=>{const c=F(e)?{capture:!1,passive:!!i.passive}:!1;let n,a;return e.__zone_symbol__addEventListener?(n="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(n="addEventListener",a="removeEventListener"),e[n](t,r,c),()=>{e[a](t,r,c)}},F=e=>{if(D===void 0)try{const t=Object.defineProperty({},"passive",{get:()=>{D=!0}});e.addEventListener("optsTest",()=>{},t)}catch(t){D=!1}return!!D};let D;const j=2e3,H=(e,t,r,i,c)=>{let n,a,b,u,d,l,S,y=0;const o=f=>{y=Date.now()+j,t(f)&&(!a&&r&&(a=g(e,"touchmove",r,c)),b||(b=g(f.target,"touchend",s,c)),u||(u=g(f.target,"touchcancel",s,c)))},p=f=>{y>Date.now()||t(f)&&(!l&&r&&(l=g(I(e),"mousemove",r,c)),S||(S=g(I(e),"mouseup",v,c)))},s=f=>{m(),i&&i(f)},v=f=>{Y(),i&&i(f)},m=()=>{a&&a(),b&&b(),u&&u(),a=b=u=void 0},Y=()=>{l&&l(),S&&S(),l=S=void 0},X=()=>{m(),Y()},E=(f=!0)=>{f?(n||(n=g(e,"touchstart",o,c)),d||(d=g(e,"mousedown",p,c))):(n&&n(),d&&d(),n=d=void 0,X())};return{enable:E,stop:X,destroy:()=>{E(!1),i=r=t=void 0}}},I=e=>e instanceof Document?e:e.ownerDocument,K=(e,t,r)=>{const i=r*(Math.PI/180),c=e==="x",n=Math.cos(i),a=t*t;let b=0,u=0,d=!1,l=0;return{start(S,y){b=S,u=y,l=0,d=!0},detect(S,y){if(!d)return!1;const o=S-b,p=y-u,s=o*o+p*p;if(s<a)return!1;const v=Math.sqrt(s),m=(c?o:p)/v;return m>n?l=1:m<-n?l=-1:l=0,d=!1,!0},isGesture(){return l!==0},getDirection(){return l}}},N=e=>{let t=!1,r=!1,i=!0,c=!1;const n=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),a=n.canStart,b=n.onWillStart,u=n.onStart,d=n.onEnd,l=n.notCaptured,S=n.onMove,y=n.threshold,o=n.passive,p=n.blurOnStart,s={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},v=K(n.direction,n.threshold,n.maxAngle),m=V.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),Y=h=>{const M=z(h);return r||!i||(x(h,s),s.startX=s.currentX,s.startY=s.currentY,s.startTime=s.currentTime=M,s.velocityX=s.velocityY=s.deltaX=s.deltaY=0,s.event=h,a&&a(s)===!1)||(m.release(),!m.start())?!1:(r=!0,y===0?w():(v.start(s.startX,s.startY),!0))},X=h=>{if(t){!c&&i&&(c=!0,C(s,h),requestAnimationFrame(E));return}C(s,h),v.detect(s.currentX,s.currentY)&&(!v.isGesture()||!w())&&q()},E=()=>{t&&(c=!1,S&&S(s))},w=()=>m.capture()?(t=!0,i=!1,s.startX=s.currentX,s.startY=s.currentY,s.startTime=s.currentTime,b?b(s).then(T):T(),!0):!1,f=()=>{if(typeof document<"u"){const h=document.activeElement;h!=null&&h.blur&&h.blur()}},T=()=>{p&&f(),u&&u(s),i=!0},G=()=>{t=!1,r=!1,c=!1,i=!0,m.release()},L=h=>{const M=t,k=i;if(G(),!!k){if(C(s,h),M){d&&d(s);return}l&&l(s)}},_=H(n.el,Y,X,L,{passive:o}),q=()=>{G(),_.stop(),l&&l(s)};return{enable(h=!0){h||(t&&L(void 0),G()),_.enable(h)},destroy(){m.destroy(),_.destroy()}}},C=(e,t)=>{if(!t)return;const r=e.currentX,i=e.currentY,c=e.currentTime;x(t,e);const n=e.currentX,a=e.currentY,u=(e.currentTime=z(t))-c;if(u>0&&u<100){const d=(n-r)/u,l=(a-i)/u;e.velocityX=d*.7+e.velocityX*.3,e.velocityY=l*.7+e.velocityY*.3}e.deltaX=n-e.startX,e.deltaY=a-e.startY,e.event=t},x=(e,t)=>{let r=0,i=0;if(e){const c=e.changedTouches;if(c&&c.length>0){const n=c[0];r=n.clientX,i=n.clientY}else e.pageX!==void 0&&(r=e.pageX,i=e.pageY)}t.currentX=r,t.currentY=i},z=e=>e.timeStamp||Date.now();/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const O=e=>e&&e.dir!==""?e.dir.toLowerCase()==="rtl":(document==null?void 0:document.dir.toLowerCase())==="rtl";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const U=(e,t,r,i,c)=>{const n=e.ownerDocument.defaultView;let a=O(e);const b=o=>{const{startX:s}=o;return a?s>=n.innerWidth-50:s<=50},u=o=>a?-o.deltaX:o.deltaX,d=o=>a?-o.velocityX:o.velocityX;return N({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:o=>(a=O(e),b(o)&&t()),onStart:r,onMove:o=>{const s=u(o)/n.innerWidth;i(s)},onEnd:o=>{const p=u(o),s=n.innerWidth,v=p/s,m=d(o),Y=s/2,X=m>=0&&(m>.2||p>Y),w=(X?1-v:v)*s;let f=0;if(w>5){const T=w/Math.abs(m);f=Math.min(T,540)}c(X,v<=0?.01:A(0,v,.9999),f)}})};export{U as createSwipeBackGesture};
