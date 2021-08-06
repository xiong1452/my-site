<template>
    <div id="app">
        <Layout>
            <template #left>
                <div class="app-left">
                    <SideAside></SideAside>
                </div>
            </template>
            <template>
                <div class="app-main">
                    <RouterView></RouterView>
                </div>
            </template>

        </Layout>
    </div>
</template>

<script>
    import Layout from '@/components/Layout';
    import SideAside from '@/components/SideAside'

    export default {
        name: "App",
        components: {
            Layout,
            SideAside
        },
        methods: {}
    };
</script>

<style lang="less">
    @import url('./styles/reset.less');
    html, body{
        width: 100%;
        height: 100%;
    }
    #app {
        position: fixed;
        width: 100%;
        height: 100%;
    }
    .app-left{
        width: 250px;
        height: 100%;
        background: #000;
    }

</style>

