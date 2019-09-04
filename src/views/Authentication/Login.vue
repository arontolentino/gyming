<template>
  <ion-content class="ion-padding">
    <v-card class="mx-auto mb-5" max-width="344">
      <v-toolbar dark color="primary">
        <v-toolbar-title>Log In</v-toolbar-title>
      </v-toolbar>
      <v-card-text style="width: auto">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            name="email"
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            required
          ></v-text-field>
          <v-text-field
            name="password"
            label="Password"
            id="password"
            type="password"
            required
            v-model="password"
            :rules="passwordRules"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :disabled="!valid" @click="submit">Login</v-btn>
      </v-card-actions>
    </v-card>
  </ion-content>
</template>

<script>
export default {
  name: 'SignInp',
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be greater than 6 characters'
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('logIn', {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>

<style scoped>
</style>