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
        <div class="d-flex justify-space-around align-center">
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
                <div class="d-flex justify-center align-center" style="cursor:pointer" @click="userInfoDialog = true">
                    <div class="avatar-background">
                    </div>
                    <v-avatar size="x-large" style="cursor:pointer">
                        <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                    </v-avatar>
                </div>
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

    <dialog-for-project-list v-if="myProjectDialog" title="MY PROJECTs" :activate="myProjectDialog"
        @on-close="myProjectDialog = false" />
    <dialog-for-project-list v-if="authRequestDialog" title="프로젝트 권한 요청" :activate="authRequestDialog"
        @on-close="authRequestDialog = false" />
        <dialog-for-project-list v-if="userInfoDialog" title="사용자 정보" :activate="userInfoDialog"
        @on-close="userInfoDialog = false" />
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { ref, defineAsyncComponent } from 'vue'

// if mobile navbar header is applied, following codes are for close btn of mobile header
// const emit = defineEmits(['toggleDrawer'])
// const toggleDrawer = (): void => {
//     emit('toggleDrawer')
// }
const DialogForProjectList = defineAsyncComponent(() => import('@/components/modal/ModalProjectList.vue'))
const { mobile } = useDisplay()
const myProjectDialog = ref(false)
const authRequestDialog = ref(false)
const userInfoDialog = ref(false)

</script>

<style lang="scss" scoped>
.avatar-background {
    position: absolute;
    border-radius: 50%;
    height:63px;
    width: 63px;
    background: rgba(0,0,0,.5);
    overflow:hidden;
}
.avatar-background::before {
    content:'';
    position:absolute;
    inset: -5px 10px;
    background: linear-gradient(45deg, #00ccff, #d400d4);
    // background: linear-gradient(45deg, rgb(var(--v-theme-primary)), rgb(var(--v-theme-warning)));
    transition: 0.5s;
    animation: avatarBorder 5s linear infinite;
}
.avatar-background:hover::before {
    inset: -5px 0px;
}
.avatar-background::after {
    content:'';
    position:absolute;
    inset: 3px;
    background: transparent;
    border-radius: 50%;
    z-index:1;
}

@keyframes avatarBorder {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>