<template>
    <Line id="line-chart" :options="chartOptions" :data="chartData" :plugins="plugin" :style="myStyles" />
</template>

<script lang="ts" setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Colors } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Colors)

// defineProps({
//     height: Number,
// })
const myStyles = {
    position: 'relative',
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aug']
const datasets = [
    {
        label: '계획',
        data: [0, 10, 20, 25, 30, 50, 90, 100],
        datalabels: {
            align: 'start' as 'start',
            anchor: 'start' as 'start',
            color:'#36A2EB'
        },
    },
    {
        label: '실적',
        data: [0, 8, 16, 23, 31, 45],
        datalabels: {
            align: 'end' as 'end',
            anchor: 'end' as 'end',
            color:'#FF6384'
        },
    }
]
const plugin = [ChartDataLabels]

const chartData = {
    labels: labels,
    datasets: datasets
}

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks: {
                display: false,
                // font: {
                //     weight: 'bold'
                // }
            },
            stacked: false,
            grid: {
                display: false
            },
            beginAtZero: true,
            grace: 3
        },
        y: {
            display: false,
            // ticks:{
            //     display:false
            // },
            // grid: {
            //     display: false
            // },
            stacked: false,
            beginAtZero: true,
            grace: 3
        }
    },
    plugins: {
        colors: {
            enabled: true
        }
    },
    elements: {
        line: {
            fill: false,
            tension: 0.4
        }
    }
}

</script>