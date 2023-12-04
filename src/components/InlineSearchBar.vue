<template>
  <v-text-field
    @focus="()=>{
      searchFocus=true
      $emit('focused')
    }"
    @blur="()=>{
      searchFocus=false
      $emit('blured')
    }"
    class="expanding-search mr-2 mt-1"
    :class="{ focused: searchFocus, blured: !searchFocus }"
    density="compact"
    variant="solo"
    rounded
    placeholder="SEARCH"
    prepend-inner-icon="mdi-magnify"
    single-line
    hide-details
    @input="$emit('update', $event.target.value)"
  ></v-text-field>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
defineEmits(['update', 'focused', 'blured'])
const searchFocus = ref()
</script>
<style lang="scss" scoped>
.expanding-search {
  transition:min-width 0.5s, max-width 0.5s
}
.expanding-search.blured {
    max-width: 43px;
    min-width:41px;
}
.expanding-search.focused {
    max-width: 100%;
}
</style>