<template>
    <template v-for="item in items">
        <v-list-group class="my-2 py-2" v-if="item.children && item.children.length" :value="item.text">
            <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.text" :style="{'padding-left':20+20*depth+'px'+'!important'}"></v-list-item>
            </template>
            <MenuLists :items="item.children" :depth="depth + 1" />
        </v-list-group>
        <v-list-item v-else :class="depth > 0 ? 'mb-2' : 'mb-4'" :title="item.text" :value="item.text"
            :to="item.link" color="primary" rounded="lg" exact :style="{'padding-left':20+20*depth+'px'+'!important'}">
            <template v-slot:prepend v-if="item.icon">
                <v-icon :icon="item.icon"></v-icon>
            </template>
        </v-list-item>
    </template>
</template>

<script lang="ts" setup>
//type import
import { MenuItem } from '@/store/default/sidebar.js'
export interface Props {
    items: MenuItem[],
    depth: number
}
defineProps<Props>()

</script>

<!-- <style scoped>
/* Customize the indentation value */
:deep(.v-list-group__items .v-list-item) {
  padding-inline-start: 30px !important; /* Adjust the value as needed */
}
</style> -->