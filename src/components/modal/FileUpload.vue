<template>
    <v-card flat>
        <v-dialog v-model="dialog" :max-width="500" transition="dialog-bottom-transition">
            <v-toolbar dark color="primary">
                <v-toolbar-title>File Uploader</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon="mdi-close" dark @click="onClose"></v-btn>
            </v-toolbar>
            <DropZone @files-dropped="addFiles" v-slot="{ dropZoneActive }">
                <div>Select Files To Upload</div>
                <label for="file-input">
                    <div class="d-flex justify-center align-center file-drop-area" flat>
                        <div v-if="dropZoneActive">Drop Files</div>
                        <div v-else>Drag Files or <strong><em>Click here</em></strong> to select files</div>
                    </div>
                </label>
                <v-file-input id="file-input" multiple @change="onInputChange" truncate-length="50" hide-details
                    v-show="false" />

                <div class="mt-3">Selected Files</div>
                <v-divider />
                <div class="selected-file-area d-flex align-center">
                    <div v-show="files.length">
                        <FilePreview v-for="file of files" :key="file.id" :file="file" tag="ul" @remove="removeFile" />
                    </div>
                </div>
                <v-divider />
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" variant="text" @click.prevent="uploadFiles(files)">
                        Save
                    </v-btn>
                </v-card-actions>
            </DropZone>
        </v-dialog>
    </v-card>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import DropZone from '@/components/file/DropZone.vue';
import FilePreview from '@/components/file/FilePreview.vue';
import useFileList from '@/compositions/file-list'
import createUploader from '@/compositions/file-uploader'

const props = defineProps<{
    activate: boolean
}>()
const dialog = computed(() => props.activate)
const emit = defineEmits(['onClose'])

const { files, addFiles, removeFile } = useFileList()
function onInputChange(e: Event): void {
    if (e.target instanceof HTMLInputElement) {
        const selectedFiles = Array.from(e.target.files as FileList);
        addFiles(selectedFiles);
        e.target.value = ''; // reset so that selecting the same file again will still cause it to fire this change
    }
}

const { uploadFiles } = createUploader('http://localhost:3000/')

function onClose() {
    emit('onClose')
}
</script>

<style scoped>
.file-drop-area {
    border-width: 3px;
    border-radius: 5px;
    border-style: dashed;
    border-color: grey;
    height: 100px;
}
.selected-file-area {
    min-height:50px;
}
</style>