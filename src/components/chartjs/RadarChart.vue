<template>
    <div class="bar">
        <!-- <p>sheriff sheriff BARCHART</p> -->
        <canvas id="radarChart"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto'

export default {
    name: 'RadarChart',
    setup() {
        onMounted(() => {
            const ctx = document.getElementById("radarChart");

            const radarChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: [
                        'Eating',
                        'Drinking',
                        'Sleeping',
                        'Designing',
                        'Coding',
                        'Cycling',
                        'Running'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [65, 59, 90, 81, 56, 55, 40],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                    },
                    {
                        label: 'My Second Dataset',
                        data: [28, 48, 40, 19, 96, 27, 100],
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                    },
                    {
                        label: 'My third Dataset',
                        data: [88, 18, 20, 89, 26, 77, 40],
                        fill: true,
                        backgroundColor: 'greenyellow',
                        borderColor: 'blue',
                        pointBackgroundColor: 'green',
                        pointBorderColor: 'red',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                    }]
                    },
                options: {
                    elements: {
                        line: {
                            borderWidth: 2
                        }
                    }
                }
            })
            radarChart;
        })
    }

}
</script>

<style scoped>
.bar {
    border: 4px solid purple;
    width: auto;
    height: 400px;
}
</style>