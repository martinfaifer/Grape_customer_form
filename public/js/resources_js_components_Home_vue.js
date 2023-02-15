"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      formData: [],
      errors: [],
      serverResponse: [],
      alertData: []
    };
  },
  components: {},
  created: function created() {},
  methods: {
    submitForm: function submitForm() {
      var _this = this;
      axios__WEBPACK_IMPORTED_MODULE_0__["default"].post("customer", {
        name: this.formData.name,
        surname: this.formData.surname,
        street: this.formData.street,
        city: this.formData.city,
        post_code: this.formData.post_code,
        birthday: this.formData.birthday,
        telephone: this.formData.telephone,
        email: this.formData.email,
        service: this.formData.service,
        note: this.formData.note
      }).then(function (response) {
        _this.serverResponse = response.data;
        _this.formData = [];
        setTimeout(function () {
          _this.serverResponse = [];
        }, 10000);
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
      });
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_v_alert = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-alert");
  var _component_v_col = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-col");
  var _component_v_text_field = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-text-field");
  var _component_v_textarea = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-textarea");
  var _component_v_row = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-row");
  var _component_v_container = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-container");
  var _component_v_card_text = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card-text");
  var _component_v_btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-btn");
  var _component_v_card_actions = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card-actions");
  var _component_v_card = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-card");
  var _component_v_main = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("v-main");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_main, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, null, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
            cols: "12"
          }, {
            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
              return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card, {
                rounded: "lg",
                "class": "overflow-hidden rounded-xl blur shadow-blur",
                "elevation-12": "",
                color: "white"
              }, {
                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card_text, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_container, null, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_row, null, {
                            "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                              return [$data.serverResponse.length != 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_v_col, {
                                key: 0,
                                cols: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_alert, {
                                    color: $data.serverResponse.status,
                                    title: $data.serverResponse.message
                                  }, null, 8 /* PROPS */, ["color", "title"])];
                                }),
                                _: 1 /* STABLE */
                              })) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                md: "6",
                                lg: "6"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                                    density: "compact",
                                    variant: "outlined",
                                    "error-messages": $data.errors.name,
                                    modelValue: $data.formData.name,
                                    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                                      return $data.formData.name = $event;
                                    }),
                                    label: "Jméno",
                                    name: "name",
                                    "prepend-inner-icon": "mdi-account",
                                    type: "text",
                                    autofocus: "",
                                    "class": "my-1",
                                    clearable: ""
                                  }, null, 8 /* PROPS */, ["error-messages", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                md: "6",
                                lg: "6"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                                    density: "compact",
                                    variant: "outlined",
                                    "error-messages": $data.errors.surname,
                                    modelValue: $data.formData.surname,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
                                      return $data.formData.surname = $event;
                                    }),
                                    label: "Příjmení",
                                    name: "surname",
                                    "prepend-inner-icon": "mdi-account",
                                    type: "text",
                                    "class": "my-1",
                                    clearable: ""
                                  }, null, 8 /* PROPS */, ["error-messages", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                md: "4",
                                lg: "4"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                                    density: "compact",
                                    variant: "outlined",
                                    "error-messages": $data.errors.street,
                                    modelValue: $data.formData.street,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
                                      return $data.formData.street = $event;
                                    }),
                                    label: "Ulice + číslo popisné",
                                    name: "street",
                                    "prepend-inner-icon": "mdi-office-building-outline",
                                    type: "text",
                                    "class": "my-1",
                                    clearable: ""
                                  }, null, 8 /* PROPS */, ["error-messages", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                md: "4",
                                lg: "4"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                                    density: "compact",
                                    variant: "outlined",
                                    "error-messages": $data.errors.city,
                                    modelValue: $data.formData.city,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                                      return $data.formData.city = $event;
                                    }),
                                    label: "Město",
                                    name: "city",
                                    "prepend-inner-icon": "mdi-city",
                                    type: "text",
                                    "class": "my-1",
                                    clearable: ""
                                  }, null, 8 /* PROPS */, ["error-messages", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                md: "4",
                                lg: "4"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                                    density: "compact",
                                    variant: "outlined",
                                    "error-messages": $data.errors.post_code,
                                    modelValue: $data.formData.post_code,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                                      return $data.formData.post_code = $event;
                                    }),
                                    label: "Číslo popisné",
                                    name: "post_code",
                                    type: "text",
                                    "class": "my-1",
                                    clearable: ""
                                  }, null, 8 /* PROPS */, ["error-messages", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                md: "4",
                                lg: "4"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                                    density: "compact",
                                    variant: "outlined",
                                    "error-messages": $data.errors.birthday,
                                    modelValue: $data.formData.birthday,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                                      return $data.formData.birthday = $event;
                                    }),
                                    label: "Datum narození",
                                    name: "birthday",
                                    "prepend-inner-icon": "mdi-cake",
                                    type: "text",
                                    "class": "my-1",
                                    clearable: ""
                                  }, null, 8 /* PROPS */, ["error-messages", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                md: "4",
                                lg: "4"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                                    density: "compact",
                                    variant: "outlined",
                                    "error-messages": $data.errors.telephone,
                                    modelValue: $data.formData.telephone,
                                    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
                                      return $data.formData.telephone = $event;
                                    }),
                                    label: "Telefon",
                                    name: "telephone",
                                    "prepend-inner-icon": "mdi-phone",
                                    type: "text",
                                    "class": "my-1",
                                    clearable: ""
                                  }, null, 8 /* PROPS */, ["error-messages", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                md: "4",
                                lg: "4"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                                    density: "compact",
                                    variant: "outlined",
                                    "error-messages": $data.errors.email,
                                    modelValue: $data.formData.email,
                                    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
                                      return $data.formData.email = $event;
                                    }),
                                    label: "Email",
                                    name: "email",
                                    "prepend-inner-icon": "mdi-email",
                                    type: "text",
                                    "class": "my-1",
                                    clearable: ""
                                  }, null, 8 /* PROPS */, ["error-messages", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                md: "12",
                                lg: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_text_field, {
                                    density: "compact",
                                    variant: "outlined",
                                    "error-messages": $data.errors.service,
                                    modelValue: $data.formData.service,
                                    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
                                      return $data.formData.service = $event;
                                    }),
                                    label: "Služba",
                                    name: "service",
                                    "prepend-inner-icon": "mdi-room-service",
                                    type: "text",
                                    "class": "my-1",
                                    clearable: ""
                                  }, null, 8 /* PROPS */, ["error-messages", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_col, {
                                cols: "12",
                                sm: "12",
                                md: "12",
                                lg: "12"
                              }, {
                                "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                                  return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_textarea, {
                                    density: "compact",
                                    variant: "outlined",
                                    "error-messages": $data.errors.note,
                                    modelValue: $data.formData.note,
                                    "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
                                      return $data.formData.note = $event;
                                    }),
                                    label: "Poznámka",
                                    name: "note",
                                    "prepend-inner-icon": "mdi-note",
                                    type: "text",
                                    "class": "my-1",
                                    clearable: ""
                                  }, null, 8 /* PROPS */, ["error-messages", "modelValue"])];
                                }),
                                _: 1 /* STABLE */
                              })];
                            }),

                            _: 1 /* STABLE */
                          })];
                        }),

                        _: 1 /* STABLE */
                      })];
                    }),

                    _: 1 /* STABLE */
                  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_card_actions, null, {
                    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_v_btn, {
                        onClick: _cache[10] || (_cache[10] = function ($event) {
                          return $options.submitForm();
                        }),
                        block: "",
                        rounded: "lg",
                        "class": "text-white gradient-green-button",
                        style: {
                          "background": "linear-gradient(\n                                    183deg,\n                                    rgba(93, 214, 28, 1) 0%,\n                                    rgba(13, 126, 53, 1) 100%\n                                )"
                        }
                      }, {
                        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
                          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Odeslat ")];
                        }),
                        _: 1 /* STABLE */
                      })];
                    }),

                    _: 1 /* STABLE */
                  })];
                }),

                _: 1 /* STABLE */
              })];
            }),

            _: 1 /* STABLE */
          })];
        }),

        _: 1 /* STABLE */
      })];
    }),

    _: 1 /* STABLE */
  });
}

/***/ }),

/***/ "./resources/js/components/Home.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Home.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_f2b6376c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=f2b6376c */ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c");
/* harmony import */ var _Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js */ "./resources/js/components/Home.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_martinfaifer_Sites_Grape_customer_form_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_martinfaifer_Sites_Grape_customer_form_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Home_vue_vue_type_template_id_f2b6376c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Home.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Home.vue?vue&type=template&id=f2b6376c":
/*!************************************************************************!*\
  !*** ./resources/js/components/Home.vue?vue&type=template&id=f2b6376c ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_f2b6376c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Home_vue_vue_type_template_id_f2b6376c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Home.vue?vue&type=template&id=f2b6376c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Home.vue?vue&type=template&id=f2b6376c");


/***/ })

}]);