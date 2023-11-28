<template>
    <div class="container flex flex-row flex-nowrap justify-around items-center py-5">
        <v-btn icon color="primary" size="small" class="mr-5" @click.prevent="toggleDrawer()">
            <v-icon>mdi-menu</v-icon>
        </v-btn>
        <div>
            <NuxtLink to="/">
                <img src="/fake-logo.png" alt="Logo" class="h-[40px] float-right" />
            </NuxtLink>
        </div>
        <div>
            <Cart size="small" />
        </div>
    </div>
</template>

<script setup>
const drawer = useState("drawer");

const toggleDrawer = () => {
    drawer.value = !drawer.value;
};
</script>