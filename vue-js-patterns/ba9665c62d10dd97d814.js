(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{60:function(e,n,t){"use strict";t.r(n),n.default="import Vue from 'vue';\nimport VueRouter from 'vue-router';\nimport ElementUI from 'element-ui';\n\nimport setupHighlight from './setupHighlight';\n\nimport App from './App';\nimport Home from './Home';\nimport routes from './routes/index';\n\nimport 'element-ui/lib/theme-chalk/index.css';\n\nVue.use(VueRouter);\nVue.use(ElementUI);\n\nsetupHighlight(Vue);\n\nconst router = new VueRouter({\n  routes: [\n    { path: '/', component: Home },\n    ...routes\n  ]\n});\n\nnew Vue({\n  router,\n  components: { App },\n  template: '<app></app>'\n}).$mount('#app');\n"}}]);