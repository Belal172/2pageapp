<template>
<h1>Home page</h1>
<router-link to="/settings">Settings</router-link>
  <router-link to="/profile">Profile</router-link>
<router-view></router-view>
</template>
<script>
export default{
    name:'HomeComp'
}
</script>