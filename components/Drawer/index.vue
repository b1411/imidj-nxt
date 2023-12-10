<template>
    <VNavigationDrawer :model-value="drawer" location="left" temporary>
        <v-text-field class="rounded-md" :density="'compact'" color="primary" hide-details="true" v-model="searchQuery"
            clearable label="Поиск товара" type="text" variant="filled">
            <VDivider />
            <template v-slot:append-inner>
                <v-icon @click="findProduct" color="primary">mdi-magnify</v-icon>
            </template>
        </v-text-field>
        <catalogue-list></catalogue-list>
    </VNavigationDrawer>
</template>

<script setup>
let searchQuery = ref("");
const drawer = useState("drawer")

function findProduct() {
    if (searchQuery.value.length > 0) {
        this.$router.push(`/search?query=${searchQuery.value}`);
    }
}
</script>