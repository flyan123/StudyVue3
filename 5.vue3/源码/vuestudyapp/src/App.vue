<script >
   
</script>

<template>
  <div id="app">
    <router-link to="/routerone">首页</router-link>
    <span style="padding-left: 20px;"></span>
    <router-link to="/routertwo">内容</router-link>
    <span  style="padding-left: 20px;"></span>
    <router-link to="/changecontent">页面内部切换</router-link>
    <span  style="padding-left: 20px;"></span>
    <router-link to="/zujian">组件引入</router-link>
    <!-- 写上router-view才能看到使用的组件的内容 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
