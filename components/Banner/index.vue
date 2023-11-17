<template>
    <div :class="banner">
        <slot v-name:banner-image>
            <v-img class :src="image" :width="width" :height="height" :alt="alt" />
        </slot>
        <slot v-name:banner-text>
            <div>

            </div>
        </slot>
    </div>
</template>

<script setup>
defineProps({
    image: {
        type: String,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    alt: {
        type: String,
        required: true
    }
})

const banner = computed(() => {
    return {
        'banner': true,
        'flex': true,
        'flex-col': true,
        'justify-center': true,
        'items-center': true,
        'text-center': true,
        'text-white': true,
        'font-bold': true,
        'text-4xl': true,
        'h-[400px]': true,
        'bg-gradient-to-r': true,
        'from-blue-400': true,
        'to-blue-500': true
    }
})
</script>

<style scoped lang="scss"></style>