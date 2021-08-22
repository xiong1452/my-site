<template>
    <ul class="data-list-container">
        <li v-for="(item,n) in list" :key="n">
            <Avatar :url="item.avatar" :size="44"/>
            <div class="data">
                <div class="nickname">{{ item.nickname }}</div>
                <div class="content">{{ item.content }}</div>
                <div class="time">{{ formdata(item.createDate, true) }}</div>
            </div>
        </li>
    </ul>
</template>

<script>
    import Avatar from "@/components/Avatar";
    import formdata from "@/utils/FormData";

    export default {
        name: "FormList",
        components: {
            Avatar,
        },
        props: {
            list: {
                type: Array,
                default: () => [],
            },
        },
        methods: {
            formdata,
        },
    };
</script>

<style scoped lang="less">
    @import "~@/styles/var.less";

    .data-list-container {
        list-style: none;
        padding-left: 20px;
        margin-top: 20px;
    }

    li {
        display: flex;
        border-bottom: 1px solid lighten(@gray, 20%);
        padding: 15px 0;
        align-items: center;

        img {
            min-width: 50px;
            min-height: 50px;

        }
    }

    .avatar-container {
        margin-right: 15px;
    }

    .nickname {
        color: darken(@success, 10%);
        margin-bottom: 10px;
    }

    .content {
        font-size: 14px;
    }

    .data {
        flex: 1 1 auto;
        position: relative;
        margin-left: 15px;
    }

    .time {
        position: absolute;
        right: 0;
        top: 5px;
        font-size: 12px;
        color: @gray;
    }
</style>