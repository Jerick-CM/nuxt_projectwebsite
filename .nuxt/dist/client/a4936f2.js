(window.webpackJsonp=window.webpackJsonp||[]).push([[54,9],{545:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{data:function(){return{quote:"",author:"",loader:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/quotes/item");case 5:n=e.sent,t.quote=n.data.message,t.author=n.data.author,t.loader=!1;case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(236),f=n(84),h=n(516),m=n(525),_=n(517),x=n(66),w=n(535),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"mb-2"},[t._v("Quote")]),t._v(" "),n("v-container",[n("v-row",[n("v-col",[n("v-card",[n("v-card-text",[n("p",[t._v(t._s(t.quote)+" - "+t._s(t.author))])]),t._v(" "),t.loader?n("v-skeleton-loader",{attrs:{type:"article, actions"}}):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:f.b,VCol:h.a,VContainer:m.a,VRow:_.a,VSheet:x.a,VSkeletonLoader:w.a})},554:function(t,e,n){var content=n(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("6a2dc762",content,!0,{sourceMap:!1})},561:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{data:function(){return{quote:"",author:"",loader:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/blog/page/1/item/3");case 5:n=e.sent,t.blogs_load=!1,t.content=n.data,t.loader=!1;case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(236),f=n(84),h=n(239),m=n(904),_=n(516),x=n(525),w=n(181),C=n(517),k=n(66),V=n(535),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"mb-2"},[t._v("Blog")]),t._v(" "),t.loader?t._e():n("v-container",[n("v-row",t._l(t.content,(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:e.image}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")],1)],1)],1)})),1)],1),t._v(" "),t.loader?n("v-container",[n("v-row",[n("v-col",[n("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:f.b,VCardTitle:f.c,VChip:h.a,VChipGroup:m.a,VCol:_.a,VContainer:x.a,VImg:w.a,VRow:C.a,VSheet:k.a,VSkeletonLoader:V.a})},565:function(t,e,n){"use strict";n(554)},566:function(t,e,n){var r=n(11)(!1);r.push([t.i,".transparent[data-v-82f64f0e]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-82f64f0e]{text-decoration:none}",""]),t.exports=r},589:function(t,e,n){var content=n(682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("36db5e30",content,!0,{sourceMap:!1})},656:function(t,e,n){"use strict";n.r(e);var r=n(16),o=(n(51),{props:["content","length","loading"],data:function(){return{}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:{getnextarticle:function(){this.$emit("next-article")}}}),c=(n(565),n(35)),l=n(31),d=n.n(l),v=n(508),f=n(236),h=n(84),m=n(516),_=n(517),x=n(66),w=n(535),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("h1",[t._v("Post")]),t._v(" "),n("p",[t._v("Technological post ment to help user")])])],1),t._v(" "),t._l(t.content,(function(e,r){return n("v-row",{key:r,staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"post/"+e.slug}}},[n("img",{staticStyle:{"object-position":"center"},attrs:{src:e.image,width:"100%",height:"250rem",alt:""}})]),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"post/"+e.slug}}},[t._v("Title : "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("v-card-text",{},[n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return t.loading?n("v-row",{key:e+"b",staticClass:"ma-0 pa-0"},[n("v-col",[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()})),t._v(" "),10!=t.length?n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[t._v("\n        Nothing Follows\n      ")])],1)],1):t._e(),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:10==t.length?"green":"grey",attrs:{disabled:10!=t.length},on:{click:function(e){return e.preventDefault(),t.getnextarticle(e)}}},[t._v("\n          Next Article\n        ")])],1)],1)],1),t._v(" "),n("v-row",[n("v-col",[n("script",{attrs:{async:"",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),t._v(" "),n("script",[t._v("\n        ;(adsbygoogle = window.adsbygoogle || []).push({})\n      ")]),t._v(" "),n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-3213536425475125","data-ad-slot":"3715096457","data-ad-format":"auto","data-full-width-responsive":"true"}})])],1)],2)}),[],!1,null,"82f64f0e",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardText:h.b,VCardTitle:h.c,VCol:m.a,VRow:_.a,VSheet:x.a,VSkeletonLoader:w.a})},681:function(t,e,n){"use strict";n(589)},682:function(t,e,n){var r=n(11)(!1);r.push([t.i,"ul.clean[data-v-90500584]{list-style:none!important;list-style-type:none!important}",""]),t.exports=r},859:function(t,e,n){"use strict";n.r(e);var r=n(60),o=n(16),c=(n(51),n(49),n(21),n(25),n(28)),l=n.n(c),d=(n(148),{created:function(){setTimeout((function(){this.$nuxt.$loading.finish()}),1e3)},transition:{beforeEnter:function(t){var e=this;this.$nextTick((function(){e.$nuxt.$loading.start()}))}},auth:!1,head:function(){return{selection:"",title:"Post",meta:[{hid:"Posts",name:"Posts",content:"Post Article Page"}]}},data:function(){return{loading:!1,page:2}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.error,t.params,e.next=3,n.$get("/sanctum/csrf-cookie");case 3:return e.next=5,n.$get("api/post/list/1");case 5:return r=e.sent,e.abrupt("return",{content:r.data,length:r.data.length});case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){},components:{},watch:{},methods:{nextArticle:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:l.a.start(),l.a.inc();try{t.$axios.$get("api/post/list/".concat(t.page)).then((function(e){t.length=e.data.length,t.content=[].concat(Object(r.a)(t.content),Object(r.a)(e.data)),l.a.done(),t.page=t.page+1,t.loading=!1})).catch((function(e){t.loading=!1,l.a.done()})).finally((function(){}))}catch(e){t.loading=!1,console.log("error")}case 6:case"end":return e.stop()}}),e)})))()}}}),v=(n(681),n(35)),f=n(31),h=n.n(f),m=n(516),_=n(525),x=n(517),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{},[n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"8",xl:"8"}},[n("PostCard",{attrs:{content:t.content,length:t.length,loading:t.loading},on:{"next-article":t.nextArticle}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[n("v-container",[n("v-row",[n("v-col",[n("QuoteWidget")],1)],1),t._v(" "),n("v-row",[n("v-col",[n("BlogWidget")],1)],1)],1)],1)],1)],1)}),[],!1,null,"90500584",null);e.default=component.exports;h()(component,{PostCard:n(656).default,QuoteWidget:n(545).default,BlogWidget:n(561).default}),h()(component,{VCol:m.a,VContainer:_.a,VRow:x.a})}}]);