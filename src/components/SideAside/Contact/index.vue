<template>
    <div class="contact-container">
        <ul class="contact-list">
            <li class="contact-item">
                <a :href="data.github">
                    <Icon :type="'github'"></Icon>
                </a>
                <a :href="data.github"> {{ data.githubName }} </a>
            </li>
            <li class="contact-item">
                <a :href="`mailto:${data.mail}`">
                    <Icon :type="'mail'"></Icon>
                </a>
                <a :href="`mailto:${data.mail}`"> {{ data.mail }} </a>
            </li>
            <li class="contact-item">
                <a href="">
                    <Icon :type="'qq'"></Icon>
                </a>
                <a href=""> {{data.qq}} </a>
                <div class="contact-hidden">
                    <div class="contact-hidden-img">
                        <img :src="qqImg" alt=""/>
                    </div>
                </div>
            </li>
            <li class="contact-item">
                <a href="">
                    <Icon :type="'weixin'"></Icon>
                </a>
                <a href=""> {{data.weixin}} </a>
                <div class="contact-hidden">
                    <div class="contact-hidden-img">
                        <img :src="weChatImg" alt=""/>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import Icon from "@/components/Icon";
    import qqImg from "@/assets/images/qq.jpg";
    import weChatImg from "@/assets/images/weixin.jpg";

    export default {
        name: "Contact",
        data() {
            return {
                qqImg,
                weChatImg,
            };
        },
        components: {
            Icon,
        },
        computed: {
            data() {
                return this.$store.state.setting.data
            },
        }
    };
</script>

<style scoped lang="less">
    @import url("~@/styles/var.less");

    .widthHeight() {
        width: 100%;
        height: 100%;
    }

    .contact-container {
        display: flex;
        .widthHeight();

        .contact-list {
            display: flex;
            flex-flow: wrap;
            flex-direction: column;
            justify-content: flex-end;
            .widthHeight();
            color: @lightWords;

            .contact-item {
                display: flex;
                padding-left: 10px;
                box-sizing: border-box;
                position: relative;
                margin-top: 10px;

                a:nth-child(2) {
                    margin-left: 10px;
                    align-self: center;
                    flex-grow: 1;
                }

                a:first-child i {
                    font-size: 35px;
                }
            }
        }
    }

    li:hover {
        color: @primary;
        cursor: pointer;

        .contact-hidden {
            .contact-hidden-img {
                transform: scaleY(1);
            }

            .contact-hidden-triangle {
                display: block;
            }
        }
    }

    .contact-hidden {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;

        :hover {
            cursor: pointer;
        }
    }

    .contact-hidden-img {
        width: 180px;
        height: 180px;
        position: absolute;
        bottom: 30px;
        text-align: center;
        transform: scaleY(0);
        transform-origin: bottom left;
        transition: all 0.3s linear;
        left: 0;
        right: 0;
        margin: 0 auto;

        img {
            height: 100%;
            border-radius: 6px;
        }

        &::after {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            box-sizing: border-box;
            border: 6px solid transparent;
            border-top-color: white;
            left: 50%;
            transform: translateX(-50%);
            bottom: -10px;
            // display: none;
        }
    }
</style>