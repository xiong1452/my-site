import Vue from "vue"
import Vuex from "vuex"
import setting from './setting'
Vue.use(Vuex)

const app = new Vuex.Store({
    modules: {
        setting,
    },
    strict: true
})

export default app

