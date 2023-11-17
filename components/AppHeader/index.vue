<template>
    <transition name="fade" :css="true">
        <div v-if="isHeaderVisible" id="header" :class="positioning" class="top-0 left-0 w-full shadow-md z-[99] bg-white">
            <laptop-header v-if="!isMobile"></laptop-header>
            <mobile-header v-else></mobile-header>
        </div>
    </transition>
</template>

<script setup>
import LaptopHeader from "./LaptopHeader.vue";
import MobileHeader from "./MobileHeader.vue";

const isMobile = useMobile().isMobile;
const isHeaderVisible = ref(true);
const route = useRoute();

let routeName = computed(() => {
    return route.name;
});

let positioning = ref({
    "fixed": false,
    "sticky": true
});

// const checkScroll = () => {
//     isHeaderVisible.value = window.scrollY > 200;
// }

// watchEffect(() => {
//     if (typeof window !== "undefined") {
//         if (routeName.value === "index") {
//             positioning.value.fixed = true;
//             positioning.value.sticky = false;
//             window.addEventListener("scroll", checkScroll);
//             isHeaderVisible.value = window.scrollY > 200;
//         }
//         else {
//             window.removeEventListener("scroll", checkScroll);
//             positioning.value.sticky = true;
//             positioning.value.fixed = false;
//             isHeaderVisible.value = true;

//         }
//     }
// });
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
    transition: transform 0.3s ease-in-out;
}

.fade-enter-from {
    transform: translateY(-100%);
}

.fade-leave-to {
    transform: translateY(-100%);
}
</style>
