(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{236:function(t,e,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7388ab72",content,!0,{sourceMap:!1})},238:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("56b15182",content,!0,{sourceMap:!1})},263:function(t,e,n){"use strict";var r=n(11),o=n(2),c=(n(62),n(58)),l=n.n(c),d=(n(189),{data:function(){var t;return t={loading:{color:"blue",height:"20px"},rightDrawer:!1,myitems:[{title:"Dashboard",link:"/dashboard"}],menu:[{icon:"Dashboard",title:"Dashboard"}],top_nav:[{label:"Main",link:"/"},{label:"Dashboard",link:"dashboard"},{label:"Login",link:"login"},{label:"Register",link:"register"},{label:"about",link:"about"},{label:"contact",link:"contact"}],value:"recent",clipped:!1,drawer:!0,fixed:!1,items:[{icon:"mdi-home-import-outline",title:"Home",to:"/"}],miniVariant:!1,right:!0},Object(o.a)(t,"rightDrawer",!1),Object(o.a)(t,"title","Project Website"),t},computed:{},methods:{menuItems:function(){return this.menu},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.a.start(),e.prev=1,l.a.inc(),e.next=5,t.$auth.logout();case 5:l.a.done(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),l.a.done(),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}),v=(n(315),n(71)),f=n(83),m=n.n(f),h=n(403),_=n(411),w=n(404),x=n(190),y=n(405),k=n(406),C=n(176),L=n(177),D=n(110),V=n(178),I=n(52),O=n(407),T=n(408),R=n(409),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-app-bar",{staticClass:"white",attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-spacer"),t._v(" "),n("div",{},[n("v-btn",{staticClass:"white pa-1 ma-1 mr-10",attrs:{plain:"",text:"",tile:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("mdi-code-json")]),t._v(" --| Project Website\n        "),n("v-icon",[t._v("mdi-laptop")])],1),t._v(" "),n("v-btn",{staticClass:"white pa-1 ma-1",attrs:{to:"/news",plain:"",text:"",tile:"",rounded:""}},[n("v-icon",[t._v("mdi-newspaper-variant-multiple-outline")]),t._v(" - NEWS")],1),t._v(" "),n("v-btn",{staticClass:"white pa-1 ma-1",attrs:{to:"/posts",plain:"",text:"",tile:"",rounded:""}},[n("v-icon",[t._v("mdi-post-outline")]),t._v(" POST")],1),t._v(" "),n("v-btn",{staticClass:"white pa-1 ma-1",attrs:{to:"/blog",plain:"",text:"",tile:"",rounded:""}},[n("v-icon",[t._v("mdi-blogger")]),t._v("BLOG")],1),t._v(" "),n("v-btn",{staticClass:"white pa-1 ma-1",attrs:{to:"/technology",plain:"",text:"",tile:"",rounded:""}},[n("v-icon",[t._v("mdi-cloud-check-outline")]),t._v(" TECHNOLOGY")],1),t._v(" "),n("v-btn",{staticClass:"white pa-1 ma-1",attrs:{to:"/tutorials",plain:"",text:"",tile:"",rounded:""}},[n("v-icon",[t._v("mdi-cast-education")]),t._v(" TUTORIALS")],1)],1),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"hidden-sm-and-down"},[t.$auth.loggedIn?t._e():n("v-btn",{staticClass:"white pa-1 ma-1",attrs:{to:"/login",plain:"",text:"",tile:"",rounded:""}},[n("v-icon",[t._v("mdi-login-variant")]),t._v("Login")],1),t._v(" "),t.$auth.loggedIn?t._e():n("v-btn",{staticClass:"white pa-1 ma-1",attrs:{to:"/register",plain:"",text:"",tile:"",rounded:""}},[n("v-icon",[t._v("mdi-account-plus-outline ")]),t._v(" - Register")],1),t._v(" "),t.$auth.loggedIn?n("v-btn",{staticClass:"white pa-1 ma-1",attrs:{plain:"",text:"",tile:"",rounded:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[t._v("\n        Dashboard")]):t._e(),t._v(" "),t.$auth.loggedIn?n("v-btn",{staticClass:"white pa-1 ma-1",attrs:{plain:"",text:"",tile:"",rounded:""},on:{click:function(e){return e.preventDefault(),t.logout()}}},[t._v("\n        Logout")]):t._e()],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"hidden-md-and-up",attrs:{icon:""}},[n("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),n("v-main",[n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("nuxt")],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-item",{attrs:{to:"/"}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-code-json")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n            Project Website "),n("v-icon",[t._v("mdi-laptop")])],1)],1)],1),t._v(" "),t.$auth.loggedIn?n("v-list-item",{attrs:{to:"/dashboard"}},[n("v-list-item-action",[n("v-icon",[t._v(" mdi-page-layout-footer ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(" Dashboard")])],1)],1):t._e(),t._v(" "),t.$auth.loggedIn?n("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout()}}},[n("v-list-item-action",[n("v-icon",[t._v(" mdi-page-layout-footer ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(" Logout")])],1)],1):t._e(),t._v(" "),n("v-list-item",{attrs:{router:"",exact:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-list-item-action",[n("v-icon",[t._v(" mdi-page-layout-footer ")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v(" Show/Hide Footer")])],1)],1)],1)],1),t._v(" "),n("v-footer",{staticClass:"black lighten-4",attrs:{absolute:!t.fixed,app:""}},[n("v-spacer"),t._v(" "),n("div",{staticClass:"hidden-sm-and-down"},[n("v-btn",{staticClass:"black lighten-2 pa-1 ma-1 mr-10 white--text",attrs:{plain:"",text:"",tile:"",rounded:""}},[t._v("\n        © "+t._s((new Date).getFullYear())+"\n      ")]),t._v(" "),n("v-btn",{staticClass:"black lighten-2 pa-1 ma-1 white--text",attrs:{to:"/about",plain:"",text:"",tile:"",rounded:""}},[n("v-icon",[t._v("mdi-information-variant")]),t._v(" ABOUT")],1),t._v(" "),n("v-btn",{staticClass:"black lighten-2 pa-1 ma-1 white--text",attrs:{to:"/contact-us",plain:"",text:"",tile:"",rounded:""}},[n("v-icon",[t._v("mdi-human-greeting-proximity")]),t._v("CONTACT US")],1)],1),t._v(" "),n("v-spacer")],1)],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VApp:h.a,VAppBar:_.a,VAppBarNavIcon:w.a,VBtn:x.a,VContainer:y.a,VFooter:k.a,VIcon:C.a,VList:L.a,VListItem:D.a,VListItemAction:V.a,VListItemContent:I.a,VListItemTitle:I.b,VMain:O.a,VNavigationDrawer:T.a,VSpacer:R.a})},264:function(t,e,n){"use strict";var r=n(11),o=(n(62),n(58)),c=n.n(o),l=(n(189),{loading:{color:"blue",height:"20px"},data:function(){return{myitems:[{title:"Dashboard",link:"/dashboard"}],menu:[{icon:"Dashboard",title:"Dashboard"}],top_nav:[{label:"Main",link:"/"},{label:"Dashboard",link:"dashboard"},{label:"Login",link:"login"},{label:"Register",link:"register"},{label:"about",link:"about"},{label:"contact",link:"contact"}],value:"recent",clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Login",to:"/login"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Nuxt Laravel Project"}},computed:{},methods:{menuItems:function(){return this.menu},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.a.start(),e.prev=1,c.a.inc(),e.next=5,t.$auth.logout();case 5:c.a.done(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),c.a.done(),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}},created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case 1:case"end":return t.stop()}}),t)})))()}}),d=n(71),v=n(83),f=n.n(v),m=n(403),h=n(411),_=n(190),w=n(405),x=n(406),y=n(176),k=n(177),C=n(110),L=n(52),D=n(407),V=n(398),I=n(46),O=n(409),T=n(201),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{blue:""}},[n("v-app",{attrs:{id:"inspire"}},[n("v-app-bar",{staticClass:"grey lighten-4",attrs:{app:"",fixed:""}},[n("v-btn",{attrs:{to:"/",depressed:"",color:"primary"}},[n("v-icon",{attrs:{color:"white lighten-2"}},[t._v("\n          mdi-domain\n        ")]),t._v("\n        - Project Website\n\n        "),n("v-icon",{attrs:{color:"white lighten-2"}},[t._v("\n          sign-out\n        ")])],1),t._v(" "),n("v-spacer"),t._v(" "),t.$auth.loggedIn&&t.$auth.user.is_admin?n("v-toolbar-items",{staticClass:"hidden-sm-and-down mr-10"},[n("v-btn",{staticClass:"blue--text white",attrs:{depressed:"",color:"primary",to:"/admin"}},[t._v("Admin\n        ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"primary",to:"/users"}},[t._v("Users ")])],1):t._e(),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-sm-and-down mr-10"},[n("v-btn",{attrs:{depressed:"",color:"primary",to:"/news"}},[t._v("News ")]),t._v(" "),n("v-btn",{attrs:{depressed:"",color:"primary",to:"/posts"}},[t._v("Posts ")]),t._v(" "),t.$auth.loggedIn?n("v-btn",{attrs:{depressed:"",color:"green",to:"/dashboard"}},[t._v("\n          [ "+t._s(t.$auth.user.name)+" -Dashboard ]\n        ")]):t._e(),t._v(" "),t.$auth.loggedIn?t._e():n("v-btn",{attrs:{depressed:"",color:"primary",to:"/login"}},[t._v("\n          Login\n        ")]),t._v(" "),t.$auth.loggedIn?t._e():n("v-btn",{attrs:{depressed:"",color:"primary",to:"/register"}},[t._v("\n          Register\n        ")]),t._v(" "),t.$auth.loggedIn?n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(e){return e.preventDefault(),t.logout()}}},[t._v("Logout\n\n          "),n("v-icon",[t._v("\n            sign-out-alt\n          ")])],1):t._e()],1),t._v(" "),n("v-sheet",{staticClass:"hidden-md-and-up",attrs:{color:"primary",outlined:""}},[n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"primary",dark:""}},"v-btn",o,!1),r),[t._v("\n              Menu\n            ")])]}}])},[t._v(" "),n("v-list",[t.$auth.loggedIn?n("v-list-item",{attrs:{to:"/dashboard"}},[n("v-list-item-title",[t._v("Dashboard")])],1):t._e(),t._v(" "),t.$auth.loggedIn?t._e():n("v-list-item",{attrs:{to:"/login"}},[n("v-list-item-title",{attrs:{depressed:"",color:"primary"}},[t._v("Login")])],1),t._v(" "),t.$auth.loggedIn?t._e():n("v-list-item",{attrs:{to:"/register"}},[n("v-list-item-title",{attrs:{depressed:"",color:"primary"}},[t._v("\n                Register\n              ")])],1),t._v(" "),t.$auth.loggedIn?n("v-list-item",{on:{click:function(e){return e.preventDefault(),t.logout()}}},[n("v-list-item-title",[t._v("\n                Logout\n              ")])],1):t._e()],1)],1)],1)],1),t._v(" "),n("v-main",[n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("nuxt")],1)],1)],1),t._v(" "),n("v-footer",{staticClass:"white--text grey lighten-4",attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© May 2021 - "+t._s((new Date).getFullYear()))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",{staticClass:"hidden-sm-and-down mr-10"},[n("v-btn",{staticClass:"white--text",attrs:{depressed:"",color:"blue darken-3",to:"/about"}},[t._v("\n        About Us\n      ")]),t._v(" "),n("v-btn",{staticClass:"white--text",attrs:{depressed:"",color:"blue darken-3",to:"/contact-us"}},[t._v("\n        Contact Us\n      ")])],1)],1)],1)}),[],!1,null,"5c2c00f7",null);e.a=component.exports;f()(component,{VApp:m.a,VAppBar:h.a,VBtn:_.a,VContainer:w.a,VFooter:x.a,VIcon:y.a,VList:k.a,VListItem:C.a,VListItemTitle:L.b,VMain:D.a,VMenu:V.a,VSheet:I.a,VSpacer:O.a,VToolbarItems:T.a})},275:function(t,e,n){n(276),t.exports=n(277)},293:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.app,n=t.redirect;if(0==e.$auth.user.is_admin)return n("/")}},294:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.app,n=t.redirect;if(e.$auth.loggedIn)return n("/")}},300:function(t,e,n){"use strict";n(236)},301:function(t,e,n){var r=n(14)(!1);r.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=r},306:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("168108f4",content,!0,{sourceMap:!1})},307:function(t,e,n){var r=n(14),o=n(308),c=n(309),l=n(310),d=n(311),v=n(312),f=n(313),m=r(!1),h=o(c),_=o(l),w=o(d),x=o(v),y=o(f);m.push([t.i,'@font-face{font-family:"Lulu";src:local("Lulu"),url('+h+') format("truetype")}@font-face{font-family:"Avenir";src:local("Avenir"),url('+_+') format("truetype")}@font-face{font-family:"Halimun";src:local("Halimun"),url('+w+') format("truetype")}@font-face{font-family:"Kalam-Regular";src:local("Kalam"),url('+x+') format("truetype")}@font-face{font-family:"Barlow-Regular";src:local("Barlow"),url('+y+') format("truetype")}',""]),t.exports=m},309:function(t,e,n){t.exports=n.p+"fonts/FontsFree-Net-Lulo-Clean-W01-One-Bold.cf6ce05.ttf"},310:function(t,e,n){t.exports=n.p+"fonts/Avenir-LT-35-Light.e7bf75f.ttf"},311:function(t,e,n){t.exports=n.p+"fonts/Halimun-W7jn.d49fc08.ttf"},312:function(t,e,n){t.exports=n.p+"fonts/Kalam-Regular.ca4a04f.ttf"},313:function(t,e,n){t.exports=n.p+"fonts/BarlowCondensed-Regular.0bac2bb.ttf"},315:function(t,e,n){"use strict";n(238)},316:function(t,e,n){var r=n(14)(!1);r.push([t.i,".transparent{opacity:.25;border-color:transparent!important}.fs-0-7{font-size:.7rem}.fs-0-6{font-size:.6rem}.fs-0-5{font-size:.5rem}.fs-1{font-size:1rem}.fs-1-1{font-size:1.1rem}.fs-1-2{font-size:1.2rem}.fs-1-3{font-size:1.3rem}.fs-1-4{font-size:1.4rem}.fs-1-5{font-size:1.5rem}.fs-1-8{font-size:1.8rem}.fs-2{font-size:2rem}.fs-3{font-size:3rem}.fs-4{font-size:4rem}",""]),t.exports=r},372:function(t,e,n){"use strict";n.r(e);e.default={state:{},getters:{},actions:{},mutations:{}}},373:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(62),{fetchQuote:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=t.commit)("LoadingStatus",!0),n.next=4,e.$axios.$get("/api/msgoftheday");case 4:o=n.sent,r("setQuote",o.data),r("LoadingStatus",!1);case 7:case"end":return n.stop()}}),n)})))()}});e.default={state:{MessageOfTheDay:[],LoadingStatus:!1},getters:{MessageOfTheDay:function(t){return t.MessageOfTheDay},LoadingStatus:function(t){return t.LoadingStatus}},actions:o,mutations:{LoadingStatus:function(t,e){return t.LoadingStatus=e},setQuote:function(t,e){return t.MessageOfTheDay=e}}}},374:function(t,e,n){"use strict";n.r(e);e.default={state:{posts:[]},getters:{},actions:{},mutations:{}}},375:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));var r=function(){return{counter:0}},o={increment:function(t){t.counter++},decrement:function(t){t.counter--}}},376:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"mutations",(function(){return o}));n(117);var r=function(){return{list:[]}},o={add:function(t,text){t.list.push({text:text,done:!1})},remove:function(t,e){var n=e.todo;t.list.splice(t.list.indexOf(n),1)},toggle:function(t,e){e.done=!e.done}}},377:function(t,e,n){"use strict";n.r(e);var r=n(11),o=(n(8),n(62),n(69)),c=n.n(o),l={fetchTodos:function(t,data){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,c.a.get("https://jsonplaceholder.typicode.com/todos");case 3:r=e.sent,n("setTodos",r.data);case 5:case"end":return e.stop()}}),e)})))()},addTodos:function(t,title){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,c.a.post("https://jsonplaceholder.typicode.com/todos",{title:title,completed:!1});case 3:r=e.sent,n("newTodo",r.data);case 5:case"end":return e.stop()}}),e)})))()},deleteTodos:function(t,e){return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,c.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e));case 3:r("removeTodo",e);case 4:case"end":return n.stop()}}),n)})))()}};e.default={state:{mydata:[{id:1,title:"Test 1"},{id:2,title:"Test 2"}],todos:[]},getters:{allTodos:function(t){return t.todos},myDatas:function(t){return t.mydata}},actions:l,mutations:{setTodos:function(t,e){return t.todos=e},newTodo:function(t,e){return t.todos.unshift(e)},removeTodo:function(t,e){return t.todos=t.todos.filter((function(t){return t.id!==e}))}}}},76:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(300),n(71)),c=n(83),l=n.n(c),d=n(403),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[275,33,7,34]]]);