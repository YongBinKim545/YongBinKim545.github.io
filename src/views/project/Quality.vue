<template>
    <div class="mx-4">
        <v-scroll-x-transition v-for="(component, index) in components" leave-absolute>
            <keep-alive>
                <component :is="component" v-if="contentsItems[index]['visible']" :contentItem="contentsItems[index]" />
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
const TodoStatic = defineAsyncComponent(() => import('@/layouts/project/TodoStatic.vue'))
const ToDo = defineAsyncComponent(() => import('@/layouts/project/ToDo.vue'))
const InProgress = defineAsyncComponent(() => import('@/layouts/project/InProgress.vue'))
const Done = defineAsyncComponent(() => import('@/layouts/project/Done.vue'))

const components = [
    General,
    Timeline,
    TodoStatic,
    ToDo,
    InProgress,
    Done
]
const route = useRoute()
const currentRouteName = computed(() => {
    return route.name as string
})

const store = contentStore()
const contentsItems = computed(() => store.getContentList(currentRouteName.value))
</script>
