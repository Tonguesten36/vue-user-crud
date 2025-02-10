<template>
  <b-container fluid class="crud-list-header">
    <h1>Users</h1>
    <b-button squared class="mx-1 align-content-end align-self-center" size="lg" @click="showAddUserModal = true">
      Add User
    </b-button>
  </b-container>

  <b-container fluid class="crud-list-content">
    <b-table hover :items="dummyData" :fields="fields" responsive="sm">
      <template #cell(roleId)="row">
        {{ getRoleName(row.item.roleId) }}
      </template>
      <template #cell(actions)="row">
        <b-button class="mx-2" size="sm" @click="openEditModal(row.item)">Edit</b-button>
        <b-button class="mx-2" size="sm" variant="danger" @click="deleteUser(row.item.id)">Delete</b-button>
      </template>
    </b-table>
  </b-container>

  <!-- User Modal -->
  <b-modal v-model="showAddUserModal" title="Add New User">
    <b-form @submit.prevent="addUser">
      <b-form-group label="Username" :state="usernameState" invalid-feedback="Username must be at least 3 characters">
        <b-form-input v-model="newUser.username" required></b-form-input>
      </b-form-group>

      <b-form-group label="Email" :state="emailState" invalid-feedback="Enter a valid email">
        <b-form-input v-model="newUser.email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password" :state="passwordState" invalid-feedback="Password must be at least 8 characters">
        <b-form-input v-model="newUser.password" type="password" required></b-form-input>
      </b-form-group>

      <b-form-group label="User Role" :state="roleState" invalid-feedback="Role is required">
        <b-form-select v-model="newUser.roleId" :options="formattedRoles" required></b-form-select>
      </b-form-group>

      <div class="modal-buttons">
        <b-button type="submit" variant="primary">Add User</b-button>
        <b-button type="button" variant="secondary" @click="closeAddUserModal">Cancel</b-button>
      </div>
    </b-form>
  </b-modal>

  <!-- Edit User Modal -->
  <b-modal v-model="showEditUserModal" title="Edit User">
    <b-form @submit.prevent="updateUser">
      <b-form-group v-if="editedUser" label="Username" :state="editUsernameState" invalid-feedback="Username must be at least 3 characters">
        <b-form-input v-model="editedUser.username" required></b-form-input>
      </b-form-group>

      <b-form-group v-if="editedUser" label="Email" :state="editEmailState" invalid-feedback="Enter a valid email">
        <b-form-input v-model="editedUser.email" type="email" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password" :state="editPasswordState" invalid-feedback="Password must be at least 8 characters">
        <b-form-input v-model="newUser.password" type="password" required></b-form-input>
      </b-form-group>

      <b-form-group v-if="editedUser" label="User Role" :state="editRoleState" invalid-feedback="Role is required">
        <b-form-select v-model="editedUser.roleId" :options="formattedRoles" required></b-form-select>
      </b-form-group>
      <div class="modal-buttons">
        <b-button type="submit" variant="success">Update User</b-button>
        <b-button type="button" variant="secondary" @click="closeEditUserModal">Cancel</b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import api from '@/api.js';

interface User {
  id: number;
  username: string;
  email: string;
  password?: string;
  roleId?: number;
}

interface Role {
  roleId: number;
  roleName: string;
}

const fields = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'username', label: 'Username', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'roleId', label: 'Role', sortable: true},
  { key: 'actions', label: 'Actions', sortable: false }
];

const roles = ref<Role[]>([
  { roleId: 0, roleName: 'ROLE_ADMIN' },
  { roleId: 1, roleName: 'ROLE_USER' },
]);
const formattedRoles = computed(() =>
    roles.value.map(role => ({ value: role.roleId, text: role.roleName }))
);

const dummyData = ref<User[]>([
  { id: 1, username: "nht", email: "nht@example.com", roleId: 1 },
  { id: 2, username: "ts", email: "ts@example.com", roleId: 1 },
  { id: 3, username: "cassava", email: "cassava@example.com", roleId: 1 },
  { id: 0, username: "admin", email: "admin@example.com", roleId: 0},
]);

const showAddUserModal = ref(false);
const showEditUserModal = ref(false);
const newUser = ref<User>({ id: 0, username: '', email: '', password: '', roleId: undefined });
const editedUser = ref<User | null>(null);

// Validation states
const roleState = computed(() => newUser.value.roleId >= 0 ? true : null);
const editRoleState = computed(() => editedUser.value && editedUser.value.roleId >= 0 ? true : null);

// Separate validation for adding and editing
const usernameState = computed(() => newUser.value.username.length >= 3);
const emailState = computed(() => /\S+@\S+\.\S+/.test(newUser.value.email));
const passwordState = computed(() => newUser.value.password.length >= 8)

const editUsernameState = computed(() => {
  return editedUser.value && editedUser.value.username.length >= 3 ? true : null;
});

const editEmailState = computed(() => {
  return editedUser.value && /\S+@\S+\.\S+/.test(editedUser.value.email) ? true : null;
});

const editPasswordState = computed(() => {
  return editedUser.value && editedUser.value.password.length >= 8 ? true : null;
});

async function getAllUsers() {
  try {
    const response = await api.get('/user')
    console.log(response)
  } catch (e) {
  }
}

function addUser() {
  console.log("newUser.value.roleId: ", newUser.value.roleId);
  console.log("roleState: ", roleState.value);
  if (!usernameState.value || !emailState.value || !roleState.value) return; // Prevent invalid submissions

  newUser.value.id = dummyData.value.length > 0 ? Math.max(...dummyData.value.map(u => u.id), 0) + 1 : 1;

  dummyData.value.push({ ...newUser.value });
  // TODO: call /user (POST)
  // try{
  //   const response = await api.post('/user', {
  //     "username": newUser.value.username,
  //     "password": newUser.value.password,
  //     "email": newUser.value.email,
  //     "roles": [
  //       {
  //         "id": 1,
  //         "name": "ROLE_USER"
  //       }
  //     ]
  //   });
  //
    console.log("New user added:", newUser.value);
    newUser.value = { id: 0, username: '', email: '', password: '', roleId: undefined }; // Reset form fields
    showAddUserModal.value = false;
  // }
  // catch (e){
  //   console.error(e)
  // }
}

function openEditModal(user: User) {
  editedUser.value = { ...user }; // Clone user object
  showEditUserModal.value = true;
}

function updateUser() {
  console.log("editRoleState: ", editRoleState.value);
  if (!editedUser.value || !editUsernameState.value || !editEmailState.value || !editRoleState.value) return;

  const index = dummyData.value.findIndex(user => user.id === editedUser.value.id);
  if (index !== -1) {
    dummyData.value[index] = { ...editedUser.value };
  }

  console.log("User updated:", editedUser.value);
  showEditUserModal.value = false;
}

function deleteUser(id: number) {
  dummyData.value = dummyData.value.filter(user => user.id !== id);
  console.log("Deleted user with ID:", id);
}

function closeAddUserModal() {
  newUser.value = { id: 0, username: '', email: '', roleId: undefined }; // Reset form fields
  showAddUserModal.value = false;
}

function closeEditUserModal() {
  editedUser.value = null; // Clear edited user
  showEditUserModal.value = false;
}

function getRoleName(roleId: number) {
  const role = roles.value.find(r => r.roleId === roleId);
  return role ? role.roleName : 'Unknown';
}

onMounted(() => {
  getAllUsers()
})

</script>

<style scoped>
.crud-list-header {
  justify-content: space-between;
  display: flex;
  padding-bottom: 10px;
  padding-top: 20px;
  border-bottom: 1px solid black;
}

.modal-buttons{
  margin-top: 20px;
}
</style>
