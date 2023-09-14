<script setup>
import {useAuthStore} from "~/store/auth";
import {storeToRefs} from "pinia";

const store = useAuthStore(); // use auth store
const {categories} = storeToRefs(store); // make authenticated state reactive
const route = useRoute()

</script>

<template>
  result: {{ store.getCategoryById(+route.params.id) }}
</template>

<style scoped>

</style>
