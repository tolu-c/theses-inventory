"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[8679],{98679:(N,y,a)=>{a.r(y),a.d(y,{EditBitstreamPageComponent:()=>mt});var c=a(48358),g=a(21160),P=a(77007),U=a(27303),M=a(53426),B=a(9237),I=a(5737),O=a(2958),w=a(62574),H=a.n(w),V=a(39034),d=a(10572),x=a(65384),R=a(93583),_=a(11804),m=a(45608),F=a(71432),G=a(15463),j=a(8842),T=a(66144),W=a(13235),$=a(6952),X=a(16066),K=a(55624),Y=a(18005),z=a(78964),S=a(96526),J=a(8830),e=a(98678);let Z=(()=>{class n{constructor(t,i,s,h,u,o){this.requestService=t,this.rdbService=i,this.objectCache=s,this.halService=h,this.notificationsService=u,this.bundleDataService=o}getHttpOptions(){const t=Object.create({});let i=new z.WM;return i=i.append("Content-Type","text/uri-list"),t.headers=i,t}createAndSendRequest(t,i,s){const h=this.requestService.generateRequestId(),u=new t(h,i,s,this.getHttpOptions());return this.requestService.send(u),this.rdbService.buildFromRequestUUID(h)}create(t,i){return this.createAndSendRequest(S.xo,i._links.primaryBitstream.href,t.self)}put(t,i){return this.createAndSendRequest(S.an,i._links.primaryBitstream.href,t.self)}delete(t){return this.createAndSendRequest(S.jx,t._links.primaryBitstream.href).pipe((0,d.f1)(),(0,g.w)(i=>this.bundleDataService.findByHref(t.self,i.hasFailed)))}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275inject($.s),e.\u0275\u0275inject(X.Q),e.\u0275\u0275inject(K.a),e.\u0275\u0275inject(Y.q),e.\u0275\u0275inject(x.T),e.\u0275\u0275inject(J.b))},n.\u0275prov=e.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var E=a(67522),A=a(35103),L=a(96342),D=a(5476),Q=a(64719),k=a(87657),q=a(18639),tt=a(41966),et=a(82485),it=a(69721);const at=function(n){return["/bitstreams",n,"authorizations"]};function st(n,f){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"ds-form",12),e.\u0275\u0275listener("submitForm",function(){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext(4);return e.\u0275\u0275resetView(s.onSubmit())})("cancel",function(){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext(4);return e.\u0275\u0275resetView(s.onCancel())})("dfChange",function(s){e.\u0275\u0275restoreView(t);const h=e.\u0275\u0275nextContext(4);return e.\u0275\u0275resetView(h.onChange(s))}),e.\u0275\u0275elementStart(1,"div",13)(2,"a",14),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd()()()}if(2&n){const t=e.\u0275\u0275nextContext(3).ngVar,i=e.\u0275\u0275nextContext();e.\u0275\u0275property("formId","edit-bitstream-form-id")("formGroup",i.formGroup)("formModel",i.formModel)("formLayout",i.formLayout)("submitLabel","form.save"),e.\u0275\u0275advance(2),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction1(9,at,null==t||null==t.payload?null:t.payload.id)),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,7,"bitstream.edit.authorizations.link"))}}function nt(n,f){if(1&n&&(e.\u0275\u0275elementStart(0,"div",5)(1,"div",6),e.\u0275\u0275element(2,"ds-themed-thumbnail",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",8)(4,"div",2)(5,"div",5)(6,"div",9)(7,"h3"),e.\u0275\u0275text(8),e.\u0275\u0275elementStart(9,"span",10),e.\u0275\u0275text(10),e.\u0275\u0275pipe(11,"dsFileSize"),e.\u0275\u0275elementEnd()()()()(),e.\u0275\u0275template(12,st,5,11,"ds-form",11),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext(2).ngVar,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("thumbnail",null==t?null:t.payload),e.\u0275\u0275advance(6),e.\u0275\u0275textInterpolate1("",i.dsoNameService.getName(null==t?null:t.payload)," "),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1("(",e.\u0275\u0275pipeBind1(11,4,null==t||null==t.payload?null:t.payload.sizeBytes),")"),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",i.formGroup)}}function rt(n,f){1&n&&(e.\u0275\u0275element(0,"ds-error",15),e.\u0275\u0275pipe(1,"translate")),2&n&&e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,1,"error.bitstream"))}function ot(n,f){1&n&&(e.\u0275\u0275element(0,"ds-themed-loading",15),e.\u0275\u0275pipe(1,"translate")),2&n&&e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,1,"loading.bitstream"))}function dt(n,f){if(1&n&&(e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275template(1,nt,13,6,"div",3),e.\u0275\u0275template(2,rt,2,3,"ds-error",4),e.\u0275\u0275template(3,ot,2,3,"ds-themed-loading",4),e.\u0275\u0275elementEnd()),2&n){const t=f.ngVar,i=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",(null==i?null:i.hasSucceeded)&&(null==t?null:t.hasSucceeded)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",null==i?null:i.hasFailed),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!i||!t||(null==i?null:i.isLoading)||(null==t?null:t.isLoading))}}function lt(n,f){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,dt,4,3,"div",1),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(2,1,t.bitstreamFormatsRD$))}}let mt=(()=>{class n{constructor(t,i,s,h,u,o,b,l,p,r,C){this.route=t,this.router=i,this.changeDetectorRef=s,this.location=h,this.formService=u,this.translate=o,this.bitstreamService=b,this.dsoNameService=l,this.notificationsService=p,this.bitstreamFormatService=r,this.primaryBitstreamService=C,this.KEY_PREFIX="bitstream.edit.form.",this.LABEL_KEY_SUFFIX=".label",this.HINT_KEY_SUFFIX=".hint",this.NOTIFICATIONS_PREFIX="bitstream.edit.notifications.",this.IMAGE_WIDTH_METADATA="iiif.image.width",this.IMAGE_HEIGHT_METADATA="iiif.image.height",this.IIIF_TOC_METADATA="iiif.toc",this.IIIF_LABEL_METADATA="iiif.label",this.findAllOptions={elementsPerPage:9999},this.fileNameModel=new T.u({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"fileName",name:"fileName",required:!0,validators:{required:null},errorMessages:{required:"You must provide a file name for the bitstream"}}),this.primaryBitstreamModel=new O.p({id:"primaryBitstream",name:"primaryBitstream"}),this.descriptionModel=new W.D({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"description",name:"description",rows:10}),this.selectedFormatModel=new I.nMt({id:"selectedFormat",name:"selectedFormat"}),this.newFormatModel=new I.b1u({id:"newFormat",name:"newFormat"}),this.iiifLabelModel=new T.u({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"iiifLabel",name:"iiifLabel"},{grid:{host:"col col-lg-6 d-inline-block"}}),this.iiifLabelContainer=new I.S_O({id:"iiifLabelContainer",group:[this.iiifLabelModel]},{grid:{host:"form-row"}}),this.iiifTocModel=new T.u({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"iiifToc",name:"iiifToc"},{grid:{host:"col col-lg-6 d-inline-block"}}),this.iiifTocContainer=new I.S_O({id:"iiifTocContainer",group:[this.iiifTocModel]},{grid:{host:"form-row"}}),this.iiifWidthModel=new T.u({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"iiifWidth",name:"iiifWidth"},{grid:{host:"col col-lg-6 d-inline-block"}}),this.iiifWidthContainer=new I.S_O({id:"iiifWidthContainer",group:[this.iiifWidthModel]},{grid:{host:"form-row"}}),this.iiifHeightModel=new T.u({hasSelectableMetadata:!1,metadataFields:[],repeatable:!1,submissionId:"",id:"iiifHeight",name:"iiifHeight"},{grid:{host:"col col-lg-6 d-inline-block"}}),this.iiifHeightContainer=new I.S_O({id:"iiifHeightContainer",group:[this.iiifHeightModel]},{grid:{host:"form-row"}}),this.inputModels=[this.fileNameModel,this.primaryBitstreamModel,this.descriptionModel,this.selectedFormatModel,this.newFormatModel],this.formModel=[new I.S_O({id:"fileNamePrimaryContainer",group:[this.fileNameModel,this.primaryBitstreamModel]},{grid:{host:"form-row"}}),new I.S_O({id:"descriptionContainer",group:[this.descriptionModel]}),new I.S_O({id:"formatContainer",group:[this.selectedFormatModel,this.newFormatModel]})],this.newFormatBaseLayout="col col-sm-6 d-inline-block",this.formLayout={fileName:{grid:{host:"col col-sm-8 d-inline-block"}},primaryBitstream:{grid:{host:"col col-sm-4 d-inline-block switch border-0"}},description:{grid:{host:"col-12 d-inline-block"}},embargo:{grid:{host:"col-12 d-inline-block"}},selectedFormat:{grid:{host:"col col-sm-6 d-inline-block"}},newFormat:{grid:{host:this.newFormatBaseLayout+" invisible"}},fileNamePrimaryContainer:{grid:{host:"row position-relative"}},descriptionContainer:{grid:{host:"row"}},formatContainer:{grid:{host:"row"}}},this.isIIIF=!1,this.subs=[]}ngOnInit(){this.itemId=this.route.snapshot.queryParams.itemId,this.entityType=this.route.snapshot.queryParams.entityType,this.bitstreamRD$=this.route.data.pipe((0,c.U)(o=>o.bitstream)),this.bitstreamFormatsRD$=this.bitstreamFormatService.findAll(this.findAllOptions);const t=this.bitstreamRD$.pipe((0,d.xw)(),(0,d.xe)()),i=this.bitstreamFormatsRD$.pipe((0,d.xw)(),(0,d.xe)()),s=t.pipe((0,g.w)(o=>o.bundle),(0,d.Gp)()),h=s.pipe((0,m.tz)(),(0,g.w)(o=>this.bitstreamService.findByHref(o._links.primaryBitstream.href)),(0,d.Gp)()),u=s.pipe((0,g.w)(o=>o.item),(0,d.Gp)());this.subs.push((0,M.a)(t,i,s,h,u).pipe().subscribe(([o,b,l,p,r])=>{this.bitstream=o,this.formats=b.page,this.bundle=l,this.primaryBitstreamUUID=(0,m.Uh)(p)?p.uuid:null,this.itemId=r.uuid,this.setIiifStatus(this.bitstream)})),this.subs.push(this.translate.onLangChange.subscribe(()=>{this.updateFieldTranslations()}))}setForm(){this.formGroup=this.formService.createFormGroup(this.formModel),this.updateFormatModel(),this.updateForm(this.bitstream),this.updateFieldTranslations()}updateForm(t){this.formGroup.patchValue({fileNamePrimaryContainer:{fileName:t.name,primaryBitstream:this.primaryBitstreamUUID===t.uuid},descriptionContainer:{description:t.firstMetadataValue("dc.description")},formatContainer:{newFormat:(0,m.Uh)(t.firstMetadata("dc.format"))?t.firstMetadata("dc.format").value:void 0}}),this.isIIIF&&this.formGroup.patchValue({iiifLabelContainer:{iiifLabel:t.firstMetadataValue(this.IIIF_LABEL_METADATA)},iiifTocContainer:{iiifToc:t.firstMetadataValue(this.IIIF_TOC_METADATA)},iiifWidthContainer:{iiifWidth:t.firstMetadataValue(this.IMAGE_WIDTH_METADATA)},iiifHeightContainer:{iiifHeight:t.firstMetadataValue(this.IMAGE_HEIGHT_METADATA)}}),this.bitstream.format.pipe((0,d.mc)()).subscribe(i=>{this.originalFormat=i,this.formGroup.patchValue({formatContainer:{selectedFormat:i.id}}),this.updateNewFormatLayout(i.id)})}updateFormatModel(){this.selectedFormatModel.options=this.formats.map(t=>Object.assign({value:t.id,label:this.isUnknownFormat(t.id)?this.translate.instant(this.KEY_PREFIX+"selectedFormat.unknown"):t.shortDescription}))}updateNewFormatLayout(t){this.formLayout.newFormat.grid.host=this.isUnknownFormat(t)?this.newFormatBaseLayout:this.newFormatBaseLayout+" invisible"}isUnknownFormat(t){const i=this.formats.find(s=>s.id===t);return(0,m.Uh)(i)&&i.supportLevel===_.o.Unknown}updateFieldTranslations(){this.inputModels.forEach(t=>{this.updateFieldTranslation(t)})}updateFieldTranslation(t){t.label=this.translate.instant(this.KEY_PREFIX+t.id+this.LABEL_KEY_SUFFIX),t.id!==this.primaryBitstreamModel.id&&(t.hint=this.translate.instant(this.KEY_PREFIX+t.id+this.HINT_KEY_SUFFIX))}onChange(t){const i=t.model;i.id===this.selectedFormatModel.id&&this.updateNewFormatLayout(i.value)}onSubmit(){const t=this.formGroup.getRawValue(),i=this.formToBitstream(t),s=this.formats.find(r=>r.id===t.formatContainer.selectedFormat),h=s.id!==this.originalFormat.id,o=this.primaryBitstreamUUID===this.bitstream.uuid;let b,l,p=!1;if(o!==t.fileNamePrimaryContainer.primaryBitstream){let r;r=o?this.primaryBitstreamService.delete(this.bundle):(0,m.Uh)(this.primaryBitstreamUUID)?this.primaryBitstreamService.put(this.bitstream,this.bundle):this.primaryBitstreamService.create(this.bitstream,this.bundle);const C=r.pipe((0,d.hC)());this.subs.push(C.pipe((0,P.h)(v=>v.hasFailed)).subscribe(v=>{this.notificationsService.error(this.translate.instant(this.NOTIFICATIONS_PREFIX+"error.primaryBitstream.title"),v.errorMessage),p=!0})),l=C.pipe((0,c.U)(v=>v.hasSucceeded?v.payload:this.bundle)),this.subs.push(l.pipe((0,m.tz)(),(0,g.w)(v=>this.bitstreamService.findByHref(v._links.primaryBitstream.href,!1)),(0,d.Gp)()).subscribe(v=>{this.primaryBitstreamUUID=(0,m.Uh)(v)?v.uuid:null}))}else l=(0,B.of)(this.bundle);b=h?this.bitstreamService.updateFormat(this.bitstream,s).pipe((0,d.hC)(),(0,c.U)(r=>{if(!(0,m.Uh)(r)||!r.hasFailed)return r.payload;this.notificationsService.error(this.translate.instant(this.NOTIFICATIONS_PREFIX+"error.format.title"),r.errorMessage)})):(0,B.of)(this.bitstream),(0,M.a)([l,b]).pipe((0,U.b)(([r])=>this.bundle=r),(0,g.w)(()=>this.bitstreamService.update(i).pipe((0,d.Gp)()))).subscribe(()=>{this.bitstreamService.commitUpdates(),this.notificationsService.success(this.translate.instant(this.NOTIFICATIONS_PREFIX+"saved.title"),this.translate.instant(this.NOTIFICATIONS_PREFIX+"saved.content")),p||this.navigateToItemEditBitstreams()})}formToBitstream(t){const i=H()(this.bitstream),s=i.metadata;return F.S.setFirstValue(s,"dc.title",t.fileNamePrimaryContainer.fileName),(0,m.xb)(t.descriptionContainer.description)?delete s["dc.description"]:F.S.setFirstValue(s,"dc.description",t.descriptionContainer.description),this.isIIIF&&((0,m.xb)(t.iiifLabelContainer.iiifLabel)?delete s[this.IIIF_LABEL_METADATA]:F.S.setFirstValue(s,this.IIIF_LABEL_METADATA,t.iiifLabelContainer.iiifLabel),(0,m.xb)(t.iiifTocContainer.iiifToc)?delete s[this.IIIF_TOC_METADATA]:F.S.setFirstValue(s,this.IIIF_TOC_METADATA,t.iiifTocContainer.iiifToc),(0,m.xb)(t.iiifWidthContainer.iiifWidth)?delete s[this.IMAGE_WIDTH_METADATA]:F.S.setFirstValue(s,this.IMAGE_WIDTH_METADATA,t.iiifWidthContainer.iiifWidth),(0,m.xb)(t.iiifHeightContainer.iiifHeight)?delete s[this.IMAGE_HEIGHT_METADATA]:F.S.setFirstValue(s,this.IMAGE_HEIGHT_METADATA,t.iiifHeightContainer.iiifHeight)),(0,m.UE)(t.formatContainer.newFormat)&&F.S.setFirstValue(s,"dc.format",t.formatContainer.newFormat),i.metadata=s,i}onCancel(){this.navigateToItemEditBitstreams()}navigateToItemEditBitstreams(){this.router.navigate([(0,G.dZ)(this.entityType,this.itemId),"bitstreams"])}setIiifStatus(t){const i=/OTHERCONTENT|THUMBNAIL|LICENSE/,s=/true|yes/i,h=this.bitstream.format.pipe((0,d.xw)(),(0,c.U)(l=>l.payload.mimetype.includes("image/"))),u=this.bitstream.bundle.pipe((0,d.xw)(),(0,c.U)(l=>null==this.dsoNameService.getName(l.payload).match(i))),o=this.bitstream.bundle.pipe((0,d.xw)(),(0,c.U)(l=>l.payload.item.pipe((0,d.xw)(),(0,c.U)(p=>p.payload.firstMetadataValue("dspace.iiif.enabled")&&null!==p.payload.firstMetadataValue("dspace.iiif.enabled").match(s))))),b=(0,M.a)(h,u,o).subscribe(([l,p,r])=>{l&&p&&r&&(this.isIIIF=!0,this.inputModels.push(this.iiifLabelModel),this.formModel.push(this.iiifLabelContainer),this.inputModels.push(this.iiifTocModel),this.formModel.push(this.iiifTocContainer),this.inputModels.push(this.iiifWidthModel),this.formModel.push(this.iiifWidthContainer),this.inputModels.push(this.iiifHeightModel),this.formModel.push(this.iiifHeightContainer)),this.setForm(),this.changeDetectorRef.detectChanges()});this.subs.push(b)}ngOnDestroy(){this.subs.filter(t=>(0,m.Uh)(t)).forEach(t=>t.unsubscribe())}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(E.gz),e.\u0275\u0275directiveInject(E.F0),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(A.Ye),e.\u0275\u0275directiveInject(I.w1X),e.\u0275\u0275directiveInject(L.sK),e.\u0275\u0275directiveInject(V.J),e.\u0275\u0275directiveInject(j._),e.\u0275\u0275directiveInject(x.T),e.\u0275\u0275directiveInject(R.O),e.\u0275\u0275directiveInject(Z))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-edit-bitstream-page"]],decls:2,vars:3,consts:[[4,"ngVar"],["class","container",4,"ngVar"],[1,"container"],["class","row",4,"ngIf"],[3,"message",4,"ngIf"],[1,"row"],[1,"col-md-2"],[3,"thumbnail"],[1,"col-md-10"],[1,"col-12"],[1,"text-muted"],[3,"formId","formGroup","formModel","formLayout","submitLabel","submitForm","cancel","dfChange",4,"ngIf"],[3,"formId","formGroup","formModel","formLayout","submitLabel","submitForm","cancel","dfChange"],["additional","",1,"container","py-3"],[3,"routerLink"],[3,"message"]],template:function(t,i){1&t&&(e.\u0275\u0275template(0,lt,3,3,"ng-container",0),e.\u0275\u0275pipe(1,"async")),2&t&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,i.bitstreamRD$))},dependencies:[A.O5,D.JL,D.sg,E.rH,Q.q,k.Z,q.z,tt.g,et.U,A.Ov,it.p,L.X$],styles:["[_nghost-%COMP%]     .switch{position:absolute;top:calc(var(--bs-spacer) * 2.5)}[_nghost-%COMP%]     ds-dynamic-form-control-container>div>label{margin-top:1.75rem}"],changeDetection:0}),n})()},11804:(N,y,a)=>{a.d(y,{o:()=>c});var c=(()=>{return(g=c||(c={})).Known="KNOWN",g.Unknown="UNKNOWN",g.Supported="SUPPORTED",c;var g})()}}]);