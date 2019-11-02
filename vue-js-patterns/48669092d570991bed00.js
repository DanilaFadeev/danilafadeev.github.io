(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{90:function(e,n,i){"use strict";i.r(n),n.default='<template>\n  <div>\n    <h1>Coffe Machine</h1>\n    <div>\n      <p>Coffee machine capacity: {{ capacity }}</p>\n      <p>Available space: {{ availableSpace }}</p>\n    </div>\n    <div>\n      <el-input-number v-model="coffeeHolder" size="small" />\n      <el-button size="small" @click="putCoffee">\n        Add to machine\n      </el-button>\n    </div>\n    <p v-if="makingCoffee">\n      Wait until you get a tasty coffee..\n    </p>\n    <el-button class="mt-20" :disabled="makingCoffee" @click="makeCoffee">\n      Make coffee\n    </el-button>\n  </div>\n</template>\n\n<script>\nimport Vue from \'vue\';\nimport Component from \'vue-class-component\';\n\n@Component\nclass CoffeeMachine extends Vue {\n  capacity = 100\n  makingCoffee = false\n  coffeeInMachine = 0;\n  coffeeHolder = 0\n\n  putCoffee() {\n    if (this.coffeeInMachine + this.coffeeHolder >= this.capacity) {\n      this.coffeeInMachine = this.capacity;\n      this.$message({\n        message: \'Coffee machine is full!\',\n        type: \'error\'\n      });\n    } else {\n      this.coffeeInMachine += this.coffeeHolder;\n    }\n\n    this.coffeeHolder = 0;\n  }\n\n  async makeCoffee() {\n    if (this.coffeeInMachine < 20) {\n      this.$message({\n        message: \'To make a coffee you need at least 20 coffee units!\',\n        type: \'error\'\n      });\n      return;\n    }\n    this.makingCoffee = true;\n    await new Promise((resolve) => {\n      setTimeout(() => {\n        this.finishCoffeeMaking();\n        resolve();\n      }, 5000);\n    });\n  }\n\n  finishCoffeeMaking() {\n    this.coffeeInMachine = 0;\n    this.makingCoffee = false;\n    this.$message({\n      message: \'Your coffee is ready\',\n      type: \'success\'\n    });\n  }\n\n  get availableSpace() {\n    return this.capacity - this.coffeeInMachine;\n  }\n}\n\nexport default CoffeeMachine;\n<\/script>\n\n<style lang="scss" scoped>\n.mt-20 {\n  margin-top: 20px;\n}\n</style>\n'}}]);