<script setup>

</script>

<template>
  <b-card class="text-center p-4 shadow-sm">
    <b-img alt="Vue logo" class="logo mb-3" src="/src/assets/logo.svg" width="125" height="125" />

    <h1 class="text-primary">User CRUD</h1>

    <h3 class="mt-3">
      You’ve successfully created a project with
      <br>
      <b-link href="https://vite.dev/" target="_blank">Vite</b-link> +
      <b-link href="https://vuejs.org/" target="_blank">Vue 3</b-link>
    </h3>

    <h3 id="heading3-login-or-regis" class="text-muted mt-3">
      You can start by logging in, or creating a new account.
    </h3>
  </b-card>
</template>

<style scoped>
.logo {
  display: block;
  margin: 0 auto;
}

h1 {
  font-weight: 500;
  font-size: 2rem;
}

h3 {
  font-size: 1.1rem;
}

#heading3-login-or-regis {
  font-size: 0.9rem;
}
</style>
