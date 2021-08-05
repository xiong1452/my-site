<template>
  <div class="app">
    <Contact></Contact>
  </div>
</template>

<script>
import Contact from "../Contact";
export default {
  name: "test",
  components: {
    Contact,
  },
};
</script>
<style lang="less">
@import "../../styles/reset.less";
html,
body {
  width: 100%;
  height: 100%;
  background: #000;
}
.app {
  width: 240px;
  height: 200px;
  border: 1px solid lightblue;
  background: #000;
  position: absolute;
  top: 300px;
  left: 300px;
}
</style>