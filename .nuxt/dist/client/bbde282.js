(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{669:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{data:function(){return{content:[],selection:0,quote:"",author:"",loader:!1}},fetch:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/post/item/3");case 5:n=e.sent,t.content=n.data,t.loader=!1;case 8:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),c=n(35),l=n(31),v=n.n(l),d=n(237),m=n(85),_=n(240),h=n(900),f=n(524),x=n(533),k=n(182),w=n(525),C=n(66),V=n(548),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[t.loader?t._e():n("v-container",[n("v-row",[n("v-col",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("Related Post")])])],1),t._v(" "),n("v-row",t._l(t.content,(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"/post/"+e.slug}}},[null!=e.image?n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:e.image}}):n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:"/images/default.jpg"}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"/post/"+e.slug}}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")],1)],1)],1)})),1)],1),t._v(" "),t.loader?n("v-container",t._l(t.content,(function(t,e){return n("v-row",{key:e},[n("v-col",[n("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:d.a,VCardText:m.b,VCardTitle:m.c,VChip:_.a,VChipGroup:h.a,VCol:f.a,VContainer:x.a,VImg:k.a,VRow:w.a,VSheet:C.a,VSkeletonLoader:V.a})}}]);