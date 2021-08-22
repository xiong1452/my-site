<template>
    <div class="category-container" v-loading.center="isLoading">
        <h1>文章分类</h1>
        <RightList :list="list" @ListClick="handleClick($event)"></RightList>
    </div>
</template>

<script>
    import RightList from "./RightList";
    import {getBlogType,getBlogPra} from "@/api/index"

    export default {
        name: "BlogCategory",
        components: {
            RightList
        },
        data() {
            return {
                data: [],
                isLoading: true
            }
        },
        created() {
            getBlogType().then(r => {
                this.data = r;
                this.isLoading = false;
            })
        },
        computed: {
            getCategory() {
                return this.$route.params.categoryId || -1
            },
            list() {
                const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0);
                const result = [
                    {name: "全部", id: -1, articleCount: totalArticleCount},
                    ...this.data
                ]
                return result.map(it => ({
                    ...it,
                    isSelect: it.id === this.getCategory
                }))
            },
        },
        methods: {
            handleClick(e) {
                let query = {
                    page: 1,
                    limit: 10
                }
                if (e.id === -1) {
                    this.$router.push({
                        name: "blog",
                        query,
                    })
                } else {
                    this.$router.push({
                        name: 'category',
                        query,
                        params: {
                            categoryId: e.id
                        }
                    })
                }
                this.$emit('categoryEvent', e)
            }
        }
    }
</script>

<style scoped lang="less">
    @import url("~@/styles/var.less");

    .category-container {
        width: 300px;
        height: 100%;
        position: relative;

        h1 {
            box-sizing: border-box;
            padding: 20px 0 20px 20px;
            font-weight: bold;
        }
    }


</style>