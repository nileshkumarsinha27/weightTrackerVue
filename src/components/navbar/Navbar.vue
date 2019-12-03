<template>
  <nav class="nav-bar">
    <div class="app-logo-container">
      <img
        :src="appLogo"
        alt="logo"
        class="app-logo"
        @click="
          () => {
            changeRoute(deafultRoute);
          }
        "
      />
    </div>
    <ul class="nav-list">
      <li
        v-for="(item, index) in navData"
        :key="index"
        @click="
          () => {
            changeRoute(item.route);
          }
        "
        :class="getSelectedClassName(item.route)"
      >
        {{ item.name }}
      </li>
    </ul>
  </nav>
</template>
<script>
import CONSTANTS from "@/constants";
import appIcn from "@/assets/weightTracker.svg";
import Router from "@/router.js";
import cx from "classnames";
export default {
  name: "Navbar",
  data: () => ({
    navData: CONSTANTS.NAVBAR.DATA,
    appLogo: appIcn,
    deafultRoute: CONSTANTS.ROUTES.DEFAULT
  }),
  methods: {
    changeRoute: function(route) {
      Router.push(route);
    },
    getSelectedClassName: function(route) {
      const { path } = Router.history.current;
      if (path === route && path !== CONSTANTS.ROUTES.DEFAULT) {
        return cx(["selected"]);
      }
      return "";
    }
  },
  watch: {
    $route: function(to, from) {
      if (to.path !== from.path) {
        this.getSelectedClassName(to.path);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_variables";
.nav-bar {
  position: fixed;
  left: 0;
  top: 0;
  width: 20%;
  background: $primary-color;
  min-height: 100vh;
  .nav-list {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    li {
      padding: 20px;
      width: 100%;
      color: $white-color;
      cursor: pointer;
      box-sizing: border-box;
      &:hover {
        background: $primary-color-variant;
        font-weight: bold;
      }
    }
  }
  .app-logo-container {
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px 0;
    .app-logo {
      width: 40px;
      height: 40px;
      box-sizing: border-box;
      display: inline-block;
      cursor: pointer;
    }
  }
}
</style>
