"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[6005],{96005:(L,o,_)=>{_.r(o),_.d(o,{MediaViewerComponent:()=>D});var r=_(21495),e=_(98678),m=_(35103),d=_(20196),p=_(22241),l=_(87657),c=_(56790),s=_(41966),g=_(32476),v=_(96342);function f(n,a){1&n&&(e.\u0275\u0275element(0,"ds-themed-loading",4),e.\u0275\u0275pipe(1,"translate")),2&n&&(e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,2,"loading.default")),e.\u0275\u0275property("showMessage",!1))}function u(n,a){if(1&n&&(e.\u0275\u0275element(0,"ds-themed-media-viewer-video",9),e.\u0275\u0275pipe(1,"async")),2&n){const t=e.\u0275\u0275nextContext(5).ngVar,i=e.\u0275\u0275nextContext();e.\u0275\u0275property("medias",t)("captions",e.\u0275\u0275pipeBind1(1,2,i.captions$))}}function C(n,a){if(1&n&&e.\u0275\u0275element(0,"ds-themed-media-viewer-image",10),2&n){const t=e.\u0275\u0275nextContext(5).ngVar;e.\u0275\u0275property("images",t)}}function x(n,a){1&n&&e.\u0275\u0275elementContainer(0)}function h(n,a){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,u,2,4,"ds-themed-media-viewer-video",7),e.\u0275\u0275template(2,C,1,1,"ds-themed-media-viewer-image",8),e.\u0275\u0275template(3,x,1,0,"ng-container",6),e.\u0275\u0275elementContainerEnd()),2&n){const t=a.ngVar,i=e.\u0275\u0275nextContext().ngVar;e.\u0275\u0275nextContext(3);const P=e.\u0275\u0275reference(4);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t||i)("ngIfElse",P)}}function M(n,a){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,h,4,4,"ng-container",0),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext(3).ngVar,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngVar",i.mediaOptions.image&&"image"===(null==t[0]?null:t[0].format))}}const w=function(){return["audio","video"]};function E(n,a){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,M,2,1,"ng-container",0),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext(2).ngVar,i=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngVar",i.mediaOptions.video&&e.\u0275\u0275pureFunction0(1,w).includes(null==t[0]?null:t[0].format))}}function I(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"div",5),e.\u0275\u0275template(1,E,2,2,"ng-container",6),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().ngVar,i=e.\u0275\u0275reference(4);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.length>0)("ngIfElse",i)}}function V(n,a){if(1&n&&(e.\u0275\u0275element(0,"ds-themed-media-viewer-image",13),e.\u0275\u0275pipe(1,"async")),2&n){const t=e.\u0275\u0275nextContext(3);let i;e.\u0275\u0275property("image",(null==(i=e.\u0275\u0275pipeBind1(1,2,t.thumbnailsRD$))||null==i.payload||null==i.payload.page[0]?null:i.payload.page[0]._links.content.href)||t.thumbnailPlaceholder)("preview",!1)}}function y(n,a){if(1&n&&(e.\u0275\u0275element(0,"ds-thumbnail",14),e.\u0275\u0275pipe(1,"async")),2&n){const t=e.\u0275\u0275nextContext(3);let i;e.\u0275\u0275property("thumbnail",null==(i=e.\u0275\u0275pipeBind1(1,1,t.thumbnailsRD$))||null==i.payload?null:i.payload.page[0])}}function O(n,a){if(1&n&&(e.\u0275\u0275template(0,V,2,4,"ds-themed-media-viewer-image",11),e.\u0275\u0275template(1,y,2,3,"ds-thumbnail",12)),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("ngIf",t.mediaOptions.image&&t.mediaOptions.video),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!(t.mediaOptions.image&&t.mediaOptions.video))}}function T(n,a){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,f,2,4,"ds-themed-loading",1),e.\u0275\u0275template(2,I,2,2,"div",2),e.\u0275\u0275template(3,O,2,2,"ng-template",null,3,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementContainerEnd()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.isLoading),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!t.isLoading)}}let D=(()=>{class n extends r.MediaViewerComponent{}return n.\u0275fac=function(){let a;return function(i){return(a||(a=e.\u0275\u0275getInheritedFactory(n)))(i||n)}}(),n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-media-viewer"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:3,consts:[[4,"ngVar"],[3,"message","showMessage",4,"ngIf"],["class","media-viewer",4,"ngIf"],["showThumbnail",""],[3,"message","showMessage"],[1,"media-viewer"],[4,"ngIf","ngIfElse"],[3,"medias","captions",4,"ngIf"],[3,"images",4,"ngIf"],[3,"medias","captions"],[3,"images"],[3,"image","preview",4,"ngIf"],[3,"thumbnail",4,"ngIf"],[3,"image","preview"],[3,"thumbnail"]],template:function(t,i){1&t&&(e.\u0275\u0275template(0,T,5,2,"ng-container",0),e.\u0275\u0275pipe(1,"async")),2&t&&e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(1,1,i.mediaList$))},dependencies:[m.O5,d.Z,p._,l.Z,c.ThumbnailComponent,s.g,g.ThumbnailComponent,m.Ov,v.X$]}),n})()}}]);