import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import ResourceCrud from '../views/ResourceCrud.vue'
// import ProductList from '../views/product/ProductList.vue'
// import ProductEdit from '../views/product/ProductEdit.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Main,
    children: [
      { path: '/', name: 'home', component: Home },
      { path: '/:resource/list', name: 'product-crud', component: ResourceCrud, props: true },
      // { path: '/product/list', name: 'product-list', component: ProductList },
      // { path: '/product/create', name: 'product-create', component: ProductEdit },
      // { path: '/product/edit/:id', name: 'product-edit', component: ProductEdit, props: true }
    ]
  }
]

const router = new VueRouter({
  // mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
