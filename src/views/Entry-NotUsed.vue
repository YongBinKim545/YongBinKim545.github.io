<template>
  <v-container fluid style="height:100%;" class="d-flex justify-center align-center login-form-container">
    <v-card width="310" height="500" class="pa-2">
      <div class="login-header">
        <button @click="isSignIn = true"
          :style="[isSignIn ? { color: 'white', fontWeight: 'bolder' } : {}]">sign-in</button>
        <button @click="isSignIn = false"
          :style="[!isSignIn ? { color: 'white', fontWeight: 'bolder' } : {}]">sign-up</button>
        <div class="animation-target" :class="isSignIn ? '' : 'sign-up'" :style="activeItemPosition"></div>
      </div>

      <transition name="slide-fade" mode="out-in">
        <component :is="activeComponent" />
      </transition>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import SignIn from '@/components/login/SignIn.vue'
import { ref, computed, defineAsyncComponent } from 'vue'

const SignUp = defineAsyncComponent(() => import('@/components/login/SignUp-NotUsed.vue'))
const isSignIn = ref(true)
const activeItemPosition = computed(() => {
  if (isSignIn.value) {
    return { left: '0%' }
  } else {
    return { left: '50%' }
  }
})
const activeComponent = computed(() => {
  if (isSignIn.value) {
    return SignIn
  } else {
    return SignUp
  }
})

</script>
<style lang="scss" scoped>
.login-header {
  position: relative;
  margin: 20px 15px;
  border-radius: 5px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .1);

  button {
    position: relative;
    text-transform: uppercase;
    text-align: center;
    color: black;
    height: 40px;
    width: 50%;
    z-index: 1;
    transition: .3s ease-out;
  }

  .animation-target {
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 0;
    background: rgb(var(--v-theme-primary));
    width: 50%;
    border-radius: 5px;
    transition: .3s ease-out;
  }
}

// Signin, Signup 에 따라 슬라이딩 방향 별도 구성 필요
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateX(-100px);
}

.slide-fade-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
</style>
