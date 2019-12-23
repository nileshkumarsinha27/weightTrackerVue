<template>
  <div class="main-content-container">
    <ImageComponent
      :imageSrc="appIcn"
      :alt="appLogoText"
      :customClass="appImageClass"
    />
    <h2>{{ mainViewTitle }}</h2>
    <UserNameComponent :user="user" />
    <p class="main-descirption">{{ mainViewDescription }}</p>
    <Button
      :value="btnValue"
      :buttonType="btnType"
      :customClass="btnClass"
      :handleClick="
        () => {
          redirectionHandle(routes.recoredEntry);
        }
      "
    />
    <p class="bmi-text">
      {{ bmiText }}
      <span
        @click="
          () => {
            redirectionHandle(routes.bmi);
          }
        "
        >{{ redirectText }}</span
      >
    </p>
  </div>
</template>
<script>
import CONSTANTS from '@/constants';
import AppLogo from '@/assets/weightTracker.svg';
import ImageComponent from '@/components/imageComponent/ImageComponent';
import UserNameComponent from '@/components/userNameComponent/UserNameComponent';
import Button from '@/components/button/Button';
import Router from '@/router.js';
import Store from '@/store.js';
import ACTIONS from '@/actions.constants.js';
import { mapGetters } from 'vuex';
export default {
  name: 'MainViewComponent',
  data: () => ({
    mainViewTitle: CONSTANTS.PAGE_TITLES.MAIN_VIEW,
    mainViewDescription: CONSTANTS.MAIN_VIEW_COMPONENT.DESCRIPTION,
    appIcn: AppLogo,
    appLogoText: CONSTANTS.MAIN_VIEW_COMPONENT.IMAGE_ALT,
    appImageClass: 'main-logo',
    btnValue: CONSTANTS.MAIN_VIEW_COMPONENT.BTN_VALUE,
    btnType: 'primary',
    btnClass: 'main-view-btn',
    bmiText: CONSTANTS.MAIN_VIEW_COMPONENT.BMI_TEXT,
    redirectText: 'Click here',
    routes: {
      recoredEntry: CONSTANTS.ROUTES.RECORD_ENTRY,
      bmi: CONSTANTS.ROUTES.BMI_CHECK
    }
  }),
  components: { ImageComponent, Button, UserNameComponent },
  methods: {
    redirectionHandle: function(route) {
      Router.push(route);
      Store.dispatch(ACTIONS.NAVBAR.SET_NAV_ROUTE, route);
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUserDetails'
    })
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/_variables';
.main-content-container {
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
  .main-view-btn {
    margin: 20px 0;
  }
  .main-descirption {
    font-size: 18px;
  }
  .bmi-text {
    font-size: 16px;
    span {
      color: $primary-color-variant;
      text-decoration: underline;
      cursor: pointer;
      font-weight: bold;
      font-size: 14px;
      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
