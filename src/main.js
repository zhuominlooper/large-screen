import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './flexible/flexible'
import './style/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'

Vue.config.productionTip = false
Vue.use(Element, { size: 'small' })
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
