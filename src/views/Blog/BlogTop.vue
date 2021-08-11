<template>
    <div class="Blog-Top-Container" v-if="list">
        <h2>目录</h2>
        <RightList :list="list" @ListClick="handleList($event)"></RightList>
    </div>
</template>

<script>
    import RightList from "./RightList";
    export default {
        name: "BlogTop",
        props: {
          list: {
              type: Array,
              require: true
          }
        },
        components: {
            RightList
        },
        methods: {
            handleList(item) {
                location.hash = item.anchor
            }
        }
    }
</script>

<style scoped lang="less">

        h2{
            font-size: 18px;
            font-weight: bold;
            margin-left: 20px;
            margin-bottom: 20px;
            margin-top: 20px;
        }

</style>