<script setup>
import {storeToRefs} from 'pinia';
import {useAuthStore} from '~/store/auth';

const store = useAuthStore(); // use auth store
const {categories} = storeToRefs(store); // make authenticated state reactive


const user = ref({
  username: 'ma@gmail.com',
  password: 'kosmosas',
});
const router = useRouter();



function hello(str) {
  alert(str)
}

onMounted(async () => {
  await store.getCategories;
});

</script>

<template>
  <div>

<!--    <LangSwitcher/>-->



<!--    (store.getCategoryById(cat.id))-->
<!--    <ol v-for="cat in categories" :key="cat.id">-->
<!--      <li> {{ cat.name }}, {{cat.id}} <button @click="(router.push('/category/'+cat.id) )">View more</button></li>-->
<!--    </ol>-->


<!--    <p>{{ $t('home.title') }}</p>-->



  </div>
</template>
