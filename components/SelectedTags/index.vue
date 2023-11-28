<template>
    <ul class="container flex flex-row gap-4 flex-wrap justify-center">
        <li v-for="category in selectedCategories" :key="category"
            class="py-1 px-3 text-gray-700 text-md mb-2 gradient-border hover:text-white hover:bg-[#197149] my-transition-colors">
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
    border: 1px solid #197149;
    border-radius: 10px;
}

.my-transition-colors {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 450ms;
}
</style>