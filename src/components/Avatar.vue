<template>
    <img :src="url" alt="" :width="width + 'px'" :height="height + 'px'"/>
</template>

<script>
    export default {
        name: "Avatar",
        props:{
            url: {
                type: String,
                require: true
            },
            width: {
                type: Number,
                default: 50
            },
            height: {
                type: Number,
                default: 50
            }
        }
    }
</script>

<style lang="less" scoped>

img{
    border-radius: 50%;
    object-fit: cover;
}

</style>