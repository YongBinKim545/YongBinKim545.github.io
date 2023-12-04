<template>
    <v-card class="mt-3">
        <v-toolbar>
            <template v-slot:prepend>
                <v-card :width="100" variant="text" class="text-center">{{title}}</v-card>
                <v-divider class="ml-3" vertical inset />
            </template>
            <v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="props" class="ml-2">
                        <template v-slot:append>
                            <v-icon>mdi-menu-down</v-icon>
                        </template>
                        <template v-slot:default>
                            <span>FILTER</span>
                        </template>
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
                        <div class="column_wrapper">
                        <v-list-item v-for="item in items" :value="item" @click="toggleItem(item)">
                            <template v-slot:prepend>
                                <v-checkbox-btn :model-value="selected.includes(item)"></v-checkbox-btn>
                            </template>
                            <template v-slot:default>
                                <span>{{ item }}</span>
                            </template>
                        </v-list-item>
                    </div>
                    </v-list>
                </v-card>
            </v-menu>
            <v-spacer />
            <v-card variant="text" class="ml-2">
                <v-btn density="compact" variant="plain" :ripple="false" class="ma-1" v-for="item in selected">
                    <template v-slot:append>
                        <v-icon
                            @click="() => selected.splice(selected.indexOf(item), 1)">mdi-close-circle</v-icon>
                    </template>
                    <template v-slot:default>
                        <span>{{ item }}</span>
                    </template>
                </v-btn>
            </v-card>

        </v-toolbar>
        <v-container>
            <v-row>
                <v-col sm="12" md="6" lg="4">
                    <v-card flat variant="text">
                        <v-toolbar density="compact" color="background" class="mb-2">
                            <v-toolbar-title>사업비 산출</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn>
                                더보기
                            </v-btn>
                        </v-toolbar>
                        <v-bar-chart id="chart_budget" :height="300" />
                    </v-card>
                </v-col>
                <v-col sm="12" md="6" lg="4">
                    <v-card flat variant="text">
                        <v-toolbar density="compact" color="background" class="mb-2">
                            <v-toolbar-title>사업비 집행</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn>
                                더보기
                            </v-btn>
                        </v-toolbar>
                            <!-- <h-bar-chart id="chart_contract" :height="300"/> -->
                            <span>가로 Bar Stacked Chart 삽입 (사업비:계약완료/계약전), (집행:집행 완료/집행전)</span>
                    </v-card>
                </v-col>
                <v-col sm="12" md="6" lg="4">
                    <v-card flat variant="text">
                        <v-toolbar density="compact" color="background" class="mb-2">
                            <v-toolbar-title>사업비 추정(계약 변경)</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn>
                                더보기
                            </v-btn>
                        </v-toolbar>
                            <!-- <h-bar-chart id="chart_contract" :height="300" /> -->
                            <span>세로 Grouped Bar Chart 가로축:계약자 요청, 발주자 요청, 합계, Category:계약자 산출, CM 검토, 최종 계약</span>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue'
import VBarChart from '@/components/chart/VBarChart.vue'
// 세부 항목 제거 후 재 삽입 시 순서 바뀌는 부분 개선 필요 (selected를 key, vlaue-true or false로 변경)
// 데이터가 없는 경우 차트 대신 Message 보이는 기능 구현

defineProps<{title:string}>()

const items = [
    '세금',
    '예비비',
    '용역비',
    '공사비',
    '세분화 필요한가 ?'
]

const selected = ref<string[]>([])
const menu = ref<boolean>(false)
const selectedAll = computed(() => {
    return selected.value.length === items.length
})
const selectedSome = computed(() => {
    return selected.value.length > 0 && selected.value.length < items.length
})
function toggleAll():void {
    if (selectedAll.value) {
        selected.value = []
    } else {
        Object.assign(selected.value, items)
    }
}
function toggleItem(item:string):void {
    if (selected.value.includes(item)){
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
.column_wrapper {
    max-height: 200px;
    display: flex;
    flex-flow: column wrap;
}
</style>