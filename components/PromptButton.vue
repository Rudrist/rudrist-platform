<script setup>
defineProps(["icon", "active"]);
</script>

<template>
    <a :class="{active: active}" class="
        relative cursor-pointer 
        before:absolute before:top-1 before:right-1 before:w-4 before:h-4 before:rounded-full [&.active]:before:bg-fuschi-100
    ">
        <img class="w-full h-full dark:invert" :src="icon" alt="">
    </a>
</template>

<style scoped></style>
