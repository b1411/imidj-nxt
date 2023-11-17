<template>
    <v-card variant="text" max-width="300" class="px-4 py-5 hover:shadow-md">
        <v-img height="146.5" :src="product.image" />
        <v-card-item>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle>{{ product.category }}</v-card-subtitle>
        </v-card-item>
        <v-card-text>
            <div class="text-h6">{{ product.price }} $</div>
            Кол-во на складе: {{product.rating.count}}
        </v-card-text>
        <v-rating color="primary" :readonly="true" density="compact" :length="5"
            :model-value="product.rating.rate"></v-rating>
        <v-card-actions class="">
            <v-btn prepend-icon="mdi-cart-outline" color="primary" variant="elevated">В корзину</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>