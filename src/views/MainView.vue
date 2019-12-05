<template>
  <fragment>
    <Header />
    <NavBar />
    <div class="content-container">
      <router-view />
    </div>
  </fragment>
</template>

<script>
import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/Navbar";
import { getUser } from "@/auth/Auth";
import ACTIONS from "@/actions.constants";
import Store from "@/store";
export default {
  name: "MainView",
  components: { Header, NavBar },
  beforeMount: function() {
    Store.dispatch(ACTIONS.LOGIN.GET_USER_DETAILS, this.getPayload());
  },
  methods: {
    getPayload: function() {
      const user = getUser();
      return {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        emailVerified: user.emailVerified,
        uid: user.uid
      };
    }
  }
};
</script>
