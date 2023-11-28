<template>
    <div :class="'w-full max-w-6xl mx-auto px-5 ' + props.class">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    class: {
        type: String
    }
})

</script>