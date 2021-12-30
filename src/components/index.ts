import { App } from 'vue'
import button from './button'
import container from './container'

export default (app: App) => {
	app.use(button)
	app.use(container)
}
