<template>
  <div class="profile-dropdown" ref="profileDropdown">
    <div class="profile-information">
      <p v-if="user.displayName">{{ user.displayName }}</p>
      <p v-if="user.email">{{ user.email }}</p>
    </div>
    <ul class="profile-dropdown-list">
      <li
        v-for="(item, index) in profileDropDownData"
        :key="index"
        @click="
          () => {
            handleProfileClick(item.data);
          }
        "
      >{{ item.label }}</li>
    </ul>
  </div>
</template>
<script>
import CONSTANTS from "@/constants";
import Router from "@/router.js";
import { logout } from "@/auth/Auth";
export default {
  name: "ProfileDropDown",
  data: () => ({
    profileDropDownData: CONSTANTS.PROFILE_DROPDOWN_MENU
  }),
  props: {
    user: {
      type: Object,
      required: true
    },
    handleOutSideClick: {
      type: Function,
      default: () => {}
    }
  },
  methods: {
    handleProfileClick: function(key) {
      switch (key) {
        case "viewProfile":
          Router.push(CONSTANTS.ROUTES.PROFILE);
          break;
        case "logout":
          logout();
          break;
          deafult: break;
      }
    },
    outsideClick: function(e) {
      if (
        this.$refs.profileDropdown &&
        !this.$refs.profileDropdown.contains(e.target)
      ) {
        this.handleOutSideClick();
      }
    }
  },
  mounted: function() {
    document
      .querySelector("body")
      .addEventListener("mousedown", this.outsideClick);
  },
  beforeDestroy: function() {
    document
      .querySelector("body")
      .removeEventListener("mousedown", this.outsideClick);
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.profile-dropdown {
  position: absolute;
  background: $white-color;
  width: 200px;
  top: 45px;
  box-shadow: 0 1px 30px $box-shadow;
  right: 5px;
  padding: 10px 20px 40px;
  box-sizing: border-box;
  z-index: 1;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .profile-information {
    p {
      color: $primary-color;
      font-weight: 600;
      padding: 10px 0;
    }
  }
  .profile-dropdown-list {
    width: 100%;
    text-align: center;
    li {
      color: $black-color;
      padding: 10px 0;
      box-sizing: border-box;
      display: block;
      width: 100%;
      &:hover {
        transform: scale(1.15);
      }
    }
  }
}
</style>
