(window.webpackJsonp=window.webpackJsonp||[]).push([[66,25],{552:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(51),{data:function(){return{content:[],selection:0,quote:"",author:"",loader:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/news/item");case 5:n=e.sent,t.blogs_load=!1,t.content=n.data,t.loader=!1;case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(238),f=n(85),m=n(241),h=n(554),_=n(526),x=n(534),C=n(183),w=n(527),k=n(66),V=n(549),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("News")]),t._v(" "),n("v-container",[n("v-row",t._l(t.content,(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"news/"+e.slug}}},[null!=e.image?n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",height:"250",src:e.image}}):n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:"/images/default.jpg"}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"news/"+e.slug}}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")],1)],1)],1)})),1)],1),t._v(" "),t.loader?n("v-container",[n("v-row",[n("v-col",[n("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:f.b,VCardTitle:f.c,VChip:m.a,VChipGroup:h.a,VCol:_.a,VContainer:x.a,VImg:C.a,VRow:w.a,VSheet:k.a,VSkeletonLoader:V.a})},560:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(51),{data:function(){return{quote:"",author:"",loader:!1}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/quotes/item");case 5:n=e.sent,t.quote=n.data.message,t.author=n.data.author,t.loader=!1;case 9:case"end":return e.stop()}}),e)})))()},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(238),f=n(85),m=n(526),h=n(534),_=n(527),x=n(66),C=n(549),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("Quote")]),t._v(" "),n("v-container",[n("v-row",[n("v-col",[n("v-card",[n("v-card-text",[n("p",[t._v(t._s(t.quote)+" - "+t._s(t.author))])]),t._v(" "),t.loader?n("v-skeleton-loader",{attrs:{type:"article, actions"}}):t._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:v.a,VCardText:f.b,VCol:m.a,VContainer:h.a,VRow:_.a,VSheet:x.a,VSkeletonLoader:C.a})},561:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(51),{data:function(){return{content:[],selection:0,quote:"",author:"",loader:!1}},fetch:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/blog/item");case 5:n=e.sent,t.content=n.data,t.loader=!1;case 8:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),c=n(35),l=n(31),d=n.n(l),v=n(233),f=n(238),m=n(85),h=n(241),_=n(554),x=n(526),C=n(534),w=n(183),k=n(527),V=n(66),$=n(549),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",[n("h2",{staticClass:"ml-3 mb-2"},[t._v("Blog")]),t._v(" "),t.loader?t._e():n("v-container",[n("v-row",t._l(t.content,(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[null!=e.image?n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:e.image}}):n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:"/images/default.jpg"}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),null!=e.profile_picture?n("v-avatar",{staticClass:"d-inline-flex pa-2"},[n("img",{attrs:{src:e.profile_picture,alt:""}})]):n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v("Author:")])]),t._v(" "),n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v(t._s(e.name))])]),t._v(" "),n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v(t._s(e.human_date))])])],1)],1)],1)})),1)],1),t._v(" "),t.loader?n("v-container",[n("v-row",[n("v-col",[n("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAvatar:v.a,VCard:f.a,VCardText:m.b,VCardTitle:m.c,VChip:h.a,VChipGroup:_.a,VCol:x.a,VContainer:C.a,VImg:w.a,VRow:k.a,VSheet:V.a,VSkeletonLoader:$.a})},572:function(t,e,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("b996107e",content,!0,{sourceMap:!1})},593:function(t,e,n){"use strict";n(572)},594:function(t,e,n){var r=n(11)(!1);r.push([t.i,".transparent[data-v-1c319625]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-1c319625]{text-decoration:none}",""]),t.exports=r},620:function(t,e,n){var content=n(708);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7d276283",content,!0,{sourceMap:!1})},681:function(t,e,n){"use strict";n.r(e);var r=n(15),o=(n(51),{props:["content","length","loading"],data:function(){return{}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},computed:{},methods:{getnextarticle:function(){this.$emit("next-article")}}}),c=(n(593),n(35)),l=n(31),d=n.n(l),v=n(518),f=n(238),m=n(85),h=n(526),_=n(183),x=n(527),C=n(66),w=n(549),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("h1",{staticClass:"fs-1-3"},[t._v("Post")]),t._v(" "),n("p",[t._v("Technical posts mostly dev ops and site updates")])])],1),t._v(" "),t._l(t.content,(function(e,r){return n("v-row",{key:r,staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"post/"+e.slug}}},[null!=e.image?n("img",{staticStyle:{"object-position":"center"},attrs:{src:e.image,width:"100%",height:"250rem",alt:""}}):n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:"/images/default.jpg"}})],1),t._v(" "),n("v-card-title",[n("nuxt-link",{staticClass:"nuxtlink",attrs:{to:{path:"post/"+e.slug}}},[t._v("Title : "+t._s(e.title)+"\n          ")])],1),t._v(" "),n("v-card-text",{},[n("span",[t._v("Author: "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return t.loading?n("v-row",{key:e+"b",staticClass:"ma-0 pa-0"},[n("v-col",[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()})),t._v(" "),10!=t.length?n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[t._v("\n        Nothing Follows\n      ")])],1)],1):t._e(),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:10==t.length?"green":"grey",attrs:{disabled:10!=t.length},on:{click:function(e){return e.preventDefault(),t.getnextarticle.apply(null,arguments)}}},[t._v("\n          Next Article\n        ")])],1)],1)],1)],2)}),[],!1,null,"1c319625",null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCardText:m.b,VCardTitle:m.c,VCol:h.a,VImg:_.a,VRow:x.a,VSheet:C.a,VSkeletonLoader:w.a})},707:function(t,e,n){"use strict";n(620)},708:function(t,e,n){var r=n(11)(!1);r.push([t.i,"ul.clean[data-v-79192f60]{list-style:none!important;list-style-type:none!important}",""]),t.exports=r},872:function(t,e,n){"use strict";n.r(e);var r=n(63),o=n(15),c=(n(23),n(25),n(51),n(28)),l=n.n(c),d=(n(150),{head:function(){return{title:"Post ",meta:[{hid:"Post",name:"Post",content:"Technical posts mostly dev ops and site updates"}]}},data:function(){return{selection:0,content:[],length:null,loading:!1,page:2}},created:function(){},mounted:function(){},transition:{},auth:!1,fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/post/page/1/item/10");case 5:n=e.sent,t.content=n.data,t.length=n.data.length,t.loading=!1;case 9:case"end":return e.stop()}}),e)})))()},components:{},watch:{},methods:{nextArticle:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:l.a.start(),l.a.inc();try{t.$axios.$get("api/post/list/".concat(t.page)).then((function(e){t.length=e.data.length,t.content=[].concat(Object(r.a)(t.content),Object(r.a)(e.data)),l.a.done(),t.page=t.page+1,t.loading=!1})).catch((function(e){t.loading=!1,l.a.done()})).finally((function(){}))}catch(e){t.loading=!1,console.log("error")}case 6:case"end":return e.stop()}}),e)})))()}}}),v=(n(707),n(35)),f=n(31),m=n.n(f),h=n(526),_=n(534),x=n(527),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{},[n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"8",xl:"8"}},[n("PostCard",{attrs:{content:t.content,length:t.length,loading:t.loading},on:{"next-article":t.nextArticle}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[n("v-container",[n("v-row",[n("v-col",[n("WidgetQuote")],1)],1),t._v(" "),n("v-row",[n("v-col",[n("WidgetBlog")],1)],1),t._v(" "),n("v-row",[n("v-col",[n("WidgetNews")],1)],1)],1)],1)],1)],1)}),[],!1,null,"79192f60",null);e.default=component.exports;m()(component,{PostCard:n(681).default,WidgetQuote:n(560).default,WidgetBlog:n(561).default,WidgetNews:n(552).default}),m()(component,{VCol:h.a,VContainer:_.a,VRow:x.a})}}]);