<template>
    <div class="Blog-Detail-Container" v-if="article.id">
        <h1>
            {{ article.title }}
        </h1>
        <div class="Blog-Detail-Description">
            <span>日期: {{ formdata(article.createDate) }}</span>
            <span>浏览: {{ article.scanNumber }}</span>
            <span><a> 评论: {{ article.commentNumber }} </a></span>
            <span><a> 分类: {{ article.category.name }} </a></span>
        </div>
        <div class="Blog-Detail-Main markdown-body" v-html="article.htmlContent" ></div>
    </div>
</template>

<script>
    import formdata from "@/utils/FormData.js"
    import  "@/styles/Markdown.css"
    import "highlight.js/styles/github.css"
    export default {
        name: "BlogDetail",
        props: {
            article: {
                type: Object,
                require: true
            }
        },
        methods: {
            formdata
        }
    }
</script>

<style lang="less" scoped>
    @import url("~@/styles/var.less");
    h1{
        font-size: 2em;
        font-weight: bold;
        padding-top: 40px;
        margin: 0 0 30px 20px;
    }
    .Blog-Detail-Description{
        display: flex;
        margin-left: 20px;
        margin-bottom: 40px;
        span{
            padding-right: 20px;
            font-size: 14px;
            color: @gray
        }
    }
    .Blog-Detail-Main{
        margin-left: 20px;
    }
</style>