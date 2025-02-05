
<template>
  <b-container fluid class="crud-list-header">
    <h1>Users</h1>
    <b-button squared class="mx-1 align-content-end align-self-center" size="lg" @click="addUser">Add User</b-button>
  </b-container>
  <b-container fluid class="crud-list-content">
    <b-table hover :items="dummyData" :fields="fields" responsive="sm" >
      <template #cell(actions)="row">
        <b-button class="mx-2" size="sm" @click="editUser">Edit</b-button>
        <b-button class="mx-2" size="sm" @click="deleteUser">Delete</b-button>
      </template>
    </b-table>
  </b-container>
</template>

<script setup lang="ts">
  import {TableFieldRaw} from 'bootstrap-vue-next';

  interface User{
    id: number;
    username: string;
    email: string;
  }

  const fields: TableFieldRaw[User] =[
    {
      key: 'id',
      label: 'ID',
      sortable: true,
    },
    {
      key: 'username',
      label: 'Username',
      sortable: true,
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
    },
    {
      key: 'actions',
      label: 'Actions'
    }
  ]

  const dummyData: User[] = [
    {id: 1, username: "nht", email: "nht@example.com"},
    {id: 2, username: "ts", email: "ts@example.com"},
    {id: 3, username: "cassava", email: "cassava@example.com"},
    {id: 0, username: "admin", email: "admin@example.com"},
  ]

  function addUser(){
    const newUser: User = {id: 90, username: "ntn", email: "ntn@example.com"};
    dummyData.push(newUser);

    console.log("new user added");
  }
  function editUser(){
    //TODO: edit user when button clicked
    console.log("edited user");
  }
  function deleteUser(){
    //TODO: delete user when button clicked
    console.log("deleted user");
  }
</script>


<style scoped>
.crud-list-header{
  justify-content: space-between;
  display: flex;
  padding-bottom: 10px;
  padding-top: 20px;
  border-bottom: 1px solid black;
}
</style>