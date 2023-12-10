<template>
    <div class="w-full screen-height main-slide">
        <div class="max-w-[900px] w-full h-full mx-auto flex flex-row items-center">
            <div class="text-primary font-bold">
                <Transition :appear="true" enter-active-class="animate__animated animate__fadeInLeft">
                    <div>
                        <h1>IMIDZH.KZ</h1>
                        <h4>Товары лучшего качества с вашим имиджем</h4>
                    </div>
                </Transition>
            </div>
        </div>
    </div>
    <div class="mt-[60px]">
        <div class="max-w-[900px] w-full mx-auto relative px-4">
            <Swiper :modules="[Navigation, Autoplay, EffectFade]" :space-between="500" :autoplay="{
                delay: 3000,
                disableOnInteraction: false
            }" :loop="true" :navigation="{
    enabled: true,
    prevEl: prev,
    nextEl: next
}">
                <SwiperSlide class="bg-amber-300 rounded-md">
                    <div class="px-5 py-4 text-gray-900">
                        <h3>Кружки</h3>
                        <p>Кружки с вашим имиджем</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="bg-[#FBBC17] rounded-md">
                    <div class="px-5 py-4 text-gray-900">
                        <h3>Термосы и термостаканы</h3>
                        <p>Термосы и термостаканы с вашим имиджем</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="bg-[#F6A12D] rounded-md">
                    <div class="px-5 py-4 text-gray-900">
                        <h3>Кепки</h3>
                        <p>Кепки с вашим имиджем</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide class="bg-[#ED6A5A] rounded-md">
                    <div class="px-5 py-4 text-gray-900">
                        <h3>Футболки и поло</h3>
                        <p>Футболки с вашим имиджем</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div ref="prev" v-if="!isMobile" class="absolute -left-[30px] top-1/2 -translate-y-1/2 z-20 text-xl cursor-pointer">
                <v-icon color="primary">mdi-chevron-left</v-icon>
            </div>
            <div ref="next" v-if="!isMobile" class="absolute -right-[30px] top-1/2 -translate-y-1/2 z-20 text-xl cursor-pointer">
                <v-icon color="primary">mdi-chevron-right</v-icon>
            </div>
        </div>
    </div>
    <div class="mt-[100px]">
        <h4 class="text-center text-gray-600">Все категории</h4>
        <!-- <div
            class="max-w-[900px] h-[200px] w-full px-5 mx-auto gap-x-5 grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 ">
            <NuxtLink v-for="category in categories" class="block rounded-md px-3 py-2" :class="category.bg"
                :to="`/categories?name=${category.paramName}`">
                <div class="text-primary font-bold">
                    <p>{{ category.name }}</p>
                </div>
            </NuxtLink>
        </div> -->
        <div class="mt-[30px]">
        <SelectedTags />
    </div>
    </div>

    <div class="mt-[120px]">
        <h3 class="text-center">Новые товары</h3>
        <NewProducts />
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
let categories = reactive(useCategories().categories.slice(0, 4));
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, EffectFade } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
import 'animate.css';

const prev = ref(null);
const next = ref(null);

let bgs = ["bg-amber-300", "bg-[#FBBC17]", "bg-[#F6A12D]", "bg-[#ED6A5A]"];

let isMobile = useMobile().isMobile;

categories.map((category, index) => {
    Object.assign(category, {
        bg: bgs[index]
    })
})
</script>

<style scoped lang="scss">
.main-slide {
    background-image: url("https://c02.purpledshub.com/uploads/sites/41/2021/08/mountains-7ddde89.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>