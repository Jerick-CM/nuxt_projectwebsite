(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{572:function(t,e,r){var content=r(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("35aab8f9",content,!0,{sourceMap:!1})},573:function(t,e,r){var content=r(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("7d6a1a23",content,!0,{sourceMap:!1})},598:function(t,e,r){"use strict";r(572)},599:function(t,e,r){var l=r(11)(!1);l.push([t.i,".nuxtlink[data-v-4351eb9e]{text-decoration:none!important}.hr-green[data-v-4351eb9e]{border:3px solid green}.show-btns[data-v-4351eb9e]{color:#fff!important}.cover[data-v-4351eb9e]{-o-object-fit:cover;object-fit:cover}",""]),t.exports=l},600:function(t,e,r){"use strict";r(573)},601:function(t,e,r){var l=r(11)(!1);l.push([t.i,".nuxtlink[data-v-5d90af16]{text-decoration:none!important}.hr-brown[data-v-5d90af16]{border:3px solid brown}",""]),t.exports=l},666:function(t,e,r){var content=r(835);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("6b1a2f36",content,!0,{sourceMap:!1})},675:function(t,e,r){"use strict";r.r(e);var l=r(15),n=(r(52),{data:function(){return{load_component:!0,nuxt:[],laravel:[],vue:[],load_nuxt:!1,load_laravel:!1,load_vue:!1,height:"17vh",width:"100vh",slider_right:"90%",slider_left:"9%"}},fetch:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.load_component=!0,t.load_nuxt=!0,e.next=4,t.$axios.$get("/sanctum/csrf-cookie");case 4:return e.next=6,t.$axios.$get("api/blog/page/1/item/5/tags/nuxt");case 6:return r=e.sent,t.load_nuxt=!1,t.nuxt=r.data,t.load_laravel=!0,e.next=12,t.$axios.$get("/sanctum/csrf-cookie");case 12:return e.next=14,t.$axios.$get("api/blog/page/1/item/5/tags/Laravel");case 14:return l=e.sent,t.load_laravel=!1,t.laravel=l.data,t.load_vue=!0,e.next=20,t.$axios.$get("/sanctum/csrf-cookie");case 20:return e.next=22,t.$axios.$get("api/blog/page/1/item/5/tags/vue3");case 22:n=e.sent,t.load_vue=!1,t.vue=n.data,t.load_component=!1;case 26:case"end":return e.stop()}}),e)})))()}}),o=(r(598),r(35)),c=r(31),v=r.n(c),d=r(233),m=r(80),h=r(526),f=r(534),_=r(836),x=r(175),w=r(183),C=r(527),k=r(66),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return 0==t.load_component?r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:" mb-0 pb-0"},[r("hr",{staticClass:"hr-green",attrs:{color:"green"}})])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"ma-0 mt-0 pt-0"},[r("h2",{staticClass:"ma-0 mt-0 pt-0 green--text text--darken-5"},[t._v("\n        Featured Topics\n      ")])])],1),t._v(" "),r("v-row",{staticClass:"mt-2 pt-2 hidden-sm-and-down"},[r("v-col",[r("v-sheet",{staticClass:"d-flex "},[r("v-hover",{staticClass:"ml-5 mr-3 d-flex align-center flex-column ",attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.hover;return[r("v-card",{class:{"on-hover":l},attrs:{elevation:l?16:2,color:"green",height:t.height,width:t.slider_left}},[r("label",{staticClass:"justify-center  white--text "},[t._v("Nuxt")]),r("br"),t._v(" "),r("div",[r("v-img",{staticClass:"justify-center",attrs:{src:"/icons/nuxt-js.svg",width:"25px"}})],1),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/nuxt"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,!1,1364033321)}),t._v(" "),t._l(t.nuxt,(function(e,l){return r("v-hover",{key:l,attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.hover;return[r("v-card",{staticClass:"mx-auto mr-1 ml-1",class:{"on-hover":n},attrs:{"max-width":"400",elevation:n?16:2,height:t.height,width:t.width}},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height,width:"100%"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"lh-1 fs-1 white--text pa-0 ma-0 pl-1 ",attrs:{color:"blue"}},[t._v("\n                  "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"",width:"100%",height:t.height,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"lh-1 fs-1 white--text pa-0 ma-0 pl-1"},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,!0)})}))],2)],1)],1),t._v(" "),r("v-row",{staticClass:"mt-2 pt-2 hidden-sm-and-down"},[r("v-col",[r("v-sheet",{staticClass:"d-flex "},[r("v-hover",{staticClass:"ml-5 mr-3 d-flex align-center flex-column ",attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.hover;return[r("v-card",{class:{"on-hover":l},attrs:{elevation:l?16:2,color:"orange",height:t.height,width:t.slider_left}},[r("label",{staticClass:"justify-center  white--text "},[t._v("Laravel")]),r("br"),t._v(" "),r("div",[r("v-img",{staticClass:"justify-center",attrs:{src:"/icons/laravel.svg",width:"25px"}})],1),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/Laravel"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,!1,753362848)}),t._v(" "),t._l(t.laravel,(function(e,l){return r("v-hover",{key:l,attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.hover;return[r("v-card",{staticClass:"mx-auto mr-1 ml-1",class:{"on-hover":n},attrs:{"max-width":"400",elevation:n?16:2,height:t.height,width:t.width}},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height,width:"100%"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"lh-1 fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v("\n                  "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"",width:"100%",height:t.height,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"lh-1 fs-1 white--text pa-0 ma-0 pl-1"},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,!0)})}))],2)],1)],1),t._v(" "),r("v-row",{staticClass:"mt-2 pt-2 hidden-sm-and-down"},[r("v-col",[r("v-sheet",{staticClass:"d-flex "},[r("v-hover",{staticClass:"ml-5 mr-3 d-flex align-center flex-column ",attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.hover;return[r("v-card",{class:{"on-hover":l},attrs:{elevation:l?16:2,color:"green",height:t.height,width:t.slider_left}},[r("label",{staticClass:"justify-center  white--text "},[t._v("Vue")]),r("br"),t._v(" "),r("div",[r("v-img",{staticClass:"justify-center",attrs:{src:"/icons/vue-js.svg",width:"25px"}})],1),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/vue3"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,!1,4113029579)}),t._v(" "),t._l(t.vue,(function(e,l){return r("v-hover",{key:l,attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.hover;return[r("v-card",{staticClass:"mx-auto mr-1 ml-1",class:{"on-hover":n},attrs:{"max-width":"400",elevation:n?16:2,height:t.height,width:t.width}},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height,width:"100%"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"lh-1 fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v("\n                  "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"",width:"100%",height:t.height,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"lh-1 fs-1 white--text pa-0 ma-0 pl-1"},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,!0)})}))],2)],1)],1),t._v(" "),r("v-row",{staticClass:"hidden-md-and-up"},[r("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.hover;return[r("v-card",{staticClass:"d-flex align-center flex-column",class:{"on-hover":l},attrs:{elevation:l?16:2,color:"green"}},[r("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Nuxt")]),r("br"),t._v(" "),r("v-img",{attrs:{src:"/icons/nuxt-js.svg",width:"25px"}}),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/nuxt"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,!1,3190998480)})],1),t._v(" "),t._l(t.nuxt,(function(e,l){return r("v-col",{key:l,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-card",{staticClass:"mr-1 ml-1 cover"},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{"aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)}))],2),t._v(" "),r("v-row",{staticClass:"hidden-md-and-up"},[r("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.hover;return[r("v-card",{staticClass:"d-flex align-center flex-column",class:{"on-hover":l},attrs:{elevation:l?16:2,color:"orange"}},[r("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Laravel")]),r("br"),t._v(" "),r("v-img",{attrs:{src:"/icons/laravel.svg",width:"25px"}}),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/nuxt"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,!1,134375535)})],1),t._v(" "),t._l(t.laravel,(function(e,l){return r("v-col",{key:l,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-card",{key:l,staticClass:"mr-1 ml-1"},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"","aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)}))],2),t._v(" "),r("v-row",{staticClass:"hidden-md-and-up"},[r("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.hover;return[r("v-card",{staticClass:"d-flex align-center flex-column",class:{"on-hover":l},attrs:{elevation:l?16:2,color:"green"}},[r("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Vue")]),r("br"),t._v(" "),r("v-img",{attrs:{src:"/icons/vue-js.svg",width:"25px"}}),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/nuxt"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,!1,1755623600)})],1),t._v(" "),t._l(t.vue,(function(e,l){return r("v-col",{key:l,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-card",{key:l,staticClass:"mr-1 ml-1"},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"","aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)}))],2)],1):t._e()}),[],!1,null,"4351eb9e",null);e.default=component.exports;v()(component,{VCard:d.a,VCardTitle:m.c,VCol:h.a,VContainer:f.a,VHover:_.a,VIcon:x.a,VImg:w.a,VRow:C.a,VSheet:k.a})},676:function(t,e,r){"use strict";r.r(e);var l=r(15),n=(r(52),{data:function(){return{tags:[],load_tags:!1,total_tags:0,height:"200px"}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.load_tags=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/tags");case 5:r=e.sent,t.load_tags=!1,t.tags=r.data,t.total_tags=r.total;case 9:case"end":return e.stop()}}),e)})))()},fetch:function(){return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}),o=(r(600),r(35)),c=r(31),v=r.n(c),d=r(233),m=r(80),h=r(241),f=r(556),_=r(526),x=r(534),w=r(527),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:" mb-0 pb-0"},[r("hr",{staticClass:"hr-brown",attrs:{color:"brown"}})])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"ma-0 mt-0 pt-0"},[r("h2",{staticClass:"brown--text ma-0 mt-0 pt-0 ",attrs:{color:"brown"}},[t._v("\n        Tags ("+t._s(t.total_tags)+")\n      ")])])],1),t._v(" "),r("v-row",[r("v-col",[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-chip-group",{attrs:{column:"","active-class":"deep-purple accent-4 white--text"}},t._l(t.tags,(function(e,l){return r("v-chip",{key:l,staticClass:"white--text",attrs:{to:"/blog/tags/"+e.name,color:"blue"}},[t._v(t._s(e.name))])})),1)],1)],1)],1)],1)],1)}),[],!1,null,"5d90af16",null);e.default=component.exports;v()(component,{VCard:d.a,VCardText:m.b,VChip:h.a,VChipGroup:f.a,VCol:_.a,VContainer:x.a,VRow:w.a})},677:function(t,e,r){"use strict";r.r(e);var l=r(35),n=r(31),o=r.n(n),c=r(548),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})}),[],!1,null,null,null);e.default=component.exports;o()(component,{VSkeletonLoader:c.a})},678:function(t,e,r){"use strict";r.r(e);var l=r(35),n=r(31),o=r.n(n),c=r(518),v=r(233),d=r(534),m=r(66),h=r(90),f=r(837),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{staticClass:"pa-2 pt-5",attrs:{color:"blue"}},[r("v-container",[r("v-card",{attrs:{outlined:""}},[r("v-sheet",{staticClass:"ma-1 pa-1"},[r("h1",{staticClass:"blue--text"},[t._v("Contact Us")])]),t._v(" "),r("v-sheet",{staticClass:"ma-1 pa-1"},[r("h2",{staticClass:"green--text"},[t._v("\n          For all inquiries please contact us below\n        ")])]),t._v(" "),r("form",{attrs:{action:"mailto:jmangaluz@gmail.com",method:"get",enctype:"text/plain"}},[r("div",[r("v-text-field",{staticClass:"ma-2 pa-2",attrs:{label:"Name",name:"name",id:"name",required:""}})],1),t._v(" "),r("div",[r("v-text-field",{staticClass:"ma-2 pa-2",attrs:{label:"Email:",name:"email",id:"email",required:"",type:"email"}})],1),t._v(" "),r("div",[r("v-textarea",{staticClass:"ma-2 pa-2",attrs:{outlined:"",name:"input-7-4",label:"Comments",value:"Send your comments to us."}})],1),t._v(" "),r("div",{staticClass:"ma-2 pa-2"},[r("v-btn",{staticClass:"white--text",attrs:{color:"green",type:"submit",name:"submit",value:"Send"}},[t._v("Send")]),t._v(" "),r("v-btn",{staticClass:"white--text",attrs:{color:"blue",type:"reset",name:"reset",value:"Clear Form"}},[t._v("Clear Form")])],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VBtn:c.a,VCard:v.a,VContainer:d.a,VSheet:m.a,VTextField:h.a,VTextarea:f.a})},834:function(t,e,r){"use strict";r(666)},835:function(t,e,r){var l=r(11)(!1);l.push([t.i,'.dont-break-out[data-v-511032f7]{word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.font-lulu[data-v-511032f7]{font-family:"Lulu",sans-serif}.font-halimun[data-v-511032f7]{font-family:"Halimun",sans-serif}.font-barlowreg[data-v-511032f7]{font-family:"Barlow-Regular",sans-serif}.bounce-enter-active[data-v-511032f7]{-webkit-animation:bounce-in-data-v-511032f7 .5s;animation:bounce-in-data-v-511032f7 .5s}.bounce-leave-active[data-v-511032f7]{animation:bounce-in-data-v-511032f7 .5s reverse}@-webkit-keyframes bounce-in-data-v-511032f7{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}@keyframes bounce-in-data-v-511032f7{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}.title1[data-v-511032f7],.v-application a[data-v-511032f7]{text-decoration:none}.v-application a[data-v-511032f7]{color:#424dee}.adj-title[data-v-511032f7]{min-height:2rem;line-height:1rem;margin:0;padding:0}.hr-blue[data-v-511032f7]{border:3px solid #00f}.hr-red[data-v-511032f7]{border:3px solid red}.hr-orange[data-v-511032f7]{border:3px solid orange}.hr-black[data-v-511032f7]{border:3px solid #000}',""]),t.exports=l},895:function(t,e,r){"use strict";r.r(e);r(8),r(7),r(10),r(13),r(9),r(14);var l=r(1),n=r(15),o=(r(52),r(144));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={loading:{color:"orange",height:"5px"},middleware:"auth",auth:!1,head:function(){return{title:"Homepage ",meta:[{hid:"Homepage ",name:"Homepage ",content:"This website features are latest code fixes, tutorials and reviews, news about technology and programming also includes programming quotes and world event anniversaries. May also include personal blogs and top 10 - 100 reviews of the authors favorite things and current researches."}]}},data:function(){return{transparent:"rgba(255, 255, 255, 0)",blogs_load:!1,news_load:!1,posts_load:!1,selection:0,content:[],news:[],posts:[],nuxt:[],selectedItem:0,show:!0,title:"",model:6,rounded:["0","sm","md","lg","xl","pill","circle"],links:[],blog_content:0,posts_content:0,news_content:0}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,l,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.blogs_load=!0,t.news_load=!0,t.posts_load=!0,e.next=5,t.$axios.$get("/sanctum/csrf-cookie");case 5:return e.next=7,t.$axios.$get("api/blog/page/1/item/3");case 7:return r=e.sent,t.blogs_load=!1,t.content=r.data,t.blog_content=r.total,e.next=13,t.$axios.$get("/sanctum/csrf-cookie");case 13:return e.next=15,t.$axios.$get("api/news/page/1/item/3");case 15:return l=e.sent,t.news_load=!1,t.news=l.data,t.news_content=l.total,e.next=21,t.$axios.$get("/sanctum/csrf-cookie");case 21:return e.next=23,t.$axios.$get("api/post/page/1/item/3");case 23:n=e.sent,t.posts_load=!1,t.posts=n.data,t.posts_content=n.total;case 27:case"end":return e.stop()}}),e)})))()},layout:"default",methods:v({},Object(o.b)("messageoftheday",["fetchQuote"])),computed:v({},Object(o.c)("messageoftheday",["MessageOfTheDay","LoadingStatus"])),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/sanctum/csrf-cookie");case 2:try{t.fetchQuote()}catch(t){console.log(t)}case 3:case"end":return e.stop()}}),e)})))()}},m=(r(834),r(35)),h=r(31),f=r.n(h),_=r(236),x=r(233),w=r(80),C=r(241),k=r(556),y=r(526),j=r(534),V=r(836),$=r(175),S=r(183),O=r(234),M=r(527),T=r(66),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",{staticClass:"mb-5 pb-5"},[r("v-container",[r("v-row",[r("v-col",[r("v-card",{staticClass:" pa-2",attrs:{color:"blue lighten-5"}},[r("h1",{staticClass:"blue--text text--darken-5 fs-1-3 font-roboto "},[t._v("\n              INHINYERU.com - Research and Development\n            ")]),t._v(" "),r("p",{staticClass:"blue--text text--darken-4"},[t._v("\n              This website is a build and blog website, where authors\n              encounter problems and its solutions in coding shared with the\n              development community of students , enthusiast and\n              professionals. This website features are latest code fixes,\n              tutorials and reviews, news about technology and programming\n              also includes programming quotes and world event anniversaries.\n              May also include personal blogs and top 10 - 100 reviews of the\n              authors favorite things and current researches.\n            ")])])],1)],1),t._v(" "),r("v-row",[r("TopicsIndex")],1),t._v(" "),r("v-row",[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:" mb-0 pb-0"},[r("hr",{staticClass:"hr-orange",attrs:{color:"orange"}})])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"ma-0 mt-0 pt-0"},[r("nuxt-link",{attrs:{to:"/blog"}},[r("h2",{staticClass:"ma-0 mt-0 pt-0 orange--text text--darken-5"},[t._v("\n                  Blogs"),r("v-icon",{attrs:{color:"orange",large:""}},[t._v("mdi-menu-right")]),t._v("\n                  ("+t._s(t.blog_content)+" articles)\n                ")],1)])],1)],1),t._v(" "),t._l(Math.ceil(t.content.length/3),(function(i,e){return r("v-row",{key:e,attrs:{color:"blue"}},t._l(t.content.slice(3*(i-1),3*i),(function(e,l){return r("v-col",{key:l,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.hover;return[r("v-card",{staticClass:"pa-2 ma-0",class:{"on-hover":n},attrs:{elevation:n?16:2,outlined:"",shaped:"",tile:""}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[null!=e.image?r("v-img",{attrs:{contain:"","aspect-ratio":"2.3",src:e.image}}):r("v-img",{attrs:{contain:"","aspect-ratio":"2.3",src:"/images/default.jpg"}})],1),t._v(" "),r("v-card-title",{staticClass:"pa-0 ma-0  adj-title"},[r("h2",{staticClass:"title1 fs-1 line-clamp-2",attrs:{color:"dark"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[t._v("\n                        "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"blue"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)]),t._v(" "),r("v-card-text",{staticClass:"pa-0 ma-0"},[r("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},t._l(e.tags,(function(e,l){return r("v-chip",{key:l,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])})),1),t._v(" "),null!=e.profile_picture?r("v-avatar",{staticClass:"d-inline-flex mt-3",attrs:{size:"37"}},[r("img",{attrs:{src:e.profile_picture,alt:""}})]):r("v-avatar",{staticClass:" white--text d-inline-flex  mt-3",attrs:{color:"blue",size:"37"}},[t._v("\n                      "+t._s(e.name.charAt(0).toUpperCase())+"\n                    ")]),t._v(" "),r("v-card",{staticClass:"d-inline-flex d-flex flex-column ",attrs:{flat:""}},[r("v-card",{attrs:{flat:""}},[t._v(t._s(e.name))]),t._v(" "),r("v-card",{attrs:{flat:""}},[t._v(t._s(e.human_date))])],1)],1)],1)]}}],null,!0)})],1)})),1)})),t._v(" "),t.blogs_load?r("v-row",[r("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("SkeletonCard")],1),t._v(" "),r("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("SkeletonCard")],1),t._v(" "),r("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("SkeletonCard")],1)],1):t._e()],2)],1),t._v(" "),r("v-row",[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:" mb-0 pb-0"},[r("hr",{staticClass:"hr-blue",attrs:{color:"blue"}})])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"ma-0 mt-0 pt-0"},[r("h2",{staticClass:"ma-0 mt-0 pt-0 blue--text "},[t._v("\n                News ("+t._s(t.news_content)+" articles)\n              ")])])],1),t._v(" "),t._l(Math.ceil(t.news.length/3),(function(i,e){return r("v-row",{key:e,attrs:{color:"blue"}},t._l(t.news.slice(3*(i-1),3*i),(function(e,l){return r("v-col",{key:l,attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.hover;return[r("v-card",{staticClass:"pa-2 ma-0",class:{"on-hover":n},attrs:{elevation:n?16:2,outlined:"",shaped:"",tile:""}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"news/"+e.slug}}},[null!=e.image?r("v-img",{attrs:{contain:"","aspect-ratio":"2.3",src:e.image}}):r("v-img",{attrs:{contain:"","aspect-ratio":"2.3",src:"/images/default.jpg"}})],1),t._v(" "),r("v-card-title",{staticClass:"pa-0 ma-0  adj-title"},[r("h2",{staticClass:"title1 fs-1 line-clamp-2 ",attrs:{color:"dark"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"news/"+e.slug}}},[t._v("\n                        "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"blue"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)]),t._v(" "),r("v-card-text",{staticClass:"pa-0 ma-0"},[r("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},t._l(e.tags,(function(e,l){return r("v-chip",{key:l,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])})),1),t._v(" "),null!=e.profile_picture?r("v-avatar",{staticClass:"d-inline-flex mt-3",attrs:{size:"37"}},[r("img",{attrs:{src:e.profile_picture,alt:""}})]):r("v-avatar",{staticClass:" white--text d-inline-flex  mt-3",attrs:{color:"blue",size:"37"}},[t._v("\n                      "+t._s(e.name.charAt(0).toUpperCase())+"\n                    ")]),t._v(" "),r("v-card",{staticClass:"d-inline-flex d-flex flex-column ",attrs:{flat:""}},[r("v-card",{attrs:{flat:""}},[t._v(t._s(e.name))]),t._v(" "),r("v-card",{attrs:{flat:""}},[t._v(t._s(e.human_date))])],1)],1)],1)]}}],null,!0)})],1)})),1)})),t._v(" "),t.news_load?r("v-row",[r("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("SkeletonCard")],1),t._v(" "),r("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("SkeletonCard")],1),t._v(" "),r("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("SkeletonCard")],1)],1):t._e()],2)],1),t._v(" "),r("v-row",[r("v-container",[r("v-row",[r("v-col",{staticClass:" mb-0 pb-0"},[r("hr",{staticClass:"hr-red",attrs:{color:"red"}})])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"ma-0 mt-0 pt-0"},[r("h2",{staticClass:"ma-0 mt-0 pt-0 red--text text-darken-5"},[t._v("\n                Post ("+t._s(t.posts_content)+" articles)\n              ")])])],1),t._v(" "),t._l(Math.ceil(t.posts.length/3),(function(i,e){return r("v-row",{key:e,attrs:{color:"blue"}},t._l(t.posts.slice(3*(i-1),3*i),(function(e,l){return r("v-col",{key:l,attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(l){var n=l.hover;return[r("v-card",{staticClass:"pa-2 ma-0 ",class:{"on-hover":n},attrs:{elevation:n?16:2,outlined:"",shaped:"",tile:""}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"post/"+e.slug}}},[null!=e.image?r("v-img",{attrs:{contain:"","aspect-ratio":"2.3",src:e.image}}):r("v-img",{attrs:{contain:"","aspect-ratio":"2.3",src:"/images/default.jpg"}})],1),t._v(" "),r("v-card-title",{staticClass:"pa-0 ma-0  adj-title"},[r("h2",{staticClass:"title1 fs-1 line-clamp-2 ",attrs:{color:"dark"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"post/"+e.slug}}},[t._v("\n                        "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"blue"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)]),t._v(" "),r("v-card-text",{staticClass:"pa-0 ma-0"},[r("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},t._l(e.tags,(function(e,l){return r("v-chip",{key:l,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e)+"\n                      ")])})),1),t._v(" "),null!=e.profile_picture?r("v-avatar",{staticClass:"d-inline-flex mt-3",attrs:{size:"37"}},[r("img",{attrs:{src:e.profile_picture,alt:""}})]):r("v-avatar",{staticClass:" white--text d-inline-flex  mt-3",attrs:{color:"blue",size:"37"}},[t._v("\n                      "+t._s(e.name.charAt(0).toUpperCase())+"\n                    ")]),t._v(" "),r("v-card",{staticClass:"d-inline-flex d-flex flex-column ",attrs:{flat:""}},[r("v-card",{attrs:{flat:""}},[t._v(t._s(e.name))]),t._v(" "),r("v-card",{attrs:{flat:""}},[t._v(t._s(e.human_date))])],1)],1)],1)]}}],null,!0)})],1)})),1)})),t._v(" "),t.posts_load?r("v-row",[r("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("SkeletonCard")],1),t._v(" "),r("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("SkeletonCard")],1),t._v(" "),r("v-col",{attrs:{xs:"12",sm:"12",md:"4",lg:"4",xl:"4",cols:"12"}},[r("SkeletonCard")],1)],1):t._e()],2)],1),t._v(" "),r("v-row",[r("TagsIndex")],1)],1)],1),t._v(" "),r("v-row",{staticClass:"d-none"},[r("v-col",{staticClass:" pa-0",attrs:{xs:"12",sm:"12",md:"12",lg:"12",cols:"12"}},[r("Contact")],1)],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"ma-0 pa-0",attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12",cols:"12"}},[r("v-sheet",{attrs:{color:"brown lighten-2"}},[r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"12",xl:"12",cols:"12"}},[t.LoadingStatus?r("v-progress-linear",{attrs:{color:"blue accent-5",indeterminate:"",rounded:"",height:"6"}}):t._e(),t._v(" "),t._l(t.MessageOfTheDay,(function(e){return t.LoadingStatus?t._e():r("v-sheet",{key:e.author,staticClass:"text-center ",attrs:{color:"brown lighten-2"}},[r("span",{staticClass:"text-center mt-5 dont-break-out",class:{"fs-0.5":t.$vuetify.breakpoint.smAndDown,"fs-1.5":t.$vuetify.breakpoint.mdAndUp}},[t._v('\n                  " '+t._s(e.message)+' " - '+t._s(e.author)+"\n                ")])])}))],2)],1)],1)],1)],1)],1)],1)}),[],!1,null,"511032f7",null);e.default=component.exports;f()(component,{TopicsIndex:r(675).default,SkeletonCard:r(677).default,TagsIndex:r(676).default,Contact:r(678).default}),f()(component,{VAvatar:_.a,VCard:x.a,VCardText:w.b,VCardTitle:w.c,VChip:C.a,VChipGroup:k.a,VCol:y.a,VContainer:j.a,VHover:V.a,VIcon:$.a,VImg:S.a,VProgressLinear:O.a,VRow:M.a,VSheet:T.a})}}]);