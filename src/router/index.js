import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Message from '@/components/Message'
import MessageEdit from '@/components/MessageEdit'
Vue.use(Router)

export default new Router({
  mode:'history', 
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
    	path: '/message',
    	name: 'Message',
    	component: Message
    },{
    	path: '/message/edit/:id',
    	name: 'MessageEdit',
    	component: MessageEdit
    }
  ]
})

