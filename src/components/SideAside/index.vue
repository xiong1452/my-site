<template>
    <div class="side-aside-container">
        <div class="Avatar">
            <template v-if="data">
                <Avatar
                        :url="data.avatar"
                        :width="150"
                        :height="150"
                ></Avatar>
            </template>

        </div>
        <div class="Menu">
            <h1>熊宇星的博客</h1>
            <Menu></Menu>
        </div>

        <template v-if="data">
            <div class="Contact">
                <Contact></Contact>
            </div>
            <div class="footer">{{ data.icp }}</div>
        </template>

    </div>
</template>

<script>
    import Avatar from "@/components/Avatar";
    import Contact from "./Contact";
    import Menu from "./Menu";

    export default {
        name: "SideAside",
        components: {
            Avatar,
            Contact,
            Menu,
        },
        computed: {
            data() {
                return this.$store.state.setting.data
            }
        }
    };
</script>

<style lang="less" scoped>
    @import url("~@/styles/var.less");

    html,
    .side-aside-container {
        height: 100%;
        width: 100%;
        position: relative;
    }

    .Avatar {
        display: flex;
        justify-content: center;
        padding: 30px;
    }

    .Menu {
        height: 30%;
        margin-bottom: 50px;
    }

    h1 {
        color: @gray;
        text-align: center;
        font-size: 30px;
        margin-bottom: 20px;
    }

    .Contact {
        height: 25%;
        margin-bottom: 50px;
    }

    .footer {
        position: absolute;
        padding-top: 15px;
        padding-left: 30px;
        color: @gray;
        align-items: center;
        bottom: 40px;
    }
</style>