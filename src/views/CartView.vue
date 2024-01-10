<template>
  <v-container>
    <!-- Check if there are items in the cart -->
    <div v-if="cart.items.length === 0">
      <h1 style="text-align: center;">Your cart is empty! <br>Try adding some items into it</h1>
    </div>

    <!-- Display cart items if there are any -->
    <template v-else>
      <v-row v-for="item in cart.items" :key="item.id" class="mb-2" style="align-items: center;">
      <!-- Product Image Column -->
      <v-col cols="12" sm="2">
        <v-img
          :src="'/images/products/' + item.image"
          height="60"
          contain
          class="product-image"
        ></v-img>
      </v-col>

      <!-- Product Name Column -->
      <v-col cols="12" sm="3">
        {{ item.name }}
      </v-col>

      <!-- Sum Column -->
      <v-col cols="12" sm="2" class="align-self-center">
        {{ (item.price * item.quantity).toFixed(2) }}€
      </v-col>

      <!-- Quantity Input Column -->
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="item.quantity"
          type="number"
          min="1"
          label="Qty"
          single-line
          dense
          class="quantity-input"
        ></v-text-field>
      </v-col>

      <!-- Remove Button Column -->
      <v-col cols="12" sm="2">
        <v-btn color="red" @click="removeFromCart(item.id)" class="float-right">
          Remove
        </v-btn>
      </v-col>
    </v-row>

      <v-row>
        <v-col>
          <v-btn color="green">Proceed to Checkout</v-btn>
        </v-col>
        <v-col cols="8" sm-2>
          <div>Total Price: {{ totalPrice.toFixed(2) }}€</div>
        </v-col>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { computed, watch } from 'vue';

export default {
  setup() {
    const cart = useCartStore();
    const removeFromCart = (productId) => {
      cart.removeFromCart(productId);
    };

    const totalPrice = computed(() => {
      return cart.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
    });

    // Watcher to ensure quantity is never less than 1
    watch(() => cart.items, (newItems) => {
      newItems.forEach(item => {
        if (item.quantity < 1) {
          item.quantity = 1;
        }
      });
    }, { deep: true });

    return { cart, removeFromCart, totalPrice };
  },
};
</script>

<style scoped>
.float-right {
  float: right;
}
.mb-2 {
  margin-bottom: 16px; /* Adjust as needed */
}

.quantity-input .v-text-field__slot {
  max-width: 100; /* Adjust this value as needed to make the input smaller */
}

.product-image {
  max-width: 50px; /* Adjust as needed */
  margin-right: 3px; /* Spacing between image and product name */
}
</style>
