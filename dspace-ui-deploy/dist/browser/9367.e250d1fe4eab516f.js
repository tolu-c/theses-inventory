"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[9367],{9367:(C,i,r)=>{r.r(i),r.d(i,{SearchFiltersComponent:()=>v});var _=r(13201),o=r(55963),p=r(27496),e=r(98678),l=r(35103),d=r(67522),m=r(58557),h=r(96342);function f(t,s){if(1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275element(1,"ds-search-filter",4),e.\u0275\u0275elementEnd()),2&t){const a=s.$implicit,n=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(1),e.\u0275\u0275property("filter",a)("inPlaceSearch",n.inPlaceSearch)("refreshFilters",n.refreshFilters)}}function u(t,s){if(1&t&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,f,2,3,"div",3),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementEnd()),2&t){const a=e.\u0275\u0275nextContext();let n;e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",null==(n=e.\u0275\u0275pipeBind1(2,2,a.filters))?null:n.payload)("ngForTrackBy",a.trackUpdate)}}const E=function(t){return[t]};let v=(()=>{class t extends _.SearchFiltersComponent{}return t.\u0275fac=function(){let s;return function(n){return(s||(s=e.\u0275\u0275getInheritedFactory(t)))(n||t)}}(),t.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["ds-search-filters"]],features:[e.\u0275\u0275ProvidersFeature([{provide:o.SEARCH_CONFIG_SERVICE,useClass:p.U}]),e.\u0275\u0275InheritDefinitionFeature],decls:10,vars:15,consts:[[4,"ngIf"],["queryParamsHandling","merge","role","button",1,"btn","btn-primary",3,"routerLink","queryParams"],[1,"fas","fa-undo"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"filter","inPlaceSearch","refreshFilters"]],template:function(a,n){if(1&a&&(e.\u0275\u0275elementStart(0,"h3"),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(3,u,3,4,"div",0),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275elementStart(5,"a",1),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275element(7,"i",2),e.\u0275\u0275text(8),e.\u0275\u0275pipe(9,"translate"),e.\u0275\u0275elementEnd()),2&a){let c;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(2,5,"search.filters.head")),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",null==(c=e.\u0275\u0275pipeBind1(4,7,n.filters))?null:c.hasSucceeded),e.\u0275\u0275advance(2),e.\u0275\u0275property("routerLink",e.\u0275\u0275pureFunction1(13,E,n.searchLink))("queryParams",e.\u0275\u0275pipeBind1(6,9,n.clearParams)),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(9,11,"search.filters.reset"),"")}},dependencies:[l.sg,l.O5,d.rH,m.c,l.Ov,h.X$]}),t})()}}]);