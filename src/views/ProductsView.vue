<template>
  <v-container>
    
    <v-row>
      <v-col cols="12" sm="6">
        <v-select
          label="Filter by Animal"
          :items="['macka', 'pes', 'all']"
          v-model="selectedAnimal"
          @change="filterProducts"
        ></v-select>
      </v-col>
      <v-col cols="12" sm="6">
        <v-select
          label="Filter by Type"
          :items="['hracka', 'krmivo', 'all']"
          v-model="selectedType"
          @change="filterProducts"
        ></v-select>
      </v-col>
    </v-row>
    
    <v-row>
      <ProductItem 
        v-for="product in filterProducts" 
        :key="product.id" 
        :product="product" 
        @add-to-cart="addToCart"
        @open-dialog="handleDialogOpen"
      />
    </v-row>

    <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-img :src="'/images/products/' + selectedProduct.image" height="200px"></v-img>
      <v-card-title>{{ selectedProduct.name }}</v-card-title>
      <v-card-text>
        <div class="product-details">
          <div><strong>Popis:</strong> {{ selectedProduct.description }}</div>
          <div><strong>Cena:</strong> {{ selectedProduct.price}}€</div>
          <div><strong>Detaily:</strong> {{ selectedProduct.rozmery }}</div>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn class="add-to-cart-btn" color="orange" @click.stop="addToCart(selectedProduct)">
          <span class="button-text">Add to Cart</span>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn class="add-to-cart-btn" color="orange" @click="dialog = false">
          <span class="button-text">Close</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </v-container>
</template>

<script>
import productsData from '@/assets/products.json';
import ProductItem from '@/components/ProductItem.vue';
import { useCartStore } from '@/stores/cart';


export default {
  components: {
    ProductItem
  },
  data() {
    return {
      products: productsData,
      selectedAnimal: 'all', // Default filter value
      selectedType: 'all', // Default filter value
      dialog: false,
      selectedProduct: {},
    };
  },
  computed: {
    filterProducts() {
      return this.products.filter(product => {
        return (this.selectedAnimal === 'all' || product.animal === this.selectedAnimal) &&
               (this.selectedType === 'all' || product.type === this.selectedType);
      });
    }
  },
  methods: {
    addToCart(product) {
      const cart = useCartStore();
      cart.addToCart(product);
      console.log("Added to cart:", product);
    },
    handleDialogOpen(product) {
      this.selectedProduct = product;
      this.dialog = true;
    }
  }
};
</script>

<style scoped>


.product-card {
  cursor: pointer;
  border: 1px solid orange;
}

.add-to-cart-btn {
  color: black; /* Set text color */
}

.button-text {
  font-weight: bold; /* Make text bold */
}

.product-details > div {
    margin-bottom: 10px; /* Space out individual sections */
  }
</style>
