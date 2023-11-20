<template>
  <div>
    <main id="main">
      <NuxtLayout>
        <PageLoader v-show="loading" />
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});

</script>