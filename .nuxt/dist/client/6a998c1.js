(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{640:function(e,t,r){var content=r(783);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("da564666",content,!0,{sourceMap:!1})},782:function(e,t,r){"use strict";r(640)},783:function(e,t,r){var n=r(11)(!1);n.push([e.i,"ul.clean[data-v-506d7434]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-506d7434],.ck.ck-content.ck-editor__editable[data-v-506d7434],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-506d7434],.ck.ck-content.ck-editor__editable_inline[data-v-506d7434]{height:350px}",""]),e.exports=n},873:function(e,t,r){"use strict";r.r(t);var n=r(22),o=r(16),l=(r(23),r(40),r(42),r(318),r(29),r(129),r(32),r(186),r(249),r(51),r(185)),d=r(128),c=r(28),m=r.n(c),f=(r(150),{middleware:"auth",mixins:[l.validationMixin],head:function(){return{title:"Post Datatable"}},data:function(){return{headers:[{text:"No",align:"start",sortable:!1,value:"no"},{text:"Name",value:"name"},{text:"Quotes",value:"message"},{text:"Author",value:"author"},{text:"Publish",value:"publish"},{text:"Date / Time",value:"created_at"},{text:"Action",value:"id",sortable:!1}],form_content:"",form_title:"",form_author:"",form_message:"",form_publish:"",dialog:!1,dialogDelete:!1,deletedialog:!1,editedIndex:-1,search:"",tabledata:[],tabledata_total:0,loading:!0,options:{},publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}],form_image:"",image:"",image_preview:"",image_name:""}},validations:{form_author:{required:d.required},form_message:{required:d.required},form_publish:{required:d.required}},created:function(){return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},components:{},computed:{titleErrors:function(){var e=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&e.push("Title is required."),e):e},contentErrors:function(){var e=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&e.push("Content is required."),e):e}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},mounted:function(){this.getDataFromApi()},methods:{handleFileUpload:function(e){var t=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(t);try{this.image_name=this.$refs.file.files[0].name,this.form_image=this.$refs.file.files[0]}catch(e){console.log(e)}},remove_image:function(){return this.$refs.file.value=null,this.image_name="",this.image="",this.image_preview="",this.form_image="",!1},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.form_title=this.tabledata[this.tabledata.indexOf(e)].title,this.form_image=this.tabledata[this.tabledata.indexOf(e)].image,this.form_message=this.tabledata[this.tabledata.indexOf(e)].message,this.form_author=this.tabledata[this.tabledata.indexOf(e)].author,this.form_publish=this.tabledata[this.tabledata.indexOf(e)].publishvalue,this.editedIndex=this.tabledata.indexOf(e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.tabledata.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},SaveEdited:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 2:m.a.start(),r=new FormData,n=e.tabledata[e.editedIndex].id,r.append("post_id",e.tabledata[e.editedIndex].id),r.append("message",e.form_message),r.append("author",e.form_author),r.append("publish",e.form_publish);try{e.$axios.$post("api/quotes/update/".concat(n),r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.tabledata[e.editedIndex].message=e.form_message,e.tabledata[e.editedIndex].author=e.form_message,e.tabledata[e.editedIndex].publish=1==e.form_publish?"Draft":"Publish",e.tabledata[e.editedIndex].publishvalue=e.form_publish,e.dialog=!1,e.form_publish="",m.a.done()})).catch((function(t){e.form_publish="",m.a.done()})).finally((function(){}))}catch(e){}case 10:case"end":return t.stop()}}),t)})))()},deleteItemConfirm:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 2:r=e.tabledata[e.editedIndex].id;try{e.$axios.$delete("api/quotes/delete/".concat(r)).then((function(e){})).catch((function(e){})).finally((function(){}))}catch(e){}e.tabledata.splice(e.editedIndex,1),e.closeDelete();case 6:case"end":return t.stop()}}),t)})))()},getDataFromApi:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,l,d,c,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,r=e.options,o=r.sortBy,l=r.sortDesc,d=r.page,c=r.itemsPerPage,(m=new FormData).append("sortDesc",l),m.append("sortBy",o),m.append("page",d),m.append("itemsPerPage",c),m.append("search",e.search),t.next=10,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 10:e.$axios.$post("api/quotes/datatable",m).then((function(t){var data=[],r=1;r=1==d?1:(d-1)*c+1;for(var o=0,l=Object.entries(t.data);o<l.length;o++){var m=Object(n.a)(l[o],2),f=(m[0],m[1]);data.push({no:r,name:f.name,id:f.id,slug:f.slug,title:f.title,content:f.content,publish:1==f.publish?"Draft":"Publish",publishvalue:f.publish,image:f.image,created_at:f.human_date,message:f.message,author:f.author}),r++}e.tabledata=data,e.tabledata_total=t.total,e.loading=!1})).catch((function(t){e.loading=!1})).finally((function(){e.loading=!1}));case 11:case"end":return t.stop()}}),t)})))()}}}),h=(r(782),r(35)),v=r(31),_=r.n(v),x=r(516),k=r(237),$=r(85),y=r(524),w=r(533),D=r(847),I=r(531),C=r(174),O=r(525),V=r(59),T=r(66),j=r(530),P=r(91),R=r(67),S=r(247),component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":""}},[r("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":""}},[r("v-card",[r("v-dialog",{attrs:{persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",{attrs:{tile:""}},[r("v-toolbar",{attrs:{flat:"",dark:"",color:"primary","max-height":"50vh"}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("v-toolbar-title",[e._v("Settings")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-toolbar-items",[r("v-btn",{attrs:{dark:"",text:""},on:{click:e.SaveEdited}},[e._v(" Save ")])],1)],1),e._v(" "),r("v-card-text",[r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Quote"},on:{blur:function(t){return e.$v.form_message.$touch()},input:function(t){return e.$v.form_message.$touch()}},model:{value:e.form_message,callback:function(t){e.form_message=t},expression:"form_message"}}),e._v(" "),e.$v.form_message.$error?[e.$v.form_message.required?e._e():r("div",{staticClass:"errorMessage red--text"},[e._v("\n                   Quote is required.\n                  ")])]:e._e()],2)],1),e._v(" "),r("v-row",[r("v-col",[r("v-text-field",{attrs:{label:"Author"},on:{blur:function(t){return e.$v.form_author.$touch()},input:function(t){return e.$v.form_author.$touch()}},model:{value:e.form_author,callback:function(t){e.form_author=t},expression:"form_author"}}),e._v(" "),e.$v.form_author.$error?[e.$v.form_author.required?e._e():r("div",{staticClass:"errorMessage red--text"},[e._v("\n                   Author is required.\n                  ")])]:e._e()],2)],1),e._v(" "),r("v-row",[r("v-col",[r("v-select",{attrs:{items:e.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(t){return e.$v.form_publish.$touch()}},model:{value:e.form_publish,callback:function(t){e.form_publish=t},expression:"form_publish"}}),e._v(" "),e.$v.form_publish.$error?[e.$v.form_publish.required?e._e():r("p",{staticClass:"errorMessage red--text"},[e._v("\n                    Select Publish is required.\n                  ")])]:e._e()],2)],1)],1),e._v(" "),r("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),e._v(" "),r("v-card-title",[e._v("\n        Quotes Table\n        "),r("v-spacer"),e._v(" "),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{change:e.getDataFromApi},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tabledata,options:e.options,"server-items-length":e.tabledata_total,loading:e.loading,"footer-props":{"items-per-page-options":[5,10,20,30,40,50]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"top",fn:function(){return[r("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[r("v-card",[r("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),r("v-spacer")],1)],1)],1)]},proxy:!0},{key:"header.id",fn:function(t){var header=t.header;return[e._v("\n          "+e._s(header.text.toUpperCase())+"\n        ")]}},{key:"header.name",fn:function(t){var header=t.header;return[e._v("\n          "+e._s(header.text.toUpperCase())+"\n        ")]}},{key:"item.publish",fn:function(t){var r=t.item;return[e._v("\n          "+e._s(r.publish)+"\n        ")]}},{key:"item.created_at",fn:function(t){var r=t.item;return[e._v("\n          "+e._s(r.created_at)+"\n        ")]}},{key:"item.id",fn:function(t){var n=t.item;return[r("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(n)}}},[e._v("\n            mdi-pencil\n          ")]),e._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(n)}}},[e._v("\n            mdi-delete\n          ")])]}}])})],1)],1)],1)}),[],!1,null,"506d7434",null);t.default=component.exports;_()(component,{Template:r(127).default}),_()(component,{VBtn:x.a,VCard:k.a,VCardActions:$.a,VCardText:$.b,VCardTitle:$.c,VCol:y.a,VContainer:w.a,VDataTable:D.a,VDialog:I.a,VIcon:C.a,VRow:O.a,VSelect:V.a,VSheet:T.a,VSpacer:j.a,VTextField:P.a,VToolbar:R.a,VToolbarItems:S.a,VToolbarTitle:S.b})}}]);