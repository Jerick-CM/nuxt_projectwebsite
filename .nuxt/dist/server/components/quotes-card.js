exports.ids = [16];
exports.modules = {

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(548);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("f23833b0", content, true, context)
};

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesCard_vue_vue_type_style_index_0_id_381cb59f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(434);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesCard_vue_vue_type_style_index_0_id_381cb59f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesCard_vue_vue_type_style_index_0_id_381cb59f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesCard_vue_vue_type_style_index_0_id_381cb59f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuotesCard_vue_vue_type_style_index_0_id_381cb59f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".transparent[data-v-381cb59f]{background-color:#00f!important;opacity:.25;border-color:transparent!important}.nuxtlink[data-v-381cb59f]{text-decoration:none}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuotesCard.vue?vue&type=template&id=381cb59f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-sheet',{staticClass:"ma-0 pa-0"},[_c('v-row',{staticClass:"ma-0 pa-0"},[_c('v-col',{attrs:{"xs":"12","sm":"12","md":"8","lg":"8","xl":"8"}},[_c('h1',{staticClass:"fs-1-3"},[_vm._v("Quotes")]),_vm._v(" "),_c('p',[_vm._v("Memorable quotes from technology and science dicipline")])])],1),_vm._v(" "),_c('v-row',{staticClass:"ma-0 pa-0"},[_c('v-col',{},[_c('v-container',[_vm._l((Math.ceil(_vm.content.length / 3)),function(i,ind){return _c('v-row',{key:ind,attrs:{"color":"blue"}},_vm._l((_vm.content.slice((i - 1) * 3, i * 3)),function(item,indx){return _c('v-col',{key:indx,attrs:{"xs":"12","sm":"12","md":"6","lg":"4","xl":"4"}},[_c('v-card',{staticClass:" pa-4",attrs:{"min-height":"30vh"}},[_c('p',[_vm._v(_vm._s(item.message)+" - "+_vm._s(item.author))])])],1)}),1)}),_vm._v(" "),_c('v-row',[_c('v-col',{attrs:{"lg":"12"}},[_c('v-card',{staticClass:" pa-4 text-center"},[(!(_vm.length == 10))?_c('label',{staticClass:"grey--text pa-4 ma-2",attrs:{"for":""}},[_vm._v("Nothing Follows")]):_vm._e(),_c('br'),_vm._v(" "),_c('v-btn',{staticClass:"white--text pa-4 ma-2",class:_vm.length == 10 ? 'green' : 'grey',attrs:{"disabled":_vm.length == 10 ? false : true},on:{"click":_vm.getnextarticle}},[_vm._v("\n                Next Article\n              ")])],1)],1)],1)],2)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/QuotesCard.vue?vue&type=template&id=381cb59f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/QuotesCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var QuotesCardvue_type_script_lang_js_ = ({
  props: ['content', 'length', 'loading'],
  data: () => ({}),

  async created() {},

  mounted() {},

  computed: {},
  methods: {
    getnextarticle() {
      this.$emit('next-article');
    }

  }
});
// CONCATENATED MODULE: ./components/QuotesCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_QuotesCardvue_type_script_lang_js_ = (QuotesCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(10);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(247);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(93);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(258);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(259);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/VSheet.js
var VSheet = __webpack_require__(20);

// CONCATENATED MODULE: ./components/QuotesCard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(547)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_QuotesCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "381cb59f",
  "c9cc47fc"
  
)

/* harmony default export */ var QuotesCard = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */







installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCard: VCard["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VSheet: VSheet["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=quotes-card.js.map