(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{543:function(t,e,r){var content=r(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("8f7a87bc",content,!0,{sourceMap:!1})},544:function(t,e,r){var n=r(11)(!1);n.push([t.i,".v-slide-group{display:flex}.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__next,.v-slide-group:not(.v-slide-group--has-affixes)>.v-slide-group__prev{display:none}.v-slide-group.v-item-group>.v-slide-group__next,.v-slide-group.v-item-group>.v-slide-group__prev{cursor:pointer}.v-slide-item{display:inline-flex;flex:0 1 auto}.v-slide-group__next,.v-slide-group__prev{align-items:center;display:flex;flex:0 1 52px;justify-content:center;min-width:52px}.v-slide-group__content{display:flex;flex:1 0 auto;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-slide-group__wrapper{contain:content;display:flex;flex:1 1 auto;overflow:hidden}.v-slide-group__next--disabled,.v-slide-group__prev--disabled{pointer-events:none}",""]),t.exports=n},545:function(t,e,r){"use strict";r.d(e,"a",(function(){return w}));r(8),r(7),r(10),r(13),r(9),r(14);var n=r(1),l=(r(34),r(25),r(43),r(543),r(47)),o=r(86),c=r(152),h=r(188),v=r(110),d=r(251),f=r(4);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(f.a)(c.a,h.a).extend({name:"base-slide-group",directives:{Resize:v.a,Touch:d.a},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:function(t){return"boolean"==typeof t||["always","desktop","mobile"].includes(t)}}},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{canTouch:function(){return"undefined"!=typeof window},__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return x(x({},c.a.options.computed.classes.call(this)),{},{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,content=t.content,e=t.wrapper;return content>Math.abs(this.scrollOffset)+e},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this,slot=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[slot])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var r="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(r)];return this.showArrows||n?this.$createElement(l.a,{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,slot=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[slot])},genTransition:function(t){return this.$createElement(o.c,[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,r,n){var l=r?-1:1,o=l*n+("prev"===t?-1:1)*e.wrapper;return l*Math.max(Math.min(o,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var content=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,content.style.setProperty("transition","none"),content.style.setProperty("willChange","transform")},onTouchMove:function(t){if(this.canTouch){if(!this.isSwiping){var e=t.touchmoveX-t.touchstartX,r=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(r),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd:function(){if(this.canTouch){var t=this.$refs,content=t.content,e=t.wrapper,r=content.clientWidth-e.clientWidth;content.style.setProperty("transition",null),content.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-r&&(this.scrollOffset=-r):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=r&&(this.scrollOffset=r),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")}},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){if(!this.selectedItem&&this.items.length){var t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,r,n){var l=t.clientWidth,o=r?e.content-t.offsetLeft-l:t.offsetLeft;r&&(n=-n);var c=e.wrapper+n,h=l+o,v=.4*l;return o<=n?n=Math.max(o-v,0):c<=h&&(n=Math.min(n-(c-h-v),e.content-e.wrapper)),r?-n:n},calculateCenteredOffset:function(t,e,r){var n=t.offsetLeft,l=t.clientWidth;if(r){var o=e.content-n-l/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,o))}var c=n+l/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,c))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,content=e.content,r=e.wrapper;t.widths={content:content?content.clientWidth:0,wrapper:r?r.clientWidth:0},t.isOverflowing=t.widths.wrapper+1<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});e.b=w.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}})},578:function(t,e,r){var content=r(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("ee81e2aa",content,!0,{sourceMap:!1})},610:function(t,e,r){"use strict";r(578)},611:function(t,e,r){var n=r(11)(!1);n.push([t.i,".nuxtlink[data-v-53811370]{text-decoration:none!important}.hr-green[data-v-53811370]{border:3px solid green}.show-btns[data-v-53811370]{color:#fff!important}",""]),t.exports=n},687:function(t,e,r){"use strict";r.r(e);var n=r(15),l=(r(51),{data:function(){return{nuxt:[],laravel:[],vue:[],load_nuxt:!1,load_laravel:!1,load_vue:!1,height:"200px"}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.load_nuxt=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/blog/page/1/item/5/tags/nuxt");case 5:return r=e.sent,t.load_nuxt=!1,t.nuxt=r.data,t.load_laravel=!0,e.next=11,t.$axios.$get("/sanctum/csrf-cookie");case 11:return e.next=13,t.$axios.$get("api/blog/page/1/item/5/tags/Laravel");case 13:return n=e.sent,t.load_laravel=!1,t.laravel=n.data,t.load_vue=!0,e.next=19,t.$axios.$get("/sanctum/csrf-cookie");case 19:return e.next=21,t.$axios.$get("api/blog/page/1/item/5/tags/vue3");case 21:l=e.sent,t.load_vue=!1,t.vue=l.data;case 24:case"end":return e.stop()}}),e)})))()}}),o=(r(610),r(35)),c=r(31),h=r.n(c),v=r(238),d=r(85),f=r(526),m=r(534),x=r(856),w=r(174),_=r(183),k=r(527),C=r(66),y=r(545),O=r(861),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return 0==t.load_nuxt?r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:" mb-0 pb-0"},[r("hr",{staticClass:"hr-green",attrs:{color:"green"}})])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"ma-0 mt-0 pt-0"},[r("h2",{staticClass:"green--text ma-0 mt-0 pt-0 ",attrs:{color:"green"}},[t._v("\n        Topics\n      ")])])],1),t._v(" "),t._l(Math.ceil(t.nuxt.length/5),(function(i,e){return r("v-row",{key:e+10,staticClass:"mt-2 pt-2 hidden-sm-and-down"},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"ml-2 d-flex align-center flex-column ",class:{"on-hover":n},attrs:{elevation:n?16:2,color:"green",height:t.height,width:"5%"}},[r("label",{staticClass:"justify-center pa- white--text "},[t._v("Nuxt")]),r("br"),t._v(" "),r("div",[r("v-img",{staticClass:"justify-center",attrs:{src:"/icons/nuxt-js.svg",width:"25px"}})],1),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/nuxt"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,!0)}),t._v(" "),r("v-sheet",{staticClass:"pa-0 ma-0",attrs:{"max-width":"93%"}},[r("v-slide-group",{staticClass:"pa-0 ma-0",attrs:{multiple:"","show-arrows":""}},t._l(t.nuxt.slice(5*(i-1),5*i),(function(e,n){return r("v-slide-item",{key:n,staticClass:"pa-0 ma-0"},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(n){var l=n.hover;return[r("v-card",{staticClass:"mr-1 ml-1",class:{"on-hover":l},attrs:{elevation:l?16:2,height:"200px",width:"450px"}},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height,width:"100%"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v("\n                    "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"",width:"100%",height:t.height,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,!0)})],1)})),1)],1)],1)})),t._v(" "),t._l(Math.ceil(t.nuxt.length/5),(function(i,e){return r("v-row",{key:e,staticClass:"hidden-md-and-up"},[r("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"d-flex align-center flex-column",class:{"on-hover":n},attrs:{elevation:n?16:2,color:"green"}},[r("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Nuxt")]),r("br"),t._v(" "),r("v-img",{attrs:{src:"/icons/nuxt-js.svg",width:"25px"}}),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/nuxt"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,!0)})],1),t._v(" "),t._l(t.nuxt.slice(5*(i-1),5*i),(function(e,n){return r("v-col",{key:n,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-card",{key:n,staticClass:"mr-1 ml-1"},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"","aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[t._v(t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)}))],2)})),t._v(" "),t._l(Math.ceil(t.laravel.length/5),(function(i,e){return 0==t.load_laravel?r("v-row",{key:e+30,staticClass:"mt-4 pt-4 hidden-sm-and-down"},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"ml-2 d-flex align-center flex-column",class:{"on-hover":n},attrs:{elevation:n?16:2,color:"orange lighten-2",height:t.height,width:"5%"}},[r("label",{staticClass:"justify-center pa- white--text "},[t._v("Laravel")]),t._v(" "),r("br"),t._v(" "),r("div",[r("v-img",{staticClass:"justify-center",attrs:{src:"/icons/laravel.svg",width:"25px"}}),r("br")],1),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/Laravel"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,!0)}),t._v(" "),r("v-sheet",{staticClass:"pa-0 ma-0",attrs:{"max-width":"93%"}},[r("v-slide-group",{staticClass:"pa-0 ma-0",attrs:{multiple:"","show-arrows":""}},t._l(t.laravel.slice(5*(i-1),5*i),(function(e,n){return r("v-slide-item",{key:n,staticClass:"pa-0 ma-0"},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(n){var l=n.hover;return[r("v-card",{staticClass:"mr-1 ml-1",class:{"on-hover":l},attrs:{elevation:l?16:2,height:"200px",width:"450px"}},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height,width:"100%"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v("\n                    "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"",width:"100%",height:t.height,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[t._v("\n                    "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,!0)})],1)})),1)],1)],1):t._e()})),t._v(" "),t._l(Math.ceil(t.laravel.length/5),(function(i,e){return 0==t.load_laravel?r("v-row",{key:e+40,staticClass:"hidden-md-and-up"},[r("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"d-flex align-center flex-column",class:{"on-hover":n},attrs:{elevation:n?16:2,color:"orange lighten-2"}},[r("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Laravel")]),t._v(" "),r("br"),t._v(" "),r("v-img",{attrs:{src:"/icons/laravel.svg",width:"25px"}}),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/Laravel"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,!0)})],1),t._v(" "),t._l(t.laravel.slice(5*(i-1),5*i),(function(e,n){return r("v-col",{key:n,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(l){var o=l.hover;return[r("v-card",{key:n,staticClass:"mr-1 ml-1",class:{"on-hover":o},attrs:{elevation:o?16:2}},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v("\n                "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"","aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[t._v("\n                "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,!0)})],1)}))],2):t._e()})),t._v(" "),t._l(Math.ceil(t.vue.length/5),(function(i,e){return 0==t.load_vue?r("v-row",{key:e+30,staticClass:"mt-4 pt-4 hidden-sm-and-down"},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"ml-2 d-flex align-center flex-column",class:{"on-hover":n},attrs:{elevation:n?16:2,color:"green",height:t.height,width:"5%"}},[r("label",{staticClass:"justify-center pa- white--text "},[t._v("Vue")]),r("br"),t._v(" "),r("div",[r("v-img",{staticClass:"justify-center",attrs:{src:"/icons/vue-js.svg",width:"25px"}})],1),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/vue3"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)])]}}],null,!0)}),t._v(" "),r("v-sheet",{staticClass:"pa-0 ma-0",attrs:{"max-width":"93%"}},[r("v-slide-group",{staticClass:"pa-0 ma-0",attrs:{multiple:"","show-arrows":""}},t._l(t.vue.slice(5*(i-1),5*i),(function(e,n){return r("v-slide-item",{key:n,staticClass:"pa-0 ma-0"},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(n){var l=n.hover;return[r("v-card",{staticClass:"mr-1 ml-1",class:{"on-hover":l},attrs:{elevation:l?16:2,height:"200px",width:"450px"}},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:t.height,width:"100%"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v("\n                    "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"",width:"100%",height:t.height,"aspect-ratio":"1",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[t._v("\n                    "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)]}}],null,!0)})],1)})),1)],1)],1):t._e()})),t._v(" "),t._l(Math.ceil(t.vue.length/5),(function(i,e){return 0==t.load_vue?r("v-row",{key:e+40,staticClass:"hidden-md-and-up"},[r("v-col",{attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-hover",{attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return[r("v-card",{staticClass:"d-flex align-center flex-column",class:{"on-hover":n},attrs:{elevation:n?16:2,color:"green"}},[r("label",{staticClass:"white--text pt-2 ma-1"},[t._v("Vue")]),r("br"),t._v(" "),r("v-img",{attrs:{src:"/icons/vue-js.svg",width:"25px"}}),t._v(" "),r("label",{staticClass:"justify-center pa-2 mt-auto"},[r("nuxt-link",{staticClass:"white--text nuxtlink",attrs:{target:"_blank",to:{path:"blog/tags/vue3"}}},[t._v("More"),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)]}}],null,!0)})],1),t._v(" "),t._l(t.vue.slice(5*(i-1),5*i),(function(e,n){return r("v-col",{key:n,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4",cols:"12"}},[r("v-card",{key:n,staticClass:"mr-1 ml-1"},[null!=e.image?r("v-img",{staticClass:"align-end",attrs:{contain:"",src:e.image,"aspect-ratio":"2.5",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1",attrs:{color:"blue"}},[t._v("\n              "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1):r("v-img",{staticClass:"white--text align-end",attrs:{contain:"","aspect-ratio":"2.3",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",src:"/images/default.jpg"}},[r("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"blog/"+e.slug}}},[r("v-card-title",{staticClass:"fs-1 white--text pa-0 ma-0 pl-1"},[t._v("\n              "+t._s(e.title)),r("v-icon",{attrs:{small:"",color:"white"}},[t._v("mdi-arrow-top-right-thick")])],1)],1)],1)],1)],1)}))],2):t._e()}))],2):t._e()}),[],!1,null,"53811370",null);e.default=component.exports;h()(component,{VCard:v.a,VCardTitle:d.c,VCol:f.a,VContainer:m.a,VHover:x.a,VIcon:w.a,VImg:_.a,VRow:k.a,VSheet:C.a,VSlideGroup:y.b,VSlideItem:O.a})},856:function(t,e,r){"use strict";var n=r(116),l=r(37),o=r(4),c=r(5);e.a=Object(o.a)(n.a,l.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(c.c)("v-hover should only contain a single element",this),element)):(Object(c.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},861:function(t,e,r){"use strict";var n=r(1),l=r(111),o=r(4),c=r(5),h=r(2).default.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(n.a)({},this.activeClass,this.isActive)}),element):(Object(c.c)("v-item should only contain a single element",this),element)):(Object(c.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(o.a)(h,Object(l.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(o.a)(h,Object(l.a)("slideGroup")).extend({name:"v-slide-item"})}}]);