(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{442:function(e,t,r){"use strict";r(10),r(7),r(9),r(13),r(8),r(14);var n=r(3),o=(r(23),r(205),r(444),r(105)),l=r(445),c=r(87),d=r(5);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var e=l.a.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},444:function(e,t,r){var content=r(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(16).default)("e23b7040",content,!0,{sourceMap:!1})},446:function(e,t,r){var n=r(15)(!1);n.push([e.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),e.exports=n},817:function(e,t,r){"use strict";r.r(t);var n=r(11),o=(r(54),r(27),r(19),r(33),r(39),r(291),r(34),r(55),{mixins:[{data:function(){return{reservedval:["admin","blog","codesnippet","dash","dashboard","news","post","profile","quotes","technology","tutorial","world-reminders","about","contact-us","index","login","logout","register","template","test","tutorials","users"]}}}],data:function(){return{profile:"",posts:{content:[],image:"",date:"",author:""},title:"",pageload:!0,image:"",image_preview:"",image_name:"",form_image:""}},head:function(){return{title:"Profile :"+this.profile.name,meta:[{hid:"Profile",name:"Profile",content:"Profile"+this.profile.name}]}},mounted:function(){console.log("mounted")},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,e.error,e.params,n=e.$auth,t.next=3,r.$get("/sanctum/csrf-cookie");case 3:return t.next=5,r.$get("api/user_details/".concat(n.state.user.email));case 5:return o=t.sent,t.abrupt("return",{profile:o.user});case 7:case"end":return t.stop()}}),t)})))()},computed:{email:function(){return this.$auth.state.user.email},alibataname:function(){return this.profile.name}},created:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},middleware:"auth",components:{},watch:{},methods:{handleFileUpload:function(e){var t=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(t);try{this.image_name=this.$refs.file.files[0].name,this.form_image=this.$refs.file.files[0]}catch(e){console.log(e)}},Update_Profile:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.reservedval.includes(e.profile.details.username))e.$toast.error('username "'+e.profile.details.username+'" is reserved');else{(r=new FormData).append("username",e.profile.details.username);try{e.$axios.$post("api/user_details/update/".concat(e.profile.id),r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){})).catch((function(e){})).finally((function(){}))}catch(e){}}case 2:case"end":return t.stop()}}),t)})))()}}}),l=r(36),c=r(38),d=r.n(c),v=r(424),f=r(442),h=r(432),m=r(433),_=r(159),x=r(434),w=r(613),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{lg:"12"}},[r("v-card",{staticClass:"  pa-4 ma-4"},[r("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}}),e._v(" "),r("v-card",[e.image_preview?r("v-img",{attrs:{src:e.image_preview}}):r("div",[e.form_image?r("v-img",{attrs:{src:e.form_image}}):e._e()],1)],1),e._v(" "),r("v-text-field",{attrs:{label:"Name"},model:{value:e.profile.name,callback:function(t){e.$set(e.profile,"name",t)},expression:"profile.name"}}),e._v(" "),r("span",{staticClass:"font-Bonida"},[e._v(e._s(e.alibataname))]),e._v(" "),r("v-text-field",{attrs:{label:"Username"},model:{value:e.profile.details.username,callback:function(t){e.$set(e.profile.details,"username",t)},expression:"profile['details'].username"}}),e._v(" "),r("v-text-field",{attrs:{label:"House number"},model:{value:e.profile.details.house_number,callback:function(t){e.$set(e.profile.details,"house_number",t)},expression:"profile['details'].house_number"}}),e._v(" "),r("v-text-field",{attrs:{label:"City"},model:{value:e.profile.details.city,callback:function(t){e.$set(e.profile.details,"city",t)},expression:"profile['details'].city"}}),e._v(" "),r("v-text-field",{attrs:{label:"Street"},model:{value:e.profile.details.street,callback:function(t){e.$set(e.profile.details,"street",t)},expression:"profile['details'].street"}}),e._v(" "),r("v-text-field",{attrs:{label:"Province"},model:{value:e.profile.details.province,callback:function(t){e.$set(e.profile.details,"province",t)},expression:"profile['details'].province"}}),e._v(" "),r("v-text-field",{attrs:{label:"Country"},model:{value:e.profile.details.country,callback:function(t){e.$set(e.profile.details,"country",t)},expression:"profile['details'].country"}}),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:e.Update_Profile}},[e._v(" Save ")])],1)],1)],1)],1)],1)}),[],!1,null,"133dc010",null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:f.a,VCol:h.a,VContainer:m.a,VImg:_.a,VRow:x.a,VTextField:w.a})}}]);