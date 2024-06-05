<!-- Admin: Dashboard/Balance -->
<template>
<div class="px-6 py-4 h-full bg-white-100 rounded-xl shadow-md flex flex-col">
  <p class="h2-font pb-[2%]">Balance</p>  
  <div class="grid grid-col-row gap-2">
    <div class="portfolio px-2 w-64 h-16 cursor-pointer" v-for="portfolio in portfolioStore.portfoliosSimplified" :key="portfolio.id" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
      <div>{{ portfolio.name }}</div>
      <div class="flex flex-row justify-end items-center">
          <div class="">${{ portfolio.amount }} BTC</div>
          <div @click="handleDelectPortfolio(portfolio.id)">
              <svg class="ml-2 w-5 h-5 text-gray-100 dark:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore();

// Initialize portfolios as a reactive reference
const portfolios = ref([
    { id: 1, name: 'Portfolio A', amount: 147724 },
    { id: 2, name: 'Portfolio B', amount: 322041 },
    { id: 3, name: 'Portfolio C', amount: 2679 },
    { id: 4, name: 'Portfolio B', amount: 322041 },
    { id: 5, name: 'Portfolio B', amount: 1451 },
    { id: 6, name: 'Portfolio B', amount: 3465232 },
    { id: 7, name: 'Portfolio B', amount: 12345 },
]);

const handleDelectPortfolio = (pid) => {
    console.log(`Delete portfolio ${pid}`);
    portfolios.value = portfolios.value.filter(portfolio => portfolio.id !== pid);
}

const handleMouseOver = (event) => {
  event.currentTarget.classList.add('hover');
};

const handleMouseLeave = (event) => {
  event.currentTarget.classList.remove('hover');
};

</script>



<style scoped>


.portfolio {
  position: relative;
  border: 2px solid rgba(216, 216, 216, 1);
  margin-bottom: 8px;
  border-radius: 8px;
  background: linear-gradient(to right, rgba(64, 199, 158, 0.2) 0%, rgba(64, 199, 158, 0.2) 100%);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.5s, border-color 0.5s, border-radius 0.5s;
}

.portfolio::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;
  background: linear-gradient(to right, rgba(64, 199, 158, 0.2) 0%, rgba(64, 199, 158, 0.2) 100%);
  z-index: -1;
  transition: background 0.5s, border-radius 0.5s;
}

.portfolio:hover::before, .portfolio.hover::before {
  background: linear-gradient(to right, rgba(64, 199, 158, 0.2) 0%, rgba(64, 199, 158, 0.2) 100%);
  border-radius: 8px;
}

.portfolio:hover, .portfolio.hover {
  background-size: 100% 100%;
  border-color: rgba(64, 199, 158, 1);
  border-radius: 8px;
}


</style>