(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{253:function(e,t,a){"use strict";a.r(t);var n=new Date,l={data:function(){return{today:n,flightDay:null,sevenDaysAfter:(new Date).setDate(n.getDate()+7)}}},i=a(3),s=Object(i.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"block"},[a("p",[e._v("Awesome Flight Booking")]),e._v(" "),a("el-date-picker",{attrs:{type:"date",placeholder:"Pick a day"},model:{value:e.flightDay,callback:function(t){e.flightDay=t},expression:"flightDay"}}),e._v(" "),a("div",[e.flightDay?e.flightDay<e.today?a("p",[e._v("\n      Sales already finished 🤥\n    ")]):e.flightDay<e.sevenDaysAfter?a("p",[e._v("\n      No free places 😬\n    ")]):a("p",[e._v("\n      There are some flights 🤫\n    ")]):a("p",[e._v("\n      Day is not chosen yet 😑\n    ")])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);