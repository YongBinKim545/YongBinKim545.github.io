<template>
    <v-app-bar flat :order="mobile ? -1 : 0">
        <label for="nav-icon">
            <div class="nav-icon-box ml-5" :class="drawer && mobile ? 'active' : ''">
                <span></span>
                <span></span>
                <span></span>
                <!-- <div class="top" :class="drawer && mobile ? 'active' : ''"></div>
                <div class="middle" :class="drawer && mobile ? 'active' : ''"></div>
                <div class="bottom" :class="drawer && mobile ? 'active' : ''"></div> -->
            </div>
        </label>
        <v-btn id="nav-icon" v-show="false" @click.stop="toggleDrawer"></v-btn>
        <!-- <v-app-bar-nav-icon variant="text" @click.stop="toggleDrawer"></v-app-bar-nav-icon> -->
        <v-toolbar-title class="text-button">Title if needed</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
                <v-btn class="text-none mr-3" icon v-bind="props">
                    <v-badge color="error" dot>
                        <v-icon size="large" color="primary">mdi-bell-ring-outline</v-icon>
                    </v-badge>
                </v-btn>
            </template>
            <span>12 Pending Items</span>
        </v-tooltip>
        <!-- <v-divider inset vertical class="ma-2" /> -->
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
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const emit = defineEmits(['toggleDrawer'])
defineProps({
    drawer: Boolean,
})
const toggleDrawer = (): void => {
    emit('toggleDrawer')
}
</script>

<style lang="scss" scoped>
.nav-icon-box {
    padding: 2px 1px;
    border-radius: 100%;
    cursor: pointer;
    overflow: hidden;

    span {
        display: block;
        width: 20px;
        height: 3px;
        margin: 4px;
        // background-color: rgba(var(--v-theme-primary),0.7);
        background-color: rgba(0, 0, 0, 0.6);
        transition: 0.7s;
    }

    &.active {
        span:first-child {
            transform: translateY(7px) rotate(135deg);
            transition-delay: 0.2s;
        }

        span:nth-child(2) {
            transform: translate(50px, 0);
            opacity: 0;
        }

        span:last-child {
            transform: translateY(-7px) rotate(-135deg);
            transition-delay: 0.2s;
        }
    }

    // &:hover {
    //     background-color: #EEEEEE;
    // }
}
</style>