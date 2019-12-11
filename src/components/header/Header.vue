<template>
  <header class="header">
    <img :src="hamburger" alt="menu" class="hamburger-menu" @click="showNavBar" />
    <img
      :src="appLogo"
      alt="logo"
      class="app-logo"
      @click="
        () => {
          changeRoute(defaultRoute);
        }
      "
    />
    <h1>{{ title }}</h1>
    <UserProfileContainer :user="user" />
  </header>
</template>
<script>
import CONSTANTS from "@/constants";
import UserProfileContainer from "@/components/userProfileContainer/UserProfileContainer";
import appIcn from "@/assets/weightTracker.svg";
import hamburgerIcn from "@/assets/hamburger.svg";
import { mapGetters } from "vuex";
import Router from "@/router.js";
import Store from "@/store.js";
import ACTIONS from "@/actions.constants.js";
export default {
  name: "Header",
  data: () => ({
    title: CONSTANTS.APP_TITLE,
    defaultRoute: CONSTANTS.ROUTES.DEFAULT,
    appLogo: appIcn,
    hamburger: hamburgerIcn
  }),
  methods: {
    changeRoute: function(route) {
      Router.push(route);
      Store.dispatch(ACTIONS.NAVBAR.SET_NAV_ROUTE, route);
    },
    showNavBar: function() {
      Store.dispatch(ACTIONS.HEADER.TOGGLE_MENU);
    }
  },
  components: { UserProfileContainer },
  computed: {
    ...mapGetters({
      user: "getUserDetails"
    })
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $primary-color;
  color: $white-color;
  height: 50px;
  box-sizing: border-box;
  padding: 20px;
  position: fixed;
  top: 0;
  z-index: 1;
  h1 {
    font-size: 22px;
  }
  .app-logo {
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;
    margin: 0 10px 0 0;
  }
  .hamburger-menu {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .header {
    .hamburger-menu {
      display: inline-block;
    }
    .app-logo {
      display: none;
    }
  }
}
</style>
