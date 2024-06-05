<template>
    <Block :row="row" :col="col" class="flex flex-col gap-y-5">
		<div class="flex flex-row justify-between items-center">
			<div v-if="currentView === 'orders'" class="flex items-center">
				<h3 class="flex-1 text-2xl font-medium text-black-100 dark:text-white-100">Pending Orders</h3>
			</div>
			<div v-else class="flex items-center">
				<h3 class="flex-1 text-2xl font-medium text-black-100 dark:text-white-100">Positions</h3>
			</div>
			<div class="flex flex-row justify-between items-center gap-5">
				<div v-if="currentView === 'positions'" class="dropdown tag-font" @click="toggleDropdown" @blur="closeDropdown" tabindex="0">
            		<DropDown @currencyChanged="switchCurrency($event)" class="text-center text-base font-normal text-black-100 dark:text-white-100" width="7em" height="2rem" :items="positionOrderDropDownItems"/>
				</div>
				<button class="shadow-lg w-24 h-8 px-2 py-1 rounded-lg bg-iris-100" @click="switchView">
					<p class="tag-font text-white-100 tracking-wide">{{nextView}}</p>
				</button>
			</div>
		</div>
		<div class="w-full">
			<div v-if="currentView === 'orders'">
				<div v-if="portfolioStore.orders.length === 0">
					<p class="order-id h3-font">No orders yet</p>
				</div>
				<template v-for="order in portfolioStore.orders" :key="order.id">
					<div class="w-full h-16"> 
						<Block class="flex flex-row justify-between items-center py-2 my-4 gap-4">
							<div class="w-20">
								<p class="order-id tag-font">#{{ order.id }}</p>
								<p class="order-pCur monospaced-text-font">{{ order.base }}</p>
							</div>
							<div class="w-60">
								<p class="order-scheduled tag-font">{{ order.buyin ? "BUY" : "SELL" }}</p>
								<p class="order-time monospaced-text-font">{{ order.state }}</p>
							</div>	
							<div class="w-40 h-8 flex flex-row justify-between items-center px-4 bg-white-300 rounded-lg">
								<p class="order-tCur monospaced-tag-font">{{ order.quote }}</p>
								<p class="order-amount monospaced-text-font">{{ order.qty.toLocaleString() }}</p>
							</div>
							<button @click="handleClick(order.id)">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 330 330">
									<path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606	C255,161.018,253.42,157.202,250.606,154.389z"/>
								</svg>
							</button>
						</Block>
					</div>
				</template>
			</div>
			<div v-else>
				<template v-for="(position, idx) in portfolioStore.positions" :key="idx">
					<div class="flex items-center my-2">
						<div class="flex-1 text-left">
							<p class="order-pCur text-font">{{ position.symbol }}</p>
						</div>
						<div class="flex-1 text-right">
							<p class="tag-font">{{ position.balance }}</p>
						</div>
						<div class="flex-none mx-4" style="width: 50px;"> 
							<p class="tag-font text-center">=</p>
						</div>
						<div class="flex-1 text-left">
							<p class="tag-font">{{ currentCurrency }}</p>
						</div>
						<div class="flex-1 text-right">
							<p class="text-font">${{ position.balance * 0.2 }}</p>
						</div>
					</div>
					<hr/>
				</template>
				<div class="flex justify-center my-2">
					<div class="flex-1">
						<p>&nbsp</p> 
					</div>
					<div class="flex-1">
						<p>&nbsp</p>
					</div>
					<div class="flex-none mx-4" style="width: 50px;"> 
						<p class="tag-font text-center">=</p>
					</div>
					<div class="flex-1 text-left">
						<p class="text-font">{{ currentCurrency }}</p>
					</div>
					<div class="flex-1 text-right">
						<p class="text-font">${{ portfolioStore.positions[0].balance * 0.2 * portfolioStore.positions.length }}</p>
					</div>
				</div>
			</div>
		</div>
	</Block>
</template>

<script setup>
import { ref } from 'vue'
import { usePortfolioStore } from '@/stores/portfolioStore';

const portfolioStore = usePortfolioStore()

const positionOrderDropDownItems = ref([
    {
        name: "TWD",
        icon: "/_nuxt/assets/img/base_currency/TWD.png",
    }, {
        name: "USD",
        icon: "/_nuxt/assets/img/base_currency/USD.png",
    }, {
        name: "USDT",
        icon: "/_nuxt/assets/img/base_currency/USDT.png",
    },
]);

const orders = 
[
  {
		time: "2:00PM, 12 Sep 2019",
		orderId: "3415-414",
		scheduled: false,  // ASAP
		amount: 7080, // amount of target currency
		payingCurrency: "ETH",
		targetCurrency: "BTC",
		exchangeRate: 0.55,
	},
	{
		time: "5:00PM, 12 Aug 2023",
		orderId: "4463-562",
		scheduled: true,  // schedule
		amount: 8012, // amount of target currency
		payingCurrency: "BTC",
		targetCurrency: "ETH",
		exchangeRate: 0.45,
	},
	{
		time: "8:00PM, 15 Nov 2023",
		orderId: "7854-123",
		scheduled: false,
		amount: 1145721, // amount of target currency
		payingCurrency: "ETH",
		targetCurrency: "BTC",
		exchangeRate: 0.02,
	},
];

/* ---------- orders ---------- */
const currentView = ref('orders'); // orders / positions
const nextView = ref('positions');
const switchView = () => {
	currentView.value = currentView.value === 'positions' ? 'orders' : 'positions';
	nextView.value = nextView.value === 'positions' ? 'orders' : 'positions';
	console.log('Switching view into', currentView.value, portfolioStore.positions);
}

const currentCurrency = ref('TWD');
const switchCurrency = (x) => {
	currentCurrency.value = x;
	console.log('Switching currency into', x, currentCurrency.value);
}

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  	isDropdownOpen.value = !isDropdownOpen.value;
}
const closeDropdown = () => {
  	isDropdownOpen.value = false;
}

/* ---------- positions ---------- */
const handleClick = (id) => {
  console.log('Order clicked:', id);
}


</script>

