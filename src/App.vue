<template>
  <div id="app">
    <h2>VUE 组件</h2>
    <Avatar :url="StaticImage" :width="100" :height="100"></Avatar>
    <Avatar :url="StaticImage2" :width="100" :height="100"></Avatar>
    <Icon :type="'weixin'"></Icon>
    <Icon :type="'error'"></Icon>
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
import StaticImage from "./assets/images/IDR_PROFILE_AVATAR_43@2x.png";
import StaticImage2 from "./assets/images/IDR_PROFILE_AVATAR_53@2x.png"
import Icon from "./components/Icon.vue"

export default {
  name: "App",
  data() {
    return {
      StaticImage,
      StaticImage2
    };
  },
  components: {
    Avatar,
    Icon
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

.iconfont{
  font-size: 24px;
  color: red;
}
</style>
