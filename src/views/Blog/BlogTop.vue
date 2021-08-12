<template>
    <div class="Blog-Top-Container" v-if="list">
        <h2>目录</h2>
        <RightList :list="getArticleId" @ListClick="handleList($event)"></RightList>
    </div>
</template>

<script>
    import RightList from "./RightList";

    export default {
        name: "BlogTop",
        props: {
            list: {
                type: Array,
                require: true
            }
        },
        data() {
            return {
                activeArticle: '',
            }
        },
        computed: {
            getArticleId() {
                const getToc = (list = []) => {
                    return list.map(t => ({
                        ...t,
                        isSelect: this.activeArticle === t.anchor,
                        children: getToc(t.children)
                    }));
                }
                return getToc(this.list);
            },
            doms() {
                let dom = [];
                const getDom = (list) => {
                    for (const listElement of list) {
                        dom.push(document.getElementById(listElement.anchor));
                        if (listElement.children && listElement.children.length) {
                            getDom(listElement.children)
                        }
                    }
                }
                getDom(this.list)
                return dom;
            }
        },
        components: {
            RightList
        },
        created() {
            const bebounde = ((fn) => {
                let timer = null;
                return function () {
                    if(timer){
                        clearTimeout(timer);
                    }
                    timer = setTimeout(() => {
                        fn();
                        this.timer = null
                    }, 30)
                }
            })
            this.$bus.$on('mainScroll', bebounde(this.isSelect))
        },
        methods: {
            handleList(item) {
                location.hash = item.anchor
            },
            isSelect() {
                let rank = 100
                this.activeArticle = ""
                for (const dom of this.doms) {
                    if (!dom) {
                        continue;
                    }
                    const top = dom.getBoundingClientRect().top
                    if (top > 0 && top < rank) {
                        this.activeArticle = dom.id;
                    }
                    if (top > rank) {
                        return;
                    } else {
                        this.activeArticle = dom.id;
                    }
                }
            },

        }
    }
</script>

<style scoped lang="less">

    h2 {
        font-size: 18px;
        font-weight: bold;
        margin-left: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
    }

</style>