<template>
    <doughnut id="doughnut-chart" :options="chartOptions" :data="chartData" :plugins="plugin" :style="myStyles" />
</template>

<script lang="ts" setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js'
import { ChartOptions, Plugin } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { ChartTypeRegistry } from 'chart.js';
import { computed } from 'vue'

ChartJS.register(ArcElement, Tooltip, Legend, Colors)

const myStyles = {
  position: 'relative'
}

const labels = ['To Do', 'In Progress', 'Done']
const datasets = [
  {
    data: [50, 100, 70],
  },
]

const sumOfData = computed(() => {
  return datasets[0]['data'].reduce((acc, v, i)=>{ return acc += v},0)
})

const sumDataLabel:Plugin = {
  id: 'sumDataLabel',
  beforeDatasetsDraw: (chart) => {
    const { ctx } = chart
    const xCoordinate = chart.getDatasetMeta(0).data[0].x
    const yCoordinate = chart.getDatasetMeta(0).data[0].y
    // ctx.font = 'bold 60px'
    ctx.fillStyle = '#5D87FF'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(`합계:${sumOfData.value}`, xCoordinate, yCoordinate)
  }
}
const plugin = assertDoughnutPlugins([ChartDataLabels, sumDataLabel]);

const chartData = {
  labels: labels,
  datasets: datasets
}

const chartOptions:ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  // hoverOffset: 5,
  plugins: {
    legend: {
      display: true,
      // labels:{
      //   font:{
      //     family:'LGSmHa'
      //   }
      // }
    },
  }
}
function assertDoughnutPlugins(plugins: Plugin<any, ChartTypeRegistry>[]): Plugin<'doughnut', ChartTypeRegistry>[] {
  return plugins as Plugin<'doughnut', ChartTypeRegistry>[];
}
</script>