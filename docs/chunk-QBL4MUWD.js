import{a as K}from"./chunk-K25MD5H7.js";import{$ as ae,Aa as P,Ba as D,Ea as N,Fa as ce,Ga as he,Ha as w,Ia as u,Ja as o,Ka as fe,L,La as k,Ma as f,N as W,Na as p,Oa as c,P as m,Pa as pe,Qa as ge,Ra as me,Sa as ve,Ta as _e,U as oe,Ua as Q,V as $,Va as ye,W as v,Xa as Ce,a as l,aa as I,ab as Ve,b as d,ba as x,ca as le,db as be,eb as T,fa as q,fb as g,h as ie,ha as O,k as ne,oa as ue,p as re,pa as de,ra as h,sa as a,u as se,wa as z}from"./chunk-B2NGSOAO.js";var Ie=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(a(z),a(q))},e.\u0275dir=v({type:e});let t=e;return t})(),qe=(()=>{let e=class e extends Ie{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=le(e)))(s||e)}})(),e.\u0275dir=v({type:e,features:[D]});let t=e;return t})(),xe=new m("");var ze={provide:xe,useExisting:L(()=>U),multi:!0};function Qe(){let t=K()?K().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ke=new m(""),U=(()=>{let e=class e extends Ie{constructor(n,r,s){super(n,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Qe())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(a(z),a(q),a(Ke,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&f("input",function(b){return s._handleInput(b.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(b){return s._compositionEnd(b.target.value)})},features:[Q([ze]),D]});let t=e;return t})();var Ze=new m(""),Xe=new m("");function Oe(t){return t!=null}function Pe(t){return Ce(t)?ne(t):t}function Ne(t){let e={};return t.forEach(i=>{e=i!=null?l(l({},e),i):e}),Object.keys(e).length===0?null:e}function ke(t,e){return e.map(i=>i(t))}function Ye(t){return!t.validate}function Te(t){return t.map(e=>Ye(e)?e:i=>e.validate(i))}function Je(t){if(!t)return null;let e=t.filter(Oe);return e.length==0?null:function(i){return Ne(ke(i,e))}}function Ge(t){return t!=null?Je(Te(t)):null}function et(t){if(!t)return null;let e=t.filter(Oe);return e.length==0?null:function(i){let n=ke(i,e).map(Pe);return se(n).pipe(re(Ne))}}function je(t){return t!=null?et(Te(t)):null}function De(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function tt(t){return t._rawValidators}function it(t){return t._rawAsyncValidators}function Z(t){return t?Array.isArray(t)?t:[t]:[]}function j(t,e){return Array.isArray(t)?t.includes(e):t===e}function we(t,e){let i=Z(e);return Z(t).forEach(r=>{j(i,r)||i.push(r)}),i}function Me(t,e){return Z(e).filter(i=>!j(t,i))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Ge(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=je(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},X=class extends R{get formDirective(){return null}get path(){return null}},S=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Y=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},nt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},zt=d(l({},nt),{"[class.ng-submitted]":"isSubmitted"}),Re=(()=>{let e=class e extends Y{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(a(S,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&he("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[D]});let t=e;return t})();var M="VALID",G="INVALID",_="PENDING",A="DISABLED",C=class{},B=class extends C{constructor(e,i){super(),this.value=e,this.source=i}},E=class extends C{constructor(e,i){super(),this.pristine=e,this.source=i}},F=class extends C{constructor(e,i){super(),this.touched=e,this.source=i}},y=class extends C{constructor(e,i){super(),this.status=e,this.source=i}};function rt(t){return(H(t)?t.validators:t)||null}function st(t){return Array.isArray(t)?Ge(t):t||null}function ot(t,e){return(H(e)?e.asyncValidators:t)||null}function at(t){return Array.isArray(t)?je(t):t||null}function H(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var J=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=T(()=>this.statusReactive()),this.statusReactive=P(void 0),this._pristine=T(()=>this.pristineReactive()),this.pristineReactive=P(!0),this._touched=T(()=>this.touchedReactive()),this.touchedReactive=P(!1),this._events=new ie,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return g(this.statusReactive)}set status(e){g(()=>this.statusReactive.set(e))}get valid(){return this.status===M}get invalid(){return this.status===G}get pending(){return this.status==_}get disabled(){return this.status===A}get enabled(){return this.status!==A}get pristine(){return g(this.pristineReactive)}set pristine(e){g(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return g(this.touchedReactive)}set touched(e){g(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(we(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(we(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Me(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Me(e,this._rawAsyncValidators))}hasValidator(e){return j(this._rawValidators,e)}hasAsyncValidator(e){return j(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let i=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(l({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new F(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(i=>i.markAllAsTouched(e))}markAsUntouched(e={}){let i=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),i&&e.emitEvent!==!1&&this._events.next(new F(!1,n))}markAsDirty(e={}){let i=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(l({},e),{sourceControl:n})),i&&e.emitEvent!==!1&&this._events.next(new E(!1,n))}markAsPristine(e={}){let i=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),i&&e.emitEvent!==!1&&this._events.next(new E(!0,n))}markAsPending(e={}){this.status=_;let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new y(this.status,i)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(l({},e),{sourceControl:i}))}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=A,this.errors=null,this._forEachChild(r=>{r.disable(d(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new B(this.value,n)),this._events.next(new y(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(l({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=M,this._forEachChild(n=>{n.enable(d(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(l({},e),{skipPristineCheck:i}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,i){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},i),this._parent._updateTouched({},i))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===_)&&this._runAsyncValidator(n,e.emitEvent)}let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new B(this.value,i)),this._events.next(new y(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(l({},e),{sourceControl:i}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,i){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator={emitEvent:i!==!1};let n=Pe(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:i,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1,this,i.shouldHaveEmitted)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,i,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new y(this.status,i)),this._parent&&this._parent._updateControlsErrors(e,i,n)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(G)?G:M}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,i){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),r&&this._events.next(new E(this.pristine,i))}_updateTouched(e={},i){this.touched=this._anyControlsTouched(),this._events.next(new F(this.touched,i)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){H(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=st(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=at(this._rawAsyncValidators)}};var Be=new m("CallSetDisabledState",{providedIn:"root",factory:()=>ee}),ee="always";function lt(t,e){return[...e.path,t]}function ut(t,e,i=ee){ct(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ht(t,e),pt(t,e),ft(t,e),dt(t,e)}function Ae(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function dt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function ct(t,e){let i=tt(t);e.validator!==null?t.setValidators(De(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=it(t);e.asyncValidator!==null?t.setAsyncValidators(De(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Ae(e._rawValidators,r),Ae(e._rawAsyncValidators,r)}function ht(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ue(t,e)})}function ft(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ue(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ue(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function pt(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function gt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function mt(t){return Object.getPrototypeOf(t.constructor)===qe}function vt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(s=>{s.constructor===U?i=s:mt(s)?n=s:r=s}),r||n||i||null}function Ee(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Fe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var _t=class extends J{constructor(e=null,i,n){super(rt(i),ot(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),H(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Fe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ee(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ee(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Fe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var yt={provide:S,useExisting:L(()=>te)},Se=Promise.resolve(),te=(()=>{let e=class e extends S{constructor(n,r,s,V,b,We){super(),this._changeDetectorRef=b,this.callSetDisabledState=We,this.control=new _t,this._registered=!1,this.name="",this.update=new O,this._parent=n,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=vt(this,V)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),gt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){ut(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Se.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,s=r!==0&&be(r);Se.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?lt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(a(X,9),a(Ze,10),a(Xe,10),a(xe,10),a(Ve,8),a(Be,8))},e.\u0275dir=v({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[Q([yt]),D,ae]});let t=e;return t})();var Ct=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=$({type:e}),e.\u0275inj=W({});let t=e;return t})();var He=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:Be,useValue:n.callSetDisabledState??ee}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=$({type:e}),e.\u0275inj=W({imports:[Ct]});let t=e;return t})();var Le={linkedList:[{id:"1",statement:`/**
This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
 */
      `,solution:`
    const arr = [10, 15, 3, 7];
    <br/>const k = 17;
    <br/>function babu(arr,k){
    <br/>   let result = false;
    <br/>   const complement = new Set();
    <br/>   arr.forEach(item => {
    <br/>     if (complement.has(k - item)) {
    <br/>       result = true;
    <br/>       return;
    <br/>     }
    <br/>     complement.add(item)
    <br/>   })
    <br/> return result;
    <br/>}
    <br/>babu(arr,k)`}],doublyLinkedList:[{id:"2",statement:"???",solution:`12312312
    12312312
    12312312312`}]};function bt(t,e){if(t&1){let i=k();u(0,"div",7)(1,"div",8)(2,"p"),c(3,"Output:"),o(),u(4,"button",9),f("click",function(){I(i);let r=p();return x(r.clear())}),c(5,"x"),o()(),u(6,"div",10),c(7),o()()}if(t&2){let i=p();h(7),pe(i.output)}}function Dt(t,e){if(t&1){let i=k();u(0,"div",12)(1,"button",5),f("click",function(){I(i);let r=p(2);return x(r.toggleSolution())}),c(2," Solution "),o()()}}function wt(t,e){if(t&1){let i=k();u(0,"div",13)(1,"div",8)(2,"p"),c(3,"Solution:"),o(),u(4,"button",9),f("click",function(){I(i);let r=p(2);return x(r.toggleSolution())}),c(5,"x"),o()(),fe(6,"div",14),o()}if(t&2){let i=p(2);h(6),ce("innerHTML",i.question.solution,ue)}}function Mt(t,e){if(t&1&&(u(0,"div",2)(1,"div",11),c(2),o(),N(3,Dt,3,0,"div",12)(4,wt,7,1,"div",13),o()),t&2){let i=p();h(2),ge(" ",i.question.statement," "),h(),w(i.showSolution?-1:3),h(),w(i.showSolution?4:-1)}}var ri=(()=>{class SelectedProblemComponent{dsa=Le;question=Object.keys(this.dsa).map(t=>this.dsa[t])[0][0];answer=localStorage.getItem(this.question.id)||"";output;showQuestion=!1;showSolution=!1;previousKey="";onKeydownMain(t){t.key==="Enter"&&this.previousKey==="Control"&&this.runProgram(),this.previousKey=t.key}toggleQuestion(){this.showQuestion=!this.showQuestion}toggleSolution(){this.showSolution=!this.showSolution}runProgram(){try{this.output=String(eval(this.answer)),localStorage.setItem(this.question.id,this.answer)}catch(t){this.output=t}}clear(){this.output=""}static \u0275fac=function t(e){return new(e||SelectedProblemComponent)};static \u0275cmp=oe({type:SelectedProblemComponent,selectors:[["app-selected-problem"]],hostBindings:function t(e,i){e&1&&f("keydown",function(r){return i.onKeydownMain(r)},!1,de)},standalone:!0,features:[ye],decls:11,vars:3,consts:[[1,"w-full","h-full","p-2","bg-gray-300","flex","gap-2"],[1,"flex-1","h-full","flex","flex-col","items-start","justify-start","gap-2"],[1,"flex-1","w-full","flex","flex-col","gap-2"],["name","answer","id","answer","cols","30","rows","10",1,"flex-1","w-full","p-2","rounded","overflow-auto",3,"ngModelChange","ngModel"],[1,"w-full","flex","gap-2","justify-end"],[1,"border","px-2","py-1","rounded",3,"click"],[1,"border","rounded-full","px-2",3,"click"],[1,"w-full","bg-white","p-2","rounded","border","border-black"],[1,"w-full","flex","justify-between"],[3,"click"],[1,"w-full","break-words"],[1,"flex-1","w-full","bg-white","p-2","rounded","border","border-black","overflow-auto"],[1,"w-full","flex","justify-end"],[1,"w-full","bg-white","p-2","rounded","border","border-black","overflow-auto"],[1,"w-full","break-words",3,"innerHTML"]],template:function t(e,i){e&1&&(u(0,"div",0)(1,"div",1)(2,"div",2)(3,"textarea",3),_e("ngModelChange",function(r){return ve(i.answer,r)||(i.answer=r),r}),o(),u(4,"div",4)(5,"button",5),f("click",function(){return i.runProgram()}),c(6," Submit "),o(),u(7,"button",6),f("click",function(){return i.toggleQuestion()}),c(8," ? "),o()()(),N(9,bt,8,1,"div",7),o(),N(10,Mt,5,3,"div",2),o()),e&2&&(h(3),me("ngModel",i.answer),h(6),w(i.output?9:-1),h(),w(i.showQuestion?10:-1))},dependencies:[He,U,Re,te]})}return SelectedProblemComponent})();export{ri as SelectedProblemComponent};
