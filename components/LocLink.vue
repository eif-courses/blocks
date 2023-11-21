<template>
  <NuxtLink :to="localePath(to)"><slot /></NuxtLink>
</template>

<script setup lang="ts">
import {useLocalePath} from "vue-i18n-routing";

defineProps(["to"])

const localePath = useLocalePath()
</script>
<style scoped>



a.router-link-exact-active{
  ///border-bottom: 2px solid red !important;
  background: aliceblue;
  border-radius: 10px;
  text-decoration: none;
  //color: darkblue;
}

a{
  text-decoration: none;
  color: #2196F3;
}


a:hover{
  background: azure;
  border-radius: 10px;
  text-decoration: none;
  color: darkblue;
}





</style>
