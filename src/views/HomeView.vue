<!--HomeView.vue View Script Setup-->

<script setup>

import OnSale from '@/components/OnSale.vue';
import ContactUs from '@/components/ContactUs.vue';

</script>

<!--HomeView.vue View Template-->

<template>
  <v-container class="animal-background">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h1 class="welcome-text">Welcome<br>to our store</h1>
        <v-btn class="learn-more-btn" text to="/about">Learn More</v-btn>
      </v-col>
    </v-row>
  </v-container>
    
  <v-container>
    <on-sale></on-sale>
  </v-container>
  
  <v-container>
    <contact-us></contact-us>
  </v-container>
</template>

<!--HomeView.vue View CSS-->

<style>

.animal-background {
  background-image: url('/images/sitephotos/animal-picture.jpg');
  background-size: cover;
  background-position: center;
  padding: 40px 0;
}

.welcome-text {
  font-size: 3em;
  color: black;
  margin-bottom: 20px;
}

.learn-more-btn:hover {
  color: white;
  background-color: orange;
}

</style>