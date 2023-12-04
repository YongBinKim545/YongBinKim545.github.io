<template>
    <div>
        <div class="d-flex flex-wrap justify-space-between">
            <v-card class="ma-2" min-width="280" :width="contentWidth" height="160" title="CONTRACT">
                <template v-slot:append>
                    <v-tooltip location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn size="small" icon v-bind="props" flat>
                                <v-icon color="primary">
                                    mdi-pencil-outline
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>편집-CM 직원만 보임</span>
                    </v-tooltip>
                </template>
                <v-card-text>
                    <v-select v-model="select" variant="underlined" :items="contracts" :hint="`계약코드:${select.code}`"
                        :item-props="itemProps" persistent-hint return-object label="계약을 선택하세요" required></v-select>
                </v-card-text>
            </v-card>
            <v-card class="ma-2" min-width="280" :width="contentWidth" height="160" title="KEY MILESTONES">
                <v-card-text>
                    <div>착공:2022-02-01</div>
                    <div>준공:2024-03-31</div>
                    <div>장비입고:2024-03-31</div>
                </v-card-text>
            </v-card>
            <v-card class="ma-2" min-width="280" :width="contentWidth" height="160" title="ADDRESS">
                <template v-slot:append>
                    <v-tooltip location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn size="small" icon v-bind="props" flat>
                                <v-icon color="primary">
                                    mdi-map-marker-outline
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>구글 지도로 보기</span>
                    </v-tooltip>
                    <v-tooltip location="top">
                        <template v-slot:activator="{ props }">
                            <v-btn size="small" icon v-bind="props" flat>
                                <v-icon color="primary">
                                    mdi-pencil-outline
                                </v-icon>
                            </v-btn>
                        </template>
                        <span>편집-CM 직원만 보임</span>
                    </v-tooltip>
                </template>
                <v-card-text>
                    <span>위치: E. Pecos Road, Queen Creek, Arizona 85140</span>
                </v-card-text>
            </v-card>
            <v-card class="ma-2" min-width="280" :width="contentWidth" height="160" title="PROGRESS">
                <v-card-text>
                    <div class="d-flex justify-space-between">
                        <div v-for="item in progress">
                            <v-progress-circular :size="60" :width="8" :model-value="item.value" color="primary">
                                <template v-slot:default>
                                    <span class="text-caption">{{ item.value }} %</span>
                                </template>
                            </v-progress-circular>
                            <v-card :width="60" class="text-center mt-1 text-caption" flat>{{ item.name }}</v-card>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { ContentsItem } from '@/store/project/default'
const props = defineProps<{ contentItem: ContentsItem }>()
const { name } = useDisplay()
const contentWidth = computed(() => {
    switch (name.value) {
        case 'xs': return '100%'
        case 'sm': return '100%'
        case 'md': return '47%'
        case 'lg': return '23%'
        case 'xl': return '23%'
        case 'xxl': return '23%'
    }
})

const progress = [
    {
        name: '공정율',
        value: 58
    },
    {
        name: '기간경과',
        value: 60
    },
    {
        name: '사업비집행',
        value: 63
    },
]

interface projectID {
    code: string,
    name: string
}
const contracts: projectID[] = [
    { code: 'A0610', name: 'xxx 신축공사' },
    { code: 'A0610-01', name: 'xxx yyy 개보수 공사' },
    { code: 'A0610-02', name: 'xxx zzz 확장공사' },
    { code: 'A0610-03', name: 'xxx aaa 확장공사' },
    { code: 'A0610-04', name: 'xxx bbb 개보수 공사' },
]
const select = ref(contracts[0])
function itemProps(item: projectID) {
    return {
        title: item.name,
        subtitle: item.code
    }
}
// onMounted(()=>{
//     console.log(mobile.value)
// })
// onBeforeUnmount(()=>{
//     window.removeEventListener('resize', onResize)
// })
// function onResize() {
//     console.log(window.innerWidth)
// }

</script>