<script setup>

import UserListComponent from "@/components/crud/UserListComponent.vue";
import DeviceListComponent from "@/components/crud/DeviceListComponent.vue";

import { ref } from 'vue'
function getAdminJWT(){
  const token = localStorage.getItem("authToken");
  console.log(token);
  if(!token){
    return false;
  }

  try{
    const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
    console.log(payload)
    return payload.sub === "admin";
  } catch(e){
    console.error("Invalid JWT token:", e);
    return false;
  }
}

const isAdmin = ref(getAdminJWT());
const currentTab = ref('UserListComponent')

const tabs = {
  "Users": UserListComponent,
  "Push Device": DeviceListComponent
}


</script>

<template>
  <b-container v-if="isAdmin" fluid class="d-flex">
    <b-container class="crud-sidebar">
      <b-container class="d-grid gap-5">
        <b-button
          v-for="(tabKey, tabComponent) in tabs"
          :key="tabKey"
          squared class="mx-lg-0" size="lg" style="text-align: left"
          @click="currentTab=tabComponent"
        >
          {{tabComponent}}
        </b-button>
      </b-container>
    </b-container>
    <b-container class="crud-list">
      <keep-alive>
        <component :is="tabs[currentTab]"> </component>
      </keep-alive>
    </b-container>
  </b-container>
  <b-container v-else>
    <h1>Access denied</h1>
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