<template>
  <div id="app">
    <h2>VUE 组件</h2>
    <Avatar :url="StaticImage" :width="100" :height="100"></Avatar>
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
import StaticImage from "./assets/images/IDR_PROFILE_AVATAR_43@2x.png";

export default {
  name: "App",
  data() {
    return {
      StaticImage,
    };
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
