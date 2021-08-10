<template>
    <div class="app-container">
        <RightList :list="list" @ListClick="handleClick($event)"></RightList>
    </div>

</template>

<script>
    import RightList from "./RightList";

    export default {
        name: "test",
        data() {
            return {
                list: [{
                    name: 'a',
                    isSelect: false
                }, {
                    name: 'b',
                    isSelect: true,
                    children: [{
                        name: 'b-1',
                        isSelect: true
                    }]
                }, {
                    name: 'c',
                    isSelect: false,
                    children: [{
                        name: 'c-1',
                        isSelect: false
                    }, {
                        name: 'c-1',
                        isSelect: false
                    }]
                }, {
                    name: 'd',
                    isSelect: false,
                    children: [{
                        name: 'd-1',
                        isSelect: false
                    }, {
                        name: 'd-1',
                        isSelect: false
                    }, {
                        name: "d-1",
                        isSelect: false,
                        children: [{
                            name: 'd-1-1',
                            isSelect: false
                        }]
                    }]
                },]
            }
        },
        components: {
            RightList
        },
        methods: {
            handleClick(e) {
                console.log(e);
            }
        }
    }
</script>

<style lang="less">
    @import "~@/styles/reset.less";

    html, body {
        width: 100%;
        height: 100%;
    }

    .app-container {
        width: 250px;
        height: 100%;
    }
</style>