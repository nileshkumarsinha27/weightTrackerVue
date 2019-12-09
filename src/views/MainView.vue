<template>
  <fragment>
    <Header />
    <NavBar />
    <NavBarMobile v-if="showBurger" />
    <div class="content-container">
      <router-view />
    </div>
  </fragment>
</template>

<script>
import Header from "@/components/header/Header";
import NavBar from "@/components/navbar/Navbar";
import NavBarMobile from "@/components/navBarMobile/NavBarMobile";
import { getUser, userData } from "@/auth/Auth";
import ACTIONS from "@/actions.constants";
import Store from "@/store";
import { mapGetters } from "vuex";
export default {
  name: "MainView",
  components: { Header, NavBar, NavBarMobile },
  beforeMount: function() {
    userData(this.getPayload(), this.updateStore);
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
    },
    updateStore: function(data) {
      Store.dispatch(ACTIONS.LOGIN.GET_USER_DETAILS, data);
    }
  },
  computed: {
    ...mapGetters({
      showBurger: "showBurger"
    })
  }
};
</script>
