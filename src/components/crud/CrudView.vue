<script setup>

import ListComponent from "@/components/crud/UserListComponent.vue";
</script>

<template>
  <b-container fluid class="d-flex">
    <b-container class="crud-sidebar">
      <b-container class="d-grid gap-5">
        <b-button squared class="mx-lg-0" size="lg" style="text-align: left; ">Users</b-button>
        <b-button squared class="mx-lg-0" size="lg" style="text-align: left; ">Push Device</b-button>
      </b-container>
    </b-container>
    <b-container class="crud-list">
      <component >
        <ListComponent/>
      </component>
    </b-container>
  </b-container>
</template>

<style scoped>

.d-flex{
  height: 100%;
  padding: 0;
}
.d-grid{
  padding-top: 5rem;
  display: flex;
  justify-content: left;
}
.crud-list{
  width: 80%;
  /*border: 2px solid blue; /**/
}
.crud-sidebar{
  width: 20%;
  /*border: 2px solid red;/* */
  border-right: 2px solid black;
}
</style>