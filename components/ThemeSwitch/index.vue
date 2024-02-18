<script setup>
const switchTheme = ()=>document.documentElement.classList.toggle("dark");
</script>

<template>
    <div class="
        relative overflow-hidden 
        flex items-center w-24 h-12 cursor-pointer 
        rounded-3xl border-4 border-gray-200 
        bg-white-100 dark:bg-black-200
    " @click="switchTheme">
        <div class="absolute -left-0 dark:-left-10 flex items-center p-2 gap-2 duration-300">
            <img class="w-8 min-w-8 max-w-8 h-8 min-h-8 max-h-8 dark:invert" src="~/assets/img/theme/light.png" alt="">
            <span class="w-8 min-w-8 max-w-8 h-8 min-h-8 max-h-8 bg-gray-200 rounded-full"></span>
            <img class="w-8 min-w-8 max-w-8 h-8 min-h-8 max-h-8 hidden dark:invert dark:block" src="~/assets/img/theme/dark.png" alt="">
        </div>
    </div>
</template>

<style scoped></style>
