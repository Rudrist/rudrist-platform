<!-- Admin: Account/chart -->
<template>
    <div class="h-full px-6 py-4 bg-white-100 rounded-xl shadow-md flex flex-col">
        <p class="h2-font">{{ portfolioStore.currentPortfolioName }}</p>
        <div class="h-[65%] my-auto">
            <Pie v-if="loaded" :data="chartData" :options="chartOptions" :style="chartStyles"/>
        </div>
    </div>
</template>
 

<script lang="ts" setup>
import { defineComponent, ref, onMounted } from 'vue';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';
import { usePortfolioStore } from '@/stores/portfolioStore';
// import * as chartConfig from './chartConfig';
const portfolioStore = usePortfolioStore()
const loaded = ref(true)

ChartJS.register(ArcElement, Tooltip, Legend);
const chartLabels = computed(() => {
    return portfolioStore.positionNames
})

const chartData = computed(() => {
    const amounts = portfolioStore.positions.map((x) => x.balance)
    return {
        // labels: ['Porfolio A', 'Porfolio B', 'Porfolio C', 'Porfolio D'],
        labels: portfolioStore.positionNames,
        datasets: [
            {
                backgroundColor: ['#FDDB77', '#F66663', '#8AC79C', '#A0E6F3'],
                // data: ['147', '20', '80', '10']
                data: amounts
            }
        ]
    }
})

const chartOptions = computed(() => {
    return {
        responsive: true,
        maintainAspectRatio: false,  
    }
})

const chartStyles = computed(() => ({
    position: 'relative',
    height: `${chartHeight.value}px`,
}));
const chartHeight = ref(400); // Default height


</script>
  