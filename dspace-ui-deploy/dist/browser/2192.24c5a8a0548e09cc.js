"use strict";(self.webpackChunkdspace_angular=self.webpackChunkdspace_angular||[]).push([[2192],{72192:(I,c,o)=>{o.r(c),o.d(c,{CommunityListComponent:()=>D});var p=o(18394),e=o(98678),r=o(35103),i=o(37566),s=o(67522),_=o(87657),u=o(38678),g=o(9121),f=o(96342);function v(n,d){1&n&&e.\u0275\u0275element(0,"ds-themed-loading",5)}function C(n,d){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"button",14),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const m=e.\u0275\u0275nextContext().$implicit,l=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(l.getNextPage(m))}),e.\u0275\u0275element(1,"i",15),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()}2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(3,1,"communityList.showMore")," "))}function y(n,d){1&n&&e.\u0275\u0275element(0,"ds-themed-loading",5)}function h(n,d){if(1&n&&(e.\u0275\u0275elementStart(0,"cdk-tree-node",6)(1,"div",7)(2,"button",8),e.\u0275\u0275element(3,"span",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"div",10),e.\u0275\u0275template(5,C,4,3,"button",11),e.\u0275\u0275pipe(6,"async"),e.\u0275\u0275template(7,y,1,0,"ds-themed-loading",0),e.\u0275\u0275pipe(8,"async"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(9,"div",12),e.\u0275\u0275element(10,"div",13),e.\u0275\u0275elementEnd()()),2&n){const t=d.$implicit,a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("ngIf",!e.\u0275\u0275pipeBind1(6,2,a.dataSource.loading$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(8,4,t===a.loadingNode&&a.dataSource.loading$))}}function x(n,d){if(1&n&&(e.\u0275\u0275elementStart(0,"span",27),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate(t.payload.archivedItemsCount)}}function E(n,d){if(1&n&&(e.\u0275\u0275elementStart(0,"div",13)(1,"button",28),e.\u0275\u0275element(2,"span",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"ds-truncatable-part",29)(4,"span"),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd()()()),2&n){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275classMap(t.isExpanded?"fa fa-chevron-down":"fa fa-chevron-right"),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",t.id)("minLines",3),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.payload.shortDescription)}}function k(n,d){if(1&n&&(e.\u0275\u0275elementStart(0,"div",30)(1,"button",28),e.\u0275\u0275element(2,"span",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(3,"ds-themed-loading",5),e.\u0275\u0275elementEnd()),2&n){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275classMap(t.isExpanded?"fa fa-chevron-down":"fa fa-chevron-right")}}function b(n,d){if(1&n){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"cdk-tree-node",16)(1,"div",7)(2,"button",17),e.\u0275\u0275listener("click",function(){const l=e.\u0275\u0275restoreView(t).$implicit,N=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(N.toggleExpanded(l))}),e.\u0275\u0275pipe(3,"async"),e.\u0275\u0275pipe(4,"async"),e.\u0275\u0275element(5,"span",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(6,"div",19)(7,"span",20)(8,"a",21),e.\u0275\u0275text(9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"span",22),e.\u0275\u0275text(11,"\xa0"),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(12,x,2,1,"span",23),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(13,"ds-truncatable",24)(14,"div",12),e.\u0275\u0275template(15,E,6,6,"div",25),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(16,k,4,3,"div",26),e.\u0275\u0275pipe(17,"async"),e.\u0275\u0275elementEnd()}if(2&n){const t=d.$implicit,a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("title","toggle "+a.dsoNameService.getName(t.payload))("ngClass",e.\u0275\u0275pipeBind1(3,13,a.hasChild(null,t))?"visible":"invisible"),e.\u0275\u0275attribute("aria-label","toggle "+a.dsoNameService.getName(t.payload))("data-test",e.\u0275\u0275pipeBind1(4,15,a.hasChild(null,t))?"expand-button":""),e.\u0275\u0275advance(3),e.\u0275\u0275classMap(t.isExpanded?"fa fa-chevron-down":"fa fa-chevron-right"),e.\u0275\u0275advance(3),e.\u0275\u0275property("routerLink",t.route),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",a.dsoNameService.getName(t.payload)," "),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",t.payload.archivedItemsCount>=0),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",t.id),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.payload.shortDescription),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(17,17,t===a.loadingNode&&a.dataSource.loading$))}}function T(n,d){if(1&n&&(e.\u0275\u0275elementStart(0,"div",13)(1,"button",28),e.\u0275\u0275element(2,"span",18),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"ds-truncatable-part",29)(4,"span"),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd()()()),2&n){const t=e.\u0275\u0275nextContext().$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275classMap(t.isExpanded?"fa fa-chevron-down":"fa fa-chevron-right"),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",t.id)("minLines",3),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.payload.shortDescription)}}function L(n,d){if(1&n&&(e.\u0275\u0275elementStart(0,"cdk-tree-node",31)(1,"div",7)(2,"button",8),e.\u0275\u0275element(3,"span",9),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(4,"h6",10)(5,"a",21),e.\u0275\u0275text(6),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(7,"ds-truncatable",24)(8,"div",12),e.\u0275\u0275template(9,T,6,6,"div",25),e.\u0275\u0275elementEnd()()()),2&n){const t=d.$implicit,a=e.\u0275\u0275nextContext();e.\u0275\u0275advance(5),e.\u0275\u0275property("routerLink",t.route),e.\u0275\u0275advance(1),e.\u0275\u0275textInterpolate1(" ",a.dsoNameService.getName(t.payload)," "),e.\u0275\u0275advance(1),e.\u0275\u0275property("id",t.id),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",t.payload.shortDescription)}}let D=(()=>{class n extends p.CommunityListComponent{}return n.\u0275fac=function(){let d;return function(a){return(d||(d=e.\u0275\u0275getInheritedFactory(n)))(a||n)}}(),n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["ds-community-list"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:6,vars:9,consts:[["class","ds-themed-loading",4,"ngIf"],[3,"dataSource","treeControl","trackBy"],["cdkTreeNodePadding","","class","example-tree-node show-more-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","","class","example-tree-node expandable-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],["cdkTreeNodePadding","","class","example-tree-node childless-node",4,"cdkTreeNodeDef","cdkTreeNodeDefWhen"],[1,"ds-themed-loading"],["cdkTreeNodePadding","",1,"example-tree-node","show-more-node"],[1,"btn-group"],["type","button","cdkTreeNodeToggle","",1,"btn","btn-default"],["aria-hidden","true",1,"fa","fa-chevron-right","invisible"],[1,"align-middle","pt-2"],["class","btn btn-outline-primary btn-sm","role","button",3,"click",4,"ngIf"],["cdkTreeNodePadding","",1,"text-muted"],[1,"d-flex"],["role","button",1,"btn","btn-outline-primary","btn-sm",3,"click"],[1,"fas","fa-angle-down"],["cdkTreeNodePadding","",1,"example-tree-node","expandable-node"],["type","button","cdkTreeNodeToggle","",1,"btn","btn-default",3,"title","ngClass","click"],["aria-hidden","true"],[1,"d-flex","flex-row"],[1,"align-middle","pt-2","lead"],[1,"lead",3,"routerLink"],[1,"pr-2"],["class","badge badge-pill badge-secondary align-top archived-items-lead",4,"ngIf"],[3,"id"],["class","d-flex",4,"ngIf"],["class","d-flex","cdkTreeNodePadding","",4,"ngIf"],[1,"badge","badge-pill","badge-secondary","align-top","archived-items-lead"],["type","button",1,"btn","btn-default","invisible"],[3,"id","minLines"],["cdkTreeNodePadding","",1,"d-flex"],["cdkTreeNodePadding","",1,"example-tree-node","childless-node"]],template:function(t,a){1&t&&(e.\u0275\u0275template(0,v,1,0,"ds-themed-loading",0),e.\u0275\u0275pipe(1,"async"),e.\u0275\u0275elementStart(2,"cdk-tree",1),e.\u0275\u0275template(3,h,11,6,"cdk-tree-node",2),e.\u0275\u0275template(4,b,18,19,"cdk-tree-node",3),e.\u0275\u0275template(5,L,10,4,"cdk-tree-node",4),e.\u0275\u0275elementEnd()),2&t&&(e.\u0275\u0275property("ngIf",e.\u0275\u0275pipeBind1(1,7,a.dataSource.loading$)&&!a.loadingNode),e.\u0275\u0275advance(2),e.\u0275\u0275property("dataSource",a.dataSource)("treeControl",a.treeControl)("trackBy",a.trackBy),e.\u0275\u0275advance(1),e.\u0275\u0275property("cdkTreeNodeDefWhen",a.isShowMore),e.\u0275\u0275advance(1),e.\u0275\u0275property("cdkTreeNodeDefWhen",a.hasChild),e.\u0275\u0275advance(1),e.\u0275\u0275property("cdkTreeNodeDefWhen",!(a.hasChild&&a.isShowMore)))},dependencies:[r.mk,r.O5,i.rO,i.XJ,i.Ud,i._0,i.Hs,s.rH,_.Z,u.n,g.L,r.Ov,f.X$],encapsulation:2}),n})()}}]);