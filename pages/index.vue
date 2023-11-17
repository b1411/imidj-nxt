<template>
    <div class="h-[60vh] w-full">
        <Swiper :slides-per-view="1" :modules="[EffectFade]" :effect="'fade'" :loop="true" :autoplay="{ delay: 5000 }"
            class="h-full">
            <SwiperSlide>
                <div class="main-slide">
                    <div>
                        <Transition>
                            <h1 class="text-[#197149]">IMIDZH.KZ</h1>
                        </Transition>
                        <p class="text-2xl text-[#197149] text-center font-bold">Лучший магазин имиджевой
                            продукции</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
        </Swiper>
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
import { ref, onMounted, onUnmounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from "swiper/modules";
import NewProducts from "@/components/NewProducts";
import "swiper/css";
import "swiper/css/effect-fade";
</script>

<style scoped lang="scss">
.main-slide {
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #1e3b7249, #2a52989d), url("https://i.imgur.com/pKUyI6e.png");
    background-size: cover;

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
            font-size: clamp(30px, 18vw, 120px);
            font-weight: 700;
        }
    }
}
</style>