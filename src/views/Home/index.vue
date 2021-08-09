<template>

    <div class="Home-Container" ref="container" @wheel="handleWheel($event)">
        <ul class="Swiper-list" :style="{marginTop: moveMarginTop}" @transitionend="handletransition($event)">
            <li v-for="(item,n) in banner" :key="n" class="Swiper-Item">
                <Swiper v-if="slowLoader(n)" :src="item.bigImg" :placeholder="item.midImg" :title="item.title"
                        :description="item.description"></Swiper>
            </li>
        </ul>
        <div class="Swiper-Icon Swiper-Icon-Up" v-show="index > 1" @click="changeSwiperIndex(index - 1)">
            <Icon :type="'arrowUp'"></Icon>
        </div>
        <div class="Swiper-Icon Swiper-Icon-Down" v-show="index < banner.length" @click="changeSwiperIndex(index + 1)">
            <Icon :type="'arrowDown'"></Icon>
        </div>
        <ul class="Swiper-Dots">
            <li v-for="item in banner.length" :class="{active: item === index}" :key="item"
                @click="changeSwiperIndex(item)"></li>
        </ul>
    </div>

</template>

<script>
    import {getBanners} from '@/api/index'
    import Swiper from "./Swiper.vue"
    import Icon from "@/components/Icon"

    export default {
        name: "Home",
        data() {
            return {
                banner: [],
                index: 1,
                moveLength: 0,
                wheel: false,
                render1: false,
                render2: false,
                render3: false
            }
        },
        created() {
            getBanners('/api/banner').then(r => {
                this.banner = r;
            });
            // for(let i = 0; i < this.banner.length; i++){
            //     console.log(1);
            //     this.$set(this, 'render' + i, false);
            // }
        },
        updated() {
            this.moveLength = this.$refs.container.clientHeight;
            if (this.render1 && this.render2 && this.render3) {
                return;
            }
            this.render1 = true;
            if (this.index === 2) {
                this.render2 = true;
            }
            if (this.index === 3) {
                this.render3 = true;
            }
            // this.$data['render' + this.index -1] = true;
        },
        computed: {
            moveMarginTop() {
                return -(this.index - 1) * this.moveLength + 'px'
            }
        },
        methods: {
            changeSwiperIndex(result) {
                this.index = result;
            },
            handleWheel(e) {
                if (!this.wheel && e.deltaY < 0) {
                    if (this.index !== 1) {
                        this.index--;
                        this.wheel = true;
                    } else {
                        this.wheel = false
                    }
                }
                if (!this.wheel && e.deltaY > 0) {
                    if (this.index !== 3) {
                        this.index++;
                        this.wheel = true;
                    } else {
                        this.wheel = false
                    }
                }
            },
            handletransition(e) {
                this.wheel = false
            },
            slowLoader(n) {
                if (n === 0) {
                    return this.render1
                }
                if (n === 1) {
                    return this.render2
                }
                if (n === 2) {
                    return this.render3
                }
                // console.log(this);
                // this.$set(this, 'render' + n, false);
                // return this.$data.push({
                //     ['render' + n]: false
                // })
                // let r = 'render' + n
                // console.log(r);
                // console.log(this.$data);
                // return ;

            }
        },
        components: {
            Swiper,
            Icon
        }
    }
</script>

<style lang="less" scoped>
    @import url("~@/styles/var.less");

    .WidthHeight() {
        width: 100%;
        height: 100%;
    }

    .Home-Container {
        .WidthHeight();
        overflow: hidden;
        position: relative;
    }

    .Swiper-list {
        .WidthHeight();
        transition: 500ms;
    }

    .Swiper-Item {
        .WidthHeight()
    }

    .Swiper-Icon {
        position: absolute;
        transform: translateX(-50%);
        color: @gray;
        cursor: pointer;

        i {
            font-size: 30px;
            font-weight: bold;
        }

        &.Swiper-Icon-Down {
            right: 50%;
            bottom: 10px;
            animation: Down 2s infinite;
        }

        &.Swiper-Icon-Up {
            right: 50%;
            top: 10px;
            animation: Up 2s infinite;
        }
    }

    .Swiper-Dots {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;

        li {
            width: 8px;
            height: 8px;
            border: 1px solid lightblue;
            border-radius: 50%;
            margin-bottom: 10px;
            cursor: pointer;
            transition: 500ms;

            &.active {
                background: lightblue;
                border-color: @gray;
            }
        }
    }

    @keyframes Down {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-15px);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes Up {
        0% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(15px);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>