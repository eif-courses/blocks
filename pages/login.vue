<template>
  <div>
    <div class="title">
      <h2>Login</h2>
    </div>
    <div class="container form">
      <label for="uname"><b>Username</b></label>
      <input
          v-model="user.username"
          type="text"
          class="input"
          placeholder="Enter Username"
          name="uname"
          required
      />

      <label for="psw"><b>Password</b></label>
      <input
          v-model="user.password"
          type="password"
          class="input"
          placeholder="Enter Password"
          name="psw"
          required
      />

      <button @click.prevent="login" class="button">Login</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {storeToRefs} from 'pinia';
import {useAuthStore} from '~/store/auth';

const {authenticateUser} = useAuthStore(); // use auth store

const {authenticated} = storeToRefs(useAuthStore()); // make authenticated state reactive

const user = ref({
  username: 'ma@gmail.com',
  password: 'kosmosas',
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
