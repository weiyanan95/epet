import Vue from 'vue'
import Router from 'vue-router'
import first from '../pages/first/first.vue'
import second from '../pages/second/second.vue'
import third from '../pages/third/third.vue'
import four from '../pages/four/four.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/first'
    },
    {
      path: '/first',
      component: first
    },
    {
      path: '/second',
      component: second
    },
    {
      path: '/third',
      component: third
    },
    {
      path: '/four',
      component: four
    }
  ]
})

