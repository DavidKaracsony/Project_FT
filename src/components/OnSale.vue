<template>
    <v-container>
        <v-divider class="orange-divider"></v-divider>
      <v-row class="text-center">
        <v-col cols="12">
          <h1 class="orange--text">On Sale Right Now!</h1>
        </v-col>
      </v-row>
  
      <v-row>
  <!-- Card 1 -->
  <v-col cols="12" md="6">
    <v-card class="orange-border">
      <v-img class="white--text align-end" height="200px" :src="'/images/products/royal_canin_starter_15kg.jpg'">
        <v-card-title style="color: red;">Sale -20%</v-card-title>
      </v-img>
      <v-card-text>
        Royal Canin - Canine Medium Starter M&B 15 kg
      </v-card-text>
      <v-card-text>
        <span style="text-decoration: line-through; color: grey;">130€</span>
        <span style="font-size: 1.5em; color: black; margin-left: 10px;">104€</span>
      </v-card-text>
    </v-card>
  </v-col>

  <!-- Card 2 -->
  <v-col cols="12" md="6">
    <v-card class="orange-border">
      <v-img class="white--text align-end" height="200px" :src="'/images/products/hracka_pre_macku_catch_the_mouse.jpg'">
        <v-card-title style="color: red;">Sale -25%</v-card-title>
      </v-img>
      <v-card-text>
        Catch the mouse - Hračka pre mačky
      </v-card-text>
      <v-card-text>
        <span style="text-decoration: line-through; color: grey;">6€</span>
        <span style="font-size: 1.5em; color: black; margin-left: 10px;">4.50€</span>
      </v-card-text>
    </v-card>
  </v-col>
  </v-row>
      <v-row class="text-center">
  <v-col cols="12">
    <v-btn class="products-button" text to="/products">Check out the products!</v-btn>
  </v-col>
</v-row>
<v-divider class="orange-divider"></v-divider>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'OnSale',
  };
  </script>
  
  <style scoped>
  .orange--text {
    color: orange;
    font-weight: bold;
  }

  .orange-divider {
  color: orange;
  margin-top: 25px;
}

.orange-border {
    border: 2px solid orange; /* Adjust the border thickness as needed */
  }
  .products-button {
  color: white;
  background-color: orange;
}


  </style>
  