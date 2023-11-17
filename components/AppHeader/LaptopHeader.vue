<template>
    <div class="container flex flex-row flex-nowrap justify-around items-center py-5">
        <div>
            <NuxtLink to="/">
                <img src="/fake-logo.png" alt="Logo" class="h-[40px]" />
            </NuxtLink>
        </div>
        <div>
            <VBtn :size=buttonSize variant="flat" color="primary">
                <template v-slot:prepend>
                    <v-icon>mdi-menu</v-icon>
                </template>
                Каталог
            </VBtn>
        </div>
        <div class="basis-1/4 xl:basis-1/2">
            <v-text-field :density=density color="primary" hide-details="true" v-model="searchQuery" clearable
                label="Поиск товара" type="text" variant="outlined">
                <template v-slot:append-inner>
                    <v-icon color="primary">mdi-magnify</v-icon>
                </template>
            </v-text-field>
        </div>
        <div>
            <v-badge>
                <v-btn icon color="primary" class="mr-3" :size=size>
                    <v-icon>mdi-account-outline</v-icon>
                </v-btn>
            </v-badge>
            <v-badge>
                <v-btn icon color="primary" class="mr-3" :size=size>
                    <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
            </v-badge>
            <Cart :size=size />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Cart from "@/components/Cart";
const size = ref("default");
const density = ref("default");
const buttonSize = ref("large");
const searchQuery = ref("");

const updateSize = () => {
    if (window.innerWidth < 600) {
        size.value = "small";
        density.value = "compact";
        buttonSize.value = "small";
    } else if (window.innerWidth < 925) {
        size.value = "small";
        density.value = "compact";
        buttonSize.value = "default";
    } else {
        size.value = "small";
        density.value = "default";
        buttonSize.value = "default";
    }
};

onMounted(() => {
    updateSize();
    window.addEventListener("resize", () => {
        updateSize();
    });
});

onUnmounted(() => {
    window.removeEventListener("resize", () => {
        updateSize();
    });
});

</script>