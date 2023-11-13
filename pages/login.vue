<template>
  <div>



    <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
      <div class="text-center mb-5">
        <img src="/logo.png" alt="Image" height="50" class="mb-3" />
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span class="text-600 font-medium line-height-3">Don't have an account?</span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
      </div>

      <div>
        <label for="email1" class="block text-900 font-medium mb-2">Email</label>
        <InputText v-model="user.username" id="email1" type="text" placeholder="Email address" class="w-full mb-3" />

        <label for="password1" class="block text-900 font-medium mb-2">Password</label>
        <InputText v-model="user.password" id="password1" type="password" placeholder="Password" class="w-full mb-3" />

        <div class="flex align-items-center justify-content-between mb-6">
          <div class="flex align-items-center">
            <Checkbox id="rememberme1" :binary="true" v-model="checked1" class="mr-2"></Checkbox>
            <label for="rememberme1">Remember me</label>
          </div>
          <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
        </div>

        <Button label="Sign In" @click.prevent="login" icon="pi pi-user" class="w-full"></Button>
      </div>
    </div>


<!--    <div class="title">-->
<!--      <h2>Login</h2>-->
<!--    </div>-->
<!--    <div class="container form">-->
<!--      <label for="uname"><b>Username</b></label>-->
<!--      <input-->
<!--          v-model="user.username"-->
<!--          type="text"-->
<!--          class="input"-->
<!--          placeholder="Enter Username"-->
<!--          name="uname"-->
<!--          required-->
<!--      />-->

<!--      <label for="psw"><b>Password</b></label>-->
<!--      <input-->
<!--          v-model="user.password"-->
<!--          type="password"-->
<!--          class="input"-->
<!--          placeholder="Enter Password"-->
<!--          name="psw"-->
<!--          required-->
<!--      />-->

<!--      <button @click.prevent="login" class="button">Login</button>-->
<!--    </div>-->
  </div>
</template>
<script lang="ts" setup>
import {storeToRefs} from 'pinia';
import {useAuthStore} from '~/store/auth';

const checked1 = ref(false); //

const {authenticateUser} = useAuthStore(); // use auth store

const {authenticated} = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = ref({
  username: 'marius@example.com',
  password: 'string',
});
const router = useRouter();

const login = async () => {
  await authenticateUser(user.value);
  // redirect to homepage if user is authenticated
  if (authenticated) {
    await router.push('/');
  }
};
</script>
