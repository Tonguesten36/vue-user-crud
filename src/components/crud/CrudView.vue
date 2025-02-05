<script setup>

import ListComponent from "@/components/crud/UserListComponent.vue";
import SidebarComponent from "@/components/crud/SidebarComponent.vue";
</script>

<template>
  <b-container fluid class="d-flex">
    <b-container class="crud-sidebar">
      <SidebarComponent/>
    </b-container>
    <b-container class="crud-list">
      <ListComponent/>
    </b-container>
  </b-container>
</template>

<style scoped>

.d-flex{
  height: 100%;
  padding: 0;
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