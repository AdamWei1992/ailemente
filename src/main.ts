import { createApp } from 'vue'
import App from './App.vue'
import registerComps from './components'

const app = createApp(App)
app.config.globalProperties.$AILEMENTE = {
	size: 'large',
}
// 注册组件
registerComps(app)
app.mount('#app')
