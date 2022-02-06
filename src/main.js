import Vue from 'vue'
import App from './App.vue'
import './styles/reset.less'
import router from '@/router/index'
import store from "./store"
import {
    MessageBox
} from "element-ui";
// ? 判断是否前往手机端
function IsPc() {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "Ipod"];
    let flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    if (!flag) {
        location.href = "http://121.40.172.208/h5"
    } else {
        location.protocol = "http://121.40.172.208"
    }
}

MessageBox.confirm("是否去往新版网站?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "info"
}).then(res => {
    window.location.href = "http://121.40.172.208/hexo/";
}, err => {
    // ? 老版网站触发去往手机端
    IsPc();
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

import ShowMessage from "@/utils/ShowMessage";
import Vloading from "@/directives/index";
import lazy from "@/directives/lazy"
import "@/utils/EventBus"

store.dispatch('setting/fetchSetting');

import "element-ui/lib/theme-chalk/index.css";
Vue.prototype.$showMessage = ShowMessage;
Vue.directive('loading', Vloading);
Vue.directive('lazy', lazy);