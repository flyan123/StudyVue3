import router from './router'
import { createApp } from 'vue'
import App from './App.vue'

// 组件全局挂载
import quanjuprops from './component/quanjuprops.vue'
App.component('quanjuprops',quanjuprops)

const app = createApp(App); 

app.use(router); // 使用路由  
  
app.mount('#app');
// createApp(App).use(router).mount('#app');

