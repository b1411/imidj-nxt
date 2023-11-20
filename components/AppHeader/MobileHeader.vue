<template>
    <div class="container flex flex-row flex-nowrap justify-around items-center py-5">
        <div>
            <v-btn icon color="primary" size="small" class="mr-5" v-on:click.prevent="toggleDrawer()">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <Cart size="small" />
        </div>
        <div>
            <img src="/fake-logo.png" alt="Logo" class="h-[40px] float-right" />
        </div>
    </div>
</template>

<script setup>
const drawer = useState("drawer");

const toggleDrawer = () => {
    drawer.value = !drawer.value;
};
</script>