<template>
  <div class="user-name-container">
    <p>
      <span>{{ getTime() }}</span>
      <span>{{ user.displayName || user.email }}</span>
    </p>
  </div>
</template>
<script>
import CONSTANTS from '@/constants';
export default {
  name: 'UserNameComponent',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    getTime: function() {
      let hrs = new Date().getHours();
      if (hrs < 12) {
        return CONSTANTS.TIME.MORNING;
      } else if (hrs >= 12 && hrs <= 17) {
        return CONSTANTS.TIME.AFTERNOON;
      }
      return CONSTANTS.TIME.EVENING;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/_variables';
.user-name-container {
  margin: 10px 0;
  font-size: 20px;
  p {
    span {
      font-weight: bold;
      padding: 0 5px;
    }
  }
}
</style>
