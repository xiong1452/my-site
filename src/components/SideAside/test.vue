<template>
  <div class="app">
    <side-aside></side-aside>
  </div>
</template>

<script>
import SideAside from "../SideAside";
export default {
  name: "test",
  components: {
    SideAside,
  },
};
</script>

<style lang="less">
@import url("~@/styles/reset.less");
html,
body {
  width: 100%;
  height: 100%;
}
.app {
  height: 100%;
  width: 250px;
  background: #000;
  border: 1px solid lightblue;
}
</style>
