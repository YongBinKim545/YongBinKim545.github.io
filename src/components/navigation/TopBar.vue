<template>
    <!-- <v-app-bar flat :order="mobile ? -1 : 0"> -->
    <v-app-bar flat order="-1">
        <label for="nav-icon" v-if="mobile">
            <div class="nav-icon-box-mobile ml-5" :class="drawer ? 'active' : ''">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </label>
        <!-- <label for="nav-icon" v-else>
            <div class="ml-5">
                <v-icon class="expand-icon" :class="{'expanded' : drawer}">mdi-chevron-double-right</v-icon>
            </div>
        </label> -->
        <label for="nav-icon" v-else>
            <div class="nav-icon-box-desktop ml-5" :class="drawer ? 'active' : ''">
                <span></span>
                <span></span>
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
.nav-icon-box-mobile {
    padding: 2px 2px;
    border-radius: 100%;
    cursor: pointer;
    overflow: hidden;

    span {
        display: block;
        width: 20px;
        height: 3px;
        margin: 4px;
        // background-color: rgba(var(--v-theme-primary),0.7);
        background-color: rgba(0, 0, 0, 0.8);
        transition: 0.7s ease;
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

.nav-icon-box-desktop {
    padding: 2px 2px;
    border-radius: 100%;
    cursor: pointer;
    overflow: hidden;

    span {
        float: left;
        width: 12px;
        height: 12px;
        border-top: 3px solid rgba(0, 0, 0, 0.8);
        border-right: 3px solid rgba(0, 0, 0, 0.8);
        transform: rotate(45deg);
        transition: 0.7s ease;
    }

    &.active {
        span {
            transform: scaleX(-1) rotate(45deg);
        }
    }

}










// .expand-icon {
//     cursor: pointer;
//     transition: transform .6s ease;

//     &.expanded {
//         transform: rotate(180deg);
//     }
// }
</style>