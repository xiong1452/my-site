<template>
  
    <div class="app">
        <h1>Vue 组件</h1>
        <Empty  :text="text"></Empty>
    </div>

</template>

<script>
import Empty from '../Empty'
export default {
    data() {
        return {
            text: '无显示'
        }
    },
    components: {
        Empty
    }
}
</script>

<style>
@import url("../../styles/reset.less");
body, html{
    width: 100%;
    height: 100%;
}

.app{
    width: 800px;
    height: 800px;
}

</style>