(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{92:function(n,t,e){"use strict";e.r(t),t.default='<template>\n  <div>\n    <p>Input your age:</p>\n    <FormattedInput v-model="age" postfix="years" />\n    <p>Your current age is {{ age }}!</p>\n  </div>\n</template>\n\n<script>\nimport FormattedInput from \'./FormattedInput\';\n\nexport default {\n  components: { FormattedInput },\n  data() {\n    return { age: 10 };\n  }\n};\n<\/script>\n'}}]);