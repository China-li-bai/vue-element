<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<div>-->
      <!--<p>-->
        <!--If Element is successfully added to this project, you'll see an-->
        <!--<code v-text="'<el-button>'"></code>-->
        <!--below-->
      <!--</p>-->
      <!--<el-button>el-button</el-button>-->
    <!--</div>-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style lang="less">
  @import "assets/styles/reset";
#app {
  width: 100%;
  height: 100%;
}
</style>
