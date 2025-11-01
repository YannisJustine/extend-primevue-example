import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import Aura from '@primeuix/themes/aura'
import doublebutton from '@/preset/doublebutton'
import { definePreset } from '@primeuix/themes'

const app = createApp(App)
const preset = definePreset(Aura, {
  components: {
    doublebutton,
  },
})
app.use(PrimeVue, {
  theme: {
    preset,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
})
app.mount('#app')
