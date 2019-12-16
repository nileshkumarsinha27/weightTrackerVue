<template>
  <ProfileViewComponent :user="user" />
</template>
<script>
import { mapGetters } from 'vuex';
import ProfileViewComponent from '@/components/profileComponent/ProfileComponent.vue';
export default {
  name: 'ProfileView',
  components: { ProfileViewComponent },
  computed: {
    ...mapGetters({
      user: 'getUserDetails'
    })
  }
};
</script>
