<script setup>
defineProps(["row", "col"]);
</script>

<template>
    <section :style="['grid-row:'+row, 'grid-column:'+col]">
        <slot></slot>
    </section>
</template>

<style scoped>
section {
    @apply w-full h-full p-4 rounded-xl drop-shadow-xl;
    @apply bg-white-100 dark:bg-black-200;
}
</style>
