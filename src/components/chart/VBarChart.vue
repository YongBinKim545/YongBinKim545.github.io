<template>
  <bar id="bar-chart" :options="chartOptions" :data="chartData" :plugins="plugin" :style="myStyles" />
</template>

<script lang="ts" setup>
// 소팅 후 상위 5개만 Label 표시 하는 걸로 구현 필요
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors } from 'chart.js'
import { ChartOptions, Plugin } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, Colors)

const myStyles = {
  position: 'relative',
}

const sumDataLabel: Plugin = {
  id: 'sumDataLabel',
  afterDatasetsDraw: (chart) => {
    const { ctx, scales: { x } } = chart;
    const lastdataIndex = chart.data.datasets.length - 1;

    y_labels.forEach((labelName, index) => {
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
        x.getPixelForValue(index),
        chart.getDatasetMeta(lastdataIndex).data[index].y - 10
      );
    });
  },
};
const y_labels = ['1차', '2차', '3차', '4차', '5차']
const datasets = [
  {
    label: '세금',
    data: [10, 11, 12, 13],
    borderwidth: 1
  },
  {
    label: '예비비',
    data: [11, 12, 13, 14, 15],
    borderwidth: 1
  },
  {
    label: '용역비',
    data: [20, 21, 22, 23, 24],
    borderwidth: 1
  },
  {
    label: '공사비',
    data: [100, 110, 120, 131, 129],
    borderwidth: 1
  }
]


const plugin = [ChartDataLabels, sumDataLabel]

const chartData = {
  labels: y_labels,
  datasets: datasets
}

const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  //onResize: function(chart, data) {
  //   const n = data.length;
  //   chart.canvas.parentNode.style.height = `${64 + n * 32}px`;
  //  chart.update();
  //},
  scales: {
    x: {
      ticks: {
        font: {
          weight: 'bold'
        }
      },
      stacked: true,
      grid: {
        display: false
      }
    },
    y: {
      display: false,
      stacked: true,
      beginAtZero: true,
      grace: 4
    }
  },
  plugins: {
    colors: {
      enabled: true
    }
  }
}

</script>