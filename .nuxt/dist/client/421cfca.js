(window.webpackJsonp=window.webpackJsonp||[]).push([[45,13,14],{534:function(t,e,r){"use strict";r.r(e);var n={inheritAttrs:!1,props:["Dashboard","Redirect"]},c=r(39),o=r(40),l=r.n(o),d=r(484),h=r(216),f=r(140),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"pa-2 ma-2"},[r("v-card-title",[r("v-btn",t._b({},"v-btn",t.$attrs,!1),[r("h1",{staticClass:"black--text"},[t._v(t._s(t.Dashboard))])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardTitle:f.c})},535:function(t,e,r){"use strict";r.r(e);var n={},c=r(39),o=r(40),l=r.n(o),d=r(216),h=r(140),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"pa-2 ma-2"},[r("v-card-title",[t._t("menu_name")],2),t._v(" "),r("v-card-text",[t._t("create_menu"),t._v(" "),t._t("view_menu")],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VCardText:h.b,VCardTitle:h.c})},657:function(t,e,r){"use strict";var n=r(5),c=r(147);n({target:"String",proto:!0,forced:r(148)("sub")},{sub:function(){return c(this,"sub","","")}})},851:function(t,e,r){"use strict";r.r(e);var n=r(1),c=r(15);r(51),r(29),r(657),r(10),r(7),r(9),r(13),r(8),r(14);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={middleware:"auth",head:function(){return{title:"Dashboard"}},data:function(){return{}},computed:{email:function(){return this.$auth.state.user.email}},created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:if("laravelSanctum"!=t.$auth.state.strategy){e.next=5;break}e.next=13;break;case 5:return r=new FormData,"google"==t.$auth.state.strategy?(r.append("email",t.$auth.state.user.email),r.append("name",t.$auth.state.user.name),r.append("id",t.$auth.state.user.sub),r.append("social",t.$auth.state.strategy)):"github"==t.$auth.state.strategy?(r.append("email",t.$auth.state.user.email),r.append("name",t.$auth.state.user.login),r.append("id",t.$auth.state.user.id)):"facebook"==t.$auth.state.strategy&&(r.append("email",t.$auth.state.user.email),r.append("name",t.$auth.state.user.name),r.append("id",t.$auth.state.user.id),r.append("social",t.$auth.state.strategy)),e.next=9,t.$axios.$post("api/validate/account",r);case 9:return n=e.sent,c=l(l({},t.$auth.user),n.user),t.$auth.setUser(c),e.abrupt("return",{profile:n.data});case 13:case"end":return e.stop()}}),e)})))()}},h=r(39),f=r(40),m=r.n(f),v=r(484),$=r(496),_=r(58),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":"800vh"}},[r("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[r("DashTitle",{attrs:{Dashboard:"Dashboard",to:"/dashboard"}}),t._v(" "),r("Dashboard",[r("h2",{attrs:{slot:"menu_name"},slot:"menu_name"},[t._v("Profile MENU")]),t._v(" "),r("v-btn",{staticClass:"blue white--text",attrs:{slot:"view_menu",to:"/profile/edit"},slot:"view_menu"},[t._v("Manage Profile")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{DashTitle:r(534).default,Dashboard:r(535).default}),m()(component,{VBtn:v.a,VContainer:$.a,VSheet:_.a})}}]);