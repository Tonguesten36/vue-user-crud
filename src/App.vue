<script setup>
import HelloWorld from './components/HelloWorld.vue'

const onClick = () => {
  console.log("button clicked")
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="User CRUD" />
      <div class="greeting-buttons">
        <router-link to="/login">Login</router-link>
      </div>
    </div>
  </header>

  <main>
    <router-view/>
  </main>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.greeting-buttons{
  display: flex;
  margin-right: 100px;
}

.greeting-buttons router-link{
  font-size: 20px;
  margin: 30px;
  width: 100px;
  height: 50px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    margin: 0 0 0 2rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
