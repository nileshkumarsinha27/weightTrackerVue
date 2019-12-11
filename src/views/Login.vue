<template>
  <div class="login-container">
    <ImageComponent
      :imageSrc="imageData.src"
      :imageAlt="imageData.alt"
      :customClass="appImageClass"
    />
    <h1>{{ appTitle }}</h1>
    <h3>{{ getButtonValue() }}</h3>
    <form class="login-container-form" @submit="handleSubmit" :autocomplete="autoCompleteStatus">
      <InputBox
        v-for="(item, index) in formData"
        :key="index"
        :typeSent="item.type"
        :name="item.name"
        :placeholder="item.name"
        :inputName="item.inputName"
        :inputClass="inputClass"
        :labelClass="labelClass"
        :handleChange="handleChange"
        :isClear="isClear"
      />
      <Button
        :value="getButtonValue()"
        :handleClick="handleButtonClick"
        :buttonType="btnType"
        :isDisabled="getDisabledStatus()"
      />
    </form>
    <div v-if="!showSignUpForm" class="sign-up-section">
      <div class="border-line">
        <span>OR</span>
      </div>
      <span
        class="back-btn-span sign-up-link"
        @click="()=>{handleButtonClickSignUp(true)}"
      >{{buttonValueSignUp}}</span>
    </div>
    <div v-if="showSignUpForm">
      <span class="back-btn-span" @click="()=>{handleButtonClickSignUp(false)}">{{backToLogin}}</span>
    </div>
    <Toast
      v-if="toast.showToast"
      :toastMessage="toast.message"
      :toastType="toast.type"
      :closeToast="()=>{showHideToast(false,'','')}"
      :customClass="loginToastClass"
    />
  </div>
</template>

<script>
import InputBox from "../components/inputBox/InputBox";
import Button from "../components/button/Button";
import ImageComponent from "../components/imageComponent/ImageComponent";
import Toast from "../components/toast/Toast";
import CONSTANTS from "../constants";
import appIcon from "../assets/weightTracker.svg";
import { checkEmptyStr, matchRegex } from "../utils";
import { signUp, login } from "../auth/Auth";
export default {
  name: "Login",
  data: () => ({
    formData: CONSTANTS.LOGIN.LOGIN_FORM_DATA,
    imageData: {
      src: appIcon,
      alt: "App Logo"
    },
    buttonValueSignIn: "Sign In",
    buttonValueSignUp: "Sign Up",
    formDataSent: {
      email: "",
      password: ""
    },
    appTitle: CONSTANTS.APP_TITLE,
    appImageClass: "main-logo",
    btnType: "primary",
    labelClass: "hidden-class",
    inputClass: "common-input",
    autoCompleteStatus: "off",
    showSignUpForm: false,
    signUpBtnType: "secondary",
    backToLogin: "Back to sign in",
    toast: {
      message: "",
      type: "",
      showToast: false
    },
    loginToastClass: "login-toast",
    isClear: false
  }),
  components: { InputBox, Button, ImageComponent, Toast },
  methods: {
    handleSubmit: function(e) {
      e.preventDefault();
    },
    handleChange: function(value, key) {
      this.formDataSent = {
        ...this.formDataSent,
        [key]: value
      };
    },
    handleButtonClick: function() {
      const { email, password } = this.formDataSent;
      const { showSignUpForm, showHideToast } = this;
      if (showSignUpForm) {
        signUp(email, password, showHideToast);
        this.showSignUpForm = false;
        this.isClear = true;
      } else {
        login(email, password, showHideToast);
      }
    },
    getButtonValue: function() {
      return this.showSignUpForm
        ? this.buttonValueSignUp
        : this.buttonValueSignIn;
    },
    handleButtonClickSignUp: function(signupStatus) {
      this.showSignUpForm = signupStatus;
    },
    getDisabledStatus: function() {
      return checkEmptyStr(this.formDataSent.email) &&
        checkEmptyStr(this.formDataSent.password) &&
        matchRegex(CONSTANTS.REGEX_PATTERS.EMAIL, this.formDataSent.email)
        ? false
        : true;
    },
    showHideToast: function(status, message, type) {
      this.toast = {
        ...this.toast,
        message,
        type,
        showToast: status
      };
    }
  }
};
</script>
<style lang="scss">
@import "../styles/_variables.scss";
.login-container {
  width: 50%;
  margin: 0 auto;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: opacityAnimation 0.4s ease;
  .main-logo {
    display: block;
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    padding: 0 0 10px;
    margin: 0 0 10px;
  }
  h1 {
    font-weight: bold;
    font-size: 32px;
    text-transform: uppercase;
  }
  h3 {
    font-weight: 600;
    margin: 10px 0;
  }
  .login-container-form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      margin: 10px 0;
      font-size: 18px;
    }
    button {
      margin: 10px 0;
    }
  }
  .sign-up-section {
    width: 100%;
    text-align: center;
    .border-line {
      border-top: 2px solid $grey-color;
      width: 80%;
      text-align: center;
      margin: 10px auto;
      span {
        background: $white-color;
        color: $secondary-color;
        font-weight: bold;
        padding: 0 10px;
        position: relative;
        top: -8px;
      }
    }
  }
  .back-btn-span {
    margin: 10px 0;
    text-decoration: underline;
    color: $secondary-color;
    cursor: pointer;
    &.sign-up-link {
      font-weight: bold;
    }
  }
  .login-toast {
    width: 300px;
    padding: 10px;
    span {
      padding: 0 10px;
    }
  }
}
@media screen and (max-width: 767px) {
  .login-container {
    margin: -50px auto 0;
    .main-logo {
      height: 75px;
      width: 75px;
      text-align: justify;
    }
    h1 {
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>
