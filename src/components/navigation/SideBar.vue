<template>
    <v-navigation-drawer v-bind:value="drawer" floating width="300">
        <template v-slot:prepend>
            <v-toolbar color="success" v-show="mobile">
                <template v-slot:prepend>
                    <span>Mobile Header(현장 Selector)</span>
                </template>
                <template v-slot:append>
                    <v-btn icon="mdi-window-close" @click.stop="toggleDrawer"></v-btn>
                </template>
            </v-toolbar>
            <v-card class="pa-2 ma-2 text-center" height="240" v-show="!mobile">
                <div class="d-flex justify-space-around">
                    <v-card class="d-flex flex-column" flat>
                        <v-tooltip location="right">
                            <template v-slot:activator="{ props }">
                                <v-btn class="text-none" size="small" icon flat v-bind="props">
                                    <v-icon size="large">
                                        mdi-check-circle-outline
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>프로젝트 선택</span>
                        </v-tooltip>
                        <v-tooltip location="right">
                            <template v-slot:activator="{ props }">
                                <v-btn class="text-none" size="small" icon flat v-bind="props">
                                    <v-icon size="large">
                                        mdi-plus-circle-outline
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>프로젝트 권한 요청</span>
                        </v-tooltip>
                        <v-tooltip location="right">
                            <template v-slot:activator="{ props }">
                                <v-btn class="text-none" size="small" icon flat v-bind="props">
                                    <v-icon size="large">
                                        mdi-logout
                                    </v-icon>
                                </v-btn>
                            </template>
                            <span>Log Out</span>
                        </v-tooltip>
                    </v-card>
                    <div>
                        <v-tooltip location="right">
                            <template v-slot:activator="{ props }">
                                <v-btn size="large" class="avatar-background" icon v-bind="props" flat>
                                    <v-avatar size="large" class="avatar-image">
                                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                                    </v-avatar>
                                </v-btn>
                            </template>
                            <span>마이 페이지 링크</span>
                        </v-tooltip>
                        <div class="mt-2">
                            <span class="text-h6">성이름</span>
                        </div>
                        <div class="text-caption">email-address@dnocm.co.kr</div>
                    </div>
                </div>
                <v-divider class="mt-3" />
                <v-card-subtitle class="d-flex justify-start mt-3">권한그룹</v-card-subtitle>
                <div class="d-flex justify-space-between">
                    <v-chip variant="flat" class="text-caption ma-2">CM 현장</v-chip>
                    <v-chip variant="flat" class="text-caption ma-2">ADMIN</v-chip>
                </div>
            </v-card>
        </template>
        <v-card class="pa-2 ma-2 overflow-y-auto" max-height="90%" :flat="mobile">
            <v-list variant="flat">
                <menu-lists :items="nodes" :depth="0" />
            </v-list>
        </v-card>
        <template v-slot:append>
            <div class="ma-4">
                <v-btn prepend-icon="mdi-cog-outline" block>
                    <template v-slot:append>
                        시스템 관리 (관리자만 보임)
                    </template>
                </v-btn>
            </div>
            <!-- <div class="mx-4 mb-6 mt-2" v-show="mobile">
                <v-btn prepend-icon="mdi-logout"  block>
                    <template v-slot:append>
                        로그아웃
                    </template>
                </v-btn>
            </div> -->
        </template>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import MenuLists from './MenuLists.vue'
import { sidebarStore } from '@/store/default/sidebar'
import { useRoute } from 'vue-router';

defineProps({
    drawer: Boolean,
})
const emit = defineEmits(['toggleDrawer'])
const toggleDrawer = (): void => {
    emit('toggleDrawer')
}
const { mobile } = useDisplay()
const route = useRoute()
const menus = sidebarStore()
const path = route.path.split('/')[1]
const nodes = computed(() => menus.getMenus(path))

</script>

<style lang="scss" scoped>
.avatar-background {
    background: linear-gradient(0deg, #1867c0, #ffffff 50%);
    animation: rotateCircle 20s linear infinite;
}

.avatar-image {
    animation: rotateCircle 20s linear infinite reverse;
}

@keyframes rotateCircle {
    0% {
        transform: rotate(0);
    }

    25% {
        transform: rotate(90deg);
    }

    50% {
        transform: rotate(180deg);
    }

    75% {
        transform: rotate(270deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>