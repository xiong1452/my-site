import Vue from 'vue'
import App from './App.vue'
import './styles/reset.less'
import router from '@/router/index'
import ShowMessage from "@/utils/ShowMessage";
import './mock'
import './api'

Vue.prototype.$showMessage = ShowMessage;

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
