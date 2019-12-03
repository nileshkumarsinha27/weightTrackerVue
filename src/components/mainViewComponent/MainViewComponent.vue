<template>
  <div class="main-content-container">
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
      :handleClick="redirectionHandle"
    />
  </div>
</template>
<script>
import CONSTANTS from "@/constants";
import AppLogo from "@/assets/weightTracker.svg";
import ImageComponent from "@/components/imageComponent/ImageComponent";
import Button from "@/components/button/Button";
import Router from "@/router.js";
export default {
  name: "MainViewComponent",
  data: () => ({
    mainViewTitle: CONSTANTS.PAGE_TITLES.MAIN_VIEW,
    mainViewDescription: CONSTANTS.MAIN_VIEW_COMPONENT.DESCRIPTION,
    appIcn: AppLogo,
    appLogoText: CONSTANTS.MAIN_VIEW_COMPONENT.IMAGE_ALT,
    appImageClass: "main-logo",
    btnValue: CONSTANTS.MAIN_VIEW_COMPONENT.BTN_VALUE,
    btnType: "primary",
    btnClass: "main-view-btn"
  }),
  components: { ImageComponent, Button },
  methods: {
    redirectionHandle: function() {
      Router.push(CONSTANTS.ROUTES.RECORD_ENTRY);
    }
  }
};
</script>
<style lang="scss" scoped>
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
}
</style>
