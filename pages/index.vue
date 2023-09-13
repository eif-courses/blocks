<script setup>
const {locale} = useI18n()
</script>

<template>
  <div>

    <LangSwitcher/>

    <p>{{ $t('home.title') }}</p>

  </div>
</template>
