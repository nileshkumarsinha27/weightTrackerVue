<template>
  <div id="app">
    <Header />
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/Navbar";
export default {
  name: "App",
  components: { Header, NavBar }
};
</script>

<style lang="scss">
@import "@/styles/_main.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x: hidden;
}
</style>
