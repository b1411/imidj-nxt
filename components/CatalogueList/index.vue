<template>
    <div class="py-4 px-5">
        <ul>
            <li v-for="(item, index) in catalogueList" :key="index" class=" border-b border-[#f7f7f7] py-2">
                <NuxtLink :to="`/categories?name=${item.paramName}`" class="text-[#2D2D2D]">{{ item.name }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>


<script setup>
import { reactive } from "vue";
const catalogueList = useCategories().categories;

</script>