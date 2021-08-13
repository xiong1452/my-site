<template>
    <div class='demo'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lAIGb1lfpBw" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
        </iframe>
    </div>
</template>

<script>
    export default {
        name: "about",

    }
</script>

<style scoped>
    .demo {
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 100px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
        margin-right: 4px;
    }

</style>