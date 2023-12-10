<template>
    <TransitionGroup tag="ul" class="container flex flex-row gap-4 flex-wrap justify-center">
        <li v-for="category in selectedCategories" :key="category"
            class="py-1 px-3 text-gray-900 text-md mb-2 gradient-border hover:text-white hover:bg-[#197149] my-transition-colors">
            <NuxtLink :to="`/categories?name=${category.paramName}`">
                {{ category.name }}
            </NuxtLink>
        </li>
    </TransitionGroup>
</template>

<script setup>
defineProps({
    isAnimated: {
        type: Boolean,
        required: false,
        default: false
    }
})

const selectedCategories = useCategories().categories;
</script>

<style scoped>
.gradient-border {
    border: 1px solid #197149;
    border-radius: 6px;
}

.my-transition-colors {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 450ms;
}
</style>