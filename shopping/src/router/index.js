import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import cart from '@/components/ShoppingCart'
import list from '@/components/ShoppingList'
import details from '@/components/ShoppingDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      name: 'index',
      component: index,
      children: [
        {
          path: '/cart',
          name: 'cart',
          component: cart
        },
        {
          path: '/list',
          name: 'list',
          component: list
        },
        {
          path: '/details/:id',
          name: 'details',
          component: details
        }
      ],
      redirect: '/list'
    }
  ]
})
