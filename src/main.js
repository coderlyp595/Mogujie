import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fastclick from 'fastclick'
import toast from 'components/common/toast'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

//解决移动端300毫秒的延迟
Fastclick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyLoad,{
	loading:require('./assets/img/detail/lyp.jpg')
})

//安装toast
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
