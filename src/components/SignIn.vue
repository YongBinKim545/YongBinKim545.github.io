<template>
  <!-- created by chat GPT to be updated-->
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <!-- Login Form -->
        <v-card class="pa-8" elevation="2">
          <v-form @submit.prevent="login">
            <v-text-field v-model="userId" label="User ID" outlined required></v-text-field>
            <v-text-field v-model="password" label="Password" outlined type="password" required></v-text-field>
            <v-btn type="submit" color="primary">Login</v-btn>
          </v-form>
        </v-card>

        <!-- Social Authentication Buttons -->
        <v-card class="pa-4 mt-4" elevation="2">
          <v-row justify="center">
            <v-btn @click="socialLogin('google')" class="mr-2" color="red">Login with Google</v-btn>
            <v-btn @click="socialLogin('facebook')" color="blue">Login with Facebook</v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const userId = ref('');
const password = ref('');

const login = () => {
  // Handle login logic here
  console.log('Logging in with User ID:', userId.value, 'and Password:', password.value);
};

const socialLogin = (provider: string) => {
  // Handle social login logic here
  console.log('Logging in with', provider);
};
</script>

