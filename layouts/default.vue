<template>
  <div>

    <div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
      <img src="/images/blocks/logos/hyper.svg" alt="Image" height="50" class="mr-0 lg:mr-5"/>
      <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
         v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
      </a>
      <div
          class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-4 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
          <li class="relative">
            <a v-ripple
               class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple"
               v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'fadein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
              <span>Products</span>
              <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
            </a>
            <div
                class="border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden my-2 lg:my-0 w-full lg:w-30rem">
              <div class="grid">
                <div class="col-12 lg:col-6">
                  <a v-ripple
                     class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                    <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                      <i class="pi pi-list text-2xl"></i>
                    </div>
                    <div>
                      <span>Features</span>
                      <div class="text-600 text-sm mt-1">Subtext of item</div>
                    </div>
                  </a>
                </div>
                <div class="col-12 lg:col-6">
                  <a v-ripple
                     class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                    <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                      <i class="pi pi-shield text-2xl"></i>
                    </div>
                    <div>
                      <span>Solutions</span>
                      <div class="text-600 text-sm mt-1">Subtext of item</div>
                    </div>
                  </a>
                </div>
                <div class="col-12 lg:col-6">
                  <a v-ripple
                     class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                    <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                      <i class="pi pi-users text-2xl"></i>
                    </div>
                    <div>
                      <span>Customers</span>
                      <div class="text-600 text-sm mt-1">Subtext of item</div>
                    </div>
                  </a>
                </div>
                <div class="col-12 lg:col-6">
                  <a v-ripple
                     class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                    <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                      <i class="pi pi-question-circle text-2xl"></i>
                    </div>
                    <div>

                      <span>Faq</span>
                      <div class="text-600 text-sm mt-1">Subtext of item</div>
                    </div>
                  </a>
                </div>
                <div class="col-12 lg:col-6">
                  <a v-ripple
                     class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                    <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                      <i class="pi pi-file text-2xl"></i>
                    </div>
                    <div>
                      <span>Case Studies</span>
                      <div class="text-600 text-sm mt-1">Subtext of item</div>
                    </div>
                  </a>
                </div>
                <div class="col-12 lg:col-6">
                  <a v-ripple
                     class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 border-round p-ripple">
                    <div class="p-2 border-round bg-blue-600 text-0 mr-3">
                      <i class="pi pi-search text-2xl"></i>
                    </div>
                    <div>
                      <span>Library</span>
                      <div class="text-600 text-sm mt-1">Subtext of item</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li>
            <nuxt-link to="login" v-ripple
               class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
              <span>Login</span>
            </nuxt-link>
          </li>
          <li>
            <a v-ripple
               class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
              <span>Resources</span>
            </a>
          </li>
          <li>
            <a v-ripple
               class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
              <span>Pricing</span>
            </a>
          </li>
        </ul>
        <div
            class="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
          <Button label="Login" class="p-button-text font-bold"></Button>
          <Button label="Register" class="ml-3 font-bold"></Button>
        </div>
      </div>
    </div>


    <div class="p-4">
      <div class="border-2 border-dashed surface-border border-round surface-card" style="min-height: 20rem">
        <slot/>

      </div>
    </div>


    <footer v-if="authenticated">
      <h1>Footer</h1>
    </footer>
  </div>
</template>
<script lang="ts" setup>
import {storeToRefs} from 'pinia';
import {useAuthStore} from '~/store/auth';

const router = useRouter();

const {logUserOut} = useAuthStore();
const {authenticated} = storeToRefs(useAuthStore()); // make authenticated state reactive

const logout = () => {
  logUserOut();
  router.push('/login');
};
</script>
