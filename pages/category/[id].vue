<script setup>
import {useAuthStore} from "~/store/auth";

const store = useAuthStore(); // use auth store
const route = useRoute()
const categoryId = +route.params.id
const catName = ref("");

// Caching or Persisting data with cookies
onMounted(async () => {
  const cookie = useCookie('category_' + categoryId);
  if (cookie.value === undefined) {
    const category = store.getCategoryById(categoryId);
    cookie.value = category.name;
  }
  catName.value = cookie.value;
});

</script>

<template>
  {{ catName }}
</template>

<style scoped>

</style>
