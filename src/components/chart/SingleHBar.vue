<template>
    <v-card flat :height="height" :width="250">
        <bar id="bar-chart" :options="chartOptions" :data="chartData" :plugins="plugin" :style="myStyles" />
    </v-card>
</template>

<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors } from 'chart.js'
import { ChartOptions } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { computed } from 'vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors)

type DatasetT = {
    label: string,
    data: number[],
    borderWidth: number
}

const props = defineProps<{
    height: number,
    title: string[];
    datasets: DatasetT[];
}>();

const sumOfData = computed(() => {
    return props.datasets.reduce((total, dataset) => {
        // Assuming data is always an array with a single number
        const value = dataset.data[0] || 0;
        return total + value;
    }, 0)
})


const myStyles = {
    position: 'relative'
}

const plugin = [ChartDataLabels]

const chartData = {
    labels: props.title,
    datasets: props.datasets
}

const chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
        x: {
            stacked: true,
            display: false,
            beginAtZero: true,
            grace: 4
        },
        y: {
            display: false,
            // ticks: {
            //     font: {
            //         weight: 'bold'
            //     }
            // },
            // grid: {
            //     display: false
            // },
            stacked: true,
        }
    },
    plugins: {
        title: {
            display: true,
            // text: `${chartData.labels[0]} : ${sumOfData.value} (합계)`,
            text:`${chartData.labels[0]}`,
            align: 'start'
        },
        colors: {
            enabled: true
        },
        legend: {
            display: false
        },
        tooltip: {
            callbacks: {
                title: () => ''
                // label:(tooltipItem)=>tooltipItem.label
            }
        }
    }
}

</script>