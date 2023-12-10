<template>
    <v-card variant="text" max-width="300" class="px-4 py-5 hover:shadow-md">
        <v-img height="146.5" :src="product.images[0]" />
        <v-card-item>
            <v-card-title>{{ product.title }}</v-card-title>
            <v-card-subtitle>{{ product.category.name }}</v-card-subtitle>
        </v-card-item>
        <!-- <v-card-text>
            <div class="text-h6">{{ product.price }} $</div>
            Кол-во на складе: {{ product.rating.count }}
        </v-card-text>
        <v-rating color="primary" :readonly="true" density="compact" :size="size" :length="5"
            :model-value="product.rating.rate"></v-rating> -->
        <v-card-actions class="">
            <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn">
                <v-btn v-if="!isMobile" prepend-icon="mdi-cart-outline" color="primary" variant="elevated"
                    v-on:click.prevent="toggleCart(product)">{{ inCart ? 'Удалить' : 'В корзину' }}
                </v-btn>
                <v-btn v-else icon color="primary" v-on:click.prevent="toggleCart(product)">
                    <v-icon>{{ inCart ? 'mdi-cart' : 'mdi-cart-outline' }}</v-icon>
                </v-btn>
            </transition>

            <v-btn icon color="primary" v-on:click.prevent="toggleFavorite(product)">
                <v-icon>{{ inFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import "animate.css"
defineProps({
    product: {
        type: Object,
        required: true
    }
})
let inCart = ref(false);
let inFavorite = ref(false);
const cart = useCartStore()
const favourite = useFavoriteStore();
const isMobile = useMobile().isMobile;
const size = ref("small");

const toggleCart = (product) => {
    if (inCart.value) {
        cart.deleteFromCart(product);
    } else {
        cart.addToCart(product);
    }
    inCart.value = !inCart.value;
}

const toggleFavorite = (product) => {
    if (inFavorite.value) {
        favourite.deleteFromFavorite(product);
    } else {
        favourite.addToFavorite(product);
    }
    inFavorite.value = !inFavorite.value;
}
</script>