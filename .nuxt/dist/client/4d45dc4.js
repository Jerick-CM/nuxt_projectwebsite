(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{554:function(t,e,o){"use strict";var r=o(111),n=o(36),l=o(4),d=o(5);e.a=Object(l.a)(r.a,n.a).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(this.disabled||(element.data=element.data||{},this._g(element.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),element):(Object(d.c)("v-hover should only contain a single element",this),element)):(Object(d.c)("v-hover is missing a default scopedSlot or bound value",this),null);var element}})},587:function(t,e,o){var content=o(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("665e69b2",content,!0,{sourceMap:!1})},623:function(t,e,o){"use strict";o(587)},624:function(t,e,o){var r=o(11)(!1);r.push([t.i,'.dont-break-out[data-v-334579a4]{word-wrap:break-word;-ms-word-break:break-all;word-break:break-all;word-break:break-word;-ms-hyphens:auto;-webkit-hyphens:auto;hyphens:auto}.font-lulu[data-v-334579a4]{font-family:"Lulu",sans-serif}.font-halimun[data-v-334579a4]{font-family:"Halimun",sans-serif}.font-barlowreg[data-v-334579a4]{font-family:"Barlow-Regular",sans-serif}.title1[data-v-334579a4],.v-application a[data-v-334579a4]{text-decoration:none}.v-application a[data-v-334579a4]{color:#424dee}.adj-title[data-v-334579a4]{min-height:2rem;line-height:1rem;margin:0;padding:0}.hr-blue[data-v-334579a4]{border:3px solid #00f}.hr-red[data-v-334579a4]{border:3px solid red}.hr-orange[data-v-334579a4]{border:3px solid orange}.hr-black[data-v-334579a4]{border:3px solid #000}.tempoup[data-v-334579a4]{transition:transform .25s}.tempoup[data-v-334579a4]:hover{transform:translateY(-10px)}.cover[data-v-334579a4]{border-left:.3rem solid green}.cover[data-v-334579a4]:hover{border-left:.3rem solid #000}.back[data-v-334579a4]{background-color:#add8e6}.back[data-v-334579a4]:hover{background-color:green}',""]),t.exports=r},695:function(t,e,o){"use strict";o.r(e);var r=o(15),n=(o(53),{props:["blogs_in_random","title"],data:function(){return{model:11}},mounted:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()}}),l=(o(623),o(35)),d=o(31),c=o.n(d),v=o(233),f=o(528),m=o(536),h=o(554),k=o(237),w=o(143),x=o(17),y=o(240),_=o(529),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"tag-border",attrs:{fluid:""}},[o("v-row",[o("v-col",{staticClass:"ml-0 pl-0  mb-0 pb-0"},[o("nuxt-link",{attrs:{to:"/blog"}},[o("h2",{staticClass:"ma-0 mt-0 pt-0 blue--text text--darken-5"},[t._v("\n          "+t._s(t.title)+"\n        ")])])],1)],1),t._v(" "),o("v-row",[o("v-col",{staticClass:"ml-0 pl-0 mt-0 pt-0",attrs:{cols:"12"}},[o("v-card",{staticClass:"mx-auto",attrs:{flat:"","max-width":"400"}},[o("v-list",{attrs:{flat:""}},[o("v-list-item-group",{attrs:{mandatory:""}},t._l(t.blogs_in_random,(function(e,r){return o("v-hover",{key:r,attrs:{"open-delay":"200"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.hover;return[o("v-list-item",{staticClass:" pa-1 ma-1 cover back",class:""},[o("v-list-item-content",{class:{"on-hover":n},attrs:{"two-line":"",dark:"",elevation:n?1:2,link:e.slug}},[o("nuxt-link",{class:n?"white--text":"black--text",staticStyle:{"text-decoration":"none"},attrs:{to:{path:"blog/"+e.slug}}},[o("v-list-item-title",{staticClass:"font-ptsans",domProps:{textContent:t._s(e.title)}})],1)],1)],1)]}}],null,!0)})})),1)],1)],1)],1)],1)],1)}),[],!1,null,"334579a4",null);e.default=component.exports;c()(component,{VCard:v.a,VCol:f.a,VContainer:m.a,VHover:h.a,VList:k.a,VListItem:w.a,VListItemContent:x.a,VListItemGroup:y.a,VListItemTitle:x.c,VRow:_.a})}}]);