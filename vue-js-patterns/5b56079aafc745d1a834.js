(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{211:function(e,t,n){var o=n(230);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(16).default)("0402ac5c",o,!0,{})},229:function(e,t,n){"use strict";var o=n(211);n.n(o).a},230:function(e,t,n){(e.exports=n(15)(!1)).push([e.i,".layout[data-v-0eec2ee6]{width:100%}.layout header[data-v-0eec2ee6],.layout footer[data-v-0eec2ee6]{padding:5px 10px;background-color:#ccc}\n",""])},240:function(e,t,n){"use strict";n.r(t);var o={},a=(n(229),n(3)),r=Object(a.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout"},[n("header",[e._t("header",[e._v("\n      Header slot\n    ")])],2),e._v(" "),n("main",[e._t("default",[e._v("\n      Content default slot\n    ")])],2),e._v(" "),n("footer",[e._t("footer",[e._v("\n      Footer slot\n    ")])],2)])}),[],!1,null,"0eec2ee6",null).exports,s={title:"Something happens",description:"Be aware around you",date:new Date},l={data:function(){return{post:s}}},c={components:{Layout:r,NewsCard:Object(a.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",[n("h3",[e._v(e._s(e.post.title))]),e._v(" "),n("p",[e._v(e._s(e.post.description))]),e._v(" "),e._t("publish-date",[e._v("\n    Published "+e._s(e.post.date)+"\n  ")],{date:e.post.date})],2)}),[],!1,null,"96ce3a86",null).exports},filters:{locale:function(e){return e instanceof Date?e.toLocaleString():e}}},u=Object(a.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("layout",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("\n    Latest news\n  ")]},proxy:!0},{key:"footer",fn:function(){return[e._v("\n    AwesomeNews INC ©\n  ")]},proxy:!0}])},[e._v(" "),n("NewsCard",{scopedSlots:e._u([{key:"publish-date",fn:function(t){return[e._v("\n      Added: "+e._s(e._f("locale")(t.date))+"\n    ")]}}])})],1)}),[],!1,null,null,null);t.default=u.exports}}]);