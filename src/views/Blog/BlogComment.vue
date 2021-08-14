<template>
    <MessageArea @commentSubmit="handleSubmit($event)" :title="'评论列表'" :subTitle="`${data.total}`"
                 :list="data.row" :isListLoading="isLoading"></MessageArea>
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
                postComment().then(r => {
                    this.data.row.unshift(r);
                    this.data.total++;
                    e();
                })
            },
            getNewComment() {
                getComments(this.getBlogId, this.page, this.limit).then(r => {
                    this.data.row = this.data.row.concat(r.row)
                    this.isLoading = false
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
            })
            this.$bus.$on("mainScroll", e => {
                let rank = 50;
                let des = 0;
                let top = Math.abs(e.scrollTop + e.clientHeight - e.scrollHeight);
                if (top < rank && !this.isLoading) {
                    des = this.data.total - this.data.row.length
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