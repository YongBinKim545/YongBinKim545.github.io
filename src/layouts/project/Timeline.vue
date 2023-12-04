<template>
    <div>
        <item-header :contentsItem=props.contentItem filter-result add-item></item-header>
        <div class="overflow-x-auto ma-2 pb-3">
            <v-timeline side="end" direction="horizontal">
                <v-timeline-item :dot-color="dotColor(item)" v-for="item in timelineItems" :key="item.title" size="small">
                    <template v-slot:opposite>
                        <v-card width="400">
                            <v-toolbar density="compact" :color="dotColor(item)">
                                <template v-slot:prepend>
                                    <v-card-text>
                                        PLAN: {{ item.planneddate.toLocaleString('ko-KR', {
                                            year: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                        }) }}
                                    </v-card-text>
                                </template>
                                <template v-slot:append>
                                    <v-card-text calss="text-caption" v-if="item.completiondate != null">
                                        ACTUAL: {{ item.completiondate.toLocaleString('ko-KR', {
                                            year: 'numeric',
                                            month: 'numeric',
                                            day: 'numeric',
                                        }) }}
                                    </v-card-text>
                                </template>
                            </v-toolbar>
                        </v-card>
                    </template>
                    <v-card width="400">
                        <v-toolbar density="compact">
                            <template v-slot:prepend>
                                <v-toolbar-title>{{ item.title }}</v-toolbar-title>
                            </template>
                            <v-spacer />
                            <v-btn size="small" icon="mdi-pencil"></v-btn>
                            <v-btn size="small" icon="mdi-trash-can-outline"></v-btn>
                        </v-toolbar>
                        <v-card-text>
                            {{ item.content }}
                        </v-card-text>
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import ItemHeader from '@/components/ItemHeaderMultiSelection.vue'
import { ContentsItem } from '@/store/project/default'

const props = defineProps<{ contentItem: ContentsItem }>()

interface timelineItem {
    title: string,
    content: string,
    planneddate: Date,
    completiondate: Date | null
}
const timelineItems = reactive([
    {
        title: '첫 번째',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.',
        planneddate: new Date(2023, 0, 1),
        completiondate: new Date(2023, 0, 1),
    },
    {
        title: '두 번째',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.',
        planneddate: new Date(2023, 2, 1),
        completiondate: new Date(2023, 1, 30),
    },
    {
        title: '세 번째',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.',
        planneddate: new Date(2023, 3, 1),
        completiondate: new Date(2023, 3, 5),
    },
    {
        title: '네 번째',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.',
        planneddate: new Date(2023, 4, 20),
        completiondate: new Date(2023, 4, 15),
    },
    {
        title: '마지막',
        content: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit.',
        planneddate: new Date(2023, 12, 10),
        completiondate: null
    },
])
// function rgb(r, g, b){
//   r = Math.floor(r);
//   g = Math.floor(g);
//   b = Math.floor(b);
//   return ["rgb(",r,",",g,",",b,")"].join("");
// }

function dotColor(item: timelineItem) {
    if (item.completiondate === null) {
        return 'grey'
    }
    if (item.completiondate > item.planneddate) {
        return 'error'
    } else {
        return 'success'
    }
}

</script>
<style scoped></style>