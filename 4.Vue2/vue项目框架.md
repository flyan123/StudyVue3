# src 

## api

## assets

## components(通用组件)

## router（路由配置）
### router
- `path: '/redirect'`: 定义了一个基础路径为 `/redirect` 的路由。
- `component: Layout`: 指定当这个路由被激活时，要渲染的组件是 `Layout`。这通常是一个布局组件，用于包裹其他子组件。
- `hidden: true`: 这个属性通常用于前端菜单或导航栏的生成，表示这个路由不应该出现在菜单或导航栏中。
- `children`: 一个数组，定义了当前路由的子路由。子路由会继承父路由的一些属性，并且它们的路径会基于父路由的路径。

在 `children` 数组中：
- `path: '/redirect/:path(.*)'`: 定义了一个子路由，其路径以 `/redirect/` 开头，后面跟着一个捕获所有内容的参数 `:path`，使用 `(.*)` 进行正则匹配。这意味着，任何以 `/redirect/` 开头的 URL 都会匹配到这个路由，并且 URL 中 `/redirect/` 后面的部分会被捕获到 `:path` 参数中。
- `component: (resolve) => require(['@/views/redirect'], resolve)`: 这是一个异步组件的定义。当这个路由被访问时，Vue Router 会调用这个函数来动态加载 `redirect` 组件。这里使用了 `require` 函数来异步加载组件，`'@/views/redirect'` 是组件的路径，`resolve` 是一个回调函数，当组件加载完成后会被调用。

总的来说，这段代码定义了一个路由，当访问以 `/redirect/` 开头的 URL 时，会动态加载 `redirect` 组件并渲染在 `Layout` 组件内部。同时，这个路由不会在前端菜单或导航栏中显示。这样的配置通常用于重定向或处理特定的 URL 规则。

### 配置方法
https://www.jb51.net/javascript/3079575ee.htm

this.$router.push()  

## views（页面）

## App.vue
### 1. 例子
`
<template>
  <div id="app">
    <!-- 根据当前的路由动态地渲染出对应的组件。 -->
    <router-view />
  </div>
</template>

<script>
export default  {
  // 组件的名称被设置为 'App'
  name:  'App'
}
</script>
<style>
/* 使用了 @import 指令来导入三个外部 CSS 文件 */
	/*每个页面公共css */
	@import 'lib/iconfont.css';
	@import 'lib/style.css';
	@import 'lib/def.css';
  .app-main{overflow:visible !important;}
</style>
`

## main.js 入口文件 ***
1. 主要作用是初始化vue实例并使用需要的插件, Vue.use()的作用就是让它里面被注册的组件能够被全局使用
https://www.jb51.net/javascript/301664rnc.htm

### main.js是项目的入口文件，项目中所有的页面都会加载main.js,所以main.js,主要有三个作用：
1. 实例化Vue。
2. 放置项目中经常会用到的插件和CSS样式。例如： 网络请求插件:axios和vue-resource、图片懒加载插件：vue-lazyload
3. 存储全局变量。例如（用于的基本信息）
