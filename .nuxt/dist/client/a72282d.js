(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{553:function(t,e,n){"use strict";n.r(e);var r=n(16),l=(n(51),{data:function(){return{content:[],selection:0,quote:"",author:"",loader:!1}},fetch:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/blog/item");case 5:n=e.sent,t.content=n.data,t.loader=!1;case 8:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),o=n(35),c=n(31),v=n.n(c),d=n(232),_=n(237),f=n(85),m=n(240),h=n(900),x=n(524),C=n(533),k=n(182),w=n(525),V=n(66),R=n(548),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("Blog")]),t._v(" "),t.loader?t._e():n("v-container",[n("v-row",t._l(t.content,(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[null!=e.image?n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:e.image}}):n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:"/images/default.jpg"}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),null!=e.profile_picture?n("v-avatar",{staticClass:"d-inline-flex pa-2"},[n("img",{attrs:{src:e.profile_picture,alt:""}})]):n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v("Author:")])]),t._v(" "),n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v(t._s(e.name))])]),t._v(" "),n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v(t._s(e.human_date))])])],1)],1)],1)})),1)],1),t._v(" "),t.loader?n("v-container",[n("v-row",[n("v-col",[n("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VAvatar:d.a,VCard:_.a,VCardText:f.b,VCardTitle:f.c,VChip:m.a,VChipGroup:h.a,VCol:x.a,VContainer:C.a,VImg:k.a,VRow:w.a,VSheet:V.a,VSkeletonLoader:R.a})}}]);