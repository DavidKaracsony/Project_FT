<!--FooterSection.vue Component Template-->

<template>
  <v-footer padless>
    <v-container fluid>
      <v-row justify="space-between">
        <v-col cols="12" sm="6">
          <div class="text-caption">
            &copy;2024-Dávid Karácsony-Univerzita Konštantína Filozofa v Nitre
          </div>
        </v-col>
        <v-col cols="12" sm="6">
          <v-row justify="end">
            <v-btn text icon :href="facebookLink" target="_blank">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn text icon :href="instagramLink" target="_blank">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<!--FooterSection.vue Component Script-->

<script>

export default {
  name: 'Footer',
  data() {
    return {
      facebookLink: 'https://www.facebook.com/david.karacsony.35',
      instagramLink: 'https://www.instagram.com/dawekka/',
    };
  },
};

</script>

<!--FooterSection.vue Component CSS-->

<style scoped>

.v-footer {
  background-color: #FFFFFF;
  color: #000000;
}
.v-icon {
  color: #000000;
}

</style>
  