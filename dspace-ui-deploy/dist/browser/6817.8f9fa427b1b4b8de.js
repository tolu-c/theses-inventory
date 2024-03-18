"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[6817,8572],{68572:(h,f,o)=>{o.d(f,{V:()=>y});var t=o(98678),e=o(5737),m=o(45608),E=o(75195),P=o(65384),v=o(48358),u=o(10572),a=o(96342),p=o(35103),n=o(5476),d=o(87586),l=o(82485);function _(s,c){if(1&s&&t.\u0275\u0275element(0,"ds-form",4),2&s){const r=t.\u0275\u0275nextContext();t.\u0275\u0275property("formId",r.FORM_PREFIX)("formModel",r.formModel)("formGroup",r.formGroup)("displaySubmit",!1)("displayCancel",!1)}}function w(s,c){if(1&s&&(t.\u0275\u0275elementStart(0,"div",5),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&s){const r=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(2,1,r.FORM_PREFIX+"error.matching-passwords"))}}function I(s,c){if(1&s&&(t.\u0275\u0275elementStart(0,"div",6),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&s){const r=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(2,1,r.FORM_PREFIX+"error.empty-password"))}}let y=(()=>{class s{constructor(r,i,g,F){this.formService=r,this.translate=i,this.epersonService=g,this.notificationsService=F,this.isInvalid=new t.EventEmitter,this.passwordValue=new t.EventEmitter,this.currentPasswordValue=new t.EventEmitter,this.formModel=[new e.b1u({id:"password",name:"password",inputType:"password"}),new e.b1u({id:"passwordrepeat",name:"passwordrepeat",inputType:"password"})],this.passwordCanBeEmpty=!0,this.subs=[]}ngOnInit(){"profile.security.form."===this.FORM_PREFIX&&this.formModel.unshift(new e.b1u({id:"current-password",name:"current-password",inputType:"password",required:!0})),this.formGroup=this.formService.createFormGroup(this.formModel,this.passwordCanBeEmpty?{validators:[this.checkPasswordsEqual]}:{validators:[this.checkPasswordsEqual,this.checkPasswordEmpty]}),this.updateFieldTranslations(),this.translate.onLangChange.subscribe(()=>{this.updateFieldTranslations()}),this.subs.push(this.formGroup.statusChanges.pipe((0,u.ig)(300),(0,v.U)(r=>"VALID"!==r)).subscribe(r=>this.isInvalid.emit(r))),this.subs.push(this.formGroup.valueChanges.pipe((0,u.ig)(300)).subscribe(r=>{this.passwordValue.emit(r.password),"profile.security.form."===this.FORM_PREFIX&&this.currentPasswordValue.emit(r["current-password"])}))}updateFieldTranslations(){this.formModel.forEach(r=>{r.label=this.translate.instant(this.FORM_PREFIX+"label."+r.id)})}checkPasswordsEqual(r){return r.get("password").value===r.get("passwordrepeat").value?null:{notSame:!0}}checkPasswordEmpty(r){const i=r.get("password").value;return(0,m.xb)(i)?{emptyPassword:!0}:null}ngOnDestroy(){this.subs.filter(r=>(0,m.Uh)(r)).forEach(r=>r.unsubscribe())}}return s.\u0275fac=function(r){return new(r||s)(t.\u0275\u0275directiveInject(e.w1X),t.\u0275\u0275directiveInject(a.sK),t.\u0275\u0275directiveInject(E.k),t.\u0275\u0275directiveInject(P.T))},s.\u0275cmp=t.\u0275\u0275defineComponent({type:s,selectors:[["ds-profile-page-security-form"]],inputs:{passwordCanBeEmpty:"passwordCanBeEmpty",FORM_PREFIX:"FORM_PREFIX"},outputs:{isInvalid:"isInvalid",passwordValue:"passwordValue",currentPasswordValue:"currentPasswordValue"},decls:6,vars:7,consts:[[1,"mb-4",3,"type"],[3,"formId","formModel","formGroup","displaySubmit","displayCancel",4,"ngIf"],["id","notSame","class","container-fluid text-danger",4,"ngIf"],["id","emptyPassword","class","container-fluid text-danger",4,"ngIf"],[3,"formId","formModel","formGroup","displaySubmit","displayCancel"],["id","notSame",1,"container-fluid","text-danger"],["id","emptyPassword",1,"container-fluid","text-danger"]],template:function(r,i){1&r&&(t.\u0275\u0275elementStart(0,"ds-alert",0),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(3,_,1,5,"ds-form",1),t.\u0275\u0275template(4,w,3,3,"div",2),t.\u0275\u0275template(5,I,3,3,"div",3)),2&r&&(t.\u0275\u0275property("type","alert-info"),t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(2,5,i.FORM_PREFIX+"info")),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",i.formModel),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",i.formGroup.hasError("notSame")),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",(i.formGroup.dirty||i.formGroup.touched)&&i.formGroup.hasError("emptyPassword")))},dependencies:[p.O5,n.JL,n.sg,d.w,l.U,a.X$],encapsulation:2}),s})()},46817:(h,f,o)=>{o.r(f),o.d(f,{ForgotPasswordFormComponent:()=>u});var t=o(76769),e=o(98678),m=o(35103),E=o(68572),P=o(96342);function v(a,p){if(1&a){const n=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",1)(1,"h3",2),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",5)(9,"div",6)(10,"div",7)(11,"label",8),e.\u0275\u0275text(12),e.\u0275\u0275pipe(13,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(14,"span",9),e.\u0275\u0275text(15),e.\u0275\u0275pipe(16,"async"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275elementStart(17,"div",3)(18,"div",4),e.\u0275\u0275text(19),e.\u0275\u0275pipe(20,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(21,"div",5)(22,"ds-profile-page-security-form",10),e.\u0275\u0275listener("isInvalid",function(l){e.\u0275\u0275restoreView(n);const _=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(_.setInValid(l))})("passwordValue",function(l){e.\u0275\u0275restoreView(n);const _=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(_.setPasswordValue(l))}),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(23,"div",6)(24,"div",7)(25,"button",11),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(n);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.submit())}),e.\u0275\u0275text(26),e.\u0275\u0275pipe(27,"translate"),e.\u0275\u0275elementEnd()()()()}if(2&a){const n=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,9,"forgot-password.form.head")),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(7,11,"forgot-password.form.identification.header")),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(13,13,"forgot-password.form.identification.email")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(16,15,n.registration$).email),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(20,17,"forgot-password.form.card.security")),e.\u0275\u0275advance(3),e.\u0275\u0275property("passwordCanBeEmpty",!1)("FORM_PREFIX","forgot-password.form."),e.\u0275\u0275advance(3),e.\u0275\u0275property("disabled",n.isInValid),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(27,19,"forgot-password.form.submit"))}}let u=(()=>{class a extends t.ForgotPasswordFormComponent{}return a.\u0275fac=function(){let p;return function(d){return(p||(p=e.\u0275\u0275getInheritedFactory(a)))(d||a)}}(),a.\u0275cmp=e.\u0275\u0275defineComponent({type:a,selectors:[["ds-forgot-password-form"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:3,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"mb-4"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-12"],["for","email",1,"font-weight-bold"],["id","email"],[3,"passwordCanBeEmpty","FORM_PREFIX","isInvalid","passwordValue"],[1,"btn","btn-default","btn-primary",3,"disabled","click"]],template:function(n,d){1&n&&(e.\u0275\u0275template(0,v,28,21,"div",0),e.\u0275\u0275pipe(1,"async")),2&n&&e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(1,1,d.registration$))},dependencies:[m.O5,E.V,m.Ov,P.X$]}),a})()}}]);