(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{101:function(n,t,e){"use strict";e.r(t),t.default='<template>\n  <div class="Clicker">\n    <p>Total clicks: {{ clicks }}</p>\n    <el-button @click="onPress">\n      Press\n    </el-button>\n    <el-button @click="onReset">\n      Reset\n    </el-button>\n  </div>\n</template>\n\n<script>\nexport default {\n  props: {\n    increaseCount: {\n      type: Number,\n      default: 1\n    }\n  },\n  data() {\n    return { clicks: 0 };\n  },\n  methods: {\n    onPress() { this.clicks = this.clicks + this.increaseCount; },\n    onReset() { this.clicks = 0; }\n  }\n};\n<\/script>\n'}}]);