<template>
    <div class="bar">
        <!-- <p>sheriff sheriff DOUGHNUT CHART</p> -->
        <canvas id="doughChart"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto'

export default {
    name: 'DoughChart',
    setup() {
        onMounted(() => {
            const ctx = document.getElementById("doughChart");

            const doughChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: [
                        'Red',
                        'Blue',
                        'Yellow',
                        'green'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50, 105, 180],
                        backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)',
                        'green'
                        ],
                        hoverOffset: 4
                    }]
                }
            })
        })
        
    }

}
</script>

<style scoped>
.bar {
    border: 4px solid yellowgreen;
    width: auto;
    height: 400px;
}
</style>