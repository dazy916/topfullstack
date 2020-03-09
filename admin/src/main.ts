import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './plugins/avue'
import router from './router'


Vue.config.productionTip = false

Vue.use(ElementUI)
// import EleForm from 'vue-ele-form'
// Vue.use(EleForm)

Vue.prototype.$http = axios.create({
  baseURL:'http://localhost:3000'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
