<template>
  <div>


    <div class="bg-indigo-500 px-6 shadow-2 flex relative lg:static" style="min-height: 75px">
      <div class="cursor-pointer flex p-3 align-items-center hover:bg-indigo-600 transition-colors transition-duration-150 relative select-none"
           v-styleclass="{ selector: '#profile-10', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
        <img src="https://avatars.githubusercontent.com/u/8007447?v=4" class="lg:mr-3" style="width: 40px; height: 40px"/>
        <div class="hidden lg:block">
          <span class="text-indigo-100 block mb-1 text-lg font-medium white-space-nowrap">Kristin Watson</span>
          <p class="m-0 text-indigo-200">Manager</p>
        </div>
        <i class="pi pi-chevron-down text-indigo-200 ml-3 hidden lg:block"></i>
        <div id="profile-10" class="hidden absolute left-0 top-100 shadow-2 bg-indigo-600 border-round-bottom w-15rem lg:w-full origin-top">
          <ul class="list-none m-0 p-3">
            <li>
              <a v-ripple class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round p-ripple">
                <i class="pi pi-user mr-2"></i>
                <span class="font-medium">Profile</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round p-ripple">
                <i class="pi pi-cog mr-2"></i>
                <span class="font-medium">Settings</span>
              </a>
            </li>
            <li>
              <a v-ripple class="flex p-3 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 border-round p-ripple">
                <i class="pi pi-sign-out mr-2"></i>
                <span class="font-medium">Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex-auto flex pl-5 overflow-auto">
        <ul class="flex list-none p-0 m-0">
          <li class="h-full">
            <a v-ripple class="cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 p-ripple">
              <i class="pi pi-home text-2xl"></i>
            </a>
          </li>
          <li class="h-full">
            <a v-ripple class="cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 p-ripple">
              <i class="pi pi-users text-2xl"></i>
            </a>
          </li>
          <li class="h-full">
            <a v-ripple class="cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 p-ripple">
              <i class="pi pi-calendar text-2xl"></i>
            </a>
          </li>
          <li class="h-full">
            <a v-ripple class="cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 p-ripple">
              <i class="pi pi-folder text-2xl"></i>
            </a>
          </li>
          <li class="h-full">
            <a v-ripple class="cursor-pointer h-full inline-flex align-items-center justify-content-center px-5 text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 transition-colors transition-duration-150 p-ripple">
              <i class="pi pi-chart-line text-2xl"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="flex ml-5">
        <a v-ripple class="cursor-pointer inline-flex align-items-center justify-content-center lg:hidden text-white p-ripple"
           v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
          <i class="pi pi-bars text-4xl"></i>
        </a>
        <div class="lg:block hidden absolute lg:static left-0 top-100 z-1 shadow-2 lg:shadow-none w-full lg:w-auto bg-indigo-500">
          <ul class="h-full list-none p-0 m-0 flex select-none flex-column lg:flex-row">
            <li>
              <a v-ripple class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150 p-ripple">
                <i class="pi pi-search lg:text-2xl mr-2 lg:mr-0"></i>
                <span class="block lg:hidden font-medium">Search</span>
              </a>
            </li>
            <li>
              <a v-ripple class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150 p-ripple">
                <i class="pi pi-inbox lg:text-2xl mr-2 lg:mr-0"></i>
                <span class="block lg:hidden font-medium">Inbox</span>
              </a>
            </li>
            <li>
              <a v-ripple class="h-full flex px-6 py-3 lg:px-3 lg:py-0 align-items-center text-indigo-100 hover:text-indigo-50 hover:bg-indigo-600 font-medium cursor-pointer transition-colors transition-duration-150 p-ripple">
                <i class="pi pi-bell lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
                <span class="block lg:hidden font-medium">Notifications</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <NuxtWelcome />
  </div>
</template>
