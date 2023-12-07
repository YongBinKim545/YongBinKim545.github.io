<template>
    <!-- <v-app-bar flat extended> -->
    <v-card class="mx-6 mt-2 d-flex flex-wrap" :class="flexType" fluid :flat="mobile ? true:false">
        <!-- 프로젝트 전체 공통 Item 필요 시 -->
        <!-- <v-btn class="ma-1" @click="toggleItem(contentGeneral)" flat v-show="currentRouteName != 'ProjectHome'">
            <template v-slot:prepend>
                <v-icon :color="contentGeneral.visible ? 'primary' : 'grey'">mdi-check-circle</v-icon>
            </template>
            <template v-slot:default>
                <span>{{ contentGeneral.title }}</span>
            </template>
        </v-btn> -->
            <template v-for="content in contentsItems">
                <v-btn class="ma-1" @click="toggleItem(content)" flat>
                    <template v-slot:prepend>
                        <v-icon :color="content.visible ? 'primary' : 'grey'">mdi-check-circle</v-icon>
                    </template>
                    <template v-slot:default>
                        <span>{{ content.title }}</span>
                    </template>
                </v-btn>
            </template>
        <v-divider v-show="mobile" />
    </v-card>
    <!-- </v-app-bar> -->
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { contentStore, ContentsItem } from '@/store/project/default'
import { useRoute } from 'vue-router'

const {mobile} = useDisplay()
const route = useRoute()
const currentRouteName = computed(() => {
    return route.name as string
})
const store = contentStore()
const contentsItems = computed(() => store.getContentList(currentRouteName.value))
// 프로젝트 전체 공통 아이템 필요 시
// const contentGeneral: Ref<ContentsItem> = computed(() => store.contentGeneral)

const { name } = useDisplay()
const flexType = computed(() => {
    switch (name.value) {
        case 'xs': return 'justify-space-between'
        case 'sm': return 'justify-space-between'
        case 'md': return 'justify-space-between'
        case 'lg': return 'justify-start'
        case 'xl': return 'justify-start'
        case 'xxl': return 'justify-start'
    }
})


//너무 빠른 마우스 연타는 무시
let isToggle = false
function toggleItem(content: ContentsItem): void {
    if (!isToggle) {
        // 프로젝트 공통 콘텐츠 있으면 적용
        // if (content.name === 'general') {
        //     store.toggleGeneralContent()
        // } else {
        //     store.setContent(currentRouteName.value, content.index)
        // }
        store.setContent(currentRouteName.value, content.index)
        isToggle = true
        setTimeout(() => {
            isToggle = false;
        }, 300)
    }
}

</script>

<style scoped></style>