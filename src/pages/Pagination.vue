<!-- <template>
    <div class="container">


        
            <div class="products__item" v-for="product in paginatedProducts" :key="product.id">

                <h2 class="products__item_title">{{ product.brand }}</h2>
                <RouterLink :to="{ path: '/Product/' + product.id }">
                    <img :src="product.thumbnail" :alt="product.title">
                </RouterLink>
                <h3 class="products__item_subtitle">Наименование товара: {{ product.title }}</h3>
                <p class="products__item_price">Цена: {{ product.price }} $</p>
                <p class="products__item_text">Описание товара: {{ product.description }}</p>
            </div>


        </div>


     
   
</template>

<script>
export default {
    data() {
        return {
            usersPerPages: 10,
            products: this.$store.state.products,
            pageNumber: 1,
        }
    },
    computed: {
        pages() {
            return Math.ceil(this.products.length / 10)
        },
        paginatedProducts() {
            let from = (this.pageNumber - 1) * this.usersPerPages;
            let to = from + this.usersPerPages;
            return this.products.slice(from, to)
        }
    }
}
</script>

<style lang="scss" scoped>
.v-table__pagination{
    display: flex;
 flex-wrap: wrap;
 justify-content: center;
 margin-top: 30px;

}
.page{
    padding: 8px;
    border: solid 1px #e7e7e7;
    margin-left: 10px;
}
</style> -->