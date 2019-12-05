<template>
  <header class="header">
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
    <h1>{{ title }}</h1>
    <UserProfileContainer :user="user" />
  </header>
</template>
<script>
import CONSTANTS from "@/constants";
import UserProfileContainer from "@/components/userProfileContainer/UserProfileContainer";
import appIcn from "@/assets/weightTracker.svg";
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data: () => ({
    title: CONSTANTS.APP_TITLE,
    defaultRoute: CONSTANTS.ROUTES.DEFAULT,
    appLogo: appIcn
  }),
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
}
</style>
