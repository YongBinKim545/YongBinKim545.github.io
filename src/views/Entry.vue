<template>
    <v-container fluid style="height: 100%;" class="d-flex justify-center align-center login-form-container">
        <v-card width="310" height="480" class="px-2 pt-2" variant="elevated">
            <!-- Header -->
            <div class="login-header">
                <button @click="isSignIn = true"
                    :style="[isSignIn ? { color: 'white', fontWeight: 'bolder' } : {}]">sign-in</button>
                <button @click="isSignIn = false"
                    :style="[!isSignIn ? { color: 'white', fontWeight: 'bolder' } : {}]">sign-up</button>
                <div class="active-tab" :class="{ 'sign-up': !isSignIn }" :style="activeTabPosition"></div>
            </div>
            <!-- Transitions -->
            <transition name="signin">
                <sign-in v-show="isSignIn" />
            </transition>
            <transition name="signup">
                <sign-up v-show="!isSignIn" />
            </transition>
        </v-card>
    </v-container>
</template>
  
<script lang="ts" setup>
import SignIn from '@/components/login/SignIn.vue'
import { ref, computed, defineAsyncComponent } from 'vue'

const SignUp = defineAsyncComponent(() => import('@/components/login/SignUp.vue'))

const isSignIn = ref(true)
const activeTabPosition = computed(() => ({
  left: isSignIn.value ? '0%' : '50%',
}))

</script>
<style lang="scss" scoped>
.login-header {
    position: relative;
    margin:  20px 25px;
    border-radius: 5px;
    background: transparent;

    button {
        position: relative;
        text-transform: uppercase;
        text-align: center;
        color: black;
        height: 40px;
        width: 50%;
        z-index: 1;
        transition: all .3s ease-out;
    }

    .active-tab {
        position: absolute;
        height: 100%;
        top: 0;
        z-index: 0;
        background: rgb(var(--v-theme-primary));
        width: 50%;
        border-radius: 5px;
        transition: .6s ease-out;
    }
}
.signin-enter-active {
    position: absolute;
    animation: signin-enter .6s ease-out
}
.signin-leave-active {
    position: absolute;
    animation: signin-leave .4s ease
}
.signup-enter-active {
    position: absolute;
    animation: signup-enter .6s ease-out
}
.signup-leave-active {
    position: absolute;
    animation: signup-leave 0.4s ease
}

@keyframes signin-enter {
    0% {
        transform: translateX(400px);
        opacity: 0
    }

    20% {
        transform: translateX(200px);
        opacity: 0.2
    }

    40% {
        transform: translate(100px, 1px) rotate(1deg);
        opacity: 0.4
    }
    70% {
        transform: translate(0, -1px) rotate(-1deg);
        opacity: 0.7
    }
    85% {
        transform: translate(-50px, 0) rotate(0deg);
        opacity: 0.85
    }

    100% {
        transform: translateX(0);
        opacity: 1
    }
}

@keyframes signin-leave {
    0% {
        transform: translateX(0);
        opacity: 1
    }
    100% {
        transform: translateX(500px);
        opacity: 0
    }
}

@keyframes signup-enter {
    0% {
        transform: translateX(-400px);
        opacity: 0
    }

    20% {
        transform: translateX(-200px);
        opacity: 0.2
    }

    40% {
        transform: translate(-100px, 1px) rotate(-1deg);
        opacity: 0.4
    }
    70% {
        transform: translate(0px, -1px) rotate(1deg);
        opacity: 0.7
    }
    85% {
        transform: translate(50px, 0) rotate(0deg);
        opacity: 0.85
    }

    100% {
        transform: translateX(0);
        opacity: 1
    }
}
@keyframes signup-leave {
    0% {
        transform: translateX(0);
        opacity: 1
    }

    100% {
        transform: translateX(-500px);
        opacity: 0
    }
}


</style>