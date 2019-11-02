(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{103:function(n,e,t){"use strict";t.r(e),e.default="import Vue from 'vue';\n\nexport default function withLogger(component) {\n  return Vue.component('withLogger', {\n    data() {\n      return {\n        messages: [],\n        observableComponentData: null\n      };\n    },\n    mounted() {\n      this.messages.push('Component mounted with logger.');\n    },\n    methods: {\n      handleUpdate() {\n        const updatedDataString = JSON.stringify(this.observableComponentData);\n        this.messages.push(`Component get updated: ${updatedDataString}`);\n      }\n    },\n    render() {\n      if (this.$refs.loggedComponent) {\n        this.observableComponentData = this.$refs.loggedComponent.$data;\n      }\n      return (\n        <div>\n          With logger component\n          <component\n            ref=\"loggedComponent\"\n            attrs={{ ...this.$attrs }}\n            on={{ ...this.$listeners, 'hook:updated': this.handleUpdate }}\n          />\n          <div>\n            {this.messages.map(\n              (message) => <el-alert title={message} closable={false} />\n            )}\n          </div>\n        </div>\n      );\n    }\n  });\n}\n"}}]);