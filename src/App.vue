<template>
  <!-- Fixed Navbar -->
  <b-navbar toggleable="lg" v-b-color-mode="'dark'" variant="secondary" class="fixed-top">
    <b-navbar-brand href="/" style="margin-left: 20px">Vue App</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/crud/user">CRUD API</b-nav-item>
      <div class="d-flex position-absolute end-0" style="margin-right: 20px">
        <b-nav-item to="/login" id="login-button">Login</b-nav-item>
        <b-nav-item to="/register" id="register-button">Register</b-nav-item>
      </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <!-- Main content -->
  <b-container fluid class="main-content-wrapper">
      <router-view />
  </b-container>
</template>

<style scoped>
.main-content-wrapper {

  width: 94.5vw; /* It works... */
  height: 90vh;
  padding: 0;

  /* Prevent overlapping with navbar*/
  margin-top: 3rem;


  /* Center content */
  display: flex;
  justify-content: center;
  align-items: center;

  /*border: 2px solid green; /* Debugging */
}
</style>

<script setup lang="ts">
</script>