import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard'
import DealsList from './views/deals/List'
import DealsNew from './views/deals/New'
import DealsCategory from "./views/deals/settings/Category"
import BrandList from './views/brands/List'
import BrandNew from './views/brands/New'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/deals/list',
      name: 'deal-list',
      component: DealsList
    },
    {
      path: '/deals/new',
      component: DealsNew
    },
    {
      path: '/deals/category',
      component: DealsCategory
    },
    {
      path: '/brands/list',
      name: 'brand-list',
      component: BrandList
    },
    {
      path: '/brands/new',
      component: BrandNew
    },
  ]
})
