<template>
    <div style="height: 100%;" class="my-2">
        <v-data-table-virtual :headers="appliedHeader" :items="data" style="height: 90%;"
            fixed-header hover multi-sort @click:row="clicked">
            <!-- 향후 Body Custom 필요 있음. 그러면 기본 기능 별도 구현필요 (click event, hovering 등)-->
            <template v-slot:headers="{ columns, getSortIcon, toggleSort, isSorted, sortBy }">
                <tr>
                    <template v-for="column in columns" :key="column.key">
                        <th class="text-center" style="background-color: #EEEEEE;" :style="{ width: `${column.minWidth}`+'%' }">
                            <!-- <th class="text-center" style="background-color: #EEEEEE;"
                        v-if="!mobile || (appliedHeader.find((element: HeaderT) => element.key === column.key)?.mobileShow === true)"> -->
                            <span class="mr-2" @click="() => toggleSort(column)">{{ column.title }}</span>
                            <v-icon :class="!isSorted(column) ? 'v-data-table-header__sort-icon' : ''"
                                :icon="getSortIcon(column)"></v-icon>
                            <div key="badge" class="v-data-table-header__sort-badge" v-if="isSorted(column)">
                                {{ sortBy.findIndex(x => x.key === column.key) + 1 }}
                            </div>
                        </th>
                    </template>
                </tr>
            </template>
        </v-data-table-virtual>
    </div>
</template>

<script lang="ts" setup>
// type ReadonlyHeaders = InstanceType<typeof VDataTable>['headers']
import { DataT, HeaderT } from '@/store/project/todo'
import { ref, computed, watch, onMounted } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const props = defineProps<{
    search: string | undefined,
    headers: HeaderT[],
    data: DataT[]
}>()
const emit = defineEmits(['onClick'])
const appliedHeader = ref()
const mobileHeader = props.headers.slice(0, 1)
const data = computed(() => {
    return filterData(props.search)
})
watch(mobile, (newMobile) => {
    if (newMobile) {
        appliedHeader.value = mobileHeader
    } else {
        appliedHeader.value = props.headers
    }
},
    // { immediate: true }
)

//vuetify 내장 serach 기능은 모바일에서 Header를 줄이면, 보이지 않는 헤더 관련 내용은 검색이 안되서 Filter 함수 별도 구현
function filterData(searchInput: string | undefined) {
    const searchKeyword = searchInput?.toLowerCase();
    if (!searchKeyword) return props.data;
    const filtered = props.data.filter((item) => {
        for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                const searchableValue = String(item[key as keyof DataT]).toLowerCase();
                if (searchableValue.includes(searchKeyword)) {
                    return true;
                }
            }
        }
        return false
    });
    return filtered.length > 0 ? filtered : [];
}

function clicked(event: Event, clickedRow: { item: DataT }) {
    emit('onClick', clickedRow.item)
}

onMounted(() => {
    if (mobile.value) {
        appliedHeader.value = mobileHeader
    } else {
        appliedHeader.value = props.headers
    }
})
</script>

<style scoped>
</style>