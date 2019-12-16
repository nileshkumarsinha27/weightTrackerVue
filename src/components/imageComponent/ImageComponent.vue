<template>
  <img
    :src="imageSrc"
    :alt="imageAlt"
    @click="handleClick"
    :class="getClass()"
  />
</template>
<script>
import cx from 'classnames';
export default {
  name: 'ImageComponent',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      default: ''
    },
    handleClick: {
      type: Function,
      default: () => {}
    },
    customClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    getClass: function() {
      return cx(['image-content', this.customClass]);
    }
  }
};
</script>
