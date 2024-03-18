(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[9230],{57755:(P,F,n)=>{"use strict";n.d(F,{L:()=>z});var d=n(5737),C=n(5378),v=n(16216),g=n(65384),x=n(50401),f=n(38123),M=n(6952),D=n(55624),b=n(86435),R=n(10572),T=n(76774);const S={id:"entityType",name:"dspace.entity.type",disabled:!1},e=[new d.b1u({id:"title",name:"dc.title",required:!0,validators:{required:null},errorMessages:{required:"Please enter a name for this title"}}),new d.HBf({id:"description",name:"dc.description",spellCheck:T.N.form.spellCheck}),new d.HBf({id:"abstract",name:"dc.description.abstract",spellCheck:T.N.form.spellCheck}),new d.HBf({id:"rights",name:"dc.rights",spellCheck:T.N.form.spellCheck}),new d.HBf({id:"tableofcontents",name:"dc.description.tableofcontents",spellCheck:T.N.form.spellCheck}),new d.HBf({id:"license",name:"dc.rights.license",spellCheck:T.N.form.spellCheck})];var E=n(44205),A=n(45608),t=n(98678),L=n(96342),B=n(62832),O=n(17026),W=n(82485),V=n(35103),$=n(41966);function K(c,h){if(1&c){const i=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",15),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(i);const s=t.\u0275\u0275nextContext(4);return t.\u0275\u0275resetView(s.deleteLogo())}),t.\u0275\u0275pipe(1,"translate"),t.\u0275\u0275element(2,"i",16),t.\u0275\u0275elementEnd()}if(2&c){const i=t.\u0275\u0275nextContext(4);t.\u0275\u0275propertyInterpolate("title",t.\u0275\u0275pipeBind1(1,1,i.type.value+".edit.logo.delete.title"))}}function H(c,h){if(1&c){const i=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"button",17),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(i);const s=t.\u0275\u0275nextContext(4);return t.\u0275\u0275resetView(s.undoDeleteLogo())}),t.\u0275\u0275pipe(1,"translate"),t.\u0275\u0275element(2,"i",18),t.\u0275\u0275elementEnd()}if(2&c){const i=t.\u0275\u0275nextContext(4);t.\u0275\u0275propertyInterpolate("title",t.\u0275\u0275pipeBind1(1,1,i.type.value+".edit.logo.delete-undo.title"))}}function J(c,h){if(1&c&&(t.\u0275\u0275elementStart(0,"div",12),t.\u0275\u0275template(1,K,3,3,"button",13),t.\u0275\u0275template(2,H,3,3,"button",14),t.\u0275\u0275elementEnd()),2&c){const i=t.\u0275\u0275nextContext(3);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!i.markLogoForDeletion),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",i.markLogoForDeletion)}}const X=function(c){return{"alert-danger":c}};function Q(c,h){if(1&c&&(t.\u0275\u0275elementStart(0,"div",7)(1,"div",1)(2,"div",8),t.\u0275\u0275element(3,"ds-comcol-page-logo",9),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"div",10),t.\u0275\u0275template(5,J,3,2,"div",11),t.\u0275\u0275elementEnd()()()),2&c){const i=t.\u0275\u0275nextContext().ngVar,p=t.\u0275\u0275nextContext();t.\u0275\u0275property("ngClass",t.\u0275\u0275pureFunction1(3,X,p.markLogoForDeletion)),t.\u0275\u0275advance(3),t.\u0275\u0275property("logo",i),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",i)}}function Z(c,h){if(1&c){const i=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"ds-uploader",20),t.\u0275\u0275listener("onCompleteItem",function(){t.\u0275\u0275restoreView(i);const s=t.\u0275\u0275nextContext(3);return t.\u0275\u0275resetView(s.onCompleteItem())})("onUploadError",function(){t.\u0275\u0275restoreView(i);const s=t.\u0275\u0275nextContext(3);return t.\u0275\u0275resetView(s.onUploadError())}),t.\u0275\u0275elementEnd()}if(2&c){const i=t.\u0275\u0275nextContext(3);t.\u0275\u0275property("dropMsg",i.type.value+".edit.logo.upload")("dropOverDocumentMsg",i.type.value+".edit.logo.upload")("enableDragOverDocument",!0)("uploadFilesOptions",i.uploadFilesOptions)}}function Y(c,h){if(1&c&&(t.\u0275\u0275elementStart(0,"div",2),t.\u0275\u0275template(1,Z,1,4,"ds-uploader",19),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275elementEnd()),2&c){const i=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",t.\u0275\u0275pipeBind1(2,1,i.initializedUploaderOptions))}}function _(c,h){if(1&c&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,Q,6,5,"div",5),t.\u0275\u0275template(2,Y,3,3,"div",6),t.\u0275\u0275elementContainerEnd()),2&c){const i=h.ngVar;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",i),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",!i)}}function w(c,h){if(1&c){const i=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"ds-form",21),t.\u0275\u0275listener("submitForm",function(){t.\u0275\u0275restoreView(i);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.onSubmit())}),t.\u0275\u0275elementStart(1,"button",22),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(i);const s=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(s.back.emit())}),t.\u0275\u0275element(2,"i",23),t.\u0275\u0275text(3),t.\u0275\u0275pipe(4,"translate"),t.\u0275\u0275elementEnd()()}if(2&c){const i=t.\u0275\u0275nextContext();t.\u0275\u0275property("formId","comcol-form-id")("formModel",i.formModel)("displayCancel",!1),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(4,4,i.type.value+".edit.return")," ")}}let z=(()=>{class c extends v.M{constructor(i,p,s,y,j,G,N,k,q){super(i,p,s,y,G,N),this.formService=i,this.translate=p,this.notificationsService=s,this.authService=y,this.dsoService=j,this.requestService=G,this.objectCache=N,this.entityTypeService=k,this.chd=q,this.dso=new C.F,this.type=C.F.type,this.entityTypeSelection=new d.nMt(S)}ngOnInit(){(0,A.xI)(this.formModel)&&(0,A.K0)(this.dso)&&this.initializeForm()}ngOnChanges(i){const p=i.dso;this.dso&&p&&!p.isFirstChange()&&this.initializeForm()}initializeForm(){let i;this.dso&&this.dso.metadata&&(i=this.dso.metadata["dspace.entity.type"]),this.entityTypeService.findAll({elementsPerPage:100,currentPage:1}).pipe((0,R.LQ)()).subscribe(s=>{(s=s.filter(y=>y.label!==E.N)).forEach((y,j)=>{this.entityTypeSelection.add({disabled:!1,label:y.label,value:y.label}),i&&i.length>0&&i[0].value===y.label&&(this.entityTypeSelection.select(j),this.entityTypeSelection.disabled=!0)}),this.formModel=0===s.length?e:[...e,this.entityTypeSelection],super.ngOnInit(),this.chd.detectChanges()})}}return c.\u0275fac=function(i){return new(i||c)(t.\u0275\u0275directiveInject(d.w1X),t.\u0275\u0275directiveInject(L.sK),t.\u0275\u0275directiveInject(g.T),t.\u0275\u0275directiveInject(f.e8),t.\u0275\u0275directiveInject(x.w),t.\u0275\u0275directiveInject(M.s),t.\u0275\u0275directiveInject(D.a),t.\u0275\u0275directiveInject(b.k),t.\u0275\u0275directiveInject(t.ChangeDetectorRef))},c.\u0275cmp=t.\u0275\u0275defineComponent({type:c,selectors:[["ds-collection-form"]],inputs:{dso:"dso"},features:[t.\u0275\u0275InheritDefinitionFeature,t.\u0275\u0275NgOnChangesFeature],decls:9,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","d-inline-block"],[4,"ngVar"],[3,"formId","formModel","displayCancel","submitForm",4,"ngIf"],["class","col-12 d-inline-block alert","id","logo-section",3,"ngClass",4,"ngIf"],["class","col-12 d-inline-block",4,"ngIf"],["id","logo-section",1,"col-12","d-inline-block","alert",3,"ngClass"],[1,"col-8","d-inline-block"],[3,"logo"],[1,"col-4","d-inline-block"],["class","btn-group btn-group-sm float-right","role","group",4,"ngIf"],["role","group",1,"btn-group","btn-group-sm","float-right"],["type","button","class","btn btn-danger",3,"title","click",4,"ngIf"],["type","button","class","btn btn-warning",3,"title","click",4,"ngIf"],["type","button",1,"btn","btn-danger",3,"title","click"],["aria-hidden","true",1,"fas","fa-trash"],["type","button",1,"btn","btn-warning",3,"title","click"],["aria-hidden","true",1,"fas","fa-undo"],[3,"dropMsg","dropOverDocumentMsg","enableDragOverDocument","uploadFilesOptions","onCompleteItem","onUploadError",4,"ngIf"],[3,"dropMsg","dropOverDocumentMsg","enableDragOverDocument","uploadFilesOptions","onCompleteItem","onUploadError"],[3,"formId","formModel","displayCancel","submitForm"],["before","","type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"fas","fa-arrow-left"]],template:function(i,p){if(1&i&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"label"),t.\u0275\u0275text(4),t.\u0275\u0275pipe(5,"translate"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(6,_,3,2,"ng-container",3),t.\u0275\u0275pipe(7,"async"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275template(8,w,5,6,"ds-form",4)),2&i){let s;t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(5,3,p.type.value+".edit.logo.label")),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngVar",null==(s=t.\u0275\u0275pipeBind1(7,5,null==p.dso?null:p.dso.logo))?null:s.payload),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",p.formModel)}},dependencies:[B.e,O.B,W.U,V.mk,V.O5,$.g,V.Ov,L.X$]}),c})()},95418:(P,F,n)=>{"use strict";n.d(F,{s:()=>x});var d=n(57999),C=n(47413),v=n(50867),g=n(98678);let x=(()=>{class f{}return f.\u0275fac=function(D){return new(D||f)},f.\u0275mod=g.\u0275\u0275defineNgModule({type:f}),f.\u0275inj=g.\u0275\u0275defineInjector({imports:[C.H,v.e,d.m]}),f})()},19230:(P,F,n)=>{"use strict";n.r(F),n.d(F,{CollectionPageModule:()=>Ie});var d=n(35103),C=n(57999),v=n(67522),g=n(34343),x=n(50401),f=n(74997),M=n(42821),D=n(5378),b=n(95445),R=n(65384),T=n(6952),S=n(8842),e=n(98678),E=n(96342),A=n(57755);const t=function(o){return{parent:o}};let L=(()=>{class o extends M.k{constructor(l,r,m,u,I,U,ne,oe){super(m,l,r,u,I,U,ne,oe),this.dsoNameService=l,this.communityDataService=r,this.collectionDataService=m,this.routeService=u,this.router=I,this.notificationsService=U,this.translate=ne,this.requestService=oe,this.frontendURL="/collections/",this.type=D.F.type}}return o.\u0275fac=function(l){return new(l||o)(e.\u0275\u0275directiveInject(S._),e.\u0275\u0275directiveInject(x.w),e.\u0275\u0275directiveInject(b.W),e.\u0275\u0275directiveInject(f.MZ),e.\u0275\u0275directiveInject(v.F0),e.\u0275\u0275directiveInject(R.T),e.\u0275\u0275directiveInject(E.sK),e.\u0275\u0275directiveInject(T.s))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["ds-create-collection"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:8,vars:8,consts:[[1,"container"],[1,"row"],[1,"col-12","pb-4"],["id","sub-header",1,"border-bottom","pb-2"],[3,"submitForm","back","finish"]],template:function(l,r){if(1&l&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e.\u0275\u0275text(4),e.\u0275\u0275pipe(5,"translate"),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"ds-collection-form",4),e.\u0275\u0275listener("submitForm",function(u){return r.onSubmit(u)})("back",function(){return r.navigateToHome()})("finish",function(){return r.navigateToNewPage()}),e.\u0275\u0275elementEnd()()),2&l){let m;e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(5,1,"collection.create.sub-head",e.\u0275\u0275pureFunction1(6,t,r.dsoNameService.getName(null==(m=e.\u0275\u0275pipeBind1(6,4,r.parentRD$))?null:m.payload))))}},dependencies:[A.L,d.Ov,E.X$]}),o})();var B=n(99805),O=n(45608),W=n(48358),V=n(27303),$=n(9237),K=n(10572);let H=(()=>{class o{constructor(l,r){this.router=l,this.communityService=r}canActivate(l,r){const m=l.queryParams.parent;return(0,O.xI)(m)?(this.router.navigate(["/404"]),(0,$.of)(!1)):this.communityService.findById(m).pipe((0,K.hC)(),(0,W.U)(u=>(0,O.Uh)(u)&&u.hasSucceeded&&(0,O.Uh)(u.payload)),(0,V.b)(u=>{u||this.router.navigate(["/404"])}))}}return o.\u0275fac=function(l){return new(l||o)(e.\u0275\u0275inject(v.F0),e.\u0275\u0275inject(x.w))},o.\u0275prov=e.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();var J=n(8202),X=n(41966);function Q(o,a){1&o&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",12),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,1,"collection.delete.processing"),""))}function Z(o,a){1&o&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275element(1,"i",13),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()),2&o&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,1,"collection.delete.confirm"),""))}const Y=function(o){return{dso:o}};function _(o,a){if(1&o){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",3)(2,"h2",4),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"p",5),e.\u0275\u0275text(6),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"div",6)(9,"div",7)(10,"button",8),e.\u0275\u0275listener("click",function(){const u=e.\u0275\u0275restoreView(l).ngVar,I=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(I.onCancel(u))}),e.\u0275\u0275pipe(11,"async"),e.\u0275\u0275element(12,"i",9),e.\u0275\u0275text(13),e.\u0275\u0275pipe(14,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(15,"button",10),e.\u0275\u0275listener("click",function(){const u=e.\u0275\u0275restoreView(l).ngVar,I=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(I.onConfirm(u))}),e.\u0275\u0275pipe(16,"async"),e.\u0275\u0275template(17,Q,4,3,"span",11),e.\u0275\u0275pipe(18,"async"),e.\u0275\u0275template(19,Z,4,3,"span",11),e.\u0275\u0275pipe(20,"async"),e.\u0275\u0275elementEnd()()()(),e.\u0275\u0275elementContainerEnd()}if(2&o){const l=a.ngVar,r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,7,"collection.delete.head")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(7,9,"collection.delete.text",e.\u0275\u0275pureFunction1(22,Y,r.dsoNameService.getName(l)))),e.\u0275\u0275advance(4),e.\u0275\u0275property("disabled",e.\u0275\u0275pipeBind1(11,12,r.processing$)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(14,14,"collection.delete.cancel")," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("disabled",e.\u0275\u0275pipeBind1(16,16,r.processing$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(18,18,r.processing$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(20,20,r.processing$))}}let w=(()=>{class o extends J.M{constructor(l,r,m,u,I,U){super(l,r,m,u,I,U),this.dsoDataService=l,this.dsoNameService=r,this.router=m,this.route=u,this.notifications=I,this.translate=U,this.frontendURL="/collections/"}}return o.\u0275fac=function(l){return new(l||o)(e.\u0275\u0275directiveInject(b.W),e.\u0275\u0275directiveInject(S._),e.\u0275\u0275directiveInject(v.F0),e.\u0275\u0275directiveInject(v.gz),e.\u0275\u0275directiveInject(R.T),e.\u0275\u0275directiveInject(E.sK))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["ds-delete-collection"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:3,consts:[[1,"container"],[1,"row"],[4,"ngVar"],[1,"col-12","pb-4"],["id","header",1,"border-bottom","pb-2"],[1,"pb-2"],[1,"form-group","row"],[1,"col","text-right","space-children-mr"],[1,"btn","btn-outline-secondary",3,"disabled","click"],[1,"fas","fa-times"],[1,"btn","btn-danger",3,"disabled","click"],[4,"ngIf"],[1,"fas","fa-circle-notch","fa-spin"],[1,"fas","fa-trash"]],template:function(l,r){if(1&l&&(e.\u0275\u0275elementStart(0,"div",0)(1,"div",1),e.\u0275\u0275template(2,_,21,24,"ng-container",2),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275elementEnd()()),2&l){let m;e.\u0275\u0275advance(2),e.\u0275\u0275property("ngVar",null==(m=e.\u0275\u0275pipeBind1(3,1,r.dsoRD$))?null:m.payload)}},dependencies:[d.O5,X.g,d.Ov,E.X$]}),o})();var z=n(4682);function c(o,a){}const h=["*"];let i=(()=>{class o extends z.F{getComponentName(){return"EditItemTemplatePageComponent"}importThemedComponent(l){return n(67483)(`./${l}/app/collection-page/edit-item-template-page/edit-item-template-page.component`)}importUnthemedComponent(){return n.e(8592).then(n.bind(n,91841))}}return o.\u0275fac=function(){let a;return function(r){return(a||(a=e.\u0275\u0275getInheritedFactory(o)))(r||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["ds-themed-edit-item-template-page"]],features:[e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:h,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(l,r){1&l&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275template(0,c,0,0,"ng-template",null,0,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(2,"div",null,1),e.\u0275\u0275projection(4),e.\u0275\u0275elementEnd())},encapsulation:2}),o})();var p=n(84803),s=n(46533);let y=(()=>{class o{constructor(l,r){this.dsoNameService=l,this.itemTemplateService=r}resolve(l,r){return this.itemTemplateService.findByCollectionID(l.params.id,!0,!1,(0,s.l)("templateItemOf")).pipe((0,K.hC)())}}return o.\u0275fac=function(l){return new(l||o)(e.\u0275\u0275inject(S._),e.\u0275\u0275inject(p.w))},o.\u0275prov=e.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();var j=n(96509),G=n(42252);let N=(()=>{class o extends G.t{constructor(l,r){super(l,r),this.breadcrumbService=l,this.dataService=r}get followLinks(){return g.C}}return o.\u0275fac=function(l){return new(l||o)(e.\u0275\u0275inject(j.B),e.\u0275\u0275inject(b.W))},o.\u0275prov=e.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var k=n(30658),q=n(76457),ee=n(42620),le=n(35794),ie=n(66377),re=n(80978),ae=n(38123);let te=(()=>{class o extends ie.h{constructor(l,r,m,u){super(l,r,m,u),this.resolver=l,this.authorizationService=r,this.router=m,this.authService=u}getFeatureID(l,r){return(0,$.of)(re.i.AdministratorOf)}}return o.\u0275fac=function(l){return new(l||o)(e.\u0275\u0275inject(g.l),e.\u0275\u0275inject(le._),e.\u0275\u0275inject(v.F0),e.\u0275\u0275inject(ae.e8))},o.\u0275prov=e.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();function ce(o,a){}const se=["*"];let de=(()=>{class o extends z.F{getComponentName(){return"CollectionPageComponent"}importThemedComponent(l){return n(9484)(`./${l}/app/collection-page/collection-page.component`)}importUnthemedComponent(){return Promise.all([n.e(8592),n.e(1703)]).then(n.bind(n,92593))}}return o.\u0275fac=function(){let a;return function(r){return(a||(a=e.\u0275\u0275getInheritedFactory(o)))(r||o)}}(),o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["ds-themed-collection-page"]],features:[e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:se,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(l,r){1&l&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275template(0,ce,0,0,"ng-template",null,0,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(2,"div",null,1),e.\u0275\u0275projection(4),e.\u0275\u0275elementEnd())},encapsulation:2}),o})();var me=n(27696),pe=n(28252);let ue=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({providers:[g.l,y,N,j.B,k.M,H,te],imports:[v.Bz.forChild([{path:ee.GQ,component:L,canActivate:[B.J,H]},{path:":id",resolve:{dso:g.l,breadcrumb:N,menu:pe.M},runGuardsAndResolvers:"always",children:[{path:ee.lA,loadChildren:()=>Promise.all([n.e(8592),n.e(9484)]).then(n.bind(n,39484)).then(a=>a.EditCollectionPageModule),canActivate:[te]},{path:"delete",pathMatch:"full",component:w,canActivate:[B.J]},{path:ee.Jk,component:i,canActivate:[B.J],resolve:{item:y,breadcrumb:q.t},data:{title:"collection.edit.template.title",breadcrumbKey:"collection.edit.template"}},{path:"",component:de,pathMatch:"full"}],data:{menu:{public:[{id:"statistics_collection_:id",active:!0,visible:!0,index:2,model:{type:me.U.LINK,text:"menu.section.statistics",link:"statistics/collections/:id/"}}]}}}])]}),o})();var ve=n(76873),fe=n(57066),ge=n(20357),Ce=n(95418),he=n(47413),ye=n(1543),xe=n(12446);let Ie=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=e.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=e.\u0275\u0275defineInjector({providers:[fe.o],imports:[d.ez,C.m,ue,ge.p.forRoot(),ve.EditItemPageModule,Ce.s,he.H,ye.Z,xe.H]}),o})()},9484:(P,F,n)=>{var d={"./custom/app/collection-page/collection-page.component":[46233,8592,6233]};function C(v){if(!n.o(d,v))return Promise.resolve().then(()=>{var f=new Error("Cannot find module '"+v+"'");throw f.code="MODULE_NOT_FOUND",f});var g=d[v],x=g[0];return Promise.all(g.slice(1).map(n.e)).then(()=>n(x))}C.keys=()=>Object.keys(d),C.id=9484,P.exports=C},67483:(P,F,n)=>{var d={"./custom/app/collection-page/edit-item-template-page/edit-item-template-page.component":[90354,8592,354]};function C(v){if(!n.o(d,v))return Promise.resolve().then(()=>{var f=new Error("Cannot find module '"+v+"'");throw f.code="MODULE_NOT_FOUND",f});var g=d[v],x=g[0];return Promise.all(g.slice(1).map(n.e)).then(()=>n(x))}C.keys=()=>Object.keys(d),C.id=67483,P.exports=C}}]);