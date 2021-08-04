<template>
  
    <i class="iconfont" :class="changeClass"></i>

</template>

<script>
const IconMap = {
    home: 'icon-huaban-copy',
    success: 'icon-querenyuanzhengqueduigoutijiaochenggongwancheng',
    error: 'icon-cuowu',
    close: 'icon-guanbi',
    warn: 'icon-jinggao',
    info: 'icon-cascadeviewattr',
    blog: 'icon-blog',
    code: 'icon-code',
    about: 'icon-set_about_hov',
    weixin: 'icon-weixin',
    mail: 'icon-email',
    github: 'icon-huaban88',
    qq: 'icon-qq',
    arrowUp: 'icon-icon',
    arrowDown: 'icon-icon1',
    empty: 'icon-empty',
    chat: 'icon-liuyan',
    doubleArrowRight: 'icon-shuangjiantouxia',
    doubleArrowLeft: 'icon-shuangjiantouxia1'
}
export const type = Object.keys(IconMap);
export default {
    name: "Icon",
    props: {
        type: {
            type: String,
            require: true
        }
    },
    computed: {
        changeClass(){
            return IconMap[this.type];
        }
    }
}
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2719464_y6xoztc61g.css");


</style>