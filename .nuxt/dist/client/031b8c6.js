(window.webpackJsonp=window.webpackJsonp||[]).push([[50,17],{486:function(t,e,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2d1627d9",content,!0,{sourceMap:!1})},504:function(t,e,n){"use strict";n(4)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},505:function(t,e,n){"use strict";n(486)},506:function(t,e,n){var o=n(15)(!1);o.push([t.i,".transparent[data-v-f625bf2c]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-f625bf2c]{text-decoration:none}",""]),t.exports=o},545:function(t,e,n){var content=n(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("0103be6e",content,!0,{sourceMap:!1})},598:function(t,e,n){"use strict";n.r(e);var o=n(17),r=n(11),c=(n(30),n(58),n(41),n(504),n(19),n(25),n(205),n(54),n(37)),l=n.n(c),d=(n(160),{data:function(){return{no_more_post:"d-none",loadcard:"",loading:!1,content:[],page:1,data:[],increment:0,disable_next:!1,disable_color:"green",date:""}},asyncData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:case"end":return e.stop()}}),e)})))()},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){this.getposts()},computed:{},methods:{getposts:function(){var t=this;this.$axios.$get("/sanctum/csrf-cookie"),l.a.start(),l.a.inc(),this.date=(new Date).toJSON().slice(0,10).replace(/-/g,"-");try{this.$axios.$get("api/er/page/".concat(this.page,"/item/",10,"/date/").concat(this.date)).then((function(e){0==e.data.length?(t.no_more_post="",t.disable_next=!0,t.disable_color="grey"):(t.disable_next=!1,t.disable_color="green"),e.data.length<10&&(t.no_more_post="",t.disable_next=!0,t.disable_color="grey");for(var n=0,r=Object.entries(e.data);n<r.length;n++){var c=Object(o.a)(r[n],2),d=(c[0],c[1]);t.increment=t.increment+1,t.data.push({id:d.id,slug:d.slug,title:d.title,subtitle:d.subtitle,event_date:d.event_date,country:d.country,content:d.content,created_at:d.created_at,human_date:d.human_date,author:d.author,image:d.image,increment:t.increment})}t.content=t.data,l.a.done(),t.loadcard="d-none",t.page=t.page+1})).catch((function(e){l.a.done(),t.loadcard="d-none"})).finally((function(){}))}catch(t){console.log("error")}}}}),m=(n(505),n(40)),f=n(47),v=n.n(f),_=n(421),h=n(439),w=n(438),x=n(429),C=n(431),y=n(52),R=n(775),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-sheet",{staticClass:"ma-0 pa-0"},[n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("h1",[t._v("World Reminders")])])],1),t._v(" "),t._l(t.content,(function(e,o){return n("v-row",{key:o,staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-card-text",{},[n("p",[t._v(t._s(e.event_date))]),t._v(" "),n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.subtitle))]),t._v(" "),n("p",[t._v(t._s(e.content))])])],1)],1)],1)})),t._v(" "),t._l(10,(function(e){return n("v-row",{key:e+"b",staticClass:"ma-0 pa-0",class:t.loadcard},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0",class:t.no_more_post},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("label",{staticClass:"grey--text",attrs:{for:""}},[t._v("Nothing Follows")])])],1)],1),t._v(" "),n("v-row",{staticClass:"ma-0 pa-0"},[n("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-6 offset-md-2",attrs:{sm:"12",md:"8",lg:"8"}},[n("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[n("v-btn",{staticClass:"white--text",class:t.disable_color,attrs:{disabled:t.disable_next},on:{click:t.getposts}},[t._v("\n          Next Article\n        ")])],1)],1)],1)],2)}),[],!1,null,"f625bf2c",null);e.default=component.exports;v()(component,{VBtn:_.a,VCard:h.a,VCardText:w.b,VCol:x.a,VRow:C.a,VSheet:y.a,VSkeletonLoader:R.a})},657:function(t,e,n){"use strict";n(545)},658:function(t,e,n){var o=n(15)(!1);o.push([t.i,"ul.clean[data-v-f39ea346]{list-style:none!important;list-style-type:none!important}",""]),t.exports=o},794:function(t,e,n){"use strict";n.r(e);var o=n(11),r=(n(54),{middleware:"auth",auth:!1,head:function(){return{title:"World Reminders",meta:[{hid:"World Reminders",name:"World Reminders",content:"World Reminders"}]}},data:function(){return{loading:!1}},created:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){},inject:{theme:{default:{isDark:!1}}},components:{},watch:{},methods:{}}),c=(n(657),n(40)),l=n(47),d=n.n(l),m=n(429),f=n(430),v=n(431),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{staticClass:"white",attrs:{fluid:""}},[e("v-row",{},[e("v-col",{attrs:{mg:"12",lg:"10","min-height":"450vh"}},[e("WorldRemindersCard")],1)],1)],1)}),[],!1,null,"f39ea346",null);e.default=component.exports;d()(component,{WorldRemindersCard:n(598).default}),d()(component,{VCol:m.a,VContainer:f.a,VRow:v.a})}}]);