<template>
    <!-- for mobile navbar header -->
    <!-- <v-toolbar color="success" v-show="mobile">
                <template v-slot:prepend>
                    <span>Mobile Header(현장 Selector)</span>
                </template>
                <template v-slot:append>
                    <v-btn icon="mdi-window-close" @click.stop="toggleDrawer"></v-btn>
                </template>
            </v-toolbar> -->
    <v-card class="pa-2 ma-2 text-center">
        <div class="d-flex justify-space-around">
            <v-card class="d-flex flex-column" flat>
                <v-tooltip location="right">
                    <template v-slot:activator="{ props }">
                        <v-btn class="text-none" size="small" icon flat v-bind="props" @click="myProjectDialog = true">
                            <v-icon size="large">
                                mdi-check-circle-outline
                            </v-icon>
                        </v-btn>
                    </template>
                    <span>프로젝트 선택</span>
                </v-tooltip>
                <v-tooltip location="right">
                    <template v-slot:activator="{ props }">
                        <v-btn class="text-none" size="small" icon flat v-bind="props" @click="authRequestDialog = true">
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
        <div v-show="!mobile">
            <v-divider class="mt-3" />
            <v-card-subtitle class="d-flex justify-start mt-3">권한그룹</v-card-subtitle>
            <div class="d-flex justify-space-between">
                <v-chip variant="flat" class="text-caption ma-2">CM 현장</v-chip>
                <v-chip variant="flat" class="text-caption ma-2">ADMIN</v-chip>
            </div>
        </div>
    </v-card>

    <dialog-for-project-list v-if="myProjectDialog" title="MY PROJECTs" :activate="myProjectDialog" @on-close="myProjectDialog=false" />
    <dialog-for-project-list v-if="authRequestDialog" title="프로젝트 권한 요청" :activate="authRequestDialog"  @on-close="authRequestDialog=false"/>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { ref, defineAsyncComponent } from 'vue'

// if mobile navbar header is applied, following codes are for close btn of mobile header
// const emit = defineEmits(['toggleDrawer'])
// const toggleDrawer = (): void => {
//     emit('toggleDrawer')
// }
const DialogForProjectList =  defineAsyncComponent(() => import('@/components/modal/ModalProjectList.vue'))
const { mobile } = useDisplay()
const myProjectDialog = ref(false)
const authRequestDialog = ref(false)

</script>

<style lang="scss" scoped>
.avatar-background {
    background: linear-gradient(0deg, #1867c0, #ffffff 30%);
    animation: rotateCircle 10s linear infinite;
}

.avatar-image {
    animation: rotateCircle 10s linear infinite reverse;
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