<!-- Admin: Account/Positions -->
<template>
    <div class="px-6 py-4 h-full w-auto bg-white-100 rounded-xl shadow-md flex flex-col">
      <p class="h2-font pb-[2%]">Positions</p>  
      <div class="grid gap-2">
        <div class="portfolio px-2 w-64 h-16" v-for="(position, idx) in portfolioStore.positions" :key="idx" @mouseover="handleMouseOver" @mouseleave="handleMouseLeave">
          <div>{{ position.symbol }}</div>
          <div class="flex flex-row justify-end items-center">
              <div class="">${{ position.balance.toLocaleString() }} &nbsp;&nbsp;&nbsp;BTC/USDT</div>
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
    { id: 1, name: 'Position A', amount: 147724 },
    { id: 2, name: 'Position B', amount: 322041 },
    { id: 3, name: 'Position C', amount: 2679 },
    { id: 4, name: 'Position B', amount: 322041 },
    { id: 5, name: 'Position B', amount: 1451 },
]);


const handleMouseOver = (event) => {
    event.currentTarget.classList.add('hover');
};

const handleMouseLeave = (event) => {
    event.currentTarget.classList.remove('hover');
};

</script>



<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

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