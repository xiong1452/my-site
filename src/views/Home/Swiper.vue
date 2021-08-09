<template>
    <div class="Swiper-special" ref="container" @mouseleave="handleMouseLeave($event)"
         @mousemove="handleMouseMove($event)">
        <div class="Swiper-Container" ref="inner" :style="imagePosition">
            <ImageLoader :src="src" :placeholder="placeholder" @load="handleLoad()"></ImageLoader>
        </div>
        <span class="Swiper-title" ref="title">
            {{ title }}
        </span>
        <span class="Swiper-description" ref="description">
            {{ description }}
        </span>

    </div>
</template>

<script>
    import ImageLoader from '@/components/ImageLoader';

    export default {
        name: "Swiper",
        props: {
            src: '',
            placeholder: '',
            title: '',
            description: '',
        },
        data() {
            return {
                descriptionWidth: 0,
                titleWidth: 0,
                containerSize: null,
                innerSize: null,
                mouseX: 0,
                mouseY: 0
            }
        },
        components: {
            ImageLoader,
        },
        mounted() {
            this.titleWidth = this.$refs.title.clientWidth;
            this.descriptionWidth = this.$refs.description.clientWidth;
            this.setSize();
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
            window.addEventListener("resize", this.setSize)

        },
        destroyed() {
            window.removeEventListener('resize', this.setSize);
        },
        methods: {
            handleLoad() {
                let Title = this.$refs.title;
                let Desc = this.$refs.description;
                setTimeout(() => {
                    Title.style.width = 0;
                    Title.style.opacity = 1;
                    Title.style.transition = 'width 750ms'
                    Title.clientWidth;
                    Title.style.width = this.titleWidth + 'px';
                }, 1000)

                setTimeout(() => {
                    Desc.style.width = 0;
                    Desc.style.opacity = 1;
                    Desc.style.transition = 'width 750ms'
                    Desc.clientWidth;
                    Desc.style.width = this.descriptionWidth + 'px';
                }, 1000)

            },
            setSize() {
                this.containerSize = {
                    width: this.$refs.container.clientWidth,
                    height: this.$refs.container.clientHeight
                }

                this.innerSize = {
                    width: this.$refs.inner.clientWidth,
                    height: this.$refs.inner.clientHeight
                }
            },
            handleMouseMove(e) {
                const rect = this.$refs.container.getBoundingClientRect();
                this.mouseX = e.clientX - rect.left;
                this.mouseY = e.clientY - rect.top;
            },
            handleMouseLeave(e) {
                this.mouseX = this.center.x;
                this.mouseY = this.center.y;
            }
        },
        computed: {
            imagePosition() {
                if (!this.innerSize && !this.containerSize) {
                    return;
                }
                const extraWidth = this.innerSize.width - this.containerSize.width;
                const extraHeight = this.innerSize.height - this.containerSize.height;
                const left = -extraWidth / this.containerSize.width * this.mouseX;
                const top = -extraHeight / this.containerSize.height * this.mouseY;
                return {
                    transform: `translate(${left}px, ${top}px)`
                }
            },
            center() {
                return {
                    x: this.containerSize.width / 2,
                    y: this.containerSize.height / 2
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "~@/styles/var.less";

    .Swiper-special {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
    }

    .Swiper-Container {
        width: 110%;
        height: 110%;
        position: absolute;
        left: 0;
        top: 0;
        transition: 0.1s;
    }

    span {
        top: 50%;
        position: absolute;
        text-shadow: 1px 0 0 rgba(255, 255, 255, .5), 0 1px 0 rgba(255, 255, 255, .5),
            0 -1px 0 rgba(255, 255, 255, .5), -1px 0 0 rgba(255, 255, 255, .5);
        opacity: 0;
        white-space: nowrap;
        overflow: hidden;
    }

    .Swiper-title {
        font-size: 2em;
        color: lightcoral;
        transform: translate(50px, 50px);
    }

    .Swiper-description {
        font-size: 1.2em;
        color: @gray;
        transform: translate(50px, 120px);
    }


</style>