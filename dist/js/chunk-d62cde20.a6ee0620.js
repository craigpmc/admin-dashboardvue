(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d62cde20"],{1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.regex)("integer",/^-?[0-9]*$/);t.default=i},2579:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row page-title"},[r("div",{staticClass:"col-md-12"},[r("b-breadcrumb",{staticClass:"float-right mt-1",attrs:{items:e.items}}),r("h4",{staticClass:"mb-1 mt-0"},[e._v(e._s(e.title))])],1)])},i=[],s={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},n=s,o=r("0c7c"),l=Object(o["a"])(n,a,i,!1,null,null,null);t["a"]=l.exports},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"maxLength",max:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)<=e}))};t.default=i},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,a)}),!0)}))};t.default=i},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.regex)("numeric",/^[0-9]*$/);t.default=i},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"maxValue",max:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=i},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,s=(0,a.regex)("email",i);t.default=s},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"minLength",min:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)>=e}))};t.default=i},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"not"},(function(t,r){return!(0,a.req)(t)||!e.call(this,t,r)}))};t.default=i},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,s=(0,a.regex)("url",i);t.default=s},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return a.default}}),t.regex=t.ref=t.len=t.req=void 0;var a=i(r("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var n=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===s(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=n;var o=function(e){return Array.isArray(e)?e.length:"object"===s(e)?Object.keys(e).length:String(e).length};t.len=o;var l=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=l;var u=function(e,t){return(0,a.default)({type:e},(function(e){return!n(e)||t.test(e)}))};t.regex=u},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?r("cb69").withParams:r("0234").withParams,i=a;t.default=i},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,a.withParams)({type:"macAddress"},(function(t){if(!(0,a.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(s)}))};t.default=i;var s=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,a.ref)(e,this,r)||(0,a.req)(t)}))};t.default=i},b5ae:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return P.default}}),t.helpers=void 0;var a=q(r("6235")),i=q(r("3a54")),s=q(r("45b8")),n=q(r("ec11")),o=q(r("5d75")),l=q(r("c99d")),u=q(r("91d3")),d=q(r("2a12")),m=q(r("5db3")),c=q(r("d4f4")),v=q(r("aa82")),f=q(r("e652")),p=q(r("b6cb")),b=q(r("772d")),g=q(r("d294")),h=q(r("3360")),y=q(r("6417")),_=q(r("eb66")),w=q(r("46bc")),$=q(r("1331")),P=q(r("c301")),x=C(r("78ef"));function C(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};a.get||a.set?Object.defineProperty(t,r,a):t[r]=e[r]}return t.default=e,t}function q(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,a.ref)(e,this,r)}))};t.default=i},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.withParams)({type:"ipAddress"},(function(e){if(!(0,a.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(s)}));t.default=i;var s=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var a="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},s=a.vuelidate?a.vuelidate.withParams:i;t.withParams=s}).call(this,r("24aa"))},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,a)}),!1)}))};t.default=i},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.withParams)({type:"required"},a.req);t.default=i},d5a6:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Layout",[r("PageHeader",{attrs:{title:e.title,items:e.items}}),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"header-title mt-0 mb-1"},[e._v("Basic Form")]),r("p",{staticClass:"sub-header"},[e._v("Vuelidate is a validation library in Vue. It helps you provide\n            your users with feedback on their form submission before sending\n            it to your server.")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[e._v("\n                User Name\n                "),r("span",{staticClass:"text-danger"},[e._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.name.$error},attrs:{id:"username",name:"username",type:"text",placeholder:"Enter user name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),e.submitted&&!e.$v.form.name.required?r("div",{staticClass:"invalid-feedback"},[e._v("This value is required.")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",[e._v("\n                Email address\n                "),r("span",{staticClass:"text-danger"},[e._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.email.$error},attrs:{type:"email",name:"email",placeholder:"Enter email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),e.submitted&&e.$v.form.email.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.form.email.required?e._e():r("span",[e._v("This value is required.")]),e.$v.form.email.email?e._e():r("span",[e._v("This value should be a valid email.")])]):e._e()]),r("div",{staticClass:"form-group"},[r("label",[e._v("\n                Password\n                "),r("span",{staticClass:"text-danger"},[e._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.password.$error},attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e.submitted&&e.$v.form.password.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.form.password.required?e._e():r("span",[e._v("This value is required.")]),e.$v.form.password.minLength?e._e():r("span",[e._v("Password must be at least 6 characters.")])]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"passWord2"}},[e._v("\n                Confirm Password\n                "),r("span",{staticClass:"text-danger"},[e._v("*")])]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.confirmPassword,expression:"form.confirmPassword"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&e.$v.form.confirmPassword.$error},attrs:{id:"passWord2",type:"password",name:"confirmPassword",placeholder:"Password"},domProps:{value:e.form.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.form,"confirmPassword",t.target.value)}}}),e.submitted&&e.$v.form.confirmPassword.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.form.confirmPassword.required?e.$v.form.confirmPassword.sameAsPassword?e._e():r("span",[e._v("This value should be the same.")]):r("span",[e._v("This value is required.")])]):e._e()]),r("div",{staticClass:"form-group"},[r("div",{staticClass:"checkbox checkbox-purple"},[r("input",{attrs:{id:"checkbox6a",type:"checkbox"}}),r("label",{attrs:{for:"checkbox6a"}},[e._v("Remember me")])])]),r("div",{staticClass:"form-group text-right m-b-0"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")]),r("button",{staticClass:"btn btn-secondary m-l-5 ml-1",attrs:{type:"reset"}},[e._v("Cancel")])])])])])]),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"header-title mt-0 mb-1"},[e._v("Horizontal Form")]),r("p",{staticClass:"text-muted font-14 m-b-20"},[e._v("Vuelidate is a validation library in Vue. It helps you provide\n            your users with feedback on their form submission before sending\n            it to your server.")]),r("form",{on:{submit:function(t){return t.preventDefault(),e.horizontalForm(t)}}},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-4 col-form-label"},[e._v("\n                Email\n                "),r("span",{staticClass:"text-danger"},[e._v("*")])]),r("div",{staticClass:"col-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.horizontal.email,expression:"horizontal.email"}],staticClass:"form-control",class:{"is-invalid":e.formsubmit&&e.$v.horizontal.email.$error},attrs:{type:"email",name:"email",placeholder:"Enter email"},domProps:{value:e.horizontal.email},on:{input:function(t){t.target.composing||e.$set(e.horizontal,"email",t.target.value)}}}),e.formsubmit&&e.$v.horizontal.email.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.horizontal.email.required?e._e():r("span",[e._v("This value is required.")]),e.$v.horizontal.email.email?e._e():r("span",[e._v("This value should be a valid email.")])]):e._e()])]),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-4 col-form-label"},[e._v("\n                Password\n                "),r("span",{staticClass:"text-danger"},[e._v("*")])]),r("div",{staticClass:"col-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.horizontal.password,expression:"horizontal.password"}],staticClass:"form-control",class:{"is-invalid":e.formsubmit&&e.$v.horizontal.password.$error},attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.horizontal.password},on:{input:function(t){t.target.composing||e.$set(e.horizontal,"password",t.target.value)}}}),e.formsubmit&&e.$v.horizontal.password.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.horizontal.password.required?e._e():r("span",[e._v("This value is required.")]),e.$v.horizontal.password.minLength?e._e():r("span",[e._v("Password must be at least 6 characters.")])]):e._e()])]),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-4 col-form-label"},[e._v("\n                Confirm Password\n                "),r("span",{staticClass:"text-danger"},[e._v("*")])]),r("div",{staticClass:"col-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.horizontal.confirmPassword,expression:"horizontal.confirmPassword"}],staticClass:"form-control",class:{"is-invalid":e.formsubmit&&e.$v.horizontal.confirmPassword.$error},attrs:{type:"password",name:"confirmPassword",placeholder:"Password"},domProps:{value:e.horizontal.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.horizontal,"confirmPassword",t.target.value)}}}),e.formsubmit&&e.$v.horizontal.confirmPassword.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.horizontal.confirmPassword.required?e.$v.horizontal.confirmPassword.sameAsPassword?e._e():r("span",[e._v("This value should be the same.")]):r("span",[e._v("This value is required.")])]):e._e()])]),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-4 col-form-label",attrs:{for:"webSite"}},[e._v("\n                Web Site\n                "),r("span",{staticClass:"text-danger"},[e._v("*")])]),r("div",{staticClass:"col-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.horizontal.website,expression:"horizontal.website"}],staticClass:"form-control",class:{"is-invalid":e.formsubmit&&e.$v.horizontal.website.$error},attrs:{id:"website",type:"text",name:"website",placeholder:"URL"},domProps:{value:e.horizontal.website},on:{input:function(t){t.target.composing||e.$set(e.horizontal,"website",t.target.value)}}}),e.formsubmit&&e.$v.horizontal.website.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.horizontal.website.required?e._e():r("span",[e._v("This value is required.")]),e.$v.horizontal.website.url?e._e():r("span",[e._v("This value should be a valid url.")])]):e._e()])]),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-8 offset-4"},[r("div",{staticClass:"checkbox checkbox-purple"},[r("input",{attrs:{id:"checkbox6",type:"checkbox"}}),r("label",{attrs:{for:"checkbox6"}},[e._v("Remember me")])])])]),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-8 offset-4"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Register")]),r("button",{staticClass:"btn btn-secondary m-l-5 ml-1",attrs:{type:"reset"}},[e._v("Cancel")])])])])])])])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-box"},[r("h4",{staticClass:"header-title mt-0 mb-1"},[e._v("Validation type")]),r("p",{staticClass:"text-muted font-14 m-b-20"},[e._v("Vuelidate is a validation library in Vue. It helps you provide\n            your users with feedback on their form submission before sending\n            it to your server.")]),r("form",{attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.typeForm(t)}}},[r("div",{staticClass:"form-group"},[r("label",[e._v("Required")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.typeform.name,expression:"typeform.name"}],staticClass:"form-control",class:{"is-invalid":e.typesubmit&&e.$v.typeform.name.$error},attrs:{type:"text",placeholder:"Type something",name:"name"},domProps:{value:e.typeform.name},on:{input:function(t){t.target.composing||e.$set(e.typeform,"name",t.target.value)}}}),e.typesubmit&&e.$v.typeform.name.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.typeform.name.required?e._e():r("span",[e._v("This value is required.")])]):e._e()]),r("div",{staticClass:"form-group"},[r("label",[e._v("Equal To")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.typeform.password,expression:"typeform.password"}],staticClass:"form-control",class:{"is-invalid":e.typesubmit&&e.$v.typeform.password.$error},attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.typeform.password},on:{input:function(t){t.target.composing||e.$set(e.typeform,"password",t.target.value)}}}),e.typesubmit&&e.$v.typeform.password.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.typeform.password.required?e._e():r("span",[e._v("This value is required.")]),e.$v.typeform.password.minLength?e._e():r("span",[e._v("Password must be at least 6 characters.")])]):e._e()]),r("div",{staticClass:"mt-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.typeform.confirmPassword,expression:"typeform.confirmPassword"}],staticClass:"form-control",class:{"is-invalid":e.typesubmit&&e.$v.typeform.confirmPassword.$error},attrs:{type:"password",name:"confirmPassword",placeholder:"Password"},domProps:{value:e.typeform.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.typeform,"confirmPassword",t.target.value)}}}),e.typesubmit&&e.$v.typeform.confirmPassword.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.typeform.confirmPassword.required?e.$v.typeform.confirmPassword.sameAsPassword?e._e():r("span",[e._v("This value should be the same.")]):r("span",[e._v("This value is required.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("E-Mail")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.typeform.email,expression:"typeform.email"}],staticClass:"form-control",class:{"is-invalid":e.typesubmit&&e.$v.typeform.email.$error},attrs:{type:"email",name:"email",placeholder:"Enter a valid email"},domProps:{value:e.typeform.email},on:{input:function(t){t.target.composing||e.$set(e.typeform,"email",t.target.value)}}}),e.typesubmit&&e.$v.typeform.email.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.typeform.email.required?e._e():r("span",[e._v("This value is required.")]),e.$v.typeform.email.email?e._e():r("span",[e._v("This value should be a valid email.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("URL")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.typeform.url,expression:"typeform.url"}],staticClass:"form-control",class:{"is-invalid":e.typesubmit&&e.$v.typeform.url.$error},attrs:{type:"url",name:"url",placeholder:"URL"},domProps:{value:e.typeform.url},on:{input:function(t){t.target.composing||e.$set(e.typeform,"url",t.target.value)}}}),e.typesubmit&&e.$v.typeform.url.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.typeform.url.required?e._e():r("span",[e._v("This value is required.")]),e.$v.typeform.url.url?e._e():r("span",[e._v("This value should be a valid url.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Digits")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.typeform.digit,expression:"typeform.digit"}],staticClass:"form-control",class:{"is-invalid":e.typesubmit&&e.$v.typeform.digit.$error},attrs:{type:"text",name:"digit",placeholder:"Enter only digits"},domProps:{value:e.typeform.digit},on:{input:function(t){t.target.composing||e.$set(e.typeform,"digit",t.target.value)}}}),e.typesubmit&&e.$v.typeform.digit.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.typeform.digit.required?e._e():r("span",[e._v("This value is required.")]),e.$v.typeform.digit.numeric?e._e():r("span",[e._v("This value should be digits.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Number")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.typeform.number,expression:"typeform.number"}],staticClass:"form-control",class:{"is-invalid":e.typesubmit&&e.$v.typeform.number.$error},attrs:{type:"text",name:"number",placeholder:"Enter only numbers"},domProps:{value:e.typeform.number},on:{input:function(t){t.target.composing||e.$set(e.typeform,"number",t.target.value)}}}),e.typesubmit&&e.$v.typeform.number.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.typeform.number.required?e._e():r("span",[e._v("This value is required.")]),e.$v.typeform.number.numeric?e._e():r("span",[e._v("This value should be a valid number.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Alphanumeric")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.typeform.alphanum,expression:"typeform.alphanum"}],staticClass:"form-control",class:{"is-invalid":e.typesubmit&&e.$v.typeform.alphanum.$error},attrs:{type:"text",name:"alphanum",placeholder:"Enter alphanumeric value"},domProps:{value:e.typeform.alphanum},on:{input:function(t){t.target.composing||e.$set(e.typeform,"alphanum",t.target.value)}}}),e.typesubmit&&e.$v.typeform.alphanum.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.typeform.alphanum.required?e._e():r("span",[e._v("This value is required.")]),e.$v.typeform.alphanum.alphaNum?e._e():r("span",[e._v("This value should be alphanumeric.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Textarea")]),r("div",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.typeform.textarea,expression:"typeform.textarea"}],staticClass:"form-control",class:{"is-invalid":e.typesubmit&&e.$v.typeform.textarea.$error},attrs:{name:"textarea"},domProps:{value:e.typeform.textarea},on:{input:function(t){t.target.composing||e.$set(e.typeform,"textarea",t.target.value)}}}),e.typesubmit&&e.$v.typeform.textarea.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.typeform.textarea.required?e._e():r("span",[e._v("This value is required.")])]):e._e()])]),r("div",{staticClass:"form-group mb-0"},[r("div",[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")]),r("button",{staticClass:"btn btn-secondary m-l-5 ml-1",attrs:{type:"reset"}},[e._v("Cancel")])])])])])])]),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("h4",{staticClass:"header-title mt-0 mb-1"},[e._v("Range validation")]),r("p",{staticClass:"text-muted font-14 m-b-20"},[e._v("Vuelidate is a validation library in Vue. It helps you provide\n            your users with feedback on their form submission before sending\n            it to your server.")]),r("form",{attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.rangeform(t)}}},[r("div",{staticClass:"form-group"},[r("label",[e._v("Min Length")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.range.minlen,expression:"range.minlen"}],staticClass:"form-control",class:{"is-invalid":e.submit&&e.$v.range.minlen.$error},attrs:{type:"text",name:"minlen",placeholder:"Min 6 chars."},domProps:{value:e.range.minlen},on:{input:function(t){t.target.composing||e.$set(e.range,"minlen",t.target.value)}}}),e.submit&&e.$v.range.minlen.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.range.minlen.required?e._e():r("span",[e._v("This value is required.")]),e.$v.range.minlen.minLength?e._e():r("span",[e._v("This value is too short. It should have 6 characters or\n                    more.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Max Length")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.range.maxlength,expression:"range.maxlength"}],staticClass:"form-control",class:{"is-invalid":e.submit&&e.$v.range.maxlength.$error},attrs:{type:"text",name:"maxlength",placeholder:"Max 6 chars."},domProps:{value:e.range.maxlength},on:{input:function(t){t.target.composing||e.$set(e.range,"maxlength",t.target.value)}}}),e.submit&&e.$v.range.maxlength.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.range.maxlength.required?e._e():r("span",[e._v("This value is required.")]),e.$v.range.maxlength.maxLength?e._e():r("span",[e._v("This value is too long. It should have 6 characters or\n                    fewer.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Range Length")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.range.between,expression:"range.between"}],staticClass:"form-control",class:{"is-invalid":e.submit&&e.$v.range.between.$error},attrs:{type:"text",name:"between",placeholder:"Text between 5 - 10 chars length"},domProps:{value:e.range.between},on:{input:function(t){t.target.composing||e.$set(e.range,"between",t.target.value)}}}),e.submit&&e.$v.range.between.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.range.between.required?e._e():r("span",[e._v("This value is required.")]),e.$v.range.between.maxLength?e._e():r("span",[e._v("This value length is invalid. It should be between 5 and\n                    10 characters long.")]),e.$v.range.between.minLength?e._e():r("span",[e._v("This value length is invalid. It should be between 5 and\n                    10 characters long.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Min Value")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.range.minval,expression:"range.minval"}],staticClass:"form-control",class:{"is-invalid":e.submit&&e.$v.range.minval.$error},attrs:{type:"text",name:"minval",placeholder:"Min value is 6"},domProps:{value:e.range.minval},on:{input:function(t){t.target.composing||e.$set(e.range,"minval",t.target.value)}}}),e.submit&&e.$v.range.minval.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.range.minval.required?e._e():r("span",[e._v("This value is required.")]),e.$v.range.minval.minValue?e._e():r("span",[e._v("This value should be greater than or equal to 6.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Max Value")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.range.maxval,expression:"range.maxval"}],staticClass:"form-control",class:{"is-invalid":e.submit&&e.$v.range.maxval.$error},attrs:{type:"text",name:"maxval",placeholder:"Max value is 6"},domProps:{value:e.range.maxval},on:{input:function(t){t.target.composing||e.$set(e.range,"maxval",t.target.value)}}}),e.submit&&e.$v.range.maxval.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.range.maxval.required?e._e():r("span",[e._v("This value is required.")]),e.$v.range.maxval.maxValue?e._e():r("span",[e._v("This value should be lower than or equal to 6.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Range Value")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.range.rangeval,expression:"range.rangeval"}],staticClass:"form-control",class:{"is-invalid":e.submit&&e.$v.range.rangeval.$error},attrs:{type:"text",name:"rangeval",placeholder:"Number between 6 - 100"},domProps:{value:e.range.rangeval},on:{input:function(t){t.target.composing||e.$set(e.range,"rangeval",t.target.value)}}}),e.submit&&e.$v.range.rangeval.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.range.rangeval.required?e._e():r("span",[e._v("This value is required.")]),e.$v.range.rangeval.minValue?e._e():r("span",[e._v("This value should be between 6 and 100.")]),e.$v.range.rangeval.maxValue?e._e():r("span",[e._v("This value should be between 6 and 100.")])]):e._e()])]),r("div",{staticClass:"form-group"},[r("label",[e._v("Regular Exp")]),r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.range.expr,expression:"range.expr"}],staticClass:"form-control",class:{"is-invalid":e.submit&&e.$v.range.expr.$error},attrs:{type:"text",name:"expr",placeholder:"Hex. Color"},domProps:{value:e.range.expr},on:{input:function(t){t.target.composing||e.$set(e.range,"expr",t.target.value)}}}),e.submit&&e.$v.range.expr.$error?r("div",{staticClass:"invalid-feedback"},[e.$v.range.expr.required?e._e():r("span",[e._v("This value is required.")])]):e._e()])]),r("div",{staticClass:"form-group mb-0"},[r("div",[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")]),r("button",{staticClass:"btn btn-secondary m-l-5 ml-1",attrs:{type:"reset"}},[e._v("Cancel")])])])])])])])])],1)},i=[],s=r("c2a4"),n=r("444f"),o=r("2579"),l=r("b5ae"),u={page:{title:"Forms Validation",meta:[{name:"description",content:s.description}]},components:{Layout:n["a"],PageHeader:o["a"]},data:function(){return{title:"Forms Validation",items:[{text:"Shreyu",href:"/"},{text:"Forms",href:"/"},{text:"Validation",active:!0}],form:{name:"",email:"",password:"",confirmPassword:""},horizontal:{email:"",password:"",confirmPassword:"",website:""},range:{minlen:"",maxlength:"",between:"",minval:"",maxval:"",rangeval:"",expr:""},typeform:{name:"",password:"",confirmPassword:"",email:"",url:"",digit:"",number:"",alphanum:"",textarea:""},submit:!1,submitted:!1,formsubmit:!1,typesubmit:!1}},validations:{form:{name:{required:l["required"]},email:{required:l["required"],email:l["email"]},password:{required:l["required"],minLength:Object(l["minLength"])(6)},confirmPassword:{required:l["required"],sameAsPassword:Object(l["sameAs"])("password")}},horizontal:{email:{required:l["required"],email:l["email"]},password:{required:l["required"],minLength:Object(l["minLength"])(6)},confirmPassword:{required:l["required"],sameAsPassword:Object(l["sameAs"])("password")},website:{required:l["required"],url:l["url"]}},range:{minlen:{required:l["required"],minLength:Object(l["minLength"])(6)},maxlength:{required:l["required"],maxLength:Object(l["maxLength"])(6)},between:{required:l["required"],minLength:Object(l["minLength"])(5),maxLength:Object(l["maxLength"])(10)},minval:{required:l["required"],minValue:Object(l["minValue"])(6)},maxval:{required:l["required"],maxValue:Object(l["maxValue"])(6)},rangeval:{required:l["required"],minValue:Object(l["minValue"])(6),maxValue:Object(l["maxValue"])(100)},expr:{required:l["required"]}},typeform:{name:{required:l["required"]},password:{required:l["required"],minLength:Object(l["minLength"])(6)},confirmPassword:{required:l["required"],sameAsPassword:Object(l["sameAs"])("password")},email:{required:l["required"],email:l["email"]},url:{required:l["required"],url:l["url"]},digit:{required:l["required"],numeric:l["numeric"]},number:{required:l["required"],numeric:l["numeric"]},alphanum:{required:l["required"],alphaNum:l["alphaNum"]},textarea:{required:l["required"]}}},methods:{handleSubmit:function(e){this.submitted=!0,this.$v.$touch()},horizontalForm:function(e){this.formsubmit=!0,this.$v.$touch()},rangeform:function(e){this.submit=!0,this.$v.$touch()},typeForm:function(e){this.typesubmit=!0,this.$v.$touch()}}},d=u,m=r("0c7c"),c=Object(m["a"])(d,a,i,!1,null,null,null);t["default"]=c.exports},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,a.ref)(e,this,r)||(0,a.req)(t)}))};t.default=i},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"minValue",min:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=i},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e,t){return(0,a.withParams)({type:"between",min:e,max:t},(function(r){return!(0,a.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=i}}]);
//# sourceMappingURL=chunk-d62cde20.a6ee0620.js.map