"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[9716],{80544:(B,x,l)=>{l.d(x,{n:()=>a});var e=l(98678),h=l(24112),g=l.n(h),D=l(92169),F=l(9237),m=l(22170),_=l(35103),C=l(5476),v=l(42921),U=l(64377),P=l(96342);function I(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"div",9)(1,"div",10)(2,"p",11),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd()()()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,1,o.dropMessageLabel))}}function A(t,n){if(1&t&&(e.\u0275\u0275elementStart(0,"p",4),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&t){const o=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",o.fileObject.name," ")}}let a=(()=>{class t{constructor(){this.onFileAdded=new e.EventEmitter,this.uploadFilesOptions=Object.assign(new m.n,{url:"placeholder"})}ngOnInit(){this.uploaderId="ds-drag-and-drop-uploader"+g()(),this.isOverDocumentDropZone=(0,F.of)(!1),this.uploader=new D.bA({url:"placeholder"})}onDrop(o){o.preventDefault()}onDragOver(o){o.preventDefault(),"HTML"!==o.target.tagName&&(this.isOverDocumentDropZone=(0,F.of)(!0))}fileOverDocument(o){o||(this.isOverDocumentDropZone=(0,F.of)(o))}setFile(o){this.fileObject=o.length>0?o[0]:void 0,this.onFileAdded.emit(this.fileObject)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ds-file-dropzone-no-uploader"]],hostBindings:function(o,i){1&o&&e.\u0275\u0275listener("drop",function(d){return i.onDrop(d)},!1,e.\u0275\u0275resolveWindow)("dragover",function(d){return i.onDragOver(d)},!1,e.\u0275\u0275resolveWindow)},inputs:{dropMessageLabel:"dropMessageLabel",dropMessageLabelReplacement:"dropMessageLabelReplacement"},outputs:{onFileAdded:"onFileAdded"},decls:17,vars:19,consts:[["ng2FileDrop","",1,"ds-document-drop-zone","position-fixed","h-100","w-100",3,"uploader","onFileDrop","fileOver"],["class","ds-document-drop-zone-inner position-fixed h-100 w-100 p-2",4,"ngIf"],[1,"well","ds-base-drop-zone","mt-1","mb-3","text-muted","p-2"],["class","text-center m-0 p-0 d-flex justify-content-center align-items-center",4,"ngIf"],[1,"text-center","m-0","p-0","d-flex","justify-content-center","align-items-center"],["aria-hidden","true",1,"fas","fa-cloud-upload"],[1,"btn","btn-link","m-0","p-0","ml-1"],["requireFile","","type","file","name","file-upload","id","file-upload",1,"form-control-file","d-none",3,"ngModel","ngModelChange"],["file","ngModel"],[1,"ds-document-drop-zone-inner","position-fixed","h-100","w-100","p-2"],[1,"ds-document-drop-zone-inner-content","position-relative","d-flex","flex-column","justify-content-center","text-center","h-100","w-100"],[1,"text-primary"]],template:function(o,i){1&o&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275listener("onFileDrop",function(d){return i.setFile(d)})("fileOver",function(d){return i.fileOverDocument(d)}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(2,I,5,3,"div",1),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275elementStart(4,"div",2),e.\u0275\u0275template(5,A,2,1,"p",3),e.\u0275\u0275elementStart(6,"p",4)(7,"span"),e.\u0275\u0275element(8,"i",5),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"translate"),e.\u0275\u0275pipe(11,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"label",6)(13,"input",7,8),e.\u0275\u0275listener("ngModelChange",function(d){return i.setFile(d)}),e.\u0275\u0275elementEnd(),e.\u0275\u0275text(15),e.\u0275\u0275pipe(16,"translate"),e.\u0275\u0275elementEnd()()()),2&o&&(e.\u0275\u0275classProp("ds-document-drop-zone-active",e.\u0275\u0275pipeBind1(1,9,i.isOverDocumentDropZone)),e.\u0275\u0275property("uploader",i.uploader),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(3,11,i.isOverDocumentDropZone)),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",null!=i.fileObject),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate2(" ",e.\u0275\u0275pipeBind1(10,13,null==i.fileObject?i.dropMessageLabel:i.dropMessageLabelReplacement)," ",e.\u0275\u0275pipeBind1(11,15,"uploader.or"),""),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",i.fileObject),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(16,17,"uploader.browse")," "))},dependencies:[_.O5,C.Fj,C.JJ,C.On,v.k,U.C,D.GN,_.Ov,P.X$],styles:[".ds-base-drop-zone[_ngcontent-%COMP%]{border:2px dashed var(--bs-gray-600)}.ds-document-drop-zone[_ngcontent-%COMP%]{top:0;left:0;z-index:-1}.ds-document-drop-zone-active[_ngcontent-%COMP%]{z-index:var(--ds-drop-zone-area-z-index)!important}.ds-document-drop-zone-inner[_ngcontent-%COMP%]{background-color:#ffffffb3;z-index:var(--ds-drop-zone-area-inner-z-index);top:0;left:0}.ds-document-drop-zone-inner-content[_ngcontent-%COMP%]{border:4px dashed var(--bs-primary);z-index:var(--ds-drop-zone-area-inner-z-index)}.ds-document-drop-zone-inner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:calc(var(--bs-font-size-lg) * 2.5)}"]}),t})()},89716:(B,x,l)=>{l.d(x,{c:()=>C});var e=l(35103),h=l(57999),g=l(92169),D=l(17026),F=l(80544),m=l(98678);const _=[D.B,F.n];let C=(()=>{class v{}return v.\u0275fac=function(P){return new(P||v)},v.\u0275mod=m.\u0275\u0275defineNgModule({type:v}),v.\u0275inj=m.\u0275\u0275defineInjector({providers:[..._],imports:[e.ez,h.m,g.Ob,g.Ob]}),v})()},22170:(B,x,l)=>{l.d(x,{n:()=>h});var e=l(89333);class h{constructor(){this.disableMultipart=!1,this.itemAlias=null,this.autoUpload=!0,this.method=e.a.POST}}},17026:(B,x,l)=>{l.d(x,{B:()=>b});var e=l(98678),h=l(9237),g=l(92169),D=l(24112),F=l.n(D),m=l(45608),_=l(99820),C=l(53929),v=l(18603),U=l(51598),P=l(78964),I=l(35103),A=l(42921),a=l(96342);function t(p,E){if(1&p){const r=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",7),e.\u0275\u0275listener("fileOver",function(f){e.\u0275\u0275restoreView(r);const c=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(c.fileOverDocument(f))}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275elementEnd()}if(2&p){const r=e.\u0275\u0275nextContext();e.\u0275\u0275classProp("ds-document-drop-zone-active",e.\u0275\u0275pipeBind1(1,3,r.isOverDocumentDropZone)),e.\u0275\u0275property("uploader",r.uploader)}}function n(p,E){if(1&p&&(e.\u0275\u0275elementStart(0,"div",8)(1,"div",9)(2,"p",10),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd()()()),2&p){const r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(4,1,r.dropOverDocumentMsg))}}function o(p,E){if(1&p){const r=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",11)(1,"span"),e.\u0275\u0275element(2,"i",12),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275pipe(5,"translate"),e.\u0275\u0275elementStart(6,"label",13),e.\u0275\u0275listener("keyup.enter",function(f){e.\u0275\u0275restoreView(r);const c=e.\u0275\u0275reference(12);return f.stopImmediatePropagation(),e.\u0275\u0275resetView(c.click())}),e.\u0275\u0275elementStart(7,"span",14),e.\u0275\u0275pipe(8,"translate"),e.\u0275\u0275text(9),e.\u0275\u0275pipe(10,"translate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275element(11,"input",15,16),e.\u0275\u0275elementEnd()()}if(2&p){const r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate2(" ",e.\u0275\u0275pipeBind1(4,7,r.dropMsg),"",e.\u0275\u0275pipeBind1(5,9,"uploader.or")," "),e.\u0275\u0275advance(3),e.\u0275\u0275propertyInterpolate1("for","inputFileUploader-",r.uploaderId,""),e.\u0275\u0275advance(1),e.\u0275\u0275attribute("aria-label",e.\u0275\u0275pipeBind1(8,11,"uploader.browse")),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(10,13,"uploader.browse")),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate1("id","inputFileUploader-",r.uploaderId,""),e.\u0275\u0275property("uploader",r.uploader)}}function i(p,E){if(1&p&&(e.\u0275\u0275elementStart(0,"span"),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&p){const r=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate2("",e.\u0275\u0275pipeBind1(2,2,"uploader.queue-length"),": ",null==r.uploader||null==r.uploader.queue?null:r.uploader.queue.length," | ")}}function s(p,E){if(1&p&&(e.\u0275\u0275elementStart(0,"span",26),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&p){const r=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("",r.uploader.progress,"%")}}function d(p,E){1&p&&(e.\u0275\u0275elementStart(0,"span",26),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&p&&(e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(2,1,"uploader.processing")))}const O=function(p){return{width:p}},M=function(p){return{"progress-bar":!0,"bg-success progress-bar-striped progress-bar-animated":p}};function z(p,E){if(1&p){const r=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div")(1,"div",17)(2,"div",18)(3,"span",19),e.\u0275\u0275template(4,i,3,4,"span",6),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",20)(7,"button",21),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(r);const f=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(f.uploader.clearQueue())}),e.\u0275\u0275pipe(8,"translate"),e.\u0275\u0275element(9,"i",22),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(10,s,2,1,"span",23),e.\u0275\u0275template(11,d,3,3,"span",23),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(12,"div",24),e.\u0275\u0275element(13,"div",25),e.\u0275\u0275elementEnd()()()}if(2&p){const r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf",!r.uploader.options.disableMultipart),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1("",null==r.uploader||null==r.uploader.queue[0]?null:r.uploader.queue[0].file.name," "),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate("title",e.\u0275\u0275pipeBind1(8,8,"uploader.delete.btn-title")),e.\u0275\u0275property("disabled",!r.uploader.queue.length),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",r.uploader.progress<100&&!(0===r.uploader.progress&&!r.uploader.options.autoUpload)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",100===r.uploader.progress),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngStyle",e.\u0275\u0275pureFunction1(10,O,r.uploader.progress+"%"))("ngClass",e.\u0275\u0275pureFunction1(12,M,100===r.uploader.progress))}}const y=function(p){return{"ds-base-drop-zone-file-over":p}};let b=(()=>{class p{constructor(r,u,f,c,T){this.cdr=r,this.scrollToService=u,this.dragService=f,this.tokenExtractor=c,this.cookieService=T,this.onCompleteItem=new e.EventEmitter,this.onUploadError=new e.EventEmitter,this.onFileSelected=new e.EventEmitter,this.isOverBaseDropZone=(0,h.of)(!1),this.isOverDocumentDropZone=(0,h.of)(!1)}onDragOver(r){this.enableDragOverDocument&&this.dragService.isAllowedDragOverPage()&&(r.preventDefault(),"HTML"!==r.target.tagName&&(this.isOverDocumentDropZone=(0,h.of)(!0)))}ngOnInit(){this.uploaderId="ds-drag-and-drop-uploader"+F()(),this.checkConfig(this.uploadFilesOptions),this.uploader=new g.bA({url:this.uploadFilesOptions.url,authToken:this.uploadFilesOptions.authToken,disableMultipart:this.uploadFilesOptions.disableMultipart,itemAlias:this.uploadFilesOptions.itemAlias,removeAfterUpload:!0,autoUpload:this.uploadFilesOptions.autoUpload,method:this.uploadFilesOptions.method,queueLimit:this.uploadFilesOptions.maxFileNumber}),(0,m.o8)(this.enableDragOverDocument)&&(this.enableDragOverDocument=!1),(0,m.o8)(this.dropMsg)&&(this.dropMsg="uploader.drag-message"),(0,m.o8)(this.dropOverDocumentMsg)&&(this.dropOverDocumentMsg="uploader.drag-message")}ngAfterViewInit(){this.uploader.onAfterAddingAll=r=>{this.onFileSelected.emit(r)},(0,m.o8)(this.onBeforeUpload)&&(this.onBeforeUpload=()=>{}),this.uploader.onBeforeUploadItem=r=>{r.url!==this.uploader.options.url&&(r.url=this.uploader.options.url),this.uploader.options.headers=[{name:_.ew,value:this.tokenExtractor.getToken()}],this.onBeforeUpload(),this.isOverDocumentDropZone=(0,h.of)(!1)},(0,m.Uh)(this.uploadProperties)&&(this.uploader.onBuildItemForm=(r,u)=>{u.append("properties",JSON.stringify(this.uploadProperties))}),this.uploader.onCompleteItem=(r,u,f,c)=>{const T=c[_.aj.toLowerCase()];if((0,m.UE)(T)&&(this.saveXsrfToken(T),this.uploader.options.headers=[{name:_.ew,value:this.tokenExtractor.getToken()}]),(0,m.UE)(u)){const S=JSON.parse(u);this.onCompleteItem.emit(S)}},this.uploader.onErrorItem=(r,u,f,c)=>{const T=c[_.aj.toLowerCase()];(0,m.UE)(T)&&(this.saveXsrfToken(T),this.uploader.options.headers=[{name:_.ew,value:this.tokenExtractor.getToken()}]),this.onUploadError.emit({item:r,response:u,status:f,headers:c}),this.uploader.cancelAll()},this.uploader.onProgressAll=()=>this.onProgress(),this.uploader.onProgressItem=()=>this.onProgress()}fileOverBase(r){this.isOverBaseDropZone=(0,h.of)(r)}fileOverDocument(r){r||(this.isOverDocumentDropZone=(0,h.of)(r))}onProgress(){this.cdr.detectChanges()}checkConfig(r){const f=["url","authToken","disableMultipart","itemAlias"].filter(c=>!(c in r&&""!==r[c]));if(0<f.length)throw new Error("UploadFiles: Argument is missing the following required properties: "+f.join(", "))}saveXsrfToken(r){this.cookieService.remove(_.VY),this.cookieService.set(_.VY,r)}}return p.\u0275fac=function(r){return new(r||p)(e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(v.ij),e.\u0275\u0275directiveInject(U.w),e.\u0275\u0275directiveInject(P.YS),e.\u0275\u0275directiveInject(C.N))},p.\u0275cmp=e.\u0275\u0275defineComponent({type:p,selectors:[["ds-uploader"]],hostBindings:function(r,u){1&r&&e.\u0275\u0275listener("dragover",function(c){return u.onDragOver(c)},!1,e.\u0275\u0275resolveWindow)},inputs:{dropMsg:"dropMsg",dropOverDocumentMsg:"dropOverDocumentMsg",enableDragOverDocument:"enableDragOverDocument",onBeforeUpload:"onBeforeUpload",uploadFilesOptions:"uploadFilesOptions",uploadProperties:"uploadProperties"},outputs:{onCompleteItem:"onCompleteItem",onUploadError:"onUploadError",onFileSelected:"onFileSelected"},decls:11,vars:17,consts:[["ng2FileDrop","","class","ds-document-drop-zone position-fixed h-100 w-100",3,"ds-document-drop-zone-active","uploader","fileOver",4,"ngIf"],["class","ds-document-drop-zone-inner position-fixed h-100 w-100 p-2",4,"ngIf"],[1,"row"],[1,"col-md-12"],["ng2FileDrop","",1,"well","ds-base-drop-zone","mt-1","mb-3","text-muted",3,"ngClass","uploader","fileOver"],["class","text-center m-0 p-2 d-flex justify-content-center align-items-center",4,"ngIf"],[4,"ngIf"],["ng2FileDrop","",1,"ds-document-drop-zone","position-fixed","h-100","w-100",3,"uploader","fileOver"],[1,"ds-document-drop-zone-inner","position-fixed","h-100","w-100","p-2"],[1,"ds-document-drop-zone-inner-content","position-relative","d-flex","flex-column","justify-content-center","text-center","h-100","w-100"],[1,"text-primary"],[1,"text-center","m-0","p-2","d-flex","justify-content-center","align-items-center"],["aria-hidden","true",1,"fas","fa-upload"],["tabindex","0",1,"btn","btn-link","m-0","p-0","ml-1",3,"for","keyup.enter"],["role","button"],["type","file","ng2FileSelect","","multiple","","tabindex","0",1,"d-none",3,"id","uploader"],["fileInput",""],[1,"m-1"],[1,"upload-item-top"],[1,"filename"],["role","group",1,"btn-group","btn-group-sm","float-right"],["type","button",1,"btn","btn-danger",3,"title","disabled","click"],["aria-hidden","true",1,"fas","fa-trash"],["class","float-right mr-3",4,"ngIf"],[1,"ds-base-drop-zone-progress","clearfix","mt-2"],["role","progressbar",2,"height","5px","width","0",3,"ngStyle","ngClass"],[1,"float-right","mr-3"]],template:function(r,u){1&r&&(e.\u0275\u0275template(0,t,2,5,"div",0),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275template(2,n,5,3,"div",1),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275elementStart(4,"div",2)(5,"div",3)(6,"div",4),e.\u0275\u0275listener("fileOver",function(c){return u.fileOverBase(c)}),e.\u0275\u0275pipe(7,"async"),e.\u0275\u0275template(8,o,13,15,"div",5),e.\u0275\u0275template(9,z,14,14,"div",6),e.\u0275\u0275pipe(10,"async"),e.\u0275\u0275elementEnd()()()),2&r&&(e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(1,7,u.isOverDocumentDropZone)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(3,9,u.isOverDocumentDropZone)),e.\u0275\u0275advance(2),e.\u0275\u0275attribute("id",u.uploaderId),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(15,y,e.\u0275\u0275pipeBind1(7,11,u.isOverBaseDropZone)))("uploader",u.uploader),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",0===(null==u.uploader||null==u.uploader.queue?null:u.uploader.queue.length)),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(10,13,u.isOverBaseDropZone)||0!==(null==u.uploader||null==u.uploader.queue?null:u.uploader.queue.length)))},dependencies:[I.mk,I.O5,I.PC,A.k,g.GN,g.C6,I.Ov,a.X$],styles:[".ds-base-drop-zone[_ngcontent-%COMP%]{border:2px dashed var(--bs-gray-600)}.ds-base-drop-zone-file-over[_ngcontent-%COMP%]{border:2px dashed var(--bs-primary)}.ds-base-drop-zone[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{min-height:var(--ds-drop-zone-area-height)}.ds-document-drop-zone[_ngcontent-%COMP%]{top:0;left:0;z-index:-1}.ds-document-drop-zone-active[_ngcontent-%COMP%]{z-index:var(--ds-drop-zone-area-z-index)!important}.ds-document-drop-zone-inner[_ngcontent-%COMP%]{background-color:#ffffffb3;z-index:var(--ds-drop-zone-area-inner-z-index);top:0;left:0}.ds-document-drop-zone-inner-content[_ngcontent-%COMP%]{border:4px dashed var(--bs-primary);z-index:var(--ds-drop-zone-area-inner-z-index)}.ds-document-drop-zone-inner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:calc(var(--bs-font-size-lg) * 2.5)}"]}),p})()},92169:(B,x,l)=>{l.d(x,{C6:()=>P,GN:()=>I,Ob:()=>A,bA:()=>U});var e=l(98678),h=l(35103);class D{constructor(t){this.rawFile=t;let o=function g(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}(t)?t.value:t;this["_createFrom"+("string"==typeof o?"FakePath":"Object")](o)}_createFromFakePath(t){this.lastModifiedDate=void 0,this.size=void 0,this.type="like/"+t.slice(t.lastIndexOf(".")+1).toLowerCase(),this.name=t.slice(t.lastIndexOf("/")+t.lastIndexOf("\\")+2)}_createFromObject(t){this.size=t.size,this.type=t.type,this.name=t.name}}class F{constructor(t,n,o){this.url="/",this.headers=[],this.withCredentials=!0,this.formData=[],this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.index=void 0,this.uploader=t,this.some=n,this.options=o,this.file=new D(n),this._file=n,t.options&&(this.method=t.options.method||"POST",this.alias=t.options.itemAlias||"file"),this.url=t.options.url}upload(){try{this.uploader.uploadItem(this)}catch{this.uploader._onCompleteItem(this,"",0,{}),this.uploader._onErrorItem(this,"",0,{})}}cancel(){this.uploader.cancelItem(this)}remove(){this.uploader.removeFromQueue(this)}onBeforeUpload(){}onBuildForm(t){return{form:t}}onProgress(t){return{progress:t}}onSuccess(t,n,o){return{response:t,status:n,headers:o}}onError(t,n,o){return{response:t,status:n,headers:o}}onCancel(t,n,o){return{response:t,status:n,headers:o}}onComplete(t,n,o){return{response:t,status:n,headers:o}}_onBeforeUpload(){this.isReady=!0,this.isUploading=!0,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!1,this.isError=!1,this.progress=0,this.onBeforeUpload()}_onBuildForm(t){this.onBuildForm(t)}_onProgress(t){this.progress=t,this.onProgress(t)}_onSuccess(t,n,o){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!0,this.isCancel=!1,this.isError=!1,this.progress=100,this.index=void 0,this.onSuccess(t,n,o)}_onError(t,n,o){this.isReady=!1,this.isUploading=!1,this.isUploaded=!0,this.isSuccess=!1,this.isCancel=!1,this.isError=!0,this.progress=0,this.index=void 0,this.onError(t,n,o)}_onCancel(t,n,o){this.isReady=!1,this.isUploading=!1,this.isUploaded=!1,this.isSuccess=!1,this.isCancel=!0,this.isError=!1,this.progress=0,this.index=void 0,this.onCancel(t,n,o)}_onComplete(t,n,o){this.onComplete(t,n,o),this.uploader.options.removeAfterUpload&&this.remove()}_prepareToUploading(){this.index=this.index||++this.uploader._nextIndex,this.isReady=!0}}let m=(()=>{class a{static getMimeClass(n){let o="application";return-1!==this.mime_psd.indexOf(n.type)||n.type.match("image.*")?o="image":n.type.match("video.*")?o="video":n.type.match("audio.*")?o="audio":"application/pdf"===n.type?o="pdf":-1!==this.mime_compress.indexOf(n.type)?o="compress":-1!==this.mime_doc.indexOf(n.type)?o="doc":-1!==this.mime_xsl.indexOf(n.type)?o="xls":-1!==this.mime_ppt.indexOf(n.type)&&(o="ppt"),"application"===o&&(o=this.fileTypeDetection(n.name)),o}static fileTypeDetection(n){let o={jpg:"image",jpeg:"image",tif:"image",psd:"image",bmp:"image",png:"image",nef:"image",tiff:"image",cr2:"image",dwg:"image",cdr:"image",ai:"image",indd:"image",pin:"image",cdp:"image",skp:"image",stp:"image","3dm":"image",mp3:"audio",wav:"audio",wma:"audio",mod:"audio",m4a:"audio",compress:"compress",zip:"compress",rar:"compress","7z":"compress",lz:"compress",z01:"compress",bz2:"compress",gz:"compress",pdf:"pdf",xls:"xls",xlsx:"xls",ods:"xls",mp4:"video",avi:"video",wmv:"video",mpg:"video",mts:"video",flv:"video","3gp":"video",vob:"video",m4v:"video",mpeg:"video",m2ts:"video",mov:"video",doc:"doc",docx:"doc",eps:"doc",txt:"doc",odt:"doc",rtf:"doc",ppt:"ppt",pptx:"ppt",pps:"ppt",ppsx:"ppt",odp:"ppt"},i=n.split(".");if(i.length<2)return"application";let s=i[i.length-1].toLowerCase();return void 0===o[s]?"application":o[s]}}return a.mime_doc=["application/msword","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.wordprocessingml.template","application/vnd.ms-word.document.macroEnabled.12","application/vnd.ms-word.template.macroEnabled.12"],a.mime_xsl=["application/vnd.ms-excel","application/vnd.ms-excel","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.spreadsheetml.template","application/vnd.ms-excel.sheet.macroEnabled.12","application/vnd.ms-excel.template.macroEnabled.12","application/vnd.ms-excel.addin.macroEnabled.12","application/vnd.ms-excel.sheet.binary.macroEnabled.12"],a.mime_ppt=["application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.presentationml.template","application/vnd.openxmlformats-officedocument.presentationml.slideshow","application/vnd.ms-powerpoint.addin.macroEnabled.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.presentation.macroEnabled.12","application/vnd.ms-powerpoint.slideshow.macroEnabled.12"],a.mime_psd=["image/photoshop","image/x-photoshop","image/psd","application/photoshop","application/psd","zz-application/zz-winassoc-psd"],a.mime_compress=["application/x-gtar","application/x-gcompress","application/compress","application/x-tar","application/x-rar-compressed","application/octet-stream","application/x-zip-compressed","application/zip-compressed","application/x-7z-compressed","application/gzip","application/x-bzip2"],a})();class U{constructor(t){this.isUploading=!1,this.queue=[],this.progress=0,this._nextIndex=0,this.options={autoUpload:!1,isHTML5:!0,filters:[],removeAfterUpload:!1,disableMultipart:!1,formatDataFunction:n=>n._file,formatDataFunctionIsAsync:!1},this.setOptions(t),this.response=new e.EventEmitter}setOptions(t){this.options=Object.assign(this.options,t),this.authToken=this.options.authToken,this.authTokenHeader=this.options.authTokenHeader||"Authorization",this.autoUpload=this.options.autoUpload,this.options.filters.unshift({name:"queueLimit",fn:this._queueLimitFilter}),this.options.maxFileSize&&this.options.filters.unshift({name:"fileSize",fn:this._fileSizeFilter}),this.options.allowedFileType&&this.options.filters.unshift({name:"fileType",fn:this._fileTypeFilter}),this.options.allowedMimeType&&this.options.filters.unshift({name:"mimeType",fn:this._mimeTypeFilter});for(let n=0;n<this.queue.length;n++)this.queue[n].url=this.options.url}addToQueue(t,n,o){let i=[];for(let M of t)i.push(M);let s=this._getFilters(o),d=this.queue.length,O=[];i.map(M=>{n||(n=this.options);let z=new D(M);if(this._isValidFile(z,s,n)){let y=new F(this,M,n);O.push(y),this.queue.push(y),this._onAfterAddingFile(y)}else this._onWhenAddingFileFailed(z,s[this._failFilterIndex],n)}),this.queue.length!==d&&(this._onAfterAddingAll(O),this.progress=this._getTotalProgress()),this._render(),this.options.autoUpload&&this.uploadAll()}removeFromQueue(t){let n=this.getIndexOfItem(t),o=this.queue[n];o.isUploading&&o.cancel(),this.queue.splice(n,1),this.progress=this._getTotalProgress()}clearQueue(){for(;this.queue.length;)this.queue[0].remove();this.progress=0}uploadItem(t){let n=this.getIndexOfItem(t),o=this.queue[n],i=this.options.isHTML5?"_xhrTransport":"_iframeTransport";o._prepareToUploading(),!this.isUploading&&(this.isUploading=!0,this[i](o))}cancelItem(t){let n=this.getIndexOfItem(t),o=this.queue[n];o&&o.isUploading&&(this.options.isHTML5?o._xhr:o._form).abort()}uploadAll(){let t=this.getNotUploadedItems().filter(n=>!n.isUploading);t.length&&(t.map(n=>n._prepareToUploading()),t[0].upload())}cancelAll(){this.getNotUploadedItems().map(n=>n.cancel())}isFile(t){return function _(a){return File&&a instanceof File}(t)}isFileLikeObject(t){return t instanceof D}getIndexOfItem(t){return"number"==typeof t?t:this.queue.indexOf(t)}getNotUploadedItems(){return this.queue.filter(t=>!t.isUploaded)}getReadyItems(){return this.queue.filter(t=>t.isReady&&!t.isUploading).sort((t,n)=>t.index-n.index)}destroy(){}onAfterAddingAll(t){return{fileItems:t}}onBuildItemForm(t,n){return{fileItem:t,form:n}}onAfterAddingFile(t){return{fileItem:t}}onWhenAddingFileFailed(t,n,o){return{item:t,filter:n,options:o}}onBeforeUploadItem(t){return{fileItem:t}}onProgressItem(t,n){return{fileItem:t,progress:n}}onProgressAll(t){return{progress:t}}onSuccessItem(t,n,o,i){return{item:t,response:n,status:o,headers:i}}onErrorItem(t,n,o,i){return{item:t,response:n,status:o,headers:i}}onCancelItem(t,n,o,i){return{item:t,response:n,status:o,headers:i}}onCompleteItem(t,n,o,i){return{item:t,response:n,status:o,headers:i}}onCompleteAll(){}_mimeTypeFilter(t){return!(this.options.allowedMimeType&&-1===this.options.allowedMimeType.indexOf(t.type))}_fileSizeFilter(t){return!(this.options.maxFileSize&&t.size>this.options.maxFileSize)}_fileTypeFilter(t){return!(this.options.allowedFileType&&-1===this.options.allowedFileType.indexOf(m.getMimeClass(t)))}_onErrorItem(t,n,o,i){t._onError(n,o,i),this.onErrorItem(t,n,o,i)}_onCompleteItem(t,n,o,i){t._onComplete(n,o,i),this.onCompleteItem(t,n,o,i);let s=this.getReadyItems()[0];this.isUploading=!1,s?s.upload():(this.onCompleteAll(),this.progress=this._getTotalProgress(),this._render())}_headersGetter(t){return n=>n?t[n.toLowerCase()]||void 0:t}_xhrTransport(t){let i,n=this,o=t._xhr=new XMLHttpRequest;if(this._onBeforeUploadItem(t),"number"!=typeof t._file.size)throw new TypeError("The file specified is no longer valid");if(this.options.disableMultipart)i=this.options.formatDataFunction(t);else{i=new FormData,this._onBuildItemForm(t,i);const s=()=>i.append(t.alias,t._file,t.file.name);this.options.parametersBeforeFiles||s(),void 0!==this.options.additionalParameter&&Object.keys(this.options.additionalParameter).forEach(d=>{let O=this.options.additionalParameter[d];"string"==typeof O&&O.indexOf("{{file_name}}")>=0&&(O=O.replace("{{file_name}}",t.file.name)),i.append(d,O)}),this.options.parametersBeforeFiles&&s()}if(o.upload.onprogress=s=>{let d=Math.round(s.lengthComputable?100*s.loaded/s.total:0);this._onProgressItem(t,d)},o.onload=()=>{let s=this._parseHeaders(o.getAllResponseHeaders()),d=this._transformResponse(o.response,s);this["_on"+(this._isSuccessCode(o.status)?"Success":"Error")+"Item"](t,d,o.status,s),this._onCompleteItem(t,d,o.status,s)},o.onerror=()=>{let s=this._parseHeaders(o.getAllResponseHeaders()),d=this._transformResponse(o.response,s);this._onErrorItem(t,d,o.status,s),this._onCompleteItem(t,d,o.status,s)},o.onabort=()=>{let s=this._parseHeaders(o.getAllResponseHeaders()),d=this._transformResponse(o.response,s);this._onCancelItem(t,d,o.status,s),this._onCompleteItem(t,d,o.status,s)},o.open(t.method,t.url,!0),o.withCredentials=t.withCredentials,this.options.headers)for(let s of this.options.headers)o.setRequestHeader(s.name,s.value);if(t.headers.length)for(let s of t.headers)o.setRequestHeader(s.name,s.value);this.authToken&&o.setRequestHeader(this.authTokenHeader,this.authToken),o.onreadystatechange=function(){o.readyState==XMLHttpRequest.DONE&&n.response.emit(o.responseText)},this.options.formatDataFunctionIsAsync?i.then(s=>o.send(JSON.stringify(s))):o.send(i),this._render()}_getTotalProgress(t=0){if(this.options.removeAfterUpload)return t;let n=this.getNotUploadedItems().length,i=100/this.queue.length;return Math.round((n?this.queue.length-n:this.queue.length)*i+t*i/100)}_getFilters(t){if(!t)return this.options.filters;if(Array.isArray(t))return t;if("string"==typeof t){let n=t.match(/[^\s,]+/g);return this.options.filters.filter(o=>-1!==n.indexOf(o.name))}return this.options.filters}_render(){}_queueLimitFilter(){return void 0===this.options.queueLimit||this.queue.length<this.options.queueLimit}_isValidFile(t,n,o){return this._failFilterIndex=-1,!n.length||n.every(i=>(this._failFilterIndex++,i.fn.call(this,t,o)))}_isSuccessCode(t){return t>=200&&t<300||304===t}_transformResponse(t,n){return t}_parseHeaders(t){let o,i,s,n={};return t&&t.split("\n").map(d=>{s=d.indexOf(":"),o=d.slice(0,s).trim().toLowerCase(),i=d.slice(s+1).trim(),o&&(n[o]=n[o]?n[o]+", "+i:i)}),n}_onWhenAddingFileFailed(t,n,o){this.onWhenAddingFileFailed(t,n,o)}_onAfterAddingFile(t){this.onAfterAddingFile(t)}_onAfterAddingAll(t){this.onAfterAddingAll(t)}_onBeforeUploadItem(t){t._onBeforeUpload(),this.onBeforeUploadItem(t)}_onBuildItemForm(t,n){t._onBuildForm(n),this.onBuildItemForm(t,n)}_onProgressItem(t,n){let o=this._getTotalProgress(n);this.progress=o,t._onProgress(n),this.onProgressItem(t,n),this.onProgressAll(o),this._render()}_onSuccessItem(t,n,o,i){t._onSuccess(n,o,i),this.onSuccessItem(t,n,o,i)}_onCancelItem(t,n,o,i){t._onCancel(n,o,i),this.onCancelItem(t,n,o,i)}}let P=(()=>{class a{constructor(n){this.onFileSelected=new e.EventEmitter,this.element=n}getOptions(){return this.uploader.options}getFilters(){return{}}isEmptyAfterSelection(){return!!this.element.nativeElement.attributes.multiple}onChange(){let n=this.element.nativeElement.files,o=this.getOptions(),i=this.getFilters();this.uploader.addToQueue(n,o,i),this.onFileSelected.emit(n),this.isEmptyAfterSelection()&&(this.element.nativeElement.value="")}}return a.\u0275fac=function(n){return new(n||a)(e.\u0275\u0275directiveInject(e.ElementRef))},a.\u0275dir=e.\u0275\u0275defineDirective({type:a,selectors:[["","ng2FileSelect",""]],hostBindings:function(n,o){1&n&&e.\u0275\u0275listener("change",function(){return o.onChange()})},inputs:{uploader:"uploader"},outputs:{onFileSelected:"onFileSelected"}}),a})(),I=(()=>{class a{constructor(n){this.fileOver=new e.EventEmitter,this.onFileDrop=new e.EventEmitter,this.element=n}getOptions(){return this.uploader.options}getFilters(){return{}}onDrop(n){let o=this._getTransfer(n);if(!o)return;let i=this.getOptions(),s=this.getFilters();this._preventAndStop(n),this.uploader.addToQueue(o.files,i,s),this.fileOver.emit(!1),this.onFileDrop.emit(o.files)}onDragOver(n){let o=this._getTransfer(n);this._haveFiles(o.types)&&(o.dropEffect="copy",this._preventAndStop(n),this.fileOver.emit(!0))}onDragLeave(n){this.element&&n.currentTarget===this.element[0]||(this._preventAndStop(n),this.fileOver.emit(!1))}_getTransfer(n){return n.dataTransfer?n.dataTransfer:n.originalEvent.dataTransfer}_preventAndStop(n){n.preventDefault(),n.stopPropagation()}_haveFiles(n){return!!n&&(n.indexOf?-1!==n.indexOf("Files"):!!n.contains&&n.contains("Files"))}}return a.\u0275fac=function(n){return new(n||a)(e.\u0275\u0275directiveInject(e.ElementRef))},a.\u0275dir=e.\u0275\u0275defineDirective({type:a,selectors:[["","ng2FileDrop",""]],hostBindings:function(n,o){1&n&&e.\u0275\u0275listener("drop",function(s){return o.onDrop(s)})("dragover",function(s){return o.onDragOver(s)})("dragleave",function(s){return o.onDragLeave(s)})},inputs:{uploader:"uploader"},outputs:{fileOver:"fileOver",onFileDrop:"onFileDrop"}}),a})(),A=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.\u0275\u0275defineNgModule({type:a}),a.\u0275inj=e.\u0275\u0275defineInjector({imports:[h.ez]}),a})()}}]);