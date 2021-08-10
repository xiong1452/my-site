<template>
    <Layout>

        <template>
            <div class="blog-list-container" v-loading="isLoading" ref="container">
                <ul>
                    <li v-for="item in data.row" :key="item.id">
                        <div class="thumb">
                            <a href="">
                                <img
                                        :src="item.thumb"
                                        :alt="item.title"
                                        :title="item.title"
                                        v-if="item.thumb"
                                />
                            </a>
                        </div>
                        <div class="main">
                            <a href="">
                                <h2>{{ item.title }}</h2>
                            </a>
                            <div class="aside">
                                <span>日期：{{ formData(item.createDate) }}</span>
                                <span>浏览：{{ item.scanNumber }}</span>
                                <span>评论: {{ item.commentNumber }}</span>
                                <a href="/article/cate/8" class="">{{ item.category.name }}</a>
                            </div>
                            <div class="desc">
                                {{ item.description }}
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- 分页放到这里 -->
                <Page :total="data.total" :limit="routerInfo.limit" :visibleNumber="10" :current="routerInfo.page"
                      @changePage="handlePager($event)"></Page>
            </div>
        </template>
        <template #right>
            <BlogCategory></BlogCategory>
        </template>

    </Layout>

</template>

<script>
    import Page from "@/components/Pager";
    import Layout from "@/components/Layout"
    import {getBlogPra} from "@/api/index"
    import formData from "@/utils/FormData.js"
    import BlogCategory from "./BlogCategory";

    export default {
        name: "Blog",
        data() {
            return {
                data: {},
                isLoading: true
            }
        },
        components: {
            Page,
            Layout,
            BlogCategory
        },
        computed: {
            routerInfo() {
                const page = +this.$route.query.page || 1;
                const limit = +this.$route.query.limit || 10;
                const categoryId = +this.$route.params.categoryId || -1
                return {
                    page,
                    limit,
                    categoryId
                }
            }

        },
        created() {
            this.fetchDate().then(r => {
                this.data = r;
                this.isLoading = false
            })
        },
        methods: {
            formData,
            handlePager(num) {
                let query = {
                    page: num,
                    limit: this.routerInfo.limit
                }
                if (this.routerInfo.categoryId === -1) {
                    this.$router.push({
                        name: "blog",
                        query,
                    })
                } else {
                    this.$router.push({
                        name: 'category',
                        query,
                        params: {
                            categoryId: this.routerInfo.categoryId
                        }
                    })
                }
            },
            async fetchDate() {
                return await getBlogPra(this.routerInfo.page, this.routerInfo.limit, this.routerInfo.categoryId)
            }
        },
        watch: {
            $route() {
                this.isLoading = true;
                this.$refs.container.scrollTop = 0;
                this.fetchDate().then(r => {
                    this.data = r;
                    this.isLoading = false
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import "~@/styles/var.less";

    .blog-list-container {
        line-height: 1.7;
        position: relative;
        padding: 20px;
        overflow-y: auto;
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        > div:last-child {
            padding-top: 20px;
        }
    }

    li {
        display: flex;
        padding: 15px 0;
        border-bottom: 1px solid @gray;

        .thumb {
            flex: 0 0 auto;
            margin-right: 15px;

            img {
                display: block;
                max-width: 200px;
                border-radius: 5px;
            }
        }

        .main {
            flex: 1 1 auto;

            h2 {
                margin: 0;
            }
        }

        .aside {
            font-size: 12px;
            color: @gray;

            span {
                margin-right: 15px;
            }
        }

        .desc {
            margin: 15px 0;
            font-size: 14px;
        }
    }

    ::-webkit-scrollbar {
        width: .5rem;
        height: .5rem;
        background: hsla(0, 0%, 100%, 0.6);
    }

    ::-webkit-scrollbar-track {
        border-radius: 0;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 0;
        background-color: rgba(95, 95, 95, .4);
        transition: all .2s;
        border-radius: .5rem;

        &:hover {
            background-color: rgba(95, 95, 95, .7);
        }
    }
</style>

