import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AddHouse from '@/components/AddHouse'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/addHouse',
      name: 'AddHouse',
      component: AddHouse
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
