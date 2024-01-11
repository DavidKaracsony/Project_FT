<!--ProductItem.vue Component Template-->

<template>
  <v-col cols="12" md="6">
    <v-card @click="$emit('open-dialog', product)" class="product-card">
      <v-img :src="'/images/products/' + product.image" height="200px"></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>Price: {{ product.price }}€</v-card-subtitle>
      <v-card-actions>
        <v-btn class="add-to-cart-btn" color="orange" @click.stop="$emit('add-to-cart', product)">
          <span class="button-text">Add to Cart</span>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<!--ProductItem.vue Component Script-->

<script>

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
  
</script>

<!--ProductItem.vue Component CSS-->

<style scoped>
.product-card {
  cursor: pointer;
  border: 2px solid orange;
}
.add-to-cart-btn {
  color: black;
}
.button-text {
  font-weight: bold;
}

</style>
  