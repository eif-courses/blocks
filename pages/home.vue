<script setup lang="ts">
import {useAuthStore} from "~/store/auth";

const router = useRouter();
const store = useAuthStore();

onMounted(async () => {
  if (!store.authenticated) {
    await router.push('login');
  }
});
</script>

<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<style scoped>

</style>
