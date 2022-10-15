import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LayOut from '../views/LayOut.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'layOut',
    component:LayOut,
    children:[
      {
        path: 'params',
        name: 'Params',
        component: () => import("../views/main/ParamsPage.vue")
      },
      {
        path: 'ad',
        name: 'ADCategory',
        component:()=>import("../views/main/ADCategory.vue")
      },
      {
        path: 'product',
        name: 'Product',
        component: ()=>import("../views/main/ProductPage.vue")
      },
      {
        path: 'home',
        name: 'Home',
        component: HomeView
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import("../views/LoginPage.vue")
  },
  {
    path:'/search',
    name:'Search',
    component:()=>import("../views/IndexPage.vue")
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
