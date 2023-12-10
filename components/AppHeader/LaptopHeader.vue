<template>
    <div class="container flex flex-row flex-nowrap justify-around items-center py-5">
        <div>
            <NuxtLink to="/">
                <img src="/fake-logo.png" alt="Logo" class="h-[40px]" />
            </NuxtLink>
        </div>
        <div class="relative" v-on:mouseover.prevent="isCatalogueVisible = true"
            v-on:mouseleave="isCatalogueVisible = false">
            <VBtn :size=buttonSize variant="flat" color="primary">
                <template v-slot:prepend>
                    <v-icon>mdi-menu</v-icon>
                </template>
                Каталог
            </VBtn>
            <Transition enter-active-class="animate__animated animate__fadeIn animate__faster"
                leave-active-class="animate__animated animate__fadeOut animate__faster">
                <div v-if="isCatalogueVisible"
                    class="grid grid-cols-2 bg-white absolute z-[99] top-[100%] w-max px-8 py-5 rounded-md shadow-md gap-x-3">
                    <ul>
                        <li v-for="category in firstHalfCategories" class="py-2 hover:bg-gray-50 px-2">
                            <NuxtLink :to="`/categories?name=${category.paramName}`">{{ category.name }}</NuxtLink>
                        </li>
                    </ul>
                    <ul>
                        <li v-for="category in secondHalfCategories" class="py-2 hover:bg-gray-50 px-2">
                            <NuxtLink :to="`/categories?name=${category.paramName}`">{{ category.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </Transition>
        </div>
        <div class="basis-1/3 md:basis-[50%]">
            <v-text-field class="rounded-md" :density=density color="primary" hide-details="true" v-model="searchQuery"
                clearable label="Поиск товара" type="text" variant="outlined">
                <template v-slot:append-inner>
                    <v-icon color="primary">mdi-magnify</v-icon>
                </template>
            </v-text-field>
        </div>
        <div>
            <!-- <v-badge class="mr-3">
                <v-btn icon color="primary" :size=size>
                    <v-icon>mdi-account-outline</v-icon>
                </v-btn>
            </v-badge> -->
            <v-badge class="mr-3" :content="favourite.getFavoriteCount">
                <v-btn icon color="primary" :size=size>
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

const favourite = useFavoriteStore();

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

const isCatalogueVisible = ref(false);

const toggleCatalogue = () => {
    isCatalogueVisible.value = !isCatalogueVisible.value;
}

const categories = useCategories().categories;

const firstHalfCategories = computed(() => {
    return categories.slice(0, categories.length / 2);
})

const secondHalfCategories = computed(() => {
    return categories.slice(categories.length / 2 + 1);
})

</script>
