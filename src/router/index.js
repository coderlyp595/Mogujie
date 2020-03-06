import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Classify = () => import('../views/classify/Classify')
const Shopping = () => import('../views/shopping/Shopping')
const User = () => import('../views/user/User')
const Detail = () => import('../views/detail/Detail')


//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
    //配置默认显示路径
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
      path:'/shopping',
      component:Shopping
  },
  {
      path:'/classify',
      component:Classify
  },
  {
      path:'/user',
      component:User
  },
  {
      path:'/detail/:iid',
      component:Detail
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

//3.导出router
export default router