import{a as F,b as I,c as D,e as E}from"./chunk-TX3KYBLP.js";import{K as u,La as a,M as g,Ma as p,Na as l,S as f,U as y,X as v,Ya as R,ca as h,cb as S,da as m,mb as P,oa as w,ua as C,va as b,wa as A,ya as M,za as x}from"./chunk-YBFFQZJA.js";var N=[{path:"",redirectTo:"problems",pathMatch:"full"},{path:"problems",loadComponent:()=>import("./chunk-VM2CBWE3.js").then(n=>n.ProblemsComponent)},{path:"selected-problem",loadComponent:()=>import("./chunk-ORNO7U3V.js").then(n=>n.SelectedProblemComponent)}];var V="@",B=(()=>{let e=class e{constructor(r,o,i,s,d){this.doc=r,this.delegate=o,this.zone=i,this.animationType=s,this.moduleImpl=d,this._rendererFactoryPromise=null,this.scheduler=f(b,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-OT7GP3C7.js").then(o=>o)).catch(o=>{throw new u(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let s=new i(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(r,o){let i=this.delegate.createRenderer(r,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let s=new c(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let _=d.createRenderer(r,o);s.use(_),this.scheduler?.notify(9)}).catch(d=>{s.use(i)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){C()},e.\u0275prov=g({token:e,factory:e.\u0275fac});let n=e;return n})(),c=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,r,o){this.delegate.insertBefore(e,t,r,o)}removeChild(e,t,r){this.delegate.removeChild(e,t,r)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,r,o){this.delegate.setAttribute(e,t,r,o)}removeAttribute(e,t,r){this.delegate.removeAttribute(e,t,r)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,r,o){this.delegate.setStyle(e,t,r,o)}removeStyle(e,t,r){this.delegate.removeStyle(e,t,r)}setProperty(e,t,r){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(e,t,r)),this.delegate.setProperty(e,t,r)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,r){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(e,t,r)),this.delegate.listen(e,t,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(V)}};function T(n="animations"){return M("NgAsyncAnimations"),v([{provide:A,useFactory:(e,t,r)=>new B(e,t,r,n),deps:[P,F,x]},{provide:w,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var k={providers:[S({eventCoalescing:!0}),E(N),T()]};var O=(()=>{class n{static \u0275fac=function(r){return new(r||n)};static \u0275cmp=y({type:n,selectors:[["app-root"]],standalone:!0,features:[R],decls:11,vars:0,consts:[[1,"w-full","h-full","flex","flex-col","items-start","justify-start","overflow-auto"],[1,"hidden","w-full","p-2"],[1,"flex","cursor-pointer","gap-2"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["cx","12","cy","12","r","5"],["d","M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"],["type","checkbox","value","synthwave",1,"toggle","theme-controller"],["d","M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"],[1,"flex-1","w-full","overflow-auto"]],template:function(r,o){r&1&&(a(0,"div",0)(1,"div",1)(2,"label",2),h(),a(3,"svg",3),l(4,"circle",4)(5,"path",5),p(),m(),l(6,"input",6),h(),a(7,"svg",3),l(8,"path",7),p()()(),m(),a(9,"div",8),l(10,"router-outlet"),p()())},dependencies:[D]})}return n})();I(O,k).catch(n=>console.error(n));