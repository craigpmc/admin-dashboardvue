(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d135eb4"],{1331:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.regex)("integer",/^-?[0-9]*$/);e.default=i},2579:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row page-title"},[a("div",{staticClass:"col-md-12"},[a("b-breadcrumb",{staticClass:"float-right mt-1",attrs:{items:t.items}}),a("h4",{staticClass:"mb-1 mt-0"},[t._v(t._s(t.title))])],1)])},i=[],n={components:{},props:{title:{type:String,default:""},items:{type:Array,default:function(){return[]}}}},s=n,o=a("0c7c"),l=Object(o["a"])(s,r,i,!1,null,null,null);e["a"]=l.exports},"2a12":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"maxLength",max:t},(function(e){return!(0,r.req)(e)||(0,r.len)(e)<=t}))};e.default=i},"2ee4":function(t,e,a){!function(e,a){t.exports=a()}("undefined"!=typeof self&&self,(function(){return function(t){function e(r){if(a[r])return a[r].exports;var i=a[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.d=function(t,a,r){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e){t.exports=function(t,e,a,r,i,n){var s,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(s=t,o=t.default);var c,u="function"==typeof o?o.options:o;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0),a&&(u.functional=!0),i&&(u._scopeId=i),n?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},u._ssrRegister=c):r&&(c=r),c){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=c,u.render=function(t,e){return c.call(e),f(t,e)}):u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:s,exports:o,options:u}}},function(t,e,a){"use strict";var r=a(2),i=a(4),n=a(14);e.a={name:"form-wizard",components:{WizardButton:r.a,WizardStep:i.a},props:{title:{type:String,default:"Awesome Wizard"},subtitle:{type:String,default:"Split a complicated flow in multiple steps"},nextButtonText:{type:String,default:"Next"},backButtonText:{type:String,default:"Back"},finishButtonText:{type:String,default:"Finish"},hideButtons:{type:Boolean,default:!1},validateOnBack:Boolean,color:{type:String,default:"#e74c3c"},errorColor:{type:String,default:"#8b0000"},shape:{type:String,default:"circle"},layout:{type:String,default:"horizontal"},stepsClasses:{type:[String,Array],default:""},stepSize:{type:String,default:"md",validator:function(t){return-1!==["xs","sm","md","lg"].indexOf(t)}},transition:{type:String,default:""},startIndex:{type:Number,default:0,validator:function(t){return t>=0}}},provide:function(){return{addTab:this.addTab,removeTab:this.removeTab}},data:function(){return{activeTabIndex:0,currentPercentage:0,maxStep:0,loading:!1,tabs:[]}},computed:{slotProps:function(){return{nextTab:this.nextTab,prevTab:this.prevTab,activeTabIndex:this.activeTabIndex,isLastStep:this.isLastStep,fillButtonStyle:this.fillButtonStyle}},tabCount:function(){return this.tabs.length},isLastStep:function(){return this.activeTabIndex===this.tabCount-1},isVertical:function(){return"vertical"===this.layout},displayPrevButton:function(){return 0!==this.activeTabIndex},stepPercentage:function(){return 1/(2*this.tabCount)*100},progressBarStyle:function(){return{backgroundColor:this.color,width:this.progress+"%",color:this.color}},fillButtonStyle:function(){return{backgroundColor:this.color,borderColor:this.color,color:"white"}},progress:function(){return this.activeTabIndex>0?this.stepPercentage*(2*this.activeTabIndex+1):this.stepPercentage}},methods:{emitTabChange:function(t,e){this.$emit("on-change",t,e),this.$emit("update:startIndex",e)},addTab:function(t){var e=this.$slots.default.indexOf(t.$vnode);t.tabId=""+t.title.replace(/ /g,"")+e,this.tabs.splice(e,0,t),e<this.activeTabIndex+1&&(this.maxStep=e,this.changeTab(this.activeTabIndex+1,e))},removeTab:function(t){var e=this.tabs,a=e.indexOf(t);a>-1&&(a===this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.changeTab(this.activeTabIndex,this.activeTabIndex-1)),a<this.activeTabIndex&&(this.maxStep=this.activeTabIndex-1,this.activeTabIndex=this.activeTabIndex-1,this.emitTabChange(this.activeTabIndex+1,this.activeTabIndex)),e.splice(a,1))},reset:function(){this.maxStep=0,this.tabs.forEach((function(t){t.checked=!1})),this.navigateToTab(0)},activateAll:function(){this.maxStep=this.tabs.length-1,this.tabs.forEach((function(t){t.checked=!0}))},navigateToTab:function(t){var e=this,a=t>this.activeTabIndex;if(t<=this.maxStep){var r=function r(){a&&t-e.activeTabIndex>1?(e.changeTab(e.activeTabIndex,e.activeTabIndex+1),e.beforeTabChange(e.activeTabIndex,r)):(e.changeTab(e.activeTabIndex,t),e.afterTabChange(e.activeTabIndex))};a?this.beforeTabChange(this.activeTabIndex,r):(this.setValidationError(null),r())}return t<=this.maxStep},nextTab:function(){var t=this,e=function(){t.activeTabIndex<t.tabCount-1?(t.changeTab(t.activeTabIndex,t.activeTabIndex+1),t.afterTabChange(t.activeTabIndex)):t.$emit("on-complete")};this.beforeTabChange(this.activeTabIndex,e)},prevTab:function(){var t=this,e=function(){t.activeTabIndex>0&&(t.setValidationError(null),t.changeTab(t.activeTabIndex,t.activeTabIndex-1))};this.validateOnBack?this.beforeTabChange(this.activeTabIndex,e):e()},focusNextTab:function(){var t=Object(n.b)(this.tabs);if(-1!==t&&t<this.tabs.length-1){var e=this.tabs[t+1];e.checked&&Object(n.a)(e.tabId)}},focusPrevTab:function(){var t=Object(n.b)(this.tabs);if(-1!==t&&t>0){var e=this.tabs[t-1].tabId;Object(n.a)(e)}},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t){this.tabs[this.activeTabIndex].validationError=t,this.$emit("on-error",t)},validateBeforeChange:function(t,e){var a=this;if(this.setValidationError(null),Object(n.c)(t))this.setLoading(!0),t.then((function(t){a.setLoading(!1);var r=!0===t;a.executeBeforeChange(r,e)})).catch((function(t){a.setLoading(!1),a.setValidationError(t)}));else{var r=!0===t;this.executeBeforeChange(r,e)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var a=this.tabs[t];if(a&&void 0!==a.beforeChange){var r=a.beforeChange();this.validateBeforeChange(r,e)}else e()}},afterTabChange:function(t){if(!this.loading){var e=this.tabs[t];e&&void 0!==e.afterChange&&e.afterChange()}},changeTab:function(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=this.tabs[t],i=this.tabs[e];return r&&(r.active=!1),i&&(i.active=!0),a&&this.activeTabIndex!==e&&this.emitTabChange(t,e),this.activeTabIndex=e,this.activateTabAndCheckStep(this.activeTabIndex),!0},tryChangeRoute:function(t){this.$router&&t.route&&this.$router.push(t.route)},checkRouteChange:function(t){var e=-1,a=this.tabs.find((function(a,r){var i=a.route===t;return i&&(e=r),i}));if(a&&!a.active){var r=e>this.activeTabIndex;this.navigateToTab(e,r)}},deactivateTabs:function(){this.tabs.forEach((function(t){t.active=!1}))},activateTab:function(t){this.deactivateTabs();var e=this.tabs[t];e&&(e.active=!0,e.checked=!0,this.tryChangeRoute(e))},activateTabAndCheckStep:function(t){this.activateTab(t),t>this.maxStep&&(this.maxStep=t),this.activeTabIndex=t},initializeTabs:function(){this.tabs.length>0&&0===this.startIndex&&this.activateTab(this.activeTabIndex),this.startIndex<this.tabs.length?this.activateTabAndCheckStep(this.startIndex):window.console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}},mounted:function(){this.initializeTabs()},watch:{"$route.path":function(t){this.checkRouteChange(t)}}}},function(t,e,a){"use strict";function r(t){a(10)}var i=a(3),n=a(11),s=a(0),o=r,l=s(i.a,n.a,!1,o,null,null);e.a=l.exports},function(t,e,a){"use strict";e.a={}},function(t,e,a){"use strict";function r(t){a(12)}var i=a(5),n=a(13),s=a(0),o=r,l=s(i.a,n.a,!1,o,null,null);e.a=l.exports},function(t,e,a){"use strict";e.a={name:"wizard-step",props:{tab:{type:Object,default:function(){}},transition:{type:String,default:""},index:{type:Number,default:0}},computed:{iconActiveStyle:function(){return{backgroundColor:this.tab.color}},stepCheckedStyle:function(){return{borderColor:this.tab.color}},errorStyle:function(){return{borderColor:this.tab.errorColor,backgroundColor:this.tab.errorColor}},stepTitleStyle:function(){return{color:this.tab.validationError?this.tab.errorColor:this.tab.color}},isStepSquare:function(){return"square"===this.tab.shape},isTabShape:function(){return"tab"===this.tab.shape}}}},function(t,e,a){"use strict";e.a={name:"tab-content",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},afterChange:{type:Function},route:{type:[String,Object]},additionalInfo:{type:Object,default:function(){}}},inject:["addTab","removeTab"],data:function(){return{active:!1,validationError:null,checked:!1,tabId:""}},computed:{shape:function(){return this.$parent.shape},color:function(){return this.$parent.color},errorColor:function(){return this.$parent.errorColor}},mounted:function(){this.addTab(this)},destroyed:function(){this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el),this.removeTab(this)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a(8),i=a(16),n=a(2),s=a(4);a.d(e,"FormWizard",(function(){return r.a})),a.d(e,"TabContent",(function(){return i.a})),a.d(e,"WizardButton",(function(){return n.a})),a.d(e,"WizardStep",(function(){return s.a}));var o={install:function(t){t.component("form-wizard",r.a),t.component("tab-content",i.a),t.component("wizard-button",n.a),t.component("wizard-step",s.a)}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),e.default=o},function(t,e,a){"use strict";function r(t){a(9)}var i=a(1),n=a(15),s=a(0),o=r,l=s(i.a,n.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e){},function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"wizard-btn",attrs:{tabindex:"-1",type:"button"}},[t._t("default")],2)},i=[],n={render:r,staticRenderFns:i};e.a=n},function(t,e){},function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{class:{active:t.tab.active}},[a("a",{class:{disabled:!t.tab.checked},attrs:{href:"javascript:void(0)"}},[a("div",{staticClass:"wizard-icon-circle md",class:{checked:t.tab.checked,square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.checked?t.stepCheckedStyle:{},t.tab.validationError?t.errorStyle:{}],attrs:{role:"tab",tabindex:t.tab.checked?0:"",id:"step-"+t.tab.tabId,"aria-controls":t.tab.tabId,"aria-disabled":t.tab.active,"aria-selected":t.tab.active}},[a("transition",{attrs:{name:t.transition,mode:"out-in"}},[t.tab.active?a("div",{staticClass:"wizard-icon-container",class:{square_shape:t.isStepSquare,tab_shape:t.isTabShape},style:[t.tab.active?t.iconActiveStyle:{},t.tab.validationError?t.errorStyle:{}]},[t._t("active-step",[t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2):t._e(),t._v(" "),t.tab.active?t._e():t._t("default",[!t.tab.active&&t.tab.icon?a("i",{staticClass:"wizard-icon",class:t.tab.icon}):t._e(),t._v(" "),t.tab.active||t.tab.icon?t._e():a("i",{staticClass:"wizard-icon"},[t._v(t._s(t.index+1))])])],2)],1),t._v(" "),t._t("title",[a("span",{staticClass:"stepTitle",class:{active:t.tab.active,has_error:t.tab.validationError},style:t.tab.active?t.stepTitleStyle:{}},[t._v("\n            "+t._s(t.tab.title)+"\n      ")])])],2)])},i=[],n={render:r,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";function r(){return document.activeElement.id}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=r();return t.findIndex((function(t){return t.tabId===e}))}function n(t){document.getElementById(t).focus()}function s(t){return t.then&&"function"==typeof t.then}e.b=i,e.a=n,e.c=s},function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"vue-form-wizard",class:[t.stepSize,{vertical:t.isVertical}],on:{keyup:[function(e){return"button"in e||!t._k(e.keyCode,"right",39,e.key)?"button"in e&&2!==e.button?null:void t.focusNextTab(e):null},function(e){return"button"in e||!t._k(e.keyCode,"left",37,e.key)?"button"in e&&0!==e.button?null:void t.focusPrevTab(e):null}]}},[a("div",{staticClass:"wizard-header"},[t._t("title",[a("h4",{staticClass:"wizard-title"},[t._v(t._s(t.title))]),t._v(" "),a("p",{staticClass:"category"},[t._v(t._s(t.subtitle))])])],2),t._v(" "),a("div",{staticClass:"wizard-navigation"},[t.isVertical?t._e():a("div",{staticClass:"wizard-progress-with-circle"},[a("div",{staticClass:"wizard-progress-bar",style:t.progressBarStyle})]),t._v(" "),a("ul",{staticClass:"wizard-nav wizard-nav-pills",class:t.stepsClasses,attrs:{role:"tablist"}},[t._l(t.tabs,(function(e,r){return t._t("step",[a("wizard-step",{attrs:{tab:e,"step-size":t.stepSize,transition:t.transition,index:r},nativeOn:{click:function(e){t.navigateToTab(r)},keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.navigateToTab(r)}}})],{tab:e,index:r,navigateToTab:t.navigateToTab,stepSize:t.stepSize,transition:t.transition})}))],2),t._v(" "),a("div",{staticClass:"wizard-tab-content"},[t._t("default",null,null,t.slotProps)],2)]),t._v(" "),t.hideButtons?t._e():a("div",{staticClass:"wizard-card-footer clearfix"},[t._t("footer",[a("div",{staticClass:"wizard-footer-left"},[t.displayPrevButton?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.prevTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.prevTab(e)}}},[t._t("prev",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n              "+t._s(t.backButtonText)+"\n            ")])],null,t.slotProps)],2):t._e(),t._v(" "),t._t("custom-buttons-left",null,null,t.slotProps)],2),t._v(" "),a("div",{staticClass:"wizard-footer-right"},[t._t("custom-buttons-right",null,null,t.slotProps),t._v(" "),t.isLastStep?a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("finish",[a("wizard-button",{style:t.fillButtonStyle},[t._v("\n              "+t._s(t.finishButtonText)+"\n            ")])],null,t.slotProps)],2):a("span",{attrs:{role:"button",tabindex:"0"},on:{click:t.nextTab,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.nextTab(e)}}},[t._t("next",[a("wizard-button",{style:t.fillButtonStyle,attrs:{disabled:t.loading}},[t._v("\n            "+t._s(t.nextButtonText)+"\n           ")])],null,t.slotProps)],2)],2)],null,t.slotProps)],2)])},i=[],n={render:r,staticRenderFns:i};e.a=n},function(t,e,a){"use strict";var r=a(6),i=a(17),n=a(0),s=n(r.a,i.a,!1,null,null,null);e.a=s.exports},function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"wizard-tab-container",attrs:{role:"tabpanel",id:t.tabId,"aria-hidden":!t.active,"aria-labelledby":"step-"+t.tabId}},[t._t("default",null,{active:t.active})],2)},i=[],n={render:r,staticRenderFns:i};e.a=n}])}))},"32eb":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("PageHeader",{attrs:{title:t.title,items:t.items}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"header-title mt-0 mb-1"},[t._v("Basic Wizard")]),a("form-wizard",{attrs:{color:"#5369f8"}},[a("tab-content",{attrs:{title:"Account"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group row mb-3"},[a("label",{staticClass:"col-md-3 col-form-label"},[t._v("User name")]),a("div",{staticClass:"col-md-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",name:"userName",value:"Coderthemes"}})])]),a("div",{staticClass:"form-group row mb-3"},[a("label",{staticClass:"col-md-3 col-form-label"},[t._v("Password")]),a("div",{staticClass:"col-md-9"},[a("input",{staticClass:"form-control",attrs:{type:"password",value:"123456789"}})])]),a("div",{staticClass:"form-group row mb-3"},[a("label",{staticClass:"col-md-3 col-form-label"},[t._v("Re Password")]),a("div",{staticClass:"col-md-9"},[a("input",{staticClass:"form-control",attrs:{type:"password",value:"123456789"}})])])])])]),a("tab-content",{attrs:{title:"Profile"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"form-group row mb-3"},[a("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"name"}},[t._v("First name")]),a("div",{staticClass:"col-md-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",name:"name",value:"Francis"}})])]),a("div",{staticClass:"form-group row mb-3"},[a("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"surname"}},[t._v("Last name")]),a("div",{staticClass:"col-md-9"},[a("input",{staticClass:"form-control",attrs:{type:"text",name:"surname",value:"Brinkman"}})])]),a("div",{staticClass:"form-group row mb-3"},[a("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"email"}},[t._v("Email")]),a("div",{staticClass:"col-md-9"},[a("input",{staticClass:"form-control",attrs:{type:"email",name:"email",value:"cory1979@hotmail.com"}})])])])])]),a("tab-content",{attrs:{title:"Finish"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"text-center"},[a("h2",{staticClass:"mt-0"},[a("i",{staticClass:"mdi mdi-check-all"})]),a("h3",{staticClass:"mt-0"},[t._v("Thank you !")]),a("p",{staticClass:"w-75 mb-2 mx-auto"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tQuisque nec turpis at urna dictum luctus. Suspendisse\n\t\t\t\t\t\t\t\t\t\t\tconvallis dignissim eros at volutpat. In egestas mattis\n\t\t\t\t\t\t\t\t\t\t\tdui. Aliquam mattis dictum aliquet.\n\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{id:"customCheck1",type:"checkbox"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"customCheck1"}},[t._v("I agree with the Terms and Conditions")])])])])])])])],1)],1)])]),a("div",{staticClass:"col-xl-6"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"header-title mt-0 mb-1"},[t._v("Validation")]),a("form-wizard",{attrs:{color:"#5369f8","error-color":"#ff5c75"}},[a("tab-content",{attrs:{title:"Account","before-change":function(){return t.validateStep("step1")}}},[a("Step1",{ref:"step1",on:{"on-validate":t.mergePartialModels}})],1),a("tab-content",{attrs:{title:"Profile","before-change":function(){return t.validateStep("step2")}}},[a("Step2",{ref:"step2",on:{"on-validate":t.mergePartialModels}})],1),a("tab-content",{attrs:{title:"Finish"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"text-center"},[a("h2",{staticClass:"mt-0"},[a("i",{staticClass:"mdi mdi-check-all"})]),a("h3",{staticClass:"mt-0"},[t._v("Thank you !")]),a("p",{staticClass:"w-75 mb-2 mx-auto"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tQuisque nec turpis at urna dictum luctus. Suspendisse\n\t\t\t\t\t\t\t\t\t\t\tconvallis dignissim eros at volutpat. In egestas mattis\n\t\t\t\t\t\t\t\t\t\t\tdui. Aliquam mattis dictum aliquet.\n\t\t\t\t\t\t\t\t\t\t")]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{id:"customCheck1",type:"checkbox"}}),a("label",{staticClass:"custom-control-label",attrs:{for:"customCheck1"}},[t._v("I agree with the Terms and Conditions")])])])])])])])],1)],1)])])])],1)},i=[],n=(a("f751"),a("7f7f"),a("2ee4")),s=a("c2a4"),o=a("444f"),l=a("2579"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"form-group row mb-3",class:{"has-error":t.$v.username.$error}},[a("label",{staticClass:"col-md-3 col-form-label"},[t._v("Username")]),a("div",{staticClass:"col-md-9"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.username.$error},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.username.$error&&!t.$v.username.required?a("span",{staticClass:"help-block invalid-feedback"},[t._v("Username is required")]):t._e()])]),a("div",{staticClass:"form-group row mb-3",class:{"has-error":t.$v.password.$error}},[a("label",{staticClass:"col-md-3 col-form-label"},[t._v("Password")]),a("div",{staticClass:"col-md-9"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.password.$error},attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.password.$error&&!t.$v.password.required?a("span",{staticClass:"help-block invalid-feedback"},[t._v("Password is required")]):t._e()])]),a("div",{staticClass:"form-group row mb-3",class:{"has-error":t.$v.repassword.$error}},[a("label",{staticClass:"col-md-3 col-form-label"},[t._v("Re-Password")]),a("div",{staticClass:"col-md-9"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.repassword,expression:"repassword",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.repassword.$error},domProps:{value:t.repassword},on:{input:function(e){e.target.composing||(t.repassword=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.repassword.$error&&!t.$v.repassword.required?a("span",{staticClass:"help-block invalid-feedback"},[t._v("Re-password is required")]):t._e()])])])},u=[],d=a("b5ae"),f={data:function(){return{username:"",password:"",repassword:""}},validations:{username:{required:d["required"]},password:{required:d["required"]},repassword:{required:d["required"]},form:["username","password","repassword"]},methods:{validate:function(){this.$v.form.$touch();var t=!this.$v.form.$invalid;return this.$emit("on-validate",this.$data,t),t}}},v=f,b=a("0c7c"),m=Object(b["a"])(v,c,u,!1,null,null,null),p=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"form-group row mb-3",class:{"has-error":t.$v.firstName.$error}},[a("label",{staticClass:"col-md-3 col-form-label"},[t._v("First name")]),a("div",{staticClass:"col-md-9"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.firstName,expression:"firstName",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.firstName.$error},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.firstName.$error&&!t.$v.firstName.required?a("span",{staticClass:"help-block invalid-feedback"},[t._v("First name is required")]):t._e()])]),a("div",{staticClass:"form-group row mb-3",class:{"has-error":t.$v.lastName.$error}},[a("label",{staticClass:"col-md-3 col-form-label"},[t._v("Last name")]),a("div",{staticClass:"col-md-9"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.lastName,expression:"lastName",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.lastName.$error},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.lastName.$error&&!t.$v.lastName.required?a("span",{staticClass:"help-block invalid-feedback"},[t._v("Last name is required")]):t._e()])]),a("div",{staticClass:"form-group row mb-3",class:{"has-error":t.$v.email.$error}},[a("label",{staticClass:"col-md-3 col-form-label"},[t._v("Email")]),a("div",{staticClass:"col-md-9"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control",class:{"is-invalid":t.$v.email.$error},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.$v.email.$error&&!t.$v.email.required?a("span",{staticClass:"help-block invalid-feedback"},[t._v("Email is required")]):t._e(),t.$v.email.$error&&!t.$v.email.email?a("span",{staticClass:"help-block invalid-feedback"},[t._v("This is not a valid email!")]):t._e()])])])},g=[],y={data:function(){return{firstName:"",lastName:"",email:""}},validations:{firstName:{required:d["required"]},lastName:{required:d["required"]},email:{required:d["required"],email:d["email"]},form:["firstName","lastName","email"]},methods:{validate:function(){this.$v.form.$touch();var t=!this.$v.form.$invalid;return this.$emit("on-validate",this.$data,t),t}}},_=y,C=Object(b["a"])(_,h,g,!1,null,null,null),x=C.exports,w={page:{title:"Forms Wizard",meta:[{name:"description",content:s.description}]},components:{Layout:o["a"],PageHeader:l["a"],FormWizard:n["FormWizard"],TabContent:n["TabContent"],Step1:p,Step2:x},data:function(){return{title:"Forms Wizard",items:[{text:"Shreyu",href:"/"},{text:"Forms",href:"/"},{text:"Wizard",active:!0}],finalModel:{}}},methods:{validateStep:function(t){var e=this.$refs[t];return e.validate()},mergePartialModels:function(t,e){e&&(this.finalModel=Object.assign({},this.finalModel,t))}}},T=w,P=Object(b["a"])(T,r,i,!1,null,null,null);e["default"]=P.exports},3360:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return(0,r.withParams)({type:"and"},(function(){for(var t=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e.length>0&&e.reduce((function(e,a){return e&&a.apply(t,r)}),!0)}))};e.default=i},"3a54":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);e.default=i},"45b8":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.regex)("numeric",/^[0-9]*$/);e.default=i},"46bc":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"maxValue",max:t},(function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t}))};e.default=i},"5d75":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,n=(0,r.regex)("email",i);e.default=n},"5db3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"minLength",min:t},(function(e){return!(0,r.req)(e)||(0,r.len)(e)>=t}))};e.default=i},6235:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.regex)("alpha",/^[a-zA-Z]*$/);e.default=i},6417:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"not"},(function(e,a){return!(0,r.req)(e)||!t.call(this,e,a)}))};e.default=i},7333:function(t,e,a){"use strict";var r=a("9e1e"),i=a("0d58"),n=a("2621"),s=a("52a7"),o=a("4bf8"),l=a("626a"),c=Object.assign;t.exports=!c||a("79e5")((function(){var t={},e={},a=Symbol(),r="abcdefghijklmnopqrst";return t[a]=7,r.split("").forEach((function(t){e[t]=t})),7!=c({},t)[a]||Object.keys(c({},e)).join("")!=r}))?function(t,e){var a=o(t),c=arguments.length,u=1,d=n.f,f=s.f;while(c>u){var v,b=l(arguments[u++]),m=d?i(b).concat(d(b)):i(b),p=m.length,h=0;while(p>h)v=m[h++],r&&!f.call(b,v)||(a[v]=b[v])}return a}:c},"772d":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,n=(0,r.regex)("url",i);e.default=n},"78ef":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"withParams",{enumerable:!0,get:function(){return r.default}}),e.regex=e.ref=e.len=e.req=void 0;var r=i(a("8750"));function i(t){return t&&t.__esModule?t:{default:t}}function n(t){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var s=function(t){if(Array.isArray(t))return!!t.length;if(void 0===t||null===t)return!1;if(!1===t)return!0;if(t instanceof Date)return!isNaN(t.getTime());if("object"===n(t)){for(var e in t)return!0;return!1}return!!String(t).length};e.req=s;var o=function(t){return Array.isArray(t)?t.length:"object"===n(t)?Object.keys(t).length:String(t).length};e.len=o;var l=function(t,e,a){return"function"===typeof t?t.call(e,a):a[t]};e.ref=l;var c=function(t,e){return(0,r.default)({type:t},(function(t){return!s(t)||e.test(t)}))};e.regex=c},8750:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?a("cb69").withParams:a("0234").withParams,i=r;e.default=i},"91d3":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var a="string"===typeof t&&""!==t?e.split(t):12===e.length||16===e.length?e.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(n)}))};e.default=i;var n=function(t){return t.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"requiredIf",prop:t},(function(e,a){return!(0,r.ref)(t,this,a)||(0,r.req)(e)}))};e.default=i},b5ae:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(e,"numeric",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(e,"between",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(e,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(e,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(e,"maxLength",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(e,"minLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(e,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(e,"requiredIf",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(e,"requiredUnless",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(e,"sameAs",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(e,"url",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(e,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(e,"and",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(e,"not",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(e,"minValue",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(e,"maxValue",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(e,"integer",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(e,"decimal",{enumerable:!0,get:function(){return w.default}}),e.helpers=void 0;var r=$(a("6235")),i=$(a("3a54")),n=$(a("45b8")),s=$(a("ec11")),o=$(a("5d75")),l=$(a("c99d")),c=$(a("91d3")),u=$(a("2a12")),d=$(a("5db3")),f=$(a("d4f4")),v=$(a("aa82")),b=$(a("e652")),m=$(a("b6cb")),p=$(a("772d")),h=$(a("d294")),g=$(a("3360")),y=$(a("6417")),_=$(a("eb66")),C=$(a("46bc")),x=$(a("1331")),w=$(a("c301")),T=P(a("78ef"));function P(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,a):{};r.get||r.set?Object.defineProperty(e,a,r):e[a]=t[a]}return e.default=t,e}function $(t){return t&&t.__esModule?t:{default:t}}e.helpers=T},b6cb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"sameAs",eq:t},(function(e,a){return e===(0,r.ref)(t,this,a)}))};e.default=i},c301:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);e.default=i},c99d:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.withParams)({type:"ipAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var e=t.split(".");return 4===e.length&&e.every(n)}));e.default=i;var n=function(t){if(t.length>3||0===t.length)return!1;if("0"===t[0]&&"0"!==t)return!1;if(!t.match(/^\d+$/))return!1;var e=0|+t;return e>=0&&e<=255}},cb69:function(t,e,a){"use strict";(function(t){function a(t){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof t?t:{},i=function(t,e){return"object"===a(t)&&void 0!==e?e:t((function(){}))},n=r.vuelidate?r.vuelidate.withParams:i;e.withParams=n}).call(this,a("24aa"))},d294:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return(0,r.withParams)({type:"or"},(function(){for(var t=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return e.length>0&&e.reduce((function(e,a){return e||a.apply(t,r)}),!1)}))};e.default=i},d4f4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=(0,r.withParams)({type:"required"},r.req);e.default=i},e652:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"requiredUnless",prop:t},(function(e,a){return!!(0,r.ref)(t,this,a)||(0,r.req)(e)}))};e.default=i},eb66:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t){return(0,r.withParams)({type:"minValue",min:t},(function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t}))};e.default=i},ec11:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a("78ef"),i=function(t,e){return(0,r.withParams)({type:"between",min:t,max:e},(function(a){return!(0,r.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+t<=+a&&+e>=+a}))};e.default=i},f751:function(t,e,a){var r=a("5ca1");r(r.S+r.F,"Object",{assign:a("7333")})}}]);
//# sourceMappingURL=chunk-2d135eb4.b7c65963.js.map