<template>

    <div class="List-Container">
        <ul class="List-Item">
            <li class="List-List" v-for="(item, n) in list" :key="n">
                <span class="List-Content" @click="handleClick(item)"
                      :class="{active: item.isSelect}">{{ item.name }}</span>
                <span :class="{active: item.isSelect}" class="List-Count" v-if="item.articleCount">{{ item.articleCount }}篇</span>
                <RightList v-if="item.children" :list="item.children" @ListClick="handleClick"></RightList>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "RightList",
        props: {
            list: {
                type: Array,
                default: () => []
            }
        },
        methods: {
            handleClick(item) {
                if (!item.isSelect) {
                    this.$emit("ListClick", item);
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import url("~@/styles/var.less");

    .List-Container {
        width: 100%;
        height: 100%;
    }

    .List-List {
        /*height: 35px;*/
        display: flex;
        flex-wrap: wrap;
        line-height: 40px;
        font-size: 16px;
        min-height: 35px;
        padding-left: 25px;
        box-sizing: border-box;

        span {
            align-self: baseline;
            cursor: pointer;

            &.active {
                color: @primary;
                font-weight: bold;
            }
        }
    }

    span.List-Count {
        padding-left: 10px;
        font-size: 12px;
        color: @gray;
    }
</style>