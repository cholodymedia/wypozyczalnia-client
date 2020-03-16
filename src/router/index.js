import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Events from '../views/Events.vue'
import Catalog from '../views/Catalog.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {onlylogout: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {onlylogout: true}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {onlylogout: true}
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog,
    meta: {requiresAuth: true}
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const onlylogout = to.matched.some(record => record.meta.onlylogout);
  const token = localStorage.getItem('token');
  if(requiresAuth) {
    axios({
      method: 'post',
      url: 'http://192.168.1.105:5000/checktoken',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token') 
      },
    }).then(() => {
      next();
    }).catch(() => {
      next('/login');
    })
  }else if(onlylogout && token) {
    axios({
      method: 'post',
      url: 'http://192.168.1.105:5000/checktoken',
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token') 
      },
    }).then(() => {
      next('/catalog');
    }).catch(() => {
      next();
    })
  }else {
    next();
  }
})

export default router
