<template>
    <v-card class="mx-2 mt-5">
        <v-toolbar>
            <template v-slot:prepend>
                <v-card variant="text" class="text-center">{{ props.contentsItem.title }}</v-card>
            </template>
            <template v-slot:append>
                <v-switch v-model="selection" hide-details color="primary" base-color="primary" class="mr-2"
                    @change="$emit('update', selection)">
                    <template v-slot:prepend>
                        <span>{{ falseOption }}</span>
                    </template>
                    <template v-slot:append>
                        <span>{{ trueOption }}</span>
                    </template>
                </v-switch>
            </template>
        </v-toolbar>
    </v-card>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { ContentsItem } from '@/store/project/default'

const props = defineProps<{
    contentsItem: ContentsItem,
    trueOption: string,
    falseOption: string
}>()

defineEmits(['update'])
const selection = ref(true)


onMounted(() => {
})

</script>
<style scoped></style>