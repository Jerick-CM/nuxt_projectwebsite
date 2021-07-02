(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{535:function(n,e,t){"use strict";e.a={styles:"\n:root {\n  --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);\n  --ck-color-mention-text: hsl(341, 100%, 30%);\n  --ck-highlight-marker-blue: hsl(201, 97%, 72%);\n  --ck-highlight-marker-green: hsl(120, 93%, 68%);\n  --ck-highlight-marker-pink: hsl(345, 96%, 73%);\n  --ck-highlight-marker-yellow: hsl(60, 97%, 73%);\n  --ck-highlight-pen-green: hsl(112, 100%, 27%);\n  --ck-highlight-pen-red: hsl(0, 85%, 49%);\n  --ck-image-style-spacing: 1.5em;\n  --ck-todo-list-checkmark-size: 16px;\n}\n\n.image-style-side {\n  float: right;\n  margin-left: var(--ck-image-style-spacing);\n  max-width: 50%;\n}\n\n.image-style-align-left {\n  float: left;\n  margin-right: var(--ck-image-style-spacing);\n}\n\n.image-style-align-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.image-style-align-right {\n  float: right;\n  margin-left: var(--ck-image-style-spacing);\n}\n\n.image {\n  display: table;\n  clear: both;\n  text-align: center;\n  margin: 1em auto;\n}\n\n.image img {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  min-width: 50px;\n}\n\n.image > figcaption {\n  display: table-caption;\n  caption-side: bottom;\n  word-break: break-word;\n  color: hsl(0, 0%, 20%);\n  background-color: hsl(0, 0%, 97%);\n  padding: .6em;\n  font-size: .75em;\n  outline-offset: -1px;\n}\n\n.image.image_resized {\n  max-width: 100%;\n  display: block;\n  box-sizing: border-box;\n}\n\n.image.image_resized img {\n  width: 100%;\n}\n\n.image.image_resized > figcaption {\n  display: block;\n}\n\n.marker-yellow {\n  background-color: var(--ck-highlight-marker-yellow);\n}\n\n.marker-green {\n  background-color: var(--ck-highlight-marker-green);\n}\n\n.marker-pink {\n  background-color: var(--ck-highlight-marker-pink);\n}\n\n.marker-blue {\n  background-color: var(--ck-highlight-marker-blue);\n}\n\n.pen-red {\n  color: var(--ck-highlight-pen-red);\n  background-color: transparent;\n}\n\n.pen-green {\n  color: var(--ck-highlight-pen-green);\n  background-color: transparent;\n}\n\n.text-tiny {\n  font-size: .7em;\n}\n\n.text-small {\n  font-size: .85em;\n}\n\n.text-big {\n  font-size: 1.4em;\n}\n\n.text-huge {\n  font-size: 1.8em;\n}\n\nblockquote {\n  overflow: hidden;\n  padding-right: 1.5em;\n  padding-left: 1.5em;\n  margin-left: 0;\n  margin-right: 0;\n  font-style: italic;\n  border-left: solid 5px hsl(0, 0%, 80%);\n}\n\n[dir=\"rtl\"] blockquote {\n  border-left: 0;\n  border-right: solid 5px hsl(0, 0%, 80%);\n}\n\ncode {\n  background-color: hsla(0, 0%, 78%, 0.3);\n  padding: .15em;\n  border-radius: 2px;\n}\n\n.table {\n  margin: 1em auto;\n  display: table;\n}\n\n.table table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px double hsl(0, 0%, 70%);\n}\n\n.table table td,\n.table table th {\n  min-width: 2em;\n  padding: .4em;\n  border: 1px solid hsl(0, 0%, 75%);\n}\n\n.table table th {\n  font-weight: bold;\n  background: hsla(0, 0%, 0%, 5%);\n}\n\n[dir=\"rtl\"] .table th {\n  text-align: right;\n}\n\n[dir=\"ltr\"] .table th {\n  text-align: left;\n}\n\n.page-break {\n  position: relative;\n  clear: both;\n  padding: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-break::after {\n  content: '';\n  position: absolute;\n  border-bottom: 2px dashed hsl(0, 0%, 77%);\n  width: 100%;\n}\n\n.page-break__label {\n  position: relative;\n  z-index: 1;\n  padding: .3em .6em;\n  display: block;\n  text-transform: uppercase;\n  border: 1px solid hsl(0, 0%, 77%);\n  border-radius: 2px;\n  font-family: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;\n  font-size: 0.75em;\n  font-weight: bold;\n  color: hsl(0, 0%, 20%);\n  background: hsl(0, 0%, 100%);\n  box-shadow: 2px 2px 1px hsla(0, 0%, 0%, 0.15);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.todo-list {\n  list-style: none;\n}\n\n.todo-list li {\n  margin-bottom: 5px;\n}\n\n.todo-list li .todo-list {\n  margin-top: 5px;\n}\n\n.todo-list .todo-list__label > input {\n  -webkit-appearance: none;\n  display: inline-block;\n  position: relative;\n  width: var(--ck-todo-list-checkmark-size);\n  height: var(--ck-todo-list-checkmark-size);\n  vertical-align: middle;\n  border: 0;\n  left: -25px;\n  margin-right: -15px;\n  right: 0;\n  margin-left: 0;\n}\n\n.todo-list .todo-list__label > input::before {\n  display: block;\n  position: absolute;\n  box-sizing: border-box;\n  content: '';\n  width: 100%;\n  height: 100%;\n  border: 1px solid hsl(0, 0%, 20%);\n  border-radius: 2px;\n  transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;\n}\n\n.todo-list .todo-list__label > input::after {\n  display: block;\n  position: absolute;\n  box-sizing: content-box;\n  pointer-events: none;\n  content: '';\n  left: calc( var(--ck-todo-list-checkmark-size) / 3 );\n  top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );\n  width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );\n  height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );\n  border-style: solid;\n  border-color: transparent;\n  border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;\n  transform: rotate(45deg);\n}\n\n.todo-list .todo-list__label > input[checked]::before {\n  background: hsl(126, 64%, 41%);\n  border-color: hsl(126, 64%, 41%);\n}\n\n.todo-list .todo-list__label > input[checked]::after {\n  border-color: hsl(0, 0%, 100%);\n}\n\n.todo-list .todo-list__label .todo-list__label__description {\n  vertical-align: middle;\n}\n\n.media {\n  clear: both;\n  margin: 1em 0;\n  display: block;\n  min-width: 15em;\n}\n\n.raw-html-embed {\n  margin: 1em auto;\n  min-width: 15em;\n}\n\nhr {\n  margin: 15px 0;\n  height: 4px;\n  background: hsl(0, 0%, 87%);\n  border: 0;\n}\n\npre {\n  padding: 1em;\n  color: hsl(0, 0%, 20.8%);\n  background: hsla(0, 0%, 78%, 0.3);\n  border: 1px solid hsl(0, 0%, 77%);\n  border-radius: 2px;\n  text-align: left;\n  direction: ltr;\n  tab-size: 4;\n  white-space: pre-wrap;\n  font-style: normal;\n  min-width: 200px;\n}\n\npre code {\n  background: unset;\n  padding: 0;\n  border-radius: 0;\n}\n\n.mention {\n  background: var(--ck-color-mention-background);\n  color: var(--ck-color-mention-text);\n}\n@media print {\n\n  .page-break {\n      padding: 0;\n  }\n\n  .page-break::after {\n      display: none;\n  }\n}",DELIVERY:"Delivery",CARRIER:"Carrier"}},537:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var r={middleware:"admin",layout:"admin"}},647:function(n,e,t){var content=t(809);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(12).default)("756f6fa2",content,!0,{sourceMap:!1})},808:function(n,e,t){"use strict";t(647)},809:function(n,e,t){var r=t(11)(!1);r.push([n.i,"ul.clean[data-v-70c79750]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-70c79750],.ck.ck-content.ck-editor__editable[data-v-70c79750],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-70c79750],.ck.ck-content.ck-editor__editable_inline[data-v-70c79750]{height:350px}",""]),n.exports=r},879:function(n,e,t){"use strict";t.r(e);var r=t(16),o=(t(51),t(23),t(40),t(42),t(318),t(29),t(537)),l=t(539),c=t.n(l),d=t(535),m=t(2),h=t(185),f=t(128);m.default.use(h.Vuelidate);var k={head:function(){return{title:"Create News"}},mixins:[h.validationMixin,o.a],data:function(){return{image_id:"",url_backend:"",form_content:"",form_title:"",form_publish:"",token:null,publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}],image:"",image_preview:"",image_name:""}},validations:{form_content:{required:f.required},form_title:{required:f.required},form_publish:{required:f.required}},components:{"ckeditor-nuxt":function(){return t.e(0).then(t.t.bind(null,845,7))}},created:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.timezone="Asia/Singapore",n.image_id="news-"+(new Date).getTime(),n.editorConfig={simpleUpload:{uploadUrl:"https://backend.inhinyeru.com/api/ckeditor",withCredentials:!0,headers:{Accept:"application/json",Timezone:n.timezone,identifier:n.image_id,"X-XSRF-TOKEN":n.$auth.$storage.getCookies()["XSRF-TOKEN"]}}},e.next=5,n.$axios.$get("/sanctum/csrf-cookie");case 5:case"end":return e.stop()}}),e)})))()},computed:{titleErrors:function(){var n=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&n.push("Title is required."),n):n},contentErrors:function(){var n=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&n.push("Content is required."),n):n}},methods:{handleFileUpload:function(n){var e=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(e);try{this.image_name=this.$refs.file.files[0].name,this.image=this.$refs.file.files[0]}catch(n){console.log(n)}},remove_image:function(){return this.$refs.file.value=null,this.image_name="",this.image="",this.image_preview="",!1},onSubmit:function(){var n=this;if(this.form_title&&this.form_content&&this.form_publish){this.$axios.$get("/sanctum/csrf-cookie"),this.$toast.success("Sending"),this.form_content=c.a.inlineContent(this.form_content,d.a.styles);var e=new FormData;e.append("ckeditor_log",this.image_id),e.append("publish",this.form_publish),e.append("title",this.form_title),e.append("content",this.form_content),e.append("image",this.image),e.append("image_name",this.image_name),this.$axios.post("/api/news/create",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){n.$toast.success("Done.")})).catch((function(n){})).finally((function(){}))}else this.$toast.error("Validation failed.")}}},v=(t(808),t(35)),_=t(31),x=t.n(_),w=t(516),y=t(237),$=t(524),z=t(533),C=t(182),V=t(525),S=t(59),R=t(66),T=t(530),E=t(91),component=Object(v.a)(k,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":"800vh"}},[t("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[t("form",{staticClass:"white pa-5",attrs:{action:""}},[t("v-row",[t("v-col",[t("v-btn",{attrs:{color:"primary",depressed:"",to:"/admin/news/manage"}},[n._v("\n            BACK\n          ")])],1)],1),n._v(" "),t("v-row",[t("v-col",[t("v-text-field",{attrs:{label:"Title"},on:{blur:function(e){return n.$v.form_title.$touch()},input:function(e){return n.$v.form_title.$touch()}},model:{value:n.form_title,callback:function(e){n.form_title=e},expression:"form_title"}}),n._v(" "),n.$v.form_title.$error?[n.$v.form_title.required?n._e():t("div",{staticClass:"errorMessage red--text"},[n._v("\n              Title is required.\n            ")])]:n._e()],2)],1),n._v(" "),t("v-row",[t("v-col",[t("v-select",{attrs:{items:n.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(e){return n.$v.form_publish.$touch()}},model:{value:n.form_publish,callback:function(e){n.form_publish=e},expression:"form_publish"}}),n._v(" "),n.$v.form_publish.$error?[n.$v.form_publish.required?n._e():t("p",{staticClass:"errorMessage red--text"},[n._v("\n              Select Publish is required.\n            ")])]:n._e()],2)],1),n._v(" "),t("v-row",[t("v-col",{attrs:{lg:"4"}},[t("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(e){return n.handleFileUpload()}}}),n._v(" "),t("v-card",[n.image_preview?t("v-img",{attrs:{src:n.image_preview}}):n._e()],1),n._v(" "),""!=this.image_preview?t("label",{staticClass:"red--text",attrs:{onclick:"return false"},on:{click:function(e){return n.remove_image()}}},[n._v("Remove")]):n._e()],1),n._v(" "),t("v-spacer")],1),n._v(" "),t("v-row",[t("v-col",[t("label",{staticClass:"black--text",attrs:{for:""}},[n._v("Content")]),n._v(" "),t("br"),n._v(" "),t("client-only",{attrs:{placeholder:"loading..."}},[t("ckeditor-nuxt",{attrs:{config:n.editorConfig,"error-messages":n.contentErrors},on:{blur:function(e){return n.$v.form_content.$touch()},input:function(e){return n.$v.form_content.$touch()}},model:{value:n.form_content,callback:function(e){n.form_content=e},expression:"form_content"}}),n._v(" "),n.$v.form_content.$error?[n.$v.form_content.required?n._e():t("div",{staticClass:"errorMessage red--text"},[n._v("\n                Content is required.\n              ")])]:n._e()],2)],1)],1),n._v(" "),t("v-row",[t("v-col",[t("v-btn",{staticClass:"ml-0",attrs:{color:"success"},on:{click:function(e){return n.onSubmit()}}},[t("label",{staticClass:"white-font"},[n._v("Submit")])])],1)],1)],1)])],1)}),[],!1,null,"70c79750",null);e.default=component.exports;x()(component,{Template:t(127).default}),x()(component,{VBtn:w.a,VCard:y.a,VCol:$.a,VContainer:z.a,VImg:C.a,VRow:V.a,VSelect:S.a,VSheet:R.a,VSpacer:T.a,VTextField:E.a})}}]);