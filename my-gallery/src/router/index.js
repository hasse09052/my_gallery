import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about from '../views/About.vue'

Vue.use(VueRouter)


const routes = [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/:id',
    name: 'about',
    component: about,
    props: true,
  }
]

const router = new VueRouter({
  routes
})

export default router