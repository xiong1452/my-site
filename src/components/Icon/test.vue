<template>
  <div id="app">
    <h2>VUE 组件</h2>
    <div class="special">
        <Icon  v-for="(item, n) in type" :key="n" :type="item" />
    </div>
    
  </div>
</template>

<script>
import Icon, { type } from "../Icon";


export default {
  name: "App",
  data() {
    return {
      type,
    };
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less">
@import url("../../styles/reset.less");


.iconfont{
    font-size: 100px;
    color: lightblue;
}

.special{
    width: 800px;
    height: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
</style>