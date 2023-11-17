<template>
    <div class=" py-4 px-5">
        <ul>
            <li v-for="(item, index) in catalogueList" :key="index" class=" border-b border-[#f7f7f7] py-3">
                <a href="" class="text-[#2D2D2D]">{{ item }}</a>
            </li>
        </ul>
    </div>
</template>


<script setup>
import { reactive } from "vue";
const catalogueList = reactive(["Ручки", "Термосы, термостаканы", "Бутылки для питья", "Кружки", "Блокноты", "Ежедневники", "Зонты", "PowerBank", "Кардхолдеры, визитницы", "Рюкзаки, сумки для ноутбука", "Брелоки", "Футболки, Поло", "Толстовки, Худи", "Кепки", "Шопперы", "Календари"])

</script>