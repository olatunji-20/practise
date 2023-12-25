<template>
    <div class="bar">
        <canvas id="lineChart"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto'

export default {
    name: 'LineChart',
    setup() {
        onMounted(() =>  {
            const ctx = document.getElementById("lineChart");

            const lineChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'],
                    datasets: [{
                        label: 'My First Line Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: 'rgb(75, 192, 192)',
                        tension: 0.1
                    },
                    {
                        label: 'My Second Line Dataset',
                        data: [15, 39, 85, 41, 76, 95, 30],
                        fill: false,
                        borderColor: 'greenyellow',
                        tension: 0.1
                    },
                    {
                        label: 'My Third Line Dataset',
                        data: [35, 89, 20, 12, 96, 85, 10],
                        fill: false,
                        borderColor: 'hotpink',
                        tension: 0.1
                    }]
                }
            })
            lineChart;
        })
        
    }

}
</script>

<style scoped>
.bar {
    border: 4px solid green;
    width: auto;
    height: 400px;
}
</style>