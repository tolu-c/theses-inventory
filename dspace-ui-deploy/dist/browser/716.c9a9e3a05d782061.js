"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[716,8572],{76826:(U,T,r)=>{r.d(T,{u:()=>m});var a=r(5737),O=(r(88539),r(45608)),b=r(75195),S=r(62574),R=r.n(S),C=r(10572),e=r(87893),M=r(65384),F=r(76774),E=r(98678),A=r(96342),D=r(35103),B=r(5476),V=r(82485);function t(_,s){if(1&_&&E.\u0275\u0275element(0,"ds-form",1),2&_){const o=E.\u0275\u0275nextContext();E.\u0275\u0275property("formId","profile-page-metadata-form-id")("formModel",o.formModel)("formGroup",o.formGroup)("displaySubmit",!1)("displayCancel",!1)}}let m=(()=>{class _{constructor(o,f,u,w){this.formBuilderService=o,this.translate=f,this.epersonService=u,this.notificationsService=w,this.formModel=[new a.b1u({id:"email",name:"email",readOnly:!0}),new a.b1u({id:"firstname",name:"eperson.firstname",required:!0,validators:{required:null},errorMessages:{required:"This field is required"}}),new a.b1u({id:"lastname",name:"eperson.lastname",required:!0,validators:{required:null},errorMessages:{required:"This field is required"}}),new a.b1u({id:"phone",name:"eperson.phone"}),new a.nMt({id:"language",name:"eperson.language"})],this.LABEL_PREFIX="profile.metadata.form.label.",this.ERROR_PREFIX="profile.metadata.form.error.",this.NOTIFICATION_PREFIX="profile.metadata.form.notifications."}ngOnInit(){this.activeLangs=F.N.languages.filter(o=>!0===o.active),this.setFormValues(),this.updateFieldTranslations(),this.translate.onLangChange.subscribe(()=>{this.updateFieldTranslations()})}setFormValues(){this.formModel.forEach(o=>{o.value="email"===o.name?this.user.email:this.user.firstMetadataValue(o.name),"language"===o.id&&(o.options=this.activeLangs.map(f=>Object.assign({value:f.code,label:f.label})))}),this.formGroup=this.formBuilderService.createFormGroup(this.formModel)}updateFieldTranslations(){this.formModel.forEach(o=>{o.label=this.translate.instant(this.LABEL_PREFIX+o.id),(0,O.UE)(o.validators)&&(o.errorMessages={},Object.keys(o.validators).forEach(f=>{o.errorMessages[f]=this.translate.instant(this.ERROR_PREFIX+o.id+"."+f)}))})}updateProfile(){if(!this.formGroup.valid)return!1;const o=R()(this.user.metadata);let f=!1;return this.formModel.filter(u=>"email"!==u.id).forEach(u=>{o.hasOwnProperty(u.name)&&o[u.name].length>0?(0,O.Uh)(u.value)?o[u.name][0].value!==u.value&&(o[u.name][0].value=u.value,f=!0):(o[u.name]=[],f=!0):(0,O.Uh)(u.value)&&(o[u.name]=[{value:u.value,language:null}],f=!0)}),f&&this.epersonService.update(Object.assign(R()(this.user),{metadata:o})).pipe((0,C.xw)(),(0,C.xe)()).subscribe(u=>{this.user=u,this.setFormValues(),this.notificationsService.success(this.translate.instant(this.NOTIFICATION_PREFIX+"success.title"),this.translate.instant(this.NOTIFICATION_PREFIX+"success.content"))}),f}}return _.\u0275fac=function(o){return new(o||_)(E.\u0275\u0275directiveInject(e.c),E.\u0275\u0275directiveInject(A.sK),E.\u0275\u0275directiveInject(b.k),E.\u0275\u0275directiveInject(M.T))},_.\u0275cmp=E.\u0275\u0275defineComponent({type:_,selectors:[["ds-profile-page-metadata-form"]],inputs:{user:"user"},decls:1,vars:1,consts:[[3,"formId","formModel","formGroup","displaySubmit","displayCancel",4,"ngIf"],[3,"formId","formModel","formGroup","displaySubmit","displayCancel"]],template:function(o,f){1&o&&E.\u0275\u0275template(0,t,1,5,"ds-form",0),2&o&&E.\u0275\u0275property("ngIf",f.formModel)},dependencies:[D.O5,B.JL,B.sg,V.U],encapsulation:2}),_})()},26537:(U,T,r)=>{r.d(T,{V:()=>Y});var a=r(35841),x=r(77176),O=r(21160),b=r(48358),S=r(27303),R=r(69637),C=r(10572),e=r(98678),M=r(18453),F=r(15463),A=(r(61750),r(41529)),D=r(26316),B=r(64455),V=r(8842),t=r(65706),m=r(67522),_=r(35103),s=r(35534),o=r(96342);function f(l,P){if(1&l){const i=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",8)(1,"button",15,16),e.\u0275\u0275listener("click",function(){const I=e.\u0275\u0275restoreView(i).$implicit,L=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(L.selectItem(I.indexableObject))}),e.\u0275\u0275element(3,"ds-listable-object-component-loader",17),e.\u0275\u0275elementEnd()()}if(2&l){const i=P.$implicit,c=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275propertyInterpolate("title",c.dsoNameService.getName(i.indexableObject)),e.\u0275\u0275advance(2),e.\u0275\u0275property("object",i)("viewMode",c.viewMode)("linkType",c.linkTypes.None)}}let u=(()=>{class l extends M.q{constructor(i,c,g,I,L){super(i,c),this.activeModal=i,this.route=c,this.router=g,this.profileClaimService=I,this.dsoNameService=L,this.listEntries$=new a.X(null),this.viewMode=A.w.ListElement,this.linkTypes=B.m,this.checked=!1,this.create=new e.EventEmitter}ngOnInit(){this.profileClaimService.searchForSuggestions(this.dso).pipe((0,C.hC)()).subscribe(i=>this.listEntries$.next(i))}selectItem(i){this.close(),this.navigate(i)}navigate(i){this.router.navigate([(0,F.Tt)(i)])}toggleCheckbox(){this.checked=!this.checked}createFromScratch(){this.create.emit(),this.close()}}return l.\u0275fac=function(i){return new(i||l)(e.\u0275\u0275directiveInject(t.Kz),e.\u0275\u0275directiveInject(m.gz),e.\u0275\u0275directiveInject(m.F0),e.\u0275\u0275directiveInject(D.n),e.\u0275\u0275directiveInject(V._))},l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["ds-profile-claim-item-modal"]],inputs:{dso:"dso"},outputs:{create:"create"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:27,vars:17,consts:[[1,"modal-header"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["role","alert",1,"alert","alert-info"],[1,"dropdown-divider"],[1,"scrollable-menu","list-group","container"],["class","row",4,"ngFor","ngForOf"],[1,"row"],[1,"col-md","mt-2"],[1,"modal-footer"],[1,"mr-5"],["type","checkbox",3,"checked","change"],["type","submit",1,"btn","btn-primary","ml-5","mr-2",3,"disabled","click"],[1,"fas","fa-plus"],[1,"list-group-item","list-group-item-action","border-0","list-entry",3,"title","click"],["listEntryElement",""],[3,"object","viewMode","linkType"]],template:function(i,c){if(1&i&&(e.\u0275\u0275elementStart(0,"div")(1,"div",0)(2,"h4"),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",1),e.\u0275\u0275listener("click",function(){return c.close()}),e.\u0275\u0275elementStart(6,"span",2),e.\u0275\u0275text(7,"\xd7"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(8,"div",3)(9,"div",4),e.\u0275\u0275text(10),e.\u0275\u0275pipe(11,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(12,"div",5),e.\u0275\u0275elementStart(13,"div",6),e.\u0275\u0275template(14,f,4,4,"div",7),e.\u0275\u0275pipe(15,"async"),e.\u0275\u0275elementStart(16,"div",8),e.\u0275\u0275element(17,"div",9),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(18,"div",10)(19,"div",11)(20,"input",12),e.\u0275\u0275listener("change",function(){return c.toggleCheckbox()}),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(21),e.\u0275\u0275pipe(22,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(23,"button",13),e.\u0275\u0275listener("click",function(){return c.createFromScratch()}),e.\u0275\u0275element(24,"i",14),e.\u0275\u0275text(25),e.\u0275\u0275pipe(26,"translate"),e.\u0275\u0275elementEnd()()()),2&i){let g;e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,7,"dso-selector.claim.item.head")),e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(11,9,"dso-selector.claim.item.body")," "),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngForOf",null==(g=e.\u0275\u0275pipeBind1(15,11,c.listEntries$))?null:g.payload.page),e.\u0275\u0275advance(6),e.\u0275\u0275property("checked",c.checked),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(22,13,"dso-selector.claim.item.not-mine-label")," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",!c.checked),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(26,15,"dso-selector.claim.item.create-from-scratch")," ")}},dependencies:[_.sg,s.p,_.Ov,o.X$],encapsulation:2}),l})();var w=r(65384),W=r(38123),K=(r(88539),r(81576)),j=r(45608),$=r(46533),X=r(74207),N=r(41966),G=r(1599);function z(l,P){if(1&l){const i=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"p",3)(5,"span",4),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"ui-switch",5),e.\u0275\u0275listener("change",function(){e.\u0275\u0275restoreView(i);const g=e.\u0275\u0275nextContext().ngVar,I=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(I.toggleProfileVisibility(g))}),e.\u0275\u0275pipe(9,"translate"),e.\u0275\u0275pipe(10,"translate"),e.\u0275\u0275elementEnd()()()}if(2&l){const i=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,5,"researcher.profile.associated")),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(7,7,"researcher.profile.status")),e.\u0275\u0275advance(2),e.\u0275\u0275property("checkedLabel",e.\u0275\u0275pipeBind1(9,9,"researcher.profile.public.visibility"))("uncheckedLabel",e.\u0275\u0275pipeBind1(10,11,"researcher.profile.private.visibility"))("checked",i.visible)}}function p(l,P){1&l&&(e.\u0275\u0275elementStart(0,"div")(1,"p"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()()),2&l&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,1,"researcher.profile.not.associated")))}function v(l,P){1&l&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",7),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&l&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,1,"researcher.profile.action.processing")," "))}function n(l,P){1&l&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",8),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&l&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" \xa0",e.\u0275\u0275pipeBind1(3,1,"researcher.profile.create.new")," "))}function d(l,P){if(1&l){const i=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",6),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(i);const g=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(g.createProfile())}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275template(2,v,4,3,"span",1),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275template(4,n,4,3,"span",1),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275elementEnd()}if(2&l){const i=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("disabled",e.\u0275\u0275pipeBind1(1,3,i.isProcessingCreate())),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(3,5,i.isProcessingCreate())),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(5,7,i.isProcessingCreate()))}}function h(l,P){1&l&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",7),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&l&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,1,"researcher.profile.action.processing")," "))}function y(l,P){1&l&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",11),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&l&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" \xa0",e.\u0275\u0275pipeBind1(3,1,"researcher.profile.delete")," "))}function Q(l,P){if(1&l){const i=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"button",6),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(i);const g=e.\u0275\u0275nextContext().ngVar,I=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(I.viewProfile(g))}),e.\u0275\u0275element(2,"i",9),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",10),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(i);const g=e.\u0275\u0275nextContext().ngVar,I=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(I.deleteProfile(g))}),e.\u0275\u0275template(6,h,4,3,"span",1),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275template(8,y,4,3,"span",1),e.\u0275\u0275pipe(9,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()}if(2&l){const i=e.\u0275\u0275nextContext().ngVar,c=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("disabled",!i),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(4,5,"researcher.profile.view")," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",!i),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(7,7,c.isProcessingDelete())),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(9,9,c.isProcessingDelete()))}}function J(l,P){if(1&l&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,z,11,13,"div",1),e.\u0275\u0275template(2,p,4,3,"div",1),e.\u0275\u0275template(3,d,6,9,"button",2),e.\u0275\u0275template(4,Q,10,11,"ng-container",1),e.\u0275\u0275elementEnd()),2&l){const i=P.ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i)}}let Y=(()=>{class l{constructor(i,c,g,I,L,Z,k){this.researcherProfileService=i,this.profileClaimService=c,this.translationService=g,this.notificationService=I,this.authService=L,this.router=Z,this.modalService=k,this.researcherProfile$=new a.X(null),this.processingDelete$=new a.X(!1),this.processingCreate$=new a.X(!1)}ngOnInit(){this.initResearchProfile()}createProfile(){this.processingCreate$.next(!0),this.authService.getAuthenticatedUserFromStore().pipe((0,x.q)(1),(0,O.w)(i=>this.profileClaimService.hasProfilesToSuggest(i))).subscribe(i=>{if(i){this.processingCreate$.next(!1);const c=this.modalService.open(u);c.componentInstance.dso=this.user,c.componentInstance.create.pipe((0,x.q)(1)).subscribe(()=>{this.createProfileFromScratch()})}else this.createProfileFromScratch()})}viewProfile(i){null!=this.researcherProfileItemId&&this.router.navigate(["items",this.researcherProfileItemId])}deleteProfile(i){const c=this.modalService.open(X.Y);c.componentInstance.headerLabel="confirmation-modal.delete-profile.header",c.componentInstance.infoLabel="confirmation-modal.delete-profile.info",c.componentInstance.cancelLabel="confirmation-modal.delete-profile.cancel",c.componentInstance.confirmLabel="confirmation-modal.delete-profile.confirm",c.componentInstance.brandColor="danger",c.componentInstance.confirmIcon="fas fa-trash",c.componentInstance.response.pipe((0,x.q)(1)).subscribe(g=>{g&&(this.processingDelete$.next(!0),this.researcherProfileService.delete(i.id).pipe((0,C.hC)(),(0,b.U)(I=>I.isSuccess)).subscribe(I=>{I&&(this.researcherProfile$.next(null),this.researcherProfileItemId=null),this.processingDelete$.next(!1)}))})}toggleProfileVisibility(i){this.researcherProfileService.setVisibility(i,!i.visible).pipe((0,C.hC)()).subscribe(c=>{c.hasSucceeded?this.researcherProfile$.next(c.payload):this.notificationService.error(null,this.translationService.get("researcher.profile.change-visibility.fail"))})}isProcessingDelete(){return this.processingDelete$.asObservable()}isProcessingCreate(){return this.processingCreate$.asObservable()}createProfileFromScratch(){this.processingCreate$.next(!0),this.researcherProfileService.create().pipe((0,C.hC)()).subscribe(i=>{this.processingCreate$.next(!1),i.isSuccess?(this.initResearchProfile(),this.notificationService.success(null,this.translationService.get("researcher.profile.create.success"))):this.notificationService.error(null,this.translationService.get("researcher.profile.create.fail"))})}initResearchProfile(){this.researcherProfileService.findById(this.user.id,!1,!0,(0,$.l)("item")).pipe((0,C.Gp)(),(0,S.b)(i=>this.researcherProfile$.next(i)),(0,R.z)(i=>this.researcherProfileService.findRelatedItemId(i))).subscribe(i=>{(0,j.UE)(i)&&(this.researcherProfileItemId=i)})}}return l.\u0275fac=function(i){return new(i||l)(e.\u0275\u0275directiveInject(K.E),e.\u0275\u0275directiveInject(D.n),e.\u0275\u0275directiveInject(o.sK),e.\u0275\u0275directiveInject(w.T),e.\u0275\u0275directiveInject(W.e8),e.\u0275\u0275directiveInject(m.F0),e.\u0275\u0275directiveInject(t.FF))},l.\u0275cmp=e.\u0275\u0275defineComponent({type:l,selectors:[["ds-profile-page-researcher-form"]],inputs:{user:"user"},decls:2,vars:3,consts:[[4,"ngVar"],[4,"ngIf"],["class","btn btn-primary mr-2",3,"disabled","click",4,"ngIf"],[1,"align-items-center","researcher-profile-switch"],[1,"mr-3"],[3,"checkedLabel","uncheckedLabel","checked","change"],[1,"btn","btn-primary","mr-2",3,"disabled","click"],[1,"fas","fa-circle-notch","fa-spin"],[1,"fas","fa-plus"],[1,"fas","fa-info-circle"],[1,"btn","btn-danger",3,"disabled","click"],[1,"fas","fa-trash-alt"]],template:function(i,c){1&i&&(e.\u0275\u0275template(0,J,5,4,"div",0),e.\u0275\u0275pipe(1,"async")),2&i&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,c.researcherProfile$))},dependencies:[_.O5,N.g,G.o,_.Ov,o.X$],encapsulation:2}),l})()},68572:(U,T,r)=>{r.d(T,{V:()=>t});var a=r(98678),x=r(5737),O=r(45608),b=r(75195),S=r(65384),R=r(48358),C=r(10572),e=r(96342),M=r(35103),F=r(5476),E=r(87586),A=r(82485);function D(m,_){if(1&m&&a.\u0275\u0275element(0,"ds-form",4),2&m){const s=a.\u0275\u0275nextContext();a.\u0275\u0275property("formId",s.FORM_PREFIX)("formModel",s.formModel)("formGroup",s.formGroup)("displaySubmit",!1)("displayCancel",!1)}}function B(m,_){if(1&m&&(a.\u0275\u0275elementStart(0,"div",5),a.\u0275\u0275text(1),a.\u0275\u0275pipe(2,"translate"),a.\u0275\u0275elementEnd()),2&m){const s=a.\u0275\u0275nextContext();a.\u0275\u0275advance(1),a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(2,1,s.FORM_PREFIX+"error.matching-passwords"))}}function V(m,_){if(1&m&&(a.\u0275\u0275elementStart(0,"div",6),a.\u0275\u0275text(1),a.\u0275\u0275pipe(2,"translate"),a.\u0275\u0275elementEnd()),2&m){const s=a.\u0275\u0275nextContext();a.\u0275\u0275advance(1),a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(2,1,s.FORM_PREFIX+"error.empty-password"))}}let t=(()=>{class m{constructor(s,o,f,u){this.formService=s,this.translate=o,this.epersonService=f,this.notificationsService=u,this.isInvalid=new a.EventEmitter,this.passwordValue=new a.EventEmitter,this.currentPasswordValue=new a.EventEmitter,this.formModel=[new x.b1u({id:"password",name:"password",inputType:"password"}),new x.b1u({id:"passwordrepeat",name:"passwordrepeat",inputType:"password"})],this.passwordCanBeEmpty=!0,this.subs=[]}ngOnInit(){"profile.security.form."===this.FORM_PREFIX&&this.formModel.unshift(new x.b1u({id:"current-password",name:"current-password",inputType:"password",required:!0})),this.formGroup=this.formService.createFormGroup(this.formModel,this.passwordCanBeEmpty?{validators:[this.checkPasswordsEqual]}:{validators:[this.checkPasswordsEqual,this.checkPasswordEmpty]}),this.updateFieldTranslations(),this.translate.onLangChange.subscribe(()=>{this.updateFieldTranslations()}),this.subs.push(this.formGroup.statusChanges.pipe((0,C.ig)(300),(0,R.U)(s=>"VALID"!==s)).subscribe(s=>this.isInvalid.emit(s))),this.subs.push(this.formGroup.valueChanges.pipe((0,C.ig)(300)).subscribe(s=>{this.passwordValue.emit(s.password),"profile.security.form."===this.FORM_PREFIX&&this.currentPasswordValue.emit(s["current-password"])}))}updateFieldTranslations(){this.formModel.forEach(s=>{s.label=this.translate.instant(this.FORM_PREFIX+"label."+s.id)})}checkPasswordsEqual(s){return s.get("password").value===s.get("passwordrepeat").value?null:{notSame:!0}}checkPasswordEmpty(s){const o=s.get("password").value;return(0,O.xb)(o)?{emptyPassword:!0}:null}ngOnDestroy(){this.subs.filter(s=>(0,O.Uh)(s)).forEach(s=>s.unsubscribe())}}return m.\u0275fac=function(s){return new(s||m)(a.\u0275\u0275directiveInject(x.w1X),a.\u0275\u0275directiveInject(e.sK),a.\u0275\u0275directiveInject(b.k),a.\u0275\u0275directiveInject(S.T))},m.\u0275cmp=a.\u0275\u0275defineComponent({type:m,selectors:[["ds-profile-page-security-form"]],inputs:{passwordCanBeEmpty:"passwordCanBeEmpty",FORM_PREFIX:"FORM_PREFIX"},outputs:{isInvalid:"isInvalid",passwordValue:"passwordValue",currentPasswordValue:"currentPasswordValue"},decls:6,vars:7,consts:[[1,"mb-4",3,"type"],[3,"formId","formModel","formGroup","displaySubmit","displayCancel",4,"ngIf"],["id","notSame","class","container-fluid text-danger",4,"ngIf"],["id","emptyPassword","class","container-fluid text-danger",4,"ngIf"],[3,"formId","formModel","formGroup","displaySubmit","displayCancel"],["id","notSame",1,"container-fluid","text-danger"],["id","emptyPassword",1,"container-fluid","text-danger"]],template:function(s,o){1&s&&(a.\u0275\u0275elementStart(0,"ds-alert",0),a.\u0275\u0275text(1),a.\u0275\u0275pipe(2,"translate"),a.\u0275\u0275elementEnd(),a.\u0275\u0275template(3,D,1,5,"ds-form",1),a.\u0275\u0275template(4,B,3,3,"div",2),a.\u0275\u0275template(5,V,3,3,"div",3)),2&s&&(a.\u0275\u0275property("type","alert-info"),a.\u0275\u0275advance(1),a.\u0275\u0275textInterpolate(a.\u0275\u0275pipeBind1(2,5,o.FORM_PREFIX+"info")),a.\u0275\u0275advance(2),a.\u0275\u0275property("ngIf",o.formModel),a.\u0275\u0275advance(1),a.\u0275\u0275property("ngIf",o.formGroup.hasError("notSame")),a.\u0275\u0275advance(1),a.\u0275\u0275property("ngIf",(o.formGroup.dirty||o.formGroup.touched)&&o.formGroup.hasError("emptyPassword")))},dependencies:[M.O5,F.JL,F.sg,E.w,A.U,e.X$],encapsulation:2}),m})()},70716:(U,T,r)=>{r.r(T),r.d(T,{ProfilePageComponent:()=>z});var a=r(35841),x=r(76826),O=r(65384),b=r(77007),S=r(21160),R=r(27303),C=r(75195),e=r(10572),M=r(45608),F=r(46533),E=r(38123),A=r(35794),D=r(80978),B=r(73194),V=r(8842),t=r(98678),m=r(96342),_=r(35103),s=r(41966),o=r(68572),f=r(26537);function u(p,v){if(1&p&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"h3",12),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div",4)(5,"div",5),t.\u0275\u0275text(6),t.\u0275\u0275pipe(7,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"div",6)(9,"div",12),t.\u0275\u0275element(10,"ds-profile-page-researcher-form",7),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementContainerEnd()),2&p){const n=t.\u0275\u0275nextContext(2).ngVar;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,3,"profile.head")),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(7,5,"profile.card.researcher")),t.\u0275\u0275advance(4),t.\u0275\u0275property("user",n)}}function w(p,v){if(1&p){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",13)(1,"div",5),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div",6)(5,"ds-profile-page-security-form",14),t.\u0275\u0275listener("isInvalid",function(h){t.\u0275\u0275restoreView(n);const y=t.\u0275\u0275nextContext(3);return t.\u0275\u0275resetView(y.setInvalid(h))})("passwordValue",function(h){t.\u0275\u0275restoreView(n);const y=t.\u0275\u0275nextContext(3);return t.\u0275\u0275resetView(y.setPasswordValue(h))})("currentPasswordValue",function(h){t.\u0275\u0275restoreView(n);const y=t.\u0275\u0275nextContext(3);return t.\u0275\u0275resetView(y.setCurrentPasswordValue(h))}),t.\u0275\u0275elementEnd()()()}2&p&&(t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,2,"profile.card.security")),t.\u0275\u0275advance(3),t.\u0275\u0275property("FORM_PREFIX","profile.security.form."))}function W(p,v){if(1&p&&(t.\u0275\u0275elementStart(0,"li",18),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&p){const n=v.$implicit,d=t.\u0275\u0275nextContext(5);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(d.dsoNameService.getName(n))}}function H(p,v){if(1&p&&(t.\u0275\u0275elementStart(0,"div")(1,"h3",15),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"ul",16),t.\u0275\u0275template(5,W,2,1,"li",17),t.\u0275\u0275elementEnd()()),2&p){const n=t.\u0275\u0275nextContext().ngVar;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,2,"profile.groups.head")),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngForOf",n)}}function K(p,v){if(1&p&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,H,6,4,"div",3),t.\u0275\u0275elementContainerEnd()),2&p){const n=v.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",(null==n?null:n.length)>0)}}function j(p,v){if(1&p&&(t.\u0275\u0275elementStart(0,"li",18),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&p){const n=v.$implicit,d=t.\u0275\u0275nextContext(5);t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",d.dsoNameService.getName(n)," ")}}function $(p,v){if(1&p&&(t.\u0275\u0275elementStart(0,"div",20)(1,"h3",15),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"ul",16),t.\u0275\u0275template(5,j,2,1,"li",17),t.\u0275\u0275elementEnd()()),2&p){const n=t.\u0275\u0275nextContext().ngVar;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(3,2,"profile.special.groups.head")),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngForOf",n)}}function X(p,v){if(1&p&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,$,6,4,"div",19),t.\u0275\u0275elementContainerEnd()),2&p){const n=v.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",(null==n?null:n.length)>0)}}function N(p,v){if(1&p){const n=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",2),t.\u0275\u0275template(1,u,11,7,"ng-container",3),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275elementStart(3,"div",4)(4,"div",5),t.\u0275\u0275text(5),t.\u0275\u0275pipe(6,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"div",6),t.\u0275\u0275element(8,"ds-profile-page-metadata-form",7),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(9,w,6,4,"div",8),t.\u0275\u0275pipe(10,"async"),t.\u0275\u0275elementStart(11,"div",9)(12,"button",10),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(n);const h=t.\u0275\u0275nextContext(2);return t.\u0275\u0275resetView(h.updateProfile())}),t.\u0275\u0275element(13,"i",11),t.\u0275\u0275text(14),t.\u0275\u0275pipe(15,"translate"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(16,K,2,1,"ng-container",0),t.\u0275\u0275pipe(17,"async"),t.\u0275\u0275template(18,X,2,1,"ng-container",0),t.\u0275\u0275pipe(19,"async"),t.\u0275\u0275elementEnd()}if(2&p){const n=t.\u0275\u0275nextContext().ngVar,d=t.\u0275\u0275nextContext();let h,y;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(2,7,d.isResearcherProfileEnabled())),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(6,9,"profile.card.identify")),t.\u0275\u0275advance(3),t.\u0275\u0275property("user",n),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(10,11,d.canChangePassword$)),t.\u0275\u0275advance(5),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(15,13,"profile.form.submit"),""),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngVar",null==(h=t.\u0275\u0275pipeBind1(17,15,d.groupsRD$))||null==h.payload?null:h.payload.page),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngVar",null==(y=t.\u0275\u0275pipeBind1(19,17,d.specialGroupsRD$))||null==y.payload?null:y.payload.page)}}function G(p,v){if(1&p&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,N,20,19,"div",1),t.\u0275\u0275elementContainerEnd()),2&p){const n=v.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",n)}}let z=(()=>{class p{constructor(n,d,h,y,Q,J,Y){this.authService=n,this.notificationsService=d,this.translate=h,this.epersonService=y,this.authorizationService=Q,this.configurationService=J,this.dsoNameService=Y,this.NOTIFICATIONS_PREFIX="profile.notifications.",this.PASSWORD_NOTIFICATIONS_PREFIX="profile.security.form.notifications.",this.isResearcherProfileEnabled$=new a.X(!1)}ngOnInit(){this.user$=this.authService.getAuthenticatedUserFromStore().pipe((0,b.h)(n=>(0,M.Uh)(n.id)),(0,S.w)(n=>this.epersonService.findById(n.id,!0,!0,(0,F.l)("groups"))),(0,e.g1)(),(0,e.xe)(),(0,R.b)(n=>this.currentUser=n)),this.groupsRD$=this.user$.pipe((0,S.w)(n=>n.groups)),this.canChangePassword$=this.user$.pipe((0,S.w)(n=>this.authorizationService.isAuthorized(D.i.CanChangePassword,n._links.self.href))),this.specialGroupsRD$=this.authService.getSpecialGroupsFromAuthStatus(),this.configurationService.findByPropertyName("researcher-profile.entity-type").pipe((0,e.hC)()).subscribe(n=>{this.isResearcherProfileEnabled$.next(n.hasSucceeded&&n.payload.values.length>0)})}updateProfile(){const n=this.metadataForm.updateProfile(),d=this.updateSecurity();!n&&!d&&this.notificationsService.warning(this.translate.instant(this.NOTIFICATIONS_PREFIX+"warning.no-changes.title"),this.translate.instant(this.NOTIFICATIONS_PREFIX+"warning.no-changes.content"))}setInvalid(n){this.invalidSecurity=n}updateSecurity(){const n=(0,M.UE)(this.password);return this.invalidSecurity&&this.notificationsService.error(this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX+"error.general")),!this.invalidSecurity&&n&&this.epersonService.patch(this.currentUser,[{op:"add",path:"/password",value:{new_password:this.password,current_password:this.currentPassword}}]).pipe((0,e.hC)()).subscribe(h=>{h.hasSucceeded?this.notificationsService.success(this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX+"success.title"),this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX+"success.content")):this.notificationsService.error(this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX+"error.title"),this.getPasswordErrorMessage(h))}),n}setPasswordValue(n){this.password=n}setCurrentPasswordValue(n){this.currentPassword=n}submit(){this.updateProfile()}isResearcherProfileEnabled(){return this.isResearcherProfileEnabled$.asObservable()}getPasswordErrorMessage(n){return n.hasFailed&&(0,M.UE)(n.errorMessage)?this.translate.instant(n.errorMessage):this.translate.instant(this.PASSWORD_NOTIFICATIONS_PREFIX+"error.change-failed")}}return p.\u0275fac=function(n){return new(n||p)(t.\u0275\u0275directiveInject(E.e8),t.\u0275\u0275directiveInject(O.T),t.\u0275\u0275directiveInject(m.sK),t.\u0275\u0275directiveInject(C.k),t.\u0275\u0275directiveInject(A._),t.\u0275\u0275directiveInject(B.i),t.\u0275\u0275directiveInject(V._))},p.\u0275cmp=t.\u0275\u0275defineComponent({type:p,selectors:[["ds-profile-page"]],viewQuery:function(n,d){if(1&n&&t.\u0275\u0275viewQuery(x.u,5),2&n){let h;t.\u0275\u0275queryRefresh(h=t.\u0275\u0275loadQuery())&&(d.metadataForm=h.first)}},decls:2,vars:3,consts:[[4,"ngVar"],["class","container",4,"ngIf"],[1,"container"],[4,"ngIf"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[3,"user"],["class","card mb-4 security-section",4,"ngIf"],[1,"col-12","text-right","pr-0"],[1,"btn","btn-primary",3,"click"],[1,"fas","fa-edit"],[1,"mb-4"],[1,"card","mb-4","security-section"],[3,"FORM_PREFIX","isInvalid","passwordValue","currentPasswordValue"],[1,"mt-4"],[1,"list-group","list-group-flush"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],["data-test","specialGroups",4,"ngIf"],["data-test","specialGroups"]],template:function(n,d){1&n&&(t.\u0275\u0275template(0,G,2,1,"ng-container",0),t.\u0275\u0275pipe(1,"async")),2&n&&t.\u0275\u0275property("ngVar",t.\u0275\u0275pipeBind1(1,1,d.user$))},dependencies:[_.sg,_.O5,s.g,x.u,o.V,f.V,_.Ov,m.X$]}),p})()}}]);