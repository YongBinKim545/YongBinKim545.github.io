<template>
  <v-app>
    <side-bar v-model="drawer" @toggle-drawer="drawer = !drawer" />
    <top-bar @toggle-drawer="drawer = !drawer" />
    <v-main>
      <table-of-contents />
      <!-- 일반항목 별도로 구현하는 파트 -->
      <!-- <v-scroll-x-transition>
        <keep-alive>
          <div v-show="showGeneral.visible&&currentRouteName != 'ProjectHome' ">
            <general />
          </div>
        </keep-alive>
      </v-scroll-x-transition> -->
      <router-view />
      <footer-item />
    </v-main>

  </v-app>
</template>

<script lang="ts" setup>

import SideBar from '@/components/navigation/SideBar.vue'
import TopBar from '@/components/navigation/TopBar.vue'
import FooterItem from '@/components/navigation/Footer.vue'
import TableOfContents from '@/components/TableOfContents.vue'
// import General from '@/layouts/project/General.vue'
// import { contentStore, ContentsItem } from '@/store/project/default'
// import { ref, Ref, computed } from 'vue'
// import { useRoute } from 'vue-router'
// import { contentStore } from '@/store/project/default'
import { ref } from 'vue'


// const route = useRoute()
// const currentRouteName = computed(() => {
//     return route.name as string
// })
// const store = contentStore()
// const showGeneral: Ref<ContentsItem> = computed(() => store.contentGeneral)
const drawer = ref()

</script>

<style>
</style>