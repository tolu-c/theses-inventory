"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[1943],{81943:(X,_,o)=>{o.r(_),o.d(_,{ConfigurationSearchPageComponent:()=>j});var p=o(83143),l=o(55963),d=o(27496),h=o(30624),e=o(98678),c=o(35103),m=o(51864),g=o(14512),u=o(20189),f=o(19350),C=o(76817),S=o(4554),x=o(96342);function P(n,r){}function O(n,r){1&n&&e.\u0275\u0275template(0,P,0,0,"ng-template")}function w(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",6)(1,"div",7)(2,"div",8),e.\u0275\u0275template(3,O,1,0,null,9),e.\u0275\u0275elementEnd()()()),2&n){e.\u0275\u0275nextContext();const t=e.\u0275\u0275reference(11);e.\u0275\u0275advance(3),e.\u0275\u0275property("ngTemplateOutlet",t)}}function v(n,r){}function b(n,r){1&n&&e.\u0275\u0275template(0,v,0,0,"ng-template")}function y(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,b,1,0,null,9),e.\u0275\u0275elementEnd()),2&n){e.\u0275\u0275nextContext();const t=e.\u0275\u0275reference(7);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t)}}function E(n,r){}function M(n,r){1&n&&e.\u0275\u0275template(0,E,0,0,"ng-template")}function T(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"ds-page-with-sidebar",10),e.\u0275\u0275template(1,M,1,0,null,9),e.\u0275\u0275elementEnd()),2&n){e.\u0275\u0275nextContext();const t=e.\u0275\u0275reference(9),a=e.\u0275\u0275reference(7);e.\u0275\u0275property("id","search-page")("sidebarContent",t),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",a)}}function B(n,r){}function L(n,r){1&n&&e.\u0275\u0275template(0,B,0,0,"ng-template")}function V(n,r){if(1&n&&(e.\u0275\u0275elementStart(0,"div",8),e.\u0275\u0275template(1,L,1,0,null,9),e.\u0275\u0275projection(2),e.\u0275\u0275elementEnd()),2&n){e.\u0275\u0275nextContext(2);const t=e.\u0275\u0275reference(11);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t)}}function D(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",7),e.\u0275\u0275template(1,V,3,1,"div",11),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementStart(3,"div",12)(4,"div",13),e.\u0275\u0275element(5,"ds-view-mode-switch",14),e.\u0275\u0275elementStart(6,"button",15),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(i.openSidebar())}),e.\u0275\u0275element(7,"i",16),e.\u0275\u0275text(8),e.\u0275\u0275pipe(9,"translate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"ds-themed-search-results",17),e.\u0275\u0275listener("contentChange",function(i){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.onContentChange(i))})("deselectObject",function(i){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.deselectObject.emit(i))})("selectObject",function(i){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(s.selectObject.emit(i))}),e.\u0275\u0275pipe(11,"async"),e.\u0275\u0275pipe(12,"async"),e.\u0275\u0275pipe(13,"async"),e.\u0275\u0275pipe(14,"async"),e.\u0275\u0275elementEnd()()()}if(2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(2,14,t.isXsOrSm$)),e.\u0275\u0275advance(4),e.\u0275\u0275property("viewModeList",t.viewModeList)("inPlaceSearch",t.inPlaceSearch),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(9,16,"search.sidebar.open")," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("searchResults",e.\u0275\u0275pipeBind1(11,18,t.resultsRD$))("searchConfig",e.\u0275\u0275pipeBind1(12,20,t.searchOptions$))("configuration",e.\u0275\u0275pipeBind1(13,22,t.currentConfiguration$))("disableHeader",!t.searchEnabled)("linkType",t.linkType)("context",e.\u0275\u0275pipeBind1(14,24,t.currentContext$))("selectable",t.selectable)("selectionConfig",t.selectionConfig)("showCsvExport",t.showCsvExport)("showThumbnails",t.showThumbnails)}}function I(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"ds-themed-search-sidebar",20),e.\u0275\u0275listener("changeConfiguration",function(i){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(s.changeContext(i.context))})("changeViewMode",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.changeViewMode())}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(2);let a;e.\u0275\u0275property("configurationList",t.configurationList)("configuration",e.\u0275\u0275pipeBind1(1,12,t.currentConfiguration$))("currentScope",e.\u0275\u0275pipeBind1(2,14,t.currentScope$))("filters",t.filtersRD$.asObservable())("refreshFilters",t.refreshFilters)("resultCount",null==(a=e.\u0275\u0275pipeBind1(3,16,t.resultsRD$))||null==a.payload?null:a.payload.totalElements)("searchOptions",e.\u0275\u0275pipeBind1(4,18,t.searchOptions$))("sortOptionsList",e.\u0275\u0275pipeBind1(5,20,t.sortOptionsList$))("currentSortOption",e.\u0275\u0275pipeBind1(6,22,t.currentSortOptions$))("inPlaceSearch",t.inPlaceSearch)("viewModeList",t.viewModeList)("showViewModes",t.showViewModes)}}function $(n,r){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"ds-themed-search-sidebar",21),e.\u0275\u0275listener("toggleSidebar",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.closeSidebar())})("changeConfiguration",function(i){e.\u0275\u0275restoreView(t);const s=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(s.changeContext(i.context))})("changeViewMode",function(){e.\u0275\u0275restoreView(t);const i=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(i.changeViewMode())}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd()}if(2&n){const t=e.\u0275\u0275nextContext(2);let a;e.\u0275\u0275property("configurationList",t.configurationList)("configuration",e.\u0275\u0275pipeBind1(1,11,t.currentConfiguration$))("currentScope",e.\u0275\u0275pipeBind1(2,13,t.currentScope$))("filters",t.filtersRD$.asObservable())("refreshFilters",t.refreshFilters)("resultCount",null==(a=e.\u0275\u0275pipeBind1(3,15,t.resultsRD$))?null:a.payload.totalElements)("searchOptions",e.\u0275\u0275pipeBind1(4,17,t.searchOptions$))("sortOptionsList",e.\u0275\u0275pipeBind1(5,19,t.sortOptionsList$))("currentSortOption",e.\u0275\u0275pipeBind1(6,21,t.currentSortOptions$))("viewModeList",t.viewModeList)("showViewModes",t.showViewModes)}}function R(n,r){if(1&n&&(e.\u0275\u0275template(0,I,7,24,"ds-themed-search-sidebar",18),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275template(2,$,7,23,"ds-themed-search-sidebar",19),e.\u0275\u0275pipe(3,"async")),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(1,2,t.isXsOrSm$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(3,4,t.isXsOrSm$))}}function U(n,r){if(1&n&&(e.\u0275\u0275element(0,"ds-themed-search-form",26),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275pipe(3,"translate")),2&n){const t=e.\u0275\u0275nextContext(2);let a,i;e.\u0275\u0275property("query",null==(a=e.\u0275\u0275pipeBind1(1,6,t.searchOptions$))?null:a.query)("scope",null==(i=e.\u0275\u0275pipeBind1(2,8,t.searchOptions$))?null:i.scope)("currentUrl",t.searchLink)("showScopeSelector",t.showScopeSelector)("inPlaceSearch",t.inPlaceSearch)("searchPlaceholder",e.\u0275\u0275pipeBind1(3,10,t.searchFormPlaceholder))}}function F(n,r){if(1&n&&e.\u0275\u0275element(0,"ds-search-labels",27),2&n){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("inPlaceSearch",t.inPlaceSearch)}}function A(n,r){if(1&n&&(e.\u0275\u0275template(0,U,4,12,"ds-themed-search-form",22),e.\u0275\u0275elementStart(1,"div",23)(2,"div",24),e.\u0275\u0275template(3,F,1,1,"ds-search-labels",25),e.\u0275\u0275elementEnd()()),2&n){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngIf",t.searchEnabled),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",t.searchEnabled)}}const K=[[["","additionalSearchOptions",""]]],W=["[additionalSearchOptions]"];let j=(()=>{class n extends h.ConfigurationSearchPageComponent{}return n.\u0275fac=function(){let r;return function(a){return(r||(r=e.\u0275\u0275getInheritedFactory(n)))(a||n)}}(),n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-configuration-search-page"]],features:[e.\u0275\u0275ProvidersFeature([{provide:l.SEARCH_CONFIG_SERVICE,useClass:d.U}]),e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:W,decls:12,vars:9,consts:[["class","container",4,"ngIf"],[4,"ngIf"],[3,"id","sidebarContent",4,"ngIf"],["searchContent",""],["sidebarContent",""],["searchForm",""],[1,"container"],[1,"row"],[1,"col-12"],[4,"ngTemplateOutlet"],[3,"id","sidebarContent"],["class","col-12",4,"ngIf"],["id","search-content",1,"col-12"],[1,"d-block","d-md-none","search-controls","clearfix"],[3,"viewModeList","inPlaceSearch"],["aria-controls","#search-body",1,"btn","btn-outline-primary","float-right","open-sidebar",3,"click"],[1,"fas","fa-sliders"],[3,"searchResults","searchConfig","configuration","disableHeader","linkType","context","selectable","selectionConfig","showCsvExport","showThumbnails","contentChange","deselectObject","selectObject"],["id","search-sidebar",3,"configurationList","configuration","currentScope","filters","refreshFilters","resultCount","searchOptions","sortOptionsList","currentSortOption","inPlaceSearch","viewModeList","showViewModes","changeConfiguration","changeViewMode",4,"ngIf"],["id","search-sidebar-sm",3,"configurationList","configuration","currentScope","filters","refreshFilters","resultCount","searchOptions","sortOptionsList","currentSortOption","viewModeList","showViewModes","toggleSidebar","changeConfiguration","changeViewMode",4,"ngIf"],["id","search-sidebar",3,"configurationList","configuration","currentScope","filters","refreshFilters","resultCount","searchOptions","sortOptionsList","currentSortOption","inPlaceSearch","viewModeList","showViewModes","changeConfiguration","changeViewMode"],["id","search-sidebar-sm",3,"configurationList","configuration","currentScope","filters","refreshFilters","resultCount","searchOptions","sortOptionsList","currentSortOption","viewModeList","showViewModes","toggleSidebar","changeConfiguration","changeViewMode"],["id","search-form",3,"query","scope","currentUrl","showScopeSelector","inPlaceSearch","searchPlaceholder",4,"ngIf"],[1,"row","mb-3","mb-md-1"],[1,"labels","col-sm-9"],[3,"inPlaceSearch",4,"ngIf"],["id","search-form",3,"query","scope","currentUrl","showScopeSelector","inPlaceSearch","searchPlaceholder"],[3,"inPlaceSearch"]],template:function(t,a){1&t&&(e.\u0275\u0275projectionDef(K),e.\u0275\u0275template(0,w,4,1,"div",0),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275template(2,y,2,1,"div",1),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275template(4,T,2,3,"ds-page-with-sidebar",2),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275template(6,D,15,26,"ng-template",null,3,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(8,R,4,6,"ng-template",null,4,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(10,A,4,2,"ng-template",null,5,e.\u0275\u0275templateRefExtractor)),2&t&&(e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(1,3,a.isXsOrSm$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!a.showSidebar&&e.\u0275\u0275pipeBind1(3,5,a.initialized$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",a.showSidebar&&e.\u0275\u0275pipeBind1(5,7,a.initialized$)))},dependencies:[c.O5,c.tP,m.p,g.R,u.$,f.B,C.g,S.H,c.Ov,x.X$],styles:["@media (max-width: 991.98px){.container[_ngcontent-%COMP%]{width:100%;max-width:none}}  .search-controls{margin-bottom:var(--bs-spacer)}"],data:{animation:[p.z]},changeDetection:0}),n})()}}]);