<template>
    <div>
        <item-header :contentsItem=props.contentItem filter-result>
            <template v-slot:action>
                <v-btn append-icon="mdi-plus" @click="showDialog(null)">
                    ADD ITEM
                </v-btn>
            </template>
        </item-header>
        <v-card height="67vh" class="mx-2 mt-2" flat>
            <small>Note: 주기적인 항목은 반복해서 Todo에 추가</small>
            <v-toolbar color="transparent">
                <single-h-bar :datasets="datasets1" :title="['담당자 지정 현황']" :height="60" v-show="!searchFocus || !mobile" />
                <single-h-bar :datasets="datasets2" :title="['Item 유형 분류']" :height="60" v-show="!searchFocus || !mobile" />
                <v-spacer />
                <inline-search-bar @update="(searchKeyword) => searchTodo = searchKeyword" @focused="searchFocus=true" @blured="searchFocus=false"/>
            </v-toolbar>
            <kanban-table :search="searchTodo" :headers="headers" :data="works" @on-click="(item) => showDialog(item)" />
        </v-card>
        <dialog-for-edit title="To-Do Details" v-if="dialogActivate" :initialValue="selectedItem" :activate="dialogActivate" @on-close="closeDialog" />
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

const DialogForEdit =  defineAsyncComponent(() => import('@/components/modal/ModalTodo.vue'))
const { mobile } = useDisplay()
const props = defineProps<{ contentItem: ContentsItem }>()
const searchTodo = ref()
const searchFocus = ref()
const store = todoItemStore()
const headers = computed(() => store.getHeader())
const works = computed(() => store.getTodo() || [])
const initialItem:DataT = {
    name: 'name',
    stage: 'todo'
}
const selectedItem = ref(initialItem)
const dialogActivate = ref(false)
function showDialog(item: DataT | null) {
    dialogActivate.value = true
    if (item !== null) {
        selectedItem.value = item
    } else {
       selectedItem.value = initialItem
    }
}
function closeDialog() {
    dialogActivate.value = false
}
const datasets1 = [
    {
        label: '지정',
        data: [10],
        borderWidth: 1
    },
    {
        label: '미지정',
        data: [11],
        borderWidth: 1
    },
]
const datasets2 = [
    {
        label: '검토시점 미도래',
        data: [10],
        borderWidth: 1
    },
    {
        label: '검토시점 도래',
        data: [11],
        borderWidth: 1
    },
]
</script>
<style scoped></style>