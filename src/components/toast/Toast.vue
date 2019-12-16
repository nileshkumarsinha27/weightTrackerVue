<template>
  <div :class="getToastClass()" @animationend="closeToast">
    <span>{{ toastMessage }}</span>
  </div>
</template>
<script>
import cx from 'classnames';
export default {
  name: 'Toast',
  props: {
    toastMessage: {
      type: String,
      default: ''
    },
    closeToast: {
      type: Function,
      default: () => {}
    },
    toastType: {
      type: String,
      default: ''
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    getToastClass: function() {
      return cx(['toast-container', this.toastType, this.customClass]);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.toast-container {
  position: fixed;
  right: 5px;
  top: 60px;
  box-sizing: border-box;
  width: 200px;
  height: 50px;
  background: $primary-color;
  display: flex;
  color: $white-color;
  border-radius: 5px;
  align-items: center;
  font-weight: bold;
  animation: toastAnimation 4s ease;
  &.error {
    background: $error-color;
  }
}
</style>
