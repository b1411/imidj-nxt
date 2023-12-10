<template>
    <Transitio0n enter-active-class="animate__animated animate__fadeIn">
        <div id="header" class="fixed top-0 left-0 w-full shadow-md z-[99] bg-white">
            <laptop-header v-if="!isMobile"></laptop-header>
            <mobile-header v-else></mobile-header>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import LaptopHeader from "./LaptopHeader.vue";
import MobileHeader from "./MobileHeader.vue";
import "animate.css";
import { gsap } from "gsap";
const isMobile = useMobile().isMobile;

function onBeforeEnter(el: Element): void {
    gsap.set(el, {
        opacity: 0,
        y: -100,
    })
}

function onEnter(el: Element, done: () => void): void {
    gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        onComplete: done,
    })
}

</script>