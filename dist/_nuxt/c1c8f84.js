(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{413:function(t,e,r){"use strict";r(10),r(7),r(8),r(12),r(9),r(13);var n=r(2),o=(r(22),r(116),r(421),r(191)),l=r(118),c=r(29),d=r(88),h=r(192),v=r(23),m=r(0),f=r(4);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(f.a)(c.a,Object(d.b)(["absolute","fixed","top","bottom"]),h.a,v.a);e.a=y.extend({name:"v-progress-linear",directives:{intersect:l.a},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.g)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.g)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(m.g)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(m.g)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.c:o.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(m.g)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(m.r)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},onObserve:function(t,e,r){this.isVisible=r},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.g)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},414:function(t,e,r){"use strict";r(10),r(7),r(8),r(12),r(9),r(13);var n=r(2),o=(r(22),r(188),r(419),r(153)),l=r(417),c=r(78),d=r(4);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},417:function(t,e,r){"use strict";r(22);var n=r(1),o=r(418);e.a=n.default.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},418:function(t,e,r){"use strict";var n=r(413);e.a=n.a},419:function(t,e,r){var content=r(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("e23b7040",content,!0,{sourceMap:!1})},420:function(t,e,r){var n=r(14)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},421:function(t,e,r){var content=r(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("cf87dc84",content,!0,{sourceMap:!1})},422:function(t,e,r){var n=r(14)(!1);n.push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{-webkit-animation-play-state:paused;animation-play-state:paused;background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;-webkit-animation-play-state:paused;animation-play-state:paused;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}.v-progress-linear--visible .v-progress-linear__indeterminate--active .long,.v-progress-linear--visible .v-progress-linear__indeterminate--active .short,.v-progress-linear--visible .v-progress-linear__stream{-webkit-animation-play-state:running;animation-play-state:running}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=n},426:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(11),o=(r(62),{created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("[ -------------------------------- ]"),console.log("[ -------------------------------- ]"),console.log("[ -------------------------------- ]"),console.log("%c[ -- Hello from Project Website -- ]","background: #FFF; color: #0000FF"),console.log("[ -------------------------------- ]"),console.log("[ -------------------------------- ]"),console.log("[ -------------------------------- ]"),e.next=9,t.$axios.$get("/sanctum/csrf-cookie");case 9:case"end":return e.stop()}}),e)})))()}})},485:function(t,e,r){var content=r(569);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(15).default)("178f1fa6",content,!0,{sourceMap:!1})},568:function(t,e,r){"use strict";r(485)},569:function(t,e,r){var n=r(14)(!1);n.push([t.i,'.font-lulu[data-v-bd96c3d0]{font-family:"Lulu",sans-serif}.font-halimun[data-v-bd96c3d0]{font-family:"Halimun",sans-serif}.font-kalamreg[data-v-bd96c3d0]{font-family:"Kalam-Regular",sans-serif;line-height:1.2}.font-barlowreg[data-v-bd96c3d0]{font-family:"Barlow-Regular",sans-serif}.bounce-enter-active[data-v-bd96c3d0]{-webkit-animation:bounce-in-data-v-bd96c3d0 .5s;animation:bounce-in-data-v-bd96c3d0 .5s}.bounce-leave-active[data-v-bd96c3d0]{animation:bounce-in-data-v-bd96c3d0 .5s reverse}@-webkit-keyframes bounce-in-data-v-bd96c3d0{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}@keyframes bounce-in-data-v-bd96c3d0{0%{transform:scale(0)}50%{transform:scale(1.5)}to{transform:scale(1)}}',""]),t.exports=n},578:function(t,e,r){"use strict";r.r(e);r(10),r(7),r(8),r(12),r(9),r(13);var n=r(11),o=r(2),l=(r(62),r(58),r(189),r(426)),c=r(109);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={data:function(){return{selectedItem:0,show:!0,title:"",links:[{label:"ABOUT"},{label:"MEDIA"},{label:"PODCAST"},{label:"DOCUMENTARY"},{label:"CONTACT"},{label:"JOIN THE MOVEMENT"}],model:6,rounded:["0","sm","md","lg","xl","pill","circle"]}},layout:"default",mixins:[l.a],methods:h({},Object(c.b)("messageoftheday",["fetchQuote"])),computed:h({},Object(c.c)("messageoftheday",["MessageOfTheDay","LoadingStatus"])),created:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){this.fetchQuote()}},m=(r(568),r(71)),f=r(83),_=r.n(f),y=r(179),k=r(190),w=r(414),x=r(575),O=r(405),C=r(150),j=(r(202),r(244)),B=Object(j.a)("layout"),P=r(177),V=r(110),S=r(52),z=r(180),$=r(413),D=r(576),E=r(46),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{staticClass:"ma-0 pa-0 grey lighten-3",attrs:{fluid:""}},[r("v-row",[r("v-col",{staticClass:"ma-0 pa-0",attrs:{sm:"12",lg:"12"}},[r("v-sheet",{staticClass:"black lighten-5",attrs:{elevation:"2","min-height":"10vh"}},[r("v-container",[r("v-row",{staticClass:"pt-5"},[r("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"12",lg:"9"}},[r("label",{staticClass:"font-lulu white--text",class:{"fs-1.1":t.$vuetify.breakpoint.smAndDown,"fs-3":t.$vuetify.breakpoint.mdAndUp}},[t._v("JERICK C. MANGALUS")])]),t._v(" "),r("v-col",{staticClass:"text-center mt-7",attrs:{cols:"12",sm:"12",lg:"3"}},[r("label",{staticClass:"text-right white--text",class:{"fs-0-5":t.$vuetify.breakpoint.smAndDown,"fs-1-0":t.$vuetify.breakpoint.mdAndUp}},[t._v("[ Technology R&D ]\n              ")])])],1),t._v(" "),r("v-row",[r("v-col",{staticClass:"col-md-6 offset-md-3 text-center"},[r("div",{staticClass:"hidden-sm-and-down text-center"},t._l(t.links,(function(link){return r("v-btn",{key:link.label,staticClass:"black pa-1 ma-1 white--text",attrs:{plain:"",text:"",tile:"",rounded:""}},[t._v("\n                  "+t._s(link.label)+"\n                ")])})),1),t._v(" "),r("v-card",{staticClass:"mx-auto hidden-md-and-up",attrs:{tile:""}},[r("v-list",{attrs:{dense:""}},[r("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.links,(function(e,i){return r("v-list-item",{key:i},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.label)}})],1)],1)})),1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"ma-0 pa-0",attrs:{sm:"12",lg:"12"}},[r("v-sheet",{staticClass:"grey lighten-5 pa-1 ma-1",attrs:{elevation:"2"}},[r("v-container",{},[r("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[r("v-layout",{attrs:{"justify-center":"","align-center":""}},[t.$vuetify.breakpoint.smAndDown?r("v-avatar",{staticClass:"text-center black",attrs:{size:150}},[r("v-img",{staticClass:"text-center",attrs:{src:"/images/cartoon-darken.jpg"}})],1):r("v-avatar",{staticClass:"text-center black",attrs:{size:350}},[r("v-img",{staticClass:"text-center",attrs:{src:"/images/cartoon-darken.jpg"}})],1)],1)],1)],1),t._v(" "),r("v-row",{staticClass:"mt-5",attrs:{"no-gutters":""}},[r("v-col",{staticClass:"font-avenir fs-1-4 text-center",attrs:{cols:"12",sm:"12",lg:"12"}},[t._v("\n              The darkness in programming is when you get and successfully fix\n              and build something you are happy, but if you get too long to do\n              it frustration builds up.\n            ")])],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"ma-0 pa-0",attrs:{sm:"12",lg:"12"}},[r("v-sheet",{staticClass:"grey lighten-1",attrs:{elevation:"2","min-height":"30vh"}},[r("v-container",{},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[r("p",{staticClass:"fs-1-1 text-justify white--text fs-1-8 font-barlowreg"},[t._v("\n                The inspireation of this website build is to expand my\n                knowledge base in web development. Secondly I am planning to\n                retain this website in a public server earning from ads, Maybe\n                in my free time I could just update it all the time with my\n                newly learned tricks fixed in my journey with webdeveopment.\n                This website is running in frontend Vue in a nuxt framework\n                and backend is Laravel8, the time this site is being developed\n                is in the release of PHP8, Also docker is in my list of\n                research I am actually surprice with laravel response to api\n                is very slow. This project is using docker in local and docker\n                also in Google Cloud Platform , I am using laravel sail.\n                Connecting backend and frontend I initially used Laravel\n                Santum and nuxt auth next. Along development I am learning\n                alot surprisingly the pressure is less and you will love\n                programming even more compared to working environment of\n                building a site. By the way developing this site is during the\n                pandemic it started in March 20 2020 in the philippines and at\n                present its still a risk and threat to peoples live event\n                though their is already a vaccine the production seems to\n                still inadequate.\n              ")])])],1)],1)],1)],1),t._v(" "),r("v-col",{staticClass:"ma-0 pa-0",attrs:{sm:"12",lg:"12"}},[r("v-sheet",{staticClass:"white lighten-5",attrs:{elevation:"2","min-height":"10vh"}},[r("v-container",{},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12",sm:"12",lg:"12"}},[t.LoadingStatus?r("v-progress-linear",{attrs:{color:"blue accent-5",indeterminate:"",rounded:"",height:"6"}}):t._e(),t._v(" "),t._l(t.MessageOfTheDay,(function(e){return t.LoadingStatus?t._e():r("div",{key:e.author},[r("p",{staticClass:"font-kalamreg text-center mt-5",class:{"fs-1.1":t.$vuetify.breakpoint.smAndDown,"fs-2":t.$vuetify.breakpoint.mdAndUp},attrs:{for:""}},[t._v('\n                  " '+t._s(e.message)+' " - '+t._s(e.author)+"\n                ")])])}))],2)],1)],1)],1)],1)],1)],1)}),[],!1,null,"bd96c3d0",null);e.default=component.exports;_()(component,{VAvatar:y.a,VBtn:k.a,VCard:w.a,VCol:x.a,VContainer:O.a,VImg:C.a,VLayout:B,VList:P.a,VListItem:V.a,VListItemContent:S.a,VListItemGroup:z.a,VListItemTitle:S.b,VProgressLinear:$.a,VRow:D.a,VSheet:E.a})}}]);