(window.webpackJsonp=window.webpackJsonp||[]).push([[70,36],{692:function(t,e,o){var content=o(865);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("b95b09de",content,!0,{sourceMap:!1})},704:function(t,e,o){"use strict";o.r(e);var n=o(15),c=(o(53),{data:function(){return{content:[],selection:0,quote:"",author:"",loader:!1}},fetch:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loader=!0,e.next=3,t.$axios.$get("/sanctum/csrf-cookie");case 3:return e.next=5,t.$axios.$get("api/news/item/3");case 5:o=e.sent,t.content=o.data,t.loader=!1;case 8:case"end":return e.stop()}}),e)})))()},computed:{},methods:{}}),r=o(35),l=o(31),d=o.n(l),k=o(233),m=o(52),h=o(242),v=o(574),f=o(532),x=o(540),_=o(183),w=o(533),y=o(67),z=o(559),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-sheet",[t.loader?t._e():o("v-container",[o("v-row",[o("v-col",[o("h2",{staticClass:"ml-3 mb-2"},[t._v("Related News")])])],1),t._v(" "),o("v-row",t._l(t.content,(function(e,n){return o("v-col",{key:n,attrs:{xs:"12",sm:"12",md:"12",lg:"4",xl:"4"}},[o("v-card",{staticClass:"pa-2 ma-0",attrs:{elevation:"2",outlined:"",shaped:"",tile:""}},[o("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"/news/"+e.slug}}},[null!=e.image?o("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:e.image}}):o("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:"/images/default.jpg"}})],1),t._v(" "),o("v-card-title",[o("h2",{staticClass:"title1 blue--text fs-1 cardtitle"},[o("nuxt-link",{staticClass:"nuxtlink",attrs:{target:"_blank",to:{path:"/news/"+e.slug}}},[t._v("\n                "+t._s(e.title)+"\n              ")])],1)]),t._v(" "),o("v-card-text",{},[o("v-chip-group",{attrs:{"active-class":"deep-purple accent-4 white--text",column:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[o("span",{staticClass:"pt-3"},[t._v("Tags: ‌‌")]),t._v(" "),t._l(e.tags,(function(e,n){return o("v-chip",{key:n,staticClass:"white--text",attrs:{to:"/blog/tags/"+e,color:"blue"}},[t._v(t._s(e))])}))],2),t._v(" "),o("span",[t._v("Author: "+t._s(e.name)+" ")]),o("br"),t._v(" "),o("span",[t._v("Date : "+t._s(e.human_date))]),o("br")],1)],1)],1)})),1)],1),t._v(" "),t.loader?o("v-container",t._l(t.content,(function(t,e){return o("v-row",{key:e},[o("v-col",[o("v-skeleton-loader",{attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}})],1)],1)})),1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VCard:k.a,VCardText:m.c,VCardTitle:m.d,VChip:h.a,VChipGroup:v.a,VCol:f.a,VContainer:x.a,VImg:_.a,VRow:w.a,VSheet:y.a,VSkeletonLoader:z.a})},864:function(t,e,o){"use strict";o(692)},865:function(t,e,o){var n=o(11)(!1);n.push([t.i,'[data-v-5bcb45aa]:root{--ck-color-mention-background:rgba(153,0,48,0.1);--ck-color-mention-text:#990030;--ck-color-table-caption-background:#f7f7f7;--ck-color-table-caption-text:#333;--ck-highlight-marker-blue:#72ccfd;--ck-highlight-marker-green:#62f962;--ck-highlight-marker-pink:#fc7899;--ck-highlight-marker-yellow:#fdfd77;--ck-highlight-pen-green:#128a00;--ck-highlight-pen-red:#e71313;--ck-image-style-spacing:1.5em;--ck-todo-list-checkmark-size:16px}.ck-content .marker-yellow[data-v-5bcb45aa]{background-color:#fdfd77;background-color:var(--ck-highlight-marker-yellow)}.ck-content .marker-green[data-v-5bcb45aa]{background-color:#62f962;background-color:var(--ck-highlight-marker-green)}.ck-content .marker-pink[data-v-5bcb45aa]{background-color:#fc7899;background-color:var(--ck-highlight-marker-pink)}.ck-content .marker-blue[data-v-5bcb45aa]{background-color:#72ccfd;background-color:var(--ck-highlight-marker-blue)}.ck-content .pen-red[data-v-5bcb45aa]{color:#e71313;color:var(--ck-highlight-pen-red);background-color:transparent}.ck-content .pen-green[data-v-5bcb45aa]{color:#128a00;color:var(--ck-highlight-pen-green);background-color:transparent}.ck-content .text-tiny[data-v-5bcb45aa]{font-size:.7em}.ck-content .text-small[data-v-5bcb45aa]{font-size:.85em}.ck-content .text-big[data-v-5bcb45aa]{font-size:1.4em}.ck-content .text-huge[data-v-5bcb45aa]{font-size:1.8em}.ck-content .image-style-side[data-v-5bcb45aa]{float:right;margin-left:1.5em;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left[data-v-5bcb45aa]{float:left;margin-right:1.5em;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center[data-v-5bcb45aa]{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right[data-v-5bcb45aa]{float:right;margin-left:1.5em;margin-left:var(--ck-image-style-spacing)}.ck-content .image[data-v-5bcb45aa]{display:table;clear:both;text-align:center;margin:1em auto}.ck-content .image img[data-v-5bcb45aa]{display:block;margin:0 auto;max-width:100%;min-width:50px}.ck-content .image>figcaption[data-v-5bcb45aa]{display:table-caption;caption-side:bottom;word-break:break-word;color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}.ck-content .image.image_resized[data-v-5bcb45aa]{max-width:100%;display:block;box-sizing:border-box}.ck-content .image.image_resized img[data-v-5bcb45aa]{width:100%}.ck-content .image.image_resized>figcaption[data-v-5bcb45aa]{display:block}.ck-content span[lang][data-v-5bcb45aa]{font-style:italic}.ck-content pre[data-v-5bcb45aa]{padding:1em;color:#353535;background:hsla(0,0%,78%,.3);border:1px solid #c4c4c4;border-radius:2px;text-align:left;direction:ltr;-moz-tab-size:4;-o-tab-size:4;tab-size:4;white-space:pre-wrap;font-style:normal;min-width:200px}.ck-content pre code[data-v-5bcb45aa]{background:unset;padding:0;border-radius:0}.ck-content hr[data-v-5bcb45aa]{margin:15px 0;height:4px;background:#dedede;border:0}.ck-content .raw-html-embed[data-v-5bcb45aa]{margin:1em auto;min-width:15em;font-style:normal}.ck-content blockquote[data-v-5bcb45aa]{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;margin-right:0;font-style:italic;border-left:5px solid #ccc}.ck-content[dir=rtl] blockquote[data-v-5bcb45aa]{border-left:0;border-right:5px solid #ccc}.ck-content code[data-v-5bcb45aa]{background-color:hsla(0,0%,78%,.3);padding:.15em;border-radius:2px}.ck-content .table[data-v-5bcb45aa]{margin:1em auto;display:table}.ck-content .table table[data-v-5bcb45aa]{border-collapse:collapse;border-spacing:0;width:100%;height:100%;border:1px double #b3b3b3}.ck-content .table table td[data-v-5bcb45aa],.ck-content .table table th[data-v-5bcb45aa]{min-width:2em;padding:.4em;border:1px solid #bfbfbf}.ck-content .table table th[data-v-5bcb45aa]{font-weight:700;background:hsla(0,0%,0%,5%)}.ck-content[dir=rtl] .table th[data-v-5bcb45aa]{text-align:right}.ck-content[dir=ltr] .table th[data-v-5bcb45aa]{text-align:left}.ck-content .table>figcaption[data-v-5bcb45aa]{display:table-caption;caption-side:top;word-break:break-word;text-align:center;color:#333;color:var(--ck-color-table-caption-text);background-color:#f7f7f7;background-color:var(--ck-color-table-caption-background);padding:.6em;font-size:.75em;outline-offset:-1px}.ck-content .page-break[data-v-5bcb45aa]{position:relative;clear:both;padding:5px 0;display:flex;align-items:center;justify-content:center}.ck-content .page-break[data-v-5bcb45aa]:after{content:"";position:absolute;border-bottom:2px dashed #c4c4c4;width:100%}.ck-content .page-break__label[data-v-5bcb45aa]{position:relative;z-index:1;padding:.3em .6em;display:block;text-transform:uppercase;border:1px solid #c4c4c4;border-radius:2px;font-family:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;font-size:.75em;font-weight:700;color:#333;background:#fff;box-shadow:2px 2px 1px rgba(0,0,0,.15);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ck-content .media[data-v-5bcb45aa]{clear:both;margin:1em 0;display:block;min-width:15em}.ck-content .todo-list[data-v-5bcb45aa]{list-style:none}.ck-content .todo-list li[data-v-5bcb45aa]{margin-bottom:5px}.ck-content .todo-list li .todo-list[data-v-5bcb45aa]{margin-top:5px}.ck-content .todo-list .todo-list__label>input[data-v-5bcb45aa]{-webkit-appearance:none;display:inline-block;position:relative;width:16px;width:var(--ck-todo-list-checkmark-size);height:16px;height:var(--ck-todo-list-checkmark-size);vertical-align:middle;border:0;left:-25px;margin-right:-15px;right:0;margin-left:0}.ck-content .todo-list .todo-list__label>input[data-v-5bcb45aa]:before{display:block;position:absolute;box-sizing:border-box;content:"";width:100%;height:100%;border:1px solid #333;border-radius:2px;transition:box-shadow .25s ease-in-out,background .25s ease-in-out,border .25s ease-in-out}.ck-content .todo-list .todo-list__label>input[data-v-5bcb45aa]:after{display:block;position:absolute;box-sizing:content-box;pointer-events:none;content:"";left:5.33333px;left:calc(var(--ck-todo-list-checkmark-size)/3);top:3.01887px;top:calc(var(--ck-todo-list-checkmark-size)/5.3);width:3.01887px;width:calc(var(--ck-todo-list-checkmark-size)/5.3);height:6.15385px;height:calc(var(--ck-todo-list-checkmark-size)/2.6);border-width:0 2px 2px 0;border-left:0 solid transparent;border-bottom:calc(var(--ck-todo-list-checkmark-size)/8) solid transparent;border-right:calc(var(--ck-todo-list-checkmark-size)/8) solid transparent;border-top:0 solid transparent;transform:rotate(45deg)}.ck-content .todo-list .todo-list__label>input[checked][data-v-5bcb45aa]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked][data-v-5bcb45aa]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description[data-v-5bcb45aa]{vertical-align:middle}.ck-content .mention[data-v-5bcb45aa]{background:rgba(153,0,48,.1);background:var(--ck-color-mention-background);color:#990030;color:var(--ck-color-mention-text)}@media print{.ck-content .page-break[data-v-5bcb45aa]{padding:0}.ck-content .page-break[data-v-5bcb45aa]:after{display:none}}',""]),t.exports=n},925:function(t,e,o){"use strict";o.r(e);var n=o(15),c=(o(53),o(28),o(150),{head:function(){return{title:"News:  "+this.title,meta:[{hid:"News",name:"News",content:"News"+this.title}]}},data:function(){return{posts:{content:[],image:"",date:"",author:""},title:"",pageload:!0}},mounted:function(){console.log("mounted")},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,c,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$axios,n=t.error,c=t.params,e.prev=1,e.next=4,o.$get("/sanctum/csrf-cookie");case 4:return e.next=6,o.$get("api/news/".concat(c.id));case 6:return r=e.sent,e.abrupt("return",{posts:r.data[0],pageload:!1,slug:c.slug,title:r.data[0].title,image:r.data[0].image});case 10:e.prev=10,e.t0=e.catch(1),n({statusCode:500,message:"Page not found"});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))()},created:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},computed:{id:function(){return this.$route.params.id}},components:{},watch:{},methods:{}}),r=(o(864),o(35)),l=o(31),d=o.n(l),k=o(52),m=o(532),h=o(540),v=o(183),f=o(533),x=o(67),_=o(559),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[o("v-row",[o("v-col",{staticClass:"mb-0 pb-0 col-md-8 col-lg-8 offset-md-2 offset-lg-2 offset-xl-2",attrs:{sm:"12",md:"8",lg:"8",xl:"8"}},[t.pageload?o("v-skeleton-loader",{staticClass:"pa-2 ma-2",attrs:{elevation:"2",outlined:"",shaped:"",tile:"",type:"card"}}):o("v-sheet",{staticClass:"pa-1 ma-1",attrs:{shaped:"",tile:""}},[o("h1",{staticClass:"fs-1-3 blue--text"},[t._v(t._s(t.posts.title))]),t._v(" "),null!=t.posts.image?o("v-img",{attrs:{height:"250",src:t.posts.image}}):o("v-img",{attrs:{contain:"","aspect-ratio":"1.7",src:"/images/default.jpg"}}),t._v(" "),o("v-card-title",[o("h2",[t._v("Title : "+t._s(t.posts.title))])]),t._v(" "),o("v-card-text",{},[o("span",[t._v("Author : "+t._s(t.posts.name))]),t._v(" "),o("br"),t._v(" "),o("br"),t._v(" "),o("span",[t._v("Date : "+t._s(t.posts.human_date))]),t._v(" "),o("v-sheet",{staticClass:"ck-content",domProps:{innerHTML:t._s(t.posts.content)}})],1)],1)],1)],1),t._v(" "),o("v-row",[o("v-col",[o("WidgetNewstags")],1)],1)],1)}),[],!1,null,"5bcb45aa",null);e.default=component.exports;d()(component,{WidgetNewstags:o(704).default}),d()(component,{VCardText:k.c,VCardTitle:k.d,VCol:m.a,VContainer:h.a,VImg:v.a,VRow:f.a,VSheet:x.a,VSkeletonLoader:_.a})}}]);