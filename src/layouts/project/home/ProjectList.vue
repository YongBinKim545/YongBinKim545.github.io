<template>
    <div class="d-flex justify-space-between flex-wrap">
        <v-card min-height="200" :width="mobile ? '100%':'38%'" min-width="250" class="d-flex align-center justify-center ma-2">
            <span>Project List Table (Check Box 내장, Map Marker와 연동)</span>
        </v-card>
        <v-card min-height="500" min-width="250" :width="mobile ? '100%':'58%'" class="d-flex align-center justify-center ma-2">
            <span>Google Map With Marker (Google Map api 적용)</span>
        </v-card>
    </div>
</template>

<script lang="ts" setup>
import {useDisplay} from 'vuetify'
const { mobile } = useDisplay()
</script>