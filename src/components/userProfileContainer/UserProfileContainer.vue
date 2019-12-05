<template>
  <div
    class="profile-container"
    @click="
      () => {
        changeDropDownStatus();
      }
    "
  >
    <ImageComponent
      v-if="checkImageSrc()"
      :imageSrc="getImageSrc()"
      :imageAlt="profileAlt"
      :customClass="initialsClass"
    />
    <span :class="initialsClass">{{ getProfileInitial() }}</span>
    <ProfileDropDown
      v-if="showDropDown"
      :user="user"
      :handleOutSideClick="
        () => {
          changeDropDownStatus(false);
        }
      "
    />
  </div>
</template>
<script>
import ImageComponent from "@/components/imageComponent/ImageComponent";
import ProfileDropDown from "@/components/profileDropDown/ProfileDropDown";
export default {
  name: "UserProfileContainer",
  data: () => ({
    profileAlt: "profile",
    initialsClass: "profile-image",
    showDropDown: false
  }),
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkImageSrc: function() {
      const { photoURL } = this.user;
      return photoURL ? true : false;
    },
    getProfileInitial: function() {
      const { displayName, email } = this.user;
      if (displayName) {
        return displayName[0];
      }
      return email[0];
    },
    getImageSrc: function() {
      const { photoURL } = this;
      return photoURL;
    },
    changeDropDownStatus: function(status = null) {
      if (status) {
        this.showDropDown = status;
      } else {
        this.showDropDown = !this.showDropDown;
      }
    }
  },
  components: { ImageComponent, ProfileDropDown }
};
</script>
<style lang="scss">
@import "@/styles/_variables";
.profile-container {
  width: 40px;
  height: 40px;
  border: 1.5px solid $white-color;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  .profile-image {
    font-size: 24px;
    display: inline-block;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
