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

const parse = useParse();
onMounted(async () => {
    await getProducts();
    watchEffect(() => {
        if (isMobile.value) {
            showProducts.value = products.value.slice(0, 6);
        } else {
            showProducts.value = products.value.slice(0, 9);
        }
    });

    let productsQuery = new parse.Query("products");
    productsQuery.include("category_id");

    productsQuery.limit(9);

    const products2 = await productsQuery.find();
    let products2Array = Array.from(products2.values());
    for (let product of products2Array) {
        (async () => {
            let category = await product.get("category_id").fetch();
            console.log(category.get("category_name"));
        })();
    }
});
onUnmounted(() => {
    products.value = [];
});
</script>