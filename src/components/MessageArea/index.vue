<template>
    <div class="message-area-container">
        <FormData @commentSubmit="handleSubmit($event)"></FormData>
        <h3>
            {{ title }}
            <span>({{ subTitle }})</span>
        </h3>
        <FormList :list="list"></FormList>
        <div class="loading" v-loading="isListLoading"></div>
    </div>
</template>

<script>
    import FormList from "./FormList"
    import FormData from "./FormData";

    export default {
        props: {
            name: 'MessageArea',
            title: {
                type: String,
                default: "",
            },
            subTitle: {
                type: String,
                default: "",
            },
            list: {
                type: Array,
                default: () => [],
            },
            isListLoading: {
                type: Boolean,
                default: false,
            },
        },
        components: {
            FormData,
            FormList
        },
        methods: {
            handleSubmit(e) {
                this.$emit('commentSubmit', e);
            }
        }
    };
</script>

<style scoped lang="less">
    .loading {
        position: relative;
        height: 100px;
    }

    h3 {
        padding-left: 20px;
        font-weight: bold;
    }
</style>