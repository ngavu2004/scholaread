<template>
  <div id="nav" class="navbar transparent ">
    <a href="/newsfeed" style="font-size:2vw"><span class="fa fa-book"></span> ReadaholicVN</a>
    <router-link to="/">Login</router-link>
    <router-link to="/admin">Admin</router-link>
    <router-link to="/newsfeed">Newsfeed</router-link>
    <router-link to="/personal" v-if="this.$store.state.user!=null">Personal</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #fff;
  background: url("./assets/bg.jpg") no-repeat center;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  position: relative;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: right;
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  padding: 1em;
}

#nav a.router-link-exact-active {
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 20px;
  color: #fff;
}
</style>
