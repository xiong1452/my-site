<template>
  <div class="app">
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from "../Menu";
export default {
  name: "test",
  components: {
    Menu,
  },
};
</script>

<style lang="less">
@import url("~@/styles/reset.less");
html,
body {
  background: #000;
  width: 100%;
  height: 100%;
}
.app {
  margin: 0 auto;
  border: 1px solid lightblue;
  width: 220px;
  height: 200px;
}
</style>