import { createApp } from "vue"
import App from "./App.vue"

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faPause, faTrashCan } from '@fortawesome/free-solid-svg-icons'
library.add(faPlay, faPause, faTrashCan)

// SCSS
import "@/assets/main.scss"

// State management
import { createPinia } from "pinia"

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
    .mount("#app")
