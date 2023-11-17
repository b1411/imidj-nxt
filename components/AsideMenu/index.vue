<template>
    <div v-if="!mobile" class="basis-1/4 h-screen overflow-y-scroll">
        <catalogue-list></catalogue-list>
    </div>
</template>

<script setup>
import CatalogueList from "@/components/CatalogueList";
const mobile = useMobile().isMobile;
</script>