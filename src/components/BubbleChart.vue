<template>
    <div class="bar">
        <!-- <p>sheriff sheriff BARCHART</p> -->
        <canvas id="myChart"></canvas>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import Chart from 'chart.js/auto'

export default {
    name: 'BubbleChart',
    setup() {
        onMounted(() => {
            console.log("lalalal");
            const ctx = document.getElementById("myChart");

            const myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['one', 'two', 'three', 'four', 'five', 'six'],
                    datasets: [{
                        label: 'My First Dataset',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1
                    },
                    {
                        label: 'My Second Dataset',
                        data: [20, 12, 40, 95, 74, 35, 80],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(255, 205, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(201, 203, 207, 0.2)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(255, 205, 86)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)',
                            'rgb(153, 102, 255)',
                            'rgb(201, 203, 207)'
                        ],
                        borderWidth: 1
                    }]
                    },
                options: {
                    scales: {
                    y: {
                        beginAtZero: true
                    }
                    }
                }
            })
            myChart;
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