<template>
    <component :is="tag" class="file-preview">
        <v-btn @click="removeFile" icon="mdi-close" size="x-small"></v-btn>
        <img :src="file.url" :alt="file.file.name" :title="file.file.name" />
        <span class="status-indicator loading-indicator" v-show="file.status == 'loading'">In Progress</span>
        <span class="status-indicator success-indicator" v-show="file.status == true">Uploaded</span>
        <span class="status-indicator failure-indicator" v-show="file.status == false">Error</span>
    </component>
</template>
  
<script setup lang="ts">

export interface CustomFile {
    file: File;
    url: string;
    status: string | boolean | null;
}

const props = defineProps({
    file: { type: Object as () => CustomFile, required: true },
    tag: { type: String, default: 'li' },
});

const remove = defineEmits(['remove']);

function removeFile(): void {
    remove('remove', props.file);
}
</script>