import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Me from '@/components/Me'
import Hobby from '@/components/Hobby'

// require styles
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path:'/me',
      name:'Me',
      component:Me
    },
    {
      path:'/hobby',
      name:'Hobby',
      component:Hobby
    }
  ]
})
