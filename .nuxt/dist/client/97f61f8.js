(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{476:function(e,r,t){"use strict";t.d(r,"a",(function(){return c})),t.d(r,"b",(function(){return _})),t.d(r,"c",(function(){return f}));var n=t(477),o=t(0),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),_=Object(o.i)("v-card__text"),f=Object(o.i)("v-card__title");n.a},881:function(e,r,t){"use strict";t.r(r);var n=t(1),o=t(13),c=(t(29),t(51),Object(n.a)({auth:!1,head:function(){return{title:"Profile "+this.username,meta:[{hid:"Profile",name:"Profile",content:"Profile"}]}},data:function(){return{loading:!1,profile:[],pp:"test"}},watch:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function r(){var t,n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.$axios,e.error,n=e.params,r.next=3,t.$get("/sanctum/csrf-cookie");case 3:return r.next=5,t.$get("api/user_details/username/".concat(n.username));case 5:return o=r.sent,r.abrupt("return",{profile:o.user});case 7:case"end":return r.stop()}}),r)})))()},computed:{username:function(){return this.$route.params.username},allibataname:function(){return this.profile.name}},methods:{},mounted:function(){},components:{}},"watch",{})),l=t(36),_=t(37),f=t.n(_),v=t(477),d=t(476),m=t(488),h=t(489),w=t(173),x=t(490),component=Object(l.a)(c,(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-container",[t("v-row",[t("v-col",[t("h1",[e._v("Profile Username : "+e._s(e.username))])])],1),e._v(" "),t("v-row",[t("v-col",[t("v-card",[e.profile.details.cover_photo?t("v-img",{attrs:{src:e.profile.details.cover_photo}}):e._e(),e._v(" "),e.profile.details.profile_picture?t("v-img",{attrs:{src:e.profile.details.profile_picture}}):e._e(),e._v(" "),t("v-card-text",[t("span",{staticClass:"fs-1-5"},[e._v(e._s(e.profile.name))]),t("br"),e._v(" "),t("span",{staticClass:"fs-1-5"},[t("span",{staticClass:"font-Bonida"},[e._v(e._s(e.allibataname))])]),t("br"),e._v(" "),e.username?t("span",[e._v("Username: "+e._s(e.username))]):e._e(),t("br"),e._v(" "),e.profile.email?t("span",[e._v("Email: "+e._s(e.profile.email))]):e._e(),t("br"),e._v(" "),e.profile.details.house_number?t("span",[e._v(" Address No: "+e._s(e.profile.details.house_number)+" ")]):e._e(),e._v(" "),t("br"),e._v(" "),e.profile.details.street?t("span",[e._v(" Address street: "+e._s(e.profile.details.street)+" ")]):e._e(),e._v(" "),t("br"),e._v(" "),e.profile.details.city?t("span",[e._v(" Address City: "+e._s(e.profile.details.city)+" ")]):e._e(),e._v(" "),t("br"),e._v(" "),e.profile.details.province?t("span",[e._v(" Address province: "+e._s(e.profile.details.province)+" ")]):e._e(),e._v(" "),t("br"),e._v(" "),e.profile.details.country?t("span",[e._v(" Address country: "+e._s(e.profile.details.country)+" ")]):e._e(),e._v(" "),t("br")])],1)],1)],1)],1)}),[],!1,null,null,null);r.default=component.exports;f()(component,{VCard:v.a,VCardText:d.b,VCol:m.a,VContainer:h.a,VImg:w.a,VRow:x.a})}}]);