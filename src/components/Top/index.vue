<template>
    <div class="Top-Container" v-show="isActive" @click="handleClick($event)">
        Top
    </div>
</template>

<script>
    export default {
        name: "Top",
        data() {
            return {
                isActive: false,
                operateDom: false,
            }
        },
        created() {
            this.$bus.$on('mainScroll', this.EventFun)
            this.$bus.$on('BlogListScroll', this.EventFun)
        },
        methods: {
            handleClick(e) {
                this.operateDom.scrollTop = 0;
            },
            EventFun(e) {
                if (e === false) {
                    this.isActive = false
                    this.operateDom = false
                    return;
                }
                if (this.operateDom === false) {
                    this.operateDom = e
                }
                this.isActive = e.scrollTop > 1000;
            }
        }
    }
</script>

<style lang="less" scoped>
    @import url(~@/styles/var.less);

    .Top-Container {
        position: fixed;
        width: 50px;
        height: 50px;
        border: 1px solid lightblue;
        bottom: 20px;
        border-radius: 50%;
        background-color: @primary;
        line-height: 50px;
        text-align: center;
        color: white;
        right: 20px;
        cursor: pointer;
        transition: 500ms;
    }
</style>