<template>
    <div class="Menu-container">
        <ul class="Menu-list">
            <li
                    class="Menu-item"
                    v-for="item in items"
                    :key="item.link"
            >
                <RouterLink :to="item.link" :exact="item.startWith" active-class="active">
                    <div class="Menu-Icon">
                        <Icon :type="item.icon"></Icon>
                    </div>
                    <span>{{ item.title }}</span>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
    import Icon from "@/components/Icon";

    export default {
        name: "Menu",
        data() {
            return {
                items: [
                    {
                        link: "/",
                        title: "首页",
                        icon: "home",
                        startWith: true,
                    },
                    {
                        link: "/blog",
                        title: "文章",
                        icon: "blog",
                        startWith: false,
                    },
                    {
                        link: "/about",
                        title: "关于我",
                        icon: "about",
                        startWith: true,
                    },
                    {
                        link: "/code",
                        title: "项目&效果",
                        icon: "code",
                        startWith: true,
                    },
                    {
                        link: "/chat",
                        title: "留言板",
                        icon: "chat",
                        startWith: true,
                    },
                ],
            };
        },
        methods: {
            isSelected(item) {
                let link = item.link.toLowerCase();
                let myPathName = location.pathname.toLowerCase();
                if (item.startWith) {
                    return myPathName.startsWith(link);
                }
                return link === myPathName;
            },
        },
        components: {
            Icon,
        },
    };
</script>

<style lang="less" scope>
    @import url("~@/styles/var.less");

    .Menu-container {
        width: 100%;
        height: 100%;
        color: @lightWords;

        .Menu-list {
            display: flex;
            flex-direction: column;
            // justify-content: space-around;
            height: 100%;
        }
    }

    .Menu-item {
        display: flex;
        flex-grow: 1;
        /*align-items: center;*/
        box-sizing: border-box;

        a {
            display: flex;
            flex-grow: 1;

            span {
                align-self: center;
                margin-left: 15px;
            }
        }

        .active {
            background: darken(@words, 10%);
            color: @primary;
        }

        &:hover {
            background: darken(@words, 10%);
            color: @primary;
            cursor: pointer;
        }

        .Menu-Icon {
            padding-left: 40px;
            align-self: center;

            i {
                font-size: 35px;
            }
        }
    }
</style>