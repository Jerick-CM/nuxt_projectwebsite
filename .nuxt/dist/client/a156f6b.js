(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{850:function(e,t,r){"use strict";r.r(t);var n=r(16),o=(r(51),r(29),r(23),r(40),r(42),r(318),r(34),r(50),{mixins:[{data:function(){return{reservedval:["search","admin","blog","codesnippet","dash","dashboard","news","post","profile","quotes","technology","tutorial","world-reminders","about","contact-us","index","login","logout","register","template","test","tutorials","users","final","time"]}}}],data:function(){return{profile:"",posts:{content:[],image:"",date:"",author:""},title:"",pageload:!0,image:"",image_preview:"",image_name:"",form_image:""}},head:function(){return{title:"Profile :"+this.profile.name,meta:[{hid:"Profile",name:"Profile",content:"Profile"+this.profile.name}]}},mounted:function(){console.log("mounted")},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,e.error,e.params,n=e.$auth,t.next=3,r.$get("/sanctum/csrf-cookie");case 3:return t.next=5,r.$get("api/user_details/".concat(n.state.user.email));case 5:return o=t.sent,t.abrupt("return",{profile:o.user});case 7:case"end":return t.stop()}}),t)})))()},computed:{email:function(){return this.$auth.state.user.email},alibataname:function(){return this.profile.name}},created:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},middleware:"auth",components:{},watch:{},methods:{handleFileUpload:function(e){var t=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(t);try{this.image_name=this.$refs.file.files[0].name,this.form_image=this.$refs.file.files[0]}catch(e){console.log(e)}},Update_Profile:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.reservedval.includes(e.profile.details.username))e.$toast.error('username "'+e.profile.details.username+'" is reserved');else{(r=new FormData).append("username",e.profile.details.username);try{e.$axios.$post("api/user_details/update/".concat(e.profile.id),r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){})).catch((function(e){})).finally((function(){}))}catch(e){}}case 2:case"end":return t.stop()}}),t)})))()}}}),l=r(35),c=r(31),f=r.n(c),d=r(516),m=r(237),v=r(524),h=r(533),_=r(182),x=r(525),w=r(91),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("v-row",{attrs:{align:"center"}},[r("v-col",{attrs:{lg:"12"}},[r("v-card",{staticClass:"  pa-4 ma-4"},[r("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload()}}}),e._v(" "),r("v-card",[e.image_preview?r("v-img",{attrs:{src:e.image_preview}}):r("div",[e.form_image?r("v-img",{attrs:{src:e.form_image}}):e._e()],1)],1),e._v(" "),r("v-text-field",{attrs:{label:"Name"},model:{value:e.profile.name,callback:function(t){e.$set(e.profile,"name",t)},expression:"profile.name"}}),e._v(" "),r("span",{staticClass:"font-Bonida"},[e._v(e._s(e.alibataname))]),e._v(" "),r("v-text-field",{attrs:{label:"Username"},model:{value:e.profile.details.username,callback:function(t){e.$set(e.profile.details,"username",t)},expression:"profile['details'].username"}}),e._v(" "),r("v-text-field",{attrs:{label:"House number"},model:{value:e.profile.details.house_number,callback:function(t){e.$set(e.profile.details,"house_number",t)},expression:"profile['details'].house_number"}}),e._v(" "),r("v-text-field",{attrs:{label:"City"},model:{value:e.profile.details.city,callback:function(t){e.$set(e.profile.details,"city",t)},expression:"profile['details'].city"}}),e._v(" "),r("v-text-field",{attrs:{label:"Street"},model:{value:e.profile.details.street,callback:function(t){e.$set(e.profile.details,"street",t)},expression:"profile['details'].street"}}),e._v(" "),r("v-text-field",{attrs:{label:"Province"},model:{value:e.profile.details.province,callback:function(t){e.$set(e.profile.details,"province",t)},expression:"profile['details'].province"}}),e._v(" "),r("v-text-field",{attrs:{label:"Country"},model:{value:e.profile.details.country,callback:function(t){e.$set(e.profile.details,"country",t)},expression:"profile['details'].country"}}),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:e.Update_Profile}},[e._v(" Save ")])],1)],1)],1)],1)],1)}),[],!1,null,"133dc010",null);t.default=component.exports;f()(component,{VBtn:d.a,VCard:m.a,VCol:v.a,VContainer:h.a,VImg:_.a,VRow:x.a,VTextField:w.a})}}]);