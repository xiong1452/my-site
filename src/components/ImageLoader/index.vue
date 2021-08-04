<template>
  <div>
    <img
      :src="changeSrc"
      @load="changeImg(1)"
      alt=""
      :style="{
        filter: `blur(${Gauss})`,
        transitionDuration: `${this.duration / 1000}s`,
      }"
    />
    <img v-if="key" class="special" :src="src" @load="changeImg(2)" alt="" />
  </div>
</template>

<script>
export default {
  name: "ImageLoader",
  data() {
    return {
      changeSrc: this.placeholder,
      key: true,
      Gauss: 18,
    };
  },
  methods: {
    changeImg(num) {
      if (num === 2) {
        this.key = !this.key;
        this.changeSrc = this.src;
        this.Gauss = 0;
        this.$emit("load", "图片加载完成");
      }
    },
  },
  props: {
    src: {
      type: String,
      require: true,
    },
    placeholder: {
      type: String,
      require: true,
    },
    duration: {
      type: Number,
      default: 1000,
    },
  },
};
</script>

<style lang="less" scoped>
div {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(4px);
  transition: all 0.5s cubic-bezier(0.85, 0.01, 0.5, 0.49);
  &.special {
    visibility: hidden;
  }
}
</style>