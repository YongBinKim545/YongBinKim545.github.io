<template>
    <v-navigation-drawer v-bind:value="drawer" floating width="300">
        <template v-slot:prepend>
            <user-info />
        </template>
        <v-card class="pa-2 ma-2 overflow-y-auto" max-height="95%">
            <v-list variant="flat">
                <menu-lists :items="nodes" :depth="0" />
            </v-list>
        </v-card>
        <!-- <template v-slot:append>
            <div class="ma-4">
                <v-btn prepend-icon="mdi-cog-outline" block>
                    <template v-slot:append>
                        시스템 관리 (관리자만 보임)
                    </template>
                </v-btn>
            </div>
        </template> -->
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { sidebarStore } from '@/store/default/sidebar'
import { useRoute } from 'vue-router';
import MenuLists from './MenuLists.vue'
import UserInfo from './UserInfo.vue'

defineProps({
    drawer: Boolean,
})
// if mobile navbar header is applied, following codes are for close btn of mobile header
// const emit = defineEmits(['toggleDrawer'])
// const toggleDrawer = (): void => {
//     emit('toggleDrawer')
// }
const route = useRoute()
const menus = sidebarStore()
const path = route.path.split('/')[1]
const nodes = computed(() => menus.getMenus(path))
</script>

<style lang="scss" scoped>
</style>