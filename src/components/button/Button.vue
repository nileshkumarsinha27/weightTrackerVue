<template>
  <a :href="href" v-if="checkHref()" :class="getClassName('anchor-tag')">
    {{ value }}
  </a>
  <button
    :class="`button ${getClassName(buttonType)}`"
    v-else
    @click="clickHandle"
  >
    {{ value }}
  </button>
</template>
<script>
import cx from 'classnames';
export default {
  name: 'Button',
  props: {
    customClass: {
      type: String,
      default: ''
    },
    handleClick: {
      type: Function,
      deafult: () => {}
    },
    href: {
      type: String,
      deafult: ''
    },
    buttonType: {
      type: String,
      deafult: 'primary'
    },
    value: {
      type: String,
      deafult: ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getClassName: function(type) {
      return cx([type, this.customClass, { disabled: this.isDisabled }]);
    },
    checkHref: function() {
      return this.href && this.href !== '' ? true : false;
    },
    clickHandle: function() {
      this.handleClick();
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/_variables.scss';
.button {
  box-sizing: border-box;
  width: 150px;
  padding: 10px;
  border-radius: 5px;
  color: $white-color;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  &.primary {
    background: $primary-color-variant;
    &:hover {
      background: $primary-color;
    }
  }
  &.secondary {
    background: $secondary-color;
    &:hover {
      background: $secondary-color-variant;
    }
  }
  &.error {
    background: $error-color;
    &:hover {
      background: $white-color;
      color: $error-color;
    }
  }
  &.disabled {
    pointer-events: none;
    background: $grey-color;
    color: $black-color;
  }
}
@media screen and (max-width: 767px) {
  .button {
    border: none;
  }
}
</style>
