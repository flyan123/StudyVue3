import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

// 1.1.组件全局挂载
import quanjuprops from '@/components/quanjuprops.vue'

const app = createApp(App); 

app.use(router); // 使用路由  

// 1.2.组件全局挂载
app.component('quanjuprops',quanjuprops)
  
app.mount('#app');
// createApp(App).use(router).mount('#app');

