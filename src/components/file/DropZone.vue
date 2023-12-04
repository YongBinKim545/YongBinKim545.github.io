<template>
    <v-card :data-active="active" @dragenter.prevent="setActive" @dragover.prevent="setActive"
        @dragleave.prevent="setInactive" @drop.prevent="onDrop" class="pa-3" flat>
        <slot :dropZoneActive="active"></slot>
    </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const emit = defineEmits(['files-dropped'])

const active = ref(false)
let inActiveTimeout: ReturnType<typeof setTimeout> | null = null

// setActive and setInactive use timeouts, so that when you drag an item over a child element,
// the dragleave event that is fired won't cause a flicker. A few ms should be plenty of
// time to wait for the next dragenter event to clear the timeout and set it back to active.
function setActive() {
    active.value = true
    clearTimeout(inActiveTimeout as ReturnType<typeof setTimeout>)
}

function setInactive() {
    inActiveTimeout = setTimeout(() => {
        active.value = false
    }, 50)
}

function onDrop(e: DragEvent) {
    setInactive()
    const files = e.dataTransfer?.files ?? [];
    if (files) {
        const fileArray = Array.from(files) as File[];
        emit('files-dropped', fileArray);
    }
}

function preventDefaults(e: Event) {
    e.preventDefault()
}

const events: string[] = ['dragenter', 'dragover', 'dragleave', 'drop']

onMounted(() => {
    events.forEach((eventName) => {
        document.body.addEventListener(eventName, preventDefaults)
    })
})

onUnmounted(() => {
    events.forEach((eventName) => {
        document.body.removeEventListener(eventName, preventDefaults)
    })
})

</script>