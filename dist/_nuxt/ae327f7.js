(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{437:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return v}));var o=r(440),n=r(0),c=Object(n.h)("v-card__actions"),l=Object(n.h)("v-card__subtitle"),d=Object(n.h)("v-card__text"),v=Object(n.h)("v-card__title");o.a},438:function(t,e,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("e23b7040",content,!0,{sourceMap:!1})},439:function(t,e,r){var o=r(16)(!1);o.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=o},440:function(t,e,r){"use strict";r(10),r(7),r(9),r(13),r(8),r(14);var o=r(2),n=(r(23),r(199),r(438),r(123)),c=r(443),l=r(85),d=r(5);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,n.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return h(h({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n.a.options.computed.classes.call(this))},styles:function(){var style=h({},n.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},637:function(t,e,r){"use strict";r.r(e);r(10),r(7),r(9),r(13),r(8),r(14);var o=r(2),n=(r(65),r(198),r(262)),c=r(106);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={data:function(){return{title:""}},layout:"default",mixins:[n.a],methods:d(d(d({add_one:function(){this.$store.commit("test/increment")},remove_one:function(){this.$store.commit("test/decrement")},addTodo:function(t){this.$store.commit("todos/add",t.target.value),t.target.value=""}},Object(c.d)({toggle:"todos/toggle"})),Object(c.b)("users",["fetchTodos","addTodos","deleteTodos"])),{},{onSubmit:function(t){t.preventDefault(),this.addTodos(this.title)}},Object(c.b)("messageoftheday",["fetchQuote"])),computed:d(d({todos:function(){return this.$store.state.todos.list}},Object(c.c)("users",["myDatas","allTodos"])),Object(c.c)("messageoftheday",["Author","Message","MessageOfTheDay"])),created:function(){this.$axios.$get("/sanctum/csrf-cookie"),this.fetchTodos("test"),this.fetchQuote()},mounted:function(){}},h=r(53),_=r(64),f=r.n(_),m=r(419),x=r(440),y=r(437),O=r(428),w=r(429),k=r(430),j=r(51),C=r(434),P=r(508),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[r("v-row",{attrs:{"min-height":"100vh"}},[r("v-col",{staticClass:"grey lighten-4 pa-4 ma-0",attrs:{sm:"12",lg:"8"}},[r("v-card",{staticClass:"grey lighten-5 pa-0 ma-1 ",attrs:{"min-height":"200vh"}},[r("v-card",[t._v("\n          "+t._s(t.MessageOfTheDay)+"\n          "),r("v-card-text",[t._v(" "+t._s(t.Message)+" - "+t._s(t.Author)+" ")])],1)],1)],1),t._v(" "),r("v-col",{staticClass:"grey lighten-4 pa-4 ma-0",attrs:{sm:"12",lg:"4"}},[r("v-card",{staticClass:"grey lighten-5 pa-0",attrs:{"min-height":"200vh"}},[r("v-sheet",{staticClass:"pa-2 ma-2 text-center",attrs:{color:"white",elevation:"2"}},[r("label",[t._v("Using vuex in Counters")]),t._v(" "),r("p",[t._v(t._s(this.$store.state.test.counter))]),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:t.add_one}},[t._v("Add 1")]),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:t.remove_one}},[t._v("Remove 1")])],1),t._v(" "),r("v-sheet",{staticClass:"pa-2 ma-2 text-center",attrs:{color:"white",elevation:"2"}},[r("label",[t._v("Using vuex in Nuxt")]),t._v(" "),r("ul",[t._l(t.todos,(function(e){return r("li",{key:e.text},[r("input",{attrs:{type:"checkbox"},domProps:{checked:e.done},on:{change:function(r){return t.toggle(e)}}}),t._v(" "),r("span",{class:{done:e.done}},[t._v(t._s(e.text))])])})),t._v(" "),r("li",[r("input",{attrs:{placeholder:"What needs to be done?"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}}})])],2)]),t._v(" "),r("v-sheet",{staticClass:"pa-2 ma-2 text-center",attrs:{color:"white",elevation:"2"}},[r("label",[t._v("Using vuex mapGetters and mapActions")]),t._v(" "),r("div",[r("v-text-field",{attrs:{placeholder:"Add Todo..."},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),r("v-btn",{attrs:{color:"green"},on:{click:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t._v("Submit")])],1),t._v(" "),t._l(t.allTodos,(function(e){return r("div",{key:e.id},[r("v-sheet",{staticClass:"text-left pa-1 ma-1 orange lighten-2"},[t._v("\n              "+t._s(e.title)+"\n              "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:function(r){return t.deleteTodos(e.id)}}},[t._v("Delete")])],1)],1)}))],2),t._v(" "),r("v-sheet",{staticClass:"pa-2 ma-2 text-center",attrs:{color:"white",elevation:"2"}},t._l(t.myDatas,(function(e){return r("div",{key:e.id},[t._v("\n            "+t._s(e.id)+" - "+t._s(e.title)+"\n          ")])})),0)],1)],1)],1)],1)}),[],!1,null,"bb5dafda",null);e.default=component.exports;f()(component,{VBtn:m.a,VCard:x.a,VCardText:y.b,VCol:O.a,VContainer:w.a,VRow:k.a,VSheet:j.a,VSpacer:C.a,VTextField:P.a})}}]);