<!--App.vue Script Setup-->

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterSection from './components/FooterSection.vue';
</script>

<!--App.vue Template-->

<template>
  <v-app>
    <v-container>
      <NavBar/>
    </v-container>
    <v-spacer>
      <router-view/>
    </v-spacer>
    <v-container>
      <FooterSection/>
    </v-container>
  </v-app>
</template>

<!--App.vue Script-->

<script>

export default {
  name: 'App',
  components: {
    NavBar,
    FooterSection,
  }
};

</script>

<!--App.vue CSS-->

<style scoped>

</style>
