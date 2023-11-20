<template>
    <div class="container mt-[60px] flex md:flex-row flex-col items-center gap-6">
        <div class="main-slide h-full min-h-[400px] md:w-1/2 w-[90%]">
            <div>
                <Transition>
                    <h1>IMIDZH.KZ</h1>
                </Transition>
                <p class="text-2xl w-[90%] text-center font-bold">Лучший магазин имиджевой продукции</p>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:w-1/2 w-[90%] gap-3">
            <div v-for="category in popularCategories" :style="{
                backgroundColor: category.bg
            }" class="relative h-full w-full aspect-square rounded-xl p-3 overflow-hidden">
                <NuxtLink class="top-0 left-0 rounded-xl inline-block absolute z-10 w-full h-full"
                    :to="`/categories?name=${category.paramName}`"></NuxtLink>
                <p class="text-white text-xl font-bold">
                    {{ category.name }}
                </p>
                <div class="absolute bottom-[-20%] left-[30%] rotate-[-15deg] w-full">
                    <img class="w-[90%] h-auto object-cover" :src="category.image" alt="" />
                </div>
            </div>
        </div>
    </div>
    <div class=" mt-3">
        <SelectedTags is-animated />
    </div>
    <div class="container mt-7">
        <div class="mt-[60px]">
            <h2 class="text-2xl font-bold mb-4 text-center text-[#2D2D2D]">Новинки</h2>
            <NewProducts />
        </div>
    </div>
</template>

<script setup>
import NewProducts from "@/components/NewProducts";


const popularCategories = [
    { name: "Ручки", paramName: "pens", bg: "#6A1B9A", image: "" },
    { name: "Термосы, термостаканы", paramName: "thermoses", bg: "#00ACC1" },
    { name: "Блокноты", paramName: "notebooks", bg: "#BCAAA4" },
    { name: "Футболки, Поло", paramName: "tshirts", bg: "#F44336", image: "https://i.imgur.com/uwiDKUb.png" }
]
</script>

<style scoped lang="scss">
.main-slide {
    position: relative;
    border-radius: 10px;
    // background: linear-gradient(45deg, #1e3b7249, #2a52989d), url("https://i.imgur.com/pKUyI6e.png");
    background: linear-gradient(135deg, #197149, #3498db);

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        width: 100%;

        h1 {
            font-size: clamp(3rem, 5vw, 4rem);
            font-weight: 700;
        }

        p {
            font-size: clamp(1.5rem, 3vw, 2rem);
        }
    }
}
</style>