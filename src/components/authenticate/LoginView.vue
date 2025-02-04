<script setup>
import {ref} from 'vue';

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = () => {
  if (!email.value || !password.value) {
    errorMessage.value = 'Please fill in all fields';
  } else {
    errorMessage.value = '';
    console.log({email: email.value, password: password.value});
  }
};
</script>

<template>
  <b-card class="p-4" style="max-width: 400px; width: 100%" header="Login">
    <b-form @submit.prevent="handleLogin">
      <b-form-group label="Email" label-for="email">
        <b-form-input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Enter your email"
            class="b-form-inputs"
        />
      </b-form-group>

      <b-form-group label="Password" label-for="password">
        <b-form-input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Enter your password"
            class="b-form-inputs"
        />
      </b-form-group>

      <b-button type="submit" variant="primary" class="w-100">Login</b-button>
    </b-form>
    <b-alert v-if="errorMessage" variant="danger" show class="mt-3">
      {{ errorMessage }}
    </b-alert>
  </b-card>
</template>

<style scoped>
.b-form-inputs{
  margin-bottom: 20px;
}
</style>
