(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{564:function(t,n,e){var content=e(659);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(12).default)("6d9cfa92",content,!0,{sourceMap:!1})},658:function(t,n,e){"use strict";e(564)},659:function(t,n,e){var o=e(11)(!1);o.push([t.i,".link[data-v-0b0bb6d3]{cursor:pointer;text-decoration:underline}.container[data-v-0b0bb6d3]{font-size:20px;text-align:center;padding-top:100px}",""]),t.exports=o},853:function(t,n,e){"use strict";e.r(n);e(22),e(46);var o={loading:!1,asyncData:function(){return new Promise((function(t){setTimeout((function(){t({})}),1e3)}))},mounted:function(){var t=this;setTimeout((function(){t.$nuxt.$loading.finish()}),5e3)},methods:{goToFinal:function(){var t=this;this.$nuxt.$loading.start(),setTimeout((function(){t.$router.push("/test")}),5e3)}}},c=(e(658),e(37)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("p",[t._v("About Page")]),t._v(" "),e("p",[t._v("It should take 5 seconds for the loader to disappear")]),t._v(" "),e("p",[t._v("\n    It should take 5 seconds for the route to change after you\n    "),e("span",{staticClass:"link",on:{click:t.goToFinal}},[t._v("\n      click here\n    ")])])])}),[],!1,null,"0b0bb6d3",null);n.default=component.exports}}]);