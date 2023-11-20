<template>
    <div class="">
        <div class="grid grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto justify-items-center">
            <ProductCard v-for="product in showProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import ProductCard from "@/components/ProductCard";
const products = ref([]);
const showProducts = ref([]);
const getProducts = async () => {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    products.value = await res.json();
};
const isMobile = useMobile().isMobile;
onMounted(async () => {
    await getProducts();
    watchEffect(() => {
        if (isMobile.value) {
            showProducts.value = products.value.slice(0, 6);
        } else {
            showProducts.value = products.value.slice(0, 9);
        }
    });
});
onUnmounted(() => {
    products.value = [];
});
</script>