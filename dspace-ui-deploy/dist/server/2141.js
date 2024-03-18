"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=2141,exports.ids=[2141],exports.modules={12141:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmailRequestCopyComponent:()=>EmailRequestCopyComponent});var core=__webpack_require__(86209);class RequestCopyEmail{constructor(subject,message){this.subject=subject,this.message=message}}__name(RequestCopyEmail,"RequestCopyEmail");var common=__webpack_require__(65159),fesm2020_forms=__webpack_require__(32189),ngx_translate_core=__webpack_require__(4330);function EmailRequestCopyComponent_div_6_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",11),core._uU(1),core.ALo(2,"translate"),core.qZA()),2&rf&&(core.xp6(1),core.hij(" ",core.lcZ(2,1,"grant-deny-request-copy.email.subject.empty")," "))}__name(EmailRequestCopyComponent_div_6_Template,"EmailRequestCopyComponent_div_6_Template");const _c0=__name(function(a0){return{"is-invalid":a0}},"_c0");class EmailRequestCopyComponent{constructor(location){this.location=location,this.send=new core.vpe}submit(){this.send.emit(new RequestCopyEmail(this.subject,this.message))}return(){this.location.back()}}__name(EmailRequestCopyComponent,"EmailRequestCopyComponent"),EmailRequestCopyComponent.\u0275fac=__name(function(t){return new(t||EmailRequestCopyComponent)(core.Y36(common.Ye))},"EmailRequestCopyComponent_Factory"),EmailRequestCopyComponent.\u0275cmp=core.Xpm({type:EmailRequestCopyComponent,selectors:[["ds-email-request-copy"]],inputs:{subject:"subject",message:"message"},outputs:{send:"send"},ngContentSelectors:["*"],decls:24,vars:25,consts:[[1,"form-group"],["for","subject"],["type","text","id","subject","name","subject",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["class","invalid-feedback",4,"ngIf"],["for","message"],["id","message","rows","8","name","message",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","flex-row-reverse"],[1,"btn","btn-primary",3,"disabled","title","click"],[1,"fas","fa-envelope"],[1,"btn","btn-outline-secondary","mr-1",3,"title","click"],[1,"fas","fa-arrow-left"],[1,"invalid-feedback"]],template:__name(function(rf,ctx){1&rf&&(core.F$t(),core.TgZ(0,"form")(1,"div",0)(2,"label",1),core._uU(3),core.ALo(4,"translate"),core.qZA(),core.TgZ(5,"input",2),core.NdJ("ngModelChange",__name(function($event){return ctx.subject=$event},"EmailRequestCopyComponent_Template_input_ngModelChange_5_listener")),core.qZA(),core.YNc(6,EmailRequestCopyComponent_div_6_Template,3,3,"div",3),core.qZA(),core.TgZ(7,"div",0)(8,"label",4),core._uU(9),core.ALo(10,"translate"),core.qZA(),core.TgZ(11,"textarea",5),core.NdJ("ngModelChange",__name(function($event){return ctx.message=$event},"EmailRequestCopyComponent_Template_textarea_ngModelChange_11_listener")),core.qZA()(),core.Hsn(12),core.TgZ(13,"div",6)(14,"button",7),core.NdJ("click",__name(function(){return ctx.submit()},"EmailRequestCopyComponent_Template_button_click_14_listener")),core.ALo(15,"translate"),core._UZ(16,"i",8),core._uU(17),core.ALo(18,"translate"),core.qZA(),core.TgZ(19,"button",9),core.NdJ("click",__name(function(){return ctx.return()},"EmailRequestCopyComponent_Template_button_click_19_listener")),core.ALo(20,"translate"),core._UZ(21,"i",10),core._uU(22),core.ALo(23,"translate"),core.qZA()()()),2&rf&&(core.xp6(3),core.Oqu(core.lcZ(4,11,"grant-deny-request-copy.email.subject")),core.xp6(2),core.Q6J("ngClass",core.VKq(23,_c0,!ctx.subject||0===ctx.subject.length))("ngModel",ctx.subject),core.xp6(1),core.Q6J("ngIf",!ctx.subject||0===ctx.subject.length),core.xp6(3),core.Oqu(core.lcZ(10,13,"grant-deny-request-copy.email.message")),core.xp6(2),core.Q6J("ngModel",ctx.message),core.xp6(3),core.s9C("title",core.lcZ(15,15,"grant-deny-request-copy.email.send")),core.Q6J("disabled",!ctx.subject||0===ctx.subject.length),core.xp6(3),core.hij(" ",core.lcZ(18,17,"grant-deny-request-copy.email.send")," "),core.xp6(2),core.s9C("title",core.lcZ(20,19,"grant-deny-request-copy.email.back")),core.xp6(3),core.hij(" ",core.lcZ(23,21,"grant-deny-request-copy.email.back")," "))},"EmailRequestCopyComponent_Template"),dependencies:[common.mk,common.O5,fesm2020_forms._Y,fesm2020_forms.Fj,fesm2020_forms.JJ,fesm2020_forms.JL,fesm2020_forms.On,fesm2020_forms.F,ngx_translate_core.X$]})}};