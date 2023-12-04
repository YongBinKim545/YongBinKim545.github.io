<template>
    <div>
        <item-header :contentsItem=props.contentItem filter-result></item-header>
        <v-card height="67vh" class="mx-2 mt-2" flat>
            <v-toolbar color="transparent">
                <single-h-bar :datasets="datasets1" :title="['적용현황']" :height="60" v-show="!searchFocus || !mobile" />
                <single-h-bar :datasets="datasets2" :title="['완료현황']" :height="60" v-show="!searchFocus || !mobile" />
                <v-spacer />
                <inline-search-bar @update="(searchKeyword) => searchTodo = searchKeyword" @focused="searchFocus=true" @blured="searchFocus=false"/>
            </v-toolbar>
            <kanban-table :search="searchTodo" :headers="headers" :data="works" @on-click="(item) => showDialog(item)" />
        </v-card>
        <dialog-for-edit title="Done Details" v-if="dialogActivate" :initialValue="selectedItem" :activate="dialogActivate" @on-close="closeDialog" />
    </div>
</template>

<script lang="ts" setup>
import ItemHeader from '@/components/ItemHeaderMultiSelection.vue'
import KanbanTable from '@/components/KanbanTable.vue'
import SingleHBar from '@/components/chart/SingleHBar.vue'
import InlineSearchBar from '@/components/InlineSearchBar.vue'
import { ContentsItem } from '@/store/project/default'
import { todoItemStore, DataT } from '@/store/project/todo'
import { ref, computed, defineAsyncComponent } from 'vue'
import { useDisplay } from 'vuetify'
// 세부 항목 제거 후 재 삽입 시 순서 바뀌는 부분 개선 필요 (selected를 key, vlaue-true or false로 변경)
// 데이터가 없는 경우 차트 대신 Message 보이는 기능 구현

const DialogForEdit = defineAsyncComponent(() => import('@/components/modal/ModalTodo.vue'))
const { mobile } = useDisplay()
const props = defineProps<{ contentItem: ContentsItem }>()
const searchTodo = ref()
const searchFocus = ref()
const store = todoItemStore()
const headers = computed(() => store.getHeader())
const works = computed(() => store.getDone() || [])
const initialItem:DataT = {
    name: 'name',
    stage: 'todo'
}
const selectedItem = ref(initialItem)

const dialogActivate = ref(false)
function showDialog(item: DataT) {
    dialogActivate.value = true
    selectedItem.value = item

}
function closeDialog() {
    dialogActivate.value = false
}

const datasets1 = [
    {
        label: '적용',
        data: [20],
        borderWidth: 1
    },
    {
        label: '미적용',
        data: [10],
        borderWidth: 1
    },
]
const datasets2 = [
    {
        label: '정상',
        data: [25],
        borderWidth: 1
    },
    {
        label: '지연',
        data: [5],
        borderWidth: 1
    },
]
</script>
<style scoped></style>