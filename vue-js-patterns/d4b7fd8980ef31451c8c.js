(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{239:function(e,i,s){"use strict";s.r(i);var a=s(0);i.default=a.default.component("PolicyAgreement",{data:function(){return{isAgreed:!1}},methods:{goNext:function(){this.isAgreed=!1,this.$message("Read one more time please")}},render:function(){var e=this,i=arguments[0];return i("div",[i("h3",["Policy agreement seems like this.."]),i("p",["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dolor urna. Maecenas gravida iaculis purus, ac dignissim lorem malesuada faucibus. In hac habitasse platea dictumst. Sed accumsan dictum felis, id scelerisque risus mattis vitae. Maecenas in nisi malesuada, euismod magna non, mollis diam. Pellentesque vel tortor convallis, luctus turpis pretium, semper erat."]),i("el-checkbox",{model:{value:e.isAgreed,callback:function(i){e.isAgreed=i}}},["I honestly read this and apply 😇"]),i("el-button",{attrs:{disabled:!this.isAgreed},on:{click:this.goNext}},["Go ahead"])])}})}}]);