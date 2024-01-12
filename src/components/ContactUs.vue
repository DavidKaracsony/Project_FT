<!--ContactUs.vue Component Template-->

<template>
  <v-container>
    <v-divider class="orange-divider"></v-divider>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="orange--text">Feel free to contact us!</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-form ref="form" @submit.prevent="submitForm" v-model="valid">
          <v-text-field label="Full Name" v-model="fullName" :rules="[rules.required]" required></v-text-field>
          <v-text-field label="Email" v-model="email" :rules="[rules.required, rules.email]" required type="email"></v-text-field>
          <v-textarea label="Your Message" v-model="message" :rules="[rules.required]" required rows="5"></v-textarea>
          <v-btn :disabled="isSubmitDisabled" type="submit" id=submit-button>Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" persistent max-width="300">
      <v-card>
        <v-card-title class="text-h5">Confirmation</v-card-title>
        <v-card-text>Message submitted.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="clearFormAndCloseDialog">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-divider class="orange-divider"></v-divider>
  </v-container>
</template>

<!--ContactUs.vue Component Script-->

<script>

export default
{
  name: 'ContactUs',
  data()
  {
    return {
      valid: false,
      fullName: '',
      email: '',
      message: '',
      dialog: false,
      rules: {
        required: value => !!value || 'Required.',
        email: value => {
          const pattern = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || 'Invalid e-mail.';
        },
      },
    };
  },

  computed: {
    isSubmitDisabled() {
      return !this.valid || !(this.fullName && this.email && this.message);
    },
  },

  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.dialog = true;
      }
    },
    
    clearFormAndCloseDialog() {
      this.$refs.form.reset();
      this.dialog=false;
    },
  },
};

</script>

<!--ContactUs.vue Component CSS-->

<style>

.orange--text {
  color: orange;
  font-weight: bold;
}

.orange-divider {
  color: orange;
  margin-top: 25px;
}

#submit-button
{
  color: white;
  background-color: orange;
}
</style>