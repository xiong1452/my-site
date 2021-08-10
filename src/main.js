import Vue from 'vue'
import App from './App.vue'
import './styles/reset.less'
import router from '@/router/index'
import ShowMessage from "@/utils/ShowMessage";
import './mock';
import Vloading from "@/directives/index"


Vue.prototype.$showMessage = ShowMessage;

Vue.directive('loading', Vloading);

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
