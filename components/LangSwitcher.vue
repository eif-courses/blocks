<template>
  <div>
    <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country"
              class="w-full md:w-14rem">
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
          <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
               :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px"/>
          <div>{{ slotProps.value.name }}</div>
        </div>
        <div v-else class="flex align-items-center">
          <img alt="United States" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
               :class="`mr-2 flag flag-us`" style="width: 18px"/>
          <div>English</div>
        </div>
      </template>
      <template #option="slotProps">
        <div class="flex align-items-center">
          <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
               :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px"/>
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup lang="ts">


// import {LocaleObject, useSwitchLocalePath} from "vue-i18n-routing";

import type {LocaleObject} from "vue-i18n-routing";

//const {locale, locales} = useI18n()
const switchLocalePath = useSwitchLocalePath()
const router = useRouter()
const selectedCountry = ref();
const countries = ref([
  {name: 'Lietuva', code: 'lt', route: 'lt-LT'},
  {name: 'United States', code: 'us', route: 'en-US'},
]);

watch(selectedCountry, (newCountry) => {
  // Handle the change, e.g., update the router path or perform any other action
  //console.log('Selected Country:', newCountry);
  router.push({path: switchLocalePath(newCountry.route)})
});

</script>
