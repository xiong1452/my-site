import Vue from 'vue'
import App from './App.vue'
import './styles/reset.less'
import router from '@/router/index'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
