import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/category/:category',
      name: 'catalog',
      component: () => import('./views/Catalog.vue')
    },
    {
      path: '/:category/product/:slug',
      name: 'product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    // {
    //   path: '/:label',
    //   name: 'label',
    //   component: () => import('./views/Label.vue')
    // }
  ]
})
