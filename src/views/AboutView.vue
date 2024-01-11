<script setup>
import ContactUs from '@/components/ContactUs.vue';
</script>

<template>
  <h1 style="color: orange; text-align: center;">About us</h1>
  <v-container>
    <v-divider class="orange-divider"></v-divider>
    <v-row align="center" justify="center">
      <!-- Text Column -->
      <v-col cols="12" md="6" class="text-column">
        <div>
          <!-- Insert your text about the home business here. -->
          Our aim is to make the lives of pets more interesting and better, so that every pet can find its "likes" in our shop.
          Surprise your pets with something new</div>
      </v-col>

      <!-- Image Column -->
      <v-col cols="12" md="6">
        <img class="image-border" src="/images/sitephotos/happy-dog-image.jpg" alt="Happy Dog" style="max-width: 100%; height: auto;">
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      
      <!-- Image Column -->
      <v-col cols="12" md="6">
        <img class="image-border" src="/images/sitephotos/happy-cat-image.jpg" alt="Happy Dog" style="max-width: 100%; height: auto;">
      </v-col>
      
      <!-- Text Column -->
      <v-col cols="12" md="6" class="text-column">
        <div>
          <!-- Insert your text about the home business here. -->
          We are dedicated to enriching the lives of pets, ensuring that each one discovers something they love in our store. Delight your furry friends with something special and new. At our shop, it's all about bringing joy and excitement into the everyday life of your beloved pets. Let them explore a world of new favorites with us</div>
      </v-col>

    </v-row>
    
    <v-divider class="orange-divider"></v-divider>
  </v-container>
  <v-container>
    <contact-us></contact-us>
  </v-container>
</template>

<style>

.text-column {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  height: 100%;
  padding: 20px;
  font-size: 25px;
}

.orange-divider
{
  color: orange;
  margin-top: 25px;
  margin-bottom: 25px;
}

.image-border
{
  border: 3px solid orange;
}
</style>