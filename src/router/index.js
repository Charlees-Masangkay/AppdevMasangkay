import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
const routes = [
  {
    path: '/',
    name: 'Productlist',
    component: Productlist
  },
  {
    path: '/add',
    name: 'AddProduct',
    component:AddProduct

  },
  {
  path: '/edit/:id',
  name: 'EditProduct',
  component: EditProduct
  },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
