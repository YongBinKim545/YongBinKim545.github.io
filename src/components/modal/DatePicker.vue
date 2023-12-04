<template>
    <v-text-field v-model="selectedDate" class="mx-1" style="text-align:start;" type="date" :label="label" onkeydown="return false" @update:model-value="dateSelected">
    </v-text-field>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { ref } from 'vue'

const props = defineProps<{
    label: string | undefined,
    initialDate: string | null | undefined,
}>()
const emit = defineEmits(['onSelected'])
const selectedDate = ref()
function dateSelected() {
    emit('onSelected', selectedDate)
}
onMounted(() => {
    selectedDate.value = props.initialDate
})
</script>

<style lang="scss" scoped>
input[type='date']::-webkit-calendar-picker-indicator {
  position: absolute; // 이를 설정하기 위해 사전에 relative를 설정한 것이다.
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: transparent; // 배경은 투명하게,
  color: transparent; // 글자도 투명하게! 이 두 설정을 통해 캘린더 아이콘을 사라지게 만든다.
  cursor: pointer;
}
</style>