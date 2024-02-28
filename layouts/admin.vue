<script setup>
const sideNavigations = ref([
    {
        name: "Dashboard",
        icon: "/_nuxt/assets/img/admin/Dashboard.png",
    }, {
        name: "Money Manage",
        icon: "/_nuxt/assets/img/admin/Money Management.png",
    }, {
        name: "Account Manage",
        icon: "/_nuxt/assets/img/admin/Account Management.png",
    },
]);
</script>

<template>
    <div class="flex w-full h-full bg-white-100 dark:bg-black-200">
        <Side :navigations="sideNavigations"/>
        <main class="flex flex-col flex-1 h-full">
            <Header />
            <section class="w-full flex-1 rounded-tl-3xl bg-white-200 dark:bg-black-100 p-4">
                <slot></slot>
            </section>
        </main>
    </div>
</template>

<style scoped>
section {
    display: grid;
    grid-gap: 1rem;
    grid-template-rows: 24rem 1fr 1fr 24rem;
    grid-template-columns: 16rem 26rem 1fr 26rem;
}
</style>
