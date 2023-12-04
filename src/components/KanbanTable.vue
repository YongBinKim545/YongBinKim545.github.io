<template>
    <div style="height: 100%;" class="my-2">
        <v-data-table-virtual :headers="appliedHeader" :items="data" style="height: 90%;"
            fixed-header hover multi-sort @click:row="clicked">
            <!-- Body까지 Custom하면 vuetify 쓸필요 없는 것 같음. 기본 기능 거의 사용 못하고 새로 구현 해야 함 (제일 귀찮았던거는 click event 및 hovering 효과 구현)
            모바일에서도 검색창이 전체 Data에 대해 동작하기 위해 Items를 Computed로 Filter해서 넣었음 (vuetify 제공 search나 Filter기능 쓰지 않음)
            -->
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
.v-data-table-header {
    justify-content: 'center';
}
</style>