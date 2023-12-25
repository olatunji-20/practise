<template>
  <div>
    <h1>Practising Chart.js for data visualization.</h1>
    <h2>Bar Chart</h2>
    <div class="container">
      <BarChart />
    </div>
    
    <h2>Line Chart</h2>
    <div class="container">
      <LineChart />
    </div>

    <h2>Pie Chart</h2>
    <div class="container">
      <PieChart />
    </div>

    <h2>Dough-nut Chart</h2>
    <div class="container">
      <DoughChart />
    </div>

    <h2>Bubble Chart</h2>
    <div class="container">
      <!-- <BubbleChart /> -->
    </div>

    <h2>Polar-Area Chart</h2>
    <div class="container">
      <!-- <PolarAreaChart /> -->
    </div>

    <h2>Radar Chart</h2>
    <div class="container">
      <!-- <RadarChart /> -->
    </div>

  </div>
</template>

<script>
import BarChart from '@/components/BarChart.vue';
import PieChart from '@/components/PieChart.vue';
import LineChart from '@/components/LineChart.vue';
import DoughChart from '@/components/DoughChart.vue';
import BubbleChart from '@/components/BubbleChart.vue';
import PolarAreaChart from '@/components/PolarAreaChart.vue';
import RadarChart from '@/components/RadarChart.vue';

export default {
    name: 'Chartjs',
    setup() { },
    components: { BarChart, PieChart, LineChart, DoughChart, BubbleChart, PolarAreaChart, RadarChart }
}
</script>

<style scoped>
h1 {
    text-align: center;
    text-decoration: underline;
    margin: 80px auto;
}
h2 {
    text-decoration: underline;
    margin-left: 60px;
}
.container {
    border: 4px solid red;
    width: 90%;
    height: auto;
    margin: 30px auto 100px;
}

</style>