(window.webpackJsonp=window.webpackJsonp||[]).push([[44,7,18,20],{544:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{data:function(){return{content:[],selection:0,quote:"",author:"",loader:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/news/item");case 5:n=e.sent,t.blogs_load=!1,t.content=n.data,t.loader=!1;case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(237),f=n(85),m=n(240),h=n(900),_=n(524),x=n(533),C=n(182),w=n(525),k=n(66),V=n(548),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("News")]),t._v(" "),n("v-container",[n("v-row",t._l(t.content,(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"news/"+e.slug}}},[n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",height:"250",src:e.image}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"news/"+e.slug}}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")],1)],1)],1)})),1)],1),t._v(" "),t.loader?n("v-container",[n("v-row",[n("v-col",[n("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:f.b,VCardTitle:f.c,VChip:m.a,VChipGroup:h.a,VCol:_.a,VContainer:x.a,VImg:C.a,VRow:w.a,VSheet:k.a,VSkeletonLoader:V.a})},545:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{data:function(){return{content:[],selection:0,quote:"",author:"",loader:!1}},fetch:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/post/item");case 5:n=e.sent,t.blogs_load=!1,t.content=n.data,t.loader=!1;case 9:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(237),f=n(85),m=n(240),h=n(900),_=n(524),x=n(533),C=n(182),w=n(525),k=n(66),V=n(548),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("Post")]),t._v(" "),t.loader?t._e():n("v-container",[n("v-row",t._l(t.content,(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"post/"+e.slug}}},[n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",height:"250",src:e.image}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"post/"+e.slug}}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")],1)],1)],1)})),1)],1),t._v(" "),t.loader?n("v-container",[n("v-row",[n("v-col",[n("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:f.b,VCardTitle:f.c,VChip:m.a,VChipGroup:h.a,VCol:_.a,VContainer:x.a,VImg:C.a,VRow:w.a,VSheet:k.a,VSkeletonLoader:V.a})},547:function(t,e,n){var content=n(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("fe450aac",content,!0,{sourceMap:!1})},552:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{data:function(){return{quote:"",author:"",loader:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/quotes/item");case 5:n=e.sent,t.quote=n.data.message,t.author=n.data.author,t.loader=!1;case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(237),f=n(85),m=n(524),h=n(533),_=n(525),x=n(66),C=n(548),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("Quote")]),t._v(" "),n("v-container",[n("v-row",[n("v-col",[n("v-card",[n("v-card-text",[n("p",[t._v(t._s(t.quote)+" - "+t._s(t.author))])]),t._v(" "),t.loader?n("v-skeleton-loader",{attrs:{type:"article, actions"}}):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:f.b,VCol:m.a,VContainer:h.a,VRow:_.a,VSheet:x.a,VSkeletonLoader:C.a})},559:function(t,e,n){"use strict";n(547)},560:function(t,e,n){var r=n(11)(!1);r.push([t.i,".transparent[data-v-ae9a3b64]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-ae9a3b64]{text-decoration:none}",""]),t.exports=r},576:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{head:{},props:["content","length","loading"],data:function(){return{selection:""}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:{image_default:function(t){console.log("Image failed to load")},getnextarticle:function(){this.$emit("next-article")}}}),c=(n(559),n(35)),l=n(31),d=n.n(l),v=n(232),f=n(516),m=n(237),h=n(85),_=n(240),x=n(900),C=n(524),w=n(182),k=n(525),V=n(66),$=n(548),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("h1",[t._v("Blog")]),t._v(" "),n("p",[t._v("Relevent Personal Blogs about programming and events")])])],1),t._v(" "),t._l(t.content,(function(e,r){return n("v-row",{key:r,staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"/blog/"+e.slug}}},[n("v-img",{attrs:{gradient:"to top right, rgba(0,0,201,.1), rgba(0,0,72,.2)",contain:"",src:e.image,"min-height":"250"}})],1),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"/blog/"+e.slug}}},[t._v(" "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),null!=e.profile_picture?n("v-avatar",{staticClass:"d-inline-flex pa-2"},[n("img",{attrs:{src:e.profile_picture,alt:""}})]):n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v("  Author: ")])]),t._v(" "),n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v("  "+t._s(e.name)+" ")])]),t._v(" "),n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v("  "+t._s(e.human_date))])])],1)],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return t.loading?n("v-row",{key:e+"b",staticClass:"ma-0 pa-0"},[n("v-col",[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()})),t._v(" "),10!=t.length?n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1):t._e(),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:10==t.length?"green":"grey",attrs:{disabled:10!=t.length},on:{click:t.getnextarticle}},[t._v("\n          Next Article\n        ")])],1)],1)],1)],2)}),[],!1,null,"ae9a3b64",null);e.default=component.exports;d()(component,{VAvatar:v.a,VBtn:f.a,VCard:m.a,VCardText:h.b,VCardTitle:h.c,VChip:_.a,VChipGroup:x.a,VCol:C.a,VImg:w.a,VRow:k.a,VSheet:V.a,VSkeletonLoader:$.a})},602:function(t,e,n){var content=n(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("03d5a05e",content,!0,{sourceMap:!1})},681:function(t,e,n){"use strict";n(602)},682:function(t,e,n){var r=n(11)(!1);r.push([t.i,"ul.clean[data-v-13f71c60]{list-style:none!important;list-style-type:none!important}",""]),t.exports=r},852:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=n(62),l=n(16),d=(n(51),n(49),n(23),n(25),n(28)),v=n.n(d),f=(n(150),r={created:function(){setTimeout((function(){this.$nuxt.$loading.finish()}),1e3)},transition:{beforeEnter:function(t){var e=this;this.$nextTick((function(){e.$nuxt.$loading.start()}))}},middleware:"auth",auth:!1,head:function(){return{title:"Blog",meta:[{hid:"Blog",name:"Blog",content:"Blog Article Page"}]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.error,t.params,e.next=3,n.$get("/sanctum/csrf-cookie");case 3:return e.next=5,n.$get("api/blog/page/1/item/10");case 5:return r=e.sent,e.abrupt("return",{content:r.data,length:r.data.length});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1,page:2}}},Object(o.a)(r,"created",(function(){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()})),Object(o.a)(r,"mounted",(function(){})),Object(o.a)(r,"components",{}),Object(o.a)(r,"watch",{}),Object(o.a)(r,"methods",{nextArticle:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:v.a.start(),v.a.inc();try{t.$axios.$get("api/blog/page/".concat(t.page,"/item/",10)).then((function(e){t.length=e.data.length,t.content=[].concat(Object(c.a)(t.content),Object(c.a)(e.data)),v.a.done(),t.page=t.page+1,t.loading=!1})).catch((function(e){t.loading=!1,v.a.done()})).finally((function(){}))}catch(e){t.loading=!1,console.log("error")}case 6:case"end":return e.stop()}}),e)})))()}}),r),m=(n(681),n(35)),h=n(31),_=n.n(h),x=n(524),C=n(533),w=n(525),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{},[n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"8",xl:"8"}},[n("BlogCard",{attrs:{content:t.content,length:t.length,loading:t.loading},on:{"next-article":t.nextArticle}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[n("v-container",[n("v-row",[n("v-col",[n("WidgetQuote")],1)],1),t._v(" "),n("v-row",[n("v-col",[n("WidgetNews")],1)],1),t._v(" "),n("v-row",[n("v-col",[n("WidgetPost")],1)],1)],1)],1)],1)],1)}),[],!1,null,"13f71c60",null);e.default=component.exports;_()(component,{BlogCard:n(576).default,WidgetQuote:n(552).default,WidgetNews:n(544).default,WidgetPost:n(545).default}),_()(component,{VCol:x.a,VContainer:C.a,VRow:w.a})}}]);