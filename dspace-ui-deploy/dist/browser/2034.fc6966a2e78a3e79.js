"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[2034],{29876:(L,s,o)=>{o.r(s),o.d(s,{MetadataRepresentationListComponent:()=>h});var p=o(85659),e=o(98678),_=o(35103),c=o(87657),d=o(22985),m=o(52153),g=o(41966),f=o(96342);function u(n,a){1&n&&e.\u0275\u0275element(0,"ds-metadata-representation-loader",6),2&n&&e.\u0275\u0275property("mdRepresentation",a.$implicit)}function C(n,a){1&n&&(e.\u0275\u0275element(0,"ds-themed-loading",7),e.\u0275\u0275pipe(1,"translate")),2&n&&e.\u0275\u0275propertyInterpolate("message",e.\u0275\u0275pipeBind1(1,1,"loading.default"))}const l=function(n){return{amount:n}};function v(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",11)(1,"button",12),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(4);return e.\u0275\u0275resetView(r.increase())}),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext(4);e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(3,1,"item.page.related-items.view-more",e.\u0275\u0275pureFunction1(4,l,t.total-t.objects.length*t.incrementBy<t.incrementBy?t.total-t.objects.length*t.incrementBy:t.incrementBy)))}}function M(n,a){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",13)(1,"button",12),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext(4);return e.\u0275\u0275resetView(r.decrease())}),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()()}if(2&n){const t=e.\u0275\u0275nextContext(2).ngVar;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind2(3,1,"item.page.related-items.view-less",e.\u0275\u0275pureFunction1(4,l,null==t?null:t.length)))}}function E(n,a){if(1&n&&(e.\u0275\u0275elementStart(0,"div",8),e.\u0275\u0275template(1,v,4,6,"div",9),e.\u0275\u0275template(2,M,4,6,"div",10),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext(3);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.objects.length*t.incrementBy<t.total),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",t.objects.length>1)}}function x(n,a){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,u,1,1,"ds-metadata-representation-loader",3),e.\u0275\u0275template(2,C,2,3,"ds-themed-loading",4),e.\u0275\u0275template(3,E,3,2,"div",5),e.\u0275\u0275elementContainerEnd()),2&n){const t=a.ngVar,i=e.\u0275\u0275nextContext().index,r=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",t),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i+1===r.objects.length&&i>0&&(!t||0===(null==t?null:t.length))),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",i+1===r.objects.length&&(null==t?null:t.length)>0)}}function R(n,a){if(1&n&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,x,4,3,"ng-container",2),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementContainerEnd()),2&n){const t=a.$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngVar",e.\u0275\u0275pipeBind1(2,1,t))}}let h=(()=>{class n extends p.MetadataRepresentationListComponent{}return n.\u0275fac=function(){let a;return function(i){return(a||(a=e.\u0275\u0275getInheritedFactory(n)))(i||n)}}(),n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-metadata-representation-list"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:2,vars:2,consts:[[3,"label"],[4,"ngFor","ngForOf"],[4,"ngVar"],[3,"mdRepresentation",4,"ngFor","ngForOf"],[3,"message",4,"ngIf"],["class","d-inline-block w-100 mt-2",4,"ngIf"],[3,"mdRepresentation"],[3,"message"],[1,"d-inline-block","w-100","mt-2"],["class","float-left",4,"ngIf"],["class","float-right",4,"ngIf"],[1,"float-left"],[1,"btn","btn-link","btn-link-inline",3,"click"],[1,"float-right"]],template:function(t,i){1&t&&(e.\u0275\u0275elementStart(0,"ds-metadata-field-wrapper",0),e.\u0275\u0275template(1,R,3,3,"ng-container",1),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("label",i.label),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",i.objects))},dependencies:[_.sg,_.O5,c.Z,d.G,m.n,g.g,_.Ov,f.X$],encapsulation:2}),n})()}}]);