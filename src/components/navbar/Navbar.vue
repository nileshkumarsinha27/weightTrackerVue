<template>
  <nav class="nav-bar">
    <ul class="nav-list">
      <li
        v-for="(item, index) in navData"
        :key="index"
        @click="
          () => {
            if (item.route !== '') {
              changeRoute(item.route);
            } else {
              logoutFunc();
            }
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
import Router from "@/router.js";
import cx from "classnames";
import { logout } from "../../auth/Auth";
export default {
  name: "Navbar",
  data: () => ({
    navData: CONSTANTS.NAVBAR.DATA,
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
    },
    logoutFunc: function() {
      logout();
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
  top: 50px;
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
}
</style>
