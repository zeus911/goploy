(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a47bfae"],{2017:function(e,t,o){"use strict";var n=o("3b76"),s=o.n(n);s.a},"3b76":function(e,t,o){},"94c4":function(e,t,o){"use strict";var n=o("b754"),s=o.n(n);s.a},"9ed6":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h3",{staticClass:"title"},[e._v("代码发布")])]),e._v(" "),o("el-form-item",{attrs:{prop:"account"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),o("el-input",{ref:"account",attrs:{size:"medium",placeholder:"请输入账号",name:"account",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.account,callback:function(t){e.$set(e.loginForm,"account",t)},expression:"loginForm.account"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),o("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,size:"medium",placeholder:"请输入密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),o("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,size:"medium",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("登 录")])],1)],1)},s=[],r=o("61f7"),a={name:"Login",data:function(){var e=function(e,t,o){Object(r["c"])(t)?o():o(new Error("请输入正确的用户名"))},t=function(e,t,o){Object(r["b"])(t)?o():o(new Error("8到16个字符，至少包含字母、数字、特殊符号中的两种"))};return{loginForm:{account:"",password:"",phrase:""},loginRules:{account:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password",redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},changePhrase:function(){this.phrase="/user/getPhrase?"+Math.random()},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/login",e.loginForm).then(function(){e.$router.push({path:e.redirect||"/"}),e.loading=!1}).catch(function(){e.loading=!1,e.showPhrase=!0,e.changePhrase()})})}}},i=a,c=(o("2017"),o("94c4"),o("2877")),l=Object(c["a"])(i,n,s,!1,null,"1728ae3b",null);t["default"]=l.exports},b754:function(e,t,o){}}]);