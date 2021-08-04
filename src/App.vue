<template>
  <div id="app">
    <h2>VUE 组件</h2>
    <!-- <Avatar :url="StaticImage" :width="100" :height="100"></Avatar>
    <Avatar :url="StaticImage2" :width="100" :height="100"></Avatar>
    <Icon :type="'weixin'"></Icon>
    <Icon :type="'error'"></Icon> -->
    <Pager @changePage="pageChange" :current="current" :total="total" :visible-number="visibleNumber"></Pager>
  </div>
</template>

<script>
import Avatar from "./components/Avatar";
import StaticImage from "./assets/images/IDR_PROFILE_AVATAR_43@2x.png";
import StaticImage2 from "./assets/images/IDR_PROFILE_AVATAR_53@2x.png"
import Icon from "./components/Icon.vue"
import Pager from "./components/Pager.vue"

export default {
  name: "App",
  data() {
    return {
      current: 1,
      total: 402,
      visibleNumber: 8
    };
  },
  components: {
    Avatar,
    Icon,
    Pager
  },
  methods: {
    pageChange(result) {
      this.current = result;
      // console.log(result);
    }
  }
};
</script>

<style lang="less">
@import url('./styles/reset.less');

</style>
