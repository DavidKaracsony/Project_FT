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
            <!-- Facebook Icon as a Link -->
            <v-btn text icon :href="facebookLink" target="_blank">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <!-- Instagram Icon as a Link -->
            <v-btn text icon :href="instagramLink" target="_blank">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
    return {
      facebookLink: 'https://www.facebook.com/david.karacsony.35', // Replace with your Facebook page URL
      instagramLink: 'https://www.instagram.com/dawekka/', // Replace with your Instagram page URL
    };
  },
  };

  </script>
  
  <style scoped>
  .v-footer {
    background-color: #FFFFFF; /* Adjust the color to match your navbar */
    color: #000000; /* Text color */
  }
  
  .v-icon {
    color: #000000; /* Icon color */
  }
  </style>
  