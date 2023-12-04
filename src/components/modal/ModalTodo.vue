<template>
    <v-card flat>
        <v-dialog v-model="dialog" :max-width="1000" persistent transition="dialog-bottom-transition">
            <v-card>
                <v-toolbar dark color="primary">
                    <v-toolbar-title>{{ title }}</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon="mdi-close" dark @click="onClose"></v-btn>
                </v-toolbar>
                <v-card class="pa-3 overflow-y-auto" max-height="700" flat>
                    <div>
                        <v-text-field label="제목" :model-value="formData.name" class="mx-1"></v-text-field>
                        <v-textarea label="세부내용" class="mx-1"></v-textarea>
                    </div>
                    <div :class="mobile ? '' : 'd-flex justify-space-between flex-wrap'">
                        <v-select class="mx-1" :min-width="200" label="담당자"
                            :items="['김채원', '사쿠라', '권은비', '에스파', '장동건', '아이린']" :model-value="formData.charge"></v-select>
                        <v-select class="mx-1" :min-width="200" label="현황" :items="['ToDo', 'Progress', 'Done']"
                            :model-value="formData.stage"></v-select>
                        <v-select class="mx-1" :min-width="150" label="중요도" :items="['높음', '중간', '낮음']"
                            :model-value="formData.priority"></v-select>
                    </div>
                    <div :class="mobile ? '' : 'd-flex justify-space-between flex-wrap'">
                        <custom-date-picker class="mx-1" :min-width="150" label="착수예정" :initialDate="formData.plannedStart"
                            @on-selected="(selectedDate) => formData.plannedEnd = selectedDate">
                        </custom-date-picker>
                        <custom-date-picker class="mx-1" :min-width="150" label="시작일" :initialDate="formData.actualStart"
                            @on-selected="(selectedDate) => formData.plannedEnd = selectedDate">
                        </custom-date-picker>
                        <custom-date-picker class="mx-1" :min-width="150" label="완료예정" :initialDate="formData.plannedEnd"
                            @on-selected="(selectedDate) => formData.plannedEnd = selectedDate">
                        </custom-date-picker>
                        <custom-date-picker class="mx-1" :min-width="150" label="종료일" :initialDate="formData.actualEnd"
                            @on-selected="(selectedDate) => formData.plannedEnd = selectedDate">
                        </custom-date-picker>
                        <!-- Date Picker provided by vuetify - Not Use
                            <custom-date-picker :activate="datePickerOn" @on-selected="(selectedDate) => {
                                formData.due = selectedDate
                            }">
                                <template #inputForm="{ menuOn }">
                                    <v-text-field class="mx-1" label="기한" :model-value="formData.due" readonly
                                        v-bind="menuOn" append-inner-icon="mdi-calendar-month-outline">
                                    </v-text-field>
                                </template>
                            </custom-date-picker> -->
                    </div>
                    <div class="mx-1">
                        <v-expansion-panels>
                            <v-expansion-panel title="첨부파일">
                                <v-expansion-panel-text>
                                    <div :class="mobile ? '' : 'd-flex justify-space-between flex-wrap'">
                                        <v-card :width="mobile ? '100%' : '49%'" flat>
                                            <div>References for To Do (Title 미정)</div>
                                            <div>첨부파일 List Table w/delete action <br /> Add / 삭제는 Save 시 DB 연동</div>
                                            <v-card-actions>
                                                <v-spacer />
                                                <v-btn @click="showFileUploader = true">Add</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                        <v-divider vertical />
                                        <v-card :width="mobile ? '100%' : '49%'" flat>
                                            <div>References for Done (Title 미정)</div>
                                            <div>첨부파일 List Table w/delete action <br /> Add / 삭제는 Save 시 DB 연동</div>
                                            <v-card-actions>
                                                <v-spacer />
                                                <v-btn @click="showFileUploader = true">Add</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </div>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>
                </v-card>
                <v-divider class="mx-2"/>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" variant="text" @click="onSave">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <file-uploader :activate="showFileUploader" @on-close="showFileUploader = false" />
    </v-card>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useDisplay } from 'vuetify'
import { DataT } from '@/store/project/todo'
// import CustomDatePicker from '@/components/modal/DatePicker-NotUsed.vue'
import CustomDatePicker from '@/components/modal/DatePicker.vue'
import FileUploader from '@/components/modal/FileUpload.vue'
const { mobile } = useDisplay()
const props = defineProps<{
    title: string
    activate: boolean
    initialValue: DataT
}>()
const emit = defineEmits(['onClose', 'onSave'])
const dialog = computed(() => props.activate)
const formData = ref(props.initialValue)
const showFileUploader = ref(false)
// const datePickerOn = ref(false)
function onClose() {
    emit('onClose')
}
function onSave() {
    emit('onSave')
}
</script>