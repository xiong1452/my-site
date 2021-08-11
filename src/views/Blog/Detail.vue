<template>
    <Layout>
        <template>
            <div class="Detail-main" v-loading="isLoading">
                <BlogDetail :article="data"></BlogDetail>
                <BlogComment v-if="!isLoading"></BlogComment>
            </div>
        </template>
        <template #right>
            <div class="Detail-right" v-loading.center="isLoading">
                <BlogTop :list="data.toc"></BlogTop>
            </div>
        </template>
    </Layout>
</template>

<script>
    import BlogDetail from "./BlogDetail";
    import BlogTop from "./BlogTop";
    import Layout from "@/components/Layout"
    import {getBlog} from "@/api/index"
    import BlogComment from "./BlogComment";

    export default {
        name: "Detail",
        data() {
            return {
                data: {},
                isLoading: true
            }
        },
        computed: {
            getBlogId() {
                return +this.$route.params.id
            }
        },
        created() {
            getBlog(this.getBlogId).then(r => {
                this.data = r;
                this.isLoading = false
            })
        },
        components: {
            BlogTop,
            BlogDetail,
            Layout,
            BlogComment
        },
    }
</script>

<style scoped lang="less">
    .Detail-main {
        width: 100%;
        height: 100%;
        position: relative;
        overflow-y: auto;
        scroll-behavior: smooth;
    }

    .Detail-right {
        width: 300px;
        height: 100%;
        position: relative;
    }

</style>