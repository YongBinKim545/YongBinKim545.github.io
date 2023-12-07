<template>
  <div>
    <v-form @submit.prevent="login" class="ma-2 pa-2">
      <v-text-field v-model="username" density="compact" variant="outlined" outlined rounded hide-details
        append-inner-icon="mdi-account">
        <template v-slot:label>
          <span class="text-body-2">User Name</span>
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
    </v-form>
    <br />
    <v-card color="surface" class="mx-4 pa-2">
      <v-card-subtitle class="mt-2">Social Login</v-card-subtitle>
      <v-card-actions class="justify-center">
        <v-btn icon>
          <v-icon size="x-large">mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon size="large">mdi-google</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon size="x-large">mdi-apple</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  <small class="ma-2 pa-2">Login 계정에 따라 본사/현장 Redirect</small>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

const username: Ref<undefined | null | string> = ref();
const password: Ref<undefined | null | string> = ref();
const showPassword = ref(false)

const login = () => {
  // Implement your login logic here
  console.log('Logging in with:', username.value, password.value);
};

const socialLogin = (provider: string) => {
  // Implement social login logic here
  console.log(`Logging in with ${provider}`);
};
</script>

<style lang="scss" scoped></style>