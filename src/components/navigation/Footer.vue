<template>
    <v-footer app width="100%">
        <!-- <v-container v-show="!fab" fluid>
            <v-toolbar density="compact">
                <v-list-item>D&O CM</v-list-item>
            </v-toolbar>
        </v-container> -->
        <v-spacer />
        <v-btn v-scroll="onScroll" v-show="fab" color="primary" @click="toTop" icon="mdi-chevron-up">
        </v-btn>
    </v-footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const fab = ref(false)
function onScroll(e: Event) {
    if (typeof window === 'undefined') return
    const top = window.scrollY
    fab.value = top > 20
}

function toTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

</script>