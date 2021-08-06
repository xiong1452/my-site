<template>
    <div class="app">
        <Layout>
            <template #left>
                <div class="left">
                    左边栏区域，宽度适应内容，溢出隐藏
                </div>
            </template>
            <div class="main">
                主区域，宽度占满剩余空间，溢出隐藏
            </div>
        </Layout>
    </div>
</template>

<script>
import Layout from '../Layout'
export default {
    name: 'test',
    components: {
        Layout
    }
}
</script>

<style lang="less" scoped>
    @import url("~@/styles/reset.less");
    .app{
        width: 60%;
        height: 800px;
        border: 1px solid lightblue;
        margin: 0 auto;
    }
    .left{
        width: 250px;
        height: 100%;
        background: lightcoral;
    }
    .main{
        width: 100%;
        height: 100%;
        background: lightgreen;
    }
    .right{
        width: 200px;
        height: 100%;
        background: lightgoldenrodyellow;
    }

</style>