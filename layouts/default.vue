<template>
  <div>


    <div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
      <img src="/logo.png" alt="Image" height="50" class="mr-0 lg:mr-5"/>
      <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
         v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
      </a>
      <div
          class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-4 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">


          <li>
            <LocLink to="/" v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
              <span>{{ $t('nav.home') }}</span>
            </LocLink>
          </li>
          <li>
            <LocLink v-if="store.authenticated && store.role ==='Moderator'" to="students" v-ripple
                     class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
              <span>{{ $t('nav.students') }}</span>
            </LocLink>
          </li>
          <li>
            <LocLink v-if="store.authenticated && store.role==='Reviewer'" to="reviewer" v-ripple
                     class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
              <span>{{ $t('nav.reviewers') }}</span>
            </LocLink>
          </li>
          <li v-if="store.authenticated && store.role==='Student'">
            <LocLink to="documents" v-ripple
                     class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
              <span>{{ $t('nav.documents') }}</span>
            </LocLink>
          </li>
          <li>
            <LocLink to="help" v-ripple
                     class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
              <span>{{ $t('nav.help') }}</span>
            </LocLink>
          </li>
          <li class="pl-4">
            <LangSwitcher/>
          </li>
        </ul>
        <div
            class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
          <Button v-if="!store.authenticated" @click="login" :label="$t('nav.login')"
                  class="p-button-text font-bold"></Button>
          <Button v-else @click="logout" :label="$t('nav.logout')" class="p-button-text font-bold"></Button>
        </div>
      </div>
    </div>


    <div class="p-4 md:p-6 lg:p-8 pt-2 lg:pt-2 md:pt-2 ">
      <div class="" style="min-height: 1rem">
        <slot/>
      </div>
    </div>

  </div>
</template>
<script lang="ts" setup>

import {useAuthStore} from '~/store/auth';

const router = useRouter();

const {logUserOut} = useAuthStore();
const store = useAuthStore();

// onMounted(async () => {
//   console.log('role', store.role);
//
// });

const logout = () => {
  logUserOut();
  router.push('/login');
};

const login = () => {
  router.push('/login');
}


</script>
