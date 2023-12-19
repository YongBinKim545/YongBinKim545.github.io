<template>
  <v-text-field @focus="handleFocus" @blur="handleBlur" v-model="searchKeyword" class="expanding-search mr-2 mt-1"
    :class="{ focused: searchFocus, blured: !searchFocus }" density="compact" variant="solo" rounded placeholder="SEARCH"
    prepend-inner-icon="mdi-magnify" single-line hide-details @input="handleInput"></v-text-field>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const searchFocus = ref(false);
const searchKeyword = ref(null)
const emit = defineEmits(['update', 'focused', 'blured']);

const handleFocus = () => {
  searchFocus.value = true;
  emit('focused');
};

const handleBlur = () => {
  searchFocus.value = false;
  emit('blured');
};

const handleInput = () => {
  emit('update', searchKeyword.value);
};
</script>

<style lang="scss" scoped>
.expanding-search {
  position: absolute;
  top:15px;
  right: 0px;
  transition: 0.5s ease;

  &.blured {
    width: 40px;
    height: 40px;
  }

  &.focused {
    width: 300px;
  }
}
</style>