<template>
  <div class="profile-update-container">
    <h1>{{profileUpdateHeading}}</h1>
    <div class="left-container">
      <form class="profile-details-form" :autocomplete="autoCompleteStatus" @submit="handleSubmit">
        <InputBox
          v-for="(item,index) in profileFields"
          :typeSent="item.type"
          :key="index"
          :name="item.name"
          :placeholder="item.name"
          :inputName="item.inputName"
          :inputClass="inputClass"
          :labelClass="labelClass"
          :handleChange="changeHandle"
          :defaultValue="user[item.inputName]"
          :disabled="checkDisabled(item.inputName)"
        />
        <Button
          :value="btnValueUpdate"
          :buttonType="updateBtnType"
          :customClass="updateBtnClass"
          :handleClick="updateBtnClick"
        />
      </form>
    </div>
    <Toast
      v-if="toastData.showToast"
      :toastMessage="toastData.message"
      :toastType="toastData.type"
      :closeToast="()=>{showHideToast(false)}"
    />
  </div>
</template>
<script>
import CONSTANTS from "@/constants";
import InputBox from "@/components/inputBox/InputBox";
import Button from "@/components/button/Button";
import Toast from "@/components/toast/Toast";
import { updateUserData, getUser } from "@/auth/Auth";
export default {
  name: "ProfileComponent",
  data: () => ({
    profileUpdateHeading: "Profile Details",
    autoCompleteStatus: "off",
    profileFields: CONSTANTS.PROFILE.FIELDS,
    inputClass: "profile-input",
    labelClass: "hidden-class",
    formData: {
      displayName: "",
      location: ""
    },
    disabledFields: CONSTANTS.PROFILE.DISABLED_FIELDS,
    btnValueUpdate: "Update Profile",
    updateBtnType: "primary",
    updateBtnClass: "profile-update-btn",
    toastData: {
      showToast: false,
      toastType: CONSTANTS.LOGIN.TOAST_TYPES.SUCCESS,
      message: CONSTANTS.PROFILE.TOAST_MESSAGE_PROFILE
    }
  }),
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleSubmit: function(e) {
      e.preventDefault();
    },
    changeHandle: function(val, key) {
      this.formData = {
        ...this.formData,
        [key]: val
      };
    },
    checkDisabled: function(key) {
      if (this.disabledFields.findIndex(elem => elem === key) !== -1) {
        return true;
      }
      return false;
    },
    getBtnDisabledStatus: function() {
      const { formData } = this;
      if (
        formData &&
        Object.keys(formData).length > 0 &&
        this.checkFormValue()
      ) {
        return false;
      }
      return true;
    },
    updateBtnClick: function() {
      const { uid } = getUser();
      const { email } = this.user;
      const dataSent = {
        displayName: this.getDataSentData("displayName"),
        location: this.getDataSentData("location"),
        email
      };
      updateUserData(uid, dataSent, () => {
        this.showHideToast(true);
      });
    },
    showHideToast: function(status) {
      this.toastData = {
        ...this.toastData,
        showToast: status
      };
    },
    getDataSentData: function(key) {
      return this.formData[key] === "" ? this.user[key] : this.formData[key];
    }
  },
  components: { InputBox, Button, Toast }
};
</script>
<style lang="scss" >
@import "@/styles/_variables";
.profile-update-container {
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  padding: 0 0 50px 0;
  flex-wrap: wrap;
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
    padding: 0 30px;
  }
  .left-container {
    width: 40%;
    height: auto;
    box-sizing: border-box;
    box-shadow: 0 1px 30px $box-shadow;
    padding: 0 20px;
    margin: 10px;
    border-radius: 5px;
    .profile-details-form {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 0 20px;
      .profile-input {
        box-shadow: none;
        width: 75%;
        box-sizing: border-box;
        border: none;
        padding: 5px 0;
        border-bottom: 1px solid $grey-color;
        margin: 10px 0;
        font-size: 14px;
        &:focus {
          outline: none;
        }
        &:disabled {
          color: $black-color-opacity;
          cursor: not-allowed;
        }
      }
    }
    .profile-update-btn {
      box-sizing: border-box;
      margin: 20px 0 0;
      width: 75%;
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 767px) {
  .profile-update-container {
    .left-container {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>