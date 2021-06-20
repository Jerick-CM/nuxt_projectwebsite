(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{504:function(e,n,t){"use strict";n.a={styles:":root {\n  --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);\n  --ck-color-mention-text: hsl(341, 100%, 30%);\n  --ck-highlight-marker-blue: hsl(201, 97%, 72%);\n  --ck-highlight-marker-green: hsl(120, 93%, 68%);\n  --ck-highlight-marker-pink: hsl(345, 96%, 73%);\n  --ck-highlight-marker-yellow: hsl(60, 97%, 73%);\n  --ck-highlight-pen-green: hsl(112, 100%, 27%);\n  --ck-highlight-pen-red: hsl(0, 85%, 49%);\n  --ck-image-style-spacing: 1.5em;\n  --ck-todo-list-checkmark-size: 16px;\n}\n\n.image-style-side {\n  float: right;\n  margin-left: var(--ck-image-style-spacing);\n  max-width: 50%;\n}\n\n.image-style-align-left {\n  float: left;\n  margin-right: var(--ck-image-style-spacing);\n}\n\n.image-style-align-center {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.image-style-align-right {\n  float: right;\n  margin-left: var(--ck-image-style-spacing);\n}\n\n.image {\n  display: table;\n  clear: both;\n  text-align: center;\n  margin: 1em auto;\n}\n\n.image img {\n  display: block;\n  margin: 0 auto;\n  max-width: 100%;\n  min-width: 50px;\n}\n\n.image > figcaption {\n  display: table-caption;\n  caption-side: bottom;\n  word-break: break-word;\n  color: hsl(0, 0%, 20%);\n  background-color: hsl(0, 0%, 97%);\n  padding: .6em;\n  font-size: .75em;\n  outline-offset: -1px;\n}\n\n.image.image_resized {\n  max-width: 100%;\n  display: block;\n  box-sizing: border-box;\n}\n\n.image.image_resized img {\n  width: 100%;\n}\n\n.image.image_resized > figcaption {\n  display: block;\n}\n\n.marker-yellow {\n  background-color: var(--ck-highlight-marker-yellow);\n}\n\n.marker-green {\n  background-color: var(--ck-highlight-marker-green);\n}\n\n.marker-pink {\n  background-color: var(--ck-highlight-marker-pink);\n}\n\n.marker-blue {\n  background-color: var(--ck-highlight-marker-blue);\n}\n\n.pen-red {\n  color: var(--ck-highlight-pen-red);\n  background-color: transparent;\n}\n\n.pen-green {\n  color: var(--ck-highlight-pen-green);\n  background-color: transparent;\n}\n\n.text-tiny {\n  font-size: .7em;\n}\n\n.text-small {\n  font-size: .85em;\n}\n\n.text-big {\n  font-size: 1.4em;\n}\n\n.text-huge {\n  font-size: 1.8em;\n}\n\nblockquote {\n  overflow: hidden;\n  padding-right: 1.5em;\n  padding-left: 1.5em;\n  margin-left: 0;\n  margin-right: 0;\n  font-style: italic;\n  border-left: solid 5px hsl(0, 0%, 80%);\n}\n\n[dir=\"rtl\"] blockquote {\n  border-left: 0;\n  border-right: solid 5px hsl(0, 0%, 80%);\n}\n\ncode {\n  background-color: hsla(0, 0%, 78%, 0.3);\n  padding: .15em;\n  border-radius: 2px;\n}\n\n.table {\n  margin: 1em auto;\n  display: table;\n}\n\n.table table {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  height: 100%;\n  border: 1px double hsl(0, 0%, 70%);\n}\n\n.table table td,\n.table table th {\n  min-width: 2em;\n  padding: .4em;\n  border: 1px solid hsl(0, 0%, 75%);\n}\n\n.table table th {\n  font-weight: bold;\n  background: hsla(0, 0%, 0%, 5%);\n}\n\n[dir=\"rtl\"] .table th {\n  text-align: right;\n}\n\n[dir=\"ltr\"] .table th {\n  text-align: left;\n}\n\n.page-break {\n  position: relative;\n  clear: both;\n  padding: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.page-break::after {\n  content: '';\n  position: absolute;\n  border-bottom: 2px dashed hsl(0, 0%, 77%);\n  width: 100%;\n}\n\n.page-break__label {\n  position: relative;\n  z-index: 1;\n  padding: .3em .6em;\n  display: block;\n  text-transform: uppercase;\n  border: 1px solid hsl(0, 0%, 77%);\n  border-radius: 2px;\n  font-family: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;\n  font-size: 0.75em;\n  font-weight: bold;\n  color: hsl(0, 0%, 20%);\n  background: hsl(0, 0%, 100%);\n  box-shadow: 2px 2px 1px hsla(0, 0%, 0%, 0.15);\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.todo-list {\n  list-style: none;\n}\n\n.todo-list li {\n  margin-bottom: 5px;\n}\n\n.todo-list li .todo-list {\n  margin-top: 5px;\n}\n\n.todo-list .todo-list__label > input {\n  -webkit-appearance: none;\n  display: inline-block;\n  position: relative;\n  width: var(--ck-todo-list-checkmark-size);\n  height: var(--ck-todo-list-checkmark-size);\n  vertical-align: middle;\n  border: 0;\n  left: -25px;\n  margin-right: -15px;\n  right: 0;\n  margin-left: 0;\n}\n\n.todo-list .todo-list__label > input::before {\n  display: block;\n  position: absolute;\n  box-sizing: border-box;\n  content: '';\n  width: 100%;\n  height: 100%;\n  border: 1px solid hsl(0, 0%, 20%);\n  border-radius: 2px;\n  transition: 250ms ease-in-out box-shadow, 250ms ease-in-out background, 250ms ease-in-out border;\n}\n\n.todo-list .todo-list__label > input::after {\n  display: block;\n  position: absolute;\n  box-sizing: content-box;\n  pointer-events: none;\n  content: '';\n  left: calc( var(--ck-todo-list-checkmark-size) / 3 );\n  top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );\n  width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );\n  height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );\n  border-style: solid;\n  border-color: transparent;\n  border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;\n  transform: rotate(45deg);\n}\n\n.todo-list .todo-list__label > input[checked]::before {\n  background: hsl(126, 64%, 41%);\n  border-color: hsl(126, 64%, 41%);\n}\n\n.todo-list .todo-list__label > input[checked]::after {\n  border-color: hsl(0, 0%, 100%);\n}\n\n.todo-list .todo-list__label .todo-list__label__description {\n  vertical-align: middle;\n}\n\n.media {\n  clear: both;\n  margin: 1em 0;\n  display: block;\n  min-width: 15em;\n}\n\n.raw-html-embed {\n  margin: 1em auto;\n  min-width: 15em;\n}\n\nhr {\n  margin: 15px 0;\n  height: 4px;\n  background: hsl(0, 0%, 87%);\n  border: 0;\n}\n\npre {\n  padding: 1em;\n  color: hsl(0, 0%, 20.8%);\n  background: hsla(0, 0%, 78%, 0.3);\n  border: 1px solid hsl(0, 0%, 77%);\n  border-radius: 2px;\n  text-align: left;\n  direction: ltr;\n  tab-size: 4;\n  white-space: pre-wrap;\n  font-style: normal;\n  min-width: 200px;\n}\n\npre code {\n  background: unset;\n  padding: 0;\n  border-radius: 0;\n}\n\n.mention {\n  background: var(--ck-color-mention-background);\n  color: var(--ck-color-mention-text);\n}\n@media print {\n\n  .page-break {\n      padding: 0;\n  }\n\n  .page-break::after {\n      display: none;\n  }\n}",DELIVERY:"Delivery",CARRIER:"Carrier"}},520:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var o={data:function(){return{country:[{name:"",code:""},{name:"Afghanistan",code:"AF"},{name:"Åland Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}]}}}},600:function(e,n,t){var content=t(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(15).default)("e529435c",content,!0,{sourceMap:!1})},765:function(e,n,t){"use strict";t(600)},766:function(e,n,t){var o=t(14)(!1);o.push([e.i,"ul.clean[data-v-8dfde03a]{list-style:none!important;list-style-type:none!important}.ck-editor__editable[data-v-8dfde03a],.ck.ck-content.ck-editor__editable[data-v-8dfde03a],.ck.ck-content.ck-editor__editable.ck-rounded-corners.ck-editor__editable_inline[data-v-8dfde03a],.ck.ck-content.ck-editor__editable_inline[data-v-8dfde03a]{height:350px}",""]),e.exports=o},841:function(e,n,t){"use strict";t.r(n);var o=t(20),r=t(13),d=(t(22),t(36),t(43),t(303),t(29),t(140),t(30),t(222),t(223),t(52),t(520)),c=t(509),l=t.n(c),m=t(504),h=t(177),f=t(117),v=t(31),_=t.n(v),k=(t(139),{middleware:"auth",mixins:[h.validationMixin,d.a],head:function(){return{title:"Post Datatable"}},data:function(){return{activePicker:null,date:null,menu:!1,headers:[{text:"No",align:"start",sortable:!1,value:"no"},{text:"Name",value:"name"},{text:"Title",value:"title"},{text:"Slug",value:"slug"},{text:"Publish",value:"publish"},{text:"Date / Time",value:"created_at"},{text:"Action",value:"id",sortable:!1}],form_author:"",form_content:"",form_title:"",form_subtitle:"",form_publish:"",form_country:"",form_event_date:"",dialog:!1,dialogDelete:!1,deletedialog:!1,editedIndex:-1,search:"",tabledata:[],tabledata_total:0,loading:!0,options:{},publishselection:[{value:1,text:"Draft"},{value:2,text:"Publish"}],form_image:"",image:"",image_preview:"",image_name:""}},validations:{form_content:{required:f.required},form_title:{required:f.required},form_publish:{required:f.required}},created:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.timezone="Asia/Singapore",e.editorConfig={simpleUpload:{uploadUrl:"https://backend.inhinyeru.com/api/ckeditor",withCredentials:!0,headers:{Accept:"application/json",Timezone:e.timezone,identifier:e.image_id,"X-XSRF-TOKEN":e.$auth.$storage.getCookies()["XSRF-TOKEN"]}}};case 2:case"end":return n.stop()}}),n)})))()},components:{"ckeditor-nuxt":function(){return t.e(1).then(t.t.bind(null,805,7))}},computed:{titleErrors:function(){var e=[];return this.$v.form_title.$dirty?(!this.$v.form_title.required&&e.push("Title is required."),e):e},contentErrors:function(){var e=[];return this.$v.form_content.$dirty?(!this.$v.form_content.required&&e.push("Content is required."),e):e}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0},dialog:function(e){e||this.close()},dialogDelete:function(e){e||this.closeDelete()}},mounted:function(){this.getDataFromApi()},methods:{save:function(e){this.$refs.menu.save(e)},handleFileUpload:function(e){var n=this.$refs.file.files[0];this.image_preview=URL.createObjectURL(n);try{this.image_name=this.$refs.file.files[0].name,this.form_image=this.$refs.file.files[0]}catch(e){console.log(e)}},remove_image:function(){return this.$refs.file.value=null,this.image_name="",this.image="",this.image_preview="",this.form_image="",!1},close:function(){var e=this;this.dialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDelete:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},editItem:function(e){this.image_id=this.tabledata[this.tabledata.indexOf(e)].ckeditor_log,this.form_title=this.tabledata[this.tabledata.indexOf(e)].title,this.form_image=this.tabledata[this.tabledata.indexOf(e)].image,this.form_content=this.tabledata[this.tabledata.indexOf(e)].content,this.form_country=this.tabledata[this.tabledata.indexOf(e)].country,this.form_subtitle=this.tabledata[this.tabledata.indexOf(e)].subtitle,this.form_author=this.tabledata[this.tabledata.indexOf(e)].author,this.form_event_date=this.tabledata[this.tabledata.indexOf(e)].event_date,this.date=this.tabledata[this.tabledata.indexOf(e)].event_date,this.date=this.tabledata[this.tabledata.indexOf(e)].event_date,this.form_publish=this.tabledata[this.tabledata.indexOf(e)].publishvalue,this.editedIndex=this.tabledata.indexOf(e),this.dialog=!0},deleteItem:function(e){this.editedIndex=this.tabledata.indexOf(e),this.editedItem=Object.assign({},e),this.dialogDelete=!0},SaveEdited:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 2:_.a.start(),t=new FormData,o=e.tabledata[e.editedIndex].id,e.form_content=l.a.inlineContent(e.form_content,m.a.styles),t.append("post_id",e.tabledata[e.editedIndex].id),t.append("title",e.form_title),t.append("subtitle",e.form_subtitle),t.append("content",e.form_content),t.append("publish",e.form_publish),t.append("image",e.form_image),t.append("country",e.form_country),t.append("author",e.form_author),e.form_event_date=e.date,t.append("event_date",e.form_event_date);try{e.$axios.$post("api/er/update/".concat(o),t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(n){e.tabledata[e.editedIndex].title=e.form_title,e.tabledata[e.editedIndex].subtitle=e.form_subtitle,e.tabledata[e.editedIndex].author=e.form_author,e.tabledata[e.editedIndex].country=e.form_country,e.tabledata[e.editedIndex].content=e.form_content,e.tabledata[e.editedIndex].publish=1==e.form_publish?"Draft":"Publish",e.tabledata[e.editedIndex].event_date=e.date,e.tabledata[e.editedIndex].date=n.image,e.tabledata[e.editedIndex].publishvalue=e.form_publish,e.tabledata[e.editedIndex].image=n.image,e.dialog=!1,e.form_publish="",e.image_preview="",_.a.done()})).catch((function(n){e.form_publish="",_.a.done()})).finally((function(){}))}catch(e){}case 17:case"end":return n.stop()}}),n)})))()},deleteItemConfirm:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 2:t=e.tabledata[e.editedIndex].id;try{e.$axios.$delete("api/er/delete/".concat(t)).then((function(e){})).catch((function(e){})).finally((function(){}))}catch(e){}e.tabledata.splice(e.editedIndex,1),e.closeDelete();case 6:case"end":return n.stop()}}),n)})))()},getDataFromApi:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,d,c,l,m;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,t=e.options,r=t.sortBy,d=t.sortDesc,c=t.page,l=t.itemsPerPage,(m=new FormData).append("sortDesc",d),m.append("sortBy",r),m.append("page",c),m.append("itemsPerPage",l),m.append("search",e.search),n.next=10,e.$axios.$get("/sanctum/csrf-cookie").then((function(e){}));case 10:e.$axios.$post("api/er/datatable",m).then((function(n){var data=[],t=1;t=1==c?1:(c-1)*l+1;for(var r=0,d=Object.entries(n.data);r<d.length;r++){var m=Object(o.a)(d[r],2),h=(m[0],m[1]);console.log(h.country),data.push({no:t,id:h.id,name:h.name,slug:h.slug,title:h.title,content:h.content,publish:1==h.publish?"Draft":"Publish",publishvalue:h.publish,image:h.image,created_at:h.human_date,ckeditor_log:h.ckeditor_log,event_date:h.event_date,country:h.country,subtitle:h.subtitle,author:h.author}),t++}e.tabledata=data,e.tabledata_total=n.total,e.loading=!1})).catch((function(n){e.loading=!1})).finally((function(){e.loading=!1}));case 11:case"end":return n.stop()}}),n)})))()}}}),x=(t(765),t(38)),y=t(39),S=t.n(y),C=t(486),I=t(484),w=t(483),M=t(495),T=t(496),A=t(807),R=t(806),D=t(502),P=t(209),G=t(172),$=t(490),B=t(497),N=t(617),O=t(59),V=t(501),E=t(489),z=t(60),F=t(220),component=Object(x.a)(k,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",{staticClass:"grey ligthen-3 pa-0 ma-0",attrs:{fluid:"","min-height":""}},[t("v-sheet",{staticClass:"blue ligthen-3 pa-5 pt-10 pb-10",attrs:{"min-height":""}},[t("v-card",[t("v-dialog",{attrs:{persistent:"",fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:e.dialog,callback:function(n){e.dialog=n},expression:"dialog"}},[t("v-card",{attrs:{tile:""}},[t("v-toolbar",{attrs:{flat:"",dark:"",color:"primary","max-height":"50vh"}},[t("v-btn",{attrs:{icon:"",dark:""},on:{click:function(n){e.dialog=!1}}},[t("v-icon",[e._v("mdi-close")])],1),e._v(" "),t("v-toolbar-title",[e._v("Settings")]),e._v(" "),t("v-spacer"),e._v(" "),t("v-toolbar-items",[t("v-btn",{attrs:{dark:"",text:""},on:{click:e.SaveEdited}},[e._v(" Save ")])],1)],1),e._v(" "),t("v-card-text",[t("v-row",[t("v-col",[t("v-text-field",{attrs:{label:"Title"},on:{blur:function(n){return e.$v.form_title.$touch()},input:function(n){return e.$v.form_title.$touch()}},model:{value:e.form_title,callback:function(n){e.form_title=n},expression:"form_title"}}),e._v(" "),e.$v.form_title.$error?[e.$v.form_title.required?e._e():t("div",{staticClass:"errorMessage red--text"},[e._v("\n                    Title is required.\n                  ")])]:e._e()],2)],1),e._v(" "),t("v-row",[t("v-col",[t("v-text-field",{attrs:{label:"Sub Heading"},model:{value:e.form_subtitle,callback:function(n){e.form_subtitle=n},expression:"form_subtitle"}}),e._v(" "),e.$v.form_title.$error?[e.$v.form_title.required?e._e():t("div",{staticClass:"errorMessage red--text"},[e._v("\n                    SubTitle is required.\n                  ")])]:e._e()],2)],1),e._v(" "),t("v-row",[t("v-col",[t("v-text-field",{attrs:{label:"Author"},model:{value:e.form_author,callback:function(n){e.form_author=n},expression:"form_author"}})],1)],1),e._v(" "),t("v-row",[t("v-col",[t("v-select",{attrs:{items:e.country,label:"Country","item-value":"code","item-text":"name",dense:""},model:{value:e.form_country,callback:function(n){e.form_country=n},expression:"form_country"}})],1)],1),e._v(" "),t("v-row",[t("v-col",{attrs:{lg:"4"}},[t("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(n){return e.handleFileUpload()}}}),e._v(" "),t("v-card",[e.image_preview?t("v-img",{attrs:{src:e.image_preview}}):t("div",[e.form_image?t("v-img",{attrs:{src:e.form_image}}):e._e()],1)],1),e._v(" "),""!=this.image_preview||""!=this.form_image?t("label",{staticClass:"red--text",attrs:{onclick:"return false"},on:{click:function(n){return e.remove_image()}}},[e._v("Remove")]):e._e()],1),e._v(" "),t("v-spacer")],1),e._v(" "),t("v-row",[t("v-col",[t("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[t("v-text-field",e._g(e._b({attrs:{label:"Event Date","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(n){e.date=n},expression:"date"}},"v-text-field",r,!1),o))]}}]),model:{value:e.menu,callback:function(n){e.menu=n},expression:"menu"}},[e._v(" "),t("v-date-picker",{attrs:{"active-picker":e.activePicker,max:(new Date).toISOString().substr(0,10),min:"1400-01-01"},on:{"update:activePicker":function(n){e.activePicker=n},"update:active-picker":function(n){e.activePicker=n},change:e.save},model:{value:e.date,callback:function(n){e.date=n},expression:"date"}})],1)],1)],1),e._v(" "),t("v-row",[t("v-col",{},[t("label",{staticClass:"black--text",attrs:{for:""}},[e._v("Content")]),e._v(" "),t("br"),e._v(" "),t("client-only",{attrs:{placeholder:"loading..."}},[t("ckeditor-nuxt",{staticStyle:{height:"300px"},attrs:{config:e.editorConfig,"error-messages":e.contentErrors},on:{blur:function(n){return e.$v.form_content.$touch()},input:function(n){return e.$v.form_content.$touch()}},model:{value:e.form_content,callback:function(n){e.form_content=n},expression:"form_content"}}),e._v(" "),e.$v.form_content.$error?[e.$v.form_content.required?e._e():t("div",{staticClass:"errorMessage red--text"},[e._v("\n                      Content is required.\n                    ")])]:e._e()],2)],1)],1),e._v(" "),t("v-row",[t("v-col",[t("v-select",{attrs:{items:e.publishselection,"item-value":"value","item-text":"text",label:"Publish"},on:{blur:function(n){return e.$v.form_publish.$touch()}},model:{value:e.form_publish,callback:function(n){e.form_publish=n},expression:"form_publish"}}),e._v(" "),e.$v.form_publish.$error?[e.$v.form_publish.required?e._e():t("p",{staticClass:"errorMessage red--text"},[e._v("\n                    Select Publish is required.\n                  ")])]:e._e()],2)],1)],1),e._v(" "),t("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),e._v(" "),t("v-card-title",[e._v("\n        Reminders Table\n        "),t("v-spacer"),e._v(" "),t("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},on:{change:e.getDataFromApi},model:{value:e.search,callback:function(n){e.search=n},expression:"search"}})],1),e._v(" "),t("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tabledata,options:e.options,"server-items-length":e.tabledata_total,loading:e.loading,"footer-props":{"items-per-page-options":[5,10,20,30,40,50]}},on:{"update:options":function(n){e.options=n}},scopedSlots:e._u([{key:"top",fn:function(){return[t("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(n){e.dialogDelete=n},expression:"dialogDelete"}},[t("v-card",[t("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),e._v(" "),t("v-card-actions",[t("v-spacer"),e._v(" "),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDelete}},[e._v("Cancel")]),e._v(" "),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),e._v(" "),t("v-spacer")],1)],1)],1)]},proxy:!0},{key:"header.id",fn:function(n){var header=n.header;return[e._v("\n          "+e._s(header.text.toUpperCase())+"\n        ")]}},{key:"header.name",fn:function(n){var header=n.header;return[e._v("\n          "+e._s(header.text.toUpperCase())+"\n        ")]}},{key:"item.publish",fn:function(n){var t=n.item;return[e._v("\n          "+e._s(t.publish)+"\n        ")]}},{key:"item.created_at",fn:function(n){var t=n.item;return[e._v("\n          "+e._s(t.created_at)+"\n        ")]}},{key:"item.id",fn:function(n){var o=n.item;return[t("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(n){return e.editItem(o)}}},[e._v("\n            mdi-pencil\n          ")]),e._v(" "),t("v-icon",{attrs:{small:""},on:{click:function(n){return e.deleteItem(o)}}},[e._v("\n            mdi-delete\n          ")])]}}])})],1)],1)],1)}),[],!1,null,"8dfde03a",null);n.default=component.exports;S()(component,{Template:t(221).default}),S()(component,{VBtn:C.a,VCard:I.a,VCardActions:w.a,VCardText:w.b,VCardTitle:w.c,VCol:M.a,VContainer:T.a,VDataTable:A.a,VDatePicker:R.a,VDialog:D.a,VIcon:P.a,VImg:G.a,VMenu:$.a,VRow:B.a,VSelect:N.a,VSheet:O.a,VSpacer:V.a,VTextField:E.a,VToolbar:z.a,VToolbarItems:F.a,VToolbarTitle:F.b})}}]);