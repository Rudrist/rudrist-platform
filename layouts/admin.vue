<script setup>
const sideNavigations = ref([
    {
        name: "AdminDashboard",
        icon: "/_nuxt/assets/img/admin/AdminDashboard.png",
    }, 
    {
        name: "Account",
        icon: "/_nuxt/assets/img/admin/Account.png",
    }, 
    {
        name: "AccountManage",
        icon: "/_nuxt/assets/img/admin/AccountManage.png",
    },
    {
        name: "PortfolioManage",
        icon: "/_nuxt/assets/img/admin/PortfolioManage.png",
    }
]);
</script>

<template>
    <div class="flex w-full h-full bg-white-100 dark:bg-black-200">
        <Side :navigations="sideNavigations"/>
        <main class="flex flex-col flex-1 h-full p-3">
            <AdminHeader />
            <slot />
        </main>
        <div :class="{'darkWindow': isMarkPricePopupOpen || isApprovalPopupOpen}"></div>
    </div>
</template>

<style scoped>
.darkWindow {
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.8;
    z-index: 998;
    height: 100%;
    width: 100%;
}

.popup-window {
    position: fixed;
    top: 5%;
    bottom: 5%;
    left: 0;
    right: 0;
    z-index: 999;
    margin: auto;
    max-width: 60%;
    max-height: 80%;
}
</style>
