<script setup>
import OnSale from '@/components/OnSale.vue';
import ContactUs from '@/components/ContactUs.vue';
</script>

<template>
  <v-container class="animal-background">
    <!-- Welcome Section -->
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <h1 class="welcome-text">Welcome<br>to our store</h1>
          <v-btn class="learn-more-btn" text to="/about">Learn More</v-btn>
        </v-col>
      </v-row>
      </v-container>
    <!-- On Sale Section -->
    <v-container>
      <on-sale></on-sale>
    </v-container>
    <v-container>
      <contact-us></contact-us>
    </v-container>
</template>

<script>

</script>
<style>
.animal-background {
  background-image: url('/images/sitephotos/animal-picture.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  padding: 40px 0; /* Adjust the padding as needed */
}

.welcome-text {
  font-size: 3em; /* Adjust the font size as needed */
  color: black;
  margin-bottom: 20px;
}
.learn-more-btn:hover {
  color: white;
  background-color: orange;
}
</style>