<template>
  <div id="app">
    <h2>VUE 组件</h2>
    <Avatar :url='url' :width='100' :height='100' />
  </div>
</template>

<script>
import Src from '../../assets/images/IDR_PROFILE_AVATAR_43@2x.png'
import Avatar from '../Avatar';

console.log(Src);

export default {
  name: "App",
  data() {
    return {
      url: Src
    };
  },
  components: {
    Avatar,
  },
};
</script>

<style lang="less">
@import url('../../styles/reset.less');


</style>