<template>
    <v-app>
      <side-bar v-model="drawer" @toggle-drawer="drawer = !drawer" />
      <top-bar @toggle-drawer="drawer = !drawer" />
      <v-main>
        <table-of-contents />
        <router-view />
      </v-main>
    </v-app>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  import SideBar from '@/components/navigation/SideBar.vue'
  import TopBar from '@/components/navigation/TopBar.vue'
  import TableOfContents from '@/components/TableOfContents.vue'
  
  const drawer = ref()
  
  </script>