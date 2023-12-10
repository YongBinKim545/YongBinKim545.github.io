<template>
  <v-card flat width="300">
    <div class="mx-6 my-4">
      <!-- User ID -->
      <v-text-field v-model="userID" density="compact" variant="outlined" outlined rounded append-inner-icon="mdi-account"
        label="User ID" class="my-2">
      </v-text-field>

      <!-- Password -->
      <v-text-field v-model="password" density="compact" variant="outlined" outlined rounded hide-details
        :type="showPassword ? 'text' : 'password'" :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        class="my-2" @click:append-inner="showPassword = !showPassword" label="Password">
      </v-text-field>

      <!-- Remember Me and Forget Password -->
      <div class="d-flex justify-space-between">
        <v-checkbox class="align-self-center" density="compact" hide-details>
          <template v-slot:label>
            <span class="text-caption">Remember Me</span>
          </template>
        </v-checkbox>
        <!-- <v-card-subtitle class="text-caption align-self-center">Forget ID ?</v-card-subtitle> -->
        <v-card-subtitle class="text-caption align-self-center">Forget Password ?</v-card-subtitle>
      </div>

      <!-- Login Button -->
      <v-btn type="submit" color="primary" block @click="login" class="my-5">Login</v-btn>
    </div>

    <!-- Custom Divider -->
    <div class="custom-divider">
      <div class="custom-divider-content"><span>or login with</span></div>
      <div class="custom-divider-line"></div>
    </div>

    <!-- Single Sign On Buttons -->
    <div class="d-flex justify-space-between mx-6 my-2">
      <v-btn width="100" color="success" @click="singleSignOn('MY LGID')">MY LGID</v-btn>
      <v-btn width="100" color="warning" @click="singleSignOn('DNO')">DNO</v-btn>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const userID = ref<string | null>(null);
const password = ref<string | null>(null);
const showPassword = ref(false);

const login = () => {
  // To be implemented login logic
  console.log('Logging in with:', userID.value, password.value);
};

const singleSignOn = (provider: string) => {
  // To be implemented sso logic
  console.log(`Logging in with ${provider}`);
};
</script>

<style lang="scss" scoped>
.custom-divider {
  position: relative;
  width: 290px;
  margin: 20px 5px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  // Container for the content
  &-content {
    position: relative;
    z-index: 1;
    background-color: rgb(var(--v-theme-background));
    padding: 0 5px;

    // Text styling
    span {
      opacity: var(--v-high-emphasis-opacity);
    }
  }

  // Divider line
  &-line {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50%;
    border-bottom: 1px solid rgba(var(--v-theme-surface-variant), 0.5);
    z-index: 0;
  }
}
</style>