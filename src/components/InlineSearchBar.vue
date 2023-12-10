<template>
  <v-text-field
    @focus="handleFocus"
    @blur="handleBlur"
    v-model="searchKeyword"
    class="expanding-search mr-2 mt-1"
    :class="{ focused: searchFocus, blured: !searchFocus }"
    density="compact"
    variant="solo"
    rounded
    placeholder="SEARCH"
    prepend-inner-icon="mdi-magnify"
    single-line
    hide-details
    @input="handleInput"
  ></v-text-field>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';

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
  transition: min-width 0.5s, max-width 0.5s;
}

.expanding-search.blured {
  max-width: 43px;
  min-width: 41px;
}

.expanding-search.focused {
  max-width: 100%;
}
</style>