<!-- Admin: Dashboard/TotalAmount & Action -->
<template>
    <div class="h-full px-6 py-4 bg-white-100 rounded-xl shadow-md flex flex-col">
        <p class="h2-font">Total Amount</p>  
        <div class="flex flex-row justify-between items-center rounded-md bg-white-200 px-[0.5%] py-[3%] my-[2%]">
            <div class="w-1/2">
                <p class="h3-font text-center">$</p>
            </div>
            <div class="w-1/2 flex flex-row items-center justify-center">
                <p class="h3-font text-center">{{ amount.toLocaleString() }}&nbsp;&nbsp;</p>
                <p class="tag-font text-center ">BTC</p>
            </div>	
        </div>
        <p class="h2-font">Action</p>  
        <div class="flex flex-col justify-between rounded-md border-2 p-[3%] my-[2%] cursor-pointer">
            <p class="h3-font ">Add</p>
            <div class="flex flex-row items-center justify-between gap-2">
                <div class="ml-5" @click="handleDelectPortfolio(portfolio.id)">
                    <svg class="ml-2 w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                </div>
                <p class="h3-font text-center">{{ amount.toLocaleString() }}&nbsp;&nbsp;</p>
                <DropDown class="text-center text-base font-medium text-black-100" width="100%" height="1.6rem" :items="dropDownItems"/>
                <!-- <div class="dropdown tag-font" @click="toggleAddDropdown" @blur="closeAddDropdown" tabindex="0">
					<button class="dropdown-button pl-2 inline-flex border rounded-lg items-center">{{ addCurrentCurrency }}
						<svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</button>
					<div class="dropdown-content flex flex-col absolute z-10 my-1 bg-white-100 shadow-lg rounded-md" v-show="isAddDropdownOpen">
						<button class="text-center px-3">ABC</button>
						<button class="text-center px-3">ABC</button>
						<button class="text-center px-3">ABC</button>
					</div>
				</div> -->
            </div>	
        </div>
        
        <div class="flex flex-col justify-between rounded-md border-2 p-[3%] my-[2%] cursor-pointer">
            <p class="h3-font ">Remove</p>
            <div class="flex flex-row items-center justify-between gap-2">
                <div class="ml-5" @click="handleDelectPortfolio(portfolio.id)">
                    <svg class="ml-2 w-5 h-5 text-gray-800 dark:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                </div>
                <p class="h3-font text-center">{{ amount.toLocaleString() }}&nbsp;&nbsp;</p>
                <!-- <DropDown class="text-center text-xl font-normal text-black-100 dark:text-white-100" width="10rem" height="2.5rem" :items="currencyDropDownItems"/> -->
                <!-- <div class="dropdown tag-font" @click="toggleRemoveDropdown" @blur="closeRemoveDropdown" tabindex="0">
					<button class="dropdown-button pl-2 inline-flex border rounded-lg items-center">{{ removeCurrentCurrency }}
						<svg class="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
							<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
						</svg>
					</button>
					<div class="dropdown-content flex flex-col absolute  z-10 my-1 bg-white-100 shadow-lg rounded-md" v-show="isRemoveDropdownOpen">
						<button class="text-center px-3">ABC</button>
						<button class="text-center px-3">ABC</button>
						<button class="text-center px-3">ABC</button>
					</div>
				</div> -->
                <DropDown class="text-center text-base font-medium text-black-100" width="100%" height="1.6rem" :items="dropDownItems"/>
            </div>	
        </div>
    </div>
</template>
    
<script setup>
import { usePortfolioStore } from '@/stores/portfolioStore';
const portfolioStore = usePortfolioStore();

const dropDownItems = ref([
    {
        name: "ETH",
        icon: "/_nuxt/assets/img/currency/Ethereum.png",
    }, {
        name: "BTC",
        icon: "/_nuxt/assets/img/currency/Bit.png",
    },
]);

// const amount = 322041;

const amount = computed (() => {
    let temp = 0
    for (const x of portfolioStore.portfoliosSimplified) {
        temp += parseInt(x.amount, 10);
    }
    return temp
})

const ledgers = [
    {
        ledgerId: '1',
        quoteCurrency: 'string',
        baseCurrency: 'string',
        quantity: 322041,
        price: 543,
        sendPid: 'ObjectID', 
        receivePid: 'ObjectID', 
    },
    {
        ledgerId: '2',
        quoteCurrency: 'string',
        baseCurrency: 'string',
        quantity: 234513,
        price: 543,
        sendPid: 'ObjectID', 
        receivePid: 'ObjectID', 
    },
    {
        ledgerId: '3',
        quoteCurrency: 'string',
        baseCurrency: 'string',
        quantity: 958265,
        price: 543,
        sendPid: 'ObjectID', 
        receivePid: 'ObjectID', 
    },
    {
        ledgerId: '4',
        quoteCurrency: 'string',
        baseCurrency: 'string',
        quantity: 958265,
        price: 543,
        sendPid: 'ObjectID', 
        receivePid: 'ObjectID', 
    },
]


import { ref, defineEmits } from 'vue';
const emit = defineEmits(['selectLedger']);

const selectedLedger = ref('0');  // not select any ledger
const handleSelectLedger = (id) => {
    if(selectedLedger.value === id) {
        selectedLedger.value = '0';
    }
    else {
        selectedLedger.value = id;
    }
    emit('selectLedger', id);
    // console.log('Ledger clicked:', selectedLedger.value);
}
</script>
    
<style></style>