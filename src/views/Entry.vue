<template>
  <v-container fluid height="100%" style="height:100%;" class="d-flex justify-center align-center">
    <v-card min-width="300" class="pa-2">
    <v-card-title class="text-center mt-2">
      SignIn / Signup Toggle
    </v-card-title>
    <sign-in />
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import SignIn from '@/components/SignIn.vue'
</script>
