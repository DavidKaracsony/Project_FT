<template>
  <v-container>
    <!-- Check if there are items in the cart -->
    <div v-if="cart.items.length === 0" style="text-align: center;">
      <h1>Your cart is empty! <br>Try adding some items into it</h1> <br>
      <v-btn text to="/products">Products</v-btn>
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
          <v-btn color="green" @click="proceedToCheckout">Proceed to Checkout</v-btn>
        </v-col>
        <v-col cols="8" sm-2>
          <div>Total Price: {{ totalPrice.toFixed(2) }}€</div>
        </v-col>
      </v-row>

      <v-dialog v-model="confirmDialog" persistent max-width="300px">
    <v-card>
      <v-card-title class="headline">Proceed to Checkout</v-card-title>
      <v-card-text>
        Are you sure you want to proceed to checkout?
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="openCheckoutDialog">Yes</v-btn>
        <v-btn color="red darken-1" text @click="confirmDialog = false">No</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="orderSubmittedDialog" persistent max-width="300px">
    <v-card>
      <v-card-title class="headline">Confirmation</v-card-title>
      <v-card-text>
        Order submitted.
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="confirmOrder">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="checkoutDialog" persistent max-width="500px">
    <v-card>
      <v-card-title class="headline">Checkout Details</v-card-title>
      <v-card-text>
        <v-text-field v-model="checkoutDetails.fullName" label="Full Name" required></v-text-field>
        <v-text-field v-model="checkoutDetails.phoneNumber" label="Phone Number" required></v-text-field>
        <v-text-field v-model="checkoutDetails.email" label="Email Address" required></v-text-field>
        <v-text-field v-model="checkoutDetails.address" label="Address" required></v-text-field>
        <v-text-field v-model="checkoutDetails.postalCode" label="Postal Code" required></v-text-field>
        <v-text-field v-model="checkoutDetails.city" label="City" required></v-text-field>
        <div class="final-price">
          <strong>Total Price:</strong> {{ totalPrice.toFixed(2) }}€
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text :disabled="!isFormComplete" @click="submitCheckout">Submit</v-btn>
        <v-btn color="red darken-1" text @click="checkoutDialog = false">Back</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

    </template>
  </v-container>
</template>

<script>
import { useCartStore } from '@/stores/cart';
import { computed, watch, ref } from 'vue';

export default {
  setup() {
    const cart = useCartStore();
    const confirmDialog = ref(false);
    const checkoutDialog = ref(false);
    const orderSubmittedDialog = ref(false);
    const checkoutDetails = ref({
      fullName: '',
      phoneNumber: '',
      email: '',
      address: '',
      postalCode: '',
      city: ''
    });

    const removeFromCart = (productId) => {
      cart.removeFromCart(productId);
    };

    const totalPrice = computed(() => {
      return cart.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
    });

    const proceedToCheckout = () => {
      confirmDialog.value = true;
    };

    const openCheckoutDialog = () => {
      confirmDialog.value = false;
      checkoutDialog.value = true;
    };

    const submitCheckout = () => {
      // You would handle the actual submission logic here.
      // For now, we'll just open the order submission confirmation dialog.

      checkoutDialog.value = false; // Close the checkout dialog
      orderSubmittedDialog.value = true; // Open the order submitted dialog
          
    };

    const confirmOrder = () => {
      cart.clearCart(); // Clear the cart
      orderSubmittedDialog.value = false; // Close the dialog
    };

    const isFormComplete = computed(() => {
      return checkoutDetails.value.fullName !== '' &&
             checkoutDetails.value.phoneNumber !== '' &&
             checkoutDetails.value.email !== '' &&
             checkoutDetails.value.address !== '' &&
             checkoutDetails.value.postalCode !== '' &&
             checkoutDetails.value.city !== '';
    });

    // Watcher to ensure quantity is never less than 1
    watch(() => cart.items, (newItems) => {
      newItems.forEach(item => {
        if (item.quantity < 1) {
          item.quantity = 1;
        }
      });
    }, { deep: true });

    return { cart, removeFromCart, totalPrice, confirmDialog, checkoutDialog, checkoutDetails, proceedToCheckout, openCheckoutDialog, isFormComplete, orderSubmittedDialog, submitCheckout, confirmOrder};
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

.final-price {
  margin-top: 20px; /* Adjust as needed */
  text-align: right;
  font-size: 1.2em; /* Adjust as needed */
}

</style>
