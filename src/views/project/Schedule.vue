<template>
    <div class="mx-4">
        <v-scroll-x-transition v-for="(component, index) in components" leave-absolute>
            <keep-alive>
                <component :is="component" v-if="contentsItems[index]['visible']" :contentItem="contentsItems[index]"/>
            </keep-alive>
        </v-scroll-x-transition>
    </div>
</template>

<script lang="ts" setup>
import General from '@/layouts/project/General.vue'
import { computed, defineAsyncComponent } from 'vue'
import { contentStore } from '@/store/project/default'
import { useRoute } from 'vue-router'

const Timeline = defineAsyncComponent(() => import('@/layouts/project/Timeline.vue'))
const ScheduleManagement = defineAsyncComponent(() => import('@/layouts/project/ScheduleManagement.vue'))
const ProgressCurve = defineAsyncComponent(() => import('@/layouts/project/ProgressCurve.vue'))
const Gantt  = defineAsyncComponent(() => import('@/layouts/project/Gantt.vue'))

const components = [
    General,
    Timeline,
    ScheduleManagement,
    ProgressCurve,
    Gantt,
]
const route = useRoute()
const currentRouteName = computed(() => {
    return route.name as string
})

const store = contentStore()
const contentsItems = computed(()=>store.getContentList(currentRouteName.value))


</script>