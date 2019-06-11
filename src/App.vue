<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.el-dialog__header {
  background: rgb(235,235,235) !important;
}
.el-dialog__body {
  padding: 0 !important;
}
.el-table .cell{
  text-align: center;
}
</style>
