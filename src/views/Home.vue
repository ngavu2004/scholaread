<template>
  <Login2 />
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Login2 from "@/components/Login2.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "../store";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Login2,
    store,
  },
};
</script>

<style>

</style>
