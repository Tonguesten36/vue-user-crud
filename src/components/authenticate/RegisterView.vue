<script setup>
import {ref} from 'vue';
// TODO: Call APIs from localhost:8080/api/v1/auth/register

const username = ref('');
const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleRegister = () => {
  if (!username.value || !email.value || !password.value) {
    errorMessage.value = 'Please fill in all fields';
  } else {
    errorMessage.value = '';
    console.log({username: username.value, email: email.value, password: password.value});
  }
}
</script>

<template>
  <b-card class="p-4" style="max-width: 400px; width: 100%" header="Register">
    <b-form @submit.prevent="handleRegister">
      <b-form-group label="Username" label-for="username">
        <b-form-input
            id="username"
            v-model="username"
            type="text"
            placeholder="Enter your username"
            class="b-form-inputs"
        />
      </b-form-group>

      <b-form-group label="Email" label-for="email">
        <b-form-input
            id="email"
            v-model="email"
            type="email"
            placeholder="Enter your email"
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