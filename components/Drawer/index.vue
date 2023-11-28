<template>
    <VNavigationDrawer v-model="drawer" location="left">
        <v-text-field class="rounded-md" :density="'compact'" color="primary" hide-details="true" v-model="searchQuery"
            clearable label="Поиск товара" type="text" variant="filled">
            <template v-slot:append-inner>
                <v-icon color="primary">mdi-magnify</v-icon>
            </template>
        </v-text-field>
        <catalogue-list></catalogue-list>
    </VNavigationDrawer>
</template>

<script setup>
let searchQuery = ref("");
const drawer = useState("drawer")
</script>