(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{555:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var o={middleware:"admin",layout:"admin"}},682:function(e,t,r){var content=r(845);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("7888a536",content,!0,{sourceMap:!1})},844:function(e,t,r){"use strict";r(682)},845:function(e,t,r){var o=r(11)(!1);o.push([e.i,"ul.clean[data-v-1afc9e29]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-1afc9e29],.ck.ck-content.ck-editor__editable[data-v-1afc9e29],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-1afc9e29],.ck.ck-content.ck-editor__editable_inline[data-v-1afc9e29]{height:350px}",""]),e.exports=o},916:function(e,t,r){"use strict";r.r(t);var o=r(15),n=(r(23),r(53),r(555)),c=r(2),l=r(186),f=r(128);c.default.use(l.Vuelidate);var m={head:function(){return{title:"Create News"}},mixins:[l.validationMixin,n.a],data:function(){return{form_message:"",form_author:"",form_publish:"",token:null,publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}]}},validations:{form_message:{required:f.required},form_author:{required:f.required},form_publish:{required:f.required}},components:{},created:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},computed:{titleErrors:function(){var e=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&e.push("Title is required."),e):e},contentErrors:function(){var e=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&e.push("Content is required."),e):e}},methods:{onSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.form_author&&e.form_message&&e.form_publish)){t.next=11;break}return t.next=3,e.$axios.$get("/sanctum/csrf-cookie");case 3:e.$toast.success("Sending"),(r=new FormData).append("publish",e.form_publish),r.append("message",e.form_message),r.append("author",e.form_author),e.$axios.post("/api/quotes/create",r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$toast.success("Done.")})).catch((function(e){})).finally((function(){})),t.next=12;break;case 11:e.$toast.error("Validation failed.");case 12:case"end":return t.stop()}}),t)})))()}}},d=(r(844),r(35)),v=r(31),_=r.n(v),h=r(524),$=r(532),x=r(540),k=r(533),w=r(61),C=r(67),y=r(88),component=Object(d.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":"800vh"}},[r("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[r("form",{staticClass:"white pa-5",attrs:{action:""}},[r("v-row",[r("v-col",[r("v-btn",{attrs:{color:"primary",depressed:"",to:"/admin/quotes/manage"}},[e._v("\n            BACK\n          ")])],1)],1),e._v(" "),r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Quote"},on:{blur:function(t){return e.$v.form_message.$touch()},input:function(t){return e.$v.form_message.$touch()}},model:{value:e.form_message,callback:function(t){e.form_message=t},expression:"form_message"}}),e._v(" "),e.$v.form_message.$error?[e.$v.form_message.required?e._e():r("div",{staticClass:"errorMessage red--text"},[e._v("\n              Quote is required.\n            ")])]:e._e()],2)],1),e._v(" "),r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Author"},on:{blur:function(t){return e.$v.form_author.$touch()},input:function(t){return e.$v.form_author.$touch()}},model:{value:e.form_author,callback:function(t){e.form_author=t},expression:"form_author"}}),e._v(" "),e.$v.form_author.$error?[e.$v.form_author.required?e._e():r("div",{staticClass:"errorMessage red--text"},[e._v("\n              Title is required.\n            ")])]:e._e()],2)],1),e._v(" "),r("v-row",[r("v-col",[r("v-select",{attrs:{items:e.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(t){return e.$v.form_publish.$touch()}},model:{value:e.form_publish,callback:function(t){e.form_publish=t},expression:"form_publish"}}),e._v(" "),e.$v.form_publish.$error?[e.$v.form_publish.required?e._e():r("p",{staticClass:"errorMessage red--text"},[e._v("\n              Select Publish is required.\n            ")])]:e._e()],2)],1),e._v(" "),r("v-row",[r("v-col",[r("v-btn",{staticClass:"ml-0",attrs:{color:"success"},on:{click:function(t){return e.onSubmit()}}},[r("label",{staticClass:"white-font"},[e._v("Submit")])])],1)],1)],1)])],1)}),[],!1,null,"1afc9e29",null);t.default=component.exports;_()(component,{Template:r(127).default}),_()(component,{VBtn:h.a,VCol:$.a,VContainer:x.a,VRow:k.a,VSelect:w.a,VSheet:C.a,VTextField:y.a})}}]);