import{a as x,b as I,c as N,e as P}from"./chunk-NMXSBG6K.js";import{Aa as F,K as u,La as a,M as g,Ma as d,Na as l,P as f,S as p,U as y,X as v,Ya as S,ca as h,cb as _,da as c,ia as A,lb as R,pa as w,va as C,wa as M,xa as b}from"./chunk-XCU44MAK.js";var D=[{path:"",redirectTo:"problems",pathMatch:"full"},{path:"problems",loadComponent:()=>import("./chunk-D3KY63S2.js").then(o=>o.ProblemsComponent)},{path:"selected-problem",loadComponent:()=>import("./chunk-IMY4V3BL.js").then(o=>o.SelectedProblemComponent)}];var L="@",V=(()=>{class o{constructor(t,r,n,i,s){this.doc=t,this.delegate=r,this.zone=n,this.animationType=i,this.moduleImpl=s,this._rendererFactoryPromise=null,this.scheduler=p(M,{optional:!0}),this.loadingSchedulerFn=p(B,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-HXXNCZL3.js").then(n=>n),r;return this.loadingSchedulerFn?r=this.loadingSchedulerFn(t):r=t(),r.catch(n=>{throw new u(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:i})=>{this._engine=n(this.animationType,this.doc);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,r){let n=this.delegate.createRenderer(t,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let i=new m(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(s=>{let O=s.createRenderer(t,r);i.use(O),this.scheduler?.notify(10)}).catch(s=>{i.use(n)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static{this.\u0275fac=function(r){C()}}static{this.\u0275prov=g({token:o,factory:o.\u0275fac})}}return o})(),m=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,n){this.delegate.insertBefore(e,t,r,n)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,n){this.delegate.setAttribute(e,t,r,n)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,n){this.delegate.setStyle(e,t,r,n)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(n=>n.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(n=>n.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(L)}},B=new f("");function E(o="animations"){return F("NgAsyncAnimations"),v([{provide:b,useFactory:(e,t,r)=>new V(e,t,r,o),deps:[R,x,A]},{provide:w,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var T={providers:[_({eventCoalescing:!0}),P(D),E()]};var k=(()=>{class o{static \u0275fac=function(r){return new(r||o)};static \u0275cmp=y({type:o,selectors:[["app-root"]],standalone:!0,features:[S],decls:11,vars:0,consts:[[1,"w-full","h-full","flex","flex-col","items-start","justify-start","overflow-auto"],[1,"hidden","w-full","p-2"],[1,"flex","cursor-pointer","gap-2"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["cx","12","cy","12","r","5"],["d","M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"],["type","checkbox","value","synthwave",1,"toggle","theme-controller"],["d","M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"],[1,"flex-1","w-full","overflow-auto"]],template:function(r,n){r&1&&(a(0,"div",0)(1,"div",1)(2,"label",2),h(),a(3,"svg",3),l(4,"circle",4)(5,"path",5),d(),c(),l(6,"input",6),h(),a(7,"svg",3),l(8,"path",7),d()()(),c(),a(9,"div",8),l(10,"router-outlet"),d()())},dependencies:[N]})}return o})();I(k,T).catch(o=>console.error(o));