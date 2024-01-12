<!--NavBar.vue Component Template-->

<template>
  <v-app-bar app id="navbar">
    <v-toolbar-title id="navbartitle">Chovatelské potreby</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/about">About</v-btn>
    <v-btn text to="/products">Products</v-btn>
    <v-btn text to="/cart">Cart</v-btn>
  </v-app-bar>
</template>

<!--NavBar.vue Component Script-->

<script>

</script>

<!--NavBar.vue Component CSS-->

<style scoped>

#navbar{
  background-color: orange;
}

</style>