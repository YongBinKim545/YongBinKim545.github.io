<template>
  <div>
    <div class="ma-2 pa-2">
      <v-text-field v-model="userID" density="compact" variant="outlined" outlined rounded hide-details
        append-inner-icon="mdi-account">
        <template v-slot:label>
          <span class="text-body-2">User ID</span>
        </template>
      </v-text-field>
      <v-text-field v-model="password" density="compact" variant="outlined" outlined rounded hide-details
        :type="showPassword ? 'text' : 'password'" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        class="mt-5" @click:append-inner="showPassword = !showPassword">
        <template v-slot:label>
          <span class="text-body-2">Password</span>
        </template>
      </v-text-field>
      <div class="d-flex justify-space-between">
        <v-checkbox>
          <template v-slot:label>
            <span class="text-caption">Remember Me</span>
          </template>
        </v-checkbox>
        <v-card-subtitle class="text-caption mt-4" color="primary">Forget Password ?</v-card-subtitle>
      </div>
      <v-btn type="submit" color="primary" block>Login</v-btn>
    </div>
    <v-divider class="my-5" />
    <v-card-subtitle>SSO (Single Sign On)</v-card-subtitle>
    <br/>
    <div class="d-flex justify-space-between mx-4 my-2">
      <v-btn width="100" color="success">MY LGID</v-btn>
      <v-btn width="100" color="warning">DNO</v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

const userID: Ref<undefined | null | string> = ref();
const password: Ref<undefined | null | string> = ref();
const showPassword = ref(false)

const login = () => {
  // Implement your login logic here
  console.log('Logging in with:', userID.value, password.value);
};

const socialLogin = (provider: string) => {
  // Implement social login logic here
  console.log(`Logging in with ${provider}`);
};
</script>

<style lang="scss" scoped></style>