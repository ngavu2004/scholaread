<template>
  <Login />
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import store from '../store'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Login,
    store,
  },
}
</script>

<style>
</style>