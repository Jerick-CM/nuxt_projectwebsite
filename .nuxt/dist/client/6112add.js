(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{526:function(t,e,l){var content=l(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(12).default)("58c4eda0",content,!0,{sourceMap:!1})},539:function(t,e,l){"use strict";l(526)},540:function(t,e,l){var o=l(11)(!1);o.push([t.i,".transparent[data-v-0ae80f38]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-0ae80f38]{text-decoration:none}",""]),t.exports=o},638:function(t,e,l){"use strict";l.r(e);var o=l(15),n=(l(51),{props:["content","length","loading"],data:function(){return{selection:""}},created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:{getnextarticle:function(){this.$emit("next-article")}}}),r=(l(539),l(39)),c=l(40),d=l.n(c),f=l(484),v=l(216),m=l(140),_=l(541),h=l(906),x=l(495),C=l(174),w=l(497),k=l(58),V=l(514),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-sheet",{staticClass:"ma-0 pa-0"},[l("v-row",{staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("h1",[t._v("Blog")]),t._v(" "),l("p",[t._v("Relevent Personal Blogs about programming and events")])])],1),t._v(" "),t._l(t.content,(function(e,o){return l("v-row",{key:o,staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[l("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"blog/"+e.slug}}},[l("v-img",{attrs:{height:"250",src:e.image}})],1),t._v(" "),l("v-card-title",[l("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"blog/"+e.slug}}},[t._v(" "+t._s(e.title)+"\n          ")])],1),t._v(" "),l("v-card-text",{},[l("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[l("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,o){return l("v-chip",{key:o,staticClass:"white--text",attrs:{color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),l("span",[t._v("Author: "+t._s(e.name)+" ")]),l("br"),t._v(" "),l("span",[t._v("Date : "+t._s(e.human_date))]),l("br")],1)],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return t.loading?l("v-row",{key:e+"b",staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()})),t._v(" "),10!=t.length?l("v-row",{staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[l("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1):t._e(),t._v(" "),l("v-row",{staticClass:"ma-0 pa-0"},[l("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[l("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[l("v-btn",{staticClass:"white--text",class:10==t.length?"green":"grey",attrs:{disabled:10!=t.length},on:{click:t.getnextarticle}},[t._v("\n          Next Article\n        ")])],1)],1)],1)],2)}),[],!1,null,"0ae80f38",null);e.default=component.exports;d()(component,{VBtn:f.a,VCard:v.a,VCardText:m.b,VCardTitle:m.c,VChip:_.a,VChipGroup:h.a,VCol:x.a,VImg:C.a,VRow:w.a,VSheet:k.a,VSkeletonLoader:V.a})}}]);