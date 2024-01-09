<template>
    <v-footer padless>
      <v-container fluid>
        <v-row justify="space-between">
          <v-col cols="12" sm="6">
            <div class="text-caption">
              &copy;2024 Eshop pre chovatelské potreby
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-row justify="end">
              <v-btn text icon>
                <v-icon ref>mdi-facebook</v-icon>
              </v-btn>
              <v-btn text icon>
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
              <v-btn text icon>
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
  