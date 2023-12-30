<template>
    <div class="bar">
        <canvas id="polarChart"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto'

export default {
    name: 'PolarAreaChart',
    setup() {
        onMounted(() => {
            const ctx = document.getElementById("polarChart");

            const polarChart = new Chart(ctx, {
                type: 'polarArea',
                data: {
                    labels: [
                        'Red1',
                        'Green1',
                        'Yellow1',
                        'Grey1',
                        'Blue1'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [11, 16, 7, 3, 14],
                        backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(75, 192, 192)',
                        'rgb(255, 205, 86)',
                        'rgb(201, 203, 207)',
                        'rgb(54, 162, 235)'
                        ],
                        hoverOffset: 10
                    }]
                    },
                options: {}
            })
            polarChart;
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