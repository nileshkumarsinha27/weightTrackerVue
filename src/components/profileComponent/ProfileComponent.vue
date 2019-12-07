<template>
  <div class="profile-update-container">
    <h1>{{profileUpdateHeading}}</h1>
  </div>
</template>
<script>
export default {
  name: "ProfileComponent",
  data: () => ({
    profileUpdateHeading: "Profile Details"
  }),
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.profile-update-container {
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 10px 0;
    padding: 0 30px;
  }
}
</style>