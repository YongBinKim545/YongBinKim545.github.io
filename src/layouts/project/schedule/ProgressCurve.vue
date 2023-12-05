<template>
    <div>
        <item-header :contentsItem=props.contentItem filterResult></item-header>
        <div class="ma-2 d-flex flex-wrap justify-space-between">
            <v-card min-width="280" :width="contentWidth" :height="300" class="my-2">
                <v-toolbar density="compact" class="mb-2">
                    <v-card-text>전체</v-card-text>
                    <v-spacer />
                    <v-card color="warning" class="mr-2 pa-1" width="120">
                        <v-card-subtitle class="text-center">Lagging</v-card-subtitle>
                    </v-card>
                </v-toolbar>
                <v-card flat height="75%" class="pa-2">
                    <line-chart />
                </v-card>
            </v-card>
            <v-card v-for="item in items" min-width="280" :width="contentWidth" :height="300" class="my-2">
                <v-toolbar density="compact" class="mb-2">
                    <v-card-text>{{ item.title }}</v-card-text>
                    <v-spacer />
                    <v-card :color="item.color" class="mr-2 pa-1" width="120">
                        <v-card-subtitle class="text-center">{{ item.status }}</v-card-subtitle>
                    </v-card>
                </v-toolbar>
                <v-card flat height="75%" class="pa-2">
                    <line-chart />
                </v-card>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import ItemHeader from '@/components/ItemHeaderSingleSelection.vue'
import { ContentsItem } from '@/store/project/default'
import LineChart from '@/components/chart/LineChart.vue'
// import HBarChart from '@/components/HBarChart.vue'
// 세부 항목 제거 후 재 삽입 시 순서 바뀌는 부분 개선 필요 (selected를 key, vlaue-true or false로 변경)
// 데이터가 없는 경우 차트 대신 Message 보이는 기능 구현
// 세부 항목 제거 후 재 삽입 시 순서 바뀌는 부분 개선 필요 (selected를 key, vlaue-true or false로 변경)
// 데이터가 없는 경우 차트 대신 Message 보이는 기능 구현
const { name } = useDisplay()
const contentWidth = computed(() => {
    switch (name.value) {
        case 'xs': return '100%'
        case 'sm': return '47%'
        case 'md': return '31%'
        case 'lg': return '23%'
        case 'xl': return '23%'
        case 'xxl': return '18%'
    }
})
const props = defineProps<{ contentItem: ContentsItem }>()
const items = [
    {
        title: 'RC 공사',
        status: 'On Schedule',
        color: 'grey'
    },
    {
        title: '마감 공사',
        status: 'Leading',
        color: 'success'
    },
    {
        title: '기초 공사',
        status: 'Leading',
        color: 'success'
    },
    {
        title: '토목 공사',
        status: 'Lagging',
        color: 'warning'
    },
    {
        title: '기계 공사',
        status: 'Leading',
        color: 'success'
    },
    {
        title: '전기 공사',
        status: 'On Schedule',
        color: 'grey'
    },
    {
        title: '기타 공사',
        status: 'On Schedule',
        color: 'grey'
    },
    {
        title: 'Hook-Up',
        status: 'Lagging',
        color: 'warning'
    },
    {
        title: '소방 공사',
        status: 'Lagging',
        color: 'warning'
    },
    {
        title: '철골 공사',
        status: 'On Schedule',
        color: 'grey'
    },
    {
        title: '부속동 공사',
        status: 'On Schedule',
        color: 'grey'
    }
]



// const items =['기초공사',
//     'RC 공사',
//     '마감 공사',
//     '이공사',
//     '저공사',
//     '그공사',
//     '무슨 공사',
//     '이런 공사',
//     '그저 그런 공사',
//     '잘된 공사',
//     '머시기',
//     '거시기'
// ]
const status = ['Lagging',
    'Leading',
    'Leading',
    'On Schedule',
    'On Schedule',
    'On Schedule',
    '무슨 공사',
    '이런 공사',
    '그저 그런 공사',
    '잘된 공사',
    '머시기',
    '거시기'
]
</script>
<style scoped></style>
