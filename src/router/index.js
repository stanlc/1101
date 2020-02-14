import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppManager from '../views/app/AppManager'
import editApp from '../views/app/editApp'
import pageManager from '../views/page/pageManager'
import editPage from '../views/page/editPage'
import modelManager from '../views/model/modelManager'
import editModel from '../views/model/editModel'
import pageConfig from '../views/pageConfig'

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
      {
        path:'/modelManager',
        name:'modelManager',
        component:modelManager
      },
      {
        path:'/createModel',
        name:'createModel',
        component:editModel
      },
      {
        path:'/editModel/:id',
        name:'editModel',
        component:editModel,
        props:true
      },
      {
        path:'/pageConfig/:id',
        name:'pageConfig',
        component:pageConfig,
        props:true
      },
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
