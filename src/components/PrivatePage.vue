<script setup>
import {ref, onMounted} from 'vue';
import api from '@/api.js';

const privateData = ref('');
const errorMessage = ref('');

async function getPrivateRenderPermission() {
  try {
    const token = localStorage.getItem("authToken");
    const response = await api.get(
      '/private'
    );

    console.log(response);

    privateData.value = response.data;
    errorMessage.value = ''; // Reset error message if successful
  } catch (e) {
    console.error('Render error: ', e);
    console.error('status: ', e.response.status)
    if (e.response && e.response.status === 401) {
      errorMessage.value = 'Unauthorized access. Please log in.';
    } else {
      errorMessage.value = 'Something went wrong. Please try again later.';
    }
  }
}

onMounted(getPrivateRenderPermission);
</script>

<template>
  <b-container fluid class="align-self-center">
    <h1 v-if="privateData">{{ privateData }}</h1>
    <h1 v-else class="error-text">{{ errorMessage }}</h1>
  </b-container>
</template>

<style scoped>
.error-text {
  color: red;
  font-weight: bold;
}
</style>
