<script setup>
defineProps(["name", "icon", "active"]);

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

const onClick = (evt) => {
    evt.currentTarget.classList.add("active");
    getSiblings(evt.currentTarget).forEach((e)=>e.classList.remove("active"));
    document.querySelector("header .title").innerText = evt.currentTarget.querySelector(".name").innerText;
}
</script>

<template>
    <a :class="{active: active}" class="
        relative w-full h-16 px-4 
        flex items-center gap-4 
        before:absolute before:left-0 before:w-2.5 before:h-full [&.active]:before:bg-iris-100 before:duration-300
        hover:cursor-pointer
    " @click="onClick">
        <img class="ml-4 w-12 h-12 dark:invert" :src="icon" alt="">
        <h3 class="name flex-1 text-black-100 dark:text-white-100 text-2xl font-normal text-nowrap">{{ name }}</h3>
    </a>
</template>

<style scoped>
a {
    background-repeat: no-repeat;
    background-image: linear-gradient(to right, theme("colors.iris.300") 0%, transparent 100%);
    background-size: 0% 100%;
    transition: background-size .3s;
}
a:hover, a.active {
    background-size: 100% 100%;
}
</style>
