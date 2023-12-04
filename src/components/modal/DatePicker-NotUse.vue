<template>
    <v-menu v-model="open" :close-on-content-click="false" transition="slide-x-transition">
        <template v-slot:activator="{ props }">
            <slot name="inputForm" :menuOn="props"></slot>
        </template>
            <v-date-picker hide-header color="primary" v-model="selectedDate" min="2020-01-01"
                @update:modelValue="dateSelected">
                <template v-slot:header>
                    <span>aa</span>
                </template>
            </v-date-picker>
    </v-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['onSelected'])
const selectedDate = ref()
const open = ref(false)
function dateSelected() {
    // const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
    const formatted = selectedDate.value.toLocaleDateString('ko-KR', 'YYYY-MM-DD')
    emit('onSelected', formatted)
    open.value = false
}
</script>