<template>
  <div>
    <main id="main">
      <NuxtLayout>
        <template v-slot:page>
          <NuxtPage />
        </template>
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();

const drawer = useState("drawer", () => false);
</script>
