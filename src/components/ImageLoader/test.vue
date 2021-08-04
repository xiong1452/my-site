<template>
  <div class="app">
    <ImageLoader
      @load="sonEvent($event)"
      :src="completeImg"
      :placeholder="asynImg"
    ></ImageLoader>
  </div>
</template>

<script>
import ImageLoader from "../ImageLoader";
export default {
  data() {
    return {
      asynImg:
        "https://konachan.net/data/preview/2a/89/2a8980526c43f553ee7e4701be193635.jpg",
      completeImg:
        "https://konachan.net/image/2a8980526c43f553ee7e4701be193635/Konachan.com%20-%20329909%20blonde_hair%20blush%20book%20braids%20brown_eyes%20catgirl%20chibi%20drink%20fang%20flowers%20long_hair%20maid%20original%20pink_hair%20sketch%20skirt%20sleeping%20twintails%20watermark.jpg",
    };
  },
  components: {
    ImageLoader,
  },
  methods: {
    sonEvent(result) {
      console.log(result);
    },
  },
};
</script>

<style lang="less">
.app {
  width: 800px;
  height: 800px;
  border: 1px solid lightblue;
  box-sizing: border-box;
}
</style>