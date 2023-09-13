<template>
  <NuxtLink :to="localePath(to)"><slot /></NuxtLink>
</template>

<script setup lang="ts">
import {useLocalePath} from "vue-i18n-routing";

defineProps(["to"])

const localePath = useLocalePath()
</script>
