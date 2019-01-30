import Vue from 'vue'
import Router from 'vue-router'
import Deals from './views/Deals.vue'
import DealsList from './views/Deals/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/deals',
      name: 'deals',
      component: Deals
    },
    {
      path: '/deals/list',
      name: 'deals-list',
      component: DealsList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
