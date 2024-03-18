var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=9394,exports.ids=[9394],exports.modules={84822:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LogoutPageModule:()=>LogoutPageModule});var common=__webpack_require__(65159),shared_module=__webpack_require__(47013),router=__webpack_require__(16088),authenticated_guard=__webpack_require__(15329),themed_component=__webpack_require__(56787),core=__webpack_require__(86209);function ThemedLogoutPageComponent_ng_template_0_Template(rf,ctx){}__name(ThemedLogoutPageComponent_ng_template_0_Template,"ThemedLogoutPageComponent_ng_template_0_Template");class ThemedLogoutPageComponent extends themed_component.F{getComponentName(){return"LogoutPageComponent"}importThemedComponent(themeName){return __webpack_require__(92535)(`./${themeName}/app/logout-page/logout-page.component`)}importUnthemedComponent(){return __webpack_require__.e(1268).then(__webpack_require__.bind(__webpack_require__,21268))}}__name(ThemedLogoutPageComponent,"ThemedLogoutPageComponent"),ThemedLogoutPageComponent.\u0275fac=function(){let \u0275ThemedLogoutPageComponent_BaseFactory;return __name(function(t){return(\u0275ThemedLogoutPageComponent_BaseFactory||(\u0275ThemedLogoutPageComponent_BaseFactory=core.n5z(ThemedLogoutPageComponent)))(t||ThemedLogoutPageComponent)},"ThemedLogoutPageComponent_Factory")}(),ThemedLogoutPageComponent.\u0275cmp=core.Xpm({type:ThemedLogoutPageComponent,selectors:[["ds-themed-logout-page"]],features:[core.qOj],ngContentSelectors:["*"],decls:5,vars:0,consts:[["vcr",""],["content",""]],template:__name(function(rf,ctx){1&rf&&(core.F$t(),core.YNc(0,ThemedLogoutPageComponent_ng_template_0_Template,0,0,"ng-template",null,0,core.W1O),core.TgZ(2,"div",null,1),core.Hsn(4),core.qZA())},"ThemedLogoutPageComponent_Template"),encapsulation:2});class LogoutPageRoutingModule{}__name(LogoutPageRoutingModule,"LogoutPageRoutingModule"),LogoutPageRoutingModule.\u0275fac=__name(function(t){return new(t||LogoutPageRoutingModule)},"LogoutPageRoutingModule_Factory"),LogoutPageRoutingModule.\u0275mod=core.oAB({type:LogoutPageRoutingModule}),LogoutPageRoutingModule.\u0275inj=core.cJS({imports:[router.Bz.forChild([{canActivate:[authenticated_guard.J],path:"",component:ThemedLogoutPageComponent,data:{title:"logout.title"}}])]});class LogoutPageModule{}__name(LogoutPageModule,"LogoutPageModule"),LogoutPageModule.\u0275fac=__name(function(t){return new(t||LogoutPageModule)},"LogoutPageModule_Factory"),LogoutPageModule.\u0275mod=core.oAB({type:LogoutPageModule}),LogoutPageModule.\u0275inj=core.cJS({imports:[LogoutPageRoutingModule,common.ez,shared_module.m]})},92535:(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./custom/app/logout-page/logout-page.component":[44822,4822]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then(()=>__webpack_require__(id))}__name(webpackAsyncContext,"webpackAsyncContext"),webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id=92535,module.exports=webpackAsyncContext}};