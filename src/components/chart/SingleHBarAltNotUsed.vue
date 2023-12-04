<template>
    <div class="d-flex align-center">
        <v-card flat :style="{width:30+'%'}">{{props.item.title}}</v-card>
        <div :style="`width:${props.item.value1 * 0.6}%`">
            <v-progress-linear color="primary" height="15" model-value="100">
                <span class="text-caption">{{ props.item.label1 }}</span>
            </v-progress-linear>
        </div>
        <div :style="`width:${props.item.value2 * 0.6}%`">
            <v-progress-linear color="grey" height="15" model-value="100">
                <span class="text-caption">{{ props.item.label2 }}</span>
            </v-progress-linear>
        </div>
    </div>
</template>

<script lang="ts" setup>
type DatasetT = {
    title: string,
    value1:number,
    value2:number,
    label1:string,
    label2:string
}
const props = defineProps<{
    item:DatasetT
}>();

</script>