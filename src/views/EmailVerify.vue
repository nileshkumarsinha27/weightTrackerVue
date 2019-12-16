<template>
  <div class="email-verify-container">
    <ImageComponent
      :imageSrc="appIcn"
      :alt="appLogoText"
      :customClass="appImageClass"
    />
    <h2>{{ mainViewTitle }}</h2>
    <p>{{ mainViewDescription }}</p>
    <Button
      :value="btnValue"
      :buttonType="btnType"
      :customClass="btnClass"
      :handleClick="handleBtnClick"
    />
    <Toast
      v-if="toast.showToast"
      :toastMessage="toast.message"
      :toastType="toast.type"
      :closeToast="
        () => {
          showHideToast(false, '', '');
        }
      "
      :customClass="loginToastClass"
    />
    <span class="back-btn-span" @click="backToLoginScreen">{{
      backToLogin
    }}</span>
  </div>
</template>
<script>
import Button from '@/components/button/Button';
import Toast from '../components/toast/Toast';
import ImageComponent from '@/components/imageComponent/ImageComponent';
import CONSTANTS from '@/constants';
import AppLogo from '@/assets/weightTracker.svg';
import { sendVerificationLink, logout } from '@/auth/Auth';
export default {
  name: 'EmailVerify',
  components: { Button, ImageComponent, Toast },
  data: () => ({
    mainViewTitle: CONSTANTS.PAGE_TITLES.MAIN_VIEW,
    mainViewDescription: CONSTANTS.EMAIL_VERIFY.DESCRIPTION,
    appIcn: AppLogo,
    appLogoText: CONSTANTS.MAIN_VIEW_COMPONENT.IMAGE_ALT,
    appImageClass: 'main-logo',
    btnValue: CONSTANTS.EMAIL_VERIFY.BTN_VALUE,
    btnType: 'primary',
    btnClass: 'email-verify-btn',
    toast: {
      message: '',
      type: '',
      showToast: false
    },
    loginToastClass: 'email-verify-toast',
    backToLogin: 'Back to sign in'
  }),
  methods: {
    handleBtnClick: function() {
      const { showHideToast } = this;
      sendVerificationLink(showHideToast);
    },
    showHideToast: function(status, message, type) {
      this.toast = {
        ...this.toast,
        message,
        type,
        showToast: status
      };
    },
    backToLoginScreen: function() {
      logout();
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.email-verify-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  min-height: calc(100vh - 50px);
  animation: opacityAnimation 0.5s ease;
  h2 {
    font-weight: bold;
    font-size: 32px;
  }
  p {
    font-size: 20px;
  }
  .main-logo {
    display: block;
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    padding: 0 0 10px;
  }
  .email-verify-btn {
    margin: 20px 0;
  }
  .email-verify-toast {
    width: 300px;
    padding: 10px;
    span {
      padding: 0 10px;
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
}
</style>
