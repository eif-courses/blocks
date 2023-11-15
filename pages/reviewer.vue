<script setup lang="ts">

import {useAuthStore} from '~/store/auth';

const store = useAuthStore();
const router = useRouter();
const isLoading = ref(true);

onMounted(async () => {
  if (!store.authenticated) {
    await router.push('login');
    return;
  }

  if (store.role !== 'Reviewer') {
    await router.push('login');
    return;
  }

  try {
    await store.getReviewerDocuments;
  } catch (error) {
    console.error('Error fetching documents:', error);
    // Handle error as needed, e.g., display an error message to the user
  } finally {
    isLoading.value = false;
  }
});

interface ReviewerDocumentsInterface {
  DocumentID: string,
  FileName: string,
  FilePath: string,
  UploadDate: string,
  StudentName: string
}

// Group documents by student name
const groupedDocuments = computed(() => {
  const grouped = {};
  store.reviewerDocuments.forEach((doc) => {
    const studentName = doc.StudentName;
    if (!grouped[studentName]) {
      grouped[studentName] = [];
    }
    grouped[studentName].push(doc);
  });
  return grouped as Record<string, ReviewerDocumentsInterface[]>
});
</script>

<template>
  <div>
    <h1>Reviewer page</h1>

      <div class="card">
        <Fieldset v-for="(group, studentName, index) in groupedDocuments" :key="studentName">
          <template #legend>
            <div class="flex align-items-center gap-2 px-2">
              <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
              <span class="font-bold">{{ studentName }},  PI20A </span>
            </div>
          </template>
          <p v-for="doc in group" :key="doc.DocumentID" class="m-0">
            {{ doc.FileName }}
            <span> <Button @click="store.downloadFile(doc.FilePath)">Atsisiųsti viską</Button></span>
          </p>
        </Fieldset>
      </div>

  </div>
</template>

<style scoped>
/* Add your scoped styles if needed */
</style>
