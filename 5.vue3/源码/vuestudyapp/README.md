# vuestudyapp

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# 路由

1. 安装router：npm install vue-router@4 
2. router=>index.js:
`
import { createRouter, createWebHistory } from 'vue-router';  
import Routerone from '../views/routerone.vue';
import Routertwo from '../views/routertwo.vue';

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
    }
  ]
  
  const router = createRouter({  
    history: createWebHistory(),  
    routes, // 简写，相当于 routes: routes  
  });  
    
  export default router;
`
3. main.js 入口文件
`
import router from './router' *
import { createApp } from 'vue'
import App from './App.vue'

*A法好: const app = createApp(App); 

        app.use(router); // 使用路由  
        
        app.mount('#app');

*B法：createApp(App).use(router).mount('#app');
`
4. app.vue 根文件
`
<script >
   
</script>

<template>
  <div id="app">
    <router-link to="/routerone">首页</router-link>
    <router-link to="/routertwo">内容</router-link>
    <!-- 写上router-view才能看到使用的组件的内容 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>

`

# 页面内部切换
v-if
@click
:click="条件?'A':'B'"

# 组件传参挂载