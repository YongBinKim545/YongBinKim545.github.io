<template>
    <div>
        <item-header trueOption="Base" falseOption="Actual" :contentsItem=props.contentItem></item-header>
        <div class="ma-2">
            <v-card class="my-2" flat>
                공정표 업로드 (Base, Actual 선택에 따라 Baseline, Actual 공정표 업로드 및 조회)
            </v-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ItemHeader from '@/components/ItemHeaderToggleItem.vue'
import { ContentsItem } from '@/store/project/default'
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
// 세부 항목 제거 후 재 삽입 시 순서 바뀌는 부분 개선 필요 (selected를 key, vlaue-true or false로 변경)
// 데이터가 없는 경우 차트 대신 Message 보이는 기능 구현

const props = defineProps<{ contentItem: ContentsItem }>()
const { name } = useDisplay()
const contentWidth = computed(() => {
    switch (name.value) {
        case 'xs': return '100%'
        case 'sm': return '47%'
        case 'md': return '31%'
        case 'lg': return '23%'
        case 'xl': return '23%'
        case 'xxl': return '23%'
    }
})
</script>
<style scoped></style>