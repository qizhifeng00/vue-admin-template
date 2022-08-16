import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store'
import router from './router'
import naive from 'naive-ui'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(naive)
app.mount('#app')

/**
 * 应用配置
 * @param err
 */
app.config.errorHandler = (err) => {
  /* 处理错误 */
}

//多个应用实例
// const app2 = createApp({})
// app2.mount('#app-2')

//全局属性
//app.config.globalProperties.msg = 'hello'
