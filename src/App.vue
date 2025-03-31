<template>
<div class="navigation">
  <router-link to="/">HelloWorld</router-link>
  <router-link to="/home">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/contact">Contactus</router-link>
  <router-link to="/signup">Signup</router-link>
  <router-view></router-view>
</div>
 

</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navigation{
  padding: 10px;
  gap: 10px;
}
</style>
