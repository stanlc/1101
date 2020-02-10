import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppManager from '../views/app/AppManager'
import editApp from '../views/app/editApp'
import pageManager from '../views/page/pageManager'
import editPage from '../views/page/editPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children:[
      {
        path:'/appManager',
        name:'appManager',
        component:AppManager,
      },
      {
        path:'/createApp',
        name:'createApp',
        component:editApp
      },
      {
        path:'/editApp/:id',
        name:'editApp',
        component:editApp,
        props:true
      },  
      {
        path:'/pageManager',
        name:'pageManager',
        component:pageManager
      },
      {
        path:'/createPage',
        name:'createPage',
        component:editPage
      },
      {
        path:'/editPage/:id',
        name:'editPage',
        component:editPage,
        props:true
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
