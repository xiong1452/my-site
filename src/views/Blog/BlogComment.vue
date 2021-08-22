<template>
    <MessageArea @commentSubmit="handleSubmit($event)" :title="'评论列表'" :subTitle="`${data.total}`"
                 :list="data.rows" :isListLoading="isLoading"></MessageArea>
</template>

<script>
    import MessageArea from "@/components/MessageArea"
    import {getComments, postComment} from "@/api/index"
    import ShowMessage from "@/utils/ShowMessage";

    export default {
        name: "BlogComment",
        data() {
            return {
                data: {},
                page: 1,
                limit: 10,
                isLoading: false
            }
        },
        components: {
            MessageArea
        },
        methods: {
            handleSubmit(e) {
                postComment({
                    blogId: this.getBlogId,
                    content: e.commentText,
                    nickname: e.nickname
                }).then(r => {
                    if(r){
                        this.data.rows.unshift(r);
                        this.data.total++;
                        e.callback(true);
                    }else{
                        e.callback(false)
                    }

                })
            },
            getNewComment() {
                getComments(this.getBlogId, this.page, this.limit).then(r => {
                    this.data.rows = this.data.rows.concat(r.rows)
                    this.isLoading = false
                    this.page++
                })
            }

        },
        computed: {
            getBlogId() {
                return this.$route.params.id
            }
        },
        created() {
            getComments(this.getBlogId).then(r => {
                this.data = r;
                this.page++
            })
            this.$bus.$on("mainScroll", e => {
                let rank = 50;
                let des = 0;
                let top = Math.abs(e.scrollTop + e.clientHeight - e.scrollHeight);
                if (top < rank && !this.isLoading) {
                    des = this.data.total - this.data.rows.length
                    if (!(des >= 10)) {
                        this.limit = des
                    }
                    if (des > 0) {
                        this.isLoading = true
                        this.getNewComment();
                    } else if (top === 0) {
                        ShowMessage({
                            type: 'warn',
                            content: "没有更多评论"
                        })
                    }
                }
            })
        },
    }
</script>

<style scoped>

</style>