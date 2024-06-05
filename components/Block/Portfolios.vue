<template>
    <Block :row="row" :col="col" class="flex flex-col gap-y-5">
        <div class="flex items-center">
            <h3 class="flex-1 text-2xl font-medium text-black-100 dark:text-white-100">Portfolios</h3>
        </div>
		<div 
			class="portfolio rounded-lg" 
			v-for="portfolio in portfolioStore.portfoliosSimplified" :key="portfolio.id"
			@click="handleClick(portfolio.id, portfolio.name)"
			@mouseover="handleMouseOver($event)"
			@mouseleave="handleMouseLeave($event)"
		>
			<div class="portfolio-id h3-font pl-[5%]">{{ portfolio.name }}</div>
			<div class="flex flex-row px-[10%] justify-between">
				<div class="portfolio-value text-font pl-[35%]">$</div>
				<div class="flex flex-row justify-end items-center">
					<!-- TODO: real amount instead of position-->
					<div class="portfolio-value text-font">{{ portfolio.amount }}&nbsp&nbsp</div>
					<div class="portfolio-currency tag-font">BTC</div>
				</div>
			</div>
		</div>
		<!-- TODO: DEBUG purpose-->
		<!-- <div>
			<button @click="test">TEST</button>
		</div> -->
	</Block>
</template>

<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore';

const nuxtApp = useNuxtApp();
const api = nuxtApp.$api;
const portfolioStore = usePortfolioStore();

const test = () => {
	console.log(portfolioStore.portfolios)
}
// const portfolios = 
// [
// 	{ id: 'Portfolio B', amount: 322041, currency: 'BTC' },
// 	{ id: 'Portfolio A', amount: 147724, currency: 'USDT' },
// 	{ id: 'Portfolio C', amount: 2679, currency: 'TWD' }
// ];

const handleClick = (id, name) => {
  console.log('Portfolio clicked:', id, name);
  portfolioStore.getCurrentPortfolio(id, name);
}

const handleMouseOver = (event) => {
  event.currentTarget.classList.add('hover');
}

const handleMouseLeave = (event) => {
  event.currentTarget.classList.remove('hover');
}

</script>

<style scoped>

.portfolio {
  cursor: pointer; 
	background-image: linear-gradient(to right, rgba(1, 89, 191, 0.2) 0%, rgba(1, 89, 191, 0.2) 100%);
	background-size: 0% 100%;
	background-repeat: no-repeat;
  transition: background-color 0.3s; 
}

.portfolio:hover, .portfolio.hover {
  animation: backgroundSlide 0.5s forwards; 
}

@keyframes backgroundSlide {
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
}
</style>