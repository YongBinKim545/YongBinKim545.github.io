<template>
  <v-app>
    <side-bar v-model="drawer" />
    <top-bar :drawer="drawer" @toggle-drawer="drawer = !drawer" />
    <v-main>
      <table-of-contents />
      <!-- if general component shows -->
      <!-- <v-scroll-x-transition>
        <keep-alive>
          <div v-show="showGeneral.visible&&currentRouteName != 'ProjectHome' ">
            <general />
          </div>
        </keep-alive>
      </v-scroll-x-transition> -->
      <router-view />
    </v-main>
    <footer-item />
    <!-- Floating Action Button -->
    <v-layout-item v-scroll="onScroll" class="text-end" model-value position="bottom" size="80">
      <div class="ma-4">
        <v-fab-transition>
          <v-btn v-show="foatingActionButton" icon class="mt-auto" color="primary" elevation="8"
            @click="moveToTop">
            <template v-slot:default>
              <v-icon>mdi-chevron-up</v-icon>
            </template>
          </v-btn>
        </v-fab-transition>
      </div>
    </v-layout-item>
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
const foatingActionButton = ref(false)
function onScroll(e: Event) {
  if (typeof window === 'undefined') return
  const top = window.scrollY
  foatingActionButton.value = top > 20
}

function moveToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
</script>


<style lang="scss" scoped>
</style>