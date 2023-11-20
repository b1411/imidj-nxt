<template>
    <nuxt-link to="/cart">
        <v-badge :content="cart.getCartCount">
            <v-btn icon color="primary" :size=size>
                <v-icon>mdi-cart-outline</v-icon>
            </v-btn>
        </v-badge>
    </nuxt-link>
</template>

<script setup>
import { computed } from 'vue';
defineProps({
    size: {
        type: String,
        default: "default"
    }
})
const products = reactive([]);
const count = computed(() => products.length);
const cart = useCartStore();

const router = useRouter();
</script>