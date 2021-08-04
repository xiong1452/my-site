<template>
  <div class="pager-container" v-if="totalPager >= 1">
    <ul class="pager-container-item">
      <li class="pager-item-Lcricle" @click.prevent="handleCurrent($event, 1)">
        <a :class="{ disable: current === 1 }" href="">
          <Icon :type="'doubleArrowLeft'"></Icon>
        </a>
      </li>
      <li @click.prevent="handleCurrent($event, current-1)"><a :class="{ disable: current === 1 }" href=""> &lt; </a></li>
    </ul>
    <ul class="pager-container-item">

      <li v-for="(item, n) in numbers" :key="n" @click.prevent ="handleCurrent($event, item)" :class="{active: item === current}"><a href="">{{ item }}</a></li>

    </ul>
    <ul class="pager-container-item">
      <li @click.prevent="handleCurrent($event, current+1)">
        <a :class="{ disable: current === totalPager }" href=""> &gt; </a>
      </li>
      <li class="pager-item-special pager-item-Rcricle" @click.prevent="handleCurrent($event, totalPager)">
        <a :class="{ disable: current === totalPager }" href="">
          <Icon :type="'doubleArrowRight'"></Icon
        ></a>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  name: "Pager",
  data() {
    return {};
  },
  props: {
    //当前页码
    current: {
      type: Number,
      default: 1,
    },
    //总数据量
    total: {
      type: Number,
      default: 0,
    },
    //页容量
    limit: {
      type: Number,
      default: 10,
    },
    //可见页码数
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    totalPager() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMin() {
      let min = this.current - Math.floor( this.visibleNumber / 2 );
      if(min < 1){
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMin - 1 + this.visibleNumber;
      if(max > this.totalPager){
        max = this.totalPager;
      }
      return max;
    },
    numbers() {
      let result = [];
      for(let i = this.visibleMin; i <= this.visibleMax; i++){
        result.push(i);
      }
      return result;
    }
  },
  methods: {
    handleCurrent(e, newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.totalPager) {
        newPage = this.totalPager
      }
      if(this.current === newPage){
        return ;
      }
      this.$emit('changePage', newPage);
    }
  },
  components: {
    Icon,
  },
};
</script>

<style lang="less" scoped>
@import url("../styles/var.less");
.flexCenter() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pager-container {
  .flexCenter();
}

.pager-container ul {
  display: flex;
}

.pager-container-item li {
  .flexCenter();
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  border: 1px solid @gray;
  border-right: none;
  user-select: none;
}

.pager-item-special.pager-item-Rcricle {
  border-right: 1px solid @gray;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.pager-container-item .pager-item-Lcricle {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

li:hover {
  background: lighten(@gray, 20%);
  cursor: pointer;
  a {
    color: @primary;
    &.disable {
      color: @lightWords;
    }
  }
}

li {
  &.active {
    font-weight: bold;
    color: @primary;
  }
}
</style>