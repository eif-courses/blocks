<script setup lang="ts">
import { useAuthStore } from '~/store/auth';

const store = useAuthStore();
const router = useRouter();
const isLoading = ref(true);

onMounted(async () => {
  if (!store.authenticated) {
    await router.push('login');
    return; // Stop execution if not authenticated
  }
  if (store.role !== 'Student') {
    await router.push('login');
    return; // Stop execution if not authenticated
  }
  try {
    await store.getMyDocuments;
  } catch (error) {
    console.error('Error fetching documents:', error);
    // Handle error as needed, e.g., display an error message to the user
  } finally {
    isLoading.value = false;
  }
});

function openFileByUrl(url: string) {
  window.open(url);
}



// TODO - implement this method to handle the uploaded files
const onAdvancedUpload = (event: any) => {
  // Handle the uploaded files here
  const uploadedFiles = event.files;

  console.log(uploadedFiles);

  // Assuming you have a method to upload files to the server (you might need to adjust this)
  uploadFilesToServer(uploadedFiles);

};

const uploadFilesToServer = (files: any) => {
  // Implement your logic to upload files to the server using an API
  // You might want to use the FileUpload component's `url` property for the API endpoint
  // Example: axios.post('/api/upload', formData);
};


</script>

<template>
  <div class="surface-card p-4 shadow-2 border-round">
    <div class="font-medium text-3xl text-900 mb-3">Baigiamųjų darbų talpykla</div>
    <div class="text-500 mb-5">Čia rasite Jūsų kaip diplomanto dokumentus: BD_Aprašas, Užduoties_Lapas, Jūsų asmeniai
      dokumentai.
    </div>
    <div class="grid grid-nogutter border-top-1 surface-border pt-2">


      <div class="field mb-4 col-12">

        <div class="flex align-items-center">
          <FileUpload
              mode="advanced"
              name="files"
              url="https://bdtalpykla-i5gc477mka-ey.a.run.app/api/v1/storage/upload_test_files"
              @upload="onAdvancedUpload($event)"
              :multiple="true"
              :maxFileSize="900000000"
              :upload-label="$t('upload.uploadLabel')"
              :cancel-label="$t('upload.cancelLabel')"
              :choose-label="$t('upload.chooseLabel') "
          >
            <template #empty>
              <p>Įkelkite dokumentus čia arba pasirinkite mygtuką.</p>
              <p>Dokumentų pavadinimai privalo būti su prierašu pvz. BD_programinis_kodas.zip</p>
            </template>
          </FileUpload>
        </div>
      </div>

      <div class="col-12 p-3">
        <div class="text-500 font-medium mb-3">Files</div>
        <div v-for="(doc, index) in store.documents" :key="index"
             class="flex md:align-items-center md:justify-content-between border-top-1 surface-border p-3 flex-column md:flex-row">
          <div class="flex align-items-center">
            <span class="block pi pi-file mr-2"></span>
            <span class="text-900">{{ index }}. Document</span>
          </div>
          <Button @click="openFileByUrl(doc)" icon="pi pi-download" label="Download"
                  class="p-button-outlined mt-2 md:mt-0"></Button>
        </div>
      </div>
    </div>
  </div>

</template>


<style>

img.p-fileupload-file-thumbnail {
  display: none !important;
}
</style>
