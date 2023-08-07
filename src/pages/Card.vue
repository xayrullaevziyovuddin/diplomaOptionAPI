<template >
        <div class="sort-controls">
            <button @click="sortType = 'name'">Сортировка по имени</button>
            <button @click="sortType = 'date'">Сортировка по дате</button>
            <button @click="sortType = 'price'">Сортировка по цене</button>
            <button @click="sortDirection = sortDirection === 'asc' ? 'desc' : 'asc'">Изменить направление
                сортировки</button>
        </div>
        
    <div class="container"   >
    

        <div class="products"  v-if="myProduct">
            <div class="products__item" v-for="product in paginatedProducts" :key="product.id">
                                                         <!-- sortedProducts
                                                        Если заменить paginatedProducts на sortedProducts сортировка работает но пагинация нет 
                                                        -->
                <h2  class="products__item_title"  >{{ product.brand }}</h2>
                <RouterLink :to="{ path: '/Product/'+ product.id }">
                    <img :src="product.thumbnail" :alt="product.title">
                </RouterLink>
                <h3 class="products__item_subtitle">Наименование товара: {{ product.title }}</h3>
                <p class="products__item_price">Цена: {{ product.price }} $</p>
                <p class="products__item_text" >Описание товара: {{ product.description }}</p>
            </div>
            
            
            
        </div>
        

        <div v-else class="load">
            <h3>Подождите идёт загрузка...</h3>
        </div>
    </div>



   <div class="v-table__pagination">
    <div class="page"  v-for="page in pages" :key="page" @click="pageClick(page)">
{{ page }}
    </div>
   </div>
</template>
  
<script>

export default {
   
    data() {
        return {
            sortType: "",
            sortDirection: "asc",
            usersPerPages:10,
            products: this.$store.state.products,
            pageNumber: 1,
        };
    },

    computed: {
     
        myProduct() {
            return this.$store.state.products;
        },
        sortedProducts() {
            const products = this.myProduct.slice();
            if (this.sortType === "name") {
                products.sort((a, b) => {
                    const nameA = a.brand.toLowerCase();
                    const nameB = b.brand.toLowerCase();
                    return this.sortDirection === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
                });
            } else if (this.sortType === "date") {
                products.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return this.sortDirection === "asc" ? dateA - dateB : dateB - dateA;
                });
            } else if (this.sortType === "price") {
                products.sort((a, b) => {
                    return this.sortDirection === "asc" ? a.price - b.price : b.price - a.price;
                });
            }
            return products;
        },

        pages(){
            return Math.ceil(this.products.length / 10)
        },
        paginatedProducts(){
           let from = (this.pageNumber - 1) * this.usersPerPages ;
            let to = from + this.usersPerPages ;
            return this.sortedProducts.slice(from, to)
        }
    },

    mounted() {
        this.$store.dispatch("getUsers");
    },
    created() {
    
    this.$store.dispatch('getUsers');
  },
  methods: {
    pageClick(page){
        this.pageNumber = page
    }
  }
};
</script>
<style>
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
    transition: 0.5s linear;
}
.page:hover {
background: #e7e7e7;
cursor: pointer;
color: rgb(0, 0, 0);
}

</style>