import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routers'
import setRouter from "@/utils/SetTitle"

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.afterEach((to, from) => {
    if(to.meta.title){
        setRouter(to)
    }else{
        return ;
    }
})

export default router;