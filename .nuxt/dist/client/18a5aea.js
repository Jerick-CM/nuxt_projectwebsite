(window.webpackJsonp=window.webpackJsonp||[]).push([[57,12,13],{582:function(t,e,r){"use strict";r.r(e);var n={inheritAttrs:!1,props:["Dashboard","Redirect"]},o=r(35),c=r(31),l=r.n(c),d=r(518),h=r(238),m=r(85),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"pa-2 ma-2"},[r("v-card-title",[r("v-btn",t._b({},"v-btn",t.$attrs,!1),[r("h1",{staticClass:"black--text"},[t._v(t._s(t.Dashboard))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardTitle:m.c})},583:function(t,e,r){"use strict";r.r(e);var n={},o=r(35),c=r(31),l=r.n(c),d=r(238),h=r(85),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"pa-2 ma-2"},[r("v-card-title",[t._t("menu_name")],2),t._v(" "),r("v-card-text",[t._t("create_menu"),t._v(" "),t._t("view_menu")],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:h.b,VCardTitle:h.c})},704:function(t,e,r){"use strict";var n=r(6),o=r(156);n({target:"String",proto:!0,forced:r(157)("sub")},{sub:function(){return o(this,"sub","","")}})},869:function(t,e,r){"use strict";r.r(e);var n=r(1),o=r(15);r(51),r(29),r(704),r(8),r(7),r(10),r(13),r(9),r(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={middleware:"auth",head:function(){return{title:"Dashboard"}},data:function(){return{}},computed:{email:function(){return this.$auth.state.user.email}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:if("laravelSanctum"!=t.$auth.state.strategy){e.next=5;break}e.next=17;break;case 5:return r=new FormData,"google"==t.$auth.state.strategy?(r.append("email",t.$auth.state.user.email),r.append("name",t.$auth.state.user.name),r.append("id",t.$auth.state.user.sub),r.append("social",t.$auth.state.strategy),r.append("image",t.$auth.state.user.picture)):"github"==t.$auth.state.strategy?(r.append("email",t.$auth.state.user.email),r.append("name",t.$auth.state.user.login),r.append("id",t.$auth.state.user.id),r.append("image",t.$auth.state.user.avatar_url)):"facebook"==t.$auth.state.strategy&&(r.append("email",t.$auth.state.user.email),r.append("name",t.$auth.state.user.name),r.append("id",t.$auth.state.user.id),r.append("social",t.$auth.state.strategy),r.append("image",t.$auth.state.user.picture.data.url)),e.next=9,t.$axios.$post("api/validate/account",r);case 9:return n=e.sent,o=l(l({},t.$auth.user),n.user),console.log(n.user),console.log(n.user.is_admin),t.$auth.setUser(o),t.$auth.$storage.setCookie("is_admin",n.user.is_admin,!1),console.log(t.$auth.$storage.getCookie("is_admin")),e.abrupt("return",{profile:n.data});case 17:case"end":return e.stop()}}),e)})))()}},h=r(35),m=r(31),f=r.n(m),v=r(518),$=r(534),_=r(66),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":"800vh"}},[r("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[r("DashTitle",{attrs:{Dashboard:"Dashboard",to:"/dashboard"}}),t._v(" "),r("Dashboard",[r("h2",{attrs:{slot:"menu_name"},slot:"menu_name"},[t._v("Profile MENU")]),t._v(" "),r("v-btn",{staticClass:"blue white--text",attrs:{slot:"view_menu",to:"/profile/edit"},slot:"view_menu"},[t._v("Manage Profile")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{DashTitle:r(582).default,Dashboard:r(583).default}),f()(component,{VBtn:v.a,VContainer:$.a,VSheet:_.a})}}]);