<template>
  <b-container fluid>
    <!-- Fixed Navbar -->
    <b-navbar toggleable="lg" v-b-color-mode="'dark'" variant="secondary" class="fixed-top">
      <b-navbar-brand href="/">Vue App</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/login">Login</b-nav-item>
          <b-nav-item to="/register">Register</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Main content -->
    <b-container class="main-content-wrapper">
      <div class="main-content">
        <router-view />
      </div>
    </b-container>
  </b-container>
</template>

<style scoped>
.main-content-wrapper {
  /* Ensures it spans the entire viewport width */
  width: 205%;

  padding-top: 50px;

  /* Center content */
  display: flex;
  justify-content: center;
  align-items: center;

  /*  border: 2px solid red; Debugging */
}
</style>

<script setup lang="ts">
</script>