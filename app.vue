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
  document.querySelector("body").classList.add("overflow-hidden");
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
  document.querySelector("body").classList.remove("overflow-hidden");
});


const drawer = useState('drawer', () => false)
</script>