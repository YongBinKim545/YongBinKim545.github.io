<template>
    <div>
        <item-header trueOption="담당" falseOption="계약" :contentsItem=props.contentItem
            @update="(status) => selectorForChart = status"></item-header>
        <div class="ma-2 d-flex flex-wrap justify-space-between">
            <v-card class="my-2" :width="contentWidth" flat>
                <v-toolbar density="compact" class="mb-2">
                    <v-card-text>SUMMARY</v-card-text>
                </v-toolbar>
                <v-card :height="250" flat>
                    <doughnut-chart />
                </v-card>
            </v-card>
            <v-card class="my-2" :width="contentWidth" flat>
                <v-toolbar density="compact" class="mb-2">
                    <v-card-text>TO DO</v-card-text>
                </v-toolbar>
                <v-card :height="250" flat>
                    <h-bar-chart :selectChart="selectorForChart" :title="title" :datasets="datasets" />
                </v-card>
            </v-card>
            <v-card class="my-2" :width="contentWidth" flat>
                <v-toolbar density="compact" class="mb-2">
                    <v-card-text>IN PROGRESS</v-card-text>
                </v-toolbar>
                <v-card :height="250" flat>
                    <h-bar-chart :selectChart="selectorForChart" :title="title" :datasets="datasets"/>
                </v-card>
            </v-card>
            <v-card class="my-2" :width="contentWidth" flat>
                <v-toolbar density="compact" class="mb-2">
                    <v-card-text>DONE</v-card-text>
                </v-toolbar>
                <v-card :height="250" flat>
                    <h-bar-chart :selectChart="selectorForChart" :title="title" :datasets="datasets"/>
                </v-card>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import ItemHeader from '@/components/ItemHeaderToggleItem.vue'
import { ContentsItem } from '@/store/project/default'
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import DoughnutChart from '@/components/chart/DoughnutChart.vue'
import HBarChart from '@/components/chart/HBarChart.vue'
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
// true이면 담당자 별, false이면 계약별 임
const selectorForChart = ref(true)
const title = computed(() => {
    if (selectorForChart.value) {
        return ['김씨엠', '이씨엠', '박씨엠', '정씨엠', '최씨엠','조씨엠']
    } else {
        return ['00', '01', '02', '03', '04']
    }
})

const datasets = computed(() => {
    if (selectorForChart.value) {
        return [
            {
                label: '정상',
                data: [27, 22, 15, 19, 22,16],
                borderWidth: 1
            },
            {
                label: '지연',
                data: [7, 5, 4, 3, 3,2],
                borderWidth: 1
            },
        ]
    } else {
        return [
            {
                label: '정상',
                data: [35, 15, 28, 12, 22],
                borderWidth: 1
            },
            {
                label: '지연',
                data: [7, 2, 4, 1, 3],
                borderWidth: 1
            },
        ]
    }
})




</script>
<style scoped></style>