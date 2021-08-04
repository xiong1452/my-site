<template>
  <div id="app">
    <h2>VUE 组件</h2>
    <Pager @changePage="pageChange" :current="current" :total="total" :visible-number="visibleNumber"></Pager>
  </div>
</template>

<script>
import Pager from "../Pager"

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
@import url('../../styles/reset.less');


</style>