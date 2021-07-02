(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{125:function(e,n,o){"use strict";var t=o(516);n.a=t.a},535:function(e,n,o){"use strict";n.a={styles:"\n:root {\n  --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);\n  --ck-color-mention-text: hsl(341, 100%, 30%);\n  --ck-highlight-marker-blue: hsl(201, 97%, 72%);\n  --ck-highlight-marker-green: hsl(120, 93%, 68%);\n  --ck-highlight-marker-pink: hsl(345, 96%, 73%);\n  --ck-highlight-marker-yellow: hsl(60, 97%, 73%);\n  --ck-highlight-pen-green: hsl(112, 100%, 27%);\n  --ck-highlight-pen-red: hsl(0, 85%, 49%);\n  --ck-image-style-spacing: 1.5em;\n  --ck-todo-list-checkmark-size: 16px;\n}\n\n.image-style-side {\n  float: right;\n  margin-left: var(--ck-image-style-spacing);\n  max-width: 50%;\n}\n\n.image-style-align-left {\n  float: left;\n  margin-right: var(--ck-image-style-spacing);\n}\n\n.image-style-align-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.image-style-align-right {\n  float: right;\n  margin-left: var(--ck-image-style-spacing);\n}\n\n.image {\n  display: table;\n  clear: both;\n  text-align: center;\n  margin: 1em auto;\n}\n\n.image img {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  min-width: 50px;\n}\n\n.image > figcaption {\n  display: table-caption;\n  caption-side: bottom;\n  word-break: break-word;\n  color: hsl(0, 0%, 20%);\n  background-color: hsl(0, 0%, 97%);\n  padding: .6em;\n  font-size: .75em;\n  outline-offset: -1px;\n}\n\n.image.image_resized {\n  max-width: 100%;\n  display: block;\n  box-sizing: border-box;\n}\n\n.image.image_resized img {\n  width: 100%;\n}\n\n.image.image_resized > figcaption {\n  display: block;\n}\n\n.marker-yellow {\n  background-color: var(--ck-highlight-marker-yellow);\n}\n\n.marker-green {\n  background-color: var(--ck-highlight-marker-green);\n}\n\n.marker-pink {\n  background-color: var(--ck-highlight-marker-pink);\n}\n\n.marker-blue {\n  background-color: var(--ck-highlight-marker-blue);\n}\n\n.pen-red {\n  color: var(--ck-highlight-pen-red);\n  background-color: transparent;\n}\n\n.pen-green {\n  color: var(--ck-highlight-pen-green);\n  background-color: transparent;\n}\n\n.text-tiny {\n  font-size: .7em;\n}\n\n.text-small {\n  font-size: .85em;\n}\n\n.text-big {\n  font-size: 1.4em;\n}\n\n.text-huge {\n  font-size: 1.8em;\n}\n\nblockquote {\n  overflow: hidden;\n  padding-right: 1.5em;\n  padding-left: 1.5em;\n  margin-left: 0;\n  margin-right: 0;\n  font-style: italic;\n  border-left: solid 5px hsl(0, 0%, 80%);\n}\n\n[dir=\"rtl\"] blockquote {\n  border-left: 0;\n  border-right: solid 5px hsl(0, 0%, 80%);\n}\n\ncode {\n  background-color: hsla(0, 0%, 78%, 0.3);\n  padding: .15em;\n  border-radius: 2px;\n}\n\n.table {\n  margin: 1em auto;\n  display: table;\n}\n\n.table table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px double hsl(0, 0%, 70%);\n}\n\n.table table td,\n.table table th {\n  min-width: 2em;\n  padding: .4em;\n  border: 1px solid hsl(0, 0%, 75%);\n}\n\n.table table th {\n  font-weight: bold;\n  background: hsla(0, 0%, 0%, 5%);\n}\n\n[dir=\"rtl\"] .table th {\n  text-align: right;\n}\n\n[dir=\"ltr\"] .table th {\n  text-align: left;\n}\n\n.page-break {\n  position: relative;\n  clear: both;\n  padding: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-break::after {\n  content: '';\n  position: absolute;\n  border-bottom: 2px dashed hsl(0, 0%, 77%);\n  width: 100%;\n}\n\n.page-break__label {\n  position: relative;\n  z-index: 1;\n  padding: .3em .6em;\n  display: block;\n  text-transform: uppercase;\n  border: 1px solid hsl(0, 0%, 77%);\n  border-radius: 2px;\n  font-family: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;\n  font-size: 0.75em;\n  font-weight: bold;\n  color: hsl(0, 0%, 20%);\n  background: hsl(0, 0%, 100%);\n  box-shadow: 2px 2px 1px hsla(0, 0%, 0%, 0.15);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.todo-list {\n  list-style: none;\n}\n\n.todo-list li {\n  margin-bottom: 5px;\n}\n\n.todo-list li .todo-list {\n  margin-top: 5px;\n}\n\n.todo-list .todo-list__label > input {\n  -webkit-appearance: none;\n  display: inline-block;\n  position: relative;\n  width: var(--ck-todo-list-checkmark-size);\n  height: var(--ck-todo-list-checkmark-size);\n  vertical-align: middle;\n  border: 0;\n  left: -25px;\n  margin-right: -15px;\n  right: 0;\n  margin-left: 0;\n}\n\n.todo-list .todo-list__label > input::before {\n  display: block;\n  position: absolute;\n  box-sizing: border-box;\n  content: '';\n  width: 100%;\n  height: 100%;\n  border: 1px solid hsl(0, 0%, 20%);\n  border-radius: 2px;\n  transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;\n}\n\n.todo-list .todo-list__label > input::after {\n  display: block;\n  position: absolute;\n  box-sizing: content-box;\n  pointer-events: none;\n  content: '';\n  left: calc( var(--ck-todo-list-checkmark-size) / 3 );\n  top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );\n  width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );\n  height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );\n  border-style: solid;\n  border-color: transparent;\n  border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;\n  transform: rotate(45deg);\n}\n\n.todo-list .todo-list__label > input[checked]::before {\n  background: hsl(126, 64%, 41%);\n  border-color: hsl(126, 64%, 41%);\n}\n\n.todo-list .todo-list__label > input[checked]::after {\n  border-color: hsl(0, 0%, 100%);\n}\n\n.todo-list .todo-list__label .todo-list__label__description {\n  vertical-align: middle;\n}\n\n.media {\n  clear: both;\n  margin: 1em 0;\n  display: block;\n  min-width: 15em;\n}\n\n.raw-html-embed {\n  margin: 1em auto;\n  min-width: 15em;\n}\n\nhr {\n  margin: 15px 0;\n  height: 4px;\n  background: hsl(0, 0%, 87%);\n  border: 0;\n}\n\npre {\n  padding: 1em;\n  color: hsl(0, 0%, 20.8%);\n  background: hsla(0, 0%, 78%, 0.3);\n  border: 1px solid hsl(0, 0%, 77%);\n  border-radius: 2px;\n  text-align: left;\n  direction: ltr;\n  tab-size: 4;\n  white-space: pre-wrap;\n  font-style: normal;\n  min-width: 200px;\n}\n\npre code {\n  background: unset;\n  padding: 0;\n  border-radius: 0;\n}\n\n.mention {\n  background: var(--ck-color-mention-background);\n  color: var(--ck-color-mention-text);\n}\n@media print {\n\n  .page-break {\n      padding: 0;\n  }\n\n  .page-break::after {\n      display: none;\n  }\n}",DELIVERY:"Delivery",CARRIER:"Carrier"}},555:function(e,n,o){"use strict";o.d(n,"a",(function(){return t}));var t={data:function(){return{country:[{name:"",code:""},{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]}}}},656:function(e,n,o){var content=o(827);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("7ba961cf",content,!0,{sourceMap:!1})},826:function(e,n,o){"use strict";o(656)},827:function(e,n,o){var t=o(11)(!1);t.push([e.i,"ul.clean[data-v-2d6f22e8]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-2d6f22e8],.ck.ck-content.ck-editor__editable[data-v-2d6f22e8],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-2d6f22e8],.ck.ck-content.ck-editor__editable_inline[data-v-2d6f22e8]{height:350px}",""]),e.exports=t},888:function(e,n,o){"use strict";o.r(n);var t=o(16),r=(o(51),o(49),o(23),o(40),o(42),o(318),o(29),o(539)),c=o.n(r),d=o(535),l=o(2),m=o(185),h=o(128),f=o(555);l.default.use(m.Vuelidate);var v={head:function(){return{title:"Create Post"}},watch:{menu:function(e){var n=this;e&&setTimeout((function(){return n.activePicker="YEAR"}))}},middleware:"auth",mixins:[m.validationMixin,f.a],data:function(){return{activePicker:null,date:null,menu:!1,image_id:"",url_backend:"",form_author:"",form_content:"",form_title:"",form_subtitle:"",form_publish:"",form_country:"",form_event_date:"",token:null,publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}],image:"",image_preview:"",image_name:""}},validations:{form_content:{required:h.required},form_title:{required:h.required},form_publish:{required:h.required}},components:{"ckeditor-nuxt":function(){return o.e(0).then(o.t.bind(null,845,7))}},created:function(){var e=this;return Object(t.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.timezone="Asia/Singapore",e.image_id="er-"+(new Date).getTime(),e.editorConfig={simpleUpload:{uploadUrl:"https://backend.inhinyeru.com/api/ckeditor",withCredentials:!0,headers:{Accept:"application/json",Timezone:e.timezone,identifier:e.image_id,"X-XSRF-TOKEN":e.$auth.$storage.getCookies()["XSRF-TOKEN"]}}},n.next=5,e.$axios.$get("/sanctum/csrf-cookie");case 5:case"end":return n.stop()}}),n)})))()},computed:{titleErrors:function(){var e=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&e.push("Title is required."),e):e},contentErrors:function(){var e=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&e.push("Content is required."),e):e}},methods:{save:function(e){this.$refs.menu.save(e)},handleFileUpload:function(e){var n=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(n);try{this.image_name=this.$refs.file.files[0].name,this.image=this.$refs.file.files[0]}catch(e){console.log(e)}},remove_image:function(){return this.$refs.file.value=null,this.image_name="",this.image="",this.image_preview="",!1},onSubmit:function(){var e=this;if(this.form_title&&this.form_content&&this.form_publish){this.$axios.$get("/sanctum/csrf-cookie"),this.$toast.success("Sending"),this.form_content=c.a.inlineContent(this.form_content,d.a.styles),this.form_event_date=this.date;var n=new FormData;n.append("ckeditor_log",this.image_id),n.append("publish",this.form_publish),n.append("title",this.form_title),n.append("subtitle",this.form_subtitle),n.append("content",this.form_content),n.append("author",this.form_author),n.append("country",this.form_country),n.append("event_date",this.form_event_date),n.append("image",this.image),n.append("image_name",this.image_name),this.$axios.post("/api/er/create",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(n){e.$toast.success("Done.")})).catch((function(e){})).finally((function(){}))}else this.$toast.error("Validation failed.")}}},k=(o(826),o(35)),_=o(31),x=o.n(_),S=o(516),y=o(237),C=o(524),w=o(533),M=o(846),T=o(182),A=o(241),I=o(525),G=o(59),R=o(66),B=o(530),P=o(91),component=Object(k.a)(v,(function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":"800vh"}},[o("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":"200vh"}},[o("form",{staticClass:"white pa-5",attrs:{action:""}},[o("v-row",[o("v-col",[o("v-btn",{attrs:{color:"primary",depressed:"",to:"/admin/quotes/world-reminders"}},[e._v("\n            BACK\n          ")])],1)],1),e._v(" "),o("v-row",[o("v-col",[o("v-text-field",{attrs:{label:"Title"},on:{blur:function(n){return e.$v.form_title.$touch()},input:function(n){return e.$v.form_title.$touch()}},model:{value:e.form_title,callback:function(n){e.form_title=n},expression:"form_title"}}),e._v(" "),e.$v.form_title.$error?[e.$v.form_title.required?e._e():o("div",{staticClass:"errorMessage red--text"},[e._v("\n              Title is required.\n            ")])]:e._e()],2)],1),e._v(" "),o("v-row",[o("v-col",[o("v-text-field",{attrs:{label:"Sub Heading"},model:{value:e.form_subtitle,callback:function(n){e.form_subtitle=n},expression:"form_subtitle"}}),e._v(" "),e.$v.form_title.$error?[e.$v.form_title.required?e._e():o("div",{staticClass:"errorMessage red--text"},[e._v("\n              SubTitle is required.\n            ")])]:e._e()],2)],1),e._v(" "),o("v-row",[o("v-col",[o("v-text-field",{attrs:{label:"Author"},model:{value:e.form_author,callback:function(n){e.form_author=n},expression:"form_author"}})],1)],1),e._v(" "),o("v-row",[o("v-col",[o("v-select",{attrs:{items:e.country,label:"Country","item-value":"code","item-text":"name",dense:""},model:{value:e.form_country,callback:function(n){e.form_country=n},expression:"form_country"}})],1)],1),e._v(" "),o("v-row",[o("v-col",[o("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var t=n.on,r=n.attrs;return[o("v-text-field",e._g(e._b({attrs:{label:"Event Date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(n){e.date=n},expression:"date"}},"v-text-field",r,!1),t))]}}]),model:{value:e.menu,callback:function(n){e.menu=n},expression:"menu"}},[e._v(" "),o("v-date-picker",{attrs:{"active-picker":e.activePicker,max:(new Date).toISOString().substr(0,10),min:"1400-01-01"},on:{"update:activePicker":function(n){e.activePicker=n},"update:active-picker":function(n){e.activePicker=n},change:e.save},model:{value:e.date,callback:function(n){e.date=n},expression:"date"}})],1)],1)],1),e._v(" "),o("v-row",[o("v-col",{attrs:{lg:"4"}},[o("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(n){return e.handleFileUpload()}}}),e._v(" "),o("v-card",[e.image_preview?o("v-img",{attrs:{src:e.image_preview}}):e._e()],1),e._v(" "),""!=this.image_preview?o("label",{staticClass:"red--text",attrs:{onclick:"return false"},on:{click:function(n){return e.remove_image()}}},[e._v("Remove")]):e._e()],1),e._v(" "),o("v-spacer")],1),e._v(" "),o("v-row",[o("v-col",[o("label",{staticClass:"black--text",attrs:{for:""}},[e._v("Content")]),e._v(" "),o("br"),e._v(" "),o("client-only",{attrs:{placeholder:"loading..."}},[o("ckeditor-nuxt",{attrs:{config:e.editorConfig,"error-messages":e.contentErrors},on:{blur:function(n){return e.$v.form_content.$touch()},input:function(n){return e.$v.form_content.$touch()}},model:{value:e.form_content,callback:function(n){e.form_content=n},expression:"form_content"}}),e._v(" "),e.$v.form_content.$error?[e.$v.form_content.required?e._e():o("div",{staticClass:"errorMessage red--text"},[e._v("\n                Content is required.\n              ")])]:e._e()],2)],1)],1),e._v(" "),o("v-row",[o("v-col",[o("v-select",{attrs:{items:e.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(n){return e.$v.form_publish.$touch()}},model:{value:e.form_publish,callback:function(n){e.form_publish=n},expression:"form_publish"}}),e._v(" "),e.$v.form_publish.$error?[e.$v.form_publish.required?e._e():o("p",{staticClass:"errorMessage red--text"},[e._v("\n              Select Publish is required.\n            ")])]:e._e()],2)],1),e._v(" "),o("v-row",[o("v-col",[o("v-btn",{staticClass:"ml-0",attrs:{color:"success"},on:{click:function(n){return e.onSubmit()}}},[o("label",{staticClass:"white-font"},[e._v("Submit")])])],1)],1)],1)])],1)}),[],!1,null,"2d6f22e8",null);n.default=component.exports;x()(component,{Template:o(127).default}),x()(component,{VBtn:S.a,VCard:y.a,VCol:C.a,VContainer:w.a,VDatePicker:M.a,VImg:T.a,VMenu:A.a,VRow:I.a,VSelect:G.a,VSheet:R.a,VSpacer:B.a,VTextField:P.a})}}]);