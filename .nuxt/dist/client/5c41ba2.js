(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{567:function(t,e,n){var content=n(662);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("5683455e",content,!0,{sourceMap:!1})},661:function(t,e,n){"use strict";n(567)},662:function(t,e,n){var r=n(11)(!1);r.push([t.i,"ul.clean[data-v-17dba7cf]{list-style:none!important;list-style-type:none!important}",""]),t.exports=r},856:function(t,e,n){"use strict";n.r(e);var r,o=n(1),c=n(53),l=n(15),d=(n(51),n(46),n(22),n(26),n(27)),f=n.n(d),h=(n(143),r={created:function(){setTimeout((function(){this.$nuxt.$loading.finish()}),1e3)},transition:{beforeEnter:function(t){var e=this;this.$nextTick((function(){e.$nuxt.$loading.start()}))}},middleware:"auth",auth:!1,head:function(){return{title:"News",meta:[{hid:"News",name:"News",content:"News Article Page"}]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,t.error,t.params,e.next=3,n.$get("/sanctum/csrf-cookie");case 3:return e.next=5,n.$get("api/news/page/1/item/10");case 5:return r=e.sent,console.log(r),e.abrupt("return",{content:r.data,length:r.data.length});case 8:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1,page:2}}},Object(o.a)(r,"created",(function(){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()})),Object(o.a)(r,"mounted",(function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),500)}))})),Object(o.a)(r,"watch",{lenght:function(t){t<10&&(this.disable_next=!0,this.disable_color="grey")}}),Object(o.a)(r,"computed",{}),Object(o.a)(r,"components",{}),Object(o.a)(r,"watch",{}),Object(o.a)(r,"methods",{nextArticle:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:f.a.start(),f.a.inc();try{t.$axios.$get("api/news/page/".concat(t.page,"/item/",10)).then((function(e){t.length=e.data.length,t.content=[].concat(Object(c.a)(t.content),Object(c.a)(e.data)),f.a.done(),t.page=t.page+1,t.loading=!1})).catch((function(e){t.loading=!1,f.a.done()})).finally((function(){}))}catch(e){t.loading=!1,console.log("error")}case 6:case"end":return e.stop()}}),e)})))()}}),r),m=(n(661),n(37)),w=n(35),x=n.n(w),$=n(496),v=n(497),j=n(498),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"white",attrs:{fluid:""}},[n("v-row",{},[n("v-col",{attrs:{md:"12",lg:"12"}},[n("NewsCard",{attrs:{content:t.content,length:t.length,loading:t.loading},on:{"next-article":t.nextArticle}})],1)],1)],1)}),[],!1,null,"17dba7cf",null);e.default=component.exports;x()(component,{NewsCard:n(838).default}),x()(component,{VCol:$.a,VContainer:v.a,VRow:j.a})}}]);