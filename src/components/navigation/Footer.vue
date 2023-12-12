<template>
    <v-footer app :order="mobile ? 0:-1">
        <!-- <v-app-bar flat :order="mobile ? -1 : 0"> -->
        <v-card width="100%" min-height="35" class="my-2 d-flex justify-space-between align-center">
            <span>Footer1</span>
            <v-spacer />
            <span>Footer2</span>
            <v-spacer />
            <span>Footer3</span>
        </v-card>
    </v-footer>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
const { mobile } = useDisplay()

</script>