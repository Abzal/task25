import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main', auth: true},
    component: HomeView
  },
  {
    path: '/users',
    name: 'users',
    meta: {layout: 'main', auth: true},
    component: () => import('../components/Users/Users')
  },
  {
    path: '/users/create',
    name: 'users.create',
    meta: {layout: 'main', auth: true},
    component: () => import('../components/Users/Create')
  },
  {
    path: '/users/edit',
    name: 'users.edit',
    meta: {layout: 'main', auth: true},
    component: () => import('../components/Users/Edit')
  },
  {
    path: '/register',
    name: 'Register',
    meta: {layout: 'empty'},
    component: () => import('../views/auth/Register')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {layout: 'empty'},
    component: () => import('../views/auth/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) =>{
  const currentUser = localStorage.getItem('token')
  const requiredAuth = to.matched.some(record => record.meta.auth)

  if (requiredAuth && !currentUser) {
    next('/login')
  } else {
    next()
  }

})

export default router


