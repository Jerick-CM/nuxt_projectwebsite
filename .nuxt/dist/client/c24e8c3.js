(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{634:function(t,e,n){var content=n(834);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("1b4801c7",content,!0,{sourceMap:!1})},833:function(t,e,n){"use strict";n(634)},834:function(t,e,n){var r=n(11)(!1);r.push([t.i,'.font-lulu[data-v-7071ad17]{font-family:"Lulu",sans-serif}.font-halimun[data-v-7071ad17]{font-family:"Halimun",sans-serif}.font-barlowreg[data-v-7071ad17]{font-family:"Barlow-Regular",sans-serif}.bounce-enter-active[data-v-7071ad17]{-webkit-animation:bounce-in-data-v-7071ad17 .5s;animation:bounce-in-data-v-7071ad17 .5s}.bounce-leave-active[data-v-7071ad17]{animation:bounce-in-data-v-7071ad17 .5s reverse}@-webkit-keyframes bounce-in-data-v-7071ad17{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}@keyframes bounce-in-data-v-7071ad17{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}',""]),t.exports=r},848:function(t,e,n){"use strict";n.r(e);n(10),n(7),n(9),n(13),n(8),n(14);var r=n(15),o=n(1),l=(n(51),n(134));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={loading:{color:"orange",height:"5px"},middleware:"auth",auth:!1,head:function(){return{title:"Profile ",meta:[{hid:"Profile",name:"Profile",content:"Profile"}]}},data:function(){return{selectedItem:0,show:!0,title:"",model:6,rounded:["0","sm","md","lg","xl","pill","circle"],links:[]}},layout:"default",methods:d({},Object(l.b)("messageoftheday",["fetchQuote"])),computed:d({},Object(l.c)("messageoftheday",["MessageOfTheDay","LoadingStatus"])),created:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:try{t.fetchQuote()}catch(t){console.log(t)}case 3:case"end":return e.stop()}}),e)})))()}},m=(n(833),n(39)),f=n(40),h=n.n(f),y=n(210),w=n(484),k=n(216),x=n(495),C=n(496),_=n(174),j=(n(245),n(287)),O=Object(j.a)("layout"),I=n(213),P=n(132),V=n(32),L=n(215),A=n(217),D=n(497),S=n(58),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"ma-0 pa-0 grey lighten-3",attrs:{fluid:""}},[n("v-row",[n("v-col",{staticClass:"ma-0 pa-0",attrs:{xs:"12",sm:"12",lg:"12",md:"12"}},[n("v-sheet",{staticClass:"black lighten-5",attrs:{elevation:"2","min-height":"10vh"}},[n("v-container",[n("v-row",{staticClass:"pt-5"},[n("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",lg:"9"}},[n("label",{staticClass:"font-lulu white--text",class:{"fs-1.1":t.$vuetify.breakpoint.smAndDown,"fs-3":t.$vuetify.breakpoint.mdAndUp}},[t._v("JERICK C. MANGALUS")])]),t._v(" "),n("v-col",{staticClass:"text-center mt-7",attrs:{cols:"12",sm:"12",lg:"3"}},[n("label",{staticClass:"text-right white--text",class:{"fs-0-5":t.$vuetify.breakpoint.smAndDown,"fs-1-0":t.$vuetify.breakpoint.mdAndUp}},[t._v("[ Technology R&D ]\n              ")])])],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"col-md-6 offset-md-3 text-center"},[n("div",{staticClass:"hidden-sm-and-down text-center"},t._l(t.links,(function(link){return n("v-btn",{key:link.label,staticClass:"black pa-1 ma-1 white--text",attrs:{plain:"",text:"",tile:"",rounded:""}},[t._v("\n                  "+t._s(link.label)+"\n                ")])})),1),t._v(" "),n("v-card",{staticClass:"mx-auto hidden-md-and-up d-none",attrs:{tile:""}},[n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.links,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.label)}})],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"ma-0 pa-0",attrs:{xs:"12",sm:"12",lg:"12"}},[n("v-sheet",{staticClass:"grey lighten-5 pa-1 ma-1",attrs:{elevation:"2"}},[n("v-container",{},[n("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[n("v-layout",{attrs:{"justify-center":"","align-center":""}},[t.$vuetify.breakpoint.smAndDown?n("v-avatar",{staticClass:"text-center black",attrs:{size:150}},[n("v-img",{staticClass:"text-center",attrs:{src:"/images/cartoon-darken.jpg"}})],1):n("v-avatar",{staticClass:"text-center black",attrs:{size:350}},[n("v-img",{staticClass:"text-center",attrs:{src:"/images/cartoon-darken.jpg"}})],1)],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[n("v-col",{staticClass:"font-avenir fs-1-4 text-center",attrs:{cols:"12",sm:"12",lg:"12"}})],1)],1)],1)],1)],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"ma-0 pa-0",attrs:{xs:"12",sm:"12",lg:"12"}},[n("v-sheet",{attrs:{color:"background",elevation:"2","min-height":"30vh"}},[n("v-container",{},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-1 ma-1",attrs:{cols:"12",sm:"12",lg:"12"}},[n("p",{staticClass:"fs-1-1 text-justify fs-1-8 font-barlowreg"},[t._v("\n                The inspiration of this website build is to expand my\n                knowledge base , in web development. Secondly I am planning to\n                retain this website in a public server earning from ads. Maybe\n                in my free time I could just update it with my newly learned\n                tricks in web deveopment. This website is running in frontend\n                Vue in a nuxt framework and backend is Laravel8. The time this\n                site is being developed is in the new release of PHP version\n                8. Also docker is in my list of research I am actually\n                surprised with laravel response to api is very slow and that\n                is because i am using windows file system that later i\n                discovered you need to be inside the linux filesystem because\n                I was running the backend in a linux container image. This\n                project is using docker in local and docker also in Google\n                Cloud Platform that is my dev-ops application. I am using\n                Laravel sail to build the containers connecting backend and\n                frontend I used Laravel Santum together with Nuxt auth next\n                node plugin. Along development I am learning a lot I advise\n                aldo for developer to do this during work from home. By the\n                way developing this site is during the pandemic it started in\n                March 20, 2020 here in the Philippines and at present covid-19\n                is still a threat to peoples lives. Even though their is\n                already a vaccine the production seems to still inadequate.\n              ")])])],1)],1)],1)],1)],1),t._v(" "),n("v-row",[n("v-col",{staticClass:"ma-0 pa-0",attrs:{xs:"12",sm:"12",lg:"12"}},[n("v-sheet",{attrs:{elevation:"2","min-height":"10vh"}},[n("v-container",{},[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[t.LoadingStatus?n("v-progress-linear",{attrs:{color:"blue accent-5",indeterminate:"",rounded:"",height:"6"}}):t._e(),t._v(" "),t._l(t.MessageOfTheDay,(function(e){return t.LoadingStatus?t._e():n("div",{key:e.author},[n("p",{staticClass:"text-center mt-5",class:{"fs-1.1":t.$vuetify.breakpoint.smAndDown,"fs-1.5":t.$vuetify.breakpoint.mdAndUp},attrs:{for:""}},[t._v('\n                  " '+t._s(e.message)+' " - '+t._s(e.author)+"\n                ")])])}))],2)],1)],1)],1)],1)],1),t._v(" "),n("v-row",[n("v-col",[n("script",{attrs:{async:"",src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n        ")]),t._v(" "),n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-client":"ca-pub-3213536425475125","data-ad-slot":"3715096457","data-ad-format":"auto","data-full-width-responsive":"true"}})])],1)],1)}),[],!1,null,"7071ad17",null);e.default=component.exports;h()(component,{VAvatar:y.a,VBtn:w.a,VCard:k.a,VCol:x.a,VContainer:C.a,VImg:_.a,VLayout:O,VList:I.a,VListItem:P.a,VListItemContent:V.a,VListItemGroup:L.a,VListItemTitle:V.b,VProgressLinear:A.a,VRow:D.a,VSheet:S.a})}}]);