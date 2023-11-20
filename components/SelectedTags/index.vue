<template>
    <ul class="container flex flex-row gap-4 flex-wrap justify-center">
        <li v-for="category in selectedCategories" :key="category"
            class="py-1 px-3 text-[#2D2D2D] text-md mb-2 gradient-border">
            <NuxtLink :to="`/categories?name=${category.paramName}`">
                {{ category.name }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup>

defineProps({
    isAnimated: {
        type: Boolean,
        required: false,
        default: false
    }
})

const selectedCategories = [
    { name: "Ручки", paramName: "pens" },
    { name: "Термосы, термостаканы", paramName: "thermoses" },
    { name: "Бутылки для питья", paramName: "bottles" },
    { name: "Кружки", paramName: "mugs" },
    { name: "Блокноты", paramName: "notebooks" },
    { name: "Ежедневники", paramName: "diaries" },
    { name: "Зонты", paramName: "umbrellas" },
    { name: "PowerBank", paramName: "powerbanks" },
    { name: "Кардхолдеры, визитницы", paramName: "cardholders" },
    { name: "Рюкзаки, сумки для ноутбука", paramName: "backpacks" },
    { name: "Брелоки", paramName: "keychains" },
    { name: "Футболки, Поло", paramName: "tshirts" },
]

</script>

<style scoped>
.gradient-border {
    border: double 1px transparent;
    border-radius: 10px;
    background-image: linear-gradient(#F7F7F7, #F7F7F7), linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);
    background-origin: border-box;
    background-clip: padding-box, border-box;
}
</style>