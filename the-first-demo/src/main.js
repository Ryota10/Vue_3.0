// 引入 createApp 工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象并且挂载-app(类似于vue2中的vm，但是app比vm更‘轻’)
createApp(App).mount('#app')
