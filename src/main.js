import Vue from 'vue'
import App from './App.vue'
import './styles/reset.less'
import router from '@/router/index'
import ShowMessage from "@/utils/ShowMessage";
// import './mock';
import Vloading from "@/directives/index";
import lazy from "@/directives/lazy"
import "@/utils/EventBus"
import store from "./store"

store.dispatch('setting/fetchSetting');

import {
    MessageBox
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.prototype.$showMessage = ShowMessage;
Vue.directive('loading', Vloading);
Vue.directive('lazy', lazy);


MessageBox.confirm("是否去往新版网站?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "info"
}).then(res => {
    window.location.href = "http://121.40.172.208/hexo";
}, err => {
    // ? Vue 为undefined,则直接开在加载界面
    if (Vue) {
        new Vue({
            render: h => h(App),
            router,
            store
        }).$mount('#app')
    }
});
// ? 跳转