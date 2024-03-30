<script setup>
defineProps(["row", "col"]);

const dropDownItems = ref([
    {
        name: "Limit",
        icon: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    }, {
        name: "Market",
        icon: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    },
]);

const optionsBS = ref([{
    name: 'Buy', 
    color: '--lime-100',
}, {
    name: 'Sell', 
    color: '--fuschi-100',
}]);

const getSiblings = function(e){
    let siblings = [];
    if(!e.parentNode) return siblings;
    let sibling = e.parentNode.firstChild;
    while(sibling){
        if(sibling.nodeType === 1 && sibling !== e){
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
}

const onChangeBS = (evt, color) => {
    evt.currentTarget.classList.add("active");
    getSiblings(evt.currentTarget).forEach((e)=>e.classList.remove("active"));
    evt.currentTarget.parentNode.parentNode.style.setProperty("--active-color", getComputedStyle(document.documentElement).getPropertyValue(color));
}
</script>

<template>
    <Block :row="row" :col="col" class="flex flex-col gap-2.5">
        <div class="flex items-center">
            <h3 class="flex-1 text-2xl font-medium text-black-100 dark:text-white-100">Place Your Orders</h3>
        </div>
        <div class="block-content flex flex-col justify-between w-full flex-1" :style="'--active-color:var('+optionsBS[0].color+')'">
            <ul class="option-bs flex rounded-lg overflow-hidden bg-white-200 dark:bg-black-100">
                <li v-for="(item, idx) in optionsBS" :class="{active:idx===0}" class="
                    relative flex items-center justify-center flex-1 h-full font-medium tracking-widest
                    text-black-100 dark:text-white-100 [&.active]:text-white-100 [&.active]:dark:text-black-100
                    after:absolute after:left-full after:border-[0.75rem] after:border-solid after:border-transparent
                    before:absolute before:right-full before:border-[0.75rem] before:border-solid before:border-transparent
                " @click="onChangeBS($event, item.color)">{{ item.name }}</li>
            </ul>
            <div class="flex flex-col justify-between w-full gap-2">
                <DropDown class="text-center text-base font-medium text-black-100 dark:text-white-100" width="100%" height="2rem" :items="dropDownItems"/>
                <div class="flex w-full h-8 rounded-3xl border-2 border-gray-200">
                    <div class="aspect-square h-full flex items-center justify-center cursor-pointer">
                        <img class="aspect-square h-1/2 dark:invert" src="~/assets/img/button/-.png">
                    </div>
                    <input class="flex-1 bg-transparent" type="text">
                    <div class="aspect-square h-full flex items-center justify-center cursor-pointer">
                        <img class="aspect-square h-1/2 dark:invert" src="~/assets/img/button/+.png">
                    </div>
                </div>
                <div class="flex w-full h-8 rounded-3xl border-2 border-gray-200">
                    <div class="aspect-square h-full flex items-center justify-center cursor-pointer">
                        <img class="aspect-square h-1/2 dark:invert" src="~/assets/img/button/-.png">
                    </div>
                    <input class="flex-1 bg-transparent" type="text" placeholder="Amount">
                    <div class="aspect-square h-full flex items-center justify-center cursor-pointer">
                        <img class="aspect-square h-1/2 dark:invert" src="~/assets/img/button/+.png">
                    </div>
                </div>
            </div>
            <div class="relative w-full flex items-center justify-center">
                <div class="absolute w-full h-6 flex items-center justify-between">
                    <span v-for="i in 5" :value="i*25" class="w-3 h-3 bg-gray-200 rotate-45 rounded-sm"></span>
                </div>
                <input type="range" min="0" max="100" step="25" value="0">
            </div>
            <div class="w-full h-8 overflow-hidden rounded-lg border-2 border-gray-200">
                <input class="rounded-lg" type="text" placeholder="Total">
            </div>
            <div class="w-full h-8 overflow-hidden rounded-lg">
                <input class="text-white-100 cursor-pointer" type="submit" value="Submit">
            </div>
        </div>
    </Block>
</template>

<style scoped>
input {
    @apply w-full h-full outline-none border-none text-center tracking-wider text-base;
}
input[type="text"] {
    @apply bg-transparent text-black-100 dark:text-white-100 placeholder:text-gray-200;
}
input[type="submit"] {
    background-color: var(--active-color);
}

input[type="range"] {
    @apply bg-gray-200;
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 0.1rem;
    outline: none;
}

input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 1rem;
    height: 1rem;
    background: var(--active-color);
    cursor: pointer;
    border-radius: 0.25rem;
    transform: rotate(45deg);
}

input[type="range"]::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background: var(--active-color);
    cursor: pointer;
    border-radius: 0.25rem;
    transform: rotate(45deg);
}

.option-bs li.active {
    background-color: var(--active-color);
}
.option-bs li.active:before {
    border-right-color: var(--active-color);
}
.option-bs li.active:after {
    border-left-color: var(--active-color);
}
</style>
