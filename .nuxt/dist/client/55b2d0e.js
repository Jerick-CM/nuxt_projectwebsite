(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{569:function(t,n,e){var content=e(666);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("2fea2615",content,!0,{sourceMap:!1})},665:function(t,n,e){"use strict";e(569)},666:function(t,n,e){var o=e(11)(!1);o.push([t.i,"ul.clean[data-v-1246cd79]{list-style:none!important;list-style-type:none!important}",""]),t.exports=o},857:function(t,n,e){"use strict";e.r(n);var o=e(53),r=e(15),c=(e(51),e(46),e(22),e(26),e(27)),l=e.n(c),d=(e(143),{created:function(){setTimeout((function(){this.$nuxt.$loading.finish()}),1e3)},transition:{beforeEnter:function(t){var n=this;this.$nextTick((function(){n.$nuxt.$loading.start()}))}},auth:!1,head:function(){return{content:"",length:"",title:"Post",meta:[{hid:"Posts",name:"Posts",content:"Post Article Page"}]}},data:function(){return{loading:!1,page:2}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$axios,t.error,t.params,n.next=3,e.$get("/sanctum/csrf-cookie");case 3:return n.next=5,e.$get("api/post/list/1");case 5:return o=n.sent,n.abrupt("return",{content:o.data,length:o.data.length});case 7:case"end":return n.stop()}}),n)})))()},mounted:function(){},components:{},watch:{},methods:{nextArticle:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,n.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:l.a.start(),l.a.inc();try{t.$axios.$get("api/post/list/".concat(t.page)).then((function(n){t.length=n.data.length,t.content=[].concat(Object(o.a)(t.content),Object(o.a)(n.data)),l.a.done(),t.page=t.page+1,t.loading=!1})).catch((function(n){t.loading=!1,l.a.done()})).finally((function(){}))}catch(n){t.loading=!1,console.log("error")}case 6:case"end":return n.stop()}}),n)})))()}}}),f=(e(665),e(37)),h=e(35),m=e.n(h),x=e(496),w=e(497),v=e(498),component=Object(f.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{staticClass:"white",attrs:{fluid:""}},[e("v-row",{},[e("v-col",{attrs:{md:"12",lg:"12"}},[e("PostCard",{attrs:{content:t.content,length:t.length,loading:t.loading},on:{"next-article":t.nextArticle}})],1)],1)],1)}),[],!1,null,"1246cd79",null);n.default=component.exports;m()(component,{PostCard:e(839).default}),m()(component,{VCol:x.a,VContainer:w.a,VRow:v.a})}}]);