<script setup>
import {useAuthStore} from '~/store/auth';

const store = useAuthStore();
const router = useRouter();
const isLoading = ref(true);

onMounted(async () => {
  if (!store.authenticated) {
    await router.push('login');
    return; // Stop execution if not authenticated
  }

  try {
    await store.getAllUsers;
  } catch (error) {
    console.error('Error fetching users:', error);
    // Handle error as needed, e.g., display an error message to the user
  } finally {
    isLoading.value = false;
  }
});


</script>

<template>
  <div>

    <!--    <LangSwitcher/>-->


    <div class="surface-card shadow-2 border-round p-4">
      <div class="flex justify-content-between align-items-center mb-5">
        <span class="text-xl text-900 font-medium">Team Members</span>
        <div>
          <Button icon="pi pi-ellipsis-v" class="p-button-text p-button-plain p-button-rounded"
                  @click="$refs.menu1.toggle($event)"></Button>
          <Menu ref="menu1" :popup="true" :model="items"></Menu>
        </div>
      </div>
      <ul class="list-none p-0 m-0" v-for="u in users" :key="u.id">
        <li class="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
          <div class="flex">
            <img src="https://xsgames.co/randomusers/avatar.php?g=female" class="mr-3"
                 style="width: 45px; height: 45px"/>
            <div class="mr-0 md:mr-8">
              <span class="block text-900 font-medium mb-1">{{ u[1] }}</span>
              <div class="text-600">{{ u[2] }}</div>
            </div>
          </div>
          <div class="mt-2 md:mt-0 flex flex-nowrap">
            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-twitter"></Button>
            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-github"></Button>
            <Button class="p-button-text p-button-plain p-button-rounded mr-1" icon="pi pi-facebook"></Button>
          </div>
        </li>
      </ul>
    </div>


    <!--    (store.getCategoryById(cat.id))-->
    <!--    <ol v-for="cat in categories" :key="cat.id">-->
    <!--      <li> {{ cat.name }}, {{cat.id}} <button @click="(router.push('/category/'+cat.id) )">View more</button></li>-->
    <!--    </ol>-->


    <!--    <p>{{ $t('home.title') }}</p>-->


  </div>
</template>
