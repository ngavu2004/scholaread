<template>
  <HelloWorld />
  <button @click="showModal=true">Open Modal!</button>
  <Login v-if="showModal" @close="closeModal" />
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Login from "@/components/Login.vue";
import "bootstrap/dist/css/bootstrap.min.css";
export default {
  components: {
    HelloWorld,
    Login,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    seeModal() {
        this.showModal = true;
      },
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style>
</style>