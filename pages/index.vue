
<template>
    <div class="container mt-[60px] flex md:flex-row flex-col items-center gap-6">
        <div class="h-full min-h-[400px] md:w-1/2 w-[90%]">
            <Swiper :modules="[EffectFade]" id="swiper" effect="fade" :fade-effect="{ crossFade: 1 }" class="h-full"
                :allow-touch-move="false">
                <SwiperSlide class="main-slide">
                    <div>
                        <h1>
                            IMIDZH.KZ
                        </h1>
                        <p>
                            Интернет-магазин сувенирной продукции
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>Ручки</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>Термосы, термостаканы</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>Блокноты</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <h3>Футболки, Поло</h3>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="h-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:w-1/2 w-[90%] gap-3">
            <div v-for="category in popularCategories" :style="{
                backgroundColor: category.bg
            }" @mouseenter="swiperSlideTo(popularCategories.indexOf(category) + 1)" @mouseleave="swiperSlideTo(0)"
                class="relative h-full w-full aspect-square rounded-md p-3 overflow-hidden hover:scale-[1.02] transition-all">
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
    <div class=" bg-gray-50 my-[60px] text-black">
        <Container class="my-7">
            <div>
                <h3>
                    О нас
                </h3>
                <p class="w-[50%]">
                    Мы предлагаем широкий ассортимент товаров, таких как футболки, кружки, ручки, кепки, сумки, чехлы для
                    телефонов и многое другое. Вы можете выбрать любой дизайн из нашего каталога или заказать
                    индивидуальный,
                    который отражает вашу уникальность и стиль. Мы гарантируем высокое качество продукции, быструю доставку
                    и
                    доступные цены
                </p>
            </div>
        </Container>
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
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue"
import { EffectFade } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"


const popularCategories = [
    { name: "Ручки", paramName: "pens", bg: "#FA7921", image: "" },
    { name: "Термосы, термостаканы", paramName: "thermoses", bg: "#FE9920" },
    { name: "Блокноты", paramName: "notebooks", bg: "#B9A44C" },
    { name: "Футболки, Поло", paramName: "tshirts", bg: "#FFE900", image: "https://i.imgur.com/uwiDKUb.png" }
]

let swiper = null;


onMounted(() => {
    swiper = document.getElementById("swiper").swiper;
})

function swiperSlideTo(i) {
    swiper.slideTo(i);
}
</script>

<style scoped lang="scss">
.main-slide {
    position: relative;
    border-radius: 6px;
    // background: linear-gradient(45deg, #1e3b7249, #2a52989d), url("https://i.imgur.com/pKUyI6e.png");
    background: linear-gradient(135deg, #197149, #CCFF66);

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
            text-align: center;
            margin: 0 10px;
        }
    }
}
</style>