<template>
    <small>프로젝트 선택하는 Filter 삽입, 담당자 별/계약별 선택 토글 삭제</small>
    <todo-static :content-item="contentsItems[2]" />
</template>

<script lang="ts" setup>
import TodoStatic from '@/layouts/project/quality/TodoStatic.vue'
import { computed } from 'vue'
import { contentStore } from '@/store/project/default'

const store = contentStore()
const contentsItems = computed(() => store.getContentList('ProjectQuality'))

</script>