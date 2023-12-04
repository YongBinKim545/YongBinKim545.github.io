<template>
    <v-app-bar flat>
        <v-app-bar-nav-icon variant="text" @click.stop="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-button">Title if needed</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn class="text-none mr-3" icon v-bind="props">
                    <v-badge color="error" content="9+">
                        <v-icon size="large" color="primary">mdi-bell-ring-outline</v-icon>
                    </v-badge>
                </v-btn>
            </template>
            <span>12 Pending Items</span>
        </v-tooltip>
        <v-divider inset vertical class="ma-2" />
        <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn class="text-none" icon v-bind="props">
                    <v-icon size="large" color="primary">
                        mdi-account-multiple-outline
                    </v-icon>
                </v-btn>
            </template>
            <span>Searching For Team Members</span>
        </v-tooltip>
    </v-app-bar>
</template>

<script lang="ts" setup>
const emit = defineEmits(['toggleDrawer'])
const toggleDrawer = (): void => {
    emit('toggleDrawer')
}

</script>

<style scoped>
/* .logoutdiv {
    border-left:solid thin grey ;
} */
</style>