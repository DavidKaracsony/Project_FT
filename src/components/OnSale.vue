<template>
    <v-container>
        <v-divider class="orange-divider"></v-divider>
      <v-row class="text-center">
        <v-col cols="12">
          <h1 class="orange--text">On Sale</h1>
        </v-col>
      </v-row>
  
      <v-row>
  <!-- Card 1 -->
  <v-col cols="12" md="6">
    <v-card class="orange-border">
      <v-img class="white--text align-end" height="200px" src="https://via.placeholder.com/200">
        <v-card-title>Product 1</v-card-title>
      </v-img>
      <v-card-text>
        Description for Product 1. It's on sale!
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4">Learn More</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>

  <!-- Card 2 -->
  <v-col cols="12" md="6">
    <v-card class="orange-border">
      <v-img class="white--text align-end" height="200px" src="https://via.placeholder.com/200">
        <v-card-title>Product 2</v-card-title>
      </v-img>
      <v-card-text>
        Description for Product 2. It's on sale!
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4">Learn More</v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
  </v-row>
      <v-row class="text-center">
  <v-col cols="12">
    <v-btn color="orange" @click="jumpToProducts">Jump to Products</v-btn>
  </v-col>
</v-row>
<v-divider class="orange-divider"></v-divider>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'OnSale',
    methods: {
      jumpToProducts() {
        this.$router.push('/products');
      }
    }
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

  </style>
  