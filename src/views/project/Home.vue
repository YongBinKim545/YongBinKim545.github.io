<template>
    <div class="mx-4">
        <v-scroll-x-transition v-for="(component, index) in components" leave-absolute>
            <keep-alive>
                <component :is="component" v-if="contentsItems[index]['visible']" />
            </keep-alive>
        </v-scroll-x-transition>
    </div>
</template>

<script lang="ts" setup>
import ProjectList from '@/layouts/project/home/ProjectList.vue'
import { computed, defineAsyncComponent } from 'vue'
import { contentStore } from '@/store/project/default'
import { useRoute } from 'vue-router'

const QualityStatus = defineAsyncComponent(() => import('@/layouts/project/home/QualityStatus.vue'))
const ScheduleStatus = defineAsyncComponent(() => import('@/layouts/project/home/ScheduleStatus.vue'))

const components = [
    ProjectList,
    QualityStatus,
    ScheduleStatus,
]
const route = useRoute()
const currentRouteName = computed(() => {
    return route.name as string
})

const store = contentStore()
const contentsItems = computed(() => store.getContentList(currentRouteName.value))
</script>