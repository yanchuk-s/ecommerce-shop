import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:category',
      name: 'catalog',
      component: () => import('./views/Catalog.vue')
    },
    {
      path: '/catalog/:label',
      name: 'label',
      component: () => import('./views/Label.vue')
    }
  ]
})
