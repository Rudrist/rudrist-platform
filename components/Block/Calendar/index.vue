<script setup>
defineProps(["row", "col"]);
</script>

<template>
    <Block :row="row" :col="col" class="flex items-center justify-center">
        <div class="flex flex-col gap-4">
            <div class="flex h-8">
                <div class="flex items-center justify-center aspect-square h-full cursor-pointer">
                    <img class="aspect-square h-2/3 -rotate-90 dark:invert" src="~/assets/img/arrow/Black.png" alt="">
                </div>
                <h3 class="flex-1 text-center text-2xl font-medium text-black-100 dark:text-white-100">November</h3>
                <div class="flex items-center justify-center aspect-square h-full cursor-pointer">
                    <img class="aspect-square h-2/3 rotate-90 dark:invert" src="~/assets/img/arrow/Black.png" alt="">
                </div>
            </div>
            <div>
                <ul class="calendar-part">
                    <li class="calendar-cell">Mo</li>
                    <li class="calendar-cell">Tu</li>
                    <li class="calendar-cell">We</li>
                    <li class="calendar-cell">Th</li>
                    <li class="calendar-cell">Fr</li>
                    <li class="calendar-cell">Sa</li>
                    <li class="calendar-cell">Su</li>
                </ul>
                <ul class="calendar-part calendar-main">
                    <li class="calendar-cell not-this-month">29</li>
                    <li class="calendar-cell not-this-month">30</li>
                    <li class="calendar-cell not-this-month">31</li>
                    <li class="calendar-cell today">1</li>
                    <li class="calendar-cell">2</li>
                    <li class="calendar-cell">3</li>
                    <li class="calendar-cell">4</li>
                    <li class="calendar-cell">5</li>
                    <li class="calendar-cell">6</li>
                    <li class="calendar-cell">7</li>
                    <li class="calendar-cell">8</li>
                    <li class="calendar-cell">9</li>
                    <li class="calendar-cell">10</li>
                    <li class="calendar-cell">11</li>
                    <li class="calendar-cell">12</li>
                    <li class="calendar-cell">13</li>
                    <li class="calendar-cell">14</li>
                    <li class="calendar-cell">15</li>
                    <li class="calendar-cell">16</li>
                    <li class="calendar-cell">17</li>
                    <li class="calendar-cell">18</li>
                    <li class="calendar-cell">19</li>
                    <li class="calendar-cell">20</li>
                    <li class="calendar-cell">21</li>
                    <li class="calendar-cell">22</li>
                    <li class="calendar-cell">23</li>
                    <li class="calendar-cell">24</li>
                    <li class="calendar-cell">25</li>
                    <li class="calendar-cell">26</li>
                    <li class="calendar-cell toggled">27</li>
                    <li class="calendar-cell">28</li>
                    <li class="calendar-cell">29</li>
                    <li class="calendar-cell">30</li>
                    <li class="calendar-cell not-this-month">1</li>
                    <li class="calendar-cell not-this-month">2</li>
                </ul>
            </div>
        </div>
    </Block>
</template>

<style scoped>
    .calendar-part {
        @apply flex w-[21rem] flex-wrap font-medium;
    }
    .calendar-cell {
        @apply flex items-center justify-center rounded-full w-12 h-12 text-lg text-black-100 dark:text-white-100;
    }
    .calendar-main .calendar-cell {
        @apply cursor-pointer font-bold hover:bg-white-200 dark:hover:bg-black-100;
    }
    .calendar-main .not-this-month {
        @apply text-gray-200 font-normal;
    }
    .calendar-main .calendar-cell.today {
        @apply bg-gray-200 text-iris-100 font-bold hover:bg-gray-200 dark:hover:bg-gray-200;
    }
    .calendar-main .calendar-cell.toggled {
        @apply bg-iris-100 text-white-100 font-bold hover:bg-iris-100 dark:hover:bg-iris-100;
    }
</style>
