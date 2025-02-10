<script setup lang="ts">
import { ref, onMounted } from 'vue';
import api from '@/api.js';

const publicData = ref<string | null>(null);
const errorMessage = ref<string | null>(null);

async function getPublicRenderPermission() {
  try {
    const response = await api.get('/public');
    publicData.value = response.data;
    errorMessage.value = null; // Reset error on success
  } catch (e: any) {
    console.error('Render error:', e);
    errorMessage.value = 'Failed to load public content. Please try again later.';
  }
}

onMounted(getPublicRenderPermission);
</script>

<template>
  <b-container fluid class="align-self-center">
    <h1 v-if="publicData">{{ publicData }}</h1>
    <h1 v-else-if="errorMessage" class="error-text">{{ errorMessage }}</h1>
    <h1 v-else>Loading...</h1>
  </b-container>
</template>

<style scoped>
.error-text {
  color: red;
  font-weight: bold;
}
</style>
