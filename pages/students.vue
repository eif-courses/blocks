<script setup lang="ts">
import {useAuthStore} from '~/store/auth';

const store = useAuthStore();
const router = useRouter();
const isLoading = ref(true);

onMounted(async () => {
  if (!store.authenticated) {
    await router.push('login');
    return; // Stop execution if not authenticated
  }
  if (store.role !== 'Moderator') {
    await router.push('login');
    return; // Stop execution if not authenticated
  }


  try {
    // await store.getAllUsers;
  } catch (error) {
    console.error('Error fetching users:', error);
    // Handle error as needed, e.g., display an error message to the user
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <h1>STUDENTS</h1>
</template>

<style scoped>

</style>
