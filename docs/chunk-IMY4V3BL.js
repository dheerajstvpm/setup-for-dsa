import{b as Ce}from"./chunk-HNLITQQC.js";import{d as ye}from"./chunk-NMXSBG6K.js";import{$ as le,Ba as P,Ca as b,Fa as D,Ga as de,Ha as M,L as W,La as s,Ma as o,N as $,Oa as k,P as g,Pa as f,Qa as p,Ra as u,S as x,Sa as T,U as ae,Ua as he,V as q,Va as fe,W as _,Wa as pe,Xa as K,Ya as me,_a as ge,a as l,aa as I,b as d,ba as N,db as _e,ea as ue,fb as ve,gb as G,h as ne,ha as O,hb as m,ib as Z,k as re,ka as z,p as oe,ra as ce,ta as h,u as se,ua as a,ya as Q}from"./chunk-XCU44MAK.js";var Fe=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(a(Q),a(z))}}static{this.\u0275dir=_({type:i})}}return i})(),Le=(()=>{class i extends Fe{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=ue(i)))(r||i)}})()}static{this.\u0275dir=_({type:i,features:[b]})}}return i})(),Se=new g("");var We={provide:Se,useExisting:W(()=>H),multi:!0};function $e(){let i=Z()?Z().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var qe=new g(""),H=(()=>{class i extends Fe{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!$e())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(a(Q),a(z),a(qe,8))}}static{this.\u0275dir=_({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&f("input",function(V){return r._handleInput(V.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(V){return r._compositionEnd(V.target.value)})},features:[K([We]),b]})}}return i})();var ze=new g(""),Qe=new g("");function xe(i){return i!=null}function Ie(i){return ge(i)?re(i):i}function Ne(i){let e={};return i.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function Oe(i,e){return e.map(t=>t(i))}function Ke(i){return!i.validate}function Pe(i){return i.map(e=>Ke(e)?e:t=>e.validate(t))}function Ze(i){if(!i)return null;let e=i.filter(xe);return e.length==0?null:function(t){return Ne(Oe(t,e))}}function ke(i){return i!=null?Ze(Pe(i)):null}function Xe(i){if(!i)return null;let e=i.filter(xe);return e.length==0?null:function(t){let n=Oe(t,e).map(Ie);return se(n).pipe(oe(Ne))}}function Te(i){return i!=null?Xe(Pe(i)):null}function Ve(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Ye(i){return i._rawValidators}function Je(i){return i._rawAsyncValidators}function X(i){return i?Array.isArray(i)?i:[i]:[]}function j(i,e){return Array.isArray(i)?i.includes(e):i===e}function be(i,e){let t=X(e);return X(i).forEach(r=>{j(t,r)||t.push(r)}),t}function De(i,e){return X(e).filter(t=>!j(i,t))}var B=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ke(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Te(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},Y=class extends B{get formDirective(){return null}get path(){return null}},S=class extends B{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},J=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},et={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Lt=d(l({},et),{"[class.ng-submitted]":"isSubmitted"}),Ge=(()=>{class i extends J{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(a(S,2))}}static{this.\u0275dir=_({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&de("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[b]})}}return i})();var A="VALID",R="INVALID",v="PENDING",w="DISABLED",C=class{},U=class extends C{constructor(e,t){super(),this.value=e,this.source=t}},E=class extends C{constructor(e,t){super(),this.pristine=e,this.source=t}},F=class extends C{constructor(e,t){super(),this.touched=e,this.source=t}},y=class extends C{constructor(e,t){super(),this.status=e,this.source=t}};function tt(i){return(L(i)?i.validators:i)||null}function it(i){return Array.isArray(i)?ke(i):i||null}function nt(i,e){return(L(e)?e.asyncValidators:i)||null}function rt(i){return Array.isArray(i)?Te(i):i||null}function L(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var ee=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=G(()=>this.statusReactive()),this.statusReactive=P(void 0),this._pristine=G(()=>this.pristineReactive()),this.pristineReactive=P(!0),this._touched=G(()=>this.touchedReactive()),this.touchedReactive=P(!1),this._events=new ne,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return m(this.statusReactive)}set status(e){m(()=>this.statusReactive.set(e))}get valid(){return this.status===A}get invalid(){return this.status===R}get pending(){return this.status==v}get disabled(){return this.status===w}get enabled(){return this.status!==w}get pristine(){return m(this.pristineReactive)}set pristine(e){m(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return m(this.touchedReactive)}set touched(e){m(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(be(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(be(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(De(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(De(e,this._rawAsyncValidators))}hasValidator(e){return j(this._rawValidators,e)}hasAsyncValidator(e){return j(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new F(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new F(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new E(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new E(!0,n))}markAsPending(e={}){this.status=v;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new y(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=w,this.errors=null,this._forEachChild(r=>{r.disable(d(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new U(this.value,n)),this._events.next(new y(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=A,this._forEachChild(n=>{n.enable(d(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===A||this.status===v)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new U(this.value,t)),this._events.next(new y(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:A}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=v,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Ie(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new y(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?R:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(v)?v:this._anyControlsHaveStatus(R)?R:A}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new E(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new F(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){L(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=it(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}};var Re=new g("CallSetDisabledState",{providedIn:"root",factory:()=>te}),te="always";function ot(i,e){return[...e.path,i]}function st(i,e,t=te){lt(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),ut(i,e),dt(i,e),ct(i,e),at(i,e)}function Me(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function at(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function lt(i,e){let t=Ye(i);e.validator!==null?i.setValidators(Ve(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=Je(i);e.asyncValidator!==null?i.setAsyncValidators(Ve(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Me(e._rawValidators,r),Me(e._rawAsyncValidators,r)}function ut(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&je(i,e)})}function ct(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&je(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function je(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function dt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function ht(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function ft(i){return Object.getPrototypeOf(i.constructor)===Le}function pt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(c=>{c.constructor===H?t=c:ft(c)?n=c:r=c}),r||n||t||null}function Ae(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function we(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var mt=class extends ee{constructor(e=null,t,n){super(tt(t),nt(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),L(t)&&(t.nonNullable||t.initialValueIsDefault)&&(we(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ae(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ae(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){we(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var gt={provide:S,useExisting:W(()=>ie)},Ee=Promise.resolve(),ie=(()=>{class i extends S{constructor(t,n,r,c,V,Ue){super(),this._changeDetectorRef=V,this.callSetDisabledState=Ue,this.control=new mt,this._registered=!1,this.name="",this.update=new O,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=pt(this,c)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),ht(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){st(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Ee.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&ve(n);Ee.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?ot(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(a(Y,9),a(ze,10),a(Qe,10),a(Se,10),a(_e,8),a(Re,8))}}static{this.\u0275dir=_({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[K([gt]),b,le]})}}return i})();var _t=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=q({type:i})}static{this.\u0275inj=$({})}}return i})();var Be=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:Re,useValue:t.callSetDisabledState??te}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=q({type:i})}static{this.\u0275inj=$({imports:[_t]})}}return i})();function yt(i,e){if(i&1){let t=k();s(0,"div",12)(1,"button",13),f("click",function(){I(t);let r=p(2);return N(r.toggleSolution())}),u(2," x "),o(),s(3,"p"),u(4,"Solution:"),o(),s(5,"textarea",11),u(6),o()()}if(i&2){let t=p(2);h(6),T(t.question().solution)}}function Ct(i,e){if(i&1&&(s(0,"div",1)(1,"div",10)(2,"p"),u(3,"Problem:"),o(),s(4,"textarea",11),u(5),o()(),D(6,yt,7,1,"div",12),o()),i&2){let t=p();h(5),T(t.question().statement),h(),M(t.showSolution?6:-1)}}function Vt(i,e){if(i&1){let t=k();s(0,"div",8)(1,"button",7),f("click",function(){I(t);let r=p();return N(r.toggleSolution())}),u(2,"Solution"),o()()}}function bt(i,e){if(i&1){let t=k();s(0,"div",9)(1,"div",14)(2,"p"),u(3,"Output:"),o(),s(4,"button",15),f("click",function(){I(t);let r=p();return N(r.clear())}),u(5,"x"),o()(),s(6,"div",16),u(7),o()()}if(i&2){let t=p();h(7),T(t.output)}}var ei=(()=>{class SelectedProblemComponent{problemService=x(Ce);router=x(ye);question;answer="";output;showQuestion=!0;showSolution=!1;previousKey="";ngOnInit(){this.question=this.problemService.currentQuestion,this.answer=localStorage.getItem(this.question().id)||this.question().shell||""}onKeydownMain(i){i.key==="Enter"&&this.previousKey==="Control"&&this.runProgram(),this.previousKey=i.key}toggleQuestion(){this.showQuestion=!this.showQuestion}toggleSolution(){this.showSolution=!this.showSolution,this.showSolution&&(this.showQuestion=!0)}scrollToBottom(){setTimeout(()=>{window.scrollTo(0,document.body.scrollHeight)},50)}runProgram(){try{this.output=String(eval(this.answer)),localStorage.setItem(this.question().id,this.answer)}catch(i){this.output=i}this.scrollToBottom()}clear(){this.output=""}static \u0275fac=function i(e){return new(e||SelectedProblemComponent)};static \u0275cmp=ae({type:SelectedProblemComponent,selectors:[["app-selected-problem"]],hostBindings:function i(e,t){e&1&&f("keydown",function(r){return t.onKeydownMain(r)},!1,ce)},standalone:!0,features:[me],decls:13,vars:4,consts:[[1,"w-full","h-full","p-2","flex","flex-col","sm:flex-row","gap-2"],[1,"flex-1","sm:h-full","flex","flex-col","gap-2"],[1,"flex-1","h-full","flex","flex-col","items-start","justify-start","gap-2"],[1,"flex-1","w-full","flex","flex-col","gap-2"],["name","answer","id","answer","cols","30","rows","10",1,"textarea","textarea-bordered","bg-base-200","flex-1","w-full","p-2","overflow-auto",3,"ngModelChange","ngModel"],[1,"w-full","flex","gap-2","justify-between","items-center"],[1,"flex","justify-start","items-center","gap-2"],[1,"btn",3,"click"],[1,"w-full","flex","justify-end"],[1,"w-full","p-2","rounded","border","border-warning","bg-base-200"],[1,"sm:flex-1","p-2","flex","flex-col","rounded","border","border-error","bg-base-200","overflow-auto"],["name","answer","id","answer","cols","30","rows","10","readonly","",1,"textarea","textarea-bordered","bg-base-200","flex-1","max-h-fit","w-full","p-2","overflow-auto"],[1,"relative","flex-1","w-full","p-2","flex","flex-col","rounded","border","border-accent","bg-base-200","overflow-auto"],[1,"absolute","top-0","right-0",3,"click"],[1,"w-full","flex","justify-between"],[3,"click"],["id","output",1,"w-full","break-words"]],template:function i(e,t){e&1&&(s(0,"div",0),D(1,Ct,7,2,"div",1),s(2,"div",2)(3,"div",3)(4,"textarea",4),pe("ngModelChange",function(r){return fe(t.answer,r)||(t.answer=r),r}),o(),s(5,"div",5)(6,"div",6)(7,"button",7),f("click",function(){return t.toggleQuestion()}),u(8,"?"),o(),D(9,Vt,3,0,"div",8),o(),s(10,"button",7),f("click",function(){return t.runProgram()}),u(11,"Submit"),o()()(),D(12,bt,8,1,"div",9),o()()),e&2&&(h(),M(t.showQuestion?1:-1),h(3),he("ngModel",t.answer),h(5),M(!t.showSolution&&t.output?9:-1),h(3),M(t.output?12:-1))},dependencies:[Be,H,Ge,ie]})}return SelectedProblemComponent})();export{ei as SelectedProblemComponent};