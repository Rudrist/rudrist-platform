<script setup>
const props = defineProps(["width", "height", "icon", "name"]);

const onSelect = (evt) => {
    const dropdown = evt.currentTarget.parentNode.parentNode;
    dropdown.classList.remove("active");
    const info = dropdown.querySelector("div[data-label='selected'] div[data-label='info']");
    info.querySelector("img").src = props.icon;
    info.querySelector("span").innerText = props.name;
}
</script>

<template>
    <li
        class="
            relative flex items-center cursor-pointer
            hover:bg-white-200 dark:hover:bg-black-100 
            after:aspect-square after:h-full
        "
        @click="onSelect"
        :style="'width:'+width+'; height:'+height"
    >
        <div class="flex items-center flex-1 h-full">
            <div class="grid place-items-center aspect-square h-full">
                <img class="aspect-square h-3/4" :src="icon" alt="">
            </div>
            <span class="flex-1">{{ name }}</span>
        </div>
    </li>
</template>

<style scoped></style>
