<template>
  <bar id="bar-chart" :options="chartOptions" :data="chartData" :plugins="plugin" :style="myStyles" />
  <span>{{ props.selectChart }}</span>
</template>
  
<script lang="ts" setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors } from 'chart.js'
import { ChartOptions, Plugin } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { watch, reactive, computed } from 'vue';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors)

type DatasetT = {
  label: string,
  data: number[],
  borderWidth: number
}

const props = defineProps<{
  selectChart: boolean;
  title: string[],
  datasets: DatasetT[]
}>();

const chartData = computed(() => {
  return {
    labels: props.title,
    datasets: props.datasets
  }
})

const myStyles = {
  position: 'relative',
}
const sumDataLabel: Plugin = {
  id: 'sumDataLabel',
  afterDatasetsDraw: (chart) => {
    const { ctx } = chart;
    const lastdataIndex = chart.data.datasets.length - 1;
    if (chart.data.labels === undefined) return
    chart.data.labels.forEach((labelName, index) => {
      const datasetArray: number[] = [];
      chart.data.datasets.forEach((dataset) => {
        const value = dataset.data[index];
        if (typeof value === 'number') { // Type assertion here
          datasetArray.push(value);
        }
      });

      function totalSum(total: number, value: number): number {
        return total + value;
      }

      const sum = datasetArray.reduce(totalSum, 0);

      ctx.fillStyle = '#5D87FF';
      ctx.textAlign = 'center';
      ctx.fillText(
        sum.toString(),
        chart.getDatasetMeta(lastdataIndex).data[index].x + 15,
        chart.getDatasetMeta(lastdataIndex).data[index].y + 2
      );
    });
  },
};
// const labels = ['김씨엠', '이씨엠', '박씨엠', '정씨엠', '최씨엠']
// const datasets = [
//   {
//     label: '정상',
//     data: [30, 22, 35, 12, 22],
//     borderwidth: 1
//   },
//   {
//     label: '지연',
//     data: [7, 5, 7, 1, 3],
//     borderwidth: 1
//   },
// ]


const plugin = [ChartDataLabels, sumDataLabel]

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
      // display: false,
      // ticks: {
      //     font: {
      //         weight: 'bold'
      //     }
      // },
      grid: {
        display: false
      },
      stacked: true,
    }
  },
  plugins: {
    // title: {
    //     display: true,
    //     text: `${chartData.labels[0]} : ${sumOfData.value} (합계)`,
    //     align: 'start'
    // },
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