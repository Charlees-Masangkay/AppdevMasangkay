<template>
    
    <Product />

<script>
    import Product from "@/components/Product.vue";
    export default {
    name: "ProductList",
    components: {
    Product,
    },
};
</script>
<style></style>

import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
const routes = [
{
path: '/',
name: 'ProductList',
component: ProductList
}
]
const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
})

</template>