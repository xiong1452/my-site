import Vue from 'vue'
import App from './App.vue'
import './styles/reset.less'
import router from '@/router/index'
import ShowMessage from "@/utils/ShowMessage";
import './mock';
import Vloading from "@/directives/index";
import lazy from "@/directives/lazy"
import "@/utils/EventBus"
import store from "./store"
store.dispatch('setting/fetchSetting');

Vue.prototype.$showMessage = ShowMessage;
Vue.directive('loading', Vloading);
Vue.directive('lazy', lazy);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
