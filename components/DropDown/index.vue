<script setup>
import { ref } from 'vue';

defineProps(["width", "height", "items"]);

const toggleListVisibility = (evt) => {
    const dropdown = evt.currentTarget.parentNode;
    dropdown.classList.toggle("active");
}
</script>

<template>
    <div class="relative">
        <div 
            class="
                relative flex items-center cursor-pointer
                rounded-3xl border-2 border-gray-200 
                bg-white-100 dark:bg-black-200
            " 
            data-label="selected" 
            @click="toggleListVisibility" 
            :style="'width:'+width+'; height:'+height"
        >
            <div class="flex items-center flex-1 h-full" data-label="info">
                <div class="grid place-items-center aspect-square h-full">
                    <img class="aspect-square h-3/4" :src="items[0].icon" alt="">
                </div>
                <span class="flex-1">{{ items[0].name }}</span>
            </div>
            <div class="grid place-items-center aspect-square h-full">
                <img class="aspect-square h-1/2 rotate-180 dark:invert" src="~/assets/img/arrow/Black.png" alt="">
            </div>
        </div>
        <ul
            class="
                [&:not(.active>ul)]:invisible
                absolute overflow-hidden flex flex-col top-[110%] w-full 
                border-2 border-gray-200 bg-white-100 dark:bg-black-200
            "
            :style="'border-radius: calc(' + height + ' / 2)'"
        >
            <DropDownItem v-for="(item, idx) in items" :width="width" :height="height" :name="item.name" :icon="item.icon"></DropDownItem>
            <!--
            <li :class="'relative w-['+width+'] h-['+height+']'" class="
                flex items-center cursor-pointer
                hover:bg-white-200 dark:hover:bg-black-100 
                after:aspect-square after:h-full
            ">
                <div class="flex items-center flex-1 h-full">
                    <div class="grid place-items-center aspect-square h-full">
                        <img class="aspect-square h-3/4" src="~/assets/img/currency/Cosmos.png" alt="">
                    </div>
                    <span class="flex-1">Cos</span>
                </div>
            </li>
            <li :class="'relative w-['+width+'] h-['+height+']'" class="
                flex items-center cursor-pointer
                hover:bg-white-200 dark:hover:bg-black-100 
                after:aspect-square after:h-full
            ">
                <div class="flex items-center flex-1 h-full">
                    <div class="grid place-items-center aspect-square h-full">
                        <img class="aspect-square h-3/4" src="~/assets/img/currency/Doge.png" alt="">
                    </div>
                    <span class="flex-1">Doge</span>
                </div>
            </li>
            <li :class="'relative w-['+width+'] h-['+height+']'" class="
                flex items-center cursor-pointer
                hover:bg-white-200 dark:hover:bg-black-100 
                after:aspect-square after:h-full
            ">
                <div class="flex items-center flex-1 h-full">
                    <div class="grid place-items-center aspect-square h-full">
                        <img class="aspect-square h-3/4" src="~/assets/img/currency/Lite.png" alt="">
                    </div>
                    <span class="flex-1">Lite</span>
                </div>
            </li>
            <li :class="'relative w-['+width+'] h-['+height+']'" class="
                flex items-center cursor-pointer
                hover:bg-white-200 dark:hover:bg-black-100 
                after:aspect-square after:h-full
            ">
                <div class="flex items-center flex-1 h-full">
                    <div class="grid place-items-center aspect-square h-full">
                        <img class="aspect-square h-3/4" src="~/assets/img/currency/Polkadot.png" alt="">
                    </div>
                    <span class="flex-1">Polk</span>
                </div>
            </li>
            <li :class="'relative w-['+width+'] h-['+height+']'" class="
                flex items-center cursor-pointer
                hover:bg-white-200 dark:hover:bg-black-100 
                after:aspect-square after:h-full
            ">
                <div class="flex items-center flex-1 h-full">
                    <div class="grid place-items-center aspect-square h-full">
                        <img class="aspect-square h-3/4" src="~/assets/img/currency/Ethereum.png" alt="">
                    </div>
                    <span class="flex-1">ETH</span>
                </div>
            </li>
            <li :class="'relative w-['+width+'] h-['+height+']'" class="
                flex items-center cursor-pointer
                hover:bg-white-200 dark:hover:bg-black-100 
                after:aspect-square after:h-full
            ">
                <div class="flex items-center flex-1 h-full">
                    <div class="grid place-items-center aspect-square h-full">
                        <img class="aspect-square h-3/4" src="~/assets/img/currency/Bit.png" alt="">
                    </div>
                    <span class="flex-1">BTC</span>
                </div>
            </li>
            -->
        </ul>
    </div>
</template>

<style scoped></style>
