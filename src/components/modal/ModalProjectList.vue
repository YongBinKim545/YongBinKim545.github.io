<template>
    <v-card flat>
        <v-dialog v-model="dialog" :max-width="1000">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-toolbar-title>{{ title }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon="mdi-close" dark @click="onClose"></v-btn>
                </v-toolbar>
                <v-card class="pa-3 overflow-y-auto" max-height="700" flat v-if="title==='MY PROJECTs'">
                    <div>상단 검색 버튼 배치</div>
                    <div>선택 가능한 (권한이 있는) 프로젝트 리스트를 Check Box가 있는 Table 형태로 표시(멀티 선택 불가)</div>
                    <div>적용 버튼 누르면 선택된 프로젝트 기준으로 화면 Update</div>
                </v-card>
                <v-card class="pa-3 overflow-y-auto" max-height="700" flat v-else>
                    <div>상단 검색 버튼 배치</div>
                    <div>선택 가능한 (권한이 있는) 프로젝트 리스트를 Check Box가 있는 Table 형태로 표시(멀티 선택 가능)</div>
                    <div>신청하기 버튼 누르면 권한 요청되고, 해당 프로젝트 책임자에게 결재 요청</div>
                </v-card>

                <v-divider class="mx-2" />
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" variant="text" @click="onSave">
                        적용
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{
    title: string
    activate: boolean
}>()
const emit = defineEmits(['onClose', 'onSave'])
const dialog = computed(() => props.activate)
function onClose() {
    emit('onClose')
}
function onSave() {
    emit('onSave')
}
</script>