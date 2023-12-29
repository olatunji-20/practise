<template>
    <div class="bar">
        <!-- <p>sheriff sheriff PIE-CHART</p> -->
        <canvas id="pieChart"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto'

export default {
    name: 'PieChart',
    setup() {
        onMounted(() => {
            const ctx = document.getElementById("pieChart");
    
            const pieChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: [
                        'attack',
                        'midfield',
                        'defence'
                    ],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [300, 50, 100],
                        backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 205, 86)'
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
    border: 4px solid yellow;
    width: auto;
    height: 400px;
}
</style>