<template>
    <ul class="container flex flex-row gap-4 flex-wrap justify-center">
        <li v-for="category in selectedCategories" :key="category"
            class="bg-[#F7F7F7] rounded-full py-1 px-3 text-[#2D2D2D] text-md mb-2">
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