import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import EdgeNode from '@/views/EdgeNode'
import AddEdgeNode from '@/views/AddEdgeNode'
import DeviceManagement from '@/views/DeviceManagement'
import NodeInfo from '@/views/NodeInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path:'/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/node',
      name: 'node',
      component: EdgeNode
    },
    {
      path: '/addnode',
      name: 'addnode',
      component: AddEdgeNode
    },
    {
      path: '/device',
      name: 'device',
      component: DeviceManagement
    },
    {
      path: '/nodeinfo',
      name: 'nodeinfo',
      component: NodeInfo
    }
  ]
})
