(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{210:function(e,t,a){var l=a(228);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);(0,a(16).default)("be57a718",l,!0,{})},227:function(e,t,a){"use strict";var l=a(210);a.n(l).a},228:function(e,t,a){(e.exports=a(15)(!1)).push([e.i,".mv20[data-v-0cd33fc6]{margin:20px 0}\n",""])},251:function(e,t,a){"use strict";a.r(t);var l=a(0),n={components:{AgeInput:l.default.component("age-input",{data:function(){return{age:null}},template:'<el-input-number v-model="age" />'}),GenderRadio:l.default.component("gender-radio",{data:function(){return{gender:null}},template:'\n    <div>\n      <el-radio v-model="gender" label="male">Male</el-radio>\n      <el-radio v-model="gender" label="female">Femail</el-radio>\n    </div>\n  '}),NameInput:l.default.component("name-input",{data:function(){return{name:""}},template:'<el-input v-model="name" placeholder="Your name"/>'})},data:function(){return{selectedValue:null}}},o=(a(227),a(3)),u=Object(o.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("Select what you want to tell us about yourself:")]),e._v(" "),a("el-select",{attrs:{placeholder:"Choose info field"},model:{value:e.selectedValue,callback:function(t){e.selectedValue=t},expression:"selectedValue"}},[a("el-option",{attrs:{label:"Age",value:"age-input"}}),e._v(" "),a("el-option",{attrs:{label:"Gender",value:"gender-radio"}}),e._v(" "),a("el-option",{attrs:{label:"Name",value:"name-input"}})],1),e._v(" "),a("div",{staticClass:"mv20"},[a("keep-alive",[a(e.selectedValue,{tag:"component"})],1)],1)],1)}),[],!1,null,"0cd33fc6",null);t.default=u.exports}}]);