<template>
    <v-badge>
        <v-btn icon color="primary" :size=size>
            <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
    </v-badge>
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
</script>