<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const handleLogin = () => {
  if (!email.value || !password.value) {
    errorMessage.value = 'Please fill in all fields'
    return
  }

  // Return inputs
  console.log({email: email.value, password: password.value})
}
</script>

<template>
  <div class="form-login">
    <h2 id="header-login">Login</h2>

    <form @submit.prevent="handleLogin">
      <div class="field">
        <label for="email" class="field-label">Email</label>
        <input
            id="email"
            v-model="email"
            size="30"
            class="field-input"
        />
      </div>

      <div class="field">
        <label for="password" class="field-label">Password</label>
        <input
            type="password"
            id="password"
            v-model="password"
            size="30"
            class="field-input"
        />
      </div>

      <button
          type="submit"
          class="form-submit-button"
      >
        Login
      </button>
      <p v-if="errorMessage" id="error-msg">{{ errorMessage }}</p>
    </form>
  </div>
</template>


<style scoped>
/* Optional styling */
.form-login{
  color: white;
  background-color: #292929;
  padding: 40px calc(var(--section-gap) / 2);

}

#header-login{
  font-size: 40px;
  font-weight: bold;
}

#error-msg{
  color: red;
}

.field{
  padding-bottom: 10px;
}

.field-label{
  display: block;
}

.form-submit-button{
  margin-top: 15px;
  font-size: 1.1rem;
}


</style>
