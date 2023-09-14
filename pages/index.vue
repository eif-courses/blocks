<script setup>
import {storeToRefs} from 'pinia';
import {useAuthStore} from '~/store/auth';

const store = useAuthStore(); // use auth store

const {authenticated, categories} = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = ref({
  username: 'ma@gmail.com',
  password: 'kosmosas',
});
const router = useRouter();



function hello(str) {
  alert(str)
}

onMounted(async () => {
  await store.getCategories
});

</script>

<template>
  <div>

    <LangSwitcher/>

    <ol v-for="cat in categories" :key="cat.id">
      <li> {{ cat.name }}, {{cat.id}} <button @click="(store.$state.id = cat.id)">View more</button></li>
    </ol>

    <p>{{store.getCategoryById}}</p>

    <p>{{ $t('home.title') }}</p>



  </div>
</template>
