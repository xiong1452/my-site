<template>
    <form id="data-form-container" ref="container" @submit.prevent="handleSubmit($event)" class="data-form-container">
        <div class="form-item">
            <div class="input-area">
                <input
                        type="text"
                        maxlength="10"
                        placeholder="用户昵称"
                        v-model="nickname"
                />
                <span class="tip">{{ nickname.length }}/10</span>
            </div>
            <div class="error">{{ nameError }}</div>
        </div>
        <div class="form-item">
            <div class="text-area">
        <textarea
                maxlength="300"
                placeholder="输入内容"
                v-model="commentText"
        ></textarea>
                <span class="tip">{{ commentText.length }}/300</span>
            </div>
            <div class="error">{{ commentError }}</div>
        </div>
        <div class="form-item">
            <div class="button-area">
                <button :disabled="isSubmit">
                    {{ isSubmit ? "提交中....." : "提交" }}
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import showMessage from "@/utils/ShowMessage"

    export default {
        name: "FormData",
        data() {
            return {
                nickname: '',
                commentText: '',
                isSubmit: false,
                nameError: '',
                commentError: ''
            }
        },
        methods: {
            handleSubmit(e) {
                if (!this.nickname) {
                    this.nameError = "缺少姓名"
                    return;
                } else {
                    this.nameError = ''
                }
                if (!this.commentText) {
                    this.commentError = "不能提交空评论"
                    return;
                } else {
                    this.commentError = ''
                }

                this.isSubmit = true;
                this.$emit('commentSubmit', () => {
                    showMessage({
                        content: '评论成功',
                        container: this.$refs.container,
                        type: 'success'
                    })
                    this.isSubmit = false
                    this.nickname = '';
                    this.commentText = ''
                })
            }
        }
    };
</script>

<style scoped lang="less">
    @import "~@/styles/var.less";

    .data-form-container {
        margin-bottom: 20px;
        overflow: hidden;
        margin-top: 40px;
        padding-left: 20px;
    }

    .form-item {
        margin-bottom: 8px;
    }

    .input-area {
        width: 50%;
        position: relative;
    }

    .text-area {
        position: relative;
    }

    .tip {
        position: absolute;
        right: 5px;
        bottom: 5px;
        color: #b4b8bc;
        font-size: 12px;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        box-sizing: border-box;
        border: 1px dashed @gray;
        outline: none;
        color: @words;
        font-size: 14px;
        border-radius: 4px;

        &:focus {
            border-color: @primary;
        }
    }

    input {
        padding: 0 15px;
        height: 40px;
    }

    textarea {
        resize: none;
        padding: 8px 15px;
        height: 120px;
    }

    .error {
        margin-top: 6px;
        color: @danger;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
    }

    button {
        position: relative;
        cursor: pointer;
        border: none;
        outline: none;
        width: 100px;
        height: 34px;
        color: #fff;
        border-radius: 4px;
        background: @primary;

        &:hover {
            background: darken(@primary, 10%);
        }

        &:disabled {
            background: lighten(@primary, 20%);
            cursor: not-allowed;
        }
    }
</style>