(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{662:function(t,e,n){var content=n(839);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7322205d",content,!0,{sourceMap:!1})},838:function(t,e,n){"use strict";n(662)},839:function(t,e,n){var r=n(11)(!1);r.push([t.i,'.dont-break-out[data-v-86af0a86]{word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.font-lulu[data-v-86af0a86]{font-family:"Lulu",sans-serif}.font-halimun[data-v-86af0a86]{font-family:"Halimun",sans-serif}.font-barlowreg[data-v-86af0a86]{font-family:"Barlow-Regular",sans-serif}.bounce-enter-active[data-v-86af0a86]{-webkit-animation:bounce-in-data-v-86af0a86 .5s;animation:bounce-in-data-v-86af0a86 .5s}.bounce-leave-active[data-v-86af0a86]{animation:bounce-in-data-v-86af0a86 .5s reverse}@-webkit-keyframes bounce-in-data-v-86af0a86{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}@keyframes bounce-in-data-v-86af0a86{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}.title1[data-v-86af0a86],.v-application a[data-v-86af0a86]{text-decoration:none}.v-application a[data-v-86af0a86]{color:#424dee}.cardtitle[data-v-86af0a86]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',""]),t.exports=r},895:function(t,e,n){"use strict";n.r(e);n(8),n(7),n(10),n(13),n(9),n(14);var r=n(1),o=n(16),l=(n(51),n(144));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={loading:{color:"orange",height:"5px"},middleware:"auth",auth:!1,head:function(){return{title:"Homepage ",meta:[{hid:"Homepage",name:"Homepage",content:"Homepage"}]}},data:function(){return{blogs_load:!1,news_load:!1,posts_load:!1,selection:0,content:[],news:[],posts:[],selectedItem:0,show:!0,title:"",model:6,rounded:["0","sm","md","lg","xl","pill","circle"],links:[]}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.blogs_load=!0,t.news_load=!0,t.posts_load=!0,e.next=5,t.$axios.$get("/sanctum/csrf-cookie");case 5:return e.next=7,t.$axios.$get("api/blog/page/1/item/3");case 7:return n=e.sent,t.blogs_load=!1,t.content=n.data,e.next=12,t.$axios.$get("/sanctum/csrf-cookie");case 12:return e.next=14,t.$axios.$get("api/news/page/1/item/3");case 14:return r=e.sent,t.news_load=!1,t.news=r.data,e.next=19,t.$axios.$get("/sanctum/csrf-cookie");case 19:return e.next=21,t.$axios.$get("api/post/page/1/item/3");case 21:o=e.sent,t.posts_load=!1,t.posts=o.data;case 24:case"end":return e.stop()}}),e)})))()},layout:"default",methods:v({},Object(l.b)("messageoftheday",["fetchQuote"])),computed:v({},Object(l.c)("messageoftheday",["MessageOfTheDay","LoadingStatus"])),mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:try{t.fetchQuote()}catch(t){console.log(t)}case 3:case"end":return e.stop()}}),e)})))()}},m=(n(838),n(35)),_=n(31),f=n.n(_),h=n(232),x=n(237),w=n(85),k=n(240),y=n(900),C=n(524),O=n(533),j=n(182),$=n(238),P=n(525),V=n(66),D=n(548),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:" "},[n("v-row",[n("v-col",[n("h1",{attrs:{color:"dark"}},[t._v("Project Website - Research and Development")]),t._v(" "),n("p",[t._v("\n        Latest Code fixes, Tutorials and Reviews, News about technology and\n        Programming also includes Programming quotes and world event\n        anniversaries. May also include personal blogs and top 10 - 100\n        reviews of the authors favorite things and current researches.\n      ")])])],1),t._v(" "),n("v-row",[n("v-container",[n("v-row",[n("v-col",[n("h2",{attrs:{color:"dark"}},[t._v("Blogs")])])],1),t._v(" "),t._l(Math.ceil(t.content.length/3),(function(i,e){return n("v-row",{key:e,attrs:{color:"blue"}},t._l(t.content.slice(3*(i-1),3*i),(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:e.image}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[t._v("\n                  "+t._s(e.title)+"\n                ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),null!=e.profile_picture?n("v-avatar",{staticClass:"d-inline-flex pa-2",attrs:{size:"37"}},[n("img",{attrs:{src:e.profile_picture,alt:""}})]):n("v-avatar",{staticClass:"white--text",attrs:{color:"blue",size:"37"}},[t._v("\n                "+t._s(e.name.charAt(0).toUpperCase())+"\n              ")]),t._v(" "),n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v(t._s(e.name))])]),t._v(" "),n("v-card",{staticClass:"d-inline-flex pa-2",attrs:{flat:""}},[n("p",[t._v(t._s(e.human_date))])])],1)],1)],1)})),1)})),t._v(" "),t.blogs_load?n("v-row",[n("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()],2)],1),t._v(" "),n("v-row",[n("v-container",[n("v-row",[n("v-col",[n("h2",{attrs:{color:"dark"}},[t._v("News")])])],1),t._v(" "),t._l(Math.ceil(t.news.length/3),(function(i,e){return n("v-row",{key:e,attrs:{color:"blue"}},t._l(t.news.slice(3*(i-1),3*i),(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"news/"+e.slug}}},[n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",height:"250",src:e.image}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"news/"+e.slug}}},[t._v("\n                  "+t._s(e.title)+"\n                ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),n("v-avatar",{staticClass:"white--text",attrs:{color:"blue",size:"37"}},[t._v("\n                "+t._s(e.name.charAt(0).toUpperCase())+"\n              ")]),t._v(" "),n("span",[t._v(t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")],1)],1)],1)})),1)})),t._v(" "),t.news_load?n("v-row",[n("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()],2)],1),t._v(" "),n("v-row",[n("v-container",[n("v-row",[n("v-col",[n("h2",{attrs:{color:"dark"}},[t._v("Post")])])],1),t._v(" "),t._l(Math.ceil(t.posts.length/3),(function(i,e){return n("v-row",{key:e,attrs:{color:"blue"}},t._l(t.posts.slice(3*(i-1),3*i),(function(e,r){return n("v-col",{key:r,attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"post/"+e.slug}}},[n("v-img",{attrs:{contain:"","aspect-ratio":"1.7",height:"250",src:e.image}})],1),t._v(" "),n("v-card-title",[n("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[n("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"post/"+e.slug}}},[t._v("\n                  "+t._s(e.title)+"\n                ")])],1)]),t._v(" "),n("v-card-text",{},[n("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,r){return n("v-chip",{key:r,staticClass:"white--text",attrs:{color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),n("v-avatar",{staticClass:"white--text",attrs:{color:"blue",size:"37"}},[t._v("\n                "+t._s(e.name.charAt(0).toUpperCase())+"\n              ")]),t._v(" "),n("span",[t._v(" "+t._s(e.name)+" ")]),n("br"),t._v(" "),n("span",[t._v("Date : "+t._s(e.human_date))]),n("br")],1)],1)],1)})),1)})),t._v(" "),t.posts_load?n("v-row",[n("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1),t._v(" "),n("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1):t._e()],2)],1),t._v(" "),n("v-row",[n("v-col",{attrs:{xs:"12",sm:"12",lg:"12"}},[n("v-sheet",{attrs:{elevation:"2"}},[n("v-container",{},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[t.LoadingStatus?n("v-progress-linear",{attrs:{color:"blue accent-5",indeterminate:"",rounded:"",height:"6"}}):t._e(),t._v(" "),t._l(t.MessageOfTheDay,(function(e){return t.LoadingStatus?t._e():n("v-sheet",{key:e.author,staticClass:"text-center "},[n("span",{staticClass:"text-center mt-5 dont-break-out",class:{"fs-0.5":t.$vuetify.breakpoint.smAndDown,"fs-1.5":t.$vuetify.breakpoint.mdAndUp}},[t._v('\n                  " '+t._s(e.message)+' " - '+t._s(e.author)+"\n                ")])])}))],2)],1)],1)],1)],1)],1)],1)}),[],!1,null,"86af0a86",null);e.default=component.exports;f()(component,{VAvatar:h.a,VCard:x.a,VCardText:w.b,VCardTitle:w.c,VChip:k.a,VChipGroup:y.a,VCol:C.a,VContainer:O.a,VImg:j.a,VProgressLinear:$.a,VRow:P.a,VSheet:V.a,VSkeletonLoader:D.a})}}]);