(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[7946,4074],{16694:(S,m,n)=>{"use strict";n.d(m,{R:()=>g});var e=n(4682),r=n(98678);function d(a,_){}const t=["*"];let g=(()=>{class a extends e.F{constructor(){super(...arguments),this.inAndOutputNames=["filters","currentConfiguration","currentScope","inPlaceSearch","refreshFilters"]}getComponentName(){return"SearchFiltersComponent"}importThemedComponent(p){return n(22592)(`./${p}/app/shared/search/search-filters/search-filters.component`)}importUnthemedComponent(){return n.e(3201).then(n.bind(n,13201))}}return a.\u0275fac=function(){let _;return function(C){return(_||(_=r.\u0275\u0275getInheritedFactory(a)))(C||a)}}(),a.\u0275cmp=r.\u0275\u0275defineComponent({type:a,selectors:[["ds-themed-search-filters"]],inputs:{currentConfiguration:"currentConfiguration",currentScope:"currentScope",inPlaceSearch:"inPlaceSearch",refreshFilters:"refreshFilters",filters:"filters"},features:[r.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:t,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(p,C){1&p&&(r.\u0275\u0275projectionDef(),r.\u0275\u0275template(0,d,0,0,"ng-template",null,0,r.\u0275\u0275templateRefExtractor),r.\u0275\u0275elementStart(2,"div",null,1),r.\u0275\u0275projection(4),r.\u0275\u0275elementEnd())},encapsulation:2}),a})()},16194:(S,m,n)=>{"use strict";n.d(m,{M:()=>g});var e=n(4682),r=n(98678);function d(a,_){}const t=["*"];let g=(()=>{class a extends e.F{constructor(){super(...arguments),this.inAndOutputNames=["currentSortOption","sortOptionsList"]}getComponentName(){return"SearchSettingsComponent"}importThemedComponent(p){return n(51542)(`./${p}/app/shared/search/search-settings/search-settings.component`)}importUnthemedComponent(){return n.e(6893).then(n.bind(n,26893))}}return a.\u0275fac=function(){let _;return function(C){return(_||(_=r.\u0275\u0275getInheritedFactory(a)))(C||a)}}(),a.\u0275cmp=r.\u0275\u0275defineComponent({type:a,selectors:[["ds-themed-search-settings"]],inputs:{currentSortOption:"currentSortOption",sortOptionsList:"sortOptionsList"},features:[r.\u0275\u0275InheritDefinitionFeature],ngContentSelectors:t,decls:5,vars:0,consts:[["vcr",""],["content",""]],template:function(p,C){1&p&&(r.\u0275\u0275projectionDef(),r.\u0275\u0275template(0,d,0,0,"ng-template",null,0,r.\u0275\u0275templateRefExtractor),r.\u0275\u0275elementStart(2,"div",null,1),r.\u0275\u0275projection(4),r.\u0275\u0275elementEnd())},encapsulation:2}),a})()},34074:(S,m,n)=>{"use strict";n.r(m),n.d(m,{SearchSidebarComponent:()=>E});var e=n(98678),r=n(35103),d=n(20189),t=n(39536),g=n(16194),a=n(16694),_=n(96342);function p(h,v){if(1&h){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"ds-view-mode-switch",10),e.\u0275\u0275listener("changeViewMode",function(f){e.\u0275\u0275restoreView(l);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.changeViewMode.emit(f))}),e.\u0275\u0275elementEnd()}if(2&h){const l=e.\u0275\u0275nextContext();e.\u0275\u0275property("viewModeList",l.viewModeList)}}function C(h,v){if(1&h){const l=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"ds-search-switch-configuration",11),e.\u0275\u0275listener("changeConfiguration",function(f){e.\u0275\u0275restoreView(l);const o=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(o.changeConfiguration.emit(f))}),e.\u0275\u0275elementEnd()}if(2&h){const l=e.\u0275\u0275nextContext();e.\u0275\u0275property("configurationList",l.configurationList)("defaultConfiguration",l.configuration)("inPlaceSearch",l.inPlaceSearch)}}let E=(()=>{class h{constructor(){this.showViewModes=!0,this.toggleSidebar=new e.EventEmitter,this.changeConfiguration=new e.EventEmitter,this.changeViewMode=new e.EventEmitter}}return h.\u0275fac=function(l){return new(l||h)},h.\u0275cmp=e.\u0275\u0275defineComponent({type:h,selectors:[["ds-search-sidebar"]],inputs:{configuration:"configuration",configurationList:"configurationList",currentScope:"currentScope",currentSortOption:"currentSortOption",filters:"filters",resultCount:"resultCount",viewModeList:"viewModeList",showViewModes:"showViewModes",inPlaceSearch:"inPlaceSearch",searchOptions:"searchOptions",sortOptionsList:"sortOptionsList",refreshFilters:"refreshFilters"},outputs:{toggleSidebar:"toggleSidebar",changeConfiguration:"changeConfiguration",changeViewMode:"changeViewMode"},decls:16,vars:19,consts:[["id","sidebar-options",1,"d-block","d-md-none","search-controls","clearfix"],[1,"results"],["aria-controls","#search-body",1,"btn","btn-outline-primary","float-right","close-sidebar",3,"click"],[1,"fas","fa-arrow-right",3,"title"],["id","search-sidebar-content"],["class","d-none d-md-block",3,"viewModeList","changeViewMode",4,"ngIf"],[1,"sidebar-content"],[3,"configurationList","defaultConfiguration","inPlaceSearch","changeConfiguration",4,"ngIf"],[3,"currentScope","currentConfiguration","filters","refreshFilters","inPlaceSearch"],[3,"currentSortOption","sortOptionsList"],[1,"d-none","d-md-block",3,"viewModeList","changeViewMode"],[3,"configurationList","defaultConfiguration","inPlaceSearch","changeConfiguration"]],template:function(l,i){1&l&&(e.\u0275\u0275elementStart(0,"div")(1,"div",0)(2,"small",1),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"button",2),e.\u0275\u0275listener("click",function(){return i.toggleSidebar.emit()}),e.\u0275\u0275element(6,"i",3),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275text(8),e.\u0275\u0275pipe(9,"translate"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"div",4),e.\u0275\u0275template(11,p,1,1,"ds-view-mode-switch",5),e.\u0275\u0275elementStart(12,"div",6),e.\u0275\u0275template(13,C,1,3,"ds-search-switch-configuration",7),e.\u0275\u0275element(14,"ds-themed-search-filters",8)(15,"ds-themed-search-settings",9),e.\u0275\u0275elementEnd()()()),2&l&&(e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate2("",i.resultCount," ",e.\u0275\u0275pipeBind1(4,13,"search.sidebar.results"),""),e.\u0275\u0275advance(3),e.\u0275\u0275property("title",e.\u0275\u0275pipeBind1(7,15,"search.sidebar.close")),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(9,17,"search.sidebar.close")," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",i.showViewModes),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",i.configurationList),e.\u0275\u0275advance(1),e.\u0275\u0275property("currentScope",i.currentScope)("currentConfiguration",i.configuration)("filters",i.filters)("refreshFilters",i.refreshFilters)("inPlaceSearch",i.inPlaceSearch),e.\u0275\u0275advance(1),e.\u0275\u0275property("currentSortOption",i.currentSortOption)("sortOptionsList",i.sortOptionsList))},dependencies:[r.O5,d.$,t.n,g.M,a.R,_.X$],styles:["[_nghost-%COMP%]   .results[_ngcontent-%COMP%]{line-height:var(--ds-button-height)}[_nghost-%COMP%]   ds-view-mode-switch[_ngcontent-%COMP%]{margin-bottom:var(--bs-spacer)}[_nghost-%COMP%]   .sidebar-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child):not(ds-search-switch-configuration){margin-bottom:calc(4 * var(--bs-spacer));display:block}[_nghost-%COMP%]   ds-search-switch-configuration[_ngcontent-%COMP%]{margin-bottom:calc(2 * var(--bs-spacer));display:block}"]}),h})()},39536:(S,m,n)=>{"use strict";n.d(m,{n:()=>f});var e=n(98678),r=n(45608),d=n(55963),g=(n(27496),n(57066)),a=n(26176),_=n(54385),p=n.n(_),C=n(67522),E=n(35103),h=n(5476),v=n(96342);function l(o,c){if(1&o&&(e.\u0275\u0275elementStart(0,"option",5),e.\u0275\u0275text(1),e.\u0275\u0275pipe(2,"translate"),e.\u0275\u0275elementEnd()),2&o){const s=c.$implicit;e.\u0275\u0275property("ngValue",s),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(2,2,s.label)," ")}}function i(o,c){if(1&o){const s=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",1)(1,"h5",2),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"select",3),e.\u0275\u0275listener("ngModelChange",function(O){e.\u0275\u0275restoreView(s);const M=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(M.selectedOption=O)})("change",function(){e.\u0275\u0275restoreView(s);const O=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(O.onSelect())}),e.\u0275\u0275template(5,l,3,4,"option",4),e.\u0275\u0275elementEnd()()}if(2&o){const s=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,4,"search.switch-configuration.title")),e.\u0275\u0275advance(2),e.\u0275\u0275property("compareWith",s.compare)("ngModel",s.selectedOption),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngForOf",s.configurationList)}}let f=(()=>{class o{constructor(s,u,O){this.router=s,this.searchService=u,this.searchConfigService=O,this.configurationList=[],this.changeConfiguration=new e.EventEmitter}ngOnInit(){this.searchConfigService.getCurrentConfiguration(this.defaultConfiguration).subscribe(s=>{const u=p()(this.configurationList,{value:s});this.selectedOption=this.configurationList[u]})}onSelect(){const s={queryParams:{configuration:this.selectedOption.value}};this.changeConfiguration.emit(this.selectedOption),this.router.navigate(this.getSearchLinkParts(),s)}compare(s,u){return s===u}ngOnDestroy(){(0,r.Uh)(this.sub)&&this.sub.unsubscribe()}getSearchLink(){return this.inPlaceSearch?(0,a.T)(this.router):this.searchService.getSearchLink()}getSearchLinkParts(){return this.searchService?[]:this.getSearchLink().split("/")}}return o.\u0275fac=function(s){return new(s||o)(e.\u0275\u0275directiveInject(C.F0),e.\u0275\u0275directiveInject(g.o),e.\u0275\u0275directiveInject(d.SEARCH_CONFIG_SERVICE))},o.\u0275cmp=e.\u0275\u0275defineComponent({type:o,selectors:[["ds-search-switch-configuration"]],inputs:{inPlaceSearch:"inPlaceSearch",configurationList:"configurationList",defaultConfiguration:"defaultConfiguration"},outputs:{changeConfiguration:"changeConfiguration"},decls:1,vars:1,consts:[["class","search-switch-configuration",4,"ngIf"],[1,"search-switch-configuration"],["id","configuration-switch"],["aria-labelledby","configuration-switch",1,"form-control",3,"compareWith","ngModel","ngModelChange","change"],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"]],template:function(s,u){1&s&&e.\u0275\u0275template(0,i,6,6,"div",0),2&s&&e.\u0275\u0275property("ngIf",(null==u.configurationList?null:u.configurationList.length)>1)},dependencies:[E.sg,E.O5,h.YN,h.Kr,h.EJ,h.JJ,h.On,v.X$]}),o})()},57946:(S,m,n)=>{"use strict";n.r(m),n.d(m,{SearchSidebarComponent:()=>l});var e=n(34074),r=n(55963),d=n(27496),t=n(98678),g=n(35103),a=n(20189),_=n(39536),p=n(16194),C=n(16694),E=n(96342);function h(i,f){if(1&i){const o=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"ds-view-mode-switch",10),t.\u0275\u0275listener("changeViewMode",function(s){t.\u0275\u0275restoreView(o);const u=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(u.changeViewMode.emit(s))}),t.\u0275\u0275elementEnd()}if(2&i){const o=t.\u0275\u0275nextContext();t.\u0275\u0275property("viewModeList",o.viewModeList)}}function v(i,f){if(1&i){const o=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"ds-search-switch-configuration",11),t.\u0275\u0275listener("changeConfiguration",function(s){t.\u0275\u0275restoreView(o);const u=t.\u0275\u0275nextContext();return t.\u0275\u0275resetView(u.changeConfiguration.emit(s))}),t.\u0275\u0275elementEnd()}if(2&i){const o=t.\u0275\u0275nextContext();t.\u0275\u0275property("configurationList",o.configurationList)("defaultConfiguration",o.configuration)("inPlaceSearch",o.inPlaceSearch)}}let l=(()=>{class i extends e.SearchSidebarComponent{}return i.\u0275fac=function(){let f;return function(c){return(f||(f=t.\u0275\u0275getInheritedFactory(i)))(c||i)}}(),i.\u0275cmp=t.\u0275\u0275defineComponent({type:i,selectors:[["ds-search-sidebar"]],features:[t.\u0275\u0275ProvidersFeature([{provide:r.SEARCH_CONFIG_SERVICE,useClass:d.U}]),t.\u0275\u0275InheritDefinitionFeature],decls:16,vars:19,consts:[["id","sidebar-options",1,"d-block","d-md-none","search-controls","clearfix"],[1,"results"],["aria-controls","#search-body",1,"btn","btn-outline-primary","float-right","close-sidebar",3,"click"],[1,"fas","fa-arrow-right",3,"title"],["id","search-sidebar-content"],["class","d-none d-md-block",3,"viewModeList","changeViewMode",4,"ngIf"],[1,"sidebar-content"],[3,"configurationList","defaultConfiguration","inPlaceSearch","changeConfiguration",4,"ngIf"],[3,"currentScope","currentConfiguration","filters","refreshFilters","inPlaceSearch"],[3,"currentSortOption","sortOptionsList"],[1,"d-none","d-md-block",3,"viewModeList","changeViewMode"],[3,"configurationList","defaultConfiguration","inPlaceSearch","changeConfiguration"]],template:function(o,c){1&o&&(t.\u0275\u0275elementStart(0,"div")(1,"div",0)(2,"small",1),t.\u0275\u0275text(3),t.\u0275\u0275pipe(4,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"button",2),t.\u0275\u0275listener("click",function(){return c.toggleSidebar.emit()}),t.\u0275\u0275element(6,"i",3),t.\u0275\u0275pipe(7,"translate"),t.\u0275\u0275text(8),t.\u0275\u0275pipe(9,"translate"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(10,"div",4),t.\u0275\u0275template(11,h,1,1,"ds-view-mode-switch",5),t.\u0275\u0275elementStart(12,"div",6),t.\u0275\u0275template(13,v,1,3,"ds-search-switch-configuration",7),t.\u0275\u0275element(14,"ds-themed-search-filters",8)(15,"ds-themed-search-settings",9),t.\u0275\u0275elementEnd()()()),2&o&&(t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate2("",c.resultCount," ",t.\u0275\u0275pipeBind1(4,13,"search.sidebar.results"),""),t.\u0275\u0275advance(3),t.\u0275\u0275property("title",t.\u0275\u0275pipeBind1(7,15,"search.sidebar.close")),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(9,17,"search.sidebar.close")," "),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",c.showViewModes),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",c.configurationList),t.\u0275\u0275advance(1),t.\u0275\u0275property("currentScope",c.currentScope)("currentConfiguration",c.configuration)("filters",c.filters)("refreshFilters",c.refreshFilters)("inPlaceSearch",c.inPlaceSearch),t.\u0275\u0275advance(1),t.\u0275\u0275property("currentSortOption",c.currentSortOption)("sortOptionsList",c.sortOptionsList))},dependencies:[g.O5,a.$,_.n,p.M,C.R,E.X$],styles:["[_nghost-%COMP%]   .results[_ngcontent-%COMP%]{line-height:var(--ds-button-height)}[_nghost-%COMP%]   ds-view-mode-switch[_ngcontent-%COMP%]{margin-bottom:var(--bs-spacer)}[_nghost-%COMP%]   .sidebar-content[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:not(:last-child):not(ds-search-switch-configuration){margin-bottom:calc(4 * var(--bs-spacer));display:block}[_nghost-%COMP%]   ds-search-switch-configuration[_ngcontent-%COMP%]{margin-bottom:calc(2 * var(--bs-spacer));display:block}"]}),i})()},22592:(S,m,n)=>{var e={"./custom/app/shared/search/search-filters/search-filters.component":[9367,3201,9367]};function r(d){if(!n.o(e,d))return Promise.resolve().then(()=>{var a=new Error("Cannot find module '"+d+"'");throw a.code="MODULE_NOT_FOUND",a});var t=e[d],g=t[0];return Promise.all(t.slice(1).map(n.e)).then(()=>n(g))}r.keys=()=>Object.keys(e),r.id=22592,S.exports=r},51542:(S,m,n)=>{var e={"./custom/app/shared/search/search-settings/search-settings.component":[423,423]};function r(d){if(!n.o(e,d))return Promise.resolve().then(()=>{var a=new Error("Cannot find module '"+d+"'");throw a.code="MODULE_NOT_FOUND",a});var t=e[d],g=t[0];return n.e(t[1]).then(()=>n(g))}r.keys=()=>Object.keys(e),r.id=51542,S.exports=r}}]);