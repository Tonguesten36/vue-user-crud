<template>
  <b-container fluid class="crud-list-header">
    <h1>Push Device</h1>
    <div>
      <b-button squared class="mx-1 align-self-center" size="lg" @click="addUserDevice">Add User Device</b-button>
      <b-button squared class="mx-1 align-self-center" size="lg" @click="addUserDevice">Send Notification</b-button>
    </div>
  </b-container>
  <b-container fluid class="crud-list-content">
    <b-table hover :items="dummyData" :fields="fields" responsive="sm" >
    </b-table>
  </b-container>
</template>

<script setup lang="ts">
import {TableFieldRaw} from 'bootstrap-vue-next';

interface UserDeviceInfo{
  id: number;
  username: string;
  token: string;
  deviceName: string;
  deviceUuid: string;
}

const fields: TableFieldRaw[UserDeviceInfo] = [
  {key: 'id', label:'ID', sortable:true},
  {key: 'username', label:'Username', sortable:true},
  {key: 'token', label:'FCM Token', sortable:true},
  {key: 'deviceName', label:'Device Name', sortable:true},
  {key: 'deviceUuid', label:'Device UUID', sortable:true},
]

const dummyData: UserDeviceInfo[] = [
  { id: 1, username: 'nht', token: 'token1', deviceName: 'device name', deviceUuid: 'uuid1' },
  { id: 2, username: 'john_doe', token: 'token2', deviceName: 'iPhone 13', deviceUuid: 'uuid2' },
  { id: 3, username: 'jane_smith', token: 'token3', deviceName: 'Samsung Galaxy S21', deviceUuid: 'uuid3' },
  { id: 4, username: 'alice_wonder', token: 'token4', deviceName: 'Google Pixel 7', deviceUuid: 'uuid4' },
  { id: 5, username: 'bob_marley', token: 'token5', deviceName: 'OnePlus 9', deviceUuid: 'uuid5' }
]

function addUserDevice(){
  console.log("added user device")
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