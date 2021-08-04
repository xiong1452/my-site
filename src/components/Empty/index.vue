<template>
  <div class="empty-container">
    <div class="empty-item">
      <Icon :type="'empty'"></Icon>
    </div>
    <div class="empty-text">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  name: "Empty",
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
  components: {
    Icon,
  },
};
</script>

<style lang='less' scoped>
@import url("../../styles/var.less");
.empty-container {
  height: 100%;
  .flex-center();
  align-content: center;
  flex-wrap: wrap;
  .empty-item {
    width: 100%;
    text-align: center;
    i {
      font-size: 100px;
      color: @gray;
    }
  }
  .empty-text {
    margin-top: 30px;
    color: @gray;
    font-weight: bold;
  }
}
</style>