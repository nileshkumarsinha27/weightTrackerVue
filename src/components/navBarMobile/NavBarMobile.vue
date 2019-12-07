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
      >{{ item.name }}</li>
    </ul>
  </nav>
</template>
<script>
import CONSTANTS from "@/constants";
import Router from "@/router.js";
import cx from "classnames";
import { logout } from "../../auth/Auth";
import Store from "@/store.js";
import ACTIONS from "@/actions.constants.js";
export default {
  name: "NavBarMobile",
  data: () => ({
    navData: CONSTANTS.NAVBAR.DATA,
    deafultRoute: CONSTANTS.ROUTES.DEFAULT
  }),
  methods: {
    changeRoute: function(route) {
      Router.push(route);
      Store.dispatch(ACTIONS.HEADER.TOGGLE_MENU);
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
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.nav-bar {
  width: 40%;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 50px;
  background: $primary-color;
  min-height: 100vh;
  height: 100%;
  z-index: 1;
  animation: navBarAnimation 0.5s ease;
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
      font-size: 12px;
      &:hover {
        background: $primary-color-variant;
        font-weight: bold;
      }
    }
  }
}
</style>