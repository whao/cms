import Vue from 'vue'
import Router from 'vue-router'
import DealsDashboard from './views/deals/Dashboard'
import DealsList from './views/deals/List'
import DealsNew from './views/deals/New'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/deals',
      component: DealsDashboard
    },
    {
      path: '/deals/list',
      name: 'deal-list',
      component: DealsList
    },
    {
      path: '/deals/new',
      component: DealsNew
    }
  ]
})
