<script setup lang="ts">
import {ref} from 'vue';
import api from '@/api.js';
import { useRouter } from "vue-router";

const identifier = ref('');
const password = ref('');
const errorMessage = ref('');

const router = useRouter();

// TODO: Call APIs from localhost:8080/api/v1/auth/login
async function handleLogin() {
  if (!identifier.value || !password.value) {
    errorMessage.value = 'Please fill in all fields';
  } else {
    errorMessage.value = '';
    console.log({username: identifier.value, password: password.value});
  }

  try {
    const response = await api.post(
      '/auth/login',
      {identifier: identifier.value, password: password.value},
    );
    console.log(response);

    const token = response.data;
    localStorage.setItem('authToken', token); // store JWT

    await router.push("/"); // redirect to home page
  } catch (error) {
    console.error('Login error: ', error);

    if (error.response && error.response.status === 401) {
      errorMessage.value = "Invalid username or password.";
    } else {
      errorMessage.value = "Login failed. Please try again later.";
    }
  }
}
</script>

<template>
  <b-card class="p-4" style="max-width: 400px; width: 100%" header="Login">
    <b-form @submit.prevent="handleLogin">
      <b-form-group label="Username" label-for="username">
        <b-form-input
            id="username"
            v-model="identifier"
            type="text"
            placeholder="Enter your username"
            class="b-form-inputs"
        />
      </b-form-group>

      <b-form-group label="Password" label-for="password">
        <b-form-input
            id="password"
            v-model="password"
            type="password"
            placeholder="Enter your password"
            class="b-form-inputs"
        />
      </b-form-group>

      <p v-if="errorMessage" style="color:red">
        {{ errorMessage }}
      </p>
      <b-button type="submit" variant="primary" class="w-100">Login</b-button>
    </b-form>
  </b-card>
</template>

<style scoped>
.b-form-inputs{
  margin-bottom: 20px;
}
</style>
