import Vue from "vue"
import Vuex from "vuex"
import setting from './setting'
import codeInfo from "./codeInfo";
Vue.use(Vuex)

const app = new Vuex.Store({
    modules: {
        setting,
        codeInfo
    },
    strict: true
})
window.vuex = app;
export default app

