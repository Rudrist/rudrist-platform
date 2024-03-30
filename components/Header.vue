<script setup>
const currencyDropDownItems = ref([
    {
        name: "Cos",
        icon: "/_nuxt/assets/img/currency/Cosmos.png",
    }, {
        name: "Doge",
        icon: "/_nuxt/assets/img/currency/Doge.png",
    }, {
        name: "Lite",
        icon: "/_nuxt/assets/img/currency/Lite.png",
    }, {
        name: "Polk",
        icon: "/_nuxt/assets/img/currency/Polkadot.png",
    }, {
        name: "ETH",
        icon: "/_nuxt/assets/img/currency/Ethereum.png",
    }, {
        name: "BTC",
        icon: "/_nuxt/assets/img/currency/Bit.png",
    },
]);
</script>

<template>
    <header class="flex items-center w-full h-24">
        <h2 class="title text-black-100 dark:text-white-100 text-4xl font-normal">Dashboard</h2>
        <div class="flex items-center justify-end flex-1 h-full gap-4 px-8">
            <DropDown class="text-center text-2xl font-normal text-black-100 dark:text-white-100" width="10rem" height="3rem" :items="currencyDropDownItems"/>
            <PromptButton class="w-12 h-12" icon="/_nuxt/assets/img/application/Profile.png" :active="false"/>
            <PromptButton class="w-12 h-12" icon="/_nuxt/assets/img/application/Notification.png" :active="true"/>
            <ThemeSwitch />
        </div>
    </header>
</template>

<style scoped></style>
