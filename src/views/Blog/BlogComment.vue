<template>
    <MessageArea @commentSubmit="handleSubmit($event)" :title="'评论列表'" :subTitle="`${data.total}`"
                 :list="data.row"></MessageArea>
</template>

<script>
    import MessageArea from "@/components/MessageArea"
    import {getComments, postComment} from "@/api/index"

    export default {
        name: "BlogComment",
        data() {
            return {
                data: {}
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
        },
    }
</script>

<style scoped>

</style>