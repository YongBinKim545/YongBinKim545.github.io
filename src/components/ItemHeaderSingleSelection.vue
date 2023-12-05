<template>
    <v-card class="mx-2 mt-5">
        <v-toolbar>
            <template v-slot:prepend>
                <v-card variant="text" class="text-center">{{ props.contentsItem.title }}</v-card>
                <v-divider class="ml-3" vertical inset />
            </template>
            <v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" class="ml-2">
                        <template v-slot:append>
                            <v-icon>mdi-menu-down</v-icon>
                        </template>
                        <span>FILTER</span>
                    </v-btn>
                </template>
                <v-card>
                    <v-list>
                        <v-list-item :title="selectedAll ? '전체 해제' : '전체 선택'" @click="toggleAll">
                            <template v-slot:prepend>
                                <v-checkbox-btn :indeterminate="selectedSome && !selectedAll"
                                    :model-value="selectedAll"></v-checkbox-btn>
                            </template>
                        </v-list-item>
                        <v-divider />
                        <!-- flex setting as below is malfunctioning on iphone, ipad and macbook has not been tested -->
                        <v-card class="d-flex flex-column flex-wrap" flat max-height="200">
                            <v-list-item v-for="item in items" :value="item" @click="toggleItem(item)">
                                <template v-slot:prepend>
                                    <v-checkbox-btn :model-value="selected.includes(item)"></v-checkbox-btn>
                                </template>
                                <template v-slot:default>
                                    <span>{{ item }}</span>
                                </template>
                            </v-list-item>
                        </v-card>
                    </v-list>
                </v-card>
            </v-menu>
            <v-spacer />
            <v-card variant="text" class="ml-2" v-show="!mobile" v-if="props.filterResult">
                <v-btn density="compact" variant="plain" :ripple="false" class="ma-1" v-for="item in selected">
                    <template v-slot:append>
                        <v-icon @click="() => selected.splice(selected.indexOf(item), 1)">mdi-close-circle</v-icon>
                    </template>
                    <template v-slot:default>
                        <span>{{ item }}</span>
                    </template>
                </v-btn>
            </v-card>
            <v-spacer />
            <template v-slot:append>
                <slot name="action"></slot>
            </template>
        </v-toolbar>
    </v-card>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import { categoryForItemStore, ContentsItem } from '@/store/project/default'

const { mobile } = useDisplay()
const props = defineProps<{
    contentsItem: ContentsItem,
    filterResult?: boolean,
    addItem?: boolean
}>()

const store = categoryForItemStore()
const items = store.getCategory(props.contentsItem.name)

const selected = ref<string[]>([])
const menu = ref<boolean>(false)
const selectedAll = computed(() => {
    return selected.value.length === items.length
})
const selectedSome = computed(() => {
    return selected.value.length > 0 && selected.value.length < items.length
})
function toggleAll(): void {
    if (selectedAll.value) {
        selected.value = []
    } else {
        selected.value = [...items]
    }
}
function toggleItem(item: string): void {
    if (selected.value.includes(item)) {
        selected.value.splice(selected.value.indexOf(item), 1)
    } else {
        selected.value.push(item)
    }
}
onMounted(() => {
    selected.value = [...items]
})

</script>
<style scoped>

</style>