(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[3326],{18391:(M,O,n)=>{"use strict";n.d(O,{M:()=>P});var e=n(48358),c=n(45608),h=n(57066),o=n(26176),u=n(81323),r=n(27496),p=n(53374),a=n(98678),C=n(67522),T=n(35103),L=n(96342);const E=function(m){return{default:m}};let P=(()=>{class m{constructor(_,g,x,D){this.searchService=_,this.paginationService=g,this.searchConfigurationService=x,this.router=D}ngOnInit(){this.searchLink=this.getSearchLink(),this.removeParameters=this.getRemoveParams(),this.filterName=this.getFilterName()}getRemoveParams(){return this.appliedFilters.pipe((0,e.U)(_=>{const g=Object.keys(_).find(I=>I===this.key),x=(0,c.Uh)(_[g])?_[g].filter(I=>I!==this.value):null,D=this.paginationService.getPageParam(this.searchConfigurationService.paginationID);return{[g]:(0,c.UE)(x)?x:null,[D]:1}}))}getSearchLink(){return this.inPlaceSearch?(0,o.T)(this.router):this.searchService.getSearchLink()}normalizeFilterValue(_){return _=_.replace(/,authority*$/g,""),(0,p.RD)(_)}getFilterName(){return this.key.startsWith("f.")?this.key.substring(2):this.key}}return m.\u0275fac=function(_){return new(_||m)(a.\u0275\u0275directiveInject(h.o),a.\u0275\u0275directiveInject(u.N),a.\u0275\u0275directiveInject(r.U),a.\u0275\u0275directiveInject(C.F0))},m.\u0275cmp=a.\u0275\u0275defineComponent({type:m,selectors:[["ds-search-label"]],inputs:{key:"key",value:"value",inPlaceSearch:"inPlaceSearch",appliedFilters:"appliedFilters"},decls:7,vars:13,consts:[["queryParamsHandling","merge",1,"badge","badge-primary","mr-1","mb-1",3,"routerLink","queryParams"]],template:function(_,g){1&_&&(a.\u0275\u0275elementStart(0,"a",0),a.\u0275\u0275pipe(1,"async"),a.\u0275\u0275text(2),a.\u0275\u0275pipe(3,"translate"),a.\u0275\u0275pipe(4,"translate"),a.\u0275\u0275elementStart(5,"span"),a.\u0275\u0275text(6," \xd7"),a.\u0275\u0275elementEnd()()),2&_&&(a.\u0275\u0275property("routerLink",g.searchLink)("queryParams",a.\u0275\u0275pipeBind1(1,4,g.removeParameters)),a.\u0275\u0275advance(2),a.\u0275\u0275textInterpolate2(" ",a.\u0275\u0275pipeBind1(3,6,"search.filters.applied."+g.key),": ",a.\u0275\u0275pipeBind2(4,8,"search.filters."+g.filterName+"."+g.value,a.\u0275\u0275pureFunction1(11,E,g.normalizeFilterValue(g.value)))," "))},dependencies:[C.rH,T.Ov,L.X$],encapsulation:2}),m})()},19350:(M,O,n)=>{"use strict";n.d(O,{B:()=>L});var e=n(55963),h=(n(27496),n(48358)),o=n(98678),u=n(67522),r=n(35103),p=n(18391),a=n(44934);function C(E,P){if(1&E&&o.\u0275\u0275element(0,"ds-search-label",3),2&E){const m=P.$implicit,f=o.\u0275\u0275nextContext().$implicit,_=o.\u0275\u0275nextContext();o.\u0275\u0275property("inPlaceSearch",_.inPlaceSearch)("key",f)("value",m)("appliedFilters",_.appliedFilters)}}function T(E,P){if(1&E&&(o.\u0275\u0275elementContainerStart(0),o.\u0275\u0275template(1,C,1,4,"ds-search-label",2),o.\u0275\u0275pipe(2,"async"),o.\u0275\u0275elementContainerEnd()),2&E){const m=P.$implicit,f=o.\u0275\u0275nextContext();o.\u0275\u0275advance(1),o.\u0275\u0275property("ngForOf",o.\u0275\u0275pipeBind1(2,1,f.appliedFilters)[m])}}let L=(()=>{class E{constructor(m,f){this.router=m,this.searchConfigService=f,this.appliedFilters=this.searchConfigService.getCurrentFrontendFilters().pipe((0,h.U)(_=>{const g={};return Object.keys(_).forEach(x=>{g[x]=[..._[x].map(D=>D)]}),g}))}}return E.\u0275fac=function(m){return new(m||E)(o.\u0275\u0275directiveInject(u.F0),o.\u0275\u0275directiveInject(e.SEARCH_CONFIG_SERVICE))},E.\u0275cmp=o.\u0275\u0275defineComponent({type:E,selectors:[["ds-search-labels"]],inputs:{inPlaceSearch:"inPlaceSearch"},decls:4,vars:5,consts:[[1,"labels"],[4,"ngFor","ngForOf"],[3,"inPlaceSearch","key","value","appliedFilters",4,"ngFor","ngForOf"],[3,"inPlaceSearch","key","value","appliedFilters"]],template:function(m,f){1&m&&(o.\u0275\u0275elementStart(0,"div",0),o.\u0275\u0275template(1,T,3,3,"ng-container",1),o.\u0275\u0275pipe(2,"dsObjectKeys"),o.\u0275\u0275pipe(3,"async"),o.\u0275\u0275elementEnd()),2&m&&(o.\u0275\u0275advance(1),o.\u0275\u0275property("ngForOf",o.\u0275\u0275pipeBind1(2,1,o.\u0275\u0275pipeBind1(3,3,f.appliedFilters))))},dependencies:[r.sg,p.M,r.Ov,a.w],styles:["[_nghost-%COMP%]{line-height:1}"]}),E})()},76817:(M,O,n)=>{"use strict";n.d(O,{g:()=>u});var e=n(4682),c=n(98678);function h(r,p){}const o=["*"];let u=(()=>{class r extends e.F{constructor(){super(...arguments),this.inAndOutputNames=["linkType","searchResults","searchConfig","showCsvExport","showThumbnails","sortConfig","viewMode","configuration","disableHeader","selectable","context","hidePaginationDetail","selectionConfig","contentChange","deselectObject","selectObject"],this.contentChange=new c.EventEmitter,this.deselectObject=new c.EventEmitter,this.selectObject=new c.EventEmitter}getComponentName(){return"SearchResultsComponent"}importThemedComponent(a){return n(7403)(`./${a}/app/shared/search/search-results/search-results.component`)}importUnthemedComponent(){return n.e(8517).then(n.bind(n,8517))}}return r.\u0275fac=function(){let p;return function(C){return(p||(p=c.\u0275\u0275getInheritedFactory(r)))(C||r)}}(),r.\u0275cmp=c.\u0275\u0275defineComponent({type:r,selectors:[["ds-themed-search-results"]],inputs:{linkType:"linkType",searchResults:"searchResults",searchConfig:"searchConfig",showCsvExport:"showCsvExport",showThumbnails:"showThumbnails",sortConfig:"sortConfig",viewMode:"viewMode",configuration:"configuration",disableHeader:"disableHeader",selectable:"selectable",context:"context",hidePaginationDetail:"hidePaginationDetail",selectionConfig:"selectionConfig"},outputs:{contentChange:"contentChange",deselectObject:"deselectObject",selectObject:"selectObject"},features:[c.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:o,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(a,C){1&a&&(c.\u0275\u0275projectionDef(),c.\u0275\u0275template(0,h,0,0,"ng-template",null,0,c.\u0275\u0275templateRefExtractor),c.\u0275\u0275elementStart(2,"div",null,1),c.\u0275\u0275projection(4),c.\u0275\u0275elementEnd())},encapsulation:2}),r})()},4554:(M,O,n)=>{"use strict";n.d(O,{H:()=>u});var e=n(98678),c=n(4682);function h(r,p){}const o=["*"];let u=(()=>{class r extends c.F{constructor(){super(...arguments),this.showViewModes=!0,this.toggleSidebar=new e.EventEmitter,this.changeConfiguration=new e.EventEmitter,this.changeViewMode=new e.EventEmitter,this.inAndOutputNames=["configuration","configurationList","currentScope","currentSortOption","resultCount","filters","viewModeList","showViewModes","inPlaceSearch","searchOptions","sortOptionsList","refreshFilters","toggleSidebar","changeConfiguration","changeViewMode"]}getComponentName(){return"SearchSidebarComponent"}importThemedComponent(a){return n(32874)(`./${a}/app/shared/search/search-sidebar/search-sidebar.component`)}importUnthemedComponent(){return n.e(4074).then(n.bind(n,34074))}}return r.\u0275fac=function(){let p;return function(C){return(p||(p=e.\u0275\u0275getInheritedFactory(r)))(C||r)}}(),r.\u0275cmp=e.\u0275\u0275defineComponent({type:r,selectors:[["ds-themed-search-sidebar"]],inputs:{configuration:"configuration",configurationList:"configurationList",currentScope:"currentScope",currentSortOption:"currentSortOption",filters:"filters",resultCount:"resultCount",viewModeList:"viewModeList",showViewModes:"showViewModes",inPlaceSearch:"inPlaceSearch",searchOptions:"searchOptions",sortOptionsList:"sortOptionsList",refreshFilters:"refreshFilters"},outputs:{toggleSidebar:"toggleSidebar",changeConfiguration:"changeConfiguration",changeViewMode:"changeViewMode"},features:[e.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:o,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(a,C){1&a&&(e.\u0275\u0275projectionDef(),e.\u0275\u0275template(0,h,0,0,"ng-template",null,0,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementStart(2,"div",null,1),e.\u0275\u0275projection(4),e.\u0275\u0275elementEnd())},encapsulation:2}),r})()},13326:(M,O,n)=>{"use strict";n.r(O),n.d(O,{SearchComponent:()=>Ce});var e=n(98678),c=n(67522),h=n(35841),o=n(53426),u=n(49887),r=n(21160),p=n(48358),a=n(77007),C=n(3358),T=n(24112),L=n.n(T),E=n(83143),P=n(79849),m=n(8369),f=n(45608),_=n(74997),g=n(55963),x=n(40772),I=(n(27496),n(57066)),A=n(26176),W=n(97462),F=n(10572),w=n(46533),K=n(76774),j=n(15463),V=n(42620),N=n(25584),B=n(35103),X=n(51864),H=n(14512),z=n(20189),Q=n(19350),G=n(76817),J=n(4554),Z=n(96342);function Y(i,d){}function k(i,d){1&i&&e.\u0275\u0275template(0,Y,0,0,"ng-template")}function q(i,d){if(1&i&&(e.\u0275\u0275elementStart(0,"div",6)(1,"div",7)(2,"div",8),e.\u0275\u0275template(3,k,1,0,null,9),e.\u0275\u0275elementEnd()()()),2&i){e.\u0275\u0275nextContext();const t=e.\u0275\u0275reference(11);e.\u0275\u0275advance(3),e.\u0275\u0275property("ngTemplateOutlet",t)}}function ee(i,d){}function te(i,d){1&i&&e.\u0275\u0275template(0,ee,0,0,"ng-template")}function ne(i,d){if(1&i&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,te,1,0,null,9),e.\u0275\u0275elementEnd()),2&i){e.\u0275\u0275nextContext();const t=e.\u0275\u0275reference(7);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t)}}function ie(i,d){}function re(i,d){1&i&&e.\u0275\u0275template(0,ie,0,0,"ng-template")}function se(i,d){if(1&i&&(e.\u0275\u0275elementStart(0,"ds-page-with-sidebar",10),e.\u0275\u0275template(1,re,1,0,null,9),e.\u0275\u0275elementEnd()),2&i){e.\u0275\u0275nextContext();const t=e.\u0275\u0275reference(9),s=e.\u0275\u0275reference(7);e.\u0275\u0275property("id","search-page")("sidebarContent",t),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",s)}}function oe(i,d){}function ae(i,d){1&i&&e.\u0275\u0275template(0,oe,0,0,"ng-template")}function ce(i,d){if(1&i&&(e.\u0275\u0275elementStart(0,"div",8),e.\u0275\u0275template(1,ae,1,0,null,9),e.\u0275\u0275projection(2),e.\u0275\u0275elementEnd()),2&i){e.\u0275\u0275nextContext(2);const t=e.\u0275\u0275reference(11);e.\u0275\u0275advance(1),e.\u0275\u0275property("ngTemplateOutlet",t)}}function le(i,d){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",7),e.\u0275\u0275template(1,ce,3,1,"div",11),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275elementStart(3,"div",12)(4,"div",13),e.\u0275\u0275element(5,"ds-view-mode-switch",14),e.\u0275\u0275elementStart(6,"button",15),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.openSidebar())}),e.\u0275\u0275element(7,"i",16),e.\u0275\u0275text(8),e.\u0275\u0275pipe(9,"translate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"ds-themed-search-results",17),e.\u0275\u0275listener("contentChange",function(l){e.\u0275\u0275restoreView(t);const S=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(S.onContentChange(l))})("deselectObject",function(l){e.\u0275\u0275restoreView(t);const S=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(S.deselectObject.emit(l))})("selectObject",function(l){e.\u0275\u0275restoreView(t);const S=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(S.selectObject.emit(l))}),e.\u0275\u0275pipe(11,"async"),e.\u0275\u0275pipe(12,"async"),e.\u0275\u0275pipe(13,"async"),e.\u0275\u0275pipe(14,"async"),e.\u0275\u0275elementEnd()()()}if(2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(2,14,t.isXsOrSm$)),e.\u0275\u0275advance(4),e.\u0275\u0275property("viewModeList",t.viewModeList)("inPlaceSearch",t.inPlaceSearch),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(9,16,"search.sidebar.open")," "),e.\u0275\u0275advance(2),e.\u0275\u0275property("searchResults",e.\u0275\u0275pipeBind1(11,18,t.resultsRD$))("searchConfig",e.\u0275\u0275pipeBind1(12,20,t.searchOptions$))("configuration",e.\u0275\u0275pipeBind1(13,22,t.currentConfiguration$))("disableHeader",!t.searchEnabled)("linkType",t.linkType)("context",e.\u0275\u0275pipeBind1(14,24,t.currentContext$))("selectable",t.selectable)("selectionConfig",t.selectionConfig)("showCsvExport",t.showCsvExport)("showThumbnails",t.showThumbnails)}}function he(i,d){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"ds-themed-search-sidebar",20),e.\u0275\u0275listener("changeConfiguration",function(l){e.\u0275\u0275restoreView(t);const S=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(S.changeContext(l.context))})("changeViewMode",function(){e.\u0275\u0275restoreView(t);const l=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(l.changeViewMode())}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd()}if(2&i){const t=e.\u0275\u0275nextContext(2);let s;e.\u0275\u0275property("configurationList",t.configurationList)("configuration",e.\u0275\u0275pipeBind1(1,12,t.currentConfiguration$))("currentScope",e.\u0275\u0275pipeBind1(2,14,t.currentScope$))("filters",t.filtersRD$.asObservable())("refreshFilters",t.refreshFilters)("resultCount",null==(s=e.\u0275\u0275pipeBind1(3,16,t.resultsRD$))||null==s.payload?null:s.payload.totalElements)("searchOptions",e.\u0275\u0275pipeBind1(4,18,t.searchOptions$))("sortOptionsList",e.\u0275\u0275pipeBind1(5,20,t.sortOptionsList$))("currentSortOption",e.\u0275\u0275pipeBind1(6,22,t.currentSortOptions$))("inPlaceSearch",t.inPlaceSearch)("viewModeList",t.viewModeList)("showViewModes",t.showViewModes)}}function pe(i,d){if(1&i){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"ds-themed-search-sidebar",21),e.\u0275\u0275listener("toggleSidebar",function(){e.\u0275\u0275restoreView(t);const l=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(l.closeSidebar())})("changeConfiguration",function(l){e.\u0275\u0275restoreView(t);const S=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(S.changeContext(l.context))})("changeViewMode",function(){e.\u0275\u0275restoreView(t);const l=e.\u0275\u0275nextContext(2);return e.\u0275\u0275resetView(l.changeViewMode())}),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275elementEnd()}if(2&i){const t=e.\u0275\u0275nextContext(2);let s;e.\u0275\u0275property("configurationList",t.configurationList)("configuration",e.\u0275\u0275pipeBind1(1,11,t.currentConfiguration$))("currentScope",e.\u0275\u0275pipeBind1(2,13,t.currentScope$))("filters",t.filtersRD$.asObservable())("refreshFilters",t.refreshFilters)("resultCount",null==(s=e.\u0275\u0275pipeBind1(3,15,t.resultsRD$))?null:s.payload.totalElements)("searchOptions",e.\u0275\u0275pipeBind1(4,17,t.searchOptions$))("sortOptionsList",e.\u0275\u0275pipeBind1(5,19,t.sortOptionsList$))("currentSortOption",e.\u0275\u0275pipeBind1(6,21,t.currentSortOptions$))("viewModeList",t.viewModeList)("showViewModes",t.showViewModes)}}function _e(i,d){if(1&i&&(e.\u0275\u0275template(0,he,7,24,"ds-themed-search-sidebar",18),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275template(2,pe,7,23,"ds-themed-search-sidebar",19),e.\u0275\u0275pipe(3,"async")),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(1,2,t.isXsOrSm$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(3,4,t.isXsOrSm$))}}function de(i,d){if(1&i&&(e.\u0275\u0275element(0,"ds-themed-search-form",26),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275pipe(2,"async"),e.\u0275\u0275pipe(3,"translate")),2&i){const t=e.\u0275\u0275nextContext(2);let s,l;e.\u0275\u0275property("query",null==(s=e.\u0275\u0275pipeBind1(1,6,t.searchOptions$))?null:s.query)("scope",null==(l=e.\u0275\u0275pipeBind1(2,8,t.searchOptions$))?null:l.scope)("currentUrl",t.searchLink)("showScopeSelector",t.showScopeSelector)("inPlaceSearch",t.inPlaceSearch)("searchPlaceholder",e.\u0275\u0275pipeBind1(3,10,t.searchFormPlaceholder))}}function ue(i,d){if(1&i&&e.\u0275\u0275element(0,"ds-search-labels",27),2&i){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275property("inPlaceSearch",t.inPlaceSearch)}}function me(i,d){if(1&i&&(e.\u0275\u0275template(0,de,4,12,"ds-themed-search-form",22),e.\u0275\u0275elementStart(1,"div",23)(2,"div",24),e.\u0275\u0275template(3,ue,1,1,"ds-search-labels",25),e.\u0275\u0275elementEnd()()),2&i){const t=e.\u0275\u0275nextContext();e.\u0275\u0275property("ngIf",t.searchEnabled),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",t.searchEnabled)}}const ge=[[["","additionalSearchOptions",""]]],fe=["[additionalSearchOptions]"];let Ce=(()=>{class i{constructor(t,s,l,S,v,b){this.service=t,this.sidebarService=s,this.windowService=l,this.searchConfigService=S,this.routeService=v,this.router=b,this.configurationList=[],this.context=W._.Search,this.useCachedVersionIfAvailable=!0,this.inPlaceSearch=!0,this.paginationId="spc",this.searchEnabled=!0,this.sideBarWidth=3,this.searchFormPlaceholder="search.search-form.placeholder",this.selectable=!1,this.showCsvExport=!1,this.showSidebar=!0,this.showViewModes=!0,this.showScopeSelector=!0,this.trackStatistics=!1,this.currentConfiguration$=new h.X(""),this.currentContext$=new h.X(null),this.currentScope$=new h.X(""),this.currentSortOptions$=new h.X(null),this.filtersRD$=new h.X(null),this.resultsRD$=new h.X(null),this.searchOptions$=new h.X(null),this.sortOptionsList$=new h.X([]),this.initialized$=new h.X(!1),this.refreshFilters=new h.X(!1),this.uuidRegex=/\b[0-9a-f]{8}\b-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-\b[0-9a-f]{12}\b/g,this.allowedObjectPaths=["entities",j.Oo,V.yu,N.Ww],this.subs=[],this.resultFound=new e.EventEmitter,this.deselectObject=new e.EventEmitter,this.selectObject=new e.EventEmitter,this.isXsOrSm$=this.windowService.isXsOrSm()}ngOnInit(){this.useUniquePageId&&(this.paginationId=L()(this.paginationId)),this.searchConfigService.setPaginationId(this.paginationId),(0,f.Uh)(this.configuration)&&this.routeService.setParameter("configuration",this.configuration),(0,f.Uh)(this.fixedFilterQuery)&&this.routeService.setParameter("fixedFilterQuery",this.fixedFilterQuery),this.isSidebarCollapsed$=this.isSidebarCollapsed(),this.searchLink=this.getSearchLink(),this.currentContext$.next(this.context);const t=this.searchConfigService.getCurrentConfiguration(this.configuration).pipe((0,u.x)()),s=t.pipe((0,r.w)(v=>this.searchConfigService.getConfigurationSearchConfig(v)),(0,p.U)(v=>this.searchConfigService.getConfigurationSortOptions(v)),(0,u.x)()),l=s.pipe((0,r.w)(v=>this.searchConfigService.getCurrentSort(this.paginationId,v[0])),(0,u.x)()),S=this.getSearchOptions().pipe((0,u.x)());this.subs.push((0,o.a)([t,s,S,l]).pipe((0,a.h)(([v,b,y,$])=>y.pagination.id===this.paginationId),(0,C.b)(100)).subscribe(([v,b,y,$])=>{const U=Object.assign({},y,{configuration:y.configuration||v,sort:$||y.sort});""===U.query&&(U.query=this.query);const R=new x.t(U);JSON.stringify(R)!==JSON.stringify(this.searchOptions$.value)&&(this.currentConfiguration$.next(v),this.currentSortOptions$.next(R.sort),this.currentScope$.next(R.scope),this.sortOptionsList$.next(b),this.searchOptions$.next(R),this.initialized$.next(!0),this.retrieveSearchResults(R),this.retrieveFilters(y))})),this.subscribeToRoutingEvents()}changeContext(t){this.currentContext$.next(t)}closeSidebar(){this.sidebarService.collapse()}changeViewMode(){this.resultsRD$.next(null)}openSidebar(){this.sidebarService.expand()}onContentChange(t){this.retrieveFilters(this.lastSearchOptions),this.refreshFilters.next(!0)}ngOnDestroy(){this.subs.filter(t=>(0,f.Uh)(t)).forEach(t=>t.unsubscribe())}getSearchOptions(){return this.searchConfigService.paginatedSearchOptions}retrieveFilters(t){this.filtersRD$.next(null),this.searchConfigService.getConfig(t.scope,t.configuration).pipe((0,F.hC)()).subscribe(s=>{this.filtersRD$.next(s)})}retrieveSearchResults(t){this.resultsRD$.next(null),this.lastSearchOptions=t;let s=[(0,w.l)("thumbnail",{isOptional:!0}),(0,w.l)("item",{isOptional:!0},(0,w.l)("thumbnail",{isOptional:!0})),(0,w.l)("accessStatus",{isOptional:!0,shouldEmbed:K.N.item.showAccessStatuses})];"supervision"===this.configuration&&s.push((0,w.l)("supervisionOrders",{isOptional:!0})),this.service.search(t,void 0,this.useCachedVersionIfAvailable,!0,...s).pipe((0,F.hC)()).subscribe(l=>{l.hasSucceeded&&(this.trackStatistics&&this.service.trackSearch(t,l.payload),l.payload?.page?.length>0&&this.resultFound.emit(l.payload)),this.resultsRD$.next(l)})}subscribeToRoutingEvents(){this.subs.push(this.router.events.pipe((0,a.h)(t=>t instanceof c.OD),(0,p.U)(t=>this.getDsoUUIDFromUrl(t.url)),(0,f.tz)()).subscribe(t=>{this.resultsRD$.value.hasSucceeded&&this.service.trackSearch(this.searchOptions$.value,this.resultsRD$.value.payload,t)}))}getDsoUUIDFromUrl(t){if((0,f.UE)(t)&&this.allowedObjectPaths.some(s=>t.startsWith(`/${s}`))){const s=t.substring(t.lastIndexOf("/")+1);if(s.match(this.uuidRegex))return s}return null}isSidebarCollapsed(){return this.sidebarService.isCollapsed}getSearchLink(){return this.inPlaceSearch?(0,A.T)(this.router):this.service.getSearchLink()}}return i.\u0275fac=function(t){return new(t||i)(e.\u0275\u0275directiveInject(I.o),e.\u0275\u0275directiveInject(m.P),e.\u0275\u0275directiveInject(P.I),e.\u0275\u0275directiveInject(g.SEARCH_CONFIG_SERVICE),e.\u0275\u0275directiveInject(_.MZ),e.\u0275\u0275directiveInject(c.F0))},i.\u0275cmp=e.\u0275\u0275defineComponent({type:i,selectors:[["ds-search"]],inputs:{configurationList:"configurationList",context:"context",configuration:"configuration",fixedFilterQuery:"fixedFilterQuery",useCachedVersionIfAvailable:"useCachedVersionIfAvailable",inPlaceSearch:"inPlaceSearch",linkType:"linkType",paginationId:"paginationId",searchEnabled:"searchEnabled",sideBarWidth:"sideBarWidth",searchFormPlaceholder:"searchFormPlaceholder",selectable:"selectable",selectionConfig:"selectionConfig",showCsvExport:"showCsvExport",showSidebar:"showSidebar",showThumbnails:"showThumbnails",showViewModes:"showViewModes",useUniquePageId:"useUniquePageId",viewModeList:"viewModeList",showScopeSelector:"showScopeSelector",trackStatistics:"trackStatistics",query:"query"},outputs:{resultFound:"resultFound",deselectObject:"deselectObject",selectObject:"selectObject"},ngContentSelectors:fe,decls:12,vars:9,consts:[["class","container",4,"ngIf"],[4,"ngIf"],[3,"id","sidebarContent",4,"ngIf"],["searchContent",""],["sidebarContent",""],["searchForm",""],[1,"container"],[1,"row"],[1,"col-12"],[4,"ngTemplateOutlet"],[3,"id","sidebarContent"],["class","col-12",4,"ngIf"],["id","search-content",1,"col-12"],[1,"d-block","d-md-none","search-controls","clearfix"],[3,"viewModeList","inPlaceSearch"],["aria-controls","#search-body",1,"btn","btn-outline-primary","float-right","open-sidebar",3,"click"],[1,"fas","fa-sliders"],[3,"searchResults","searchConfig","configuration","disableHeader","linkType","context","selectable","selectionConfig","showCsvExport","showThumbnails","contentChange","deselectObject","selectObject"],["id","search-sidebar",3,"configurationList","configuration","currentScope","filters","refreshFilters","resultCount","searchOptions","sortOptionsList","currentSortOption","inPlaceSearch","viewModeList","showViewModes","changeConfiguration","changeViewMode",4,"ngIf"],["id","search-sidebar-sm",3,"configurationList","configuration","currentScope","filters","refreshFilters","resultCount","searchOptions","sortOptionsList","currentSortOption","viewModeList","showViewModes","toggleSidebar","changeConfiguration","changeViewMode",4,"ngIf"],["id","search-sidebar",3,"configurationList","configuration","currentScope","filters","refreshFilters","resultCount","searchOptions","sortOptionsList","currentSortOption","inPlaceSearch","viewModeList","showViewModes","changeConfiguration","changeViewMode"],["id","search-sidebar-sm",3,"configurationList","configuration","currentScope","filters","refreshFilters","resultCount","searchOptions","sortOptionsList","currentSortOption","viewModeList","showViewModes","toggleSidebar","changeConfiguration","changeViewMode"],["id","search-form",3,"query","scope","currentUrl","showScopeSelector","inPlaceSearch","searchPlaceholder",4,"ngIf"],[1,"row","mb-3","mb-md-1"],[1,"labels","col-sm-9"],[3,"inPlaceSearch",4,"ngIf"],["id","search-form",3,"query","scope","currentUrl","showScopeSelector","inPlaceSearch","searchPlaceholder"],[3,"inPlaceSearch"]],template:function(t,s){1&t&&(e.\u0275\u0275projectionDef(ge),e.\u0275\u0275template(0,q,4,1,"div",0),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275template(2,ne,2,1,"div",1),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275template(4,se,2,3,"ds-page-with-sidebar",2),e.\u0275\u0275pipe(5,"async"),e.\u0275\u0275template(6,le,15,26,"ng-template",null,3,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(8,_e,4,6,"ng-template",null,4,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275template(10,me,4,2,"ng-template",null,5,e.\u0275\u0275templateRefExtractor)),2&t&&(e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(1,3,s.isXsOrSm$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",!s.showSidebar&&e.\u0275\u0275pipeBind1(3,5,s.initialized$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",s.showSidebar&&e.\u0275\u0275pipeBind1(5,7,s.initialized$)))},dependencies:[B.O5,B.tP,X.p,H.R,z.$,Q.B,G.g,J.H,B.Ov,Z.X$],styles:["@media (max-width: 991.98px){.container[_ngcontent-%COMP%]{width:100%;max-width:none}}  .search-controls{margin-bottom:var(--bs-spacer)}"],data:{animation:[E.z]},changeDetection:0}),i})()},53374:(M,O,n)=>{"use strict";n.d(O,{MD:()=>c,RD:()=>o,XC:()=>u});var e=n(45608);function c(r,p){const a=new RegExp(`[?|&]${h(encodeURIComponent(p.paramName))}=(${h(encodeURIComponent(r.value))}[^&]*)`,"g");if((0,e.UE)(r._links)){const C=a.exec(r._links.search.href);if((0,e.UE)(C))return decodeURIComponent(C[1])}return r.authorityKey?u(r.authorityKey,"authority"):u(r.value,"equals")}function h(r){return r.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&")}function o(r){return r.match(new RegExp(".+,(equals|query|authority)$"))?r.substring(0,r.lastIndexOf(",")):r}function u(r,p){return r.match(new RegExp("^.+,(equals|query|authority)$"))?r:`${r},${p}`}},7403:(M,O,n)=>{var e={"./custom/app/shared/search/search-results/search-results.component":[46113,8592,46]};function c(h){if(!n.o(e,h))return Promise.resolve().then(()=>{var r=new Error("Cannot find module '"+h+"'");throw r.code="MODULE_NOT_FOUND",r});var o=e[h],u=o[0];return Promise.all(o.slice(1).map(n.e)).then(()=>n(u))}c.keys=()=>Object.keys(e),c.id=7403,M.exports=c},32874:(M,O,n)=>{var e={"./custom/app/shared/search/search-sidebar/search-sidebar.component":[57946,7946]};function c(h){if(!n.o(e,h))return Promise.resolve().then(()=>{var r=new Error("Cannot find module '"+h+"'");throw r.code="MODULE_NOT_FOUND",r});var o=e[h],u=o[0];return n.e(o[1]).then(()=>n(u))}c.keys=()=>Object.keys(e),c.id=32874,M.exports=c}}]);