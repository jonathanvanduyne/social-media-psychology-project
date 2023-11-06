import { createRouter, createWebHashHistory} from 'vue-router'
import HomePage from '../components/homePage/HomePage.vue'


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        }
    ]
})
