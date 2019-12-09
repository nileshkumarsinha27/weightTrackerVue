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
      <Button
        :value="buttonValueSignUp"
        :handleClick="handleButtonClickSignUp"
        :buttonType="signUpBtnType"
      />
    </div>
  </div>
</template>

<script>
import InputBox from "../components/inputBox/InputBox";
import Button from "../components/button/Button";
import ImageComponent from "../components/imageComponent/ImageComponent";
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
    signUpBtnType: "secondary"
  }),
  components: { InputBox, Button, ImageComponent },
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
      const { showSignUpForm } = this;
      if (showSignUpForm) {
        signUp(email, password);
        this.showSignUpForm = false;
      } else {
        login(email, password);
      }
    },
    getButtonValue: function() {
      return this.showSignUpForm
        ? this.buttonValueSignUp
        : this.buttonValueSignIn;
    },
    handleButtonClickSignUp: function() {
      this.showSignUpForm = true;
    },
    getDisabledStatus: function() {
      return checkEmptyStr(this.formDataSent.email) &&
        checkEmptyStr(this.formDataSent.password) &&
        matchRegex(CONSTANTS.REGEX_PATTERS.EMAIL, this.formDataSent.email)
        ? false
        : true;
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
}
@media screen and (max-width: 767px) {
  .login-container {
    .main-logo {
      height: 75px;
      width: 75px;
    }
    h1 {
      text-align: center;
      font-size: 24px;
    }
  }
}
</style>
