<template>
  <div class="container">
  <div class="product">
        <h2 class="product__title">{{ getProducts.brand }}</h2>
        <img :src="getProducts.thumbnail" :alt="getProducts.title">
        <h3 class="product__subtitle">Наименование товара: {{ getProducts.title }}</h3>
        <p class="product__price">Цена: {{ getProducts.price }} $</p>
        <p class="product__description">Описание товара: {{ getProducts.description }}</p>
    </div>
</div>
 
</template>

<script>
import { store } from '@/store'

export default {
    data() {
        return {
            products: this.$store.state.products,
            currenId:null,
        }
    },
    created() {
        this.currenId = this.$route.params.id
    },
computed:{

    getProducts(){
        return this.products.find(product =>product.id == this.currenId )
    }
},





}
</script>
