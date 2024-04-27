import { createRouter, createWebHistory } from 'vue-router';  
import Routerone from '../views/routerone.vue';
import Routertwo from '../views/routertwo.vue';
import changecontent from '@/views/changecontent.vue';
import zujian from '@/views/zujian.vue'

const routes=[
    {
     //路由路径
      path: '/routerone',
      name: "Routerone",
     //跳转组件
      component: Routerone
    },
    {
      path: '/routertwo',
      name: "Routertwo",
      component: Routertwo
    },
    {
      path: '/changecontent',
      name: "changecontent",
      component: changecontent
    },
    {
      path: '/zujian',
      name: "zujian",
      component: zujian
    }

  ]
  
  const router = createRouter({  
    history: createWebHistory(),  
    routes, // 简写，相当于 routes: routes  
  });  
    
  export default router;