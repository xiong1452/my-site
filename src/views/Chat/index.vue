<template>
    <div class="Chat-Container" ref="ChatContainer" @scroll="chatScroll($event)" v-loading.once="mainLoading">
        <MessageArea @commentSubmit="handleSubmit($event)" :title="'留言板'" :subTitle="`${data.total}`"
                     v-if="!mainLoading" :list="data.rows" :isListLoading="isLoading"></MessageArea>
    </div>
</template>

<script>
    import {getChat, postChat} from "@/api"
    import MessageArea from "@/components/MessageArea"
    import ShowMessage from "@/utils/ShowMessage";

    export default {
        name: "Chat",
        components: {
            MessageArea
        },
        data() {
            return {
                data: {},
                page: 1,
                limit: 10,
                isLoading: false,
                mainLoading: true,
                timer: null
            }
        },
        created() {
            getChat().then(r => {
                this.data = r;
                this.mainLoading = false
            })
        },
        methods: {
            handleSubmit(e) {
                postChat({
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
                getChat(this.getBlogId, this.page, this.limit).then(r => {
                    this.data.rows = this.data.rows.concat(r.rows)
                    this.isLoading = false
                    this.page++
                })
            },
            chatScroll(e) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    let rank = 100;
                    let des = 0;
                    let top = Math.abs(e.target.scrollTop + e.target.clientHeight - e.target.scrollHeight);
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
                    this.timer = null;
                }, 20)
                this.$bus.$emit('chatScroll', this.$refs.ChatContainer)
            },
        },
        beforeDestroy() {
            this.$bus.$emit('chatScroll', false);
        },
        destroyed() {
            this.$bus.$off('chatScroll', this.chatScroll);
        }
    }
</script>

<style scoped lang="less">
    .Chat-Container {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        padding: 25px 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    .message-area-container {
        width: 700px;
        margin: 0 auto;
    }
</style>